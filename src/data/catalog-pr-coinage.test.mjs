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
const es10 = readFileSync(
  new URL('../pages/coleccion/puerto-rico-numismatica/10-centavos-alfonso-xiii-pgv/index.astro', import.meta.url),
  'utf8',
);
const en10 = readFileSync(
  new URL('../pages/en/collection/puerto-rico-numismatics/10-centavos-alfonso-xiii-pgv/index.astro', import.meta.url),
  'utf8',
);
const coinPage = readFileSync(new URL('../components/catalog/PuertoRicoCoinPage.astro', import.meta.url), 'utf8');
const record10 = data.split("id: '10-centavos-alfonso-xiii-pgv'")[1]?.split('\n  },\n];')[0] ?? '';

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
  });

  it('shows blank placeholders while the 20 centavos has no photographs', () => {
    assert.doesNotMatch(data, /puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-(front|back|composite)\.jpg/);
    assert.doesNotMatch(data, /Las fotografías son del objeto|The photographs are of the object/);
  });

  it('opens Puerto Rico in the numismatics index and cross-links the paper case', () => {
    assert.match(numismatica, /href: PUERTO_RICO_COINAGE_PATH/);
    assert.match(notes, /coinageLink: 'Puerto Rico · Numismática'/);
    assert.match(notes, /coinageLink: 'Puerto Rico · Numismatics'/);
    assert.match(notesPage, /PUERTO_RICO_COINAGE_PATH/);
    assert.doesNotMatch(notesPage, /target="_blank"/);
  });
});

describe('Puerto Rico 10 centavos PGV with apparent date 1895', () => {
  it('registers one bilingual no-serial holding on a dateless slug', () => {
    assert.ok(record10);
    assert.equal(
      localizePath('/coleccion/puerto-rico-numismatica/10-centavos-alfonso-xiii-pgv/', 'en'),
      '/en/collection/puerto-rico-numismatics/10-centavos-alfonso-xiii-pgv/',
    );
    assert.match(record10, /no_serial_reason:\n      'Milled Puerto Rican provincial silver 10 centavos/);
    assert.doesNotMatch(record10, /serial: '/);
    assert.doesNotMatch(record10, /cert_number:/);
    assert.doesNotMatch(record10, /\$\d+/);
    assert.match(holdings, /id: 'pr-10-centavos-alfonso-xiii-pgv', kind: 'coin', country: 'PR'/);
    assert.match(holdings, /pr-10-centavos-cf-km21/);
    assert.match(es10, /PuertoRicoCoinPage locale="es"/);
    assert.match(en10, /PuertoRicoCoinPage locale="en"/);
  });

  it('cites the 1896 type with cf. instead of assigning KM#21', () => {
    assert.match(record10, /references: 'cf\. KM#21 · cf\. Numista N#17450 · cf\. PCGS#976903'/);
    assert.doesNotMatch(record10, /references: 'KM#21/);
    assert.match(record10, /yearNote: \{/);
    assert.match(record10, /El tipo de 10 centavos está fechado en 1896/);
    assert.match(record10, /The 10 centavos type is dated 1896/);
    assert.match(coinPage, /coin\.yearNote\[locale\]/);
    assert.match(coinPage, /coin\.referencesNote\[locale\]/);
  });

  it('records the date as read in the photograph and the type date beside it', () => {
    assert.match(record10, /★ 1895 ★ \(fecha leída en la fotografía; el tipo lleva ★ 1896 ★\)/);
    assert.match(record10, /★ 1895 ★ \(date as read in the photograph; the type carries ★ 1896 ★\)/);
    assert.match(record10, /P·G· 10 CENTAVOS ·V·/);
    assert.match(record10, /title: \{\n      es: '10 centavos · Alfonso XIII · fecha aparente 1895'/);
    assert.match(record10, /en: '10 Centavos · Alfonso XIII · apparent date 1895'/);
    assert.match(record10, /heading: \{\n      es: 'Moneda de 10 centavos, fecha aparente 1895',\n      en: '10 Centavos coin, apparent date 1895'/);
    assert.match(coinPage, /heading: coin\.heading\?\.\[locale\]/);
  });

  it('keeps both fineness readings and the type weight and diameter unmeasured', () => {
    assert.match(record10, /\.900 según Numista y Greysheet; la tabla de Wikipedia en inglés da \.835/);
    assert.match(record10, /No pesado\. Tipo: 2,5 g/);
    assert.match(record10, /No medido\. Tipo: 18 mm/);
  });

  it('uses untrimmed masters named for the piece', () => {
    for (const face of ['front', 'back', 'composite']) {
      assert.match(record10, new RegExp(`puerto-rico-madrid-10-centavos-alfonso-xiii-pgv-${face}\\.jpg`));
    }
    assert.match(record10, /width: 1672,\n      height: 941,\n      faceWidth: 836,\n      faceHeight: 941/);
  });
});
