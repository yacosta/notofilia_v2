import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');

let fileDates: Map<string, string> | undefined;
let shallow: boolean | undefined;
let snapshot: Record<string, string> | undefined;

function repoIsShallow(): boolean {
  if (shallow !== undefined) return shallow;
  try {
    shallow =
      execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
        cwd: root,
        encoding: 'utf8',
      }).trim() === 'true';
  } catch {
    shallow = true;
  }
  return shallow;
}

/** Last commit date per path. A one-commit clone must not stamp every file with HEAD. */
function loadFileDates(): Map<string, string> {
  if (fileDates) return fileDates;
  fileDates = new Map();
  if (repoIsShallow()) return fileDates;
  try {
    const log = execFileSync('git', ['log', '--format=COMMIT %cs', '--name-only'], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 80 * 1024 * 1024,
    });
    let date = '';
    for (const line of log.split('\n')) {
      if (line.startsWith('COMMIT ')) date = line.slice(7).trim();
      else if (line && date && !fileDates.has(line)) fileDates.set(line, date);
    }
  } catch {
    fileDates.clear();
  }
  return fileDates;
}

function loadSnapshot(): Record<string, string> {
  if (snapshot) return snapshot;
  const file = join(root, 'src/data/sitemap-lastmod.json');
  if (!existsSync(file)) {
    snapshot = {};
    return snapshot;
  }
  snapshot = JSON.parse(readFileSync(file, 'utf8')) as Record<string, string>;
  return snapshot;
}

export function sitemapPageFiles(loc: string): string[] {
  return pageFiles(loc);
}

function pageFiles(loc: string): string[] {
  const rel = loc.replace(/^\/+|\/+$/g, '');
  const candidates = rel
    ? [`src/pages/${rel}/index.astro`, `src/pages/${rel}.astro`]
    : ['src/pages/index.astro'];
  if (rel.includes('/')) {
    const parent = rel.split('/').slice(0, -1).join('/');
    candidates.push(
      `src/pages/${parent}/[slug].astro`,
      `src/pages/${parent}/[era].astro`,
      `src/pages/${parent}/[term].astro`,
      `src/pages/${parent}/index.astro`,
    );
  }
  return [...new Set(candidates)].filter((file) => existsSync(join(root, file)));
}

/**
 * Last content change for a URL: newest git date of the page file (and its pair),
 * else the committed snapshot. Never the build clock.
 */
export function sourceLastmod(loc: string, pair?: string): string | undefined {
  const files = [...pageFiles(loc), ...(pair && pair !== loc ? pageFiles(pair) : [])];
  const dates = files
    .map((file) => loadFileDates().get(file))
    .filter((date): date is string => Boolean(date));
  if (dates.length) return dates.sort().at(-1);
  const saved = loadSnapshot();
  return saved[loc] || (pair ? saved[pair] : undefined);
}

export function fallbackLastmod(): string {
  return (
    loadFileDates().get('src/layouts/Layout.astro') ||
    loadSnapshot()['/'] ||
    '2026-10-01'
  );
}
