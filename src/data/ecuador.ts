import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

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
      es: 'Edwin W. Kemmerer —el mismo que había asesorado a Colombia en 1923— desembarcó en Salinas el 17 de octubre de 1926. El 11 de febrero de 1927 entregó el proyecto de Ley Orgánica del Banco Central; Isidro Ayora la firmó el 4 de marzo (Decreto Supremo 253). La escritura de constitución es del 9 de julio; el banco abrió el 10 de agosto de 1927, fecha que el propio BCE toma como fundación. La Ley de Monedas del 19 de marzo fijó el patrón oro a cinco sucres por dólar. Desde entonces el retrato de próceres —Sucre, Bolívar, Rocafuerte, Alfaro— ocupó el anverso de las series de circulación, grabadas sobre todo por Thomas De La Rue. Las fichas de esa época se publicarán a medida que se documenten las piezas.',
      en: 'Edwin W. Kemmerer — the same adviser Colombia had hired in 1923 — landed at Salinas on 17 October 1926. On 11 February 1927 he delivered the draft Organic Law of the Central Bank; Isidro Ayora signed it on 4 March (Supreme Decree 253). The deed of incorporation is dated 9 July; the bank opened on 10 August 1927, the foundation date the BCE itself uses. The Monetary Law of 19 March set the gold standard at five sucres to the dollar. From then on portraits of national figures — Sucre, Bolívar, Rocafuerte, Alfaro — occupied the face of circulating series, engraved chiefly by Thomas De La Rue. Note pages from that period will be published as pieces are documented.',
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
];

export const seriesCopy = {
  es: {
    metaTitle: 'Ecuador · Del sucre a la dolarización | Notofilia',
    metaDescription:
      'Papel moneda ecuatoriano: el sucre de 1884, banca privada, el Banco Central de 1927 y la dolarización. Esta vitrina documenta el 1 sucre del Banco del Ecuador de 1901.',
    kicker: 'Ecuador · Notafilia',
    title: 'Del sucre a la dolarización',
    heroAlt:
      'Mapa vintage en relieve 3D de Ecuador sobre pergamino, con Chimborazo, Cotopaxi, Quito, las islas Galápagos, un pasaporte y el título Ecuador',
    intro: [
      'El papel moneda en Ecuador nació de la banca privada, no de un instituto emisor. El 22 de marzo de 1884 una ley monetaria sustituyó el peso por el sucre, en honor de Antonio José de Sucre. Durante más de sesenta años las casas de Guayaquil y Quito —el Banco del Ecuador (1868), el Comercial y Agrícola, el de Quito— pagaron el comercio con planchas grabadas en Nueva York y Londres, a cambio de una convertibilidad que las crisis de 1914 y de los años veinte pusieron en duda.',
      'La Revolución Juliana de 1925 y la Misión Kemmerer de 1926–1927 cerraron ese capítulo. Isidro Ayora firmó la Ley Orgánica del Banco Central el 4 de marzo de 1927; el banco abrió el 10 de agosto. El patrón oro quedó en cinco sucres por dólar. Desde entonces el retrato de próceres ocupó el anverso de las series de Thomas De La Rue: Sucre, Bolívar, Rocafuerte, Alfaro.',
      'El 9 de enero de 2000, tras la crisis bancaria de 1999, el dólar sustituyó al sucre a 25.000 por 1. El canje de billetes terminó en junio de 2001. Esta vitrina investiga esa trayectoria. Documenta, por ahora, un 1 sucre del Banco del Ecuador fechado en Guayaquil el 1.º de octubre de 1901 (P#S151c, serial K117574). Otras fichas se publicarán a medida que se documenten.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      '1 sucre del Banco del Ecuador, Guayaquil, 1.º de octubre de 1901 (P#S151c, serial K117574). Otras fichas se publicarán a medida que se documenten.',
    holdingsAria: 'Billetes de Ecuador en la colección',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Colección Virtual Notafilia',
  },
  en: {
    metaTitle: 'Ecuador · From the sucre to dollarization | Notofilia',
    metaDescription:
      'Ecuadorian paper money: the 1884 sucre, private banks of issue, the 1927 Central Bank, and dollarization. This case documents a 1901 Banco del Ecuador 1-sucre note.',
    kicker: 'Ecuador · Notaphily',
    title: 'From the sucre to dollarization',
    heroAlt:
      'Vintage 3D relief map of Ecuador on parchment, with Chimborazo, Cotopaxi, Quito, the Galápagos Islands, a passport, and the title Ecuador',
    intro: [
      'Paper money in Ecuador was born of private banking, not of a state issuer. On 22 March 1884 a monetary law replaced the peso with the sucre, named for Antonio José de Sucre. For more than sixty years houses in Guayaquil and Quito — the Banco del Ecuador (1868), the Comercial y Agrícola, the Banco de Quito — paid for trade with plates engraved in New York and London, against a convertibility that the crises of 1914 and the 1920s put in doubt.',
      'The July Revolution of 1925 and the Kemmerer Mission of 1926–1927 closed that chapter. Isidro Ayora signed the Organic Law of the Central Bank on 4 March 1927; the bank opened on 10 August. The gold standard was set at five sucres to the dollar. From then on portraits of national figures occupied the face of Thomas De La Rue series: Sucre, Bolívar, Rocafuerte, Alfaro.',
      'On 9 January 2000, after the 1999 banking crisis, the dollar replaced the sucre at 25,000 to 1. Note exchange ended in June 2001. This case investigates that trajectory. It documents, for now, a Banco del Ecuador 1-sucre dated Guayaquil, 1 October 1901 (P#S151c, serial K117574). Further note pages will follow as pieces are documented.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Banco del Ecuador 1-sucre, Guayaquil, 1 October 1901 (P#S151c, serial K117574). Further note pages will follow as pieces are documented.',
    holdingsAria: 'Ecuador banknotes in the collection',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Virtual Notaphily Collection',
  },
} as const;

export type EcuadorNoteId = '1-sucre-1901';

export type EcuadorNote = {
  id: EcuadorNoteId;
  path: string;
  pick: string;
  serial: string;
  serial_display: string;
  serial_kind: 'low' | 'fancy' | 'ordinary';
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
    frontWidth: number;
    frontHeight: number;
    backWidth: number;
    backHeight: number;
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
    id: '1-sucre-1901',
    path: '/coleccion/ecuador/1-sucre-1901/',
    pick: 'P#S151c',
    serial: 'K117574',
    serial_display: 'K117574',
    serial_kind: 'ordinary',
    signatures: {
      es: 'Dos firmas autógrafas bajo GERENTES; los nombres no se transcriben con certeza a partir de esta fotografía',
      en: 'Two autograph signatures under GERENTES; the names are not transcribed with certainty from this photograph',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Fecha impresa: Guayaquil, 1.º de octubre de 1901. Capital S/. 2.000.000. Esta ficha no inventa una tirada para el tipo ni para el serial K117574.',
      en: 'American Bank Note Company, New York. Printed date: Guayaquil, 1 October 1901. Capital S/. 2,000,000. This record does not invent a printage for the type or for serial K117574.',
    },
    images: {
      composite: '/images/catalog/ecuador/ec-1901-1-sucre-k117574-composite.jpg',
      front: '/images/catalog/ecuador/ec-1901-1-sucre-k117574-front.jpg',
      back: '/images/catalog/ecuador/ec-1901-1-sucre-k117574-back.jpg',
      frontWidth: 960,
      frontHeight: 392,
      backWidth: 960,
      backHeight: 392,
    },
    title: {
      es: '1 sucre · Banco del Ecuador · 1901',
      en: '1 Sucre · Banco del Ecuador · 1901',
    },
    kicker: {
      es: 'Ecuador · Banca privada · Guayaquil',
      en: 'Ecuador · Private bank of issue · Guayaquil',
    },
    lead: {
      es: 'Billete de un sucre del Banco del Ecuador, compañía anónima, pagadero en moneda corriente. Fecha de Guayaquil, 1.º de octubre de 1901; serial K117574 en rojo, dos veces.',
      en: 'One-sucre note of the Banco del Ecuador, a joint-stock company, payable in current coin. Dated Guayaquil, 1 October 1901; red serial K117574 twice.',
    },
    description: {
      es: 'El Banco del Ecuador, fundado en Guayaquil en 1868, fue el emisor privado más duradero del país hasta la creación del banco central. Este 1 sucre pertenece a la emisión en sucres de 1887–1926 que el Bank Note Museum agrupa como Pick S151–S164; el Standard Catalog distingue en el 1 sucre las letras a, b y c. La fecha impresa —Guayaquil, 1.º de octubre de 1901— y el prefijo K coinciden con la variedad S151c, documentada en subasta con otro serial K de ese año. El anverso, en negro sobre fondo salmón y verde, muestra un niño alegórico con caduceo y pez, un velero al fondo, el capital S/. 2.000.000, la promesa «VALE UN SUCRE / EN MONEDA CORRIENTE» y dos firmas de gerentes. El reverso, en verde, centra «BANCO DEL ECUADOR» entre óvalos con el 1; al pie, «AMERICAN BANK NOTE COMPANY, NEW YORK». No es un billete del Banco Central del Ecuador ni del canje de 2000–2001: es papel de banca privada, anterior a la Caja Central de 1926. Esta pieza, sin encapsular, se muestra en estado de circulación.',
      en: 'The Banco del Ecuador, founded in Guayaquil in 1868, was the country’s longest-lived private issuer until the central bank was created. This 1-sucre belongs to the 1887–1926 sucre issue that the Bank Note Museum groups as Pick S151–S164; the Standard Catalog letters the 1-sucre a, b, and c. The printed date — Guayaquil, 1 October 1901 — and the K prefix match variety S151c, recorded at auction on another 1901 K serial. The face, black on a salmon and green underprint, shows an allegorical child with caduceus and fish, a sailing ship behind, capital S/. 2,000,000, the promise “VALE UN SUCRE / EN MONEDA CORRIENTE,” and two managers’ signatures. The green back centers “BANCO DEL ECUADOR” between oval 1s; at the foot, “AMERICAN BANK NOTE COMPANY, NEW YORK.” It is not a Banco Central del Ecuador note, nor paper of the 2000–2001 exchange: it is private-bank paper, earlier than the 1926 Central Fund. This example is unslabbed and shown in circulated condition.',
    },
    frontCaption: {
      es: 'Anverso del 1 sucre P#S151c, serial K117574: niño con caduceo y pez, capital S/. 2.000.000 y fecha de Guayaquil, 1.º de octubre de 1901.',
      en: 'Face of the 1-sucre P#S151c, serial K117574: child with caduceus and fish, capital S/. 2,000,000, and Guayaquil date 1 October 1901.',
    },
    backCaption: {
      es: 'Reverso verde del 1 sucre P#S151c, serial K117574: BANCO DEL ECUADOR y pie de la American Bank Note Company, Nueva York.',
      en: 'Green back of the 1-sucre P#S151c, serial K117574: BANCO DEL ECUADOR and American Bank Note Company, New York imprint.',
    },
    scarcity: {
      es: 'El Bank Note Museum lista el 1 sucre del Banco del Ecuador como PS-151 a, b y c dentro de la emisión en sucres de 1887–1926. La fecha de 1901 con prefijo K se cita como S151c; S151a cubre ejemplares de 1887. No se ha verificado una tirada oficial del tipo ni de esa fecha. Esta ficha no inventa una cifra de impresión.',
      en: 'The Bank Note Museum lists the Banco del Ecuador 1-sucre as PS-151 a, b, and c within the 1887–1926 sucre issue. The 1901 date with K prefix is cited as S151c; S151a covers 1887 examples. No official printage for the type or that date has been verified. This record does not invent a print figure.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para K117574. La pieza se presenta sin encapsular, con pliegues y suciedad de circulación.',
      en: 'A PMG or PCGS census for K117574 has not been independently verified. The note is shown unslabbed, with folds and soil from circulation.',
    },
    grade: {
      es: 'Sin encapsular; pliegues y suciedad de circulación (colección privada)',
      en: 'Unslabbed; folds and circulating soil (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/ECU/ECU-COM.htm',
        es: 'Bank Note Museum — Ecuador, bancos comerciales (Banco del Ecuador, PS-151 a–c)',
        en: 'Bank Note Museum — Ecuador, commercial banks (Banco del Ecuador, PS-151 a–c)',
        note: {
          es: 'Emisión en sucres de 1887–1926; el 1 sucre figura como PS-151 a, b y c.',
          en: '1887–1926 sucre issue; the 1-sucre is listed as PS-151 a, b, and c.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/2372/lot/1528',
        es: 'NumisBids — Spink USA 339, lote 1528 (tipo S151c, 1901, prefijo K)',
        en: 'NumisBids — Spink USA 339, lot 1528 (type S151c, 1901, K prefix)',
        note: {
          es: 'Confirma la atribución S151c a un 1 sucre de 1901 con serial de prefijo K. No es esta pieza (K117574) ni se cita un precio.',
          en: 'Confirms the S151c attribution for a 1901 1-sucre with a K-prefix serial. It is not this piece (K117574), and no price is quoted.',
        },
      },
      {
        href: 'https://www.banknoteworld.org/ecuador-1-sucre-1887-p-s151a.html',
        es: 'Banknote World — Ecuador 1 sucre, P-S151a (variedad de 1887 del mismo tipo)',
        en: 'Banknote World — Ecuador 1 Sucre, P-S151a (1887 variety of the same type)',
        note: {
          es: 'Describe el tipo S151; la letra a es 1887, no la fecha de 1901 de esta ficha.',
          en: 'Describes the S151 type; letter a is 1887, not this record’s 1901 date.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    collectionLink: 'Ecuador',
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
    collectionLink: 'Ecuador',
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

export function noteById(id: string): EcuadorNote | undefined {
  return ecuadorNotes.find((note) => note.id === id);
}

export function notePath(note: EcuadorNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export const ecuadorNoteSlugs = ecuadorNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/ecuador/' : ECUADOR_PATH;
}

export function chapterHref(id: EcuadorChapterId): string {
  return `#${id}`;
}

export const dedicatedCatalogPaths = new Set<string>(['coleccion/ecuador', ...ecuadorNoteSlugs]);
