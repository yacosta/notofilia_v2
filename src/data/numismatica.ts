import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
import { SPAIN_COINAGE_PATH } from './espana-coinage';
import { LAZARETTOS_PATH } from './lazarettos';
import { NETHERLANDS_COINAGE_PATH } from './netherlands-coinage';
import { USA_COINAGE_PATH } from './estados-unidos-coinage';
import type { LocalizedText } from './catalog';
import numismaticaGuideJson from './numismatica-guide.json';

export type NumismaticaGuidePart =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export type NumismaticaGuideSection = {
  id: string;
  title: string;
  parts: NumismaticaGuidePart[];
};

export type NumismaticaWorkCited = {
  n: number;
  title: string;
  href: string;
  internal: boolean;
};

type NumismaticaGuideLocale = {
  sections: NumismaticaGuideSection[];
  worksCitedTitle: string;
  worksCitedCaption: string;
  standardLabel: string;
};

const guide = numismaticaGuideJson as {
  es: NumismaticaGuideLocale;
  en: NumismaticaGuideLocale;
  worksCited: NumismaticaWorkCited[];
};

export const numismaticaGuide = {
  es: guide.es,
  en: guide.en,
  worksCited: guide.worksCited,
};

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
    href: SPAIN_COINAGE_PATH,
    years: { es: '1535–1864', en: '1535–1864' },
    title: { es: 'España', en: 'Spain' },
    lead: {
      es: 'El medio escudo de oro de Fernando VI, Madrid 1757, ensaye JB.',
      en: 'Ferdinand VI’s gold half escudo, Madrid 1757, assayers JB.',
    },
  },
  {
    href: USA_COINAGE_PATH,
    years: { es: 'desde 1792', en: 'from 1792' },
    title: { es: 'Estados Unidos', en: 'United States' },
    lead: {
      es: 'Fichas Hard Times de 1835 y 1837, la ceca de Filadelfia y el 1 $ de Trump del Semiquincentenario 1776–2026.',
      en: 'Hard Times tokens of 1835 and 1837, the Philadelphia mint, and the 1776–2026 Semiquincentennial Trump $1.',
    },
  },
  {
    href: LAZARETTOS_PATH,
    years: { es: 'desde 1598', en: 'from 1598' },
    title: { es: 'Lazarettos', en: 'Lazarettos' },
    lead: {
      es: 'Caño del Oro, Contratación, Agua de Dios y la coscoja: la moneda exclusiva del cordón sanitario.',
      en: 'Caño del Oro, Contratación, Agua de Dios, and the coscoja: the exclusive coin of the sanitary cordon.',
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
    metaTitle: '¿Qué es la numismática? | Notofilia',
    metaDescription:
      'Definición, anatomía de la moneda, grados de conservación, el real de a ocho, el maravedí, el escudo y la peseta en el ámbito hispánico.',
    kicker: 'Guía esencial de numismática',
    title: '¿Qué es la numismática?',
    subtitle: 'Fundamentos, método técnico y evolución monetaria en el ámbito hispánico.',
    tableCaptions: [
      'Componentes de la moneda: anverso, reverso, canto y demás elementos.',
      'Escala cualitativa española de conservación comparada con la escala Sheldon.',
      'Principales cecas americanas: establecimiento, marcas y rasgos de producción.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Una vitrina por tarjeta, de izquierda a derecha según se documente. Hoy abren Colombia-Numismática, España, Estados Unidos, Lazarettos y Países Bajos.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'What is numismatics? | Notofilia',
    metaDescription:
      'Definition, coin anatomy, grading, the piece of eight, the maravedí, the escudo, and the peseta in the Hispanic world.',
    kicker: 'Essential guide to numismatics',
    title: 'What is numismatics?',
    subtitle: 'Foundations, technical method, and monetary history in the Hispanic world.',
    tableCaptions: [
      'Parts of the coin: obverse, reverse, edge, and related elements.',
      'Spanish qualitative conservation scale compared with the Sheldon scale.',
      'Principal American mints: foundation, marks, and production notes.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'One case to a card, left to right as each is documented. Colombia-Numismatics, Spain, the United States, Lazarettos, and the Netherlands open the row.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
  },
} as const;

export function numismaticaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/numismatics/' : NUMISMATICA_PATH;
}
