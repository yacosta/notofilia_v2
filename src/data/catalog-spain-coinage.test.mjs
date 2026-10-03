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

  it('opens Spain in the numismatics index', () => {
    assert.match(numismatica, /href: SPAIN_COINAGE_PATH/);
    assert.match(numismatica, /2 escudos de Sevilla de Felipe II/);
    assert.match(numismatica, /Philip II’s undated Seville 2 escudos/);
  });
});

describe('Spain Philip II Seville undated 2 escudos', () => {
  it('registers one bilingual no-serial holding for Calicó 828', () => {
    assert.equal(
      localizePath('/coleccion/espana-numismatica/2-escudos-sevilla-felipe-ii-s-d/', 'en'),
      '/en/collection/spain-numismatics/2-escudos-seville-philip-ii-s-d/',
    );
    assert.match(data, /id: '2-escudos-sevilla-felipe-ii-s-d'/);
    assert.match(data, /no_serial_reason:\n      'Hammered Spanish gold 2 escudos/);
    assert.match(data, /Áureo & Calicó#828 · Fr#169 · Tauler-31/);
    assert.match(data, /Sevilla \(S\); ensaye D cuadrada/);
    assert.match(data, /PHILIPPVS · II · DEI · GRATIA/);
    assert.match(data, /HISPANIARVM/);
    assert.match(data, /Melchor Damián/);
    assert.match(data, /No pesado/);
    assert.match(data, /Not weighed/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+/);
    assert.match(holdings, /id: 'es-nd-2-escudos-sevilla-felipe-ii-sd', kind: 'coin', country: 'ES'/);
    assert.match(holdings, /es-nd-2-escudos-sevilla-cal828/);
    assert.match(data, /spain-seville-2-escudos-nd-philip-ii-s-d-composite\.jpg/);
    assert.match(data, /spain-seville-2-escudos-nd-philip-ii-s-d-front\.jpg/);
    assert.match(data, /spain-seville-2-escudos-nd-philip-ii-s-d-back\.jpg/);
  });
});
