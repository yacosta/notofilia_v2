import type { Locale } from '../lib/locale-paths';

export const GIORI_TEST_NOTES_PATH = '/coleccion/notafilia/moneda-prueba-giori/';
export const GIORI_TEST_NOTES_PATH_EN = '/collection/notaphily/giori-test-notes/';

export const gioriTestNotesCopy = {
  es: {
    nav: 'Moneda de prueba Giori',
    home: 'Inicio',
    notafilia: 'Notafilia',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Moneda de prueba Giori: mecánica y tipología',
    metaDescription:
      'Pruebas Giori: intaglio multicolor, linaje Organisation Giori–K&B, ensayos Washington y Jefferson, series europeas y catálogo Rollins. No es un Pick de circulación.',
    title: 'Mecánica y notafilia de la moneda de prueba Giori: innovación, linaje industrial y tipología de coleccionista',
    kicker: 'Impresión de seguridad',
    lead:
      'De los chablons de Gualtiero Giori a Koenig & Bauer Banknote Solutions: cómo las notas de ensayo registran prensas, simposios y el papel que coleccionistas llaman test notes.',
    published: '2026-09-20',
    dateLabel: '20 de septiembre de 2026',
    heroAlt:
      'Ilustración de una prensa de talla dulce y de papel moneda: el arte del grabado de seguridad. No es una fotografía de un taller Giori.',
    imageAlt:
      'Anverso uniface del billete de prueba Giori del Lincoln Memorial, en tinta verde, sin seriales ni sellos',
    caption:
      'Un solo ejemplar en la vitrina: el uniface del Lincoln Memorial. El resto de tipos se deja en blanco hasta fotografiar una pieza.',
    galleryHeading: 'Tipos en esta vitrina',
    galleryAria: 'Tipos de moneda de prueba Giori',
    pickLabel: 'Catálogo',
    serialLabel: 'Serial',
    viewNote: 'Ver la ficha',
    holdingCta: 'Abrir la ficha del Lincoln Memorial Giori',
    notafiliaCta: 'Volver a la vitrina de notafilia',
    sourcesTitle: 'Enlaces citados',
    marketKind: 'Rangos de mercado secundario (no son martillos de Notofilia)',
    marketNote:
      'Las cifras en dólares que aparecen en el texto son observaciones de listados de dealers, eBay y notas de subasta citadas abajo. No son precios de esta casa, no hay oferta de venta y no se verificó cada martillo uno a uno.',
  },
  en: {
    nav: 'Giori test currency',
    home: 'Home',
    notafilia: 'Notaphily',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Giori test notes: mechanics and typology',
    metaDescription:
      'Giori test notes: multi-colour intaglio, the Organisation Giori–K&B line, Washington and Jefferson trials, European specimens, and the Rollins catalogue. Not a circulating Pick.',
    title:
      'The Mechanics and Numismatics of Giori Test Currency: Engineering Innovation, Industrial Lineage, and Collector Typology',
    kicker: 'Security printing',
    lead:
      'From Gualtiero Giori’s chablons to Koenig & Bauer Banknote Solutions: how trial notes record presses, symposiums, and the paper collectors call test notes.',
    published: '2026-09-20',
    dateLabel: 'September 20, 2026',
    heroAlt:
      'Illustration of an intaglio press and banknote paper: the art of security engraving. It is not a photograph of a Giori workshop.',
    imageAlt:
      'Uniface face of the Giori Lincoln Memorial test note, in green ink, with no serials or seals',
    caption:
      'One example is in the case: the Lincoln Memorial uniface. The other types stay blank until a piece is photographed.',
    galleryHeading: 'Types in this case',
    galleryAria: 'Giori test-note types',
    pickLabel: 'Catalogue',
    serialLabel: 'Serial',
    viewNote: 'Open the note page',
    holdingCta: 'Open the Giori Lincoln Memorial record',
    notafiliaCta: 'Back to the notaphily case',
    sourcesTitle: 'Cited links',
    marketKind: 'Secondary-market ranges (not Notofilia hammers)',
    marketNote:
      'Dollar figures in the text are observations from dealer lists, eBay, and auction notes cited below. They are not prices of this house, not an offer for sale, and not hammers verified one by one.',
  },
} as const;

export const GIORI_TEST_NOTES_HERO = {
  src: '/uploads/giori-banknote-printing-hero.jpg',
  width: 1024,
  height: 438,
} as const;

export const GIORI_HOLDING_ID = 'billete-prueba-giori-lincoln-memorial';

export const gioriTestNotesHoldingHref =
  '/coleccion/estados-unidos/miscelaneos/billete-prueba-giori-lincoln-memorial/';

export type GioriTypeSlot = {
  id: string;
  holdingId?: typeof GIORI_HOLDING_ID;
};

/** One published holding plus two empty cells so the grid is a single row of three. */
export const gioriTypeSlots: GioriTypeSlot[] = [
  { id: 'lincoln-memorial', holdingId: GIORI_HOLDING_ID },
  { id: 'empty-1' },
  { id: 'empty-2' },
];

export const gioriTestNotesSources = [
  {
    href: 'https://banknote-solutions.koenig-bauer.com/en/about-us/our-history/',
    es: 'Koenig & Bauer Banknote Solutions — historia de la casa',
    en: 'Koenig & Bauer Banknote Solutions — company history',
  },
  {
    href: 'https://banknote-solutions.koenig-bauer.com/en/design/specimens/',
    es: 'Koenig & Bauer Banknote Solutions — especímenes',
    en: 'Koenig & Bauer Banknote Solutions — specimens',
  },
  {
    href: 'https://www.coinbooks.org/esylum_v15n53a10.html',
    es: 'The E-Sylum — American Can Company y las Giori',
    en: 'The E-Sylum — American Can Company and the Giori notes',
  },
  {
    href: 'https://img1.wsimg.com/blobby/go/02d670a2-d62a-43f2-8b0e-9753be994e2f/An%20Alternate%20Look%20at%20the%20%E2%80%9CGiori%E2%80%9D%20Jefferson%20Tes.pdf',
    es: 'Gene Hessler — un vistazo distinto a las Jefferson Giori (PDF)',
    en: 'Gene Hessler — an alternate look at the Giori Jefferson notes (PDF)',
  },
  {
    href: 'https://patents.google.com/patent/US5062359A/en',
    es: 'Patente US 5,062,359 — máquina de intaglio para papel moneda',
    en: 'U.S. patent 5,062,359 — intaglio machine for currency papers',
  },
  {
    href: 'http://www.julesverne.ca/jvbanknote_giori.html',
    es: 'Andrew Nash — el Julio Verne de KBA-Giori',
    en: 'Andrew Nash — the KBA-Giori Jules Verne',
  },
  {
    href: 'https://en.numista.com/L101368',
    es: 'Numista — Catalog of Printers Promotional Sheets & Test Notes (Rollins)',
    en: 'Numista — Catalog of Printers Promotional Sheets & Test Notes (Rollins)',
  },
  {
    href: 'https://www.coinbooks.org/v26/esylum_v26n28a03.html',
    es: 'The E-Sylum — 18.ª edición del catálogo de Rollins',
    en: 'The E-Sylum — 18th edition of the Rollins catalogue',
  },
] as const;

export function gioriTestNotesPath(locale: Locale): string {
  return locale === 'en' ? `/en${GIORI_TEST_NOTES_PATH_EN}` : GIORI_TEST_NOTES_PATH;
}

export const gioriTestNotesDedicatedSlugs = [
  GIORI_TEST_NOTES_PATH.replace(/^\/|\/$/g, ''),
  GIORI_TEST_NOTES_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
