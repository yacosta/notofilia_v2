import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { footerLinksFromNav } from './footer-nav.ts';
import { footerNumismatica } from './mega-nav.ts';
import { coinById } from '../data/estados-unidos-coinage.ts';
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
            icon: 'asia',
            children: [
              { id: 'polimero-china', es: 'China', en: 'China', flag: 'cn' },
              { id: 'polimero-malasia', es: 'Malasia', en: 'Malaysia', flag: 'my' },
            ],
          },
          {
            id: 'polimero-europa',
            es: 'Europa',
            en: 'Europe',
            icon: 'europe',
            children: [{ id: 'polimero-inglaterra', es: 'Inglaterra', en: 'England', flag: 'gb' }],
          },
          {
            id: 'polimero-norteamerica',
            es: 'América del Norte',
            en: 'North America',
            icon: 'north-america',
            children: [{ id: 'polimero-canada', es: 'Canadá', en: 'Canada', flag: 'ca' }],
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
        icon: node.icon,
        children: node.children?.map((child) => ({ id: child.id, flag: child.flag })),
      })),
      [
        {
          id: 'polimero-asia',
          icon: 'asia',
          children: [
            { id: 'polimero-china', flag: 'cn' },
            { id: 'polimero-malasia', flag: 'my' },
          ],
        },
        { id: 'polimero-europa', icon: 'europe', children: [{ id: 'polimero-inglaterra', flag: 'gb' }] },
        {
          id: 'polimero-norteamerica',
          icon: 'north-america',
          children: [{ id: 'polimero-canada', flag: 'ca' }],
        },
      ],
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
    assert.match(polymer, /id: 'polimero-malasia'/);
    assert.match(polymer, /es: 'Malasia'/);
    assert.match(polymer, /en: 'Malaysia'/);
    assert.match(polymer, /href: POLIMERO_MALASIA_PATH/);
    const malaysiaBlocks = polymer.split("id: 'polimero-malasia'");
    assert.equal(malaysiaBlocks.length, 2);
    assert.match(polymer, /id: 'polimero-asia'[\s\S]*id: 'polimero-malasia'/);
    assert.match(polymer, /id: 'polimero-malasia'[\s\S]*?flag: 'my'/);
  });

  it('nests England under Europe in both locales and does not keep a sibling England link', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const polymer = source.split("id: 'polimero'")[1]?.split("id: 'numismatica-mundial'")[0] ?? '';
    assert.match(polymer, /id: 'polimero-europa'/);
    assert.match(polymer, /es: 'Europa'/);
    assert.match(polymer, /en: 'Europe'/);
    assert.match(polymer, /id: 'polimero-inglaterra'/);
    assert.match(polymer, /es: 'Inglaterra'/);
    assert.match(polymer, /en: 'England'/);
    assert.match(polymer, /href: POLIMERO_INGLATERRA_PATH/);
    const englandBlocks = polymer.split("id: 'polimero-inglaterra'");
    assert.equal(englandBlocks.length, 2);
    assert.match(polymer, /id: 'polimero-europa'[\s\S]*id: 'polimero-inglaterra'/);
    assert.match(polymer, /id: 'polimero-asia'[\s\S]*id: 'polimero-europa'/);
    assert.match(polymer, /id: 'polimero-inglaterra'[\s\S]*?flag: 'gb'/);
  });

  it('nests Canada under North America in both locales and does not keep a sibling Canada link', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const polymer = source.split("id: 'polimero'")[1]?.split("id: 'numismatica-mundial'")[0] ?? '';
    assert.match(polymer, /id: 'polimero-norteamerica'/);
    assert.match(polymer, /es: 'América del Norte'/);
    assert.match(polymer, /en: 'North America'/);
    assert.match(polymer, /id: 'polimero-canada'/);
    assert.match(polymer, /es: 'Canadá'/);
    assert.match(polymer, /en: 'Canada'/);
    assert.match(polymer, /href: POLIMERO_CANADA_PATH/);
    const canadaBlocks = polymer.split("id: 'polimero-canada'");
    assert.equal(canadaBlocks.length, 2);
    assert.match(polymer, /id: 'polimero-norteamerica'[\s\S]*id: 'polimero-canada'/);
    assert.match(polymer, /id: 'polimero-europa'[\s\S]*id: 'polimero-norteamerica'/);
    assert.match(polymer, /id: 'polimero-canada'[\s\S]*?flag: 'ca'/);
  });

  it('gives every polymer country child a flag code', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const polymer = source.split("id: 'polimero'")[1]?.split("id: 'numismatica-mundial'")[0] ?? '';
    assert.match(polymer, /id: 'polimero-china'[\s\S]*?flag: 'cn'/);
    assert.match(polymer, /id: 'polimero-malasia'[\s\S]*?flag: 'my'/);
    assert.match(polymer, /id: 'polimero-inglaterra'[\s\S]*?flag: 'gb'/);
    assert.match(polymer, /id: 'polimero-canada'[\s\S]*?flag: 'ca'/);
    const countryIds = [...polymer.matchAll(/id: '(polimero-[^']+)'/g)].map((match) => match[1]);
    for (const id of countryIds) {
      const block = polymer.split(`id: '${id}'`)[1]?.split(/id: '/)[0] ?? '';
      if (!/href:/.test(block)) continue;
      assert.match(block, /flag: '[a-z]{2}'/, `${id} needs a flag-icons ISO code`);
    }
  });

  it('marks each polymer continent heading with a continent silhouette', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const polymer = source.split("id: 'polimero'")[1]?.split("id: 'numismatica-mundial'")[0] ?? '';
    assert.match(polymer, /id: 'polimero-asia',[\s\S]*?icon: 'asia'/);
    assert.match(polymer, /id: 'polimero-europa',[\s\S]*?icon: 'europe'/);
    assert.match(polymer, /id: 'polimero-norteamerica',[\s\S]*?icon: 'north-america'/);
    const icons = readFileSync(new URL('../components/NavIcon.astro', import.meta.url), 'utf8');
    assert.match(icons, /'asia'/);
    assert.match(icons, /'europe'/);
    assert.match(icons, /'north-america'/);
    assert.match(icons, /icon === 'asia'/);
    assert.match(icons, /icon === 'europe'/);
    assert.match(icons, /icon === 'north-america'/);
  });
});

describe('country flags', () => {
  it('allowlists every mega-nav flag in CountryFlag and ships the SVG', () => {
    const nav = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const flags = [...nav.matchAll(/flag:\s*'([a-z]{2})'/g)].map((match) => match[1]);
    assert.ok(flags.includes('gb'), 'England must use flag: gb');
    assert.ok(flags.includes('ca'), 'Canada must use flag: ca');
    assert.ok(flags.includes('my'), 'Malaysia must use flag: my');
    const countryFlag = readFileSync(new URL('../components/CountryFlag.astro', import.meta.url), 'utf8');
    const allow = countryFlag.match(/FLAG_CODES = \[([^\]]+)\]/)?.[1] ?? '';
    for (const code of new Set(flags)) {
      assert.match(allow, new RegExp(`'${code}'`), `${code} must be in CountryFlag FLAG_CODES`);
      assert.ok(
        existsSync(new URL(`../../public/flags/${code}.svg`, import.meta.url)),
        `public/flags/${code}.svg is required for flag: '${code}'`,
      );
    }
  });
});

describe('Colombia visual catalogs', () => {
  it('keeps the collection-wide notes catalog and the Colombia coin catalog, not the Colombia notes catalog', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    assert.match(source, /id: 'catalogo-billetes'/);
    assert.match(source, /href: NOTAFILIA_NOTES_CATALOG_PATH/);
    assert.doesNotMatch(source, /id: 'colombia-catalogo'/);
    assert.doesNotMatch(source, /href: COLOMBIA_NOTES_CATALOG_PATH/);
    assert.match(source, /id: 'colombia-monedas-catalogo'/);
    assert.match(source, /href: COLOMBIA_COIN_CATALOG_PATH/);
  });
});

describe('United States numismatics menu', () => {
  it('adds Estados Unidos under Colección Virtual - Numismática', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const numismatica = source.split("id: 'numismatica-mundial'")[1]?.split("id: 'recursos'")[0] ?? '';
    assert.match(numismatica, /id: 'us-monedas'/);
    assert.match(numismatica, /href: USA_COINAGE_PATH/);
    assert.match(numismatica, /id: 'colombia-monedas'[\s\S]*id: 'us-monedas'[\s\S]*id: 'nl-monedas'/);
  });

  it('nests the Trump Semiquincentennial dollar under Estados Unidos', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const numismatica = source.split("id: 'numismatica-mundial'")[1]?.split("id: 'recursos'")[0] ?? '';
    const usBlock = numismatica.split("id: 'us-monedas'")[1]?.split("id: 'nl-monedas'")[0] ?? '';
    assert.match(source, /coinById\('1-dolar-trump-1776-2026'\)/);
    assert.match(usBlock, /id: 'us-1-dolar-trump-1776-2026'/);
    assert.match(usBlock, /es: usTrumpDollar\.title\.es/);
    assert.match(usBlock, /en: usTrumpDollar\.title\.en/);
    assert.match(usBlock, /href: usTrumpDollar\.path/);
    assert.match(usBlock, /children:/);
  });

  it('lists the Trump dollar in the numismatics footer after the US series', () => {
    const coin = coinById('1-dolar-trump-1776-2026');
    assert.ok(coin);
    const hrefs = footerNumismatica.map((item) => item.href);
    const seriesIndex = hrefs.indexOf('/coleccion/estados-unidos-numismatica/');
    const coinIndex = hrefs.indexOf(coin.path);
    assert.ok(seriesIndex >= 0, 'US coinage series must appear in the footer');
    assert.ok(coinIndex >= 0, 'Trump dollar piece must appear in the footer');
    assert.ok(coinIndex > seriesIndex);
    assert.equal(footerNumismatica[coinIndex]?.es, coin.title.es);
    assert.equal(footerNumismatica[coinIndex]?.en, coin.title.en);
  });
});

describe('United States submenu', () => {
  it('includes the Rency and Misceláneos cases under Estados Unidos', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const usa = source.split("id: 'estados-unidos'")[1]?.split("id: 'puerto-rico'")[0] ?? '';
    assert.match(usa, /id: 'rency'/);
    assert.match(usa, /es: 'Rency'/);
    assert.match(usa, /en: 'Rency'/);
    assert.match(usa, /href: USA_RENCY_PATH/);
    assert.match(usa, /id: 'rency'[\s\S]*?icon: 'rency'/);
    assert.match(usa, /id: 'miscelaneos'/);
    assert.match(usa, /es: 'Misceláneos'/);
    assert.match(usa, /en: 'Miscellaneous'/);
    assert.match(usa, /href: USA_MISC_PATH/);
    assert.match(usa, /id: 'miscelaneos'[\s\S]*?icon: 'miscellaneous'/);
    const icons = readFileSync(new URL('../components/NavIcon.astro', import.meta.url), 'utf8');
    assert.match(icons, /'rency'/);
    assert.match(icons, /'miscellaneous'/);
    assert.match(icons, /icon === 'rency'/);
    assert.match(icons, /icon === 'miscellaneous'/);
  });

  it('places the Baraboo 1933 scrip type immediately after Misceláneos', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const usa = source.split("id: 'estados-unidos'")[1]?.split("id: 'puerto-rico'")[0] ?? '';
    const data = readFileSync(new URL('../data/estados-unidos.ts', import.meta.url), 'utf8');
    assert.match(source, /USA_BARABOO_SCRIP_PATH/);
    assert.match(source, /barabooScripSeriesCopy/);
    assert.match(usa, /id: 'scrip-baraboo'/);
    assert.match(usa, /es: barabooScripSeriesCopy\.es\.title/);
    assert.match(usa, /en: barabooScripSeriesCopy\.en\.title/);
    assert.match(usa, /href: USA_BARABOO_SCRIP_PATH/);
    assert.match(usa, /id: 'miscelaneos'[\s\S]*id: 'scrip-baraboo'/);
    assert.doesNotMatch(usa, /id: 'scrip-baraboo'[\s\S]*id: 'miscelaneos'/);
    const miscBlock = usa.split("id: 'miscelaneos'")[1]?.split("id: 'scrip-baraboo'")[0] ?? '';
    assert.doesNotMatch(miscBlock, /children:/);
    assert.match(data, /title: 'Scrip de Baraboo · Golden Jubilee 1933'/);
    assert.match(data, /title: 'Baraboo scrip · Golden Jubilee 1933'/);
    assert.match(usa, /id: 'scrip-baraboo'[\s\S]*?icon: 'circus'/);
  });

  it('marks the Baraboo scrip link with a decorative circus Big Top', () => {
    const source = readFileSync(new URL('./mega-nav.ts', import.meta.url), 'utf8');
    const usa = source.split("id: 'estados-unidos'")[1]?.split("id: 'puerto-rico'")[0] ?? '';
    const icons = readFileSync(new URL('../components/NavIcon.astro', import.meta.url), 'utf8');
    assert.match(usa, /id: 'scrip-baraboo'[\s\S]*?icon: 'circus'/);
    assert.match(icons, /'circus'/);
    assert.match(icons, /icon === 'circus'/);
    assert.match(icons, /<circle cx="12" cy="3.45" r="1.15"/);
    assert.match(icons, /M3\.9 11\.25 12 6\.35l8\.1 4\.9/);
    assert.match(icons, /M9\.15 20\.4Q12 13\.9 14\.85 20\.4/);
    assert.match(icons, /class="mega-nav-icon" aria-hidden="true"/);
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
            {
              es: 'Europa',
              en: 'Europe',
              children: [
                {
                  es: 'Inglaterra',
                  en: 'England',
                  href: '/coleccion/polimero-mundial/europa/inglaterra/',
                },
              ],
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
        '/coleccion/polimero-mundial/europa/inglaterra/',
      ],
    );
    assert.deepEqual(
      footerLinksFromNav([
        { es: 'Recursos', en: 'Resources', children: [{ es: 'Guías', en: 'Guides', href: '/blog/' }] },
      ]),
      [{ href: '/blog/', es: 'Guías', en: 'Guides' }],
    );
  });

  it('lists England only once when it sits under polymer Europe', () => {
    const links = footerLinksFromNav([
      {
        es: 'Billetes de polímero mundial',
        en: 'World polymer banknotes',
        href: '/coleccion/polimero-mundial/',
        children: [
          {
            es: 'Europa',
            en: 'Europe',
            children: [
              {
                es: 'Inglaterra',
                en: 'England',
                href: '/coleccion/polimero-mundial/europa/inglaterra/',
              },
            ],
          },
        ],
      },
      {
        es: 'Inglaterra',
        en: 'England',
        href: '/coleccion/polimero-mundial/europa/inglaterra/',
      },
    ]);
    assert.equal(
      links.filter((item) => item.href === '/coleccion/polimero-mundial/europa/inglaterra/').length,
      1,
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
