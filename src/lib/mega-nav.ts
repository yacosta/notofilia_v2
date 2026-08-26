import { CHINA_PATH } from '../data/china';
import { COLOMBIA_PATH } from '../data/colombia';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { colombiaCoinagePieces } from '../data/colombia-coinage-pieces';
import { USA_PATH } from '../data/estados-unidos';
import { LAZARETTOS_PATH } from '../data/lazarettos';
import { NETHERLANDS_COINAGE_PATH, NUMISMATICS_PATH } from '../data/netherlands-coinage';
import { SERIES_PATH } from '../data/philippines-victory-66';
import { PUERTO_RICO_PATH } from '../data/puerto-rico';

const santaMarta1820 = colombiaCoinagePieces[0];

export type NavNode = {
  id: string;
  es: string;
  en: string;
  href?: string;
  children?: NavNode[];
};

export const megaNav: NavNode[] = [
  {
    id: 'coleccion-notofilia',
    es: 'Colección Virtual Notafilia',
    en: 'Virtual Notaphily Collection',
    children: [
      {
        id: 'colombia',
        es: 'Colombia',
        en: 'Colombia',
        href: COLOMBIA_PATH,
        children: [
          { id: 'colombia-siglo-pasado', es: 'Siglo pasado', en: 'Last century', href: `${COLOMBIA_PATH}#independencia` },
          { id: 'colombia-banca-libre', es: 'Banca libre', en: 'Free banking', href: `${COLOMBIA_PATH}#banca-libre` },
          { id: 'colombia-banco-republica', es: 'Banco de la República', en: 'Banco de la República', href: `${COLOMBIA_PATH}#banco-de-la-republica` },
          { id: 'colombia-errores', es: 'Errores', en: 'Errors', href: `${COLOMBIA_PATH}#banco-de-la-republica` },
        ],
      },
      {
        id: 'estados-unidos',
        es: 'Estados Unidos',
        en: 'United States',
        href: USA_PATH,
        children: [
          { id: 'us-colonial', es: 'Moneda colonial', en: 'Colonial coinage', href: `${USA_PATH}#us-colonial` },
          { id: 'us-obsoleto', es: 'Billete obsoleto', en: 'Obsolete notes', href: `${USA_PATH}#us-obsoleto` },
          { id: 'us-notes', es: 'United States Notes', en: 'United States Notes', href: `${USA_PATH}#us-notes` },
          { id: 'us-gold', es: 'Gold Certificates', en: 'Gold Certificates', href: `${USA_PATH}#us-gold` },
          { id: 'us-silver', es: 'Silver Certificates', en: 'Silver Certificates', href: `${USA_PATH}#us-silver` },
          { id: 'us-frb', es: 'Federal Reserve Bank', en: 'Federal Reserve Bank', href: `${USA_PATH}#us-frb` },
          { id: 'us-pop-art', es: 'Pop art', en: 'Pop art', href: `${USA_PATH}#us-pop-art` },
          { id: 'us-mpc', es: 'Military Payment Certificates', en: 'Military Payment Certificates', href: SERIES_PATH },
        ],
      },
      {
        id: 'filipinas',
        es: 'Filipinas',
        en: 'Philippines',
        href: SERIES_PATH,
      },
      {
        id: 'china',
        es: 'China',
        en: 'China',
        href: CHINA_PATH,
        children: [
          { id: 'china-100-yuan', es: '100 yuan · Milenio', en: '100 yuan · Millennium', href: `${CHINA_PATH}100-yuan/` },
        ],
      },
      {
        id: 'puerto-rico',
        es: 'Puerto Rico',
        en: 'Puerto Rico',
        href: PUERTO_RICO_PATH,
      },
      { id: 'ecuador', es: 'Ecuador', en: 'Ecuador' },
      {
        id: 'polimero',
        es: 'Billetes de polímero mundial',
        en: 'World polymer banknotes',
        children: [
          { id: 'polimero-china', es: 'China', en: 'China', href: CHINA_PATH },
        ],
      },
    ],
  },
  {
    id: 'numismatica-mundial',
    es: 'Numismática Mundial',
    en: 'World Numismatics',
    href: NUMISMATICS_PATH,
    children: [
      {
        id: 'num-colombia',
        es: 'Colombia-Numismática',
        en: 'Colombia-Numismatics',
        href: COLOMBIA_COINAGE_PATH,
        children: [
          { id: 'num-colombia-santa-fe', es: 'Santa Fe colonial', en: 'Colonial Santa Fe', href: `${COLOMBIA_COINAGE_PATH}#santa-fe` },
          { id: 'num-colombia-independencia', es: 'Independencia', en: 'Independence', href: `${COLOMBIA_COINAGE_PATH}#independencia` },
          { id: 'num-colombia-santa-marta-1820', es: '1/4 real Santa Marta, 1820', en: '1/4 real Santa Marta, 1820', href: santaMarta1820.path },
          { id: 'num-colombia-nueva-granada', es: 'Nueva Granada', en: 'New Granada', href: `${COLOMBIA_COINAGE_PATH}#nueva-granada` },
          { id: 'num-colombia-republica', es: 'República y Fábrica', en: 'Republic and mint', href: `${COLOMBIA_COINAGE_PATH}#republica` },
        ],
      },
      {
        id: 'num-lazarettos',
        es: 'Lazarettos',
        en: 'Lazarettos',
        href: LAZARETTOS_PATH,
        children: [
          { id: 'num-lazarettos-ragusa', es: 'Ragusa, 1377–1642', en: 'Ragusa, 1377–1642', href: `${LAZARETTOS_PATH}#ragusa` },
          { id: 'num-lazarettos-venecia', es: 'Venecia, desde 1423', en: 'Venice, from 1423', href: `${LAZARETTOS_PATH}#venecia` },
          { id: 'num-lazarettos-malta', es: 'Malta, 1643–1970', en: 'Malta, 1643–1970', href: `${LAZARETTOS_PATH}#malta` },
          { id: 'num-lazarettos-mediterraneo', es: 'Mediterráneo, 1650–1850', en: 'Mediterranean, 1650–1850', href: `${LAZARETTOS_PATH}#mediterraneo` },
        ],
      },
      {
        id: 'nl-monedas',
        es: 'Países Bajos',
        en: 'Netherlands',
        href: NETHERLANDS_COINAGE_PATH,
        children: [
          {
            id: 'nl-medieval',
            es: 'Del penique al gulden',
            en: 'From penny to gulden',
            href: `${NETHERLANDS_COINAGE_PATH}#medieval`,
          },
          {
            id: 'nl-ducado',
            es: 'Cecas provinciales y ducado',
            en: 'Provincial mints and the ducat',
            href: `${NETHERLANDS_COINAGE_PATH}#ducado-comercial`,
          },
          {
            id: 'nl-ducado-1761',
            es: 'Ducado de Utrecht, 1761',
            en: 'Utrecht ducat, 1761',
            href: `${NETHERLANDS_COINAGE_PATH}ducado-utrecht-1761/`,
          },
          {
            id: 'nl-decimal',
            es: 'El gulden decimal',
            en: 'The decimal gulden',
            href: `${NETHERLANDS_COINAGE_PATH}#gulden-decimal`,
          },
          {
            id: 'nl-euro-monedas',
            es: 'Cinc, posguerra y euro',
            en: 'Zinc, postwar, and the euro',
            href: `${NETHERLANDS_COINAGE_PATH}#ocupacion-euro`,
          },
        ],
      },
    ],
  },
  {
    id: 'recursos',
    es: 'Recursos',
    en: 'Resources',
    children: [
      { id: 'guias', es: 'Guías', en: 'Guides' },
      { id: 'glosario', es: 'Glosario', en: 'Glossary', href: '/glosario/' },
      { id: 'noticias', es: 'Noticias', en: 'News' },
    ],
  },
  {
    id: 'sobre',
    es: 'Sobre Notofilia',
    en: 'About Notofilia',
  },
];

export const primaryNav = megaNav.map(({ href, es, en }) => ({
  href: href ?? '#',
  es,
  en,
}));
