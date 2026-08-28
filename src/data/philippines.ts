import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export const SERIES_PATH = '/coleccion/filipinas/';

export type PhilippinesChapterId =
  | 'colonia-espanola'
  | 'revolucion'
  | 'commonwealth'
  | 'ocupacion-japonesa'
  | 'banco-central';

export type PhilippinesChapter = {
  id: PhilippinesChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const philippinesChapters: PhilippinesChapter[] = [
  {
    id: 'colonia-espanola',
    years: { es: '1852–1898', en: '1852–1898' },
    title: {
      es: 'Colonia española',
      en: 'Spanish colony',
    },
    lead: {
      es: 'El Banco Español Filipino de Isabel II y los primeros pesos fuertes de papel.',
      en: 'El Banco Español Filipino de Isabel II and the first paper pesos fuertes.',
    },
    body: {
      es: 'El 1 de mayo de 1852, El Banco Español Filipino de Isabel II —el primer banco comercial del archipiélago— emitió pesos fuertes de 10, 25, 50 y 200. El Bangko Sentral ng Pilipinas los identifica como el primer papel moneda que circuló en el país; empezaron a verse en 1855. Tras la deposición de Isabel II en 1868 el banco acortó el nombre a El Banco Español Filipino. En 1896 sacó la última serie bifaz de la era española, de 5 a 50 pesos. Esas planchas siguieron en el comercio al comienzo de la ocupación estadounidense, hasta que se las fue retirando.',
      en: 'On 1 May 1852 El Banco Español Filipino de Isabel II — the archipelago’s first commercial bank — issued pesos fuertes of 10, 25, 50, and 200. The Bangko Sentral ng Pilipinas identifies them as the first paper money that circulated in the country; they began to be seen in 1855. After Isabella II was deposed in 1868 the bank shortened its name to El Banco Español Filipino. In 1896 it released the last biface series of the Spanish era, from 5 to 50 pesos. Those plates stayed in trade at the start of the American occupation until they were gradually withdrawn.',
    },
  },
  {
    id: 'revolucion',
    years: { es: '1898–1899', en: '1898–1899' },
    title: {
      es: 'Revolución y Primera República',
      en: 'Revolution and First Republic',
    },
    lead: {
      es: 'Papel de la República Filipina: un emisor patriota de vida breve, sin banco central.',
      en: 'Paper of the Philippine Republic: a short-lived patriot issuer, with no central bank.',
    },
    body: {
      es: 'Con la revolución contra España y la proclamación de la Primera República, el gobierno de Emilio Aguinaldo autorizó papel propio —billetes de la República Filipina en pesos— para pagar la guerra. No hubo un banco de emisión estable: eran títulos de emergencia, a menudo impresos con prisa y firmados a mano, que el comercio aceptó de forma desigual. La guerra con Estados Unidos y la caída de la República apagaron esa emisión. Los ejemplares que sobreviven son escasos; esta vitrina los reunirá cuando se documenten.',
      en: 'With the revolution against Spain and the proclamation of the First Republic, Emilio Aguinaldo’s government authorized its own paper — Philippine Republic notes in pesos — to pay for the war. There was no lasting bank of issue: these were emergency titles, often printed in haste and signed by hand, which trade accepted unevenly. The war with the United States and the fall of the Republic ended that issue. Surviving examples are scarce; this case will gather them as they are documented.',
    },
  },
  {
    id: 'commonwealth',
    years: { es: '1903–1946', en: '1903–1946' },
    title: {
      es: 'Estados Unidos y Commonwealth',
      en: 'United States and Commonwealth',
    },
    lead: {
      es: 'Certificados de plata y del Tesoro, el Bank of the Philippine Islands y la Serie Victory n.º 66.',
      en: 'Silver and Treasury certificates, the Bank of the Philippine Islands, and Victory Series No. 66.',
    },
    body: {
      es: 'La Coinage Act de 1903 implantó un sistema de certificados de plata respaldados por reservas; más tarde los sustituyeron los certificados del Tesoro. El Banco Español Filipino conservó el derecho de emitir; en 1912 pasó a llamarse Bank of the Philippine Islands y el texto de sus billetes cambió del español al inglés. El Philippine National Bank añadió su propio papel. El Commonwealth (1935) heredó esos certificados. En 1944, al desembarcar MacArthur en Leyte, llegaron los Certificados del Tesoro de la Serie Victory n.º 66, grabados por el Bureau of Engraving and Printing: el último papel bajo administración estadounidense. El «n.º 66» conmemora la edad atribuida a Manuel L. Quezon al morir. El 18 de noviembre de 1944, la Orden Ejecutiva n.º 25 de Sergio Osmeña los reconoció como curso legal, a dos Victory Pesos por un dólar. El total de la serie fue de ₱1.019.544.000. Las primeras fichas de esta vitrina son el 1, 2, 5 y 20 pesos de esa serie, sin sobrecarga del banco central.',
      en: 'The Coinage Act of 1903 introduced silver certificates backed by reserves; Treasury certificates later replaced them. El Banco Español Filipino kept the right to issue; in 1912 it became the Bank of the Philippine Islands and the text of its notes shifted from Spanish to English. The Philippine National Bank added its own paper. The Commonwealth (1935) inherited those certificates. In 1944, when MacArthur landed on Leyte, Victory Series No. 66 Treasury Certificates arrived, engraved by the Bureau of Engraving and Printing: the last paper under United States administration. “No. 66” commemorates the age attributed to Manuel L. Quezon at death. On 18 November 1944 Sergio Osmeña’s Executive Order No. 25 recognized them as legal tender, at two Victory Pesos to one dollar. The series totaled ₱1,019,544,000. The first note pages in this case are the 1, 2, 5, and 20 pesos of that series, without the later central-bank overprint.',
    },
  },
  {
    id: 'ocupacion-japonesa',
    years: { es: '1942–1945', en: '1942–1945' },
    title: {
      es: 'Ocupación japonesa',
      en: 'Japanese occupation',
    },
    lead: {
      es: 'Papel de invasión, inflación y los «Mickey Mouse money» de la guerra.',
      en: 'Invasion paper, inflation, and the wartime “Mickey Mouse money.”',
    },
    body: {
      es: 'Tras la caída de Manila, las fuerzas japonesas impusieron su propio papel —Japanese invasion money— en pesos y centavos, impreso sin respaldo metálico y en cantidades crecientes. La inflación lo dejó casi sin valor; los filipinos lo llamaron Mickey Mouse money. Al mismo tiempo, gobiernos de guerrilla y consejos provinciales emitieron vales locales. Al liberarse el archipiélago ese papel se desmonetizó. En esta colección caben tanto las emisiones de ocupación como los papeles de resistencia, a medida que se fotografíen.',
      en: 'After the fall of Manila, Japanese forces imposed their own paper — Japanese invasion money — in pesos and centavos, printed without metallic backing and in rising quantities. Inflation left it nearly worthless; Filipinos called it Mickey Mouse money. At the same time guerrilla governments and provincial councils issued local scrip. After liberation that paper was demonetized. Occupation issues and resistance notes both belong in this collection as they are photographed.',
    },
  },
  {
    id: 'banco-central',
    years: { es: 'desde 1949', en: 'from 1949' },
    title: {
      es: 'Banco Central',
      en: 'Central Bank',
    },
    lead: {
      es: 'Sobrecargas Victory-CBP, serie inglesa, filipinización y el Bangko Sentral ng Pilipinas.',
      en: 'Victory-CBP overprints, the English Series, Filipinization, and the Bangko Sentral ng Pilipinas.',
    },
    body: {
      es: 'En 1949 nació el Central Bank of the Philippines. Como medida transitoria, parte de la Serie Victory recibió en el reverso la sobrecarga «CENTRAL BANK OF THE PHILIPPINES» (Pick 117 y siguientes). El BSP sitúa esas sobrecargas como curso legal hasta el 30 de julio de 1964. La primera serie propia, la English Series, la imprimió Thomas De La Rue; los 200 y 500 pesos se retiraron antes, por las leyes de la República 1191 y 1516. A finales de los sesenta empezó la filipinización: serie Pilipino, Ang Bagong Lipunan, New Design Series y, ya bajo el Bangko Sentral ng Pilipinas (1993), la New Generation Currency. Esta vitrina reunirá esas emisiones cuando se documenten las piezas.',
      en: 'The Central Bank of the Philippines was created in 1949. As a transitional measure, part of the Victory series received a “CENTRAL BANK OF THE PHILIPPINES” overprint on the back (Pick 117 and later). The BSP places those overprints as legal tender through 30 July 1964. The first series of its own, the English Series, was printed by Thomas De La Rue; the 200- and 500-peso notes were withdrawn earlier under Republic Acts 1191 and 1516. Filipinization began in the late 1960s: the Pilipino series, Ang Bagong Lipunan, the New Design Series, and, under the Bangko Sentral ng Pilipinas (1993), the New Generation Currency. This case will gather those issues as pieces are documented.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.bsp.gov.ph/Pages/CoinsAndNotes/HistoryOfPhilippineMoney/HistoryOfPhilippineMoney.aspx',
    es: 'Bangko Sentral ng Pilipinas — Historia del dinero filipino',
    en: 'Bangko Sentral ng Pilipinas — History of Philippine Money',
    note: {
      es: 'Pesos fuertes de 1852, Bank of the Philippine Islands en 1912, sobrecarga Victory y series de la República.',
      en: '1852 pesos fuertes, Bank of the Philippine Islands in 1912, the Victory overprint, and Republic series.',
    },
  },
  {
    href: 'https://www.bsp.gov.ph/SitePages/CoinsAndNotes/EnglishSeries.aspx',
    es: 'Bangko Sentral ng Pilipinas — Serie inglesa y billetes desmonetizados',
    en: 'Bangko Sentral ng Pilipinas — English Series / demonetized notes',
    note: {
      es: 'La Serie Victory n.º 66 llegó en 1944; sobrecarga CBP; curso legal hasta el 30 de julio de 1964.',
      en: 'Victory Series No. 66 arrived in 1944; CBP overprint; legal tender until 30 July 1964.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Banknotes_of_the_Philippine_peso',
    es: 'Wikipedia — Billetes del peso filipino',
    en: 'Wikipedia — Banknotes of the Philippine peso',
    note: {
      es: 'Banco Español Filipino, periodo estadounidense, ocupación japonesa y series del banco central.',
      en: 'Banco Español Filipino, the American period, Japanese occupation, and central-bank series.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL.htm',
    es: 'Bank Note Museum — Filipinas',
    en: 'Bank Note Museum — Philippines',
  },
  {
    href: 'https://www.numismatics.ph/banknotes/victory-series/',
    es: 'numismatics.ph — Catálogo de Certificados del Tesoro, Serie Victory n.º 66',
    en: 'numismatics.ph — Victory Series No. 66 Treasury Certificate Catalog',
  },
  {
    href: 'https://www.officialgazette.gov.ph/1944/11/18/executive-order-no-25-s-1944/',
    es: 'Orden Ejecutiva n.º 25, s. 1944 (18 de noviembre de 1944)',
    en: 'Executive Order No. 25, s. 1944 (18 November 1944)',
    note: {
      es: 'Reconocimiento de los Victory Pesos como moneda de curso legal.',
      en: 'Recognition of Victory Pesos as legal tender.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Filipinas · Del peso fuerte al Banco Central | Notofilia',
    metaDescription:
      'Catálogo de papel moneda filipino: colonia española, Revolución, Commonwealth, ocupación japonesa y el Banco Central, con la Serie Victory n.º 66.',
    kicker: 'Filipinas · Notafilia',
    title: 'Del peso fuerte al Banco Central',
    heroAlt:
      'Mapa vintage en relieve 3D del archipiélago filipino sobre pergamino, con islas verdes, edificios y el título Filipinas escrito en caligrafía decorativa',
    intro: [
      'El papel moneda en Filipinas nació de un banco comercial, no de un instituto emisor del Estado. El 1 de mayo de 1852 El Banco Español Filipino de Isabel II sacó pesos fuertes de 10, 25, 50 y 200; el Bangko Sentral ng Pilipinas los señala como el primer papel que circuló en el país, visibles desde 1855. Tras 1868 el banco acortó el nombre; la serie bifaz de 1896 cerró la era española.',
      'La Revolución y la Primera República pagaron la guerra con billetes propios, de vida breve. Con la Coinage Act de 1903 llegó el papel de la administración estadounidense: certificados de plata, luego del Tesoro, y las emisiones del Bank of the Philippine Islands —el sucesor inglés del banco español, rebautizado en 1912— y del Philippine National Bank. El Commonwealth heredó esos certificados.',
      'La ocupación japonesa (1942–1945) impuso papel de invasión que la inflación dejó en «Mickey Mouse money». Al desembarcar las fuerzas de MacArthur en Leyte, el 20 de octubre de 1944, llegaron los Certificados del Tesoro de la Serie Victory n.º 66, grabados por el Bureau of Engraving and Printing. La Orden Ejecutiva n.º 25 reconoció esos Victory Pesos como curso legal. Las primeras fichas de esta vitrina son el 1, 2, 5 y 20 pesos de esa serie.',
      'En 1949 el Central Bank of the Philippines sobrecargó parte de la serie Victory y encargó la English Series a Thomas De La Rue. Luego vinieron la filipinización —Pilipino, Ang Bagong Lipunan, New Design— y, desde 1993, el Bangko Sentral ng Pilipinas. Esta vitrina no es un catálogo completo: es el inventario de las piezas que se documentarán aquí.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas se publican a medida que se documentan las piezas. Por ahora abre el Commonwealth con los certificados Victory n.º 66 de 1, 2, 5 y 20 pesos.',
    viewChapter: 'Leer el capítulo',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Philippines · From the peso fuerte to the Central Bank | Notofilia',
    metaDescription:
      'Catalog of Philippine paper money: the Spanish colony, the Revolution, the Commonwealth, Japanese occupation, and the Central Bank, with Victory Series No. 66.',
    kicker: 'Philippines · Notaphily',
    title: 'From the peso fuerte to the Central Bank',
    heroAlt:
      'Vintage 3D relief map of the Philippine archipelago on parchment, with green islands, buildings, and the title Philippines in decorative lettering',
    intro: [
      'Paper money in the Philippines was born of a commercial bank, not a state institute of issue. On 1 May 1852 El Banco Español Filipino de Isabel II issued pesos fuertes of 10, 25, 50, and 200; the Bangko Sentral ng Pilipinas marks them as the first paper that circulated in the country, seen from 1855. After 1868 the bank shortened its name; the 1896 biface series closed the Spanish era.',
      'The Revolution and the First Republic paid for war with their own short-lived notes. The Coinage Act of 1903 brought paper of the American administration: silver certificates, then Treasury certificates, and the issues of the Bank of the Philippine Islands — the English successor of the Spanish bank, renamed in 1912 — and the Philippine National Bank. The Commonwealth inherited those certificates.',
      'The Japanese occupation (1942–1945) imposed invasion paper that inflation left as “Mickey Mouse money.” When MacArthur’s forces landed on Leyte on 20 October 1944, they brought Victory Series No. 66 Treasury Certificates, engraved by the Bureau of Engraving and Printing. Executive Order No. 25 recognized those Victory Pesos as legal tender. The first note pages in this case are the 1, 2, 5, and 20 pesos of that series.',
      'In 1949 the Central Bank of the Philippines overprinted part of the Victory series and ordered the English Series from Thomas De La Rue. Filipinization followed — Pilipino, Ang Bagong Lipunan, New Design — and, from 1993, the Bangko Sentral ng Pilipinas. This case is not a complete catalog: it is the inventory of the pieces that will be documented here.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Note pages are published as pieces are documented. For now the Commonwealth opens with the Victory Series No. 66 certificates of 1, 2, 5, and 20 pesos.',
    viewChapter: 'Read the chapter',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(SERIES_PATH, locale);
}

export function chapterHref(id: PhilippinesChapterId): string {
  return `#${id}`;
}

export type PhilippinesCatalogItem = {
  id: string;
  years: LocalizedText;
  title: LocalizedText;
  href: string;
  kind: 'chapter';
};

export function philippinesCatalogItems(): PhilippinesCatalogItem[] {
  return philippinesChapters.map((chapter) => ({
    id: chapter.id,
    years: chapter.years,
    title: chapter.title,
    href: chapterHref(chapter.id),
    kind: 'chapter' as const,
  }));
}
