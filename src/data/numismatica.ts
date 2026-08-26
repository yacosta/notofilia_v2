import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
import { LAZARETTOS_PATH } from './lazarettos';
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
    years: { es: 'desde 1377', en: 'from 1377' },
    title: { es: 'Lazarettos', en: 'Lazarettos' },
    lead: {
      es: 'Cuarentena de Ragusa, Lazzaretto Vecchio, Manoel Island y la red mediterránea de fichas y marcas.',
      en: 'Ragusa’s quarantine, the Lazzaretto Vecchio, Manoel Island, and the Mediterranean network of tokens and marks.',
    },
  },
];

export const numismaticaCopy = {
  es: {
    metaTitle: 'Numismática · Catálogo de moneda metálica | Notofilia',
    metaDescription:
      'Catálogo de numismática de Notofilia: moneda metálica de Colombia y lazaretos — cuarentena, fichas y marcas sanitarias del Mediterráneo.',
    kicker: 'Colección virtual',
    title: 'Numismática',
    subtitle: 'Moneda metálica',
    intro: [
      'La numismática en esta colección es el estudio de la moneda acuñada: oro y plata coloniales, cobres de necesidad, pesos decimales y las series que aún circulan. No sustituye a la notafilia; la acompaña. El papel de cada país tiene su propia vitrina.',
      'Abren dos casas: Colombia —cuatro siglos de cecas, de Santa Fe a Ibagué— y Lazarettos —la exonumia de la cuarentena, de Ragusa a Malta—. Otras se irán sumando como en el catálogo de billetes.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro: 'Una vitrina por tarjeta, de izquierda a derecha según se documente. Hoy abren Colombia-Numismática y Lazarettos.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Numismatics · Coin catalog | Notofilia',
    metaDescription:
      'Notofilia’s coin catalog: Colombian coinage and lazarettos — quarantine, tokens, and sanitary marks of the Mediterranean.',
    kicker: 'Virtual collection',
    title: 'Numismatics',
    subtitle: 'Coinage',
    intro: [
      'Numismatics in this collection is the study of struck coin: colonial gold and silver, necessity coppers, decimal pesos, and the series still in the pocket. It does not replace notaphily; it stands beside it. Each country’s paper has its own case.',
      'Two houses are open: Colombia — four centuries of mints, from Santa Fe to Ibagué — and Lazarettos — the exonumia of quarantine, from Ragusa to Malta. Others will follow as they do in the note catalog.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro: 'One case to a card, left to right as each is documented. Colombia-Numismatics and Lazarettos open the row.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
  },
} as const;

export function numismaticaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NUMISMATICA_PATH}` : NUMISMATICA_PATH;
}
