import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  foldedGlossaryTerms,
  glossaryFoldedRedirectTarget,
  glossaryRedirects,
  glossaryTermBySlug,
  glossaryTermHref,
  glossaryTerms,
  glossaryTermSlugs,
  isStandaloneGlossaryTerm,
  STANDALONE_GLOSSARY_SLUGS,
  standaloneGlossaryTerms,
} from './glossary.ts';
import {
  glossaryArticleBySlug,
  glossaryArticleLocaleText,
  glossaryArticleWordCount,
} from './glossary-articles.ts';

const added = [
  'spark',
  'plancheta',
  'encapsulado',
  'casi-sin-circular-au',
  'numeracion-binaria',
  'ngc',
  'peso-oro',
  'schwan',
  'banknote-book',
  'offset',
  'gulden',
  'sucre',
  'ducado',
  'yuan-renminbi',
  'jiaozi',
  'libra',
  'dolar',
  'euro',
  'coscoja',
  'libranza',
  'numeracion-repetidor',
  'foil',
  'guardian',
  'bimetalica',
  'gem-uncirculated',
  'choice-uncirculated',
  'details-ngc',
  'remainder',
  'scrip',
  'haxby',
  'criswell',
  'uniface',
  'letras-de-credito',
  'nature-print',
  'handstamp',
  'grayback',
  'demand-note',
  'united-states-note',
  'greenback',
  'billete-de-banco-nacional',
  'certificado-de-oro',
  'certificado-de-plata',
  'treasury-note',
  'tamano-grande',
  'gonzalez-white',
  'hernandez',
  'junta-de-conversion',
  'dinero-mickey-mouse',
];

const astroConfig = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');
const indexPage = readFileSync(new URL('../components/glossary/GlossaryPage.astro', import.meta.url), 'utf8');
const esTermRoute = readFileSync(new URL('../pages/glosario/[term].astro', import.meta.url), 'utf8');
const enTermRoute = readFileSync(new URL('../pages/en/glossary/[term].astro', import.meta.url), 'utf8');

describe('glossary catalogue terms', () => {
  it('keeps unique slugs and ids, and every seeAlso target exists', () => {
    const slugs = glossaryTerms.map((term) => term.slug);
    const ids = glossaryTerms.map((term) => term.id);
    assert.equal(new Set(slugs).size, slugs.length);
    assert.equal(new Set(ids).size, ids.length);
    for (const term of glossaryTerms) {
      assert.ok(term.definition.es.length > 20, term.slug);
      assert.ok(term.definition.en.length > 20, term.slug);
      for (const related of term.seeAlso) {
        assert.ok(glossaryTermBySlug(related), `${term.slug} -> ${related}`);
      }
    }
  });

  it('includes the terms used in published catalogue copy', () => {
    for (const slug of added) {
      assert.ok(glossaryTermBySlug(slug), slug);
    }
    assert.equal(glossaryTerms.length, 159);
  });
});

describe('two-tier glossary', () => {
  it('keeps 25–40 standalone articles and folds the rest', () => {
    assert.equal(STANDALONE_GLOSSARY_SLUGS.length, 34);
    assert.equal(standaloneGlossaryTerms().length, 34);
    assert.equal(foldedGlossaryTerms().length, 113);
    assert.equal(standaloneGlossaryTerms().length + foldedGlossaryTerms().length, glossaryTerms.length);
    assert.ok(!isStandaloneGlossaryTerm('libra'));
    assert.ok(isStandaloneGlossaryTerm('pmg-pcgs'));
    assert.ok(isStandaloneGlossaryTerm('dispositivo-opticamente-variable-ovd'));
  });

  it('lists only standalone slugs for the sitemap', () => {
    assert.deepEqual(
      glossaryTermSlugs,
      STANDALONE_GLOSSARY_SLUGS.map((slug) => `glosario/${slug}`),
    );
    assert.ok(!glossaryTermSlugs.includes('glosario/libra'));
    assert.ok(glossaryTermSlugs.includes('glosario/pmg-pcgs'));
  });

  it('points public hrefs at articles or index anchors', () => {
    assert.equal(glossaryTermHref('pmg-pcgs', 'es'), '/glosario/pmg-pcgs/');
    assert.equal(glossaryTermHref('pmg-pcgs', 'en'), '/en/glossary/pmg-pcgs/');
    assert.equal(glossaryTermHref('polimero', 'en'), '/en/glossary/polymer/');
    assert.equal(glossaryTermHref('pick', 'en'), '/en/glossary/pick/');
    assert.equal(glossaryTermHref('libra', 'es'), '/glosario/#libra');
    assert.equal(glossaryTermHref('libra', 'en'), '/en/glossary/#libra');
    assert.equal(glossaryTermHref('libranza', 'es'), '/glosario/#libranza');
    assert.equal(glossaryTermHref('criswell', 'es'), '/glosario/#catalogo-criswell');
  });

  it('301s folded term URLs to a query, not a hash fragment', () => {
    assert.equal(glossaryFoldedRedirectTarget('libra', 'es'), '/glosario/?term=libra');
    assert.equal(glossaryFoldedRedirectTarget('libra', 'en'), '/en/glossary/?term=pound-sterling');
    const redirects = glossaryRedirects();
    assert.equal(redirects['/glosario/libra/'], '/glosario/?term=libra');
    assert.equal(redirects['/en/glossary/libra/'], '/en/glossary/?term=pound-sterling');
    assert.equal(redirects['/en/glosario/libra/'], '/en/glossary/?term=pound-sterling');
    assert.equal(redirects['/en/glossary/polimero/'], '/en/glossary/polymer/');
    assert.equal(redirects['/en/glosario/polimero/'], '/en/glossary/polymer/');
    assert.equal(redirects['/en/glosario/pmg-pcgs/'], '/en/glossary/pmg-pcgs/');
    assert.equal(redirects['/glosario/pmg-pcgs/'], undefined);
    assert.match(astroConfig, /glossaryRedirects\(\)/);
  });

  it('builds static term routes only for standalone slugs', () => {
    assert.match(esTermRoute, /standaloneGlossaryTerms/);
    assert.match(enTermRoute, /standaloneGlossaryTerms/);
    assert.doesNotMatch(esTermRoute, /glossaryTerms\.map/);
  });

  it('indexes folded terms as anchors and scrolls from ?term=', () => {
    assert.match(indexPage, /DefinedTermSet/);
    assert.match(indexPage, /hasDefinedTerm/);
    assert.match(indexPage, /glossaryTermHref/);
    assert.match(indexPage, /data-glossary-tier/);
    assert.match(indexPage, /data-glossary-slug/);
    assert.match(indexPage, /revealTermFromQuery/);
    assert.match(indexPage, /params\.get\('term'\)/);
    assert.match(indexPage, /glossary-letter-/);
  });

  it('gives remainder a long bilingual article, not a stub definition', () => {
    const article = glossaryArticleBySlug('remainder');
    assert.ok(article);
    const es = glossaryArticleWordCount(glossaryArticleLocaleText(article, 'es'));
    const en = glossaryArticleWordCount(glossaryArticleLocaleText(article, 'en'));
    assert.ok(es >= 250 && es <= 400, `remainder es ${es}`);
    assert.ok(en >= 250 && en <= 400, `remainder en ${en}`);
  });

  it('covers every standalone slug with a 250–400 word bilingual article and a collection photo', () => {
    for (const slug of STANDALONE_GLOSSARY_SLUGS) {
      const article = glossaryArticleBySlug(slug);
      assert.ok(article, slug);
      const es = glossaryArticleWordCount(glossaryArticleLocaleText(article, 'es'));
      const en = glossaryArticleWordCount(glossaryArticleLocaleText(article, 'en'));
      assert.ok(es >= 250 && es <= 400, `${slug} es ${es}`);
      assert.ok(en >= 250 && en <= 400, `${slug} en ${en}`);
      assert.ok(article.illustration?.image, `${slug} illustration`);
      assert.ok(article.examples.length > 0, `${slug} examples`);
    }
  });
});
