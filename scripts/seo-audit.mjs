// Crawl dist/ and fail the build on the SEO regressions listed in the Oct 2026 audit.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const reportOnly = process.argv.includes('--report-only');
const DIST = 'dist';
const TITLE_WARN = 60;
const TITLE_FAIL = 70;
const DESC_FAIL = 165;
const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function toPath(file) {
  let rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  if (rel.endsWith('.html')) return `/${rel}`;
  return `/${rel}`;
}

function sectionOf(pathname) {
  if (pathname.includes('/glosario/') || pathname.includes('/glossary/')) return 'glossary';
  if (pathname.includes('/blog/')) return 'blog';
  if (pathname.includes('/noticias/') || pathname.includes('/news/')) return 'news';
  if (pathname.includes('/coleccion/') || pathname.includes('/collection/')) return 'collection';
  return 'other';
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return match ? decodeEntities(match[2] ?? match[3] ?? '') : null;
}

function stripScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
}

const pages = [];
for await (const file of walk(DIST)) {
  if (file.endsWith('.html')) pages.push(file);
}

const byPath = new Map();
const titles = new Map();
const counts = {
  collection: { pages: 0, titleWarn: 0, titleFail: 0, descFail: 0 },
  blog: { pages: 0, titleWarn: 0, titleFail: 0, descFail: 0 },
  news: { pages: 0, titleWarn: 0, titleFail: 0, descFail: 0 },
  glossary: { pages: 0, titleWarn: 0, titleFail: 0, descFail: 0 },
  other: { pages: 0, titleWarn: 0, titleFail: 0, descFail: 0 },
};

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  if (/http-equiv=["']refresh["']/i.test(html)) continue;
  const pathname = toPath(file);
  const section = sectionOf(pathname);
  const noindex = /<meta\s+name=["']robots["'][^>]*noindex/i.test(html);
  const is404 = pathname === '/404' || pathname === '/404.html' || pathname === '/en/404' || pathname === '/en/404.html';
  const indexable = !noindex && !is404;
  if (indexable) counts[section].pages += 1;

  const h1s = html.match(/<h1\b/gi) ?? [];
  if (indexable && h1s.length !== 1) fail(`${pathname} has ${h1s.length} <h1>`);

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch?.[1]?.trim() ?? '';
  if (indexable && !title) fail(`${pathname} missing <title>`);
  if (title.length > TITLE_FAIL) {
    fail(`${pathname} title length ${title.length}`);
    counts[section].titleFail += 1;
  } else if (title.length > TITLE_WARN) {
    warn(`${pathname} title length ${title.length}`);
    counts[section].titleWarn += 1;
  }
  if (indexable && title) {
    const prior = titles.get(title);
    if (prior) fail(`duplicate title "${title}" on ${prior} and ${pathname}`);
    else titles.set(title, pathname);
  }

  const descTag = html.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0] ?? '';
  const description = attr(descTag, 'content') ?? '';
  if (indexable && !description) fail(`${pathname} missing meta description`);
  if (description.length > DESC_FAIL) {
    fail(`${pathname} description length ${description.length}`);
    counts[section].descFail += 1;
  }

  const canonicalTag = html.match(/<link\s+rel=["']canonical["'][^>]*>/i)?.[0] ?? '';
  const canonical = attr(canonicalTag, 'href') ?? '';
  if (indexable && !canonical) fail(`${pathname} missing canonical`);
  if (indexable && canonical) {
    let canonicalPath = '';
    try {
      canonicalPath = new URL(canonical).pathname;
    } catch {
      fail(`${pathname} canonical is not a URL`);
    }
    const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const canonicalNorm = canonicalPath.endsWith('/') ? canonicalPath : `${canonicalPath}/`;
    if (canonicalPath && canonicalNorm !== normalized && canonicalPath !== pathname) {
      fail(`${pathname} canonical points at ${canonicalPath}`);
    }
  }

  const lang = html.match(/<html[^>]*\blang=["']([^"']+)["']/i)?.[1] ?? '';
  const expectLang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
  if (indexable && lang !== expectLang) fail(`${pathname} lang=${lang || 'missing'} expected ${expectLang}`);

  const alternates = [...html.matchAll(/<link\s+[^>]*rel=["']alternate["'][^>]*>/gi)].map((match) => match[0]);
  const hreflang = {};
  for (const tag of alternates) {
    const code = attr(tag, 'hreflang');
    const href = attr(tag, 'href');
    if (code && href) hreflang[code] = href;
  }
  if (indexable) {
    if (!hreflang.es || !hreflang.en || !hreflang['x-default']) fail(`${pathname} missing hreflang es/en/x-default`);
    if (hreflang['x-default'] && hreflang.es && hreflang['x-default'] !== hreflang.es) {
      fail(`${pathname} x-default is not the Spanish URL`);
    }
    byPath.set(pathname, hreflang);
  }

  const jsonBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let hasBlog = false;
  let blogHasCitation = false;
  for (const block of jsonBlocks) {
    try {
      const data = JSON.parse(block[1]);
      const nodes = data['@graph'] ?? [data];
      for (const node of nodes) {
        const type = node['@type'];
        const types = Array.isArray(type) ? type : [type];
        if (types.includes('BlogPosting')) {
          hasBlog = true;
          if (node.citation) blogHasCitation = true;
        }
      }
    } catch {
      fail(`${pathname} JSON-LD failed to parse`);
    }
  }
  const visible = stripScripts(html);
  if (hasBlog && /id=["']primary-sources-heading["']/i.test(html) && !blogHasCitation) {
    fail(`${pathname} BlogPosting has a sources list and no citation`);
  }
  if (/TODO\(owner\)|\{\{|\[object\b|\bundefined\b/.test(visible)) fail(`${pathname} contains placeholder text`);

  for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=/.test(img[0])) fail(`${pathname} has <img> without alt`);
  }
}

for (const [pathname, hreflang] of byPath) {
  for (const code of ['es', 'en']) {
    const href = hreflang[code];
    if (!href) continue;
    let otherPath = '';
    try {
      otherPath = new URL(href).pathname;
    } catch {
      continue;
    }
    const other = byPath.get(otherPath);
    if (!other) {
      fail(`${pathname} hreflang ${code} ${otherPath} is not an indexable page`);
      continue;
    }
    if (other[code] !== href) fail(`${pathname} hreflang ${code} is not reciprocal`);
  }
}

const sitemapFile = join(DIST, 'sitemap.xml');
const sitemap = await readFile(sitemapFile, 'utf8');
const sitemapPaths = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname),
);
for (const pathname of sitemapPaths) {
  const file = pathname === '/' ? join(DIST, 'index.html') : join(DIST, pathname.replace(/^\//, ''), 'index.html');
  const direct = pathname === '/' ? join(DIST, 'index.html') : join(DIST, `${pathname.replace(/^\//, '').replace(/\/$/, '')}.html`);
  let found = false;
  try {
    await readFile(file);
    found = true;
  } catch {
    try {
      await readFile(direct);
      found = true;
    } catch {
      found = false;
    }
  }
  if (!found) fail(`sitemap URL missing from dist: ${pathname}`);
}

for (const file of pages) {
  const pathname = toPath(file).endsWith('/') || toPath(file) === '/' ? toPath(file) : `${toPath(file)}/`;
  const html = await readFile(file, 'utf8');
  const noindex = /<meta\s+name=["']robots["'][^>]*noindex/i.test(html);
  const is404 = /\/404\/?$/.test(pathname) || pathname.endsWith('/404.html');
  if (noindex || is404) continue;
  const key = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (!sitemapPaths.has(key) && !sitemapPaths.has(pathname)) fail(`indexable page missing from sitemap: ${key}`);
}

for (const name of ['llms.txt', 'llms-full.txt']) {
  const text = await readFile(join(DIST, name), 'utf8');
  const links = [...text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((match) => match[1]);
  if (name === 'llms.txt' && (links.length < 40 || links.length > 90)) {
    warn(`${name} has ${links.length} links (target 40–70)`);
  }
  for (const url of links) {
    const path = new URL(url).pathname;
    if (path.endsWith('.xml') || path.endsWith('.txt') || path.endsWith('.json')) {
      const staticFile = join(DIST, path.replace(/^\//, ''));
      try {
        await readFile(staticFile);
      } catch {
        fail(`${name} link missing from dist: ${path}`);
      }
      continue;
    }
    const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path.replace(/^\//, ''), 'index.html');
    try {
      await readFile(file);
    } catch {
      fail(`${name} link missing from dist: ${path}`);
    }
  }
}

console.log('\nSEO audit summary');
console.log('section      pages  titles>60  titles>70  descriptions>165');
for (const name of ['collection', 'blog', 'news', 'glossary', 'other']) {
  const row = counts[name];
  console.log(
    `${name.padEnd(12)} ${String(row.pages).padStart(5)}  ${String(row.titleWarn).padStart(9)}  ${String(row.titleFail).padStart(9)}  ${String(row.descFail).padStart(16)}`,
  );
}
console.log(`warnings ${warnings.length}`);
for (const message of warnings.slice(0, 30)) console.log(`  warn ${message}`);
if (warnings.length > 30) console.log(`  … ${warnings.length - 30} more warnings`);
console.log(`failures ${failures.length}`);
for (const message of failures.slice(0, 40)) console.log(`  fail ${message}`);
if (failures.length > 40) console.log(`  … ${failures.length - 40} more failures`);

if (failures.length && !reportOnly) process.exit(1);
if (reportOnly) console.log('report-only: exit 0');
