import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  classifyType,
  lastSlug,
  matchUrl,
  normalizePath,
  parseGscUrl,
  tokenOverlap,
} from './match.mjs';

const urls = [
  {
    path: '/coleccion/colombia/1-peso-oro-1954/',
    lang: 'es',
    type: 'catalogue',
    lastSlug: '1-peso-oro-1954',
    title: '1 peso oro 1954',
    alternate: '/en/collection/colombia/1-peso-oro-1954/',
  },
  {
    path: '/en/collection/colombia/1-peso-oro-1954/',
    lang: 'en',
    type: 'catalogue',
    lastSlug: '1-peso-oro-1954',
    title: '1 peso oro 1954',
    alternate: '/coleccion/colombia/1-peso-oro-1954/',
  },
  {
    path: '/coleccion/colombia/',
    lang: 'es',
    type: 'hub',
    lastSlug: 'colombia',
    title: 'Colombia',
    alternate: '/en/collection/colombia/',
  },
  {
    path: '/en/collection/philippines/',
    lang: 'en',
    type: 'hub',
    lastSlug: 'philippines',
    title: 'Philippines',
    alternate: '/coleccion/filipinas/',
  },
  {
    path: '/en/glossary/remainder/',
    lang: 'en',
    type: 'glossary',
    lastSlug: 'remainder',
    title: 'Remainder',
    alternate: '/glosario/remainder/',
  },
  { path: '/', lang: 'es', type: 'other', lastSlug: '', title: 'Home', alternate: '/en/' },
];

const categoryMap = {
  es: { colombia: '/coleccion/colombia/', filipinas: '/coleccion/filipinas/' },
  en: { philippines: '/en/collection/philippines/', filipinas: '/en/collection/philippines/', colombia: '/en/collection/colombia/' },
};

describe('GSC URL normalize', () => {
  it('strips host, www, trailing slash, .dc.html, and decodes', () => {
    const parsed = parseGscUrl('https://www.notofilia.com/Contacto.dc.html');
    assert.equal(parsed.originalPath, '/Contacto.dc.html');
    assert.equal(normalizePath(parsed.originalPath), '/contacto');
  });
});

describe('match rules', () => {
  it('lists live v2 paths as exists', () => {
    const hit = matchUrl('/coleccion/colombia/1-peso-oro-1954/', urls, categoryMap);
    assert.equal(hit.rule, 'exists');
    assert.equal(hit.status, 200);
  });

  it('matches last slug in the same language', () => {
    const hit = matchUrl('/coleccion/1-peso-oro-1954', urls, categoryMap);
    assert.equal(hit.rule, 'last-slug');
    assert.equal(hit.status, 301);
    assert.equal(hit.target, '/coleccion/colombia/1-peso-oro-1954/');
  });

  it('uses hreflang when the only last-slug hit is the other language', () => {
    const hit = matchUrl('/en/old/nota-solo-es', [
      ...urls,
      {
        path: '/coleccion/colombia/nota-solo-es/',
        lang: 'es',
        type: 'catalogue',
        lastSlug: 'nota-solo-es',
        title: 'solo es',
        alternate: '/en/collection/colombia/nota-solo-es/',
      },
    ], categoryMap);
    assert.equal(hit.rule, 'last-slug-hreflang');
    assert.equal(hit.target, '/en/collection/colombia/nota-solo-es/');
  });

  it('fuzzy-matches unique token overlap of at least 80%', () => {
    assert.ok(tokenOverlap('1-peso-oro-1954-banrep', '1-peso-oro-1954') >= 0.8);
    const hit = matchUrl('/coleccion/archivo/1-peso-oro-1954-banrep', urls, categoryMap);
    assert.equal(hit.rule, 'fuzzy');
    assert.equal(hit.status, 301);
    assert.ok(!hit.target.endsWith('notofilia.com/'));
  });

  it('maps old category hubs from category-map.json', () => {
    const hit = matchUrl('/en/collection/filipinas/', urls, categoryMap);
    assert.equal(hit.rule, 'category-hub');
    assert.equal(hit.target, '/en/collection/philippines/');
  });

  it('falls back to the category hub for unmatched items', () => {
    const hit = matchUrl('/coleccion/colombia/nota-v1-ya-no-en-catalogo/', urls, categoryMap);
    assert.equal(hit.rule, 'hub-fallback');
    assert.equal(hit.target, '/coleccion/colombia/');
  });

  it('falls back to the polymer hub when a continent prefix has no page', () => {
    const polymer = [
      ...urls,
      {
        path: '/en/collection/world-polymer/',
        lang: 'en',
        type: 'hub',
        lastSlug: 'world-polymer',
        title: 'World polymer',
        alternate: '/coleccion/polimero-mundial/',
      },
    ];
    const cats = {
      ...categoryMap,
      en: { ...categoryMap.en, 'polimero-mundial': '/en/collection/world-polymer/' },
    };
    const hit = matchUrl('/en/coleccion/polimero-mundial/asia/', polymer, cats);
    assert.equal(hit.rule, 'hub-fallback');
    assert.equal(hit.target, '/en/collection/world-polymer/');
  });

  it('returns 410 when nothing matches and never targets home', () => {
    const hit = matchUrl('/tienda/carrito/', urls, categoryMap);
    assert.equal(hit.status, 410);
    assert.equal(hit.rule, 'gone');
    assert.equal(hit.target, '');
  });

  it('classifies collection pieces as catalogue', () => {
    assert.equal(classifyType('/coleccion/colombia/1-peso-oro-1954/'), 'catalogue');
    assert.equal(classifyType('/en/collection/'), 'hub');
    assert.equal(classifyType('/en/glossary/remainder/'), 'glossary');
    assert.equal(lastSlug('/en/glossary/remainder/'), 'remainder');
  });
});

describe('stubs, legacy Dreamweaver files, glossary', () => {
  const stubUrls = [
    ...urls,
    {
      path: '/en/coleccion/colombia/1-peso-oro-1954/',
      lang: 'en',
      type: 'catalogue',
      lastSlug: '1-peso-oro-1954',
      title: 'Redirecting to: /en/collection/colombia/1-peso-oro-1954/',
      alternate: '',
      redirectTo: '/en/collection/colombia/1-peso-oro-1954/',
    },
    {
      path: '/en/coleccion/polimero-mundial/asia/',
      lang: 'en',
      type: 'hub',
      lastSlug: 'asia',
      title: 'Redirecting to: /en/collection/world-polymer/asia/',
      alternate: '',
      redirectTo: '/en/collection/world-polymer/asia/',
    },
    { path: '/en/collection/world-polymer/', lang: 'en', type: 'hub', lastSlug: 'world-polymer', title: 'World polymer', alternate: '' },
    { path: '/en/glossary/', lang: 'en', type: 'glossary', lastSlug: 'glossary', title: 'Glossary', alternate: '/glosario/' },
    { path: '/coleccion/ecuador/', lang: 'es', type: 'hub', lastSlug: 'ecuador', title: 'Ecuador', alternate: '' },
  ];
  const map = { ...categoryMap, en: { ...categoryMap.en, 'polimero-mundial': '/en/collection/world-polymer/' } };

  it('301s a redirect stub straight to its destination instead of reporting exists', () => {
    const r = matchUrl('/en/coleccion/colombia/1-peso-oro-1954/', stubUrls, map);
    assert.equal(r.status, 301);
    assert.equal(r.target, '/en/collection/colombia/1-peso-oro-1954/');
  });

  it('never targets a stub via last-slug (lands on the real page)', () => {
    const r = matchUrl('/en/old/1-peso-oro-1954/', stubUrls, map);
    assert.equal(r.status, 301);
    assert.equal(r.target, '/en/collection/colombia/1-peso-oro-1954/');
  });

  it('falls through to the category hub when a stub points at a missing page', () => {
    const r = matchUrl('/en/coleccion/polimero-mundial/asia/', stubUrls, map);
    assert.equal(r.status, 301);
    assert.equal(r.target, '/en/collection/world-polymer/');
  });

  it('maps root-level .dc / .dc.html legacy files to a section hub', () => {
    assert.equal(matchUrl('/billete-ecuador-100-sucres-1993.dc.html', stubUrls, map).target, '/coleccion/ecuador/');
    assert.equal(matchUrl('/billete-colombia-banco-de-caldas-1-peso-1919.dc', stubUrls, map).target, '/coleccion/colombia/');
    assert.equal(matchUrl('/billete-colombia-banco-de-caldas-1-peso-1919.dc', stubUrls, map).rule, 'legacy-dc');
    // Hub not in the index → still 410, never home.
    assert.equal(matchUrl('/catalogo-puerto-rico.dc.html', stubUrls, map).status, 410);
  });

  it('sends unmatched glossary terms to the glossary hub', () => {
    const r = matchUrl('/en/glossary/no-such-term/', stubUrls, map);
    assert.equal(r.status, 301);
    assert.equal(r.target, '/en/glossary/');
    assert.equal(r.rule, 'glossary-hub');
  });
});
