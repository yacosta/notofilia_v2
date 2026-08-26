import { BANREP_PATH, COLOMBIA_PATH } from '../data/colombia';
import { SERIES_PATH } from '../data/philippines-victory-66';

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
          { id: 'colombia-banco-republica', es: 'Banco de la República', en: 'Banco de la República', href: BANREP_PATH },
          { id: 'colombia-errores', es: 'Errores', en: 'Errors', href: `${BANREP_PATH}#errores` },
        ],
      },
      {
        id: 'estados-unidos',
        es: 'Estados Unidos',
        en: 'United States',
        children: [
          { id: 'us-colonial', es: 'Moneda colonial', en: 'Colonial coinage' },
          { id: 'us-obsoleto', es: 'Billete obsoleto', en: 'Obsolete notes' },
          { id: 'us-notes', es: 'United States Notes', en: 'United States Notes' },
          { id: 'us-pop-art', es: 'Pop art', en: 'Pop art' },
          { id: 'us-gold', es: 'Gold Certificates', en: 'Gold Certificates' },
          { id: 'us-silver', es: 'Silver Certificates', en: 'Silver Certificates' },
          { id: 'us-frb', es: 'Federal Reserve Bank', en: 'Federal Reserve Bank' },
        ],
      },
      {
        id: 'filipinas',
        es: 'Filipinas',
        en: 'Philippines',
        href: SERIES_PATH,
      },
      { id: 'puerto-rico', es: 'Puerto Rico', en: 'Puerto Rico' },
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
