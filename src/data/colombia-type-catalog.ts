import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CatalogSource, LocalizedText } from './catalog';
import { COLOMBIA_PATH } from './colombia';
import { colombiaNotes, notePath, notePieces } from './colombia-notes';
import { colombiaErrorNotes } from './colombia-errors';
import { localizePath, type Locale } from '../lib/locale-paths';
import {
  displayDenomination,
  displayIssuer,
  normalizePickToken,
  parseHeritageLots,
  pickTokens,
  type TypeCatalogDocument,
  type TypeCatalogEra,
  type TypeCatalogFilter,
  type TypeCatalogFlag,
} from '../lib/type-catalog';

export const COLOMBIA_NOTES_CATALOG_PATH = `${COLOMBIA_PATH}catalogo/`;

const LOTS_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../docs/sources/heritage/lots.txt',
);

/** Manual image tags for types that are not yet a piece page. Holdings overlay these. */
export const colombiaNoteTypeImages: Record<string, { image: string; alt?: LocalizedText }> = {};

export const noteCatalogFilters: TypeCatalogFilter[] = [
  'all',
  'holding',
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
      'Tipos de papel moneda colombiano con buscador: independencia, banca libre, Banco Nacional y Banco de la República. Sin precios. Las imágenes se añaden a medida que se documentan.',
    kicker: 'Colombia · Notafilia',
    title: 'Catálogo visual de billetes',
    dek: 'Tipos colombianos —Pick, emisor, año— en una sola vitrina. Cuatro por fila, sin precios. Las fichas de la colección llevan foto; el resto queda listo para etiquetar cuando se fotografíe.',
    nav: 'Catálogo visual',
    searchLabel: 'Buscar tipos de billetes',
    searchPlaceholder: 'Pick, banco, denominación, año…',
    searchSubmit: 'Buscar',
    sortLabel: 'Ordenar tipos',
    filterLabel: 'Filtrar tipos',
    statusLabel: 'Tipos visibles',
    emptyQuery: 'Todos los tipos. Escribe un término o elige un filtro.',
    noResults: 'No hay tipos para esta búsqueda.',
    resultCount: (count: number) => (count === 1 ? '1 tipo' : `${count} tipos`),
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
    statTypes: 'Tipos',
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
      holding: 'En la colección',
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
      'Colombian paper-money types with search: independence, free banking, Banco Nacional, and Banco de la República. No prices. Images are added as notes are documented.',
    kicker: 'Colombia · Notaphily',
    title: 'Visual banknote catalog',
    dek: 'Colombian types — Pick, issuer, year — in one case. Four to a row, no prices. Collection holdings show a photograph; the rest stay ready to tag when they are shot.',
    nav: 'Visual catalog',
    searchLabel: 'Search banknote types',
    searchPlaceholder: 'Pick, bank, denomination, year…',
    searchSubmit: 'Search',
    sortLabel: 'Sort types',
    filterLabel: 'Filter types',
    statusLabel: 'Visible types',
    emptyQuery: 'All types. Type a term or choose a filter.',
    noResults: 'No types for this search.',
    resultCount: (count: number) => (count === 1 ? '1 type' : `${count} types`),
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
    statTypes: 'Types',
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
      holding: 'In the collection',
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
      es: 'Índice Pick de emisores colombianos. Esta vitrina numera tipos, no ejemplares de subasta.',
      en: 'Pick index of Colombian issuers. This case numbers types, not auction lots.',
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
      es: 'Índice de tipos vistos en subasta. No se republican precios ni se enlazan fotografías de Heritage.',
      en: 'An index of types seen at auction. Realized prices are not republished, and Heritage photographs are not hotlinked.',
    },
  },
];

type HoldingOverlay = {
  tokens: string[];
  href: string;
  title: LocalizedText;
  dek: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  pick: string;
  issuer: LocalizedText;
  year: string;
  flags: TypeCatalogFlag[];
  era: TypeCatalogEra;
};

function yearFromPrinted(printed: LocalizedText): string {
  const match = printed.es.match(/(1[789]\d{2}|20\d{2})/);
  return match?.[1] ?? '';
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
      overlays.push({
        tokens,
        href: `${notePath(note, 'es')}${piece.id !== note.id ? `#${piece.id}` : ''}`,
        title: piece.title,
        dek: piece.lead,
        image: piece.images.front,
        imageAlt: piece.frontCaption,
        pick: piece.pick,
        issuer: note.kicker,
        year: yearFromPrinted(piece.printed),
        flags,
        era: note.chapterId === 'errores' ? 'errores' : note.chapterId,
      });
    }
  }
  return overlays;
}

function findOverlay(pick: string, overlays: HoldingOverlay[]): HoldingOverlay | undefined {
  const token = normalizePickToken(pick);
  if (!token) return undefined;
  return overlays.find(
    (overlay) =>
      overlay.tokens.includes(token) ||
      overlay.tokens.some((item) => item.startsWith(token) || token.startsWith(item)),
  );
}

let heritageSeedsCache: ReturnType<typeof parseHeritageLots> | undefined;

export function heritageNoteTypeSeeds() {
  heritageSeedsCache ??= parseHeritageLots(readFileSync(LOTS_PATH, 'utf8'));
  return heritageSeedsCache;
}

export function colombiaNoteTypeDocuments(locale: Locale): TypeCatalogDocument[] {
  const overlays = holdingOverlays();
  const used = new Set<HoldingOverlay>();
  const documents: TypeCatalogDocument[] = [];

  for (const seed of heritageNoteTypeSeeds()) {
    const overlay = findOverlay(seed.pick, overlays);
    if (overlay) used.add(overlay);
    const tag = colombiaNoteTypeImages[normalizePickToken(seed.pick)];
    const issuer = overlay ? overlay.issuer[locale] : displayIssuer(seed.issuer, locale);
    const denomination = displayDenomination(seed.denomination, locale);
    const title = overlay
      ? overlay.title[locale]
      : [issuer, denomination, seed.year].filter(Boolean).join(' · ');
    const pick = overlay?.pick ?? (seed.pick ? `P# ${seed.pick}` : '');
    const image = overlay?.image ?? tag?.image;
    const flags = [...new Set([...(overlay?.flags ?? []), ...seed.flags, ...(image ? [] : (['pending'] as const))])];
    const era = overlay?.era ?? seed.era;
    const dek = overlay
      ? overlay.dek[locale]
      : [pick, issuer, seed.year].filter(Boolean).join(' · ');
    documents.push({
      id: `note:${seed.id}`,
      href: overlay ? localizePath(overlay.href, locale) : '',
      title,
      dek,
      pick,
      issuer,
      denomination,
      year: overlay?.year || seed.year,
      era,
      flags,
      image,
      imageAlt: overlay?.imageAlt[locale] ?? tag?.alt?.[locale] ?? title,
      searchText: [title, dek, pick, normalizePickToken(pick), issuer, denomination, seed.year, era, flags.join(' ')].join(
        ' ',
      ),
      inCollection: Boolean(overlay),
    });
  }

  for (const overlay of overlays) {
    if (used.has(overlay)) continue;
    const id = overlay.tokens[0] || normalizePickToken(overlay.pick) || overlay.href;
    documents.push({
      id: `note-holding:${id}`,
      href: localizePath(overlay.href, locale),
      title: overlay.title[locale],
      dek: overlay.dek[locale],
      pick: overlay.pick,
      issuer: overlay.issuer[locale],
      denomination: '',
      year: overlay.year,
      era: overlay.era,
      flags: overlay.flags,
      image: overlay.image,
      imageAlt: overlay.imageAlt[locale],
      searchText: [overlay.title[locale], overlay.dek[locale], overlay.pick, overlay.year].join(' '),
      inCollection: true,
    });
  }

  return documents;
}

export function noteCatalogPath(locale: Locale): string {
  return localizePath(COLOMBIA_NOTES_CATALOG_PATH, locale);
}
