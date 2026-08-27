import type { CatalogSource, LocalizedText } from './catalog';

export const LAZARETTOS_PATH = '/coleccion/lazarettos/';

export type LazarettosChapterId = 'cano-de-loro' | 'contratacion' | 'agua-de-dios' | 'coscoja';

export type LazarettosChapter = {
  id: LazarettosChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const lazarettosChapters: LazarettosChapter[] = [
  {
    id: 'cano-de-loro',
    years: { es: '1598–mediados del s. XX', en: '1598–mid-20th c.' },
    title: {
      es: 'Caño de Loro · Tierrabomba',
      en: 'Caño de Loro · Tierrabomba',
    },
    lead: {
      es: 'El Hospital de San Lázaro de Cartagena, el traslado a la isla y el primer lazareto de la costa.',
      en: 'Cartagena’s Hospital of San Lázaro, the move to the island, and the first lazaretto on the coast.',
    },
    body: {
      es: 'Señal Memoria sitúa la construcción del Hospital de San Lázaro de Cartagena en 1592 y su apertura en 1598: allí reunieron a los enfermos llegados de España. El Archivo General de la Nación coloca ese hospital entre 1610 y 1640, y su traslado a la isla de Tierrabomba. En 1742 el ingeniero Antonio de Arévalo recomendó mover el leprocomio a Caño del Loro, en Cantera Vieja; en 1772 había 104 internos. Fue el más antiguo de los tres lazaretos que perdurarían. Trataron con aceite de chaulmoogra; las condiciones fueron precarias. El recinto desapareció a mediados del siglo XX.',
      en: 'Señal Memoria dates the Hospital of San Lázaro in Cartagena to a 1592 start of works and an opening in 1598: there the authorities gathered the sick who had arrived from Spain. The Archivo General de la Nación places that hospital between 1610 and 1640, and its transfer to the island of Tierrabomba. In 1742 the engineer Antonio de Arévalo recommended moving the leprosarium to Caño del Loro, at Cantera Vieja; in 1772 it held 104 interned patients. It was the oldest of the three lazarettos that would last. They treated with chaulmoogra oil; conditions were poor. The compound vanished in the mid-twentieth century.',
    },
  },
  {
    id: 'contratacion',
    years: { es: 'desde 1812', en: 'from 1812' },
    title: {
      es: 'Contratación · río Suárez',
      en: 'Contratación · the Suárez River',
    },
    lead: {
      es: 'Los enfermos de El Curo, las dieciocho casas de Santander y el sanatorio que aún funciona.',
      en: 'The sick of El Curo, Santander’s eighteen houses, and the sanatorium that still works.',
    },
    body: {
      es: 'En 1812, a petición de los leprosos de El Curo, se fundó un lazareto en lo que hoy es Contratación, Santander. En 1822, por disposición de Francisco de Paula Santander, se alzaron dieciocho casas a orillas del río Suárez; de ese asiento nació el municipio. Rodríguez Salazar y Arévalo Hernández sitúan la organización republicana del recinto en 1861. Hasta 1910 no se fijaron los límites territoriales —lo mismo en Caño de Loro y en Agua de Dios—. Hubo juzgado, notaría y registro. El lugar acuñó su propia moneda. Hoy sigue funcionando un sanatorio.',
      en: 'In 1812, at the request of the lepers of El Curo, a lazaretto was founded in what is now Contratación, Santander. In 1822, by order of Francisco de Paula Santander, eighteen houses went up on the banks of the Suárez River; the municipality grew from that settlement. Rodríguez Salazar and Arévalo Hernández place the republican organization of the compound in 1861. Territorial limits were not fixed until 1910 — the same at Caño de Loro and Agua de Dios. There was a court, a notary, and a registry. The place struck its own coin. A sanatorium still operates there.',
    },
  },
  {
    id: 'agua-de-dios',
    years: { es: 'desde 1870', en: 'from 1870' },
    title: {
      es: 'Agua de Dios · Alto Magdalena',
      en: 'Agua de Dios · Alto Magdalena',
    },
    lead: {
      es: 'El sanatorio del 10 de agosto de 1870, el Puente de los Suspiros y el cordón de alambre.',
      en: 'The sanatorium of 10 August 1870, the Bridge of Sighs, and the barbed-wire cordon.',
    },
    body: {
      es: 'El 10 de agosto de 1870 se creó el Sanatorio de Agua de Dios, a 115 kilómetros de Bogotá, en el paso colonial hacia el suroccidente de Cundinamarca. El nombre viene de las aguas termales de Los Chorros, en la vereda San José de Tocaima. En 1872 se tendió el Puente de los Suspiros sobre el río Bogotá: por allí se entraba y, para muchos, no se volvía. El 16 de noviembre de 1881 nació el municipio; el reconocimiento legal llegó el 29 de noviembre de 1963. La Ley 104 de 1890 impuso el aislamiento total. Desde 1890 no podía entrar ningún sano, ni un familiar; los enfermos no salían sin permiso. En 1901 el asentamiento se cercó con alambre de púas y lo vigiló una Policía Nacional Interna formada por los mismos pacientes. El Decreto 14 de 1905 declaró «medida de urgente necesidad» el aislamiento o la secuestración, previo examen médico. En 1913 un cordón sanitario aisló los tres lazaretos. El decreto departamental 159 de 1907 mandó desinfectar la correspondencia que salía del recinto. La Ley 148 de 1961 abolió el aislamiento obligatorio. Ocho predios del sanatorio son Patrimonio Histórico de la Nación por la Ley 1435 de 2011.',
      en: 'On 10 August 1870 the Sanatorium of Agua de Dios was created, 115 kilometres from Bogotá, on the colonial road toward southwestern Cundinamarca. The name comes from the hot springs of Los Chorros, in the San José hamlet of Tocaima. In 1872 the Bridge of Sighs was thrown over the Bogotá River: one entered there and, for many, did not return. The municipality was born on 16 November 1881; legal recognition came on 29 November 1963. Law 104 of 1890 imposed total isolation. From 1890 no healthy person could enter, not even a relative; the sick did not leave without leave. In 1901 the settlement was ringed with barbed wire and watched by an Internal National Police formed of the patients themselves. Decree 14 of 1905 declared isolation or sequestration, after a medical examination, “a measure of urgent necessity.” In 1913 a sanitary cordon isolated all three lazarettos. Departmental decree 159 of 1907 ordered the disinfection of mail leaving the compound. Law 148 of 1961 abolished compulsory isolation. Eight properties of the sanatorium are National Historic Heritage under Law 1435 of 2011.',
    },
  },
  {
    id: 'coscoja',
    years: { es: '1901–1928', en: '1901–1928' },
    title: {
      es: 'La coscoja · moneda del cordón',
      en: 'The coscoja · coin of the cordon',
    },
    lead: {
      es: 'El decreto 129 de 1900, cuatro emisiones y la moneda que no podía salir del lazareto.',
      en: 'Decree 129 of 1900, four issues, and the coin that could not leave the lazaretto.',
    },
    body: {
      es: 'En plena Guerra de los Mil Días el decreto 129 de 1900 juzgó urgente, «por policía e higiene», que el papel nacional no circulase en los lazaretos. El decreto 300 de 1901, bajo José Manuel Marroquín, fijó la moneda especial: 2½, 5, 10, 20 y 50 centavos, aleación de aluminio y cobre, del tamaño de la plata de 0,835. En el anverso, una cruz de Malta con la palabra lazareto; en el reverso, el valor y «República de Colombia». La Ley 8 de 1905 y el decreto 1452 de 1907, con Agua de Dios ya cercado, mandaron 30.000 pesos oro en níquel de 1, 5 y 10 centavos: por eso se llamó coscoja, cosa menuda. El decreto 738 de 1921 autorizó 100.000 pesos en 50, 20, 10, 5 y 1 centavos. La última acuñación fue en 1928, bajo Miguel Abadía Méndez: solo piezas de 50 centavos en bronce. El curso fuera del perímetro se prohibía; la pena era el decomiso. En los años treinta el Estado ordenó que circulara la moneda nacional; en la práctica la coscoja siguió hasta el cierre de 1961. El AGN anota también emisiones de 1, 2, 5, 10, 20, 25 y 50 centavos de circulación exclusiva, y que al entrar se perdían voto y herencia. Esta vitrina reunirá esas especies —como las fichas de Filipinas y las monedas de Santa Fe— a medida que se documenten.',
      en: 'In the War of a Thousand Days, decree 129 of 1900 judged it urgent, “as a matter of policing and hygiene,” that national paper not circulate in the lazarettos. Decree 300 of 1901, under José Manuel Marroquín, fixed the special coin: 2½, 5, 10, 20, and 50 centavos, an aluminium-copper alloy, the size of 0.835 silver. On the obverse, a Maltese cross with the word lazareto; on the reverse, the value and “República de Colombia.” Law 8 of 1905 and decree 1452 of 1907, with Agua de Dios already enclosed, ordered 30,000 gold pesos in nickel of 1, 5, and 10 centavos: hence the name coscoja, a little thing. Decree 738 of 1921 authorized 100,000 pesos in 50, 20, 10, 5, and 1 centavos. The last striking was in 1928, under Miguel Abadía Méndez: only 50-centavo pieces in bronze. Use outside the perimeter was forbidden; the penalty was seizure. In the 1930s the State ordered national coin to circulate; in practice the coscoja lasted until the closure of 1961. The AGN also notes issues of 1, 2, 5, 10, 20, 25, and 50 centavos of exclusive circulation, and that on entry one lost the vote and inheritance. This case will gather those pieces — as the Philippines notes and the Santa Fe coins already do — as they are documented.',
    },
  },
];

export const lazarettosSources: CatalogSource[] = [
  {
    href: 'https://www.archivogeneral.gov.co/agua-de-dios-el-leprocomio-que-fue-carcel-para-los-enfermos-de-lepra',
    es: 'Archivo General de la Nación — Agua de Dios, el leprocomio que fue cárcel para los enfermos de lepra (2022)',
    en: 'Archivo General de la Nación — Agua de Dios, the leprosarium that was a prison for those with leprosy (2022)',
    note: {
      es: 'Sanatorio del 10 de agosto de 1870; Hospital de San Lázaro (1610–1640) y Caño de Loro; Contratación en 1822; Decreto 14 de 1905; monedas de circulación exclusiva; Ley 1435 de 2011.',
      en: 'The sanatorium of 10 August 1870; the Hospital of San Lázaro (1610–1640) and Caño de Loro; Contratación in 1822; Decree 14 of 1905; coins of exclusive circulation; Law 1435 of 2011.',
    },
  },
  {
    href: 'https://www.senalmemoria.co/piezas/lazaretos-lepra',
    es: 'Señal Memoria — Lazaretos de Caño del Loro, Contratación y Agua de Dios',
    en: 'Señal Memoria — The lazarettos of Caño del Loro, Contratación, and Agua de Dios',
    note: {
      es: 'San Lázaro de Cartagena (1592–1598); traslado de 1742 por Arévalo; Contratación en 1812; Agua de Dios desde 1871; cordón de 1913 y policía interna de 1901.',
      en: 'San Lázaro of Cartagena (1592–1598); the 1742 move by Arévalo; Contratación in 1812; Agua de Dios from 1871; the 1913 cordon and the 1901 internal police.',
    },
  },
  {
    href: 'https://doi.org/10.4000/ei.6058',
    es: 'Rodríguez Salazar y Arévalo Hernández — Currency and Social Segregation, the Case of the Leper Colonies in Colombia (2017)',
    en: 'Rodríguez Salazar and Arévalo Hernández — Currency and Social Segregation, the Case of the Leper Colonies in Colombia (2017)',
    note: {
      es: 'Leyes 104 y 113 de 1890; decretos 129 de 1900, 300 de 1901, 1452 de 1907 y 738 de 1921; última acuñación de 1928; persistencia de la coscoja hasta 1961.',
      en: 'Laws 104 and 113 of 1890; decrees 129 of 1900, 300 of 1901, 1452 of 1907, and 738 of 1921; the 1928 last striking; the coscoja’s persistence until 1961.',
    },
  },
  {
    href: 'https://doi.org/10.1590/s0104-59702017000500008',
    es: 'Botero-Jaramillo, Mora-Blanco y Quesada-Jiménez — Historial oral y memoria de los enfermos de Hansen en dos lazaretos de Colombia (2017)',
    en: 'Botero-Jaramillo, Mora-Blanco, and Quesada-Jiménez — Oral history and memory of Hansen’s patients in two Colombian lazarettos (2017)',
    note: {
      es: 'Los tres lazaretos; abolición del aislamiento obligatorio en 1961 y el paso a municipios al año siguiente.',
      en: 'The three lazarettos; abolition of compulsory isolation in 1961 and the turn to municipalities the following year.',
    },
  },
  {
    href: 'https://doi.org/10.17533/udea.rfnsp.v35n3a06',
    es: 'Botero-Jaramillo, Padilla-Pinzón, Beltrán-Serrano y Ossa-Trujillo — Tratamiento de la enfermedad de Hansen en Colombia (2017)',
    en: 'Botero-Jaramillo, Padilla-Pinzón, Beltrán-Serrano, and Ossa-Trujillo — The treatment of Hansen’s disease in Colombia (2017)',
    note: {
      es: 'Abolición del aislamiento obligatorio por la Ley 148 de 1961; Caño de Loro hasta 1950; Agua de Dios y Contratación, municipios entre 1962 y 1963.',
      en: 'Abolition of compulsory isolation by Law 148 of 1961; Caño de Loro until 1950; Agua de Dios and Contratación became municipalities between 1962 and 1963.',
    },
  },
  {
    href: 'https://coinweek.com/offbeat-numismatics-leper-colony-coins-colombia/',
    es: 'CoinWeek — Offbeat Numismatics: The Leper Colony Coins of Colombia (2022)',
    en: 'CoinWeek — Offbeat Numismatics: The Leper Colony Coins of Colombia (2022)',
    note: {
      es: 'Cuatro series bajo Marroquín, Reyes, Suárez y Abadía Méndez; diámetros de 1901; apodo coscoja.',
      en: 'Four series under Marroquín, Reyes, Suárez, and Abadía Méndez; 1901 diameters; the nickname coscoja.',
    },
  },
  {
    href: 'https://patriciadeviaangarita.com/en/lepra-in-colombia/',
    es: 'Patricia Devia Angarita — Lepra in Colombia',
    en: 'Patricia Devia Angarita — Leprosy in Colombia',
    note: {
      es: 'Aislamiento, legislación especial y moneda propia en Agua de Dios, Contratación y Caño de Loro; cambio de retórica médica hacia 1950.',
      en: 'Isolation, special law, and a currency of their own at Agua de Dios, Contratación, and Caño de Loro; the shift in medical rhetoric toward 1950.',
    },
  },
  {
    href: 'https://www.coleccionistasdemonedas.com/en/news/leprosy-coins/',
    es: 'Coleccionistas de Monedas — Leprosy coins: an (almost) unknown numismatic phenomenon',
    en: 'Coleccionistas de Monedas — Leprosy coins: an (almost) unknown numismatic phenomenon',
    note: {
      es: 'Colombia como pionera de la moneda de leprocomio; series de 1901, 1907, 1921 y 1928; cruz y leyenda «lazaretto».',
      en: 'Colombia as pioneer of leprosarium coinage; the 1901, 1907, 1921, and 1928 series; the cross and the legend “lazaretto.”',
    },
  },
  {
    href: 'https://www.dema-coins.com/2023/12/leper-colony-coins-Colombia.html',
    es: 'Dema Coins — Leper colony coins: Colombian leprosarium coinage (2023)',
    en: 'Dema Coins — Leper colony coins: Colombian leprosarium coinage (2023)',
    note: {
      es: 'Circulación restringida a Agua de Dios, Caño de Loro y Contratación; paralelo con Filipinas, Panamá y Venezuela.',
      en: 'Circulation confined to Agua de Dios, Caño de Loro, and Contratación; the parallel with the Philippines, Panama, and Venezuela.',
    },
  },
];

export const lazarettosCopy = {
  es: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catálogo de lazaretos colombianos: Caño de Loro, Contratación, Agua de Dios y la coscoja, la moneda exclusiva del cordón sanitario.',
    kicker: 'Numismática',
    title: 'Lazarettos',
    intro: [
      'Un lazareto no es una ceca. En Colombia fue la casa donde el Estado detenía a los enfermos de Hansen: Caño de Loro en Tierrabomba, Contratación a orillas del Suárez y Agua de Dios en el Alto Magdalena. El nombre viene de Lázaro. El Hospital de San Lázaro de Cartagena abrió en 1598; de allí salió el primer lazareto de la costa. En el siglo XX, para que el papel nacional no cruzara el cordón, Bogotá acuñó una moneda exclusiva: la coscoja.',
      'Esta vitrina reúne esa exonumia del aislamiento. No sustituye a las monedas de Santa Fe ni al papel de la banca libre: las acompaña. Las fichas de cada tipo se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas de cada pieza se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catalog of Colombian lazarettos: Caño de Loro, Contratación, Agua de Dios, and the coscoja, the exclusive coin of the sanitary cordon.',
    kicker: 'Numismatics',
    title: 'Lazarettos',
    intro: [
      'A lazaretto is not a mint. In Colombia it was the house where the State held those with Hansen’s disease: Caño de Loro on Tierrabomba, Contratación on the Suárez, and Agua de Dios in the Alto Magdalena. The name comes from Lazarus. Cartagena’s Hospital of San Lázaro opened in 1598; from it came the first lazaretto on the coast. In the twentieth century, so that national paper would not cross the cordon, Bogotá struck an exclusive coin: the coscoja.',
      'This case gathers that exonumia of isolation. It does not replace the coins of Santa Fe or free-banking paper: it stands beside them. Individual type pages will be published as they are documented, as in the Philippines case and Colombia-Numismatics.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Individual type pages will be published as they are documented, as in the Philippines case and Colombia-Numismatics.',
    sourcesTitle: 'Sources',
  },
} as const;

export function lazarettosPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${LAZARETTOS_PATH}` : LAZARETTOS_PATH;
}
