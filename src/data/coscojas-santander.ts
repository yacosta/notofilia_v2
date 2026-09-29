import type { Locale } from '../lib/locale-paths';

export const COSCOJAS_SANTANDER_PATH = '/coleccion/colombia-numismatica/coscojas-de-santander/';
export const COSCOJAS_SANTANDER_PATH_EN = '/collection/colombia-numismatics/santander-coscojas/';

export type CoscojasFact = {
  label: string;
  value: string;
  wide?: boolean;
};

export type CoscojasSection = {
  id: string;
  title: string;
  paragraphs: string[];
  note?: string;
};

export type CoscojasSource = {
  label: string;
  href?: string;
  note?: string;
};

export type CoscojasCopy = {
  nav: string;
  home: string;
  numismatica: string;
  series: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  published: string;
  dateLabel: string;
  factsHeading: string;
  facts: CoscojasFact[];
  imagesNote: string;
  sections: CoscojasSection[];
  relatedLead: string;
  relatedLabel: string;
  relatedHref: string;
  sourcesTitle: string;
  sources: CoscojasSource[];
  backSeries: string;
};

export const coscojasSantanderCopy: Record<Locale, CoscojasCopy> = {
  es: {
    nav: 'Las coscojas de Santander',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Las coscojas de Santander',
    metaDescription:
      'Monedas de necesidad de 1902 del Estado de Santander: 10, 20 y 50 centavos en latón, hechas a mano en Bucaramanga con casquillos de Palonegro. Sin precios.',
    kicker: 'Colombia-Numismática · 1902',
    title: 'Las coscojas de Santander',
    lead:
      'Monedas de una sola cara, hechas a mano con casquillos de bala, nacidas del final de la Guerra de los Mil Días.',
    published: '2026-09-29',
    dateLabel: '29 de septiembre de 2026',
    factsHeading: 'Datos',
    facts: [
      { label: 'Emisor', value: 'Estado de Santander' },
      { label: 'Año', value: '1902' },
      { label: 'Denominaciones', value: '10, 20 y 50 centavos' },
      { label: 'Metal', value: 'Latón' },
      { label: 'Fabricación', value: 'Artesanal, de una sola cara' },
      { label: 'Lugar', value: 'Bucaramanga' },
      { label: 'Ref. (50 c)', value: '1,45 g · 23,1 mm', wide: true },
    ],
    imagesNote: 'Las fotografías se añadirán cuando las piezas estén en la vitrina.',
    sections: [
      {
        id: 'sin-moneda',
        title: 'Un país sin moneda',
        paragraphs: [
          'La Guerra de los Mil Días se extendió entre el 17 de octubre de 1899 y el 21 de noviembre de 1902. Al llegar 1902 el conflicto había agotado las arcas públicas, y en las regiones escaseaba la moneda menuda con la que se pagaban las compras diarias y a las tropas. Ambos bandos habían recurrido ya al papel: los liberales de Rafael Uribe Uribe pusieron en circulación billetes del «Gobierno Provisional Liberal», impresos en tinta negra sobre papel de cuaderno, y el gobierno resellaba en rojo billetes de bancos privados para convertirlos en circulante legal.',
        ],
      },
      {
        id: 'metal',
        title: 'El metal de la batalla',
        paragraphs: [
          'En Santander la solución fue más material. Según El Tiempo, el gobierno del departamento decretó el 19 de julio de 1902 la fabricación de monedas de cobre para las transacciones pequeñas, y las piezas se hicieron con los casquillos de las balas disparadas en Palonegro, la batalla más grande de la guerra. Las fuentes numismáticas describen el metal como latón y atribuyen la orden al general Ramón González Valencia; el catálogo Numista registra la fabricación en Bucaramanga.',
        ],
      },
      {
        id: 'hecha-a-mano',
        title: 'Una pieza hecha a mano',
        paragraphs: [
          'No hubo troqueles industriales. Cada moneda lleva por anverso la denominación dentro de una gran «C» y la leyenda «SANTANDER 50 C 1902» (o el valor correspondiente), y el reverso no está grabado aparte: el relieve del anverso atraviesa la lámina y se lee, hundido, por detrás. De ahí su carácter de pieza de una sola cara. La factura irregular es precisamente lo que las distingue de una acuñación oficial.',
        ],
      },
      {
        id: 'por-que',
        title: 'Por qué «coscojas»',
        paragraphs: [
          'La gente de Santander las bautizó así por su tamaño diminuto, y el apodo desplazó a cualquier denominación oficial. El Tiempo consigna que el decreto autorizaba un total de 750.000 pesos en piezas de baja denominación.',
        ],
      },
      {
        id: 'nota-fuentes',
        title: 'Nota sobre las fuentes',
        paragraphs: [
          'La cápsula de El Tiempo habla de cobre; El Tiempo Colecciones y Numista, de latón. Aquí se adopta latón, que es lo que registra el catálogo con especificaciones medidas.',
        ],
      },
    ],
    relatedLead:
      'El mismo apodo designa, en otra página, la moneda exclusiva de los lazaretos. Es otra emisión.',
    relatedLabel: 'Numismática de los Lazaretos',
    relatedHref: '/coleccion/numismatica/numismatica-de-los-lazaretos/',
    sourcesTitle: 'Fuentes',
    sources: [
      {
        label: 'El Tiempo, «Cápsula de El Tiempo. Aparecen las coscojas»',
        note: 'Decreto del 19 de julio de 1902 y autorización de 750.000 pesos. El texto habla de cobre.',
      },
      {
        label: 'El Tiempo, «Rarezas en la historia de monedas colombianas»',
        href: 'https://www.eltiempo.com/economia/sectores/rarezas-en-la-historia-de-monedas-colombianas-colecciones-el-tiempo-181962',
        note: 'Latón, orden del general Ramón González Valencia, casquillos de Palonegro y pieza artesanal de una sola cara.',
      },
      {
        label: 'Numista, 50 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/30954',
        note: 'Latón, Bucaramanga, 1,45 g y 23,1 mm en el 50 centavos. No se publican precios.',
      },
      {
        label: 'Museo Nacional de Colombia, Piezas en diálogo',
      },
      {
        label: 'Wikipedia, Guerra de los Mil Días',
        href: 'https://es.wikipedia.org/wiki/Guerra_de_los_Mil_D%C3%ADas',
        note: 'Extensión de la guerra: 17 de octubre de 1899 al 21 de noviembre de 1902.',
      },
    ],
    backSeries: 'Volver a Colombia-Numismática',
  },
  en: {
    nav: 'The coscojas of Santander',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'The coscojas of Santander',
    metaDescription:
      '1902 necessity coins of the State of Santander: handmade brass 10, 20, and 50 centavos from Bucaramanga, made from Palonegro cartridge cases. No prices.',
    kicker: 'Colombia-Numismatics · 1902',
    title: 'The coscojas of Santander',
    lead:
      'One-faced coins, handmade from cartridge cases, born at the end of the War of a Thousand Days.',
    published: '2026-09-29',
    dateLabel: '29 September 2026',
    factsHeading: 'Facts',
    facts: [
      { label: 'Issuer', value: 'State of Santander' },
      { label: 'Year', value: '1902' },
      { label: 'Denominations', value: '10, 20, and 50 centavos' },
      { label: 'Metal', value: 'Brass' },
      { label: 'Manufacture', value: 'Handmade, one face' },
      { label: 'Place', value: 'Bucaramanga' },
      { label: 'Ref. (50 c)', value: '1.45 g · 23.1 mm', wide: true },
    ],
    imagesNote: 'Photographs will be added when the pieces are in the case.',
    sections: [
      {
        id: 'sin-moneda',
        title: 'A country without coin',
        paragraphs: [
          'The War of a Thousand Days ran from 17 October 1899 to 21 November 1902. By 1902 the conflict had emptied the public treasuries, and the regions lacked the small change used for daily purchases and for paying the troops. Both sides had already turned to paper: Rafael Uribe Uribe’s liberals put into circulation notes of the «Gobierno Provisional Liberal», printed in black ink on notebook paper, and the government overprinted private-bank notes in red to make them legal tender.',
        ],
      },
      {
        id: 'metal',
        title: 'The metal of the battle',
        paragraphs: [
          'In Santander the answer was more material. According to El Tiempo, the departmental government decreed on 19 July 1902 the making of copper coins for small transactions, and the pieces were made from the cartridge cases of bullets fired at Palonegro, the largest battle of the war. Numismatic sources describe the metal as brass and attribute the order to General Ramón González Valencia; the Numista catalogue records the manufacture in Bucaramanga.',
        ],
      },
      {
        id: 'hecha-a-mano',
        title: 'A handmade piece',
        paragraphs: [
          'There were no industrial dies. Each coin carries on the obverse the denomination inside a large «C» and the legend «SANTANDER 50 C 1902» (or the corresponding value), and the reverse is not engraved separately: the obverse relief passes through the sheet and is read, incuse, from the back. That is what makes it a one-faced piece. The irregular workmanship is what sets it apart from an official striking.',
        ],
      },
      {
        id: 'por-que',
        title: 'Why «coscojas»',
        paragraphs: [
          'People in Santander named them that for their tiny size, and the nickname displaced any official denomination. El Tiempo records that the decree authorized a total of 750,000 pesos in low-denomination pieces.',
        ],
      },
      {
        id: 'nota-fuentes',
        title: 'A note on the sources',
        paragraphs: [
          'El Tiempo’s capsule speaks of copper; El Tiempo Colecciones and Numista, of brass. This page adopts brass, which is what the catalogue records with measured specifications.',
        ],
      },
    ],
    relatedLead:
      'The same nickname names, on another page, the exclusive coin of the lazarettos. That is a different issue.',
    relatedLabel: 'Numismatics of the Lazarettos',
    relatedHref: '/coleccion/numismatica/numismatica-de-los-lazaretos/',
    sourcesTitle: 'Sources',
    sources: [
      {
        label: 'El Tiempo, “Cápsula de El Tiempo. Aparecen las coscojas”',
        note: 'The decree of 19 July 1902 and the authorization of 750,000 pesos. That text speaks of copper.',
      },
      {
        label: 'El Tiempo, “Rarezas en la historia de monedas colombianas”',
        href: 'https://www.eltiempo.com/economia/sectores/rarezas-en-la-historia-de-monedas-colombianas-colecciones-el-tiempo-181962',
        note: 'Brass, the order of General Ramón González Valencia, Palonegro cartridge cases, and a handmade one-faced piece.',
      },
      {
        label: 'Numista, 50 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/30954',
        note: 'Brass, Bucaramanga, 1.45 g and 23.1 mm on the 50 centavos. Prices are not published.',
      },
      {
        label: 'Museo Nacional de Colombia, Piezas en diálogo',
      },
      {
        label: 'Wikipedia, Guerra de los Mil Días',
        href: 'https://es.wikipedia.org/wiki/Guerra_de_los_Mil_D%C3%ADas',
        note: 'Span of the war: 17 October 1899 to 21 November 1902.',
      },
    ],
    backSeries: 'Back to Colombia-Numismatics',
  },
};

export function coscojasSantanderPath(locale: Locale): string {
  return locale === 'en' ? `/en${COSCOJAS_SANTANDER_PATH_EN}` : COSCOJAS_SANTANDER_PATH;
}

export const coscojasSantanderDedicatedSlugs = [
  COSCOJAS_SANTANDER_PATH.replace(/^\/|\/$/g, ''),
  COSCOJAS_SANTANDER_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
