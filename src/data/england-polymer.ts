import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export type EnglandNoteId = '5-libras-churchill';

export type EnglandNote = {
  id: EnglandNoteId;
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

export const englandNotes: EnglandNote[] = [
  {
    id: '5-libras-churchill',
    path: '/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/',
    pick: 'P#394 · BNB B203a',
    serial: 'AC04879241',
    serial_display: 'AC04 879241',
    serial_kind: 'ordinary',
    signatures: {
      es: 'Victoria Cleland (Chief Cashier)',
      en: 'Victoria Cleland (Chief Cashier)',
    },
    printed: {
      es: 'El Banco de Inglaterra anunció 440 millones de New Fivers al ponerlos en circulación el 13 de septiembre de 2016. Esta ficha no inventa una tirada para el prefijo AC04 ni para las impresiones posteriores.',
      en: 'The Bank of England announced 440 million New Fivers when the note entered circulation on 13 September 2016. This record does not invent a printage for prefix AC04 or for later printings.',
    },
    images: {
      composite: '/images/catalog/england/5-pounds-churchill-ac04879241-composite.jpg',
      front: '/images/catalog/england/5-pounds-churchill-ac04879241-front.jpg',
      back: '/images/catalog/england/5-pounds-churchill-ac04879241-back.jpg',
    },
    title: {
      es: '5 libras · Churchill · 2016',
      en: '£5 · Churchill · 2016',
    },
    kicker: {
      es: 'Inglaterra · Banco de Inglaterra · Polímero',
      en: 'England · Bank of England · Polymer',
    },
    lead: {
      es: 'Primer billete de polímero del Banco de Inglaterra: Isabel II en el anverso de la promesa y Winston Churchill al reverso. Copyright 2015; primera emisión el 13 de septiembre de 2016. Serie AC04 879241.',
      en: 'The Bank of England’s first polymer note: Elizabeth II on the promise face and Winston Churchill on the reverse. Copyright 2015; first issued 13 September 2016. Serial AC04 879241.',
    },
    description: {
      es: 'El 5 libras de polímero (Pick 394, The Banknote Book B203a) es el primer plástico de circulación ordinaria del Banco de Inglaterra. El anverso —la cara de la promesa— lleva el retrato de Isabel II a la derecha, la Torre Isabelina en oro dentro de la ventana transparente, el sello de Britannia y el texto «I PROMISE TO PAY THE BEARER ON DEMAND THE SUM OF FIVE POUNDS». Firma Victoria Cleland, Chief Cashier. El pie lee «© THE GOVERNOR AND COMPANY OF THE BANK OF ENGLAND 2015»: es la fecha del diseño, no la de emisión. El reverso muestra a Winston Churchill (1874–1965) frente al Palacio de Westminster y la Torre Isabelina, la medalla del Nobel de Literatura de 1953, la cita «I have nothing to offer but blood, toil, tears and sweat» y el parche de foil BLENHEIM. Los dos números de serie —vertical a la izquierda y horizontal abajo a la derecha— leen AC04 879241. Esta pieza de la colección, en funda y sin encapsular, parece de alta conservación / sin circular; no lleva certificado. El serial es ordinario: el contador 879241 no es bajo ni de patrón fancy. No es el 5 libras de Carlos III (2024), que conserva a Churchill al reverso pero cambia el retrato real.',
      en: 'The polymer £5 (Pick 394, The Banknote Book B203a) is the Bank of England’s first ordinary-circulation plastic note. The face — the promise side — carries Elizabeth II at right, Elizabeth Tower in gold in the clear window, the Britannia seal, and the legend “I PROMISE TO PAY THE BEARER ON DEMAND THE SUM OF FIVE POUNDS.” The signature is Victoria Cleland, Chief Cashier. The footer reads “© THE GOVERNOR AND COMPANY OF THE BANK OF ENGLAND 2015”: that is the design copyright, not the issue date. The reverse shows Winston Churchill (1874–1965) before the Palace of Westminster and Elizabeth Tower, the 1953 Nobel Prize in Literature medal, the line “I have nothing to offer but blood, toil, tears and sweat,” and the BLENHEIM foil patch. Both serials — vertical at left and horizontal at lower right — read AC04 879241. This collection piece, sleeved and unslabbed, appears high grade / uncirculated-looking; it has no certificate. The serial is ordinary: counter 879241 is neither low nor a fancy pattern. It is not the 2024 Charles III £5, which keeps Churchill on the back but changes the royal portrait.',
    },
    frontCaption: {
      es: 'Anverso (cara de la promesa) del 5 libras de polímero, serie AC04 879241: Isabel II, ventana de la Torre Isabelina y firma de Victoria Cleland.',
      en: 'Face (promise side) of the polymer £5, serial AC04 879241: Elizabeth II, the Elizabeth Tower window, and Victoria Cleland’s signature.',
    },
    backCaption: {
      es: 'Reverso del 5 libras: Winston Churchill, Westminster, medalla Nobel, cita «blood, toil, tears and sweat», foil BLENHEIM y los dos seriales AC04 879241.',
      en: 'Reverse of the £5: Winston Churchill, Westminster, the Nobel medal, the “blood, toil, tears and sweat” line, BLENHEIM foil, and both AC04 879241 serials.',
    },
    scarcity: {
      es: 'Es el tipo de circulación ordinaria del 5 libras desde el 13 de septiembre de 2016. El papel de Elizabeth Fry dejó de ser de curso legal el 5 de mayo de 2017. El Banco anunció 440 millones de ejemplares en el estreno; hubo impresiones posteriores con la misma cara de Isabel II hasta 2018 (Numista sitúa el último prefijo Cleland en BC60). AC04 879241 es un serial ordinario de esa emisión Cleland, no un AA01 de primer prefijo ni un reemplazo. Esta ficha no inventa una tirada por prefijo.',
      en: 'This is the ordinary-circulation £5 type from 13 September 2016. Elizabeth Fry paper notes ceased to be legal tender on 5 May 2017. The Bank announced 440 million notes at launch; later printings with the same Elizabeth II face ran through 2018 (Numista places the last Cleland prefix at BC60). AC04 879241 is an ordinary Cleland serial, not a first-prefix AA01 and not a replacement. This record does not invent a printage by prefix.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial AC04 879241. La pieza se presenta en funda, sin encapsular, sin certificado.',
      en: 'A PMG or PCGS census for serial AC04 879241 has not been independently verified. The note is shown in a sleeve, unslabbed, with no certificate.',
    },
    grade: {
      es: 'Sin encapsular, en funda; aspecto de alta conservación / sin circular (colección privada)',
      en: 'Unslabbed, in a sleeve; high-grade / uncirculated-looking (private collection)',
    },
    sources: [
      {
        href: 'https://www.bankofengland.co.uk/news/2016/september/the-new-fiver-has-been-issued',
        es: 'Banco de Inglaterra — The New Fiver has been issued (13 de septiembre de 2016)',
        en: 'Bank of England — The New Fiver has been issued (13 September 2016)',
        note: {
          es: 'Primera emisión de polímero del Banco; Churchill; 440 millones anunciados al estreno; firma de Victoria Cleland.',
          en: 'The Bank’s first polymer issue; Churchill; 440 million announced at launch; Victoria Cleland signature.',
        },
      },
      {
        href: 'https://www.bankofengland.co.uk/news/2016/june/the-new-fiver',
        es: 'Banco de Inglaterra — The New Fiver (2 de junio de 2016)',
        en: 'Bank of England — The New Fiver (2 June 2016)',
        note: {
          es: 'Presentación en Blenheim; emisión anunciada para el 13 de septiembre de 2016; sustrato de polímero.',
          en: 'Unveiled at Blenheim; issue announced for 13 September 2016; polymer substrate.',
        },
      },
      {
        href: 'https://en.numista.com/201624',
        es: 'Numista — 5 Pounds, Isabel II / Churchill, polímero (N# 201624)',
        en: 'Numista — 5 Pounds, Elizabeth II / Churchill, polymer (N# 201624)',
        note: {
          es: 'Pick 394; 125 × 65 mm; copyright 2015; emisión 13 de septiembre de 2016; firma Cleland.',
          en: 'Pick 394; 125 × 65 mm; copyright 2015; issued 13 September 2016; Cleland signature.',
        },
      },
      {
        href: 'https://www.numizon.com/en/banknote/england-5-pounds-type-2015-pick-394/eng-p394/',
        es: 'Numizon — Inglaterra 5 pounds type 2015 (Pick 394)',
        en: 'Numizon — England 5 pounds type 2015 (Pick 394)',
        note: {
          es: 'Pick 394; The Banknote Book B203; polímero Guardian; introducción 13.09.2016.',
          en: 'Pick 394; The Banknote Book B203; Guardian polymer; introduced 13.09.2016.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Billetes de polímero mundial',
    collectionLink: 'Inglaterra',
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
    collectionLink: 'England',
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

export function noteById(id: string): EnglandNote | undefined {
  return englandNotes.find((note) => note.id === id);
}

export function notePath(note: EnglandNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export const englandNoteSlugs = englandNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function englandSeriesPath(locale: 'es' | 'en'): string {
  return localizePath('/coleccion/polimero-mundial/europa/inglaterra/', locale);
}
