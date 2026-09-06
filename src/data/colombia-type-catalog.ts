import type { CatalogSource } from './catalog.ts';
import { COLOMBIA_PATH } from './colombia.ts';
import { collectionNoteDocuments } from './collection-note-catalog.ts';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import type { TypeCatalogDocument, TypeCatalogFilter } from '../lib/type-catalog.ts';

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
  'tiquetes',
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
    coinageLead: 'Todos los billetes de la colección, no solo Colombia, están en el catálogo visual de notafilia.',
    coinageLink: 'Catálogo visual de todos los billetes',
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
      tiquetes: 'Tiquetes y vales',
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
    coinageLead: 'Every banknote in the collection, not only Colombia, lives in the notaphily visual catalog.',
    coinageLink: 'Visual catalog of every banknote',
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
      tiquetes: 'Tickets and vouchers',
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
];

/** Colombia holdings only. The all-country catalog lives under notafilia. */
export function colombiaNoteTypeDocuments(locale: Locale): TypeCatalogDocument[] {
  return collectionNoteDocuments(locale, 'CO');
}

export function noteCatalogPath(locale: Locale): string {
  return localizePath(COLOMBIA_NOTES_CATALOG_PATH, locale);
}
