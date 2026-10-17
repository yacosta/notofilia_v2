import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const pieces = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const start = pieces.indexOf("id: '1-escudo-bogota-1811-nr-jf',\n    path:");
const end = pieces.indexOf("id: '2-escudos-bogota-nd-felipe-v'", start);
const piece = pieces.slice(start, end);

describe('Colombia 1811 Bogotá 1 escudo, KM# 64.1', () => {
  it('records the unslabbed NR–JF disc without a serial, mintage, or price', () => {
    assert.ok(start > 0);
    assert.match(piece, /KM# 64\.1 · Restrepo 122\.7 · Calicó 1548/);
    assert.match(piece, /Hernández 690/);
    assert.match(piece, /Fr#65/);
    assert.match(piece, /Numista N#61388/);
    assert.match(piece, /chapterId: 'santa-fe'/);
    assert.match(piece, /year: '1811'/);
    assert.match(piece, /FERDND · VII/);
    assert.match(piece, /busto de Carlos IV/);
    assert.match(piece, /bust of Charles IV/);
    assert.match(piece, /no hay tirada verificada/i);
    assert.match(piece, /No mintage is verified/);
    assert.match(piece, /empiezan en 1987/);
    assert.match(piece, /begin in 1987/);
    assert.match(piece, /sin encapsular/i);
    assert.match(piece, /Unslabbed/);
    assert.match(piece, /colombia-bogota-1-escudo-1811-ferdinand-vii-charles-iv-nr-jf-front\.jpg/);
    assert.match(piece, /colombia-bogota-1-escudo-1811-ferdinand-vii-charles-iv-nr-jf-back\.jpg/);
    assert.match(piece, /colombia-bogota-1-escudo-1811-ferdinand-vii-charles-iv-nr-jf-composite\.jpg/);
    assert.doesNotMatch(piece, /\$\s*\d/);
    assert.doesNotMatch(piece, /serial:/);
    assert.doesNotMatch(piece, /cert_number/);
    assert.match(holdings, /id: 'co-1811-1-escudo-bogota-nr-jf', kind: 'coin', country: 'CO'/);
    assert.match(holdings, /id: 'co-1811-1-escudo-bogota-km64-1'/);
    for (const side of ['composite', 'front', 'back']) {
      readFileSync(
        new URL(
          `../../catalog-src/catalog/colombia/colombia-bogota-1-escudo-1811-ferdinand-vii-charles-iv-nr-jf-${side}.jpg`,
          import.meta.url,
        ),
      );
    }
  });
});
