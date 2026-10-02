import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./espana-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const numismatica = readFileSync(new URL('./numismatica.ts', import.meta.url), 'utf8');
const esSeries = readFileSync(
  new URL('../pages/coleccion/espana-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/spain-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/espana-numismatica/medio-escudo-madrid-1757-jb/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/spain-numismatics/half-escudo-madrid-1757-jb/index.astro', import.meta.url),
  'utf8',
);
const esCentimos = readFileSync(
  new URL('../pages/coleccion/espana-numismatica/50-centimos-alfonso-xiii-1892-pgm/index.astro', import.meta.url),
  'utf8',
);
const enCentimos = readFileSync(
  new URL('../pages/en/collection/spain-numismatics/50-centimos-alfonso-xiii-1892-pgm/index.astro', import.meta.url),
  'utf8',
);

describe('Spain Ferdinand VI 1757 Madrid half escudo', () => {
  it('registers one bilingual coinage series and one no-serial holding', () => {
    assert.match(data, /SPAIN_COINAGE_PATH = '\/coleccion\/espana-numismatica\/'/);
    assert.equal(localizePath('/coleccion/espana-numismatica/', 'en'), '/en/collection/spain-numismatics/');
    assert.equal(
      localizePath('/coleccion/espana-numismatica/medio-escudo-madrid-1757-jb/', 'en'),
      '/en/collection/spain-numismatics/half-escudo-madrid-1757-jb/',
    );
    assert.match(data, /id: 'medio-escudo-madrid-1757-jb'/);
    assert.match(data, /no_serial_reason:\n      'Milled Spanish gold half escudo/);
    assert.match(data, /KM#378 · Fr#274/);
    assert.match(data, /Madrid \(M coronada\); ensaye JB/);
    assert.match(data, /FERDINAND · VI/);
    assert.match(data, /HISPANIARUM · REX/);
    assert.match(data, /Fernando VII/);
    assert.match(data, /Ferdinand VII/);
    assert.match(data, /Santa Fe/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+/);
    assert.match(holdings, /id: 'es-1757-medio-escudo-madrid-jb', kind: 'coin', country: 'ES'/);
    assert.match(holdings, /es-1757-half-escudo-km378/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /SpainCoinagePage locale="es"/);
    assert.match(enSeries, /SpainCoinagePage locale="en"/);
    assert.match(esCoin, /SpainCoinPage locale="es"/);
    assert.match(enCoin, /SpainCoinPage locale="en"/);
    assert.match(data, /spain-madrid-medio-escudo-1757-ferdinand-vi-jb-composite\.jpg/);
    assert.match(data, /spain-madrid-medio-escudo-1757-ferdinand-vi-jb-front\.jpg/);
    assert.match(data, /spain-madrid-medio-escudo-1757-ferdinand-vi-jb-back\.jpg/);
  });

  it('registers the 1892 Alfonso XIII 50 centimos with the Obv/Rev filenames', () => {
    assert.equal(
      localizePath('/coleccion/espana-numismatica/50-centimos-alfonso-xiii-1892-pgm/', 'en'),
      '/en/collection/spain-numismatics/50-centimos-alfonso-xiii-1892-pgm/',
    );
    assert.match(data, /id: '50-centimos-alfonso-xiii-1892-pgm'/);
    assert.match(data, /no_serial_reason:\n      'Struck Spanish silver 50 centimos/);
    assert.match(data, /KM#690 · Cal# 54–57 · Numista N#18485/);
    assert.match(data, /ESP_1892_50-Centimos_AlfonsoXIII_Obv\.png/);
    assert.match(data, /ESP_1892_50-Centimos_AlfonsoXIII_Rev\.png/);
    assert.match(data, /ESP_1892_50-Centimos_AlfonsoXIII_Composite\.png/);
    assert.match(data, /B·V/);
    assert.match(data, /no se asigna Cal# 55|does not assign Cal# 55/);
    assert.match(esCentimos, /SpainCoinPage locale="es"/);
    assert.match(enCentimos, /SpainCoinPage locale="en"/);
    assert.match(holdings, /id: 'es-1892-50-centimos-alfonso-xiii-pgm', kind: 'coin', country: 'ES'/);
    assert.match(holdings, /es-1892-50-centimos-km690/);
    assert.doesNotMatch(data, /\$\d+/);
  });

  it('opens Spain in the numismatics index', () => {
    assert.match(numismatica, /href: SPAIN_COINAGE_PATH/);
    assert.match(numismatica, /Hoy abren Colombia-Numismática, España/);
    assert.match(numismatica, /Colombia-Numismatics, Spain/);
  });
});
