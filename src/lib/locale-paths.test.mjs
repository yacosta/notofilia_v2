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
    assert.equal(
      localizePath('/coleccion/polimero-mundial/asia/', 'en'),
      '/en/collection/world-polymer/asia/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/asia/malasia/', 'en'),
      '/en/collection/world-polymer/asia/malaysia/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/asia/malaysia/', 'es'),
      '/coleccion/polimero-mundial/asia/malasia/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/', 'en'),
      '/en/collection/world-polymer/asia/malaysia/5-ringgit-abdul-rahman/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/asia/malaysia/5-ringgit-abdul-rahman/', 'es'),
      '/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/europa/', 'en'),
      '/en/collection/world-polymer/europe/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/europa/inglaterra/', 'en'),
      '/en/collection/world-polymer/europe/england/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/europe/england/', 'es'),
      '/coleccion/polimero-mundial/europa/inglaterra/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/', 'en'),
      '/en/collection/world-polymer/europe/england/5-pounds-churchill/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/europe/england/5-pounds-churchill/', 'es'),
      '/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/america-del-norte/', 'en'),
      '/en/collection/world-polymer/north-america/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/Canada/', 'en'),
      '/en/collection/world-polymer/Canada/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/Canada/', 'es'),
      '/coleccion/polimero-mundial/Canada/',
    );
    assert.equal(
      localizePath('/coleccion/polimero-mundial/Canada/5-dolares-laurier/', 'en'),
      '/en/collection/world-polymer/Canada/5-dollars-laurier/',
    );
    assert.equal(
      localizePath('/en/collection/world-polymer/Canada/5-dollars-laurier/', 'es'),
      '/coleccion/polimero-mundial/Canada/5-dolares-laurier/',
    );
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
      localizePath('/coleccion/estados-unidos/1-dolar-serie-2003-atlanta/', 'en'),
      '/en/collection/united-states/1-dollar-series-2003-atlanta/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934-chicago/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934-chicago/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934a-chicago/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934a-chicago/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934a-cleveland/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934a-cleveland/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-serie-1934d-richmond/', 'en'),
      '/en/collection/united-states/10-dollars-series-1934d-richmond/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1957b/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1957b/',
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
      localizePath('/coleccion/estados-unidos/rency/', 'en'),
      '/en/collection/united-states/rency/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/rency/pele-the-beautiful-game/', 'en'),
      '/en/collection/united-states/rency/pele-the-beautiful-game/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/rency/warhol-basquiat-life-is-beautiful/', 'en'),
      '/en/collection/united-states/rency/warhol-basquiat-life-is-beautiful/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/', 'en'),
      '/en/collection/united-states/miscellaneous/giori-test-note-lincoln-memorial/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos/miscelaneos/1-dolar-serie-2006-dallas-wheres-george/', 'en'),
      '/en/collection/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/5-pesos-rio-hacha-1883/', 'en'),
      '/en/collection/colombia/5-pesos-rio-hacha-1883/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/1-peso-tolima-1901/', 'en'),
      '/en/collection/colombia/1-peso-tolima-1901/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/1-peso-oro-1954/', 'en'),
      '/en/collection/colombia/1-peso-oro-1954/',
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
      localizePath('/coleccion/colombia/2-pesos-oro-1955/', 'en'),
      '/en/collection/colombia/2-pesos-oro-1955/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/10-pesos-oro-1976/', 'en'),
      '/en/collection/colombia/10-pesos-oro-1976/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/1000-pesos-oro-1979/', 'en'),
      '/en/collection/colombia/1000-pesos-oro-1979/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/2000-pesos-oro-1983/', 'en'),
      '/en/collection/colombia/2000-pesos-oro-1983/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/2000-pesos-2008/', 'en'),
      '/en/collection/colombia/2000-pesos-2008/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/20000-pesos-2017/', 'en'),
      '/en/collection/colombia/20000-pesos-2017/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/1000-pesos-error-2008/', 'en'),
      '/en/collection/colombia/1000-pesos-error-2008/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/1000-pesos-error-2011/', 'en'),
      '/en/collection/colombia/1000-pesos-error-2011/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/50000-pesos-error-2008/', 'en'),
      '/en/collection/colombia/50000-pesos-error-2008/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/50000-pesos-error-2015/', 'en'),
      '/en/collection/colombia/50000-pesos-error-2015/',
    );
    assert.equal(
      localizePath('/coleccion/colombia/5-pesos-banco-hipotecario-1881/', 'en'),
      '/en/collection/colombia/5-pesos-banco-hipotecario-1881/',
    );
    assert.equal(localizePath('/coleccion/notafilia/catalogo/', 'en'), '/en/collection/notaphily/catalog/');
    assert.equal(localizePath('/en/collection/notaphily/catalog/', 'es'), '/coleccion/notafilia/catalogo/');
    assert.equal(localizePath('/coleccion/colombia/catalogo/', 'en'), '/en/collection/colombia/catalog/');
    assert.equal(
      localizePath('/coleccion/colombia-numismatica/catalogo/', 'en'),
      '/en/collection/colombia-numismatics/catalog/',
    );
    assert.equal(localizePath('/en/collection/colombia/catalog/', 'es'), '/coleccion/colombia/catalogo/');
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
    assert.equal(
      englishContentSlug('coleccion/polimero-mundial/asia/malasia'),
      'collection/world-polymer/asia/malaysia',
    );
    assert.equal(
      englishContentSlug('coleccion/polimero-mundial/europa/inglaterra'),
      'collection/world-polymer/europe/england',
    );
    assert.equal(
      englishContentSlug('coleccion/polimero-mundial/Canada'),
      'collection/world-polymer/Canada',
    );
    assert.equal(englishContentSlug('noticias'), 'news');
  });

  it('redirects old English Spanish slugs', () => {
    const redirects = englishRedirects();
    assert.equal(
      redirects['/en/blog/mejores-empresas-certificacion-monedas-billetes/'],
      '/en/blog/best-coin-and-banknote-grading-companies/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/asia/malasia/'],
      '/en/collection/world-polymer/asia/malaysia/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/'],
      '/en/collection/world-polymer/asia/malaysia/5-ringgit-abdul-rahman/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/europa/inglaterra/'],
      '/en/collection/world-polymer/europe/england/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/'],
      '/en/collection/world-polymer/europe/england/5-pounds-churchill/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/Canada/'],
      '/en/collection/world-polymer/Canada/',
    );
    assert.equal(
      redirects['/en/coleccion/polimero-mundial/Canada/5-dolares-laurier/'],
      '/en/collection/world-polymer/Canada/5-dollars-laurier/',
    );
    assert.equal(redirects['/en/coleccion/'], '/en/collection/');
    assert.equal(redirects['/en/coleccion/filipinas/'], '/en/collection/philippines/');
    assert.equal(redirects['/en/coleccion/notafilia/catalogo/'], '/en/collection/notaphily/catalog/');
    assert.equal(redirects['/en/coleccion/colombia/catalogo/'], '/en/collection/colombia/catalog/');
    assert.equal(
      redirects['/en/coleccion/colombia-numismatica/catalogo/'],
      '/en/collection/colombia-numismatics/catalog/',
    );
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
      redirects['/en/coleccion/estados-unidos/rency/'],
      '/en/collection/united-states/rency/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/rency/pele-the-beautiful-game/'],
      '/en/collection/united-states/rency/pele-the-beautiful-game/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/rency/warhol-basquiat-life-is-beautiful/'],
      '/en/collection/united-states/rency/warhol-basquiat-life-is-beautiful/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/'],
      '/en/collection/united-states/miscellaneous/giori-test-note-lincoln-memorial/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/miscelaneos/1-dolar-serie-2006-dallas-wheres-george/'],
      '/en/collection/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/10-dolares-serie-1934a-chicago/'],
      '/en/collection/united-states/10-dollars-series-1934a-chicago/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/10-dolares-serie-1934a-cleveland/'],
      '/en/collection/united-states/10-dollars-series-1934a-cleveland/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/10-dolares-serie-1934d-richmond/'],
      '/en/collection/united-states/10-dollars-series-1934d-richmond/',
    );
    assert.equal(
      redirects['/en/coleccion/estados-unidos/1-dolar-serie-2003-atlanta/'],
      '/en/collection/united-states/1-dollar-series-2003-atlanta/',
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
