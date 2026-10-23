import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import {
  MANZANO_25_1901_PATH,
  MANZANO_25_1901_PATH_EN,
  MANZANO_FARMING_PATH,
  MANZANO_FARMING_PATH_EN,
  manzanoFarmingCopy,
  manzanoFarmingDedicatedSlugs,
  manzanoFarmingPath,
  manzanoFarmingSources,
  manzanoTokenById,
  manzanoTokenPath,
} from './manzano-farming.ts';

const pageSource = readFileSync(new URL('../components/catalog/ManzanoFarmingPage.astro', import.meta.url), 'utf8');
const tokenPageSource = readFileSync(new URL('../components/catalog/ManzanoTokenPage.astro', import.meta.url), 'utf8');
const tokenEsRoute = readFileSync(
  new URL(
    '../pages/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/25-1901/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const tokenEnRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/25-1901/index.astro',
    import.meta.url,
  ),
  'utf8',
);
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
      'coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/25-1901',
      'collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/25-1901',
    ]);
    assert.equal(manzanoFarmingCopy.es.published, '2026-10-23');
    assert.match(esRoute, /ManzanoFarmingPage/);
    assert.match(enRoute, /ManzanoFarmingPage/);
    assert.match(tokenEsRoute, /ManzanoTokenPage/);
    assert.match(tokenEnRoute, /id="25-1901"/);
    assert.match(pageSource, /SourceList/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /token-fichas-heading/);
    assert.match(pageSource, /SeriesHero/);
    assert.match(pageSource, /size="frame"/);
    assert.match(pageSource, /HACIENDA_TOKENS_HERO/);
    assert.doesNotMatch(pageSource, /<h1/);
    assert.match(tokenPageSource, /id="main-content"/);
    assert.match(tokenPageSource, /SourceList/);
    assert.match(tokenPageSource, /SeriesHero/);
    assert.match(tokenPageSource, /size="frame"/);
    assert.match(tokenPageSource, /HACIENDA_TOKENS_HERO/);
    assert.doesNotMatch(tokenPageSource, /<h1/);
    assert.doesNotMatch(tokenPageSource, /<img/);
    assert.doesNotMatch(MANZANO_FARMING_PATH, /\/blog\//);
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
    assert.match(bodyEn, /Sotaquirá and Paipa/);
    assert.match(bodyEn, /article 136/);
    assert.match(prose, /No está en Notofilia|not a Notofilia piece|Notofilia does not hold/);
    assert.doesNotMatch(prose, /\$\s?\d/);
    assert.doesNotMatch(prose, /\bUSD\b|precio|Henao \d/);
    assert.doesNotMatch(prose, /TODO\(owner\)/);
    const token = manzanoTokenById('25-1901');
    assert.ok(token);
    assert.equal(manzanoTokenPath(token, 'es'), MANZANO_25_1901_PATH);
    assert.equal(manzanoTokenPath(token, 'en'), `/en${MANZANO_25_1901_PATH_EN}`);
    assert.equal(token.nav.es, '25, 1901');
    assert.match(token.noSerialReason.es, /no trae número de serie/i);
    assert.match(token.about.es, /No es una pieza de Notofilia|no la republica/);
    for (const locale of ['es', 'en']) {
      assert.equal(limitMetaDescription(token.metaDescription[locale]), token.metaDescription[locale]);
      assert.ok(token.metaDescription[locale].length <= 155);
      assert.ok(`${token.metaTitle[locale]} · Notofilia`.length <= 70);
    }
    assert.doesNotMatch(`${token.front.es}\n${token.back.en}\n${token.lead.es}`, /\$\s?\d|serial [A-Z0-9]{5,}/);
    assert.equal(manzanoFarmingSources.length >= 5, true);
    for (const source of manzanoFarmingSources) {
      assert.match(source.href, /^https?:\/\//);
      assert.ok(source.es.length > 8);
      assert.ok(source.en.length > 8);
    }
  });
});
