import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/10-dolares-certificado-oro-1922/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/10-dollars-gold-certificate-1922/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '10-dolares-certificado-oro-1922'");
const noteEnd = data.indexOf('export const notePageCopy');
const note = data.slice(noteStart, noteEnd);

describe('US Series 1922 Gold Certificate $10 Fr. 1173', () => {
  it('records Fr. 1173 / P#274(1) with ordinary serial K53955033', () => {
    assert.ok(noteStart > 0);
    assert.match(note, /chapterId: 'us-gold'/);
    assert.match(note, /pick: 'P#274\(1\) · Fr\. 1173'/);
    assert.match(note, /serial: 'K53955033'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /Harley V\. Speelman/);
    assert.match(note, /Frank White/);
    assert.match(note, /E 200/);
    assert.match(note, /No se lee un número de plancha de reverso/);
    assert.match(note, /No back-plate number is readable/);
    assert.match(note, /no inventa una tirada/);
    assert.match(note, /does not invent a printage/);
    assert.match(note, /N#239482/);
    assert.match(note, /189 × 79 mm/);
    assert.match(note, /no es una medición de esta pieza/);
    assert.match(note, /not a measurement of this piece/);
    assert.match(note, /Hillegas/);
    assert.match(note, /no es estrella/);
    assert.match(note, /it is not a star/);
    assert.match(note, /sin encapsular/);
    assert.match(note, /unslabbed/);
    assert.match(note, /No se inventa un censo/);
    assert.match(note, /No census and no market premium/);
    assert.match(note, /no republica cifras de población/);
    assert.match(note, /does not republish population figures/);
    assert.match(note, /en: '\$10 · Gold Certificate · Series 1922'/);
    assert.match(note, /es: '10 dólares · Certificado de oro · Serie 1922'/);
    assert.match(holdings, /id: 'us-gc-1922-10-k53955033', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-gc-1922-10-fr1173/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-certificado-oro-1922/', 'en'),
      '/en/collection/united-states/10-dollars-gold-certificate-1922/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('10-dolares-certificado-oro-1922'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-10-dollars-series-1922-gold-certificate-hillegas-k53955033-composite\.jpg/);
    assert.match(note, /united-states-treasury-10-dollars-series-1922-gold-certificate-hillegas-k53955033-front\.jpg/);
    assert.match(note, /united-states-treasury-10-dollars-series-1922-gold-certificate-hillegas-k53955033-back\.jpg/);
    assert.match(note, /No es un United States Note de sello rojo/);
    assert.match(note, /It is not a red-seal United States Note/);
  });
});
