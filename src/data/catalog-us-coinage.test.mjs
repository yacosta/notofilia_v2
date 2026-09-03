import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
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
    assert.match(data, /no_serial_reason:/);
    assert.match(data, /Latón-manganeso/);
    assert.doesNotMatch(data, /oro 24 quilates de esta pieza/);
    assert.match(data, /Never Surrender/);
    assert.match(data, /JULY 4th/);
    assert.match(data, /agotó esos rollos/);
    assert.match(data, /sold out those rolls/);
    assert.match(holdings, /us-2026-1-dollar-trump-1776-2026/);
    assert.match(holdings, /id: 'us-2026-1-dollar-trump-1776-2026', kind: 'coin', country: 'US'/);
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
});
