import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const notes = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const numismatica = readFileSync(new URL('./numismatica.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const esSeries = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const esHt34 = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/index.astro', import.meta.url),
  'utf8',
);
const enHt34 = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/index.astro', import.meta.url),
  'utf8',
);

describe('US Trump Semiquincentennial dollar', () => {
  it('registers one bilingual coinage series and one holding', () => {
    assert.match(data, /USA_COINAGE_PATH = '\/coleccion\/estados-unidos-numismatica\/'/);
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/', 'en'),
      '/en/collection/united-states-numismatics/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/', 'en'),
      '/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/',
    );
    assert.match(data, /id: '1-dolar-trump-1776-2026'/);
    assert.match(data, /no_serial_reason:\n      'Struck circulating United States dollar/);
    assert.match(data, /Latón-manganeso \(88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni\)/);
    assert.match(data, /Manganese brass \(88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni\)/);
    assert.match(data, /Pub\. L\. 116-330 · 31 U\.S\.C\. § 5112\(y\)\(1\)\(C\)/);
    assert.match(data, /Filadelfia \(sin marca de ceca\)/);
    assert.match(data, /Never Surrender/);
    assert.match(data, /JULY 4th/);
    assert.match(data, /agotó esos rollos/);
    assert.match(data, /sold out those rolls/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+\.\d{2}/);
    assert.match(holdings, /us-2026-1-dollar-trump-1776-2026/);
    assert.match(holdings, /id: 'us-2026-1-dollar-trump-1776-2026', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-renci-trump-never-surrender/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /UnitedStatesCoinagePage locale="es"/);
    assert.match(enSeries, /UnitedStatesCoinagePage locale="en"/);
    assert.match(esCoin, /UnitedStatesCoinPage locale="es"/);
    assert.match(enCoin, /UnitedStatesCoinPage locale="en"/);
    assert.match(data, /1-dolar-trump-1776-2026-composite\.jpg/);
    assert.match(data, /1-dolar-trump-1776-2026-front\.jpg/);
    assert.match(data, /1-dolar-trump-1776-2026-back\.jpg/);
  });

  it('cross-links paper and coinage and opens four numismatic houses', () => {
    assert.match(notes, /coinageLead: 'La moneda metálica de este país se documenta en la vitrina de numismática.'/);
    assert.match(notes, /coinageLink: 'Estados Unidos · Numismática'/);
    assert.match(seriesPage, /USA_COINAGE_PATH/);
    assert.match(seriesPage, /t\.coinageLead/);
    assert.doesNotMatch(seriesPage, /target="_blank"/);
    assert.match(numismatica, /Abren cuatro casas/);
    assert.match(numismatica, /Four houses are open/);
    assert.match(numismatica, /href: USA_COINAGE_PATH/);
    assert.match(data, /notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.'/);
  });
});

describe('US Hard Times HT-34 1837 token', () => {
  it('registers a bilingual no-serial holding distinct from HT-33', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/', 'en'),
      '/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/',
    );
    assert.match(data, /id: 'ht-34-1837-burro-tortuga'/);
    assert.match(data, /id: 'hard-times'/);
    assert.match(data, /HT-34 · Low-20 · R-1/);
    assert.match(data, /EXECUTIVE FINANCIERING/);
    assert.match(data, /EXECUTIVE EXPERIMENT/);
    assert.match(data, /no_serial_reason:\n      'Private Hard Times copper token/);
    assert.match(data, /Rulau\/Fuld/);
    assert.doesNotMatch(data, /\$20 to \$50/);
    assert.match(holdings, /id: 'us-1837-ht-34-burro-tortuga', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1837-ht-34-low-20/);
  });

  it('keeps thin ES and EN routes and catalog photographs', () => {
    assert.match(esHt34, /UnitedStatesCoinPage locale="es"/);
    assert.match(enHt34, /UnitedStatesCoinPage locale="en"/);
    assert.match(esHt34, /coinById\('ht-34-1837-burro-tortuga'\)/);
    assert.match(data, /ht-34-1837-burro-tortuga-composite\.jpg/);
    assert.match(data, /ht-34-1837-burro-tortuga-front\.jpg/);
    assert.match(data, /ht-34-1837-burro-tortuga-back\.jpg/);
  });
});
