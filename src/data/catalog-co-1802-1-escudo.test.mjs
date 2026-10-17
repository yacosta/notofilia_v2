import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const pieces = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const start = pieces.indexOf("id: '1-escudo-bogota-1802-nr-jj',\n    path:");
const end = pieces.indexOf("id: '1-escudo-popayan-1806-p-jf'", start);
const piece = pieces.slice(start, end);

describe('Colombia 1802 Bogotá 1 escudo, KM# 56.1', () => {
  it('records the unslabbed NR–JJ disc without a serial, mintage, price, or 1802/1 assignment', () => {
    assert.ok(start > 0);
    assert.match(piece, /KM# 56\.1 · Hernández 687 · Fr#58/);
    assert.match(piece, /Numista N#52837/);
    assert.match(piece, /chapterId: 'santa-fe'/);
    assert.match(piece, /year: '1802'/);
    assert.match(piece, /CAROL · IIII/);
    assert.match(piece, /no asigna esa variedad/);
    assert.match(piece, /does not assign that variety/);
    assert.match(piece, /Restrepo 84\.21/);
    assert.match(piece, /no hay tirada verificada/i);
    assert.match(piece, /No mintage is verified/);
    assert.match(piece, /empiezan en 1987/);
    assert.match(piece, /begin in 1987/);
    assert.match(piece, /sin encapsular/i);
    assert.match(piece, /Unslabbed/);
    assert.match(piece, /colombia-bogota-1-escudo-1802-charles-iv-nr-jj-front\.jpg/);
    assert.match(piece, /colombia-bogota-1-escudo-1802-charles-iv-nr-jj-back\.jpg/);
    assert.match(piece, /colombia-bogota-1-escudo-1802-charles-iv-nr-jj-composite\.jpg/);
    assert.doesNotMatch(piece, /\$\s*\d/);
    assert.doesNotMatch(piece, /serial:/);
    assert.doesNotMatch(piece, /cert_number/);
    assert.doesNotMatch(piece, /Calicó 1214/);
    assert.match(holdings, /id: 'co-1802-1-escudo-bogota-nr-jj', kind: 'coin', country: 'CO'/);
    assert.match(holdings, /id: 'co-1802-1-escudo-bogota-km56-1'/);
    for (const side of ['composite', 'front', 'back']) {
      readFileSync(
        new URL(
          `../../catalog-src/catalog/colombia/colombia-bogota-1-escudo-1802-charles-iv-nr-jj-${side}.jpg`,
          import.meta.url,
        ),
      );
    }
  });
});
