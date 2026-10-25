import type { CatalogSource } from './catalog';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import { COLOMBIA_COINAGE_PATH } from './colombia-coinage.ts';

/**
 * Fingerprint, no serial: A. M. de la Cuadra + una mitad + 1855 +
 * Rulau Mag-5 / Fonrobert 8263. Unslabbed. The NGC MS 62 ex-Norweb
 * piece (cert 5850277-003) is a different specimen.
 * Masters are the supplied 1672×941 frames. Do not crop them.
 */
export const CUADRA_UNA_MITAD_ID = 'co-1855-una-mitad-am-de-la-cuadra';

export const CUADRA_UNA_MITAD_PATH = `${COLOMBIA_COINAGE_PATH}una-mitad-am-de-la-cuadra-1855/`;
export const CUADRA_UNA_MITAD_PATH_EN =
  '/collection/colombia-numismatics/una-mitad-am-de-la-cuadra-1855/';

/**
 * Literal fields for scripts/build-identify-index.mjs. That script reads
 * `path: '/coleccion/…'`, `id: '…'`, and `title: { es, en }` as text.
 */
export const cuadraUnaMitadIndex = {
  id: 'co-1855-una-mitad-am-de-la-cuadra',
  path: '/coleccion/colombia-numismatica/una-mitad-am-de-la-cuadra-1855/',
  reference: 'Rulau Mag-5 · Fonrobert 8263',
  title: {
    es: 'Una mitad · A. M. de la Cuadra · 1855',
    en: 'Una mitad · A. M. de la Cuadra · 1855',
  },
};

export const CUADRA_UNA_MITAD_IMAGES = {
  front: '/images/catalog/colombia/colombia-am-de-la-cuadra-una-mitad-1855-front.png',
  back: '/images/catalog/colombia/colombia-am-de-la-cuadra-una-mitad-1855-back.png',
  composite: '/images/catalog/colombia/colombia-am-de-la-cuadra-una-mitad-1855-composite.png',
  width: 1672,
  height: 941,
} as const;

export const cuadraUnaMitadCopy = {
  es: {
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Una mitad, 1855 · A. M. de la Cuadra',
    metaDescription:
      'Ficha privada de A. M. de la Cuadra, una mitad, 1855. Anverso AM / DE. LA / CUADRA; reverso UNA MITAD. Rulau Mag-5 y Fonrobert 8263.',
    kicker: 'Colombia-Numismática · Ficha privada',
    title: 'Una mitad · A. M. de la Cuadra · 1855',
    h1: 'Una mitad, 1855',
    lead:
      'Ficha privada de A. M. de la Cuadra, fechada 1855, con la leyenda UNA MITAD. El anverso lee AM / DE. LA / CUADRA. El cuño no nombra una ciudad.',
    factsHeading: 'Datos de catálogo',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza',
    sourcesHeading: 'Fuentes',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    valueLabel: 'Valor',
    issuerLabel: 'Emisor',
    metalLabel: 'Metal',
    placeLabel: 'Lugar',
    makerLabel: 'Fabricante',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    seriesCta: 'Volver a Colombia-Numismática',
    reference: 'Rulau Mag-5 · Fonrobert 8263 · Sweeny y Bernal A2',
    year: '1855, en el reverso.',
    value:
      'Una mitad. Sedwick la glosa como medio cuartillo. Sweeny y Bernal leen «mitad» como la mitad de un cuartillo, cerca de un octavo de real. El disco no imprime esa equivalencia.',
    issuer: 'A. M. de la Cuadra. Las iniciales no se desarrollan.',
    metal: 'Latón en Sedwick y en Sweeny y Bernal, para el tipo. La aleación de este ejemplar no se analizó.',
    place:
      'Magdalena, en la ficha de Sedwick (Rulau Mag-5). El cuño no nombra Santa Marta ni otra ciudad.',
    maker:
      'Atribuida a Scovill Manufacturing, Waterbury, Connecticut. Este disco no trae marca de fabricante.',
    grade:
      'Sin encapsular y sin grado numérico. Pátina oscura, letras más claras, muchas marcas de superficie y bordes en gran parte legibles. Las fotografías no autentican el disco (colección privada).',
    frontCaption: 'Anverso: AM / DE. LA / CUADRA, dentro de un borde dentado.',
    backCaption: 'Reverso: UNA / MITAD / 1855, dentro de un borde dentado.',
    description:
      'A. M. de la Cuadra es el nombre del anverso, en tres líneas: AM, DE. LA y CUADRA, con un punto después de DE y otro después de LA. Las iniciales quedan sin desarrollar: no hay documento que fije el nombre de pila. El reverso lee UNA, MITAD y 1855, también en tres líneas. Las dos caras van dentro de un borde dentado. Sedwick cataloga el tipo como ficha de latón del Magdalena, una mitad —medio cuartillo—, Rulau Mag-5 y Fonrobert 8263, y la atribuye a Scovill Manufacturing, de Waterbury, Connecticut. James O. Sweeny y Enrique Bernal, en The MITAD Tokens of Latin America (TAMS Journal, febrero de 1991), numeran el mismo cuño como A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, latón, 7,6 g y 28,0 mm, y también lo dan como acuñado por Scovill en Estados Unidos. Esas cifras y ese metal describen el tipo. Este ejemplar no se pesó, no se midió y no se analizó.',
    descriptionRest:
      'En 1855 el país se llamaba República de la Nueva Granada. La fecha está en el reverso. Fonrobert, y Eklund detrás de él, habían puesto las fichas mitad sin plaza en El Callao, Perú. Sweeny y Bernal rechazan esa plaza y reúnen el grupo en el norte de Colombia, entre otros departamentos el Magdalena, y advierten que las plazas de los catálogos anteriores no son de fiar. El cuño no dice a qué negocio servía. Tratarla como ficha de plantación, de pago de café o de jornal pediría otra fuente. El canto no se ve en estas fotografías. Sweeny y Bernal dejan el tipo A2 fuera de las pocas fichas mitad de canto estriado; eso es una nota de catálogo, no una lectura de este canto. No hay grabador, tiraje ni certificado de este disco. Las tablas de moneda del Banco de la República empiezan en 1987 y no cubren esta ficha privada de 1855.',
    scarcity:
      'No hay tiraje verificado. Sweeny y Bernal marcan el tipo A2 como común en su escala de 1991: más de nueve piezas dentro de una muestra de más de seiscientos tokens mitad. En el mismo texto advierten que, en las listas de venta, ninguna ficha mitad es corriente. Esa escala es un cálculo de los autores, no un censo. En mayo de 2020 Sedwick ofreció un ejemplar distinto, NGC MS 62, de la colección Norweb, certificado 5850277-003 (subasta 27, lote 850). Lo volvió a ofrecer en noviembre de 2020 (subasta 28, lote 771). Las dos veces quedó sin vender. No es este disco. Esta ficha no publica estimados ni martillos, y las fotografías no dan un grado numérico.',
  },
  en: {
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Una mitad token, 1855 · A. M. de la Cuadra',
    metaDescription:
      'Private token of A. M. de la Cuadra, una mitad, 1855. Obverse AM / DE. LA / CUADRA; reverse UNA MITAD. Rulau Mag-5 and Fonrobert 8263.',
    kicker: 'Colombia-Numismatics · Private token',
    title: 'Una mitad · A. M. de la Cuadra · 1855',
    h1: 'Una mitad, 1855',
    lead:
      'A private token of A. M. de la Cuadra, dated 1855, lettered UNA MITAD. The obverse reads AM / DE. LA / CUADRA. The die names no city.',
    factsHeading: 'Catalog facts',
    aboutHeading: 'The piece',
    scarcityHeading: 'Scarcity',
    sourcesHeading: 'Sources',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    valueLabel: 'Value',
    issuerLabel: 'Issuer',
    metalLabel: 'Metal',
    placeLabel: 'Place',
    makerLabel: 'Manufacturer',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    seriesCta: 'Back to Colombia-Numismatics',
    reference: 'Rulau Mag-5 · Fonrobert 8263 · Sweeny and Bernal A2',
    year: '1855, on the reverse.',
    value:
      'Una mitad. Sedwick glosses it as half a cuartillo. Sweeny and Bernal read mitad as half of a cuartillo, about an eighth of a real. The disc does not print that equivalent.',
    issuer: 'A. M. de la Cuadra. The initials are left unexpanded.',
    metal: 'Brass in Sedwick and in Sweeny and Bernal, for the type. This specimen’s alloy was not tested.',
    place: 'Magdalena, in Sedwick’s listing (Rulau Mag-5). The die names neither Santa Marta nor any other city.',
    maker: 'Attributed to Scovill Manufacturing, Waterbury, Connecticut. This disc carries no maker’s mark.',
    grade:
      'Unslabbed, and no numerical grade. Dark patina, lighter lettering, many surface marks, and borders largely readable. Photographs do not authenticate the disc (private collection).',
    frontCaption: 'Obverse: AM / DE. LA / CUADRA, inside a toothed border.',
    backCaption: 'Reverse: UNA / MITAD / 1855, inside a toothed border.',
    description:
      'A. M. de la Cuadra is the name on the obverse, in three lines: AM, DE. LA, and CUADRA, with a point after DE and another after LA. The initials stay unexpanded: no document fixes a given name. The reverse reads UNA, MITAD, and 1855, also in three lines. Both sides sit inside a toothed border. Sedwick catalogs the type as a brass token of Magdalena, una mitad — half a cuartillo — Rulau Mag-5 and Fonrobert 8263, and attributes it to Scovill Manufacturing of Waterbury, Connecticut. James O. Sweeny and Enrique Bernal, in The MITAD Tokens of Latin America (TAMS Journal, February 1991), number the same die as A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, brass, 7.6 g and 28.0 mm, and also give it as struck by Scovill in the United States. Those figures and that metal describe the type. This specimen was not weighed, measured, or tested.',
    descriptionRest:
      'In 1855 the country was the Republic of New Granada. The date is on the reverse. Fonrobert, and Eklund after him, had placed the unlocated mitad tokens at Callao, Peru. Sweeny and Bernal reject that place and gather the group in northern Colombia, Magdalena among the departments, and warn that earlier catalogs’ towns are not reliable. The die does not say what business it served. Treating it as a plantation, coffee-payment, or wage token would need another source. The edge is not visible in these photographs. Sweeny and Bernal leave type A2 outside the few mitad tokens with a reeded edge; that is a catalog note, not a reading of this edge. This disc has no engraver, mintage, or certificate. The Banco de la República’s coin tables open in 1987 and do not cover this private token of 1855.',
    scarcity:
      'No mintage is verified. Sweeny and Bernal mark type A2 as common on their 1991 scale: more than nine pieces inside a sample of more than six hundred mitad tokens. In the same text they warn that, on dealers’ lists, no mitad token is common. That scale is the authors’ estimate, not a census. In May 2020 Sedwick offered a different specimen, NGC MS 62, from the Norweb collection, certificate 5850277-003 (Auction 27, lot 850). It was offered again in November 2020 (Auction 28, lot 771). Both times it went unsold. It is not this disc. This record publishes neither estimates nor hammers, and the photographs do not support a numerical grade.',
  },
} as const;

export const cuadraUnaMitadSources: CatalogSource[] = [
  {
    href: 'https://www.numisbids.com/sale/3858/lot/850',
    es: 'Sedwick — Treasure Auction 27, lote 850 (27–29 de mayo de 2020)',
    en: 'Sedwick — Treasure Auction 27, lot 850 (27–29 May 2020)',
    note: {
      es: 'Ficha de latón del Magdalena, una mitad (medio cuartillo), 1855, AM de la Cuadra, Rulau-Mag-5, Fonrobert-8263, atribuida a Scovill, Waterbury. El lote es otro ejemplar: NGC MS 62, ex Norweb, certificado 5850277-003. NumisBids lo deja sin vender. No se publican estimados.',
      en: 'Brass token of Magdalena, una mitad (half cuartillo), 1855, AM de la Cuadra, Rulau-Mag-5, Fonrobert-8263, attributed to Scovill, Waterbury. The lot is a different specimen: NGC MS 62, ex-Norweb, certificate 5850277-003. NumisBids leaves it unsold. Estimates are not published.',
    },
  },
  {
    href: 'https://www.icollector.com/Magdalena-Colombia-struck-by-Scovill-Manufacturing-Waterbury-Connecticut-brass-una-mitad-half_i38817540',
    es: 'Sedwick — Treasure Auction 28, lote 771 (18 de noviembre de 2020)',
    en: 'Sedwick — Treasure Auction 28, lot 771 (18 November 2020)',
    note: {
      es: 'El mismo ejemplar NGC MS 62, ex Norweb. iCollector lo registra como no vendido. No es este disco y no se publica un martillo.',
      en: 'The same NGC MS 62 ex-Norweb specimen. iCollector records it as unsold. It is not this disc, and no hammer is published.',
    },
  },
  {
    href: 'https://archive.org/details/mitadtokensoflat3112toke',
    es: 'James O. Sweeny y Enrique Bernal — The MITAD Tokens of Latin America (TAMS Journal, vol. 31, n.º 1 (2), febrero de 1991)',
    en: 'James O. Sweeny and Enrique Bernal — The MITAD Tokens of Latin America (TAMS Journal, vol. 31, no. 1 (2), February 1991)',
    note: {
      es: 'Tipo A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, 7,6 g, latón, 28,0 mm, Scovill, referencias Eklund y Fonrobert 8263. La escala «común» (más de nueve piezas en su muestra) es un cálculo de los autores. Rechazan la plaza de El Callao. Esas medidas no son las de este disco.',
      en: 'Type A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, 7.6 g, brass, 28.0 mm, Scovill, with Eklund and Fonrobert 8263 among the references. The “common” rating (more than nine pieces in their sample) is the authors’ estimate. They reject the Callao attribution. Those measurements are not this disc’s.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — producción y circulación de billetes y monedas',
    en: 'Banco de la República — production and circulation of notes and coins',
    note: {
      es: 'Las tablas de moneda empiezan en 1987. No dan un tiraje de esta ficha privada de 1855.',
      en: 'The coin tables open in 1987. They do not give a mintage for this private token of 1855.',
    },
  },
];

export function cuadraUnaMitadPath(locale: Locale): string {
  return localizePath(CUADRA_UNA_MITAD_PATH, locale);
}

export const cuadraUnaMitadDedicatedSlugs = [
  CUADRA_UNA_MITAD_PATH.replace(/^\/|\/$/g, ''),
] as const;

export const cuadraUnaMitadNoSerialReason =
  'Private token of A. M. de la Cuadra. No serial is inscribed, and this example is unslabbed with no certification number.';
