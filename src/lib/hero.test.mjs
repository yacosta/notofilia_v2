import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { heroSizes, heroSrc, heroSrcset } from './hero.ts';

const astroConfig = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');
const googlePreferred = readFileSync(new URL('../components/GooglePreferredSourceButton.astro', import.meta.url), 'utf8');
const headers = readFileSync(new URL('../../public/_headers', import.meta.url), 'utf8');
const homePage = readFileSync(new URL('../components/HomePage.astro', import.meta.url), 'utf8');
const header = readFileSync(new URL('../components/Header.astro', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../layouts/Layout.astro', import.meta.url), 'utf8');
const indexEs = readFileSync(new URL('../pages/index.astro', import.meta.url), 'utf8');
const indexEn = readFileSync(new URL('../pages/en/index.astro', import.meta.url), 'utf8');
const globalCss = readFileSync(new URL('../styles/global.css', import.meta.url), 'utf8');

describe('homepage LCP hero strings', () => {
  it('exports production CDN src and srcset that match the mobile patch', () => {
    assert.equal(
      heroSrc,
      '/cdn-cgi/image/width=1080,format=auto,quality=70/images/hero-slide.jpg',
    );
    assert.equal(
      heroSrcset,
      [
        '/cdn-cgi/image/width=480,format=auto,quality=60/images/hero-slide.jpg 480w',
        '/cdn-cgi/image/width=640,format=auto,quality=65/images/hero-slide.jpg 640w',
        '/cdn-cgi/image/width=1080,format=auto,quality=70/images/hero-slide.jpg 1080w',
        '/cdn-cgi/image/width=1600,format=auto,quality=70/images/hero-slide.jpg 1600w',
        '/cdn-cgi/image/width=2400,format=auto,quality=65/images/hero-slide.jpg 2400w',
      ].join(', '),
    );
    assert.equal(heroSizes, '100vw');
  });

  it('keeps the homepage img and both locale preloads on the shared strings', () => {
    assert.match(homePage, /from '\.\.\/lib\/hero'/);
    assert.match(homePage, /src=\{heroSrc\}/);
    assert.match(homePage, /srcset=\{heroSrcset\}/);
    assert.match(homePage, /sizes=\{heroSizes\}/);
    assert.match(indexEs, /from '\.\.\/lib\/hero'/);
    assert.match(indexEn, /from '\.\.\/\.\.\/lib\/hero'/);
    assert.match(indexEs, /imagesrcset=\{heroSrcset\}/);
    assert.match(indexEn, /imagesrcset=\{heroSrcset\}/);
    assert.match(indexEs, /imagesizes=\{heroSizes\}/);
    assert.match(indexEn, /imagesizes=\{heroSizes\}/);
    assert.match(indexEs, /href=\{heroSrc\}/);
    assert.match(indexEn, /href=\{heroSrc\}/);
  });
});

describe('mobile chrome patch', () => {
  it('does not render a site-wide notice banner', () => {
    assert.doesNotMatch(layout, /SiteNotice/);
    assert.doesNotMatch(layout, /site-notice/);
    assert.doesNotMatch(header, /siteNotice/);
    assert.doesNotMatch(globalCss, /white-space:\s*nowrap/);
  });

  it('keeps notch padding on the sticky header', () => {
    assert.match(header, /pt-\[env\(safe-area-inset-top\)\]/);
  });

  it('sets viewport-fit=cover and clips horizontal overflow', () => {
    assert.match(
      layout,
      /content="width=device-width, initial-scale=1, viewport-fit=cover"/,
    );
    assert.match(globalCss, /html\s*\{[^}]*overflow-x:\s*clip/);
  });
});

describe('PageSpeed-oriented build settings', () => {
  it('inlines stylesheets and defers Subscribe with Google until idle', () => {
    assert.match(astroConfig, /inlineStylesheets:\s*'always'/);
    assert.doesNotMatch(layout, /publisher\.js/);
    assert.match(googlePreferred, /requestIdleCallback/);
    assert.match(googlePreferred, /loadSwgPublisher/);
  });

  it('sets long-lived cache headers for hashed assets and fonts', () => {
    assert.match(headers, /\/_astro\/\*/);
    assert.match(headers, /\/fonts\/\*/);
    assert.match(headers, /max-age=31536000, immutable/);
  });
});
