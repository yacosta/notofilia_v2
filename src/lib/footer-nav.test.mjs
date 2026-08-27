import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { footerLinksFromNav } from './footer-nav.ts';

describe('footerLinksFromNav', () => {
  it('does not repeat Guatemala when it appears as a nested foreign-issue child', () => {
    const links = footerLinksFromNav([
      {
        es: 'Colombia',
        en: 'Colombia',
        href: '/coleccion/colombia/',
        children: [
          {
            es: 'Emisiones en el extranjero',
            en: 'Issues abroad',
            children: [{ es: 'Guatemala', en: 'Guatemala', href: '/coleccion/guatemala/' }],
          },
        ],
      },
      { es: 'Guatemala', en: 'Guatemala', href: '/coleccion/guatemala/' },
    ]);
    assert.equal(links.filter((link) => link.href === '/coleccion/guatemala/').length, 1);
  });
});
