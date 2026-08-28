import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from './locale-paths.ts';

const sitemapSource = readFileSync(new URL('../pages/sitemap.xml.ts', import.meta.url), 'utf8');
const indexSource = readFileSync(new URL('../pages/sitemap-index.xml.ts', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

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
