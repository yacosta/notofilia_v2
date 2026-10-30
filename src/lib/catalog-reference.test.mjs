import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { catalogCardText, catalogReferenceLabel, catalogReferenceRows } from './catalog-reference.ts';

describe('catalog reference labels', () => {
  it('labels a Friedberg number as Friedberg, not Pick', () => {
    assert.equal(catalogReferenceLabel('Fr. CT-231', 'es'), 'Referencia Friedberg');
    assert.equal(catalogReferenceLabel('Fr. CT-231', 'en'), 'Friedberg reference');
    assert.deepEqual(catalogReferenceRows('Fr. RI-298', 'es'), [
      { label: 'Referencia Friedberg', value: 'Fr. RI-298' },
    ]);
  });

  it('labels a Pick number as Pick', () => {
    assert.equal(catalogReferenceLabel('P#380d', 'es'), 'Referencia Pick');
    assert.equal(catalogReferenceLabel('P#380d', 'en'), 'Pick reference');
    assert.equal(catalogReferenceLabel('Hawaii P#36', 'en'), 'Pick reference');
  });

  it('splits a combined Friedberg and Pick string into separate rows', () => {
    assert.deepEqual(catalogReferenceRows('Fr. PA-166 · P# S-2540 · N#406969', 'es'), [
      { label: 'Referencia Friedberg', value: 'Fr. PA-166' },
      { label: 'Referencia Pick', value: 'P# S-2540' },
      { label: 'Numista', value: 'N#406969' },
    ]);
    assert.deepEqual(catalogReferenceRows('P#430 · Fr. 2004-G', 'en'), [
      { label: 'Pick reference', value: 'P#430' },
      { label: 'Friedberg reference', value: 'Fr. 2004-G' },
    ]);
  });

  it('labels Haxby, Criswell, and Shafer from the value', () => {
    assert.deepEqual(catalogReferenceRows('Haxby NJ-350 G16a · N#334975', 'es'), [
      { label: 'Referencia Haxby', value: 'Haxby NJ-350 G16a' },
      { label: 'Numista', value: 'N#334975' },
    ]);
    assert.deepEqual(catalogReferenceRows('P#67 · T-69 · N#226718', 'en'), [
      { label: 'Pick reference', value: 'P#67' },
      { label: 'Criswell reference', value: 'T-69' },
      { label: 'Numista', value: 'N#226718' },
    ]);
    assert.equal(catalogReferenceLabel('Shafer WI100 · 5¢', 'es'), 'Referencia Shafer');
    assert.equal(catalogReferenceRows('Shafer WI100 · 5¢', 'es')[0].value, 'Shafer WI100 · 5¢');
    assert.equal(catalogReferenceLabel('MS WI100-.50', 'en'), 'Mitchell/Shafer reference');
  });

  it('keeps Pick only on a lone Pick number in a series card', () => {
    assert.equal(catalogCardText('P#380d', 'Pick', 'en'), 'Pick P#380d');
    assert.equal(catalogCardText('Fr. CT-231', 'Pick', 'es'), 'Fr. CT-231');
    assert.equal(catalogCardText('P#430 · Fr. 2004-G', 'Pick', 'en'), 'P#430 · Fr. 2004-G');
    assert.equal(catalogCardText('Shafer WI100 · 5¢', 'Pick', 'es'), 'Shafer WI100 · 5¢');
    assert.equal(catalogCardText('Rency · 5/200', 'Pick', 'en'), 'Rency · 5/200');
  });

  it('does not call Giori or Rency a Pick number', () => {
    assert.equal(
      catalogReferenceLabel('Giori · Lincoln Memorial (uniface)', 'es'),
      'Referencia de catálogo',
    );
    assert.equal(catalogReferenceLabel('Rency · 5/200', 'en'), 'Catalog reference');
  });
});
