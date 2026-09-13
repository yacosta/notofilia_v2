import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-continental-1779/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-continental-1779/index.astro', import.meta.url),
  'utf8',
);

describe('US colonial Continental Currency $5 of 14 January 1779', () => {
  it('records CC-91 without inventing a serial', () => {
    assert.match(data, /id: '5-dolares-continental-1779'/);
    assert.match(data, /chapterId: 'us-colonial'/);
    assert.match(data, /pick: 'Fr\. CC-91'/);
    assert.match(data, /serial: '—'/);
    assert.match(
      data,
      /no_serial_reason:\n      'The manuscript No\. field was numbered in red at issue; it is illegible on this photograph and is not invented here\.'/,
    );
    assert.match(data, /Watkins \(ángulo inferior derecho\)/);
    assert.match(data, /Watkins \(lower right\)/);
    assert.match(data, /Hall and Sellers, Filadelfia, 1779/);
    assert.match(data, /Hall and Sellers, Philadelphia, 1779/);
    assert.match(data, /SUSTINE VEL ABSTINE/);
    assert.match(data, /95\.051\.695/);
    assert.match(data, /\$95,051,695/);
    assert.match(data, /Esta ficha no inventa una tirada para el 5 dólares/);
    assert.match(data, /This record does not invent a printage for the \$5/);
    assert.match(data, /Numista N#335875/);
    assert.match(data, /ni el 30 dólares CC-93/);
    assert.match(data, /nor the \$30 CC-93/);
    assert.doesNotMatch(data.slice(data.indexOf("id: '5-dolares-continental-1779'"), data.indexOf("id: '2-chelines-6-peniques-pensilvania-1773'")), /serial: '\d/);
    assert.doesNotMatch(data.slice(data.indexOf("id: '5-dolares-continental-1779'"), data.indexOf("id: '2-chelines-6-peniques-pensilvania-1773'")), /cert_number:/);
    assert.match(holdings, /us-cc-91-5-1779/);
    assert.match(holdings, /id: 'us-cc-91-5-1779', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-cc-91-1779-5/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-continental-1779/', 'en'),
      '/en/collection/united-states/5-dollars-continental-1779/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-continental-1779'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(data, /cc-91-5-dollars-1779-composite\.jpg/);
    assert.match(data, /cc-91-5-dollars-1779-front\.jpg/);
    assert.match(data, /cc-91-5-dollars-1779-back\.jpg/);
  });

  it('names the holding in the colonial chapter and the series inventory', () => {
    assert.match(data, /Ya tienen ficha el 5 dólares del 14 de enero de 1779, Friedberg CC-91/);
    assert.match(data, /The \$5 of 14 January 1779, Friedberg CC-91/);
    assert.match(data, /el 5 dólares continental del 14 de enero de 1779 \(Fr\. CC-91/);
    assert.match(data, /The Continental \$5 of 14 January 1779 \(Fr\. CC-91/);
  });
});

describe('US colonial Pennsylvania 2s6d of 1 October 1773', () => {
  const esPiece = readFileSync(
    new URL('../pages/coleccion/estados-unidos/2-chelines-6-peniques-pensilvania-1773/index.astro', import.meta.url),
    'utf8',
  );
  const enPiece = readFileSync(
    new URL('../pages/en/collection/united-states/2-shillings-6-pence-pennsylvania-1773/index.astro', import.meta.url),
    'utf8',
  );
  const pa = data.slice(
    data.indexOf("id: '2-chelines-6-peniques-pensilvania-1773'"),
    data.indexOf("id: '1-dolar-state-bank-new-brunswick'"),
  );

  it('records PA-165 with serial 21251 and no invented cert', () => {
    assert.match(pa, /chapterId: 'us-colonial'/);
    assert.match(pa, /pick: 'Fr\. PA-165'/);
    assert.match(pa, /serial: '21251'/);
    assert.match(pa, /serial_display: 'No\. 21251'/);
    assert.match(pa, /Benjamin Morgan; Barnaby Barnes; Samuel Fisher junr/);
    assert.match(pa, /Hall and Sellers, Filadelfia, 1773/);
    assert.match(pa, /Hall and Sellers, Philadelphia, 1773/);
    assert.match(pa, /28\.318/);
    assert.match(pa, /28,318/);
    assert.match(pa, /Esta ficha no inventa una tirada para este ejemplar/);
    assert.match(pa, /This record does not invent a printage for this piece/);
    assert.match(pa, /cast cut/);
    assert.match(pa, /share\.gemini\.google\/t3fSELWeqtml/);
    assert.doesNotMatch(pa, /cert_number:/);
    assert.match(holdings, /us-pa-165-2s6d-1773-21251/);
    assert.match(holdings, /id: 'us-pa-165-2s6d-1773-21251', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-pa-165-1773-2s6d/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/2-chelines-6-peniques-pensilvania-1773/', 'en'),
      '/en/collection/united-states/2-shillings-6-pence-pennsylvania-1773/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('2-chelines-6-peniques-pensilvania-1773'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(pa, /pa-165-2s6d-1773-21251-composite\.jpg/);
    assert.match(pa, /pa-165-2s6d-1773-21251-front\.jpg/);
    assert.match(pa, /pa-165-2s6d-1773-21251-back\.jpg/);
  });

  it('names the holding in the colonial chapter and the series inventory', () => {
    assert.match(data, /el 2 chelines y 6 peniques de Pensilvania del 1 de octubre de 1773, Friedberg PA-165, serial 21251/);
    assert.match(data, /the Pennsylvania 2 shillings and 6 pence of 1 October 1773, Friedberg PA-165, serial 21251/);
    assert.match(data, /el 2 chelines y 6 peniques de Pensilvania del 1 de octubre de 1773 \(Fr\. PA-165\), serial 21251/);
    assert.match(data, /the Pennsylvania 2 shillings and 6 pence of 1 October 1773 \(Fr\. PA-165\), serial 21251/);
  });
});
