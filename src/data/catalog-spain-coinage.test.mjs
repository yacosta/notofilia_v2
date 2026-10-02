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
const esPelon = readFileSync(
  new URL('../pages/coleccion/espana-numismatica/50-centimos-madrid-1892-alfonso-xiii-pg-m/index.astro', import.meta.url),
  'utf8',
);
const enPelon = readFileSync(
  new URL('../pages/en/collection/spain-numismatics/50-centimos-madrid-1892-alfonso-xiii-pg-m/index.astro', import.meta.url),
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

  it('registers the 1892 Alfonso XIII 50 céntimos as a second no-serial holding', () => {
    assert.equal(
      localizePath('/coleccion/espana-numismatica/50-centimos-madrid-1892-alfonso-xiii-pg-m/', 'en'),
      '/en/collection/spain-numismatics/50-centimos-madrid-1892-alfonso-xiii-pg-m/',
    );
    assert.match(data, /id: '50-centimos-madrid-1892-alfonso-xiii-pg-m'/);
    assert.match(data, /chapterId: 'alfonso-xiii'/);
    assert.match(data, /KM#690 · Numista N#18485/);
    assert.match(data, /P·G·/);
    assert.match(data, /Gregorio Sellán/);
    assert.match(data, /3\.953\.540/);
    assert.match(data, /3,954,000/);
    assert.match(data, /no_serial_reason:\n      'Milled Spanish silver 50 céntimos/);
    assert.match(data, /spain-madrid-50-centimos-1892-alfonso-xiii-pg-m-composite\.jpg/);
    assert.match(data, /spain-madrid-50-centimos-1892-alfonso-xiii-pg-m-front\.jpg/);
    assert.match(data, /spain-madrid-50-centimos-1892-alfonso-xiii-pg-m-back\.jpg/);
    assert.doesNotMatch(data, /ESP_1892/);
    assert.match(data, /Cayón-17595 se cita en esa ficha de variedad, no aquí/);
    assert.doesNotMatch(data, /references: 'KM#690 · Numista N#18485 · Cayón/);
    assert.match(data, /no se transcriben/);
    assert.match(data, /not transcribed/);
    assert.doesNotMatch(data, /\$\d+/);
    assert.match(holdings, /id: 'es-50-centimos-madrid-1892-alfonso-xiii-pg-m', kind: 'coin', country: 'ES'/);
    assert.match(holdings, /id: 'es-1892-50-centimos-km690'/);
    assert.match(esPelon, /SpainCoinPage locale="es"/);
    assert.match(enPelon, /SpainCoinPage locale="en"/);
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

  it('opens Spain in the numismatics index', () => {
    assert.match(numismatica, /href: SPAIN_COINAGE_PATH/);
    assert.match(numismatica, /50 céntimos de Alfonso XIII, 1892/);
    assert.match(numismatica, /Alfonso XIII’s 50 céntimos, 1892/);
    assert.match(numismatica, /Hoy abren Colombia-Numismática, España/);
  });
});
