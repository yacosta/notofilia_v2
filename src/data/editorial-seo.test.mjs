import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { NEWS_PAGE_SIZE, findBlogArticle, newsPageCount, relatedForArticle } from './editorial.ts';
import { newsArticles } from './editorial.ts';

describe('editorial SEO helpers', () => {
  it('paginates news at 88 entries and keeps a single page today', () => {
    assert.equal(NEWS_PAGE_SIZE, 88);
    assert.ok(newsArticles.length <= NEWS_PAGE_SIZE);
    assert.equal(newsPageCount(), 1);
  });

  it('adds a glossary related link when a news article has no catalogue or glossary href', () => {
    const bare = {
      ...newsArticles[0],
      bodyHtml: { es: '<p>Nota de prensa.</p>', en: '<p>Press note.</p>' },
      related: [],
    };
    const related = relatedForArticle(bare, 'news');
    assert.equal(related.some((item) => item.href.startsWith('/glosario/')), true);
  });

  it('publishes the Colombian valuation guide without a price list', () => {
    const article = findBlogArticle('como-se-valora-un-billete-colombiano');
    assert.ok(article);
    assert.match(article.bodyHtml.es, /no publica listas de precios/);
    assert.doesNotMatch(article.bodyHtml.es, /\$\d{2,}/);
    assert.match(article.bodyHtml.es, /\/glosario\/pmg-pcgs\//);
    assert.match(article.bodyHtml.es, /\/glosario\/pick\//);
    assert.match(article.bodyHtml.es, /\/coleccion\/colombia\/2000-pesos-2008\//);
    assert.equal(article.slugEn, 'how-colombian-banknotes-are-valued');
  });
});

describe('new bilingual demand pages', () => {
  it('keeps editorial policy and counterfeit how-to files', () => {
    assert.equal(existsSync(new URL('./editorial-policy.ts', import.meta.url)), true);
    assert.equal(existsSync(new URL('./identify-counterfeit.ts', import.meta.url)), true);
    const era = readFileSync(new URL('../pages/coleccion/colombia/[era].astro', import.meta.url), 'utf8');
    assert.match(era, /ColombiaEraPage/);
  });
});
