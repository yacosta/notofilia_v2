import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from './locale-paths.ts';

const articles = JSON.parse(readFileSync(new URL('../data/blog-articles.json', import.meta.url), 'utf8'));
const seoSource = readFileSync(new URL('./seo.ts', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

describe('robots.txt AI and search crawlers', () => {
  it('allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, and Bingbot', () => {
    for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot', 'Bingbot']) {
      assert.match(robots, new RegExp(`User-agent: ${bot}\\s+Allow: /`, 'm'));
    }
    assert.doesNotMatch(robots, /Disallow: \//);
  });
});

describe('llms.txt and grading-guide SEO copy', () => {
  it('keeps the grading guide first and lists glossary, guides, and country catalogues', () => {
    assert.equal(articles[0].slug, 'mejores-empresas-certificacion-monedas-billetes');
    assert.match(seoSource, /## Glossary \/ Glosario/);
    assert.match(seoSource, /## Guides \/ Guías/);
    assert.match(seoSource, /## Country catalogues \/ Catálogos por país/);
    assert.match(seoSource, /## News \/ Noticias/);
    assert.match(seoSource, /llmsCountryCatalogues/);
    assert.match(seoSource, /blogArticles/);
    assert.match(seoSource, /newsArticles/);
    assert.match(seoSource, /footerLinksFromNav/);
    assert.match(seoSource, /megaNav/);
    assert.match(seoSource, /colección privada y catálogo bilingüe/);
    assert.match(articles[0].seoTitle.es, /PMG, PCGS y NGC/);
    assert.match(articles[0].seoTitle.en, /PMG, PCGS, and NGC/);
  });

  it('maps the grading-guide href pair used in llms.txt and the sitemap', () => {
    assert.equal(
      localizePath(articles[0].href, 'en'),
      '/en/blog/best-coin-and-banknote-grading-companies/',
    );
  });
});
