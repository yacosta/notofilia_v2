import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

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
const esNote = readFileSync(
  new URL('../pages/coleccion/estados-unidos/rency/pele-the-beautiful-game/index.astro', import.meta.url),
  'utf8',
);
const enNote = readFileSync(
  new URL('../pages/en/collection/united-states/rency/pele-the-beautiful-game/index.astro', import.meta.url),
  'utf8',
);

describe('US Renci pop-art case', () => {
  it('has bilingual series copy and keeps an empty-state fallback', () => {
    assert.match(data, /USA_RENCY_PATH = '\/coleccion\/estados-unidos\/rency\/'/);
    assert.match(data, /USA_RENCY_PATH_EN = '\/collection\/united-states\/rency\/'/);
    assert.match(data, /Renci sobre papel de curso legal/);
    assert.match(data, /Renci on legal-tender paper/);
    assert.match(data, /Aún no hay fichas en esta vitrina/);
    assert.match(data, /There are no note pages in this case yet/);
  });

  it('wires thin ES/EN series and piece routes', () => {
    assert.match(esRoute, /UnitedStatesRencySeriesPage/);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /UnitedStatesRencySeriesPage/);
    assert.match(enRoute, /locale="en"/);
    assert.match(esNote, /renci-pele-the-beautiful-game/);
    assert.match(enNote, /renci-pele-the-beautiful-game/);
    assert.match(rencyPage, /notesForChapter\('us-pop-art'\)/);
    assert.match(rencyPage, /t\.emptyHoldings/);
    assert.match(rencyPage, /id="main-content"/);
    assert.match(seriesPage, /USA_RENCY_PATH/);
    assert.match(seriesPage, /t\.viewRencyCase/);
  });
});
