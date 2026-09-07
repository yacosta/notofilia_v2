#!/usr/bin/env node
/**
 * Read a GSC 404 CSV (or the seed list), match each URL to v2, emit:
 * - docs/seo/redirect-map.csv
 * - docs/seo/gsc-redirects.json (worker lookup)
 * - public/_redirects (301 only; 410 is worker-only)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  csvEscape,
  identityPath,
  isHomePath,
  isStub,
  matchUrl,
  normalizePath,
  parseCsv,
  parseGscUrl,
  urlColumnIndex,
} from './match.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const seoDir = join(root, 'docs/seo');
const gscCsv = join(seoDir, 'gsc-404-2026-09.csv');
const seedCsv = join(seoDir, 'gsc-404-seed.csv');
const indexFile = join(seoDir, 'v2-urls.json');
const categoryFile = join(seoDir, 'category-map.json');
const overridesFile = join(seoDir, 'manual-overrides.json');
const mapCsv = join(seoDir, 'redirect-map.csv');
const workerJson = join(root, 'src/data/gsc-redirects.json');
const publicRedirects = join(root, 'public/_redirects');

const usedSeed = !existsSync(gscCsv);
const csvPath = usedSeed ? seedCsv : gscCsv;
if (!existsSync(csvPath)) {
  console.error(`Missing ${relative(root, csvPath)}`);
  process.exit(1);
}
if (!existsSync(indexFile)) {
  console.error('Missing docs/seo/v2-urls.json — run: node --experimental-strip-types scripts/seo/build-url-index.mjs');
  process.exit(1);
}

const index = JSON.parse(readFileSync(indexFile, 'utf8'));
const urls = index.urls ?? index;
const categoryMap = JSON.parse(readFileSync(categoryFile, 'utf8'));
const liveByNorm = new Map(urls.map((u) => [normalizePath(u.path), u]));

/** Hand-reviewed source → target pairs. Targets must be live, non-stub v2 pages. */
const overrides = new Map();
if (existsSync(overridesFile)) {
  const raw = JSON.parse(readFileSync(overridesFile, 'utf8')).redirects ?? {};
  for (const [from, to] of Object.entries(raw)) {
    const row = liveByNorm.get(normalizePath(to));
    if (!row) {
      console.error(`manual-overrides.json: target ${to} (for ${from}) is not a live v2 URL`);
      process.exit(1);
    }
    if (isStub(row)) {
      console.error(`manual-overrides.json: target ${to} (for ${from}) is a redirect stub → ${row.redirectTo}`);
      process.exit(1);
    }
    if (isHomePath(to)) continue;
    overrides.set(normalizePath(from), to.endsWith('/') ? to : `${to}/`);
  }
}

/** Continent hubs that PATH_PREFIX_PAIRS localize, but no page is published. */
const MISSING_POLYMER_CONTINENTS = new Set(
  [
    '/coleccion/polimero-mundial/asia/',
    '/coleccion/polimero-mundial/europa/',
    '/coleccion/polimero-mundial/america-del-norte/',
    '/en/collection/world-polymer/asia/',
    '/en/collection/world-polymer/europe/',
    '/en/collection/world-polymer/north-america/',
  ].map((p) => identityPath(p)),
);

function loadCsvUrls(file) {
  const rows = parseCsv(readFileSync(file, 'utf8'));
  if (!rows.length) return [];
  const start = /url|page|address/i.test(rows[0][0]) || rows[0].length > 1 ? 0 : 0;
  const header = rows[start];
  const col = urlColumnIndex(header);
  const body = rows[0].some((h) => /url|page|address/i.test(h)) ? rows.slice(1) : rows;
  const out = [];
  for (const row of body) {
    const parsed = parseGscUrl(row[col] ?? row[0]);
    if (parsed) out.push(parsed);
  }
  return out;
}

function existingRedirectsFromAstro() {
  const src = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
  const map = new Map();
  const re = /['"](\/[^'"]+)['"]\s*:\s*['"](\/[^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src))) {
    const from = m[1];
    const to = m[2];
    if (from.includes('*') || from.includes(':')) continue;
    if (isHomePath(to)) continue;
    map.set(from, to);
  }
  return map;
}

const { englishRedirects } = await import(pathToFileURL(join(root, 'src/lib/locale-paths.ts')).href);
const { CONTACT_LEGACY_REDIRECTS } = await import(pathToFileURL(join(root, 'src/data/contact.ts')).href);

const existing = existingRedirectsFromAstro();
for (const [from, to] of Object.entries(englishRedirects())) {
  if (!isHomePath(to)) existing.set(from, to);
}
for (const [from, to] of Object.entries(CONTACT_LEGACY_REDIRECTS)) {
  existing.set(from, to);
}

const parsed = loadCsvUrls(csvPath);
const byNorm = new Map();
for (const item of parsed) {
  const key = normalizePath(item.originalPath);
  if (!byNorm.has(key)) byNorm.set(key, item);
}

for (const from of existing.keys()) {
  const key = normalizePath(from);
  if (!byNorm.has(key)) {
    byNorm.set(key, { original: from, originalPath: from, host: 'notofilia.com' });
  }
}

const rows = [];
for (const item of byNorm.values()) {
  const source = item.originalPath.startsWith('/') ? item.originalPath : `/${item.originalPath}`;
  const configured = existing.get(source) ?? existing.get(source.replace(/\/+$/, '') || '/') ?? existing.get(`${source.replace(/\/+$/, '')}/`);
  let result;
  const manual = overrides.get(normalizePath(source));
  if (manual) {
    result = { status: 301, target: manual, rule: 'manual', confidence: 'high' };
  } else if (configured && !isHomePath(configured)) {
    const target = configured.endsWith('/') || configured === '/' ? configured : `${configured}/`;
    if (MISSING_POLYMER_CONTINENTS.has(identityPath(target))) {
      result = matchUrl(source, urls, categoryMap);
    } else {
      result = { status: 301, target, rule: 'existing', confidence: 'high' };
    }
  } else {
    result = matchUrl(source, urls, categoryMap);
  }
  if (result.status === 301 && isHomePath(result.target)) {
    result = { status: 410, target: '', rule: 'gone', confidence: 'high' };
  }
  rows.push({
    source,
    target: result.target,
    status: result.status,
    rule: result.rule,
    confidence: result.confidence,
  });
}

rows.sort((a, b) => a.source.localeCompare(b.source));

const counts = {};
for (const row of rows) {
  counts[row.rule] = (counts[row.rule] ?? 0) + 1;
}
const actionable = rows.filter((r) => r.rule !== 'exists');
const fuzzyOrHub = actionable.filter((r) => r.rule === 'fuzzy' || r.rule === 'hub-fallback').length;
const pct = actionable.length ? (100 * fuzzyOrHub) / actionable.length : 0;

mkdirSync(seoDir, { recursive: true });
const header = 'source,target,status,rule,confidence';
writeFileSync(
  mapCsv,
  `${header}\n${rows.map((r) => [r.source, r.target, r.status, r.rule, r.confidence].map(csvEscape).join(',')).join('\n')}\n`,
);

const lookup = {};
function addLookup(path, entry) {
  lookup[path] = entry;
  const trimmed = path.replace(/\/+$/, '') || '/';
  if (trimmed !== path) lookup[trimmed] = entry;
  if (!path.endsWith('/') && path !== '/') lookup[`${path}/`] = entry;
}

for (const row of rows) {
  if (row.rule === 'exists') continue;
  const entry = { target: row.target, status: row.status, rule: row.rule };
  addLookup(row.source, entry);
}

writeFileSync(workerJson, `${JSON.stringify({ usedSeed, csv: relative(root, csvPath), counts, fuzzyOrHubPercent: Number(pct.toFixed(2)), redirects: lookup }, null, 2)}\n`);

const staticLines = [];
staticLines.push('# Generated by scripts/seo/build-redirects.mjs — do not hand-edit.');
staticLines.push('# 410 Gone is applied in src/worker.ts (Workers _redirects only allows 301/302/303/307/308).');
staticLines.push('# run_worker_first: true, so the worker lookup is the mechanism that actually 301s/410s.');
staticLines.push('# Safe Dreamweaver suffix: only when the stripped path is a live v2 URL (handled in worker).');
staticLines.push('# Do not catch-all to /. Do not duplicate www→apex (Cloudflare SSL/apex).');

const static301 = rows.filter((r) => r.status === 301 && r.rule !== 'exists');
if (static301.length > 2000) {
  console.warn(`WARNING: ${static301.length} static 301s exceed Cloudflare _redirects limit of 2000. Worker JSON still has the full map.`);
}
for (const row of static301.slice(0, 2000)) {
  staticLines.push(`${row.source} ${row.target} 301`);
}
writeFileSync(publicRedirects, `${staticLines.join('\n')}\n`);

const summary = {
  csv: relative(root, csvPath),
  usedSeed,
  total: rows.length,
  counts,
  fuzzyOrHubPercent: Number(pct.toFixed(2)),
  reviewRequired: pct > 10,
};
writeFileSync(join(seoDir, 'redirect-summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
console.log(JSON.stringify(summary, null, 2));
if (pct > 10) {
  console.warn(`More than 10% of actionable rows are fuzzy or hub-fallback (${pct.toFixed(1)}%). Human review required before merge.`);
}
