import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { catalogAssetSrc, cfImage, CATALOG_HERO_VERSION } from './images.ts';

describe('catalogAssetSrc', () => {
  it('appends a version query for catalog hero cache busting', () => {
    assert.equal(
      catalogAssetSrc('/images/catalog/colombia/hero-colombia.jpg'),
      `/images/catalog/colombia/hero-colombia.jpg?v=${CATALOG_HERO_VERSION}`,
    );
  });

  it('preserves existing query strings', () => {
    assert.equal(catalogAssetSrc('/images/a.jpg?foo=1', '2'), '/images/a.jpg?foo=1&v=2');
  });

  it('passes versioned paths through cfImage', () => {
    assert.match(
      cfImage(catalogAssetSrc('/images/catalog/united-states.jpg'), { width: 1600 }),
      /hero-colombia|united-states\.jpg\?v=/,
    );
  });
});
