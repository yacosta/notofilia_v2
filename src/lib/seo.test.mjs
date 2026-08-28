import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from './locale-paths.ts';

const articles = JSON.parse(readFileSync(new URL('../data/blog-articles.json', import.meta.url), 'utf8'));
const seoSource = readFileSync(new URL('./seo.ts', import.meta.url), 'utf8');

describe('llms.txt and grading-guide SEO copy', () => {
  it('keeps the grading guide first and lists blog articles in llmsTxt()', () => {
    assert.equal(articles[0].slug, 'mejores-empresas-certificacion-monedas-billetes');
    assert.match(seoSource, /## Guides \/ Guías/);
    assert.match(seoSource, /blogArticles/);
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

describe('catalog artwork schema', () => {
  it('credits ImageObject on VisualArtwork and never emits Product', () => {
    assert.match(seoSource, /@type': 'VisualArtwork'/);
    assert.match(seoSource, /@type': 'ImageObject'/);
    assert.match(seoSource, /creditText/);
    assert.doesNotMatch(seoSource, /Product|Offer/);
    const jsonLd = readFileSync(new URL('./json-ld.ts', import.meta.url), 'utf8');
    assert.match(jsonLd, /ImageObject/);
    assert.match(jsonLd, /creditText/);
    assert.doesNotMatch(jsonLd, /'@type': 'Product'/);
  });
});
