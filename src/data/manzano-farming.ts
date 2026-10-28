import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const MANZANO_FARMING_PATH =
  '/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/';
export const MANZANO_FARMING_PATH_EN =
  '/collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/';

export const manzanoFarmingCopy = {
  es: {
    nav: 'Manzano Farming Co.',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    fichas: 'Fichas de hacienda',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Manzano Farming Co. en Boyacá',
    metaDescription:
      'Esta colección guarda la seña de 10, 1901, de Manzano Farming Co. La de 25 que publicó Absoluti no está en Notofilia.',
    kicker: 'Colombia-Numismática',
    title: 'Manzano Farming Co.',
    lead:
      'Manzano Farming Co. es una firma de Sotaquirá y Paipa que Fernando Barriga del Diestro nombra entre las señas de la Guerra de los Mil Días. Esta colección guarda la seña de 10, fechada 1901. Otra colección publicó una de 25, distinta.',
    published: '2026-10-23',
    dateLabel: '23 de octubre de 2026',
    authorLabel: 'Yezid Acosta',
    factsHeading: 'En breve',
    facts: [
      {
        label: 'Emisor',
        value:
          'Manzano Farming Co., de Sotaquirá y Paipa (Boyacá), según Fernando Barriga del Diestro, Credencial Historia n.º 128 (agosto de 2000).',
      },
      {
        label: 'Pieza de esta colección',
        value:
          '10, 1901. La unidad no está inscrita. Estas fotografías no muestran un resello de letras. La ficha cuelga de esta página.',
      },
      {
        label: 'Pieza publicada',
        value:
          '25, 1901, bronce, 28,5 mm, 1,5 mm, canto liso, resello JB. La describe la colección Absoluti. No está en Notofilia, y el cuadro no dice la unidad del 25.',
      },
      {
        label: 'Reverso',
        value:
          'Papayo y Sativa; Manzano, Carreño, Soconsuca; Sotaquirá y Paipa. El listado de 1970 imprime Satira, no Sativa.',
      },
      {
        label: 'Norma citada',
        value:
          'Resolución 13 del 22 de febrero de 1910, del ministro del Tesoro Antonio José Cadavid, según Barriga. Esta página no ha cotejado el Diario Oficial.',
      },
    ],
    sourcesTitle: 'Fuentes',
    pieceCta: 'Ver la seña de 10, 1901',
    fichasCta: 'Volver a las fichas de hacienda',
    seriesCta: 'Volver a Colombia-Numismática',
    tokenFichasHeading: 'Fichas',
  },
  en: {
    nav: 'Manzano Farming Co.',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    fichas: 'Hacienda tokens',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Manzano Farming Co. in Boyacá',
    metaDescription:
      'This collection holds the 1901 Manzano Farming Co. token of 10. Absoluti’s published 25 is not a Notofilia piece.',
    kicker: 'Colombia-Numismatics',
    title: 'Manzano Farming Co.',
    lead:
      'Manzano Farming Co. is a firm of Sotaquirá and Paipa that Fernando Barriga del Diestro names among the private tokens of the War of a Thousand Days. This collection holds the token of 10, dated 1901. Another collection published a different one, valued 25.',
    published: '2026-10-23',
    dateLabel: 'October 23, 2026',
    authorLabel: 'Yezid Acosta',
    factsHeading: 'In brief',
    facts: [
      {
        label: 'Issuer',
        value:
          'Manzano Farming Co., of Sotaquirá and Paipa (Boyacá), according to Fernando Barriga del Diestro, Credencial Historia no. 128 (August 2000).',
      },
      {
        label: 'Piece in this collection',
        value:
          '10, 1901. The unit is not inscribed. These photographs show no letter countermark. The record hangs from this page.',
      },
      {
        label: 'Published piece',
        value:
          '25, 1901, bronze, 28.5 mm, 1.5 mm, plain edge, counterstamp JB. The Absoluti collection describes it. It is not in Notofilia, and the table does not give a unit for the 25.',
      },
      {
        label: 'Reverse',
        value:
          'Papayo y Sativa; Manzano, Carreño, Soconsuca; Sotaquirá y Paipa. The 1970 listing prints Satira, not Sativa.',
      },
      {
        label: 'Statute as cited',
        value:
          'Resolution 13 of 22 February 1910, by Treasury Minister Antonio José Cadavid, as Barriga gives it. This page has not collated the Diario Oficial.',
      },
    ],
    sourcesTitle: 'Sources',
    pieceCta: 'View the 1901 token of 10',
    fichasCta: 'Back to hacienda tokens',
    seriesCta: 'Back to Colombia-Numismatics',
    tokenFichasHeading: 'Tokens',
  },
} as const;

export const manzanoFarmingSources: CatalogSource[] = [
  {
    href: 'https://www.banrepcultural.org/biblioteca-virtual/credencial-historia-no-128/las-senas-en-la-guerra-de-los-mil-dias-billetes-y',
    es: 'Fernando Barriga del Diestro — Las «señas» en la guerra de los mil días (Credencial Historia n.º 128, agosto de 2000)',
    en: 'Fernando Barriga del Diestro — Private tokens in the War of a Thousand Days (Credencial Historia no. 128, August 2000)',
    note: {
      es: 'Nombra a Manzano Farming Co., de Sotaquirá y Paipa, entre las señas en forma de moneda. Cita la resolución 13 de 1910. Esta página no ha cotejado el Diario Oficial.',
      en: 'It names Manzano Farming Co., of Sotaquirá and Paipa, among the coin-shaped tokens. It quotes resolution 13 of 1910. This page has not collated the Diario Oficial.',
    },
  },
  {
    href: 'https://web.archive.org/web/20160710130208/http://www.lablaa.org/blaavirtual/revistas/credencial/agosto2000/128billetes.htm',
    es: 'Biblioteca Luis Ángel Arango — el mismo artículo, captura del 10 de julio de 2016',
    en: 'Biblioteca Luis Ángel Arango — the same article, capture of 10 July 2016',
    note: {
      es: 'El texto leído para esta página. La ficha vigente de Banrepcultural es la dirección de arriba.',
      en: 'The text read for this page. The current Banrepcultural record is the address above.',
    },
  },
  {
    href: 'https://www.mascoleccionismo.com/medallas-fichas-y-monedas-de-colombia-06-diciembre-2015/',
    es: 'Alexander Montaña Rodríguez — Medallas, fichas y monedas de Colombia, n.º 6 (diciembre de 2015)',
    en: 'Alexander Montaña Rodríguez — Medallas, fichas y monedas de Colombia, no. 6 (December 2015)',
    note: {
      es: 'El índice lista «Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ». La entrada 47, página 13, mide un ejemplar con resello: 24,3 mm, 4,7 g, latón. Esas cifras no son las de la seña de 10, y esta página no republica la lámina.',
      en: 'The index lists “Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ.” Entry 47, page 13, measures a countermarked example: 24.3 mm, 4.7 g, brass. Those figures are not the token of 10, and this page does not republish the plate.',
    },
  },
  {
    href: 'https://numis.absoluti-ind.com/MonedasColSennas.html',
    es: 'Colección Absoluti (CFMR) — señas de Colombia, Manzano Farming Co., 25, 1901',
    en: 'Absoluti collection (CFMR) — Colombian tokens, Manzano Farming Co., 25, 1901',
    note: {
      es: 'Bronce, 28,5 mm, 1,5 mm, canto liso, resello JB. Leyendas del anverso y del reverso. Obsequio de Carolina Martínez. No es una pieza de Notofilia, y esta página no republica la fotografía.',
      en: 'Bronze, 28.5 mm, 1.5 mm, plain edge, counterstamp JB. Obverse and reverse legends. A gift of Carolina Martínez. It is not a Notofilia piece, and this page does not republish the photograph.',
    },
  },
  {
    href: 'https://nnp.wustl.edu/library/advancedsearch?fullsearchterm=Manzano%20Farming',
    es: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 de diciembre de 1970, p. 38',
    en: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 December 1970, p. 38',
    note: {
      es: 'Lista «Manzano Farming Co Papayo y Satira 1901». Satira no es la lectura SATIVA de la seña de 10.',
      en: 'It lists “Manzano Farming Co Papayo y Satira 1901.” Satira is not the SATIVA reading of the token of 10.',
    },
  },
  {
    href: 'http://sotaquiraboyaca.micolombiadigital.gov.co/sites/sotaquiraboyaca/content/files/000354/17661_pd-sotaquira-2020-2023.pdf',
    es: 'Alcaldía de Sotaquirá — Plan de Desarrollo Municipal 2020-2023',
    en: 'Municipality of Sotaquirá — Municipal Development Plan 2020–2023',
    note: {
      es: 'Lista 29 veredas, entre ellas Carreño, Soconsuca de Blancos y Soconsuca de Indios. No hay una vereda Papayo. Cuenta el manzano y la papayuela entre los cultivos permanentes. No es un archivo de la firma en 1901.',
      en: 'It lists 29 veredas, among them Carreño, Soconsuca de Blancos, and Soconsuca de Indios. There is no vereda named Papayo. It counts apple trees and papayuela among the permanent crops. It is not a 1901 ledger of the firm.',
    },
  },
  {
    href: 'http://sotaquiraboyaca.micolombiadigital.gov.co/sites/sotaquiraboyaca/content/files/000529/26428_tablalimites.pdf',
    es: 'Esquema de ordenamiento territorial de Sotaquirá — tabla de límites veredales',
    en: 'Sotaquirá land-use scheme — table of vereda boundaries',
    note: {
      es: 'Carreño limita por el norte con el municipio de Paipa.',
      en: 'Carreño borders the municipality of Paipa on the north.',
    },
  },
];

export function manzanoFarmingPath(locale: Locale): string {
  return locale === 'en' ? `/en${MANZANO_FARMING_PATH_EN}` : MANZANO_FARMING_PATH;
}

export const manzanoFarmingDedicatedSlugs = [
  MANZANO_FARMING_PATH.replace(/^\/|\/$/g, ''),
  MANZANO_FARMING_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
