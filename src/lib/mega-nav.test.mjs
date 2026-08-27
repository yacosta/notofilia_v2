import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { footerLinksFromNav } from './footer-nav.ts';
import { navColumns } from './nav-columns.ts';

describe('mega-nav columns', () => {
  it('keeps country rows on the main side and polymer in the aside', () => {
    const { main, aside } = navColumns([
      { id: 'colombia', es: 'Colombia', en: 'Colombia', flag: 'co' },
      { id: 'estados-unidos', es: 'Estados Unidos', en: 'United States', flag: 'us' },
      { id: 'puerto-rico', es: 'Puerto Rico', en: 'Puerto Rico', flag: 'pr' },
      { id: 'ecuador', es: 'Ecuador', en: 'Ecuador', flag: 'ec' },
      {
        id: 'polimero',
        es: 'Billetes de polímero mundial',
        en: 'World polymer banknotes',
        column: 'aside',
        children: [{ id: 'polimero-china', es: 'China', en: 'China', flag: 'cn' }],
      },
    ]);
    assert.deepEqual(
      main.map((node) => node.id),
      ['colombia', 'estados-unidos', 'puerto-rico', 'ecuador'],
    );
    assert.deepEqual(
      aside.map((node) => node.id),
      ['polimero'],
    );
    assert.equal(aside[0]?.flag, undefined);
    assert.deepEqual(
      aside[0]?.children?.map((node) => ({ id: node.id, flag: node.flag })),
      [{ id: 'polimero-china', flag: 'cn' }],
    );
  });

  it('leaves single-column menus untouched', () => {
    const nodes = [
      { id: 'colombia-monedas', es: 'Colombia', en: 'Colombia', flag: 'co' },
      { id: 'nl-monedas', es: 'Países Bajos', en: 'Netherlands', flag: 'nl' },
    ];
    const { main, aside } = navColumns(nodes);
    assert.equal(aside.length, 0);
    assert.equal(main.length, nodes.length);
  });
});

describe('footer links from mega-nav', () => {
  it('includes nested submenu links in document order and skips headings without href', () => {
    assert.deepEqual(
      footerLinksFromNav([
        { es: 'Colombia', en: 'Colombia', href: '/coleccion/colombia/' },
        {
          es: 'Estados Unidos',
          en: 'United States',
          href: '/coleccion/estados-unidos/',
          children: [
            { es: 'Filipinas', en: 'Philippines', href: '/coleccion/filipinas/' },
            { es: 'MPC', en: 'MPC', href: '/coleccion/estados-unidos/mpc-vietnam/' },
          ],
        },
        {
          es: 'Billetes de polímero mundial',
          en: 'World polymer banknotes',
          href: '/coleccion/polimero-mundial/',
          children: [{ es: 'China', en: 'China', href: '/coleccion/china/' }],
        },
      ]).map((item) => item.href),
      [
        '/coleccion/colombia/',
        '/coleccion/estados-unidos/',
        '/coleccion/filipinas/',
        '/coleccion/estados-unidos/mpc-vietnam/',
        '/coleccion/polimero-mundial/',
        '/coleccion/china/',
      ],
    );
    assert.deepEqual(
      footerLinksFromNav([
        { es: 'Recursos', en: 'Resources', children: [{ es: 'Guías', en: 'Guides', href: '/blog/' }] },
      ]),
      [{ href: '/blog/', es: 'Guías', en: 'Guides' }],
    );
  });
});
