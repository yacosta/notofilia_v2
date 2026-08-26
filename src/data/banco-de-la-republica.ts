import type { CatalogSource, LocalizedText } from './catalog';
import { BANREP_PATH } from './colombia';

export { BANREP_PATH };

const img = (file: string) => `/images/catalog/colombia/banco-de-la-republica/${file}`;

export type BanrepKind = 'circulation' | 'specimen' | 'error' | 'proof';

export type BanrepFigure = {
  src: string;
  caption: LocalizedText;
};

export type BanrepNote = {
  id: string;
  path: string;
  sort: number;
  kind: BanrepKind;
  pick: string;
  years: LocalizedText;
  printer: LocalizedText;
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  scarcity: LocalizedText;
  grade: LocalizedText;
  cardCaption: LocalizedText;
  images: BanrepFigure[];
  sources: CatalogSource[];
};

const abnc: LocalizedText = {
  es: 'American Bank Note Company',
  en: 'American Bank Note Company',
};

const banrepPress: LocalizedText = {
  es: 'Imprenta de Billetes del Banco de la República, Bogotá',
  en: 'Banknote Printing House of the Banco de la República, Bogotá',
};

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/el-banco/historia',
    es: 'Banco de la República — Historia del Banco',
    en: 'Banco de la República — History of the Bank',
    note: {
      es: 'Ley 25 de 1923: capital de 10 millones de pesos oro y monopolio de emisión.',
      en: 'Law 25 of 1923: 10 million gold pesos of capital and the monopoly of issue.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
    es: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
    en: 'Banrepcultural Encyclopedia — Paper money in Colombia',
    note: {
      es: 'Misión Kemmerer, primeras series oficiales y pérdida de la convertibilidad en 1931.',
      en: 'Kemmerer Mission, first official series, and the 1931 end of convertibility.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL.htm',
    es: 'Bank Note Museum — Colombia (Banco de la República)',
    en: 'Bank Note Museum — Colombia (Banco de la República)',
  },
  {
    href: 'https://en.numista.com/catalogue/colombia-1.html',
    es: 'Numista — Billetes de Colombia',
    en: 'Numista — Banknotes of Colombia',
  },
];

const sharedNoteSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/el-banco/historia',
    es: 'Banco de la República — Historia del Banco',
    en: 'Banco de la República — History of the Bank',
  },
  {
    href: 'https://en.numista.com/catalogue/colombia-1.html',
    es: 'Numista — Billetes de Colombia',
    en: 'Numista — Banknotes of Colombia',
  },
];

export const banrepNotes: BanrepNote[] = [
  {
    id: 'medio-peso-oro-1948',
    path: `${BANREP_PATH}medio-peso-oro-1948/`,
    sort: 10,
    kind: 'specimen',
    pick: 'P#384s',
    years: { es: '18 de enero de 1948', en: '18 January 1948' },
    printer: abnc,
    title: {
      es: '½ peso oro · «Lleritas»',
      en: '½ gold peso · “Lleritas”',
    },
    kicker: {
      es: 'Banco de la República · Espécimen',
      en: 'Banco de la República · Specimen',
    },
    lead: {
      es: 'Espécimen del fraccionario de 1948 con Antonio Nariño, sobrecarga SPECIMEN y numeración en ceros.',
      en: '1948 fractional specimen with Antonio Nariño, a SPECIMEN overprint, and zero serials.',
    },
    description: {
      es: 'El medio peso oro del 18 de enero de 1948 cierra el tramo de fraccionarios ligados al patrón oro. El anverso muestra a Antonio Nariño entre grandes cifras ½; el reverso, el escudo de Colombia. Entre coleccionistas se le llama «Lleritas». Este ejemplar de archivo lleva SPECIMEN en rojo, serie C 00000 y dos perforaciones de cancelación. Lo grabó la American Bank Note Company bajo la Ley 33 de 1938 y el Decreto 122 de 1948.',
      en: 'The 18 January 1948 half gold peso closes the fractional gold-standard issues. The face shows Antonio Nariño between large ½ numerals; the back carries Colombia’s coat of arms. Collectors call it “Lleritas.” This archive example has a red SPECIMEN overprint, series C 00000, and two cancellation punches. American Bank Note Company engraved it under Law 33 of 1938 and Decree 122 of 1948.',
    },
    scarcity: {
      es: 'Los especímenes cancelados de esta fracción son escasos frente a los ejemplares de circulación. La pieza se presenta sin encapsular.',
      en: 'Cancelled specimens of this fraction are scarce beside circulation notes. The piece is shown unslabbed.',
    },
    grade: {
      es: 'Gema sin circular, con perforaciones de cancelación',
      en: 'Gem uncirculated, with cancellation punches',
    },
    cardCaption: {
      es: 'Anverso y reverso del espécimen de medio peso oro de 1948, con Nariño y el escudo.',
      en: 'Face and back of the 1948 half gold peso specimen, with Nariño and the coat of arms.',
    },
    images: [
      {
        src: img('medio-peso-1948.jpg'),
        caption: {
          es: 'Anverso (arriba) y reverso (abajo) del espécimen de medio peso oro, 18 de enero de 1948.',
          en: 'Face (above) and back (below) of the half gold peso specimen, 18 January 1948.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '1-peso-specimen',
    path: `${BANREP_PATH}1-peso-specimen/`,
    sort: 20,
    kind: 'specimen',
    pick: 'P#380s / P#382s',
    years: { es: '1929 y 1932', en: '1929 and 1932' },
    printer: abnc,
    title: {
      es: '1 peso oro y 1 peso plata',
      en: '1 gold peso and 1 silver peso',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Dos especímenes ABNC de los primeros años del banco: Un Peso Oro (1929) y Certificado de Plata (1932).',
      en: 'Two ABNC specimens from the bank’s first years: the 1929 gold peso and the 1932 silver certificate.',
    },
    description: {
      es: 'El Un Peso Oro del 20 de julio de 1929 (serie R) enfrenta a Santander y Bolívar; el reverso lleva la Libertad. El Certificado de Plata del 1 de enero de 1932, con firmas de Julio Caro y Mariano Ospina Vásquez, promete canje en moneda de plata. Ambos llevan SPECIMEN en rojo, ceros y perforaciones. Juntos documentan el bimetalismo de entreguerras: el peso oro de la serie 1929–1954 y el certificado de plata de vida corta.',
      en: 'The 20 July 1929 gold peso (series R) pairs Santander and Bolívar; the back shows Liberty. The 1 January 1932 silver certificate, signed by Julio Caro and Mariano Ospina Vásquez, promises redemption in silver coin. Both carry a red SPECIMEN overprint, zeros, and punches. Together they record interwar bimetallism: the 1929–1954 gold-peso series and the short-lived silver certificate.',
    },
    scarcity: {
      es: 'El peso plata de 1932 es de emisión breve; ambos especímenes son más escasos que los tipos de circulación.',
      en: 'The 1932 silver peso was a short issue; both specimens are scarcer than circulation types.',
    },
    grade: {
      es: 'Sin encapsular, con perforaciones de cancelación',
      en: 'Unslabbed, with cancellation punches',
    },
    cardCaption: {
      es: 'Espécimen de Un Peso Oro de 1929: Santander, Bolívar y la Libertad.',
      en: '1929 1-gold-peso specimen: Santander, Bolívar, and Liberty.',
    },
    images: [
      {
        src: img('1-peso-oro-1929.jpg'),
        caption: {
          es: 'Un Peso Oro, 20 de julio de 1929, serie R: Santander y Bolívar; reverso con la Libertad.',
          en: '1 gold peso, 20 July 1929, series R: Santander and Bolívar; Liberty on the back.',
        },
      },
      {
        src: img('1-peso-plata-1932.jpg'),
        caption: {
          es: 'Certificado de Plata de Un Peso, 1 de enero de 1932, con Santander y la cláusula de canje.',
          en: '1-peso silver certificate, 1 January 1932, with Santander and the redemption clause.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2-pesos-oro',
    path: `${BANREP_PATH}2-pesos-oro/`,
    sort: 30,
    kind: 'circulation',
    pick: 'P#385 / P#413',
    years: { es: '1947 y 1972', en: '1947 and 1972' },
    printer: {
      es: 'American Bank Note Company; rediseño posterior de estilo ABNC',
      en: 'American Bank Note Company; later ABNC-style redesign',
    },
    title: {
      es: '2 pesos oro · Torres y La Pola',
      en: '2 gold pesos · Torres and La Pola',
    },
    kicker: {
      es: 'Banco de la República · Circulación y muestra',
      en: 'Banco de la República · Circulation and specimen',
    },
    lead: {
      es: 'El 2 pesos de 1947 con Camilo Torres y la muestra de 1972 con Policarpa Salavarrieta y la balsa muisca.',
      en: 'The 1947 2-peso with Camilo Torres and the 1972 specimen with Policarpa Salavarrieta and the Muisca raft.',
    },
    description: {
      es: 'El ejemplar del 7 de agosto de 1947, serie I n.º 24062382, pertenece a la larga serie con Camilo Torres (1923–1955) y la Mariana de la Libertad en el reverso. La muestra del 1 de enero de 1972, con sobrecarga MUESTRA, sustituye a Torres por Policarpa Salavarrieta y pone en el reverso una balsa muisca del Museo del Oro —el rito de El Dorado— cinco años después de que el Congreso declarara el 14 de noviembre Día de la Mujer Colombiana.',
      en: 'The 7 August 1947 note, series I no. 24062382, belongs to the long Camilo Torres series (1923–1955), with Mariana of Liberty on the back. The 1 January 1972 MUESTRA specimen replaces Torres with Policarpa Salavarrieta and shows a Muisca raft from the Gold Museum — the El Dorado rite — five years after Congress named 14 November Colombian Women’s Day.',
    },
    scarcity: {
      es: 'El tipo Torres es de circulación amplia. La muestra de 1972, con ceros y perforaciones, es el documento de archivo del rediseño.',
      en: 'The Torres type is a broad circulation issue. The 1972 specimen, with zeros and punches, is the archive record of the redesign.',
    },
    grade: {
      es: '1947 circulado; 1972 gema de archivo',
      en: '1947 circulated; 1972 gem archive specimen',
    },
    cardCaption: {
      es: 'Dos pesos oro de 1947 con Camilo Torres y la Mariana de la Libertad.',
      en: '1947 2 gold pesos with Camilo Torres and Mariana of Liberty.',
    },
    images: [
      {
        src: img('2-pesos-1947.jpg'),
        caption: {
          es: 'Dos pesos oro, 7 de agosto de 1947, serie I: Camilo Torres y la Libertad.',
          en: '2 gold pesos, 7 August 1947, series I: Camilo Torres and Liberty.',
        },
      },
      {
        src: img('2-pesos-1972.jpg'),
        caption: {
          es: 'Muestra de dos pesos oro, 1 de enero de 1972: Policarpa Salavarrieta y la balsa muisca.',
          en: '2-gold-peso specimen, 1 January 1972: Policarpa Salavarrieta and the Muisca raft.',
        },
      },
    ],
    sources: [
      ...sharedNoteSources,
      {
        href: 'https://colecciones.banrepcultural.org',
        es: 'Colecciones Banco de la República',
        en: 'Banco de la República collections',
      },
    ],
  },
  {
    id: '5-pesos-plata-1941',
    path: `${BANREP_PATH}5-pesos-plata-1941/`,
    sort: 40,
    kind: 'specimen',
    pick: 'P#388s',
    years: { es: '1 de enero de 1941', en: '1 January 1941' },
    printer: abnc,
    title: {
      es: '5 pesos plata · Certificado de Plata',
      en: '5 silver pesos · Silver Certificate',
    },
    kicker: {
      es: 'Banco de la República · Espécimen',
      en: 'Banco de la República · Specimen',
    },
    lead: {
      es: 'Certificado de Plata de 1941 con Bolívar, canjeable en moneda legal de plata.',
      en: '1941 silver certificate with Bolívar, redeemable in legal-tender silver coin.',
    },
    description: {
      es: 'El Cinco Pesos Plata del 1 de enero de 1941 cierra la familia de certificados de plata (1933–1942). El anverso, en verde azulado, muestra a Bolívar y la cláusula de canje en el banco; el reverso, un busto alegórico de Colombia. Este espécimen ABNC lleva ceros y perforaciones de cancelación, en el formato mayor de unos 155 × 75 mm.',
      en: 'The 1 January 1941 5-silver-peso note closes the 1933–1942 silver-certificate family. The blue-green face shows Bolívar and the bank’s redemption clause; the back has an allegorical bust of Colombia. This ABNC specimen has zeros and cancellation punches, in the larger format of about 155 × 75 mm.',
    },
    scarcity: {
      es: 'Los certificados de plata ya son menos comunes que los pesos oro de la misma década; el formato espécimen es aún más escaso.',
      en: 'Silver certificates are already less common than gold pesos of the same decade; the specimen format is scarcer still.',
    },
    grade: {
      es: 'Sin encapsular, con perforaciones de cancelación',
      en: 'Unslabbed, with cancellation punches',
    },
    cardCaption: {
      es: 'Certificado de Plata de cinco pesos, 1941: Bolívar y el busto alegórico de Colombia.',
      en: '1941 5-peso silver certificate: Bolívar and the allegorical bust of Colombia.',
    },
    images: [
      {
        src: img('5-pesos-1941.jpg'),
        caption: {
          es: 'Cinco pesos plata, 1 de enero de 1941: Bolívar y el Certificado de Plata.',
          en: '5 silver pesos, 1 January 1941: Bolívar and the Silver Certificate.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '10-pesos-oro-1943',
    path: `${BANREP_PATH}10-pesos-oro-1943/`,
    sort: 50,
    kind: 'circulation',
    pick: 'P#389',
    years: { es: '1943', en: '1943' },
    printer: abnc,
    title: {
      es: '10 pesos oro · 1943',
      en: '10 gold pesos · 1943',
    },
    kicker: {
      es: 'Banco de la República · Circulación',
      en: 'Banco de la República · Circulation',
    },
    lead: {
      es: 'Diez pesos oro de 1943 grabados por ABNC, de la familia P-389 con Nariño y el sello de la Libertad.',
      en: '1943 10 gold pesos engraved by ABNC, from the P-389 family with Nariño and the Liberty seal.',
    },
    description: {
      es: 'El diez pesos oro de 1943 pertenece a la serie ABNC de formato 140 × 70 mm, sin hilo ni marca de agua. La familia P-389 —mejor documentada en fechas vecinas como 1944 (P-389b, firmas Julio Caro y Luis Ángel Arango)— muestra a Nariño de uniforme y el sello de la Libertad. Esta ficha registra el ejemplar de 1943 de la colección.',
      en: 'The 1943 10 gold peso belongs to the ABNC 140 × 70 mm series, without thread or watermark. The P-389 family — better documented on neighbouring dates such as 1944 (P-389b, Julio Caro and Luis Ángel Arango) — shows Nariño in uniform and the Liberty seal. This ficha records the collection’s 1943 example.',
    },
    scarcity: {
      es: 'Tipo de circulación de la década de 1940; las fechas concretas varían en disponibilidad.',
      en: 'A 1940s circulation type; individual dates vary in availability.',
    },
    grade: {
      es: 'Circulado (colección privada)',
      en: 'Circulated (private collection)',
    },
    cardCaption: {
      es: 'Diez pesos oro de 1943, familia P-389, con Nariño.',
      en: '1943 10 gold pesos, P-389 family, with Nariño.',
    },
    images: [
      {
        src: img('10-pesos-1943.jpg'),
        caption: {
          es: 'Diez pesos oro de 1943: anverso y reverso del ejemplar de la colección.',
          en: '1943 10 gold pesos: face and back of the collection example.',
        },
      },
    ],
    sources: [
      ...sharedNoteSources,
      {
        href: 'https://www.banknoteworld.org/colombia-10-pesos-oro-1944-p-389b-2.html',
        es: 'Banknote World — Colombia 10 pesos oro, 1944, P-389b.2',
        en: 'Banknote World — Colombia 10 gold pesos, 1944, P-389b.2',
      },
    ],
  },
  {
    id: '10-pesos-oro',
    path: `${BANREP_PATH}10-pesos-oro/`,
    sort: 60,
    kind: 'circulation',
    pick: 'P#400',
    years: { es: '1949–1961', en: '1949–1961' },
    printer: abnc,
    title: {
      es: '10 pesos oro · 1949–1961',
      en: '10 gold pesos · 1949–1961',
    },
    kicker: {
      es: 'Banco de la República · Circulación',
      en: 'Banco de la República · Circulation',
    },
    lead: {
      es: 'Cuatro fechas de la serie de diez pesos oro de posguerra: 1949, 1953, 1960 y 1961.',
      en: 'Four dates from the postwar 10-gold-peso series: 1949, 1953, 1960, and 1961.',
    },
    description: {
      es: 'Tras la emisión de 1943, el diez pesos oro siguió en circulación con retratos y orlas ABNC. Esta ficha reúne cuatro fechas de la colección —1949, 1953, 1960 y 1961— que documentan la continuidad del tipo en los años de la Violencia y el Frente Nacional. Son billetes de circulación, no especímenes.',
      en: 'After the 1943 issue, the 10 gold peso stayed in circulation with ABNC portraits and frames. This ficha gathers four collection dates — 1949, 1953, 1960, and 1961 — that record the type through La Violencia and the National Front. These are circulation notes, not specimens.',
    },
    scarcity: {
      es: 'Fechas de circulación; 1960–1961 suelen encontrarse con más manejo que las de 1949–1953.',
      en: 'Circulation dates; 1960–1961 are usually found with more wear than 1949–1953.',
    },
    grade: {
      es: 'Circulados (colección privada)',
      en: 'Circulated (private collection)',
    },
    cardCaption: {
      es: 'Diez pesos oro de 1953, una de las cuatro fechas de la serie 1949–1961.',
      en: '1953 10 gold pesos, one of four dates in the 1949–1961 series.',
    },
    images: [
      {
        src: img('10-pesos-1949.jpg'),
        caption: {
          es: 'Diez pesos oro de 1949.',
          en: '1949 10 gold pesos.',
        },
      },
      {
        src: img('10-pesos-1953.jpg'),
        caption: {
          es: 'Diez pesos oro de 1953.',
          en: '1953 10 gold pesos.',
        },
      },
      {
        src: img('10-pesos-1960.jpg'),
        caption: {
          es: 'Diez pesos oro de 1960.',
          en: '1960 10 gold pesos.',
        },
      },
      {
        src: img('10-pesos-1961.jpg'),
        caption: {
          es: 'Diez pesos oro de 1961.',
          en: '1961 10 gold pesos.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '50-pesos-oro-specimen',
    path: `${BANREP_PATH}50-pesos-oro-specimen/`,
    sort: 70,
    kind: 'specimen',
    pick: 'P#403s / P#425s',
    years: { es: '1964 y 1985', en: '1964 and 1985' },
    printer: {
      es: 'American Bank Note Company; Imprenta de Billetes del Banco',
      en: 'American Bank Note Company; the Bank’s note printing house',
    },
    title: {
      es: '50 pesos oro · especímenes',
      en: '50 gold pesos · specimens',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Dos especímenes de cincuenta pesos oro que marcan el paso del grabado ABNC a la imprenta propia.',
      en: 'Two 50-gold-peso specimens that mark the shift from ABNC engraving to the Bank’s own press.',
    },
    description: {
      es: 'El espécimen de 1964 aún habla el lenguaje ornamental de ABNC. El de 1985, ya en la paleta y el formato de las series nacionales de los ochenta, muestra cómo el Banco asumió la impresión en Bogotá. Ambos llevan marcas de archivo —ceros, sobrecarga y perforaciones— y no circularon.',
      en: 'The 1964 specimen still speaks ABNC’s ornamental language. The 1985 piece, in the palette and format of the 1980s national series, shows the Bank taking printing in-house in Bogotá. Both carry archive marks — zeros, overprint, and punches — and did not circulate.',
    },
    scarcity: {
      es: 'Los dos tipos de circulación son comunes; los especímenes cancelados son el material de referencia.',
      en: 'Both circulation types are common; cancelled specimens are the reference material.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de cincuenta pesos oro de 1964.',
      en: '1964 50-gold-peso specimen.',
    },
    images: [
      {
        src: img('50-pesos-1964.jpg'),
        caption: {
          es: 'Cincuenta pesos oro, espécimen de 1964.',
          en: '50 gold pesos, 1964 specimen.',
        },
      },
      {
        src: img('50-pesos-1985.jpg'),
        caption: {
          es: 'Cincuenta pesos oro, espécimen de 1985.',
          en: '50 gold pesos, 1985 specimen.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '100-pesos-oro',
    path: `${BANREP_PATH}100-pesos-oro/`,
    sort: 80,
    kind: 'specimen',
    pick: 'P#403 / P#426',
    years: { es: '1947, 1969, 1980 y 1983', en: '1947, 1969, 1980, and 1983' },
    printer: {
      es: 'American Bank Note Company e Imprenta de Billetes del Banco',
      en: 'American Bank Note Company and the Bank’s note printing house',
    },
    title: {
      es: '100 pesos oro · cuatro fechas',
      en: '100 gold pesos · four dates',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Cuatro especímenes de cien pesos oro: 1947, 1969, 1980 y 1983, del grabado ABNC a la imprenta nacional.',
      en: 'Four 100-gold-peso specimens: 1947, 1969, 1980, and 1983, from ABNC engraving to the national press.',
    },
    description: {
      es: 'La denominación de cien pesos oro recorre cuarenta años de diseño institucional. El ejemplar de 1947 es aún un billete ABNC de orla clásica. 1969 y las muestras de 1980 y 1983 muestran el paso a formatos más compactos y a la producción en Bogotá. Los cuatro se conservan como especímenes de archivo.',
      en: 'The 100-gold-peso denomination spans forty years of official design. The 1947 piece is still a classic ABNC frame. 1969 and the 1980 and 1983 specimens show the move to tighter formats and Bogotá production. All four are kept as archive specimens.',
    },
    scarcity: {
      es: 'Las fechas de circulación son accesibles; el conjunto de cuatro especímenes permite comparar planchas.',
      en: 'Circulation dates are accessible; the set of four specimens lets the plates be compared.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de cien pesos oro de 1980.',
      en: '1980 100-gold-peso specimen.',
    },
    images: [
      {
        src: img('100-pesos-1947.jpg'),
        caption: { es: 'Cien pesos oro, espécimen de 1947.', en: '100 gold pesos, 1947 specimen.' },
      },
      {
        src: img('100-pesos-1969.jpg'),
        caption: { es: 'Cien pesos oro, espécimen de 1969.', en: '100 gold pesos, 1969 specimen.' },
      },
      {
        src: img('100-pesos-1980.jpg'),
        caption: { es: 'Cien pesos oro, espécimen de 1980.', en: '100 gold pesos, 1980 specimen.' },
      },
      {
        src: img('100-pesos-1983.jpg'),
        caption: { es: 'Cien pesos oro, espécimen de 1983.', en: '100 gold pesos, 1983 specimen.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '200-pesos-oro-specimen',
    path: `${BANREP_PATH}200-pesos-oro-specimen/`,
    sort: 90,
    kind: 'specimen',
    pick: 'P#419s / P#429s',
    years: { es: '1982, 1983 y 1992', en: '1982, 1983, and 1992' },
    printer: banrepPress,
    title: {
      es: '200 pesos oro · especímenes',
      en: '200 gold pesos · specimens',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Tres especímenes de doscientos pesos oro impresos en Bogotá: 1982, 1983 y 1992.',
      en: 'Three 200-gold-peso specimens printed in Bogotá: 1982, 1983, and 1992.',
    },
    description: {
      es: 'Los doscientos pesos oro de los ochenta y principios de los noventa ya son producto de la Imprenta de Billetes del Banco. Las tres muestras —1982, 1983 y 1992— documentan ajustes de color, retrato y dispositivos de seguridad en una denominación de uso diario, sin haber salido a circulación.',
      en: 'The 1980s and early-1990s 200 gold peso is already a product of the Bank’s note printing house. The three specimens — 1982, 1983, and 1992 — record colour, portrait, and security changes on an everyday denomination, without entering circulation.',
    },
    scarcity: {
      es: 'Tipo de circulación muy común; los especímenes son el registro de plancha.',
      en: 'A very common circulation type; the specimens are the plate record.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de doscientos pesos oro de 1982.',
      en: '1982 200-gold-peso specimen.',
    },
    images: [
      {
        src: img('200-pesos-1982.jpg'),
        caption: { es: 'Doscientos pesos oro, espécimen de 1982.', en: '200 gold pesos, 1982 specimen.' },
      },
      {
        src: img('200-pesos-1983.jpg'),
        caption: { es: 'Doscientos pesos oro, espécimen de 1983.', en: '200 gold pesos, 1983 specimen.' },
      },
      {
        src: img('200-pesos-1992.jpg'),
        caption: { es: 'Doscientos pesos oro, espécimen de 1992.', en: '200 gold pesos, 1992 specimen.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '500-pesos-oro-specimen',
    path: `${BANREP_PATH}500-pesos-oro-specimen/`,
    sort: 100,
    kind: 'specimen',
    pick: 'P#414s / P#431s',
    years: { es: '1947, 1984, 1989 y 1993', en: '1947, 1984, 1989, and 1993' },
    printer: {
      es: 'American Bank Note Company e Imprenta de Billetes del Banco',
      en: 'American Bank Note Company and the Bank’s note printing house',
    },
    title: {
      es: '500 pesos oro · especímenes',
      en: '500 gold pesos · specimens',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Cuatro especímenes de quinientos pesos oro, de la orla ABNC de 1947 a las series nacionales de 1993.',
      en: 'Four 500-gold-peso specimens, from the 1947 ABNC frame to the 1993 national series.',
    },
    description: {
      es: 'El quinientos pesos oro de 1947 es todavía un billete ABNC de gran formato. Las muestras de 1984, 1989 y 1993 pertenecen ya a la producción bogotana y muestran el compactado del diseño, nuevos retratos y la llegada de hilos y fondos de seguridad. La ficha reúne las cuatro planchas de archivo de la colección.',
      en: 'The 1947 500 gold peso is still a large-format ABNC note. The 1984, 1989, and 1993 specimens are Bogotá products and show the tighter design, new portraits, and the arrival of threads and security tints. The ficha gathers the collection’s four archive plates.',
    },
    scarcity: {
      es: 'El tipo de 1947 es más escaso en espécimen que las fechas de los ochenta y noventa.',
      en: 'The 1947 type is scarcer as a specimen than the 1980s and 1990s dates.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de quinientos pesos oro de 1947.',
      en: '1947 500-gold-peso specimen.',
    },
    images: [
      {
        src: img('500-pesos-1947.jpg'),
        caption: { es: 'Quinientos pesos oro, espécimen de 1947.', en: '500 gold pesos, 1947 specimen.' },
      },
      {
        src: img('500-pesos-1984.jpg'),
        caption: { es: 'Quinientos pesos oro, espécimen de 1984.', en: '500 gold pesos, 1984 specimen.' },
      },
      {
        src: img('500-pesos-1989.jpg'),
        caption: { es: 'Quinientos pesos oro, espécimen de 1989.', en: '500 gold pesos, 1989 specimen.' },
      },
      {
        src: img('500-pesos-1993.jpg'),
        caption: { es: 'Quinientos pesos oro, espécimen de 1993.', en: '500 gold pesos, 1993 specimen.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '1000-pesos',
    path: `${BANREP_PATH}1000-pesos/`,
    sort: 110,
    kind: 'circulation',
    pick: 'P#432 / P#443 / P#450',
    years: { es: '1990–2006', en: '1990–2006' },
    printer: banrepPress,
    title: {
      es: '1.000 pesos · Bolívar y Gaitán',
      en: '1,000 pesos · Bolívar and Gaitán',
    },
    kicker: {
      es: 'Banco de la República · Circulación',
      en: 'Banco de la República · Circulation',
    },
    lead: {
      es: 'La carrera de fechas del mil pesos: de Simón Bolívar (1990) a Jorge Eliécer Gaitán, con un error de 2003.',
      en: 'The 1,000-peso date run: from Simón Bolívar (1990) to Jorge Eliécer Gaitán, including a 2003 error.',
    },
    description: {
      es: 'El mil pesos de 1990 todavía retrata a Bolívar. A mediados de los noventa el anverso pasa a Jorge Eliécer Gaitán y el reverso a la Plaza de Bolívar. La colección conserva el tramo 1990–2006; aquí se muestran 1990 (Bolívar), 1995 y 2001 (Gaitán) y un ejemplar de 2003 con error de impresión. El resto de fechas de ese tramo se documenta en la misma vitrina del catálogo vivo.',
      en: 'The 1990 1,000-peso still portrays Bolívar. By the mid-1990s the face becomes Jorge Eliécer Gaitán and the back Plaza de Bolívar. The collection holds the 1990–2006 run; shown here are 1990 (Bolívar), 1995 and 2001 (Gaitán), and a 2003 printing error. The remaining dates in that run are recorded in the same live-catalog case.',
    },
    scarcity: {
      es: 'El tipo Gaitán es muy común. El error de 2003 y las primeras fechas de Bolívar son el interés de la vitrina.',
      en: 'The Gaitán type is very common. The 2003 error and the earliest Bolívar dates are the case’s interest.',
    },
    grade: {
      es: 'Circulados; el error de 2003 sin encapsular',
      en: 'Circulated; 2003 error unslabbed',
    },
    cardCaption: {
      es: 'Mil pesos de 1990 con el retrato de Bolívar.',
      en: '1990 1,000 pesos with Bolívar’s portrait.',
    },
    images: [
      {
        src: img('1000-pesos-1990.jpg'),
        caption: { es: 'Mil pesos de 1990, retrato de Bolívar.', en: '1990 1,000 pesos, Bolívar portrait.' },
      },
      {
        src: img('1000-pesos-1995.jpg'),
        caption: { es: 'Mil pesos de 1995, retrato de Gaitán.', en: '1995 1,000 pesos, Gaitán portrait.' },
      },
      {
        src: img('1000-pesos-2001.jpg'),
        caption: { es: 'Mil pesos de agosto de 2001.', en: 'August 2001 1,000 pesos.' },
      },
      {
        src: img('1000-pesos-2003-error.jpg'),
        caption: { es: 'Mil pesos de 2003 con error de impresión.', en: '2003 1,000 pesos with a printing error.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2000-pesos-oro',
    path: `${BANREP_PATH}2000-pesos-oro/`,
    sort: 120,
    kind: 'specimen',
    pick: 'P#433s / P#439s',
    years: { es: '1984–1993', en: '1984–1993' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos oro · especímenes',
      en: '2,000 gold pesos · specimens',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Especímenes de dos mil pesos oro de 1984 y 1993, la denominación que después alojará los errores de corte.',
      en: '1984 and 1993 2,000-gold-peso specimens, the denomination that later hosts the cutting errors.',
    },
    description: {
      es: 'El dos mil pesos oro de los ochenta y noventa es el antecesor del dos mil de Santander y del de Débora Arango. Las muestras de 1984 y 1993, impresas en Bogotá, fijan el tipo de circulación antes de los errores de guillotina y de las pruebas de 2016. La colección también conserva fechas de circulación de ese tramo.',
      en: 'The 1980s–1990s 2,000 gold peso precedes the Santander 2,000 and the Débora Arango type. The 1984 and 1993 Bogotá specimens fix the circulation type before the guillotine errors and the 2016 proofs. The collection also holds circulation dates from that run.',
    },
    scarcity: {
      es: 'Tipo de circulación común; los especímenes son el registro de plancha del periodo.',
      en: 'A common circulation type; the specimens are the period’s plate record.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de dos mil pesos oro de 1984.',
      en: '1984 2,000-gold-peso specimen.',
    },
    images: [
      {
        src: img('2000-pesos-1984.jpg'),
        caption: { es: 'Dos mil pesos oro, espécimen de 1984.', en: '2,000 gold pesos, 1984 specimen.' },
      },
      {
        src: img('2000-pesos-1993.jpg'),
        caption: { es: 'Dos mil pesos oro, espécimen de 1993.', en: '2,000 gold pesos, 1993 specimen.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2000-pesos-debora-arango',
    path: `${BANREP_PATH}2000-pesos-debora-arango/`,
    sort: 130,
    kind: 'proof',
    pick: 'P#458b',
    years: { es: '2 de agosto de 2016', en: '2 August 2016' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos · Débora Arango (prueba)',
      en: '2,000 pesos · Débora Arango (proof)',
    },
    kicker: {
      es: 'Banco de la República · Prueba P-458b',
      en: 'Banco de la República · P-458b proof',
    },
    lead: {
      es: 'Prueba del 2.000 pesos de Débora Arango, 2.08.2016: retrato impreso y reverso en blanco.',
      en: 'Proof of the Débora Arango 2,000-peso, 2 August 2016: printed portrait and blank back.',
    },
    description: {
      es: 'El tipo emitido P-458b (2 de agosto de 2016, series AE y AF) entra a circular en 2018. Esta prueba no es un billete emitido ni un SPECIMEN: el anverso ya muestra a Débora Arango Pérez y las series van tapadas; el reverso de Caño Cristales está en blanco. No se confunde con la otra prueba de la colección (anverso incompleto y reverso impreso) ni con los errores de Santander.',
      en: 'Issued type P-458b (2 August 2016, series AE and AF) entered circulation in 2018. This proof is neither an issued note nor a SPECIMEN: the face already shows Débora Arango Pérez with covered serials; the Caño Cristales back is blank. It is not the collection’s other proof (incomplete face, printed back) nor the Santander errors.',
    },
    scarcity: {
      es: 'El tipo emitido es corriente. La prueba de archivo, sin confirmación pública de tirada BanRep, es el material excepcional.',
      en: 'The issued type is common. The archive proof, without a public BanRep printage figure, is the exceptional material.',
    },
    grade: {
      es: 'Prueba sin encapsular (colección privada)',
      en: 'Unslabbed proof (private collection)',
    },
    cardCaption: {
      es: 'Prueba P-458b de 2016: Débora Arango en el anverso y reverso en blanco.',
      en: '2016 P-458b proof: Débora Arango on the face and a blank back.',
    },
    images: [
      {
        src: img('2000-pesos-debora.jpg'),
        caption: {
          es: 'Prueba P-458b, 2 de agosto de 2016: retrato de Débora Arango y reverso en blanco.',
          en: 'P-458b proof, 2 August 2016: Débora Arango portrait and blank back.',
        },
      },
    ],
    sources: [
      ...sharedNoteSources,
      {
        href: 'https://en.numista.com/catalogue/note204972.html',
        es: 'Numista — 2.000 pesos, 2015–2023 (P-458)',
        en: 'Numista — 2,000 pesos, 2015–2023 (P-458)',
      },
    ],
  },
  {
    id: '2000-pesos-debora-arango-prueba',
    path: `${BANREP_PATH}2000-pesos-debora-arango-prueba/`,
    sort: 140,
    kind: 'proof',
    pick: 'P#458b',
    years: { es: '2 de agosto de 2016', en: '2 August 2016' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos · prueba de anverso',
      en: '2,000 pesos · face proof',
    },
    kicker: {
      es: 'Banco de la República · Prueba progresiva P-458b',
      en: 'Banco de la República · P-458b progressive proof',
    },
    lead: {
      es: 'Prueba progresiva del P-458b: silueta del retrato en blanco y reverso de Caño Cristales impreso.',
      en: 'Progressive proof of P-458b: blank portrait silhouette and a printed Caño Cristales back.',
    },
    description: {
      es: 'Este pliego es la pareja de la otra prueba P-458b: el anverso queda incompleto —silueta de Débora Arango sin imprimir— y el reverso de Caño Cristales, con hilo BRC y pie de imprenta, sí está impreso. La fecha 2 de agosto de 2016 se lee en el borde del reverso. Las series AA se leen en foto; el tipo emitido P-458b lleva AE y AF. No es un SPECIMEN ni un billete de circulación.',
      en: 'This sheet is the pair of the other P-458b proof: the face is incomplete — Débora Arango’s silhouette unprinted — and the Caño Cristales back, with BRC thread and printer legend, is printed. The 2 August 2016 date is read on the back edge. AA serials are read from the photo; issued P-458b uses AE and AF. It is not a SPECIMEN or a circulation note.',
    },
    scarcity: {
      es: 'Prueba progresiva o parcial; tirada y archivo BanRep no confirmados en fuente pública.',
      en: 'Progressive or partial proof; BanRep printage and archive status are not confirmed in a public source.',
    },
    grade: {
      es: 'Prueba sin encapsular (colección privada)',
      en: 'Unslabbed proof (private collection)',
    },
    cardCaption: {
      es: 'Prueba progresiva P-458b: anverso incompleto y reverso de Caño Cristales.',
      en: 'P-458b progressive proof: incomplete face and Caño Cristales back.',
    },
    images: [
      {
        src: img('2000-pesos-debora-prueba.jpg'),
        caption: {
          es: 'Prueba P-458b con anverso incompleto y reverso de Caño Cristales impreso.',
          en: 'P-458b proof with an incomplete face and a printed Caño Cristales back.',
        },
      },
    ],
    sources: [
      ...sharedNoteSources,
      {
        href: 'https://en.numista.com/catalogue/note204972.html',
        es: 'Numista — 2.000 pesos, 2015–2023 (P-458)',
        en: 'Numista — 2,000 pesos, 2015–2023 (P-458)',
      },
    ],
  },
  {
    id: '5000-pesos-oro-specimen',
    path: `${BANREP_PATH}5000-pesos-oro-specimen/`,
    sort: 150,
    kind: 'specimen',
    pick: 'P#439s',
    years: { es: '1986, 1987 y 1993', en: '1986, 1987, and 1993' },
    printer: banrepPress,
    title: {
      es: '5.000 pesos oro · especímenes',
      en: '5,000 gold pesos · specimens',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Tres especímenes de cinco mil pesos oro con Rafael Núñez: 1986, 1987 y 1993.',
      en: 'Three 5,000-gold-peso specimens with Rafael Núñez: 1986, 1987, and 1993.',
    },
    description: {
      es: 'El cinco mil pesos oro de Núñez —el presidente de la Regeneración que había creado el Banco Nacional un siglo antes— aparece aquí en tres especímenes de la Imprenta de Billetes. 1986, 1987 y 1993 son subtipos por fecha del P-439. El reverso muestra la estatua y la iconografía cívica de la denominación.',
      en: 'The Núñez 5,000 gold peso — the Regeneración president who had created the Banco Nacional a century earlier — appears here in three specimens from the note printing house. 1986, 1987, and 1993 are date subtypes of P-439. The back shows the statue and civic iconography of the denomination.',
    },
    scarcity: {
      es: 'Tipo de circulación común; los tres especímenes permiten ver el subtipo por fecha.',
      en: 'A common circulation type; the three specimens show the date subtype.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de cinco mil pesos oro de 1987, con Rafael Núñez.',
      en: '1987 5,000-gold-peso specimen with Rafael Núñez.',
    },
    images: [
      {
        src: img('5000-pesos-1986.jpg'),
        caption: { es: 'Cinco mil pesos oro, espécimen de 1986.', en: '5,000 gold pesos, 1986 specimen.' },
      },
      {
        src: img('5000-pesos-1987.jpg'),
        caption: { es: 'Cinco mil pesos oro, espécimen de 1987.', en: '5,000 gold pesos, 1987 specimen.' },
      },
      {
        src: img('5000-pesos-1993.jpg'),
        caption: { es: 'Cinco mil pesos oro, espécimen de 1993.', en: '5,000 gold pesos, 1993 specimen.' },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '10000-pesos-specimen',
    path: `${BANREP_PATH}10000-pesos-specimen/`,
    sort: 160,
    kind: 'specimen',
    pick: 'P#440s / P#441s',
    years: { es: '1994 y 1995', en: '1994 and 1995' },
    printer: banrepPress,
    title: {
      es: '10.000 pesos · Emberá y La Pola',
      en: '10,000 pesos · Emberá and La Pola',
    },
    kicker: {
      es: 'Banco de la República · Especímenes',
      en: 'Banco de la República · Specimens',
    },
    lead: {
      es: 'Dos especímenes de diez mil pesos: la mujer emberá de 1994 (P-440) y Policarpa Salavarrieta en 1995 (P-441).',
      en: 'Two 10,000-peso specimens: the 1994 Emberá woman (P-440) and Policarpa Salavarrieta in 1995 (P-441).',
    },
    description: {
      es: 'El diez mil pesos de 1994 (P-440) es la variante conmemorativa con el retrato de una mujer emberá y un collage de biodiversidad en el reverso. En 1995 el tipo P-441 devuelve a Policarpa Salavarrieta al papel de alta denominación. Ambos especímenes de archivo documentan el cambio de iconografía en un solo año.',
      en: 'The 1994 10,000-peso (P-440) is the commemorative variety with an Emberá woman’s portrait and a biodiversity collage on the back. In 1995 type P-441 returns Policarpa Salavarrieta to high-denomination paper. Both archive specimens record the iconographic change in a single year.',
    },
    scarcity: {
      es: 'El P-440 conmemorativo es más buscado que el P-441 de circulación; ambos especímenes son material de referencia.',
      en: 'Commemorative P-440 is more sought than circulation P-441; both specimens are reference material.',
    },
    grade: {
      es: 'Especímenes de archivo, sin encapsular',
      en: 'Archive specimens, unslabbed',
    },
    cardCaption: {
      es: 'Espécimen de diez mil pesos de 1994, retrato emberá.',
      en: '1994 10,000-peso specimen, Emberá portrait.',
    },
    images: [
      {
        src: img('10000-pesos-1994.jpg'),
        caption: {
          es: 'Diez mil pesos, espécimen de 1994: mujer emberá y biodiversidad.',
          en: '10,000 pesos, 1994 specimen: Emberá woman and biodiversity.',
        },
      },
      {
        src: img('10000-pesos-1995.jpg'),
        caption: {
          es: 'Diez mil pesos, espécimen de 1995: Policarpa Salavarrieta.',
          en: '10,000 pesos, 1995 specimen: Policarpa Salavarrieta.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2000-pesos-1996-error',
    path: `${BANREP_PATH}2000-pesos-1996-error/`,
    sort: 200,
    kind: 'error',
    pick: 'P#445',
    years: { es: '1996', en: '1996' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos · error de corte 1996',
      en: '2,000 pesos · 1996 cutting error',
    },
    kicker: {
      es: 'Banco de la República · Error de corte',
      en: 'Banco de la República · Cutting error',
    },
    lead: {
      es: 'Dos mil pesos de 1996 con corte descentrado y exceso de papel —el primer error de guillotina de la vitrina.',
      en: '1996 2,000 pesos with an off-centre cut and excess paper — the case’s first guillotine error.',
    },
    description: {
      es: 'El dos mil pesos de Santander de 1996 se cortó fuera de registro: el diseño queda desplazado y un margen de papel que debía descartarse permanece unido al billete. Es el antecedente de los errores de 2005 y 2009 de la misma denominación. El retrato de Francisco de Paula Santander y la Casa de Moneda de Bogotá en el reverso identifican el tipo de circulación.',
      en: 'The 1996 Santander 2,000-peso was cut off register: the design sits shifted and a waste margin remains attached. It is the forerunner of the 2005 and 2009 errors on the same denomination. Francisco de Paula Santander’s portrait and the Bogotá mint on the back identify the circulation type.',
    },
    scarcity: {
      es: 'Los errores de corte que sobreviven en circulación son escasos; cada lote desplaza el diseño de forma distinta.',
      en: 'Cutting errors that survive in circulation are scarce; each lot shifts the design differently.',
    },
    grade: {
      es: 'Circulado, con el error de corte intacto',
      en: 'Circulated, with the cutting error intact',
    },
    cardCaption: {
      es: 'Dos mil pesos de 1996 con corte descentrado.',
      en: '1996 2,000 pesos with an off-centre cut.',
    },
    images: [
      {
        src: img('2000-pesos-1996-error.jpg'),
        caption: {
          es: 'Dos mil pesos de 1996: corte descentrado sobre el tipo de Santander.',
          en: '1996 2,000 pesos: off-centre cut on the Santander type.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2000-pesos-error-corte',
    path: `${BANREP_PATH}2000-pesos-error-corte/`,
    sort: 210,
    kind: 'error',
    pick: 'P#457',
    years: { es: '2005 y 2009', en: '2005 and 2009' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos · corte descentrado',
      en: '2,000 pesos · off-centre cut',
    },
    kicker: {
      es: 'Banco de la República · Error de corte',
      en: 'Banco de la República · Cutting error',
    },
    lead: {
      es: 'Dos ejemplares circulados, 2005 y 2009: un corte diagonal y un desplazamiento horizontal de la guillotina.',
      en: 'Two circulated examples, 2005 and 2009: a diagonal cut and a horizontal guillotine shift.',
    },
    description: {
      es: 'El ejemplar del 7 de marzo de 2005 (n.º 23960849) tiene un corte diagonal que recorta las esquinas de forma asimétrica. El del 19 de agosto de 2009 (n.º 88646801) se desplazó en horizontal: margen izquierdo ancho y borde derecho que come la cifra 2000. Ambos son el tipo Santander / Casa de Moneda, impresos en Bogotá, y prueban que el fallo de guillotina se repitió en lotes distintos.',
      en: 'The 7 March 2005 note (no. 23960849) has a diagonal cut that clips the corners unevenly. The 19 August 2009 note (no. 88646801) shifted horizontally: a wide left margin and a right edge that eats the 2000 numeral. Both are the Santander / Mint type, printed in Bogotá, and show the guillotine fault repeating across lots.',
    },
    scarcity: {
      es: 'Dos fechas distintas del mismo error son más raras que un ejemplar aislado: permiten comparar dirección y magnitud.',
      en: 'Two dates of the same error are scarcer than a single example: they let direction and magnitude be compared.',
    },
    grade: {
      es: 'Circulados, con el error de corte intacto',
      en: 'Circulated, with the cutting error intact',
    },
    cardCaption: {
      es: 'Dos mil pesos de 2005 con corte diagonal descentrado.',
      en: '2005 2,000 pesos with a diagonal off-centre cut.',
    },
    images: [
      {
        src: img('2000-pesos-2005-error.jpg'),
        caption: {
          es: 'Dos mil pesos, 7 de marzo de 2005, n.º 23960849: corte diagonal.',
          en: '2,000 pesos, 7 March 2005, no. 23960849: diagonal cut.',
        },
      },
      {
        src: img('2000-pesos-2009-error.jpg'),
        caption: {
          es: 'Dos mil pesos, 19 de agosto de 2009, n.º 88646801: corte horizontal descentrado.',
          en: '2,000 pesos, 19 August 2009, no. 88646801: horizontal off-centre cut.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '2000-pesos-error-mariposa',
    path: `${BANREP_PATH}2000-pesos-error-mariposa/`,
    sort: 220,
    kind: 'error',
    pick: 'P#457',
    years: { es: '2009', en: '2009' },
    printer: banrepPress,
    title: {
      es: '2.000 pesos · error «mariposa»',
      en: '2,000 pesos · “butterfly” error',
    },
    kicker: {
      es: 'Banco de la República · Error de corte',
      en: 'Banco de la República · Cutting error',
    },
    lead: {
      es: 'Dos mil pesos de Santander con exceso de papel unido —el error de corte que los coleccionistas llaman mariposa.',
      en: 'Santander 2,000 pesos with attached excess paper — the cutting error collectors call a butterfly.',
    },
    description: {
      es: 'La «mariposa» es un fallo de guillotina en el que un fragmento del margen del pliego queda adherido al billete, como un ala. Este ejemplar de 2009 del tipo Santander documenta esa variante junto al corte descentrado de la misma denominación. El papel extra, que normalmente se descarta, es la prueba física del pliego.',
      en: 'A “butterfly” is a guillotine fault in which a fragment of the sheet margin stays attached to the note, like a wing. This 2009 Santander example records that variety beside the off-centre cut on the same denomination. The extra paper, normally discarded, is physical evidence of the sheet.',
    },
    scarcity: {
      es: 'Las mariposas que circulan sin recortarse son escasas; el fragmento de margen suele perderse.',
      en: 'Butterflies that circulate untrimmed are scarce; the margin fragment is usually lost.',
    },
    grade: {
      es: 'Circulado, con el exceso de papel intacto',
      en: 'Circulated, with the excess paper intact',
    },
    cardCaption: {
      es: 'Dos mil pesos de 2009 con error de corte «mariposa».',
      en: '2009 2,000 pesos with a “butterfly” cutting error.',
    },
    images: [
      {
        src: img('2000-pesos-mariposa.jpg'),
        caption: {
          es: 'Dos mil pesos de 2009: error de corte mariposa sobre el tipo de Santander.',
          en: '2009 2,000 pesos: butterfly cutting error on the Santander type.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
  {
    id: '50000-pesos-error',
    path: `${BANREP_PATH}50000-pesos-error/`,
    sort: 230,
    kind: 'error',
    pick: 'P#456',
    years: { es: '2016', en: '2016' },
    printer: banrepPress,
    title: {
      es: '50.000 pesos · error de impresión',
      en: '50,000 pesos · printing error',
    },
    kicker: {
      es: 'Banco de la República · Error de impresión',
      en: 'Banco de la República · Printing error',
    },
    lead: {
      es: 'Cincuenta mil pesos de Gabriel García Márquez con numeración superpuesta y desalineada.',
      en: 'Gabriel García Márquez 50,000 pesos with overlapping, misaligned numbering.',
    },
    description: {
      es: 'En la esquina superior izquierda del anverso, donde debería haber un solo número de serie, este 50.000 pesos de 2016 muestra una cuadrícula de dígitos superpuestos —un defecto de registro de la numeración que escapó al control de la Imprenta de Billetes. El retrato es el de Gabriel García Márquez, de la familia de la serie actual.',
      en: 'At the upper-left of the face, where a single serial should sit, this 2016 50,000-peso shows a grid of overlapping digits — a numbering registration fault that left the printing house’s quality control. The portrait is Gabriel García Márquez, from the current-series family.',
    },
    scarcity: {
      es: 'Los errores de numeración en una denominación alta y reciente son poco frecuentes en circulación.',
      en: 'Numbering errors on a high, recent denomination are uncommon in circulation.',
    },
    grade: {
      es: 'Circulado, con el error de numeración intacto',
      en: 'Circulated, with the numbering error intact',
    },
    cardCaption: {
      es: 'Cincuenta mil pesos de 2016 con error de registro en la numeración.',
      en: '2016 50,000 pesos with a numbering registration error.',
    },
    images: [
      {
        src: img('50000-pesos-error.jpg'),
        caption: {
          es: 'Cincuenta mil pesos de 2016, García Márquez: dígitos de serie superpuestos.',
          en: '2016 50,000 pesos, García Márquez: overlapping serial digits.',
        },
      },
    ],
    sources: sharedNoteSources,
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Colombia · Banco de la República | Notofilia',
    metaDescription:
      'Catálogo de billetes del Banco de la República: series ABNC, especímenes, pruebas de Débora Arango y errores de corte de la colección.',
    kicker: 'Colombia · Banco central',
    title: 'Banco de la República',
    heroAlt:
      'Diorama vintage de Bogotá sobre un mapa de pergamino, con la Plaza de Bolívar, La Candelaria, Monserrate y el título Bogotá',
    intro: [
      'La Ley 25 de 1923, fruto de la Misión Kemmerer contratada por Pedro Nel Ospina, creó el Banco de la República como sociedad anónima con 10 millones de pesos oro de capital y el monopolio de emitir la moneda legal. Los primeros billetes oficiales se encargaron a la American Bank Note Company, después de provisionales sobreimpresos de la Casa de Moneda de Medellín.',
      'La convertibilidad en oro se perdió en 1931, cuando el banco asumió el control del metal. Desde entonces el peso es emisión centralizada. Durante décadas ABNC grabó los pesos oro y los certificados de plata —Santander, Bolívar, Nariño, Torres— con orlas y la Libertad en el reverso. A partir de los años setenta y ochenta la Imprenta de Billetes de Bogotá tomó la producción.',
      'Esta vitrina reúne el papel del banco central que hay en la colección: series de circulación, especímenes con ceros y perforaciones de archivo, pruebas de impresión del 2.000 pesos de Débora Arango (P-458b) y los errores de corte e impresión que documentan el taller —la guillotina descentrada, la mariposa y la numeración superpuesta del 50.000 pesos de García Márquez.',
      'Las fichas siguen el mismo orden que Filipinas: de izquierda a derecha por denominación, de medio peso a diez mil pesos. Los errores tienen su propia fila. Cada tarjeta abre la ficha con imágenes, Pick y fuentes.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Dieciséis fichas de circulación, especímenes y pruebas, alineadas por denominación. Los errores de corte e impresión están en la fila siguiente.',
    errorsTitle: 'Errores',
    errorsIntro:
      'Cuatro fichas de taller: el 2.000 pesos de 1996, los cortes descentrados de 2005 y 2009, la mariposa y el 50.000 pesos de 2016 con numeración superpuesta.',
    viewNote: 'Ver la ficha',
    sourcesTitle: 'Fuentes',
    pickLabel: 'Pick',
    yearsLabel: 'Fechas',
    kindLabel: 'Tipo',
    kinds: {
      circulation: 'Circulación',
      specimen: 'Espécimen',
      error: 'Error',
      proof: 'Prueba',
    },
  },
  en: {
    metaTitle: 'Colombia · Banco de la República | Notofilia',
    metaDescription:
      'Catalog of Banco de la República notes: ABNC series, specimens, Débora Arango proofs, and cutting errors from the collection.',
    kicker: 'Colombia · Central bank',
    title: 'Banco de la República',
    heroAlt:
      'Vintage diorama of Bogotá on a parchment map, with Plaza de Bolívar, La Candelaria, Monserrate, and the title Bogotá',
    intro: [
      'Law 25 of 1923, the fruit of the Kemmerer Mission hired by Pedro Nel Ospina, created the Banco de la República as a stock company with 10 million gold pesos of capital and the exclusive right to issue legal tender. The first official notes were ordered from the American Bank Note Company, after provisional overprints of the Medellín mint.',
      'Gold convertibility ended in 1931, when the bank took control of the metal. Since then the peso has been a centralized issue. For decades ABNC engraved gold pesos and silver certificates — Santander, Bolívar, Nariño, Torres — with frames and Liberty on the back. From the 1970s and 1980s the Bogotá note printing house took over production.',
      'This case gathers the central-bank paper in the collection: circulation series, specimens with zeros and archive punches, printing proofs of the Débora Arango 2,000-peso (P-458b), and the cutting and printing errors that document the shop — the off-centre guillotine, the butterfly, and the overlapping numbering on the García Márquez 50,000-peso.',
      'The fichas follow the same order as the Philippines: left to right by denomination, from the half peso to ten thousand pesos. Errors have their own row. Each card opens the note page with images, Pick, and sources.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Sixteen circulation, specimen, and proof fichas, lined up by denomination. Cutting and printing errors sit in the next row.',
    errorsTitle: 'Errors',
    errorsIntro:
      'Four shop fichas: the 1996 2,000-peso, the 2005 and 2009 off-centre cuts, the butterfly, and the 2016 50,000-peso with overlapping numbering.',
    viewNote: 'Open the note page',
    sourcesTitle: 'Sources',
    pickLabel: 'Pick',
    yearsLabel: 'Dates',
    kindLabel: 'Kind',
    kinds: {
      circulation: 'Circulation',
      specimen: 'Specimen',
      error: 'Error',
      proof: 'Proof',
    },
  },
} as const;

export const notePageCopy = {
  es: {
    seriesLink: 'Banco de la República',
    collectionLink: 'Colombia',
    imagesHeading: 'La pieza',
    aboutHeading: 'La ficha',
    scarcityHeading: 'Rareza',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printerLabel: 'Impresor',
    yearsLabel: 'Fechas',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    kindLabel: 'Tipo',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'Banco de la República',
    collectionLink: 'Colombia',
    imagesHeading: 'The note',
    aboutHeading: 'The ficha',
    scarcityHeading: 'Scarcity',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printerLabel: 'Printer',
    yearsLabel: 'Dates',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    kindLabel: 'Kind',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function noteById(id: string): BanrepNote | undefined {
  return banrepNotes.find((note) => note.id === id);
}

export function notePath(note: BanrepNote, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${note.path}` : note.path;
}

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${BANREP_PATH}` : BANREP_PATH;
}

export const catalogHoldings = banrepNotes.filter((note) => note.kind !== 'error');
export const errorHoldings = banrepNotes.filter((note) => note.kind === 'error');

export const catalogNoteSlugs = banrepNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const dedicatedCatalogPaths = new Set<string>([
  BANREP_PATH.replace(/^\/|\/$/g, ''),
  ...catalogNoteSlugs,
]);
