import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { englishRedirects, localizePath, otherLocalePath } from './locale-paths.ts';

describe('localizePath', () => {
  it('translates collection and glossary segments on the English tree', () => {
    assert.equal(localizePath('/coleccion/filipinas/', 'en'), '/en/collection/philippines/');
    assert.equal(localizePath('/coleccion/filipinas/1-peso/', 'en'), '/en/collection/philippines/1-peso/');
    assert.equal(localizePath('/glosario/notafilia/', 'en'), '/en/glossary/notafilia/');
    assert.equal(localizePath('/noticias/', 'en'), '/en/news/');
    assert.equal(localizePath('/contacto/', 'en'), '/en/contact/');
    assert.equal(
      localizePath('/blog/como-identificar-billetes-falsos/', 'en'),
      '/en/blog/how-to-identify-counterfeit-banknotes/',
    );
  });

  it('keeps Spanish paths on the ES tree', () => {
    assert.equal(localizePath('/en/collection/philippines/', 'es'), '/coleccion/filipinas/');
    assert.equal(localizePath('/en/glossary/', 'es'), '/glosario/');
  });

  it('maps reciprocal language twins', () => {
    const en = localizePath('/coleccion/espana/', 'en');
    assert.equal(en, '/en/collection/spain/');
    assert.equal(otherLocalePath(en, 'en'), '/coleccion/espana/');
  });

  it('rewrites legacy EN-under-coleccion USA URLs', () => {
    assert.equal(
      localizePath('/en/coleccion/united-states/mpc-vietnam/', 'en'),
      '/en/collection/united-states/mpc-vietnam/',
    );
  });
});

describe('englishRedirects', () => {
  it('301s the old Filipinas EN URL to the translated slug', () => {
    assert.equal(englishRedirects()['/en/coleccion/filipinas/'], '/en/collection/philippines/');
  });
});
