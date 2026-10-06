import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./liberia-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esSeries = readFileSync(
  new URL('../pages/coleccion/liberia-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/liberia-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/liberia-numismatica/20-dolares-1997-dragon-hong-kong/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL(
    '../pages/en/collection/liberia-numismatics/20-dollars-1997-dragon-hong-kong/index.astro',
    import.meta.url,
  ),
  'utf8',
);

describe('Liberia 1997 20 dollars Hong Kong handover', () => {
  it('registers one bilingual coin and one no-serial holding', () => {
    assert.match(data, /LIBERIA_COINAGE_PATH = '\/coleccion\/liberia-numismatica\/'/);
    assert.equal(
      localizePath('/coleccion/liberia-numismatica/', 'en'),
      '/en/collection/liberia-numismatics/',
    );
    assert.equal(
      localizePath('/coleccion/liberia-numismatica/20-dolares-1997-dragon-hong-kong/', 'en'),
      '/en/collection/liberia-numismatics/20-dollars-1997-dragon-hong-kong/',
    );
    assert.match(data, /id: '20-dolares-1997-dragon-hong-kong'/);
    assert.match(data, /no_serial_reason:\n      'Milled Liberia 1997 20-dollar commemorative/);
    assert.match(data, /references: 'KM sin asignar'/);
    assert.match(data, /No se asigna KM#317 ni Fr#61/);
    assert.match(data, /KM#317 and Fr#61 are not assigned/);
    assert.doesNotMatch(data, /6,22 g|6\.22 g|22 mm|0,9999|0\.9999/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.match(holdings, /id: 'lr-1997-20-dollars-dragon-hong-kong', kind: 'coin', country: 'LR'/);
    assert.match(holdings, /id: 'lr-1997-20-dollars-hong-kong-handover'/);
  });

  it('reads the 20-dollar legends and does not borrow the 100-dollar specifications', () => {
    assert.match(data, /20 DOLLARS/);
    assert.match(data, /\$20/);
    assert.match(data, /一九九七香港回歸紀念/);
    assert.match(data, /THE LOVE OF LIBERTY BROUGHT US HERE/);
    assert.match(data, /No determinada/);
    assert.match(data, /Not established/);
    assert.match(data, /No pesado/);
    assert.match(data, /Not weighed/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /LiberiaCoinagePage locale="es"/);
    assert.match(enSeries, /LiberiaCoinagePage locale="en"/);
    assert.match(esCoin, /LiberiaCoinPage locale="es"/);
    assert.match(enCoin, /LiberiaCoinPage locale="en"/);
  });
});
