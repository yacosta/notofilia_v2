import type { CatalogSource, LocalizedText } from './catalog';

export const COLOMBIA_PATH = '/coleccion/colombia/';

export type ColombiaChapterId =
  | 'independencia'
  | 'banca-libre'
  | 'banco-nacional'
  | 'banco-central'
  | 'banco-de-la-republica'
  | 'familias-modernas';

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
      es: 'Hasta mediados del siglo XIX el comercio siguió en oro, plata y moneda extranjera. Mosquera llegó a mandar billetes de tesorería con ánimo de banco central; el público los descontaba y no arraigaron. La Ley 35 de 1865 abrió la emisión privada convertible. El Banco de Bogotá se constituyó el 15 de noviembre de 1870 —comerciantes y políticos, escritura en la Notaría Segunda— y fue el primer emisor privado que el comercio aceptó de forma amplia: sus estatutos ataban el billete al metálico en caja. Mover especie por un relieve accidentado era caro y peligroso; los bancos regionales cubrieron el crédito local —comercio, agricultura, infraestructura— con papel propio, fraccionarios incluidos. Entre 1870 y 1886 se fundaron más de tres docenas. Le siguieron, entre otros, los de Antioquia, Colombia, Bolívar, Medellín, Pamplona, el Norte, el Cauca, el Hipotecario de Bogotá y Rio Hacha, en la Guajira. La Enciclopedia Banrepcultural señala que los bancos más importantes encargaron la impresión a Inglaterra o Estados Unidos. En esta colección caben pruebas, especímenes y emisiones regionales de esa década.',
      en: 'Until the mid-nineteenth century, trade still ran on gold, silver, and foreign coin. Mosquera had even ordered treasury notes in the hope of a central bank; the public discounted them and they did not take. Law 35 of 1865 opened private convertible issue. The Banco de Bogotá was constituted on 15 November 1870 — merchants and politicians, a deed at the Second Notary — and was the first private issuer the market broadly accepted: its statutes tied the note to metal in the till. Moving specie across broken country was costly and dangerous; regional banks covered local credit — trade, agriculture, infrastructure — with their own paper, fractionals included. Between 1870 and 1886 more than three dozen were founded. Banks of Antioquia, Colombia, Bolívar, Medellín, Pamplona, the Norte, the Cauca, the Hipotecario of Bogotá, and Rio Hacha on the Guajira followed. Banrepcultural’s encyclopedia notes that the leading banks ordered printing in England or the United States. Proofs, specimens, and regional issues from that decade belong in this collection.',
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
      es: 'La Regeneración, el curso forzoso de 1886, la Ley 70 de 1894 y el papel de la Guerra de los Mil Días.',
      en: 'La Regeneración, the 1886 fiat standard, Law 70 of 1894, and the paper of the Thousand Days’ War.',
    },
    body: {
      es: 'En marzo de 1880 se propuso un Banco Nacional; la Ley 39 de 1880 y su establecimiento en 1881 lo hicieron pieza de la Regeneración de Rafael Núñez y Miguel Antonio Caro: manejar fondos del Estado, emitir y prestar al fisco. Al principio convivió con la emisión privada. En 1886 el gobierno cortó la convertibilidad de esos billetes en metálico: el Decreto 104 definió el papel como unidad monetaria y moneda de cuenta, y la Ley 87 lo declaró moneda legal de curso forzoso —un patrón fiduciario—. La Ley 57 de 1887 reglamentó la banca en todo el país y suspendió el derecho de los particulares a emitir mientras el Nacional tuviera el privilegio exclusivo. La política de emisión, opaca y holgada, depreció el billete; las emisiones clandestinas acabaron de romper la confianza. Por esos excesos, la Ley 70 de 1894 ordenó liquidar el instituto y amortizar el papel; Astrid Romero sitúa el cierre definitivo el 1.º de enero de 1896, tras unos quince años. La Guerra de los Mil Días (1899–1902) volvió a disparar la impresión de papel sin respaldo —el gobierno y mandos regionales— y una de las inflaciones más graves del país. El catálogo de la exposición permanente del Museo Casa de Moneda registra billetes del Gobierno Provisional impresos en Ocaña en 1900. La Junta de Emisión llegó a resellar papel de bancos privados con el sello del Nacional. En 1909 la Junta de Conversión fijó 100 pesos de papel por 1 peso oro. Aun en los primeros años de 1910 los billetes viejos del Banco Nacional seguían siendo buena parte de la masa monetaria, pese a las agencias creadas para canjearlos y retirarlos.',
      en: 'A Banco Nacional was proposed in March 1880; Law 39 of 1880 and its establishment in 1881 made it part of Rafael Núñez and Miguel Antonio Caro’s Regeneración: to handle state funds, issue notes, and lend to the treasury. At first it coexisted with private issues. In 1886 the government ended convertibility of those bills into metal: Decree 104 defined the paper peso as the monetary unit and unit of account, and Law 87 made it forced legal tender — a fiat standard. Law 57 of 1887 regulated banking nationwide and suspended private banks’ right to issue while the Nacional held the exclusive privilege. A lax, untransparent issuing policy depreciated the bill; clandestine issues finished the collapse of confidence. For those excesses, Law 70 of 1894 ordered the institute liquidated and the paper amortized; Astrid Romero places the final closure on 1 January 1896, after about fifteen years. The Thousand Days’ War (1899–1902) set off another surge of unbacked paper — from the government and from regional commanders — and one of the country’s worst inflations. The Casa de Moneda Museum’s permanent-exhibition booklet records Gobierno Provisional notes printed at Ocaña in 1900. The Issue Board even overstamped private-bank paper with the Nacional’s seal. In 1909 the Conversion Board set 100 paper pesos to 1 gold peso. Even in the early 1910s old Banco Nacional bills still made up a large share of the money supply, despite agencies created to convert and retire them.',
    },
  },
  {
    id: 'banco-central',
    years: { es: '1905–1909', en: '1905–1909' },
    title: {
      es: 'Banco Central de Colombia',
      en: 'Banco Central de Colombia',
    },
    lead: {
      es: 'Reyes, la estabilización de posguerra y un emisor de vida corta.',
      en: 'Reyes, postwar stabilization, and a short-lived bank of issue.',
    },
    body: {
      es: 'Para estabilizar la economía después de la guerra, el gobierno de Rafael Reyes creó el Banco Central de Colombia en 1905 —Decreto 47 del 6 de marzo; la Asamblea lo aprobó días después— con funciones de emisión, giro y depósito, en la línea del Nacional. Fue un instituto de vida corta: tras la caída de Reyes, el gobierno de Carlos E. Restrepo le retiró en 1909 el privilegio exclusivo de emitir y organizó la Junta de Conversión. Hernández y Meisel sitúan ahí el fin de su papel de emisor; como banco privado sobrevivió hasta que el Banco de Bogotá lo absorbió en 1928. No debe confundirse con el Banco de la República de 1923.',
      en: 'To stabilize the economy after the war, Rafael Reyes’s government created the Banco Central de Colombia in 1905 — Decree 47 of 6 March; the Assembly approved it days later — with issue, giro, and deposit functions in the line of the Nacional. It was short-lived: after Reyes fell, Carlos E. Restrepo’s government revoked its exclusive right of issue in 1909 and organized the Conversion Board. Hernández and Meisel place the end of its role as issuer there; as a private bank it survived until the Banco de Bogotá absorbed it in 1928. It is not the Banco de la República of 1923.',
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
      es: 'Ley 25 de 1923, Misión Kemmerer, peso oro, provisionales de 1923, pesos plata de 1932, ABNC, De La Rue e Imprenta de Billetes.',
      en: 'Law 25 of 1923, the Kemmerer Mission, the gold peso, 1923 provisionals, 1932 silver pesos, ABNC, De La Rue, and the Imprenta de Billetes.',
    },
    body: {
      es: 'Tras años de crisis, el gobierno de Pedro Nel Ospina pidió un comité de expertos para reformar las condiciones económicas del país. En marzo de 1923 contrató a Edwin W. Kemmerer, el economista estadounidense conocido como «money doctor». La Ley 25 de 1923, sobre sus recomendaciones, creó el Banco de la República como sociedad de capital mixto —gobierno y bancos comerciales— con 10 millones de pesos oro y el monopolio de emitir la moneda legal. Debía abrir en enero de 1924; la corrida contra el Banco López adelantó la puerta al 23 de julio de 1923. El presidente Ospina hizo traer de la Casa de Moneda de Medellín certificados de oro grabados por la American Bank Note Company —ferrocarril hasta Puerto Berrío, hidroavión hasta Girardot, tren a Bogotá— y, en un fin de semana, se resellaron en el reverso «BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL». El catálogo del museo registra también un provisional de 2½ pesos. La serie regular de pesos oro —así se llamó el papel para señalar su respaldo y su convertibilidad— siguió en Nueva York; el 1 peso de esa familia se imprimió hasta 1977. En 1931 el banco asumió el control del metal y se perdió la convertibilidad. A raíz de la guerra con el Perú (1932) salieron emisiones en pesos plata junto a fuertes acuñaciones de 50 centavos. Durante la Segunda Guerra Mundial se cortaron y resellaron billetes de 1 peso como ½ peso; en 1948 la Tesorería emitió un ½ peso propio. A mediados de siglo Thomas De La Rue imprimió junto a la ABNC. El 23 de octubre de 1959 abrió en Bogotá la Imprenta de Billetes; su primer trabajo fue el 1 peso azul (Pick 404). El 5 pesos de 1961–1981 lleva las murallas de Cartagena. En 1951, tras las recomendaciones de Richard Grove y Gerald Alter, la legislatura confirió autoridad monetaria y crediticia a la Junta Directiva; en 1963 esa política pasó a la Junta Monetaria y el banco quedó como ejecutor. En 1973 el Estado adquirió casi todas las acciones privadas (Ley 7.ª). La Constitución de 1991 y la Ley 31 de 1992 devolvieron autonomía a la Junta Directiva, ajena al Ejecutivo, con mandato de preservar el poder adquisitivo. Esta vitrina documenta el 10 pesos oro de 1943 (Pick 389b), el 2 pesos oro de 1944 (Pick 390b) y el de 1955 (Pick 390d), la reposición de 10 pesos oro de 1976 (Pick 407f / TBB B950kr), el espécimen de 2.000 pesos oro de 1983 (Pick 430as), de De La Rue, y el 2.000 pesos de 2008 (Pick 457), serial capicúa binario 10000001.',
      en: 'After years of financial crises, Pedro Nel Ospina’s government asked an expert committee to study and reform the country’s economic conditions. In March 1923 it hired Edwin W. Kemmerer, the American economist widely known as a “money doctor.” Law 25 of 1923, on his recommendations, created the Banco de la República as a mixed-capital company — government and commercial banks — with 10 million gold pesos and the exclusive right to issue legal tender. It was to open in January 1924; a run on the Banco López brought the doors forward to 23 July 1923. President Ospina had gold certificates engraved by the American Bank Note Company flown from the Medellín mint — rail to Puerto Berrío, flying boat to Girardot, train to Bogotá — and, over a weekend, they were overstamped on the back “BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL.” The museum booklet also records a 2½-peso provisional. The regular pesos-oro series — the paper was so named to signal its backing and its convertibility — followed from New York; the 1-peso of that family was printed through 1977. In 1931 the bank took control of the metal and convertibility ended. After the war with Peru (1932) issues in pesos plata appeared beside heavy 50-centavo coinage. In the Second World War 1-peso notes were cut and overstamped as ½ peso; in 1948 the Treasury issued its own ½ peso. Mid-century Thomas De La Rue printed alongside ABNC. On 23 October 1959 the Imprenta de Billetes opened in Bogotá; its first job was the blue 1-peso (Pick 404). The 5-peso of 1961–1981 carries the walls of Cartagena. In 1951, after recommendations by Richard Grove and Gerald Alter, the legislature gave monetary and credit authority to the Board; in 1963 that policy passed to the Monetary Board and the bank became the executor. In 1973 the state bought nearly all private shares (Law 7). The 1991 Constitution and Law 31 of 1992 restored the Board’s autonomy from the executive, with a mandate to preserve purchasing power. This case documents the 1943 10 pesos oro (Pick 389b), the 1944 2 pesos oro (Pick 390b), the 1955 2 pesos oro (Pick 390d), the 1976 10 pesos oro replacement (Pick 407f / TBB B950kr), the 1983 2,000 pesos oro specimen (Pick 430as), by De La Rue, and the 2008 2,000 pesos (Pick 457) with binary radar serial 10000001.',
    },
  },
  {
    id: 'familias-modernas',
    years: { es: 'desde 1993', en: 'from 1993' },
    title: {
      es: 'Familias modernas',
      en: 'Modern families',
    },
    lead: {
      es: 'El fin del peso oro, el robo de Valledupar y la familia de 2016.',
      en: 'The end of the gold peso, the Valledupar heist, and the 2016 family.',
    },
    body: {
      es: 'Desde 1993 los billetes del Banco de la República dejaron de llevar la leyenda «pesos oro»: el nombre de la moneda volvió a ser, simplemente, el peso. En octubre de 1994 —el «robo del siglo»— un grupo penetró la bóveda de la sucursal de Valledupar y se llevó unos 24.072 millones de pesos, en denominaciones de 2.000, 5.000 y 10.000, buena parte aún sin emitir. El banco publicó las series, abrió un canje para terceros de buena fe y, entre 1995 y 1996, sustituyó esas tres denominaciones por una familia nueva. En 2016 puso en circulación otra —de 2.000 a 100.000— con seguridad reforzada: deja de retratar solo a los próceres de la independencia y honra la biodiversidad, culturas indígenas y figuras como Gabriel García Márquez, Virginia Gutiérrez y Débora Arango.',
      en: 'From 1993 Banco de la República notes dropped the legend “pesos oro”: the currency’s name returned to simply the peso. In October 1994 — the “robo del siglo,” the robbery of the century — thieves entered the vault of the Valledupar branch and took some 24.072 billion pesos, in 2,000-, 5,000-, and 10,000-peso notes, much of it still unissued. The bank published the serial ranges, opened an exchange for good-faith holders, and between 1995 and 1996 replaced those three denominations with a new family. In 2016 it put another family into circulation — 2,000 to 100,000 — with stronger security: the notes move beyond independence heroes alone and honor biodiversity, indigenous cultures, and figures such as Gabriel García Márquez, Virginia Gutiérrez, and Débora Arango.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
    es: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
    en: 'Banrepcultural Encyclopedia — Paper money in Colombia',
    note: {
      es: 'Banca libre, Regeneración, Banco Nacional, Banco Central de 1905, Misión Kemmerer y pérdida de la convertibilidad en 1931.',
      en: 'Free banking, Regeneración, Banco Nacional, the 1905 Banco Central, the Kemmerer Mission, and the 1931 end of convertibility.',
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
      es: 'Ley 25 de 1923, capital mixto, monopolio de emisión y apertura adelantada el 23 de julio; el catálogo del museo detalla el resello de un fin de semana sobre certificados de Medellín.',
      en: 'Law 25 of 1923, mixed capital, monopoly of issue, and the early opening on 23 July; the museum booklet details the weekend overstamp of Medellín certificates.',
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
      es: '23 de octubre de 1959; primer trabajo: el 1 peso azul impreso en Bogotá. El 5 pesos de 1961–1981 lleva las murallas de Cartagena.',
      en: '23 October 1959; first job: the blue 1-peso printed in Bogotá. The 5-peso of 1961–1981 carries the walls of Cartagena.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación de billetes y monedas',
    en: 'Banco de la República — Banknote and coin production and circulation',
    note: {
      es: 'Tablas oficiales: producción anual de billetes por denominación (1960–2022), entregas de la Imprenta a Tesorería (2010–2022) y producción de monedas. Un total por año y valor facial no es la tirada de un tipo Pick, fecha o variedad.',
      en: 'Official tables: annual banknote production by denomination (1960–2022), Imprenta deliveries to Tesorería (2010–2022), and coin production. A year-and-face-value total is not the printage of one Pick type, date, or variety.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/publicaciones-investigaciones/libros/banrep-antecedentes-evolucion-estructura',
    es: 'Banco de la República — Antecedentes, evolución y estructura (Meisel y cols.)',
    en: 'Banco de la República — Background, evolution, and structure (Meisel et al.)',
    note: {
      es: 'Curso forzoso de 1886, Ley 70 de 1894, Banco Central de Reyes, Misión Kemmerer y apertura de 1923.',
      en: 'The 1886 fiat standard, Law 70 of 1894, Reyes’s Banco Central, the Kemmerer Mission, and the 1923 opening.',
    },
  },
  {
    href: 'https://publicaciones.banrepcultural.org/index.php/banrep/article/view/8071',
    es: 'Adolfo Meisel Roca — Antecedentes del Banco de la República, 1904–1922',
    en: 'Adolfo Meisel Roca — Background to the Banco de la República, 1904–1922',
    note: {
      es: 'Estabilización de posguerra, proyectos de banca de emisión y el contexto en que Reyes creó el Banco Central.',
      en: 'Postwar stabilization, projects for a bank of issue, and the setting in which Reyes created the Banco Central.',
    },
  },
  {
    href: 'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S2248-60462013000200005',
    es: 'Evolución histórica del Banco de la República (SciELO; cita a Hernández, 2001)',
    en: 'Historical evolution of the Banco de la República (SciELO; citing Hernández, 2001)',
    note: {
      es: 'Banco Central de 1905 con funciones de emisión; en 1909 se le suspende el privilegio y queda como banco privado.',
      en: 'The 1905 Banco Central as a bank of issue; in 1909 its privilege was suspended and it became a private bank.',
    },
  },
  {
    href: 'https://revistas.unal.edu.co/index.php/historelo/article/view/101779',
    es: 'HiSTOReLo — Núñez, Caro y el Banco Nacional (1886–1903)',
    en: 'HiSTOReLo — Núñez, Caro, and the Banco Nacional (1886–1903)',
    note: {
      es: 'Decreto 104 y Ley 87 de 1886 (unidad monetaria de curso forzoso); Ley 70 de 1894 y cierre en 1896.',
      en: 'Decree 104 and Law 87 of 1886 (fiat monetary unit); Law 70 of 1894 and closure in 1896.',
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
      es: 'Establecido en 1881; curso forzoso desde 1886; liquidación definitiva en 1896.',
      en: 'Established in 1881; forced tender from 1886; final liquidation in 1896.',
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
      es: 'Curso forzoso, Guerra de los Mil Días, Junta de Conversión de 1909 y persistencia del papel del Banco Nacional en los años 1910.',
      en: 'Forced tender, the Thousand Days’ War, the 1909 Conversion Board, and Banco Nacional paper still circulating in the 1910s.',
    },
  },
  {
    href: 'https://www.elespectador.com/economia/los-25-anos-del-robo-del-siglo-en-colombia-article-886780/',
    es: 'El Espectador — Los 25 años del «robo del siglo» (2019)',
    en: 'El Espectador — Twenty-five years after the “robo del siglo” (2019)',
    note: {
      es: 'Valledupar, 16–17 de octubre de 1994; unos 24.072 millones; canje y rediseño de 2.000, 5.000 y 10.000 en 1995–1996.',
      en: 'Valledupar, 16–17 October 1994; some 24.072 billion pesos; exchange and redesign of the 2,000, 5,000, and 10,000 in 1995–1996.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/comunicado-25-09-2015-2',
    es: 'Banco de la República — Comunicado: nueva familia de billetes (25 de septiembre de 2015)',
    en: 'Banco de la República — Press release: new banknote family (25 September 2015)',
    note: {
      es: 'Familia de 2016 (2.000 a 100.000): biodiversidad, cultura y homenaje a Gabriel García Márquez.',
      en: 'The 2016 family (2,000 to 100,000): biodiversity, culture, and the homage to Gabriel García Márquez.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/nueva-familia-de-billetes-colombianos',
    es: 'Banrepcultural — La nueva familia de billetes colombianos',
    en: 'Banrepcultural — The new Colombian banknote family',
    note: {
      es: 'Temática de cada denominación: paisajes, culturas indígenas y figuras de la cultura, la ciencia y la política.',
      en: 'Theme of each denomination: landscapes, indigenous cultures, and figures of culture, science, and politics.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
    es: 'Banrepcultural — Museo Casa de Moneda',
    en: 'Banrepcultural — Casa de Moneda Museum',
    note: {
      es: 'Exposición permanente de 1996: provisionales de 1923, pesos plata de 1932, ½ peso recortado de guerra y primer billete de la Imprenta.',
      en: '1996 permanent exhibition: 1923 provisionals, 1932 pesos plata, wartime cut ½-peso notes, and the Imprenta’s first note.',
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
      'En 1880–1881, bajo la Regeneración de Rafael Núñez, nació el Banco Nacional (Ley 39 de 1880): manejar fondos del Estado, emitir y prestar al fisco. Al principio convivió con la emisión privada. En 1886 el gobierno cortó la convertibilidad: el Decreto 104 y la Ley 87 hicieron del papel peso la unidad monetaria de curso forzoso. La Ley 57 de 1887 suspendió el derecho de los particulares a emitir mientras el Nacional tuviera el privilegio exclusivo. La emisión opaca depreció el billete; por esos excesos, la Ley 70 de 1894 ordenó liquidar el instituto. Astrid Romero sitúa el cierre definitivo el 1.º de enero de 1896. La Guerra de los Mil Días (1899–1902) volvió a disparar la impresión de papel sin respaldo —el gobierno y mandos regionales— y una inflación devastadora. El Museo Casa de Moneda registra billetes del Gobierno Provisional de Ocaña (1900) y resellos del Nacional sobre papel privado. En 1909 la Junta de Conversión tasó 100 pesos de papel por 1 peso oro. Aun en los primeros años de 1910 los billetes viejos del Nacional seguían en circulación.',
      'Para estabilizar la posguerra, Rafael Reyes creó en 1905 el Banco Central de Colombia. Fue un emisor de vida corta: en 1909, tras la caída de Reyes, se le retiró el privilegio de emitir. No es el banco de 1923. La Ley 25 de 1923, fruto de la Misión Kemmerer —el «money doctor» contratado por Pedro Nel Ospina— creó el Banco de la República con capital mixto, 10 millones de pesos oro y el monopolio de emitir la moneda legal. La corrida contra el Banco López adelantó la apertura al 23 de julio de 1923: los certificados de oro de Medellín llegaron por ferrocarril, hidroavión y tren y se resellaron en un fin de semana como billetes provisionales. Los primeros regulares los grabó la American Bank Note Company; el papel se llamó peso oro para señalar su convertibilidad. La convertibilidad se perdió en 1931. Tras la guerra con el Perú (1932) circularon pesos plata. Thomas De La Rue imprimió a mediados de siglo. El 23 de octubre de 1959 abrió la Imprenta de Billetes en Bogotá, con el 1 peso azul (Pick 404). La Junta Monetaria de 1963 y la Ley 31 de 1992 reordenaron la autoridad del banco; en 1973 el Estado nacionalizó casi todo el capital. Esta vitrina documenta el 10 pesos oro de 1943 (Pick 389b), el 2 pesos oro de 1944 (Pick 390b) y el de 1955 (Pick 390d), la reposición de 10 pesos oro de 1976 (Pick 407f / TBB B950kr), el espécimen de 2.000 pesos oro de 1983 (Pick 430as), impreso por Thomas De La Rue, y el 2.000 pesos de 2008 (Pick 457), serial capicúa binario 10000001.',
      'Desde 1993 los billetes dejaron de llevar la leyenda «pesos oro». En octubre de 1994 el «robo del siglo» en la sucursal de Valledupar se llevó unos 24.072 millones de pesos en 2.000, 5.000 y 10.000; el banco canjeó series y, en 1995–1996, sustituyó esas tres denominaciones. En 2016 puso en circulación una familia nueva —de 2.000 a 100.000— con seguridad reforzada, biodiversidad, culturas indígenas y figuras como Gabriel García Márquez.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas se publican a medida que se documentan las piezas. La banca libre abre con las pruebas ABNC del Banco Hipotecario (1881) y del Banco de Rio Hacha (1883). El Banco de la República, con el 10 pesos oro de 1943, el 2 pesos oro de 1944 y el de 1955, la reposición de 10 pesos oro de 1976, el espécimen de 2.000 pesos oro de 1983 y el 2.000 pesos de 2008 (serial capicúa binario 10000001). Las familias modernas, con el 20.000 pesos de 2017 (serial AF51355141). El Banco Central de 1905 se cuenta en los capítulos; aún no tiene ficha.',
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
      'In 1880–1881, under Rafael Núñez’s Regeneración, the Banco Nacional was born (Law 39 of 1880): to handle state funds, issue notes, and lend to the treasury. At first it coexisted with private issues. In 1886 the government ended convertibility: Decree 104 and Law 87 made the paper peso the forced-tender monetary unit. Law 57 of 1887 suspended private banks’ right to issue while the Nacional held the exclusive privilege. Opaque issue depreciated the bill; for those excesses, Law 70 of 1894 ordered the institute liquidated. Astrid Romero places the final closure on 1 January 1896. The Thousand Days’ War (1899–1902) set off another surge of unbacked paper — from the government and from regional commanders — and a devastating inflation. The Casa de Moneda Museum records Gobierno Provisional notes from Ocaña (1900) and Nacional overstamps on private paper. In 1909 the Conversion Board rated 100 paper pesos to 1 gold peso. Even in the early 1910s old Nacional bills were still in circulation.',
      'To stabilize the postwar economy, Rafael Reyes created the Banco Central de Colombia in 1905. It was a short-lived issuer: in 1909, after Reyes fell, its privilege of issue was withdrawn. It is not the bank of 1923. Law 25 of 1923, the fruit of the Kemmerer Mission — the “money doctor” hired by Pedro Nel Ospina — created the Banco de la República with mixed capital, 10 million gold pesos, and the monopoly of legal-tender issue. A run on the Banco López brought the opening forward to 23 July 1923: Medellín gold certificates came by rail, flying boat, and train and were overstamped over a weekend as provisional notes. The first regular issues were engraved by the American Bank Note Company; the paper was called peso oro to signal convertibility. Gold convertibility ended in 1931. After the war with Peru (1932) pesos plata circulated. Thomas De La Rue printed at mid-century. On 23 October 1959 the Imprenta de Billetes opened in Bogotá, with the blue 1-peso (Pick 404). The 1963 Monetary Board and Law 31 of 1992 reordered the bank’s authority; in 1973 the state nationalized nearly all the capital. This case documents the 1943 10 pesos oro (Pick 389b), the 1944 2 pesos oro (Pick 390b), the 1955 2 pesos oro (Pick 390d), the 1976 10 pesos oro replacement (Pick 407f / TBB B950kr), the 1983 2,000 pesos oro specimen (Pick 430as), printed by Thomas De La Rue, and the 2008 2,000 pesos (Pick 457) with binary radar serial 10000001.',
      'From 1993 the notes dropped the legend “pesos oro.” In October 1994 the “robo del siglo” at the Valledupar branch took some 24.072 billion pesos in 2,000, 5,000, and 10,000 notes; the bank exchanged serial ranges and, in 1995–1996, replaced those three denominations. In 2016 it put a new family into circulation — 2,000 to 100,000 — with stronger security, biodiversity, indigenous cultures, and figures such as Gabriel García Márquez.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Note pages are published as pieces are documented. Free banking opens with the ABNC proofs of the Banco Hipotecario (1881) and the Banco de Rio Hacha (1883). The Banco de la República chapter holds the 1943 10 pesos oro, the 1944 2 pesos oro, the 1955 2 pesos oro, the 1976 10 pesos oro replacement, the 1983 2,000 pesos oro specimen, and the 2008 2,000 pesos (binary radar serial 10000001). The modern families chapter holds the 2017 20,000 pesos, serial AF51355141. The 1905 Banco Central is told in the chapters; it does not yet have a note page.',
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
