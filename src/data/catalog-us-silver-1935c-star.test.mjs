import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { additions, catalogAdditions } from './holdings.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const glossary = readFileSync(new URL('./glossary.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-certificado-plata-1935c-estrella/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-silver-certificate-1935c-star/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-certificado-plata-1935c-estrella'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1957b'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));

describe('US Series 1935C star $1 Fr. 1612★', () => {
  it('records Fr. 1612★ / P#416c with ordinary replacement serial ★25885207B', () => {
    assert.ok(noteStart > 0);
    assert.ok(noteEnd > noteStart);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Fr\. 1612★'/);
    assert.match(note, /friedberg: 'Fr\. 1612★'/);
    assert.match(note, /scwpm: 'P#416c'/);
    assert.match(note, /serial: '★25885207B'/);
    assert.match(note, /serial_display: '★ 25885207 B'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /John W\. Snyder/);
    assert.match(note, /G5965/);
    assert.match(note, /4088/);
    assert.match(note, /bloque ★–B/);
    assert.match(note, /★–B block/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.match(note, /IN GOD WE TRUST/);
    assert.match(note, /no es por sí misma un error de impresión/);
    assert.match(note, /it is not itself a printing error/);
    assert.match(note, /no es un serial bajo/);
    assert.match(note, /not a low serial/);
    assert.match(printed, /★25885207B/);
    assert.match(printed, /no publica un total oficial/);
    assert.match(printed, /does not publish an official star total/);
    assert.doesNotMatch(printed, /36[,.]8/);
    assert.doesNotMatch(note, /12802025/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.equal(additions.at(-1)?.id, 'us-sc-1935c-star-25885207b');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-sc-1935c-fr1612-star');
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1935c-estrella/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1935c-star/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-certificado-plata-1935c-estrella'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935c-silver-certificate-star-25885207b-front\.jpg/,
    );
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });

  it('names the holding in the Silver Certificates chapter, glossary, and FAQ', () => {
    assert.match(data, /1 dólar de sello azul serie 1935 C con estrella de reposición \(P#416c; Fr\. 1612★\), serial ★25885207B/);
    assert.match(data, /blue-seal Series 1935C \$1 star replacement \(P#416c; Fr\. 1612★\), serial ★25885207B/);
    assert.match(faq, /¿Qué es el 1 dólar certificado de plata serie 1935 C con estrella\?/);
    assert.match(faq, /What is the Series 1935C \$1 Silver Certificate star note\?/);
    assert.match(faq, /serial ★25885207B/);
    assert.match(glossary, /Fr\. 1612★, serial ★25885207B/);
  });
});
