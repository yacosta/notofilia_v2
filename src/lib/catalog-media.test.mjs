import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  catalogDownloadFilename,
  catalogDownloadFormat,
  catalogDownloadLabel,
  catalogDownloadSrc,
} from './catalog-media.ts';

describe('catalog download paths', () => {
  it('maps display catalog URLs onto the tiled download tree', () => {
    assert.equal(
      catalogDownloadSrc('/images/catalog/philippines/1-peso-front.jpg'),
      '/images/catalog-download/philippines/1-peso-front.jpg',
    );
    assert.equal(catalogDownloadSrc('/images/hero-slide.jpg'), '/images/hero-slide.jpg');
    assert.equal(catalogDownloadFilename('/images/catalog/china/hero-china.jpg'), 'hero-china.jpg');
    assert.equal(catalogDownloadFormat('/images/catalog/netherlands/1761-ducat-utrecht-ngc.png'), 'PNG');
    assert.match(catalogDownloadLabel('/a.jpg', 'es'), /Descargar JPEG.*Se inicia una descarga/);
    assert.match(catalogDownloadLabel('/a.png', 'en'), /Download PNG.*A download will start/);
  });
});
