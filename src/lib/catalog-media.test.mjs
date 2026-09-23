import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  catalogDownloadFilename,
  catalogDownloadFormat,
  catalogDownloadLabel,
  catalogDownloadSrc,
  linkFirstGlossaryTerms,
} from './catalog-media.ts';

describe('catalog download paths', () => {
  it('maps display catalog URLs onto the tiled download tree', () => {
    assert.equal(
      catalogDownloadSrc('/images/catalog/philippines/philippines-treasury-1-peso-series-66-f70618009-front.jpg'),
      '/images/catalog-download/philippines/philippines-treasury-1-peso-series-66-f70618009-front.jpg',
    );
    assert.equal(catalogDownloadSrc('/images/hero-slide.jpg'), '/images/hero-slide.jpg');
    assert.equal(catalogDownloadFilename('/images/catalog/china/hero-china.jpg'), 'hero-china.jpg');
    assert.equal(catalogDownloadFormat('/images/catalog/netherlands/netherlands-utrecht-1-ducat-1761-ngc-4685927-012-composite.png'), 'PNG');
    assert.match(catalogDownloadLabel('/a.jpg', 'es'), /Descargar JPEG.*Se inicia una descarga/);
    assert.match(catalogDownloadLabel('/a.png', 'en'), /Download PNG.*A download will start/);
  });
});

describe('linkFirstGlossaryTerms', () => {
  it('does not nest a Peso link inside a Peso oro href', () => {
    const html = linkFirstGlossaryTerms(
      'The Banco de la República printed this two-hundred-peso oro at its Imprenta de Billetes.',
      'en',
    );
    assert.match(html, /href="\/en\/glossary\/gold-peso\/"/);
    assert.match(html, />peso oro</);
    assert.doesNotMatch(html, /gold-<a/);
    assert.doesNotMatch(html, /peso\/"&gt;/);
    assert.equal((html.match(/<a\b/g) ?? []).length, 1);
  });

  it('still links a later standalone Peso after wrapping Peso oro', () => {
    const html = linkFirstGlossaryTerms(
      'A two-hundred-peso oro, not a Mexican peso.',
      'en',
    );
    assert.match(html, /href="\/en\/glossary\/gold-peso\/"/);
    assert.match(html, /href="\/en\/glossary\/#peso"/);
    assert.equal((html.match(/<a\b/g) ?? []).length, 2);
  });
});
