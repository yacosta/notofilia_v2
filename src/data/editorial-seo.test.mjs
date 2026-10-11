import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { lookupGscRedirect } from '../lib/gsc-redirects.ts';

const editorialSource = readFileSync(new URL('./editorial.ts', import.meta.url), 'utf8');
const newsArticles = JSON.parse(readFileSync(new URL('./news-articles.json', import.meta.url), 'utf8'));
const blogArticles = JSON.parse(readFileSync(new URL('./blog-articles.json', import.meta.url), 'utf8'));

describe('editorial SEO helpers', () => {
  it('paginates news at 88 entries', () => {
    assert.match(editorialSource, /export const NEWS_PAGE_SIZE = 88/);
    assert.match(editorialSource, /Math\.ceil\(newsArticles\.length \/ size\)/);
    assert.ok(Math.ceil(newsArticles.length / 88) >= 2);
  });

  it('adds a glossary related link when a news article has no catalogue or glossary href', () => {
    assert.match(editorialSource, /export function relatedForArticle/);
    assert.match(editorialSource, /href: '\/glosario\/notafilia\/'/);
  });

  it('publishes the Calarcá 1952 essay from checked sources and without a price', () => {
    const article = blogArticles.find((item) => item.slug === 'cacique-calarca-trascendencia-numismatica');
    assert.ok(article);
    assert.equal(article.slugEn, 'cacique-calarca-numismatic-afterlife');
    assert.equal(article.title.es, 'Cacique Calarcá: Trascendencia Numismática');
    assert.equal(article.image, '/uploads/cacique-calarca-10-centavos-1952-b.jpg');
    assert.equal(article.imageWidth, 1792);
    assert.equal(article.imageHeight, 1008);
    assert.equal(
      existsSync(new URL('../../public/uploads/cacique-calarca-10-centavos-1952-b.jpg', import.meta.url)),
      true,
    );
    assert.equal(
      existsSync(new URL('../../public/uploads/cacique-calarca-10-centavos-1952-b-card.jpg', import.meta.url)),
      true,
    );
    for (const locale of ['es', 'en']) {
      const html = article.bodyHtml[locale];
      assert.match(html, /6[.,]035[.,]000/);
      assert.match(html, /KM# 212\.1/);
      assert.match(html, /elsalondecris\.blogspot\.com/);
      assert.match(html, /N# 10912|pieces10912/);
      assert.doesNotMatch(html, /\$\s?\d/);
      assert.doesNotMatch(html, /1[.,]351/);
      assert.doesNotMatch(html, /Sedwick|Fort Lauderdale|cuatro millones|4 millones/i);
    }
    assert.match(article.claim.noteEs, /1987/);
    assert.match(article.claim.noteEs, /Baltasar/);
  });

  it('publishes the Colombian valuation guide without a price list', () => {
    const article = blogArticles.find((item) => item.slug === 'como-se-valora-un-billete-colombiano');
    assert.ok(article);
    assert.match(article.bodyHtml.es, /no publica listas de precios/);
    assert.doesNotMatch(article.bodyHtml.es, /\$\d{2,}/);
    assert.match(article.bodyHtml.es, /\/glosario\/pmg-pcgs\//);
    assert.match(article.bodyHtml.es, /\/glosario\/pick\//);
    assert.match(article.bodyHtml.es, /\/coleccion\/colombia\/2000-pesos-2008\//);
    assert.equal(article.slugEn, 'how-colombian-banknotes-are-valued');
  });

  it('shows the imprint essay figures from files that exist and links live catalog pages', () => {
    const article = blogArticles.find(
      (item) => item.slug === 'tres-imprentas-misterio-pie-imprenta-billetes-colombianos',
    );
    assert.ok(article);
    for (const locale of ['es', 'en']) {
      const html = article.bodyHtml[locale];
      assert.doesNotMatch(html, /href="[^"]*banco-de-la-republica-5000-pesos-oro-specimen/);
      assert.doesNotMatch(html, /1986-specimen/);
      assert.match(html, /\/coleccion\/colombia\/2000-pesos-oro-1983\//);
      assert.match(html, /\/coleccion\/colombia\/5000-pesos-oro-1993\//);
      assert.match(html, /1993-specimen-640\.webp/);
      assert.match(html, /5000-pesos-oro-1993-82210365\.webp/);
    }
    assert.equal(
      existsSync(new URL('../../public/uploads/colombia-banco-de-la-republica-2000-pesos-oro-1993-specimen-640.webp', import.meta.url)),
      true,
    );
    assert.equal(
      existsSync(new URL('../../public/uploads/colombia-banco-de-la-republica-5000-pesos-oro-1993-82210365.jpg', import.meta.url)),
      true,
    );
    assert.equal(
      existsSync(new URL('../../public/uploads/colombia-banco-de-la-republica-5000-pesos-oro-1993-82210365.webp', import.meta.url)),
      true,
    );
    const redirect = lookupGscRedirect('/coleccion/colombia/banco-de-la-republica-5000-pesos-oro-specimen/');
    assert.equal(redirect?.status, 301);
    assert.equal(redirect?.target, '/coleccion/colombia/5000-pesos-oro-1993/');
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
