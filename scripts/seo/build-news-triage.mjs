// Build docs/seo/news-triage-2026-10.csv from news article data.
// Recommendations are mechanical, not an instruction to delete or noindex.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const articles = JSON.parse(readFileSync(join(root, 'src/data/news-articles.json'), 'utf8'));

function strip(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function domain(url) {
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function country(article) {
  const blob = `${article.slug} ${(article.keywords?.es ?? []).join(' ')} ${(article.keywords?.en ?? []).join(' ')} ${article.title.es}`.toLowerCase();
  if (/colombia|colombian|banrep|banco de la rep/.test(blob)) return 'CO';
  if (/estados unidos|united states|ee\.?\s?uu|eeuu|d[oó]lar|dollar|federal reserve|morgan|silver eagle/.test(blob)) return 'US';
  if (/m[eé]xico|mexican/.test(blob)) return 'MX';
  if (/chile|chileno/.test(blob)) return 'CL';
  if (/españa|espana|\bspain\b|euro/.test(blob)) return 'ES';
  return '';
}

function catalogLinks(html) {
  return (html.match(/href="\/(?:en\/)?coleccion\/|href="\/en\/collection\//g) ?? []).length;
}

function recommendation(article, topic, links) {
  const text = `${article.title.es} ${strip(article.bodyHtml.es)}`.toLowerCase();
  const priceListing = /precio|asking|se ofrece|a la venta|subasta|hammer|cotiza/.test(text);
  if (links > 0 || topic === 'CO' || topic === 'US') return 'keep';
  if ((topic === 'MX' || topic === 'CL' || topic === 'ES') && priceListing) return 'merge-into-digest';
  if (priceListing && topic === '') return 'merge-into-digest';
  return 'add-analysis';
}

const header = [
  'es_url',
  'en_url',
  'published',
  'topic_country',
  'catalog_link_count',
  'word_count',
  'source_domain',
  'recommendation',
];

const rows = articles.map((article) => {
  const topic = country(article);
  const links = catalogLinks(article.bodyHtml.es) + catalogLinks(article.bodyHtml.en);
  const words = strip(article.bodyHtml.es).split(/\s+/).filter(Boolean).length;
  const rec = recommendation(article, topic, links);
  const es = `https://notofilia.com/noticias/${article.slug}/`;
  const en = `https://notofilia.com/en/news/${article.slugEn || article.slug}/`;
  return [es, en, article.published, topic, String(links), String(words), domain(article.sourceUrl), rec];
});

const rank = { 'merge-into-digest': 0, 'add-analysis': 1, keep: 2 };
rows.sort((a, b) => rank[a[7]] - rank[b[7]] || a[2].localeCompare(b[2]));

function csvCell(value) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

const body = [header.join(','), ...rows.map((row) => row.map(csvCell).join(','))].join('\n') + '\n';
const out = join(root, 'docs/seo/news-triage-2026-10.csv');
writeFileSync(out, body);
const counts = rows.reduce((acc, row) => {
  acc[row[7]] = (acc[row[7]] ?? 0) + 1;
  return acc;
}, {});
console.log(`[news-triage] ${rows.length} rows`, counts);
