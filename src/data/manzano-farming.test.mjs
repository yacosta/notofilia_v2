import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
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
    assert.equal(manzanoFarmingSources.length >= 5, true);
    for (const source of manzanoFarmingSources) {
      assert.match(source.href, /^https?:\/\//);
      assert.ok(source.es.length > 8);
      assert.ok(source.en.length > 8);
    }
  });
});
