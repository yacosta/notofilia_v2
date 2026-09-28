import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/10-dolares-serie-1934a-nueva-york/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/10-dollars-series-1934a-new-york/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '10-dolares-serie-1934a-nueva-york'");
const noteEnd = data.indexOf("id: '10-dolares-serie-1934c-kansas-city'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1934A New York $10 Fr. 2006-B', () => {
  it('records Fr. 2006-B with serial B42488184B inside the combined New York span', () => {
    assert.ok(noteStart > 0);
    assert.match(note, /chapterId: 'us-frb'/);
    assert.match(note, /pick: 'P#430Da · Fr\. 2006-B'/);
    assert.match(note, /serial: 'B42488184B'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /B00000001A–B83288000F/);
    assert.match(note, /no es la tirada ni el rango exclusivo/);
    assert.match(note, /not the printage or the exclusive range/);
    assert.match(note, /B71688001D/);
    assert.match(note, /plancha de anverso F219/);
    assert.match(note, /face plate F219/);
    assert.match(note, /plancha 938/);
    assert.match(note, /Plate 938/);
    assert.match(note, /emisión ordinaria/);
    assert.match(note, /ordinary issue/);
    assert.match(note, /Sin graduar/);
    assert.match(note, /Ungraded/);
    assert.match(note, /es: '10 dólares · Serie 1934 A · Nueva York'/);
    assert.match(note, /en: '\$10 · Series 1934A · New York'/);
    assert.match(holdings, /us-frn-1934a-10-new-york-b42488184/);
    assert.match(holdings, /id: 'us-frn-1934a-10-new-york-b42488184', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-frn-1934a-10-new-york-fr2006b/);
    assert.match(data, /10 dólares de 1934 A del distrito de Nueva York \(B \/ 2\), serial B42488184B/);
    assert.match(data, /Series 1934A New York \(B \/ 2\) \$10, serial B42488184B/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934a-nueva-york/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934a-new-york/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('10-dolares-serie-1934a-nueva-york'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /b42488184b-composite\.jpg/);
    assert.match(note, /b42488184b-front\.jpg/);
    assert.match(note, /b42488184b-back\.jpg/);
  });
});
