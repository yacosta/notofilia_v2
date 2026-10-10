import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL(
    '../pages/coleccion/estados-unidos/1-dolar-sello-amarillo-1935a-c78095129c/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const enPiece = readFileSync(
  new URL(
    '../pages/en/collection/united-states/1-dollar-yellow-seal-1935a-c78095129c/index.astro',
    import.meta.url,
  ),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-sello-amarillo-1935a-c78095129c'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1957b'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));

describe('US Series 1935A yellow-seal $1 Fr. 2306, serial C78095129C', () => {
  it('records a second Fr. 2306 inside the second C–C North Africa run', () => {
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Fr\. 2306'/);
    assert.match(note, /friedberg: 'Fr\. 2306'/);
    assert.match(note, /scwpm: 'P#416AY'/);
    assert.match(note, /serial: 'C78095129C'/);
    assert.match(note, /serial_display: 'C 78095129 C'/);
    assert.doesNotMatch(note, /serial: 'B52497547C'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /E4291/);
    assert.match(note, /2950/);
    assert.match(printed, /26\.916\.000/);
    assert.match(printed, /26,916,000/);
    assert.match(printed, /C78000001C–C79904000C/);
    assert.match(printed, /1\.904\.000/);
    assert.match(printed, /1,904,000/);
    assert.match(printed, /95\.129/);
    assert.match(printed, /95,129/);
    assert.doesNotMatch(printed, /designación no es el año/);
    assert.doesNotMatch(printed, /designation is not the year/);
    assert.match(note, /segunda corrida de sello amarillo, C78000001C–C79904000C/);
    assert.match(note, /second yellow-seal run, C78000001C–C79904000C/);
    assert.match(note, /C60000001C–C62000000C/);
    assert.match(note, /2\.000\.000/);
    assert.match(note, /2,000,000/);
    assert.match(note, /3\.904\.000/);
    assert.match(note, /3,904,000/);
    assert.match(note, /17\.012\.000/);
    assert.match(note, /17,012,000/);
    assert.match(note, /sin estrella de reemplazo/);
    assert.match(note, /no replacement star/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.match(note, /manchas pardas/);
    assert.match(note, /brown spotting/);
    assert.match(note, /posición numérica 95\.129/);
    assert.match(note, /numerical position 95,129/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.match(holdings, /id: 'us-sc-1935a-yellow-seal-c78095129c', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1935a-yellow-seal-fr2306-c78095129c/);
  });

  it('keeps thin ES and EN piece routes and the uncropped scan size', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-sello-amarillo-1935a-c78095129c/', 'en'),
      '/en/collection/united-states/1-dollar-yellow-seal-1935a-c78095129c/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-sello-amarillo-1935a-c78095129c'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-c78095129c-composite\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-c78095129c-front\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-c78095129c-back\.jpg/,
    );
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });
});
