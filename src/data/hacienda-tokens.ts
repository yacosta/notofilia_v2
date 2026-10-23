import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const HACIENDA_TOKENS_PATH = '/coleccion/colombia-numismatica/fichas-de-hacienda/';
export const HACIENDA_TOKENS_PATH_EN = '/collection/colombia-numismatics/hacienda-tokens/';

/** One finished poster, named for each page. Frame hero: do not crop. Card siblings are 800px wide. */
export const HACIENDA_TOKENS_HERO = {
  es: {
    src: '/uploads/fichas-de-hacienda-hero.jpg',
    width: 1168,
    height: 784,
  },
  en: {
    src: '/uploads/hacienda-tokens-hero.jpg',
    width: 1168,
    height: 784,
  },
} as const;

export const haciendaTokensCopy = {
  es: {
    nav: 'Fichas de hacienda',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Fichas de hacienda en Colombia',
    metaDescription:
      'Las fichas de hacienda fueron dinero privado de fincas y minas. El artículo 136 del Código de 1950 prohibió pagar el salario con ellas.',
    kicker: 'Colombia-Numismática',
    title: 'Las fichas de hacienda en la numismática colombiana',
    lead:
      'Las fichas de hacienda fueron dinero privado. Haciendas, minas y empresas las emitieron para pagar jornales cuando la Casa de Moneda no alcanzaba a poner menuda en circulación. Circularon desde la segunda mitad del siglo XIX. El artículo 136 del Código Sustantivo del Trabajo, de 1950, prohibió pagar el salario con ellas.',
    published: '2026-10-22',
    dateLabel: '22 de octubre de 2026',
    authorLabel: 'Yezid Acosta',
    heroAlt:
      'Ilustración de un mapa de la República de Colombia con la fecha 1878, la leyenda Hacienda Tokens y Colombian Numismatics, una casa de hacienda, ganado, brújula, lupa y fichas dibujadas. No es el escaneo de piezas de la colección.',
    factsHeading: 'En breve',
    facts: [
      { label: 'Qué son', value: 'Piezas monetiformes privadas, sin curso legal: fichas, vales y señas de hacienda, mina o empresa.' },
      { label: 'Para qué servían', value: 'Pagar jornal o cosecha y canjearlas en el almacén del emisor, el comisariato.' },
      { label: 'Norma que las nombra', value: 'Artículo 136 del Código Sustantivo del Trabajo, «Prohibición de trueque». El código rige desde el 1 de enero de 1951.' },
      { label: 'Catálogo', value: 'Ignacio Alberto Henao Jaramillo, Fichas de Colombia. Primera edición a finales de 2003; segunda, 2021. Esta página no republica precios.' },
    ],
    sourcesTitle: 'Fuentes',
    seriesCta: 'Volver a Colombia-Numismática',
    numismaticaCta: 'Volver a Numismática',
  },
  en: {
    nav: 'Hacienda tokens',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Hacienda tokens in Colombia',
    metaDescription:
      'Hacienda tokens were private money from estates and mines. Article 136 of the 1950 labor code banned paying wages with them.',
    kicker: 'Colombia-Numismatics',
    title: 'Hacienda tokens in Colombian numismatics',
    lead:
      'Hacienda tokens were private money. Estates, mines, and companies issued them to pay wages when the mint could not put enough small coin into circulation. They passed from the later nineteenth century until article 136 of the 1950 labor code banned paying wages with them.',
    published: '2026-10-22',
    dateLabel: 'October 22, 2026',
    authorLabel: 'Yezid Acosta',
    heroAlt:
      'Illustration of a map of the Republic of Colombia dated 1878, lettered Hacienda Tokens and Colombian Numismatics, with a hacienda house, cattle, a compass, a magnifying glass, and drawn tokens. It is not a scan of pieces in the collection.',
    factsHeading: 'In brief',
    facts: [
      { label: 'What they are', value: 'Private money-like pieces, without legal tender: tokens, vouchers, and tallies of an estate, a mine, or a company.' },
      { label: 'What they did', value: 'Pay a day’s wage or a harvest, and be spent at the issuer’s own store, the commissary.' },
      { label: 'The statute that names them', value: 'Article 136 of the Substantive Labor Code, “Prohibition of barter.” The code took effect on 1 January 1951.' },
      { label: 'Catalog', value: 'Ignacio Alberto Henao Jaramillo, Fichas de Colombia. First edition in late 2003; second edition, 2021. This page does not republish prices.' },
    ],
    sourcesTitle: 'Sources',
    seriesCta: 'Back to Colombia-Numismatics',
    numismaticaCta: 'Back to Numismatics',
  },
} as const;

export const haciendaTokensSources: CatalogSource[] = [
  {
    href: 'https://repository.eafit.edu.co/items/f5041e82-4608-4c9c-9894-d307e71e195a',
    es: 'Universidad EAFIT — Inventario del Fondo Familia Bravo Márquez, adición Hacienda La Amalia (1927–1932)',
    en: 'Universidad EAFIT — Inventory of the Bravo Márquez family papers, Hacienda La Amalia addition (1927–1932)',
    note: {
      es: 'La finca de Venecia, fundada en 1888 por Ignacio de Márquez y Amalia Madriñán de Márquez, «tuvo su propia moneda, la cual era acuñada en Francia, con circulación dentro del municipio de Venecia».',
      en: 'The Venecia estate, founded in 1888 by Ignacio de Márquez and Amalia Madriñán de Márquez, “had its own money, struck in France, circulating in the municipality of Venecia.”',
    },
  },
  {
    href: 'https://www.bluradio.com/regiones/antioquia/esta-es-la-historia-de-la-amalia-la-finca-cafetera-de-antioquia-que-tuvo-su-propia-moneda-so35',
    es: 'Blu Radio — La Amalia, la finca que tuvo su propia moneda (18 de diciembre de 2024)',
    en: 'Blu Radio — La Amalia, the estate that had its own money (18 December 2024)',
    note: {
      es: 'Da 388 hectáreas. Emidgio Patiño, concejal de Venecia, habla de 20.000 arrobas de café trillado. Es testimonio, no un libro de producción.',
      en: 'It gives 388 hectares. Emidgio Patiño, a Venecia councilman, speaks of 20,000 arrobas of milled coffee. That is testimony, not a production ledger.',
    },
  },
  {
    href: 'https://www.bluradio.com/sociedad/gente/ella-fue-amalia-madrinan-la-extranjera-que-tuvo-la-finca-cafetera-mas-productora-de-colombia-so35',
    es: 'Blu Radio — Amalia Madriñán (25 de marzo de 2025)',
    en: 'Blu Radio — Amalia Madriñán (25 March 2025)',
    note: {
      es: 'Nacimiento en Guatemala en 1867, matrimonio en 1888 con José Ignacio de Márquez, viudez en 1905 y 228 hectáreas. La extensión no coincide con la otra nota de Blu ni con Caracol.',
      en: 'Birth in Guatemala in 1867, marriage in 1888 to José Ignacio de Márquez, widowhood in 1905, and 228 hectares. The acreage does not match Blu’s other note or Caracol.',
    },
  },
  {
    href: 'https://www.noticiascaracol.com/colombia/la-historia-de-la-finca-antioquena-que-creo-su-propia-moneda-y-revoluciono-la-exportacion-de-cafe-pr30',
    es: 'Noticias Caracol — La finca antioqueña que creó su propia moneda (19 de diciembre de 2024)',
    en: 'Noticias Caracol — The Antioquian estate that created its own money (19 December 2024)',
    note: {
      es: 'Fundación en 1888, 238 hectáreas, crianza en Popayán y el parentesco con Pedro Nel Ospina. Repite el testimonio de Patiño sobre las 20.000 arrobas.',
      en: 'Founding in 1888, 238 hectares, upbringing in Popayán, and the kinship with Pedro Nel Ospina. It repeats Patiño’s testimony on the 20,000 arrobas.',
    },
  },
  {
    href: 'https://laamalia1888.com/es/my-familys-story/',
    es: 'La Amalia 1888 — relato de la familia',
    en: 'La Amalia 1888 — the family’s account',
    note: {
      es: 'José Ignacio de Márquez Vásquez. La letra T de las fichas, según la familia, significa tarros: canastos de recolectar café, en módulos de 1, 5, 10 y 20.',
      en: 'José Ignacio de Márquez Vásquez. On the family’s account the T on the tokens means tarros: baskets for picking coffee, in modules of 1, 5, 10, and 20.',
    },
  },
  {
    href: 'https://es.numista.com/catalogue/exonumia346977.html',
    es: 'Numista — 1 tarro, Hacienda La Amalia, 1927 (N# 346977)',
    en: 'Numista — 1 tarro, Hacienda La Amalia, 1927 (N# 346977)',
    note: {
      es: 'Latón, triangular, 22 mm, 2 g, leyenda «La Amalia 1 T». Numista glosa tarro como tazón. No es una pieza de esta colección.',
      en: 'Brass, triangular, 22 mm, 2 g, legend “La Amalia 1 T.” Numista glosses tarro as bowl. It is not a piece in this collection.',
    },
  },
  {
    href: 'https://www.elcolombiano.com/aniversario350/medellin-350-anos-pasado/historia-mina-el-zancudo-titiribi-coriolano-amador-medellin-350-anos-CJ29311164',
    es: 'El Colombiano — La historia de El Zancudo',
    en: 'El Colombiano — The history of El Zancudo',
    note: {
      es: 'Billetes de 50 centavos y de 1 peso, American Bank Note, con la promesa de pago en Titiribí y Medellín. Quema pública en el parque de Berrío en 1888, ante el alcalde.',
      en: 'Notes of 50 centavos and 1 peso, American Bank Note, promising payment at Titiribí and Medellín. Public burning in Parque de Berrío in 1888, before the mayor.',
    },
  },
  {
    href: 'https://es.numista.com/catalogue/colombia_section-8.html',
    es: 'Numista — 1 peso / 10 reales, Sociedad del Zancudo, s. f. (1882), P# S909, N# 502776',
    en: 'Numista — 1 peso / 10 reales, Sociedad del Zancudo, undated (1882), P# S909, N# 502776',
    note: {
      es: 'Billete local. No está en esta colección.',
      en: 'A local note. It is not in this collection.',
    },
  },
  {
    href: 'https://sidn.ramajudicial.gov.co/SIDN/NORMATIVA/TEXTOS_COMPLETOS/7_LEYES/LEYES%201898/Ley%2046%20de%201898.pdf',
    es: 'Ley 46 de 1898 — Diario Oficial 10.859 (13 de enero de 1899)',
    en: 'Law 46 of 1898 — Diario Oficial 10,859 (13 January 1899)',
    note: {
      es: 'Prohíbe emitir y poner en circulación billetes de bonos particulares y cualquier documento que sustituya el papel moneda. No es la Ley 25 de 1923.',
      en: 'It forbids issuing and circulating private bond notes and any document meant to replace paper money. It is not Law 25 of 1923.',
    },
  },
  {
    href: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=79933',
    es: 'Función Pública — Ley 25 de 1923',
    en: 'Función Pública — Law 25 of 1923',
    note: {
      es: 'Artículo 16: derecho exclusivo de emitir billetes, por veinte años, en pesos oro. Artículo 17, texto de 1923: sin curso forzoso; moneda legal para efectos penales y recepción obligatoria en impuestos y deudas públicas mientras hubiera cambio.',
      en: 'Article 16: the exclusive right to issue banknotes, for twenty years, in gold pesos. Article 17, the 1923 text: no forced currency; legal money for criminal-law purposes, and mandatory receipt for taxes and public debts while redemption lasted.',
    },
  },
  {
    href: 'https://dmsjuridica.com/CODIGOS/LEGISLACION/LEYES/1931/LEY%2082%20DE%201931.htm',
    es: 'Ley 82 de 1931, artículo 7',
    en: 'Law 82 of 1931, article 7',
    note: {
      es: 'Sustituye el artículo 17: mientras el Banco cambie los billetes, tienen poder liberatorio ilimitado para toda deuda, salvo pacto en contrario. No es lo mismo que el curso forzoso.',
      en: 'It replaces article 17: while the Bank redeems the notes, they have unlimited liberatory power for every debt, unless a contract says otherwise. That is not the same as forced currency.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-150/la-creacion-del-sistema-bancario-moderno',
    es: 'Credencial Historia — La creación del sistema bancario moderno',
    en: 'Credencial Historia — The creation of the modern banking system',
    note: {
      es: 'De diez proyectos de la misión, el Congreso aprobó ocho leyes en 1923: 20, 25, 31, 34, 36, 42, 45 y 46.',
      en: 'Of the mission’s ten bills, Congress passed eight laws in 1923: 20, 25, 31, 34, 36, 42, 45, and 46.',
    },
  },
  {
    href: 'https://repositorio.banrep.gov.co/bitstreams/16c840b7-a13a-441a-8e74-39f4793d423d/download',
    es: 'Banco de la República — Kemmerer y el Banco de la República. Diarios y documentos',
    en: 'Banco de la República — Kemmerer and the Banco de la República. Diaries and documents',
    note: {
      es: 'Howard M. Jefferson, Fred R. Fairchild, Thomas R. Lill y el asesor jurídico Esteban Jaramillo. La misma lista de ocho leyes.',
      en: 'Howard M. Jefferson, Fred R. Fairchild, Thomas R. Lill, and the legal adviser Esteban Jaramillo. The same list of eight laws.',
    },
  },
  {
    href: 'https://jurinfo.jep.gov.co/Normograma/Compilacion/docs/ley_0042_1923.htm',
    es: 'Ley 42 de 1923 — Departamento de Contraloría',
    en: 'Law 42 of 1923 — Department of the Contraloría',
    note: {
      es: 'Artículo 82: rige desde el 1 de septiembre de 1923.',
      en: 'Article 82: in force from 1 September 1923.',
    },
  },
  {
    href: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo_pr004.html',
    es: 'Senado — Código Sustantivo del Trabajo, artículos 134 a 138',
    en: 'Senate — Substantive Labor Code, articles 134 to 138',
    note: {
      es: 'El 134 exige moneda legal. El 136 nombra las fichas. El 137 limita la venta de mercancías del empleador.',
      en: 'Article 134 requires legal tender. Article 136 names tokens. Article 137 limits the employer’s sale of goods.',
    },
  },
  {
    href: 'https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=199983',
    es: 'Función Pública — Decreto 2663 de 1950',
    en: 'Función Pública — Decree 2663 of 1950',
    note: {
      es: 'Artículo 59, numeral 2: prohíbe obligar a comprar en almacenes del empleador. Artículo 149: prohíbe descontar deudas de la tienda sin orden del trabajador.',
      en: 'Article 59, item 2: it forbids compelling purchases at the employer’s stores. Article 149: it forbids deducting store debts without the worker’s order.',
    },
  },
  {
    href: 'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/pdf/decreto_3743_1950.pdf',
    es: 'Cancillería — Decreto 3743 de 1950',
    en: 'Ministry of Foreign Affairs — Decree 3743 of 1950',
    note: {
      es: 'Modifica el Decreto 2663 y ordena la edición oficial del código. El 2663 debía regir el 1 de enero de 1951.',
      en: 'It amends Decree 2663 and orders the official edition of the code. Decree 2663 was to take effect on 1 January 1951.',
    },
  },
  {
    href: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=47847',
    es: 'Ley 141 de 1961',
    en: 'Law 141 of 1961',
    note: {
      es: 'Adopta como leyes los decretos de estado de sitio dictados entre el 9 de noviembre de 1949 y el 20 de julio de 1958.',
      en: 'It adopts as statutes the state-of-siege decrees issued between 9 November 1949 and 20 July 1958.',
    },
  },
  {
    href: 'https://www.manuelita.com/manuelita-historia/primer-molino-vapor/',
    es: 'Manuelita — Primer molino de vapor (1901)',
    en: 'Manuelita — First steam mill (1901)',
    note: {
      es: 'La empresa fecha en 1901 una fábrica a vapor capaz de moler 50 toneladas de caña al día, y la llama segunda en Suramérica.',
      en: 'The company dates to 1901 a steam works able to grind 50 tons of cane a day, and calls it the second in South America.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Jorge_Isaacs_Ferrer',
    es: 'Enciclopedia Banrepcultural — Jorge Isaacs Ferrer',
    en: 'Banrepcultural Encyclopedia — Jorge Isaacs Ferrer',
    note: {
      es: 'En 1864 se remataron La Rita y La Manuelita; las adquirió Santiago Eder. Eran de la familia de George Henry Isaacs, padre de Jorge Isaacs.',
      en: 'In 1864 La Rita and La Manuelita were sold at auction; Santiago Eder bought them. They belonged to the family of George Henry Isaacs, Jorge Isaacs’s father.',
    },
  },
  {
    href: 'https://www.scielo.org.ar/scielo.php?pid=S1668-80902011000100004&script=sci_arttext',
    es: 'Jorge Enrique Elías Caro — La masacre obrera de 1928 (Andes, 2011)',
    en: 'Jorge Enrique Elías Caro — The 1928 workers’ massacre (Andes, 2011)',
    note: {
      es: 'Huelga desde el 12 de noviembre de 1928, más de 25.000 trabajadores. El pliego de nueve puntos, aprobado el 6 de octubre, pide suprimir comisariatos y cesar los préstamos en vales. El número de muertos no está fijado. La novela no es el acta de esa noche.',
      en: 'Strike from 12 November 1928, more than 25,000 workers. The nine-point petition, approved on 6 October, asks to suppress the commissaries and to stop loans in vouchers. The number of dead is not settled. The novel is not the record of that night.',
    },
  },
  {
    href: 'https://www.coinbooks.org/esylum_v07n29a22.html',
    es: 'The E-Sylum — Fichas de Colombia (18 de julio de 2004)',
    en: 'The E-Sylum — Fichas de Colombia (18 July 2004)',
    note: {
      es: 'La primera edición, salida el otoño anterior, incluye las fichas de Panamá de cuando el istmo era colombiano.',
      en: 'The first edition, out the previous autumn, includes Panama tokens from when the isthmus was Colombian.',
    },
  },
  {
    href: 'http://fichasdecolombia.blogspot.com/',
    es: 'Ignacio Alberto Henao — blog Fichas de Colombia',
    en: 'Ignacio Alberto Henao — Fichas de Colombia blog',
    note: {
      es: 'Correcciones de 2021: TEL 041-1 a 041-3 (Empresa de Teléfonos de Bogotá) e IND 064-1 / 064-2 (Ingenio San José). Las medidas son las del blog.',
      en: 'Corrections of 2021: TEL 041-1 to 041-3 (Empresa de Teléfonos de Bogotá) and IND 064-1 / 064-2 (Ingenio San José). The measurements are the blog’s.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
    es: 'Banrepcultural — Museo Casa de Moneda',
    en: 'Banrepcultural — Casa de Moneda Museum',
    note: {
      es: 'La colección numismática del Banco se ve en Calle 11 n.º 4-93. Esta página no le asigna una ficha de hacienda.',
      en: 'The Bank’s numismatic collection is on view at Calle 11 no. 4-93. This page does not assign it a hacienda token.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/fabrica-moneda/historia',
    es: 'Banco de la República — Historia de la Fábrica de Moneda',
    en: 'Banco de la República — History of the Coin Factory',
    note: {
      es: 'La cronología del Banco fecha la administración de la Casa de Bogotá en 1946. El catálogo de la exposición de 1996 pone ese contrato en 1942. La Ley 25 no le pasó la acuñación.',
      en: 'The Bank’s timeline dates its administration of the Bogotá mint to 1946. The 1996 exhibition booklet puts that contract in 1942. Law 25 did not transfer striking to the Bank.',
    },
  },
];

export function haciendaTokensPath(locale: Locale): string {
  return locale === 'en' ? `/en${HACIENDA_TOKENS_PATH_EN}` : HACIENDA_TOKENS_PATH;
}

export const haciendaTokensDedicatedSlugs = [
  HACIENDA_TOKENS_PATH.replace(/^\/|\/$/g, ''),
  HACIENDA_TOKENS_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
