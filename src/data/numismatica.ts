import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
import { LAZARETTOS_PATH } from './lazarettos';
import { NETHERLANDS_COINAGE_PATH } from './netherlands-coinage';
import type { LocalizedText } from './catalog';

export const NUMISMATICA_PATH = '/coleccion/numismatica/';

export type NumismaticaCountry = {
  href: string;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
};

export const numismaticaCountries: NumismaticaCountry[] = [
  {
    href: COLOMBIA_COINAGE_PATH,
    years: { es: 'desde 1620', en: 'from 1620' },
    title: { es: 'Colombia-Numismática', en: 'Colombia-Numismatics' },
    lead: {
      es: 'Casa de Moneda de Santa Fe, cecas de la Independencia, reforma decimal y la Fábrica de Ibagué.',
      en: 'The Santa Fe mint, independence issues, the decimal reform, and the Ibagué factory.',
    },
  },
  {
    href: LAZARETTOS_PATH,
    years: { es: 'desde 1598', en: 'from 1598' },
    title: { es: 'Lazarettos', en: 'Lazarettos' },
    lead: {
      es: 'Caño de Loro, Contratación, Agua de Dios y la coscoja: la moneda exclusiva del cordón sanitario.',
      en: 'Caño de Loro, Contratación, Agua de Dios, and the coscoja: the exclusive coin of the sanitary cordon.',
    },
  },
  {
    href: NETHERLANDS_COINAGE_PATH,
    years: { es: 's. IX–2002', en: '9th c.–2002' },
    title: { es: 'Países Bajos', en: 'Netherlands' },
    lead: {
      es: 'Del gulden de 1434 al ducado de Utrecht, el gulden decimal y el euro.',
      en: 'From the 1434 gulden to the Utrecht ducat, the decimal gulden, and the euro.',
    },
  },
];

export const numismaticaCopy = {
  es: {
    metaTitle: 'Numismática · Catálogo de moneda metálica | Notofilia',
    metaDescription:
      'Catálogo de numismática de Notofilia: moneda metálica de Colombia, Países Bajos y lazaretos — Caño de Loro, Contratación, Agua de Dios y la coscoja.',
    kicker: 'Colección virtual',
    title: 'Numismática',
    subtitle: 'Moneda metálica',
    intro: [
      'La numismática en esta colección es el estudio de la moneda acuñada: oro y plata coloniales, cobres de necesidad, pesos decimales y las series que aún circulan. No sustituye a la notafilia; la acompaña. El papel de cada país tiene su propia vitrina.',
      'Abren tres casas: Colombia —cuatro siglos de cecas, de Santa Fe a Ibagué—, Lazarettos —la exonumia del aislamiento, de Caño de Loro a la coscoja— y Países Bajos —del gulden al euro—. Otras se irán sumando como en el catálogo de billetes.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro: 'Una vitrina por tarjeta, de izquierda a derecha según se documente. Hoy abren Colombia-Numismática, Lazarettos y Países Bajos.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Numismatics · Coin catalog | Notofilia',
    metaDescription:
      'Notofilia’s coin catalog: Colombian coinage, the Netherlands, and lazarettos — Caño de Loro, Contratación, Agua de Dios, and the coscoja.',
    kicker: 'Virtual collection',
    title: 'Numismatics',
    subtitle: 'Coinage',
    intro: [
      'Numismatics in this collection is the study of struck coin: colonial gold and silver, necessity coppers, decimal pesos, and the series still in the pocket. It does not replace notaphily; it stands beside it. Each country’s paper has its own case.',
      'Three houses are open: Colombia — four centuries of mints, from Santa Fe to Ibagué — Lazarettos — the exonumia of isolation, from Caño de Loro to the coscoja — and the Netherlands — from the gulden to the euro. Others will follow as they do in the note catalog.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro: 'One case to a card, left to right as each is documented. Colombia-Numismatics, Lazarettos, and the Netherlands open the row.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
  },
} as const;

export function numismaticaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NUMISMATICA_PATH}` : NUMISMATICA_PATH;
}
