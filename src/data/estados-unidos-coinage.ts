import type { CatalogSource, LocalizedText } from './catalog';

const USA_NOTES_PATH = '/coleccion/estados-unidos/';
const USA_NOTES_PATH_EN = '/en/collection/united-states/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const USA_COINAGE_PATH = '/coleccion/estados-unidos-numismatica/';
export const USA_COINAGE_PATH_EN = '/collection/united-states-numismatics/';

export type UnitedStatesCoinageChapterId = 'ceca-filadelfia' | 'dolar-laton' | 'semiquincentenario';

export type UnitedStatesCoinageChapter = {
  id: UnitedStatesCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const unitedStatesCoinageChapters: UnitedStatesCoinageChapter[] = [
  {
    id: 'ceca-filadelfia',
    years: { es: 'desde 1792', en: 'from 1792' },
    title: {
      es: 'La ceca de Filadelfia',
      en: 'The Philadelphia mint',
    },
    lead: {
      es: 'El Coinage Act del 2 de abril de 1792 creó la United States Mint en Filadelfia, entonces capital federal. Esa casa sigue siendo la ceca de esta pieza.',
      en: 'The Coinage Act of 2 April 1792 created the United States Mint in Philadelphia, then the federal capital. That house is still the mint of this piece.',
    },
    body: {
      es: 'Antes de 1792 circulaban monedas europeas y se pagaba también en especie. El Congreso situó la primera ceca federal en Filadelfia el 2 de abril de 1792; la casa permaneció allí cuando la capital se trasladó a Washington. En sus primeros años acuñó centavos de cobre y las primeras piezas de oro y plata. Esta vitrina no pretende cubrir dos siglos de tipos —águilas, Liberty Seated, Morgan, Lincoln—: documenta, de momento, un dólar de Filadelfia de 2026. El papel de curso legal de este país se cataloga aparte, en Notafilia.',
      en: 'Before 1792 European coin circulated and payment was also made in kind. Congress placed the first federal mint in Philadelphia on 2 April 1792; the house stayed there when the capital moved to Washington. In its first years it struck copper cents and the first gold and silver pieces. This case does not try to cover two centuries of types — eagles, Liberty Seated, Morgan, Lincoln. For now it records a 2026 Philadelphia dollar. This country’s legal-tender paper is catalogued separately, under Notaphily.',
    },
  },
  {
    id: 'dolar-laton',
    years: { es: 'desde 2000', en: 'from 2000' },
    title: {
      es: 'El dólar de latón-manganeso',
      en: 'The manganese-brass dollar',
    },
    lead: {
      es: 'Desde el dólar Sacagawea, el módulo de 8,10 g y 26,49 mm en latón-manganeso es el del 1 $ de circulación. El de 2026 usa esa misma aleación; no es oro.',
      en: 'Since the Sacagawea dollar, the 8.10 g, 26.49 mm manganese-brass module has been that of the circulating $1. The 2026 piece uses that same alloy; it is not gold.',
    },
    body: {
      es: 'El dólar de oro de circulación desapareció en 1933. El pequeño dólar de cuproníquel Susan B. Anthony (1979) cedió en 2000 al Sacagawea de latón-manganeso —88,5 % cobre, 6 % zinc, 3,5 % manganeso y 2 % níquel—, el mismo cospel que heredaron los Native American dollars, los Presidential dollars (2007–2016, 2020) y los American Innovation. El sello presidencial del reverso de esos Presidential dollars es el de Frank Gasparro, con sus iniciales FG. El dólar del Semiquincentenario reutiliza ese reverso, con el número 250 en el escudo, y cambia el canto: liso, sin leyenda ni marca de ceca, a diferencia de los Native American y American Innovation. Pese al color dorado, no contiene oro.',
      en: 'Circulating gold dollars ended in 1933. The small cupronickel Susan B. Anthony dollar (1979) yielded in 2000 to the Sacagawea manganese-brass piece — 88.5% copper, 6% zinc, 3.5% manganese, and 2% nickel — the same planchet later used for Native American dollars, Presidential dollars (2007–2016, 2020), and American Innovation dollars. The presidential-seal reverse of those Presidential dollars is Frank Gasparro’s, with his initials FG. The Semiquincentennial dollar reuses that reverse, with 250 in the shield, and changes the edge: plain, with no lettering and no mint mark, unlike Native American and American Innovation dollars. Despite the golden color, it contains no gold.',
    },
  },
  {
    id: 'semiquincentenario',
    years: { es: '2026', en: '2026' },
    title: {
      es: 'Semiquincentenario',
      en: 'Semiquincentennial',
    },
    lead: {
      es: 'La ley de rediseño de 2020 autorizó un dólar de 2026 emblemático del 250.º aniversario. El Tesoro eligió el retrato de Donald J. Trump en el anverso.',
      en: 'The 2020 redesign act authorized a 2026 dollar emblematic of the 250th anniversary. The Treasury chose Donald J. Trump’s portrait for the obverse.',
    },
    body: {
      es: 'La Circulating Collectible Coin Redesign Act of 2020 (Public Law 116-330; 31 U.S.C. § 5112(y)(1)(C)) permite al secretario del Tesoro acuñar, durante 2026, un dólar de 1 $ con un diseño emblemático del Semiquincentenario. Prohíbe retratos de personas vivas en el reverso; no impone la misma restricción al anverso. El 16 de julio de 2026 el Tesoro presentó el tipo: retrato de frente de Joseph Menna (JFM), a partir de una fotografía oficial de la Casa Blanca de Daniel Torok, con LIBERTY, IN GOD WE TRUST y la doble fecha 1776 ~ 2026; reverso de Gasparro con 250 en el escudo. Los rollos y bolsas de calidad de circulación, solo de Filadelfia y sin marca de ceca, salieron a la venta el 2 de septiembre de 2026. Un programa aparte de oro de 24 quilates de una onza no es esta pieza. Un antecedente de presidente en vida en moneda estadounidense es el medio dólar del Sesquicentenario de 1926, con Calvin Coolidge.',
      en: 'The Circulating Collectible Coin Redesign Act of 2020 (Public Law 116-330; 31 U.S.C. § 5112(y)(1)(C)) lets the Treasury secretary strike, during 2026, a $1 coin with a design emblematic of the Semiquincentennial. It bars portraits of living people on the reverse; it places no matching limit on the obverse. On 16 July 2026 the Treasury unveiled the type: a facing portrait by Joseph Menna (JFM), after an official White House photograph by Daniel Torok, with LIBERTY, IN GOD WE TRUST, and the dual date 1776 ~ 2026; Gasparro’s reverse with 250 in the shield. Circulating-quality rolls and bags, Philadelphia only and without a mint mark, went on sale on 2 September 2026. A separate 24-karat one-ounce gold program is not this piece. A precedent for a living president on United States coin is the 1926 Sesquicentennial half dollar, with Calvin Coolidge.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.globenewswire.com/news-release/2026/08/04/3338617/0/en/2026-Semiquincentennial-President-Donald-J-Trump-1-Coin-Designs-Released.html',
    es: 'United States Mint — Diseños del dólar Trump del Semiquincentenario (4 ago. 2026)',
    en: 'United States Mint — Semiquincentennial Trump $1 designs (4 Aug. 2026)',
    note: {
      es: 'Comunicado de la Mint: retrato de Joseph Menna a partir de foto de Daniel Torok; reverso de Frank Gasparro con 250; autorización 31 U.S.C. § 5112(y)(1)(C) y Pub. L. 116-330.',
      en: 'Mint release: Joseph Menna portrait after a Daniel Torok photograph; Frank Gasparro reverse with 250; authority 31 U.S.C. § 5112(y)(1)(C) and Pub. L. 116-330.',
    },
  },
  {
    href: 'https://www.coinnews.net/2026/07/16/treasury-unveils-trump-1-coin/',
    es: 'CoinNews — El Tesoro presenta el dólar Trump 1776–2026',
    en: 'CoinNews — Treasury unveils the 1776–2026 Trump $1',
    note: {
      es: 'Especificaciones: 8,10 g; 26,49 mm; latón-manganeso; canto liso; Filadelfia sin marca de ceca; no es oro.',
      en: 'Specs: 8.10 g; 26.49 mm; manganese brass; plain edge; Philadelphia with no mint mark; not gold.',
    },
  },
  {
    href: 'https://www.coinnews.net/2026/09/02/trump-coins-july-4th-privy/',
    es: 'CoinNews — Rollos y bolsas del 2 de septiembre y privy JULY 4th',
    en: 'CoinNews — 2 September rolls and bags and the JULY 4th privy',
    note: {
      es: 'Calidad de circulación, solo Filadelfia. 250.000 ejemplares con marca privy JULY 4th, distinta de este tipo sin privy. No se republican precios.',
      en: 'Circulating quality, Philadelphia only. 250,000 pieces with a JULY 4th privy mark, a different variety from this no-privy type. Prices are not republished.',
    },
  },
  {
    href: 'https://www.congress.gov/116/plaws/publ330/PLAW-116publ330.pdf',
    es: 'Public Law 116-330 — Circulating Collectible Coin Redesign Act of 2020',
    en: 'Public Law 116-330 — Circulating Collectible Coin Redesign Act of 2020',
    note: {
      es: 'Autoriza un dólar de 2026 emblemático del Semiquincentenario; prohíbe retratos de personas vivas en el reverso.',
      en: 'Authorizes a 2026 dollar emblematic of the Semiquincentennial; bars portraits of living people on the reverse.',
    },
  },
  {
    href: 'https://www.usmint.gov/about',
    es: 'United States Mint — About',
    en: 'United States Mint — About',
    note: {
      es: 'Fundación por el Coinage Act del 2 de abril de 1792 en Filadelfia.',
      en: 'Founded by the Coinage Act of 2 April 1792 in Philadelphia.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Numismática | Notofilia',
    metaDescription:
      'Catálogo de moneda estadounidense: la ceca de Filadelfia, el dólar de latón-manganeso y el 1 $ de Trump del Semiquincentenario 1776–2026.',
    kicker: 'Estados Unidos · Numismática',
    title: 'La ceca de Filadelfia y el dólar de 2026',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En Estados Unidos esa historia empieza en Filadelfia: el Coinage Act del 2 de abril de 1792 creó la United States Mint cuando la ciudad era aún capital federal.',
      'Esta vitrina abre con el módulo del dólar de latón-manganeso —el mismo cospel del Sacagawea y de los Presidential dollars— y con el tipo del Semiquincentenario de 2026. El primer ejemplar documentado es el 1 $ con retrato de Donald J. Trump, anverso de Joseph Menna y reverso de Frank Gasparro con el número 250. No es oro de 24 quilates ni una medalla privada.',
      'Los demás tipos —centavos, medios dólares, águilas de oro— se añadirán a medida que se fotografíen, como en el papel de este país.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Tres capítulos, de izquierda a derecha: la ceca de Filadelfia, el dólar de latón-manganeso y el Semiquincentenario. Debajo, la ficha del 1 $ de 1776–2026 documentado en esta colección.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.',
    notesLink: 'Estados Unidos · Del papel colonial a la Reserva Federal',
  },
  en: {
    metaTitle: 'United States · Numismatics | Notofilia',
    metaDescription:
      'Catalog of United States coinage: the Philadelphia mint, the manganese-brass dollar, and the 1776–2026 Semiquincentennial Trump $1.',
    kicker: 'United States · Numismatics',
    title: 'The Philadelphia mint and the 2026 dollar',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In the United States that history begins in Philadelphia: the Coinage Act of 2 April 1792 created the United States Mint while the city was still the federal capital.',
      'This case opens with the manganese-brass dollar module — the same planchet as the Sacagawea and the Presidential dollars — and with the 2026 Semiquincentennial type. The first documented example is the $1 with Donald J. Trump’s portrait, Joseph Menna’s obverse and Frank Gasparro’s reverse numbered 250. It is not 24-karat gold and not a private medal.',
      'Further types — cents, half dollars, gold eagles — will be added as they are photographed, as in this country’s paper case.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Three chapters, left to right: the Philadelphia mint, the manganese-brass dollar, and the Semiquincentennial. Below, the record of the 1776–2026 $1 documented in this collection.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'This country’s paper money is documented in the notaphily case.',
    notesLink: 'United States · From colonial paper to the Federal Reserve',
  },
} as const;

export type UnitedStatesCoinId = '1-dolar-trump-1776-2026';

export type UnitedStatesCoin = {
  id: UnitedStatesCoinId;
  path: string;
  pathEn: string;
  chapterId: UnitedStatesCoinageChapterId;
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

export const unitedStatesCoins: UnitedStatesCoin[] = [
  {
    id: '1-dolar-trump-1776-2026',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/',
    chapterId: 'semiquincentenario',
    year: '1776 ~ 2026',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '1 dólar de curso legal',
      en: 'Legal-tender $1',
    },
    composition: {
      es: 'Latón-manganeso (88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni)',
      en: 'Manganese brass (88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni)',
    },
    weight: {
      es: '8,10 g',
      en: '8.10 g',
    },
    diameter: {
      es: '26,49 mm',
      en: '26.49 mm',
    },
    edge: {
      es: 'Liso, sin leyenda',
      en: 'Plain, no lettering',
    },
    references: 'Pub. L. 116-330 · 31 U.S.C. § 5112(y)(1)(C)',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Struck circulating United States dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/estados-unidos/1-dolar-trump-1776-2026-composite.jpg',
      front: '/images/catalog/estados-unidos/1-dolar-trump-1776-2026-front.jpg',
      back: '/images/catalog/estados-unidos/1-dolar-trump-1776-2026-back.jpg',
      width: 1200,
      height: 675,
      faceWidth: 600,
      faceHeight: 675,
    },
    title: {
      es: '1 dólar · Trump · Semiquincentenario 1776–2026',
      en: '$1 · Trump · Semiquincentennial 1776–2026',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Dólar de curso legal de Filadelfia, latón-manganeso —no oro—, con retrato de Donald J. Trump (JFM) y el sello presidencial de Gasparro numerado 250. Sin serial, sin encapsular y sin marca privy JULY 4th.',
      en: 'Philadelphia legal-tender dollar in manganese brass — not gold — with Donald J. Trump’s portrait (JFM) and Gasparro’s presidential seal numbered 250. No serial, unslabbed, and without the JULY 4th privy mark.',
    },
    description: {
      es: 'Esta pieza es el 1 $ del Semiquincentenario acuñado en Filadelfia sin marca de ceca. El anverso, de Joseph F. Menna (JFM), muestra un retrato de frente de Donald J. Trump, chaqueta y corbata, bajo LIBERTY; a la derecha, IN GOD WE TRUST en tres líneas; abajo, 1776 ~ 2026 entre estrellas. Menna partió de una fotografía oficial de la Casa Blanca de Daniel Torok. El reverso reutiliza el sello presidencial de Frank Gasparro (FG): águila con olivo y trece flechas, E PLURIBUS UNUM en la cinta, trece estrellas sobre la cabeza y un anillo de cincuenta; el número 250 ocupa el centro del escudo; UNITED STATES OF AMERICA arriba y ONE DOLLAR abajo. El canto es liso. El color dorado es el de la aleación de los dólares Sacagawea, Native American, Presidential e Innovation: 8,10 g y 26,49 mm, sin metal precioso. No es el programa de oro de 24 quilates de una onza, ni una medalla privada, ni el collage pop Trump / Never Surrender de Rency sobre un 2 dólares. En esta foto de estudio no se ve la marca privy JULY 4th de los 250.000 ejemplares acuñados el 4 de julio de 2026.',
      en: 'This piece is the Semiquincentennial $1 struck at Philadelphia with no mint mark. The obverse, by Joseph F. Menna (JFM), shows a facing portrait of Donald J. Trump, jacket and tie, under LIBERTY; at right, IN GOD WE TRUST in three lines; below, 1776 ~ 2026 between stars. Menna worked from an official White House photograph by Daniel Torok. The reverse reuses Frank Gasparro’s (FG) presidential seal: an eagle with olive branch and thirteen arrows, E PLURIBUS UNUM on the ribbon, thirteen stars above the head and a ring of fifty; the number 250 sits at the center of the shield; UNITED STATES OF AMERICA above and ONE DOLLAR below. The edge is plain. The golden color is that of the Sacagawea, Native American, Presidential, and Innovation dollar alloy: 8.10 g and 26.49 mm, with no precious metal. It is not the 24-karat one-ounce gold program, not a private medal, and not Rency’s Trump / Never Surrender pop collage on a $2. This studio photograph does not show the JULY 4th privy mark of the 250,000 pieces struck on 4 July 2026.',
    },
    history: {
      es: 'Representar a un presidente en vida en la moneda estadounidense es infrecuente. El medio dólar del Sesquicentenario de 1926 mostró a Calvin Coolidge junto a Washington. El Congreso, con la ley de 2020, abrió un dólar de un solo año para el 250.º aniversario de 1776. El Tesoro presentó el diseño el 16 de julio de 2026; la Mint publicó los diseños el 4 de agosto; los rollos de 25 y las bolsas de 100 —calidad de circulación, solo Filadelfia— salieron el 2 de septiembre. Esta ficha describe el objeto físico de la colección; no tasa la emisión ni republica los precios de la Mint.',
      en: 'A living president on United States coin is uncommon. The 1926 Sesquicentennial half dollar showed Calvin Coolidge beside Washington. Congress, in the 2020 act, opened a one-year dollar for the 250th anniversary of 1776. The Treasury unveiled the design on 16 July 2026; the Mint published the designs on 4 August; 25-coin rolls and 100-coin bags — circulating quality, Philadelphia only — went on sale on 2 September. This record describes the physical object in the collection; it does not value the issue or republish Mint prices.',
    },
    obverseLegend: {
      es: 'LIBERTY · IN GOD WE TRUST · 1776 ~ 2026. Iniciales JFM (Joseph F. Menna, grabador jefe) a la derecha, bajo el lema.',
      en: 'LIBERTY · IN GOD WE TRUST · 1776 ~ 2026. Initials JFM (Joseph F. Menna, Chief Engraver) at right, below the motto.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · ONE DOLLAR · 250 en el escudo. Iniciales FG (Frank Gasparro) a la derecha de la cola.',
      en: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · ONE DOLLAR · 250 in the shield. Initials FG (Frank Gasparro) to the right of the tail.',
    },
    frontCaption: {
      es: 'Anverso: retrato de frente de Donald J. Trump; LIBERTY; IN GOD WE TRUST; 1776 ~ 2026; iniciales JFM.',
      en: 'Obverse: facing portrait of Donald J. Trump; LIBERTY; IN GOD WE TRUST; 1776 ~ 2026; initials JFM.',
    },
    backCaption: {
      es: 'Reverso: sello presidencial de Gasparro con 250 en el escudo; UNITED STATES OF AMERICA; ONE DOLLAR; iniciales FG. Sin marca privy JULY 4th.',
      en: 'Reverse: Gasparro presidential seal with 250 in the shield; UNITED STATES OF AMERICA; ONE DOLLAR; initials FG. No JULY 4th privy mark.',
    },
    scarcity: {
      es: 'CoinNews y la Mint describen rollos y bolsas de calidad de circulación solo de Filadelfia; no hubo acuñación en Denver. De esa producción, 250.000 ejemplares llevan privy JULY 4th y se mezclaron al azar: esta pieza no la muestra. La Mint agotó esos rollos y bolsas el 2 de septiembre de 2026, el día de la puesta a la venta; esa escasez de producto de la Mint no es una tirada del tipo. No se publica aquí una tirada total ni un censo de encapsulados. El programa de oro de 24 k es otra emisión, de tirada limitada y calendario distinto.',
      en: 'CoinNews and the Mint describe circulating-quality rolls and bags from Philadelphia only; none were struck at Denver. Of that output, 250,000 pieces carry a JULY 4th privy and were mixed at random: this example does not show it. The Mint sold out those rolls and bags on 2 September 2026, the on-sale day; that Mint-product sell-out is not a type mintage. This record does not publish a type mintage or a slab census. The 24k gold program is a different issue, with a limited mintage and a separate calendar.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —anverso JFM, reverso FG con 250, sin privy— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — JFM obverse, FG reverse with 250, no privy — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.globenewswire.com/news-release/2026/08/04/3338617/0/en/2026-Semiquincentennial-President-Donald-J-Trump-1-Coin-Designs-Released.html',
        es: 'United States Mint — Diseños del dólar Trump del Semiquincentenario',
        en: 'United States Mint — Semiquincentennial Trump $1 designs',
        note: {
          es: 'Menna (foto Torok); Gasparro con 250; Pub. L. 116-330.',
          en: 'Menna (Torok photograph); Gasparro with 250; Pub. L. 116-330.',
        },
      },
      {
        href: 'https://www.coinnews.net/2026/07/16/treasury-unveils-trump-1-coin/',
        es: 'CoinNews — Especificaciones del dólar 1776–2026',
        en: 'CoinNews — 1776–2026 dollar specifications',
        note: {
          es: '8,10 g; 26,49 mm; 88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni; canto liso; Filadelfia sin marca.',
          en: '8.10 g; 26.49 mm; 88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni; plain edge; Philadelphia, no mint mark.',
        },
      },
      {
        href: 'https://www.coinnews.net/2026/09/02/trump-coins-july-4th-privy/',
        es: 'CoinNews — Privy JULY 4th y venta del 2 de septiembre',
        en: 'CoinNews — JULY 4th privy and 2 September sale',
        note: {
          es: '250.000 con privy; este ejemplar no la muestra. No se republican precios.',
          en: '250,000 with privy; this example does not show it. Prices are not republished.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Estados Unidos · Numismática',
    chapterLink: 'Semiquincentenario',
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
      'Un dólar de Filadelfia de 1776–2026, sin encapsular. Las demás fichas se publicarán a medida que se documenten.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    chapterLink: 'Semiquincentennial',
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
      'One unslabbed Philadelphia 1776–2026 dollar. Further coin pages will be published as they are documented.',
  },
} as const;

export function coinById(id: string): UnitedStatesCoin | undefined {
  return unitedStatesCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_COINAGE_PATH_EN}` : USA_COINAGE_PATH;
}

export function coinPath(coin: UnitedStatesCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function chapterHref(id: UnitedStatesCoinageChapterId): string {
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? USA_NOTES_PATH_EN : USA_NOTES_PATH;
}

export const unitedStatesCoinSlugs = unitedStatesCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const unitedStatesCoinageDedicatedSlugs = [
  USA_COINAGE_PATH,
  USA_COINAGE_PATH_EN,
  ...unitedStatesCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
