import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { lookupGscRedirect } from '../lib/gsc-redirects.ts';
import { englishRedirects, localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import {
  MANZANO_FARMING_PATH,
  MANZANO_FARMING_PATH_EN,
  manzanoFarmingCopy,
  manzanoFarmingDedicatedSlugs,
  manzanoFarmingPath,
  manzanoFarmingSources,
} from './manzano-farming.ts';

const pageSource = readFileSync(new URL('../components/catalog/ManzanoFarmingPage.astro', import.meta.url), 'utf8');
const esRoute = readFileSync(
  new URL('../pages/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const bodyEs = readFileSync(new URL('./manzano-farming/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./manzano-farming/en.html', import.meta.url), 'utf8');

describe('Manzano Farming Co. page', () => {
  it('pairs the Spanish essay with an English route under hacienda tokens', () => {
    assert.equal(manzanoFarmingCopy.es.title, 'Manzano Farming Co.');
    assert.equal(manzanoFarmingCopy.en.title, 'Manzano Farming Co.');
    assert.equal(manzanoFarmingPath('es'), MANZANO_FARMING_PATH);
    assert.equal(manzanoFarmingPath('en'), `/en${MANZANO_FARMING_PATH_EN}`);
    assert.equal(localizePath(MANZANO_FARMING_PATH, 'en'), `/en${MANZANO_FARMING_PATH_EN}`);
    assert.equal(
      localizePath('/en/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/', 'en'),
      `/en${MANZANO_FARMING_PATH_EN}`,
    );
    assert.deepEqual([...manzanoFarmingDedicatedSlugs], [
      'coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co',
      'collection/colombia-numismatics/hacienda-tokens/manzano-farming-co',
    ]);
    assert.equal(manzanoFarmingCopy.es.published, '2026-10-23');
    assert.match(esRoute, /ManzanoFarmingPage/);
    assert.match(enRoute, /ManzanoFarmingPage/);
    assert.match(pageSource, /SourceList/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /token-fichas-heading/);
    assert.match(pageSource, /CatalogThumb/);
    assert.match(pageSource, /MANZANO_FARMING_PIECE_IMAGES\.composite/);
    assert.match(pageSource, /pieceHref/);
    assert.match(pageSource, /pairCaption/);
    assert.match(pageSource, /SeriesHero/);
    assert.match(pageSource, /imageClass="object-\[50%_50%\]"/);
    assert.doesNotMatch(pageSource, /size="frame"|size="compact"/);
    assert.match(pageSource, /HACIENDA_TOKENS_HERO/);
    assert.doesNotMatch(pageSource, /<h1/);
    assert.doesNotMatch(pageSource, /manzanoToken|25-1901/);
    assert.doesNotMatch(MANZANO_FARMING_PATH, /\/blog\//);
    const retiredEs = '/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/25-1901/';
    const retiredEn = '/en/collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/25-1901/';
    const retiredLegacy = '/en/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/25-1901/';
    assert.equal(lookupGscRedirect(retiredEs)?.target, MANZANO_FARMING_PATH);
    assert.equal(lookupGscRedirect(retiredEs)?.status, 301);
    assert.equal(lookupGscRedirect(retiredEn)?.target, `/en${MANZANO_FARMING_PATH_EN}`);
    assert.equal(lookupGscRedirect(retiredLegacy)?.target, `/en${MANZANO_FARMING_PATH_EN}`);
    assert.equal(englishRedirects()[retiredLegacy], undefined);
  });

  it('keeps titles and descriptions inside the audit limits and publishes no prices', () => {
    for (const locale of ['es', 'en']) {
      const copy = manzanoFarmingCopy[locale];
      assert.equal(limitMetaDescription(copy.metaDescription), copy.metaDescription);
      assert.ok(copy.metaDescription.length <= 155, copy.metaDescription);
      assert.ok(copy.metaDescription.length >= 80, copy.metaDescription);
      assert.ok(`${copy.metaTitle} · Notofilia`.length <= 70);
    }
    const prose = `${bodyEs}\n${bodyEn}\n${manzanoFarmingCopy.es.lead}\n${manzanoFarmingCopy.en.lead}`;
    assert.match(bodyEs, /Sotaquirá y Paipa/);
    assert.match(bodyEs, /PAPAYO Y SATIVA/);
    assert.match(bodyEs, /Satira/);
    assert.match(bodyEs, /resolución n\.º 13/);
    assert.match(bodyEs, /Manzano_10_1901/);
    assert.match(bodyEn, /Manzano_10_1901/);
    assert.match(pageSource, /pieceCta/);
    assert.match(bodyEn, /Sotaquirá and Paipa/);
    assert.match(bodyEn, /article 136/);
    assert.match(prose, /No está en Notofilia|not a Notofilia piece|Notofilia does not hold/);
    assert.doesNotMatch(prose, /\$\s?\d/);
    assert.doesNotMatch(prose, /\bUSD\b|precio|Henao \d/);
    assert.doesNotMatch(prose, /TODO\(owner\)/);
    assert.doesNotMatch(prose, /25-1901/);
    assert.match(bodyEs, /El 25 publicado por Absoluti no está en Notofilia/);
    assert.match(bodyEn, /The 25 that Absoluti published is not a Notofilia piece/);
    assert.equal(manzanoFarmingSources.length >= 5, true);
    for (const source of manzanoFarmingSources) {
      assert.match(source.href, /^https?:\/\//);
      assert.ok(source.es.length > 8);
      assert.ok(source.en.length > 8);
    }
  });
});
