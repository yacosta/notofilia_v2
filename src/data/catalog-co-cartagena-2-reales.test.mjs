import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const pieces = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const start = pieces.indexOf("id: '2-reales-cartagena-1812-1814'");
const end = pieces.indexOf("id: '1-4-real-santa-marta-1820'", start);
const piece = pieces.slice(start, end);

describe('Cartagena copper 2 reales', () => {
  it('records KM D1 without a date, a value mark, or a measured module', () => {
    assert.match(piece, /KM# D1 · Restrepo 136 · Hernández 195/);
    assert.match(piece, /ca\. 1812–1814/);
    assert.match(piece, /…O · DE · CARTA…/);
    assert.match(piece, /no se transcriben/);
    assert.match(piece, /are not transcribed/);
    assert.match(piece, /Restrepo 136\.3/);
    assert.match(piece, /Restrepo 118/);
    assert.match(piece, /KM# D2, Restrepo 131/);
    assert.match(piece, /3,45 g y 21 mm/);
    assert.match(piece, /3\.45 g and 21 mm/);
    assert.match(piece, /Mompós en 1812/);
    assert.match(piece, /Mompós in 1812/);
    assert.doesNotMatch(piece, /VALIENTE/);
    assert.doesNotMatch(piece, /cert_number/);
    assert.match(piece, /asigna el 4 girado/);
    assert.match(piece, /does not assign the rotated 4/);
  });
});
