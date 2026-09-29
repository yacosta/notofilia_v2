import type { Locale } from '../lib/locale-paths';

export const COSCOJAS_SANTANDER_PATH = '/coleccion/colombia-numismatica/coscojas-de-santander/';
export const COSCOJAS_SANTANDER_PATH_EN = '/collection/colombia-numismatics/santander-coscojas/';

export type CoscojasFact = {
  label: string;
  value: string;
  wide?: boolean;
};

export type CoscojasTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type CoscojasSection = {
  id: string;
  title: string;
  paragraphs: string[];
  note?: string;
  table?: CoscojasTable;
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
      { label: 'Taller', value: 'Hermanos Penagos' },
      { label: 'Curso', value: 'Forzoso, solo en Santander' },
      { label: 'Ref. (50 c)', value: '1,45 g · 23,1 mm', wide: true },
    ],
    imagesNote: 'Las fotografías se añadirán cuando las piezas estén en la vitrina.',
    sections: [
      {
        id: 'sin-moneda',
        title: 'Un país sin moneda',
        paragraphs: [
          'La Guerra de los Mil Días se extendió entre el 17 de octubre de 1899 y el 21 de noviembre de 1902, cuando se firmó el Tratado de Wisconsin. Al llegar 1902 el conflicto había agotado las arcas públicas, y en las regiones escaseaba la moneda menuda con la que se pagaban las compras diarias y a las tropas. Ambos bandos habían recurrido ya al papel: los liberales de Rafael Uribe Uribe pusieron en circulación billetes del «Gobierno Provisional Liberal», impresos en tinta negra sobre papel de cuaderno, y también los llamados billetes de Peralonso en las zonas que controlaban. El gobierno resellaba en rojo billetes de bancos privados para convertirlos en circulante legal.',
          'Santander fue el teatro más duro. Peralonso se libró el 15 y el 16 de diciembre de 1899. Palonegro, junto a Bucaramanga, duró del 11 al 25 de mayo de 1900: catorce días de trincheras. El gobierno ganó la posición y el campo quedó cubierto de vainas.',
        ],
      },
      {
        id: 'metal',
        title: 'El metal de la batalla',
        paragraphs: [
          'En Santander la solución fue más material. El general Ramón González Valencia, gobernador y jefe civil y militar del departamento, decretó el 19 de julio de 1902 una moneda metálica fraccionaria. El Tiempo habla de cobre para las transacciones pequeñas. El decreto, según los apuntes numismáticos, autorizaba 750.000 pesos, de curso forzoso solo dentro de Santander, para pagar a las tropas y mover el comercio menudo.',
          'No había cospeles de plata, cobre ni níquel. La materia prima salió de Palonegro. Los apuntes dicen que se despacharon pelotones a recoger vainas de fusil —sobre todo de armamento tipo Mauser o Gras— y que, por el tonelaje final, se estiman unos 300.000 casquillos. De ahí el otro apodo: «monedas sangrientas». El trabajo se hizo en Bucaramanga, en el taller de los hermanos Penagos, casa de maquinaria agroindustrial que sirvió entonces de ceca improvisada. El latón de cartuchería, cobre y zinc, se fundió, se limpió de escoria y se laminó a mano.',
        ],
      },
      {
        id: 'hecha-a-mano',
        title: 'Una pieza hecha a mano',
        paragraphs: [
          'No hubo troqueles industriales ni prensas de volante. Los punzones se grabaron a mano. Cada moneda lleva por anverso la denominación dentro de una gran «C». En el 50 centavos la leyenda es «SANTANDER 50 C 1902»; en el 20, «SANTANDER C 20 1902»; en el 10, «SANTANDER 10 C». No hay busto, escudo ni efigie. El reverso no está grabado aparte: el golpe hunde el relieve del anverso y se lee por detrás. La alineación es de medalla. El canto quedó ligeramente redondeado para que la lámina no cortara. Los troqueles se quebraban y dejaron variedades de leyenda. Esa factura irregular es lo que las distingue de una acuñación oficial.',
          'De los 750.000 pesos autorizados, los mismos apuntes registran 393.100 puestos en circulación: 684.000 piezas de 50 centavos, 130.500 de 20 y 250.000 de 10. Las medidas son de catálogo. Esta vitrina no pesó ni midió un ejemplar.',
        ],
        table: {
          caption: 'Medidas de catálogo de las tres denominaciones, 1902',
          headers: ['Denominación', 'Peso', 'Diámetro', 'Grosor', 'Leyenda', 'Piezas'],
          rows: [
            ['50 centavos', '1,45 g', '23,1 mm', '1,1 mm', 'SANTANDER 50 C 1902', '684.000'],
            ['20 centavos', '0,7 g', '20 mm', '—', 'SANTANDER C 20 1902', '130.500'],
            ['10 centavos', '0,5 g', '15,5 mm', '0,62 mm', 'SANTANDER 10 C', '250.000'],
          ],
        },
      },
      {
        id: 'por-que',
        title: 'Por qué «coscojas»',
        paragraphs: [
          'La gente de Santander las bautizó así por su tamaño diminuto, y el apodo desplazó a cualquier denominación oficial. El Tiempo consigna la autorización de 750.000 pesos en piezas de baja denominación.',
          'En la guarnicionería, coscoja —también pontezuela— es el anillo o ruedecilla metálica del freno del caballo, que tintinea al paso. El traslado del nombre a estas piezas se explica por el latón tosco, el poco grosor y ese mismo tintineo. El mote se usó después, y con otro sentido, para la moneda exclusiva de los lazaretos.',
        ],
      },
      {
        id: 'retiro',
        title: 'El canje y la fundición',
        paragraphs: [
          'El Tratado de Wisconsin cerró la guerra el 21 de noviembre de 1902. El 29 de enero de 1903, José Manuel Marroquín, vicepresidente encargado del ejecutivo, firmó el decreto 102. Los apuntes numismáticos le atribuyen tres pasos: reconoció por un tiempo las piezas de González Valencia, siempre solo dentro de Santander; mandó al Ministerio del Tesoro ventanillas de canje por papel nacional; y ordenó fundir el metal ya canjeado. La mayor parte de lo labrado en el taller Penagos volvió al crisol. Lo que quedó fuera de esa fundición es lo que hoy se conserva.',
          'Ese retiro cabe en el arreglo monetario de después de la guerra. La Ley 33 de octubre de 1903 prohibió nuevas emisiones indiscriminadas de papel, fijó el peso oro como unidad y creó la Junta Nacional de Amortización para recoger el papel depreciado. En el Museo Casa de Moneda, y en la obra comentada de Banrepcultural, estas piezas se muestran junto a los billetes de Peralonso.',
        ],
      },
      {
        id: 'nota-fuentes',
        title: 'Nota sobre las fuentes',
        paragraphs: [
          'La cápsula de El Tiempo habla de cobre; El Tiempo Colecciones y Numista, de latón. Aquí se adopta latón, que es lo que registra el catálogo con especificaciones medidas. El taller Penagos, las cantidades acuñadas, los 300.000 casquillos estimados y el decreto 102 de 1903 proceden de los apuntes «Las monedas sangrientas». No son un pesaje ni un acta de esta colección.',
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
        note: 'Latón, Bucaramanga, 1,45 g, 23,1 mm y 1,1 mm en el 50 centavos. No se publican precios.',
      },
      {
        label: 'Numista, 20 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/48341',
        note: '0,7 g y 20 mm. Leyenda SANTANDER C 20 1902.',
      },
      {
        label: 'Numista, 10 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/48340',
        note: '0,5 g, 15,5 mm y 0,62 mm. Leyenda SANTANDER 10 C.',
      },
      {
        label: 'El numismático1975, «Las monedas sangrientas»',
        href: 'http://elnumismatico1975.blogspot.com/2015/04/las-monedas-sangrientas.html',
        note: 'Taller Penagos, 684.000, 130.500 y 250.000 piezas, decreto 102 de 1903 y fundición posterior.',
      },
      {
        label: 'Banrepcultural, Obra comentada: billetes de Peralonso y coscojas de Palonegro',
        href: 'https://www.banrepcultural.org/multimedia/obra-comentada-billetes-de-peralonso-y-coscojas-de-palonegro',
        note: 'El Museo Casa de Moneda y Banrepcultural muestran estas piezas junto a los billetes de necesidad de Peralonso.',
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
      { label: 'Workshop', value: 'Penagos brothers' },
      { label: 'Tender', value: 'Forced, only in Santander' },
      { label: 'Ref. (50 c)', value: '1.45 g · 23.1 mm', wide: true },
    ],
    imagesNote: 'Photographs will be added when the pieces are in the case.',
    sections: [
      {
        id: 'sin-moneda',
        title: 'A country without coin',
        paragraphs: [
          'The War of a Thousand Days ran from 17 October 1899 to 21 November 1902, when the Treaty of Wisconsin was signed. By 1902 the conflict had emptied the public treasuries, and the regions lacked the small change used for daily purchases and for paying the troops. Both sides had already turned to paper: Rafael Uribe Uribe’s liberals put into circulation notes of the «Gobierno Provisional Liberal», printed in black ink on notebook paper, and also the so-called Peralonso notes in the zones they controlled. The government overprinted private-bank notes in red to make them legal tender.',
          'Santander was the hardest theatre. Peralonso was fought on 15 and 16 December 1899. Palonegro, beside Bucaramanga, lasted from 11 to 25 May 1900: fourteen days of trenches. The government held the ground, and the field was left covered with cartridge cases.',
        ],
      },
      {
        id: 'metal',
        title: 'The metal of the battle',
        paragraphs: [
          'In Santander the answer was more material. General Ramón González Valencia, governor and civil and military chief of the department, decreed a fractional metal coinage on 19 July 1902. El Tiempo speaks of copper for small transactions. The decree, according to the numismatic notes, authorized 750,000 pesos, forced tender only inside Santander, to pay the troops and keep small trade moving.',
          'There were no silver, copper, or nickel blanks. The raw material came from Palonegro. The notes say detachments were sent to gather rifle cases — chiefly Mauser or Gras — and that the final tonnage points to about 300,000 casings. That is the other nickname: “bloody coins.” The work was done in Bucaramanga, in the workshop of the Penagos brothers, an agro-industrial machinery shop that then served as an improvised mint. Cartridge brass, copper and zinc, was melted, cleaned of slag, and rolled by hand.',
        ],
      },
      {
        id: 'hecha-a-mano',
        title: 'A handmade piece',
        paragraphs: [
          'There were no industrial dies and no screw press. The punches were cut by hand. Each coin carries on the obverse the denomination inside a large «C». On the 50 centavos the legend is «SANTANDER 50 C 1902»; on the 20, «SANTANDER C 20 1902»; on the 10, «SANTANDER 10 C». There is no bust, arms, or portrait. The reverse is not engraved separately: the blow sinks the obverse relief, which is read from the back. The alignment is medal. The edge was slightly rounded so the sheet would not cut. The dies broke and left legend varieties. That irregular workmanship is what sets the pieces apart from an official striking.',
          'Of the 750,000 pesos authorized, the same notes record 393,100 put into circulation: 684,000 pieces of 50 centavos, 130,500 of 20, and 250,000 of 10. The measurements are catalogue figures. This case did not weigh or measure a specimen.',
        ],
        table: {
          caption: 'Catalogue measurements of the three denominations, 1902',
          headers: ['Denomination', 'Weight', 'Diameter', 'Thickness', 'Legend', 'Pieces'],
          rows: [
            ['50 centavos', '1.45 g', '23.1 mm', '1.1 mm', 'SANTANDER 50 C 1902', '684,000'],
            ['20 centavos', '0.7 g', '20 mm', '—', 'SANTANDER C 20 1902', '130,500'],
            ['10 centavos', '0.5 g', '15.5 mm', '0.62 mm', 'SANTANDER 10 C', '250,000'],
          ],
        },
      },
      {
        id: 'por-que',
        title: 'Why «coscojas»',
        paragraphs: [
          'People in Santander named them that for their tiny size, and the nickname displaced any official denomination. El Tiempo records the authorization of 750,000 pesos in low-denomination pieces.',
          'In saddlery, a coscoja — also called a pontezuela — is the small metal ring on a horse’s bit, the one that tinkles as the horse walks. The name transferred to these pieces because of the rough brass, the thin sheet, and that same tinkling. The nickname was used later, and in another sense, for the exclusive coin of the lazarettos.',
        ],
      },
      {
        id: 'retiro',
        title: 'The exchange and the melting',
        paragraphs: [
          'The Treaty of Wisconsin ended the war on 21 November 1902. On 29 January 1903, José Manuel Marroquín, vice president in charge of the executive, signed decree 102. The numismatic notes give it three steps: it recognized González Valencia’s pieces for a time, still only inside Santander; it ordered the Treasury Ministry to open windows where they could be exchanged for national paper; and it ordered the exchanged metal melted. Most of what the Penagos workshop struck went back into the crucible. What stayed out of that melting is what survives today.',
          'That withdrawal sits inside the monetary settlement after the war. Law 33 of October 1903 forbade further indiscriminate paper issues, fixed the gold peso as the unit, and created the National Amortization Board to retire the depreciated paper. At the Casa de Moneda Museum, and in Banrepcultural’s commented work, these pieces are shown beside the Peralonso notes.',
        ],
      },
      {
        id: 'nota-fuentes',
        title: 'A note on the sources',
        paragraphs: [
          'El Tiempo’s capsule speaks of copper; El Tiempo Colecciones and Numista, of brass. This page adopts brass, which is what the catalogue records with measured specifications. The Penagos workshop, the quantities struck, the estimated 300,000 casings, and decree 102 of 1903 come from the notes “Las monedas sangrientas.” They are not a weighing or a record of this collection.',
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
        note: 'Brass, Bucaramanga, 1.45 g, 23.1 mm, and 1.1 mm on the 50 centavos. Prices are not published.',
      },
      {
        label: 'Numista, 20 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/48341',
        note: '0.7 g and 20 mm. Legend SANTANDER C 20 1902.',
      },
      {
        label: 'Numista, 10 Centavos (Province of Santander), 1902',
        href: 'https://en.numista.com/48340',
        note: '0.5 g, 15.5 mm, and 0.62 mm. Legend SANTANDER 10 C.',
      },
      {
        label: 'El numismático1975, “Las monedas sangrientas”',
        href: 'http://elnumismatico1975.blogspot.com/2015/04/las-monedas-sangrientas.html',
        note: 'Penagos workshop, 684,000, 130,500, and 250,000 pieces, decree 102 of 1903, and the later melting.',
      },
      {
        label: 'Banrepcultural, Obra comentada: billetes de Peralonso y coscojas de Palonegro',
        href: 'https://www.banrepcultural.org/multimedia/obra-comentada-billetes-de-peralonso-y-coscojas-de-palonegro',
        note: 'The cultural site of the Banco de la República places these pieces beside the Peralonso necessity notes.',
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
