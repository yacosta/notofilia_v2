import type { CatalogSource } from './catalog';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import { MANZANO_FARMING_PATH, MANZANO_FARMING_PATH_EN } from './manzano-farming.ts';

/**
 * Fingerprint, no serial: Manzano Farming Co. + value 10 + 1901 + no readable
 * letter countermark. The Absoluti 25 of 1901 with counterstamp JB is a
 * different published piece and is not this holding.
 * The supplied reverse-only PNG was truncated and was not used. The reverse
 * is the right-hand disc of the full pair frame. Do not crop that frame.
 */
export const MANZANO_FARMING_PIECE_ID = 'co-1901-10-manzano-farming';

export const MANZANO_FARMING_PIECE_PATH = `${MANZANO_FARMING_PATH}Manzano_10_1901/`;
export const MANZANO_FARMING_PIECE_PATH_EN = `${MANZANO_FARMING_PATH_EN}Manzano_10_1901/`;

/**
 * Literal fields for scripts/build-identify-index.mjs. That script reads
 * `path: '/coleccion/…'`, `id: '…'`, and `title: { es, en }` as text.
 */
export const manzanoFarmingPieceIndex = {
  id: 'co-1901-10-manzano-farming',
  path: '/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/Manzano_10_1901/',
  title: { es: '10 · Manzano Farming Co. · 1901', en: '10 · Manzano Farming Co. · 1901' },
};

export const MANZANO_FARMING_PIECE_IMAGES = {
  front: '/images/catalog/colombia/colombia-manzano-farming-co-10-1901-front.png',
  composite: '/images/catalog/colombia/colombia-manzano-farming-co-10-1901-composite.png',
  width: 1672,
  height: 941,
} as const;

export const manzanoFarmingPieceCopy = {
  es: {
    metaTitle: 'Seña de 10, 1901 · Manzano Farming Co.',
    metaDescription:
      'Seña de Manzano Farming Co., 1901, valor 10, de Sotaquirá y Paipa. La unidad no va inscrita y estas fotos no muestran un resello.',
    kicker: 'Colombia-Numismática · Fichas de hacienda',
    title: '10 · Manzano Farming Co. · 1901',
    h1: 'Seña de 10, 1901',
    lead:
      'Seña privada de Manzano Farming Co., fechada 1901, con el valor 10 al centro. Sotaquirá y Paipa, Boyacá. La unidad no está inscrita. Estas fotografías no muestran un resello de letras.',
    factsHeading: 'Datos de catálogo',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza',
    sourcesHeading: 'Fuentes',
    frontHeading: 'Anverso',
    pairHeading: 'Anverso y reverso',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    valueLabel: 'Valor',
    metalLabel: 'Metal',
    placeLabel: 'Lugar',
    countermarkLabel: 'Resello',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    essayCta: 'Volver a Manzano Farming Co.',
    reference:
      'Sin Henao, Restrepo o KM verificado. Comparación: Montaña Rodríguez, n.º 6 (dic. 2015), p. 13, entrada 47, ejemplar con resello BJ.',
    year: '1901',
    value: '10. El boletín lo publica como 10 centavos. La unidad no está inscrita en este disco.',
    metal:
      'Latón en la entrada 47, para un ejemplar con resello. Otras listas dicen bronce. La aleación de este disco no está verificada.',
    place: 'Sotaquirá y Paipa, Boyacá. La leyenda inferior lee SOTAQUIRA Y PAIPA, sin tilde.',
    countermark: 'Estas fotografías no muestran un resello de letras que se pueda leer.',
    grade:
      'Sin encapsular y sin grado numérico. Superficie parda y moteada, con zonas más claras, rayas y aspereza. El reverso, en la foto de conjunto, se ve más blando.',
    frontCaption:
      'Anverso: MANZANO FARMING CO., el 10, COLOMBIA y 1901, con estrellas y borde dentado.',
    pairCaption:
      'Anverso a la izquierda y reverso a la derecha. El reverso lee PAPAYO, Y y SATIVA; alrededor, MANZANO, CARREÑO, SOCONSUCA y SOTAQUIRA Y PAIPA. Esa cara es más blanda y no se reconstruyó.',
    description:
      'Manzano Farming Co. es una firma de Sotaquirá y Paipa. Fernando Barriga del Diestro la nombra entre las señas de la Guerra de los Mil Días (1899–1902), cuando faltaba menuda. Esta pieza lleva la fecha 1901 y el valor 10. La unidad no está inscrita. El índice de Alexander Montaña Rodríguez, Medallas, fichas y monedas de Colombia, n.º 6 (diciembre de 2015), lista «Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ». La entrada 47, en la página 13, da 24,3 mm, 4,7 g y latón para un ejemplar con resello. Esas medidas y ese resello describen aquella comparación. No corresponden a este disco, y el metal de aquí no está verificado. Otras listas hablan de bronce.',
    descriptionRest:
      'El anverso tiene la leyenda MANZANO FARMING CO., el 10, COLOMBIA, 1901, estrellas y borde dentado. En la fotografía de conjunto el reverso lee PAPAYO, Y y SATIVA, y alrededor MANZANO, CARREÑO, SOCONSUCA y SOTAQUIRA Y PAIPA. Esa cara se ve más blanda; la leyenda no se reconstruyó. The Numismatic Scrapbook Magazine del 24 de diciembre de 1970 imprime Satira, no Sativa. Esta ficha no identifica la palabra con Sátiva Norte ni con Sátiva Sur. Carreño y Soconsuca figuran entre las veredas de Sotaquirá en el plan municipal de 2020-2023; Papayo no está en esa lista. El cuño dice SOCONSUCA, en singular. La colección Absoluti publica otra seña, de valor 25, bronce, 28,5 mm, con resello JB: no es este disco. No hay ceca, grabador, tiraje ni censo. Las tablas de moneda del Banco de la República empiezan en 1987 y no cubren esta seña privada. No hay serial ni certificado. El peso, el diámetro y el canto de este ejemplar no se midieron. La pieza, por sí sola, no prueba cómo se redimía ni cómo se pagaba el jornal.',
    scarcity:
      'No hay tiraje verificado ni un censo que esta ficha pueda citar. La falta de cifra no deja sentada una rareza extrema. Un ejemplar con resello se anota con sus letras, su lugar y su orientación. La entrada 47 lleva resello BJ. Este disco no muestra un resello legible.',
  },
  en: {
    metaTitle: '10 token, 1901 · Manzano Farming Co.',
    metaDescription:
      'A 1901 Manzano Farming Co. token valued 10, from Sotaquirá and Paipa. The unit is not inscribed, and these photos show no countermark.',
    kicker: 'Colombia-Numismatics · Hacienda tokens',
    title: '10 · Manzano Farming Co. · 1901',
    h1: '10 token, 1901',
    lead:
      'A private token of Manzano Farming Co., dated 1901, with the value 10 in the center. Sotaquirá and Paipa, Boyacá. The unit is not inscribed. These photographs show no letter countermark.',
    factsHeading: 'Catalog facts',
    aboutHeading: 'The piece',
    scarcityHeading: 'Scarcity',
    sourcesHeading: 'Sources',
    frontHeading: 'Obverse',
    pairHeading: 'Obverse and reverse',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    valueLabel: 'Value',
    metalLabel: 'Metal',
    placeLabel: 'Place',
    countermarkLabel: 'Countermark',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    essayCta: 'Back to Manzano Farming Co.',
    reference:
      'No verified Henao, Restrepo, or KM number. Comparison: Montaña Rodríguez, no. 6 (Dec. 2015), p. 13, entry 47, a countermarked example.',
    year: '1901',
    value: '10. The bulletin publishes it as 10 centavos. The unit is not inscribed on this disc.',
    metal:
      'Brass in entry 47, for a countermarked example. Other listings say bronze. This disc’s alloy is unverified.',
    place: 'Sotaquirá and Paipa, Boyacá. The lower legend reads SOTAQUIRA Y PAIPA, with no accent.',
    countermark: 'These photographs show no letter countermark that can be read.',
    grade:
      'Unslabbed, and no numerical grade. Mottled brown surface, with lighter patches, scratches, and rough areas. The reverse, in the pair photograph, is softer.',
    frontCaption:
      'Obverse: MANZANO FARMING CO., 10, COLOMBIA, and 1901, with stars and a toothed border.',
    pairCaption:
      'Obverse at left and reverse at right. The reverse reads PAPAYO, Y, and SATIVA; around it, MANZANO, CARREÑO, SOCONSUCA, and SOTAQUIRA Y PAIPA. That side is softer, and the lettering was not reconstructed.',
    description:
      'Manzano Farming Co. is a firm of Sotaquirá and Paipa. Fernando Barriga del Diestro names it among the private tokens of the War of a Thousand Days (1899–1902), when small change ran short. This piece carries the date 1901 and the value 10. The unit is not inscribed. The index of Alexander Montaña Rodríguez, Medallas, fichas y monedas de Colombia, no. 6 (December 2015), lists “Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ.” Entry 47, on page 13, gives 24.3 mm, 4.7 g, and brass for a countermarked example. Those figures and that countermark describe the comparison. They do not describe this disc, and the metal here is unverified. Other listings say bronze.',
    descriptionRest:
      'The obverse carries MANZANO FARMING CO., 10, COLOMBIA, 1901, stars, and a toothed border. In the pair photograph the reverse reads PAPAYO, Y, and SATIVA, and around it MANZANO, CARREÑO, SOCONSUCA, and SOTAQUIRA Y PAIPA. That side is softer; the lettering was not reconstructed. The Numismatic Scrapbook Magazine of 24 December 1970 prints Satira, not Sativa. This record does not identify the word with Sátiva Norte or Sátiva Sur. Carreño and Soconsuca appear among Sotaquirá’s veredas in the 2020–2023 municipal plan; Papayo is not on that list. The die says SOCONSUCA, in the singular. The Absoluti collection publishes another token, valued 25, bronze, 28.5 mm, with counterstamp JB: that is a different disc. There is no mint, engraver, mintage, or census. The Banco de la República’s coin tables open in 1987 and do not cover this private token. There is no serial and no certificate. This specimen’s weight, diameter, and edge were not measured. The piece alone does not show how it was redeemed or how wages were paid.',
    scarcity:
      'No mintage is verified, and this record can cite no census. A missing figure does not establish extreme rarity. A countermarked example is recorded with its letters, placement, and orientation. Entry 47 carries counterstamp BJ. This disc shows no readable countermark.',
  },
} as const;

export const manzanoFarmingPieceSources: CatalogSource[] = [
  {
    href: 'https://www.mascoleccionismo.com/medallas-fichas-y-monedas-de-colombia-06-diciembre-2015/',
    es: 'Alexander Montaña Rodríguez — Medallas, fichas y monedas de Colombia, n.º 6 (diciembre de 2015)',
    en: 'Alexander Montaña Rodríguez — Medallas, fichas y monedas de Colombia, no. 6 (December 2015)',
    note: {
      es: 'El índice público lista «Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ». La entrada 47, página 13, se cita por el ejemplar con resello: 24,3 mm, 4,7 g, latón. No es la medida de este disco, y esta ficha no republica la lámina.',
      en: 'The public index lists “Hacienda Manzano Farming Co. 10 Centavos 1901, Resello BJ.” Entry 47, page 13, is cited for the countermarked example: 24.3 mm, 4.7 g, brass. That is not a measurement of this disc, and this record does not republish the plate.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/biblioteca-virtual/credencial-historia-no-128/las-senas-en-la-guerra-de-los-mil-dias-billetes-y',
    es: 'Fernando Barriga del Diestro — Las «señas» en la guerra de los mil días (Credencial Historia n.º 128, agosto de 2000)',
    en: 'Fernando Barriga del Diestro — Private tokens in the War of a Thousand Days (Credencial Historia no. 128, August 2000)',
    note: {
      es: 'Nombra a Manzano Farming Co., de Sotaquirá y Paipa, entre las señas en forma de moneda. No describe este cuño.',
      en: 'It names Manzano Farming Co., of Sotaquirá and Paipa, among the coin-shaped tokens. It does not describe this die.',
    },
  },
  {
    href: 'https://numis.absoluti-ind.com/MonedasColSennas.html',
    es: 'Colección Absoluti (CFMR) — señas de Colombia, Manzano Farming Co., 25, 1901',
    en: 'Absoluti collection (CFMR) — Colombian tokens, Manzano Farming Co., 25, 1901',
    note: {
      es: 'Otra pieza: valor 25, bronce, 28,5 mm, resello JB. No es este disco, y esta ficha no republica la fotografía.',
      en: 'A different piece: value 25, bronze, 28.5 mm, counterstamp JB. It is not this disc, and this record does not republish the photograph.',
    },
  },
  {
    href: 'https://nnp.wustl.edu/library/advancedsearch?fullsearchterm=Manzano%20Farming',
    es: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 de diciembre de 1970, p. 38',
    en: 'Newman Numismatic Portal — The Numismatic Scrapbook Magazine, 24 December 1970, p. 38',
    note: {
      es: 'Lista «Manzano Farming Co Papayo y Satira 1901». Satira no es la lectura SATIVA de este reverso.',
      en: 'It lists “Manzano Farming Co Papayo y Satira 1901.” Satira is not the SATIVA reading of this reverse.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — producción y circulación de billetes y monedas',
    en: 'Banco de la República — production and circulation of notes and coins',
    note: {
      es: 'Las tablas de moneda empiezan en 1987. No dan un tiraje de esta seña privada de 1901.',
      en: 'The coin tables open in 1987. They do not give a mintage for this private token of 1901.',
    },
  },
  {
    href: 'http://sotaquiraboyaca.micolombiadigital.gov.co/sites/sotaquiraboyaca/content/files/000354/17661_pd-sotaquira-2020-2023.pdf',
    es: 'Alcaldía de Sotaquirá — Plan de Desarrollo Municipal 2020-2023',
    en: 'Municipality of Sotaquirá — Municipal Development Plan 2020–2023',
    note: {
      es: 'Lista Carreño, Soconsuca de Blancos y Soconsuca de Indios. No hay una vereda Papayo. No es un archivo de la firma en 1901.',
      en: 'It lists Carreño, Soconsuca de Blancos, and Soconsuca de Indios. There is no vereda named Papayo. It is not a 1901 ledger of the firm.',
    },
  },
];

export function manzanoFarmingPiecePath(locale: Locale): string {
  return localizePath(MANZANO_FARMING_PIECE_PATH, locale);
}

export const manzanoFarmingPieceDedicatedSlugs = [
  MANZANO_FARMING_PIECE_PATH.replace(/^\/|\/$/g, ''),
  MANZANO_FARMING_PIECE_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;

export const manzanoFarmingPieceNoSerialReason =
  'Private hacienda token of Manzano Farming Co. No serial is inscribed, and this example is unslabbed with no certification number.';
