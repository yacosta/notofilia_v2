import type { CatalogSource, LocalizedText } from './catalog';
import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
import { colombiaCoinagePieces, coinagePiecePath } from './colombia-coinage-pieces';
import { localizePath, type Locale } from '../lib/locale-paths';
import type { TypeCatalogDocument, TypeCatalogEra, TypeCatalogFilter, TypeCatalogFlag } from '../lib/type-catalog';

export const COLOMBIA_COIN_CATALOG_PATH = `${COLOMBIA_COINAGE_PATH}catalogo/`;

export type ColombiaCoinTypeId =
  | '1-4-real-santa-marta-1820'
  | '50-pesos-1989'
  | '200-pesos-1994'
  | '500-pesos-1993'
  | '1000-pesos-1996'
  | '20-pesos-2012'
  | '50-pesos-2012'
  | '100-pesos-2012'
  | '200-pesos-2012'
  | '500-pesos-2012'
  | '1000-pesos-2012'
  | '5000-pesos-santa-laura-2015';

export type ColombiaCoinType = {
  id: ColombiaCoinTypeId;
  era: TypeCatalogEra;
  year: string;
  denomination: LocalizedText;
  issuer: LocalizedText;
  reference: string;
  title: LocalizedText;
  dek: LocalizedText;
  flags: TypeCatalogFlag[];
  holdingId?: (typeof colombiaCoinagePieces)[number]['id'];
  image?: string;
  imageAlt?: LocalizedText;
};

/** Seed types from BanRep / González White essays. Tag `image` here as coins are photographed. */
export const colombiaCoinTypes: ColombiaCoinType[] = [
  {
    id: '1-4-real-santa-marta-1820',
    era: 'independencia',
    year: '1820',
    denomination: { es: '1/4 real', en: '1/4 real' },
    issuer: { es: 'Santa Marta (ceca de sitio)', en: 'Santa Marta (siege mint)' },
    reference: 'KM# B4 · Restrepo 104 · Hernández 11',
    title: { es: '1/4 real · Santa Marta · 1820', en: '1/4 real · Santa Marta · 1820' },
    dek: {
      es: 'Cuartillo de cobre de sitio. En la colección.',
      en: 'Copper siege cuartillo. In the collection.',
    },
    flags: ['holding'],
    holdingId: '1-4-real-santa-marta-1820',
  },
  {
    id: '50-pesos-1989',
    era: 'republica',
    year: '1989–2011',
    denomination: { es: '50 pesos', en: '50 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '50 pesos · familia 1989', en: '50 pesos · 1989 family' },
    dek: {
      es: 'Tipo documentado por González White (2012): alpaca y acero niquelado, variedades de puntos.',
      en: 'Type documented by González White (2012): alpaca and nickel-plated steel, dot varieties.',
    },
    flags: ['pending'],
  },
  {
    id: '200-pesos-1994',
    era: 'republica',
    year: '1994–2012',
    denomination: { es: '200 pesos', en: '200 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '200 pesos · volante de huso', en: '200 pesos · spindle-whorl type' },
    dek: {
      es: 'Diseño de Dicken Castro sobre el motivo Quimbaya; ensayado por González White (2012).',
      en: 'Dicken Castro design after the Quimbaya motif; discussed by González White (2012).',
    },
    flags: ['pending'],
  },
  {
    id: '500-pesos-1993',
    era: 'republica',
    year: '1993–2012',
    denomination: { es: '500 pesos', en: '500 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '500 pesos · bimetálica 1993', en: '500 pesos · 1993 bimetallic' },
    dek: {
      es: 'Primera bimetálica de 500 pesos (Ley 31 de 1993). Ensayo de González White, 2012.',
      en: 'First 500-peso bimetallic (Law 31 of 1993). González White essay, 2012.',
    },
    flags: ['pending'],
  },
  {
    id: '1000-pesos-1996',
    era: 'republica',
    year: '1996–1998',
    denomination: { es: '1.000 pesos', en: '1,000 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '1.000 pesos · 1996–1998', en: '1,000 pesos · 1996–1998' },
    dek: {
      es: 'Tabla anexa al ensayo de 50 pesos de González White (2012). Sin foto en esta vitrina todavía.',
      en: 'Annex table in González White’s 2012 50-peso essay. No photograph in this case yet.',
    },
    flags: ['pending'],
  },
  {
    id: '20-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '20 pesos', en: '20 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '20 pesos · familia 2012', en: '20 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Producción anual en las tablas BanRep; no se publica una tirada de tipo.',
      en: 'Biodiversity and water family. Annual BanRep tables; no type-level mintage is published here.',
    },
    flags: ['pending'],
  },
  {
    id: '50-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '50 pesos', en: '50 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '50 pesos · familia 2012', en: '50 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Imagen pendiente.',
      en: 'Biodiversity and water family. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '100-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '100 pesos', en: '100 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '100 pesos · familia 2012', en: '100 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Imagen pendiente.',
      en: 'Biodiversity and water family. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '200-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '200 pesos', en: '200 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '200 pesos · familia 2012', en: '200 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Imagen pendiente.',
      en: 'Biodiversity and water family. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '500-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '500 pesos', en: '500 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '500 pesos · familia 2012', en: '500 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Imagen pendiente.',
      en: 'Biodiversity and water family. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '1000-pesos-2012',
    era: 'republica',
    year: 'desde 2012',
    denomination: { es: '1.000 pesos', en: '1,000 pesos' },
    issuer: { es: 'Banco de la República', en: 'Banco de la República' },
    reference: '',
    title: { es: '1.000 pesos · familia 2012', en: '1,000 pesos · 2012 family' },
    dek: {
      es: 'Familia de biodiversidad y agua. Imagen pendiente.',
      en: 'Biodiversity and water family. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '5000-pesos-santa-laura-2015',
    era: 'republica',
    year: '2015',
    denomination: { es: '5.000 pesos', en: '5,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '5.000 pesos · Santa Laura Montoya · 2015', en: '5,000 pesos · Santa Laura Montoya · 2015' },
    dek: {
      es: 'Conmemorativa documentada por González White (2015) y la columna BanRep de 2015.',
      en: 'Commemorative documented by González White (2015) and the BanRep 2015 column.',
    },
    flags: ['pending'],
  },
];

export const coinCatalogFilters: TypeCatalogFilter[] = [
  'all',
  'holding',
  'pending',
  'independencia',
  'santa-fe',
  'nueva-granada',
  'republica',
];

export const coinCatalogCopy = {
  es: {
    metaTitle: 'Catálogo visual de monedas de Colombia | Notofilia',
    metaDescription:
      'Tipos de moneda metálica colombiana con buscador: Santa Marta, la República y la familia de 2012. Sin precios. Las imágenes se añaden a medida que se documentan.',
    kicker: 'Colombia-Numismática',
    title: 'Catálogo visual de monedas',
    dek: 'Tipos colombianos —denominación, ceca, año— en una sola vitrina. Cuatro por fila, sin precios. La pieza de Santa Marta ya tiene foto; el resto se etiqueta cuando se fotografíe.',
    nav: 'Catálogo visual',
    searchLabel: 'Buscar tipos de monedas',
    searchPlaceholder: 'KM, ceca, denominación, año…',
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
    pickLabel: 'Referencia',
    seriesLead: 'La historia por épocas sigue en la vitrina de Colombia-Numismática.',
    seriesLink: 'Colombia-Numismática',
    coinageLead: 'El catálogo visual de billetes es una vitrina aparte.',
    coinageLink: 'Catálogo visual de billetes',
    sourcesTitle: 'Fuentes',
    statTypes: 'Tipos',
    statHoldings: 'En la colección',
    statImages: 'Con imagen',
    statYears: 'Años',
    sorts: {
      collection: 'Colección primero',
      pick: 'Referencia',
      'title-asc': 'Título: A → Z',
      year: 'Año',
    },
    filters: {
      all: 'Todas',
      holding: 'En la colección',
      pending: 'Sin imagen',
      independencia: 'Independencia',
      'santa-fe': 'Santa Fe',
      'nueva-granada': 'Nueva Granada',
      republica: 'República',
    } satisfies Record<(typeof coinCatalogFilters)[number], string>,
  },
  en: {
    metaTitle: 'Visual catalog of Colombian coins | Notofilia',
    metaDescription:
      'Colombian coin types with search: Santa Marta, the Republic, and the 2012 family. No prices. Images are added as coins are documented.',
    kicker: 'Colombia-Numismatics',
    title: 'Visual coin catalog',
    dek: 'Colombian types — denomination, mint, year — in one case. Four to a row, no prices. The Santa Marta piece already has a photograph; the rest stay ready to tag when they are shot.',
    nav: 'Visual catalog',
    searchLabel: 'Search coin types',
    searchPlaceholder: 'KM, mint, denomination, year…',
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
    viewNote: 'Open the piece',
    pickLabel: 'Reference',
    seriesLead: 'The period essays remain on the Colombia-Numismatics case.',
    seriesLink: 'Colombia-Numismatics',
    coinageLead: 'The visual banknote catalog is a separate case.',
    coinageLink: 'Visual banknote catalog',
    sourcesTitle: 'Sources',
    statTypes: 'Types',
    statHoldings: 'In the collection',
    statImages: 'With image',
    statYears: 'Years',
    sorts: {
      collection: 'Collection first',
      pick: 'Reference',
      'title-asc': 'Title: A → Z',
      year: 'Year',
    },
    filters: {
      all: 'All',
      holding: 'In the collection',
      pending: 'No image',
      independencia: 'Independence',
      'santa-fe': 'Santa Fe',
      'nueva-granada': 'New Granada',
      republica: 'Republic',
    } satisfies Record<(typeof coinCatalogFilters)[number], string>,
  },
} as const;

export const coinCatalogSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación de billetes y monedas',
    en: 'Banco de la República — Banknote and coin production and circulation',
    note: {
      es: 'Totales anuales por denominación desde 1987. Un total de año no es la tirada de un solo tipo.',
      en: 'Annual totals by denomination from 1987. A year total is not the mintage of a single type.',
    },
  },
  {
    href: 'https://en.numista.com/18073',
    es: 'Numista — ¼ real de Santa Marta, 1820 (N#18073)',
    en: 'Numista — Santa Marta ¼ real, 1820 (N#18073)',
    note: {
      es: 'KM# B4, Restrepo 104, Hernández 11. La ficha de la colección enlaza esta pieza.',
      en: 'KM# B4, Restrepo 104, Hernández 11. The collection record links this piece.',
    },
  },
  {
    href: 'https://en.numista.com/L100183',
    es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
    en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
    note: {
      es: 'Cód. 11 para el cuartillo de Santa Marta. No se publican precios.',
      en: 'Cód. 11 for the Santa Marta cuartillo. Prices are not published here.',
    },
  },
];

export function colombiaCoinTypeDocuments(locale: Locale): TypeCatalogDocument[] {
  return colombiaCoinTypes.map((type) => {
    const holding = type.holdingId
      ? colombiaCoinagePieces.find((piece) => piece.id === type.holdingId)
      : undefined;
    const image = holding?.images.composite ?? type.image;
    const title = holding ? holding.title[locale] : type.title[locale];
    const pick = holding?.reference ?? type.reference;
    const href = holding ? coinagePiecePath(holding, locale) : '';
    const flags = [...type.flags];
    if (holding && !flags.includes('holding')) flags.push('holding');
    if (!image && !flags.includes('pending')) flags.push('pending');
    return {
      id: `coin:${type.id}`,
      href,
      title,
      dek: holding ? holding.lead[locale] : type.dek[locale],
      pick,
      issuer: type.issuer[locale],
      denomination: type.denomination[locale],
      year: type.year,
      era: type.era,
      flags,
      image,
      imageAlt: holding?.frontCaption[locale] ?? type.imageAlt?.[locale] ?? title,
      searchText: [title, pick, type.issuer[locale], type.denomination[locale], type.year, type.dek[locale]].join(' '),
      inCollection: Boolean(holding),
    };
  });
}

export function coinCatalogPath(locale: Locale): string {
  return localizePath(COLOMBIA_COIN_CATALOG_PATH, locale);
}
