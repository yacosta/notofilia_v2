import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { footerLinksFromNav, footerTopLevelLinks } from './footer-nav.ts';

describe('footerTopLevelLinks', () => {
  it('keeps direct country and category links and drops nested pieces', () => {
    const links = footerTopLevelLinks([
      { es: 'Colombia', en: 'Colombia', href: '/coleccion/colombia/' },
      {
        es: 'Estados Unidos',
        en: 'United States',
        href: '/coleccion/estados-unidos/',
        children: [
          {
            es: '$5 · Continental Currency · 14 de enero de 1779',
            en: '$5 · Continental Currency · 14 January 1779',
            href: '/coleccion/estados-unidos/5-dolares-1779/',
          },
        ],
      },
    ]);
    assert.deepEqual(
      links.map((link) => link.href),
      ['/coleccion/colombia/', '/coleccion/estados-unidos/'],
    );
  });
});

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
