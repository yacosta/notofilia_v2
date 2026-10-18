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

  it('publishes the Gaitán Castro essay from checked sources and without a price', () => {
    const article = blogArticles.find((item) => item.slug === 'fidel-castro-en-billete-colombiano');
    assert.ok(article);
    assert.equal(article.slugEn, 'fidel-castro-on-colombian-1000-peso-note');
    assert.equal(article.title.es, 'Fidel Castro en el mil pesos de Gaitán');
    assert.equal(article.image, '/uploads/fidel-castro-billete-1000-pesos.png');
    assert.equal(article.imageWidth, 348);
    assert.equal(article.imageHeight, 880);
    assert.equal(article.imageFit, 'contain');
    assert.equal(
      existsSync(new URL('../../public/uploads/fidel-castro-billete-1000-pesos.png', import.meta.url)),
      true,
    );
    assert.equal(
      existsSync(new URL('../../public/uploads/fidel-castro-billete-1000-pesos-card.png', import.meta.url)),
      true,
    );
    assert.ok(article.primarySources?.length >= 8);
    const sourceUrls = article.primarySources.map((source) => source.url).join(' ');
    assert.match(sourceUrls, /banrep\.gov\.co/);
    assert.match(sourceUrls, /colombiareports\.com/);
    assert.match(sourceUrls, /banknotenews\.com/);
    assert.match(sourceUrls, /wradio\.com\.co/);
    assert.doesNotMatch(sourceUrls, /wikipedia\.org|facebook\.com|youtube\.com/i);
    for (const locale of ['es', 'en']) {
      const html = article.bodyHtml[locale];
      assert.match(html, /BG# 439/);
      assert.match(html, /98[.,]050[.,]000/);
      assert.match(html, /José Antonio Suárez/);
      assert.match(html, /\/coleccion\/colombia\/1000-pesos-error-2000\//);
      assert.match(html, /banrep\.gov\.co/);
      assert.doesNotMatch(html, /wikipedia\.org/i);
      assert.doesNotMatch(html, /US\$0[.,]55|56 centavos|22 céntimos/i);
    }
    assert.match(article.claim.noteEs, /2[.,]300 millones/);
    assert.match(article.claim.noteEs, /ensayo/);
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

describe('editorial upload images', () => {
  const publicRoot = new URL('../../public/', import.meta.url);

  function cardSibling(src) {
    if (!src.includes('/uploads/') || src.includes('-card.')) return null;
    return src.replace(/(\.[a-z0-9]+)$/i, '-card$1');
  }

  function assertPublicFile(src, label) {
    const path = src.split(/[?#]/)[0];
    assert.equal(path.startsWith('/'), true, `${label} ${src}`);
    assert.equal(existsSync(new URL(path.slice(1), publicRoot)), true, `${label} missing ${path}`);
  }

  it('ships a -card sibling for every blog and news upload the index requests', () => {
    for (const article of [...blogArticles, ...newsArticles]) {
      if (!article.image) continue;
      assertPublicFile(article.image, article.slug);
      const card = cardSibling(article.image);
      if (card) assertPublicFile(card, `${article.slug} card`);
    }
  });

  it('resolves inline blog figures to files that exist', () => {
    const srcRe = /<img\b[^>]*\ssrc="([^"]+)"/g;
    for (const article of blogArticles) {
      for (const locale of ['es', 'en']) {
        const html = article.bodyHtml[locale] ?? '';
        for (const match of html.matchAll(srcRe)) {
          const src = match[1];
          if (/^https?:\/\//.test(src)) continue;
          assertPublicFile(src, `${article.slug} ${locale}`);
        }
      }
    }
  });
});

describe('October 2026 Colombian fair notes', () => {
  it('publishes the Bogotá philatelic show and the Manizales fair from named sources', () => {
    const bogota = newsArticles.find((item) => item.slug === 'xxxvii-exposicion-filatelica-nacional-bogota-2026');
    const manizales = newsArticles.find((item) => item.slug === 'feria-numismatica-cable-plaza-manizales-2026');
    assert.ok(bogota);
    assert.ok(manizales);
    assert.equal(bogota.slugEn, '37th-national-philatelic-show-bogota-2026');
    assert.equal(manizales.slugEn, 'numismatic-fair-cable-plaza-manizales-2026');
    assert.equal(bogota.sourceName, 'Pulzo');
    assert.equal(manizales.sourceName, 'La Patria');
    assert.match(bogota.bodyHtml.es, /XXXVII/);
    assert.match(bogota.bodyHtml.es, /Club El Cubo Colsubsidio/);
    assert.match(bogota.bodyHtml.en, /37th/);
    assert.match(manizales.bodyHtml.es, /Cable Plaza/);
    assert.match(manizales.bodyHtml.es, /22 al 25 de octubre/);
    assert.match(manizales.bodyHtml.en, /22 to 25 October/);
    for (const article of [bogota, manizales]) {
      assert.equal(article.claim, null);
      for (const locale of ['es', 'en']) {
        assert.match(article.bodyHtml[locale], /\/glosario\/numismatica\//);
        assert.match(article.bodyHtml[locale], /\/glosario\/notafilia\//);
        assert.doesNotMatch(article.bodyHtml[locale], /US\$|€\s?\d|millones de pesos/i);
      }
    }
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
