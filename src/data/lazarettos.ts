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
    years: { es: '1598–1950', en: '1598–1950' },
    title: {
      es: 'Caño del Loro · Bolívar',
      en: 'Caño del Loro · Bolívar',
    },
    lead: {
      es: 'Cerca de Cartagena, en Bolívar: el lazareto creado para atender a los enfermos del norte del país.',
      en: 'Near Cartagena, in Bolívar: the lazaretto created to care for the sick of the north of the country.',
    },
    body: {
      es: 'Ubicado cerca de Cartagena, Caño del Loro fue creado para atender a los enfermos del norte del país. Señal Memoria sitúa la construcción del Hospital de San Lázaro de Cartagena en 1592 y su apertura en 1598: allí reunieron a los enfermos llegados de España. El Archivo General de la Nación coloca ese hospital entre 1610 y 1640, y su traslado a la isla de Tierrabomba. La exposición del Banco de la República fecha en 1620 el primer lazareto del Nuevo Reino —el Real Hospital de San Lázaro, cerca de la plaza— y en 1784 el recinto de Caño del Loro, también llamado La Cantera, en una zona aislada de la bahía, hoy isla de Tierra Bomba. En 1742 el ingeniero Antonio de Arévalo recomendó mover el leprocomio a Caño del Loro, en Cantera Vieja; en 1772 había 104 internos. El decreto del 21 de febrero de 1835 lo asignó al Tercer Distrito, el norte de la República; en 1850 era lazareto provincial de Cartagena y, en 1861, del Estado de Bolívar. Fue el más antiguo de los tres que perdurarían. Trataron con aceite de chaulmoogra; las condiciones fueron precarias. El recinto se clausuró en 1950.',
      en: 'Near Cartagena, Caño del Loro was created to care for the sick of the north of the country. Señal Memoria dates the Hospital of San Lázaro in Cartagena to a 1592 start of works and an opening in 1598: there the authorities gathered the sick who had arrived from Spain. The Archivo General de la Nación places that hospital between 1610 and 1640, and its transfer to the island of Tierrabomba. The Banco de la República exhibition dates the first lazaretto of the New Kingdom — the Royal Hospital of San Lázaro, near the plaza — to 1620, and Caño del Loro, also called La Cantera, to 1784, in an isolated reach of the bay, today the island of Tierra Bomba. In 1742 the engineer Antonio de Arévalo recommended moving the leprosarium to Caño del Loro, at Cantera Vieja; in 1772 it held 104 interned patients. The decree of 21 February 1835 assigned it to the Third District, the north of the Republic; in 1850 it was Cartagena’s provincial lazaretto and, in 1861, that of the State of Bolívar. It was the oldest of the three that would last. They treated with chaulmoogra oil; conditions were poor. The compound was closed in 1950.',
    },
  },
  {
    id: 'contratacion',
    years: { es: 'desde 1812', en: 'from 1812' },
    title: {
      es: 'Contratación · Santander',
      en: 'Contratación · Santander',
    },
    lead: {
      es: 'Del antiguo leprocomio de El Curo: zona de reclusión para la región central y oriental.',
      en: 'From the old leprosarium of El Curo: a confinement zone for the central and eastern region.',
    },
    body: {
      es: 'Contratación, en Santander, se originó en el antiguo leprocomio de El Curo y funcionó como zona de reclusión para la región central y oriental. En 1812, a petición de los leprosos de aquel recinto, se fundó el lazareto en lo que hoy es el municipio. En 1822, por disposición de Francisco de Paula Santander, se alzaron dieciocho casas a orillas del río Suárez; de ese asiento nació el municipio. La guía de la exposición del Banco fecha el decreto del 21 de diciembre de 1835: el traslado de las concentraciones del Socorro y del Primer Distrito a un asentamiento nuevo, El Curo, en la orilla occidental del Suárez, cerca de Guadalupe. Rodríguez Salazar y Arévalo Hernández sitúan la organización republicana del recinto en 1861; Andrés Yepes Pérez precisa que el 27 de septiembre de ese año, por decreto de Eustorgio Salgar, presidente del Estado Soberano de Santander, el lugar empezó a recibir enfermos. El decreto 350 del 23 de marzo de 1906, bajo Rafael Reyes, lo declaró corregimiento destinado al reclusorio. Hasta 1910 no se fijaron los límites territoriales —lo mismo en Caño de Loro y en Agua de Dios—. Hubo juzgado, notaría y registro. El lugar acuñó su propia moneda. La Ley 148 de 1961 restituyó la ciudadanía; la Ordenanza 7 del 16 de marzo de 1962 erigió el municipio. Hoy sigue funcionando un sanatorio.',
      en: 'Contratación, in Santander, grew out of the old leprosarium of El Curo and served as a confinement zone for the central and eastern region. In 1812, at the request of the lepers of that compound, the lazaretto was founded in what is now the municipality. In 1822, by order of Francisco de Paula Santander, eighteen houses went up on the banks of the Suárez River; the municipality grew from that settlement. The Bank’s exhibition guide dates the decree of 21 December 1835: the transfer of the concentrations at Socorro and in the First District to a new settlement, El Curo, on the western bank of the Suárez, near Guadalupe. Rodríguez Salazar and Arévalo Hernández place the republican organization of the compound in 1861; Andrés Yepes Pérez notes that on 27 September of that year, by decree of Eustorgio Salgar, president of the Sovereign State of Santander, the place began to receive the sick. Decree 350 of 23 March 1906, under Rafael Reyes, declared it a corregimiento destined as a place of confinement. Territorial limits were not fixed until 1910 — the same at Caño de Loro and Agua de Dios. There was a court, a notary, and a registry. The place struck its own coin. Law 148 of 1961 restored citizenship; Ordinance 7 of 16 March 1962 erected the municipality. A sanatorium still operates there.',
    },
  },
  {
    id: 'agua-de-dios',
    years: { es: 'desde 1870', en: 'from 1870' },
    title: {
      es: 'Agua de Dios · Cundinamarca',
      en: 'Agua de Dios · Cundinamarca',
    },
    lead: {
      es: 'Fundado el 10 de agosto de 1870: el más poblado, grande e importante del país. Hoy es un municipio.',
      en: 'Founded on 10 August 1870: the most populous, largest, and most important in the country. Today it is a municipality.',
    },
    body: {
      es: 'El 10 de agosto de 1870 se fundó el Sanatorio de Agua de Dios, en Cundinamarca. Fue el más poblado, grande e importante del país; hoy es un municipio. La exposición del Banco lo llama el leprocomio más grande de Colombia: la Ley C de 1864 creó el hospital en una hacienda de Manuel Murillo Toro cuyas tierras ya se llamaban Agua de Dios, comprada por el Estado mediante la escritura 66 del 22 de febrero de 1856, firmada por el secretario de Hacienda José María Baraya. Se alzó a 115 kilómetros de Bogotá, en el paso colonial hacia el suroccidente. El nombre viene de las aguas termales de Los Chorros, en la vereda San José de Tocaima. La Ley C del 15 de enero de 1873 creó la aldea. En 1872 se tendió el Puente de los Suspiros sobre el río Bogotá: por allí se entraba y, para muchos, no se volvía. El 16 de noviembre de 1881 nació el municipio; el reconocimiento legal llegó el 29 de noviembre de 1963. La Ley 104 de 1890 impuso el aislamiento total. Desde 1890 no podía entrar ningún sano, ni un familiar; los enfermos no salían sin permiso. En 1901 el asentamiento se cercó con alambre de púas y lo vigiló una Policía Nacional Interna formada por los mismos pacientes. El Decreto 14 de 1905 declaró «medida de urgente necesidad» el aislamiento o la secuestración, previo examen médico. Ese mismo año se creó la Oficina Central de Lazaretos, que centralizó la dirección de los tres recintos. En 1913 un cordón sanitario aisló los tres lazaretos. La Ley 14 de 1907 —que la guía del Banco cita junto al decreto departamental 159— declaró la enfermedad calamidad pública, mandó desinfectar mercancías y correspondencia que salían del recinto y obligó a acuñar moneda especial. Solo en 1914 llegó el alumbrado público. En 1916 ingresó el compositor Luis A. Calvo, que llamó al pueblo «Ciudad del Dolor». La Ley 148 de 1961 abolió el aislamiento obligatorio. Ocho predios del sanatorio son Patrimonio Histórico de la Nación por la Ley 1435 de 2011.',
      en: 'On 10 August 1870 the Sanatorium of Agua de Dios was founded in Cundinamarca. It was the most populous, largest, and most important in the country; today it is a municipality. The Bank’s exhibition calls it the largest leprosarium in Colombia: Law C of 1864 created the hospital on a hacienda of Manuel Murillo Toro whose lands were already named Agua de Dios, bought by the State under deed 66 of 22 February 1856, signed by the secretary of finance José María Baraya. It stood 115 kilometres from Bogotá, on the colonial road toward the southwest. The name comes from the hot springs of Los Chorros, in the San José hamlet of Tocaima. Law C of 15 January 1873 created the village. In 1872 the Bridge of Sighs was thrown over the Bogotá River: one entered there and, for many, did not return. The municipality was born on 16 November 1881; legal recognition came on 29 November 1963. Law 104 of 1890 imposed total isolation. From 1890 no healthy person could enter, not even a relative; the sick did not leave without leave. In 1901 the settlement was ringed with barbed wire and watched by an Internal National Police formed of the patients themselves. Decree 14 of 1905 declared isolation or sequestration, after a medical examination, “a measure of urgent necessity.” That same year the Central Office of Lazarettos was created, which centralized the direction of the three compounds. In 1913 a sanitary cordon isolated all three lazarettos. Law 14 of 1907 — which the Bank’s guide cites alongside departmental decree 159 — declared the disease a public calamity, ordered the disinfection of goods and mail leaving the compound, and made a special coin obligatory. Public lighting arrived only in 1914. In 1916 the composer Luis A. Calvo entered as a patient and called the town “City of Pain.” Law 148 of 1961 abolished compulsory isolation. Eight properties of the sanatorium are National Historic Heritage under Law 1435 of 2011.',
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
      es: 'El decreto 300 del 12 de marzo de 1901, veinte mil pesos, cuatro emisiones y la moneda que no valía fuera del perímetro.',
      en: 'Decree 300 of 12 March 1901, twenty thousand pesos, four issues, and the coin that had no worth outside the perimeter.',
    },
    body: {
      es: 'En plena Guerra de los Mil Días el decreto 129 de 1900 juzgó urgente, «por policía e higiene», que el papel nacional no circulase en los lazaretos. El decreto 300 del 12 de marzo de 1901, bajo José Manuel Marroquín, mandó veinte mil pesos en moneda de bronce para uso exclusivo en los tres recintos: 2½, 5, 10, 20 y 50 centavos, del tamaño de la plata de 0,835. En el anverso, la cruz octogonal de la Orden de San Lázaro de Jerusalén —también dicha de las ocho beatitudes— con la palabra lazareto; en el reverso, el valor y «República de Colombia». Colombia fue el único de los quince países que acuñaron moneda de leprocomio en grabar esa cruz, salvo en la serie de 1907. Esas piezas no tenían validez fuera del perímetro a no ser con permiso especial; sin él, la pena era el decomiso. La Ley 8 del 30 de abril de 1905 y el decreto del 30 de noviembre de 1907 —el 1452, en las fuentes que le dan número—, con Agua de Dios ya cercado, mandaron treinta mil pesos oro en níquel de 1, 5 y 10 pesos P/M —papel moneda—: por eso se llamó coscoja, poca cosa. El decreto 2209 de 1918 autorizó piezas de 1, 2 y 5 centavos; el 68 de enero de 1919, de 10 y 50: se igualaron a la circulación nacional, se quitaron las letras P/M y se pasó de pesos a centavos. El decreto 738 de 1921 autorizó 100.000 pesos en 50, 20, 10, 5 y 1 centavos. La última acuñación fue en 1928, bajo Miguel Abadía Méndez: solo piezas de 50 centavos en bronce, por un valor que los historiadores sitúan entre 25.000 y 50.000 pesos. En los años treinta el Estado ordenó que circulara la moneda nacional; en la práctica la coscoja siguió hasta el cierre de 1961. El AGN anota también emisiones de 1, 2, 5, 10, 20, 25 y 50 centavos de circulación exclusiva, y que al entrar se perdían voto y herencia. Esta vitrina reunirá esas especies —como las fichas de Filipinas y las monedas de Santa Fe— a medida que se documenten.',
      en: 'In the War of a Thousand Days, decree 129 of 1900 judged it urgent, “as a matter of policing and hygiene,” that national paper not circulate in the lazarettos. Decree 300 of 12 March 1901, under José Manuel Marroquín, ordered twenty thousand pesos in bronze coin for exclusive use in the three compounds: 2½, 5, 10, 20, and 50 centavos, the size of 0.835 silver. On the obverse, the octagonal cross of the Order of Saint Lazarus of Jerusalem — also called the cross of the eight beatitudes — with the word lazareto; on the reverse, the value and “República de Colombia.” Colombia was the only one of the fifteen countries that struck leprosarium coin to engrave that cross, except on the 1907 series. Those pieces had no validity outside the perimeter unless a special permit was held; without it, the penalty was seizure. Law 8 of 30 April 1905 and the decree of 30 November 1907 — 1452, in the sources that number it — with Agua de Dios already enclosed, ordered thirty thousand gold pesos in nickel of 1, 5, and 10 pesos P/M — paper-money pesos —: hence the name coscoja, a little thing. Decree 2209 of 1918 authorized pieces of 1, 2, and 5 centavos; decree 68 of January 1919, of 10 and 50: they were matched to national denominations, the letters P/M were dropped, and the unit passed from pesos to centavos. Decree 738 of 1921 authorized 100,000 pesos in 50, 20, 10, 5, and 1 centavos. The last striking was in 1928, under Miguel Abadía Méndez: only 50-centavo pieces in bronze, for a value that historians place between 25,000 and 50,000 pesos. In the 1930s the State ordered national coin to circulate; in practice the coscoja lasted until the closure of 1961. The AGN also notes issues of 1, 2, 5, 10, 20, 25, and 50 centavos of exclusive circulation, and that on entry one lost the vote and inheritance. This case will gather those pieces — as the Philippines notes and the Santa Fe coins already do — as they are documented.',
    },
  },
];

export const lazarettosSources: CatalogSource[] = [
  {
    href: 'https://www.banrepcultural.org/exposiciones/la-moneda-de-los-lazaretos',
    es: 'Banrepcultural — La moneda de los lazaretos (exposición, Museo Casa de Moneda, 2007–2008)',
    en: 'Banrepcultural — The coin of the lazarettos (exhibition, Casa de Moneda Museum, 2007–2008)',
    note: {
      es: 'Curaduría de Andrés Yepes Pérez y guía de estudio n.° 61: decreto 300 del 12 de marzo de 1901 (20.000 pesos); series de 1901, 1907, 1921 y 1928; cruz de San Lázaro salvo en 1907; Caño del Loro (1784–1950), Contratación y Agua de Dios.',
      en: 'Curated by Andrés Yepes Pérez, with study guide no. 61: decree 300 of 12 March 1901 (20,000 pesos); the 1901, 1907, 1921, and 1928 series; the cross of Saint Lazarus except in 1907; Caño del Loro (1784–1950), Contratación, and Agua de Dios.',
    },
  },
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
      'Catálogo de lazaretos colombianos: Caño del Loro, Contratación, Agua de Dios y la coscoja, la moneda exclusiva del cordón sanitario.',
    kicker: 'Numismática',
    title: 'Lazarettos',
    heroAlt:
      'Póster ilustrado vintage de Agua de Dios, Cundinamarca, Ciudad de la Esperanza: pueblo colonial isométrico, catedral, río Bogotá, puente, Los Chorros y sello de Colombia Correos',
    intro: [
      'Un lazareto no es una ceca. En Colombia fue la casa donde el Estado detenía a los enfermos de Hansen: Caño del Loro, cerca de Cartagena, para el norte; Contratación, nacida de El Curo, para el centro y el oriente; y Agua de Dios, el más poblado, grande e importante del país, hoy municipio de Cundinamarca. El nombre viene de Lázaro y de las órdenes de San Lázaro y de San Juan de Jerusalén, que cuidaron esos hospitales lejos de las periferias urbanas. El Hospital de San Lázaro de Cartagena abrió en 1598; de allí salió el primer lazareto de la costa. A comienzos del siglo XX, bajo la presunción de que el contagio pasaba también por los objetos, el decreto 300 del 12 de marzo de 1901 mandó veinte mil pesos en una moneda que no podía salir del recinto: la coscoja. Colombia fue el único país que grabó en ella la cruz de San Lázaro.',
      'Esta vitrina reúne esa exonumia del aislamiento. No sustituye a las monedas de Santa Fe ni al papel de la banca libre: las acompaña. La exposición bibliográfica del Banco de la República, La moneda de los lazaretos, curada por Andrés Yepes Pérez, se mostró en el segundo piso del Museo Casa de Moneda —Calle 11 n.° 4-93, Bogotá— del 24 de octubre de 2007 al 14 de enero de 2008: un periplo por los tres recintos y las ocho piezas de la colección. Las fichas de cada tipo se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Las fichas de cada pieza se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catalog of Colombian lazarettos: Caño del Loro, Contratación, Agua de Dios, and the coscoja, the exclusive coin of the sanitary cordon.',
    kicker: 'Numismatics',
    title: 'Lazarettos',
    heroAlt:
      'Vintage illustrated poster of Agua de Dios, Cundinamarca, City of Hope: isometric colonial town, cathedral, Bogotá River, bridge, Los Chorros, and a Colombia Correos stamp',
    intro: [
      'A lazaretto is not a mint. In Colombia it was the house where the State held those with Hansen’s disease: Caño del Loro, near Cartagena, for the north; Contratación, born of El Curo, for the centre and the east; and Agua de Dios, the most populous, largest, and most important in the country, today a municipality in Cundinamarca. The name comes from Lazarus and from the orders of Saint Lazarus and Saint John of Jerusalem, which kept those hospitals away from the urban peripheries. Cartagena’s Hospital of San Lázaro opened in 1598; from it came the first lazaretto on the coast. At the beginning of the twentieth century, under the presumption that contagion also passed through objects, decree 300 of 12 March 1901 ordered twenty thousand pesos in a coin that could not leave the compound: the coscoja. Colombia was the only country that engraved on it the cross of Saint Lazarus.',
      'This case gathers that exonumia of isolation. It does not replace the coins of Santa Fe or free-banking paper: it stands beside them. The Banco de la República’s bibliographic exhibition, The coin of the lazarettos, curated by Andrés Yepes Pérez, was shown on the second floor of the Casa de Moneda Museum — Calle 11 no. 4-93, Bogotá — from 24 October 2007 to 14 January 2008: a circuit through the three compounds and the eight pieces in the collection. Individual type pages will be published as they are documented, as in the Philippines case and Colombia-Numismatics.',
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
