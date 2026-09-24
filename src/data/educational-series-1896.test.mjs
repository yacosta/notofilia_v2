import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  EDUCATIONAL_SERIES_PATH,
  EDUCATIONAL_SERIES_PATH_EN,
  educationalSeriesCopy,
  educationalSeriesDedicatedSlugs,
  educationalSeriesPath,
  educationalSeriesSources,
} from './educational-series-1896.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/EducationalSeriesPage.astro', import.meta.url),
  'utf8',
);
const navSource = readFileSync(new URL('../lib/mega-nav.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const bodyEs = readFileSync(new URL('./educational-series-1896/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./educational-series-1896/en.html', import.meta.url), 'utf8');

describe('1896 Educational Series resource page', () => {
  it('uses a bilingual dedicated pair under the United States case, not the blog', () => {
    assert.equal(educationalSeriesPath('es'), EDUCATIONAL_SERIES_PATH);
    assert.equal(educationalSeriesPath('en'), `/en${EDUCATIONAL_SERIES_PATH_EN}`);
    assert.deepEqual([...educationalSeriesDedicatedSlugs], [
      'coleccion/estados-unidos/serie-educativa-1896',
      'collection/united-states/educational-series-1896',
    ]);
    assert.doesNotMatch(EDUCATIONAL_SERIES_PATH, /\/blog\//);
    assert.equal(educationalSeriesCopy.en.title, '1896 Educational Series');
    assert.match(navSource, /id: 'serie-educativa-1896'/);
    assert.match(navSource, /href: EDUCATIONAL_SERIES_PATH/);
    assert.match(seriesPage, /viewEducationalCase/);
    assert.match(seriesPage, /EDUCATIONAL_SERIES_PATH/);
  });

  it('keeps Article JSON-LD and does not publish an example note', () => {
    assert.match(pageSource, /@type': 'Article'/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /reviewedBy/);
    assert.match(pageSource, /max-w-content/);
    assert.match(pageSource, /max-w-\[46rem\]/);
    assert.doesNotMatch(pageSource, /CatalogThumb/);
    assert.doesNotMatch(pageSource, /SeriesHero/);
    assert.doesNotMatch(pageSource, /serial/);
    assert.match(bodyEs, /no añade un ejemplar/);
    assert.match(bodyEn, /does not add an example/);
    assert.match(educationalSeriesCopy.es.marketNote, /no hay oferta/);
    assert.match(educationalSeriesCopy.en.marketNote, /not an offer/);
    assert.ok(educationalSeriesSources.length > 10);
    assert.ok(educationalSeriesSources.every((source) => source.href.startsWith('http')));
  });
});
