import type { CatalogSource, LocalizedText } from './catalog';
import type { ColombiaChapterId } from './colombia';
import { COLOMBIA_PATH } from './colombia';
import { localizePath } from '../lib/locale-paths';

export type ColombiaNoteId = '5-pesos-rio-hacha-1883';

export type ColombiaNote = {
  id: ColombiaNoteId;
  chapterId: ColombiaChapterId;
  path: string;
  pick: string;
  serial: string;
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

export const colombiaNotes: ColombiaNote[] = [
  {
    id: '5-pesos-rio-hacha-1883',
    chapterId: 'banca-libre',
    path: `${COLOMBIA_PATH}5-pesos-rio-hacha-1883/`,
    pick: 'P# S819p1 / S819p2',
    serial: 'C 00000',
    signatures: {
      es: 'Sin firmas (pruebas de imprenta)',
      en: 'Unsigned (printer’s proofs)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Montaje de imprenta fechado febrero de 1883; serie C. No se publica una tirada de circulación.',
      en: 'American Bank Note Company, New York. Printer’s mount dated February 1883; Series C. No circulating printage is published.',
    },
    images: {
      composite: '/images/catalog/colombia/5-pesos-rio-hacha-1883-composite.jpg',
      front: '/images/catalog/colombia/5-pesos-rio-hacha-1883-front.jpg',
      back: '/images/catalog/colombia/5-pesos-rio-hacha-1883-back.jpg',
    },
    title: {
      es: '5 pesos · Banco de Rio Hacha · 1883',
      en: '5 pesos · Banco de Rio Hacha · 1883',
    },
    kicker: {
      es: 'Colombia · Banca libre · Pruebas ABNC',
      en: 'Colombia · Free banking · ABNC proofs',
    },
    lead: {
      es: 'Par de pruebas de la American Bank Note Company: anverso S819p1, encapsulado PMG 64 Choice Uncirculated EPQ; reverso S819p2, PMG 62 Uncirculated. Serie C, serial 00000.',
      en: 'A pair of American Bank Note Company proofs: face S819p1, slabbed PMG 64 Choice Uncirculated EPQ; back S819p2, PMG 62 Uncirculated. Series C, serial 00000.',
    },
    description: {
      es: 'El Banco de Rio Hacha —hoy Riohacha, en la Guajira— dejó estatutos impresos en 1882, en la Imprenta de Padilla. Al año siguiente encargó a la American Bank Note Company de Nueva York el papel de cinco pesos. El Standard Catalog of World Paper Money — Specialized Issues lo numera S819p: negro sobre fondo pardo, escudo a la izquierda, Simón Bolívar al centro y, a la derecha, una alegoría femenina apoyada en una rueda. La serie es C. El montaje de estas pruebas lleva la fecha «February 1883». El anverso promete pagar en la oficina, a la vista y al portador, cinco pesos en moneda corriente; el serial rojo es 00000 y tres perforaciones de cancelación cortan el margen inferior. El reverso, en sepia, es un marco de roleos con el 5 en ambos flancos y el pie «AMERICAN BANK NOTE COMPANY, NEW YORK». No hay firmas: son pruebas de plancha, no un ejemplar puesto en circulación. Esta ficha reúne las dos cápsulas PMG de la colección —anverso y reverso por separado—.',
      en: 'The Banco de Rio Hacha — today’s Riohacha, on the Guajira — left printed statutes in 1882, from the Imprenta de Padilla. The next year it ordered five-peso paper from the American Bank Note Company in New York. The Standard Catalog of World Paper Money — Specialized Issues numbers it S819p: black on a brown underprint, arms at left, Simón Bolívar at center, and at right a female allegory leaning on a wheel. The series is C. The mount of these proofs is dated “February 1883.” The face promises to pay at the office, on sight and to the bearer, five pesos in current money; the red serial is 00000 and three cancellation punches cut the lower margin. The sepia back is a scrollwork frame with a 5 at each flank and the imprint “AMERICAN BANK NOTE COMPANY, NEW YORK.” There are no signatures: these are plate proofs, not a note placed in circulation. This record gathers the collection’s two PMG holders — face and back, separately slabbed.',
    },
    frontCaption: {
      es: 'Prueba de anverso, Pick S819p1, encapsulada PMG 64 Choice Uncirculated EPQ: Bolívar, escudo, alegoría de la industria y serial C 00000.',
      en: 'Face proof, Pick S819p1, slabbed PMG 64 Choice Uncirculated EPQ: Bolívar, the arms, an allegory of industry, and serial C 00000.',
    },
    backCaption: {
      es: 'Prueba de reverso, Pick S819p2, encapsulada PMG 62 Uncirculated: marco ornamental en sepia, cifras 5 y pie de la American Bank Note Company.',
      en: 'Back proof, Pick S819p2, slabbed PMG 62 Uncirculated: a sepia ornamental frame, the figures 5, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'RealBanknotes describe el tipo S819p como prueba de imprenta de 1883, no como emisión de caja. Un lote de la colección Eldorado, citado por PMG, era también una prueba S819p. Los ejemplares de circulación de este banco costeño son de extrema rareza; el mercado ve sobre todo planchas de Nueva York, a menudo montadas, perforadas y con seriales de ceros. Esta ficha no inventa una tirada.',
      en: 'RealBanknotes describes type S819p as an 1883 printer’s proof, not a till issue. A lot from the Eldorado collection, cited by PMG, was likewise an S819p proof. Circulating notes of this coastal bank are extremely rare; the market mostly sees New York plates, often mounted, punch-cancelled, and with zero serials. This record does not invent a printage.',
    },
    population: {
      es: 'Las dos piezas de esta ficha están encapsuladas por PMG: el anverso como 64 Choice Uncirculated EPQ (S819p1) y el reverso como 62 Uncirculated (S819p2). No se ha verificado de forma independiente un censo de población para estos números de cápsula.',
      en: 'The two pieces in this record are slabbed by PMG: the face as 64 Choice Uncirculated EPQ (S819p1) and the back as 62 Uncirculated (S819p2). A population census for these holder numbers has not been independently verified.',
    },
    grade: {
      es: 'Anverso PMG 64 Choice Uncirculated EPQ · Reverso PMG 62 Uncirculated',
      en: 'Face PMG 64 Choice Uncirculated EPQ · Back PMG 62 Uncirculated',
    },
    sources: [
      {
        href: 'https://www.realbanknotes.com/banknote/73133-Colombia-pS819p-5-Pesos-from-1883',
        es: 'RealBanknotes — Colombia pS819p, 5 pesos de 1883',
        en: 'RealBanknotes — Colombia pS819p, 5 pesos of 1883',
        note: {
          es: 'Prueba ABNC: negro sobre fondo pardo; escudo, Bolívar y mujer con rueda; serie C.',
          en: 'ABNC proof: black on brown; arms, Bolívar, and a woman with a wheel; Series C.',
        },
      },
      {
        href: 'https://www.pmgnotes.com/news/article/6302/January-Auction-to-Feature-PMG-Graded-Notes-From-the-Eldorado-Collection/',
        es: 'PMG — Prueba S819p del Banco de Rio Hacha en la colección Eldorado',
        en: 'PMG — Banco de Rio Hacha S819p proof in the Eldorado collection',
        note: {
          es: 'Documenta el tipo de 5 pesos de 1883 como prueba encapsulada.',
          en: 'Records the 1883 5-peso type as a slabbed proof.',
        },
      },
      {
        href: 'https://biblioteca.academiahistoria.org.co/pmb/opac_css/index.php?id=22568&lvl=notice_display&seule=1',
        es: 'Academia Colombiana de Historia — Estatutos del Banco de Riohacha (1882)',
        en: 'Academia Colombiana de Historia — Statutes of the Banco de Riohacha (1882)',
        note: {
          es: '32 páginas, Riohacha, Imprenta de Padilla: el banco existía el año anterior a estas planchas.',
          en: '32 pages, Riohacha, Imprenta de Padilla: the bank existed the year before these plates.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Colombia · Banca libre',
    collectionLink: 'Colombia',
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
    seriesLink: 'Colombia · Free banking',
    collectionLink: 'Colombia',
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

export function noteById(id: string): ColombiaNote | undefined {
  return colombiaNotes.find((note) => note.id === id);
}

export function notePath(note: ColombiaNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: ColombiaChapterId): ColombiaNote[] {
  return colombiaNotes.filter((note) => note.chapterId === chapterId);
}

export const colombiaNoteSlugs = colombiaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));
