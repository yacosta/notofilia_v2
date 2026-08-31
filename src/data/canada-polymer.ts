import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export type CanadaNoteId = '5-dolares-laurier';

export type CanadaNote = {
  id: CanadaNoteId;
  path: string;
  pick: string;
  serial: string;
  serial_display: string;
  serial_kind: 'ordinary';
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const canadaNotes: CanadaNote[] = [
  {
    id: '5-dolares-laurier',
    path: '/coleccion/polimero-mundial/Canada/5-dolares-laurier/',
    pick: 'P#106b · Charlton BC-69',
    serial: 'HBM0828003',
    serial_display: 'HBM0828003',
    serial_kind: 'ordinary',
    signatures: {
      es: 'T. Macklem (subgobernador) y Stephen S. Poloz (gobernador)',
      en: 'T. Macklem (Deputy Governor) and Stephen S. Poloz (Governor)',
    },
    printed: {
      es: 'El Banco de Canadá puso el 5 dólares de polímero en circulación el 7 de noviembre de 2013, el mismo día que el 10 dólares, para cerrar la serie Frontiers. Esta ficha no inventa una tirada para el prefijo HBM ni para el tipo Pick 106b.',
      en: 'The Bank of Canada issued the polymer $5 on 7 November 2013, the same day as the $10, completing the Frontiers series. This record does not invent a printage for prefix HBM or for Pick 106b.',
    },
    images: {
      composite: '/images/catalog/canada/5-dollars-laurier-hbm0828003-composite.jpg',
      front: '/images/catalog/canada/5-dollars-laurier-hbm0828003-front.jpg',
      back: '/images/catalog/canada/5-dollars-laurier-hbm0828003-back.jpg',
    },
    title: {
      es: '5 dólares · Laurier · 2013',
      en: '$5 · Laurier · 2013',
    },
    kicker: {
      es: 'Canadá · Banco de Canadá · Polímero',
      en: 'Canada · Bank of Canada · Polymer',
    },
    lead: {
      es: 'Cinco dólares de polímero de la serie Frontiers del Banco de Canadá (Banque du Canada). ISSUE / ÉMISSION 2013; primera emisión el 7 de noviembre de 2013. Retrato de Sir Wilfrid Laurier; reverso Canadarm2, Dextre y un astronauta. Serie HBM0828003, impresa dos veces al reverso.',
      en: 'Bank of Canada (Banque du Canada) polymer $5 from the Frontiers series. ISSUE / ÉMISSION 2013; first issued 7 November 2013. Portrait of Sir Wilfrid Laurier; reverse Canadarm2, Dextre, and an astronaut. Serial HBM0828003, printed twice on the reverse.',
    },
    description: {
      es: 'El 5 dólares de polímero (Pick 106b, Charlton BC-69) cierra, junto con el 10 dólares, la serie Frontiers del Banco de Canadá. El anverso muestra a Sir Wilfrid Laurier a la derecha, el texto bilingüe BANK OF CANADA / BANQUE DU CANADA, FIVE DOLLARS / CINQ DOLLARS y la leyenda ISSUE / ÉMISSION 2013. Las firmas son T. Macklem a la izquierda y Stephen S. Poloz a la derecha: Numista (N# 201578) sitúa el prefijo HBM en esa combinación Macklem/Poloz. El reverso dedica el diseño a la robótica espacial canadiense: Canadarm2, Dextre y un astronauta ante la Estación Espacial Internacional, con una gran ventana transparente. Los dos números de serie al reverso leen HBM0828003. El prefijo H corresponde a la Canadian Bank Note Company (CBN). Medidas aproximadas 152 × 70 mm. Esta pieza de la colección, en funda y sin encapsular, no lleva certificado. El serial es ordinario: el contador 828003 no es bajo ni de patrón fancy.',
      en: 'The polymer $5 (Pick 106b, Charlton BC-69) completes, with the $10, the Bank of Canada’s Frontiers series. The face shows Sir Wilfrid Laurier at right, the bilingual BANK OF CANADA / BANQUE DU CANADA and FIVE DOLLARS / CINQ DOLLARS legends, and ISSUE / ÉMISSION 2013. The signatures are T. Macklem at left and Stephen S. Poloz at right: Numista (N# 201578) places prefix HBM on that Macklem/Poloz combination. The reverse is devoted to Canadian space robotics — Canadarm2, Dextre, and an astronaut at the International Space Station — with a large transparent window. Both reverse serials read HBM0828003. The H prefix is Canadian Bank Note Company (CBN). Approximate size 152 × 70 mm. This collection piece, sleeved and unslabbed, has no certificate. The serial is ordinary: counter 828003 is neither low nor a fancy pattern.',
    },
    frontCaption: {
      es: 'Anverso del 5 dólares de polímero, serie HBM0828003: Sir Wilfrid Laurier, ISSUE / ÉMISSION 2013 y firmas Macklem / Poloz.',
      en: 'Face of the polymer $5, serial HBM0828003: Sir Wilfrid Laurier, ISSUE / ÉMISSION 2013, and Macklem / Poloz signatures.',
    },
    backCaption: {
      es: 'Reverso del 5 dólares: Canadarm2, Dextre, astronauta, ventana transparente y los dos seriales HBM0828003.',
      en: 'Reverse of the $5: Canadarm2, Dextre, an astronaut, the clear window, and both HBM0828003 serials.',
    },
    scarcity: {
      es: 'Es el tipo de circulación ordinaria del 5 dólares canadiense desde el 7 de noviembre de 2013, presentado el 30 de abril de 2013. HBM0828003 es un serial ordinario de la impresión CBN con firmas Macklem/Poloz (Pick 106b), no un primer prefijo ni un reemplazo. Esta ficha no inventa una tirada por prefijo.',
      en: 'This is the ordinary-circulation Canadian $5 type from 7 November 2013, unveiled on 30 April 2013. HBM0828003 is an ordinary CBN serial with Macklem/Poloz signatures (Pick 106b), not a first prefix and not a replacement. This record does not invent a printage by prefix.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial HBM0828003. La pieza se presenta en funda, sin encapsular, sin certificado.',
      en: 'A PMG or PCGS census for serial HBM0828003 has not been independently verified. The note is shown in a sleeve, unslabbed, with no certificate.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://www.bankofcanada.ca/2013/04/bank-canada-unveils-new-5-and-10-polymer-bank-notes/',
        es: 'Banco de Canadá — Unveils New $5 and $10 Polymer Bank Notes (30 de abril de 2013)',
        en: 'Bank of Canada — Unveils New $5 and $10 Polymer Bank Notes (30 April 2013)',
        note: {
          es: 'Presentación de los últimos dos valores de la serie Frontiers; Canadarm2 y Dextre en el 5 dólares; circulación anunciada para noviembre.',
          en: 'Unveiling of the last two Frontiers denominations; Canadarm2 and Dextre on the $5; circulation announced for November.',
        },
      },
      {
        href: 'https://www.bankofcanada.ca/2013/11/bank-canada-issues-5-and-10-polymer-bank-notes/',
        es: 'Banco de Canadá — Issues $5 and $10 Polymer Bank Notes (7 de noviembre de 2013)',
        en: 'Bank of Canada — Issues $5 and $10 Polymer Bank Notes (7 November 2013)',
        note: {
          es: 'Primera emisión conjunta del 5 y el 10 dólares de polímero; cierre de la serie Frontiers.',
          en: 'Joint first issue of the polymer $5 and $10; completion of the Frontiers series.',
        },
      },
      {
        href: 'https://en.numista.com/201578',
        es: 'Numista — 5 Dollars, Laurier / Canadarm2, polímero (N# 201578)',
        en: 'Numista — 5 Dollars, Laurier / Canadarm2, polymer (N# 201578)',
        note: {
          es: 'Pick 106b; Charlton BC-69; prefijo HBM con firmas Macklem/Poloz; impresor CBN (H).',
          en: 'Pick 106b; Charlton BC-69; HBM prefix with Macklem/Poloz signatures; CBN printer (H).',
        },
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/CAN/CAN0106.htm',
        es: 'Bank Note Museum — Canadá P-106',
        en: 'Bank Note Museum — Canada P-106',
        note: {
          es: 'Tipo Pick 106; serie Frontiers de polímero; Laurier y temática espacial.',
          en: 'Pick 106 type; Frontiers polymer series; Laurier and the space theme.',
        },
      },
      {
        href: 'https://www.numizon.com/en/banknote/5-dollars-type-2013-canada/can-p106/',
        es: 'Numizon — Canadá 5 dollars type 2013 (Pick 106)',
        en: 'Numizon — Canada 5 dollars type 2013 (Pick 106)',
        note: {
          es: 'Tipo 2013; Pick 106; polímero; no se citan precios.',
          en: '2013 type; Pick 106; polymer; no prices cited.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Billetes de polímero mundial',
    collectionLink: 'Canadá',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza e impresión',
    populationHeading: 'Población',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printedLabel: 'Impresión',
    signaturesLabel: 'Firmas',
    serialLabel: 'Número de serie',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'World polymer banknotes',
    collectionLink: 'Canada',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    scarcityHeading: 'Scarcity and printage',
    populationHeading: 'Population',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printedLabel: 'Printage',
    signaturesLabel: 'Signatures',
    serialLabel: 'Serial number',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function noteById(id: string): CanadaNote | undefined {
  return canadaNotes.find((note) => note.id === id);
}

export function notePath(note: CanadaNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export const canadaNoteSlugs = canadaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function canadaSeriesPath(locale: 'es' | 'en'): string {
  return localizePath('/coleccion/polimero-mundial/Canada/', locale);
}
