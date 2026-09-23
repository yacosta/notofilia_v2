import type { CatalogSource, LocalizedText } from './catalog';
import {
  coinagePath,
  unitedStatesCoins,
  USA_HARD_TIMES_PATH,
  USA_HARD_TIMES_PATH_EN,
  type UnitedStatesCoin,
} from './estados-unidos-coinage';

export const HARD_TIMES_HERO = {
  src: '/images/catalog/estados-unidos/hero-hard-times.jpg',
  width: 1024,
  height: 438,
} as const;

export type HardTimesSection = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedText[];
};

export const hardTimesSeriesCopy = {
  es: {
    metaTitle: 'Fichas Hard Times · EE. UU. | Notofilia',
    metaDescription:
      'Fichas Hard Times de 1832–1844: el HT-34 de 1837 y la store card de John J. Adams (HT-181, hacia 1835).',
    kicker: 'Estados Unidos · Numismática',
    title: 'Fichas Hard Times',
    breadcrumbCurrent: 'Fichas Hard Times',
    parentLink: 'Numismática',
    seriesLink: 'Estados Unidos · Numismática',
    heroAlt:
      'Mapa ilustrado de los Estados Unidos en el Pánico de 1837: tierras del Oeste, Filadelfia, Nueva Orleans y una ficha Hard Times de 1837',
    holdingsTitle: 'En esta colección',
    holdingsIntro:
      'Dos fichas sin serial y sin encapsular: el HT-34 (Low-20) de 1837, burro y tortuga SUB TREASURY, y el HT-181 (Low-300) de John J. Adams, hacia 1835, jabalí y «Cash for Bristles». Abra cada ficha para el anverso, el reverso y los datos de catálogo.',
    viewCoin: 'Ver la ficha',
    rarityTitle: 'Escala de rareza (Rulau / Fuld)',
    rarityIntro:
      'Los especialistas de la serie usan una escala R1–R9 de poblaciones estimadas, afín a la de Fuld para las fichas de la Guerra Civil. No es la escala de Sheldon de la moneda federal ni la Universal Rarity Scale de Bowers. Esta página no publica precios.',
    rarityRating: 'Grado',
    rarityLabel: 'Designación',
    rarityPopulation: 'Población estimada',
    sourcesTitle: 'Fuentes',
    relatedTitle: 'También en la vitrina',
  },
  en: {
    metaTitle: 'Hard Times tokens · United States | Notofilia',
    metaDescription:
      'Hard Times tokens of 1832–1844: the 1837 HT-34 and the John J. Adams store card (HT-181, circa 1835).',
    kicker: 'United States · Numismatics',
    title: 'Hard Times tokens',
    breadcrumbCurrent: 'Hard Times tokens',
    parentLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    heroAlt:
      'Illustrated map of the United States in the Panic of 1837: Western lands, Philadelphia, New Orleans, and an 1837 Hard Times token',
    holdingsTitle: 'In this collection',
    holdingsIntro:
      'Two tokens with no serial and unslabbed: the 1837 HT-34 (Low-20), jackass and SUB TREASURY tortoise, and John J. Adams’s HT-181 (Low-300), circa 1835, boar and “Cash for Bristles.” Open each record for obverse, reverse, and catalog facts.',
    viewCoin: 'Open the token page',
    rarityTitle: 'Rarity scale (Rulau / Fuld)',
    rarityIntro:
      'Specialists in the series use an R1–R9 scale of estimated surviving populations, akin to Fuld’s scale for Civil War tokens. It is not the Sheldon scale of federal coin or Bowers’s Universal Rarity Scale. This page does not publish prices.',
    rarityRating: 'Rating',
    rarityLabel: 'Designation',
    rarityPopulation: 'Estimated surviving population',
    sourcesTitle: 'Sources',
    relatedTitle: 'Also in the case',
  },
} as const;

export const hardTimesSeriesLead: LocalizedText = {
  es: 'Entre 1832 y 1844, cobre, latón y metal blanco privados circularon al tamaño de un large cent cuando el público atesoró la moneda federal. Hoy se catalogan como exonumia; entonces pagaban el pan.',
  en: 'Between 1832 and 1844, privately struck copper, brass, and white metal circulated at large-cent size when the public hoarded federal coin. Today they are catalogued as exonumia; then they bought bread.',
};

export const hardTimesNarrative: HardTimesSection[] = [
  {
    id: 'era',
    title: {
      es: 'La era Hard Times y la exonumia',
      en: 'The Hard Times era and exonumia',
    },
    paragraphs: [
      {
        es: 'La numismática estadounidense se cruza aquí con la historia monetaria y la política. Las fichas Hard Times se acuñaron sobre todo entre 1832 y 1844, en cobre, latón y metal blanco, en el módulo del large cent o del half cent —unos 28 mm—. No salieron de una ceca soberana: cubrieron la menuda del comercio al por menor cuando escaseó el metal de curso.',
        en: 'American numismatics meets monetary history and politics here. Hard Times tokens were struck mainly between 1832 and 1844, in copper, brass, and white metal, on the large-cent or half-cent module — about 28 mm. They did not come from a sovereign mint: they covered retail small change when legal-tender metal ran short.',
      },
      {
        es: 'Sirvieron a la vez de medio de pago y de prensa de partido. Douglas Mudd, director y curador del Money Museum de la American Numismatic Association, sitúa la serie entre 1832 y 1844 y recuerda que la escasez de menuda era anterior al Pánico de 1837: arrastraba desde la época colonial pese a la Mint. Las fichas cubrieron ese problema práctico y, al mismo tiempo, llevaron lemas políticos por el comercio diario. Hoy se clasifican como exonumia —objetos numismáticos que no son moneda ni papel de curso federal—. En los años 1830 y 1840 circularon junto al cobre federal y a la plata extranjera muy gastada.',
        en: 'They served at once as a medium of exchange and as party media. Douglas Mudd, director and curator of the American Numismatic Association’s Money Museum, places the series in 1832–1844 and notes that the shortage of small change predated the Panic of 1837: it had run since the colonial period despite the Mint. The tokens met that practical need and, at the same time, carried political mottos through everyday commerce. Today they are classed as exonumia — numismatic objects that are not federal legal-tender coin or paper. In the 1830s and 1840s they passed with federal copper and heavily worn foreign silver.',
      },
    ],
  },
  {
    id: 'bank-war',
    title: {
      es: 'Jackson, la Bank War y el Pánico de 1837',
      en: 'Jackson, the Bank War, and the Panic of 1837',
    },
    paragraphs: [
      {
        es: 'El cobre privado proliferó por la política monetaria federal y una crisis de confianza en el papel. El origen está en la Bank War: la pelea por recharter del Second Bank of the United States. En 1832 Andrew Jackson hizo campaña contra ese banco, al que veía como un monopolio de depósitos federales que favorecía intereses financieros del Norte frente al Sur y el Oeste agrarios. Jackson desconfiaba del papel: de joven había aceptado pagarés por tierras, abierto una tienda y quedado al borde de la quiebra cuando los pagarés no valieron nada. Se afirmó como partidario del «hard money»: oro y plata físicos.',
        en: 'Private copper spread because of federal monetary policy and a crisis of confidence in paper. The origin is the Bank War: the fight over rechartering the Second Bank of the United States. In 1832 Andrew Jackson campaigned against that bank, which he saw as a monopoly on federal deposits that favored Northern finance over the agrarian South and West. Jackson distrusted paper: as a young man he had taken promissory notes for land, opened a store, and come close to bankruptcy when the notes proved worthless. He became a hard-money man: physical gold and silver.',
      },
      {
        es: 'Reelegido, vetó la prórroga del charter, que vencía en 1836, y ordenó retirar los depósitos federales hacia bancos estatales favorecidos —los «pet banks»—. Sin la vigilancia del Second Bank, esas casas expandieron el crédito y emitieron papel sin respaldo suficiente, los llamados shinplasters o moneda wildcat. La especulación en tierras públicas y la inflación se dispararon.',
        en: 'Re-elected, he vetoed the charter’s extension, due to expire in 1836, and ordered federal deposits moved into favored state banks — the “pet banks.” Without the Second Bank’s oversight, those houses expanded credit and issued underbacked paper, the so-called shinplasters or wildcat currency. Speculation in public lands and inflation took off.',
      },
    ],
  },
  {
    id: 'specie-circular',
    title: {
      es: 'La Specie Circular de 1836',
      en: 'The Specie Circular of 1836',
    },
    paragraphs: [
      {
        es: 'El 11 de julio de 1836 Jackson y su secretario del Tesoro, Levi Woodbury, firmaron la Specie Circular. Desde el 15 de agosto, las tierras públicas federales se pagaban solo en oro y plata; el papel de los bancos estatales ya no servía para esas compras. El golpe desvalorizó ese papel, drenó especie del Este hacia la frontera y, junto con leyes contra billetes de bajo valor, contrajo la menuda en circulación.',
        en: 'On 11 July 1836 Jackson and his Treasury secretary, Levi Woodbury, issued the Specie Circular. From 15 August, federal public lands had to be paid for in gold and silver; state-bank paper no longer served for those purchases. The shock devalued that paper, drained specie from the East to the frontier, and, with laws against small-denomination bank notes, contracted circulating small change.',
      },
    ],
  },
  {
    id: 'panic',
    title: {
      es: 'Mayo de 1837: desaparece la moneda',
      en: 'May 1837: coin disappears',
    },
    paragraphs: [
      {
        es: 'A la Circular se sumaron la Deposit and Distribution Act de 1836, malas cosechas y un recorte británico de inversión y de demanda de algodón. El resultado fue el Pánico de 1837. Martin Van Buren heredó la caída: en mayo los bancos suspendieron el pago en especie. El público atesoró oro y plata y, enseguida, los centavos y medios centavos de cobre. Sin menuda, el comercio al detalle se paralizó. Ahí entraron grabadores, fabricantes de botones y comerciantes con las fichas Hard Times.',
        en: 'The Circular met the Deposit and Distribution Act of 1836, crop failures, and a British downturn that cut investment and demand for American cotton. The result was the Panic of 1837. Martin Van Buren inherited the crash: in May the banks suspended specie payments. The public hoarded gold and silver and, soon after, copper cents and half cents. Without small change, retail trade stalled. Die sinkers, button makers, and merchants stepped in with Hard Times tokens.',
      },
    ],
  },
  {
    id: 'independent-treasury',
    title: {
      es: 'El Independent Treasury y la caja SUB TREASURY',
      en: 'The Independent Treasury and the SUB TREASURY chest',
    },
    paragraphs: [
      {
        es: 'Van Buren propuso guardar los fondos federales en custodia del gobierno —bóvedas del Tesoro y subtesorerías— en lugar de depositarlos en un banco nacional o en los pet banks estatales. Presentó el plan en la sesión extraordinaria del Congreso de septiembre de 1837. El Congreso no lo convirtió en ley hasta 1840 (Independent Treasury Act, 4 de julio); los whigs lo derogaron al año siguiente. El HT-34 pertenece a la controversia sobre un arreglo financiero propuesto, no a la crítica de un sistema ya consolidado. El blanco era separar el Tesoro federal del sistema bancario.',
        en: 'Van Buren proposed keeping federal funds in government custody — Treasury vaults and sub-treasuries — rather than depositing them in a national bank or in the state pet banks. He put the plan before the special session of Congress in September 1837. Congress did not enact it until 1840 (Independent Treasury Act, 4 July); the Whigs repealed it the following year. HT-34 belongs to the controversy over a proposed financial arrangement, not to criticism of a system already long in force. Its target was the separation of the federal Treasury from the banking system.',
      },
      {
        es: 'Eso da sentido a la tortuga del reverso. Mudd explica la caja fuerte marcada SUB TREASURY como sátira de la lentitud y de la inseguridad —según los críticos— de mover especie, oro y plata, entre subtesorerías dispersas por el país. No es solo un chiste genérico sobre un remedio gubernamental lento. La ficha transmite esa acusación partidista; esta vitrina no la adopta como juicio objetivo de la política. Ninguna de las dos caras del HT-34 lleva un valor facial: decir «ficha de centavo» describe el módulo de large cent y el papel de menuda, no una denominación impresa.',
        en: 'That is why the reverse tortoise matters. Mudd reads the strongbox marked SUB TREASURY as a satire of the slowness and the alleged insecurity of moving specie — gold and silver coin — among geographically scattered sub-treasuries. It is more specific than a general joke about a slow government remedy. The token conveys that partisan criticism; this case does not adopt it as an objective verdict on the policy. Neither face of HT-34 carries an explicit denomination: calling it a “cent token” describes the large-cent module and its role as small change, not a value written on the piece.',
      },
    ],
  },
  {
    id: 'typology',
    title: {
      es: 'Cinco tipos de Lyman Low',
      en: 'Lyman Low’s five types',
    },
    paragraphs: [
      {
        es: 'Lyman Haynes Low fijó en 1899 la clasificación que aún ordena la serie, ampliada después por Russell Rulau. Distinguió cinco grupos: fichas de la controversia bancaria (shinplasters, wildcat banks, política fiscal de Jackson); sátira y política (máximas, caricaturas, causas como la abolición); imitaciones federales (Liberty, estrellas y el lema Millions for Defence / Not One Cent); store cards de comerciantes (nombre, oficio y dirección); y mulas, anverso y reverso de cuños distintos, a veces por ahorro de troqueles.',
        en: 'Lyman Haynes Low set in 1899 the classification that still orders the series, later enlarged by Russell Rulau. He distinguished five groups: bank-controversy pieces (shinplasters, wildcat banks, Jackson’s fiscal policy); satire and politics (maxims, caricatures, causes such as abolition); federal imitations (Liberty, stars, and the motto Millions for Defence / Not One Cent); merchants’ store cards (name, trade, and address); and mules, mismatched obverse and reverse dies, sometimes to save on punches.',
      },
    ],
  },
  {
    id: 'satire',
    title: {
      es: 'Sátira: el burro, el baúl y el barco',
      en: 'Satire: the jackass, the chest, and the ship',
    },
    paragraphs: [
      {
        es: 'Sin caricatura sindicalizada, el cobre llevó el argumento al mostrador. Jackson es el blanco habitual: una ficha sin fecha lo muestra saliendo de un baúl con espada y bolsa, acusación whig de haber reunido poder militar y control del Tesoro. El lema Executive Experiment se burla de su manejo del sistema bancario; el reverso suele llevar un burro «testarudo». El juego con Jackson (jackass) lo popularizó más tarde Thomas Nast como símbolo del Partido Demócrata. El HT-34 de esta vitrina lleva I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR —parodia, no una frase literal del inaugural— y carga a una tortuga con la caja SUB TREASURY; el HT-33 lee Executive Experiment en lugar de Executive Financiering.',
        en: 'Without syndicated cartoons, copper carried the argument to the counter. Jackson is the usual target: one undated token shows him emerging from a chest with sword and money bag, a Whig charge that he had joined military power to control of the Treasury. The motto Executive Experiment mocks his handling of the banks; the reverse often carries a “stubborn” donkey. The pun on Jackson (jackass) was later popularized by Thomas Nast as the Democratic Party’s symbol. The HT-34 in this case reads I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR — a parody, not a verbatim inaugural sentence — and loads a tortoise with the SUB TREASURY chest; HT-33 reads Executive Experiment instead of Executive Financiering.',
      },
      {
        es: 'Circulan también Daniel Webster y William Henry Harrison. Las fichas whig usan un barco —la nave del Estado—, a veces naufragada, metáfora de la economía bajo Van Buren. Un fénix sobre llamas promete que el hard money renacerá de los shinplasters. El Running Boar (HT-9 a HT-13) parodia la política jacksoniana y sobrevive en cantidad.',
        en: 'Tokens for Daniel Webster and William Henry Harrison also circulated. Whig pieces use a ship — the ship of state — sometimes wrecked, a metaphor for the economy under Van Buren. A phoenix over flames promises that hard currency will rise from shinplasters. The Running Boar (HT-9 through HT-13) parodies Jacksonian policy and survives in quantity.',
      },
    ],
  },
  {
    id: 'abolition',
    title: {
      es: 'Abolicionismo en el cobre',
      en: 'Abolition on copper',
    },
    paragraphs: [
      {
        es: 'La ficha antiesclavista de 1838 muestra a una mujer negra arrodillada y encadenada, con las manos alzadas, y la leyenda Am I Not a Woman and a Sister 1838. El diseño toma el medallón británico de Josiah Wedgwood, Am I Not a Man and a Brother. En cobre, circuló en el Norte e introdujo el alegato abolicionista en el cambio menudo.',
        en: 'The 1838 anti-slavery token shows a kneeling, shackled Black woman with hands raised, and the legend Am I Not a Woman and a Sister 1838. The design takes Josiah Wedgwood’s British medallion, Am I Not a Man and a Brother. In copper it circulated in the North and put the abolitionist plea into small change.',
      },
    ],
  },
  {
    id: 'not-one-cent',
    title: {
      es: '«NOT ONE CENT»: evadir la falsificación',
      en: '“NOT ONE CENT”: evading counterfeiting',
    },
    paragraphs: [
      {
        es: 'Para circular sin atraer una acusación federal, los grabadores imitaron diámetro, peso y color del large cent. El anverso copia a menudo la Liberty Matron Head o Classic Head, trece estrellas y una fecha. Estampar ONE CENT en una pieza privada era falsificar. Adoptaron entonces el lema del XYZ Affair (1797–1798): Millions for defense, but not one cent for tribute. MILLIONS FOR DEFENCE en el borde y NOT ONE CENT al centro —a veces con NOT en letra mínima— hacían que, a primera vista, pareciera un centavo federal, y a la vez negaban serlo.',
        en: 'To circulate without inviting a federal charge, die sinkers matched the large cent’s diameter, weight, and color. Obverses often copy Matron Head or Classic Head Liberty, thirteen stars, and a date. Stamping ONE CENT on a private piece was counterfeiting. They therefore took the XYZ Affair motto (1797–1798): Millions for defense, but not one cent for tribute. MILLIONS FOR DEFENCE on the rim and NOT ONE CENT at center — sometimes with NOT in tiny letters — made the token look, at a glance, like a federal cent, while legally stating it was not one.',
      },
    ],
  },
  {
    id: 'feuchtwanger',
    title: {
      es: 'Lewis Feuchtwanger y el cuproníquel',
      en: 'Lewis Feuchtwanger and cupronickel',
    },
    paragraphs: [
      {
        es: 'La mayoría de las fichas son de cobre o latón. El centavo de Feuchtwanger es el experimento metalúrgico de la era. Lewis Feuchtwanger, químico y farmacéutico alemán en Nueva York, patentó en 1829 una aleación blanca —«American Silver» o Feuchtwanger’s Composition, plata alemana— sin plata: cobre, cinc y níquel, más dura que el cobre puro y resistente al verdín. En 1837 pidió al Congreso adoptarla en lugar del large cent. Contrató a Scovill, de Waterbury, Connecticut, para acuñar pruebas de unos 18,5 mm —tamaño de un dime— con águila y serpiente al anverso y ONE CENT / FEUCHTWANGER’S COMPOSITION al reverso. Thomas Hart Benton lo apoyó; Robert M. Patterson, director de la Mint de Filadelfia, lo rechazó: el níquel funde alto, la aleación de tres metales era difícil de estandarizar y el níquel doméstico escaseaba.',
        en: 'Most tokens are copper or brass. The Feuchtwanger cent is the era’s metallurgical experiment. Lewis Feuchtwanger, a German chemist and pharmacist in New York, patented in 1829 a white alloy — “American Silver” or Feuchtwanger’s Composition, German silver — with no silver: copper, zinc, and nickel, harder than pure copper and resistant to verdigris. In 1837 he asked Congress to adopt it in place of the large cent. He hired Scovill of Waterbury, Connecticut, to strike patterns about 18.5 mm — dime size — with an eagle and snake on the obverse and ONE CENT / FEUCHTWANGER’S COMPOSITION on the reverse. Thomas Hart Benton backed him; Robert M. Patterson, director of the Philadelphia Mint, refused: nickel melts high, a three-metal alloy was hard to standardize, and domestic nickel was scarce.',
      },
      {
        es: 'Feuchtwanger puso sus fichas en circulación por su farmacia, con ONE CENT y THREE CENTS explícitos: un limbo legal distinto del NOT ONE CENT. Hay al menos catorce pares de cuños del centavo de 1837 (HT-268). En 1856 la Mint abandonó el large cent de cobre y adoptó el Flying Eagle pequeño, 88 % cobre y 12 % níquel: el argumento que Feuchtwanger había planteado dos décadas antes. Unas piezas de tres centavos de 1864, otra vez en escasez de guerra, no son esta ficha Hard Times.',
        en: 'Feuchtwanger put his tokens into circulation through his pharmacy, boldly marked ONE CENT and THREE CENTS: a legal gray area unlike the NOT ONE CENT tokens. There are at least fourteen die pairings of the 1837 cent (HT-268). In 1856 the Mint dropped the large copper cent and adopted the small Flying Eagle, 88% copper and 12% nickel: the case Feuchtwanger had made two decades earlier. Some 1864 three-cent pieces, struck in another wartime shortage, are not this Hard Times issue.',
      },
    ],
  },
  {
    id: 'scovill',
    title: {
      es: 'Grabadores, store cards y el Coinage Act de 1864',
      en: 'Die sinkers, store cards, and the Coinage Act of 1864',
    },
    paragraphs: [
      {
        es: 'El productor más prolífico fue Scovill Manufacturing Company, de Waterbury, Connecticut, nacida en botones de latón y dueña de laminadoras y prensas. Otros nombres: Wright & Bale en Nueva York, Edward Hulseman y Richard Trested (NY-922). Hulseman firmó una ficha de 1837 como Half Cent Worth of Pure Copper, que apelaba al metal y no al valor facial. Los grabadores vendían el cobre a los comerciantes por menos de un centavo; el comerciante lo daba como cambio a valor de un centavo y ganaba el señoreaje fraccionario, con su anuncio en circulación. Store cards documentan droguerías, ferreterías, paños, diligencias y hasta H.B. West’s Trained Dogs en Nueva York. En esta colección la store card fotografiada es la de John J. Adams, fabricante de cepillos en Taunton, con oficina en Boston: HT-181 (Low-300), hacia 1835.',
        en: 'The most prolific maker was Scovill Manufacturing Company of Waterbury, Connecticut, born in brass buttons and equipped with rolling mills and coining presses. Other names: Wright & Bale in New York, Edward Hulseman, and Richard Trested (NY-922). Hulseman signed an 1837 token Half Cent Worth of Pure Copper, which traded on bullion rather than face value. Die sinkers sold the copper to merchants for less than a cent; the merchant paid it out as change at a full cent and took fractional seigniorage, with his advertisement in circulation. Store cards record apothecaries, hardware, dry goods, coaches, and even H.B. West’s Trained Dogs in New York. The store card photographed in this collection is John J. Adams’s, a brush manufacturer in Taunton with an office in Boston: HT-181 (Low-300), circa 1835.',
      },
      {
        es: 'El Tesoro acusó a William H. Scovill de fabricar cobre falso con ánimo de engañar. El caso se arrastró años y se archivó en 1842: las piezas llevaban publicidad, lemas políticos o NOT ONE CENT, y el gobierno sabía que procesar a los fabricantes cortaría la única menuda que quedaba. La ambigüedad legal se cerró el 22 de abril de 1864, en otra inundación de fichas —las de la Guerra Civil—. El Coinage Act de 1864 cambió el centavo federal, autorizó la pieza de dos centavos (la primera con In God We Trust) y criminalizó la acuñación privada de uno y dos centavos para circular. Ahí terminó la menuda de emergencia privada en Estados Unidos.',
        en: 'The Treasury indicted William H. Scovill for making counterfeit copper with intent to deceive. The case dragged for years and was dismissed in 1842: the tokens carried advertising, political slogans, or NOT ONE CENT, and the government knew that prosecuting the makers would destroy the only small change still circulating. The legal fog lifted on 22 April 1864, in another flood of tokens — Civil War pieces. The Coinage Act of 1864 changed the federal cent, authorized the two-cent piece (the first to bear In God We Trust), and criminalized private striking of one- and two-cent coins for circulation. That ended private emergency small change in the United States.',
      },
    ],
  },
  {
    id: 'silver',
    title: {
      es: 'Plata de emergencia: el real de a ocho',
      en: 'Emergency silver: the piece of eight',
    },
    paragraphs: [
      {
        es: 'Hasta el Coinage Act de 1857, la plata extranjera —sobre todo el real de a ocho español y mexicano— fue curso legal. Por falta de cuartos y medios dólares, comercios y bancos partían el 8 reales en gajos (un «two-bit» valía un cuarto de dólar) y lo contramarcaban para garantizar peso y ley. El catálogo Hard Times incluye varios de esos cortes. Un ejemplo es el contramarca Planters Bank sobre cuartos de 8 reales en Nueva Orleans (HT-125), con las iniciales P B. Algunas marcas son anteriores a 1832–1844 —Planters Bank se sitúa en la escasez de 1811–1815— pero se coleccionan con las fichas de cobre porque cumplen la misma función: menuda privada validada en emergencia.',
        en: 'Until the Coinage Act of 1857, foreign silver — especially the Spanish and Mexican 8 reales — was legal tender. Short of domestic quarters and half dollars, shops and banks chopped the 8 reales into wedges (a “two-bit” piece equaled a quarter dollar) and counterstamped them to guarantee weight and fineness. The Hard Times catalogue includes several of those cuts. One example is the Planters Bank counterstamp on cut quarters of 8 reales in New Orleans (HT-125), with the initials P B. Some marks predate 1832–1844 — Planters Bank belongs to the 1811–1815 shortage — but they are collected with the copper tokens because they share the same job: privately validated emergency small change.',
      },
    ],
  },
  {
    id: 'catalog',
    title: {
      es: 'Low, Rulau y las revisiones posteriores',
      en: 'Low, Rulau, and later revisions',
    },
    paragraphs: [
      {
        es: 'La segunda edición de Hard Times Tokens de Lyman Haynes Low (1899) fijó las cinco tipologías y 164 variedades, con números Low (el centavo de Feuchtwanger es Low-120). Edgar H. Adams añadió láminas en 1913; William F. Dunham, una lista en 1910. Para coleccionistas como Wayte Raymond y John J. Ford, Jr., esas 164 piezas siguen siendo las «verdaderas» Hard Times: política y necesidad de la era, no todo el scrip periférico.',
        en: 'Lyman Haynes Low’s second edition of Hard Times Tokens (1899) set the five typologies and 164 varieties, with Low numbers (the Feuchtwanger cent is Low-120). Edgar H. Adams added plates in 1913; William F. Dunham a list in 1910. For collectors such as Wayte Raymond and John J. Ford, Jr., those 164 pieces remain the “true” Hard Times tokens: the era’s political and necessity issues, not every peripheral scrip.',
      },
      {
        es: 'En 1981, y hasta el Standard Catalog of Hard Times Tokens de 2001, Russell Rulau absorbió la lista de Low y sumó store cards, contramarcas y variedades hasta la zona de los 500, con el sistema HT. PCGS, NGC y las casas de subasta usan hoy el HT como atribución primera, con el Low entre paréntesis. Q. David Bowers, en A Guide Book of Hard Times Tokens (2015), estrechó el criterio y dejó fuera scrip de cartón y contramarcas de fecha dudosa. Robert Schuman, en The True Hard Times Tokens, vuelve a Low y separa la sátira política de los store cards locales.',
        en: 'In 1981, and through the 2001 Standard Catalog of Hard Times Tokens, Russell Rulau absorbed Low’s list and added store cards, counterstamps, and varieties into the mid-500s, with the HT system. PCGS, NGC, and the auction houses now use HT as the primary attribution, with Low in parentheses. Q. David Bowers, in A Guide Book of Hard Times Tokens (2015), tightened the definition and dropped cardboard scrip and weakly dated counterstamps. Robert Schuman, in The True Hard Times Tokens, returns to Low and separates overt political pieces from local store cards.',
      },
    ],
  },
  {
    id: 'close',
    title: {
      es: 'Cobre de una crisis',
      en: 'Copper from a crisis',
    },
    paragraphs: [
      {
        es: 'Las fichas Hard Times muestran cómo el comercio privado inventó menuda cuando escaseó el metal federal. Legalmente, el NOT ONE CENT y el cuproníquel de Feuchtwanger marcan el límite que el Congreso cerró en 1864. Políticamente, el cobre es un documento de la retórica jacksoniana: de la súplica abolicionista a la tortuga de la Sub-Tesorería propuesta. Esta vitrina no tasa el mercado ni reproduce cotizaciones; documenta el HT-34 de 1837 y la store card HT-181 de John J. Adams fotografiados en la colección.',
        en: 'Hard Times tokens show how private trade invented small change when federal metal ran short. Legally, the NOT ONE CENT tokens and Feuchtwanger’s cupronickel mark the line Congress closed in 1864. Politically, the copper is a document of Jacksonian rhetoric: from the abolitionist plea to the tortoise of the proposed Sub-Treasury. This case does not price the market or republish quotes; it records the photographed 1837 HT-34 and the John J. Adams HT-181 store card.',
      },
    ],
  },
];

export const hardTimesRarityRows: { rating: string; label: LocalizedText; population: LocalizedText }[] = [
  {
    rating: 'R1',
    label: { es: 'Común', en: 'Common' },
    population: { es: 'Más de 1.250 (Fuld: más de 5.000)', en: 'More than 1,250 (Fuld: more than 5,000)' },
  },
  {
    rating: 'R2',
    label: { es: 'Poco común', en: 'Less common' },
    population: { es: '501 a 1.250 (Fuld: 2.001 a 5.000)', en: '501 to 1,250 (Fuld: 2,001 to 5,000)' },
  },
  {
    rating: 'R3',
    label: { es: 'Escasa', en: 'Scarce' },
    population: { es: '201 a 500', en: '201 to 500' },
  },
  {
    rating: 'R4',
    label: { es: 'Muy escasa', en: 'Very scarce' },
    population: { es: '76 a 200', en: '76 to 200' },
  },
  {
    rating: 'R5',
    label: { es: 'Rara', en: 'Rare' },
    population: { es: '31 a 75', en: '31 to 75' },
  },
  {
    rating: 'R6',
    label: { es: 'Muy rara', en: 'Very rare' },
    population: { es: '13 a 30', en: '13 to 30' },
  },
  {
    rating: 'R7',
    label: { es: 'Extremadamente rara', en: 'Extremely rare' },
    population: { es: '4 a 12', en: '4 to 12' },
  },
  {
    rating: 'R8',
    label: { es: 'Prohibidamente rara', en: 'Prohibitively rare' },
    population: { es: '2 o 3', en: '2 or 3' },
  },
  {
    rating: 'R9',
    label: { es: 'Única', en: 'Unique' },
    population: { es: '1 ejemplar conocido', en: '1 known specimen' },
  },
];

export const hardTimesSeriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Hard_times_token',
    es: 'Wikipedia — Hard times token',
    en: 'Wikipedia — Hard times token',
    note: {
      es: 'Marco de 1832–1844, Pánico de 1837 y menuda privada. No se republican precios.',
      en: '1832–1844 frame, Panic of 1837, and private small change. Prices are not republished.',
    },
  },
  {
    href: 'https://www.money.org/tales-from-the-vault-hard-times-tokens/',
    es: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 sep. 2015)',
    en: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 Sep. 2015)',
    note: {
      es: 'Serie 1832–1844; escasez de menuda anterior al pánico; tortuga y especie entre subtesorerías.',
      en: '1832–1844 series; small-change shortage before the panic; tortoise and specie among sub-treasuries.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Independent_Treasury',
    es: 'Wikipedia — Independent Treasury',
    en: 'Wikipedia — Independent Treasury',
    note: {
      es: 'Propuesta de septiembre de 1837; ley del 4 de julio de 1840.',
      en: 'September 1837 proposal; act of 4 July 1840.',
    },
  },
  {
    href: 'https://millercenter.org/president/vanburen/domestic-affairs',
    es: 'Miller Center — Martin Van Buren: Domestic Affairs',
    en: 'Miller Center — Martin Van Buren: Domestic Affairs',
    note: {
      es: 'Nominación de 1835 y sesión extraordinaria de septiembre de 1837.',
      en: '1835 nomination and the September 1837 special session.',
    },
  },
  {
    href: 'https://coinweek.com/the-strange-story-of-hard-time-tokens/',
    es: 'CoinWeek — The Strange Story of Hard Time Tokens',
    en: 'CoinWeek — The Strange Story of Hard Time Tokens',
    note: {
      es: 'Sátira jacksoniana, NOT ONE CENT y circulación como menuda.',
      en: 'Jacksonian satire, NOT ONE CENT, and circulation as small change.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/',
    es: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    en: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    note: {
      es: 'Atribución HT de Rulau, con cruce a Low cuando aplica.',
      en: 'Rulau HT attribution, with a Low cross-reference when it applies.',
    },
  },
  {
    href: 'https://archive.org/stream/hardtimestokenss0000lyma/hardtimestokenss0000lyma_djvu.txt',
    es: 'Low, Lyman Haynes — Hard Times Tokens, 2.ª ed. (texto)',
    en: 'Low, Lyman Haynes — Hard Times Tokens, 2nd ed. (text)',
    note: {
      es: 'Clasificación fundacional de 1899 y números Low.',
      en: 'Foundational 1899 classification and Low numbers.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Feuchtwanger_Cent',
    es: 'Wikipedia — Feuchtwanger Cent',
    en: 'Wikipedia — Feuchtwanger Cent',
    note: {
      es: 'Aleación de Feuchtwanger y el centavo de 1837 (HT-268).',
      en: 'Feuchtwanger’s alloy and the 1837 cent (HT-268).',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Coinage_Act_of_1864',
    es: 'Wikipedia — Coinage Act of 1864',
    en: 'Wikipedia — Coinage Act of 1864',
    note: {
      es: '22 de abril de 1864: fin de la acuñación privada de uno y dos centavos.',
      en: '22 April 1864: the end of private one- and two-cent coinage.',
    },
  },
];

export const hardTimesRelated = [
  {
    href: '/glosario/exonumia/',
    title: { es: 'Glosario: exonumia', en: 'Glossary: exonumia' },
    dek: {
      es: 'Fichas, vales y scrip que no son curso legal federal.',
      en: 'Tokens, vouchers, and scrip that are not federal legal tender.',
    },
  },
  {
    href: '/coleccion/estados-unidos-numismatica/',
    title: { es: 'Estados Unidos · Numismática', en: 'United States · Numismatics' },
    dek: {
      es: 'Filadelfia, el dólar de 2026 y el resto de la vitrina metálica.',
      en: 'Philadelphia, the 2026 dollar, and the rest of the coin case.',
    },
  },
] as const;

export function hardTimesHoldings(): UnitedStatesCoin[] {
  return unitedStatesCoins.filter((coin) => coin.chapterId === 'hard-times');
}

export { coinagePath as hardTimesParentPath, USA_HARD_TIMES_PATH, USA_HARD_TIMES_PATH_EN };
