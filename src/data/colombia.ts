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
    years: { es: '1870–1886', en: '1870–1886' },
    title: {
      es: 'Banca libre',
      en: 'Free banking',
    },
    lead: {
      es: 'Bancos privados regionales con convertibilidad en metálico y planchas grabadas en Nueva York y Londres.',
      en: 'Regional private banks, metallic convertibility, and plates engraved in New York and London.',
    },
    body: {
      es: 'Hasta mediados del siglo XIX el comercio siguió en oro, plata y moneda extranjera. El billete moderno llegó con la banca libre: el Banco de Bogotá (1870) fue el primer emisor privado que el comercio aceptó de forma amplia. Le siguieron, entre otros, los bancos de Antioquia, Colombia, Bolívar, Medellín, Pamplona, el Norte, el Cauca y Rio Hacha, en la Guajira. La Enciclopedia Banrepcultural señala que los bancos más importantes encargaron la impresión a Inglaterra o Estados Unidos; el sistema exigía convertibilidad en metálico y competencia entre emisores. En esta colección caben pruebas, especímenes y emisiones regionales de esa década.',
      en: 'Until the mid-nineteenth century, trade still ran on gold, silver, and foreign coin. Modern notes arrived with free banking: the Banco de Bogotá (1870) was the first private issuer the market broadly accepted. Banks of Antioquia, Colombia, Bolívar, Medellín, Pamplona, the Norte, the Cauca, and Rio Hacha on the Guajira followed. Banrepcultural’s encyclopedia notes that the leading banks ordered printing in England or the United States; the system required metallic convertibility and competing issuers. Proofs, specimens, and regional issues from that decade belong in this collection.',
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
      es: 'En marzo de 1880 se propuso un Banco Nacional; quedó establecido en 1881 como pieza de la Regeneración de Rafael Núñez y Miguel Antonio Caro. Al principio convivió con la emisión privada; hacia 1886–1887 el gobierno impuso el curso forzoso y apagó el derecho de los bancos particulares. Astrid Romero sitúa la liquidación del instituto en 1896, tras unos quince años. La Guerra de los Mil Días (1899–1902) disparó de nuevo la impresión de papel y una de las inflaciones más graves del país. En 1909 la Junta de Conversión fijó 100 pesos de papel por 1 peso oro, paso previo al banco central.',
      en: 'A Banco Nacional was proposed in March 1880 and established in 1881 as part of Rafael Núñez and Miguel Antonio Caro’s Regeneración. At first it coexisted with private issues; around 1886–1887 the government imposed forced legal tender and ended private banks’ right to issue. Astrid Romero places the institute’s liquidation in 1896, after about fifteen years. The Thousand Days’ War (1899–1902) set off another surge of paper and one of the country’s worst inflations. In 1909 the Conversion Board set 100 paper pesos to 1 gold peso — a step toward the later central bank.',
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
      es: 'Ley 25 de 1923, Misión Kemmerer, series de la American Bank Note Company, especímenes y errores.',
      en: 'Law 25 of 1923, the Kemmerer Mission, American Bank Note Company series, specimens, and errors.',
    },
    body: {
      es: 'En marzo de 1923, el gobierno de Pedro Nel Ospina contrató a Edwin W. Kemmerer. La Ley 25 de 1923 creó el Banco de la República como sociedad anónima con 10 millones de pesos oro de capital y el monopolio de emitir la moneda legal. Los primeros billetes oficiales se encargaron a la American Bank Note Company —tras provisionales sobreimpresos de la Casa de Moneda de Medellín—. La convertibilidad en oro se perdió en 1931, cuando el banco asumió el control del metal. Desde entonces el peso es emisión centralizada. Esta vitrina reunirá series de circulación, especímenes y errores de corte documentados en la colección.',
      en: 'In March 1923, Pedro Nel Ospina’s government hired Edwin W. Kemmerer. Law 25 of 1923 created the Banco de la República as a stock company with 10 million gold pesos of capital and the exclusive right to issue legal tender. The first official notes were ordered from the American Bank Note Company — after provisional overprints of the Medellín mint. Gold convertibility ended in 1931, when the bank took control of the metal. Since then the peso has been a centralized issue. This case will gather circulation series, specimens, and documented cutting errors from the collection.',
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
      es: 'Ley 25 de 1923: capital de 10 millones de pesos oro y monopolio de emisión.',
      en: 'Law 25 of 1923: 10 million gold pesos of capital and the monopoly of issue.',
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
      'El billete moderno llegó en la década de 1870, con la banca libre. El Banco de Bogotá (1870) fue el primer emisor privado que el comercio aceptó de forma amplia. Decenas de bancos regionales —Antioquia, Colombia, Bolívar, Medellín, Pamplona, el Norte, el Cauca, Rio Hacha— encargaron planchas a Nueva York y Londres, con convertibilidad en metálico. Esas emisiones, junto con pruebas y especímenes, forman el corazón histórico de esta vitrina. La primera ficha documentada es el par de pruebas ABNC del 5 pesos de Rio Hacha, 1883.',
      'En 1880–1881, bajo la Regeneración de Rafael Núñez, nació el Banco Nacional. Hacia 1886–1887 el gobierno impuso el curso forzoso y apagó la emisión privada. Astrid Romero sitúa la liquidación del instituto en 1896. La Guerra de los Mil Días (1899–1902) volvió a disparar la impresión de papel y una inflación devastadora. En 1909 la Junta de Conversión tasó 100 pesos de papel por 1 peso oro.',
      'La Ley 25 de 1923, fruto de la Misión Kemmerer contratada por Pedro Nel Ospina, creó el Banco de la República con el monopolio de emitir la moneda legal. Los primeros billetes oficiales los grabó la American Bank Note Company. La convertibilidad en oro se perdió en 1931. Desde entonces el peso es emisión centralizada: series de circulación, especímenes y —en esta colección— errores de corte.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas se publican a medida que se documentan las piezas. Por ahora abre la banca libre con las pruebas ABNC del 5 pesos del Banco de Rio Hacha (1883).',
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
      'The modern note arrived in the 1870s with free banking. The Banco de Bogotá (1870) was the first private issuer the market broadly accepted. Dozens of regional banks — Antioquia, Colombia, Bolívar, Medellín, Pamplona, the Norte, the Cauca, Rio Hacha — ordered plates in New York and London, with metallic convertibility. Those issues, with proofs and specimens, are the historical core of this case. The first documented note page is the pair of ABNC proofs of the Rio Hacha 5 pesos, 1883.',
      'In 1880–1881, under Rafael Núñez’s Regeneración, the Banco Nacional was born. Around 1886–1887 the government imposed forced legal tender and ended private issues. Astrid Romero places the institute’s liquidation in 1896. The Thousand Days’ War (1899–1902) set off another surge of paper and a devastating inflation. In 1909 the Conversion Board rated 100 paper pesos to 1 gold peso.',
      'Law 25 of 1923, the fruit of the Kemmerer Mission hired by Pedro Nel Ospina, created the Banco de la República with the monopoly of legal-tender issue. The first official notes were engraved by the American Bank Note Company. Gold convertibility ended in 1931. Since then the peso has been a centralized issue: circulation series, specimens, and — in this collection — cutting errors.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Note pages are published as pieces are documented. For now free banking opens with the ABNC proofs of the Banco de Rio Hacha 5 pesos (1883).',
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
