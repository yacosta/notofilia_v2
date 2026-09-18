import type { CatalogSource, LocalizedText } from './catalog';

const USA_NOTES_PATH = '/coleccion/estados-unidos/';
const USA_NOTES_PATH_EN = '/en/collection/united-states/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const USA_COINAGE_PATH = '/coleccion/estados-unidos-numismatica/';
export const USA_COINAGE_PATH_EN = '/collection/united-states-numismatics/';
export const USA_HARD_TIMES_PATH = '/coleccion/estados-unidos-numismatica/fichas-hard-times/';
export const USA_HARD_TIMES_PATH_EN = '/collection/united-states-numismatics/hard-times-tokens/';

export type UnitedStatesCoinageChapterId =
  | 'hard-times'
  | 'ceca-filadelfia'
  | 'dolar-laton'
  | 'semiquincentenario';

export type UnitedStatesCoinageChapter = {
  id: UnitedStatesCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const unitedStatesCoinageChapters: UnitedStatesCoinageChapter[] = [
  {
    id: 'hard-times',
    years: { es: '1832–1844', en: '1832–1844' },
    title: {
      es: 'Las fichas Hard Times',
      en: 'Hard Times tokens',
    },
    lead: {
      es: 'Cobre privado del tamaño de un large cent: menuda de emergencia y sátira política durante el Pánico de 1837, no moneda de la United States Mint.',
      en: 'Private copper on a large-cent module: emergency small change and political satire during the Panic of 1837, not United States Mint coin.',
    },
    body: {
      es: 'Las fichas Hard Times se acuñaron sobre todo entre 1832 y 1844, en cobre, latón y metal blanco, en el módulo del large cent —unos 28 mm—. No salieron de una ceca federal: cubrieron el vacío de menuda cuando el público atesoró oro, plata y hasta los centavos de cobre. Jackson vetó la renovación del Second Bank of the United States, trasladó depósitos a los llamados pet banks y, el 11 de julio de 1836, firmó con Levi Woodbury la Specie Circular: desde el 15 de agosto las tierras públicas se pagaban solo en moneda metálica. Van Buren heredó, en mayo de 1837, la suspensión de pagos en especie. Lyman H. Low clasificó 164 variedades en 1899; Russell Rulau las reordenó con números HT. El Coinage Act del 22 de abril de 1864 criminalizó la acuñación privada de piezas de uno y dos centavos y cerró esa menuda de emergencia. Esta vitrina abre con el HT-34 de 1837 (Low-20), burro y tortuga; no es el HT-33, que lee EXECUTIVE EXPERIMENT.',
      en: 'Hard Times tokens were struck mainly between 1832 and 1844, in copper, brass, and white metal, on the large-cent module — about 28 mm. They did not come from a federal mint: they filled the small-change gap when the public hoarded gold, silver, and even copper cents. Jackson vetoed the recharter of the Second Bank of the United States, shifted deposits into so-called pet banks, and on 11 July 1836 signed with Levi Woodbury the Specie Circular: from 15 August, public lands were to be paid for in coin only. Van Buren inherited, in May 1837, the suspension of specie payments. Lyman H. Low classified 164 varieties in 1899; Russell Rulau reordered them with HT numbers. The Coinage Act of 22 April 1864 criminalized private striking of one- and two-cent pieces and ended that emergency small change. This case opens with the 1837 HT-34 (Low-20), donkey and turtle; it is not HT-33, which reads EXECUTIVE EXPERIMENT.',
    },
  },
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
  {
    href: 'https://en.wikipedia.org/wiki/Hard_times_token',
    es: 'Wikipedia — Hard times token',
    en: 'Wikipedia — Hard times token',
    note: {
      es: 'Marco de 1832–1844, menuda privada y el Pánico de 1837. No se republican precios.',
      en: '1832–1844 frame, private small change, and the Panic of 1837. Prices are not republished.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/',
    es: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    en: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    note: {
      es: 'Atribución contemporánea por número HT de Rulau, con cruce a Low cuando aplica.',
      en: 'Contemporary attribution by Rulau HT number, with a Low cross-reference when it applies.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Numismática | Notofilia',
    metaDescription:
      'Catálogo de moneda estadounidense: fichas Hard Times de 1837, la ceca de Filadelfia y el 1 $ de Trump del Semiquincentenario 1776–2026.',
    kicker: 'Estados Unidos · Numismática',
    title: 'Hard Times, Filadelfia y el dólar de 2026',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En Estados Unidos esa historia incluye tanto la ceca de Filadelfia, creada por el Coinage Act del 2 de abril de 1792, como el cobre privado que circuló cuando esa ceca no bastó.',
      'Esta vitrina abre con las fichas Hard Times de 1832–1844 —exonumia del Pánico de 1837— y con el módulo del dólar de latón-manganeso, el mismo cospel del Sacagawea y de los Presidential dollars, hasta el tipo del Semiquincentenario de 2026. El 1 $ con retrato de Donald J. Trump no es oro de 24 quilates ni una medalla privada; el HT-34 de 1837 no es un centavo federal.',
      'Los demás tipos —centavos de la Mint, medios dólares, águilas de oro— se añadirán a medida que se fotografíen, como en el papel de este país.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, de izquierda a derecha: Hard Times —con vitrina propia—, la ceca de Filadelfia, el dólar de latón-manganeso y el Semiquincentenario. Debajo, las fichas del HT-34 de 1837 y del 1 $ de 1776–2026 documentados en esta colección.',
    viewChapter: 'Leer el capítulo',
    hardTimesChapterCta: 'Abrir la vitrina Hard Times',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.',
    notesLink: 'Estados Unidos · Del papel colonial a la Reserva Federal',
  },
  en: {
    metaTitle: 'United States · Numismatics | Notofilia',
    metaDescription:
      'Catalog of United States coinage: 1837 Hard Times tokens, the Philadelphia mint, and the 1776–2026 Semiquincentennial Trump $1.',
    kicker: 'United States · Numismatics',
    title: 'Hard Times, Philadelphia, and the 2026 dollar',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In the United States that history includes both the Philadelphia mint, created by the Coinage Act of 2 April 1792, and the private copper that circulated when that mint was not enough.',
      'This case opens with Hard Times tokens of 1832–1844 — exonumia of the Panic of 1837 — and with the manganese-brass dollar module, the same planchet as the Sacagawea and the Presidential dollars, through the 2026 Semiquincentennial type. The $1 with Donald J. Trump’s portrait is not 24-karat gold and not a private medal; the 1837 HT-34 is not a federal cent.',
      'Further types — Mint cents, half dollars, gold eagles — will be added as they are photographed, as in this country’s paper case.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters, left to right: Hard Times — with its own case — the Philadelphia mint, the manganese-brass dollar, and the Semiquincentennial. Below, the records of the 1837 HT-34 and the 1776–2026 $1 documented in this collection.',
    viewChapter: 'Read the chapter',
    hardTimesChapterCta: 'Open the Hard Times case',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'This country’s paper money is documented in the notaphily case.',
    notesLink: 'United States · From colonial paper to the Federal Reserve',
  },
} as const;

export type UnitedStatesCoinId = 'ht-34-1837-burro-tortuga' | '1-dolar-trump-1776-2026';

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
  heading?: LocalizedText;
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
    id: 'ht-34-1837-burro-tortuga',
    path: '/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/',
    pathEn: '/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/',
    chapterId: 'hard-times',
    year: '1837',
    mint: {
      es: 'Acuñación privada (sin ceca federal)',
      en: 'Private striking (no federal mint)',
    },
    denomination: {
      es: 'Ficha de módulo de large cent (sin valor facial)',
      en: 'Large-cent module token (no face value on the piece)',
    },
    composition: {
      es: 'Cobre',
      en: 'Copper',
    },
    weight: {
      es: 'No pesado en esta ficha',
      en: 'Not weighed for this record',
    },
    diameter: {
      es: '≈ 28,5 mm',
      en: '≈ 28.5 mm',
    },
    edge: {
      es: 'Liso',
      en: 'Plain',
    },
    references: 'HT-34 · Low-20 · DeWitt CE-1838-4 · W-11-540a · R-1',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Private Hard Times copper token: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/estados-unidos/ht-34-1837-burro-tortuga-composite.jpg',
      front: '/images/catalog/estados-unidos/ht-34-1837-burro-tortuga-front.jpg',
      back: '/images/catalog/estados-unidos/ht-34-1837-burro-tortuga-back.jpg',
      width: 1800,
      height: 599,
      faceWidth: 1024,
      faceHeight: 682,
    },
    heading: {
      es: 'Ficha Hard Times de 1837 — HT-34 / Low-20',
      en: '1837 Hard Times token — HT-34 / Low-20',
    },
    title: {
      es: 'Ficha Hard Times de 1837 · HT-34 / Low-20',
      en: '1837 Hard Times token · HT-34 / Low-20',
    },
    kicker: {
      es: 'Estados Unidos · exonumia privada',
      en: 'United States · private exonumia',
    },
    lead: {
      es: 'Ficha de cobre HT-34 (Low-20), 1837: burro al galope y tortuga con caja SUB TREASURY. Ninguna cara lleva valor facial; el módulo es el de un large cent. R-1 en la escala Hard Times/Fuld, no Sheldon. Sin serial y sin encapsular.',
      en: 'Copper token HT-34 (Low-20), 1837: a galloping jackass and a tortoise with a SUB TREASURY chest. Neither face carries a denomination; the module is that of a large cent. R-1 on the Hard Times/Fuld scale, not Sheldon. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es una ficha Hard Times de cobre, módulo de large cent, acuñada en privado en 1837 para circular como menuda. El anverso muestra un burro al galope y la leyenda I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR —STEPS, no «footsteps»—. El reverso muestra una tortuga que carga una caja marcada SUB TREASURY, con EXECUTIVE FINANCIERING, 1837 y FISCAL AGENT. El canto es liso. No es un centavo de la United States Mint ni el tipo HT-33 (EXECUTIVE EXPERIMENT). No hay número de serie ni cápsula.',
      en: 'This piece is a copper Hard Times token, large-cent module, struck privately in 1837 to circulate as small change. The obverse shows a galloping jackass and the legend I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR — STEPS, not “footsteps.” The reverse shows a tortoise carrying a chest marked SUB TREASURY, with EXECUTIVE FINANCIERING, 1837, and FISCAL AGENT. The edge is plain. It is not a United States Mint cent and not type HT-33 (EXECUTIVE EXPERIMENT). There is no serial and no grading holder.',
    },
    history: {
      es: 'El cobre cita a Van Buren con STEPS, no con la paráfrasis «footsteps» de su inaugural. En septiembre de 1837 propuso el Independent Treasury: fondos federales en custodia del gobierno, no en un banco nacional ni en pet banks; el Congreso no lo legisló hasta 1840. La ficha pertenece a esa controversia, no a un sistema ya asentado. Douglas Mudd (Money Museum, ANA) lee la tortuga y la caja SUB TREASURY como sátira de la lentitud y de la inseguridad —según los críticos— de mover oro y plata entre subtesorerías dispersas; esta ficha transmite esa acusación y no la adopta como juicio. Low-20; Rulau HT-34; DeWitt CE-1838-4 —el 1838 de DeWitt no cambia la fecha 1837 de la pieza—; Heritage registra también W-11-540a. Sin tirada ni censo aquí.',
      en: 'The copper cites Van Buren with STEPS, not the “footsteps” paraphrase of his inaugural. In September 1837 he proposed the Independent Treasury: federal funds in government custody, not in a national bank or pet banks; Congress did not enact it until 1840. The token belongs to that controversy, not to a system already in force. Douglas Mudd (ANA Money Museum) reads the tortoise and SUB TREASURY chest as a satire of the slowness and alleged insecurity of moving gold and silver among scattered sub-treasuries; this record reports that partisan charge and does not adopt it as a verdict. Low-20; Rulau HT-34; DeWitt CE-1838-4 — DeWitt’s 1838 does not change the 1837 date on the piece — and Heritage also records W-11-540a. No mintage or census is published here.',
    },
    obverseLegend: {
      es: 'I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR. Burro al galope; STEPS bajo el animal.',
      en: 'I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR. Galloping jackass; STEPS beneath the animal.',
    },
    reverseLegend: {
      es: 'EXECUTIVE FINANCIERING · 1837 · FISCAL AGENT. Caja SUB TREASURY sobre una tortuga.',
      en: 'EXECUTIVE FINANCIERING · 1837 · FISCAL AGENT. SUB TREASURY chest on a tortoise.',
    },
    frontCaption: {
      es: 'Anverso: burro al galope; I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR.',
      en: 'Obverse: galloping jackass; I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR.',
    },
    backCaption: {
      es: 'Reverso: tortuga con caja SUB TREASURY; EXECUTIVE FINANCIERING 1837 FISCAL AGENT.',
      en: 'Reverse: tortoise with SUB TREASURY chest; EXECUTIVE FINANCIERING 1837 FISCAL AGENT.',
    },
    scarcity: {
      es: 'R-1 en la escala de rareza usada para Hard Times y fichas de la Guerra Civil (Rulau/Fuld): común, no la escala de Sheldon de la moneda federal. El tipo se encuentra con facilidad; esta ficha describe el ejemplar fotografiado —leyenda FINANCIERING, sin encapsular— y no una cotización. No se republica aquí un rango de precios ni un censo de PCGS o NGC.',
      en: 'R-1 on the rarity scale used for Hard Times and Civil War tokens (Rulau/Fuld): common, not the Sheldon scale of federal coin. The type is readily found; this record describes the photographed example — FINANCIERING legend, unslabbed — and not a price. It does not republish a price range or a PCGS or NGC census.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula. Las fichas de este tipo no llevan serial. La identidad es el objeto fotografiado —HT-34, Low-20, DeWitt CE-1838-4, EXECUTIVE FINANCIERING 1837— no un certificado.',
      en: 'The example is raw, with no holder. Tokens of this type carry no serial. The identity is the photographed object — HT-34, Low-20, DeWitt CE-1838-4, EXECUTIVE FINANCIERING 1837 — not a certificate.',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Hard_times_token',
        es: 'Wikipedia — Hard times token',
        en: 'Wikipedia — Hard times token',
        note: {
          es: 'Contexto del Pánico de 1837 y de la menuda privada. No se republican precios.',
          en: 'Context for the Panic of 1837 and private small change. Prices are not republished.',
        },
      },
      {
        href: 'https://coinweek.com/the-strange-story-of-hard-time-tokens/',
        es: 'CoinWeek — The Strange Story of Hard Time Tokens',
        en: 'CoinWeek — The Strange Story of Hard Time Tokens',
        note: {
          es: 'Sátira jacksoniana, iconografía y circulación como menuda.',
          en: 'Jacksonian satire, iconography, and circulation as small change.',
        },
      },
      {
        href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/',
        es: 'NGC — Hard Times Tokens (Rulau)',
        en: 'NGC — Hard Times Tokens (Rulau)',
        note: {
          es: 'HT de Rulau como atribución de catálogo; Low-20 es el cruce de esta variedad.',
          en: 'Rulau HT as catalog attribution; Low-20 is this variety’s cross-reference.',
        },
      },
      {
        href: 'https://www.money.org/tales-from-the-vault-hard-times-tokens/',
        es: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 sep. 2015)',
        en: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 Sep. 2015)',
        note: {
          es: 'Serie 1832–1844; escasez de menuda anterior al pánico; tortuga y especie entre subtesorerías. No se republica un precio.',
          en: '1832–1844 series; small-change shortage before the panic; tortoise and specie among sub-treasuries. No price is republished.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Independent_Treasury',
        es: 'Wikipedia — Independent Treasury',
        en: 'Wikipedia — Independent Treasury',
        note: {
          es: 'Propuesta de septiembre de 1837; Independent Treasury Act del 4 de julio de 1840.',
          en: 'September 1837 proposal; Independent Treasury Act of 4 July 1840.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/1846/lot/8572',
        es: 'Heritage / NumisBids — Long Beach 1252, lote 8572 (comparable)',
        en: 'Heritage / NumisBids — Long Beach 1252, lot 8572 (comparable)',
        note: {
          es: 'Atribución del tipo: Low-20, HT-34, DeWitt CE-1838-4; cobre, canto liso, fecha 1837. No es esta pieza ni se republica el martillo.',
          en: 'Type attribution: Low-20, HT-34, DeWitt CE-1838-4; copper, plain edge, dated 1837. Not this holding; the hammer is not republished.',
        },
      },
    ],
  },
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
    hardTimesLink: 'Fichas Hard Times',
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
      'Una ficha Hard Times HT-34 de 1837 y un dólar de Filadelfia de 1776–2026, ambos sin encapsular. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead:
      'Otra pieza de la colección de Estados Unidos.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    chapterLink: 'Semiquincentennial',
    hardTimesLink: 'Hard Times tokens',
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
      'One unslabbed 1837 Hard Times HT-34 token and one unslabbed Philadelphia 1776–2026 dollar. Further coin pages will be published as they are documented.',
    relatedLead:
      'Another piece in the United States collection.',
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

export function hardTimesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_HARD_TIMES_PATH_EN}` : USA_HARD_TIMES_PATH;
}

export function chapterHref(id: UnitedStatesCoinageChapterId, locale: 'es' | 'en' = 'es'): string {
  if (id === 'hard-times') return hardTimesPath(locale);
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? USA_NOTES_PATH_EN : USA_NOTES_PATH;
}

export const unitedStatesCoinSlugs = unitedStatesCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const unitedStatesCoinageDedicatedSlugs = [
  USA_COINAGE_PATH,
  USA_COINAGE_PATH_EN,
  USA_HARD_TIMES_PATH,
  USA_HARD_TIMES_PATH_EN,
  ...unitedStatesCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
