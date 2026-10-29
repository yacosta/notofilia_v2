import type { CatalogSource } from './catalog';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import { HACIENDA_TOKENS_PATH, HACIENDA_TOKENS_PATH_EN } from './hacienda-tokens.ts';

/**
 * Fingerprint, no serial: A. M. de la Cuadra + Una Mitad + 1855 + the
 * legends AM / DE. LA / CUADRA and UNA / MITAD / 1855. Rulau Mag-5 and
 * Fonrobert 8263 name the type. NGC 5850277-003 is another specimen
 * (Norweb / Sedwick) and is not this disc. The initials stay unexpanded.
 * The supplied pair frame is kept whole. Do not crop it.
 */
export const CUADRA_UNA_MITAD_ID = 'co-1855-una-mitad-am-de-la-cuadra';

export const CUADRA_UNA_MITAD_PATH = `${HACIENDA_TOKENS_PATH}am-de-la-cuadra-una-mitad-1855/`;
export const CUADRA_UNA_MITAD_PATH_EN = `${HACIENDA_TOKENS_PATH_EN}am-de-la-cuadra-una-mitad-1855/`;

/**
 * Literal fields for scripts/build-identify-index.mjs. That script reads
 * `path: '/coleccion/…'`, `id: '…'`, and `title: { es, en }` as text.
 */
export const cuadraUnaMitadPieceIndex = {
  id: 'co-1855-una-mitad-am-de-la-cuadra',
  path: '/coleccion/colombia-numismatica/fichas-de-hacienda/am-de-la-cuadra-una-mitad-1855/',
  title: {
    es: 'Una Mitad · A. M. de la Cuadra · 1855',
    en: 'Una Mitad · A. M. de la Cuadra · 1855',
  },
};

export const CUADRA_UNA_MITAD_IMAGES = {
  composite: '/images/catalog/colombia/colombia-am-de-la-cuadra-una-mitad-1855-composite.png',
  width: 1029,
  height: 500,
} as const;

export const cuadraUnaMitadPieceCopy = {
  es: {
    metaTitle: 'Una Mitad, 1855 · A. M. de la Cuadra',
    metaDescription:
      'Seña privada de A. M. de la Cuadra, 1855, leyenda UNA MITAD. Rulau Mag-5 y Fonrobert 8263. Diámetro medido 27,72 mm; peso pendiente.',
    kicker: 'Colombia-Numismática · Fichas de hacienda',
    title: 'Una Mitad · A. M. de la Cuadra · 1855',
    h1: 'Seña de una mitad, 1855',
    lead:
      'Seña privada fechada 1855. Una cara lee AM / DE. LA / CUADRA y la otra UNA / MITAD / 1855. Las iniciales quedan como están. Este disco no trae serial ni cápsula.',
    factsHeading: 'Datos de catálogo',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza',
    sourcesHeading: 'Fuentes',
    pairHeading: 'Anverso y reverso',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    valueLabel: 'Valor',
    metalLabel: 'Metal',
    placeLabel: 'Lugar',
    workshopLabel: 'Taller',
    gradeLabel: 'Conservación',
    specimenHeading: 'Medidas del ejemplar',
    diameterLabel: 'Diámetro medido',
    referenceDiameterLabel: 'Diámetro de referencia',
    methodLabel: 'Método',
    weightLabel: 'Peso',
    compositionLabel: 'Composición metálica',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    essayCta: 'Volver a las fichas de hacienda',
    reference: 'Rulau Mag-5. Fonrobert 8263. Sweeny y Bernal, A2. Sin número KM.',
    year: '1855, en el reverso.',
    value:
      'Una mitad. Medio cuartillo, un octavo de real, en la lectura de Sweeny y Bernal y en la de Sedwick.',
    metal:
      'Latón en el tipo A2 de Sweeny y Bernal: 7,6 g y 28,0 mm para el tipo. A2a es bronce, 27,4 mm. La aleación de este disco no está ensayada.',
    diameter: '27,72 mm',
    referenceDiameter: '28,0 mm en el tipo A2 de Sweeny y Bernal. Esta lectura queda 0,28 mm por debajo.',
    method: 'Calibrador digital.',
    weight: 'Pendiente de medición. El tipo A2 publica 7,6 g.',
    composition:
      'Latón, según la atribución bibliográfica del tipo A2. Pendiente de verificación instrumental.',
    specimenNote:
      'La medición directa de este disco arroja 27,72 mm, cifra consistente con los 28,0 mm publicados para el tipo A2 de A. M. de la Cuadra, fechado en 1855. Corresponde al ejemplar de Notofilia. No fija el diámetro de los demás ejemplares conocidos, y por sí sola no autentica la pieza.',
    place:
      'Rulau lo publica en el Magdalena, y Noonans precisa Santa Marta. Sweeny y Bernal no dan pueblo. Este disco no nombra ciudad.',
    workshop:
      'Scovill Manufacturing Company, Waterbury, Connecticut, según Sweeny y Bernal y según Sedwick. El disco no lleva marca de taller.',
    grade:
      'Sin encapsular y sin grado numérico. Pátina oscura, leyenda más clara, rayas y borde dentado todavía legible. Estas fotografías no fijan un grado.',
    frontCaption:
      'Anverso y reverso de la seña de A. M. de la Cuadra, 1855: AM / DE. LA / CUADRA y UNA / MITAD / 1855.',
    pairCaption:
      'Reverso a la izquierda: UNA / MITAD / 1855. Anverso a la derecha: AM / DE. LA / CUADRA, con punto después de DE. Borde dentado en las dos caras. El marco de la fotografía se conserva entero.',
    description:
      'Esta seña está fechada 1855. En la fotografía el reverso queda a la izquierda y lee UNA / MITAD / 1855. El anverso queda a la derecha y lee AM / DE. LA / CUADRA, con un punto después de DE. El borde es dentado. No se ve resello ni agujero. En 1855 el Estado se llamaba República de la Nueva Granada. James O. Sweeny y Enrique Bernal, en The MITAD Tokens of Latin America (TAMS Journal, vol. 31, n.º 1 (2), febrero de 1991), catalogan el tipo como A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, latón, 7,6 g, 28,0 mm. Lo dan por acuñado en Waterbury, Connecticut, por la Scovill Manufacturing Company. La atribución sale del grupo de pruebas que reunió Russell Rulau y de enlaces de punzones con otras señas de mitad. El artículo no transcribe un libro de pedidos de Scovill para este encargo. La variedad A2a es otro golpe, en bronce, 7,6 g y 27,4 mm, que ellos toman por prueba de cuño. Este disco queda en el tipo de latón. El diámetro de este ejemplar, leído en un calibrador digital, es 27,72 mm, 0,28 mm por debajo de los 28,0 mm del tipo. Esa cifra es de este disco: no es el diámetro de todos los ejemplares conocidos, y por sí sola no autentica la pieza. El peso y el canto no se midieron. El tipo A2 queda fuera de las tres señas de mitad con canto labrado, así que el canto publicado del tipo es liso.',
    descriptionRest:
      'En esas señas, «mitad» es la denominación: medio cuartillo, un octavo de real. La palabra «una» no cambia el valor. Sedwick publica la misma lectura, half cuartillo, y el número Rulau-Mag-5 junto a Fonrobert 8263. Sweeny y Bernal imprimen F8263, la entrada del catálogo de la colección Fonrobert compilado por Adolph Weyl (Berlín, 1878), y dejan las iniciales sin desarrollar. Tampoco nombran el giro del emisor ni le asignan pueblo: para ellos las atribuciones de lugar de los catálogos anteriores son, en general, poco de fiar. Rulau sí lo sitúa en el Magdalena. El lote 3192 de Noonans, del 30 de septiembre de 2013, nombra dentro de un conjunto «Santa Marta, Am de la Cuadra, brass Mitad, 1855 (Rulau 5)». El lote 850 de la subasta 27 de Sedwick describe otro ejemplar: NGC MS 62, certificado 5850277-003, procedencia Norweb. Este disco está suelto, con pátina oscura. No hay tiraje verificado. Las tablas de moneda del Banco de la República empiezan en 1987 y no cubren esta seña privada. La pieza no dice cómo se redimía.',
    scarcity:
      'Sweeny y Bernal clasifican el tipo A2 como Common en su escala de 1991: más de nueve piezas dentro de una muestra de más de 600 señas de mitad. Esa clase no es un tiraje ni un censo de este disco. La falta de cifra de acuñación no deja sentada una rareza extrema. El certificado 5850277-003 corresponde a otra pieza.',
  },
  en: {
    metaTitle: 'Una Mitad token, 1855 · A. M. de la Cuadra',
    metaDescription:
      'Private token of A. M. de la Cuadra, 1855, lettered UNA MITAD. Rulau Mag-5 and Fonrobert 8263. Measured diameter 27.72 mm; weight pending.',
    kicker: 'Colombia-Numismatics · Hacienda tokens',
    title: 'Una Mitad · A. M. de la Cuadra · 1855',
    h1: 'Una Mitad token, 1855',
    lead:
      'A private token dated 1855. One side reads AM / DE. LA / CUADRA and the other UNA / MITAD / 1855. The initials stay as printed. This disc has no serial and no holder.',
    factsHeading: 'Catalog facts',
    aboutHeading: 'The piece',
    scarcityHeading: 'Scarcity',
    sourcesHeading: 'Sources',
    pairHeading: 'Obverse and reverse',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    valueLabel: 'Value',
    metalLabel: 'Metal',
    placeLabel: 'Place',
    workshopLabel: 'Workshop',
    gradeLabel: 'Condition',
    specimenHeading: 'Measurements of this specimen',
    diameterLabel: 'Measured diameter',
    referenceDiameterLabel: 'Published diameter',
    methodLabel: 'Method',
    weightLabel: 'Weight',
    compositionLabel: 'Metallic composition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    essayCta: 'Back to hacienda tokens',
    reference: 'Rulau Mag-5. Fonrobert 8263. Sweeny and Bernal, A2. No KM number.',
    year: '1855, on the reverse.',
    value: 'Una mitad. Half a cuartillo, one eighth of a real, in the reading of Sweeny and Bernal and of Sedwick.',
    metal:
      'Brass on Sweeny and Bernal type A2: 7.6 g and 28.0 mm for the type. A2a is bronze, 27.4 mm. This disc’s alloy was not tested.',
    diameter: '27.72 mm',
    referenceDiameter: '28.0 mm on Sweeny and Bernal type A2. This reading sits 0.28 mm below that figure.',
    method: 'Digital caliper.',
    weight: 'Not yet measured. Type A2 is published at 7.6 g.',
    composition: 'Brass, from the published attribution of type A2. An instrumental check is still pending.',
    specimenNote:
      'A direct measurement of this disc gives 27.72 mm, consistent with the 28.0 mm published for type A2 of A. M. de la Cuadra, dated 1855. The figure belongs to the Notofilia specimen. It does not fix the diameter of every known example, and by itself it does not authenticate the token.',
    place:
      'Rulau places it in Magdalena, and Noonans specifies Santa Marta. Sweeny and Bernal give no town. This disc names no city.',
    workshop:
      'Scovill Manufacturing Company, Waterbury, Connecticut, according to Sweeny and Bernal and to Sedwick. The disc carries no workshop mark.',
    grade:
      'Unslabbed, and no numerical grade. Dark patina, lighter lettering, scratches, and a toothed border that can still be read. These photographs do not fix a grade.',
    frontCaption:
      'Obverse and reverse of the 1855 A. M. de la Cuadra token: AM / DE. LA / CUADRA and UNA / MITAD / 1855.',
    pairCaption:
      'Reverse at left: UNA / MITAD / 1855. Obverse at right: AM / DE. LA / CUADRA, with a point after DE. Toothed border on both sides. The photograph’s frame is kept whole.',
    description:
      'This token is dated 1855. In the photograph the reverse is at left and reads UNA / MITAD / 1855. The obverse is at right and reads AM / DE. LA / CUADRA, with a point after DE. The border is toothed. No countermark and no hole are visible. In 1855 the state was the Republic of New Granada. James O. Sweeny and Enrique Bernal, in The MITAD Tokens of Latin America (TAMS Journal, vol. 31, no. 1 (2), February 1991), catalog the type as A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, brass, 7.6 g, 28.0 mm. They give it as struck in Waterbury, Connecticut, by the Scovill Manufacturing Company. The attribution comes from the group of proofs Russell Rulau assembled and from letter-punch links with other mitad tokens. The article does not transcribe a Scovill order book for this commission. Variety A2a is another strike, in bronze, 7.6 g and 27.4 mm, which they take for a die trial. This disc stays with the brass type. This specimen’s diameter, read on a digital caliper, is 27.72 mm, 0.28 mm under the type’s 28.0 mm. That figure belongs to this disc: it is not the diameter of every known example, and by itself it does not authenticate the token. The weight and the edge were not measured. Type A2 stands outside the three mitad tokens with an ornamented edge, so the published edge of the type is plain.',
    descriptionRest:
      'On these tokens, “mitad” is the denomination: half a cuartillo, one eighth of a real. The word “una” does not change the value. Sedwick publishes the same reading, half cuartillo, and the number Rulau-Mag-5 beside Fonrobert 8263. Sweeny and Bernal print F8263, the entry in the Fonrobert collection catalog compiled by Adolph Weyl (Berlin, 1878), and they leave the initials unexpanded. They also leave the issuer’s trade unnamed and assign no town: for them the place attributions in earlier catalogs are, in general, unreliable. Rulau does place it in Magdalena. Noonans lot 3192, of 30 September 2013, names inside a group “Santa Marta, Am de la Cuadra, brass Mitad, 1855 (Rulau 5).” Sedwick auction 27, lot 850, describes another example: NGC MS 62, certificate 5850277-003, Norweb provenance. This disc is loose, with a dark patina. No mintage is verified. The Banco de la República coin tables open in 1987 and do not cover this private token. The piece does not say how it was redeemed.',
    scarcity:
      'Sweeny and Bernal class type A2 as Common on their 1991 scale: more than nine pieces inside a sample of more than 600 mitad tokens. That class is not a mintage and not a census of this disc. A missing mintage figure does not establish extreme rarity. Certificate 5850277-003 belongs to another piece.',
  },
} as const;

export const cuadraUnaMitadPieceSources: CatalogSource[] = [
  {
    href: 'https://archive.org/details/mitadtokensoflat3112toke',
    es: 'James O. Sweeny y Enrique Bernal — The MITAD Tokens of Latin America (TAMS Journal, vol. 31, n.º 1 (2), febrero de 1991)',
    en: 'James O. Sweeny and Enrique Bernal — The MITAD Tokens of Latin America (TAMS Journal, vol. 31, no. 1 (2), February 1991)',
    note: {
      es: 'Tipo A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, latón, 7,6 g, 28,0 mm, Scovill. Referencias Ekl098 y F8263. A2a es la variedad en bronce. Esas cifras son del tipo. El diámetro de este ejemplar, 27,72 mm, se midió con calibrador digital. Esta ficha no republica la lámina.',
      en: 'Type A2: AM/DE.LA/CUADRA // UNA/MITAD/1855, brass, 7.6 g, 28.0 mm, Scovill. References Ekl098 and F8263. A2a is the bronze variety. Those figures belong to the type. This specimen’s diameter, 27.72 mm, was measured with a digital caliper. This record does not republish the plate.',
    },
  },
  {
    href: 'https://www.numisbids.com/sale/3858/lot/850',
    es: 'Sedwick & Associates, subasta 27, lote 850 (27–29 de mayo de 2020), en NumisBids',
    en: 'Sedwick & Associates, auction 27, lot 850 (27–29 May 2020), on NumisBids',
    note: {
      es: 'Otro ejemplar: Magdalena, latón, half cuartillo, Scovill, Rulau-Mag-5, Fonrobert-8263, NGC MS 62, certificado 5850277-003, procedencia Norweb. Quedó sin vender. Es otro disco.',
      en: 'Another example: Magdalena, brass, half cuartillo, Scovill, Rulau-Mag-5, Fonrobert-8263, NGC MS 62, certificate 5850277-003, Norweb provenance. It went unsold. It is a different disc.',
    },
  },
  {
    href: 'https://www.noonans.co.uk/archive/special-collections/314/237802/',
    es: 'Noonans Mayfair, 30 de septiembre de 2013, colección Allan Vayle, lote 3192',
    en: 'Noonans Mayfair, 30 September 2013, Allan Vayle collection, lot 3192',
    note: {
      es: 'Lote de varias fichas. Entre ellas: «MAGDALENA, Santa Marta, Am de la Cuadra, brass Mitad, 1855 (Rulau 5)». El resultado del lote queda fuera de esta ficha.',
      en: 'A lot of several tokens. Among them: “MAGDALENA, Santa Marta, Am de la Cuadra, brass Mitad, 1855 (Rulau 5).” The lot result stays off this record.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — producción y circulación de billetes y monedas',
    en: 'Banco de la República — production and circulation of notes and coins',
    note: {
      es: 'Las tablas de moneda empiezan en 1987. No dan un tiraje de esta seña privada de 1855.',
      en: 'The coin tables open in 1987. They do not give a mintage for this private token of 1855.',
    },
  },
];

export function cuadraUnaMitadPiecePath(locale: Locale): string {
  return localizePath(CUADRA_UNA_MITAD_PATH, locale);
}

export const cuadraUnaMitadPieceDedicatedSlugs = [
  CUADRA_UNA_MITAD_PATH.replace(/^\/|\/$/g, ''),
  CUADRA_UNA_MITAD_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;

export const cuadraUnaMitadNoSerialReason =
  'Private token of A. M. de la Cuadra. No serial is inscribed, and this example is unslabbed with no certification number.';
