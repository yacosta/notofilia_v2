import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./puerto-rico-coinage.ts', import.meta.url), 'utf8');
const notes = readFileSync(new URL('./puerto-rico.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const numismatica = readFileSync(new URL('./numismatica.ts', import.meta.url), 'utf8');
const notesPage = readFileSync(new URL('../components/catalog/PuertoRicoSeriesPage.astro', import.meta.url), 'utf8');
const esSeries = readFileSync(
  new URL('../pages/coleccion/puerto-rico-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/puerto-rico-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/puerto-rico-numismatica/20-centavos-1895-pgv/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/puerto-rico-numismatics/20-centavos-1895-pgv/index.astro', import.meta.url),
  'utf8',
);

describe('Puerto Rico 1895 20 centavos PGV', () => {
  it('registers one bilingual coinage series and one no-serial holding', () => {
    assert.match(data, /PUERTO_RICO_COINAGE_PATH = '\/coleccion\/puerto-rico-numismatica\/'/);
    assert.equal(
      localizePath('/coleccion/puerto-rico-numismatica/', 'en'),
      '/en/collection/puerto-rico-numismatics/',
    );
    assert.equal(
      localizePath('/coleccion/puerto-rico-numismatica/20-centavos-1895-pgv/', 'en'),
      '/en/collection/puerto-rico-numismatics/20-centavos-1895-pgv/',
    );
    assert.match(data, /id: '20-centavos-1895-pgv'/);
    assert.match(data, /no_serial_reason:\n      'Milled Puerto Rican provincial silver 20 centavos/);
    assert.match(data, /KM#22 · Numista N#17451 · PCGS#976911/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+/);
    assert.match(holdings, /id: 'pr-1895-20-centavos-pgv', kind: 'coin', country: 'PR'/);
    assert.match(holdings, /pr-1895-20-centavos-km22/);
  });

  it('records the legends read on the genuine type, not the generated image', () => {
    assert.match(data, /ALFONSO XIII P\.L\.G\.D\.D\. REY C\. DE ESPAÑA/);
    assert.match(data, /P·G· 20 CENTAVOS ·V·/);
    assert.match(data, /Plata \.835/);
    assert.match(data, /Silver \.835/);
    assert.doesNotMatch(data, /XIIII/);
    assert.doesNotMatch(data, /POR LA G\. DE DIOS/);
    assert.doesNotMatch(data, /PLATA · 0\.900|PLATA 0\.900/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /PuertoRicoCoinagePage locale="es"/);
    assert.match(enSeries, /PuertoRicoCoinagePage locale="en"/);
    assert.match(esCoin, /PuertoRicoCoinPage locale="es"/);
    assert.match(enCoin, /PuertoRicoCoinPage locale="en"/);
    assert.match(data, /puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-composite\.jpg/);
    assert.match(data, /puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-front\.jpg/);
    assert.match(data, /puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-back\.jpg/);
  });

  it('opens Puerto Rico in the numismatics index and cross-links the paper case', () => {
    assert.match(numismatica, /href: PUERTO_RICO_COINAGE_PATH/);
    assert.match(notes, /coinageLink: 'Puerto Rico · Numismática'/);
    assert.match(notes, /coinageLink: 'Puerto Rico · Numismatics'/);
    assert.match(notesPage, /PUERTO_RICO_COINAGE_PATH/);
    assert.doesNotMatch(notesPage, /target="_blank"/);
  });
});
