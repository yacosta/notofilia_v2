import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  catalogAssetSrc,
  cfImage,
  CATALOG_HERO_VERSION,
  CATALOG_SCAN_VERSION,
  editorialUploadSrcset,
  versionCatalogScan,
} from './images.ts';

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
      /united-states\.jpg\?v=20260829$/,
    );
  });

  it('cache-busts catalog scans so a replaced file is not served from Image Resizing', () => {
    assert.equal(
      versionCatalogScan('/images/catalog/united-states/note.jpg'),
      `/images/catalog/united-states/note.jpg?v=${CATALOG_SCAN_VERSION}`,
    );
    assert.equal(
      cfImage('/images/catalog/united-states/note.jpg', { width: 800, fit: 'cover' }),
      `/cdn-cgi/image/width=800,format=auto,quality=75,fit=cover/images/catalog/united-states/note.jpg?v=${CATALOG_SCAN_VERSION}`,
    );
    assert.equal(
      versionCatalogScan(`/images/catalog/note.jpg?v=${CATALOG_HERO_VERSION}`),
      `/images/catalog/note.jpg?v=${CATALOG_HERO_VERSION}`,
    );
  });

  it('accepts an explicit format override for LCP heroes', () => {
    assert.equal(
      cfImage('/images/hero-slide.jpg', { width: 1080, quality: 55, format: 'avif' }),
      '/cdn-cgi/image/width=1080,format=avif,quality=55/images/hero-slide.jpg',
    );
  });
});

describe('editorialUploadSrcset', () => {
  it('uses the -card sibling and master without /cdn-cgi/image/', () => {
    assert.equal(
      editorialUploadSrcset('/uploads/baraboo-golden-jubilee-1933.jpg', 2128),
      '/uploads/baraboo-golden-jubilee-1933-card.jpg 800w, /uploads/baraboo-golden-jubilee-1933.jpg 2128w',
    );
  });

  it('does not wrap an already-card path', () => {
    assert.equal(
      editorialUploadSrcset('/uploads/baraboo-golden-jubilee-1933-card.jpg'),
      '/uploads/baraboo-golden-jubilee-1933-card.jpg 800w',
    );
  });
});
