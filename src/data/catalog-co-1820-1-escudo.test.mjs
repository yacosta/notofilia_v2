import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { additions, catalogAdditions } from './holdings.ts';

const pieces = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const start = pieces.indexOf("id: '1-escudo-bogota-1820-nr-jf'");
const end = pieces.indexOf("id: '8-reales-bogota-1821-ba-jf'", start);
const piece = pieces.slice(start, end);

describe('Bogotá 1820 NR–JF 1 escudo', () => {
  it('registers one bilingual unslabbed KM 64.1 holding with no serial', () => {
    assert.equal(
      localizePath('/coleccion/colombia-numismatica/1-escudo-bogota-1820-nr-jf/', 'en'),
      '/en/collection/colombia-numismatics/1-escudo-bogota-1820-nr-jf/',
    );
    assert.match(piece, /KM# 64\.1 · Restrepo 122\.27 · Calicó 1559 · Hernández 690 · Fr#65/);
    assert.match(piece, /FERDND · VII · D · G · HISP · ET IND · R · 1820/);
    assert.match(piece, /chapterId: 'independencia'/);
    assert.match(piece, /Cayón 16191/);
    assert.match(piece, /N\/A/);
    assert.match(piece, /escasa/);
    assert.match(piece, /scarce/);
    assert.doesNotMatch(piece, /cert_number/);
    assert.doesNotMatch(piece, /serial: '/);
    assert.doesNotMatch(piece, /tirada de \d/);
    assert.doesNotMatch(piece, /\$\s*\d/);
    assert.doesNotMatch(piece, /US\s*\$/);
    assert.equal(additions.at(-1)?.id, 'co-1820-1-escudo-bogota-nr-jf');
    assert.equal(catalogAdditions.at(-1)?.id, 'co-1820-1-escudo-bogota-km64-1');
    for (const side of ['composite', 'front', 'back']) {
      readFileSync(
        new URL(
          `../../catalog-src/catalog/colombia/colombia-bogota-1-escudo-1820-ferdinand-vii-charles-iv-nr-jf-${side}.jpg`,
          import.meta.url,
        ),
      );
    }
  });
});
