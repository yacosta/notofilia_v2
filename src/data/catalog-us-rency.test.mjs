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
const esWarhol = readFileSync(
  new URL('../pages/coleccion/estados-unidos/rency/warhol-basquiat-life-is-beautiful/index.astro', import.meta.url),
  'utf8',
);
const enWarhol = readFileSync(
  new URL('../pages/en/collection/united-states/rency/warhol-basquiat-life-is-beautiful/index.astro', import.meta.url),
  'utf8',
);
const esTrump = readFileSync(
  new URL('../pages/coleccion/estados-unidos/rency/trump-never-surrender/index.astro', import.meta.url),
  'utf8',
);
const enTrump = readFileSync(
  new URL('../pages/en/collection/united-states/rency/trump-never-surrender/index.astro', import.meta.url),
  'utf8',
);

describe('US Rency pop-art case', () => {
  it('has bilingual series copy and keeps an empty-state fallback', () => {
    assert.match(data, /USA_RENCY_PATH = '\/coleccion\/estados-unidos\/rency\/'/);
    assert.match(data, /USA_RENCY_PATH_EN = '\/collection\/united-states\/rency\/'/);
    assert.match(data, /Rency sobre papel de curso legal/);
    assert.match(data, /Rency on legal-tender paper/);
    assert.doesNotMatch(data, /Renci/);
    assert.doesNotMatch(data, /RENCI/);
    assert.match(data, /firma manuscrita RENCY/);
    assert.match(data, /manuscript signature RENCY/);
    assert.match(data, /suele firmar en mayúsculas RENCY/);
    assert.match(data, /signs in capitals RENCY/);
    assert.match(data, /suele firmar RENCY en mayúsculas/);
    assert.match(data, /signature is often RENCY in capitals/);
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
    assert.match(esWarhol, /renci-warhol-basquiat-life-is-beautiful/);
    assert.match(enWarhol, /renci-warhol-basquiat-life-is-beautiful/);
    assert.match(esTrump, /renci-trump-never-surrender/);
    assert.match(enTrump, /renci-trump-never-surrender/);
    assert.match(rencyPage, /notesForChapter\('us-pop-art'\)/);
    assert.match(rencyPage, /t\.emptyHoldings/);
    assert.match(rencyPage, /id="main-content"/);
    assert.match(seriesPage, /USA_RENCY_PATH/);
    assert.match(seriesPage, /t\.viewRencyCase/);
  });
});
