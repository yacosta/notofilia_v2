import type { CatalogSource, LocalizedText } from './catalog';
import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';
import { colombiaCoinagePieces, coinagePiecePath } from './colombia-coinage-pieces';
import { localizePath, type Locale } from '../lib/locale-paths';
import type { TypeCatalogDocument, TypeCatalogEra, TypeCatalogFilter, TypeCatalogFlag } from '../lib/type-catalog';

export const COLOMBIA_COIN_CATALOG_PATH = `${COLOMBIA_COINAGE_PATH}catalogo/`;

export type ColombiaCoinTypeId =
  | '1-4-real-santa-marta-1820'
  | '1-peso-pm-1907'
  | '2-pesos-pm-1907'
  | '5-pesos-pm-1907'
  | '10-centavos-palonegro-1902'
  | '20-centavos-palonegro-1902'
  | '50-centavos-palonegro-1902'
  | 'lazareto-50-centavos-1928'
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
  | '5000-pesos-santa-laura-2015'
  | '10000-pesos-2021'
  | '10000-pesos-2023'
  | '20000-pesos-2023'
  | '20000-pesos-2024-carriel'
  | '20000-pesos-2024-santa-marta';

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
    id: '1-peso-pm-1907',
    era: 'republica',
    year: '1907–1916',
    denomination: { es: '1 peso p/m', en: '1 peso p/m' },
    issuer: { es: 'República de Colombia', en: 'Republic of Colombia' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '1 peso p/m · cuproníquel · 1907–1916', en: '1 peso p/m · cupronickel · 1907–1916' },
    dek: {
      es: 'Peso de papel moneda en cuproníquel (equivalente a 1 centavo). Hernández lista Bruselas y Bogotá, efigie de la Paz; fechas 1907, 1910–1914 y 1916. No es un billete. Tipo pendiente de foto; no hay ficha de colección.',
      en: 'A cupronickel paper-money peso (equal to 1 centavo). Hernández lists Brussels and Bogotá, Peace bust; dates 1907, 1910–1914, and 1916. It is not a banknote. Image pending; no collection holding.',
    },
    flags: ['pending'],
  },
  {
    id: '2-pesos-pm-1907',
    era: 'republica',
    year: '1907, 1910, 1914',
    denomination: { es: '2 pesos p/m', en: '2 pesos p/m' },
    issuer: { es: 'República de Colombia', en: 'Republic of Colombia' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '2 pesos p/m · cuproníquel · 1907–1914', en: '2 pesos p/m · cupronickel · 1907–1914' },
    dek: {
      es: 'Mismo módulo Reyes: 2 pesos p/m en cuproníquel (equivalente a 2 centavos). Hernández publica 1907, 1910 y 1914. No es papel de la Junta de Conversión. Sin foto en esta vitrina.',
      en: 'Same Reyes module: a 2-peso p/m cupronickel (equal to 2 centavos). Hernández publishes 1907, 1910, and 1914. It is not Conversion Board paper. No photograph in this case.',
    },
    flags: ['pending'],
  },
  {
    id: '5-pesos-pm-1907',
    era: 'republica',
    year: '1907–1914',
    denomination: { es: '5 pesos p/m', en: '5 pesos p/m' },
    issuer: { es: 'República de Colombia', en: 'Republic of Colombia' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '5 pesos p/m · cuproníquel · 1907–1914', en: '5 pesos p/m · cupronickel · 1907–1914' },
    dek: {
      es: 'Cinco pesos p/m en cuproníquel (equivalente a 5 centavos). Hernández separa 1907–1909 de las fechas 1912–1914, más escasas. Tipo, no ejemplar de la colección.',
      en: 'A 5-peso p/m cupronickel (equal to 5 centavos). Hernández splits 1907–1909 from the scarcer 1912–1914 dates. A type, not a collection specimen.',
    },
    flags: ['pending'],
  },
  {
    id: '10-centavos-palonegro-1902',
    era: 'republica',
    year: '1902',
    denomination: { es: '10 centavos', en: '10 centavos' },
    issuer: { es: 'Necesidad · Palonegro (Santander)', en: 'Necessity · Palonegro (Santander)' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '10 centavos · Palonegro · 1902', en: '10 centavos · Palonegro · 1902' },
    dek: {
      es: 'Moneda de necesidad en latón, Bucaramanga, leyenda Santander. Hernández las llama coscojas: cápsulas de fusil de Palonegro (1902). Distintas de la moneda exclusiva de los lazaretos. Sin ficha de colección.',
      en: 'Brass necessity coin, Bucaramanga, Santander legend. Hernández calls them coscojas: rifle-cartridge cases from Palonegro (1902). Distinct from lazaretto exclusive coinage. No collection record.',
    },
    flags: ['pending'],
  },
  {
    id: '20-centavos-palonegro-1902',
    era: 'republica',
    year: '1902',
    denomination: { es: '20 centavos', en: '20 centavos' },
    issuer: { es: 'Necesidad · Palonegro (Santander)', en: 'Necessity · Palonegro (Santander)' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '20 centavos · Palonegro · 1902', en: '20 centavos · Palonegro · 1902' },
    dek: {
      es: 'Módulo de 20 centavos de la misma emisión de necesidad de 1902. Hernández la marca más escasa que el 10 centavos. No se publica aquí una tirada ni un ejemplar de la colección.',
      en: 'The 20-centavo module of the same 1902 necessity issue. Hernández marks it scarcer than the 10 centavos. No mintage and no collection specimen are published here.',
    },
    flags: ['pending'],
  },
  {
    id: '50-centavos-palonegro-1902',
    era: 'republica',
    year: '1902',
    denomination: { es: '50 centavos', en: '50 centavos' },
    issuer: { es: 'Necesidad · Palonegro (Santander)', en: 'Necessity · Palonegro (Santander)' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '50 centavos · Palonegro · 1902', en: '50 centavos · Palonegro · 1902' },
    dek: {
      es: 'Cincuenta centavos de Palonegro, 1902. Hernández las agrupa con el 10 y el 20 como coscojas de guerra, no como moneda de lazareto. Imagen pendiente.',
      en: 'Fifty centavos of Palonegro, 1902. Hernández groups them with the 10 and 20 as wartime coscojas, not lazaretto coin. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: 'lazareto-50-centavos-1928',
    era: 'republica',
    year: '1928',
    denomination: { es: '50 centavos', en: '50 centavos' },
    issuer: { es: 'Lazaretos (Agua de Dios, Contratación, Caño del Oro)', en: 'Lazarettos (Agua de Dios, Contratación, Caño del Oro)' },
    reference: 'Hernández 8.ª ed. 2023',
    title: { es: '50 centavos · lazareto · 1928', en: '50 centavos · lazaretto · 1928' },
    dek: {
      es: 'Última acuñación de la moneda exclusiva del cordón, bajo Abadía Méndez: solo 50 centavos en bronce. Banrepcultural y Hernández la documentan; esta vitrina aún no tiene foto ni ejemplar.',
      en: 'Last striking of the exclusive cordon coin, under Abadía Méndez: only bronze 50 centavos. Banrepcultural and Hernández document it; this case still has neither a photograph nor a specimen.',
    },
    flags: ['pending'],
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
  {
    id: '10000-pesos-2021',
    era: 'republica',
    year: '2021',
    denomination: { es: '10.000 pesos', en: '10,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '10.000 pesos · conmemorativas · 2021', en: '10,000 pesos · commemoratives · 2021' },
    dek: {
      es: 'BanRep anota ediciones conmemorativas de 10.000 pesos en 2021: Policarpa Salavarrieta, las Fuerzas Armadas y el Bicentenario de la Independencia. No se publica aquí una tirada de tipo. Imagen pendiente.',
      en: 'BanRep notes 10,000-peso commemorative issues in 2021: Policarpa Salavarrieta, the Armed Forces, and the Bicentenary of Independence. No type-level mintage is published here. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '10000-pesos-2023',
    era: 'republica',
    year: '2023',
    denomination: { es: '10.000 pesos', en: '10,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '10.000 pesos · Lago de Maracaibo · 2023', en: '10,000 pesos · Lake Maracaibo · 2023' },
    dek: {
      es: 'BanRep: edición conmemorativa de 10.000 pesos, batalla naval del Lago de Maracaibo y el 24 de julio como día de la Armada. La tabla de 2022 no registra producción de esta denominación. Tipo, no holding.',
      en: 'BanRep: a 10,000-peso commemorative for the naval battle of Lake Maracaibo and 24 July as Navy Day. The 2022 table records no production of this denomination. A type, not a holding.',
    },
    flags: ['pending'],
  },
  {
    id: '20000-pesos-2023',
    era: 'republica',
    year: '2023',
    denomination: { es: '20.000 pesos', en: '20,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '20.000 pesos · centenario del Banco · 2023', en: '20,000 pesos · Bank centenary · 2023' },
    dek: {
      es: 'BanRep: 20.000 pesos conmemorativos de los 100 años del Banco de la República (2023). No se asigna aquí el total de denominación-año a un solo diseño. Imagen pendiente.',
      en: 'BanRep: a 20,000-peso commemorative for the Banco de la República’s centenary (2023). This record does not assign the denomination-year total to one design. Image pending.',
    },
    flags: ['pending'],
  },
  {
    id: '20000-pesos-2024-carriel',
    era: 'republica',
    year: '2024',
    denomination: { es: '20.000 pesos', en: '20,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '20.000 pesos · guarniel · 2024', en: '20,000 pesos · carriel · 2024' },
    dek: {
      es: 'BanRep: 20.000 pesos de 2024 en homenaje al guarniel o carriel antioqueño. Distinto de la fila de Santa Marta del mismo año. Sin foto.',
      en: 'BanRep: a 2024 20,000-peso homage to the Antioquian guarniel or carriel. Distinct from the Santa Marta row of the same year. No photograph.',
    },
    flags: ['pending'],
  },
  {
    id: '20000-pesos-2024-santa-marta',
    era: 'republica',
    year: '2024',
    denomination: { es: '20.000 pesos', en: '20,000 pesos' },
    issuer: { es: 'Banco de la República · Ibagué', en: 'Banco de la República · Ibagué' },
    reference: '',
    title: { es: '20.000 pesos · Santa Marta · 2024', en: '20,000 pesos · Santa Marta · 2024' },
    dek: {
      es: 'BanRep registra una segunda fila de 2024: quinto centenario de la fundación de Santa Marta. No es el cuartillo de sitio de 1820. Tipo pendiente de documentación fotográfica.',
      en: 'BanRep records a second 2024 row: the fifth centenary of Santa Marta’s founding. It is not the 1820 siege cuartillo. Type pending photographic documentation.',
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
      'Tipos de moneda metálica colombiana: Santa Marta, pesos p/m, Palonegro, lazaretos, la República y conmemorativas BanRep. Sin precios. Las imágenes se añaden a medida que se documentan.',
    kicker: 'Colombia-Numismática',
    title: 'Catálogo visual de monedas',
    dek: 'Tipos colombianos —denominación, ceca, año— en una sola vitrina. Cuatro por fila, sin precios. La pieza de Santa Marta ya tiene foto; pesos p/m, Palonegro y conmemorativas recientes se etiquetan cuando se fotografíen.',
    nav: 'Catálogo visual',
    searchLabel: 'Buscar tipos de monedas',
    searchPlaceholder: 'KM, ceca, denominación, año…',
    searchSubmit: 'Buscar',
    sortLabel: 'Ordenar tipos',
    filterLabel: 'Filtrar tipos',
    statusLabel: 'Tipos visibles',
    emptyQuery: 'Todos los tipos. Escriba un término o elija un filtro.',
    noResults: 'No hay tipos para esta búsqueda.',
    resultCount: (count: number) => (count === 1 ? '1 tipo' : `${count} tipos`),
    needsJs: 'La búsqueda en vivo necesita JavaScript. El formulario sigue disponible.',
    pendingImage: 'Imagen pendiente',
    inCollection: 'En la colección',
    viewNote: 'Ver la ficha',
    pickLabel: 'Referencia',
    seriesLead: 'La historia por épocas sigue en la vitrina de Colombia-Numismática.',
    seriesLink: 'Colombia-Numismática',
    coinageLead: 'El catálogo visual de todos los billetes de la colección es una vitrina aparte.',
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
      'Colombian coin types: Santa Marta, p/m pesos, Palonegro, lazarettos, the Republic, and BanRep commemoratives. No prices. Images are added as coins are documented.',
    kicker: 'Colombia-Numismatics',
    title: 'Visual coin catalog',
    dek: 'Colombian types — denomination, mint, year — in one case. Four to a row, no prices. The Santa Marta piece already has a photograph; p/m pesos, Palonegro, and recent commemoratives stay ready to tag when they are shot.',
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
    coinageLead: 'The visual catalog of every banknote in the collection is a separate case.',
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
    href: 'https://en.numista.com/L100183',
    es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
    en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
    note: {
      es: 'Pesos p/m de 1907–1916 (cuproníquel, efigie de la Paz) y coscojas de Palonegro de 1902. No se publican columnas de precios ni láminas.',
      en: 'P/m pesos of 1907–1916 (cupronickel, Peace bust) and Palonegro coscojas of 1902. Price columns and plates are not published.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación',
    en: 'Banco de la República — Production and circulation',
    note: {
      es: 'Tabla de producción de moneda: conmemorativas de 10.000 (2021, 2023) y 20.000 (2023–2024). Los totales de denominación-año no se publican aquí como tirada de un solo tipo.',
      en: 'Coin production table: 10,000-peso commemoratives (2021, 2023) and 20,000-peso commemoratives (2023–2024). Denomination-year totals are not published here as a single-type mintage.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/exposiciones/la-moneda-de-los-lazaretos',
    es: 'Banrepcultural — La moneda de los lazaretos',
    en: 'Banrepcultural — The coin of the lazarettos',
    note: {
      es: 'Última acuñación de 1928: 50 centavos de bronce para el cordón sanitario. Distinta de las coscojas de Palonegro.',
      en: 'Last 1928 striking: bronze 50 centavos for the sanitary cordon. Distinct from the Palonegro coscojas.',
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
      country: 'CO',
      serial: '',
      inCollection: Boolean(holding),
    };
  });
}

export function coinCatalogPath(locale: Locale): string {
  return localizePath(COLOMBIA_COIN_CATALOG_PATH, locale);
}
