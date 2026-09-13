import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');

describe('US obsolete series page 1782–1866', () => {
  const seriesPage = readFileSync(
    new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
    'utf8',
  );
  const obsoletePage = readFileSync(
    new URL('../components/catalog/UnitedStatesObsoleteSeriesPage.astro', import.meta.url),
    'utf8',
  );
  const esRoute = readFileSync(
    new URL('../pages/coleccion/estados-unidos/billetes-obsoletos/index.astro', import.meta.url),
    'utf8',
  );
  const enRoute = readFileSync(
    new URL('../pages/en/collection/united-states/obsolete-notes/index.astro', import.meta.url),
    'utf8',
  );

  it('pairs the dedicated obsolete case and links it from the United States series', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/billetes-obsoletos/', 'en'),
      '/en/collection/united-states/obsolete-notes/',
    );
    assert.match(data, /USA_OBSOLETE_PATH = '\/coleccion\/estados-unidos\/billetes-obsoletos\/'/);
    assert.match(data, /title: 'Billetes Obsoletos'/);
    assert.match(data, /title: 'Obsolete notes'/);
    assert.match(data, /kicker: '1782–1866'/);
    assert.match(obsoletePage, /notesForChapter\('us-obsoleto'\)/);
    assert.match(seriesPage, /viewObsoleteCase/);
    assert.match(seriesPage, /USA_OBSOLETE_PATH/);
    assert.match(esRoute, /UnitedStatesObsoleteSeriesPage/);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /UnitedStatesObsoleteSeriesPage/);
    assert.match(enRoute, /locale="en"/);
    assert.doesNotMatch(obsoletePage, /seriesSources/);
    assert.match(obsoletePage, /obsolete-banks-heading/);
    assert.match(obsoletePage, /obsolete-how-to-read-heading/);
    assert.match(obsoletePage, /obsolete-references-heading/);
    assert.match(obsoletePage, /t\.holdingsNote/);
    assert.match(data, /banksTitle: 'Bancos estatales y broken banknotes'/);
    assert.match(data, /howToReadTitle: 'Cómo leer un billete obsoleto'/);
    assert.match(data, /referencesTitle: 'Referencias y conservación'/);
    assert.match(data, /Serie 9890/);
    assert.match(data, /Serial 9890/);
    assert.match(data, /share\.gemini\.google\/x26FzHCczgwv/);
    assert.match(data, /no se toman de aquí precios/);
    assert.match(data, /prices, a census, and the widening of “obsolete” to federal paper are not taken from it/);
    assert.doesNotMatch(data, /El Gemini/);
    assert.doesNotMatch(data, /punto de partida/);
    assert.match(data, /sourcesTitle: 'Enlaces'/);
    assert.match(data, /sourcesTitle: 'Links'/);
    assert.match(data, /Citizens Bank of Louisiana/);
    assert.match(data, /Hagerstown Bank/);
    assert.match(data, /holdingsCardsLabel: 'Fichas con imagen'/);
  });

  it('lists the three existing Haxby remainders and does not invent serials', () => {
    assert.match(data, /Haxby NJ-350 G16a · N#334975 · Serie 9890/);
    assert.match(data, /Haxby CT-265 G52b · Plancha A · Serie —/);
    assert.match(data, /Haxby LA-105 G46a · N#206863 · Plancha D · Serie —/);
    assert.match(data, /id: '1-dolar-state-bank-new-brunswick'/);
    assert.match(data, /id: '5-dolares-city-bank-new-haven'/);
    assert.match(data, /id: '50-dolares-canal-bank-nueva-orleans'/);
    const newHaven = data.slice(
      data.indexOf("id: '5-dolares-city-bank-new-haven'"),
      data.indexOf("id: '50-dolares-canal-bank-nueva-orleans'"),
    );
    const canal = data.slice(data.indexOf("id: '50-dolares-canal-bank-nueva-orleans'"));
    assert.match(newHaven, /serial: '—'/);
    assert.match(canal, /serial: '—'/);
    assert.doesNotMatch(newHaven, /cert_number:/);
    assert.doesNotMatch(canal.slice(0, 4000), /cert_number:/);
  });
});
