/**
 * Writes src/data/sitemap-lastmod.json from a full git history.
 * A depth-1 CI checkout must keep this file: it must not recompute lastmod from HEAD.
 * Content dates in publish-manifest still win at sitemap build time.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { createServer } from 'vite';

const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
  cwd: process.cwd(),
  encoding: 'utf8',
}).trim();

if (shallow === 'true') {
  console.log('Shallow checkout: leaving src/data/sitemap-lastmod.json unchanged.');
  process.exit(0);
}

const dirty = new Set();
const status = execFileSync('git', ['status', '--porcelain'], { cwd: process.cwd(), encoding: 'utf8' });
for (const line of status.split('\n')) {
  if (!line.trim()) continue;
  let file = line.slice(3).trim();
  if (file.includes(' -> ')) file = file.split(' -> ').at(-1).trim();
  dirty.add(file);
}

const today = new Date().toISOString().slice(0, 10);
const vite = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const manifest = await vite.ssrLoadModule('/src/lib/publish-manifest.ts');
  const dates = await vite.ssrLoadModule('/src/lib/sitemap-dates.ts');
  const xml = manifest.sitemapXml();
  const map = {};
  const re = /<loc>https:\/\/notofilia\.com([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
  for (const match of xml.matchAll(re)) {
    const loc = match[1];
    let date = match[2];
    const files = dates.sitemapPageFiles(loc);
    if (files.some((file) => dirty.has(file)) && date < today) date = today;
    map[loc] = date;
  }
  const ordered = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync('src/data/sitemap-lastmod.json', `${JSON.stringify(ordered, null, 2)}\n`);
  console.log(`Wrote ${Object.keys(ordered).length} lastmod dates to src/data/sitemap-lastmod.json`);
} finally {
  await vite.close();
}
