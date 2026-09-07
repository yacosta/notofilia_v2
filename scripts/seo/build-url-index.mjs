#!/usr/bin/env node
/**
 * Walk dist/ (after `astro build`) and emit docs/seo/v2-urls.json.
 * Falls back to the sitemap path list + src/pages when dist is missing.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { classifyType, languageOf, lastSlug, normalizePath } from './match.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const dist = join(root, 'dist');
const outDir = join(root, 'docs/seo');
const outFile = join(outDir, 'v2-urls.json');

async function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function fileToPath(file) {
  let rel = relative(dist, file).split(sep).join('/');
  if (rel === '404.html' || rel === 'en/404.html') return null;
  if (rel.endsWith('/404.html')) return null;
  if (!rel.endsWith('.html')) return null;
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel.replace(/\.html$/, '/')}`;
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function titleFromHtml(html) {
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return stripTags(h1[1]);
  const t = html.match(/<title>([\s\S]*?)<\/title>/i);
  return t ? stripTags(t[1]).replace(/\s*·\s*Notofilia\s*$/i, '') : '';
}

/** Astro static redirect stubs: `<meta http-equiv="refresh" content="0;url=/x/">`. */
function redirectFromHtml(html) {
  const m = html.match(/<meta\s+http-equiv=["']refresh["']\s+content=["']\d+;\s*url=([^"']+)["']/i);
  if (!m) return '';
  try {
    return new URL(m[1], 'https://notofilia.com').pathname || '';
  } catch {
    return '';
  }
}

function alternateFromHtml(html, lang) {
  const want = lang === 'en' ? 'es' : 'en';
  const re = new RegExp(`<link\\s+rel=["']alternate["']\\s+hreflang=["']${want}["']\\s+href=["']([^"']+)["']`, 'i');
  const m = html.match(re);
  if (!m) return '';
  try {
    const u = new URL(m[1], 'https://notofilia.com');
    return u.pathname || '';
  } catch {
    return '';
  }
}

async function fromDist() {
  const rows = [];
  for await (const file of walk(dist)) {
    const path = fileToPath(file);
    if (!path) continue;
    if (path.includes('/cdn-cgi/')) continue;
    const html = readFileSync(file, 'utf8');
    const lang = languageOf(path);
    rows.push({
      path,
      lang,
      type: classifyType(path),
      lastSlug: lastSlug(path),
      title: titleFromHtml(html),
      alternate: alternateFromHtml(html, lang),
      redirectTo: redirectFromHtml(html),
    });
  }
  return rows;
}

async function fromSrcPages() {
  const pages = join(root, 'src/pages');
  const paths = [];
  for await (const file of walk(pages)) {
    if (!file.endsWith('.astro')) continue;
    if (file.endsWith('404.astro')) continue;
    if (file.includes('[')) continue;
    const rel = relative(pages, file).split(sep).join('/');
    if (rel === 'index.astro') paths.push('/');
    else if (rel.endsWith('/index.astro')) paths.push(`/${rel.slice(0, -'index.astro'.length)}`);
    else if (rel.endsWith('.astro')) paths.push(`/${rel.slice(0, -'.astro'.length)}/`);
  }
  const { glossaryTerms } = await import(pathToFileURL(join(root, 'src/data/glossary.ts')).href);
  for (const term of glossaryTerms) {
    paths.push(`/glosario/${term.slug}/`, `/en/glossary/${term.slug}/`);
  }
  const blog = JSON.parse(readFileSync(join(root, 'src/data/blog-articles.json'), 'utf8'));
  const news = JSON.parse(readFileSync(join(root, 'src/data/news-articles.json'), 'utf8'));
  const { otherLocalePath } = await import(pathToFileURL(join(root, 'src/lib/locale-paths.ts')).href);
  for (const article of blog) {
    const es = article.href.endsWith('/') ? article.href : `${article.href}/`;
    paths.push(es, otherLocalePath(es, 'es'));
  }
  for (const article of news) {
    const es = article.href.endsWith('/') ? article.href : `${article.href}/`;
    paths.push(es, otherLocalePath(es, 'es'));
  }
  return [...new Set(paths)].map((path) => {
    const lang = languageOf(path);
    return {
      path,
      lang,
      type: classifyType(path),
      lastSlug: lastSlug(path),
      title: lastSlug(path) || (path === '/' || path === '/en/' ? 'Notofilia' : ''),
      alternate: otherLocalePath(path, lang),
      redirectTo: '',
    };
  });
}

const rows = existsSync(join(dist, 'index.html')) ? await fromDist() : await fromSrcPages();
const seen = new Set();
const unique = [];
for (const row of rows) {
  const key = `${row.lang}:${normalizePath(row.path)}`;
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(row);
}
unique.sort((a, b) => a.path.localeCompare(b.path));

mkdirSync(outDir, { recursive: true });
writeFileSync(
  outFile,
  `${JSON.stringify({ generatedFrom: existsSync(join(dist, 'index.html')) ? 'dist' : 'src/pages', count: unique.length, urls: unique }, null, 2)}\n`,
);
console.log(`Wrote ${unique.length} URLs to ${relative(root, outFile)} (${existsSync(join(dist, 'index.html')) ? 'dist' : 'src/pages fallback'})`);
