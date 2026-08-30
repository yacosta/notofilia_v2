import { CHINA_PATH } from '../data/china';
import { COLOMBIA_PATH } from '../data/colombia';
import { COLOMBIA_NOTES_CATALOG_PATH } from '../data/colombia-type-catalog';
import { NOTAFILIA_NOTES_CATALOG_PATH } from '../data/collection-note-catalog';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { COLOMBIA_COIN_CATALOG_PATH } from '../data/colombia-coin-type-catalog';
import { USA_MISC_PATH, USA_MPC_PATH, USA_PATH } from '../data/estados-unidos';
import { NETHERLANDS_COINAGE_PATH, NUMISMATICS_PATH } from '../data/netherlands-coinage';
import { SERIES_PATH } from '../data/philippines-victory-66';
import { POLIMERO_MUNDIAL_PATH } from '../data/polimero-mundial';
import { PUERTO_RICO_PATH } from '../data/puerto-rico';
import { ECUADOR_PATH } from '../data/ecuador';
import { GUATEMALA_PATH } from '../data/guatemala';
import { NOTAFILIA_PATH } from '../data/notafilia';
import { ABOUT_PATH } from '../data/about';
import { CONTACT_PATH } from '../data/contact';
import { footerLinksFromNav } from './footer-nav';

export type { FooterLink } from './footer-nav';
export { footerLinksFromNav } from './footer-nav';

export type NavNode = {
  id: string;
  es: string;
  en: string;
  href?: string;
  /** ISO 3166-1 alpha-2 code for a decorative [flag-icons](https://github.com/lipis/flag-icons) flag. */
  flag?: string;
  /** Decorative mark for non-country panel links (Recursos). */
  icon?: 'guides' | 'glossary' | 'news';
  /** Place this node in a second mega-menu column with its children always visible. */
  column?: 'main' | 'aside';
  /** Lay out this item's child links in a single desktop row (Recursos). */
  layout?: 'horizontal';
  children?: NavNode[];
};

export { navColumns } from './nav-columns';

export const megaNav: NavNode[] = [
  {
    id: 'coleccion-notofilia',
    es: 'Colección Virtual - Notafilia',
    en: 'Virtual Collection - Notaphily',
    href: NOTAFILIA_PATH,
    children: [
      {
        id: 'catalogo-billetes',
        es: 'Catálogo visual de billetes',
        en: 'Visual banknote catalog',
        href: NOTAFILIA_NOTES_CATALOG_PATH,
      },
      {
        id: 'colombia',
        es: 'Colombia',
        en: 'Colombia',
        href: COLOMBIA_PATH,
        flag: 'co',
        children: [
          {
            id: 'colombia-catalogo',
            es: 'Catálogo visual · Colombia',
            en: 'Visual catalog · Colombia',
            href: COLOMBIA_NOTES_CATALOG_PATH,
          },
          {
            id: 'emisiones-extranjero-guatemala',
            es: 'Guatemala (Emisiones en el Extranjero)',
            en: 'Guatemala (Issues Abroad)',
            href: GUATEMALA_PATH,
            flag: 'gt',
          },
        ],
      },
      {
        id: 'estados-unidos',
        es: 'Estados Unidos',
        en: 'United States',
        href: USA_PATH,
        flag: 'us',
        children: [
          {
            id: 'filipinas',
            es: 'Commonwealth de Filipinas (1935 - 1945)',
            en: 'Commonwealth of the Philippines (1935 - 1945)',
            href: SERIES_PATH,
            flag: 'ph',
          },
          {
            id: 'mpc-vietnam',
            es: 'MPC - Guerra de Vietnam (1955-1975)',
            en: 'MPC - Vietnam War (1955-1975)',
            href: USA_MPC_PATH,
            flag: 'vn',
          },
          {
            id: 'miscelaneos',
            es: 'Misceláneos',
            en: 'Miscellaneous',
            href: USA_MISC_PATH,
          },
        ],
      },
      {
        id: 'puerto-rico',
        es: 'Puerto Rico',
        en: 'Puerto Rico',
        href: PUERTO_RICO_PATH,
        flag: 'pr',
      },
      {
        id: 'ecuador',
        es: 'Ecuador',
        en: 'Ecuador',
        href: ECUADOR_PATH,
        flag: 'ec',
      },
      {
        id: 'polimero',
        es: 'Billetes de polímero mundial',
        en: 'World polymer banknotes',
        href: POLIMERO_MUNDIAL_PATH,
        column: 'aside',
        children: [
          {
            id: 'polimero-asia',
            es: 'Asia',
            en: 'Asia',
            children: [
              { id: 'polimero-china', es: 'China', en: 'China', href: CHINA_PATH, flag: 'cn' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'numismatica-mundial',
    es: 'Colección Virtual - Numismática',
    en: 'Virtual Collection - Numismatics',
    href: NUMISMATICS_PATH,
    children: [
      {
        id: 'colombia-monedas',
        es: 'Colombia',
        en: 'Colombia',
        href: COLOMBIA_COINAGE_PATH,
        flag: 'co',
        children: [
          {
            id: 'colombia-monedas-catalogo',
            es: 'Catálogo visual de monedas',
            en: 'Visual coin catalog',
            href: COLOMBIA_COIN_CATALOG_PATH,
          },
        ],
      },
      {
        id: 'nl-monedas',
        es: 'Países Bajos',
        en: 'Netherlands',
        href: NETHERLANDS_COINAGE_PATH,
        flag: 'nl',
      },
    ],
  },
  {
    id: 'recursos',
    es: 'Recursos',
    en: 'Resources',
    layout: 'horizontal',
    children: [
      { id: 'guias', es: 'Guías', en: 'Guides', href: '/blog/', icon: 'guides' },
      { id: 'glosario', es: 'Glosario', en: 'Glossary', href: '/glosario/', icon: 'glossary' },
      { id: 'noticias', es: 'Noticias', en: 'News', href: '/noticias/', icon: 'news' },
    ],
  },
  {
    id: 'sobre',
    es: 'Sobre Notofilia',
    en: 'About Notofilia',
    href: ABOUT_PATH,
  },
  {
    id: 'contacto',
    es: 'Contacto',
    en: 'Contact',
    href: CONTACT_PATH,
  },
];

export const primaryNav = megaNav.map(({ href, es, en }) => ({
  href: href ?? '#',
  es,
  en,
}));

const [navNotafilia, navNumismatica, navRecursos] = megaNav;

export const footerNotafilia = footerLinksFromNav(navNotafilia?.children);
export const footerNumismatica = footerLinksFromNav(navNumismatica?.children);
export const footerResources = footerLinksFromNav(navRecursos?.children);
