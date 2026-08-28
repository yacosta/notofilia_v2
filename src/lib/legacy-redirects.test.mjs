import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { astroLegacyRedirects, seoRedirectTarget } from './legacy-redirects.ts';

describe('legacy Search Console redirects', () => {
  it('maps old catalogue slugs to the live v2 piece or hub', () => {
    assert.equal(
      seoRedirectTarget('/coleccion/colombia/banco-de-la-republica-10-pesos-oro/'),
      '/coleccion/colombia/10-pesos-oro-1943/',
    );
    assert.equal(
      seoRedirectTarget('/coleccion/colombia/banco-de-rio-hacha-5-pesos-1883'),
      '/coleccion/colombia/5-pesos-rio-hacha-1883/',
    );
    assert.equal(
      seoRedirectTarget('/en/collection/colombia/banco-de-la-republica-2000-pesos-oro/'),
      '/en/collection/colombia/2000-pesos-oro-1983/',
    );
    assert.equal(seoRedirectTarget('/coleccion/ecuador/100-sucres-1993/'), '/coleccion/ecuador/');
    assert.equal(seoRedirectTarget('/coleccion/state-bank-new-brunswick/'), '/coleccion/estados-unidos/');
    assert.equal(
      seoRedirectTarget('/coleccion/colombia/banco-de-barranquilla-50-centavos-1880/'),
      '/coleccion/colombia/',
    );
  });

  it('finishes the remaining Dreamweaver .dc footer and catalogo URLs', () => {
    assert.equal(seoRedirectTarget('/politica-privacidad-cookies.dc'), '/politica-privacidad-cookies/');
    assert.equal(seoRedirectTarget('/politica-privacidad-cookies.dc.html'), '/politica-privacidad-cookies/');
    assert.equal(seoRedirectTarget('/catalogo-ecuador.dc'), '/coleccion/ecuador/');
    assert.equal(seoRedirectTarget('/catalogo-colombia.dc'), '/coleccion/colombia/');
    assert.equal(seoRedirectTarget('/glosario-numismatico.dc'), '/glosario/');
    assert.equal(seoRedirectTarget('/billete-un-dolar-sello-rojo-1928.dc'), '/coleccion/estados-unidos/');
    assert.equal(seoRedirectTarget('/contacto.dc.html'), '/contacto/');
  });

  it('rewrites leftover English Spanish-prefix paths', () => {
    assert.equal(seoRedirectTarget('/en/coleccion/'), '/en/collection/');
    assert.equal(seoRedirectTarget('/en/glosario/intaglio-printing/'), '/en/glossary/intaglio-printing/');
    assert.equal(seoRedirectTarget('/en/noticias/foo/'), '/en/news/foo/');
  });

  it('exports Astro keys without a trailing slash', () => {
    const astro = astroLegacyRedirects();
    assert.equal(astro['/politica-privacidad-cookies.dc'], '/politica-privacidad-cookies/');
    assert.ok(!Object.keys(astro).some((key) => key.endsWith('/') && key !== '/'));
  });
});
