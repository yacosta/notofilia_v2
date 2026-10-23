import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const INDIAN_HEAD_QUARTER_EAGLE_PATH =
  '/coleccion/estados-unidos-numismatica/cuarto-de-aguila-indian-head-1908-1929/';
export const INDIAN_HEAD_QUARTER_EAGLE_PATH_EN =
  '/collection/united-states-numismatics/indian-head-quarter-eagle-1908-1929/';

/** Finished poster. Shown in the shared series hero band. Do not trim the master. Card sibling is 800px wide. Same file for both locales. */
export const INDIAN_HEAD_QUARTER_EAGLE_HERO = {
  src: '/uploads/indian-head-quarter-eagle-1908-1929-hero.jpg',
  width: 1916,
  height: 821,
} as const;

export const indianHeadQuarterEagleCopy = {
  es: {
    nav: 'Cuarto de águila Indian Head (1908–1929)',
    home: 'Inicio',
    discipline: 'Numismática',
    parent: 'Estados Unidos · Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Cuarto de águila Indian Head, 1908–1929',
    metaDescription:
      'El cuarto de águila Indian Head (1908–1929): diseño incuso de Bela Lyon Pratt, tiradas, la 1911-D y el cierre de 1929. En esta colección, los ejemplares de Filadelfia de 1908 y 1912.',
    title: 'El cuarto de águila Indian Head (1908–1929)',
    kicker: 'Oro de 2,50 dólares · diseño incuso',
    lead:
      'El cuarto de águila de Bela Lyon Pratt, acuñado de 1908 a 1915 y de 1925 a 1929. El retrato y el águila van hundidos en el campo. Esta colección guarda los ejemplares de Filadelfia de 1908 y de 1912, sueltos y sin marca de ceca.',
    published: '2026-10-11',
    modified: '2026-10-11',
    dateLabel: '11 de octubre de 2026',
    revisedLabel: 'Actualizado el 11 de octubre de 2026',
    heroAlt:
      'Cartel del cuarto de águila Indian Head, 1908–1929: las cecas de Filadelfia y Denver, las dos caras de la moneda de 1908, un buscador de oro, un águila y una prensa de acuñación. Es una ilustración, no el escaneo de las piezas de la colección.',
    sourcesTitle: 'Fuentes',
    marketKind: 'Cifras de mercado citadas (no son precios de Notofilia)',
    marketNote:
      'Los dólares del texto salen del dossier de trabajo y de las guías y martillos que ese dossier cita: guía de precios de PCGS, CoinWeek y un remate de Stack’s Bowers. Son observaciones de mercado, no precios de esta casa y no una oferta de venta. El martillo de Heritage no se republica.',
    holdingsAria: 'Cuartos de águila Indian Head de 1908 y 1912 en la colección',
    viewNote: 'Ver la ficha',
    parentCta: 'Volver a la vitrina de numismática de Estados Unidos',
    coinLink: 'El tipo, de 1908 a 1929, está en su propia página.',
    chapterLink: 'Leer el cuarto de águila Indian Head (1908–1929)',
  },
  en: {
    nav: 'Indian Head quarter eagle (1908–1929)',
    home: 'Home',
    discipline: 'Numismatics',
    parent: 'United States · Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Indian Head quarter eagle, 1908–1929',
    metaDescription:
      'The Indian Head quarter eagle (1908–1929): Bela Lyon Pratt’s incuse design, mintages, the 1911-D, and the 1929 close. This collection holds the unslabbed Philadelphia pieces of 1908 and 1912.',
    title: 'The Indian Head Quarter Eagle (1908–1929)',
    kicker: '$2.50 gold · incuse design',
    lead:
      'Bela Lyon Pratt’s quarter eagle, struck from 1908 to 1915 and from 1925 to 1929. The portrait and the eagle sit below the field. This collection holds the Philadelphia pieces of 1908 and 1912, raw and without a mint mark.',
    published: '2026-10-11',
    modified: '2026-10-11',
    dateLabel: 'October 11, 2026',
    revisedLabel: 'Updated 11 October 2026',
    heroAlt:
      'Poster for the Indian Head quarter eagle, 1908–1929: the Philadelphia and Denver mints, both faces of the 1908 coin, a gold panner, an eagle, and a coining press. It is an illustration, not a scan of the pieces in the collection.',
    sourcesTitle: 'Sources',
    marketKind: 'Cited market figures (not Notofilia prices)',
    marketNote:
      'Dollar figures in the text come from the working dossier and from the guides and hammers that dossier cites: the PCGS Price Guide, CoinWeek, and a Stack’s Bowers result. They are market observations, not prices of this house and not an offer for sale. The Heritage hammer is not republished.',
    holdingsAria: '1908 and 1912 Indian Head quarter eagles in the collection',
    viewNote: 'Open the coin page',
    parentCta: 'Back to the United States numismatics case',
    coinLink: 'The 1908–1929 type has its own page.',
    chapterLink: 'Read the Indian Head quarter eagle (1908–1929)',
  },
} as const;

export const indianHeadQuarterEagleSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Indian_Head_gold_pieces',
    es: 'Wikipedia — Indian Head gold pieces',
    en: 'Wikipedia — Indian Head gold pieces',
    note: {
      es: 'Cuarto de águila 1908–1929: 4,18 g, 18 mm, canto estriado, oro 900, 0,12094 oz troy fino. Diseño incuso de Pratt. Marca de ceca a la izquierda de las flechas.',
      en: 'Quarter eagle 1908–1929: 4.18 g, 18 mm, reeded edge, 900 gold, 0.12094 troy oz fine. Pratt’s incuse design. Mint mark to the left of the arrows.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/gold-quarter-eagles/indian-head-2.50-1908-1929/',
    es: 'NGC Coin Explorer — Indian Head $2.50 (1908–1929)',
    en: 'NGC Coin Explorer — Indian Head $2.50 (1908–1929)',
  },
  {
    href: 'https://coinweek.com/indian-head-quarter-eagle-1908-1929-collectors-guide/',
    es: 'CoinWeek — guía del Indian Head quarter eagle, 1908–1929',
    en: 'CoinWeek — Indian Head quarter eagle collector’s guide, 1908–1929',
    note: {
      es: 'Bigelow, Pratt, la objeción higiénica de Samuel H. Chapman y el hiato de producción.',
      en: 'Bigelow, Pratt, Samuel H. Chapman’s hygiene objection, and the production hiatus.',
    },
  },
  {
    href: 'https://www.pcgs.com/coinfacts/category/indian-2-5-1908-1929/759',
    es: 'PCGS CoinFacts — Indian $2.50, 1908–1929',
    en: 'PCGS CoinFacts — Indian $2.50, 1908–1929',
  },
  {
    href: 'https://www.pcgs.com/coinfacts/coin/1908-2-50/7939',
    es: 'PCGS CoinFacts — 1908 $2.50, acuñación de circulación (7939)',
    en: 'PCGS CoinFacts — 1908 $2.50, regular strike (7939)',
    note: {
      es: 'Tirada de circulación 564.821. Stack’s Bowers publica 565.057 para el mismo año. Esta página no elige.',
      en: 'Circulation mintage 564,821. Stack’s Bowers publishes 565,057 for the same year. This page does not choose.',
    },
  },
  {
    href: 'https://stacksbowers.com/coin-resource-center/us-coins/gold-quarter-eagles/indian-head-quarter-eagle',
    es: 'Stack’s Bowers — Indian Head quarter eagle',
    en: 'Stack’s Bowers — Indian Head quarter eagle',
  },
  {
    href: 'https://coinweek.com/six-at-the-summit-superb-gem-1908-indian-quarter-eagle-heads-to-rarities-night/',
    es: 'CoinWeek — el 1908 en MS67 y el censo que cita de PCGS',
    en: 'CoinWeek — the 1908 in MS67 and the PCGS census it cites',
    note: {
      es: 'Informa el remate de agosto de 2026 en Stack’s Bowers, 67.100 dólares, de un 1908 MS67. El censo que resume no es un recuento de Notofilia.',
      en: 'Reports the August 2026 Stack’s Bowers hammer, $67,100, for a 1908 MS67. The census it summarizes is not a Notofilia count.',
    },
  },
  {
    href: 'https://coinweek.com/1911-d-indian-head-quarter-eagle-americas-incuse-gold-rarity/',
    es: 'CoinWeek — la 1911-D, clave de la serie',
    en: 'CoinWeek — the 1911-D, key of the series',
    note: {
      es: 'Tirada 55.680. Distingue Strong D y Weak D. El martillo de Heritage no se republica.',
      en: 'Mintage 55,680. Distinguishes Strong D and Weak D. The Heritage hammer is not republished.',
    },
  },
  {
    href: 'https://www.pcgs.com/coinfacts/coin/1911-d-2-50/7943',
    es: 'PCGS CoinFacts — 1911-D $2.50 (7943)',
    en: 'PCGS CoinFacts — 1911-D $2.50 (7943)',
    note: {
      es: 'Registra un único MS66+ como el más fino conocido. Sin precio de Heritage en esta página.',
      en: 'Records a single MS66+ as the finest known. No Heritage price on this page.',
    },
  },
  {
    href: 'https://www.ngccoin.com/news/article/2424/Counterfeit-Detection-Chased-Mintmark-1911-D-Quarter-Eagle/',
    es: 'NGC — marca de ceca perseguida en una 1911-D',
    en: 'NGC — chased mint mark on a 1911-D',
  },
  {
    href: 'https://coinweek.com/1929-indian-head-quarter-eagle-a-collectors-guide/',
    es: 'CoinWeek — guía del quarter eagle de 1929',
    en: 'CoinWeek — 1929 quarter eagle collector’s guide',
  },
  {
    href: 'https://www.pcgs.com/coinfacts/coin/1929-2-50/7953',
    es: 'PCGS CoinFacts — 1929 $2.50 (7953)',
    en: 'PCGS CoinFacts — 1929 $2.50 (7953)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Executive_Order_6102',
    es: 'Wikipedia — Executive Order 6102',
    en: 'Wikipedia — Executive Order 6102',
  },
  {
    href: 'https://www.coinworld.com/news/us-coins/market-analysis-matte-proof-quarter-eagles',
    es: 'Coin World — análisis de mercado de los quarter eagle proof mate',
    en: 'Coin World — market analysis of matte proof quarter eagles',
    note: {
      es: 'Informa un proof 67 de 1908, acabado sandblast, rematado en 38.400 dólares en Stack’s Bowers.',
      en: 'Reports a 1908 Proof 67, sandblast finish, hammered at $38,400 at Stack’s Bowers.',
    },
  },
  {
    href: 'https://www.pcgs.com/prices/detail/indian-2-5/759/most-active',
    es: 'PCGS Price Guide — Indian $2.50 (cifras de guía, no martillos)',
    en: 'PCGS Price Guide — Indian $2.50 (guide figures, not hammers)',
  },
  {
    href: 'https://learn.apmex.com/learning-guide/history/who-was-bela-lyon-pratt/',
    es: 'APMEX — quién fue Bela Lyon Pratt',
    en: 'APMEX — who was Bela Lyon Pratt',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Indian_Head_eagle',
    es: 'Wikipedia — Indian Head eagle (los 10 dólares de Saint-Gaudens)',
    en: 'Wikipedia — Indian Head eagle (Saint-Gaudens’ $10)',
    note: {
      es: 'Contexto del águila de 10 dólares de 1908, con lema y sin lema. No es el cuarto de águila.',
      en: 'Context for the 1908 ten-dollar eagle, with motto and without. It is a different coin from the quarter eagle.',
    },
  },
  {
    href: 'https://www.ngccoin.com/news/article/3032/indian-head-quarter-eagles/',
    es: 'NGC — coleccionar Indian Head quarter eagles, 1908–1929',
    en: 'NGC — collecting Indian Head quarter eagles, 1908–1929',
  },
];

export function indianHeadQuarterEaglePath(locale: Locale): string {
  return locale === 'en' ? `/en${INDIAN_HEAD_QUARTER_EAGLE_PATH_EN}` : INDIAN_HEAD_QUARTER_EAGLE_PATH;
}

export const indianHeadQuarterEagleDedicatedSlugs = [
  INDIAN_HEAD_QUARTER_EAGLE_PATH.replace(/^\/|\/$/g, ''),
  INDIAN_HEAD_QUARTER_EAGLE_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;

export const INDIAN_HEAD_QUARTER_EAGLE_HOLDING_IDS = [
  '2-50-dolares-1908-cabeza-de-indio',
  '2-50-dolares-1912-indian-head',
] as const;
