import { localizePath, type Locale } from '../lib/locale-paths';
import type { SearchFilter, SearchKind, SearchSort } from '../lib/search-index';

export const SEARCH_PATH = '/buscar/';

export function searchPath(locale: Locale): string {
  return localizePath(SEARCH_PATH, locale);
}

export const searchFilters: SearchFilter[] = [
  'all',
  'graded',
  'specimen',
  'proof',
  'remainder',
  'group',
  'single',
  'coin',
  'guide',
  'news',
  'glossary',
];

export const searchCopy = {
  es: {
    metaTitle: 'Buscar · Notofilia',
    metaDescription:
      'Busca billetes, monedas, seriales, referencias Pick, términos del glosario y guías en la colección virtual de Notofilia.',
    title: 'Buscar en la colección',
    dek: 'Seriales, Pick, certificados, piezas, guías y el glosario. Nada de esta colección está a la venta.',
    breadcrumb: 'Migas de pan',
    home: 'Inicio',
    nav: 'Buscar',
    searchLabel: 'Buscar en la colección',
    searchPlaceholder: 'Serial, Pick, país, término…',
    searchSubmit: 'Buscar',
    sortLabel: 'Ordenar resultados',
    filterLabel: 'Filtrar resultados',
    statusLabel: 'Resultados de la búsqueda',
    emptyQuery: 'Escribe un término o elige un filtro para recorrer el catálogo.',
    noResults: 'No hay resultados para esta búsqueda.',
    resultCount: (count: number) => (count === 1 ? '1 resultado' : `${count} resultados`),
    needsJs: 'La búsqueda en vivo necesita JavaScript. El formulario sigue disponible.',
    sorts: {
      relevance: 'Relevancia',
      'title-asc': 'Título: A → Z',
      'title-desc': 'Título: Z → A',
    } satisfies Record<SearchSort, string>,
    filters: {
      all: 'Todos',
      graded: 'Certificados (PMG/PCGS/NGC)',
      specimen: 'Especímenes',
      proof: 'Pruebas',
      remainder: 'Remainders',
      group: 'Lotes de grupo',
      single: 'Billetes sueltos',
      coin: 'Monedas',
      guide: 'Guías',
      news: 'Noticias',
      glossary: 'Glosario',
    } satisfies Record<Exclude<SearchFilter, 'series'>, string>,
    kinds: {
      piece: 'Pieza',
      series: 'Vitrina',
      glossary: 'Glosario',
      blog: 'Guía',
      news: 'Noticia',
    } satisfies Record<SearchKind, string>,
  },
  en: {
    metaTitle: 'Search · Notofilia',
    metaDescription:
      'Search banknotes, coins, serials, Pick references, glossary terms, and guides in the Notofilia virtual collection.',
    title: 'Search the collection',
    dek: 'Serials, Pick numbers, certificates, pieces, guides, and the glossary. Nothing in this collection is for sale.',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    nav: 'Search',
    searchLabel: 'Search the collection',
    searchPlaceholder: 'Serial, Pick, country, term…',
    searchSubmit: 'Search',
    sortLabel: 'Sort results',
    filterLabel: 'Filter results',
    statusLabel: 'Search results',
    emptyQuery: 'Type a term or choose a filter to browse the catalog.',
    noResults: 'No results for this search.',
    resultCount: (count: number) => (count === 1 ? '1 result' : `${count} results`),
    needsJs: 'Live search needs JavaScript. The form still works.',
    sorts: {
      relevance: 'Relevance',
      'title-asc': 'Title: A → Z',
      'title-desc': 'Title: Z → A',
    } satisfies Record<SearchSort, string>,
    filters: {
      all: 'All',
      graded: 'Graded (PMG/PCGS/NGC)',
      specimen: 'Specimens',
      proof: 'Proofs',
      remainder: 'Remainders',
      group: 'Group lots',
      single: 'Single notes',
      coin: 'Coins',
      guide: 'Guides',
      news: 'News',
      glossary: 'Glossary',
    } satisfies Record<Exclude<SearchFilter, 'series'>, string>,
    kinds: {
      piece: 'Piece',
      series: 'Case',
      glossary: 'Glossary',
      blog: 'Guide',
      news: 'News',
    } satisfies Record<SearchKind, string>,
  },
} as const;
