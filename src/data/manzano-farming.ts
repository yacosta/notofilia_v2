import type { CatalogSource, LocalizedText } from './catalog';
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
      'Seña de bronce de 1901 de Manzano Farming Co., de Sotaquirá y Paipa. El valor publicado es 25, sin unidad. No es una pieza de esta colección.',
    kicker: 'Colombia-Numismática',
    title: 'Manzano Farming Co.',
    lead:
      'Manzano Farming Co. es una firma de Sotaquirá y Paipa que Fernando Barriga del Diestro nombra entre las señas de la Guerra de los Mil Días. Una pieza de 1901, publicada por otra colección, trae en el reverso Papayo, Sativa, Carreño y Soconsuca.',
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
      'A 1901 bronze token of Manzano Farming Co., of Sotaquirá and Paipa. The published value is 25, with no unit. It is not a piece in this collection.',
    kicker: 'Colombia-Numismatics',
    title: 'Manzano Farming Co.',
    lead:
      'Manzano Farming Co. is a firm of Sotaquirá and Paipa that Fernando Barriga del Diestro names among the private tokens of the War of a Thousand Days. A piece of 1901, published by another collection, carries Papayo, Sativa, Carreño, and Soconsuca on the reverse.',
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
      es: 'Lista «Manzano Farming Co Papayo y Satira 1901». Satira no es la lectura Sativa del cuadro de Absoluti.',
      en: 'It lists “Manzano Farming Co Papayo y Satira 1901.” Satira is not the Sativa reading in the Absoluti table.',
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

export const MANZANO_25_1901_PATH = `${MANZANO_FARMING_PATH}25-1901/`;
export const MANZANO_25_1901_PATH_EN = `${MANZANO_FARMING_PATH_EN}25-1901/`;

export const manzanoTokenLabels = {
  es: {
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    fichas: 'Fichas de hacienda',
    firm: 'Manzano Farming Co.',
    breadcrumb: 'Migas de pan',
    factsHeading: 'Ficha',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza publicada',
    sourcesTitle: 'Fuentes',
    firmCta: 'Volver a Manzano Farming Co.',
    fichasCta: 'Volver a las fichas de hacienda',
  },
  en: {
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    fichas: 'Hacienda tokens',
    firm: 'Manzano Farming Co.',
    breadcrumb: 'Breadcrumb',
    factsHeading: 'Record',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The published piece',
    sourcesTitle: 'Sources',
    firmCta: 'Back to Manzano Farming Co.',
    fichasCta: 'Back to hacienda tokens',
  },
} as const;

export type ManzanoTokenFicha = {
  id: string;
  path: string;
  pathEn: string;
  nav: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  kicker: LocalizedText;
  title: LocalizedText;
  dek: LocalizedText;
  lead: LocalizedText;
  published: string;
  dateLabel: LocalizedText;
  authorLabel: string;
  noSerialReason: LocalizedText;
  facts: ReadonlyArray<{ label: LocalizedText; value: LocalizedText }>;
  front: LocalizedText;
  back: LocalizedText;
  about: LocalizedText;
  sources: CatalogSource[];
};

export const manzanoTokenFichas: ManzanoTokenFicha[] = [
  {
    id: '25-1901',
    path: MANZANO_25_1901_PATH,
    pathEn: MANZANO_25_1901_PATH_EN,
    nav: { es: '25, 1901', en: '25, 1901' },
    metaTitle: { es: '25 · Manzano Farming · 1901', en: '25 · Manzano Farming · 1901' },
    metaDescription: {
      es: 'Ficha del 25 de 1901 de Manzano Farming Co.: bronce, 28,5 mm, resello que Absoluti lee JB. No es una pieza de esta colección.',
      en: 'Record of the 1901 Manzano Farming Co. 25: bronze, 28.5 mm, counterstamp read by Absoluti as JB. It is not a piece in this collection.',
    },
    kicker: { es: 'Colombia-Numismática', en: 'Colombia-Numismatics' },
    title: { es: '25 · Manzano Farming Co. · 1901', en: '25 · Manzano Farming Co. · 1901' },
    dek: {
      es: 'Bronce, 28,5 mm. El ejemplar publicado no está en esta colección.',
      en: 'Bronze, 28.5 mm. The published specimen is not in this collection.',
    },
    lead: {
      es: 'Seña de 25, fechada 1901, de Manzano Farming Co. La describe la colección Absoluti. El cuadro no dice la unidad del 25, y el disco no está en Notofilia.',
      en: 'A token of 25, dated 1901, of Manzano Farming Co. The Absoluti collection describes it. The table does not give a unit for the 25, and the disc is not in Notofilia.',
    },
    published: '2026-10-23',
    dateLabel: { es: '23 de octubre de 2026', en: 'October 23, 2026' },
    authorLabel: 'Yezid Acosta',
    noSerialReason: {
      es: 'La pieza publicada no trae número de serie. No se inventa uno.',
      en: 'The published piece carries no serial number. None is invented here.',
    },
    facts: [
      {
        label: { es: 'Valor', en: 'Value' },
        value: {
          es: '25. El cuadro de Absoluti no dice si son centavos. Esta ficha no les pone unidad.',
          en: '25. Absoluti’s table does not say whether that is centavos. This record does not supply a unit.',
        },
      },
      {
        label: { es: 'Fecha', en: 'Date' },
        value: { es: '1901, en el anverso.', en: '1901, on the obverse.' },
      },
      {
        label: { es: 'Metal y módulo', en: 'Metal and module' },
        value: {
          es: 'Bronce, 28,5 mm de diámetro, 1,5 mm de espesor, canto liso. Cifras del cuadro de Absoluti. Este disco no se volvió a medir.',
          en: 'Bronze, diameter 28.5 mm, thickness 1.5 mm, plain edge. Those are Absoluti’s figures. This disc was not measured again.',
        },
      },
      {
        label: { es: 'Resello', en: 'Counterstamp' },
        value: {
          es: 'Un punzón rectangular cae sobre COLOMBIA. Absoluti lo lee JB. Esta ficha no le da otra lectura.',
          en: 'A rectangular punch lies on COLOMBIA. Absoluti reads it JB. This record does not give it another reading.',
        },
      },
      {
        label: { es: 'Serial', en: 'Serial' },
        value: {
          es: 'No publicado. La seña no trae numeración en el cuadro ni en la fotografía.',
          en: 'Unpublished. The token shows no serial in the table or in the photograph.',
        },
      },
      {
        label: { es: 'Dónde está', en: 'Where it is' },
        value: {
          es: 'Colección Absoluti, obsequio de Carolina Martínez. No es una pieza de Notofilia.',
          en: 'Absoluti collection, a gift of Carolina Martínez. It is not a Notofilia piece.',
        },
      },
    ],
    front: {
      es: 'En la fotografía de Absoluti, la leyenda superior lee «MANZANO FARMING CO.». El 25 ocupa el centro. Debajo, «COLOMBIA» va entre dos estrellas, y el resello cae sobre esa palabra. La fecha 1901 cierra el anverso. Hay gráfila de puntos.',
      en: 'In Absoluti’s photograph the upper legend reads “MANZANO FARMING CO.” The 25 fills the center. Below it, “COLOMBIA” sits between two stars, and the counterstamp falls on that word. The date 1901 closes the obverse. There is a beaded border.',
    },
    back: {
      es: 'El arco superior lee «MANZANO, CARREÑO, SOCONSUCA» y el inferior «SOTAQUIRA Y PAIPA», sin tilde en la transcripción. Al centro está «PAPAYO». La línea de debajo está gastada en esa fotografía. Absoluti la transcribe «SATIVA». El listado de 1970 imprime Satira. Las dos grafías siguen abiertas.',
      en: 'The upper arc reads “MANZANO, CARREÑO, SOCONSUCA” and the lower one “SOTAQUIRA Y PAIPA,” without an accent in the transcription. “PAPAYO” is in the center. The line beneath it is worn in that photograph. Absoluti transcribes it “SATIVA.” The 1970 listing prints Satira. Both spellings stay open.',
    },
    about: {
      es: 'Es la única seña de esta firma que está publicada con módulo, metal y leyendas. Barriga nombra a la empresa, de Sotaquirá y Paipa, y no describe el cuño. La acuñación figura como no disponible. No hay certificado de calificación ni número de Henao que citar. La fotografía sigue en la ficha de Absoluti: esta página no la republica. El contexto de la firma está en <a href="/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/">Manzano Farming Co.</a>',
      en: 'This is the only token of the firm published with module, metal, and legends. Barriga names the company, of Sotaquirá and Paipa, and does not describe the die. The mintage is given as unavailable. There is no grading certificate and no Henao number to cite. The photograph stays on Absoluti’s page: this record does not republish it. The firm’s context is on <a href="/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/">Manzano Farming Co.</a>',
    },
    sources: [
      {
        href: 'https://numis.absoluti-ind.com/MonedasColSennas.html',
        es: 'Colección Absoluti (CFMR) — 25, Manzano Farming Co., 1901',
        en: 'Absoluti collection (CFMR) — 25, Manzano Farming Co., 1901',
        note: {
          es: 'Bronce, 28,5 mm, 1,5 mm, canto liso, resello JB, leyendas y la fotografía. Obsequio de Carolina Martínez. No es una pieza de Notofilia.',
          en: 'Bronze, 28.5 mm, 1.5 mm, plain edge, counterstamp JB, legends, and the photograph. A gift of Carolina Martínez. It is not a Notofilia piece.',
        },
      },
      {
        href: 'https://nnp.wustl.edu/library/advancedsearch?fullsearchterm=Manzano%20Farming',
        es: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 de diciembre de 1970, p. 38',
        en: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 December 1970, p. 38',
        note: {
          es: 'Lista «Manzano Farming Co Papayo y Satira 1901». No es la lectura Sativa del cuadro de Absoluti.',
          en: 'It lists “Manzano Farming Co Papayo y Satira 1901.” That is not Absoluti’s Sativa reading.',
        },
      },
    ],
  },
];

export function manzanoTokenPath(token: ManzanoTokenFicha, locale: Locale): string {
  return locale === 'en' ? `/en${token.pathEn}` : token.path;
}

export function manzanoTokenById(id: string): ManzanoTokenFicha | undefined {
  return manzanoTokenFichas.find((token) => token.id === id);
}

export const manzanoFarmingDedicatedSlugs = [
  MANZANO_FARMING_PATH.replace(/^\/|\/$/g, ''),
  MANZANO_FARMING_PATH_EN.replace(/^\/|\/$/g, ''),
  MANZANO_25_1901_PATH.replace(/^\/|\/$/g, ''),
  MANZANO_25_1901_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
