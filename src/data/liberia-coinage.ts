import type { CatalogSource, LocalizedText } from './catalog';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const LIBERIA_COINAGE_PATH = '/coleccion/liberia-numismatica/';
export const LIBERIA_COINAGE_PATH_EN = '/collection/liberia-numismatics/';

export type LiberiaCoinageChapterId = 'retrocesion-hong-kong';

export type LiberiaCoinageChapter = {
  id: LiberiaCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const liberiaCoinageChapters: LiberiaCoinageChapter[] = [
  {
    id: 'retrocesion-hong-kong',
    years: { es: '1997', en: '1997' },
    title: {
      es: 'La retrocesión de Hong Kong',
      en: 'The Hong Kong handover',
    },
    lead: {
      es: 'El 1 de julio de 1997 Hong Kong dejó la administración británica, pasó a la soberanía china y quedó constituida la Región Administrativa Especial.',
      en: 'On 1 July 1997 Hong Kong left British administration, passed to Chinese sovereignty, and the Special Administrative Region was established.',
    },
    body: {
      es: 'El anuario oficial de Hong Kong describe la ceremonia de traspaso, iniciada la noche del 30 de junio, y la constitución de la Región Administrativa Especial en la madrugada del 1 de julio. Liberia no acuñó esta pieza para su circulación ordinaria. Numista registra la misma conmemoración en 1 dólar (N#31953, KM#313), 10 dólares redondos (N#84825, KM#314) y 100 dólares (N#449709, KM#317, Fr#61). En esas fichas la marca PM es la Pobjoy Mint, de Surrey. Esta moneda lee 20 DOLLARS y $20: no es ninguna de esas tres, y sus pesos, diámetros, leyes y tiradas no se le aplican.',
      en: 'Hong Kong’s official yearbook describes the handover ceremony, begun on the night of 30 June, and the establishment of the Special Administrative Region in the early hours of 1 July. Liberia did not strike this piece for ordinary circulation. Numista records the same commemoration as a 1 dollar (N#31953, KM#313), a round 10 dollars (N#84825, KM#314), and a 100 dollars (N#449709, KM#317, Fr#61). On those pages the mark PM is the Pobjoy Mint, Surrey. This coin reads 20 DOLLARS and $20: it is none of those three, and their weights, diameters, fineness, and mintages are not applied to it.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.yearbook.gov.hk/1997/ch2/e2a.htm',
    es: 'Hong Kong Yearbook 1997 — The Handover and Related Ceremonies',
    en: 'Hong Kong Yearbook 1997 — The Handover and Related Ceremonies',
    note: {
      es: 'El 1 de julio de 1997 comienza la Región Administrativa Especial y termina la administración británica.',
      en: '1 July 1997 begins the Special Administrative Region and ends British administration.',
    },
  },
  {
    href: 'https://en.numista.com/449709',
    es: 'Numista — 100 dólares, retrocesión de Hong Kong, Liberia 1997 (N#449709)',
    en: 'Numista — 100 Dollars, Handover of Hong Kong, Liberia 1997 (N#449709)',
    note: {
      es: 'Pieza vecina de oro, KM#317 y Fr#61, con $100. No es esta moneda de 20 dólares. No se trasladan peso, diámetro, ley ni tirada.',
      en: 'A related gold piece, KM#317 and Fr#61, with $100. It is not this 20-dollar coin. Weight, diameter, fineness, and mintage are not carried over.',
    },
  },
  {
    href: 'https://en.numista.com/84825',
    es: 'Numista — 10 dólares, retrocesión de Hong Kong, Liberia 1997 (N#84825)',
    en: 'Numista — 10 Dollars, Handover of Hong Kong, Liberia 1997 (N#84825)',
    note: {
      es: 'Pieza vecina, KM#314, con dragón, caracteres chinos y marca PM. El valor impreso es $10, no $20.',
      en: 'A related piece, KM#314, with a dragon, Chinese characters, and the PM mark. The printed value is $10, not $20.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Liberia · Numismática | Notofilia',
    metaDescription:
      '20 dólares de Liberia, 1997: escudo nacional y dragón chino de la retrocesión de Hong Kong. Metal, peso, diámetro y KM sin confirmar.',
    kicker: 'Liberia · Numismática',
    title: 'La retrocesión de Hong Kong, 1997',
    heroAlt:
      'Anverso y reverso del 20 dólares de Liberia de 1997: escudo nacional con la fecha partida y dragón chino con la leyenda de Hong Kong, sobre fondo blanco',
    intro: [
      'La Colección Virtual abre Liberia con una moneda no circulante de 1997. El anverso lleva el escudo de la República, el lema nacional y la fecha partida 19–97. El reverso muestra un dragón chino, la leyenda de la retrocesión de Hong Kong y el valor $20.',
      'El color dorado no fija la aleación. La marca PM, leída junto a la fecha, es la de la Pobjoy Mint en las piezas vecinas de la misma conmemoración. El número Krause, el peso, el diámetro y la tirada de este 20 dólares siguen sin confirmar.',
    ],
    sourcesTitle: 'Fuentes',
    parentLink: 'Numismática',
  },
  en: {
    metaTitle: 'Liberia · Numismatics | Notofilia',
    metaDescription:
      'Liberia 20 dollars, 1997: national arms and a Chinese dragon for the Hong Kong handover. Metal, weight, diameter, and KM unconfirmed.',
    kicker: 'Liberia · Numismatics',
    title: 'The Hong Kong handover, 1997',
    heroAlt:
      'Obverse and reverse of the Liberia 20 dollars of 1997: national arms with a divided date and a Chinese dragon with the Hong Kong legend, on a white ground',
    intro: [
      'The Virtual Collection opens Liberia with a 1997 non-circulating coin. The obverse carries the Republic’s arms, the national motto, and the divided date 19–97. The reverse shows a Chinese dragon, the Hong Kong handover legend, and the value $20.',
      'The gold color does not fix the alloy. The PM mark, read beside the date, is the Pobjoy Mint’s mark on the related pieces of the same commemoration. The Krause number, weight, diameter, and mintage of this 20 dollars remain unconfirmed.',
    ],
    sourcesTitle: 'Sources',
    parentLink: 'Numismatics',
  },
} as const;

export type LiberiaCoinId = '20-dolares-1997-dragon-hong-kong';

export type LiberiaCoin = {
  id: LiberiaCoinId;
  path: string;
  pathEn: string;
  chapterId: LiberiaCoinageChapterId;
  year: string;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  references: string;
  referencesNote?: LocalizedText;
  grade: LocalizedText;
  no_serial_reason: string;
  images?: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
    faceWidth: number;
    faceHeight: number;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  history: LocalizedText;
  obverseLegend: LocalizedText;
  reverseLegend: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  certification: LocalizedText;
  sources: CatalogSource[];
};

export const liberiaCoins: LiberiaCoin[] = [
  {
    id: '20-dolares-1997-dragon-hong-kong',
    path: '/coleccion/liberia-numismatica/20-dolares-1997-dragon-hong-kong/',
    pathEn: '/en/collection/liberia-numismatics/20-dollars-1997-dragon-hong-kong/',
    chapterId: 'retrocesion-hong-kong',
    year: '1997',
    mint: {
      es: 'Marca PM, leída junto a la fecha partida. En las piezas vecinas de 1997, PM es la Pobjoy Mint (Surrey).',
      en: 'PM mark, read beside the divided date. On the related 1997 pieces, PM is the Pobjoy Mint (Surrey).',
    },
    denomination: {
      es: '20 dólares',
      en: '20 dollars',
    },
    composition: {
      es: 'No determinada. El color dorado de la fotografía no fija la aleación.',
      en: 'Not established. The gold color in the photograph does not fix the alloy.',
    },
    weight: {
      es: 'No pesado.',
      en: 'Not weighed.',
    },
    diameter: {
      es: 'No medido.',
      en: 'Not measured.',
    },
    edge: {
      es: 'No fotografiado.',
      en: 'Not photographed.',
    },
    references: 'KM sin asignar',
    referencesNote: {
      es: 'Numista documenta la conmemoración en N#31953 (KM#313, 1 dólar), N#84825 (KM#314, 10 dólares) y N#449709 (KM#317, Fr#61, 100 dólares). Ninguna de esas fichas es un 20 dólares con este reverso. No se asigna KM#317 ni Fr#61.',
      en: 'Numista documents the commemoration as N#31953 (KM#313, 1 dollar), N#84825 (KM#314, 10 dollars), and N#449709 (KM#317, Fr#61, 100 dollars). None of those pages is a 20 dollars with this reverse. KM#317 and Fr#61 are not assigned.',
    },
    grade: {
      es: 'Fotografiada en cápsula. Campos reflectantes; rayas y reflejos de la cápsula impiden un grado numérico.',
      en: 'Photographed in a capsule. Reflective fields; capsule scratches and glare prevent a numerical grade.',
    },
    no_serial_reason:
      'Milled Liberia 1997 20-dollar commemorative: the type does not carry a serial number, and this example has no certification number.',
    images: {
      composite: '/images/catalog/liberia/liberia-1997-20-dollars-hong-kong-dragon-composite.png',
      front: '/images/catalog/liberia/liberia-1997-20-dollars-hong-kong-dragon-front.png',
      back: '/images/catalog/liberia/liberia-1997-20-dollars-hong-kong-dragon-back.png',
      width: 1672,
      height: 941,
      faceWidth: 1672,
      faceHeight: 941,
    },
    title: {
      es: '20 dólares · Retrocesión de Hong Kong · 1997',
      en: '20 dollars · Hong Kong handover · 1997',
    },
    kicker: {
      es: 'Liberia · Numismática',
      en: 'Liberia · Numismatics',
    },
    lead: {
      es: '20 dólares de la República de Liberia, 1997, con el escudo nacional, la fecha partida y un dragón chino. Conmemora la retrocesión de Hong Kong. Sin serial y sin certificado.',
      en: '20 dollars of the Republic of Liberia, 1997, with the national arms, a divided date, and a Chinese dragon. It commemorates the Hong Kong handover. No serial and no certificate.',
    },
    description: {
      es: 'Esta pieza es un 20 dólares de la República de Liberia, fechado en 1997. El anverso muestra el escudo nacional bajo la cinta THE LOVE OF LIBERTY BROUGHT US HERE, la orla REPUBLIC OF LIBERIA, la fecha partida 19 y 97, la marca PM y, al pie, 20 DOLLARS. El reverso lleva un dragón chino, la leyenda 一九九七香港回歸紀念, los caracteres 香 y 港 a los lados y $20 al pie. No se lee en la fotografía una ley de fino que pueda citarse. Las fotos conservan el marco completo, con las rayas de la cápsula que cruzan los diseños. No establecen el eje de cuños.',
      en: 'This piece is a 20 dollars of the Republic of Liberia, dated 1997. The obverse shows the national arms under the ribbon THE LOVE OF LIBERTY BROUGHT US HERE, the legend REPUBLIC OF LIBERIA, the divided date 19 and 97, the PM mark, and, at the foot, 20 DOLLARS. The reverse carries a Chinese dragon, the legend 一九九七香港回歸紀念, the characters 香 and 港 at the sides, and $20 at the foot. No fineness line that can be quoted is read in the photograph. The photographs keep the full frame, including the capsule scratches that cross the designs. They do not establish die axis.',
    },
    history: {
      es: 'El 1 de julio de 1997 Hong Kong pasó de la administración británica a la soberanía de la República Popular China y se constituyó la Región Administrativa Especial, según el anuario oficial de ese año. La leyenda del reverso, 一九九七香港回歸紀念, lee esa retrocesión. Liberia emitió monedas no circulantes de la misma fecha con otros valores. Esta ficha se queda en el 20 dólares fotografiado.',
      en: 'On 1 July 1997 Hong Kong passed from British administration to the sovereignty of the People’s Republic of China and the Special Administrative Region was established, according to that year’s official yearbook. The reverse legend, 一九九七香港回歸紀念, reads that handover. Liberia issued non-circulating coins of the same date in other denominations. This record stays with the photographed 20 dollars.',
    },
    obverseLegend: {
      es: 'REPUBLIC OF LIBERIA · THE LOVE OF LIBERTY BROUGHT US HERE · 19 97 · PM · 20 DOLLARS. «La República de Liberia. El amor a la libertad nos trajo aquí.»',
      en: 'REPUBLIC OF LIBERIA · THE LOVE OF LIBERTY BROUGHT US HERE · 19 97 · PM · 20 DOLLARS. “The love of liberty brought us here.”',
    },
    reverseLegend: {
      es: '一九九七香港回歸紀念 · 香 / 港 · $20. «Conmemoración de la retrocesión de Hong Kong, 1997.»',
      en: '一九九七香港回歸紀念 · 香 / 港 · $20. “Commemoration of Hong Kong’s return, 1997.”',
    },
    frontCaption: {
      es: 'Anverso: escudo de Liberia, lema THE LOVE OF LIBERTY BROUGHT US HERE, fecha partida 19–97, marca PM y 20 DOLLARS.',
      en: 'Obverse: arms of Liberia, motto THE LOVE OF LIBERTY BROUGHT US HERE, divided date 19–97, PM mark, and 20 DOLLARS.',
    },
    backCaption: {
      es: 'Reverso: dragón chino, leyenda 一九九七香港回歸紀念, caracteres 香 y 港, y $20.',
      en: 'Reverse: Chinese dragon, legend 一九九七香港回歸紀念, characters 香 and 港, and $20.',
    },
    scarcity: {
      es: 'No hay un número Krause ni una tirada publicados para este 20 dólares. La tirada del 100 dólares vecino (5.000 piezas en Numista N#449709) y la del 10 dólares (25.000 en N#84825) no se trasladan. No se publica un censo ni un precio.',
      en: 'No Krause number and no mintage are published for this 20 dollars. The mintage of the related 100 dollars (5,000 pieces on Numista N#449709) and of the 10 dollars (25,000 on N#84825) are not carried over. No census and no price are published.',
    },
    certification: {
      es: 'La pieza está fotografiada dentro de una cápsula, sin número de certificado de una casa de gradación. El tipo no lleva número de serie. La identidad de la ficha es el objeto fotografiado: escudo de Liberia, 1997, 20 DOLLARS, dragón y leyenda de Hong Kong. Si más adelante se encapsula con certificado, ese número sustituirá a esta nota.',
      en: 'The piece is photographed inside a capsule, with no certificate number from a grading service. The type carries no serial number. The identity of this record is the photographed object: arms of Liberia, 1997, 20 DOLLARS, dragon, and Hong Kong legend. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.yearbook.gov.hk/1997/ch2/e2a.htm',
        es: 'Hong Kong Yearbook 1997 — The Handover and Related Ceremonies',
        en: 'Hong Kong Yearbook 1997 — The Handover and Related Ceremonies',
        note: {
          es: 'El 1 de julio de 1997 se constituye la Región Administrativa Especial.',
          en: 'On 1 July 1997 the Special Administrative Region is established.',
        },
      },
      {
        href: 'https://en.numista.com/31953',
        es: 'Numista — 1 dólar, retrocesión de Hong Kong, Liberia 1997 (N#31953)',
        en: 'Numista — 1 Dollar, Handover of Hong Kong, Liberia 1997 (N#31953)',
        note: {
          es: 'KM#313. Misma conmemoración y marca PM. El valor es 1 dólar, no 20.',
          en: 'KM#313. Same commemoration and PM mark. The value is 1 dollar, not 20.',
        },
      },
      {
        href: 'https://en.numista.com/84825',
        es: 'Numista — 10 dólares, retrocesión de Hong Kong, Liberia 1997 (N#84825)',
        en: 'Numista — 10 Dollars, Handover of Hong Kong, Liberia 1997 (N#84825)',
        note: {
          es: 'KM#314. Dragón, caracteres chinos y PM. El valor impreso es $10.',
          en: 'KM#314. Dragon, Chinese characters, and PM. The printed value is $10.',
        },
      },
      {
        href: 'https://en.numista.com/449709',
        es: 'Numista — 100 dólares, retrocesión de Hong Kong, Liberia 1997 (N#449709)',
        en: 'Numista — 100 Dollars, Handover of Hong Kong, Liberia 1997 (N#449709)',
        note: {
          es: 'KM#317 y Fr#61. Oro, $100 y leyenda de fino. No se asignan a este 20 dólares.',
          en: 'KM#317 and Fr#61. Gold, $100, and a fineness legend. They are not assigned to this 20 dollars.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Liberia · Numismática',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    historyHeading: 'Historia',
    legendsHeading: 'Leyendas',
    scarcityHeading: 'Rareza y tipo',
    certificationHeading: 'Certificación',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    yearLabel: 'Año',
    mintLabel: 'Ceca',
    denominationLabel: 'Denominación',
    compositionLabel: 'Composición',
    weightLabel: 'Peso',
    diameterLabel: 'Diámetro',
    edgeLabel: 'Canto',
    referencesLabel: 'Referencias',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    viewCoin: 'Ver la ficha',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Un 20 dólares de 1997 con el dragón de la retrocesión de Hong Kong, sin serial y sin certificado. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead: 'Otra pieza de la colección de Liberia.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Liberia · Numismatics',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The coin',
    historyHeading: 'History',
    legendsHeading: 'Legends',
    scarcityHeading: 'Scarcity and type',
    certificationHeading: 'Certification',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    yearLabel: 'Year',
    mintLabel: 'Mint',
    denominationLabel: 'Denomination',
    compositionLabel: 'Composition',
    weightLabel: 'Weight',
    diameterLabel: 'Diameter',
    edgeLabel: 'Edge',
    referencesLabel: 'References',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    viewCoin: 'Open the coin page',
    holdingsTitle: 'Coins in the collection',
    holdingsIntro:
      'A 1997 20 dollars with the Hong Kong handover dragon, with no serial and no certificate. Further coin pages will be published as they are documented.',
    relatedLead: 'Another piece in the Liberia collection.',
  },
} as const;

export function coinById(id: string): LiberiaCoin | undefined {
  return liberiaCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${LIBERIA_COINAGE_PATH_EN}` : LIBERIA_COINAGE_PATH;
}

export function coinPath(coin: LiberiaCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export const liberiaCoinSlugs = liberiaCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const liberiaCoinageDedicatedSlugs = [
  LIBERIA_COINAGE_PATH,
  LIBERIA_COINAGE_PATH_EN,
  ...liberiaCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
