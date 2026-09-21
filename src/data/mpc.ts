import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';
import { USA_MPC_PATH, USA_MPC_PROGRAM_PATH, USA_MPC_PROGRAM_PATH_EN, USA_PATH } from './estados-unidos';

export type MpcProgramChapterId =
  | 'contexto'
  | 'c-day'
  | 'marco'
  | 'produccion'
  | 'geografia'
  | 'rareza'
  | 'serie-481';

export type MpcProgramChapter = {
  id: MpcProgramChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const mpcProgramChapters: MpcProgramChapter[] = [
  {
    id: 'contexto',
    years: { es: '1946–1951', en: '1946–1951' },
    title: {
      es: 'Arquitectura monetaria del scrip militar',
      en: 'The monetary architecture of military scrip',
    },
    lead: {
      es: 'El programa nació para cortar el arbitraje entre el dólar federal y las monedas locales destrozadas por la guerra.',
      en: 'The program was built to cut arbitrage between the federal dollar and local currencies wrecked by war.',
    },
    body: {
      es: 'A finales de 1946 el certificado de pago militar sustituyó un arreglo defectuoso de la Segunda Guerra Mundial: las tropas pagaban con Federal Reserve Notes, certificados de plata de sello amarillo o moneda militar aliada. El dólar tenía poder de compra mundial; el personal convertía moneda local devaluada en instrumentos oficiales y el Tesoro absorbía desembolsos que no correspondían a la nómina. El Ejército respondió con un fiat interno, en dólares y centavos, sin curso legal en Estados Unidos y válido solo en canales militares acreditados. En junio de 1950 el Octavo Ejército llegó a Corea con la serie 472. El avance del won surcoreano que la República de Corea prestaba al Mando de las Naciones Unidas —mano de obra civil, obra y logística— se liquidaba después en divisas fuertes. Si los greenbacks hubieran circulado libres en la península, la fuga de dólares habría roto el control cambiario del Banco de Corea. La 481 se fabricó para cerrar ese perímetro: el gasto de la tropa se podía vigilar, contener y separar del sistema bancario anfitrión y de la masa monetaria estadounidense.',
      en: 'In late 1946 the military payment certificate replaced a defective Second World War arrangement: troops paid with Federal Reserve Notes, yellow-seal silver certificates, or Allied military currency. The dollar had worldwide purchasing power; personnel converted depreciated local cash into official instruments, and the Treasury absorbed disbursements that did not match the payroll. The Army answered with an internal fiat, in dollars and cents, with no legal-tender status in the United States and valid only in accredited military channels. In June 1950 the Eighth Army reached Korea on Series 472. Won advances that the Republic of Korea supplied to the United Nations Command — civilian labor, construction, and theater logistics — were later settled in hard foreign exchange. Had greenbacks circulated freely on the peninsula, dollar flight would have broken the Bank of Korea’s exchange controls. Series 481 was made to close that perimeter: troop spending could be watched, contained, and kept apart from the host banking system and from the United States money supply.',
    },
  },
  {
    id: 'c-day',
    years: { es: '1951–1954', en: '1951–1954' },
    title: {
      es: 'Vida útil y el Día de la conversión',
      en: 'Service life and Conversion Day',
    },
    lead: {
      es: 'Casi tres años de circulación —combate, Panmunjom y la primera reconstrucción— y un C-Day mundial el 25 de mayo de 1954.',
      en: 'Almost three years in use — combat, Panmunjom, and early reconstruction — and a worldwide C-Day on 25 May 1954.',
    },
    body: {
      es: 'La 481 reemplazó a la 472 el 20 de junio de 1951 y la 521 la retiró el 25 de mayo de 1954. El scrip se podía canjear por bienes de los economatos; por eso sindicatos comerciales, operadores del mercado negro y negocios de ocio lo aceptaban fuera de la alambrada, con prima sobre la moneda local. El alto mando respondía con ejercicios secretos y sincronizados: Conversion Day, o C-Day. Esa mañana los compuestos quedaron en encierro: se suspendió el movimiento de tropas, se restringió el correo y el telégrafo, y la seguridad cerró el perímetro. En mostradores de verificación, soldados, civiles del Ejército y personal auxiliar autorizado presentaron la cartilla de haberes, la identificación y el papel 481. Los techos de canje debían coincidir con los libros de nómina, para exponer a quien servía de correo a redes locales. Al cierre, el papel no redimido quedó demonetizado. Quien lo atesoraba fuera de la base perdió el capital de un día para otro.',
      en: 'Series 481 replaced Series 472 on 20 June 1951; Series 521 withdrew it on 25 May 1954. The scrip could be turned into exchange-store goods, so commercial rings, black-market operators, and entertainment houses took it outside the wire, at a premium to local cash. High command answered with secret, synchronized Conversion Day — C-Day — drills. That morning compounds locked down: troop movement stopped, mail and telegraph were restricted, and security closed the perimeter. At verification counters, soldiers, Army civilians, and authorized auxiliaries presented pay records, identification, and their Series 481 holdings. Conversion caps had to match the payroll ledgers, exposing anyone acting as a courier for local rings. When the day closed, unredeemed notes were demonetized. Anyone hoarding them off base lost that capital overnight.',
    },
  },
  {
    id: 'marco',
    years: { es: '1951–1954', en: '1951–1954' },
    title: {
      es: 'Marco normativo y contención',
      en: 'Rules and containment',
    },
    lead: {
      es: 'La restricción de uso está impresa en anverso y reverso: solo instalaciones militares y personal autorizado.',
      en: 'The use restriction is printed on face and back: military establishments and authorized personnel only.',
    },
    body: {
      es: 'Cada certificado lleva la leyenda que limita el uso a establecimientos militares de Estados Unidos y a personal autorizado, conforme a los reglamentos. El scrip servía en el Army and Air Force Exchange Service, comedores, clubes de oficiales y suboficiales, cines de la base y oficinas de finanzas. Estaba prohibido pasarlo a nacionales extranjeros no autorizados o gastarlo en el comercio civil fuera del recinto. Quien salía de permiso a un pueblo coreano o a una ciudad japonesa debía cambiar un cupo de MPC a won o a yen en el mostrador oficial. Poseer Federal Reserve Notes en el Far East Command, sin autorización especial, era contrabando. El tráfico o la tenencia de monedas no aprobadas podía llevar a consejo de guerra bajo el Uniform Code of Military Justice.',
      en: 'Every certificate carries the legend that limits use to United States military establishments and to authorized personnel, under the applicable rules. The scrip paid the Army and Air Force Exchange Service, mess halls, officers’ and NCO clubs, base theaters, and finance offices. Transfer to unauthorized foreign nationals, or spending it in off-post civilian shops, was forbidden. Anyone on leave in a Korean town or a Japanese city had to change an allotted MPC balance into won or yen at the official counter. Holding Federal Reserve Notes in the Far East Command without special authority was contraband. Trafficking or possessing unapproved currencies could bring a court-martial under the Uniform Code of Military Justice.',
    },
  },
  {
    id: 'produccion',
    years: { es: '1951', en: '1951' },
    title: {
      es: 'Producción y tipología',
      en: 'Production and typology',
    },
    lead: {
      es: 'Primera serie MPC que sustituye el filete geométrico por alegorías clásicas; offset de Boston, no intaglio del BEP.',
      en: 'The first MPC series to replace geometric lathework with classical allegory; Boston offset, not BEP intaglio.',
    },
    body: {
      es: 'Las series 461, 471 y 472 se apoyaban en grecas repetidas y tipografía numérica. Con la 481 el Bureau of Engraving and Printing pasó el diseño a viñetas alegóricas del papel estadounidense de finales del XIX y principios del XX, y encargó la tirada a The Tudor Press y a Forbes Lithographic Manufacturing Co., en Boston. Forbes hizo varias pasadas en offset a varios colores. Siete denominaciones, dos formatos: 5, 10, 25 y 50 centavos en pliegos de 84; el 1 dólar en pliegos de 70; el 5 y el 10 dólares en pliegos de 50. Los fraccionarios comparten anverso —mujer sentada con brújula y globo, a la izquierda— y reverso con el Gran Sello. El 1 dólar va en aquamarina y negro sobre fondo azul claro y pardo, con dos retratos femeninos neoclásicos arriba; el reverso, púrpura y azul, otra vez el Gran Sello. El 5 dólares, verde claro y tostado al anverso y violeta y azul al reverso, lleva la viñeta «Mechanics», grabado industrial del siglo XIX. El 10 dólares, el valor más alto de la serie, muestra una figura sentada entre orlas, con la misma paleta de cara y un reverso azul y violeta. Las medidas exactas de cada formato no se publican aquí: el 5 centavos de esta colección se cita, como tipo, en unos 111 × 55 mm.',
      en: 'Series 461, 471, and 472 relied on repetitive scrollwork and numerical type. With Series 481 the Bureau of Engraving and Printing moved the design to allegorical vignettes in the late-nineteenth- and early-twentieth-century American manner, and put the run out to The Tudor Press and Forbes Lithographic Manufacturing Co., in Boston. Forbes printed several multi-color offset passes. Seven denominations, two formats: 5, 10, 25, and 50 cents on 84-subject sheets; the $1 on 70-subject sheets; the $5 and $10 on 50-subject sheets. The fractionals share a face — a seated woman with compass and globe, at left — and a Great Seal reverse. The $1 is aqua and black over a light-blue and brown underprint, with two neoclassical female portraits at the top; the reverse, purple and blue, again the Great Seal. The $5, light green and tan on the face and violet and light blue on the back, carries the “Mechanics” vignette, a nineteenth-century industrial engraving. The $10, the series’ highest face value, shows a seated figure in geometric borders, the same face palette, and a blue-and-violet reverse. Exact dimensions for each format are not published here: the 5-cent type in this collection is cited at about 111 × 55 mm.',
    },
  },
  {
    id: 'geografia',
    years: { es: '1951–1954', en: '1951–1954' },
    title: {
      es: 'Distribución geográfica',
      en: 'Geographic distribution',
    },
    lead: {
      es: 'La guerra de Corea explicó el volumen; el mismo papel corrió en dieciocho jurisdicciones de ultramar.',
      en: 'The Korean War explains the volume; the same paper ran in eighteen overseas jurisdictions.',
    },
    body: {
      es: 'En el Far East Command la circulación se concentró en Corea del Sur —Octavo Ejército e instalaciones aéreas— y en retaguardia en Japón y las Ryukyu (Okinawa). La misma serie sirvió en el teatro europeo: Alemania Occidental, Austria, Francia, Inglaterra, Escocia, Italia, Bélgica, Países Bajos, Grecia, Hungría, Islandia, el Territorio Libre de Trieste y Yugoslavia, además de complejos en el Marruecos francés y Filipinas. Una sola serie mundial evitó fragmentar la logística, pero exigía un C-Day simultáneo: si un teatro convertía antes que otro, las redes podían llevar papel invalidado a un teatro donde aún compraba. El 25 de mayo de 1954 se ejecutó a la vez en cuatro continentes. Dentro de Corea, los 5, 10 y 25 centavos dominaron la línea —puestos de socorro, rancho de campaña, avanzadillas—; el 5 y el 10 dólares se concentraron en depósitos de retaguardia como Pusan e Incheon, en mesas de oficiales y en las finanzas regionales.',
      en: 'In the Far East Command, circulation centered on South Korea — the Eighth Army and tactical airfields — and on rear nodes in Japan and the Ryukyus (Okinawa). The same series served the European theater: West Germany, Austria, France, England, Scotland, Italy, Belgium, the Netherlands, Greece, Hungary, Iceland, the Free Territory of Trieste, and Yugoslavia, plus base complexes in French Morocco and the Philippines. One worldwide series avoided logistical splintering, but it required a simultaneous C-Day: if one theater converted earlier than another, networks could move voided paper into a theater where it still bought. 25 May 1954 ran at once across four continents. Inside Korea, 5-, 10-, and 25-cent notes dominated the line — aid stations, field messes, outposts — while the $5 and $10 concentrated in rear depots such as Pusan and Incheon, in officers’ messes, and at regional finance.',
    },
  },
  {
    id: 'rareza',
    years: { es: '1954–', en: '1954–' },
    title: {
      es: 'Impresiones, reemplazos y supervivencia',
      en: 'Printings, replacements, and survival',
    },
    lead: {
      es: 'La redención obligatoria y la incineración dejaron pocos ejemplares frente a las tiradas publicadas. Aquí no se republican precios.',
      en: 'Mandatory redemption and incineration left few survivors against the published print totals. Prices are not republished here.',
    },
    body: {
      es: 'Fred Schwan clasifica tres o cuatro pasadas según marcas de pliego, plancha y rangos de serial. El 5 centavos tuvo cuatro impresiones: la primera se cita hasta D05152000D; una cuarta cubre D14784001D–D24192000D. Las pasadas tardías del 50 centavos, incluida una tercera impresión catalogada como Pick S834-3, circularon con fuerza justo antes de la demonetización de 1954. El reemplazo militar no usa estrella: la emisión regular lleva ocho dígitos entre la misma letra (D12345678D); el reemplazo omite la letra final y cierra en número. Esos reemplazos, sobre todo el 50 centavos y el 5 dólares, son los más escasos del tipo. El 5 dólares es, en las tablas publicadas, la denominación de menor tirada de la serie; en el C-Day se redimió antes que los fraccionarios. Esta vitrina no inventa un censo ni una tirada de pieza, y no copia listas de precio de dealer.',
      en: 'Fred Schwan sorts three or four press runs by sheet marks, plate varieties, and serial ranges. The 5-cent note had four printings: the first is cited through D05152000D; a fourth covers D14784001D–D24192000D. Late 50-cent deliveries, including a third printing catalogued as Pick S834-3, circulated hard just before the 1954 demonetization. Military replacements do not use a star: a regular note has eight digits between the same letter (D12345678D); a replacement drops the suffix letter and ends on a digit. Those replacements — especially the 50-cent and the $5 — are the scarcest of the type. Published tables give the $5 the lowest print total in the series; on C-Day it was redeemed ahead of the fractionals. This case does not invent a census or a piece-level printage, and it does not copy dealer price lists.',
    },
  },
  {
    id: 'serie-481',
    years: { es: '1951–1954', en: '1951–1954' },
    title: {
      es: 'En esta vitrina',
      en: 'In this case',
    },
    lead: {
      es: 'Emisión del 20 de junio de 1951 al 25 de mayo de 1954: papel de bases en ultramar, no una serie de Vietnam.',
      en: 'Issued 20 June 1951 to 25 May 1954: overseas-base paper, not a Vietnam series.',
    },
    body: {
      es: 'La serie 481 no lleva año de calendario impreso: «SERIES 481» es su designación. Circuló del 20 de junio de 1951 al 25 de mayo de 1954. Silver Recyclers sitúa el papel en Austria, Bélgica, Inglaterra, Francia, Alemania, Grecia, Hungría, Islandia, Italia, Japón, Corea, Marruecos, Filipinas, las Ryukyu, Escocia, Trieste y Yugoslavia. No forma parte de las cuatro series confinadas a Vietnam (641, 661, 681 y 692). Forbes Lithographic Manufacturing Co. y Tudor Press, en Boston, están documentados para esta serie; el Bureau of Engraving and Printing diseñó, acabó y despachó el papel. La impresión es litografía offset a partir de arte grabado, no intaglio directo. Esta vitrina reúne, de momento, el 5 centavos Pick M22a de la colección; las series vietnamitas siguen en su caso propio.',
      en: 'Series 481 carries no printed calendar year: “SERIES 481” is its designation. It circulated from 20 June 1951 to 25 May 1954. Silver Recyclers places the paper in Austria, Belgium, England, France, Germany, Greece, Hungary, Iceland, Italy, Japan, Korea, Morocco, the Philippines, the Ryukyus, Scotland, Trieste, and Yugoslavia. It is not one of the four series confined to Vietnam (641, 661, 681, and 692). Forbes Lithographic Manufacturing Co. and Tudor Press, in Boston, are documented for this series; the Bureau of Engraving and Printing handled design, finishing, and shipping. Printing is offset lithography from engraved artwork, not direct intaglio. This case currently holds the collection’s 5-cent Pick M22a; the Vietnam series remain in their own case.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.numista.com/223126',
    es: 'Numista — 5 Cents (Military Payment Certificate), N#223126',
    en: 'Numista — 5 Cents (Military Payment Certificate), N#223126',
    note: {
      es: 'Pick M22 / M22a, 1951, papel de unos 111 × 55 mm, emisión regular con letra de prefijo y sufijo.',
      en: 'Pick M22 / M22a, 1951, paper about 111 × 55 mm, regular issue with prefix and suffix letters.',
    },
  },
  {
    href: 'https://antiquemoney.com/military-payment-certificate-values/series-481-military-payment-certificate-value/',
    es: 'Antique Money — serie 481',
    en: 'Antique Money — Series 481',
    note: {
      es: 'Circulación del 20 de junio de 1951 al 25 de mayo de 1954; impresores de Boston y el BEP en diseño y despacho.',
      en: 'Circulation 20 June 1951 to 25 May 1954; Boston printers and the BEP for design and shipping.',
    },
  },
  {
    href: 'https://www.silverrecyclers.com/blog/military-payment-certificate-series-481.aspx',
    es: 'Silver Recyclers — Military Payment Certificate Series 481',
    en: 'Silver Recyclers — Military Payment Certificate Series 481',
    note: {
      es: 'Fechas 20 de junio de 1951–25 de mayo de 1954 y la lista de teatros de ultramar. Los reemplazos, según esa página, cierran el serial con un número; la emisión regular, con una letra. Cita el Standard Catalog of United States Paper Money. No se republican precios.',
      en: 'Dates 20 June 1951–25 May 1954 and the overseas theater list. Replacements, on that page, end the serial with a digit; regular issues end with a letter. It cites the Standard Catalog of United States Paper Money. Prices are not republished.',
    },
  },
  {
    href: 'https://www.bep.gov/media/1041/download?inline=',
    es: 'Bureau of Engraving and Printing — Military Payment Certificates (ficha)',
    en: 'Bureau of Engraving and Printing — Military Payment Certificates (fact sheet)',
    note: {
      es: 'Sitúa la serie 481 en el período 1951–1954 del programa MPC.',
      en: 'Places Series 481 in the MPC program’s 1951–1954 period.',
    },
  },
  {
    href: 'https://www.greatcollections.com/Auction-Archive/US-Currency-Prices/34/US-Paper-Money/151/Military-Payment-Certificates',
    es: 'GreatCollections — archivos de Military Payment Certificates',
    en: 'GreatCollections — Military Payment Certificates archive',
    note: {
      es: 'Clasifica el 5 centavos de 481 en primera impresión (S831-1) hasta el serial D05152000D. No se republican precios.',
      en: 'Places the Series 481 5-cent first printing (S831-1) through serial D05152000D. Prices are not republished.',
    },
  },
  {
    href: 'https://learn.apmex.com/learning-guide/history/history-of-u-s-currency-mpcs/',
    es: 'APMEX — What is a Military Payment Certificate?',
    en: 'APMEX — What is a Military Payment Certificate?',
    note: {
      es: 'Origen del programa en 1946, uso restringido a canales militares y el C-Day como cancelación administrativa.',
      en: '1946 origin of the program, use limited to military channels, and C-Day as administrative cancellation.',
    },
  },
  {
    href: 'https://en.numista.com/catalogue/series.php?id=5064',
    es: 'Numista — serie MPC 481',
    en: 'Numista — MPC Series 481',
    note: {
      es: 'Agrupa las siete denominaciones Pick M22–M28 (Schwan 831–837).',
      en: 'Groups the seven denominations Pick M22–M28 (Schwan 831–837).',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · MPC Corea 1951–1954 | Notofilia',
    metaDescription:
      'Serie 481 (1951–1954): scrip militar de la Guerra de Corea. Siete denominaciones; en vitrina, el 5 centavos Pick M22a, serial D02536728D.',
    kicker: 'Estados Unidos · MPC',
    title: 'MPC - Guerra de Corea (1951 - 1954)',
    breadcrumbCurrent: 'MPC - Guerra de Corea (1951 - 1954)',
    heroAlt:
      'Ilustración contemporánea del teatro de Corea, 1951–1954: la península, el paralelo 38 y los acuerdos de Panmunjom. No es un mapa de época ni un certificado de pago militar.',
    intro: [
      'En lo más alto de la Guerra de Corea, el Departamento de Defensa de Estados Unidos desplegó un instrumento cerrado —el certificado de pago militar, o MPC— para aislar economías civiles frágiles de la inflación de guerra y cortar el arbitraje del mercado negro. La serie 481 entró en circulación el 20 de junio de 1951 y se demonetizó de golpe el 25 de mayo de 1954. Fue la primera emisión MPC que dejó el filete puramente geométrico por viñetas alegóricas clásicas.',
      'El certificado no es un billete del Tesoro ni curso legal estadounidense. Circulaba solo entre personal autorizado, en la base, y se convertía en moneda local, nunca al revés. El C-Day —un canje sorpresa, simultáneo en el mundo— dejaba sin valor la serie saliente. Silver Recyclers sitúa el papel en Europa, el Mediterráneo, el Pacífico y Corea, no en Vietnam. Forbes Lithographic y Tudor Press, en Boston, están documentados para la serie; el BEP diseñó, acabó y despachó. La impresión es offset, no intaglio. Las series 641, 661, 681 y 692 tienen caso propio.',
      'Ya tiene ficha el 5 centavos Pick M22a, Friedberg M831, serial D02536728D, emisión regular D–D, número de pliego 66. No está encapsulado. Las demás denominaciones de 481 se publicarán cuando se fotografíen.',
    ],
    tableCaption:
      'Tipología publicada de la serie 481: catálogo Schwan y Pick. No se copian tiradas ni precios de dealer.',
    tableHeaders: ['Denominación', 'Schwan', 'Pick', 'Pliego'],
    tableRows: [
      ['5 centavos', '831', 'P-M22', '84 sujetos'],
      ['10 centavos', '832', 'P-M23', '84 sujetos'],
      ['25 centavos', '833', 'P-M24', '84 sujetos'],
      ['50 centavos', '834', 'P-M25', '84 sujetos'],
      ['1 dólar', '835', 'P-M26', '70 sujetos'],
      ['5 dólares', '836', 'P-M27', '50 sujetos'],
      ['10 dólares', '837', 'P-M28', '50 sujetos'],
    ],
    parentLink: 'Estados Unidos',
    usLead: 'El resto del papel federal, colonial y obsoleto se documenta en la vitrina de Estados Unidos.',
    usLink: 'Estados Unidos',
    vietnamLead: 'Las series usadas solo en Vietnam —641, 661, 681 y 692— están en la vitrina de MPC de Vietnam.',
    vietnamLink: 'MPC - Guerra de Vietnam (1955-1975)',
    factsHeading: 'La serie 481',
    denominationsLabel: 'Denominaciones del tipo',
    denominationsValue:
      'Siete valores: 5, 10, 25 y 50 centavos y 1, 5 y 10 dólares. En esta vitrina, el 5 centavos (US$0,05). Las demás esperan foto y serial.',
    printingLabel: 'Impresión',
    printingValue: 'Litografía offset; Forbes Lithographic y Tudor Press (serie); BEP en diseño y despacho.',
    authorityLabel: 'Autoridad',
    authorityValue: 'Departamento de Defensa. Instrumento de las fuerzas armadas; no es un billete del Tesoro.',
    notVietnamNote:
      'La 481 no es una serie de Vietnam. El teatro vietnamita empieza con la 641 (1965).',
    tableHeading: 'Denominaciones de la serie 481',
    sourcesTitle: 'Fuentes',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
  },
  en: {
    metaTitle: 'United States · Korean War MPC | Notofilia',
    metaDescription:
      'Series 481 (1951–1954): Korean War military scrip. Seven denominations; on exhibit, the 5-cent Pick M22a, serial D02536728D.',
    kicker: 'United States · MPC',
    title: 'MPC - Korean War (1951 - 1954)',
    breadcrumbCurrent: 'MPC - Korean War (1951 - 1954)',
    heroAlt:
      'Contemporary illustration of the Korean theater, 1951–1954: the peninsula, the 38th parallel, and the Panmunjom talks. It is not a period map and not a military payment certificate.',
    intro: [
      'At the height of the Korean War the United States Department of Defense fielded a closed-loop instrument — the Military Payment Certificate, or MPC — to keep wartime inflation out of fragile civilian economies and to cut black-market currency arbitrage. Series 481 entered circulation on 20 June 1951 and was demonetized overnight on 25 May 1954. It was the first MPC issue to leave purely geometric lathework for classical allegorical vignettes.',
      'A military payment certificate is not a Treasury note and not United States legal tender. It circulated only among authorized personnel, on base, and converted into local currency, never the other way. C-Day — a surprise, worldwide conversion — left the outgoing series worthless. Silver Recyclers places the paper in Europe, the Mediterranean, the Pacific, and Korea, not in Vietnam. Forbes Lithographic and Tudor Press, in Boston, are documented for the series; the BEP handled design, finishing, and shipping. Printing is offset, not intaglio. Series 641, 661, 681, and 692 have their own case.',
      'The 5-cent Pick M22a, Friedberg M831, serial D02536728D, regular D–D issue, sheet position 66, already has a note page. It is unslabbed. Further Series 481 denominations will be published as they are photographed.',
    ],
    tableCaption:
      'Published Series 481 typology: Schwan and Pick numbers. Dealer print totals and prices are not copied.',
    tableHeaders: ['Denomination', 'Schwan', 'Pick', 'Sheet'],
    tableRows: [
      ['5 cents', '831', 'P-M22', '84-subject'],
      ['10 cents', '832', 'P-M23', '84-subject'],
      ['25 cents', '833', 'P-M24', '84-subject'],
      ['50 cents', '834', 'P-M25', '84-subject'],
      ['$1', '835', 'P-M26', '70-subject'],
      ['$5', '836', 'P-M27', '50-subject'],
      ['$10', '837', 'P-M28', '50-subject'],
    ],
    parentLink: 'United States',
    usLead: 'The rest of the federal, colonial, and obsolete paper is documented in the United States case.',
    usLink: 'United States',
    vietnamLead: 'The series used only in Vietnam — 641, 661, 681, and 692 — live in the Vietnam MPC case.',
    vietnamLink: 'MPC - Vietnam War (1955-1975)',
    factsHeading: 'Series 481',
    denominationsLabel: 'Type denominations',
    denominationsValue:
      'Seven values: 5, 10, 25, and 50 cents and $1, $5, and $10. In this case, the 5-cent note (US$0.05). The others wait for a photograph and serial.',
    printingLabel: 'Printing',
    printingValue: 'Offset lithography; Forbes Lithographic and Tudor Press (series); BEP for design and shipping.',
    authorityLabel: 'Authority',
    authorityValue: 'Department of Defense. An armed-forces instrument; not a Treasury note.',
    notVietnamNote:
      'Series 481 is not a Vietnam issue. The Vietnam theater begins with Series 641 (1965).',
    tableHeading: 'Series 481 denominations',
    sourcesTitle: 'Sources',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
  },
} as const;

export const MPC_PROGRAM_HERO = {
  src: '/uploads/korean-war-1951-1954-hero.jpg',
  width: 1024,
  height: 441,
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_MPC_PROGRAM_PATH, locale);
}

export type MpcProgramNoteId = '5-centavos-serie-481';

export type MpcProgramNote = {
  id: MpcProgramNoteId;
  chapterId: MpcProgramChapterId;
  valueCents: number;
  path: string;
  pathEn: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const mpcProgramNotes: MpcProgramNote[] = [
  {
    id: '5-centavos-serie-481',
    chapterId: 'serie-481',
    valueCents: 5,
    path: '/coleccion/estados-unidos/mpc/5-centavos-serie-481/',
    pathEn: '/collection/united-states/mpc/5-cents-series-481/',
    pick: 'P#M22a · Fr. M831 · Schwan 831-1',
    serial: 'D02536728D',
    signatures: {
      es: 'Sin firmas (emisión militar; el texto de uso sustituye al firmante)',
      en: 'No signatures (military issue; the use legend stands in place of a signer)',
    },
    printed: {
      es: 'No se ha verificado aquí una tirada del 5 centavos. Las medidas de tipo publicadas son unos 111 × 55 mm, no las de este ejemplar. Circulación de la serie: 20 de junio de 1951 al 25 de mayo de 1954',
      en: 'A printage for this 5-cent note has not been independently verified here. Published type dimensions are about 111 × 55 mm, not measurements of this specimen. Series circulation: 20 June 1951 to 25 May 1954',
    },
    images: {
      composite: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-composite.jpg',
      front: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-front.jpg',
      back: '/images/catalog/estados-unidos/mpc-481-5-d02536728d-back.jpg',
      width: 1024,
      height: 682,
    },
    title: {
      es: '5 centavos · Serie 481',
      en: '5 cents · Series 481',
    },
    kicker: {
      es: 'Estados Unidos · MPC · Serie 481',
      en: 'United States · MPC · Series 481',
    },
    lead: {
      es: 'Anverso con alegoría sentada, globo y libros; reverso con águila y escudo. Serial D02536728D, posición 66. Sin encapsular.',
      en: 'Face with a seated allegory, globe, and books; back with eagle and shield. Serial D02536728D, position 66. Unslabbed.',
    },
    description: {
      es: 'El 5 centavos de la serie 481 (Pick M22a, Friedberg M831) es un certificado de pago militar del Departamento de Defensa, no un billete del Tesoro. No lleva año de calendario: «SERIES 481» es la designación. El anverso muestra a la izquierda una mujer alegórica sentada, con un globo en la mano y libros sobre una columna clásica; el texto «MILITARY PAYMENT CERTIFICATE», el serial D02536728D, «FIVE CENTS» y «SERIES 481» ocupan el resto del campo, sobre un fondo de líneas azul-verdosas y pardo-rojizas. El 66, arriba a la izquierda, es el número de posición en el pliego. El reverso lleva el águila con escudo, ramas de olivo, flechas y la cinta E PLURIBUS UNUM, en azul oscuro sobre un fondo rosa-magenta. El pie reza: FOR USE ONLY IN UNITED STATES MILITARY ESTABLISHMENTS — BY UNITED STATES AUTHORIZED PERSONNEL IN ACCORDANCE WITH APPLICABLE RULES AND REGULATIONS. El bloque D abre y cierra el número: es emisión regular, no un reemplazo. El serial cae por debajo de D05152000D, el extremo publicado para la primera impresión (Schwan 831-1 / S831-1); esa atribución compara el número con la clasificación de seriales, no está escrita en el papel. Las fotografías muestran tono del papel, manchas dispersas y desgaste de bordes y esquinas. No se afirma autenticidad de laboratorio ni un grado numérico.',
      en: 'The Series 481 5-cent note (Pick M22a, Friedberg M831) is a Department of Defense military payment certificate, not a Treasury note. No calendar year is printed: “SERIES 481” is the designation. The face shows at left a seated allegorical woman holding a globe, with books on a classical column; “MILITARY PAYMENT CERTIFICATE,” serial D02536728D, “FIVE CENTS,” and “SERIES 481” occupy the rest of the field over blue-green and reddish-brown linework. The 66 at upper left is the sheet position number. The back carries the eagle with shield, olive branch, arrows, and an E PLURIBUS UNUM ribbon, in dark blue on a pink-magenta field. The legend reads: FOR USE ONLY IN UNITED STATES MILITARY ESTABLISHMENTS — BY UNITED STATES AUTHORIZED PERSONNEL IN ACCORDANCE WITH APPLICABLE RULES AND REGULATIONS. The D block opens and closes the number: it is a regular issue, not a replacement. The serial falls below D05152000D, the published first-printing endpoint (Schwan 831-1 / S831-1); that attribution compares the number with the serial classification and is not written on the note. The photographs show paper toning, scattered spotting, and edge and corner wear. They do not establish laboratory authenticity or a numerical grade.',
    },
    frontCaption: {
      es: 'Anverso del 5 centavos, serie 481, serial D02536728D: alegoría sentada, globo, FIVE CENTS y el 66 de pliego.',
      en: 'Face of the Series 481 5-cent note, serial D02536728D: seated allegory, globe, FIVE CENTS, and sheet number 66.',
    },
    backCaption: {
      es: 'Reverso del 5 centavos, serie 481: águila con escudo y la restricción de uso para personal autorizado.',
      en: 'Back of the Series 481 5-cent note: eagle and shield and the authorized-personnel use legend.',
    },
    scarcity: {
      es: 'El tipo es la emisión regular con letra de prefijo y sufijo (Pick M22a), no la variedad de reemplazo. Silver Recyclers describe los reemplazos de 481 como seriales que cierran con un número; este D02536728D cierra con D. La primera impresión se atribuye por el rango de seriales publicado hasta D05152000D; este ejemplar cae dentro de ese tramo. Esta ficha no inventa una tirada del 5 centavos ni un censo de mercado, y no republica precios de catálogo.',
      en: 'The type is the regular prefix-and-suffix-letter issue (Pick M22a), not the replacement variety. Silver Recyclers describes Series 481 replacements as serials that end with a digit; this D02536728D ends with D. First-printing status is attributed from the published serial range through D05152000D; this example falls in that span. This record does not invent a 5-cent printage or a market census, and it does not republish catalog prices.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/223126',
        es: 'Numista — N#223126, 5 Cents MPC',
        en: 'Numista — N#223126, 5 Cents MPC',
        note: {
          es: 'Confirma P-M22a, 1951, serie 481, papel de unos 111 × 55 mm.',
          en: 'Confirms P-M22a, 1951, Series 481, paper about 111 × 55 mm.',
        },
      },
      {
        href: 'https://antiquemoney.com/military-payment-certificate-values/series-481-military-payment-certificate-value/',
        es: 'Antique Money — serie 481',
        en: 'Antique Money — Series 481',
        note: {
          es: 'Fechas de circulación 20 de junio de 1951–25 de mayo de 1954; Forbes Lithographic y Tudor Press a nivel de serie.',
          en: 'Circulation dates 20 June 1951–25 May 1954; Forbes Lithographic and Tudor Press at series level.',
        },
      },
      {
        href: 'https://www.silverrecyclers.com/blog/military-payment-certificate-series-481.aspx',
        es: 'Silver Recyclers — serie 481',
        en: 'Silver Recyclers — Series 481',
        note: {
          es: 'Lista de teatros; reemplazos con dígito final frente a letra en la emisión regular. Cita el Standard Catalog of United States Paper Money. No se republican precios.',
          en: 'Theater list; replacements with a terminal digit versus a letter on the regular issue. Cites the Standard Catalog of United States Paper Money. Prices are not republished.',
        },
      },
      {
        href: 'https://www.greatcollections.com/Auction-Archive/US-Currency-Prices/34/US-Paper-Money/151/Military-Payment-Certificates',
        es: 'GreatCollections — MPC, clasificación de seriales de la 481',
        en: 'GreatCollections — MPC, Series 481 serial classification',
        note: {
          es: 'S831-1, primera impresión, extremo D05152000D. No se republican precios de subasta.',
          en: 'S831-1, first printing, endpoint D05152000D. Auction prices are not republished.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'MPC - Guerra de Corea (1951 - 1954)',
    collectionLink: 'Estados Unidos',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza e impresión',
    populationHeading: 'Población',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printedLabel: 'Impresión',
    signaturesLabel: 'Firmas',
    serialLabel: 'Número de serie',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'MPC - Korean War (1951 - 1954)',
    collectionLink: 'United States',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    scarcityHeading: 'Scarcity and printage',
    populationHeading: 'Population',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printedLabel: 'Printage',
    signaturesLabel: 'Signatures',
    serialLabel: 'Serial number',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function noteById(id: string): MpcProgramNote | undefined {
  return mpcProgramNotes.find((note) => note.id === id);
}

export function notePath(note: MpcProgramNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: MpcProgramChapterId): MpcProgramNote[] {
  return mpcProgramNotes
    .filter((note) => note.chapterId === chapterId)
    .sort((a, b) => a.valueCents - b.valueCents || a.id.localeCompare(b.id));
}

export const mpcProgramNoteSlugs = mpcProgramNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const mpcProgramNoteDedicatedSlugs = mpcProgramNotes.flatMap((note) => [
  note.path.replace(/^\/|\/$/g, ''),
  note.pathEn.replace(/^\/|\/$/g, ''),
]);

export { USA_MPC_PATH, USA_MPC_PROGRAM_PATH, USA_MPC_PROGRAM_PATH_EN, USA_PATH };
