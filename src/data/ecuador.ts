import type { CatalogSource, LocalizedText } from './catalog';

export const ECUADOR_PATH = '/coleccion/ecuador/';

export type EcuadorChapterId = 'primeros-bancos' | 'banca-privada' | 'banco-central' | 'dolarizacion';

export type EcuadorChapter = {
  id: EcuadorChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const ecuadorChapters: EcuadorChapter[] = [
  {
    id: 'primeros-bancos',
    years: { es: '1862–1884', en: '1862–1884' },
    title: {
      es: 'Primeros bancos',
      en: 'Early banks',
    },
    lead: {
      es: 'Pesos y reales de la banca privada de Guayaquil, antes de que el sucre tuviera nombre.',
      en: 'Pesos and reales of Guayaquil’s private banks, before the sucre had a name.',
    },
    body: {
      es: 'Hasta mediados del siglo XIX el comercio ecuatoriano siguió en plata, oro y moneda extranjera. El papel moderno llegó por el puerto: entre 1862 y 1866 el Banco Particular de Descuento y Circulación de Guayaquil emitió 2 y 4 reales y 1, 5, 10, 20, 50 y 100 pesos. El Banco del Ecuador, fundado en 1868, siguió con 2 y 4 reales y 1, 4, 5 y 10 pesos —algunos sobre impresiones del banco de descuento—. Esos títulos convivieron con el metálico; la costa los aceptó antes que la sierra. En esta colección caben esas primeras planchas, pruebas y especímenes de la década de 1860–1880.',
      en: 'Until the mid-nineteenth century Ecuadorian trade still ran on silver, gold, and foreign coin. Modern paper arrived through the port: between 1862 and 1866 the Banco Particular de Descuento y Circulación de Guayaquil issued 2 and 4 reales and 1, 5, 10, 20, 50, and 100 pesos. The Banco del Ecuador, founded in 1868, followed with 2 and 4 reales and 1, 4, 5, and 10 pesos — some overprints of the discount bank. Those titles lived alongside metal; the coast accepted them before the highlands. Early plates, proofs, and specimens from the 1860s–1880s belong in this collection.',
    },
  },
  {
    id: 'banca-privada',
    years: { es: '1884–1926', en: '1884–1926' },
    title: {
      es: 'Banca privada',
      en: 'Private banks',
    },
    lead: {
      es: 'La Ley de Monedas de 1884, el sucre y las emisiones de los bancos particulares.',
      en: 'The 1884 coinage law, the sucre, and the issues of the private banks.',
    },
    body: {
      es: 'El 22 de marzo de 1884 la Convención Nacional, en el gobierno de José María Plácido Caamaño, aprobó la Ley de Monedas. El artículo 10 fijó que «la nueva moneda ecuatoriana será el “Sucre”, dividido en 100 centavos», en homenaje al mariscal Antonio José de Sucre; el Museo de la Moneda del BCE atribuye el nombre al padre Julio Matovelle. El Banco del Ecuador sobreimprimió 80 centavos y 4 sucres sobre pesos (5 pesos = 4 sucres) y luego emitió sucres regulares hasta 1926. Le siguieron el Anglo-Ecuatoriano y el de Quito (1885), la Unión y el Internacional, el Comercial y Agrícola —el gran emisor de Guayaquil—, el del Pichincha, el del Azuay, la Compañía de Crédito Agrícola e Industrial y el Banco de Descuento. El Bank Note Museum agrupa esas planchas como S91–S274.',
      en: 'On 22 March 1884 the National Convention, under José María Plácido Caamaño, passed the coinage law. Article 10 set that “the new Ecuadorian currency shall be the ‘Sucre,’ divided into 100 centavos,” honoring Marshal Antonio José de Sucre; the BCE Currency Museum credits the name to Father Julio Matovelle. The Banco del Ecuador overprinted 80 centavos and 4 sucres on pesos (5 pesos = 4 sucres) and then issued regular sucres until 1926. The Anglo-Ecuatoriano and Banco de Quito (1885), the Unión and Internacional, the Comercial y Agrícola — Guayaquil’s great issuer — the Pichincha, the Azuay, the Compañía de Crédito Agrícola e Industrial, and the Banco de Descuento followed. The Bank Note Museum groups those plates as S91–S274.',
    },
  },
  {
    id: 'banco-central',
    years: { es: '1926–1998', en: '1926–1998' },
    title: {
      es: 'Banco Central',
      en: 'Central Bank',
    },
    lead: {
      es: 'Revolución Juliana, Misión Kemmerer y el monopolio de emisión del Banco Central del Ecuador.',
      en: 'The Revolución Juliana, the Kemmerer Mission, and the Central Bank of Ecuador’s monopoly of issue.',
    },
    body: {
      es: 'La Revolución Juliana del 9 de julio de 1925 buscó acabar con la emisión inorgánica. El 26 de junio de 1926 nació la Caja Central de Emisión y Amortización, que sobreimprimió 1, 2, 5, 10 y 1.000 sucres de los bancos privados; el 18 de octubre esos bancos debieron entregar oro y plata. Edwin W. Kemmerer entregó el 11 de febrero de 1927 el proyecto de Ley Orgánica. Isidro Ayora la firmó el 4 de marzo (Decreto Supremo 253; Registro Oficial 283). La escritura pública es del 9 de julio; el 10 de agosto el Banco Central del Ecuador inició operaciones en Quito. La Ley de Monedas fijó el sucre en 0,300933 g de oro fino —cinco sucres por dólar—. Los primeros billetes oficiales, de 1928, los grabó la American Bank Note Company con cláusula de pago en oro. Waterlow and Sons y Thomas de la Rue entraron después. El Bank Note Museum sitúa las series del BCE en P84–P130.',
      en: 'The Revolución Juliana of 9 July 1925 sought to end unbacked issues. On 26 June 1926 the Caja Central de Emisión y Amortización was created; it overprinted 1, 2, 5, 10, and 1,000 sucres of the private banks, and on 18 October those banks had to deliver gold and silver. Edwin W. Kemmerer submitted the Organic Law draft on 11 February 1927. Isidro Ayora signed it on 4 March (Supreme Decree 253; Official Register 283). The public deed is dated 9 July; on 10 August the Banco Central del Ecuador opened in Quito. The coinage law set the sucre at 0.300933 g of fine gold — five sucres to the dollar. The first official notes, of 1928, were engraved by the American Bank Note Company with a gold-payment clause. Waterlow and Sons and Thomas de la Rue followed. The Bank Note Museum places BCE series at P84–P130.',
    },
  },
  {
    id: 'dolarizacion',
    years: { es: '1999–2001', en: '1999–2001' },
    title: {
      es: 'Dolarización',
      en: 'Dollarization',
    },
    lead: {
      es: 'La crisis bancaria, el feriado de 1999 y el canje de 25.000 sucres por un dólar.',
      en: 'The banking crisis, the 1999 bank holiday, and the exchange of 25,000 sucres for one dollar.',
    },
    body: {
      es: 'En los años ochenta y noventa el sucre se depreció sin tregua: de unos 25 por dólar en 1979 a más de 800 en 1990 y cerca de 3.000 en 1995. La crisis de 1998–1999 —el feriado bancario del 8 de marzo de 1999— destruyó la confianza en el papel nacional. El 9 de enero de 2000 el presidente Jamil Mahuad anunció la dolarización a 25.000 sucres por dólar. El dólar estadounidense fue de curso legal el 13 de marzo; los sucres dejaron de serlo el 11 de septiembre de 2000 y pudieron canjearse en el Banco Central hasta el 30 de marzo de 2001. Las últimas denominaciones —5.000, 10.000, 20.000 y 50.000 sucres, con Montalvo, Rocafuerte, García Moreno y Eloy Alfaro— cierran esta vitrina. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
      en: 'In the 1980s and 1990s the sucre depreciated without pause: from about 25 per dollar in 1979 it rose past 800 in 1990 and nearly 3,000 in 1995. The 1998–1999 crisis — the bank holiday of 8 March 1999 — destroyed confidence in the national paper. On 9 January 2000 President Jamil Mahuad announced dollarization at 25,000 sucres per dollar. The U.S. dollar became legal tender on 13 March; sucres ceased to be on 11 September 2000 and could be exchanged at the Central Bank until 30 March 2001. The last denominations — 5,000, 10,000, 20,000, and 50,000 sucres, with Montalvo, Rocafuerte, García Moreno, and Eloy Alfaro — close this case. Individual note pages will be published as they are documented, as in the Philippines case.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.bce.fin.ec/banco-central-del-ecuador/historia/',
    es: 'Banco Central del Ecuador — Historia',
    en: 'Central Bank of Ecuador — History',
    note: {
      es: 'Revolución Juliana, Caja Central de 1926, Ley Orgánica del 4 de marzo de 1927 y fundación el 10 de agosto.',
      en: 'Revolución Juliana, the 1926 Caja Central, the Organic Law of 4 March 1927, and founding on 10 August.',
    },
  },
  {
    href: 'https://www.bce.fin.ec/economiatricolor/educacion-financiera-y-monetaria/articulos/camino-a-los-cien-anos-la-creacion-del-banco-central/',
    es: 'BCE Economía Tricolor — La creación del Banco Central',
    en: 'BCE Economía Tricolor — The creation of the Central Bank',
    note: {
      es: 'Decreto Supremo 253, Registro Oficial 283, Ley de Monedas de 1927 y cinco sucres por dólar.',
      en: 'Supreme Decree 253, Official Register 283, the 1927 coinage law, and five sucres to the dollar.',
    },
  },
  {
    href: 'https://museodelamoneda.bce.fin.ec/index.php/component/k2/item/261',
    es: 'Museo de la Moneda del BCE — Adopción del sucre (1884)',
    en: 'BCE Currency Museum — Adoption of the sucre (1884)',
    note: {
      es: 'Artículo 10 de la Ley de Monedas del 22 de marzo de 1884: el Sucre, dividido en 100 centavos.',
      en: 'Article 10 of the coinage law of 22 March 1884: the Sucre, divided into 100 centavos.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/ECU/ECU.htm',
    es: 'Bank Note Museum — Ecuador (banca comercial S91–S274 y Banco Central P84–P130)',
    en: 'Bank Note Museum — Ecuador (commercial banks S91–S274 and Central Bank P84–P130)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Ecuadorian_sucre',
    es: 'Wikipedia — Sucre ecuatoriano (emisiones privadas, series del BCE y dolarización)',
    en: 'Wikipedia — Ecuadorian sucre (private issues, BCE series, and dollarization)',
    note: {
      es: '25.000 sucres por dólar; curso legal del dólar el 13 de marzo de 2000; canje hasta el 30 de marzo de 2001.',
      en: '25,000 sucres per dollar; dollar legal tender on 13 March 2000; exchange until 30 March 2001.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Ecuador · Sucres de la banca privada al Banco Central | Notofilia',
    metaDescription:
      'Catálogo de papel moneda ecuatoriano: primeros bancos, banca privada en sucres, series del Banco Central del Ecuador y dolarización.',
    kicker: 'Ecuador · Notafilia',
    title: 'Sucres de la banca privada al Banco Central',
    heroAlt:
      'Mapa vintage en relieve 3D de Ecuador sobre pergamino, con Chimborazo, Cotopaxi, Quito, Galápagos, el Amazonas, un pasaporte y el título Ecuador',
    intro: [
      'El papel moneda en Ecuador nació de la banca privada de Guayaquil, no de un banco central. Entre 1862 y 1866 el Banco Particular de Descuento y Circulación emitió reales y pesos. El Banco del Ecuador, fundado en 1868, siguió con 2 y 4 reales y 1, 4, 5 y 10 pesos. Esos títulos convivieron con la plata y la moneda extranjera; el comercio costeño los aceptó antes que el interior.',
      'El 22 de marzo de 1884, la Convención Nacional, en el gobierno de José María Plácido Caamaño, aprobó la Ley de Monedas: el artículo 10 fijó el «Sucre», dividido en 100 centavos, en homenaje al mariscal Antonio José de Sucre. El Museo de la Moneda del BCE atribuye el nombre al padre Julio Matovelle. El Banco del Ecuador sobreimprimió 80 centavos y 4 sucres sobre pesos —cinco pesos por cuatro sucres— y luego emitió sucres regulares hasta 1926. Le siguieron el Anglo-Ecuatoriano, el de Quito, la Unión, el Internacional, el Comercial y Agrícola, el del Pichincha, el del Azuay y el Banco de Descuento.',
      'La Revolución Juliana del 9 de julio de 1925 buscó acabar con la emisión inorgánica. El 26 de junio de 1926 nació la Caja Central de Emisión y Amortización; el 18 de octubre los bancos privados debieron entregar oro y plata. Edwin W. Kemmerer entregó el 11 de febrero de 1927 el proyecto de Ley Orgánica. Isidro Ayora la firmó el 4 de marzo. El Banco Central del Ecuador inició operaciones el 10 de agosto de 1927. Los primeros billetes oficiales, grabados por la American Bank Note Company en 1928, prometían el pago en oro.',
      'La crisis de 1998–1999 —feriado bancario del 8 de marzo de 1999— destruyó la confianza en el sucre. El 9 de enero de 2000 Jamil Mahuad anunció la dolarización a 25.000 sucres por dólar. El dólar fue de curso legal el 13 de marzo; los sucres dejaron de serlo el 11 de septiembre de 2000 y pudieron canjearse en el BCE hasta el 30 de marzo de 2001. Esta vitrina reúne esa historia: series de circulación, especímenes y las últimas denominaciones antes del dólar.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, en la misma fila de izquierda a derecha por época: primeros bancos, banca privada, Banco Central y dolarización. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Ecuador · Sucres from private banks to the Central Bank | Notofilia',
    metaDescription:
      'Catalog of Ecuadorian paper money: early banks, private sucre issues, Banco Central del Ecuador series, and dollarization.',
    kicker: 'Ecuador · Notaphily',
    title: 'Sucres from private banks to the Central Bank',
    heroAlt:
      'Vintage 3D relief map of Ecuador on parchment, with Chimborazo, Cotopaxi, Quito, the Galápagos, the Amazon, a passport, and the title Ecuador',
    intro: [
      'Paper money in Ecuador was born from Guayaquil’s private banks, not from a central bank. Between 1862 and 1866 the Banco Particular de Descuento y Circulación issued reales and pesos. The Banco del Ecuador, founded in 1868, followed with 2 and 4 reales and 1, 4, 5, and 10 pesos. Those titles lived alongside silver and foreign coin; coastal trade accepted them before the highlands.',
      'On 22 March 1884, the National Convention under José María Plácido Caamaño passed the coinage law: article 10 set the “Sucre,” divided into 100 centavos, honoring Marshal Antonio José de Sucre. The BCE Currency Museum credits the name to Father Julio Matovelle. The Banco del Ecuador overprinted 80 centavos and 4 sucres on pesos — five pesos to four sucres — and then issued regular sucres until 1926. The Anglo-Ecuatoriano, Banco de Quito, Unión, Internacional, Comercial y Agrícola, Pichincha, Azuay, and Banco de Descuento followed.',
      'The Revolución Juliana of 9 July 1925 sought to end unbacked issues. On 26 June 1926 the Caja Central de Emisión y Amortización was created; on 18 October private banks had to deliver gold and silver. Edwin W. Kemmerer submitted the Organic Law draft on 11 February 1927. Isidro Ayora signed it on 4 March. The Banco Central del Ecuador opened on 10 August 1927. The first official notes, engraved by the American Bank Note Company in 1928, promised payment in gold.',
      'The 1998–1999 crisis — the bank holiday of 8 March 1999 — destroyed confidence in the sucre. On 9 January 2000 Jamil Mahuad announced dollarization at 25,000 sucres per dollar. The dollar became legal tender on 13 March; sucres ceased to be on 11 September 2000 and could be exchanged at the BCE until 30 March 2001. This case gathers that history: circulation series, specimens, and the last denominations before the dollar.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters in one row, left to right by period: early banks, private banks, the Central Bank, and dollarization. Individual note pages will be published as they are documented, as in the Philippines case.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${ECUADOR_PATH}` : ECUADOR_PATH;
}

export function chapterHref(id: EcuadorChapterId): string {
  return `#${id}`;
}
