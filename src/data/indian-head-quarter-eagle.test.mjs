import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  INDIAN_HEAD_QUARTER_EAGLE_HERO,
  INDIAN_HEAD_QUARTER_EAGLE_HOLDING_IDS,
  INDIAN_HEAD_QUARTER_EAGLE_PATH,
  INDIAN_HEAD_QUARTER_EAGLE_PATH_EN,
  indianHeadQuarterEagleCopy,
  indianHeadQuarterEagleDedicatedSlugs,
  indianHeadQuarterEaglePath,
  indianHeadQuarterEagleSources,
} from './indian-head-quarter-eagle.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/IndianHeadQuarterEaglePage.astro', import.meta.url),
  'utf8',
);
const esRoute = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/cuarto-de-aguila-indian-head-1908-1929/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/united-states-numismatics/indian-head-quarter-eagle-1908-1929/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const bodyEs = readFileSync(new URL('./indian-head-quarter-eagle/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./indian-head-quarter-eagle/en.html', import.meta.url), 'utf8');
const coinPage = readFileSync(new URL('../components/catalog/UnitedStatesCoinPage.astro', import.meta.url), 'utf8');
const coinagePage = readFileSync(new URL('../components/catalog/UnitedStatesCoinagePage.astro', import.meta.url), 'utf8');

describe('Indian Head quarter eagle resource page', () => {
  it('uses a bilingual dedicated pair under United States numismatics, not the blog', () => {
    assert.equal(indianHeadQuarterEaglePath('es'), INDIAN_HEAD_QUARTER_EAGLE_PATH);
    assert.equal(indianHeadQuarterEaglePath('en'), `/en${INDIAN_HEAD_QUARTER_EAGLE_PATH_EN}`);
    assert.deepEqual([...indianHeadQuarterEagleDedicatedSlugs], [
      'coleccion/estados-unidos-numismatica/cuarto-de-aguila-indian-head-1908-1929',
      'collection/united-states-numismatics/indian-head-quarter-eagle-1908-1929',
    ]);
    assert.doesNotMatch(INDIAN_HEAD_QUARTER_EAGLE_PATH, /\/blog\//);
    assert.equal(indianHeadQuarterEagleCopy.en.title, 'The Indian Head Quarter Eagle (1908–1929)');
    assert.equal(indianHeadQuarterEagleCopy.es.title, 'El cuarto de águila Indian Head (1908–1929)');
    assert.match(esRoute, /IndianHeadQuarterEaglePage/);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /IndianHeadQuarterEaglePage/);
    assert.match(enRoute, /locale="en"/);
  });

  it('keeps Article JSON-LD, the uncropped poster, and the two holdings under the market note', () => {
    assert.match(pageSource, /@type': 'Article'/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /reviewedBy/);
    assert.match(pageSource, /max-w-content/);
    assert.match(pageSource, /max-w-\[46rem\]/);
    assert.match(pageSource, /CatalogThumb/);
    assert.match(pageSource, /INDIAN_HEAD_QUARTER_EAGLE_HOLDING_IDS/);
    assert.ok(pageSource.indexOf('indian-head-market-heading') < pageSource.indexOf('holdingsAria'));
    assert.match(pageSource, /SeriesHero/);
    assert.match(pageSource, /size="frame"/);
    assert.doesNotMatch(pageSource, /object-cover|size="compact"/);
    assert.equal(
      INDIAN_HEAD_QUARTER_EAGLE_HERO.src,
      '/uploads/indian-head-quarter-eagle-1908-1929-hero.jpg',
    );
    assert.equal(INDIAN_HEAD_QUARTER_EAGLE_HERO.width, 1916);
    assert.equal(INDIAN_HEAD_QUARTER_EAGLE_HERO.height, 821);
    assert.ok(existsSync(new URL('../../public/uploads/indian-head-quarter-eagle-1908-1929-hero.jpg', import.meta.url)));
    assert.ok(
      existsSync(new URL('../../public/uploads/indian-head-quarter-eagle-1908-1929-hero-card.jpg', import.meta.url)),
    );
    assert.match(indianHeadQuarterEagleCopy.es.heroAlt, /ilustración/);
    assert.match(indianHeadQuarterEagleCopy.en.heroAlt, /illustration/i);
    assert.deepEqual([...INDIAN_HEAD_QUARTER_EAGLE_HOLDING_IDS], [
      '2-50-dolares-1908-cabeza-de-indio',
      '2-50-dolares-1912-indian-head',
    ]);
    assert.match(bodyEs, /2-50-dolares-1908-cabeza-de-indio/);
    assert.match(bodyEs, /2-50-dolares-1912-indian-head/);
    assert.match(bodyEn, /2-50-dolares-1908-cabeza-de-indio/);
    assert.match(bodyEn, /2-50-dolares-1912-indian-head/);
    assert.match(bodyEs, /55\.680/);
    assert.match(bodyEn, /55,680/);
    assert.doesNotMatch(bodyEs, /312\.000|312,000/);
    assert.doesNotMatch(bodyEn, /312,000|\$312,000/);
    assert.doesNotMatch(`${bodyEs}\n${bodyEn}`, /Broward|Pembroke Pines|Coral Springs/);
    assert.ok(indianHeadQuarterEagleSources.some((source) => source.href.includes('pcgs.com/coinfacts/coin/1911-d')));
    assert.match(coinPage, /indianHeadQuarterEaglePath/);
    assert.match(coinagePage, /chapter.id === 'ceca-filadelfia'/);
  });
});
