import type { CatalogSource, LocalizedText } from './catalog';

export const COLOMBIA_PATH = '/coleccion/colombia/';

export type ColombiaChapterId = 'independencia' | 'banca-libre' | 'banco-nacional' | 'banco-de-la-republica';

export type ColombiaChapter = {
  id: ColombiaChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const colombiaChapters: ColombiaChapter[] = [
  {
    id: 'independencia',
    years: { es: '1811–1819', en: '1811–1819' },
    title: {
      es: 'Independencia',
      en: 'Independence',
    },
    lead: {
      es: 'Primeros papeles de emergencia: Cartagena, Cundinamarca y la Tesorería de la Gran Colombia.',
      en: 'The first emergency papers: Cartagena, Cundinamarca, and the Treasury of Gran Colombia.',
    },
    body: {
      es: 'Antes de un banco emisor, las provincias patriotas pagaron la guerra con papel. El Estado de Cartagena, pionero en 1811–1813, autorizó billetes de reales en papel común, firmados a mano —la Enciclopedia Banrepcultural documenta el 1 real de 1813 de Gutiérrez de Piñeres—. Cundinamarca siguió en 1814 con vales de la Tesorería General. La población, habituada al oro y la plata, desconfió de esos títulos; tras la Reconquista de 1815 muchos se destruyeron. Después de Boyacá (1819), la Gran Colombia emitió vales de tesorería, pero no llegó a fundar un banco nacional estable antes de disolverse en 1830.',
      en: 'Before a bank of issue existed, patriot provinces paid for war with paper. The State of Cartagena, first in 1811–1813, authorized real-denominated notes on ordinary paper, signed by hand — Banrepcultural’s encyclopedia records the 1813 1-real of Gutiérrez de Piñeres. Cundinamarca followed in 1814 with General Treasury vales. A public used to gold and silver distrusted those titles; after the 1815 reconquest many were destroyed. After Boyacá (1819), Gran Colombia issued treasury vales but did not found a lasting national bank before dissolving in 1830.',
    },
  },
  {
    id: 'banca-libre',
    years: { es: '1870–1887', en: '1870–1887' },
    title: {
      es: 'Banca libre',
      en: 'Free banking',
    },
    lead: {
      es: 'Ley 35 de 1865, Banco de Bogotá (1870) y decenas de emisores regionales convertibles en metálico.',
      en: 'Law 35 of 1865, the Banco de Bogotá (1870), and dozens of regional issuers convertible into metal.',
    },
    body: {
      es: 'Hasta mediados del siglo XIX el comercio siguió en oro, plata y moneda extranjera. La Ley 35 de 1865 abrió la emisión privada convertible. El Banco de Bogotá se constituyó el 15 de noviembre de 1870 —comerciantes y políticos, escritura en la Notaría Segunda— y fue el primer emisor privado que el comercio aceptó de forma amplia: sus estatutos ataban el billete al metálico en caja. Mover especie por un relieve accidentado era caro y peligroso; los bancos regionales cubrieron el crédito local —comercio, agricultura, infraestructura— con papel propio, fraccionarios incluidos. Entre 1870 y 1886 se fundaron más de tres docenas. Le siguieron, entre otros, los de Antioquia, Colombia, Bolívar, Medellín, Pamplona, el Norte, el Cauca, el Hipotecario de Bogotá y Rio Hacha, en la Guajira. La Enciclopedia Banrepcultural señala que los bancos más importantes encargaron la impresión a Inglaterra o Estados Unidos. En esta colección caben pruebas, especímenes y emisiones regionales de esa década.',
      en: 'Until the mid-nineteenth century, trade still ran on gold, silver, and foreign coin. Law 35 of 1865 opened private convertible issue. The Banco de Bogotá was constituted on 15 November 1870 — merchants and politicians, a deed at the Second Notary — and was the first private issuer the market broadly accepted: its statutes tied the note to metal in the till. Moving specie across broken country was costly and dangerous; regional banks covered local credit — trade, agriculture, infrastructure — with their own paper, fractionals included. Between 1870 and 1886 more than three dozen were founded. Banks of Antioquia, Colombia, Bolívar, Medellín, Pamplona, the Norte, the Cauca, the Hipotecario of Bogotá, and Rio Hacha on the Guajira followed. Banrepcultural’s encyclopedia notes that the leading banks ordered printing in England or the United States. Proofs, specimens, and regional issues from that decade belong in this collection.',
    },
  },
  {
    id: 'banco-nacional',
    years: { es: '1880–1903', en: '1880–1903' },
    title: {
      es: 'Banco Nacional',
      en: 'Banco Nacional',
    },
    lead: {
      es: 'La Regeneración, el curso forzoso y el papel de la Guerra de los Mil Días.',
      en: 'La Regeneración, forced legal tender, and the paper of the Thousand Days’ War.',
    },
    body: {
      es: 'En marzo de 1880 se propuso un Banco Nacional; la Ley 39 de 1880 y su establecimiento en 1881 lo hicieron pieza de la Regeneración de Rafael Núñez y Miguel Antonio Caro. Al principio convivió con la emisión privada. La Ley 57 de 1887 reglamentó la banca en todo el país y suspendió el derecho de los particulares a emitir mientras el Nacional tuviera el privilegio exclusivo; el curso forzoso apagó el resto. Astrid Romero sitúa la liquidación del instituto en 1896, tras unos quince años. La Guerra de los Mil Días (1899–1902) disparó de nuevo la impresión de papel y una de las inflaciones más graves del país. En 1909 la Junta de Conversión fijó 100 pesos de papel por 1 peso oro, paso previo al banco central.',
      en: 'A Banco Nacional was proposed in March 1880; Law 39 of 1880 and its establishment in 1881 made it part of Rafael Núñez and Miguel Antonio Caro’s Regeneración. At first it coexisted with private issues. Law 57 of 1887 regulated banking nationwide and suspended private banks’ right to issue while the Nacional held the exclusive privilege; forced legal tender finished the rest. Astrid Romero places the institute’s liquidation in 1896, after about fifteen years. The Thousand Days’ War (1899–1902) set off another surge of paper and one of the country’s worst inflations. In 1909 the Conversion Board set 100 paper pesos to 1 gold peso — a step toward the later central bank.',
    },
  },
  {
    id: 'banco-de-la-republica',
    years: { es: 'desde 1923', en: 'from 1923' },
    title: {
      es: 'Banco de la República',
      en: 'Banco de la República',
    },
    lead: {
      es: 'Ley 25 de 1923, Misión Kemmerer, provisionales de 1923, ABNC, De La Rue e Imprenta de Billetes.',
      en: 'Law 25 of 1923, the Kemmerer Mission, 1923 provisionals, ABNC, De La Rue, and the Imprenta de Billetes.',
    },
    body: {
      es: 'En marzo de 1923, el gobierno de Pedro Nel Ospina contrató a Edwin W. Kemmerer. La Ley 25 de 1923 creó el Banco de la República como sociedad de capital mixto —gobierno y bancos comerciales— con 10 millones de pesos oro y el monopolio de emitir la moneda legal. Debía abrir en enero de 1924; la corrida contra el Banco López adelantó la puerta al 23 de julio de 1923. El presidente Ospina hizo traer de la Casa de Moneda de Medellín certificados de oro grabados por la American Bank Note Company y se resellaron como «BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL». La serie regular de pesos oro siguió en Nueva York. En 1931 el banco asumió el control del metal y se perdió la convertibilidad. A mediados de siglo Thomas De La Rue imprimió junto a la ABNC. El 23 de octubre de 1959 abrió en Bogotá la Imprenta de Billetes; su primer trabajo fue el 1 peso (Pick 404). En 1973 el Estado adquirió casi todas las acciones privadas (Ley 7.ª). La Constitución de 1991 le dio autonomía institucional, ajena al Ejecutivo, con mandato de preservar el poder adquisitivo; desde 1993 el papel deja de llamarse peso oro. Esta vitrina documenta el 10 pesos oro de 1943 (Pick 389b) y el espécimen de 2.000 pesos oro de 1983 (Pick 430as), de De La Rue.',
      en: 'In March 1923, Pedro Nel Ospina’s government hired Edwin W. Kemmerer. Law 25 of 1923 created the Banco de la República as a mixed-capital company — government and commercial banks — with 10 million gold pesos and the exclusive right to issue legal tender. It was to open in January 1924; a run on the Banco López brought the doors forward to 23 July 1923. President Ospina had gold certificates engraved by the American Bank Note Company flown from the Medellín mint and overstamped “BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL.” The regular pesos-oro series followed from New York. In 1931 the bank took control of the metal and convertibility ended. Mid-century Thomas De La Rue printed alongside ABNC. On 23 October 1959 the Imprenta de Billetes opened in Bogotá; its first job was the 1-peso (Pick 404). In 1973 the state bought nearly all private shares (Law 7). The 1991 Constitution gave the bank institutional autonomy from the executive, with a mandate to preserve purchasing power; from 1993 the paper dropped the word oro. This case documents the 1943 10 pesos oro (Pick 389b) and the 1983 2,000 pesos oro specimen (Pick 430as), by De La Rue.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
    es: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
    en: 'Banrepcultural Encyclopedia — Paper money in Colombia',
    note: {
      es: 'Banca libre, Regeneración, Banco Nacional, Misión Kemmerer y pérdida de la convertibilidad en 1931.',
      en: 'Free banking, Regeneración, Banco Nacional, the Kemmerer Mission, and the 1931 end of convertibility.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Financiaci%C3%B3n_de_la_independencia',
    es: 'Enciclopedia Banrepcultural — Financiación de la independencia',
    en: 'Banrepcultural Encyclopedia — Financing independence',
    note: {
      es: 'Documenta el 1 real de Cartagena de 1813 firmado por Gutiérrez de Piñeres.',
      en: 'Records the 1813 Cartagena 1-real signed by Gutiérrez de Piñeres.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/el-banco/historia',
    es: 'Banco de la República — Historia del Banco',
    en: 'Banco de la República — History of the Bank',
    note: {
      es: 'Ley 25 de 1923, capital mixto, monopolio de emisión y apertura adelantada el 23 de julio.',
      en: 'Law 25 of 1923, mixed capital, monopoly of issue, and the early opening on 23 July.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/banco/historia/reforma-1973',
    es: 'Banco de la República — Reforma de 1973',
    en: 'Banco de la República — 1973 reform',
    note: {
      es: 'Ley 7.ª y Decreto 2617: el Estado adquirió casi todas las acciones privadas.',
      en: 'Law 7 and Decree 2617: the state acquired nearly all private shares.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/node/51381',
    es: 'Banco de la República — 60 años de la Imprenta de Billetes',
    en: 'Banco de la República — 60 years of the Imprenta de Billetes',
    note: {
      es: '23 de octubre de 1959; primer trabajo: el 1 peso impreso en Bogotá.',
      en: '23 October 1959; first job: the 1-peso printed in Bogotá.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/publicaciones-investigaciones/libros/banrep-antecedentes-evolucion-estructura',
    es: 'Banco de la República — Antecedentes, evolución y estructura (Meisel y cols.)',
    en: 'Banco de la República — Background, evolution, and structure (Meisel et al.)',
    note: {
      es: 'Misión Kemmerer, apertura de 1923 y el paso de la banca libre al banco central.',
      en: 'The Kemmerer Mission, the 1923 opening, and the shift from free banking to a central bank.',
    },
  },
  {
    href: 'https://en.numista.com/L100183',
    es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
    en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
    note: {
      es: 'Catálogo de referencia de la notafilia colombiana: banca libre, Banco Nacional y Banco de la República.',
      en: 'A standard catalog of Colombian notaphily: free banking, the Banco Nacional, and the Banco de la República.',
    },
  },
  {
    href: 'https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/2386',
    es: 'Astrid Romero — La Regeneración y el Banco Nacional (1991)',
    en: 'Astrid Romero — La Regeneración and the Banco Nacional (1991)',
    note: {
      es: 'Establecido en 1881; liquidación definitiva en 1896.',
      en: 'Established in 1881; final liquidation in 1896.',
    },
  },
  {
    href: 'https://www.bancodebogota.com/nuestra-organizacion-2/nuestro-banco',
    es: 'Banco de Bogotá — Nuestro Banco',
    en: 'Banco de Bogotá — Our Bank',
    note: {
      es: 'Fundación el 15 de noviembre de 1870; primer banco comercial del país.',
      en: 'Founded 15 November 1870; the country’s first commercial bank.',
    },
  },
  {
    href: 'https://www.portafolio.co/economia/finanzas/banco-bogota-nacio-facultad-especial-billetes-408564',
    es: 'Portafolio — El Banco de Bogotá nació con la facultad de hacer billetes',
    en: 'Portafolio — The Banco de Bogotá was born with the right to issue notes',
    note: {
      es: '15 de noviembre de 1870; estatutos: billetes al portador en razón del metálico en caja.',
      en: '15 November 1870; statutes: bearer notes in proportion to metal in the till.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Emisi%C3%B3n_de_dinero',
    es: 'Enciclopedia Banrepcultural — Emisión de dinero',
    en: 'Banrepcultural Encyclopedia — Money issue',
    note: {
      es: 'Curso forzoso, Guerra de los Mil Días y Junta de Conversión de 1909 (100 pesos papel = 1 peso oro).',
      en: 'Forced tender, the Thousand Days’ War, and the 1909 Conversion Board (100 paper pesos = 1 gold peso).',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL.htm',
    es: 'Bank Note Museum — Colombia (estados, República y Banco de la República)',
    en: 'Bank Note Museum — Colombia (states, Republic, and Banco de la República)',
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL-BDR.htm',
    es: 'Bank Note Museum — Colombia, Banco de la República',
    en: 'Bank Note Museum — Colombia, Banco de la República',
    note: {
      es: 'Índice Pick: provisionales de 1923, pesos oro y la serie de 1959 (P-404).',
      en: 'Pick index: 1923 provisionals, pesos oro, and the 1959 series (P-404).',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Colombia · Banca libre y Banco de la República | Notofilia',
    metaDescription:
      'Catálogo de papel moneda colombiano: emisiones de independencia, banca libre, Banco Nacional, especímenes y errores del Banco de la República.',
    kicker: 'Colombia · Notafilia',
    title: 'Banca libre y Banco de la República',
    heroAlt:
      'Mapa vintage en relieve 3D de Colombia sobre pergamino, con el Castillo San Felipe, Monserrate, el Eje Cafetero, el Amazonas, un pasaporte y el título Colombia',
    intro: [
      'El papel moneda en Colombia nació de la urgencia de la Independencia, no de un banco central. En 1813 el Estado de Cartagena emitió billetes de un real en papel común, firmados a mano. La Enciclopedia Banrepcultural identifica el 1 real de Gutiérrez de Piñeres; Cundinamarca siguió al año siguiente con vales de tesorería. Habituada al oro y la plata, la población desconfió de esos papeles. Con la Reconquista de 1815 muchos se destruyeron; los que sobreviven son de extrema rareza.',
      'El billete moderno llegó en la década de 1870, con la banca libre. La Ley 35 de 1865 abrió la emisión convertible. El Banco de Bogotá se constituyó el 15 de noviembre de 1870 y fue el primer emisor privado que el comercio aceptó de forma amplia. Mover especie por el relieve era caro y peligroso; más de tres docenas de bancos regionales —Antioquia, Colombia, Bolívar, Medellín, Pamplona, el Norte, el Cauca, el Hipotecario, Rio Hacha— cubrieron el crédito local con papel propio, fraccionarios incluidos, grabado en Nueva York y Londres. Esas emisiones, junto con pruebas y especímenes, forman el corazón histórico de esta vitrina. La banca libre abre con las pruebas ABNC del Banco Hipotecario de Bogotá (1881) y del 5 pesos de Rio Hacha (1883).',
      'En 1880–1881, bajo la Regeneración de Rafael Núñez, nació el Banco Nacional (Ley 39 de 1880). Al principio convivió con la emisión privada. La Ley 57 de 1887 suspendió el derecho de los particulares a emitir mientras el Nacional tuviera el privilegio exclusivo; el curso forzoso apagó el resto. Astrid Romero sitúa la liquidación del instituto en 1896. La Guerra de los Mil Días (1899–1902) volvió a disparar la impresión de papel y una inflación devastadora. En 1909 la Junta de Conversión tasó 100 pesos de papel por 1 peso oro.',
      'La Ley 25 de 1923, fruto de la Misión Kemmerer contratada por Pedro Nel Ospina, creó el Banco de la República con capital mixto y el monopolio de emitir la moneda legal. La corrida contra el Banco López adelantó la apertura al 23 de julio de 1923: se resellaron certificados de oro de la Casa de Moneda de Medellín como billetes provisionales. Los primeros regulares los grabó la American Bank Note Company; la convertibilidad en oro se perdió en 1931. Thomas De La Rue imprimió a mediados de siglo. El 23 de octubre de 1959 abrió la Imprenta de Billetes en Bogotá, con el 1 peso (Pick 404). En 1973 el Estado nacionalizó casi todo el capital; la Constitución de 1991 fijó la autonomía del banco, y desde 1993 el papel deja de llamarse peso oro. Esta vitrina documenta el 10 pesos oro de 1943 (Pick 389b) y el espécimen de 2.000 pesos oro de 1983 (Pick 430as), impreso por Thomas De La Rue.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas se publican a medida que se documentan las piezas. La banca libre abre con las pruebas ABNC del Banco Hipotecario (1881) y del Banco de Rio Hacha (1883). El Banco de la República, con el 10 pesos oro de 1943 y el espécimen de 2.000 pesos oro de 1983.',
    viewChapter: 'Leer el capítulo',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    coinageLead: 'La moneda metálica de estas mismas épocas se documenta en la vitrina de numismática.',
    coinageLink: 'Colombia-Numismática',
  },
  en: {
    metaTitle: 'Colombia · Free banking and the Banco de la República | Notofilia',
    metaDescription:
      'Catalog of Colombian paper money: independence issues, free banking, the Banco Nacional, and Banco de la República specimens and errors.',
    kicker: 'Colombia · Notaphily',
    title: 'Free banking and the Banco de la República',
    heroAlt:
      'Vintage 3D relief map of Colombia on parchment, with Castillo San Felipe, Monserrate, the Coffee Axis, the Amazon, a passport, and the title Colombia',
    intro: [
      'Paper money in Colombia was born from the urgency of independence, not from a central bank. In 1813 the State of Cartagena issued 1-real notes on ordinary paper, signed by hand. Banrepcultural’s encyclopedia identifies the Gutiérrez de Piñeres 1-real; Cundinamarca followed the next year with treasury vales. A public used to gold and silver distrusted those papers. After the 1815 reconquest many were destroyed; survivors are extremely rare.',
      'The modern note arrived in the 1870s with free banking. Law 35 of 1865 opened convertible issue. The Banco de Bogotá was constituted on 15 November 1870 and was the first private issuer the market broadly accepted. Moving specie across the highlands was costly and dangerous; more than three dozen regional banks — Antioquia, Colombia, Bolívar, Medellín, Pamplona, the Norte, the Cauca, the Hipotecario, Rio Hacha — covered local credit with their own paper, fractionals included, engraved in New York and London. Those issues, with proofs and specimens, are the historical core of this case. Free banking opens with the ABNC proofs of the Banco Hipotecario of Bogotá (1881) and the Rio Hacha 5 pesos (1883).',
      'In 1880–1881, under Rafael Núñez’s Regeneración, the Banco Nacional was born (Law 39 of 1880). At first it coexisted with private issues. Law 57 of 1887 suspended private banks’ right to issue while the Nacional held the exclusive privilege; forced legal tender finished the rest. Astrid Romero places the institute’s liquidation in 1896. The Thousand Days’ War (1899–1902) set off another surge of paper and a devastating inflation. In 1909 the Conversion Board rated 100 paper pesos to 1 gold peso.',
      'Law 25 of 1923, the fruit of the Kemmerer Mission hired by Pedro Nel Ospina, created the Banco de la República with mixed capital and the monopoly of legal-tender issue. A run on the Banco López brought the opening forward to 23 July 1923: gold certificates from the Medellín mint were overstamped as provisional notes. The first regular issues were engraved by the American Bank Note Company; gold convertibility ended in 1931. Thomas De La Rue printed at mid-century. On 23 October 1959 the Imprenta de Billetes opened in Bogotá, with the 1-peso (Pick 404). In 1973 the state nationalized nearly all the capital; the 1991 Constitution fixed the bank’s autonomy, and from 1993 the paper dropped the word oro. This case documents the 1943 10 pesos oro (Pick 389b) and the 1983 2,000 pesos oro specimen (Pick 430as), printed by Thomas De La Rue.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Note pages are published as pieces are documented. Free banking opens with the ABNC proofs of the Banco Hipotecario (1881) and the Banco de Rio Hacha (1883). The Banco de la República chapter holds the 1943 10 pesos oro and the 1983 2,000 pesos oro specimen.',
    viewChapter: 'Read the chapter',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    coinageLead: 'Coinage from the same periods is documented in the numismatics case.',
    coinageLink: 'Colombia-Numismatics',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/colombia/' : COLOMBIA_PATH;
}

export function chapterHref(id: ColombiaChapterId): string {
  return `#${id}`;
}

export type ColombiaCatalogItem = {
  id: string;
  years: LocalizedText;
  title: LocalizedText;
  href: string;
  kind: 'chapter';
};

export function colombiaCatalogItems(): ColombiaCatalogItem[] {
  return colombiaChapters.map((chapter) => ({
    id: chapter.id,
    years: chapter.years,
    title: chapter.title,
    href: chapterHref(chapter.id),
    kind: 'chapter' as const,
  }));
}
