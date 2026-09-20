import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';
import { USA_MPC_PATH, USA_MPC_PROGRAM_PATH, USA_MPC_PROGRAM_PATH_EN, USA_PATH } from './estados-unidos';

export type MpcProgramChapterId = 'serie-481';

export type MpcProgramChapter = {
  id: MpcProgramChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const mpcProgramChapters: MpcProgramChapter[] = [
  {
    id: 'serie-481',
    years: { es: '1951–1954', en: '1951–1954' },
    title: {
      es: 'Serie 481',
      en: 'Series 481',
    },
    lead: {
      es: 'Emisión del 20 de junio de 1951 al 25 de mayo de 1954: papel de bases en ultramar, no una serie de Vietnam.',
      en: 'Issued 20 June 1951 to 25 May 1954: overseas-base paper, not a Vietnam series.',
    },
    body: {
      es: 'La serie 481 no lleva año de calendario impreso: «SERIES 481» es su designación. Circuló del 20 de junio de 1951 al 25 de mayo de 1954. Silver Recyclers sitúa el papel en Austria, Bélgica, Inglaterra, Francia, Alemania, Grecia, Hungría, Islandia, Italia, Japón, Corea, Marruecos, Filipinas, las Ryukyu, Escocia, Trieste y Yugoslavia. No forma parte de las cuatro series confinadas a Vietnam (641, 661, 681 y 692). Forbes Lithographic Manufacturing Co. y Tudor Press, en Boston, están documentados para esta serie; el Bureau of Engraving and Printing diseñó, acabó y despachó el papel. La impresión es litografía offset a partir de arte grabado, no intaglio directo. Esta vitrina reúne, de momento, el 5 centavos Pick M22a de la colección; las series vietnamitas siguen en su caso propio.',
      en: 'Series 481 carries no printed calendar year: “SERIES 481” is its designation. It circulated from 20 June 1951 to 25 May 1954. Silver Recyclers places the paper in Austria, Belgium, England, France, Germany, Greece, Hungary, Iceland, Italy, Japan, Korea, Morocco, the Philippines, the Ryukyus, Scotland, Trieste, and Yugoslavia. It is not one of the four series confined to Vietnam (641, 661, 681, and 692). Forbes Lithographic Manufacturing Co. and Tudor Press, in Boston, are documented for this series; the Bureau of Engraving and Printing handled design, finishing, and shipping. Printing is offset lithography from engraved artwork, not direct intaglio. This case currently holds the collection’s 5-cent Pick M22a; the Vietnam series remain in their own case.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.numista.com/223126',
    es: 'Numista — 5 Cents (Military Payment Certificate), N#223126',
    en: 'Numista — 5 Cents (Military Payment Certificate), N#223126',
    note: {
      es: 'Pick M22 / M22a, 1951, papel de unos 111 × 55 mm, emisión regular con letra de prefijo y sufijo.',
      en: 'Pick M22 / M22a, 1951, paper about 111 × 55 mm, regular issue with prefix and suffix letters.',
    },
  },
  {
    href: 'https://antiquemoney.com/military-payment-certificate-values/series-481-military-payment-certificate-value/',
    es: 'Antique Money — serie 481',
    en: 'Antique Money — Series 481',
    note: {
      es: 'Circulación del 20 de junio de 1951 al 25 de mayo de 1954; impresores de Boston y el BEP en diseño y despacho.',
      en: 'Circulation 20 June 1951 to 25 May 1954; Boston printers and the BEP for design and shipping.',
    },
  },
  {
    href: 'https://www.silverrecyclers.com/blog/military-payment-certificate-series-481.aspx',
    es: 'Silver Recyclers — Military Payment Certificate Series 481',
    en: 'Silver Recyclers — Military Payment Certificate Series 481',
    note: {
      es: 'Fechas 20 de junio de 1951–25 de mayo de 1954 y la lista de teatros de ultramar. Los reemplazos, según esa página, cierran el serial con un número; la emisión regular, con una letra. Cita el Standard Catalog of United States Paper Money. No se republican precios.',
      en: 'Dates 20 June 1951–25 May 1954 and the overseas theater list. Replacements, on that page, end the serial with a digit; regular issues end with a letter. It cites the Standard Catalog of United States Paper Money. Prices are not republished.',
    },
  },
  {
    href: 'https://www.bep.gov/media/1041/download?inline=',
    es: 'Bureau of Engraving and Printing — Military Payment Certificates (ficha)',
    en: 'Bureau of Engraving and Printing — Military Payment Certificates (fact sheet)',
    note: {
      es: 'Sitúa la serie 481 en el período 1951–1954 del programa MPC.',
      en: 'Places Series 481 in the MPC program’s 1951–1954 period.',
    },
  },
  {
    href: 'https://www.greatcollections.com/Auction-Archive/US-Currency-Prices/34/US-Paper-Money/151/Military-Payment-Certificates',
    es: 'GreatCollections — archivos de Military Payment Certificates',
    en: 'GreatCollections — Military Payment Certificates archive',
    note: {
      es: 'Clasifica el 5 centavos de 481 en primera impresión (S831-1) hasta el serial D05152000D. No se republican precios.',
      en: 'Places the Series 481 5-cent first printing (S831-1) through serial D05152000D. Prices are not republished.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · MPC serie 481 | Notofilia',
    metaDescription:
      'Certificado de pago militar de 5 centavos, serie 481 (1951–1954), Pick M22a, serial D02536728D, fuera del teatro de Vietnam.',
    kicker: 'Estados Unidos · MPC',
    title: 'Certificados de pago militar · Serie 481',
    breadcrumbCurrent: 'MPC - Serie 481 (1951-1954)',
    heroAlt:
      'Reverso del certificado de pago militar de 5 centavos, serie 481: águila con escudo sobre fondo rosa-magenta y orla azul',
    intro: [
      'El certificado de pago militar no es un billete del Tesoro ni curso legal estadounidense. Circulaba solo entre personal autorizado, en instalaciones de la base, y se convertía en moneda local, nunca al revés. El C-Day —un canje sorpresa— dejaba sin valor la serie saliente.',
      'La serie 481 cubrió del 20 de junio de 1951 al 25 de mayo de 1954. No lleva año impreso. Silver Recyclers la sitúa en Europa, el Mediterráneo, el Pacífico y Corea —Austria, Bélgica, Inglaterra, Francia, Alemania, Grecia, Hungría, Islandia, Italia, Japón, Corea, Marruecos, Filipinas, las Ryukyu, Escocia, Trieste y Yugoslavia—, no en Vietnam. Forbes Lithographic y Tudor Press, en Boston, están documentados para la serie; el BEP diseñó, acabó y despachó. La impresión es offset, no intaglio. Esta vitrina no es el catálogo de Vietnam: las series 641, 661, 681 y 692 tienen caso propio.',
      'Ya tiene ficha el 5 centavos Pick M22a, Friedberg M831, serial D02536728D, emisión regular D–D, número de pliego 66. No está encapsulado. Las demás denominaciones de 481 se publicarán cuando se fotografíen.',
    ],
    parentLink: 'Estados Unidos',
    usLead: 'El resto del papel federal, colonial y obsoleto se documenta en la vitrina de Estados Unidos.',
    usLink: 'Estados Unidos',
    vietnamLead: 'Las series usadas solo en Vietnam —641, 661, 681 y 692— están en la vitrina de MPC de Vietnam.',
    vietnamLink: 'MPC - Guerra de Vietnam (1955-1975)',
    factsHeading: 'La serie 481',
    denominationsLabel: 'Denominación en esta vitrina',
    denominationsValue: '5 centavos (US$0,05). Otras denominaciones de 481 esperan foto y serial.',
    printingLabel: 'Impresión',
    printingValue: 'Litografía offset; Forbes Lithographic y Tudor Press (serie); BEP en diseño y despacho.',
    authorityLabel: 'Autoridad',
    authorityValue: 'Departamento de Defensa. Instrumento de las fuerzas armadas; no es un billete del Tesoro.',
    notVietnamNote:
      'La 481 no es una serie de Vietnam. El teatro vietnamita empieza con la 641 (1965).',
    sourcesTitle: 'Fuentes',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
  },
  en: {
    metaTitle: 'United States · MPC Series 481 | Notofilia',
    metaDescription:
      'Series 481 5-cent Military Payment Certificate (1951–1954), Pick M22a, serial D02536728D, outside the Vietnam theater.',
    kicker: 'United States · MPC',
    title: 'Military Payment Certificates · Series 481',
    breadcrumbCurrent: 'MPC - Series 481 (1951-1954)',
    heroAlt:
      'Back of the Series 481 5-cent military payment certificate: eagle and shield on a pink-magenta field within a blue border',
    intro: [
      'A military payment certificate is not a Treasury note and not United States legal tender. It circulated only among authorized personnel, on base, and converted into local currency, never the other way. C-Day — a surprise conversion — left the outgoing series worthless.',
      'Series 481 ran from 20 June 1951 to 25 May 1954. No calendar year is printed. Silver Recyclers places it in Europe, the Mediterranean, the Pacific, and Korea — Austria, Belgium, England, France, Germany, Greece, Hungary, Iceland, Italy, Japan, Korea, Morocco, the Philippines, the Ryukyus, Scotland, Trieste, and Yugoslavia — not in Vietnam. Forbes Lithographic and Tudor Press, in Boston, are documented for the series; the BEP handled design, finishing, and shipping. Printing is offset, not intaglio. This case is not the Vietnam catalog: Series 641, 661, 681, and 692 have their own case.',
      'The 5-cent Pick M22a, Friedberg M831, serial D02536728D, regular D–D issue, sheet position 66, already has a note page. It is unslabbed. Further Series 481 denominations will be published as they are photographed.',
    ],
    parentLink: 'United States',
    usLead: 'The rest of the federal, colonial, and obsolete paper is documented in the United States case.',
    usLink: 'United States',
    vietnamLead: 'The series used only in Vietnam — 641, 661, 681, and 692 — live in the Vietnam MPC case.',
    vietnamLink: 'MPC - Vietnam War (1955-1975)',
    factsHeading: 'Series 481',
    denominationsLabel: 'Denomination in this case',
    denominationsValue: '5 cents (US$0.05). Other Series 481 values wait for a photograph and serial.',
    printingLabel: 'Printing',
    printingValue: 'Offset lithography; Forbes Lithographic and Tudor Press (series); BEP for design and shipping.',
    authorityLabel: 'Authority',
    authorityValue: 'Department of Defense. An armed-forces instrument; not a Treasury note.',
    notVietnamNote:
      'Series 481 is not a Vietnam issue. The Vietnam theater begins with Series 641 (1965).',
    sourcesTitle: 'Sources',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_MPC_PROGRAM_PATH, locale);
}

export type MpcProgramNoteId = '5-centavos-serie-481';

export type MpcProgramNote = {
  id: MpcProgramNoteId;
  chapterId: MpcProgramChapterId;
  valueCents: number;
  path: string;
  pathEn: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
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

export const mpcProgramNotes: MpcProgramNote[] = [
  {
    id: '5-centavos-serie-481',
    chapterId: 'serie-481',
    valueCents: 5,
    path: '/coleccion/estados-unidos/mpc/5-centavos-serie-481/',
    pathEn: '/collection/united-states/mpc/5-cents-series-481/',
    pick: 'P#M22a · Fr. M831 · Schwan 831-1',
    serial: 'D02536728D',
    signatures: {
      es: 'Sin firmas (emisión militar; el texto de uso sustituye al firmante)',
      en: 'No signatures (military issue; the use legend stands in place of a signer)',
    },
    printed: {
      es: 'No se ha verificado aquí una tirada del 5 centavos. Las medidas de tipo publicadas son unos 111 × 55 mm, no las de este ejemplar. Circulación de la serie: 20 de junio de 1951 al 25 de mayo de 1954',
      en: 'A printage for this 5-cent note has not been independently verified here. Published type dimensions are about 111 × 55 mm, not measurements of this specimen. Series circulation: 20 June 1951 to 25 May 1954',
    },
    images: {
      composite: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-composite.jpg',
      front: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-front.jpg',
      back: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-back.jpg',
      width: 1024,
      height: 682,
    },
    title: {
      es: '5 centavos · Serie 481',
      en: '5 cents · Series 481',
    },
    kicker: {
      es: 'Estados Unidos · MPC · Serie 481',
      en: 'United States · MPC · Series 481',
    },
    lead: {
      es: 'Anverso con alegoría sentada, globo y libros; reverso con águila y escudo. Serial D02536728D, posición 66. Sin encapsular.',
      en: 'Face with a seated allegory, globe, and books; back with eagle and shield. Serial D02536728D, position 66. Unslabbed.',
    },
    description: {
      es: 'El 5 centavos de la serie 481 (Pick M22a, Friedberg M831) es un certificado de pago militar del Departamento de Defensa, no un billete del Tesoro. No lleva año de calendario: «SERIES 481» es la designación. El anverso muestra a la izquierda una mujer alegórica sentada, con un globo en la mano y libros sobre una columna clásica; el texto «MILITARY PAYMENT CERTIFICATE», el serial D02536728D, «FIVE CENTS» y «SERIES 481» ocupan el resto del campo, sobre un fondo de líneas azul-verdosas y pardo-rojizas. El 66, arriba a la izquierda, es el número de posición en el pliego. El reverso lleva el águila con escudo, ramas de olivo, flechas y la cinta E PLURIBUS UNUM, en azul oscuro sobre un fondo rosa-magenta. El pie reza: FOR USE ONLY IN UNITED STATES MILITARY ESTABLISHMENTS — BY UNITED STATES AUTHORIZED PERSONNEL IN ACCORDANCE WITH APPLICABLE RULES AND REGULATIONS. El bloque D abre y cierra el número: es emisión regular, no un reemplazo. El serial cae por debajo de D05152000D, el extremo publicado para la primera impresión (Schwan 831-1 / S831-1); esa atribución compara el número con la clasificación de seriales, no está escrita en el papel. Las fotografías muestran tono del papel, manchas dispersas y desgaste de bordes y esquinas. No se afirma autenticidad de laboratorio ni un grado numérico.',
      en: 'The Series 481 5-cent note (Pick M22a, Friedberg M831) is a Department of Defense military payment certificate, not a Treasury note. No calendar year is printed: “SERIES 481” is the designation. The face shows at left a seated allegorical woman holding a globe, with books on a classical column; “MILITARY PAYMENT CERTIFICATE,” serial D02536728D, “FIVE CENTS,” and “SERIES 481” occupy the rest of the field over blue-green and reddish-brown linework. The 66 at upper left is the sheet position number. The back carries the eagle with shield, olive branch, arrows, and an E PLURIBUS UNUM ribbon, in dark blue on a pink-magenta field. The legend reads: FOR USE ONLY IN UNITED STATES MILITARY ESTABLISHMENTS — BY UNITED STATES AUTHORIZED PERSONNEL IN ACCORDANCE WITH APPLICABLE RULES AND REGULATIONS. The D block opens and closes the number: it is a regular issue, not a replacement. The serial falls below D05152000D, the published first-printing endpoint (Schwan 831-1 / S831-1); that attribution compares the number with the serial classification and is not written on the note. The photographs show paper toning, scattered spotting, and edge and corner wear. They do not establish laboratory authenticity or a numerical grade.',
    },
    frontCaption: {
      es: 'Anverso del 5 centavos, serie 481, serial D02536728D: alegoría sentada, globo, FIVE CENTS y el 66 de pliego.',
      en: 'Face of the Series 481 5-cent note, serial D02536728D: seated allegory, globe, FIVE CENTS, and sheet number 66.',
    },
    backCaption: {
      es: 'Reverso del 5 centavos, serie 481: águila con escudo y la restricción de uso para personal autorizado.',
      en: 'Back of the Series 481 5-cent note: eagle and shield and the authorized-personnel use legend.',
    },
    scarcity: {
      es: 'El tipo es la emisión regular con letra de prefijo y sufijo (Pick M22a), no la variedad de reemplazo. Silver Recyclers describe los reemplazos de 481 como seriales que cierran con un número; este D02536728D cierra con D. La primera impresión se atribuye por el rango de seriales publicado hasta D05152000D; este ejemplar cae dentro de ese tramo. Esta ficha no inventa una tirada del 5 centavos ni un censo de mercado, y no republica precios de catálogo.',
      en: 'The type is the regular prefix-and-suffix-letter issue (Pick M22a), not the replacement variety. Silver Recyclers describes Series 481 replacements as serials that end with a digit; this D02536728D ends with D. First-printing status is attributed from the published serial range through D05152000D; this example falls in that span. This record does not invent a 5-cent printage or a market census, and it does not republish catalog prices.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/223126',
        es: 'Numista — N#223126, 5 Cents MPC',
        en: 'Numista — N#223126, 5 Cents MPC',
        note: {
          es: 'Confirma P-M22a, 1951, serie 481, papel de unos 111 × 55 mm.',
          en: 'Confirms P-M22a, 1951, Series 481, paper about 111 × 55 mm.',
        },
      },
      {
        href: 'https://antiquemoney.com/military-payment-certificate-values/series-481-military-payment-certificate-value/',
        es: 'Antique Money — serie 481',
        en: 'Antique Money — Series 481',
        note: {
          es: 'Fechas de circulación 20 de junio de 1951–25 de mayo de 1954; Forbes Lithographic y Tudor Press a nivel de serie.',
          en: 'Circulation dates 20 June 1951–25 May 1954; Forbes Lithographic and Tudor Press at series level.',
        },
      },
      {
        href: 'https://www.silverrecyclers.com/blog/military-payment-certificate-series-481.aspx',
        es: 'Silver Recyclers — serie 481',
        en: 'Silver Recyclers — Series 481',
        note: {
          es: 'Lista de teatros; reemplazos con dígito final frente a letra en la emisión regular. Cita el Standard Catalog of United States Paper Money. No se republican precios.',
          en: 'Theater list; replacements with a terminal digit versus a letter on the regular issue. Cites the Standard Catalog of United States Paper Money. Prices are not republished.',
        },
      },
      {
        href: 'https://www.greatcollections.com/Auction-Archive/US-Currency-Prices/34/US-Paper-Money/151/Military-Payment-Certificates',
        es: 'GreatCollections — MPC, clasificación de seriales de la 481',
        en: 'GreatCollections — MPC, Series 481 serial classification',
        note: {
          es: 'S831-1, primera impresión, extremo D05152000D. No se republican precios de subasta.',
          en: 'S831-1, first printing, endpoint D05152000D. Auction prices are not republished.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'MPC - Serie 481 (1951-1954)',
    collectionLink: 'Estados Unidos',
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
    seriesLink: 'MPC - Series 481 (1951-1954)',
    collectionLink: 'United States',
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

export function noteById(id: string): MpcProgramNote | undefined {
  return mpcProgramNotes.find((note) => note.id === id);
}

export function notePath(note: MpcProgramNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: MpcProgramChapterId): MpcProgramNote[] {
  return mpcProgramNotes
    .filter((note) => note.chapterId === chapterId)
    .sort((a, b) => a.valueCents - b.valueCents || a.id.localeCompare(b.id));
}

export const mpcProgramNoteSlugs = mpcProgramNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const mpcProgramNoteDedicatedSlugs = mpcProgramNotes.flatMap((note) => [
  note.path.replace(/^\/|\/$/g, ''),
  note.pathEn.replace(/^\/|\/$/g, ''),
]);

export { USA_MPC_PATH, USA_MPC_PROGRAM_PATH, USA_MPC_PROGRAM_PATH_EN, USA_PATH };
