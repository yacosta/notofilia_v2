import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from './locale-paths.ts';

const sitemapSource = readFileSync(new URL('../pages/sitemap.xml.ts', import.meta.url), 'utf8');
const indexSource = readFileSync(new URL('../pages/sitemap-index.xml.ts', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

describe('sitemap coverage for polymer England', () => {
  it('maps the England stub through the polymer locale pair', () => {
    assert.equal(
      localizePath('/coleccion/polimero-mundial/europa/inglaterra/', 'en'),
      '/en/collection/world-polymer/europe/england/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/', 'en'),
      '/en/collection/world-polymer/europe/england/5-pounds-churchill/',
    );
    assert.match(sitemapSource, /dedicatedCatalogPaths/);
    assert.match(sitemapSource, /stubPages/);
  });
});

describe('sitemap coverage for Colombia visual catalogs', () => {
  it('registers both locale pairs through dedicated catalog paths', () => {
    assert.equal(localizePath('/coleccion/notafilia/catalogo/', 'en'), '/en/collection/notaphily/catalog/');
    assert.equal(localizePath('/coleccion/colombia/catalogo/', 'en'), '/en/collection/colombia/catalog/');
    assert.equal(
      localizePath('/coleccion/colombia-numismatica/catalogo/', 'en'),
      '/en/collection/colombia-numismatics/catalog/',
    );
    assert.match(sitemapSource, /dedicatedCatalogPaths/);
  });
});

describe('sitemap coverage for the grading guide', () => {
  it('builds lastmod from blog articles and is linked from sitemap-index / robots', () => {
    assert.match(sitemapSource, /blogArticles/);
    assert.match(sitemapSource, /collectSitemapPaths/);
    assert.match(indexSource, /sitemap\.xml/);
    assert.match(robots, /sitemap-index\.xml/);
    assert.equal(
      localizePath('/blog/mejores-empresas-certificacion-monedas-billetes/', 'en'),
      '/en/blog/best-coin-and-banknote-grading-companies/',
    );
  });
});
