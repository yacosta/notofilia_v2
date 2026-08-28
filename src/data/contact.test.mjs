import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { CONTACT_IMAGE, contactCopy, contactPath } from './contact.ts';
import { breadcrumbList } from '../lib/json-ld.ts';
import { cfImage } from '../lib/images.ts';

describe('contact page copy and paths', () => {
  it('uses bilingual dedicated routes from the first project', () => {
    assert.equal(contactPath('es'), '/contacto/');
    assert.equal(contactPath('en'), '/en/contact/');
  });

  it('keeps first-project field labels and status strings', () => {
    assert.equal(contactCopy.es.country, 'País de donde me escribes');
    assert.equal(contactCopy.en.country, 'Country you are writing from');
    assert.equal(contactCopy.es.success, '¡Gracias! Tu mensaje fue enviado correctamente.');
    assert.equal(contactCopy.en.reportLead, 'I want to report an error or add information.');
    assert.equal(CONTACT_IMAGE, '/uploads/doblones-coloniales-oro.png');
  });

  it('points English breadcrumb home at /en/', () => {
    const list = breadcrumbList(
      [
        { name: 'Notofilia', path: '/' },
        { name: 'Contact', path: '/en/contact/' },
      ],
      'en',
    );
    assert.equal(list.itemListElement[0].item, 'https://notofilia.com/en/');
    assert.equal(list.itemListElement[1].item, 'https://notofilia.com/en/contact/');
  });

  it('routes the doubloon photo through Cloudflare image transforms', () => {
    assert.match(cfImage(CONTACT_IMAGE, { width: 511 }), /^\/cdn-cgi\/image\/width=511/);
  });
});
