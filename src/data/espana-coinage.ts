import type { CatalogSource, LocalizedText } from './catalog';

const SPAIN_NOTES_PATH = '/coleccion/espana/';
const SPAIN_NOTES_PATH_EN = '/en/collection/spain/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const SPAIN_COINAGE_PATH = '/coleccion/espana-numismatica/';
export const SPAIN_COINAGE_PATH_EN = '/collection/spain-numismatics/';

export type SpainCoinageChapterId = 'escudo-oro' | 'madrid' | 'fernando-vi';

export type SpainCoinageChapter = {
  id: SpainCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const spainCoinageChapters: SpainCoinageChapter[] = [
  {
    id: 'escudo-oro',
    years: { es: '1535–1864', en: '1535–1864' },
    title: {
      es: 'El escudo de oro',
      en: 'The gold escudo',
    },
    lead: {
      es: 'El escudo fue la unidad de oro de la monarquía hispánica. El medio escudo es la fracción pequeña de esa serie, no un real de plata ni un doblón de ocho.',
      en: 'The escudo was the gold unit of the Spanish monarchy. The half escudo is the small fraction of that series, not a silver real and not an eight-escudo doubloon.',
    },
    body: {
      es: 'Desde el siglo XVI el oro de la Corona se contaba en escudos. En la Península, las casas reales labraron múltiplos y fracciones a volante: el medio escudo es la pieza menuda de esa escala. Numista tasa el tipo KM#378 en ½ escudo sobre el real (el 8 de su ficha es equivalencia de cuenta, no un facial escrito en el disco). No se confunde con el escudo colonial de las Indias —México, Lima, Santa Fe—, ni con el peso de plata. Esta vitrina documenta un medio escudo de Madrid, no un oro americano.',
      en: 'From the sixteenth century the Crown’s gold was counted in escudos. On the peninsula the royal houses struck multiples and fractions by mill: the half escudo is the small piece of that scale. Numista rates type KM#378 as a ½ escudo on the real (the 8 on that record is an account equivalent, not a face written on the disc). It is not colonial gold of the Indies — Mexico, Lima, Santa Fe — and not a silver peso. This case records a Madrid half escudo, not American gold.',
    },
  },
  {
    id: 'madrid',
    years: { es: 'desde 1591', en: 'from 1591' },
    title: {
      es: 'La ceca de Madrid',
      en: 'The Madrid mint',
    },
    lead: {
      es: 'La Real Casa de la Moneda de Madrid se identifica en este tipo por la M coronada bajo el escudo, flanqueada por las iniciales de ensaye.',
      en: 'The Royal Mint of Madrid is identified on this type by the crowned M under the shield, flanked by the assayer initials.',
    },
    body: {
      es: 'Numista sitúa la Real Casa de Madrid desde 1591. En el medio escudo de busto, la marca no es una M suelta en la orla de Indias: es una M coronada bajo el cuartelado, entre J y B cuando el ensaye es el de José Tramullas y Ferrer y Bernardo Muñoz de Amador (Madrid, 1744–1759 y 1747–1759). Esa triple marca —J, M coronada, B— es la que lee este ejemplar. No es la NR de Santa Fe ni la Mo de México.',
      en: 'Numista dates the Royal Mint of Madrid from 1591. On the bust half escudo the mark is not a loose M in an Indies legend: it is a crowned M under the quartered arms, between J and B when the assay is that of José Tramullas y Ferrer and Bernardo Muñoz de Amador (Madrid, 1744–1759 and 1747–1759). That triple mark — J, crowned M, B — is what this example reads. It is not Santa Fe’s NR and not Mexico’s Mo.',
    },
  },
  {
    id: 'fernando-vi',
    years: { es: '1746–1759', en: '1746–1759' },
    title: {
      es: 'Fernando VI',
      en: 'Ferdinand VI',
    },
    lead: {
      es: 'Fernando VI reinó de 1746 a 1759. El medio escudo de Madrid con su busto se labró de 1748 a 1759; esta ficha es de 1757.',
      en: 'Ferdinand VI reigned from 1746 to 1759. Madrid’s half escudo with his bust was struck from 1748 to 1759; this record is 1757.',
    },
    body: {
      es: 'La leyenda FERDINAND · VI · D · G · no es la de Fernando VII. Un 1810 de Fernando VII lleva FERDND VII o FERDINAND VII y, en América, HISPAN ET IND REX. Este disco lee HISPANIARUM · REX: rey de las Españas, sin las Indias en la orla. Calicó 2019 asigna el 1757 Madrid JB al cuarto retrato (Áureo & Calicó#561; en la edición de 2008, Calicó#255). Krause reúne el tipo como KM#378; Friedberg, como Fr#274. Numista nombra grabador a Tomás Francisco Prieto Martín. Esta vitrina no pretende cubrir todo el oro fernandino.',
      en: 'The legend FERDINAND · VI · D · G · is not Ferdinand VII’s. An 1810 of Ferdinand VII reads FERDND VII or FERDINAND VII and, in America, HISPAN ET IND REX. This disc reads HISPANIARUM · REX: king of the Spains, without the Indies in the legend. Calicó 2019 assigns the 1757 Madrid JB to the fourth portrait (Áureo & Calicó#561; in the 2008 edition, Calicó#255). Krause gathers the type as KM#378; Friedberg as Fr#274. Numista names Tomás Francisco Prieto Martín as engraver. This case does not try to cover all Ferdinand gold.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Ferdinand_VI_of_Spain',
    es: 'Wikipedia — Fernando VI de España',
    en: 'Wikipedia — Ferdinand VI of Spain',
    note: {
      es: 'Reinado 1746–1759. Marco del busto, no una ficha de ceca.',
      en: 'Reign 1746–1759. Frame for the bust, not a mint record.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Spanish_escudo',
    es: 'Wikipedia — Escudo español',
    en: 'Wikipedia — Spanish escudo',
    note: {
      es: 'El escudo como unidad de oro; el medio escudo como fracción. No se citan precios.',
      en: 'The escudo as a gold unit; the half escudo as a fraction. Prices are not cited.',
    },
  },
  {
    href: 'https://www.fnmt.es/en/historia',
    es: 'FNMT — Historia de la Fábrica Nacional de Moneda y Timbre',
    en: 'FNMT — History of the Fábrica Nacional de Moneda y Timbre',
    note: {
      es: 'Continuidad de la Real Casa de Madrid. No sustituye la marca de ceca de esta pieza.',
      en: 'Continuity of the Royal Mint of Madrid. It does not replace this piece’s mint mark.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'España · Numismática | Notofilia',
    metaDescription:
      'Catálogo de moneda española: el medio escudo de oro de Fernando VI, Madrid 1757, ensaye JB (KM#378).',
    kicker: 'España · Numismática',
    title: 'Madrid, el escudo y Fernando VI',
    heroAlt:
      'Medio escudo de oro de Fernando VI, Madrid 1757: anverso con busto a la derecha y reverso con escudo coronado, sobre fondo oscuro',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En España esa historia de oro pasa por el escudo y por las casas reales de la Península. Esta vitrina abre con un medio escudo de Madrid de 1757, no con el oro colonial de Santa Fe, México o Lima.',
      'Fernando VI (1746–1759) da nombre al busto. La M coronada y el ensaye JB identifican la Real Casa de Madrid. El papel de este país aún no tiene fichas; el metal, sí.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Tres capítulos, de izquierda a derecha: el escudo de oro, la ceca de Madrid y Fernando VI. Debajo, la ficha del medio escudo de 1757 documentado en esta colección.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de España aún no tiene fichas en notafilia.',
    notesLink: 'España · vitrina de papel (en preparación)',
  },
  en: {
    metaTitle: 'Spain · Numismatics | Notofilia',
    metaDescription:
      'Catalog of Spanish coinage: Ferdinand VI’s gold half escudo, Madrid 1757, assayers JB (KM#378).',
    kicker: 'Spain · Numismatics',
    title: 'Madrid, the escudo, and Ferdinand VI',
    heroAlt:
      'Ferdinand VI gold half escudo, Madrid 1757: obverse with bust facing right and reverse with a crowned shield, on a dark field',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In Spain that gold history runs through the escudo and the royal houses of the peninsula. This case opens with a 1757 Madrid half escudo, not with colonial gold of Santa Fe, Mexico, or Lima.',
      'Ferdinand VI (1746–1759) names the bust. The crowned M and assayers JB identify the Royal Mint of Madrid. This country’s paper has no records yet; the metal does.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Three chapters, left to right: the gold escudo, the Madrid mint, and Ferdinand VI. Below, the record of the 1757 half escudo documented in this collection.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'Spain’s paper money does not yet have records in notaphily.',
    notesLink: 'Spain · paper case (in preparation)',
  },
} as const;

export type SpainCoinId = 'medio-escudo-madrid-1757-jb';

export type SpainCoin = {
  id: SpainCoinId;
  path: string;
  pathEn: string;
  chapterId: SpainCoinageChapterId;
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

export const spainCoins: SpainCoin[] = [
  {
    id: 'medio-escudo-madrid-1757-jb',
    path: '/coleccion/espana-numismatica/medio-escudo-madrid-1757-jb/',
    pathEn: '/en/collection/spain-numismatics/half-escudo-madrid-1757-jb/',
    chapterId: 'fernando-vi',
    year: '1757',
    mint: {
      es: 'Madrid (M coronada); ensaye JB',
      en: 'Madrid (crowned M); assayers JB',
    },
    denomination: {
      es: '½ escudo',
      en: '½ escudo',
    },
    composition: {
      es: 'Oro .917 (especificación de tipo NGC / Numista; no es un ensayo de este ejemplar)',
      en: 'Gold .917 (NGC / Numista type specification; not an assay of this specimen)',
    },
    weight: {
      es: 'No pesado. Cifras de tipo publicadas: Numista 1,7 g; NGC 1,69 g; un ejemplar Sedwick 1,75 g; un ejemplar BnF 1,77 g. Ninguna se asigna a esta pieza.',
      en: 'Not weighed. Published type figures: Numista 1.7 g; NGC 1.69 g; one Sedwick example 1.75 g; one BnF example 1.77 g. None is assigned to this piece.',
    },
    diameter: {
      es: 'No medido. Tipo ≈ 15 mm; la BnF registra 14,9 mm en un 1757 de Madrid que no es este disco.',
      en: 'Not measured. Type ≈ 15 mm; the BnF records 14.9 mm on a 1757 Madrid piece that is not this disc.',
    },
    edge: {
      es: 'Acuñación a volante (técnica de tipo). El canto de este ejemplar no se fotografió.',
      en: 'Milled striking (type technique). This specimen’s edge was not photographed.',
    },
    references: 'KM#378 · Fr#274 · Áureo & Calicó#561 · Calicó 2008#255 · Numista N#26320',
    grade: {
      es: 'Sin encapsular. Desgaste visible en el retrato y el escudo; fecha y leyendas principales legibles. No es un grado numérico.',
      en: 'Unslabbed. Visible wear to the portrait and shield; date and principal legends remain readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Spanish gold half escudo: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-composite.jpg',
      front: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-front.jpg',
      back: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-back.jpg',
      width: 1840,
      height: 900,
      faceWidth: 900,
      faceHeight: 900,
    },
    title: {
      es: '½ escudo · Fernando VI · Madrid 1757 JB',
      en: '½ escudo · Ferdinand VI · Madrid 1757 JB',
    },
    kicker: {
      es: 'España · Real Casa de Madrid',
      en: 'Spain · Royal Mint of Madrid',
    },
    lead: {
      es: 'Medio escudo de oro de Fernando VI, 1757, ceca de Madrid y ensaye JB. Sin serial y sin encapsular. No es un Fernando VII de 1810 ni oro de Indias.',
      en: 'Ferdinand VI gold half escudo, 1757, Madrid mint and assayers JB. No serial and unslabbed. Not an 1810 Ferdinand VII and not Indies gold.',
    },
    description: {
      es: 'Esta pieza es un medio escudo de oro de la monarquía española, labrado en Madrid en 1757. El anverso muestra el busto de Fernando VI a la derecha, cabello rizado, con la leyenda FERDINAND · VI · D · G · y la fecha 1757 bajo el corte. La fórmula abre Ferdinandus VI Dei Gratia: «Fernando VI, por la gracia de Dios». El reverso lleva el escudo cuartelado de Castilla y León, coronado, y la orla HISPANIARUM · REX —«rey de las Españas»—, sin ET IND. Bajo el escudo, vista la pieza en posición de lectura, van J, la M coronada y B: José Tramullas y Ferrer y Bernardo Muñoz de Amador, con la marca de la Real Casa de Madrid. Las fotografías de catálogo presentan el reverso con la corona arriba; eso no establece el eje de cuños. Krause KM#378 (1748–1759); Friedberg Fr#274; Calicó 2008#255 y Áureo & Calicó 2019#561 (cuarto retrato de esa tabla para el 1757 Madrid JB). Numista N#26320 da oro .917, unos 1,7 g y 15 mm de tipo, y nombra grabador a Tomás Francisco Prieto Martín. Esas cifras de metal y módulo no se midieron en este ejemplar. No es un ½ escudo colonial de las Indias, ni un escudo entero, ni un Fernando VII.',
      en: 'This piece is a gold half escudo of the Spanish monarchy, struck at Madrid in 1757. The obverse shows Ferdinand VI’s bust facing right, curled hair, with the legend FERDINAND · VI · D · G · and the date 1757 below the truncation. The formula expands to Ferdinandus VI Dei Gratia: “Ferdinand VI, by the grace of God.” The reverse carries the quartered arms of Castile and León, crowned, and the legend HISPANIARUM · REX — “king of the Spains” — without ET IND. Below the shield, with the piece upright, are J, a crowned M, and B: José Tramullas y Ferrer and Bernardo Muñoz de Amador, with the mark of the Royal Mint of Madrid. Catalog photographs show the reverse with the crown at the top; that does not establish die axis. Krause KM#378 (1748–1759); Friedberg Fr#274; Calicó 2008#255 and Áureo & Calicó 2019#561 (fourth portrait in that table for the 1757 Madrid JB). Numista N#26320 gives gold .917, about 1.7 g and 15 mm as type figures, and names Tomás Francisco Prieto Martín as engraver. Those metal and module figures were not measured on this specimen. It is not a colonial Indies half escudo, not a full escudo, and not a Ferdinand VII.',
    },
    history: {
      es: 'Fernando VI ocupó el trono de 1746 a 1759. El medio escudo de busto de Madrid con ensaye JB cubre 1748–1759; el 1757 es una fecha documentada por Sedwick, GreatCollections, la BnF y Numista. La pieza circuló como oro menudo de la Península. No se publica aquí un martillo ni un censo de encapsulados. La BnF describe un 1757 de Madrid de 14,9 mm y 1,77 g que no es este disco.',
      en: 'Ferdinand VI held the throne from 1746 to 1759. Madrid’s bust half escudo with assayers JB covers 1748–1759; 1757 is a date documented by Sedwick, GreatCollections, the BnF, and Numista. The piece circulated as peninsula small gold. No hammer and no slab census are published here. The BnF describes a 1757 Madrid of 14.9 mm and 1.77 g that is not this disc.',
    },
    obverseLegend: {
      es: 'FERDINAND · VI · D · G · 1757 — Ferdinandus VI Dei Gratia: «Fernando VI, por la gracia de Dios».',
      en: 'FERDINAND · VI · D · G · 1757 — Ferdinandus VI Dei Gratia: “Ferdinand VI, by the grace of God.”',
    },
    reverseLegend: {
      es: 'HISPANIARUM · REX — «Rey de las Españas». Bajo el escudo: J · M coronada · B (Madrid, ensayadores José Tramullas y Ferrer y Bernardo Muñoz de Amador).',
      en: 'HISPANIARUM · REX — “King of the Spains.” Below the shield: J · crowned M · B (Madrid, assayers José Tramullas y Ferrer and Bernardo Muñoz de Amador).',
    },
    frontCaption: {
      es: 'Anverso: busto de Fernando VI a la derecha; FERDINAND · VI · D · G ·; fecha 1757 bajo el retrato.',
      en: 'Obverse: bust of Ferdinand VI facing right; FERDINAND · VI · D · G ·; date 1757 below the portrait.',
    },
    backCaption: {
      es: 'Reverso, en posición de lectura: escudo coronado de Castilla y León; HISPANIARUM · REX; J, M coronada y B.',
      en: 'Reverse, upright: crowned arms of Castile and León; HISPANIARUM · REX; J, crowned M, and B.',
    },
    scarcity: {
      es: 'El 1757 Madrid JB es una fecha del tipo KM#378, no una emisión única. Numista la lista con Calicó#255 / Áureo#561. No se publica una tirada, ni un índice de rareza como censo, ni precios de subasta. Sedwick y GreatCollections documentan el cruce fecha-ceca-ensaye como comparables; no son este ejemplar.',
      en: 'The 1757 Madrid JB is a date of type KM#378, not a unique issue. Numista lists it with Calicó#255 / Áureo#561. No mintage, rarity-index census, or auction prices are published. Sedwick and GreatCollections document the date-mint-assayer combination as comparables; they are not this specimen.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —busto de Fernando VI, 1757, J-M-B de Madrid—, no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — Ferdinand VI bust, 1757, Madrid J-M-B — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/26320',
        es: 'Numista — ½ escudo, Fernando VI, Madrid, segundo tipo (N#26320)',
        en: 'Numista — ½ escudo, Ferdinand VI, Madrid, second type (N#26320)',
        note: {
          es: 'KM#378; Calicó 2008#255 y Áureo & Calicó 2019#561 para 1757 M JB; oro .917 de tipo; ensaye JB. No se republica la tabla de precios.',
          en: 'KM#378; Calicó 2008#255 and Áureo & Calicó 2019#561 for 1757 M JB; type gold .917; assayers JB. The price table is not republished.',
        },
      },
      {
        href: 'https://catalogue.bnf.fr/ark:/12148/cb44996437b',
        es: 'BnF — ½ escudo, Fernando VI, 1757, Madrid',
        en: 'BnF — ½ escudo, Ferdinand VI, 1757, Madrid',
        note: {
          es: 'Ejemplar de referencia 14,9 mm y 1,77 g. No es esta pieza; sus medidas no se copian al disco de la colección.',
          en: 'Reference specimen 14.9 mm and 1.77 g. Not this piece; those measurements are not copied onto the collection disc.',
        },
      },
      {
        href: 'https://www.ngccoin.com/price-guide/world/spain-1-2-escudo-km-378-1748-1759-cuid-8426-duid-30829',
        es: 'NGC — ½ escudo de España, KM#378 (1748–1759)',
        en: 'NGC — Spain ½ escudo, KM#378 (1748–1759)',
        note: {
          es: 'Especificación de tipo: oro .917; peso de referencia 1,69 g. No es un ensayo ni un grado de este ejemplar. No se republican precios.',
          en: 'Type specification: gold .917; reference weight 1.69 g. Not an assay or a grade of this specimen. Prices are not republished.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/SPAIN-Madrid-gold-bust-escudo-Ferdinand-VI-1757-JB_i59770634',
        es: 'Sedwick — ½ escudo de Madrid, Fernando VI, 1757 JB',
        en: 'Sedwick — Madrid ½ escudo, Ferdinand VI, 1757 JB',
        note: {
          es: 'Comparable de subasta de la fecha y el ensaye. No es este ejemplar; no se publica el martillo. Sedwick cita 1,75 g en un disco distinto.',
          en: 'Auction comparable for the date and assayers. Not this specimen; the hammer is not published. Sedwick cites 1.75 g on a different disc.',
        },
      },
      {
        href: 'https://www.greatcollections.com/Coin/2015531/Spain-1757-M-JB-Gold-12-Escudo-KM-378-NGC-VF-25-AGW-00498-Oz-EDC-Red-Core',
        es: 'GreatCollections — ½ escudo 1757 M JB, KM#378 (comparable)',
        en: 'GreatCollections — 1757 M JB ½ escudo, KM#378 (comparable)',
        note: {
          es: 'Documenta el cruce 1757–Madrid–JB y Fr#274 / KM#378. No es esta pieza; no se republica el precio.',
          en: 'Documents the 1757–Madrid–JB cross and Fr#274 / KM#378. Not this piece; the price is not republished.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'España · Numismática',
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
      'Un medio escudo de oro de Madrid de 1757, ensaye JB, sin encapsular. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead: 'Otra pieza de la colección de España.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Spain · Numismatics',
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
      'One unslabbed 1757 Madrid gold half escudo, assayers JB. Further coin pages will be published as they are documented.',
    relatedLead: 'Another piece in the Spain collection.',
  },
} as const;

export function coinById(id: string): SpainCoin | undefined {
  return spainCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${SPAIN_COINAGE_PATH_EN}` : SPAIN_COINAGE_PATH;
}

export function coinPath(coin: SpainCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function chapterHref(id: SpainCoinageChapterId): string {
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? SPAIN_NOTES_PATH_EN : SPAIN_NOTES_PATH;
}

export const spainCoinSlugs = spainCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const spainCoinageDedicatedSlugs = [
  SPAIN_COINAGE_PATH,
  SPAIN_COINAGE_PATH_EN,
  ...spainCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
