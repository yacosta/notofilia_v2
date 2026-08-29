import type { CatalogSource, LocalizedText } from './catalog.ts';
import { COLOMBIA_PATH } from './colombia.ts';
import { colombiaNotes, notePath, notePieces } from './colombia-notes.ts';
import { colombiaErrorNotes } from './colombia-errors.ts';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import {
  normalizePickToken,
  pickTokens,
  type TypeCatalogDocument,
  type TypeCatalogEra,
  type TypeCatalogFilter,
  type TypeCatalogFlag,
} from '../lib/type-catalog.ts';

export const COLOMBIA_NOTES_CATALOG_PATH = `${COLOMBIA_PATH}catalogo/`;

export const noteCatalogFilters: TypeCatalogFilter[] = [
  'all',
  'pending',
  'specimen',
  'remainder',
  'proof',
  'independencia',
  'banca-libre',
  'banco-nacional',
  'banco-central',
  'banco-de-la-republica',
  'familias-modernas',
  'errores',
];

export const noteCatalogCopy = {
  es: {
    metaTitle: 'Catálogo visual de billetes de Colombia | Notofilia',
    metaDescription:
      'Billetes colombianos de la colección: independencia, banca libre, Banco Nacional y Banco de la República. Sin precios. La vitrina crece a medida que se documentan las piezas.',
    kicker: 'Colombia · Notafilia',
    title: 'Catálogo visual de billetes',
    dek: 'La colección actual, pieza por pieza. Cuatro por fila, sin precios. Cuando se documenta un billete nuevo, aparece en esta vitrina en la siguiente publicación.',
    nav: 'Catálogo visual',
    searchLabel: 'Buscar billetes',
    searchPlaceholder: 'Pick, banco, denominación, serial, año…',
    searchSubmit: 'Buscar',
    sortLabel: 'Ordenar billetes',
    filterLabel: 'Filtrar billetes',
    statusLabel: 'Billetes visibles',
    emptyQuery: 'Toda la colección. Escribe un término o elige un filtro.',
    noResults: 'No hay billetes para esta búsqueda.',
    resultCount: (count: number) => (count === 1 ? '1 billete' : `${count} billetes`),
    needsJs: 'La búsqueda en vivo necesita JavaScript. El formulario sigue disponible.',
    pendingImage: 'Imagen pendiente',
    inCollection: 'En la colección',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    seriesLead: 'La historia por épocas sigue en la vitrina de Colombia.',
    seriesLink: 'Colombia · Banca libre y Banco de la República',
    coinageLead: 'El catálogo visual de monedas es una vitrina aparte.',
    coinageLink: 'Catálogo visual de monedas',
    sourcesTitle: 'Fuentes',
    statTypes: 'Billetes',
    statHoldings: 'En la colección',
    statImages: 'Con imagen',
    statYears: 'Años',
    sorts: {
      collection: 'Colección primero',
      pick: 'Pick',
      'title-asc': 'Título: A → Z',
      year: 'Año',
    },
    filters: {
      all: 'Todos',
      pending: 'Sin imagen',
      specimen: 'Especímenes',
      remainder: 'Remainders',
      proof: 'Pruebas',
      independencia: 'Independencia',
      'banca-libre': 'Banca libre',
      'banco-nacional': 'Banco Nacional',
      'banco-central': 'Banco Central',
      'banco-de-la-republica': 'Banco de la República',
      'familias-modernas': 'Familias modernas',
      errores: 'Errores',
    } satisfies Record<(typeof noteCatalogFilters)[number], string>,
  },
  en: {
    metaTitle: 'Visual catalog of Colombian banknotes | Notofilia',
    metaDescription:
      'Colombian banknotes in the collection: independence, free banking, Banco Nacional, and Banco de la República. No prices. The case grows as pieces are documented.',
    kicker: 'Colombia · Notaphily',
    title: 'Visual banknote catalog',
    dek: 'The current collection, one card per piece. Four to a row, no prices. When a new note is documented, it appears in this case on the next build.',
    nav: 'Visual catalog',
    searchLabel: 'Search banknotes',
    searchPlaceholder: 'Pick, bank, denomination, serial, year…',
    searchSubmit: 'Search',
    sortLabel: 'Sort banknotes',
    filterLabel: 'Filter banknotes',
    statusLabel: 'Visible banknotes',
    emptyQuery: 'The whole collection. Type a term or choose a filter.',
    noResults: 'No banknotes for this search.',
    resultCount: (count: number) => (count === 1 ? '1 banknote' : `${count} banknotes`),
    needsJs: 'Live search needs JavaScript. The form still works.',
    pendingImage: 'Image pending',
    inCollection: 'In the collection',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    seriesLead: 'The period essays remain on the Colombia case.',
    seriesLink: 'Colombia · Free banking and the Banco de la República',
    coinageLead: 'The visual coin catalog is a separate case.',
    coinageLink: 'Visual coin catalog',
    sourcesTitle: 'Sources',
    statTypes: 'Banknotes',
    statHoldings: 'In the collection',
    statImages: 'With image',
    statYears: 'Years',
    sorts: {
      collection: 'Collection first',
      pick: 'Pick',
      'title-asc': 'Title: A → Z',
      year: 'Year',
    },
    filters: {
      all: 'All',
      pending: 'No image',
      specimen: 'Specimens',
      remainder: 'Remainders',
      proof: 'Proofs',
      independencia: 'Independence',
      'banca-libre': 'Free banking',
      'banco-nacional': 'Banco Nacional',
      'banco-central': 'Banco Central',
      'banco-de-la-republica': 'Banco de la República',
      'familias-modernas': 'Modern families',
      errores: 'Errors',
    } satisfies Record<(typeof noteCatalogFilters)[number], string>,
  },
} as const;

export const noteCatalogSources: CatalogSource[] = [
  {
    href: 'https://www.banknote.ws/COLLECTION/countries/AME/COL/COLOMBIA.htm',
    es: 'Bank Note Museum — Colombia',
    en: 'Bank Note Museum — Colombia',
    note: {
      es: 'Índice Pick de emisores colombianos. Esta vitrina muestra las piezas de la colección, no un censo de tipos.',
      en: 'Pick index of Colombian issuers. This case shows collection pieces, not a type census.',
    },
  },
  {
    href: 'https://en.numista.com/L100183',
    es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
    en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
    note: {
      es: 'Independencia, banca libre y Banco Nacional. No se publican columnas de precios.',
      en: 'Independence, free banking, and Banco Nacional. Price columns are not published here.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación de billetes y monedas',
    en: 'Banco de la República — Banknote and coin production and circulation',
    note: {
      es: 'Totales por denominación y año; no son la tirada de un solo Pick.',
      en: 'Totals by denomination and year; not the printage of a single Pick.',
    },
  },
  {
    href: 'https://currency.ha.com/c/search/results.zx?term=Colombia&si=2&archive_state=5327&sold_status=1526&dept=2021&sb=1&mode=archive',
    es: 'Heritage Auctions — archivo vendido de papel mundial (búsqueda Colombia)',
    en: 'Heritage Auctions — World Paper Money sold archive (Colombia search)',
    note: {
      es: 'Comparables para identificar tipos. No se republican precios ni se enlazan fotografías de Heritage. Los lotes no son fichas de esta vitrina.',
      en: 'Comparables for type identification. Realized prices are not republished, and Heritage photographs are not hotlinked. Lots are not holdings in this case.',
    },
  },
];

type HoldingOverlay = {
  id: string;
  tokens: string[];
  href: string;
  title: LocalizedText;
  dek: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  pick: string;
  serial: string;
  issuer: LocalizedText;
  denomination: LocalizedText;
  year: string;
  flags: TypeCatalogFlag[];
  era: TypeCatalogEra;
};

function yearFromPrinted(printed: LocalizedText): string {
  const match = printed.es.match(/(1[789]\d{2}|20\d{2})/);
  return match?.[1] ?? '';
}

function denominationFromTitle(title: LocalizedText): LocalizedText {
  return {
    es: title.es.split('·')[0]?.trim() ?? '',
    en: title.en.split('·')[0]?.trim() ?? '',
  };
}

function holdingOverlays(): HoldingOverlay[] {
  const overlays: HoldingOverlay[] = [];
  for (const note of [...colombiaNotes, ...colombiaErrorNotes]) {
    for (const piece of notePieces(note)) {
      const tokens = pickTokens(piece.pick);
      const flags: TypeCatalogFlag[] = ['holding'];
      const blob = `${piece.title.es} ${note.kicker.es} ${piece.pick}`;
      if (/specimen|espécimen|especimen/i.test(blob)) flags.push('specimen');
      if (/prueba|proof/i.test(blob)) flags.push('proof');
      if (/remainder/i.test(blob)) flags.push('remainder');
      if (note.chapterId === 'errores' || /error|maculatura/i.test(blob)) flags.push('error');
      if (!piece.images.front) flags.push('pending');
      overlays.push({
        id: `note:${note.id}:${piece.id}`,
        tokens,
        href: `${notePath(note, 'es')}${piece.id !== note.id ? `#${piece.id}` : ''}`,
        title: piece.title,
        dek: piece.lead,
        image: piece.images.front,
        imageAlt: piece.frontCaption,
        pick: piece.pick,
        serial: piece.serial,
        issuer: note.kicker,
        denomination: denominationFromTitle(piece.title),
        year: yearFromPrinted(piece.printed),
        flags,
        era: note.chapterId === 'errores' ? 'errores' : note.chapterId,
      });
    }
  }
  return overlays;
}

/** One document per collection piece. New notes in colombiaNotes / colombiaErrorNotes appear on the next build. */
export function colombiaNoteTypeDocuments(locale: Locale): TypeCatalogDocument[] {
  return holdingOverlays().map((overlay) => {
    const title = overlay.title[locale];
    const dek = overlay.dek[locale];
    const issuer = overlay.issuer[locale];
    const denomination = overlay.denomination[locale];
    return {
      id: overlay.id,
      href: localizePath(overlay.href, locale),
      title,
      dek,
      pick: overlay.pick,
      issuer,
      denomination,
      year: overlay.year,
      era: overlay.era,
      flags: overlay.flags,
      image: overlay.image || undefined,
      imageAlt: overlay.imageAlt[locale],
      searchText: [
        title,
        dek,
        overlay.pick,
        normalizePickToken(overlay.pick),
        overlay.tokens.join(' '),
        overlay.serial,
        issuer,
        denomination,
        overlay.year,
        overlay.era,
        overlay.flags.join(' '),
      ].join(' '),
      inCollection: true,
    };
  });
}

export function noteCatalogPath(locale: Locale): string {
  return localizePath(COLOMBIA_NOTES_CATALOG_PATH, locale);
}
