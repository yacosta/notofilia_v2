export const ECUADOR_PATH = '/coleccion/ecuador/';

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
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${ECUADOR_PATH}` : ECUADOR_PATH;
}
