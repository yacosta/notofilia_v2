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
    assert.equal(localizePath('/coleccion/paises-bajos-numismatica/', 'en'), '/en/collection/netherlands-numismatics/');
    assert.equal(
      localizePath('/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/', 'en'),
      '/en/collection/netherlands-numismatics/ducado-utrecht-1761/',
    );
    assert.equal(localizePath('/acerca-de/', 'en'), '/en/about/');
    assert.equal(localizePath('/buscar/', 'en'), '/en/search/');
    assert.equal(localizePath('/buscar/?q=colombiano', 'en'), '/en/search/?q=colombiano');
    assert.equal(otherLocalePath('/en/collection/united-states/', 'en'), '/coleccion/estados-unidos/');
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934-chicago/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934-chicago/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/', 'en'),
      '/en/collection/united-states/1-dollar-state-bank-new-brunswick/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/20-dolares-confederados-1864/', 'en'),
      '/en/collection/united-states/20-dollars-confederate-1864/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-confederados-1864/', 'en'),
      '/en/collection/united-states/5-dollars-confederate-1864/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/mpc-vietnam/5-dolares-serie-661/', 'en'),
      '/en/collection/united-states/mpc-vietnam/5-dollars-series-661/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/miscelaneos/', 'en'),
      '/en/collection/united-states/miscellaneous/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/5-pesos-rio-hacha-1883/', 'en'),
      '/en/collection/colombia/5-pesos-rio-hacha-1883/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/10-pesos-oro-1943/', 'en'),
      '/en/collection/colombia/10-pesos-oro-1943/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/2-pesos-oro-1944/#2-pesos-oro-1955', 'en'),
      '/en/collection/colombia/2-pesos-oro-1944/#2-pesos-oro-1955',
    );
    assert.equal(
      localizePath('/coleccion/colombia/10-pesos-oro-1976/', 'en'),
      '/en/collection/colombia/10-pesos-oro-1976/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/2000-pesos-oro-1983/', 'en'),
      '/en/collection/colombia/2000-pesos-oro-1983/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/5-pesos-banco-hipotecario-1881/', 'en'),
      '/en/collection/colombia/5-pesos-banco-hipotecario-1881/',
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
    assert.equal(
      localizePath('/blog/mejores-empresas-certificacion-monedas-billetes/', 'en'),
      '/en/blog/best-coin-and-banknote-grading-companies/',
    );
    assert.equal(
      otherLocalePath('/en/blog/best-coin-and-banknote-grading-companies/', 'en'),
      '/blog/mejores-empresas-certificacion-monedas-billetes/',
    );
    assert.equal(englishContentSlug('coleccion/espana'), 'collection/spain');
    assert.equal(englishContentSlug('noticias'), 'news');
  });

  it('redirects old English Spanish slugs', () => {
    const redirects = englishRedirects();
    assert.equal(
      redirects['/en/blog/mejores-empresas-certificacion-monedas-billetes/'],
      '/en/blog/best-coin-and-banknote-grading-companies/',
    );
    assert.equal(redirects['/en/coleccion/'], '/en/collection/');
    assert.equal(redirects['/en/coleccion/filipinas/'], '/en/collection/philippines/');
    assert.equal(redirects['/en/glosario/'], '/en/glossary/');
    assert.equal(redirects['/en/noticias/'], '/en/news/');
    assert.equal(redirects['/en/contacto/'], '/en/contact/');
    assert.equal(redirects['/en/coleccion/united-states/'], '/en/collection/united-states/');
    assert.equal(
      redirects['/en/coleccion/paises-bajos-numismatica/'],
      '/en/collection/netherlands-numismatics/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/mpc-vietnam/5-dolares-serie-661/'],
      '/en/collection/united-states/mpc-vietnam/5-dollars-series-661/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/miscelaneos/'],
      '/en/collection/united-states/miscellaneous/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/'],
      '/en/collection/united-states/1-dollar-state-bank-new-brunswick/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/20-dolares-confederados-1864/'],
      '/en/collection/united-states/20-dollars-confederate-1864/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/5-dolares-confederados-1864/'],
      '/en/collection/united-states/5-dollars-confederate-1864/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/5-dolares-confederados-1864/'],
      '/en/collection/united-states/5-dollars-confederate-1864/',
    );
  });
});
