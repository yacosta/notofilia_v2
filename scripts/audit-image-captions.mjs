/**
 * R1 / R2 checks over a built `dist/`.
 * Fails when a figure's img alt repeats its figcaption, or a catalog scan
 * repeats "Se inicia una descarga" / "A download will start".
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] ?? 'dist';
const failures = [];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (name.endsWith('.html')) out.push(path);
  }
  return out;
}

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function figureBlocks(html) {
  return html.match(/<figure\b[\s\S]*?<\/figure>/g) ?? [];
}

const pages = walk(root);
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const figure of figureBlocks(html)) {
    const captionMatch = figure.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/);
    if (!captionMatch) continue;
    const caption = decode(captionMatch[1]);
    const alts = [...figure.matchAll(/<img\b[^>]*\balt="([^"]*)"/g)].map((match) => decode(match[1]));
    for (const alt of alts) {
      if (alt && alt === caption) {
        failures.push(`${page}: alt repeats figcaption (${alt.slice(0, 80)})`);
      }
    }
    if (!figure.includes('note-lightbox')) continue;
    const statusCount =
      (figure.split('Se inicia una descarga').length - 1) + (figure.split('A download will start').length - 1);
    if (statusCount !== 1) {
      failures.push(`${page}: download status sentence appears ${statusCount} times in one figure`);
    }
    const triggerAlts = [...figure.matchAll(/<button\b[^>]*data-note-lightbox-open[\s\S]*?<img\b[^>]*\balt="([^"]*)"/g)].map(
      (match) => decode(match[1]),
    );
    const dialogTitles = [...figure.matchAll(/<p\b[^>]*\bid="[^"]*-title"[^>]*>([\s\S]*?)<\/p>/g)].map((match) =>
      decode(match[1]),
    );
    for (const alt of triggerAlts) {
      if (alt.length > 80) failures.push(`${page}: scan alt is ${alt.length} characters (${alt})`);
      if (!alt) failures.push(`${page}: catalog scan is missing a short alt`);
      if (alt === caption) failures.push(`${page}: scan alt still matches the figcaption`);
    }
    for (const title of dialogTitles) {
      if (!triggerAlts.includes(title)) {
        failures.push(`${page}: lightbox title does not reuse the short alt (${title.slice(0, 80)})`);
      }
      if (title === caption) failures.push(`${page}: lightbox title repeats the figcaption`);
    }
  }

  const downloadNames = [...html.matchAll(/<a\b[^>]*\bdownload="[^"]*"[^>]*>([\s\S]*?)<\/a>/g)].map((match) =>
    decode(match[1]),
  );
  const seen = new Set();
  for (const name of downloadNames) {
    if (seen.has(name)) failures.push(`${page}: duplicate download name (${name.slice(0, 90)})`);
    seen.add(name);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`\n${failures.length} image-caption checks failed.`);
  process.exit(1);
}

console.log(`Image caption checks passed (${pages.length} HTML files).`);
