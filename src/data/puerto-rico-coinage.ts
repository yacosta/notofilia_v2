import type { CatalogSource, LocalizedText } from './catalog';

const PUERTO_RICO_NOTES_PATH = '/coleccion/puerto-rico/';
const PUERTO_RICO_NOTES_PATH_EN = '/en/collection/puerto-rico/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const PUERTO_RICO_COINAGE_PATH = '/coleccion/puerto-rico-numismatica/';
export const PUERTO_RICO_COINAGE_PATH_EN = '/collection/puerto-rico-numismatics/';

export type PuertoRicoCoinageChapterId = 'peso-provincial' | 'madrid-pgv' | 'alfonso-xiii';

export type PuertoRicoCoinageChapter = {
  id: PuertoRicoCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const puertoRicoCoinageChapters: PuertoRicoCoinageChapter[] = [
  {
    id: 'peso-provincial',
    years: { es: '1895–1896', en: '1895–1896' },
    title: {
      es: 'El peso provincial',
      en: 'The provincial peso',
    },
    lead: {
      es: 'La única moneda labrada para uso exclusivo de Puerto Rico: cinco valores de plata, de 1895 y 1896, para sustituir el peso mexicano.',
      en: 'The only coinage struck for Puerto Rico’s exclusive use: five silver denominations, dated 1895 and 1896, to replace the Mexican peso.',
    },
    body: {
      es: 'A finales del siglo XIX la isla vivía de plata ajena: pesos mexicanos, macuquinas y monedas contramarcadas. El Real Decreto de 17 de agosto de 1895 ordenó recogerla a cambio del Billete de Canje de 1 peso y acuñar en Madrid una moneda provincial. Salieron cinco valores: 1 peso de 1895 (8.500.000 piezas), 40 centavos de 1896 (725.000), 20 centavos de 1895 (3.350.000), 10 centavos de 1896 (700.000) y 5 centavos de 1896 (600.000), según la tabla de Wikipedia en español. El peso se labró en plata .900; los divisores, en plata .835. El 20 centavos es el único divisor fechado en 1895 y el de mayor tirada después del peso.',
      en: 'By the late nineteenth century the island ran on foreign silver: Mexican pesos, macuquinas, and countermarked coin. The royal decree of 17 August 1895 ordered it gathered in exchange for the 1-peso exchange note and a provincial coinage struck in Madrid. Five denominations followed: the 1 peso of 1895 (8,500,000 pieces), 40 centavos of 1896 (725,000), 20 centavos of 1895 (3,350,000), 10 centavos of 1896 (700,000), and 5 centavos of 1896 (600,000), per the table in Spanish Wikipedia. The peso was struck in .900 silver; the fractions in .835 silver. The 20 centavos is the only fraction dated 1895 and, after the peso, the largest mintage.',
    },
  },
  {
    id: 'madrid-pgv',
    years: { es: '1895', en: '1895' },
    title: {
      es: 'Madrid y P·G·V',
      en: 'Madrid and P·G·V',
    },
    lead: {
      es: 'La moneda provincial se labró en Madrid. El disco no lleva marca de ceca: la firma de la casa son las iniciales P·G· y ·V· al pie del reverso.',
      en: 'The provincial coinage was struck in Madrid. The disc carries no mint mark: the house signature is the initials P·G· and ·V· at the foot of the reverse.',
    },
    body: {
      es: 'P y G son los ensayadores; V, el fiel de balanza. El archivo de Ruymán los nombra Félix Miguel Peiró Rodrigo, Antonio García González y Remigio Vega Vega; Numista abrevia Peiró, García y Vega. Las mismas iniciales firman la peseta peninsular de esos años, de modo que P·G·V no distingue por sí sola una pieza de Puerto Rico: lo hace la orla ISLA DE PUERTO RICO y el valor en centavos. Bajo el busto, B·M es la firma del grabador Bartolomé Maura y Montaner, a quien Documenta & Instrumenta atribuye también el diseño del Billete de Canje de 1895.',
      en: 'P and G are the assayers; V, the weigh master. The Ruymán archive names them Félix Miguel Peiró Rodrigo, Antonio García González, and Remigio Vega Vega; Numista abbreviates Peiró, García, and Vega. The same initials sign the peninsular peseta of those years, so P·G·V alone does not mark a Puerto Rican piece: the ISLA DE PUERTO RICO legend and the centavo value do. Below the bust, B·M is the signature of engraver Bartolomé Maura y Montaner, to whom Documenta & Instrumenta also attributes the design of the 1895 exchange note.',
    },
  },
  {
    id: 'alfonso-xiii',
    years: { es: '1886–1898', en: '1886–1898' },
    title: {
      es: 'Alfonso XIII niño',
      en: 'The boy Alfonso XIII',
    },
    lead: {
      es: 'Alfonso XIII fue rey desde su nacimiento, en 1886. En 1895 tenía nueve años: su busto infantil a la izquierda acompañó el final de la soberanía española en la isla.',
      en: 'Alfonso XIII was king from birth, in 1886. In 1895 he was nine: his child’s bust facing left saw out Spanish sovereignty on the island.',
    },
    body: {
      es: 'La leyenda abrevia ALFONSO XIII P(OR) L(A) G(RACIA) D(E) D(IOS) REY C(ONSTITUCIONAL) DE ESPAÑA: «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Numista fecha el tipo en el reinado de Alfonso XIII para Puerto Rico (1886–1898). Tres años después de la acuñación, el Tratado de París cedió la isla a los Estados Unidos. La plata provincial siguió circulando un tiempo junto al dólar; Numista la da por desmonetizada el 12 de abril de 1900.',
      en: 'The legend abbreviates ALFONSO XIII P(OR) L(A) G(RACIA) D(E) D(IOS) REY C(ONSTITUCIONAL) DE ESPAÑA: “Alfonso XIII, by the grace of God, constitutional king of Spain.” Numista dates the type within Alfonso XIII’s reign over Puerto Rico (1886–1898). Three years after striking, the Treaty of Paris ceded the island to the United States. The provincial silver kept circulating for a time beside the dollar; Numista records it as demonetized on 12 April 1900.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
    es: 'Wikipedia — Peso provincial de Puerto Rico',
    en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
    note: {
      es: 'Cinco valores, acuñación en Madrid y tabla de cantidades acuñadas por valor y año.',
      en: 'Five denominations, striking in Madrid, and the mintage table by value and year.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Currencies_of_Puerto_Rico',
    es: 'Wikipedia — Currencies of Puerto Rico',
    en: 'Wikipedia — Currencies of Puerto Rico',
    note: {
      es: 'Ley .835 para los divisores y .900 para el peso; grabador B.M., Bartolomé Maura y Montaner.',
      en: '.835 fineness for the fractions and .900 for the peso; engraver B.M., Bartolomé Maura y Montaner.',
    },
  },
  {
    href: 'https://web.archive.org/web/20100203023106/http:/ruyman.eu/serieprovincial.htm',
    es: 'Ruymán (archivo) — Serie, Peso Provincial de P.R., Alfonso XIII (1895–1896)',
    en: 'Ruymán (archive) — Provincial Peso series of P.R., Alfonso XIII (1895–1896)',
    note: {
      es: 'Nombres de los oficiales P, G y V y del grabador B·M.',
      en: 'Names of officials P, G, and V and of engraver B·M.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Puerto Rico · Numismática | Notofilia',
    metaDescription:
      'Moneda provincial de Puerto Rico: el 20 centavos de plata de Alfonso XIII, 1895, oficiales P·G·V, acuñado en Madrid (KM#22).',
    kicker: 'Puerto Rico · Numismática',
    title: 'El peso provincial de 1895',
    heroAlt:
      'Mapa vintage panorámico en relieve 3D de Puerto Rico sobre pergamino, con El Morro, Viejo San Juan, un coquí, una rosa de los vientos y el título Puerto Rico',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En Puerto Rico las dos historias se cruzan en 1895: el Billete de Canje recogió la plata mexicana y la moneda provincial, labrada en Madrid, ocupó su lugar.',
      'Esta vitrina abre con un 20 centavos de plata de ese año, con el busto niño de Alfonso XIII y las iniciales P·G·V. Es la única serie de moneda hecha para uso exclusivo de la isla.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Tres capítulos, de izquierda a derecha: el peso provincial, Madrid y P·G·V, y Alfonso XIII niño. Encima, la ficha del 20 centavos de 1895 documentado en esta colección.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de Puerto Rico, incluido el Billete de Canje de 1895, se documenta en la vitrina de notafilia.',
    notesLink: 'Puerto Rico · Emisiones coloniales y de transición',
  },
  en: {
    metaTitle: 'Puerto Rico · Numismatics | Notofilia',
    metaDescription:
      'Puerto Rico’s provincial coinage: Alfonso XIII’s silver 20 centavos, 1895, officials P·G·V, struck in Madrid (KM#22).',
    kicker: 'Puerto Rico · Numismatics',
    title: 'The 1895 provincial peso',
    heroAlt:
      'Vintage panoramic 3D relief map of Puerto Rico on parchment, with El Morro, Old San Juan, a coquí, a compass rose, and the title Puerto Rico',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In Puerto Rico the two stories meet in 1895: the exchange note gathered the Mexican silver, and the provincial coinage, struck in Madrid, took its place.',
      'This case opens with a silver 20 centavos of that year, with the boy Alfonso XIII’s bust and the initials P·G·V. It is the only coinage series made for the island’s exclusive use.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Three chapters, left to right: the provincial peso, Madrid and P·G·V, and the boy Alfonso XIII. Above, the record of the 1895 20 centavos documented in this collection.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'Puerto Rico’s paper money, including the 1895 exchange note, is documented in the notaphily case.',
    notesLink: 'Puerto Rico · Colonial and transition issues',
  },
} as const;

export type PuertoRicoCoinId = '20-centavos-1895-pgv';

export type PuertoRicoCoin = {
  id: PuertoRicoCoinId;
  path: string;
  pathEn: string;
  chapterId: PuertoRicoCoinageChapterId;
  year: string;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  references: string;
  grade: LocalizedText;
  no_serial_reason: string;
  images: {
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

export const puertoRicoCoins: PuertoRicoCoin[] = [
  {
    id: '20-centavos-1895-pgv',
    path: '/coleccion/puerto-rico-numismatica/20-centavos-1895-pgv/',
    pathEn: '/en/collection/puerto-rico-numismatics/20-centavos-1895-pgv/',
    chapterId: 'peso-provincial',
    year: '1895',
    mint: {
      es: 'Madrid; sin marca de ceca. Oficiales P·G·V',
      en: 'Madrid; no mint mark. Officials P·G·V',
    },
    denomination: {
      es: '20 centavos de peso provincial',
      en: '20 centavos of the provincial peso',
    },
    composition: {
      es: 'Plata .835 (especificación de tipo Numista / Greysheet; no es un ensayo de este ejemplar)',
      en: 'Silver .835 (Numista / Greysheet type specification; not an assay of this specimen)',
    },
    weight: {
      es: 'No pesado. Tipo: 5 g (Numista, Greysheet).',
      en: 'Not weighed. Type: 5 g (Numista, Greysheet).',
    },
    diameter: {
      es: 'No medido. Tipo: 23 mm (Numista, Greysheet).',
      en: 'Not measured. Type: 23 mm (Numista, Greysheet).',
    },
    edge: {
      es: 'Estriado (especificación de tipo Greysheet). El canto de este ejemplar no se fotografió.',
      en: 'Reeded (Greysheet type specification). This specimen’s edge was not photographed.',
    },
    references: 'KM#22 · Numista N#17451 · PCGS#976911',
    grade: {
      es: 'Sin encapsular. Desgaste de circulación en el cabello y en las armas; rayas finas en los campos. Leyendas y fecha legibles. No es un grado numérico.',
      en: 'Unslabbed. Circulation wear to the hair and arms; fine hairlines in the fields. Legends and date readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Puerto Rican provincial silver 20 centavos: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-composite.jpg',
      front: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-front.jpg',
      back: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    title: {
      es: '20 centavos · Alfonso XIII · 1895 PGV',
      en: '20 Centavos · Alfonso XIII · 1895 PGV',
    },
    kicker: {
      es: 'Puerto Rico · Moneda provincial',
      en: 'Puerto Rico · Provincial coinage',
    },
    lead: {
      es: '20 centavos de plata de la moneda provincial de Puerto Rico, 1895, con el busto niño de Alfonso XIII y las iniciales P·G·V. Acuñado en Madrid. Sin serial y sin encapsular.',
      en: 'Silver 20 centavos of Puerto Rico’s provincial coinage, 1895, with the boy Alfonso XIII’s bust and the initials P·G·V. Struck in Madrid. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es un 20 centavos de plata de la moneda provincial de Puerto Rico, fechado en 1895. El anverso muestra el busto de Alfonso XIII niño a la izquierda, con la leyenda ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA y la fecha 1895 entre estrellas bajo el corte del cuello; allí mismo van las iniciales B·M del grabador Bartolomé Maura y Montaner. El reverso lleva las armas de España coronadas entre las columnas de Hércules, con la cinta PLUS ULTRA, la orla ISLA DE PUERTO RICO arriba y 20 CENTAVOS abajo, flanqueado por P·G· a la izquierda y ·V· a la derecha. El disco no lleva leyenda de ley. Krause lo cataloga como KM#22; Numista, como N#17451; PCGS, con el número 976911. Numista y Greysheet dan plata .835, 5 g, 23 mm y canto estriado como cifras de tipo; no se midieron en este ejemplar. Las fotografías son del objeto, giradas a posición de lectura y sin recorte; no establecen el eje de cuños.',
      en: 'This piece is a silver 20 centavos of Puerto Rico’s provincial coinage, dated 1895. The obverse shows the bust of the boy Alfonso XIII facing left, with the legend ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA and the date 1895 between stars below the neck truncation, where the initials B·M of engraver Bartolomé Maura y Montaner also sit. The reverse carries the crowned arms of Spain between the Pillars of Hercules, with the PLUS ULTRA ribbon, the legend ISLA DE PUERTO RICO above and 20 CENTAVOS below, flanked by P·G· at left and ·V· at right. The disc carries no fineness legend. Krause catalogs it as KM#22; Numista as N#17451; PCGS under number 976911. Numista and Greysheet give .835 silver, 5 g, 23 mm, and a reeded edge as type figures; they were not measured on this specimen. The photographs are of the object, turned upright and uncropped; they do not establish die axis.',
    },
    history: {
      es: 'El Real Decreto de 17 de agosto de 1895 cambió la plata mexicana de la isla por el Billete de Canje de 1 peso, y ese papel, por moneda provincial labrada en Madrid. El 20 centavos fue el único divisor de 1895; el 5, el 10 y el 40 centavos llevan fecha de 1896. Tras el Tratado de París de 1898 la plata provincial convivió con el dólar hasta su retiro; Numista la da por desmonetizada el 12 de abril de 1900. No se publica aquí un martillo ni un censo de encapsulados.',
      en: 'The royal decree of 17 August 1895 exchanged the island’s Mexican silver for the 1-peso exchange note, and that paper for provincial coin struck in Madrid. The 20 centavos was the only fraction of 1895; the 5, 10, and 40 centavos are dated 1896. After the 1898 Treaty of Paris the provincial silver ran beside the dollar until withdrawal; Numista records it as demonetized on 12 April 1900. No hammer and no slab census are published here.',
    },
    obverseLegend: {
      es: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ — «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Bajo el busto: B·M.',
      en: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ — “Alfonso XIII, by the grace of God, constitutional king of Spain.” Below the bust: B·M.',
    },
    reverseLegend: {
      es: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 20 CENTAVOS ·V· (oficiales Peiró, García y Vega).',
      en: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 20 CENTAVOS ·V· (officials Peiró, García, and Vega).',
    },
    frontCaption: {
      es: 'Anverso: busto de Alfonso XIII niño a la izquierda; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1895 entre estrellas.',
      en: 'Obverse: bust of the boy Alfonso XIII facing left; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1895 between stars.',
    },
    backCaption: {
      es: 'Reverso: armas de España coronadas entre las columnas de Hércules; ISLA DE PUERTO RICO; P·G· 20 CENTAVOS ·V·.',
      en: 'Reverse: crowned arms of Spain between the Pillars of Hercules; ISLA DE PUERTO RICO; P·G· 20 CENTAVOS ·V·.',
    },
    scarcity: {
      es: 'El 1895 P·G·V es la única fecha del tipo KM#22, no una variedad dentro de una serie larga. Wikipedia en español y Greysheet registran 3.350.000 piezas: la mayor tirada de la moneda provincial después del peso. No se publica un índice de rareza como censo ni precios de subasta.',
      en: 'The 1895 P·G·V is the only date of type KM#22, not a variety within a long run. Spanish Wikipedia and Greysheet record 3,350,000 pieces: the largest mintage of the provincial coinage after the peso. No rarity-index census and no auction prices are published.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —busto de Alfonso XIII niño, 1895, P·G·V—, no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — boy Alfonso XIII bust, 1895, P·G·V — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/17451',
        es: 'Numista — 20 centavos, Alfonso XIII, Puerto Rico 1895 (N#17451)',
        en: 'Numista — 20 Centavos, Alfonso XIII, Puerto Rico 1895 (N#17451)',
        note: {
          es: 'KM#22; plata .835, 5 g, 23 mm; leyendas y oficiales P·G·V; desmonetizada el 12 de abril de 1900. No se republica la tabla de precios.',
          en: 'KM#22; .835 silver, 5 g, 23 mm; legends and officials P·G·V; demonetized 12 April 1900. The price table is not republished.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/1895-20-centavos-puerto-rico-coin/gsid/337554',
        es: 'Greysheet — 1895-PG V 20c Puerto Rico (GSID 337554)',
        en: 'Greysheet — 1895-PG V 20c Puerto Rico (GSID 337554)',
        note: {
          es: 'KM-22, PCGS#976911; plata .835, 5 g, 23 mm, canto estriado; tirada 3.350.000. No se republican precios.',
          en: 'KM-22, PCGS#976911; .835 silver, 5 g, 23 mm, reeded edge; mintage 3,350,000. Prices are not republished.',
        },
      },
      {
        href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
        es: 'Wikipedia — Peso provincial de Puerto Rico',
        en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
        note: {
          es: 'Cantidades acuñadas por valor: 3.350.000 piezas de 20 centavos en 1895.',
          en: 'Mintages by value: 3,350,000 pieces of 20 centavos in 1895.',
        },
      },
      {
        href: 'https://web.archive.org/web/20100203023106/http:/ruyman.eu/serieprovincial.htm',
        es: 'Ruymán (archivo) — Serie, Peso Provincial de P.R., Alfonso XIII (1895–1896)',
        en: 'Ruymán (archive) — Provincial Peso series of P.R., Alfonso XIII (1895–1896)',
        note: {
          es: 'P y G, ensayadores; V, fiel de balanza; B·M, Bartolomé Maura y Montaner.',
          en: 'P and G, assayers; V, weigh master; B·M, Bartolomé Maura y Montaner.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Puerto Rico · Numismática',
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
      'Un 20 centavos de plata de 1895, oficiales P·G·V, sin encapsular. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead: 'Otra pieza de la colección de Puerto Rico.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Puerto Rico · Numismatics',
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
      'One unslabbed silver 20 centavos of 1895, officials P·G·V. Further coin pages will be published as they are documented.',
    relatedLead: 'Another piece in the Puerto Rico collection.',
  },
} as const;

export function coinById(id: string): PuertoRicoCoin | undefined {
  return puertoRicoCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${PUERTO_RICO_COINAGE_PATH_EN}` : PUERTO_RICO_COINAGE_PATH;
}

export function coinPath(coin: PuertoRicoCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function chapterHref(id: PuertoRicoCoinageChapterId): string {
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? PUERTO_RICO_NOTES_PATH_EN : PUERTO_RICO_NOTES_PATH;
}

export const puertoRicoCoinSlugs = puertoRicoCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const puertoRicoCoinageDedicatedSlugs = [
  PUERTO_RICO_COINAGE_PATH,
  PUERTO_RICO_COINAGE_PATH_EN,
  ...puertoRicoCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
