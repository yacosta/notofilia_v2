import type { CatalogSource, LocalizedText } from './catalog';

export const GUATEMALA_PATH = '/coleccion/guatemala/';

export type GuatemalaChapterGroup = 'impresion' | 'banco-colombiano';

export type GuatemalaChapterId =
  | 'primeros-papeles'
  | 'planchas-extranjeras'
  | 'quetzal'
  | 'recaredo-de-villa'
  | 'guatemala-1878-1901'
  | 'serie-bradbury';

export type GuatemalaChapter = {
  id: GuatemalaChapterId;
  group: GuatemalaChapterGroup;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const guatemalaChapters: GuatemalaChapter[] = [
  {
    id: 'primeros-papeles',
    group: 'impresion',
    years: { es: '1834–1874', en: '1834–1874' },
    title: {
      es: 'Primeros papeles y el Banco Nacional',
      en: 'First papers and the Banco Nacional',
    },
    lead: {
      es: 'Antes de un oligopolio de bancos privados, el Estado y un banco de 1874 encargaron papel a imprentas de seguridad.',
      en: 'Before an oligopoly of private banks, the state and an 1874 bank ordered paper from security printers.',
    },
    body: {
      es: 'El papel moneda en Guatemala nació de una deuda, no de un banco central. En 1834 el gobierno emitió billetes por unos 3.000 pesos para cancelar un empréstito forzoso —dato que la notafilia local recoge a partir de Yeoman—. El peso republicano, acuñado desde el gobierno de Rafael Carrera, siguió siendo la unidad de cuenta; el papel fue excepcional. El primer banco del país, el Banco Nacional de Guatemala, se fundó en 1874. Todos sus billetes —reales y pesos— salieron de la Compañía Columbiana de Billetes de Banco, una casa de grabado estadounidense. Esa decisión abre el tema de esta vitrina: quién imprimió el papel, y con qué planchas, importa tanto como quién lo firmó.',
      en: 'Paper money in Guatemala was born of a debt, not of a central bank. In 1834 the government issued notes for about 3,000 pesos to cancel a forced loan — a fact local notaphily takes from Yeoman. The republican peso, struck from Rafael Carrera’s government onward, remained the unit of account; paper was exceptional. The country’s first bank, the Banco Nacional de Guatemala, was founded in 1874. All of its notes — reales and pesos — came from the Columbian Bank Note Company, a U.S. engraving house. That choice opens this case: who printed the paper, and from which plates, matters as much as who signed it.',
    },
  },
  {
    id: 'planchas-extranjeras',
    group: 'impresion',
    years: { es: '1877–1926', en: '1877–1926' },
    title: {
      es: 'Planchas de Nueva York y Londres',
      en: 'Plates from New York and London',
    },
    lead: {
      es: 'Bancos privados de emisión sin ley bancaria general: American Bank Note, Waterlow, Bradbury Wilkinson y Hamilton.',
      en: 'Private banks of issue without a general banking law: American Bank Note, Waterlow, Bradbury Wilkinson, and Hamilton.',
    },
    body: {
      es: 'La banca ininterrumpida empezó en 1877. Hasta 1926 no hubo legislación bancaria general: cada casa operó con concesión y el derecho de emitir billetes pagaderos al portador. El Banco Internacional de Guatemala y el Banco Comercial (ambos 1877) abrieron el camino; les siguieron El Banco Colombiano (1878), el Banco de Occidente en Quetzaltenango (1881), el Banco Americano, el Agrícola Hipotecario y un Banco de Guatemala privado (1894–1895). Las planchas salieron del extranjero. La American Bank Note Company grabó series del Banco Americano y del Banco de Guatemala —y recicló viñetas, incluso el Gran Sello de los Estados Unidos, en el papel guatemalteco—. Waterlow & Sons de Londres tomó más tarde al Banco Americano y al Internacional. Bradbury, Wilkinson & Co. grabó al Banco de Occidente y a El Banco Colombiano. El Comité Bancario de 1899, creado bajo Manuel Estrada Cabrera para emitir con garantía de rentas y bienes del Estado, encargó a la Hamilton Bank Note Company. Esas firmas al pie del billete son el archivo de la impresión: intaglio, numeración cruzada y viñetas de stock que viajaban de un país a otro.',
      en: 'Uninterrupted banking began in 1877. Until 1926 there was no general banking law: each house operated under concession and the right to issue notes payable to bearer. The Banco Internacional de Guatemala and the Banco Comercial (both 1877) opened the way; El Banco Colombiano (1878), the Banco de Occidente in Quetzaltenango (1881), the Banco Americano, the Agrícola Hipotecario, and a private Banco de Guatemala (1894–1895) followed. The plates came from abroad. The American Bank Note Company engraved series for the Banco Americano and the Banco de Guatemala — and recycled vignettes, even the Great Seal of the United States, onto Guatemalan paper. Waterlow & Sons of London later took the Banco Americano and the Internacional. Bradbury, Wilkinson & Co. engraved the Banco de Occidente and El Banco Colombiano. The Banking Committee of 1899, created under Manuel Estrada Cabrera to issue against state revenues and property, ordered from the Hamilton Bank Note Company. Those imprints at the foot of the note are the printing archive: intaglio, crossed numbering, and stock vignettes that travelled from country to country.',
    },
  },
  {
    id: 'quetzal',
    group: 'impresion',
    years: { es: '1924–1948', en: '1924–1948' },
    title: {
      es: 'El quetzal y el monopolio de emitir',
      en: 'The quetzal and the monopoly of issue',
    },
    lead: {
      es: 'Reforma de Orellana y Kemmerer, Banco Central de 1926 y primeros billetes propios del Banco de Guatemala en 1948.',
      en: 'Orellana and Kemmerer reform, the 1926 Central Bank, and the Banco de Guatemala’s first own notes in 1948.',
    },
    body: {
      es: 'El oligopolio de bancos emisores, regulado bajo Estrada Cabrera, dejó al Estado endeudado con esas mismas casas. Kemmerer visitó el país en 1919 y volvió invitado por José María Orellana en 1924. La Caja Reguladora de 1923 estabilizó el cambio —el peso había caído a más de 60 por dólar—. En noviembre de 1924 la Ley Monetaria creó el quetzal, igual al dólar, bajo patrón oro; un quetzal equivalió a 60 pesos. El 30 de junio de 1926 un acuerdo gubernativo fundó el Banco Central de Guatemala, único emisor. Los «chemas», con la efigie de Orellana, y luego los «centrales» de la época de Ubico, cerraron el capítulo de las planchas privadas. Tras la Revolución de octubre de 1944, el Decreto 215 de 11 de diciembre de 1945 —Ley Orgánica del Banco de Guatemala— y el Decreto 203 (Ley Monetaria) crearon el banco de Estado. El 15 de junio de 1946 el antiguo Banco Central renunció al derecho de emitir. Los primeros billetes con diseño propio del Banco de Guatemala —50 centavos y 1, 5, 10, 20 y, por primera vez, 100 quetzales— llevan fecha 15 de septiembre de 1948. Esta vitrina investiga esa trayectoria de impresión; las fichas de cada pieza se publicarán a medida que se documenten.',
      en: 'The oligopoly of issuing banks, regulated under Estrada Cabrera, left the state indebted to those same houses. Kemmerer visited in 1919 and returned at José María Orellana’s invitation in 1924. The Regulatory Fund of 1923 stabilized the exchange — the peso had fallen to more than 60 to the dollar. In November 1924 the Monetary Law created the quetzal, equal to the dollar, under the gold standard; one quetzal equalled 60 pesos. On 30 June 1926 a government agreement founded the Central Bank of Guatemala as sole issuer. The “chemas,” with Orellana’s effigy, and later the “centrales” of the Ubico years, closed the chapter of private plates. After the October Revolution of 1944, Decree 215 of 11 December 1945 — the Organic Law of the Banco de Guatemala — and Decree 203 (Monetary Law) created the state bank. On 15 June 1946 the old Central Bank waived the right to issue. The Banco de Guatemala’s first notes of its own design — 50 centavos and 1, 5, 10, 20, and, for the first time, 100 quetzales — are dated 15 September 1948. This case investigates that printing trajectory; individual note pages will be published as pieces are documented.',
    },
  },
  {
    id: 'recaredo-de-villa',
    group: 'banco-colombiano',
    years: { es: '1873–1878', en: '1873–1878' },
    title: {
      es: 'Recaredo de Villa y el capital antioqueño',
      en: 'Recaredo de Villa and Antioquian capital',
    },
    lead: {
      es: 'Del Banco de Antioquia y la presidencia del Estado Soberano al exilio en Guatemala.',
      en: 'From the Banco de Antioquia and the presidency of the Sovereign State to exile in Guatemala.',
    },
    body: {
      es: 'Don Recaredo de Villa y Piedrahita (1826–1905) fue primer gerente del Banco de Antioquia en 1873 y, a la muerte del general Pedro Justo Berrío en 1875, su sucesor en la presidencia del Estado Soberano de Antioquia. Impulsó el Ferrocarril de Antioquia junto al ingeniero cubano Francisco Javier Cisneros. Derrocado por la revolución de 1876, abandonó Colombia y se estableció con su familia en la República de Guatemala. Nunca regresó. La Constitución de Rionegro de 1863 —defensora de la libertad económica privada— había abierto los bancos emisores en Colombia; Berrío impulsó el Banco de Antioquia con un capital inicial de 500.000 pesos, un verdadero banco emisor. El Banco Colombiano en Guatemala se formó con la imagen y los estatutos de esa casa: una prolongación de la banca libre antioqueña más allá de la frontera. Algunos historiadores insinúan que sus billetes circularon tanto en Guatemala como en Colombia.',
      en: 'Don Recaredo de Villa y Piedrahita (1826–1905) was first manager of the Banco de Antioquia in 1873 and, on General Pedro Justo Berrío’s death in 1875, his successor as president of the Sovereign State of Antioquia. He promoted the Antioquia Railway with the Cuban engineer Francisco Javier Cisneros. Overthrown by the revolution of 1876, he left Colombia and settled with his family in the Republic of Guatemala. He never returned. The Constitution of Rionegro of 1863 — a defender of private economic liberty — had opened banks of issue in Colombia; Berrío promoted the Banco de Antioquia with an initial capital of 500,000 pesos, a true bank of issue. El Banco Colombiano in Guatemala was formed in the image and statutes of that house: an extension of Antioquian free banking beyond the border. Some historians suggest that its notes circulated in both Guatemala and Colombia.',
    },
  },
  {
    id: 'guatemala-1878-1901',
    group: 'banco-colombiano',
    years: { es: '1878–1901', en: '1878–1901' },
    title: {
      es: 'Guatemala en el tiempo del banco',
      en: 'Guatemala in the years of the bank',
    },
    lead: {
      es: 'Café, exilio antioqueño y la sociedad anónima constituida el 12 de agosto de 1878.',
      en: 'Coffee, Antioquian exile, and the stock company formed on 12 August 1878.',
    },
    body: {
      es: 'Un año después del Banco Internacional, el 12 de agosto de 1878 se constituyó la sociedad anónima «Banco de Colombia» —conocida en la notafilia como El Banco Colombiano— con 218 acciones de 1.000 pesos. La mayor parte del capital vino de Medellín y Antioquia: Vicente B. Villa e Hijos, Recaredo de Villa, los Vásquez Calle, los Jaramillo y Mariano Ospina Rodríguez, expresidente de la Confederación Granadina exiliado tras la guerra civil de 1861. En Guatemala suscribieron acciones Justo Rufino Barrios, el ministro de Hacienda José María Samayoa —ligado a la casa londinense Stiebel Brothers— y otras familias de la capital. El banco nació para dar crédito a cafetaleros; Ospina había sido propietario de la finca Las Mercedes, en Escuintla, una de las grandes productoras de grano oro de la época. Alejandro Sinibaldi fue nombrado director. El edificio se alzó en la 7.ª Avenida Sur y 9.ª Calle de la ciudad de Guatemala. El banco emitió sus propios billetes hasta 1901, en los años de Barrios, de la expansión del café hacia la Costa Pacífica y de un peso que, a finales del siglo, ya no se acuñaba en las denominaciones mayores.',
      en: 'A year after the Banco Internacional, on 12 August 1878 the stock company “Banco de Colombia” — known in notaphily as El Banco Colombiano — was formed with 218 shares of 1,000 pesos. Most of the capital came from Medellín and Antioquia: Vicente B. Villa e Hijos, Recaredo de Villa, the Vásquez Calle family, the Jaramillos, and Mariano Ospina Rodríguez, former president of the Granadine Confederation, exiled after the civil war of 1861. In Guatemala, Justo Rufino Barrios, finance minister José María Samayoa — tied to the London house Stiebel Brothers — and other capital families subscribed shares. The bank was born to credit coffee growers; Ospina had owned Finca Las Mercedes, in Escuintla, one of the great gold-bean producers of the time. Alejandro Sinibaldi was named director. The building stood at 7th Avenue South and 9th Street in Guatemala City. The bank issued its own notes until 1901, in the years of Barrios, of coffee’s expansion toward the Pacific coast, and of a peso that, by the end of the century, was no longer struck in the higher denominations.',
    },
  },
  {
    id: 'serie-bradbury',
    group: 'banco-colombiano',
    years: { es: '1879–1901', en: '1879–1901' },
    title: {
      es: 'La serie de Bradbury, Wilkinson & Co.',
      en: 'The Bradbury, Wilkinson & Co. series',
    },
    lead: {
      es: 'Seis denominaciones grabadas en Londres; el Un Peso del 17 de abril de 1900 es la pieza más citada.',
      en: 'Six denominations engraved in London; the 1-peso of 17 April 1900 is the most cited piece.',
    },
    body: {
      es: 'El banco encargó la serie a Bradbury, Wilkinson & Co. Engravers, Londres: gran formato —unos 180 × 120 mm en el Un Peso— con intaglio y numeración doble en las esquinas superiores, práctica de la banca privada centroamericana. El Standard Catalog of World Paper Money — Specialized Issues y el Bank Note Museum registran la emisión 1879–1901 como Pick S121–S126: 1, 5, 10, 20, 50 y 100 pesos. Las viñetas, descritas en las fuentes y no reproducidas aquí, distinguen cada valor: el peso, con los escudos de Guatemala y Colombia flanqueando un arriero y una carreta de bueyes, y a la izquierda una figura con armadura que sostiene el Gorro Frigio; el de 5, un cactus; el de 10, trabajadores cargando un bote en la playa; el de 20, una granja; el de 50, un paisaje; el de 100, ganado. Fechas conocidas van de 1879 a septiembre de 1901; la del Un Peso más citada es el 17 de abril de 1900. El anverso promete el pago al portador en moneda corriente y efectiva; el reverso ornamental, en verde, repite la leyenda del banco «en Guatemala». Esta página no exhibe esas piezas: documenta quién las mandó grabar y en qué Guatemala circularon.',
      en: 'The bank ordered the series from Bradbury, Wilkinson & Co. Engravers, London: large format — about 180 × 120 mm on the 1-peso — with intaglio and double numbering in the upper corners, a practice of Central American private banking. The Standard Catalog of World Paper Money — Specialized Issues and the Bank Note Museum record the 1879–1901 issue as Pick S121–S126: 1, 5, 10, 20, 50, and 100 pesos. The vignettes, described in the sources and not reproduced here, distinguish each value: the peso, with the arms of Guatemala and Colombia flanking a muleteer and an ox cart, and at left a figure in armor holding the Phrygian cap; the 5, a cactus; the 10, workers loading a boat on a beach; the 20, a farm; the 50, a landscape; the 100, cattle. Known dates run from 1879 to September 1901; the most cited 1-peso is 17 April 1900. The face promises payment to bearer in current and effective coin; the ornamental back, in green, repeats the bank’s legend “en Guatemala.” This page does not exhibit those pieces: it documents who ordered them engraved and in which Guatemala they circulated.',
    },
  },
];

export const printingChapters = guatemalaChapters.filter((chapter) => chapter.group === 'impresion');
export const bancoColombianoChapters = guatemalaChapters.filter(
  (chapter) => chapter.group === 'banco-colombiano',
);

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://banguat.gob.gt/page/resena-historica',
    es: 'Banco de Guatemala — Reseña histórica',
    en: 'Banco de Guatemala — Historical review (Spanish)',
    note: {
      es: 'Reforma de 1924–1926, Caja Reguladora, Ley Monetaria del quetzal y fundación del Banco Central el 30 de junio de 1926.',
      en: '1924–1926 reform, Regulatory Fund, Monetary Law of the quetzal, and founding of the Central Bank on 30 June 1926.',
    },
  },
  {
    href: 'https://banguat.gob.gt/page/historical-review',
    es: 'Banco de Guatemala — Historical Review',
    en: 'Banco de Guatemala — Historical Review',
    note: {
      es: 'Kemmerer en 1919 y 1924; Ley Orgánica del Banco de Guatemala (Decreto 215, 11 de diciembre de 1945).',
      en: 'Kemmerer in 1919 and 1924; Organic Law of the Banco de Guatemala (Decree 215, 11 December 1945).',
    },
  },
  {
    href: 'https://banguat.gob.gt/page/resena-historica-de-la-moneda-de-guatemala-0',
    es: 'Banco de Guatemala — Reseña histórica de la moneda',
    en: 'Banco de Guatemala — Historic review of the currency (Spanish)',
    note: {
      es: 'Papel de los bancos del sistema, cédulas, fichas de finca, Comité Bancario y primer billete propio del 15 de septiembre de 1948.',
      en: 'System-bank paper, cédulas, plantation tokens, the Banking Committee, and the first own note of 15 September 1948.',
    },
  },
  {
    href: 'https://banguat.gob.gt/page/historic-review-guatemala-currency',
    es: 'Banco de Guatemala — Historic Review of Guatemala Currency',
    en: 'Banco de Guatemala — Historic Review of Guatemala Currency',
    note: {
      es: 'Un quetzal = 60 pesos; monopolio estatal de emisión tras los bancos privados.',
      en: 'One quetzal = 60 pesos; state monopoly of issue after the private banks.',
    },
  },
  {
    href: 'https://banguat.gob.gt/page/banco-central',
    es: 'Banco de Guatemala — Banco Central',
    en: 'Banco de Guatemala — Central Bank (Spanish)',
    note: {
      es: 'Acuerdo n.º 879 del 26 de noviembre de 1924; «chemas» y «centrales».',
      en: 'Agreement No. 879 of 26 November 1924; “chemas” and “centrales.”',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/GTM/GTM-COM.htm',
    es: 'Bank Note Museum — Bancos privados de Guatemala',
    en: 'Bank Note Museum — Private banks of Guatemala',
    note: {
      es: 'El Banco Colombiano, emisión 1879–1901, Pick S121–S126; impresores por entidad.',
      en: 'El Banco Colombiano, 1879–1901 issue, Pick S121–S126; printers by issuer.',
    },
  },
  {
    href: 'https://www.atsnotes.com/catalog/banknotes/guatemala.html',
    es: 'ATS Notes — Catálogo de papel moneda de Guatemala',
    en: 'ATS Notes — Guatemala paper-money catalog',
    note: {
      es: 'Listado de bancos privados y de las series del Banco de Guatemala.',
      en: 'List of private banks and Banco de Guatemala series.',
    },
  },
  {
    href: 'https://guatemaladeayer.blogspot.com/2011/05/historia-del-banco-de-colombia.html',
    es: 'Guatemala de ayer — Historia del Banco de Colombia de Guatemala',
    en: 'Guatemala de ayer — History of the Banco de Colombia of Guatemala',
    note: {
      es: 'Constitución del 12 de agosto de 1878, accionistas antioqueños y guatemaltecos, café y sede en la capital.',
      en: 'Deed of 12 August 1878, Antioquian and Guatemalan shareholders, coffee, and the capital seat.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
    es: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
    en: 'Banrepcultural Encyclopedia — Paper money in Colombia',
    note: {
      es: 'Contexto de la banca libre antioqueña de la que sale Recaredo de Villa.',
      en: 'Context for the Antioquian free banking from which Recaredo de Villa came.',
    },
  },
  {
    href: 'https://en.numista.com',
    es: 'Numista — Papel moneda mundial',
    en: 'Numista — World paper money',
    note: {
      es: 'Catálogo general citado en la ficha histórica del Un Peso de 1900.',
      en: 'General catalog cited in the historical record of the 1900 1-peso.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Guatemala · Impresión de billetes y El Banco Colombiano | Notofilia',
    metaDescription:
      'Historia de la impresión de papel moneda en Guatemala: planchas de Nueva York y Londres, banca privada y El Banco Colombiano (1878–1901). Las fichas se publicarán a medida que se documenten.',
    kicker: 'Guatemala · Notafilia',
    title: 'Impresión de billetes y El Banco Colombiano',
    heroAlt:
      'Mapa vintage en relieve 3D de Guatemala sobre pergamino, con Tikal, los volcanes Acatenango, de Fuego y de Agua, el lago de Atitlán, Antigua, un sello del quetzal, un pasaporte de 1908 y el título Guatemala',
    intro: [
      'El papel moneda en Guatemala nació de la urgencia fiscal y de la banca privada, no de un instituto emisor. En 1834 el Estado mandó imprimir unos 3.000 pesos para cancelar una deuda forzosa. El Banco Nacional de 1874 encargó todas sus planchas a la Compañía Columbiana de Billetes de Banco. Desde 1877 hasta 1926, sin ley bancaria general, un oligopolio de casas particulares pagó el comercio con billetes al portador grabados en Nueva York y Londres.',
      'Esta vitrina se concentra en esa historia de impresión. La American Bank Note Company, Waterlow & Sons, Bradbury, Wilkinson & Co. y la Hamilton Bank Note Company firmaron el pie de las series. Reciclaron viñetas —alegorías, el Gran Sello de los Estados Unidos, paisajes de stock— de un país a otro. El Banco de Occidente y El Banco Colombiano miraron a Londres; el Americano y el Banco de Guatemala privado, a Nueva York.',
      'El Banco Colombiano, fundado en la ciudad de Guatemala en 1878 con capital antioqueño en torno a Recaredo de Villa, es el capítulo colombiano de esa imprenta. Emitió hasta 1901. Las secciones siguientes reconstruyen al fundador, la Guatemala del café y de Justo Rufino Barrios, y la serie que Bradbury Wilkinson grabó en Londres —sin reproducir los billetes, que se publicarán como fichas cuando estén documentados en la colección.',
      'La reforma de 1924–1926, con estudios de Edwin W. Kemmerer y el gobierno de José María Orellana, creó el quetzal y, el 30 de junio de 1926, el Banco Central con el monopolio de emitir. El Banco de Guatemala de 1945–1946 heredó ese derecho. Sus primeros billetes de diseño propio llevan fecha 15 de septiembre de 1948.',
    ],
    bancoTitle: 'El Banco Colombiano',
    bancoIntro:
      'Tres hechos de la época: el exilio antioqueño de Recaredo de Villa, la Guatemala cafetalera de 1878 y las planchas londinenses que firmaron la serie hasta 1901.',
    sourcesTitle: 'Fuentes',
    colombiaLead: 'La banca libre de la que sale este banco se documenta en la vitrina de Colombia.',
    colombiaLink: 'Colombia · Banca libre y Banco de la República',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Esta página no reproduce billetes. Las fichas de cada pieza se publicarán a medida que se documenten, como en las demás vitrinas de notafilia.',
    parentLink: 'Colección Virtual Notafilia',
  },
  en: {
    metaTitle: 'Guatemala · Banknote printing and El Banco Colombiano | Notofilia',
    metaDescription:
      'A history of banknote printing in Guatemala: New York and London plates, private banks of issue, and El Banco Colombiano (1878–1901). Note pages will be published as they are documented.',
    kicker: 'Guatemala · Notaphily',
    title: 'Banknote printing and El Banco Colombiano',
    heroAlt:
      'Vintage 3D relief map of Guatemala on parchment, with Tikal, the volcanoes Acatenango, Fuego, and Agua, Lake Atitlán, Antigua, a quetzal stamp, a 1908 passport, and the title Guatemala',
    intro: [
      'Paper money in Guatemala was born of fiscal urgency and private banking, not of a state issuer. In 1834 the state had some 3,000 pesos printed to cancel a forced debt. The Banco Nacional of 1874 ordered all its plates from the Columbian Bank Note Company. From 1877 to 1926, with no general banking law, an oligopoly of private houses paid for trade with bearer notes engraved in New York and London.',
      'This case concentrates on that printing history. The American Bank Note Company, Waterlow & Sons, Bradbury, Wilkinson & Co., and the Hamilton Bank Note Company signed the foot of the series. They recycled vignettes — allegories, the Great Seal of the United States, stock landscapes — from country to country. The Banco de Occidente and El Banco Colombiano looked to London; the Americano and the private Banco de Guatemala, to New York.',
      'El Banco Colombiano, founded in Guatemala City in 1878 with Antioquian capital around Recaredo de Villa, is the Colombian chapter of that press. It issued until 1901. The sections that follow reconstruct the founder, the coffee Guatemala of Justo Rufino Barrios, and the series Bradbury Wilkinson engraved in London — without reproducing the notes, which will be published as catalog pages when they are documented in the collection.',
      'The 1924–1926 reform, with studies by Edwin W. Kemmerer and the government of José María Orellana, created the quetzal and, on 30 June 1926, the Central Bank with the monopoly of issue. The Banco de Guatemala of 1945–1946 inherited that right. Its first notes of its own design are dated 15 September 1948.',
    ],
    bancoTitle: 'El Banco Colombiano',
    bancoIntro:
      'Three facts of the period: Recaredo de Villa’s Antioquian exile, the coffee Guatemala of 1878, and the London plates that signed the series through 1901.',
    sourcesTitle: 'Sources',
    colombiaLead: 'The free banking from which this bank came is documented in the Colombia case.',
    colombiaLink: 'Colombia · Free banking and the Banco de la República',
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'This page does not reproduce banknotes. Individual note pages will be published as they are documented, as in the other notaphily cases.',
    parentLink: 'Virtual Notaphily Collection',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/guatemala/' : GUATEMALA_PATH;
}
