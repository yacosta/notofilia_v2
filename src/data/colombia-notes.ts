import type { CatalogSource, LocalizedText } from './catalog';
import type { ColombiaChapterId } from './colombia';
import { COLOMBIA_PATH, colombiaChapters } from './colombia';
import { localizePath } from '../lib/locale-paths';

export type ColombiaNoteId = '5-pesos-rio-hacha-1883' | '10-pesos-oro-1943';

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
  hero?: {
    src: string;
    width: number;
    height: number;
  };
  heroAlt?: LocalizedText;
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
    hero: {
      src: '/images/catalog/colombia/hero-rio-hacha.jpg',
      width: 2128,
      height: 912,
    },
    heroAlt: {
      es: 'Mapa ilustrado vintage de Riohacha sobre pergamino, con la catedral, el muelle, el mar Caribe, La Guajira, un pasaporte y el título Riohacha',
      en: 'Vintage illustrated map of Riohacha on parchment, with the cathedral, the pier, the Caribbean Sea, La Guajira, a passport, and the title Riohacha',
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
  {
    id: '10-pesos-oro-1943',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}10-pesos-oro-1943/`,
    pick: 'P# 389b',
    serial: 'N 6813011',
    signatures: {
      es: 'Julio Caro (gerente) y Luis Ángel Arango (secretario)',
      en: 'Julio Caro (gerente) and Luis Ángel Arango (secretario)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 20 de julio de 1943. El Bank Note Museum agrupa el tipo 389b en las fechas 20.07.1943, 20.07.1944 y 07.08.1947. Formato publicado: 140 × 70 mm. No se publica aquí una tirada.',
      en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 20 July 1943. The Bank Note Museum groups type 389b under 20.07.1943, 20.07.1944, and 07.08.1947. Published size: 140 × 70 mm. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/10-pesos-oro-1943-composite.jpg',
      front: '/images/catalog/colombia/10-pesos-oro-1943-front.jpg',
      back: '/images/catalog/colombia/10-pesos-oro-1943-back.jpg',
    },
    title: {
      es: '10 pesos oro · Banco de la República · 1943',
      en: '10 pesos oro · Banco de la República · 1943',
    },
    kicker: {
      es: 'Colombia · Banco de la República · ABNC',
      en: 'Colombia · Banco de la República · ABNC',
    },
    lead: {
      es: 'Diez pesos oro de circulación, Pick 389b: encapsulado PMG 50 About Uncirculated EPQ. Serie N, serial 6813011, 20 de julio de 1943. Esta ficha reúne anverso y reverso de la misma cápsula.',
      en: 'A circulating ten-peso oro, Pick 389b: slabbed PMG 50 About Uncirculated EPQ. Series N, serial 6813011, 20 July 1943. This record gathers the face and back of the same holder.',
    },
    description: {
      es: 'El Banco de la República, creado por la Ley 25 de 1923, encargó a la American Bank Note Company las planchas de sus primeros billetes de circulación. Este diez pesos oro —Pick 389; el Bank Note Museum lo sitúa en 1941–1963— lleva a la derecha el retrato de Antonio Nariño, con el nombre bajo el óvalo, y al centro la promesa de pagar al portador diez pesos oro. El fondo pasa del verde al naranja; los seriales y la leyenda «SERIE N» van en rojo. La fecha impresa es «BOGOTA, COLOMBIA / 20 DE JULIO DE 1943». El tipo 389b cubre tres fechas de los años cuarenta; esta pieza es la primera de ese grupo. Las firmas del gerente Julio Caro y del secretario Luis Ángel Arango son las que Banknote World registra para el 389b fechado el 20 de julio de 1944, la emisión inmediata del mismo letra. El reverso, en verde, muestra la cabeza de la Libertad con gorro frigio en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA •», las cifras 10 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». Esta ficha reúne las dos caras de la cápsula PMG 8011911-013.',
      en: 'The Banco de la República, created by Law 25 of 1923, ordered plates for its first circulating notes from the American Bank Note Company. This ten-peso oro — Pick 389; the Bank Note Museum places the type in 1941–1963 — carries Antonio Nariño’s portrait at right, named under the oval, and at center the promise to pay the bearer ten gold pesos. The underprint runs from green into orange; the serials and the legend “SERIE N” are in red. The printed date is “BOGOTA, COLOMBIA / 20 DE JULIO DE 1943.” Type 389b covers three 1940s dates; this piece is the first of that group. The signatures of gerente Julio Caro and secretario Luis Ángel Arango are those Banknote World records for the 389b dated 20 July 1944, the next issue of the same letter. The green back shows Liberty’s head in a Phrygian cap, in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA •,” the figures 10 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” This record gathers both sides of PMG holder 8011911-013.',
    },
    frontCaption: {
      es: 'Anverso del 10 pesos oro, Pick 389b, encapsulado PMG 50 About Uncirculated EPQ: Nariño, serie N, serial 6813011 y fecha 20 de julio de 1943.',
      en: 'Face of the 10 pesos oro, Pick 389b, slabbed PMG 50 About Uncirculated EPQ: Nariño, Series N, serial 6813011, and the date 20 July 1943.',
    },
    backCaption: {
      es: 'Reverso del 10 pesos oro, Pick 389b, encapsulado PMG 50 About Uncirculated EPQ: Libertad con gorro frigio, cifras 10 y pie de la American Bank Note Company.',
      en: 'Back of the 10 pesos oro, Pick 389b, slabbed PMG 50 About Uncirculated EPQ: Liberty in a Phrygian cap, the figures 10, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'El Bank Note Museum describe el Pick 389 como emisión de circulación de 10 pesos oro, 1941–1963, grabada por la American Bank Note Company: Nariño al anverso y la Libertad al reverso. El letra b agrupa tres fechas (1943, 1944 y 1947). No es prueba ni espécimen. Esta ficha no inventa una tirada por fecha.',
      en: 'The Bank Note Museum describes Pick 389 as a circulating 10-peso oro issue of 1941–1963, engraved by the American Bank Note Company: Nariño on the face and Liberty on the back. Letter b groups three dates (1943, 1944, and 1947). It is neither a proof nor a specimen. This record does not invent a printage by date.',
    },
    population: {
      es: 'La pieza está encapsulada por PMG como 50 About Uncirculated EPQ, certificado 8011911-013. No se ha verificado de forma independiente un censo de población para ese número de cápsula.',
      en: 'The note is slabbed by PMG as 50 About Uncirculated EPQ, certification 8011911-013. A population census for that holder number has not been independently verified.',
    },
    grade: {
      es: 'PMG 50 About Uncirculated EPQ',
      en: 'PMG 50 About Uncirculated EPQ',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0389.htm',
        es: 'Bank Note Museum — Colombia P-389, 10 pesos oro (1941–1963)',
        en: 'Bank Note Museum — Colombia P-389, 10 pesos oro (1941–1963)',
        note: {
          es: '389b: 20.07.1943, 20.07.1944 y 07.08.1947; anverso Nariño, reverso Libertad; ABNC.',
          en: '389b: 20.07.1943, 20.07.1944, and 07.08.1947; Nariño on the face, Liberty on the back; ABNC.',
        },
      },
      {
        href: 'https://www.banknoteworld.org/colombia-10-pesos-oro-1944-p-389b-2.html',
        es: 'Banknote World — Colombia 10 pesos oro 1944, P-389b.2',
        en: 'Banknote World — Colombia 10 pesos oro 1944, P-389b.2',
        note: {
          es: 'Mismo letra 389b: serie N, ABNC, 140 × 70 mm; firmas Julio Caro y Luis Ángel Arango en la fecha de 1944.',
          en: 'Same 389b letter: Series N, ABNC, 140 × 70 mm; Julio Caro and Luis Ángel Arango on the 1944 date.',
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

export function noteSeriesLabel(note: ColombiaNote, locale: 'es' | 'en'): string {
  const chapter = colombiaChapters.find((entry) => entry.id === note.chapterId);
  const era = chapter?.title[locale] ?? 'Colombia';
  return `Colombia · ${era}`;
}

export const colombiaNoteSlugs = colombiaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));
