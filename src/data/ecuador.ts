import type { CatalogSource, LocalizedText } from './catalog';

export const ECUADOR_PATH = '/coleccion/ecuador/';

export type EcuadorChapterId = 'sucre' | 'banca-privada' | 'banco-central' | 'dolarizacion';

export type EcuadorChapter = {
  id: EcuadorChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const ecuadorChapters: EcuadorChapter[] = [
  {
    id: 'sucre',
    years: { es: '1884–1926', en: '1884–1926' },
    title: {
      es: 'El sucre',
      en: 'The sucre',
    },
    lead: {
      es: 'La ley monetaria de 1884 sustituyó el peso por una unidad que lleva el nombre de Antonio José de Sucre.',
      en: 'The 1884 monetary law replaced the peso with a unit named for Antonio José de Sucre.',
    },
    body: {
      es: 'Ecuador se separó de la Gran Colombia en 1830 y durante décadas el comercio siguió en pesos, reales y moneda extranjera. El 22 de marzo de 1884 una ley monetaria creó el sucre, divisible en 100 centavos, en honor del mariscal que selló la independencia andina en Pichincha y Ayacucho. El patrón bimetálico pronto se inclinó al oro; el tipo de cambio se ancló, en la práctica, al dólar. El papel de esa época no nació de un banco de Estado: lo emitieron casas privadas de Guayaquil y Quito, con convertibilidad desigual y planchas grabadas en el extranjero. El nombre de la moneda sobrevivió a esas casas; el monopolio de emitirla no llegó hasta 1927.',
      en: 'Ecuador left Gran Colombia in 1830 and for decades trade still ran on pesos, reales, and foreign coin. On 22 March 1884 a monetary law created the sucre, of 100 centavos, named for the marshal who sealed Andean independence at Pichincha and Ayacucho. The bimetallic standard soon tilted toward gold; the exchange rate was, in practice, anchored to the dollar. Paper of that era did not come from a state bank: private houses in Guayaquil and Quito issued it, with uneven convertibility and plates engraved abroad. The currency’s name outlived those houses; the monopoly of issue did not arrive until 1927.',
    },
  },
  {
    id: 'banca-privada',
    years: { es: '1860–1927', en: '1860–1927' },
    title: {
      es: 'Bancos privados de emisión',
      en: 'Private banks of issue',
    },
    lead: {
      es: 'Guayaquil y Quito pagaron el comercio con billetes de casas particulares hasta que la Caja Central recogió el oro de esas emisiones.',
      en: 'Guayaquil and Quito paid for trade with private-house notes until the Central Fund took in the gold behind those issues.',
    },
    body: {
      es: 'El Banco del Ecuador, fundado en Guayaquil en 1868, fue el emisor privado más duradero. Le siguieron, entre otros, el Banco de Quito, el Banco de la Unión y el Banco Comercial y Agrícola, cuyas planchas —a menudo de la American Bank Note Company— documenta el Bank Note Museum. Cada casa prometía el canje en metálico; las crisis de 1914 y de los años veinte mostraron lo frágil de esa promesa. Tras la Revolución Juliana de 1925, el gobierno de Isidro Ayora creó el 26 de junio de 1926 la Caja Central de Emisión y Amortización, que reconoció el papel en circulación. El 18 de octubre de 1926 ordenó a los bancos autorizados entregar oro y plata a esa caja —unos 10,6 millones de sucres— paso previo al banco central.',
      en: 'The Banco del Ecuador, founded in Guayaquil in 1868, was the longest-lived private issuer. The Banco de Quito, Banco de la Unión, and Banco Comercial y Agrícola followed; the Bank Note Museum records their plates, often from the American Bank Note Company. Each house promised metallic convertibility; the crises of 1914 and the 1920s showed how fragile that promise was. After the July Revolution of 1925, Isidro Ayora’s government created the Central Issuance and Amortization Fund on 26 June 1926 to recognize notes in circulation. On 18 October 1926 it ordered authorized banks to deliver gold and silver to that fund — about 10.6 million sucres — a step toward the central bank.',
    },
  },
  {
    id: 'banco-central',
    years: { es: '1927–1999', en: '1927–1999' },
    title: {
      es: 'Banco Central del Ecuador',
      en: 'Banco Central del Ecuador',
    },
    lead: {
      es: 'La Misión Kemmerer, la Ley Orgánica de 1927 y setenta años de sucres de emisión centralizada.',
      en: 'The Kemmerer Mission, the Organic Law of 1927, and seventy years of centralized sucre notes.',
    },
    body: {
      es: 'Edwin W. Kemmerer —el mismo que había asesorado a Colombia en 1923— desembarcó en Salinas el 17 de octubre de 1926. El 11 de febrero de 1927 entregó el proyecto de Ley Orgánica del Banco Central; Isidro Ayora la firmó el 4 de marzo (Decreto Supremo 253). La escritura de constitución es del 9 de julio; el banco abrió el 10 de agosto de 1927, fecha que el propio BCE toma como fundación. La Ley de Monedas del 19 de marzo fijó el patrón oro a cinco sucres por dólar. Desde entonces el retrato de próceres —Sucre, Bolívar, Rocafuerte, Alfaro— ocupó el anverso de las series de circulación, grabadas sobre todo por Thomas De La Rue. Esta vitrina documenta, de esa época tardía, un 100 sucres de 1993 con número de serie 00000003.',
      en: 'Edwin W. Kemmerer — the same adviser Colombia had hired in 1923 — landed at Salinas on 17 October 1926. On 11 February 1927 he delivered the draft Organic Law of the Central Bank; Isidro Ayora signed it on 4 March (Supreme Decree 253). The deed of incorporation is dated 9 July; the bank opened on 10 August 1927, the foundation date the BCE itself uses. The Monetary Law of 19 March set the gold standard at five sucres to the dollar. From then on portraits of national figures — Sucre, Bolívar, Rocafuerte, Alfaro — occupied the face of circulating series, engraved chiefly by Thomas De La Rue. This case records, from that late period, a 1993 100-sucre note with serial 00000003.',
    },
  },
  {
    id: 'dolarizacion',
    years: { es: 'desde 2000', en: 'from 2000' },
    title: {
      es: 'Dolarización',
      en: 'Dollarization',
    },
    lead: {
      es: 'El 9 de enero de 2000 el dólar sustituyó al sucre a 25.000 por 1; el canje de billetes terminó en junio de 2001.',
      en: 'On 9 January 2000 the dollar replaced the sucre at 25,000 to 1; note exchange ended in June 2001.',
    },
    body: {
      es: 'La crisis bancaria de 1999, la inflación y la pérdida del tipo de cambio dejaron al sucre sin ancla. El 9 de enero de 2000 el Ejecutivo anunció la dolarización: el dólar de los Estados Unidos pasó a ser reserva de valor, unidad de cuenta y medio de pago. El BCE quedó imposibilitado de emitir papel, salvo la moneda fraccionaria, y obligado a canjear los sucres existentes por dólares de su Reserva Monetaria Internacional a un tipo fijo de 25.000 sucres por 1 dólar. Ese canje terminó en junio de 2001. Los billetes en sucre dejaron de ser de curso legal; siguen siendo el objeto de esta vitrina. El banco conserva hoy la gestión de la reserva internacional y la moneda fraccionaria en centavos de dólar.',
      en: 'The 1999 banking crisis, inflation, and the collapse of the exchange rate left the sucre without an anchor. On 9 January 2000 the executive announced dollarization: the United States dollar became store of value, unit of account, and means of payment. The BCE could no longer issue paper, except fractional coin, and had to exchange outstanding sucres for dollars from its International Monetary Reserve at a fixed 25,000 sucres to 1 dollar. That exchange ended in June 2001. Sucre notes ceased to be legal tender; they remain the object of this case. The bank still manages the international reserve and fractional coinage in U.S. cents.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.bce.fin.ec/banco-central-del-ecuador/historia/',
    es: 'Banco Central del Ecuador — Historia',
    en: 'Central Bank of Ecuador — History',
    note: {
      es: 'Misión Kemmerer, Ley Orgánica del 4 de marzo de 1927, apertura el 10 de agosto y dolarización del 9 de enero de 2000.',
      en: 'Kemmerer Mission, Organic Law of 4 March 1927, opening on 10 August, and dollarization on 9 January 2000.',
    },
  },
  {
    href: 'https://www.bce.fin.ec/en/central-bank-of-ecuador/history/',
    es: 'Banco Central del Ecuador — History (English)',
    en: 'Central Bank of Ecuador — History (English)',
    note: {
      es: 'Caja Central de 1926, entrega de oro y plata el 18 de octubre, y canje de sucres hasta junio de 2001.',
      en: '1926 Central Fund, gold and silver delivery on 18 October, and sucre exchange through June 2001.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Ecuadorian_sucre',
    es: 'Wikipedia — Sucre ecuatoriano',
    en: 'Wikipedia — Ecuadorian sucre',
    note: {
      es: 'Ley monetaria de 1884; tipo de 25.000 sucres por dólar en 2000.',
      en: 'Monetary law of 1884; rate of 25,000 sucres to the dollar in 2000.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/ECU/ECU.htm',
    es: 'Bank Note Museum — Ecuador (bancos privados y Banco Central)',
    en: 'Bank Note Museum — Ecuador (private banks and the Central Bank)',
  },
  {
    href: 'https://en.numista.com/209287',
    es: 'Numista — 100 sucres (P#123Ab, 20 de agosto de 1993)',
    en: 'Numista — 100 sucres (P#123Ab, 20 August 1993)',
    note: {
      es: 'Retrato de Simón Bolívar; seriales azules; serie WF de 1993.',
      en: 'Portrait of Simón Bolívar; blue serials; 1993 series WF.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Ecuador · Del sucre a la dolarización | Notofilia',
    metaDescription:
      'Investigación del papel moneda ecuatoriano: el sucre de 1884, los bancos privados, el Banco Central de 1927 y la dolarización de 2000. Incluye un 100 sucres de 1993 con serie 00000003.',
    kicker: 'Ecuador · Notafilia',
    title: 'Del sucre a la dolarización',
    heroAlt:
      'Mapa vintage en relieve 3D de Ecuador sobre pergamino, con Chimborazo, Cotopaxi, Quito, las islas Galápagos, un pasaporte y el título Ecuador',
    intro: [
      'El papel moneda en Ecuador nació de la banca privada, no de un instituto emisor. El 22 de marzo de 1884 una ley monetaria sustituyó el peso por el sucre, en honor de Antonio José de Sucre. Durante más de sesenta años las casas de Guayaquil y Quito —el Banco del Ecuador (1868), el Comercial y Agrícola, el de Quito— pagaron el comercio con planchas grabadas en Nueva York y Londres, a cambio de una convertibilidad que las crisis de 1914 y de los años veinte pusieron en duda.',
      'La Revolución Juliana de 1925 y la Misión Kemmerer de 1926–1927 cerraron ese capítulo. Isidro Ayora firmó la Ley Orgánica del Banco Central el 4 de marzo de 1927; el banco abrió el 10 de agosto. El patrón oro quedó en cinco sucres por dólar. Desde entonces el retrato de próceres ocupó el anverso de las series de Thomas De La Rue: Sucre, Bolívar, Rocafuerte, Alfaro.',
      'El 9 de enero de 2000, tras la crisis bancaria de 1999, el dólar sustituyó al sucre a 25.000 por 1. El canje de billetes terminó en junio de 2001. Esta vitrina investiga esa trayectoria y documenta, de la última década del sucre, un 100 sucres del 20 de agosto de 1993 con el número de serie 00000003.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Por ahora, un 100 sucres de 1993 (Pick 123Ab) con numeración especialmente baja. Las demás fichas se publicarán como en Filipinas, a medida que se documenten.',
    viewNote: 'Ver la ficha',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
  },
  en: {
    metaTitle: 'Ecuador · From the sucre to dollarization | Notofilia',
    metaDescription:
      'An investigation of Ecuadorian paper money: the 1884 sucre, private banks of issue, the 1927 Central Bank, and dollarization in 2000. Includes a 1993 100-sucre note with serial 00000003.',
    kicker: 'Ecuador · Notaphily',
    title: 'From the sucre to dollarization',
    heroAlt:
      'Vintage 3D relief map of Ecuador on parchment, with Chimborazo, Cotopaxi, Quito, the Galápagos Islands, a passport, and the title Ecuador',
    intro: [
      'Paper money in Ecuador was born of private banking, not of a state issuer. On 22 March 1884 a monetary law replaced the peso with the sucre, named for Antonio José de Sucre. For more than sixty years houses in Guayaquil and Quito — the Banco del Ecuador (1868), the Comercial y Agrícola, the Banco de Quito — paid for trade with plates engraved in New York and London, against a convertibility that the crises of 1914 and the 1920s put in doubt.',
      'The July Revolution of 1925 and the Kemmerer Mission of 1926–1927 closed that chapter. Isidro Ayora signed the Organic Law of the Central Bank on 4 March 1927; the bank opened on 10 August. The gold standard was set at five sucres to the dollar. From then on portraits of national figures occupied the face of Thomas De La Rue series: Sucre, Bolívar, Rocafuerte, Alfaro.',
      'On 9 January 2000, after the 1999 banking crisis, the dollar replaced the sucre at 25,000 to 1. Note exchange ended in June 2001. This case investigates that trajectory and records, from the sucre’s last decade, a 100-sucre note of 20 August 1993 with serial number 00000003.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'For now, a 1993 100-sucre note (Pick 123Ab) with an especially low serial. Further note pages will be published as they are documented, as in the Philippines case.',
    viewNote: 'Open the note page',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
  },
} as const;

export type EcuadorNoteId = '100-sucres-1993';

export type EcuadorNote = {
  id: EcuadorNoteId;
  path: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
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

export const ecuadorNotes: EcuadorNote[] = [
  {
    id: '100-sucres-1993',
    path: '/coleccion/ecuador/100-sucres-1993/',
    pick: 'P#123Ab',
    serial: 'WF 00000003',
    signatures: {
      es: 'Presidente del Directorio y Gerente General del Banco Central (emisión del 20 de agosto de 1993)',
      en: 'Chair of the Board and General Manager of the Central Bank (issue of 20 August 1993)',
    },
    printed: {
      es: 'Thomas De La Rue & Company, sin impronta; 156 × 67 mm; seriales azules de la serie WF',
      en: 'Thomas De La Rue & Company, without imprint; 156 × 67 mm; blue serials of series WF',
    },
    images: {
      composite: '/images/catalog/ecuador/100-sucres-1993-composite.jpg',
      width: 564,
      height: 482,
    },
    title: {
      es: '100 sucres · 20 de agosto de 1993',
      en: '100 sucres · 20 August 1993',
    },
    kicker: {
      es: 'Ecuador · Banco Central · Numeración especial',
      en: 'Ecuador · Central Bank · Fancy serial',
    },
    lead: {
      es: 'Cien sucres de la última década de la moneda nacional: Simón Bolívar al anverso, el escudo al reverso, y el número de serie 00000003.',
      en: 'One hundred sucres from the national currency’s last decade: Simón Bolívar on the face, the arms on the back, and serial number 00000003.',
    },
    description: {
      es: 'El 100 sucres Pick 123Ab, fechado en Quito el 20 de agosto de 1993, pertenece a la emisión 1984–1993 del Banco Central sin nombre de impresor ni la leyenda «Sociedad Anónima». El anverso, en gris verdoso, lleva el retrato de Simón Bolívar de uniforme y la leyenda CIEN SUCRES; el reverso, en violeta, reproduce el escudo nacional —el cóndor, el Chimborazo y el vapor Guayas—. Thomas De La Rue grabó el tipo. Esta pieza de la colección, serie WF, lleva el serial azul 00000003: uno de los primeros números de la tirada, el mismo que ilustra la guía de Notofilia sobre numeración especial.',
      en: 'The 100-sucre Pick 123Ab, dated at Quito 20 August 1993, belongs to the Central Bank’s 1984–1993 issue without a printer’s name or the legend “Sociedad Anónima.” The grey-green face shows Simón Bolívar in uniform and the legend CIEN SUCRES; the violet back reproduces the national arms — the condor, Chimborazo, and the steamer Guayas. Thomas De La Rue engraved the type. This collection piece, series WF, carries the blue serial 00000003: one of the first numbers of the run, the same note that illustrates Notofilia’s guide to fancy serials.',
    },
    frontCaption: {
      es: 'Anverso del 100 sucres, serie WF, serial 00000003: Simón Bolívar, Quito, 20 de agosto de 1993.',
      en: 'Face of the 100-sucre note, series WF, serial 00000003: Simón Bolívar, Quito, 20 August 1993.',
    },
    backCaption: {
      es: 'Reverso del 100 sucres: escudo del Ecuador, CIEN SUCRES y denominación 100.',
      en: 'Back of the 100-sucre note: arms of Ecuador, CIEN SUCRES, and denomination 100.',
    },
    scarcity: {
      es: 'El tipo P#123Ab es común en estado sin circular; Numista lo registra con seriales azules para el 20 de agosto de 1993. Lo excepcional de esta pieza no es el diseño, sino el serial 00000003: una serie baja, de las primeras de la plancha WF, buscada por coleccionistas de numeración especial.',
      en: 'Type P#123Ab is common in uncirculated grade; Numista records blue serials for 20 August 1993. What is exceptional here is not the design but serial 00000003: a low number, among the first of plate WF, sought by fancy-serial collectors.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, en funda, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, sleeved, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/209287',
        es: 'Numista — 100 sucres (P#123Ab)',
        en: 'Numista — 100 sucres (P#123Ab)',
      },
      {
        href: 'https://www.cosio.uk/ecuador-p-123ab-100-sucres-1993-unc/',
        es: 'Cosio — Ecuador P-123Ab / 100 sucres 1993',
        en: 'Cosio — Ecuador P-123Ab / 100 sucres 1993',
        note: {
          es: 'Impresor TDLR; 156 × 68 mm; anverso Bolívar, reverso escudo.',
          en: 'Printer TDLR; 156 × 68 mm; Bolívar on the face, arms on the back.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    collectionLink: 'Ecuador',
    frontHeading: 'Anverso y reverso',
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
    collectionLink: 'Ecuador',
    frontHeading: 'Face and back',
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

export function noteById(id: string): EcuadorNote | undefined {
  return ecuadorNotes.find((note) => note.id === id);
}

export function notePath(note: EcuadorNote, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${note.path}` : note.path;
}

export const ecuadorNoteSlugs = ecuadorNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${ECUADOR_PATH}` : ECUADOR_PATH;
}

export function chapterHref(id: EcuadorChapterId): string {
  return `#${id}`;
}

export const dedicatedCatalogPaths = new Set<string>(['coleccion/ecuador', ...ecuadorNoteSlugs]);
