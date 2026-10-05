import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const pieces = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const start = pieces.indexOf("id: '50-centavos-1916-km193-1',\n    path:");
const end = pieces.indexOf('export const coinagePieceCopy', start);
const piece = pieces.slice(start, end);

function lead(locale) {
  const match = piece.match(new RegExp(`lead:\\s*\\{[\\s\\S]*?${locale}: '([^']+)'`));
  assert.ok(match, locale);
  return match[1];
}

describe('Colombia 1916 50 centavos, KM# 193.1', () => {
  it('keeps the catalog mintage on KM# 193.1 and the Philadelphia figure on KM# 274', () => {
    assert.ok(start > 0);
    assert.match(piece, /KM# 193\.1 · Numista N#20273/);
    assert.match(piece, /chapterId: 'republica'/);
    assert.match(piece, /year: '1916'/);
    assert.match(piece, /1\.060\.000/);
    assert.match(piece, /1,060,000/);
    assert.match(piece, /KM# 274/);
    assert.match(piece, /1,300,000/);
    assert.match(piece, /fecha pequeña/);
    assert.match(piece, /small date/);
    assert.match(piece, /no se midió en este disco/);
    assert.match(piece, /was not measured/);
    assert.match(piece, /DIOS LEI LIBERTAD/);
    assert.match(piece, /canto estriado/);
    assert.match(piece, /reeded edge/);
    assert.match(piece, /no publica precios/);
    assert.match(piece, /sin encapsular/);
    assert.match(piece, /colombia-50-centavos-1916-km193-1-front\.png/);
    assert.match(piece, /colombia-50-centavos-1916-km193-1-back\.png/);
    assert.match(piece, /colombia-50-centavos-1916-km193-1-composite\.png/);
    assert.doesNotMatch(piece, /\$\s*\d/);
    assert.doesNotMatch(piece, /cert_number/);
    assert.ok(lead('es').length <= 155, lead('es'));
    assert.ok(lead('en').length <= 155, lead('en'));
    assert.match(holdings, /id: 'co-1916-50-centavos-km193-1', kind: 'coin', country: 'CO'/);
  });
});
