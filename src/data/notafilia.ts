import type { LocalizedText } from './catalog';
import { COLOMBIA_PATH } from './colombia';
import { ECUADOR_PATH } from './ecuador';
import { GUATEMALA_PATH } from './guatemala';
import { USA_PATH } from './estados-unidos';
import { SERIES_PATH } from './philippines';
import { POLIMERO_MUNDIAL_PATH } from './polimero-mundial';
import { PUERTO_RICO_PATH } from './puerto-rico';

export const NOTAFILIA_PATH = '/coleccion/notafilia/';

export type NotafiliaCountry = {
  href: string;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
};

export const notafiliaCountries: NotafiliaCountry[] = [
  {
    href: COLOMBIA_PATH,
    years: { es: 'desde 1811', en: 'from 1811' },
    title: { es: 'Colombia', en: 'Colombia' },
    lead: {
      es: 'Independencia, banca libre, Banco Nacional y el Banco de la República.',
      en: 'Independence, free banking, the Banco Nacional, and the Banco de la República.',
    },
  },
  {
    href: USA_PATH,
    years: { es: 'desde 1690', en: 'from 1690' },
    title: { es: 'Estados Unidos', en: 'United States' },
    lead: {
      es: 'Colonial, obsoleto, United States Notes, oro, plata, Reserva Federal y pop art.',
      en: 'Colonial, obsolete, United States Notes, gold, silver, the Federal Reserve, and pop art.',
    },
  },
  {
    href: SERIES_PATH,
    years: { es: 'desde 1852', en: 'from 1852' },
    title: { es: 'Filipinas', en: 'Philippines' },
    lead: {
      es: 'Colonia española, Revolución, Commonwealth, ocupación japonesa y el Banco Central.',
      en: 'Spanish colony, Revolution, Commonwealth, Japanese occupation, and the Central Bank.',
    },
  },
  {
    href: PUERTO_RICO_PATH,
    years: { es: 's. XIX', en: '19th c.' },
    title: { es: 'Puerto Rico', en: 'Puerto Rico' },
    lead: {
      es: 'Emisiones coloniales y de transición del siglo XIX.',
      en: 'Colonial and nineteenth-century transition issues.',
    },
  },
  {
    href: ECUADOR_PATH,
    years: { es: '1884–2000', en: '1884–2000' },
    title: { es: 'Ecuador', en: 'Ecuador' },
    lead: {
      es: 'Del sucre de 1884 a la dolarización. Las fichas se publicarán a medida que se documenten.',
      en: 'From the 1884 sucre to dollarization. Note pages will be published as they are documented.',
    },
  },
  {
    href: GUATEMALA_PATH,
    years: { es: '1834–1948', en: '1834–1948' },
    title: { es: 'Guatemala', en: 'Guatemala' },
    lead: {
      es: 'Impresión de billetes, banca privada y El Banco Colombiano (1878–1901).',
      en: 'Banknote printing, private banks of issue, and El Banco Colombiano (1878–1901).',
    },
  },
  {
    href: POLIMERO_MUNDIAL_PATH,
    years: { es: 'desde 1988', en: 'from 1988' },
    title: { es: 'Billetes de polímero mundial', en: 'World polymer banknotes' },
    lead: {
      es: 'Guardian, Safeguard e híbridos; hoy abre China con el 100 yuan del milenio.',
      en: 'Guardian, Safeguard, and hybrids; China opens the case with the millennium 100-yuan.',
    },
  },
];

export const notafiliaCopy = {
  es: {
    metaTitle: 'Colección Virtual Notafilia | Notofilia',
    metaDescription:
      'Catálogo de papel moneda de Notofilia: Colombia, Estados Unidos, Filipinas, Puerto Rico, Ecuador, Guatemala y los billetes de polímero mundial.',
    kicker: 'Colección virtual',
    title: 'Colección Virtual Notafilia',
    subtitle: 'Papel moneda',
    intro: [
      'La notafilia en esta colección es el estudio del papel moneda: emisiones de independencia, banca libre, series de bancos centrales, especímenes, errores y numeración especial. No sustituye a la numismática; la acompaña. La moneda acuñada tiene su propia vitrina.',
      'Abren siete casas: Colombia, Estados Unidos, Filipinas, Puerto Rico, Ecuador, Guatemala y el catálogo de polímero mundial. Otras se irán sumando a medida que se documenten las piezas.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Una vitrina por tarjeta, de izquierda a derecha según se documente. Hoy abren Colombia, Estados Unidos, Filipinas, Puerto Rico, Ecuador, Guatemala y el polímero mundial.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Virtual Notaphily Collection | Notofilia',
    metaDescription:
      'Notofilia’s paper-money catalog: Colombia, the United States, the Philippines, Puerto Rico, Ecuador, Guatemala, and world polymer banknotes.',
    kicker: 'Virtual collection',
    title: 'Virtual Notaphily Collection',
    subtitle: 'Paper money',
    intro: [
      'Notaphily in this collection is the study of paper money: independence issues, free banking, central-bank series, specimens, errors, and fancy serials. It does not replace numismatics; it stands beside it. Struck coin has its own case.',
      'Seven houses are open: Colombia, the United States, the Philippines, Puerto Rico, Ecuador, Guatemala, and the world polymer catalog. Others will follow as pieces are documented.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'One case to a card, left to right as each is documented. Colombia, the United States, the Philippines, Puerto Rico, Ecuador, Guatemala, and world polymer open the row.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
  },
} as const;

export function notafiliaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/notaphily/' : NOTAFILIA_PATH;
}
