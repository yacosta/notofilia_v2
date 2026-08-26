import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
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
    title: { es: 'Colombia', en: 'Colombia' },
    lead: {
      es: 'Casa de Moneda de Santa Fe, cecas de la Independencia, reforma decimal y la Fábrica de Ibagué.',
      en: 'The Santa Fe mint, independence issues, the decimal reform, and the Ibagué factory.',
    },
  },
];

export const numismaticaCopy = {
  es: {
    metaTitle: 'Numismática · Catálogo de moneda metálica | Notofilia',
    metaDescription:
      'Catálogo de numismática de Notofilia: historia de la moneda metálica, cecas y tipos, comenzando por Colombia y la Casa de Moneda de Santa Fe.',
    kicker: 'Colección virtual',
    title: 'Numismática',
    subtitle: 'Moneda metálica',
    intro: [
      'La numismática en esta colección es el estudio de la moneda acuñada: oro y plata coloniales, cobres de necesidad, pesos decimales y las series que aún circulan. No sustituye a la notafilia; la acompaña. El papel de cada país tiene su propia vitrina.',
      'La primera casa abierta es Colombia. Cuatro siglos de cecas —Santa Fe, Popayán, Medellín e Ibagué— ordenados por época, con las fuentes de Banrep y Banrepcultural a la vista. Otras cecas se irán sumando como en el catálogo de billetes.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro: 'Un país por tarjeta, de izquierda a derecha según se documente. Hoy abre Colombia.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Numismatics · Coin catalog | Notofilia',
    metaDescription:
      'Notofilia’s coin catalog: minted money, mints, and types, beginning with Colombia and the Santa Fe mint.',
    kicker: 'Virtual collection',
    title: 'Numismatics',
    subtitle: 'Coinage',
    intro: [
      'Numismatics in this collection is the study of struck coin: colonial gold and silver, necessity coppers, decimal pesos, and the series still in the pocket. It does not replace notaphily; it stands beside it. Each country’s paper has its own case.',
      'The first house open is Colombia. Four centuries of mints — Santa Fe, Popayán, Medellín, and Ibagué — lined up by period, with Banrep and Banrepcultural sources in view. Other mints will follow as they do in the note catalog.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro: 'One country to a card, left to right as each is documented. Colombia opens the case.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
  },
} as const;

export function numismaticaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NUMISMATICA_PATH}` : NUMISMATICA_PATH;
}
