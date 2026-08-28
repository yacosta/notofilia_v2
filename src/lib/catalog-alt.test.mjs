import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { catalogScanAlt } from './catalog-alt.ts';

describe('catalogScanAlt', () => {
  it('builds Pick-number alts for both sides and locales', () => {
    assert.equal(
      catalogScanAlt('es', {
        title: '10 pesos oro · Banco de la República · 1943',
        pick: 'P# 389b',
        side: 'front',
      }),
      '10 pesos oro · Banco de la República · 1943, anverso — Pick 389b',
    );
    assert.equal(
      catalogScanAlt('en', {
        title: '10 pesos oro · Banco de la República · 1943',
        pick: 'P# 389b',
        side: 'back',
      }),
      '10 pesos oro · Banco de la República · 1943, back — Pick 389b',
    );
  });
});
