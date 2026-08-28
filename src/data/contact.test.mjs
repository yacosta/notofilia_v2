import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync } from 'node:fs';
import { CONTACT_IMAGE, contactCopy, contactLegacyRedirect, contactPath } from './contact.ts';
import { localizePath } from '../lib/locale-paths.ts';

describe('contact page copy and paths', () => {
  it('uses bilingual dedicated routes from the first project', () => {
    assert.equal(contactPath('es'), '/contacto/');
    assert.equal(contactPath('en'), '/en/contact/');
    assert.equal(localizePath('/contacto/', 'en'), '/en/contact/');
    assert.equal(localizePath('/', 'en'), '/en/');
    assert.equal(contactLegacyRedirect('/contacto.dc.html'), '/contacto/');
    assert.equal(contactLegacyRedirect('/en/contact.dc/'), '/en/contact/');
  });

  it('is wired as its own top-level mega-nav button', () => {
    const source = readFileSync(new URL('../lib/mega-nav.ts', import.meta.url), 'utf8');
    assert.match(source, /id: 'contacto'/);
    assert.match(source, /href: CONTACT_PATH/);
    assert.doesNotMatch(source, /id: 'contacto'[\s\S]*children:/);
  });

  it('keeps first-project field labels and status strings', () => {
    assert.equal(contactCopy.es.country, 'País de donde me escribes');
    assert.equal(contactCopy.en.country, 'Country you are writing from');
    assert.equal(contactCopy.es.success, '¡Gracias! Tu mensaje fue enviado correctamente.');
    assert.equal(contactCopy.en.reportLead, 'I want to report an error or add information.');
    assert.equal(CONTACT_IMAGE, '/uploads/doblones-coloniales-oro.png');
  });
});
