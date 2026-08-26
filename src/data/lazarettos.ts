import type { CatalogSource, LocalizedText } from './catalog';

export const LAZARETTOS_PATH = '/coleccion/lazarettos/';

export type LazarettosChapterId = 'ragusa' | 'venecia' | 'malta' | 'mediterraneo';

export type LazarettosChapter = {
  id: LazarettosChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const lazarettosChapters: LazarettosChapter[] = [
  {
    id: 'ragusa',
    years: { es: '1377–1642', en: '1377–1642' },
    title: {
      es: 'Ragusa y el primer quarantena',
      en: 'Ragusa and the first quarantine',
    },
    lead: {
      es: 'El Consejo Mayor de 1377, las islas de Mrkan, Bobara y Supetar, y el lazareto de Ploče.',
      en: 'The Great Council of 1377, the islands of Mrkan, Bobara, and Supetar, and the Ploče lazaretto.',
    },
    body: {
      es: 'El 27 de julio de 1377 el Consejo Mayor de la República de Ragusa —hoy Dubrovnik— mandó que nadie venido de tierras pestíferas entrara en la ciudad sin pasar un mes en las islas de Mrkan, Bobara y Supetar. El decreto, Veniens de locis pestiferis non intret Ragusium, está en el Liber viridis. Al principio la cuarentena fue al aire libre o en cabañas de madera que podían quemarse; en 1397 se usó el monasterio de Mljet. Ana Marinković sitúa las casas siguientes: Supetar en 1429, Danče en 1466, Lokrum en 1534 y Ploče, empezado en 1590 y acabado en 1642, con diez edificios y cinco patios. El nombre lazareto viene de Lázaro, patrón de leprosos. Esta vitrina abre por esa ley: sin ella no hay fichas, sellos ni marcas de desinfección que coleccionar.',
      en: 'On 27 July 1377 the Great Council of the Republic of Ragusa — today’s Dubrovnik — ordered that no one from pestiferous lands enter the city without a month on the islands of Mrkan, Bobara, and Supetar. The decree, Veniens de locis pestiferis non intret Ragusium, is in the Liber viridis. At first quarantine was in the open or in wooden huts that could be burned; in 1397 the monastery on Mljet was used. Ana Marinković places the later houses: Supetar in 1429, Danče in 1466, Lokrum in 1534, and Ploče, begun in 1590 and finished in 1642, with ten buildings and five courtyards. The name lazaretto comes from Lazarus, patron of lepers. This case opens with that law: without it there are no tokens, seals, or disinfection marks to collect.',
    },
  },
  {
    id: 'venecia',
    years: { es: 'desde 1423', en: 'from 1423' },
    title: {
      es: 'Venecia · Lazzaretto Vecchio',
      en: 'Venice · Lazzaretto Vecchio',
    },
    lead: {
      es: 'Santa Maria di Nazareth, los quaranta giorni y el modelo que copió el Mediterráneo.',
      en: 'Santa Maria di Nazareth, the quaranta giorni, and the model the Mediterranean copied.',
    },
    body: {
      es: 'En 1423, bajo el dux Francesco Foscari, Venecia convirtió la isla de Santa Maria di Nazareth en hospital de peste: el Lazzaretto Vecchio. Los cuarenta días —quaranta giorni— dieron el nombre a la cuarentena. Naves y carga se fregaban y sahumaban; la tripulación permanecía en la isla antes de tocar tierra. Ragusa había aislado extranjeros en islas desde 1377; Venecia institucionalizó el hospital-isla y el oficio sanitario. De esa administración salieron precintos, marcas de sanidad y, más tarde, jetones y fichas de oficinas de salud. El Lazzaretto Nuovo complementó el sistema. En esta colección caben piezas y marcas que documentan ese control del tráfico, no solo el edificio.',
      en: 'In 1423, under Doge Francesco Foscari, Venice turned the island of Santa Maria di Nazareth into a plague hospital: the Lazzaretto Vecchio. The forty days — quaranta giorni — gave quarantine its name. Ships and cargo were scrubbed and fumigated; crews stayed on the island before they touched land. Ragusa had isolated foreigners on islands since 1377; Venice institutionalized the island hospital and the health office. From that administration came seals, sanitary marks, and later jetons and tokens of health offices. The Lazzaretto Nuovo completed the system. Pieces and marks that document that control of traffic belong here, not only the building.',
    },
  },
  {
    id: 'malta',
    years: { es: '1643–1970', en: '1643–1970' },
    title: {
      es: 'Malta · Lazzaretto de Manoel',
      en: 'Malta · the Manoel Island Lazzaretto',
    },
    lead: {
      es: 'Los caballeros de San Juan, el Isolotto de Marsamxett y el correo desinfectado.',
      en: 'The Knights of St John, the Isolotto in Marsamxett, and disinfected mail.',
    },
    body: {
      es: 'Marsamxett servía de cuarentena desde 1526. En la peste de 1592–1593 se alzó un lazareto temporal en el Isolotto —hoy Manoel Island—. El edificio actual lo mandaron los caballeros de San Juan en 1643; se amplió en 1670, 1683, 1701, 1726 y 1797. Anthony Camilleri y Paul Cassar describen al Purificatore, nombrado por el Gran Maestre, y la desinfección del correo del Levante y Berbería: cortes paralelos, sahumerio y vinagre. Hacia 1812 el correo salía con lacre rojo; luego con estampilla negra. Una placa de 1814 recuerda que quebrantar la cuarentena podía costar la vida. El recinto fue hospital de aislamiento hasta los años 1970 —peste de 1813, cólera de 1865, peste de 1937—. Las marcas de lazareto maltesas son el corazón filatélico y exonumismático de esta vitrina.',
      en: 'Marsamxett had been used for quarantine since 1526. In the plague of 1592–1593 a temporary lazaretto went up on the Isolotto — now Manoel Island. The present building was ordered by the Knights of St John in 1643; it was enlarged in 1670, 1683, 1701, 1726, and 1797. Anthony Camilleri and Paul Cassar describe the Purificatore, appointed by the Grand Master, and the disinfection of Levant and Barbary mail: parallel slits, fumigation, and vinegar. By 1812 mail left with red wax; later with a black handstamp. An 1814 plaque recalls that breaking quarantine could cost a life. The complex was an isolation hospital into the 1970s — plague in 1813, cholera in 1865, plague again in 1937. Maltese lazaretto marks are the philatelic and exonumismatic heart of this case.',
    },
  },
  {
    id: 'mediterraneo',
    years: { es: '1650–1850', en: '1650–1850' },
    title: {
      es: 'La red mediterránea',
      en: 'The Mediterranean network',
    },
    lead: {
      es: 'De hospital de peste a aduana sanitaria: fichas, jetones y el control del tráfico.',
      en: 'From plague hospital to sanitary customs: tokens, jetons, and the control of traffic.',
    },
    body: {
      es: 'Entre 1650 y 1850 los lazaretos del Mediterráneo —Livorno, Marsella, Corfú, Alejandría y las escalas otomanas— pasaron de hospitales de peste a oficinas de frontera: aranceles, contrabando y, en el siglo XIX, imperio. Una tesis de la Universidad de Malta sigue ese cambio. En esa red circularon jetones de juntas de sanidad, fichas de necesidad y marcas de desinfección sobre carta y fardo. No sustituyen al peso ni al real; son exonumia del tráfico. Esta vitrina reunirá, a medida que se documenten, esas especies —como las fichas de Filipinas y las monedas de Santa Fe—, de Ragusa al último lazareto que aún sellaba el correo.',
      en: 'Between 1650 and 1850 the Mediterranean lazarettos — Livorno, Marseille, Corfu, Alexandria, and the Ottoman stages — passed from plague hospitals to border offices: tariffs, smuggling, and, in the nineteenth century, empire. A University of Malta thesis follows that change. In that network circulated health-board jetons, necessity tokens, and disinfection marks on letter and bale. They do not replace the peso or the real; they are the exonumia of traffic. This case will gather, as they are documented, those pieces — as the Philippines notes and the Santa Fe coins already do — from Ragusa to the last lazaretto that still stamped the mail.',
    },
  },
];

export const lazarettosSources: CatalogSource[] = [
  {
    href: 'https://www.bbc.com/travel/article/20200421-dubrovnik-the-medieval-city-designed-around-quarantine',
    es: 'BBC Travel — Dubrovnik y la cuarentena de 1377',
    en: 'BBC Travel — Dubrovnik and the 1377 quarantine',
    note: {
      es: 'Decreto del 27 de julio de 1377, trentine de treinta días y el origen del nombre lazareto en Lázaro.',
      en: 'The 27 July 1377 decree, the thirty-day trentine, and the name lazaretto from Lazarus.',
    },
  },
  {
    href: 'https://iris.unive.it/retrieve/126ac87d-3b7f-4861-831c-4e477a4cf0c2/marinkovi%c4%87-strunje-2023-between-plague-and-trade-topography-and-typology-of-the-maritime-lazzarettos-in-dubrovnik%20%281%29.pdf',
    es: 'Marinković y Strunje — Lazaretos marítimos de Dubrovnik (2023)',
    en: 'Marinković and Strunje — Maritime lazarettos of Dubrovnik (2023)',
    note: {
      es: 'Supetar 1429, Danče 1466, Lokrum 1534 y Ploče 1590–1642.',
      en: 'Supetar 1429, Danče 1466, Lokrum 1534, and Ploče 1590–1642.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Lazzaretto_Vecchio',
    es: 'Lazzaretto Vecchio — Venecia, 1423',
    en: 'Lazzaretto Vecchio — Venice, 1423',
    note: {
      es: 'Conversión de Santa Maria di Nazareth bajo Foscari y los quaranta giorni.',
      en: 'The conversion of Santa Maria di Nazareth under Foscari and the quaranta giorni.',
    },
  },
  {
    href: 'https://www.um.edu.mt/library/oar/handle/123456789/64725',
    es: 'Universidad de Malta — Lazarettos in the Mediterranean, 1650–1850',
    en: 'University of Malta — Lazarettos in the Mediterranean, 1650–1850',
    note: {
      es: 'Del hospital de peste al control de fronteras y al uso imperial en el siglo XIX.',
      en: 'From plague hospital to border control and nineteenth-century imperial use.',
    },
  },
  {
    href: 'https://www.um.edu.mt/library/oar/handle/123456789/40489',
    es: 'Paul Cassar — A tour of the Lazzaretto buildings (1987)',
    en: 'Paul Cassar — A tour of the Lazzaretto buildings (1987)',
    note: {
      es: 'Inscripciones, reglas de los internados y el recinto de Manoel Island.',
      en: 'Inscriptions, rules for those interned, and the Manoel Island complex.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Lazzaretto_of_Manoel_Island',
    es: 'Lazzaretto de Manoel Island — Malta',
    en: 'Lazzaretto of Manoel Island — Malta',
    note: {
      es: 'Cuarentena en Marsamxett desde 1526; edificio de 1643 y ampliación hasta 1797.',
      en: 'Quarantine in Marsamxett from 1526; the 1643 building and enlargements to 1797.',
    },
  },
];

export const lazarettosCopy = {
  es: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catálogo de lazaretos: cuarentena de Ragusa, Lazzaretto Vecchio de Venecia, Manoel Island en Malta y la red mediterránea de fichas y marcas sanitarias.',
    kicker: 'Numismática',
    title: 'Lazarettos',
    intro: [
      'Un lazareto no es una ceca. Es la casa donde el tráfico se detenía: naves, fardos y cartas de tierras pestíferas, cuarenta días al margen de la ciudad. El nombre viene de Lázaro. La práctica nació en Ragusa en 1377; Venecia la convirtió en hospital-isla en 1423; Malta la llevó a Manoel Island en 1643. Del Mediterráneo entero salieron marcas de desinfección, jetones de juntas de sanidad y fichas de necesidad.',
      'Esta vitrina reúne esa exonumia del cordón sanitario. No sustituye a las monedas de Santa Fe ni al papel de la banca libre: las acompaña. Las fichas de cada tipo se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, de izquierda a derecha por época: Ragusa, Venecia, Malta y la red mediterránea.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catalog of lazarettos: Ragusa’s quarantine, Venice’s Lazzaretto Vecchio, Manoel Island in Malta, and the Mediterranean network of sanitary tokens and marks.',
    kicker: 'Numismatics',
    title: 'Lazarettos',
    intro: [
      'A lazaretto is not a mint. It is the house where traffic stopped: ships, bales, and letters from pestiferous lands, forty days outside the city. The name comes from Lazarus. The practice was born in Ragusa in 1377; Venice made it an island hospital in 1423; Malta took it to Manoel Island in 1643. From the whole Mediterranean came disinfection marks, health-board jetons, and necessity tokens.',
      'This case gathers that exonumia of the sanitary cordon. It does not replace the coins of Santa Fe or free-banking paper: it stands beside them. Individual type pages will be published as they are documented, as in the Philippines case and Colombia-Numismatics.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters, left to right by period: Ragusa, Venice, Malta, and the Mediterranean network.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export function lazarettosPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${LAZARETTOS_PATH}` : LAZARETTOS_PATH;
}

export function lazarettosChapterHref(id: LazarettosChapterId): string {
  return `#${id}`;
}
