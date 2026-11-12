import type { CatalogSource, LocalizedText } from './catalog.ts';
import { localizePath, type Locale } from '../lib/locale-paths.ts';
import { NUMISMATICS_PATH, notesPath } from './puerto-rico-coinage.ts';

/**
 * Fingerprint, no serial: Hacienda Vega Redonda + almud value + undated
 * (Numista ND 1890 where listed) + Rulau Lsm 18 / Lsm 17 / Lsm 16 / Lsm 15. No cert.
 * Each master is the full supplied frame. One face only. Do not invent a reverse.
 */
export const VEGA_REDONDA_PATH = '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/';
export const VEGA_REDONDA_PATH_EN = '/collection/puerto-rico-numismatics/hacienda-vega-redonda/';

const IMAGE = { width: 1254, height: 1254 } as const;
const IMAGE_DOS = { width: 1024, height: 1024 } as const;

export type VegaRedondaTokenId =
  | 'pr-nd-cuarto-almud-vega-redonda'
  | 'pr-nd-medio-almud-vega-redonda'
  | 'pr-nd-un-almud-vega-redonda'
  | 'pr-nd-dos-almudes-vega-redonda';

export type VegaRedondaToken = {
  id: VegaRedondaTokenId;
  path: string;
  pathEn: string;
  /** Short catalog token for scan alts. The facts line is `references`. */
  altCatalog: string;
  references: string;
  year: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  place: LocalizedText;
  alignment: LocalizedText;
  grade: LocalizedText;
  no_serial_reason: string;
  images: { front: string; width: number; height: number };
  title: LocalizedText;
  h1: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  legend: LocalizedText;
  caption: LocalizedText;
  description: LocalizedText;
  scarcity: LocalizedText;
  sources: CatalogSource[];
};

const place: LocalizedText = {
  es: 'Barrio Bucarabones, Las Marías, Puerto Rico',
  en: 'Barrio Bucarabones, Las Marías, Puerto Rico',
};

const haciendaSource: CatalogSource = {
  href: 'https://haciendaspr.com/las-marias/vega-redonda',
  es: 'Haciendas de Puerto Rico — Hacienda Vega Redonda',
  en: 'Haciendas de Puerto Rico — Hacienda Vega Redonda',
  note: {
    es: 'Da el lugar: Bo. Bucarabones, Las Marías. No nombra al dueño ni fecha las fichas.',
    en: 'Gives the place: Bo. Bucarabones, Las Marías. It does not name the owner or date the tokens.',
  },
};

const biographySource: CatalogSource = {
  href: 'http://biografiadelasriquezaspr.weebly.com/monedas.html',
  es: 'Biografía de las Riquezas de Puerto Rico — Monedas',
  en: 'Biografía de las Riquezas de Puerto Rico — Coins',
  note: {
    es: 'Cita Revista NumiExpo, 1983, págs. 10–11, para una acuñación en la calle Canuda 37 de Barcelona, y usa el nombre Francisco Bacó. No es un archivo de ceca.',
    en: 'It cites Revista NumiExpo, 1983, pp. 10–11, for a striking on Carrer de la Canuda 37 in Barcelona, and uses the name Francisco Bacó. It is not a mint archive.',
  },
};

function numistaSource(href: string, number: string, note: LocalizedText): CatalogSource {
  return {
    href,
    es: `Numista N#${number} — ficha de la Hacienda Vega Redonda`,
    en: `Numista N#${number} — Hacienda Vega Redonda token`,
    note,
  };
}

export const vegaRedondaTokens: VegaRedondaToken[] = [
  {
    id: 'pr-nd-cuarto-almud-vega-redonda',
    path: `${VEGA_REDONDA_PATH}cuarto-almud/`,
    pathEn: `${VEGA_REDONDA_PATH_EN}cuarto-almud/`,
    altCatalog: 'Rulau Lsm 18',
    references: 'Rulau Lsm 18 · Numista N#163262 · TC#272359',
    year: {
      es: 'Sin fecha en la pieza. Numista la lista como ND (1890).',
      en: 'No date on the piece. Numista lists it as ND (1890).',
    },
    denomination: { es: '¼ almud', en: '¼ almud' },
    composition: {
      es: 'Latón, según Numista para el tipo. No es un ensayo de este disco.',
      en: 'Brass, per Numista for the type. Not an assay of this disc.',
    },
    weight: {
      es: 'No pesado. Tipo en Numista: 2,0 g.',
      en: 'Not weighed. Numista type: 2.0 g.',
    },
    diameter: {
      es: 'No medido. Tipo en Numista: 18 mm.',
      en: 'Not measured. Numista type: 18 mm.',
    },
    edge: {
      es: 'No fotografiado. Numista da canto liso para el tipo.',
      en: 'Not photographed. Numista gives a plain edge for the type.',
    },
    place,
    alignment: {
      es: 'No comprobada. Numista da alineación medalla (↑↑) para el tipo.',
      en: 'Not checked. Numista gives medal alignment (↑↑) for the type.',
    },
    grade: {
      es: 'Sin encapsular y sin grado numérico. Latón dorado, leyendas firmes, estrellas y círculo de puntos completos. El 4 va en contorno. Marcas leves en los campos.',
      en: 'Unslabbed, and no numerical grade. Golden brass, firm legends, stars and beaded circle complete. The 4 is in outline. Light marks in the fields.',
    },
    no_serial_reason:
      'Hacienda Vega Redonda quarter-almud token: the type carries no serial, and this example is unslabbed with no certification number.',
    images: {
      front: '/images/catalog/puerto-rico/puerto-rico-hacienda-vega-redonda-cuarto-almud.webp',
      ...IMAGE,
    },
    title: { es: '¼ almud · Hacienda Vega Redonda', en: '¼ almud · Hacienda Vega Redonda' },
    h1: { es: 'Ficha de ¼ almud', en: '¼ almud token' },
    metaTitle: { es: 'Ficha de ¼ almud · Vega Redonda', en: '¼ almud token · Vega Redonda' },
    metaDescription: {
      es: 'Ficha de ¼ almud de la Hacienda Vega Redonda, Las Marías. Latón, sin fecha, Rulau Lsm 18, Numista N#163262. Una sola cara. Este disco no se pesó.',
      en: 'Quarter-almud token of Hacienda Vega Redonda, Las Marías. Brass, undated, Rulau Lsm 18, Numista N#163262. One face only. This disc was not weighed.',
    },
    kicker: { es: 'Puerto Rico · Ficha de hacienda', en: 'Puerto Rico · Hacienda token' },
    lead: {
      es: 'Ficha de ¼ almud de la Hacienda Vega Redonda, en Bucarabones, Las Marías. Latón, sin fecha y sin serial. Numista la cataloga como ND (1890), Rulau Lsm 18. Esta fotografía es una sola cara.',
      en: 'A quarter-almud token of Hacienda Vega Redonda, in Bucarabones, Las Marías. Brass, undated, and with no serial. Numista catalogues it as ND (1890), Rulau Lsm 18. This photograph is a single face.',
    },
    legend: {
      es: 'HACIENDA arriba, VEGA·REDONDA abajo, ¼ al centro y ALMUD debajo. Una estrella a cada lado, círculo de puntos y orla de dentículos.',
      en: 'HACIENDA above, VEGA·REDONDA below, ¼ in the center and ALMUD beneath. A star on each side, a beaded circle, and a denticled border.',
    },
    caption: {
      es: 'Cara fotografiada del ¼ almud: HACIENDA, VEGA·REDONDA y ALMUD. El reverso de este ejemplar no se fotografió.',
      en: 'Photographed face of the quarter almud: HACIENDA, VEGA·REDONDA, and ALMUD. This specimen’s reverse was not photographed.',
    },
    description: {
      es: 'Ficha de plantación de la Hacienda Vega Redonda. El valor está en almudes, medida de volumen del café en cereza, no en pesos. Numista N#163262 da el tipo como latón, 18 mm, 2,0 g, canto liso, acuñación a molino y alineación medalla, y cita Rulau, Latin American Tokens, Lsm 18, más TC#272359. Esas cifras describen el tipo. Este disco no se pesó ni se midió. Numista describe el reverso con la misma leyenda. Aquí solo hay una cara, y no se ve un resello. La ceca no está resuelta: en otras fichas de la serie Numista dice Alemania, sin documento, y una biografía cita Barcelona. Esta pieza no elige. No es moneda del peso provincial de 1895.',
      en: 'A plantation token of Hacienda Vega Redonda. The value is in almudes, a volume measure of coffee in the cherry, not in pesos. Numista N#163262 gives the type as brass, 18 mm, 2.0 g, plain edge, milled, medal alignment, and cites Rulau, Latin American Tokens, Lsm 18, plus TC#272359. Those figures describe the type. This disc was not weighed or measured. Numista describes the reverse with the same legend. Only one face is here, and no countermark shows. The mint is unsettled: on other tokens of the series Numista says Germany, with no document, and a biography cites Barcelona. This piece does not choose. It is not a coin of the 1895 provincial peso.',
    },
    scarcity: {
      es: 'No hay un tiraje que esta ficha pueda citar. La falta de cifra no deja sentada una rareza. El 2 almudes de la misma serie no es este disco.',
      en: 'This record can cite no mintage. A missing figure does not establish rarity. The two-almud token of the same series is not this disc.',
    },
    sources: [
      numistaSource('https://en.numista.com/163262', '163262', {
        es: 'Tipo: latón, 18 mm, 2,0 g, canto liso, ND (1890), Rulau Lsm 18, TC#272359. Anverso y reverso con la misma leyenda. No es el peso ni el diámetro de este ejemplar.',
        en: 'Type: brass, 18 mm, 2.0 g, plain edge, ND (1890), Rulau Lsm 18, TC#272359. Obverse and reverse share the legend. Not this specimen’s weight or diameter.',
      }),
      haciendaSource,
    ],
  },
  {
    id: 'pr-nd-medio-almud-vega-redonda',
    path: `${VEGA_REDONDA_PATH}medio-almud/`,
    pathEn: `${VEGA_REDONDA_PATH_EN}medio-almud/`,
    altCatalog: 'Rulau Lsm 17',
    references: 'Rulau Lsm 17 · Numista N#524158 · TC#344505',
    year: {
      es: 'Sin fecha en la pieza. Numista la lista como ND (1890).',
      en: 'No date on the piece. Numista lists it as ND (1890).',
    },
    denomination: { es: '½ almud', en: '½ almud' },
    composition: {
      es: 'Latón, según Numista para el tipo. No es un ensayo de este disco.',
      en: 'Brass, per Numista for the type. Not an assay of this disc.',
    },
    weight: {
      es: 'No pesado. Numista no publica el peso de este tipo.',
      en: 'Not weighed. Numista does not publish a weight for this type.',
    },
    diameter: {
      es: 'No medido. Tipo en Numista: 23 mm.',
      en: 'Not measured. Numista type: 23 mm.',
    },
    edge: {
      es: 'No fotografiado. Numista da canto liso para el tipo.',
      en: 'Not photographed. Numista gives a plain edge for the type.',
    },
    place,
    alignment: {
      es: 'No comprobada. Numista da alineación medalla (↑↑) para el tipo.',
      en: 'Not checked. Numista gives medal alignment (↑↑) for the type.',
    },
    grade: {
      es: 'Sin encapsular y sin grado numérico. Latón dorado, leyendas firmes, estrellas y círculo de puntos completos. El 2 lleva punteado en el cuerpo. Marcas leves en los campos.',
      en: 'Unslabbed, and no numerical grade. Golden brass, firm legends, stars and beaded circle complete. The 2 is stippled in the body. Light marks in the fields.',
    },
    no_serial_reason:
      'Hacienda Vega Redonda half-almud token: the type carries no serial, and this example is unslabbed with no certification number.',
    images: {
      front: '/images/catalog/puerto-rico/puerto-rico-hacienda-vega-redonda-medio-almud.webp',
      ...IMAGE,
    },
    title: { es: '½ almud · Hacienda Vega Redonda', en: '½ almud · Hacienda Vega Redonda' },
    h1: { es: 'Ficha de ½ almud', en: '½ almud token' },
    metaTitle: { es: 'Ficha de ½ almud · Vega Redonda', en: '½ almud token · Vega Redonda' },
    metaDescription: {
      es: 'Ficha de ½ almud de la Hacienda Vega Redonda, Las Marías. Latón, sin fecha, Rulau Lsm 17, Numista N#524158. Una sola cara. Este disco no se midió.',
      en: 'Half-almud token of Hacienda Vega Redonda, Las Marías. Brass, undated, Rulau Lsm 17, Numista N#524158. One face only. This disc was not measured.',
    },
    kicker: { es: 'Puerto Rico · Ficha de hacienda', en: 'Puerto Rico · Hacienda token' },
    lead: {
      es: 'Ficha de ½ almud de la Hacienda Vega Redonda, en Bucarabones, Las Marías. Latón, sin fecha y sin serial. Numista la cataloga como ND (1890), Rulau Lsm 17. Esta fotografía es una sola cara.',
      en: 'A half-almud token of Hacienda Vega Redonda, in Bucarabones, Las Marías. Brass, undated, and with no serial. Numista catalogues it as ND (1890), Rulau Lsm 17. This photograph is a single face.',
    },
    legend: {
      es: 'HACIENDA arriba, VEGA·REDONDA abajo, ½ al centro y ALMUD debajo. Una estrella a cada lado, círculo de puntos y orla de dentículos.',
      en: 'HACIENDA above, VEGA·REDONDA below, ½ in the center and ALMUD beneath. A star on each side, a beaded circle, and a denticled border.',
    },
    caption: {
      es: 'Cara fotografiada del ½ almud: HACIENDA, VEGA·REDONDA y ALMUD. El reverso de este ejemplar no se fotografió.',
      en: 'Photographed face of the half almud: HACIENDA, VEGA·REDONDA, and ALMUD. This specimen’s reverse was not photographed.',
    },
    description: {
      es: 'Ficha de plantación de la Hacienda Vega Redonda. El valor está en almudes, medida de volumen del café en cereza, no en pesos. Numista N#524158 da el tipo como latón, 23 mm, canto liso, acuñación a molino y alineación medalla, sin peso publicado, y cita Rulau Lsm 17 y TC#344505. El comentario dice que la hacienda era de Francisco Baco y que la ficha se acuñó en Alemania, sin documento. Esas líneas no miden este disco. Numista describe las dos caras con la misma leyenda. Aquí solo hay una, y no se ve un resello. Una biografía sitúa el cuño en Barcelona. Esta ficha no elige ceca. No es moneda del peso provincial de 1895.',
      en: 'A plantation token of Hacienda Vega Redonda. The value is in almudes, a volume measure of coffee in the cherry, not in pesos. Numista N#524158 gives the type as brass, 23 mm, plain edge, milled, medal alignment, with no published weight, and cites Rulau Lsm 17 and TC#344505. The comment says the hacienda belonged to Francisco Baco and that the token was struck in Germany, with no document. Those lines do not measure this disc. Numista describes both faces with the same legend. Only one is here, and no countermark shows. A biography places the die in Barcelona. This record does not choose a mint. It is not a coin of the 1895 provincial peso.',
    },
    scarcity: {
      es: 'No hay un tiraje que esta ficha pueda citar. La falta de cifra no deja sentada una rareza. El 2 almudes de la misma serie no es este disco.',
      en: 'This record can cite no mintage. A missing figure does not establish rarity. The two-almud token of the same series is not this disc.',
    },
    sources: [
      numistaSource('https://en.numista.com/524158', '524158', {
        es: 'Tipo: latón, 23 mm, canto liso, ND (1890), Rulau Lsm 17, TC#344505. Sin peso. El comentario atribuye la hacienda a Francisco Baco y la acuñación a Alemania, sin cita.',
        en: 'Type: brass, 23 mm, plain edge, ND (1890), Rulau Lsm 17, TC#344505. No weight. The comment gives the hacienda to Francisco Baco and the striking to Germany, with no citation.',
      }),
      haciendaSource,
      biographySource,
    ],
  },
  {
    id: 'pr-nd-un-almud-vega-redonda',
    path: `${VEGA_REDONDA_PATH}un-almud/`,
    pathEn: `${VEGA_REDONDA_PATH_EN}un-almud/`,
    altCatalog: 'Rulau Lsm 16',
    references: 'Rulau Lsm 16 · Numista N#570378',
    year: {
      es: 'Sin fecha en la pieza. Numista la lista como ND (1890).',
      en: 'No date on the piece. Numista lists it as ND (1890).',
    },
    denomination: { es: '1 almud', en: '1 almud' },
    composition: {
      es: 'Latón, según Numista para el tipo. No es un ensayo de este disco.',
      en: 'Brass, per Numista for the type. Not an assay of this disc.',
    },
    weight: {
      es: 'No pesado. Numista no publica el peso de este tipo.',
      en: 'Not weighed. Numista does not publish a weight for this type.',
    },
    diameter: {
      es: 'No medido. Tipo en Numista: 27 mm.',
      en: 'Not measured. Numista type: 27 mm.',
    },
    edge: {
      es: 'No fotografiado. La ficha de Numista de este valor no indica el canto.',
      en: 'Not photographed. The Numista page for this value does not state the edge.',
    },
    place,
    alignment: {
      es: 'No comprobada. Numista da las 9 (↑←) para el tipo, distinta de la alineación medalla del ¼ y del ½.',
      en: 'Not checked. Numista gives 9 o’clock (↑←) for the type, unlike the medal alignment of the quarter and the half.',
    },
    grade: {
      es: 'Sin encapsular y sin grado numérico. Latón dorado, leyendas firmes, estrellas y círculo de puntos completos. El 1 es de gancho y lleva punteado en el cuerpo. Marcas leves en los campos. No se ve un resello.',
      en: 'Unslabbed, and no numerical grade. Golden brass, firm legends, stars and beaded circle complete. The 1 is a hooked numeral and stippled in the body. Light marks in the fields. No countermark shows.',
    },
    no_serial_reason:
      'Hacienda Vega Redonda one-almud token: the type carries no serial, and this example is unslabbed with no certification number.',
    images: {
      front: '/images/catalog/puerto-rico/puerto-rico-hacienda-vega-redonda-un-almud.webp',
      ...IMAGE,
    },
    title: { es: '1 almud · Hacienda Vega Redonda', en: '1 almud · Hacienda Vega Redonda' },
    h1: { es: 'Ficha de 1 almud', en: '1 almud token' },
    metaTitle: { es: 'Ficha de 1 almud · Vega Redonda', en: '1 almud token · Vega Redonda' },
    metaDescription: {
      es: 'Ficha de 1 almud de la Hacienda Vega Redonda, Las Marías. Latón, sin fecha, Rulau Lsm 16, Numista N#570378. El 1 es de gancho. Una sola cara.',
      en: 'One-almud token of Hacienda Vega Redonda, Las Marías. Brass, undated, Rulau Lsm 16, Numista N#570378. The 1 is hooked. One face only.',
    },
    kicker: { es: 'Puerto Rico · Ficha de hacienda', en: 'Puerto Rico · Hacienda token' },
    lead: {
      es: 'Ficha de 1 almud de la Hacienda Vega Redonda, en Bucarabones, Las Marías. Latón, sin fecha y sin serial. El 1 del cuño es de gancho. Numista la cataloga como ND (1890), Rulau Lsm 16. Esta fotografía es una sola cara.',
      en: 'A one-almud token of Hacienda Vega Redonda, in Bucarabones, Las Marías. Brass, undated, and with no serial. The 1 on the die is a hooked numeral. Numista catalogues it as ND (1890), Rulau Lsm 16. This photograph is a single face.',
    },
    legend: {
      es: 'HACIENDA arriba, VEGA·REDONDA abajo, un 1 de gancho al centro y ALMUD debajo. Una estrella a cada lado, círculo de puntos y orla de dentículos.',
      en: 'HACIENDA above, VEGA·REDONDA below, a hooked 1 in the center and ALMUD beneath. A star on each side, a beaded circle, and a denticled border.',
    },
    caption: {
      es: 'Cara fotografiada del 1 almud: HACIENDA, el 1 de gancho, ALMUD y VEGA·REDONDA. El reverso de este ejemplar no se fotografió.',
      en: 'Photographed face of the one almud: HACIENDA, the hooked 1, ALMUD, and VEGA·REDONDA. This specimen’s reverse was not photographed.',
    },
    description: {
      es: 'Ficha de plantación de la Hacienda Vega Redonda. El valor está en almudes, medida de volumen del café en cereza, no en pesos. Numista N#570378 da el tipo como latón, 27 mm, sin peso publicado, orientación a las 9, y cita Rulau Lsm 16. Escribe el lugar como Las Marías y, por error, Bucaramanga: el barrio es Bucarabones. El comentario atribuye la finca a Francisco Baco, la acuñación a Alemania sin documento, y un resello de et en algunos ejemplares. Esta fotografía no muestra ese resello. El 1 de gancho se ve en el disco; no nombra el taller. Numista describe las dos caras con la misma leyenda. Aquí solo hay una. No es moneda del peso provincial de 1895.',
      en: 'A plantation token of Hacienda Vega Redonda. The value is in almudes, a volume measure of coffee in the cherry, not in pesos. Numista N#570378 gives the type as brass, 27 mm, with no published weight, 9 o’clock orientation, and cites Rulau Lsm 16. It writes the place as Las Marías and, in error, Bucaramanga: the barrio is Bucarabones. The comment gives the farm to Francisco Baco, the striking to Germany with no document, and an ampersand countermark on some examples. This photograph shows no such countermark. The hooked 1 is on the disc; it does not name the workshop. Numista describes both faces with the same legend. Only one is here. It is not a coin of the 1895 provincial peso.',
    },
    scarcity: {
      es: 'No hay un tiraje que esta ficha pueda citar. La falta de cifra no deja sentada una rareza. El resello de et que Numista menciona en otros ejemplares no está en esta foto. El 2 almudes de la serie no es este disco.',
      en: 'This record can cite no mintage. A missing figure does not establish rarity. The ampersand countermark Numista mentions on other examples is not in this photograph. The two-almud token of the series is not this disc.',
    },
    sources: [
      numistaSource('https://en.numista.com/570378', '570378', {
        es: 'Tipo: latón, 27 mm, ND (1890), Rulau Lsm 16, orientación a las 9. Sin peso. El comentario dice Alemania, Francisco Baco, y un resello de et en algunos ejemplares. Escribe Bucaramanga por error.',
        en: 'Type: brass, 27 mm, ND (1890), Rulau Lsm 16, 9 o’clock. No weight. The comment says Germany, Francisco Baco, and an ampersand countermark on some examples. It writes Bucaramanga in error.',
      }),
      haciendaSource,
      biographySource,
    ],
  },
  {
    id: 'pr-nd-dos-almudes-vega-redonda',
    path: `${VEGA_REDONDA_PATH}dos-almudes/`,
    pathEn: `${VEGA_REDONDA_PATH_EN}dos-almudes/`,
    altCatalog: 'Rulau Lsm 15',
    references: 'Rulau Lsm 15',
    year: {
      es: 'Sin fecha en la pieza. El resto de la serie se lista en Numista como ND (1890); este valor no tiene ficha ahí.',
      en: 'No date on the piece. The rest of the series is listed on Numista as ND (1890); this value has no page there.',
    },
    denomination: { es: '2 almudes', en: '2 almudes' },
    composition: {
      es: 'Latón, como el resto de la serie en Numista (¼, ½ y 1 almud). No es un ensayo de este disco.',
      en: 'Brass, like the rest of the series on Numista (¼, ½, and 1 almud). Not an assay of this disc.',
    },
    weight: {
      es: 'No pesado. No hay un peso de tipo publicado aquí para este valor.',
      en: 'Not weighed. No published type weight is cited here for this value.',
    },
    diameter: {
      es: 'No medido. No hay un diámetro de tipo publicado aquí para este valor.',
      en: 'Not measured. No published type diameter is cited here for this value.',
    },
    edge: {
      es: 'No fotografiado. Sin dato de canto de tipo para este valor.',
      en: 'Not photographed. No type edge is published here for this value.',
    },
    place,
    alignment: {
      es: 'No comprobada. Con una sola cara no se fija la alineación.',
      en: 'Not checked. A single face does not fix the alignment.',
    },
    grade: {
      es: 'Sin encapsular y sin grado numérico. Latón dorado, leyendas firmes, estrellas y círculo de puntos completos. El 2 lleva punteado en el cuerpo. Marcas leves en los campos. No se ve un resello.',
      en: 'Unslabbed, and no numerical grade. Golden brass, firm legends, stars and beaded circle complete. The 2 is stippled in the body. Light marks in the fields. No countermark shows.',
    },
    no_serial_reason:
      'Hacienda Vega Redonda two-almud token: the type carries no serial, and this example is unslabbed with no certification number.',
    images: {
      front: '/images/catalog/puerto-rico/puerto-rico-hacienda-vega-redonda-dos-almudes.webp',
      ...IMAGE_DOS,
    },
    title: { es: '2 almudes · Hacienda Vega Redonda', en: '2 almudes · Hacienda Vega Redonda' },
    h1: { es: 'Ficha de 2 almudes', en: '2 almudes token' },
    metaTitle: { es: 'Ficha de 2 almudes · Vega Redonda', en: '2 almudes token · Vega Redonda' },
    metaDescription: {
      es: 'Ficha de 2 almudes de la Hacienda Vega Redonda, Las Marías. Latón, sin fecha, Rulau Lsm 15. Completa la serie 15–18. Una sola cara.',
      en: 'Two-almud token of Hacienda Vega Redonda, Las Marías. Brass, undated, Rulau Lsm 15. Completes the 15–18 series. One face only.',
    },
    kicker: { es: 'Puerto Rico · Ficha de hacienda', en: 'Puerto Rico · Hacienda token' },
    lead: {
      es: 'Ficha de 2 almudes de la Hacienda Vega Redonda, en Bucarabones, Las Marías. Latón, sin fecha y sin serial. Rulau Lsm 15. Numista aún no publica este valor. Esta fotografía es una sola cara.',
      en: 'A two-almud token of Hacienda Vega Redonda, in Bucarabones, Las Marías. Brass, undated, and with no serial. Rulau Lsm 15. Numista does not yet list this value. This photograph is a single face.',
    },
    legend: {
      es: 'HACIENDA arriba, VEGA·REDONDA abajo, un 2 al centro y ALMUD debajo. Una estrella a cada lado, círculo de puntos y orla de dentículos.',
      en: 'HACIENDA above, VEGA·REDONDA below, a 2 in the center and ALMUD beneath. A star on each side, a beaded circle, and a denticled border.',
    },
    caption: {
      es: 'Cara fotografiada del 2 almudes: HACIENDA, el 2 punteado, ALMUD y VEGA·REDONDA. El reverso de este ejemplar no se fotografió.',
      en: 'Photographed face of the two almudes: HACIENDA, the stippled 2, ALMUD, and VEGA·REDONDA. This specimen’s reverse was not photographed.',
    },
    description: {
      es: 'Ficha de plantación de la Hacienda Vega Redonda. El valor está en almudes, medida de volumen del café en cereza, no en pesos. AB Philea, subasta 30, lote 1118, agrupa el ¼, el ½, el 1 y el 2 como Rulau 15–18; este disco es el Lsm 15. Numista publica el ¼, el ½ y el 1 (N#163262, N#524158, N#570378) y no este valor. El metal se toma del resto de la serie: latón. Este disco no se pesó ni se midió. Aquí solo hay una cara, y no se ve un resello. La ceca sigue abierta: Numista dice Alemania en otras fichas, sin documento, y una biografía cita Barcelona. Esta pieza no elige. No es moneda del peso provincial de 1895.',
      en: 'A plantation token of Hacienda Vega Redonda. The value is in almudes, a volume measure of coffee in the cherry, not in pesos. AB Philea, auction 30, lot 1118, groups the quarter, half, one, and two as Rulau 15–18; this disc is Lsm 15. Numista publishes the quarter, half, and one (N#163262, N#524158, N#570378) and not this value. The metal is taken from the rest of the series: brass. This disc was not weighed or measured. Only one face is here, and no countermark shows. The mint is still open: Numista says Germany on other tokens, with no document, and a biography cites Barcelona. This piece does not choose. It is not a coin of the 1895 provincial peso.',
    },
    scarcity: {
      es: 'No hay un tiraje que esta ficha pueda citar. La falta de cifra no deja sentada una rareza. Con este disco la vitrina reúne los cuatro valores del juego Rulau 15–18.',
      en: 'This record can cite no mintage. A missing figure does not establish rarity. With this disc the case holds all four values of the Rulau 15–18 set.',
    },
    sources: [
      {
        href: 'https://www.philea.se/en/product/155220',
        es: 'AB Philea, subasta 30, lote 1118 — juego Rulau 15–18',
        en: 'AB Philea, auction 30, lot 1118 — Rulau 15–18 set',
        note: {
          es: 'Describe un juego de ¼, ½, 1 y 2 almudes como Rulau 15–18. Fija el 2 como Lsm 15. Esta ficha no republica el precio.',
          en: 'Describes a set of quarter, half, one, and two almudes as Rulau 15–18. It places the two as Lsm 15. This record does not republish the price.',
        },
      },
      haciendaSource,
      biographySource,
    ],
  },
];

export type VegaRedondaChapter = {
  id: string;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const vegaRedondaChapters: VegaRedondaChapter[] = [
  {
    id: 'hacienda',
    title: { es: 'La hacienda', en: 'The hacienda' },
    lead: {
      es: 'La finca está en el barrio Bucarabones de Las Marías, en la cordillera cafetalera del oeste.',
      en: 'The farm is in barrio Bucarabones, Las Marías, in the coffee highlands of the west.',
    },
    body: {
      es: 'Haciendas de Puerto Rico da la dirección: Bo. Bucarabones, Las Marías. Numista sitúa ahí la Vega Redonda y escribe el nombre del dueño como Francisco Baco, sin acento. Una biografía de las riquezas de la isla, que cita la Revista NumiExpo de 1983, usa Francisco Bacó y junta estas fichas con las de la Hacienda Engracia. Esta vitrina no fija el año de fundación ni el parentesco.',
      en: 'Haciendas de Puerto Rico gives the address: Bo. Bucarabones, Las Marías. Numista places Vega Redonda there and writes the owner as Francisco Baco, without the accent. A biography of the island’s wealth, citing Revista NumiExpo for 1983, uses Francisco Bacó and groups these tokens with those of Hacienda Engracia. This case does not fix the year of foundation or the family tie.',
    },
  },
  {
    id: 'almud',
    title: { es: 'Almud y ril', en: 'Almud and ril' },
    lead: {
      es: 'La ficha nombra una medida de café, no un peso.',
      en: 'The token names a measure of coffee, not a peso.',
    },
    body: {
      es: 'A finales del siglo XIX la menuda oficial llegaba mal al interior, y los hacendados pagaron jornales con fichas propias: los riles. El almud es medida de volumen. En el café, de cereza. El cajón no era igual en todas las fincas, y el disco no trae un equivalente en pesos. Jorge L. Crespo Armáiz estudia ese pago entre 1870 y 1934. La pieza, sola, no prueba cómo se canjeaba ni cuánto rendía el jornal.',
      en: 'In the late nineteenth century official small change reached the interior poorly, and planters paid wages in their own tokens: riles. The almud is a volume measure. For coffee, it is the cherry. The box was not the same on every farm, and the disc carries no peso equivalent. Jorge L. Crespo Armáiz studies that payment from 1870 to 1934. The piece alone does not show how it was redeemed or what a day’s wage came to.',
    },
  },
  {
    id: 'emision',
    title: { es: 'La serie acuñada', en: 'The struck series' },
    lead: {
      es: 'Estas cuatro fichas llevan HACIENDA arriba y VEGA·REDONDA abajo.',
      en: 'These four tokens read HACIENDA above and VEGA·REDONDA below.',
    },
    body: {
      es: 'Se ha descrito una emisión anterior, incusa, con las letras VR y un valor en almudes. Aquí no hay un ejemplar ni un número de catálogo que la fije. La serie de esta vitrina lleva el valor al centro, la palabra ALMUD, el círculo de puntos y las dos estrellas. Numista lista el ¼, el ½ y el 1 como ND (1890), latón, Rulau Lsm 18, Lsm 17 y Lsm 16. AB Philea, subasta 30, lote 1118, describe un juego de ¼, ½, 1 y 2 almudes como Rulau 15–18. El 2 almudes de esta vitrina es el Lsm 15; Numista aún no publica ese valor. Esta página no republica el remate de ese lote.',
      en: 'An earlier incuse issue has been described, with the letters VR and a value in almudes. There is no example here, and no catalogue number that fixes it. The series in this case carries the value in the center, the word ALMUD, the beaded circle, and the two stars. Numista lists the quarter, the half, and the one as ND (1890), brass, Rulau Lsm 18, Lsm 17, and Lsm 16. AB Philea, auction 30, lot 1118, describes a set of quarter, half, one, and two almudes as Rulau 15–18. The two almudes in this case is Lsm 15; Numista does not yet list that value. This page does not republish that lot’s hammer.',
    },
  },
  {
    id: 'ceca',
    title: { es: 'La ceca, abierta', en: 'The mint, still open' },
    lead: {
      es: 'Alemania y Barcelona siguen en pie. El disco no trae marca de taller.',
      en: 'Germany and Barcelona both remain. The disc carries no workshop mark.',
    },
    body: {
      es: 'Numista dice, en el ½ y en el 1 almud, que se acuñaron en Alemania, y no adjunta documento. La biografía citada recoge el testimonio atribuido a la Revista NumiExpo (1983, págs. 10–11): un taller de la calle Canuda 37, en Barcelona, para Vega Redonda y para la Hacienda Engracia. El 1 de esta vitrina es un 1 de gancho. Eso se ve en la foto y no nombra la ceca. El ¼ y el ½, en Numista, van en alineación medalla; el 1, a las 9. El 2 no tiene ficha en Numista. Con una sola cara no se comprueba.',
      en: 'Numista says, on the half and the one almud, that they were struck in Germany, and attaches no document. The biography cited above reports the account attributed to Revista NumiExpo (1983, pp. 10–11): a workshop at Carrer de la Canuda 37, in Barcelona, for Vega Redonda and for Hacienda Engracia. The one in this case is a hooked 1. That shows in the photograph and does not name the mint. On Numista the quarter and the half are medal-aligned; the one is at 9 o’clock. The two has no Numista page. A single face cannot check it.',
    },
  },
  {
    id: 'despues',
    title: { es: 'Después de 1898', en: 'After 1898' },
    lead: {
      es: 'El peso provincial salió de circulación. Estas fichas no dicen cuándo dejó de usarlas la hacienda.',
      en: 'The provincial peso left circulation. These tokens do not say when the hacienda stopped using its own.',
    },
    body: {
      es: 'La vitrina del peso provincial fecha la desmonetización, con Numista, el 12 de abril de 1900. En agosto de 1899 el huracán San Ciriaco cruzó la cordillera cafetalera. Esta página no cifra muertos ni pérdidas. Crespo Armáiz sigue el pago de jornales con fichas hasta la década de 1930, sobre todo en el azúcar. Entre las fuentes de aquí no hay un documento que diga cuándo Vega Redonda retiró las suyas.',
      en: 'The provincial-peso case dates demonetization, with Numista, to 12 April 1900. In August 1899 the San Ciriaco hurricane crossed the coffee highlands. This page does not count deaths or losses. Crespo Armáiz follows wage payment in tokens into the 1930s, above all in sugar. Among the sources here, none says when Vega Redonda withdrew its own.',
    },
  },
];

export const vegaRedondaSources: CatalogSource[] = [
  numistaSource('https://en.numista.com/163262', '163262', {
    es: '¼ almud. Latón, 18 mm, 2,0 g, canto liso, Rulau Lsm 18, TC#272359, ND (1890).',
    en: 'Quarter almud. Brass, 18 mm, 2.0 g, plain edge, Rulau Lsm 18, TC#272359, ND (1890).',
  }),
  numistaSource('https://en.numista.com/524158', '524158', {
    es: '½ almud. Latón, 23 mm, canto liso, sin peso, Rulau Lsm 17, TC#344505. El comentario dice Alemania, sin cita.',
    en: 'Half almud. Brass, 23 mm, plain edge, no weight, Rulau Lsm 17, TC#344505. The comment says Germany, with no citation.',
  }),
  numistaSource('https://en.numista.com/570378', '570378', {
    es: '1 almud. Latón, 27 mm, sin peso, Rulau Lsm 16, orientación a las 9. Escribe Bucaramanga por error.',
    en: 'One almud. Brass, 27 mm, no weight, Rulau Lsm 16, 9 o’clock. It writes Bucaramanga in error.',
  }),
  haciendaSource,
  biographySource,
  {
    href: 'https://dialnet.unirioja.es/descarga/articulo/10844367.pdf',
    es: 'Jorge L. Crespo Armáiz — fichas y vales como pago de jornales en Puerto Rico (1870–1934), OMNI n.º 19',
    en: 'Jorge L. Crespo Armáiz — tokens and scrip as wage payment in Puerto Rico (1870–1934), OMNI no. 19',
    note: {
      es: 'Estudia la persistencia del pago con fichas. No describe el cuño de Vega Redonda.',
      en: 'Studies how long wage payment in tokens lasted. It does not describe the Vega Redonda die.',
    },
  },
  {
    href: 'https://www.philea.se/en/product/155220',
    es: 'AB Philea, subasta 30, lote 1118 — juego Rulau 15–18',
    en: 'AB Philea, auction 30, lot 1118 — Rulau 15–18 set',
    note: {
      es: 'Describe un juego de ¼, ½, 1 y 2 almudes como Rulau 15–18. Esta página no republica el precio.',
      en: 'Describes a set of quarter, half, one, and two almudes as Rulau 15–18. This page does not republish the price.',
    },
  },
  {
    href: 'https://enciclopediapr.org/content/historia-de-la-moneda-en-puerto-rico/',
    es: 'EnciclopediaPR — Historia de la moneda en Puerto Rico',
    en: 'EnciclopediaPR — History of money in Puerto Rico',
    note: {
      es: 'Marco de la moneda insular, de la plata extranjera al peso provincial. No cataloga estas fichas.',
      en: 'The frame of island money, from foreign silver to the provincial peso. It does not catalogue these tokens.',
    },
  },
];

export const vegaRedondaCopy = {
  es: {
    metaTitle: 'Fichas de la Hacienda Vega Redonda',
    metaDescription:
      'Cuatro fichas de latón de la Hacienda Vega Redonda, Las Marías: ¼, ½, 1 y 2 almudes, sin fecha. Completan Rulau Lsm 15–18.',
    kicker: 'Puerto Rico · Numismática',
    title: 'Fichas de la Hacienda Vega Redonda',
    nav: 'Hacienda Vega Redonda',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Puerto Rico · Numismática',
    breadcrumb: 'Migas de pan',
    lead:
      'Cuatro fichas de latón de la Hacienda Vega Redonda, en el barrio Bucarabones de Las Marías. Valen ¼, ½, 1 y 2 almudes. No traen fecha. Numista lista el ¼, el ½ y el 1 como ND (1890); el 2 es Rulau Lsm 15.',
    factsHeading: 'Datos de la serie',
    placeLabel: 'Lugar',
    place: 'Barrio Bucarabones, Las Marías, Puerto Rico',
    issuerLabel: 'Emisor',
    issuer: 'Hacienda Vega Redonda',
    unitLabel: 'Unidad',
    unit: 'Almud, medida de volumen del café en cereza. El disco no la convierte a pesos.',
    metalLabel: 'Metal de tipo',
    metal: 'Latón, según Numista en el ¼, el ½ y el 1. No es un ensayo de estos discos.',
    dateLabel: 'Fecha',
    date: 'Sin fecha en la pieza. Catálogo: ND (1890) donde Numista lo lista.',
    heldLabel: 'En la vitrina',
    held: '¼, ½, 1 y 2 almudes. Completan el juego Rulau 15–18. No hay ejemplar de la emisión incusa con letras VR.',
    holdingsTitle: 'Fichas en la colección',
    holdingsIntro:
      'Cuatro discos de la serie con leyenda HACIENDA / VEGA·REDONDA. Sin serial y sin cápsula. De cada uno se fotografió una cara.',
    holdingsAria: 'Fichas de la Hacienda Vega Redonda',
    viewToken: 'Abrir la ficha',
    tableHeading: 'Valores catalogados',
    tableCaption: 'La serie de almudes de la Hacienda Vega Redonda y lo que hay en esta vitrina.',
    colValue: 'Valor',
    colRulau: 'Rulau',
    colNumista: 'Numista',
    colType: 'Tipo publicado',
    colCase: 'En la vitrina',
    inCase: 'Sí',
    notInCase: 'No',
    rows: [
      {
        href: `${VEGA_REDONDA_PATH}cuarto-almud/`,
        value: '¼ almud',
        rulau: 'Lsm 18',
        numista: 'N#163262',
        type: 'Latón, 18 mm, 2,0 g',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}medio-almud/`,
        value: '½ almud',
        rulau: 'Lsm 17',
        numista: 'N#524158',
        type: 'Latón, 23 mm; peso no publicado',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}un-almud/`,
        value: '1 almud',
        rulau: 'Lsm 16',
        numista: 'N#570378',
        type: 'Latón, 27 mm; peso no publicado',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}dos-almudes/`,
        value: '2 almudes',
        rulau: 'Lsm 15',
        numista: 'No citado aquí',
        type: 'Latón por la serie; sin medida publicada',
        held: true,
      },
    ],
    sourcesTitle: 'Fuentes',
    coinageLead: 'El peso provincial de 1895, labrado en Madrid, está en la vitrina de moneda de la isla.',
    coinageLink: 'Puerto Rico · El peso provincial',
    notesLead: 'El papel moneda, incluido el Billete de Canje de 1895, está en la vitrina de notafilia.',
    notesLink: 'Puerto Rico · Emisiones coloniales y de transición',
    backNumismatics: 'Volver a Numismática',
  },
  en: {
    metaTitle: 'Hacienda Vega Redonda almud tokens',
    metaDescription:
      'Four brass tokens of Hacienda Vega Redonda, Las Marías: ¼, ½, 1, and 2 almudes, undated. They complete Rulau Lsm 15–18.',
    kicker: 'Puerto Rico · Numismatics',
    title: 'Hacienda Vega Redonda tokens',
    nav: 'Hacienda Vega Redonda',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Puerto Rico · Numismatics',
    breadcrumb: 'Breadcrumb',
    lead:
      'Four brass tokens of Hacienda Vega Redonda, in barrio Bucarabones, Las Marías. They are valued at ¼, ½, 1, and 2 almudes. They carry no date. Numista lists the quarter, half, and one as ND (1890); the two is Rulau Lsm 15.',
    factsHeading: 'Series facts',
    placeLabel: 'Place',
    place: 'Barrio Bucarabones, Las Marías, Puerto Rico',
    issuerLabel: 'Issuer',
    issuer: 'Hacienda Vega Redonda',
    unitLabel: 'Unit',
    unit: 'The almud, a volume measure of coffee in the cherry. The disc does not convert it into pesos.',
    metalLabel: 'Type metal',
    metal: 'Brass, per Numista for the quarter, half, and one. Not an assay of these discs.',
    dateLabel: 'Date',
    date: 'No date on the piece. Catalogue: ND (1890) where Numista lists it.',
    heldLabel: 'In the case',
    held: 'Quarter, half, one, and two almudes. They complete the Rulau 15–18 set. There is no example of the incuse issue lettered VR.',
    holdingsTitle: 'Tokens in the collection',
    holdingsIntro:
      'Four discs of the series lettered HACIENDA / VEGA·REDONDA. No serial and no slab. One face of each was photographed.',
    holdingsAria: 'Hacienda Vega Redonda tokens',
    viewToken: 'Open the record',
    tableHeading: 'Catalogued values',
    tableCaption: 'The almud series of Hacienda Vega Redonda, and what this case holds.',
    colValue: 'Value',
    colRulau: 'Rulau',
    colNumista: 'Numista',
    colType: 'Published type',
    colCase: 'In the case',
    inCase: 'Yes',
    notInCase: 'No',
    rows: [
      {
        href: `${VEGA_REDONDA_PATH}cuarto-almud/`,
        value: '¼ almud',
        rulau: 'Lsm 18',
        numista: 'N#163262',
        type: 'Brass, 18 mm, 2.0 g',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}medio-almud/`,
        value: '½ almud',
        rulau: 'Lsm 17',
        numista: 'N#524158',
        type: 'Brass, 23 mm; weight unpublished',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}un-almud/`,
        value: '1 almud',
        rulau: 'Lsm 16',
        numista: 'N#570378',
        type: 'Brass, 27 mm; weight unpublished',
        held: true,
      },
      {
        href: `${VEGA_REDONDA_PATH}dos-almudes/`,
        value: '2 almudes',
        rulau: 'Lsm 15',
        numista: 'Not cited here',
        type: 'Brass by series; no published measure',
        held: true,
      },
    ],
    sourcesTitle: 'Sources',
    coinageLead: 'The 1895 provincial peso, struck in Madrid, is in the island’s coin case.',
    coinageLink: 'Puerto Rico · The provincial peso',
    notesLead: 'The paper money, including the 1895 exchange note, is in the notaphily case.',
    notesLink: 'Puerto Rico · Colonial and transition issues',
    backNumismatics: 'Back to Numismatics',
  },
} as const;

export const vegaRedondaTokenChrome = {
  es: {
    factsHeading: 'Datos de catálogo',
    aboutHeading: 'La pieza',
    legendHeading: 'Leyenda',
    faceLabel: 'Cara fotografiada',
    scarcityHeading: 'Rareza',
    sourcesHeading: 'Fuentes',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    valueLabel: 'Valor',
    metalLabel: 'Metal',
    weightLabel: 'Peso',
    diameterLabel: 'Diámetro',
    edgeLabel: 'Canto',
    placeLabel: 'Lugar',
    alignmentLabel: 'Alineación',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    backToSeries: 'Volver a las fichas de Vega Redonda',
    relatedLead: 'Otra ficha de la Hacienda Vega Redonda.',
    faceHeading: 'Anverso',
  },
  en: {
    factsHeading: 'Catalog facts',
    aboutHeading: 'The piece',
    legendHeading: 'Legend',
    faceLabel: 'Photographed face',
    scarcityHeading: 'Scarcity',
    sourcesHeading: 'Sources',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    valueLabel: 'Value',
    metalLabel: 'Metal',
    weightLabel: 'Weight',
    diameterLabel: 'Diameter',
    edgeLabel: 'Edge',
    placeLabel: 'Place',
    alignmentLabel: 'Alignment',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    backToSeries: 'Back to the Vega Redonda tokens',
    relatedLead: 'Another token of Hacienda Vega Redonda.',
    faceHeading: 'Obverse',
  },
} as const;

export function vegaRedondaPath(locale: Locale): string {
  return localizePath(VEGA_REDONDA_PATH, locale);
}

export function vegaRedondaTokenPath(token: VegaRedondaToken, locale: Locale): string {
  return localizePath(token.path, locale);
}

export function vegaRedondaTokenById(id: VegaRedondaTokenId): VegaRedondaToken {
  const token = vegaRedondaTokens.find((item) => item.id === id);
  if (!token) throw new Error(`Missing Vega Redonda token ${id}`);
  return token;
}

export function vegaRedondaCoinageHref(locale: Locale): string {
  return localizePath('/coleccion/puerto-rico-numismatica/', locale);
}

export function vegaRedondaNotesHref(locale: Locale): string {
  return notesPath(locale);
}

export function vegaRedondaNumismaticsHref(locale: Locale): string {
  return localizePath(NUMISMATICS_PATH, locale);
}

export const vegaRedondaDedicatedSlugs = [
  VEGA_REDONDA_PATH,
  VEGA_REDONDA_PATH_EN,
  ...vegaRedondaTokens.flatMap((token) => [token.path, token.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
