import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { notesForChapter } from './estados-unidos.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const rencyPage = readFileSync(
  new URL('../components/catalog/UnitedStatesRencySeriesPage.astro', import.meta.url),
  'utf8',
);
const esRoute = readFileSync(
  new URL('../pages/coleccion/estados-unidos/rency/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL('../pages/en/collection/united-states/rency/index.astro', import.meta.url),
  'utf8',
);

describe('US Rency pop-art case', () => {
  it('has bilingual copy and an empty holdings state until notes are photographed', () => {
    assert.match(data, /USA_RENCY_PATH = '\/coleccion\/estados-unidos\/rency\/'/);
    assert.match(data, /USA_RENCY_PATH_EN = '\/collection\/united-states\/rency\/'/);
    assert.match(data, /Rency Art sobre el 2 dólares/);
    assert.match(data, /Rency Art on the \$2/);
    assert.match(data, /Aún no hay fichas en esta vitrina/);
    assert.match(data, /There are no note pages in this case yet/);
    assert.equal(notesForChapter('us-pop-art').length, 0);
  });

  it('wires thin ES/EN routes to the series type layout with an empty state', () => {
    assert.match(esRoute, /UnitedStatesRencySeriesPage/);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /UnitedStatesRencySeriesPage/);
    assert.match(enRoute, /locale="en"/);
    assert.match(rencyPage, /notesForChapter\('us-pop-art'\)/);
    assert.match(rencyPage, /t\.emptyHoldings/);
    assert.match(rencyPage, /id="main-content"/);
    assert.match(seriesPage, /USA_RENCY_PATH/);
    assert.match(seriesPage, /t\.viewRencyCase/);
  });
});
