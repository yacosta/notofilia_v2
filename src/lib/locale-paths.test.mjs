import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { englishContentSlug, englishRedirects, localizePath, otherLocalePath } from './locale-paths.ts';

describe('locale path mapping', () => {
  it('translates collection, glossary, news, and contact slugs', () => {
    assert.equal(localizePath('/coleccion/filipinas/5-pesos/', 'en'), '/en/collection/philippines/5-pesos/');
    assert.equal(localizePath('/en/collection/philippines/', 'es'), '/coleccion/filipinas/');
    assert.equal(localizePath('/glosario/notafilia/', 'en'), '/en/glossary/notafilia/');
    assert.equal(localizePath('/noticias/', 'en'), '/en/news/');
    assert.equal(localizePath('/contacto/', 'en'), '/en/contact/');
    assert.equal(localizePath('/contacto/?motivo=error', 'en'), '/en/contact/?motivo=error');
    assert.equal(otherLocalePath('/en/contact/?motivo=error', 'en'), '/contacto/?motivo=error');
    assert.equal(localizePath('/coleccion/polimero-mundial/', 'en'), '/en/collection/world-polymer/');
    assert.equal(localizePath('/coleccion/notafilia/', 'en'), '/en/collection/notaphily/');
    assert.equal(localizePath('/coleccion/espana/', 'en'), '/en/collection/spain/');
    assert.equal(localizePath('/paises-bajos-numismatica/', 'en'), '/en/netherlands-numismatica/');
    assert.equal(localizePath('/acerca-de/', 'en'), '/en/about/');
    assert.equal(otherLocalePath('/en/collection/united-states/', 'en'), '/coleccion/estados-unidos/');
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934-chicago/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934-chicago/',
    );
  });

  it('keeps hreflang pairs reciprocal', () => {
    const es = '/coleccion/filipinas/';
    const en = localizePath(es, 'en');
    assert.equal(otherLocalePath(en, 'en'), es);
    assert.equal(otherLocalePath(es, 'es'), en);
  });

  it('maps blog article slugs and englishContentSlug', () => {
    assert.equal(
      localizePath('/blog/como-empezar-coleccion-billetes/', 'en'),
      '/en/blog/how-to-start-a-banknote-collection/',
    );
    assert.equal(englishContentSlug('coleccion/espana'), 'collection/spain');
    assert.equal(englishContentSlug('noticias'), 'news');
  });

  it('redirects old English Spanish slugs', () => {
    const redirects = englishRedirects();
    assert.equal(redirects['/en/coleccion/'], '/en/collection/');
    assert.equal(redirects['/en/coleccion/filipinas/'], '/en/collection/philippines/');
    assert.equal(redirects['/en/glosario/'], '/en/glossary/');
    assert.equal(redirects['/en/noticias/'], '/en/news/');
    assert.equal(redirects['/en/contacto/'], '/en/contact/');
    assert.equal(redirects['/en/coleccion/united-states/'], '/en/collection/united-states/');
    assert.equal(
      redirects['/en/coleccion/estados-unidos/10-dolares-serie-1934-chicago/'],
      '/en/collection/united-states/10-dollars-series-1934-chicago/',
    );
  });
});
