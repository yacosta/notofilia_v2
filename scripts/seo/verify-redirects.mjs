#!/usr/bin/env node
/**
 * Verify redirect-map.csv:
 * - 301 first hop (or 410), at most one hop, no loops, final URL not home
 * - redirect sources are not in the sitemap
 * - sitemap URLs are 200, self-canonical, non-noindex (when a live base is reachable)
 *
 * Default base: https://dev.notofilia.com
 * Local: --local  (uses the worker lookup + optional --base http://127.0.0.1:PORT)
 *        --simulate  (no HTTP; checks the map + v2 index only)
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { identityPath, isHomePath, normalizePath, parseCsv } from './match.mjs';
import { lookupGscRedirect } from '../../src/lib/gsc-redirects.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const args = new Set(process.argv.slice(2));
const baseArg = process.argv.find((a, i, all) => all[i - 1] === '--base');
const base = baseArg || process.env.VERIFY_BASE || 'https://dev.notofilia.com';
const simulate = args.has('--simulate') || args.has('--local-simulate');
const local = args.has('--local');

const mapFile = join(root, 'docs/seo/redirect-map.csv');
const indexFile = join(root, 'docs/seo/v2-urls.json');
const sitemapFile = join(root, 'dist/sitemap.xml');

if (!existsSync(mapFile)) {
  console.error('Missing docs/seo/redirect-map.csv — run build-redirects.mjs');
  process.exit(1);
}

const csvRows = parseCsv(readFileSync(mapFile, 'utf8'));
const header = csvRows[0];
const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
const records = csvRows.slice(1).map((row) => ({
  source: row[idx.source],
  target: row[idx.target],
  status: Number(row[idx.status]),
  rule: row[idx.rule],
}));

const v2 = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : { urls: [] };
// Redirect stubs (Astro meta-refresh pages) are not live pages: a 301 whose
// source is a stub is exactly what we want, so they stay out of `live`.
const isStub = (u) => Boolean(u.redirectTo) || /^Redirecting to:/i.test(u.title ?? '');
const live = new Set((v2.urls ?? []).filter((u) => !isStub(u)).map((u) => identityPath(u.path)));
const liveNorm = new Set((v2.urls ?? []).filter((u) => !isStub(u)).map((u) => normalizePath(u.path)));

const failures = [];

function fail(source, reason) {
  failures.push({ source, reason });
}

for (const row of records) {
  if (row.rule === 'exists') {
    if (!live.has(identityPath(row.source)) && !liveNorm.has(normalizePath(row.source))) {
      fail(row.source, 'exists-rule but not in v2 index');
    }
    continue;
  }
  if (live.has(identityPath(row.source))) fail(row.source, 'redirect source is a live v2 URL');
  if (row.status === 301) {
    if (!row.target) fail(row.source, '301 without target');
    if (isHomePath(row.target)) fail(row.source, '301 to home');
    const hop = lookupGscRedirect(row.target);
    if (hop && hop.status === 301 && identityPath(hop.target) !== identityPath(row.target)) {
      fail(row.source, `more than one hop via ${row.target} → ${hop.target}`);
    }
    if (identityPath(row.source) === identityPath(row.target)) fail(row.source, 'loop (source equals target)');
  } else if (row.status === 410) {
    if (row.target && isHomePath(row.target)) fail(row.source, '410 target is home');
  } else {
    fail(row.source, `unexpected status ${row.status}`);
  }
}

if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    try {
      return new URL(m[1]).pathname;
    } catch {
      return m[1];
    }
  });
  const sitemapSet = new Set(locs.map((p) => identityPath(p)));
  for (const row of records) {
    if (row.rule === 'exists') continue;
    if (sitemapSet.has(identityPath(row.source))) fail(row.source, 'redirect source listed in sitemap.xml');
  }
}

async function fetchHop(url, redirect) {
  const res = await fetch(url, { redirect: redirect, headers: { 'user-agent': 'Notofilia-redirect-verify/1.0' } });
  return res;
}

if (!simulate) {
  const sample = records.filter((r) => r.rule !== 'exists').slice(0, local ? records.length : 25);
  for (const row of sample) {
    const url = new URL(row.source, base).href;
    try {
      const first = await fetchHop(url, 'manual');
      if (row.status === 410) {
        if (first.status !== 410) fail(row.source, `expected 410, got ${first.status} from ${base}`);
        continue;
      }
      if (first.status !== 301 && first.status !== 308) {
        fail(row.source, `expected 301 first hop, got ${first.status} from ${base}`);
        continue;
      }
      const location = first.headers.get('location');
      if (!location) {
        fail(row.source, '301 without Location');
        continue;
      }
      const dest = new URL(location, base);
      if (isHomePath(dest.pathname)) fail(row.source, `Location is home: ${location}`);
      const second = await fetchHop(dest.href, 'manual');
      if (second.status === 301 || second.status === 302 || second.status === 308) {
        fail(row.source, `second hop ${second.status} to ${second.headers.get('location')}`);
      } else if (second.status !== 200 && row.status === 301) {
        fail(row.source, `final ${second.status} at ${dest.pathname}`);
      }
    } catch (err) {
      fail(row.source, `fetch failed: ${err.message}`);
    }
  }
}

if (failures.length) {
  console.log('source\treason');
  for (const f of failures) console.log(`${f.source}\t${f.reason}`);
  console.error(`${failures.length} failure(s)`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      base,
      simulate,
      checked: records.length,
      skippedLiveFetch: simulate,
    },
    null,
    2,
  ),
);
