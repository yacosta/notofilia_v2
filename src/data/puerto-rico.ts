import type { CatalogSource, LocalizedText } from './catalog';

export const PUERTO_RICO_PATH = '/coleccion/puerto-rico/';

export type PuertoRicoNoteId =
  | '25-pesos-1813'
  | '1500-pesos-1869'
  | '1-peso-1869'
  | '1-peso-1895';

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Puerto_Rican_peso',
    es: 'Wikipedia — Peso puertorriqueño',
    en: 'Wikipedia — Puerto Rican peso',
    note: {
      es: 'Situado, papeletas de 1812–1815, Junta Central de 1869 y Billete de Canje de 1895.',
      en: 'The situado, 1812–1815 papeletas, the 1869 Central Republican Board, and the 1895 exchange note.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/PRI/PRI.htm',
    es: 'Bank Note Museum — Puerto Rico (Tesorería Nacional, Ministerio de Ultramar y bancos)',
    en: 'Bank Note Museum — Puerto Rico (National Treasury, Overseas Ministry, and banks)',
  },
  {
    href: 'http://banknote.ws/COLLECTION/countries/AME/PRI/PRI0007.htm',
    es: 'Bank Note Museum — Puerto Rico P-7 (Billete de Canje, 1895)',
    en: 'Bank Note Museum — Puerto Rico P-7 (1895 exchange note)',
  },
  {
    href: 'https://en.numista.com/catalogue/note202441.html',
    es: 'Numista — 1 peso, Billete de Canje (P#7)',
    en: 'Numista — 1 Peso, Billete de Canje (P#7)',
  },
  {
    href: 'https://revistas.ucm.es/index.php/DOCU/article/view/109519',
    es: 'Documenta & Instrumenta — Hallazgos sobre el papel moneda fraccionario de Puerto Rico (s. XIX)',
    en: 'Documenta & Instrumenta — New findings on nineteenth-century fractional paper money in Puerto Rico',
    note: {
      es: 'Documenta las papeletas de 1813–1814 autorizadas por Salvador Meléndez Bruna.',
      en: 'Documents the 1813–1814 papeletas authorized by Salvador Meléndez Bruna.',
    },
  },
  {
    href: 'https://www.coinbooks.org/v29/esylum_v29n07a27.html',
    es: 'The E-Sylum — Papel moneda puertorriqueño',
    en: 'The E-Sylum — Puerto Rican paper money',
    note: {
      es: 'Resume la crisis del situado, las papeletas de 1812–1813 y la amortización de Ramírez hacia 1816.',
      en: 'Summarizes the situado crisis, the 1812–1813 papeletas, and Ramírez’s amortization by 1816.',
    },
  },
  {
    href: 'https://en.numista.com/catalogue/note227942.html',
    es: 'Numista — 8 reales, Tesorería Nacional (P#2, 1813)',
    en: 'Numista — 8 Reales, Tesorería Nacional (P#2, 1813)',
  },
];

export type PuertoRicoNote = {
  id: PuertoRicoNoteId;
  path: string;
  year: number;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
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

export const puertoRicoNotes: PuertoRicoNote[] = [
  {
    id: '25-pesos-1813',
    path: '/coleccion/puerto-rico/tesoreria-nacional-25-pesos-1813/',
    year: 1813,
    pick: 'Ed-PR2 (SC-)',
    serial: '21',
    signatures: {
      es: 'Juan Patiño (tesorero), José Bacener (contador) y V.º B.º de Alejandro Ramírez (intendente)',
      en: 'Juan Patiño (Treasurer), José Bacener (Accountant), and V.º B.º of Alejandro Ramírez (Intendant)',
    },
    printed: {
      es: 'Vale de tesorería de 1813, no una papeleta de circulación; las papeletas provinciales llegaron a 500.000 pesos',
      en: '1813 treasury vale, not a circulating papeleta; provincial papeletas reached 500,000 pesos',
    },
    images: {
      composite: '/images/catalog/puerto-rico/25-pesos-1813-composite.jpg',
      front: '/images/catalog/puerto-rico/25-pesos-1813-front.jpg',
      back: '/images/catalog/puerto-rico/25-pesos-1813-back.jpg',
    },
    title: {
      es: '25 pesos · Tesorería Nacional · 1813',
      en: '25 Pesos · National Treasury · 1813',
    },
    kicker: {
      es: 'Puerto Rico · Vale de tesorería · 4 de mayo de 1813',
      en: 'Puerto Rico · Treasury vale · 4 May 1813',
    },
    lead: {
      es: 'Vale de préstamo de la Tesorería Nacional por veinticinco pesos en moneda provisional de papeletas, al 6 % anual, número 21.',
      en: 'National Treasury loan certificate for twenty-five pesos in provisional papeleta currency, at 6 percent a year, number 21.',
    },
    description: {
      es: 'Este documento no es una de las papeletas de curso corriente, sino un vale de préstamo de la Tesorería Nacional de Puerto Rico, dado el 4 de mayo de 1813. El texto obliga a devolver a D. Juan y Gil veinticinco pesos en moneda provisional de papeletas, a un año de plazo y con interés del 6 % anual en plata efectiva, conforme al acta de la Junta Provincial de Hacienda del 22 de marzo de ese año. El encabezado lee «TESORERÍA NACIONAL DE PUERTO RICO», con sello circular y el número 21. Firman Juan Patiño (tesorero) y José Bacener (contador); el V.º B.º de Alejandro Ramírez, intendente de la Real Hacienda recién llegado el 11 de febrero, aparece junto al sello de la Intendencia. Al pie se lee «Sentada á foxas» y «Anotada». El reverso muestra el texto en transparencia y anotaciones manuscritas sobre el procedimiento de préstamo. Con el estallido de las independencias americanas, el situado que la Corona giraba desde México dejó de llegar. El gobernador Salvador Meléndez Bruna autorizó por Real Orden del 31 de agosto de 1812 una moneda provincial de papel —papeletas— que llegó a 500.000 pesos en 1813. Ramírez saneó la Real Hacienda y amortizó esa emisión hacia 1816.',
      en: 'This document is not a circulating papeleta, but a National Treasury of Puerto Rico loan certificate dated 4 May 1813. The text binds the Treasury to repay D. Juan y Gil twenty-five pesos in provisional papeleta currency after one year, at 6 percent annual interest in effective silver, under the Provincial Treasury Board act of 22 March that year. The heading reads “TESORERÍA NACIONAL DE PUERTO RICO,” with a circular seal and number 21. Juan Patiño (Treasurer) and José Bacener (Accountant) sign; the V.º B.º of Alejandro Ramírez, Intendant of the Royal Treasury who had arrived on 11 February, appears beside the Intendancy stamp. The foot records “Sentada á foxas” and “Anotada.” The back shows the face in show-through plus manuscript notes on the loan procedure. As Spanish American independence wars began, the situado subsidy from Mexico stopped arriving. Governor Salvador Meléndez Bruna authorized provincial paper — papeletas — by royal order of 31 August 1812; the issue reached 500,000 pesos in 1813. Ramírez restored the Royal Treasury and amortized that paper by 1816.',
    },
    frontCaption: {
      es: 'Anverso del vale de 25 pesos, número 21: Tesorería Nacional de Puerto Rico, 4 de mayo de 1813.',
      en: 'Face of the 25-peso vale, number 21: National Treasury of Puerto Rico, 4 May 1813.',
    },
    backCaption: {
      es: 'Reverso del vale de 25 pesos, con el texto en transparencia y anotaciones de préstamo.',
      en: 'Back of the 25-peso vale, with show-through text and loan annotations.',
    },
    scarcity: {
      es: 'Los vales y papeletas de la Tesorería de 1813 —conocidos entre coleccionistas como «la emisión del corderito» por el cordero pascual de las papeletas de 8 reales (P#2)— se cuentan entre las piezas más raras de la notafilia puertorriqueña. El papel frágil y la amortización casi total hacia 1816 dejaron muy pocos supervivientes. Este ejemplar es un vale de préstamo, no una papeleta de circulación; no lleva número Pick de las emisiones de 8 reales.',
      en: 'Treasury vales and papeletas of 1813 — known among collectors as the “little lamb” issue for the Paschal Lamb on the 8-reales papeletas (P#2) — are among the rarest Puerto Rican notaphily. Fragile paper and near-total amortization by 1816 left very few survivors. This example is a loan certificate, not a circulating papeleta, and does not carry a Pick number from the 8-reales issues.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número. La pieza se presenta en estado original, sin encapsular.',
      en: 'A PMG or PCGS census for this number has not been independently verified. The piece is shown in original, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/catalogue/note227942.html',
        es: 'Numista — 8 reales, Tesorería Nacional, P#2 (papeleta de circulación, distinta de este vale)',
        en: 'Numista — 8 Reales, Tesorería Nacional, P#2 (circulating papeleta, distinct from this vale)',
      },
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/PRI/PRI0002.htm',
        es: 'Bank Note Museum — Puerto Rico P-2',
        en: 'Bank Note Museum — Puerto Rico P-2',
      },
    ],
  },
  {
    id: '1500-pesos-1869',
    path: '/coleccion/puerto-rico/junta-central-cuba-1869/',
    year: 1869,
    pick: '—',
    serial: '32',
    signatures: {
      es: 'Por el tesorero (Francisco Fesser en la Junta de 1869)',
      en: 'For the Treasurer (Francisco Fesser of the 1869 Junta)',
    },
    printed: {
      es: 'Recibo interno de contribución; fuera del catálogo Pick de papel moneda',
      en: 'Internal contribution receipt; outside the Pick paper-money catalog',
    },
    images: {
      composite: '/images/catalog/puerto-rico/1500-pesos-1869-composite.jpg',
      front: '/images/catalog/puerto-rico/1500-pesos-1869-front.jpg',
      back: '/images/catalog/puerto-rico/1500-pesos-1869-back.jpg',
    },
    title: {
      es: '1.500 pesos · Junta Central · 1869',
      en: '1,500 Pesos · Central Junta · 1869',
    },
    kicker: {
      es: 'Nueva York · Junta Central Republicana de Cuba y Puerto Rico',
      en: 'New York · Central Republican Board of Cuba and Puerto Rico',
    },
    lead: {
      es: 'Recibo de contribución de mil quinientos pesos, n.º 32, fechado en Nueva York el 16 de junio de 1869, convertible en bonos de la República de Cuba.',
      en: 'Contribution receipt for one thousand five hundred pesos, No. 32, dated New York, 16 June 1869, convertible into bonds of the Republic of Cuba.',
    },
    description: {
      es: 'Tras el Grito de Yara del 10 de octubre de 1868, exiliados de Cuba y Puerto Rico organizaron en Nueva York la Junta Central Republicana de Cuba y Puerto Rico, presidida por José Morales Lemus, para recaudar fondos y apoyar la Guerra de los Diez Años. El 1 de junio de 1869 el gobierno de la República de Cuba en Armas autorizó un empréstito de veinte millones de pesos. Este recibo, n.º 32, fechado dos semanas después, documenta que el ciudadano Pedro Fernández Criado entregó 1.500 pesos en papel «con que contribuye para auxiliar la causa de la Independencia de Cuba», con promesa de canjearlos por bonos de la primera emisión. Una viñeta alegórica —figura femenina con el escudo de la estrella solitaria— ocupa la izquierda; a la derecha, el número en rojo. Firma «Por El Tesorero», cargo que ocupó Francisco Fesser. El reverso lleva endosos manuscritos y los sellos «REPÚBLICA DE CUBA» y «ARCHIVO NACIONAL», prueba de su paso por los fondos documentales cubanos. Aunque emitido para Cuba, el nombre de la Junta une ambas islas: Betances y Hostos veían una sola causa antillana frente a España.',
      en: 'After the Grito de Yara of 10 October 1868, Cuban and Puerto Rican exiles in New York formed the Central Republican Board of Cuba and Puerto Rico, chaired by José Morales Lemus, to raise funds for the Ten Years’ War. On 1 June 1869 the Republic of Cuba in Arms authorized a twenty-million-peso loan. This receipt, No. 32, dated two weeks later, records that citizen Pedro Fernández Criado paid 1,500 pesos in paper “to aid the cause of the Independence of Cuba,” to be exchanged for bonds of the first issue. An allegorical vignette — a female figure with the lone-star shield — sits at left; the number is in red at right. It is signed “Por El Tesorero,” the office held by Francisco Fesser. The back has manuscript endorsements and “REPÚBLICA DE CUBA” and “ARCHIVO NACIONAL” stamps, evidence it later entered Cuban archival holdings. Issued for Cuba, the Junta’s name still joins both islands: Betances and Hostos treated Antillean independence as one cause against Spain.',
    },
    frontCaption: {
      es: 'Anverso del recibo n.º 32: Junta Central Republicana de Cuba y Puerto Rico, 1.500 pesos, Nueva York, 1869.',
      en: 'Face of receipt No. 32: Central Republican Board of Cuba and Puerto Rico, 1,500 pesos, New York, 1869.',
    },
    backCaption: {
      es: 'Reverso del recibo n.º 32, con endosos y sellos de la República de Cuba y del Archivo Nacional.',
      en: 'Back of receipt No. 32, with endorsements and Republic of Cuba and National Archive stamps.',
    },
    scarcity: {
      es: 'Los recibos de contribución de la Junta circularon en un ámbito reducido y clandestino, fuera del comercio ordinario. No tienen número Pick: son documentos internos de la diáspora, no papel moneda de un Estado reconocido. Los que sobreviven —sobre todo con sellos de archivo cubano— son extraordinariamente escasos.',
      en: 'Junta contribution receipts circulated in a narrow, clandestine circle, outside ordinary commerce. They have no Pick number: they are diaspora internal documents, not paper money of a recognized state. Survivors — especially with Cuban archive stamps — are extraordinarily scarce.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo de terceros para el n.º 32. La pieza se muestra sin encapsular.',
      en: 'A third-party census for No. 32 has not been independently verified. The piece is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Puerto_Rican_peso',
        es: 'Wikipedia — Peso puertorriqueño (sección de la Junta Central de 1869)',
        en: 'Wikipedia — Puerto Rican peso (1869 Central Board section)',
      },
    ],
  },
  {
    id: '1-peso-1869',
    path: '/coleccion/puerto-rico/republica-de-cuba-1-peso-1869/',
    year: 1869,
    pick: '—',
    serial: '13085 · B',
    signatures: {
      es: 'Tesorero de la Junta y José Morales Lemus (presidente)',
      en: 'Junta Treasurer and José Morales Lemus (President)',
    },
    printed: {
      es: 'Billete de deuda de la emisión de Nueva York, 17 de agosto de 1869; empréstito de 20 millones de pesos',
      en: 'Debt note of the New York issue, 17 August 1869; 20-million-peso loan',
    },
    images: {
      composite: '/images/catalog/puerto-rico/1-peso-1869-composite.jpg',
      front: '/images/catalog/puerto-rico/1-peso-1869-front.jpg',
      back: '/images/catalog/puerto-rico/1-peso-1869-back.jpg',
    },
    title: {
      es: '1 peso · República de Cuba · 1869',
      en: '1 Peso · Republic of Cuba · 1869',
    },
    kicker: {
      es: 'Nueva York · La República de Cuba · Junta Central',
      en: 'New York · The Republic of Cuba · Central Junta',
    },
    lead: {
      es: 'Billete de un peso n.º 13085, serie B, emitido el 17 de agosto de 1869 en nombre de la República de Cuba por medio de la Junta Central.',
      en: 'One-peso note No. 13085, Series B, issued 17 August 1869 in the name of the Republic of Cuba through the Central Junta.',
    },
    description: {
      es: 'A diferencia del recibo de contribución de esta misma vitrina, este es uno de los billetes de deuda que la Junta emitió directamente en nombre de La República de Cuba en Armas, el 17 de agosto de 1869, dentro del empréstito de veinte millones de pesos. Wikipedia recoge que ese día la Junta puso en circulación valores de 1, 5, 10 y 20 pesos como alternativa asequible a los bonos de 100, 500 y 1.000 pesos. El encabezado lee «LA REPÚBLICA DE CUBA, por medio de la Junta Central Republicana de Cuba y Puerto Rico». El texto reconoce deuda de un peso al portador, convertible en bonos a presentación en la Tesorería de la Junta en cantidades de cien pesos o más. Contadores circulares con el «1» y orlas de guilloché austero, propios de una emisión de guerra. El número 13085 va en rojo; firman el tesorero y José Morales Lemus, presidente de la Junta hasta su muerte en 1870. El reverso es el anverso en transparencia, sin impresión de seguridad adicional. Forma pareja con el recibo de 1.500 pesos: contribución voluntaria de un lado, papel de guerra del otro. Ninguno de esos valores se redimió al fracasar la Guerra de los Diez Años.',
      en: 'Unlike the contribution receipt in this same case, this is one of the debt notes the Junta issued directly in the name of the Republic of Cuba in Arms on 17 August 1869, under the twenty-million-peso loan. Wikipedia records that on that day the Junta released 1, 5, 10, and 20 peso values as an affordable alternative to 100, 500, and 1,000 peso bonds. The heading reads “LA REPÚBLICA DE CUBA, por medio de la Junta Central Republicana de Cuba y Puerto Rico.” The text acknowledges a one-peso debt to the bearer, convertible into bonds when presented at the Junta Treasury in amounts of one hundred pesos or more. Circular “1” counters and austere guilloche belong to a wartime issue. Number 13085 is in red; the treasurer and José Morales Lemus, Junta president until his death in 1870, sign. The back is the face in show-through, with no extra security printing. It pairs with the 1,500-peso receipt: voluntary contribution on one side, war paper on the other. None of those values were redeemed after the Ten Years’ War failed.',
    },
    frontCaption: {
      es: 'Anverso del 1 peso n.º 13085, serie B: La República de Cuba por medio de la Junta Central, Nueva York, 1869.',
      en: 'Face of the 1-peso No. 13085, Series B: The Republic of Cuba through the Central Junta, New York, 1869.',
    },
    backCaption: {
      es: 'Reverso del 1 peso de 1869, sin impresión propia, con el anverso en transparencia.',
      en: 'Back of the 1869 1-peso note, unprinted, showing the face in show-through.',
    },
    scarcity: {
      es: 'Wikipedia indica que estos billetes circularon de forma clandestina en América y el Caribe y que no se redimieron. El 1 peso beige es la denominación menor de la serie. Sin número Pick confirmado en las fuentes consultadas; se cataloga como bono de deuda de la República de Cuba en Armas, emisión de Nueva York (1869).',
      en: 'Wikipedia notes that these notes circulated clandestinely in the Americas and the Caribbean and were never redeemed. The beige 1 peso is the lowest denomination of the series. No confirmed Pick number appears in the sources consulted; it is catalogued as a Republic of Cuba in Arms debt note, New York issue (1869).',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el n.º 13085. La pieza se muestra sin encapsular.',
      en: 'A PMG or PCGS census for No. 13085 has not been independently verified. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Puerto_Rican_peso',
        es: 'Wikipedia — Peso puertorriqueño (billetes de la Junta, 17 de agosto de 1869)',
        en: 'Wikipedia — Puerto Rican peso (Junta notes, 17 August 1869)',
      },
    ],
  },
  {
    id: '1-peso-1895',
    path: '/coleccion/puerto-rico/billete-de-canje-1-peso-1895/',
    year: 1895,
    pick: 'P#7a',
    serial: '4546454',
    signatures: {
      es: 'El Director de Hacienda, el Ordenador de Pagos y el Interventor',
      en: 'The Director of Finance, the Paymaster, and the Comptroller',
    },
    printed: {
      es: 'Unos 5.000.000 de billetes (Ministerio de Ultramar; Wikipedia / literatura de la serie)',
      en: 'About 5,000,000 notes (Overseas Ministry; Wikipedia / series literature)',
    },
    images: {
      composite: '/images/catalog/puerto-rico/1-peso-1895-composite.jpg',
      front: '/images/catalog/puerto-rico/1-peso-1895-front.jpg',
      back: '/images/catalog/puerto-rico/1-peso-1895-back.jpg',
    },
    title: {
      es: '1 peso · Billete de Canje · 1895',
      en: '1 Peso · Exchange Note · 1895',
    },
    kicker: {
      es: 'Puerto Rico · Ministerio de Ultramar · 17 de agosto de 1895',
      en: 'Puerto Rico · Overseas Ministry · 17 August 1895',
    },
    lead: {
      es: 'Billete de Canje de un peso, P#7a, serie 4546454, con el retrato de Juan Ponce de León. Impreso por P. Maura en Madrid.',
      en: 'One-peso exchange note, P#7a, serial 4546454, with the portrait of Juan Ponce de León. Printed by P. Maura in Madrid.',
    },
    description: {
      es: 'Durante el siglo XIX Puerto Rico careció de moneda propia y dependió de plata extranjera —sobre todo pesos mexicanos y dólares—. Decretos de 1870, 1884 y 1894 intentaron controlarla con contramarcas y retiros. El Real Decreto del 17 de agosto de 1895 creó este Billete de Canje: la plata extranjera se recogía a cambio de estos papeles, se enviaba a España y se acuñaba la moneda provincial; el billete se redimía después —el «segundo canje»—, descontados transporte y acuñación. Vale un peso en plata de 25 gramos, ley .900. El Ministerio de Ultramar imprimió unos cinco millones, cantidad que excedió la plata recogida. El anverso, en negro sobre fondo amarillo, muestra a Juan Ponce de León a la izquierda, «BILLETE DE CANJE» y «VALE UN PESO», el número 4546454 en rojo y las tres firmas de Hacienda. A los lados, «MINISTERIO DE ULTRAMAR»; sello en seco con velero y la leyenda «Canje de Puerto Rico». El reverso, en verde-azul, lleva el escudo real de España. Bank Note Museum y Numista lo catalogan como P#7; esta pieza, con talonario visible, corresponde a P#7a. El sobrante lo adquirió Leopoldo Cerecedo Millán, que lo reselló como recuerdo hacia 1920; los ejemplares sin resello, como este, son los más buscados. Tres años después, en 1898, España cedió la isla a Estados Unidos.',
      en: 'Through the nineteenth century Puerto Rico lacked its own coin and ran on foreign silver — mainly Mexican pesos and U.S. dollars. Decrees of 1870, 1884, and 1894 tried to control that mix with countermarks and withdrawals. The royal decree of 17 August 1895 created this exchange note: foreign silver was taken in for these papers, shipped to Spain, and coined as provincial currency; the note was later redeemed — the “second exchange” — minus transport and minting costs. It is worth one peso in 25 grams of .900 silver. The Overseas Ministry printed about five million, more than the silver collected. The face, black on yellow, shows Juan Ponce de León at left, “BILLETE DE CANJE” and “VALE UN PESO,” red serial 4546454, and the three finance signatures. “MINISTERIO DE ULTRAMAR” runs on the sides; a dry seal shows a sailing ship and “Canje de Puerto Rico.” The blue-green back carries the royal arms of Spain. Bank Note Museum and Numista list it as P#7; this example, with visible counterfoil, is P#7a. Leopoldo Cerecedo Millán later bought the surplus and overprinted it as a souvenir around 1920; unstamped notes such as this are the ones collectors want. Three years later, in 1898, Spain ceded the island to the United States.',
    },
    frontCaption: {
      es: 'Anverso del Billete de Canje de 1 peso, P#7a, serie 4546454, con Ponce de León y el sello en seco.',
      en: 'Face of the 1-peso exchange note, P#7a, serial 4546454, with Ponce de León and the dry seal.',
    },
    backCaption: {
      es: 'Reverso verde-azul del Billete de Canje, con el escudo real de España y la cartela «BILLETE DE CANJE».',
      en: 'Blue-green back of the exchange note, with the royal arms of Spain and the “BILLETE DE CANJE” tablet.',
    },
    scarcity: {
      es: 'La tirada de cinco millones hace del tipo un papel relativamente asequible frente a las papeletas de 1813 o los documentos de 1869. Numista distingue P#7a (talonario completo), P#7b (parcial) y P#7c (sin talonario); el índice de rareza de Numista es 75. Los resellos conmemorativos de Cerecedo Millán son más frecuentes que los ejemplares limpios.',
      en: 'A five-million printage makes the type more available than the 1813 papeletas or the 1869 documents. Numista separates P#7a (full counterfoil), P#7b (partial), and P#7c (none); its rarity index is 75. Cerecedo Millán souvenir overprints are more common than clean examples.',
    },
    population: {
      es: 'PMG publica precios de P#7, pero no se ha verificado aquí un censo concreto para la serie 4546454. La pieza se muestra sin encapsular.',
      en: 'PMG publishes prices for P#7, but a specific census for serial 4546454 has not been verified here. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/catalogue/note202441.html',
        es: 'Numista — 1 peso, Billete de Canje, P#7',
        en: 'Numista — 1 Peso, Billete de Canje, P#7',
      },
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/PRI/PRI0007.htm',
        es: 'Bank Note Museum — Puerto Rico P-7',
        en: 'Bank Note Museum — Puerto Rico P-7',
      },
      {
        href: 'https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1745637',
        es: 'PMG — Guía de precios, 1 peso de Puerto Rico (1895)',
        en: 'PMG — Price guide, Puerto Rico 1 Peso (1895)',
      },
    ],
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Puerto Rico · Emisiones coloniales y de transición | Notofilia',
    metaDescription:
      'Catálogo de papel moneda puertorriqueño del siglo XIX: vale de la Tesorería Nacional de 1813, documentos de la Junta Central de 1869 y el Billete de Canje de 1895.',
    kicker: 'Puerto Rico · Siglo XIX',
    title: 'Emisiones coloniales y de transición',
    heroAlt:
      'Mapa vintage panorámico en relieve 3D de Puerto Rico sobre pergamino, con El Morro, el Capitolio, una laguna turquesa, un coquí, una rosa de los vientos y el título Puerto Rico',
    intro: [
      'Puerto Rico fue, en 1766, la primera provincia de ultramar española que imprimió papeletas de 8 reales. Durante siglos el situado mexicano sostuvo las arcas de la isla; cuando las independencias americanas cortaron ese subsidio, el gobernador Salvador Meléndez Bruna autorizó, el 31 de agosto de 1812, una moneda provincial de papel. En 1813 la emisión de papeletas llegó a 500.000 pesos. El intendente Alejandro Ramírez, llegado el 11 de febrero de 1813, las amortizó hacia 1816. De ese saneamiento sobrevive en esta vitrina un vale de tesorería de 25 pesos —préstamo al 6 %, no papeleta de circulación— firmado por Patiño, Bacener y Ramírez.',
      'El descrédito de aquel papel detuvo nuevas emisiones durante décadas. El papel volvió con la Guerra de los Diez Años. En Nueva York, la Junta Central Republicana de Cuba y Puerto Rico —presidida por José Morales Lemus, con el eco de Betances y Hostos— recaudó fondos para ambas islas. El 1 de junio de 1869 la República de Cuba en Armas autorizó un empréstito de veinte millones de pesos. Esta colección guarda un recibo de contribución de 1.500 pesos (n.º 32) y un billete de deuda de 1 peso (n.º 13085, serie B) del 17 de agosto de 1869. Ninguno se redimió.',
      'A finales de siglo la isla seguía sin moneda propia: pesos mexicanos, dólares y contramarcas de 1884. El Real Decreto del 17 de agosto de 1895 creó el Billete de Canje de 1 peso (P#7): instrumento efímero para recoger la plata extranjera y acuñar en Madrid la moneda provincial. El Ministerio de Ultramar imprimió unos cinco millones, con el retrato de Juan Ponce de León. El sobrante lo reselló Leopoldo Cerecedo Millán como recuerdo hacia 1920. Tres años después del decreto, el Tratado de París cerró el capítulo colonial español.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Cuatro documentos únicos, en la misma fila de izquierda a derecha por fecha: el vale de 1813, el recibo y el peso de 1869, y el Billete de Canje de 1895.',
    viewNote: 'Ver la ficha',
    sourcesTitle: 'Fuentes',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    gradeLabel: 'Grado',
  },
  en: {
    metaTitle: 'Puerto Rico · Colonial and transition issues | Notofilia',
    metaDescription:
      'Catalog of nineteenth-century Puerto Rican paper money: the 1813 National Treasury vale, 1869 Central Junta documents, and the 1895 exchange note.',
    kicker: 'Puerto Rico · Nineteenth century',
    title: 'Colonial and transition issues',
    heroAlt:
      'Vintage panoramic 3D relief map of Puerto Rico on parchment, with El Morro, the Capitol, a turquoise lagoon, a coquí, a compass rose, and the title Puerto Rico',
    intro: [
      'In 1766 Puerto Rico became the first Spanish overseas province to print 8-real papeletas. For centuries the Mexican situado propped up the island treasury; when Spanish American independence cut that subsidy, Governor Salvador Meléndez Bruna authorized provincial paper on 31 August 1812. By 1813 the papeleta issue reached 500,000 pesos. Intendant Alejandro Ramírez, who arrived on 11 February 1813, amortized it by 1816. From that cleanup this case keeps a 25-peso treasury vale — a 6 percent loan, not a circulating papeleta — signed by Patiño, Bacener, and Ramírez.',
      'The disgrace of that paper stopped new issues for decades. Paper returned with the Ten Years’ War. In New York the Central Republican Board of Cuba and Puerto Rico — chaired by José Morales Lemus, with Betances and Hostos in the same orbit — raised funds for both islands. On 1 June 1869 the Republic of Cuba in Arms authorized a twenty-million-peso loan. This collection holds a 1,500-peso contribution receipt (No. 32) and a 1-peso debt note (No. 13085, Series B) of 17 August 1869. Neither was redeemed.',
      'At century’s end the island still lacked its own coin: Mexican pesos, dollars, and 1884 fleur-de-lis countermarks. The royal decree of 17 August 1895 created the 1-peso exchange note (P#7): a short-lived instrument to gather foreign silver and strike provincial coin in Madrid. The Overseas Ministry printed about five million, with Juan Ponce de León’s portrait. Leopoldo Cerecedo Millán later overprinted the surplus as a souvenir around 1920. Three years after the decree, the Treaty of Paris closed the Spanish colonial chapter.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Four unique documents in one row, left to right by date: the 1813 vale, the 1869 receipt and peso, and the 1895 exchange note.',
    viewNote: 'Open the note page',
    sourcesTitle: 'Sources',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    gradeLabel: 'Grade',
  },
} as const;

export const notePageCopy = {
  es: {
    seriesLink: 'Emisiones coloniales y de transición',
    collectionLink: 'Puerto Rico',
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
    seriesLink: 'Colonial and transition issues',
    collectionLink: 'Puerto Rico',
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

export function noteById(id: string): PuertoRicoNote | undefined {
  return puertoRicoNotes.find((note) => note.id === id);
}

export function notePath(note: PuertoRicoNote, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${note.path}` : note.path;
}

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${PUERTO_RICO_PATH}` : PUERTO_RICO_PATH;
}

export const catalogNoteSlugs = puertoRicoNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const dedicatedCatalogPaths = new Set<string>(['coleccion/puerto-rico', ...catalogNoteSlugs]);
