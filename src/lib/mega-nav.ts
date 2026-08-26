import { CHINA_PATH } from '../data/china';
import { COLOMBIA_PATH } from '../data/colombia';
import { USA_PATH } from '../data/estados-unidos';
import { SERIES_PATH } from '../data/philippines-victory-66';
import { PUERTO_RICO_PATH } from '../data/puerto-rico';

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
          { id: 'china-polimero', es: 'Billetes de polímero', en: 'Polymer banknotes', href: `${CHINA_PATH}#polimero` },
        ],
      },
      {
        id: 'puerto-rico',
        es: 'Puerto Rico',
        en: 'Puerto Rico',
        href: PUERTO_RICO_PATH,
      },
      { id: 'ecuador', es: 'Ecuador', en: 'Ecuador' },
      { id: 'polimero', es: 'Billetes de polímero mundial', en: 'World polymer banknotes' },
    ],
  },
  {
    id: 'coleccion-numismatica',
    es: 'Colección Virtual Numismática',
    en: 'Virtual Numismatics Collection',
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
