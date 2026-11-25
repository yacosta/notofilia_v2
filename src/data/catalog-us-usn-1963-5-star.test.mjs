import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { additions, catalogAdditions } from './holdings.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const glossary = readFileSync(new URL('./glossary.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-serie-1963-estrella/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-series-1963-star/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '5-dolares-serie-1963-estrella'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1896'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));

describe('US Series 1963 star $5 Fr. 1536★', () => {
  it('records Fr. 1536★ / P#383 with ordinary replacement serial ★02955091A', () => {
    assert.ok(noteStart > 0);
    assert.ok(noteEnd > noteStart);
    assert.match(note, /chapterId: 'us-notes'/);
    assert.match(note, /pick: 'Fr\. 1536★'/);
    assert.match(note, /friedberg: 'Fr\. 1536★'/);
    assert.match(note, /scwpm: 'P#383'/);
    assert.match(note, /serial: '★02955091A'/);
    assert.match(note, /serial_display: '★02955091A'/);
    assert.match(note, /Kathryn O’Hay Granahan/);
    assert.match(note, /C\. Douglas Dillon/);
    assert.match(note, /D3/);
    assert.match(note, /D8/);
    assert.match(note, /bloque ★–A/);
    assert.match(note, /★–A block/);
    assert.match(note, /3\.840\.000/);
    assert.match(note, /3,840,000/);
    assert.match(note, /63\.360\.000/);
    assert.match(note, /63,360,000/);
    assert.match(note, /IN GOD WE TRUST/);
    assert.match(note, /no es por sí misma un error de impresión/);
    assert.match(note, /it is not itself a printing error/);
    assert.match(note, /no es un serial bajo/);
    assert.match(note, /not a low serial/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.match(printed, /★02955091A/);
    assert.match(printed, /marzo de 1964 y noviembre de 1967/);
    assert.match(printed, /March 1964 and November 1967/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.doesNotMatch(note, /Decreto 188/);
    assert.equal(additions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-serie-1963-estrella/', 'en'),
      '/en/collection/united-states/5-dollars-series-1963-star/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-serie-1963-estrella'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-5-dollars-series-1963-united-states-note-star-02955091a-front\.jpg/,
    );
    assert.match(note, /width: 1376/);
    assert.match(note, /height: 612/);
  });

  it('names the holding in the United States Notes chapter, glossary, and FAQ', () => {
    assert.match(
      data,
      /Ya tiene ficha el 5 dólares de la serie 1963 con estrella, Fr\. 1536★, serial ★02955091A/,
    );
    assert.match(
      data,
      /The Series 1963 \$5 star, Fr\. 1536★, serial ★02955091A, red seal and the motto IN GOD WE TRUST/,
    );
    assert.match(faq, /¿Qué es el 5 dólares United States Note de 1963 con estrella\?/);
    assert.match(faq, /What is the Series 1963 United States Note \$5 star note\?/);
    assert.match(faq, /serial de reposición ★02955091A/);
    assert.match(glossary, /Fr\. 1536★, serial ★02955091A/);
  });
});
