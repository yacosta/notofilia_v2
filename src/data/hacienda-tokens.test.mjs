import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import {
  HACIENDA_TOKENS_HERO,
  HACIENDA_TOKENS_PATH,
  HACIENDA_TOKENS_PATH_EN,
  haciendaTokensCopy,
  haciendaTokensDedicatedSlugs,
  haciendaTokensPath,
  haciendaTokensSources,
} from './hacienda-tokens.ts';

const pageSource = readFileSync(new URL('../components/catalog/HaciendaTokensPage.astro', import.meta.url), 'utf8');
const esRoute = readFileSync(
  new URL('../pages/coleccion/colombia-numismatica/fichas-de-hacienda/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL('../pages/en/collection/colombia-numismatics/hacienda-tokens/index.astro', import.meta.url),
  'utf8',
);
const bodyEs = readFileSync(new URL('./hacienda-tokens/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./hacienda-tokens/en.html', import.meta.url), 'utf8');

describe('Hacienda tokens page', () => {
  it('pairs the Spanish essay with an English route under Colombia-Numismatics', () => {
    assert.equal(haciendaTokensCopy.es.title, 'Las fichas de hacienda en la numismática colombiana');
    assert.equal(haciendaTokensCopy.en.title, 'Hacienda tokens in Colombian numismatics');
    assert.equal(haciendaTokensPath('es'), HACIENDA_TOKENS_PATH);
    assert.equal(haciendaTokensPath('en'), `/en${HACIENDA_TOKENS_PATH_EN}`);
    assert.equal(localizePath(HACIENDA_TOKENS_PATH, 'en'), `/en${HACIENDA_TOKENS_PATH_EN}`);
    assert.equal(
      localizePath(`/en/coleccion/colombia-numismatica/fichas-de-hacienda/`, 'en'),
      `/en${HACIENDA_TOKENS_PATH_EN}`,
    );
    assert.deepEqual([...haciendaTokensDedicatedSlugs], [
      'coleccion/colombia-numismatica/fichas-de-hacienda',
      'collection/colombia-numismatics/hacienda-tokens',
    ]);
    assert.equal(haciendaTokensCopy.es.published, '2026-10-22');
    assert.match(esRoute, /HaciendaTokensPage/);
    assert.match(enRoute, /HaciendaTokensPage/);
    assert.match(pageSource, /SourceList/);
    assert.match(pageSource, /SeriesHero/);
    assert.match(pageSource, /size="frame"/);
    assert.doesNotMatch(pageSource, /object-cover|size="compact"/);
    assert.equal(HACIENDA_TOKENS_HERO.es.src, '/uploads/fichas-de-hacienda-hero.jpg');
    assert.equal(HACIENDA_TOKENS_HERO.en.src, '/uploads/hacienda-tokens-hero.jpg');
    assert.equal(HACIENDA_TOKENS_HERO.es.width, 1168);
    assert.equal(HACIENDA_TOKENS_HERO.es.height, 784);
    assert.match(haciendaTokensCopy.es.heroAlt, /Ilustración/);
    assert.match(haciendaTokensCopy.es.heroAlt, /1901/);
    assert.match(haciendaTokensCopy.en.heroAlt, /Illustration/);
    assert.match(haciendaTokensCopy.en.heroAlt, /1901/);
    assert.match(haciendaTokensCopy.es.heroAlt, /No es el escaneo/);
    assert.match(haciendaTokensCopy.en.heroAlt, /not a scan/);
    for (const hero of Object.values(HACIENDA_TOKENS_HERO)) {
      assert.ok(existsSync(new URL(`../../public${hero.src}`, import.meta.url)));
      assert.ok(existsSync(new URL(`../../public${hero.src.replace('.jpg', '-card.jpg')}`, import.meta.url)));
    }
    assert.doesNotMatch(HACIENDA_TOKENS_PATH, /\/blog\//);
  });

  it('keeps titles and descriptions inside the audit limits and publishes no prices', () => {
    for (const locale of ['es', 'en']) {
      const copy = haciendaTokensCopy[locale];
      assert.equal(limitMetaDescription(copy.metaDescription), copy.metaDescription);
      assert.ok(copy.metaDescription.length <= 155, copy.metaDescription);
      assert.ok(`${copy.metaTitle} · Notofilia`.length <= 70);
    }
    const prose = `${bodyEs}\n${bodyEn}`;
    assert.match(bodyEs, /artículo 136/);
    assert.match(bodyEs, /12,5 kg/);
    assert.match(bodyEn, /12\.5 kg/);
    assert.match(bodyEs, /poder liberatorio ilimitado/);
    assert.match(prose, /P# S909|P# S909/);
    assert.doesNotMatch(prose, /\$\s?\d/);
    assert.doesNotMatch(prose, /USD|precio|32\.?000|300 trabajadores/);
    assert.doesNotMatch(prose, /TODO\(owner\)/);
    assert.equal(haciendaTokensSources.length > 10, true);
    for (const source of haciendaTokensSources) {
      assert.match(source.href, /^https?:\/\//);
      assert.ok(source.es.length > 8);
      assert.ok(source.en.length > 8);
    }
  });
});
