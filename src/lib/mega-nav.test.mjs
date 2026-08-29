import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync } from 'node:fs';
import { footerLinksFromNav } from './footer-nav.ts';
import { navColumns } from './nav-columns.ts';

describe('collection menu labels', () => {
  it('uses a dash between Colección Virtual and the discipline name', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    assert.match(source, /es: 'Colección Virtual - Notafilia'/);
    assert.match(source, /en: 'Virtual Collection - Notaphily'/);
    assert.match(source, /es: 'Colección Virtual - Numismática'/);
    assert.match(source, /en: 'Virtual Collection - Numismatics'/);
  });
});

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
        children: [
          {
            id: 'polimero-asia',
            es: 'Asia',
            en: 'Asia',
            children: [{ id: 'polimero-china', es: 'China', en: 'China', flag: 'cn' }],
          },
        ],
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
      aside[0]?.children?.map((node) => ({
        id: node.id,
        children: node.children?.map((child) => ({ id: child.id, flag: child.flag })),
      })),
      [{ id: 'polimero-asia', children: [{ id: 'polimero-china', flag: 'cn' }] }],
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

describe('polymer submenu', () => {
  it('nests China under Asia and does not keep a sibling China link', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const polymer = source.split("id: 'polimero'")[1]?.split("id: 'numismatica-mundial'")[0] ?? '';
    assert.match(polymer, /id: 'polimero-asia'/);
    assert.match(polymer, /es: 'Asia'/);
    assert.match(polymer, /id: 'polimero-china'/);
    const chinaBlocks = polymer.split("id: 'polimero-china'");
    assert.equal(chinaBlocks.length, 2);
    assert.match(polymer, /id: 'polimero-asia'[\s\S]*id: 'polimero-china'/);
  });
});

describe('United States submenu', () => {
  it('includes the Misceláneos placeholder under Estados Unidos', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const usa = source.split("id: 'estados-unidos'")[1]?.split("id: 'puerto-rico'")[0] ?? '';
    assert.match(usa, /id: 'miscelaneos'/);
    assert.match(usa, /es: 'Misceláneos'/);
    assert.match(usa, /en: 'Miscellaneous'/);
    assert.match(usa, /href: USA_MISC_PATH/);
  });
});

describe('Recursos submenu', () => {
  it('marks each resource link with a decorative icon', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const recursos = source.split("id: 'recursos'")[1]?.split("id: 'sobre'")[0] ?? '';
    assert.match(recursos, /id: 'guias',[\s\S]*?icon: 'guides'/);
    assert.match(recursos, /id: 'glosario',[\s\S]*?icon: 'glossary'/);
    assert.match(recursos, /id: 'noticias',[\s\S]*?icon: 'news'/);
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
          children: [
            {
              es: 'Asia',
              en: 'Asia',
              children: [{ es: 'China', en: 'China', href: '/coleccion/china/' }],
            },
          ],
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

  it('lists Guatemala only once when the country also sits under Colombian issues abroad', () => {
    const links = footerLinksFromNav([
      {
        es: 'Colombia',
        en: 'Colombia',
        href: '/coleccion/colombia/',
        children: [{ es: 'Guatemala', en: 'Guatemala', href: '/coleccion/guatemala/' }],
      },
      { es: 'Guatemala', en: 'Guatemala', href: '/coleccion/guatemala/' },
    ]);
    assert.equal(links.filter((item) => item.href === '/coleccion/guatemala/').length, 1);
  });
});
