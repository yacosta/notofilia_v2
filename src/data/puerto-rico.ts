import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export const PUERTO_RICO_PATH = '/coleccion/puerto-rico/';

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
    href: 'https://doi.org/10.5209/docu.81329',
    es: 'Documenta & Instrumenta — Canje de la moneda mexicana por el peso provincial (1895–1896)',
    en: 'Documenta & Instrumenta — Exchange of Mexican currency for the provincial peso (1895–1896)',
    note: {
      es: 'Real Decreto de 17 de agosto de 1895, talonarios del Billete de Canje y expediente AHN Ultramar 6316.',
      en: 'Royal decree of 17 August 1895, exchange-note counterfoils, and AHN Ultramar file 6316.',
    },
  },
  {
    href: 'http://biografiadelasriquezaspr.weebly.com/monedas.html',
    es: 'Biografía de las Riquezas de Puerto Rico — Monedas',
    en: 'Biography of the Riches of Puerto Rico — Coins',
    note: {
      es: 'Macuquinas, contramarcas de 1884 y equivalencia del billete de canje (25 g plata .900).',
      en: 'Macuquinas, 1884 countermarks, and the exchange-note silver equivalent (25 g .900).',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Puerto Rico · Emisiones coloniales y de transición | Notofilia',
    metaDescription:
      'Vitrina de papel moneda puertorriqueño del siglo XIX: recibo de la Junta Central de 1869 y Billete de Canje de 1 peso de 1895.',
    kicker: 'Puerto Rico · Siglo XIX',
    title: 'Emisiones coloniales y de transición',
    heroAlt:
      'Mapa vintage panorámico en relieve 3D de Puerto Rico sobre pergamino, con El Morro, Viejo San Juan, un coquí, una rosa de los vientos y el título Puerto Rico',
    intro: [
      'Puerto Rico fue, en 1766, la primera provincia de ultramar española que imprimió papeletas de 8 reales. Durante siglos el situado mexicano sostuvo las arcas de la isla; cuando las independencias americanas cortaron ese subsidio, el gobernador Salvador Meléndez Bruna autorizó, el 31 de agosto de 1812, una moneda provincial de papel. En 1813 la emisión de papeletas llegó a 500.000 pesos. El intendente Alejandro Ramírez, llegado el 11 de febrero de 1813, las amortizó hacia 1816.',
      'El descrédito de aquel papel detuvo nuevas emisiones durante décadas. El papel volvió con la Guerra de los Diez Años. Desde Nueva York, la Junta Central Republicana de Cuba y Puerto Rico —presidida por José Morales Lemus, con el secretario puertorriqueño Dr. José Francisco Basora— sirvió como apoyo gubernamental en el exilio: recaudar fondos, administrar las finanzas exteriores de la República de Cuba en Armas y enlazar la política anticolonial cubana y puertorriqueña entre donantes, imprentas y comunidades de exiliados. El 1 de junio de 1869 la República autorizó un empréstito de veinte millones de pesos; semanas después, Morales Lemus y Basora fueron detenidos bajo las leyes de neutralidad estadounidenses.',
      'A finales de siglo la isla seguía sin moneda propia: macuquinas desgastadas, pesos mexicanos, dólares Morgan y otras piezas de plata extranjera —muchas contramarcadas con flor de lis desde 1884— saturaban el comercio. El Real Decreto del 17 de agosto de 1895 creó el Billete de Canje de 1 peso (Pick 7): instrumento efímero, equivalente a 25 g de plata .900, para recoger esa plata y acuñar en Madrid la moneda provincial. Tres años después del decreto, el Tratado de París cerró el capítulo colonial español.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Recibo de contribución de la Junta Central de 1869 (N.º 32, bajo) y Billete de Canje de 1 peso de 1895 (P#7b, serial radar 4548454).',
    holdingsAria: 'Billetes de Puerto Rico en la colección',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'Puerto Rico · Colonial and transition issues | Notofilia',
    metaDescription:
      'Case for nineteenth-century Puerto Rican paper money: the 1869 Central Board receipt and the 1895 1-peso exchange note.',
    kicker: 'Puerto Rico · Nineteenth century',
    title: 'Colonial and transition issues',
    heroAlt:
      'Vintage panoramic 3D relief map of Puerto Rico on parchment, with El Morro, Old San Juan, a coquí, a compass rose, and the title Puerto Rico',
    intro: [
      'In 1766 Puerto Rico became the first Spanish overseas province to print 8-real papeletas. For centuries the Mexican situado propped up the island treasury; when Spanish American independence cut that subsidy, Governor Salvador Meléndez Bruna authorized provincial paper on 31 August 1812. By 1813 the papeleta issue reached 500,000 pesos. Intendant Alejandro Ramírez, who arrived on 11 February 1813, amortized it by 1816.',
      'The disgrace of that paper stopped new issues for decades. Paper returned with the Ten Years’ War. From New York, the Central Republican Board of Cuba and Puerto Rico — chaired by José Morales Lemus, with Puerto Rican secretary Dr. José Francisco Basora — served as a government-in-exile support body: fundraising, managing the Republic of Cuba in Arms’ external finances, and linking Cuban and Puerto Rican anti-colonial politics among donors, printers, and exile communities. On 1 June 1869 the Republic authorized a twenty-million-peso loan; weeks later Morales Lemus and Basora were arrested under U.S. neutrality laws.',
      'At century’s end the island still lacked its own coin: worn macuquinas, Mexican pesos, Morgan dollars, and other foreign silver — much of it fleur-de-lis countermarked from 1884 — flooded commerce. The royal decree of 17 August 1895 created the 1-peso exchange note (Pick 7): a short-lived instrument, equivalent to 25 g of .900 silver, to gather that silver and strike provincial coin in Madrid. Three years after the decree, the Treaty of Paris closed the Spanish colonial chapter.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      '1869 Central Board contribution receipt (No. 32, low) and 1895 1-peso exchange note (P#7b, radar serial 4548454).',
    holdingsAria: 'Puerto Rico banknotes in the collection',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
  },
} as const;

export type PuertoRicoNoteId = 'junta-central-cuba-1869' | 'billete-de-canje-1-peso-1895';

export type PuertoRicoNote = {
  id: PuertoRicoNoteId;
  path: string;
  pick: string;
  serial: string;
  serial_display: string;
  serial_kind: 'low' | 'fancy' | 'ordinary';
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
    frontWidth: number;
    frontHeight: number;
    backWidth: number;
    backHeight: number;
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
    id: 'junta-central-cuba-1869',
    path: '/coleccion/puerto-rico/junta-central-cuba-1869/',
    pick: 'Recibo convertible',
    serial: '32',
    serial_display: 'N.º 32',
    serial_kind: 'low',
    signatures: {
      es: 'Por El Tesorero (firma autógrafa); beneficiario manuscrito: Ciudadano Pedro Ferrandiz (lectura tentativa)',
      en: 'For the Treasurer (autograph signature); handwritten payee: Citizen Pedro Ferrandiz (tentative reading)',
    },
    printed: {
      es: 'Litografiado en Nueva York por Sarony & Co. No es moneda de curso: instrumento de recaudación revolucionaria convertible en bonos. Esta ficha no inventa una tirada para el tipo ni para el N.º 32.',
      en: 'Lithographed in New York by Sarony & Co. Not circulating currency: a revolutionary fundraising instrument convertible into bonds. This record does not invent a printage for the type or for No. 32.',
    },
    images: {
      composite: '/images/catalog/puerto-rico/pr-1869-junta-central-32-composite.jpg',
      front: '/images/catalog/puerto-rico/pr-1869-junta-central-32-front.jpg',
      back: '/images/catalog/puerto-rico/pr-1869-junta-central-32-back.jpg',
      frontWidth: 1440,
      frontHeight: 960,
      backWidth: 1440,
      backHeight: 960,
    },
    title: {
      es: '1.500 pesos · Recibo de contribución · 1869',
      en: '1,500 Pesos · Contribution Receipt · 1869',
    },
    kicker: {
      es: 'Junta Central Republicana de Cuba y Puerto Rico · Nueva York',
      en: 'Central Republican Board of Cuba and Puerto Rico · New York',
    },
    lead: {
      es: 'Recibo de contribución a la independencia de Cuba, litografiado en Nueva York el 15 de junio de 1869. N.º 32 — número bajo — por mil quinientos pesos, convertible en bonos de la República de Cuba.',
      en: 'Contribution receipt toward Cuban independence, lithographed in New York on 15 June 1869. No. 32 — a low document number — for one thousand five hundred pesos, convertible into bonds of the Republic of Cuba.',
    },
    description: {
      es: 'La Junta Central Republicana de Cuba y Puerto Rico —cuartel general político, diplomático y financiero de la insurgencia desde Nueva York, presidida por José Morales Lemus y con el secretario Dr. José Francisco Basora— emitió recibos como este para recaudar fondos y afianzar la deuda soberana prometida por la República de Cuba en Armas, apenas ocho meses después del Grito de Yara (octubre de 1868). Este N.º 32, fechado el 15 de junio de 1869, cae en las semanas previas a las detenciones de junio bajo las leyes de neutralidad estadounidenses. El texto impreso reconoce haber recibido del ciudadano Pedro Ferrandiz —lectura tentativa por la cursiva— la suma de mil quinientos pesos «para auxiliar la causa de la independencia de Cuba», y declara el recibo convertible en bonos de la República de Cuba «del tipo que se emita en la primera emisión». El anverso litografiado por Sarony & Co. muestra a la izquierda una figura alegórica de la Libertad junto a un escudo con una sola estrella —emblema visual de la república imaginada—, el N.º 32 en rojo, la fecha manuscrita 15 de junio de 1869 y la firma del tesorero bajo «Por El Tesorero». No es papel moneda al uso: es un título de deuda revolucionaria emitido antes de que existiera un estado cubano soberano. El reverso lleva sello «Archivo Nacional», matriz de registro de la República de Cuba (CAJA 196 / NÚMERO 307) y endosos manuscritos que la fotografía no permite transcribir con plena seguridad; manchas, pliegues y desgaste perimetral son coherentes con un documento decimonónico en uso.',
      en: 'The Central Republican Board of Cuba and Puerto Rico — political, diplomatic, and financial headquarters of the insurgency from New York, chaired by José Morales Lemus with secretary Dr. José Francisco Basora — issued receipts like this one to raise funds and build credibility for the sovereign debt promised by the Republic of Cuba in Arms, only about eight months after the Grito de Yara (October 1868). This No. 32, dated 15 June 1869, falls in the weeks before the June arrests under U.S. neutrality laws. The printed text acknowledges receipt from Citizen Pedro Ferrandiz — a tentative reading of the cursive — of one thousand five hundred pesos “to aid the cause of the independence of Cuba,” and declares the receipt convertible into bonds of the Republic of Cuba “of the type to be issued in the first emission.” The face lithographed by Sarony & Co. shows at left an allegorical Liberty beside a shield with a single star — visual emblem of the republic yet to exist — red No. 32, the handwritten date 15 June 1869, and the treasurer’s signature under “For the Treasurer.” This is not ordinary currency: it is revolutionary debt paper issued before a sovereign Cuban state existed. The back bears an Archivo Nacional stamp, a Republic of Cuba registration box (CAJA 196 / NUMERO 307), and handwritten endorsements the photograph does not support transcribing with full confidence; browning, stains, folds, and edge wear are consistent with a nineteenth-century working document.',
    },
    frontCaption: {
      es: 'Anverso del recibo N.º 32: Junta Central Republicana de Cuba y Puerto Rico, mil quinientos pesos, 15 de junio de 1869, litografía Sarony & Co.',
      en: 'Face of receipt No. 32: Central Republican Board of Cuba and Puerto Rico, one thousand five hundred pesos, 15 June 1869, Sarony & Co. lithograph.',
    },
    backCaption: {
      es: 'Reverso con sello Archivo Nacional, matriz CAJA 196 / NÚMERO 307 y endosos manuscritos.',
      en: 'Back with Archivo Nacional stamp, CAJA 196 / NUMERO 307 registration, and handwritten endorsements.',
    },
    scarcity: {
      es: 'Los billetes circulantes de la Junta del 17 de agosto de 1869 figuran en catálogo como Pick 61–64 (1, 5, 10 y 20 pesos). Este recibo convertible es un instrumento distinto: recaudación revolucionaria en Nueva York, no moneda de curso. Fuentes numismáticas describen emisiones limitadas; en junio de 1869 Morales Lemus y Basora fueron detenidos bajo las leyes de neutralidad estadounidenses. El N.º 32 es un número documental muy bajo. Esta ficha no inventa una tirada.',
      en: 'The Board’s circulating notes of 17 August 1869 are catalogued as Pick 61–64 (1, 5, 10, and 20 pesos). This convertible receipt is a separate instrument: revolutionary fundraising in New York, not circulating currency. Numismatic sources describe limited issues; in June 1869 Morales Lemus and Basora were arrested under U.S. neutrality laws. No. 32 is a very low document number. This record does not invent a printage.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo para el N.º 32. La pieza se presenta sin encapsular, con desgaste propio de un documento decimonónico en uso.',
      en: 'An independent census for No. 32 has not been verified. The piece is shown unslabbed, with wear consistent with a nineteenth-century working document.',
    },
    grade: {
      es: 'Sin encapsular; manchas, pliegues y desgaste perimetral (colección privada)',
      en: 'Unslabbed; stains, folds, and edge wear (private collection)',
    },
    sources: [
      {
        href: 'https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/morales-lemus-jose-1808-1870',
        es: 'Encyclopedia.com — José Morales Lemus (1808–1870)',
        en: 'Encyclopedia.com — José Morales Lemus (1808–1870)',
        note: {
          es: 'Presidencia de la Junta Central y detención en junio de 1869 bajo las leyes de neutralidad estadounidenses.',
          en: 'Central Board presidency and June 1869 arrest under U.S. neutrality laws.',
        },
      },
      {
        href: 'https://www.ebsco.com/research-starters/history/cubas-ten-years-war',
        es: 'EBSCO — Cuba’s Ten Years’ War',
        en: 'EBSCO — Cuba’s Ten Years’ War',
      },
      {
        href: 'https://www.cultura.gob.es/en/cultura/archivos/difusion/mc-difusion/bicentenarios/contexto-historico/las-ultimas-posesiones/puerto-rico.html',
        es: 'Ministerio de Cultura — Puerto Rico en el contexto de las últimas posesiones',
        en: 'Ministry of Culture — Puerto Rico in the context of Spain’s last possessions',
      },
      {
        href: 'https://auction.sedwickcoins.com/item.aspx?i=29836775&mobile=0',
        es: 'Sedwick Coins — Junta Central Republicana de Cuba y Puerto Rico (1869)',
        en: 'Sedwick Coins — Central Republican Board of Cuba and Puerto Rico (1869)',
      },
      {
        href: 'http://www.numismondo.net/pm/cub/index61.htm',
        es: 'Numismondo — Cuba P#61–64 (billetes circulantes de 1869)',
        en: 'Numismondo — Cuba P#61–64 (1869 circulating notes)',
        note: {
          es: 'Emisiones distintas del recibo convertible documentado aquí.',
          en: 'Separate issues from the convertible receipt documented here.',
        },
      },
      {
        href: 'https://www.coinbooks.org/esylum_v16n12a24.html',
        es: 'The E-Sylum — 1869 Military Junta of Cuba Currency',
        en: 'The E-Sylum — 1869 Military Junta of Cuba Currency',
      },
    ],
  },
  {
    id: 'billete-de-canje-1-peso-1895',
    path: '/coleccion/puerto-rico/billete-de-canje-1-peso-1895/',
    pick: 'P#7b',
    serial: '4548454',
    serial_display: 'N.º 4548454',
    serial_kind: 'fancy',
    signatures: {
      es: 'El Director de Hacienda (M. Vendrell); El Ordenador de Pagos; El Interventor',
      en: 'Director of Finance (M. Vendrell); Paymaster; Comptroller',
    },
    printed: {
      es: 'Wikipedia y Documenta & Instrumenta sitúan la emisión en cinco millones de Billetes de Canje de 1 peso (Real Decreto de 17 de agosto de 1895). Cada billete garantizaba el canje por un peso provincial de 25 g de ley .900 una vez acuñado en Madrid. Esta ficha no inventa una tirada para la variedad P#7b ni para el serial 4548454.',
      en: 'Wikipedia and Documenta & Instrumenta place the issue at five million 1-peso exchange notes (royal decree of 17 August 1895). Each note guaranteed exchange for a provincial peso of 25 g at .900 fineness once struck in Madrid. This record does not invent a printage for variety P#7b or for serial 4548454.',
    },
    images: {
      composite: '/images/catalog/puerto-rico/pr-1895-1-peso-4548454-composite.jpg',
      front: '/images/catalog/puerto-rico/pr-1895-1-peso-4548454-front.jpg',
      back: '/images/catalog/puerto-rico/pr-1895-1-peso-4548454-back.jpg',
      frontWidth: 1371,
      frontHeight: 646,
      backWidth: 1414,
      backHeight: 646,
    },
    title: {
      es: '1 peso · Billete de Canje · 1895',
      en: '1 Peso · Exchange Note · 1895',
    },
    kicker: {
      es: 'Puerto Rico · Ministerio de Ultramar',
      en: 'Puerto Rico · Ministerio de Ultramar',
    },
    lead: {
      es: 'Billete de Canje de 1 peso del Ministerio de Ultramar, creado por el Real Decreto de 17 de agosto de 1895 para retirar plata extranjera. Serial radar N.º 4548454, variedad P#7b (talón parcial).',
      en: 'Ministerio de Ultramar 1-peso exchange note, created by the royal decree of 17 August 1895 to withdraw foreign silver. Radar serial N.º 4548454, variety P#7b (partial counterfoil).',
    },
    description: {
      es: 'El Real Decreto de 17 de agosto de 1895 autorizó este Billete de Canje como recibo provisional mientras se retiraba la plata mexicana y extranjera —macuquina, dólares Morgan y otras monedas ajenas— que dominaba la isla. Cada billete garantizaba al portador un peso provincial de 25 gramos de ley .900 una vez acuñado en Madrid; el canje se cerró en 1896. El Ministerio de Ultramar emitió un solo valor: 1 peso. El anverso, en negro sobre fondo amarillo, cita el Art. 1º del Real Decreto, titula BILLETE DE CANJE y VALE UN PESO, y lleva MINISTERIO DE ULTRAMAR en los márgenes verticales. A la izquierda, un retrato circular de un hombre barbado con caperuza —los catálogos no lo identifican con certeza; a menudo se asocia a un conquistador— y a la derecha el círculo del sello en seco «Canje de Puerto Rico» con velero. El serial rojo N.º 4548454 es un palíndromo (radar). Firman El Director de Hacienda (M. Vendrell), El Ordenador de Pagos y El Interventor. Al pie, R. MAURA y MADRID: Bartolomé Maura y Montaner grabó la plancha litográfica para la imprenta madrileña. El reverso, en verde azulado sobre crema, muestra las armas reales de España coronadas, la cinta BILLETE DE CANJE, 1 PESO y ULTRAMAR. Los restos de letras D y UI fuera del marco marcan el talón recortado: variedad Pick 7b (talón parcial), no el 7a de talón entero ni el 7c sin talón —aunque los márgenes parezcan limpios, las letras residuales confirman el recorte parcial. Esta pieza de la colección está en funda, sin encapsular.',
      en: 'The royal decree of 17 August 1895 authorized this exchange note as a provisional receipt while Mexican and foreign silver — worn macuquina, Morgan dollars, and other outsiders’ coin — was withdrawn from the island. Each note guaranteed the bearer a provincial peso of 25 grams at .900 fineness once struck in Madrid; the exchange closed in 1896. The Ministerio de Ultramar issued a single denomination: 1 peso. The face, black on a yellow underprint, cites Article 1 of the royal decree, reads BILLETE DE CANJE and VALE UN PESO, and carries MINISTERIO DE ULTRAMAR in the vertical margins. At left a circular portrait of a bearded man in a cap — catalogues do not name him with certainty; he is often linked to a conquistador — and at right the dry-seal circle “Canje de Puerto Rico” with a sailing ship. The red serial N.º 4548454 is a palindrome (radar). The signers are the Director of Finance (M. Vendrell), the Paymaster, and the Comptroller. At the foot, R. MAURA and MADRID: Bartolomé Maura y Montaner engraved the lithographic plate for the Madrid press. The back, blue-green on cream, shows the crowned Spanish royal arms, a BILLETE DE CANJE ribbon, 1 PESO, and ULTRAMAR. Residual letters D and UI outside the frame mark the trimmed stub: Pick 7b (partial counterfoil), not 7a with a full stub or 7c with none — even where margins look clean, the leftover letters confirm a partial trim. This collection piece is sleeved and unslabbed.',
    },
    frontCaption: {
      es: 'Anverso del Billete de Canje de 1 peso, serial radar N.º 4548454: MINISTERIO DE ULTRAMAR en los márgenes, VALE UN PESO y firmas.',
      en: 'Face of the 1-peso exchange note, radar serial N.º 4548454: MINISTERIO DE ULTRAMAR at the margins, VALE UN PESO, and signatures.',
    },
    backCaption: {
      es: 'Reverso verde azulado sobre crema: armas de España, ULTRAMAR, cinta BILLETE DE CANJE, 1 PESO a la derecha y restos de talón D / UI en los márgenes.',
      en: 'Green-teal back on cream: arms of Spain, ULTRAMAR, BILLETE DE CANJE ribbon, 1 PESO at right, and D / UI counterfoil remnants at the margins.',
    },
    scarcity: {
      es: 'El tipo es el único valor de la emisión de canje de 1895 (Pick 7). Wikipedia y Documenta & Instrumenta cifran cinco millones de ejemplares; el canje cerró en 1896. Las variedades se distinguen por el talón: entero (7a), parcial a uno o ambos lados (7b, esta pieza por restos D/UI) o ausente (7c). El serial 4548454 es fancy: lee igual al derecho y al revés. Esta ficha no inventa una tirada por variedad ni cifras de mercado.',
      en: 'The type is the only denomination of the 1895 exchange issue (Pick 7). Wikipedia and Documenta & Instrumenta place five million notes; the exchange closed in 1896. Varieties are distinguished by the stub: full (7a), partial at one or both sides (7b, this piece by D/UI remnants), or none (7c). Serial 4548454 is fancy: it reads the same forwards and backwards. This record does not invent a printage by variety or market values.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, en funda, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, sleeved, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Currencies_of_Puerto_Rico',
        es: 'Wikipedia — Currencies of Puerto Rico',
        en: 'Wikipedia — Currencies of Puerto Rico',
        note: {
          es: 'Cinco millones de Billetes de Canje de 1 peso; Real Decreto de 17 de agosto de 1895; canje cerrado en 1896.',
          en: 'Five million 1-peso exchange notes; royal decree of 17 August 1895; exchange closed in 1896.',
        },
      },
      {
        href: 'https://revistas.ucm.es/index.php/DOCU/en/article/view/81329',
        es: 'Documenta & Instrumenta — Canje de la moneda mexicana por el peso provincial (1895–1896)',
        en: 'Documenta & Instrumenta — Exchange of Mexican currency for the provincial peso (1895–1896)',
        note: {
          es: 'Diseño de Maura y Montaner; expediente AHN Ultramar 6316; tirada de cinco millones.',
          en: 'Maura y Montaner design; AHN Ultramar 6316 file; five-million print run.',
        },
      },
      {
        href: 'https://en.numista.com/202441',
        es: 'Numista — Puerto Rico 1 peso P#7 (7a/7b/7c)',
        en: 'Numista — Puerto Rico 1 peso P#7 (7a/7b/7c)',
      },
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/PRI/PRI0007.htm',
        es: 'Bank Note Museum — Puerto Rico P#7 (7a, 7b, 7c)',
        en: 'Bank Note Museum — Puerto Rico P#7 (7a, 7b, 7c)',
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/PRI/PRI.htm',
        es: 'Bank Note Museum — Puerto Rico',
        en: 'Bank Note Museum — Puerto Rico',
      },
    ],
  },
];

export const notePageCopy = {
  es: {
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
  return localizePath(note.path, locale);
}

export const puertoRicoNoteSlugs = puertoRicoNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(PUERTO_RICO_PATH, locale);
}

export const dedicatedCatalogPaths = new Set<string>(['coleccion/puerto-rico', ...puertoRicoNoteSlugs]);
