import type { CatalogSource, LocalizedText } from './catalog';
import {
  coinagePath,
  unitedStatesCoins,
  USA_MORGAN_PATH,
  USA_MORGAN_PATH_EN,
  type UnitedStatesCoin,
} from './estados-unidos-coinage';

export const MORGAN_HERO = {
  src: '/images/catalog/estados-unidos/hero-morgan-dollars-1878-1904.jpg',
  width: 1800,
  height: 771,
} as const;

export type MorganSection = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedText[];
};

export const morganSeriesCopy = {
  es: {
    metaTitle: 'Dólares Morgan, 1878–1904 · EE. UU. | Notofilia',
    metaDescription:
      'Dólar Morgan de plata, emisión original de 1878 a 1904: peso, cecas, Bland-Allison, fechas clave y el tesoro GSA. En la vitrina: 1883-CC, 1884-S y 1885-CC.',
    kicker: 'Estados Unidos · Numismática',
    title: 'Dólares Morgan de plata — emisión original (1878–1904)',
    breadcrumbCurrent: 'Dólar Morgan, 1878–1904',
    parentLink: 'Numismática',
    seriesLink: 'Estados Unidos · Numismática',
    heroAlt:
      'Cartel del dólar Morgan, emisión original 1878–1904: mapa con las cecas de Filadelfia, Carson City, Nueva Orleans y San Francisco, anverso de 1884, reverso con el águila y una prensa de acuñar. Es una ilustración; las leyendas del cartel están en inglés. No es el escaneo de las piezas de la colección.',
    holdingsTitle: 'En esta colección',
    holdingsIntro:
      'Tres dólares Morgan sueltos, sin serial y sin encapsular: Carson City 1883, con la CC bajo la corona; San Francisco 1884, con la S bajo el lazo; y Carson City 1885, con la CC bajo la corona. Abra cada ficha para el anverso, el reverso y los datos de catálogo.',
    viewCoin: 'Ver la ficha',
    specTitle: 'Especificaciones del tipo',
    specIntro:
      'La columna de la izquierda es la emisión de circulación, incluida la reaparición de 1921. La de la derecha es la reacuñación de coleccionista a partir de 2021. Las medidas son del tipo publicado, no un pesaje de las piezas de esta vitrina. Esta página no publica precios.',
    specAttribute: 'Dato',
    specClassical: 'Emisión clásica (1878–1904, 1921)',
    specModern: 'Reacuñación (2021–)',
    keyTitle: 'Fechas que ordenan la serie',
    keyIntro:
      'La tirada de ceca no es la supervivencia. La ley Pittman de 1918 fundió una parte grande de lo guardado en bóveda, y otras fechas salieron enteras al comercio del Oeste. Las cifras de abajo son tiradas publicadas. Esta página no publica precios.',
    keyDate: 'Fecha y ceca',
    keyMintage: 'Tirada publicada',
    keyNote: 'Qué la distingue',
    gsaTitle: 'Inventario GSA de Carson City',
    gsaIntro:
      'Tras cerrar el canje de certificados de plata por dólares, el inventario que pasó a la General Services Administration era, en más de cuatro quintos, moneda de Carson City sin circular. La tabla compara ese recuento citado con la tirada original. Esta página no publica precios.',
    gsaDate: 'Fecha CC',
    gsaMintage: 'Tirada original',
    gsaHoard: 'Piezas en el inventario GSA',
    gsaShare: 'Parte de la tirada',
    sourcesTitle: 'Fuentes',
    relatedTitle: 'También en la vitrina',
  },
  en: {
    metaTitle: 'Morgan Silver Dollars, 1878–1904 · United States | Notofilia',
    metaDescription:
      'Original-run Morgan silver dollar, 1878–1904: weight, mints, Bland-Allison, key dates, and the GSA hoard. In this case: 1883-CC, 1884-S, and 1885-CC.',
    kicker: 'United States · Numismatics',
    title: 'Morgan Silver Dollars — Original Run (1878–1904)',
    breadcrumbCurrent: 'Morgan dollar, 1878–1904',
    parentLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    heroAlt:
      'Poster for the original-run Morgan dollar, 1878–1904: a map with the Philadelphia, Carson City, New Orleans, and San Francisco mints, an 1884 obverse, the eagle reverse, and a coining press. It is an illustration, not a scan of the pieces in the collection.',
    holdingsTitle: 'In this collection',
    holdingsIntro:
      'Three raw Morgan dollars, with no serial and unslabbed: Carson City 1883, with the CC under the wreath; San Francisco 1884, with the S under the bow; and Carson City 1885, with the CC under the wreath. Open each record for obverse, reverse, and catalog facts.',
    viewCoin: 'Open the coin page',
    specTitle: 'Type specifications',
    specIntro:
      'The left column is the circulation issue, including the 1921 return. The right column is the collector revival from 2021 on. The figures are published type standards, not a weighing of the pieces in this case. This page does not publish prices.',
    specAttribute: 'Attribute',
    specClassical: 'Classical issue (1878–1904, 1921)',
    specModern: 'Revival (2021–)',
    keyTitle: 'Dates that order the series',
    keyIntro:
      'Mint production is not survival. The Pittman Act of 1918 melted a large share of what sat in vaults, and other dates went straight into Western trade. The figures below are published mintages. This page does not publish prices.',
    keyDate: 'Date and mint',
    keyMintage: 'Published mintage',
    keyNote: 'What sets it apart',
    gsaTitle: 'GSA inventory of Carson City dollars',
    gsaIntro:
      'After silver certificates could no longer be redeemed for silver dollars, the inventory transferred to the General Services Administration was, by more than four fifths, uncirculated Carson City coin. The table sets that cited count against the original mintage. This page does not publish prices.',
    gsaDate: 'CC date',
    gsaMintage: 'Original mintage',
    gsaHoard: 'Pieces in the GSA inventory',
    gsaShare: 'Share of the mintage',
    sourcesTitle: 'Sources',
    relatedTitle: 'Also in the case',
  },
} as const;

export const morganSeriesLead: LocalizedText = {
  es: 'George T. Morgan, grabador adjunto de la United States Mint, diseñó el dólar de plata que la ley de 1878 volvió a poner en el comercio. La emisión original corre de 1878 a 1904. En 1921 el mismo tipo reapareció un año, y desde 2021 la Mint lo acuña otra vez para coleccionistas, ya no en la liga de entonces.',
  en: 'George T. Morgan, assistant engraver at the United States Mint, designed the silver dollar the act of 1878 put back into commerce. The original run is 1878 to 1904. In 1921 the same type returned for one year, and since 2021 the Mint has struck it again for collectors, no longer on the old standard.',
};

export const morganNarrative: MorganSection[] = [
  {
    id: 'metal',
    title: {
      es: 'Peso, ley y canto',
      en: 'Weight, fineness, and edge',
    },
    paragraphs: [
      {
        es: 'El dólar de circulación se ajustó al patrón de la ley del 18 de enero de 1837: 26,73 g (412,5 granos), 38,10 mm de diámetro y unos 2,40 mm de grueso. La liga es 90 % plata y 10 % cobre, ley 0,900. El cobre endurece el cospel para el roce del comercio. Esa liga deja 24,057 g de plata fina, 0,77344 onzas troy, el peso de plata fino del tipo. El canto es estriado; las fuentes dan un promedio de unos 189 cordoncillos, con variación según el collar de cada ceca.',
        en: 'The circulation dollar followed the standard of the act of 18 January 1837: 26.73 g (412.5 grains), 38.10 mm in diameter, and about 2.40 mm thick. The alloy is 90% silver and 10% copper, 0.900 fine. The copper hardens the planchet against commercial wear. That alloy leaves 24.057 g of pure silver, 0.77344 troy ounces, the type’s actual silver weight. The edge is reeded; the sources give an average of about 189 reeds, varying with the collar used at each mint.',
      },
      {
        es: 'La reacuñación posterior a 2021 no usa esa liga de 90/10. Las páginas de la Mint describen cospeles de plata 0,999, con el mismo diámetro de 38,10 mm y un peso bruto de 26,73 g que, a esa ley, es plata fina casi entera (0,859 onzas troy). El perfil se parece al histórico. El metal no es el de 1878.',
        en: 'The revival after 2021 does not use that 90/10 alloy. Mint pages describe 0.999 fine silver planchets, with the same 38.10 mm diameter and a gross weight of 26.73 g that, at that fineness, is nearly all pure silver (0.859 troy ounces). The profile resembles the historical coin. The metal is not that of 1878.',
      },
    ],
  },
  {
    id: 'mints',
    title: {
      es: 'Cuatro cecas en la emisión original',
      en: 'Four mints in the original run',
    },
    paragraphs: [
      {
        es: 'La marca, cuando la hay, va en el reverso, bajo la corona de olivo y laurel, encima de las letras D y O de DOLLAR. Filadelfia acuñó toda la serie sin marca. San Francisco, con S, mantuvo producción anual y las crónicas le atribuyen golpe más nítido y lustre de rueda más vivo. Nueva Orleans, con O, reabrió en 1879 después del cierre de la Guerra Civil y acuñó dólares hasta 1904; muchas piezas de esa ceca traen el centro flojo —el pelo de la Libertad y el pecho del águila— por separación de cuños y menor presión. Carson City, con CC, acuñó de 1878 a 1885 y de 1889 a 1893, con plata del Comstock Lode. Denver, con D, no entra en la emisión original: solo acuñó Morgan en 1921, más de 20 millones, antes de pasar al Peace dollar.',
        en: 'The mint mark, when there is one, sits on the reverse, under the olive and laurel wreath, above the letters D and O of DOLLAR. Philadelphia struck the whole series with no mark. San Francisco, with an S, kept up annual production, and the accounts credit it with a sharper strike and a livelier cartwheel. New Orleans, with an O, reopened in 1879 after its Civil War closure and struck dollars through 1904; many of those coins show a soft center — Liberty’s hair and the eagle’s breast — from die spacing and lower pressure. Carson City, with CC, struck from 1878 to 1885 and from 1889 to 1893, on silver from the Comstock Lode. Denver, with a D, is outside the original run: it struck Morgans only in 1921, more than 20 million, before it moved to the Peace dollar.',
      },
    ],
  },
  {
    id: 'law',
    title: {
      es: 'Bland-Allison, Sherman y el pánico de 1893',
      en: 'Bland-Allison, Sherman, and the Panic of 1893',
    },
    paragraphs: [
      {
        es: 'El dólar no nació de la demanda del mostrador. Nació de una pelea por la plata. La Coinage Act de 1873 dejó fuera el dólar de plata estándar. Agraristas y mineros la llamaron el «Crime of ’73». El Comstock Lode hundió el precio del metal, y el bloque del Oeste pidió acuñación libre e ilimitada. El 28 de febrero de 1878 el Congreso superó el veto de Rutherford B. Hayes y aprobó la Bland-Allison Act: el Tesoro debía comprar cada mes entre dos y cuatro millones de dólares en plata nacional, a precio de mercado, y acuñarla en estos dólares. El público prefería el papel al peso de la moneda. La mayor parte de lo acuñado fue a las bóvedas.',
        en: 'The dollar was not born of counter demand. It was born of a fight over silver. The Coinage Act of 1873 dropped the standard silver dollar. Agrarians and miners called it the “Crime of ’73.” The Comstock Lode drove the metal’s price down, and the Western bloc asked for free and unlimited coinage. On 28 February 1878 Congress overrode Rutherford B. Hayes’s veto and passed the Bland-Allison Act: each month the Treasury had to buy between two and four million dollars of domestic silver, at the market price, and coin it into these dollars. The public preferred paper to the weight of the coin. Most of what was struck went into vaults.',
      },
      {
        es: 'En julio de 1890 la Sherman Silver Purchase Act subió el mandato: 4,5 millones de onzas de plata al mes. Los Treasury Notes de 1890 se canjeaban por oro, y la reserva de oro bajó del umbral legal de 100 millones de dólares. Esa corrida alimentó el pánico de 1893. Grover Cleveland convocó una sesión extraordinaria y, a finales de ese año, el Congreso derogó la cláusula de compra. Sin plata nueva, las tiradas de 1893 a 1895 se hicieron cortas. Ahí están varias de las fechas que la serie trata como claves.',
        en: 'In July 1890 the Sherman Silver Purchase Act raised the mandate: 4.5 million ounces of silver a month. Treasury Notes of 1890 were redeemed in gold, and the gold reserve fell through the legal floor of 100 million dollars. That run fed the Panic of 1893. Grover Cleveland called a special session and, late that year, Congress repealed the purchase clause. Without new silver, the mintages of 1893 to 1895 went short. Several of the dates the series treats as keys sit in that gap.',
      },
    ],
  },
  {
    id: 'pittman',
    title: {
      es: 'La ley Pittman y el año 1921',
      en: 'The Pittman Act and 1921',
    },
    paragraphs: [
      {
        es: 'La emisión original se detiene en 1904. Lo que vino después explica por qué tantas tiradas altas escasean hoy. En la Primera Guerra Mundial, la India británica sufrió una corrida sobre la rupia de plata. El 23 de abril de 1918 la Pittman Act, impulsada por el senador Key Pittman de Nevada, autorizó fundir hasta 350 millones de dólares de plata estándar guardados en el Tesoro y vender el metal a Gran Bretaña a un dólar la onza fina. Las cuentas citadas dan la cifra exacta de lo fundido: 270.232.722 dólares, cerca del 47 % de la acuñación Morgan de 1878 a 1904. La misma ley obligó a reponer cada dólar fundido con moneda nueva, de plata nacional comprada a un dólar la onza. De ahí salen los más de 86 millones de Morgan de 1921 en Filadelfia, Denver y San Francisco, y, en diciembre de ese año, el Peace dollar de Anthony de Francisci.',
        en: 'The original run stops in 1904. What followed explains why so many high mintages are scarce today. In the First World War, British India suffered a run on the silver rupee. On 23 April 1918 the Pittman Act, sponsored by Senator Key Pittman of Nevada, authorized melting up to 350 million standard silver dollars stored in the Treasury and selling the bullion to Great Britain at one dollar a fine ounce. The cited accounts give the exact melt: 270,232,722 dollars, about 47% of the Morgan coinage of 1878 to 1904. The same act required every melted dollar to be replaced with new coin, from domestic silver bought at one dollar an ounce. That replacement is the more than 86 million Morgans of 1921 at Philadelphia, Denver, and San Francisco, and, in December of that year, Anthony de Francisci’s Peace dollar.',
      },
    ],
  },
  {
    id: 'keys',
    title: {
      es: 'Fechas clave y rarezas de estado',
      en: 'Key dates and condition rarities',
    },
    paragraphs: [
      {
        es: 'El 1893-S es la fecha clave de la emisión de circulación: tirada publicada de 100.000, puesta enseguida en el comercio de California y del Oeste. El 1889-CC, con 350.000, circuló en los campamentos y, además, faltó en los hallazgos de bóveda del siglo XX. El 1894 de Filadelfia, 110.000, cae justo después de derogada la compra Sherman. El 1895-O, 450.000, tampoco apareció en aquellas entregas de Tesoro.',
        en: 'The 1893-S is the key date of the circulation issue: a published mintage of 100,000, paid out at once into California and Western trade. The 1889-CC, at 350,000, circulated in the camps and, besides, was missing from the twentieth-century vault finds. The 1894 Philadelphia coin, 110,000, falls just after the Sherman purchase was repealed. The 1895-O, 450,000, was also absent from those Treasury payouts.',
      },
      {
        es: 'Otra cosa es la rareza de estado: una fecha corriente en gastado y escasa sin circular. El 1884-S tiene tirada de 3.200.000 y, aun así, casi todo entró en el comercio o se fundió bajo Pittman. Esta vitrina guarda un ejemplar de esa fecha, con la S, suelto. El 1886-O, con 10.710.000, es asequible gastado; el centro flojo y el roce de las bolsas de lona dejan los ejemplares altos muy contados. En el mismo grupo se citan el 1892-S y el 1895-O. Nada de eso es un grado de las tres piezas de esta colección.',
        en: 'A condition rarity is different: a date that is ordinary when worn and scarce when uncirculated. The 1884-S has a mintage of 3,200,000 and, even so, nearly all of it entered trade or was melted under Pittman. This case holds one example of that date, with the S, raw. The 1886-O, at 10,710,000, is affordable when worn; the soft center and bag friction leave high-grade pieces very few. The 1892-S and the 1895-O are cited in the same group. None of that is a grade of the three pieces in this collection.',
      },
    ],
  },
  {
    id: '1895',
    title: {
      es: 'El 1895 de Filadelfia',
      en: 'The 1895 Philadelphia issue',
    },
    paragraphs: [
      {
        es: 'Los registros de la Mint anotan 12.000 dólares de negocio en junio de 1895 y 880 pruebas para coleccionistas. En más de un siglo no ha aparecido un ejemplar de negocio que las fuentes acepten como auténtico. La lectura habitual es que esos 12.000 no salieron de la ceca y se fundieron antes de repartirse, en un cierre de ensaye o en un ajuste de barras. Lo que circula como 1895 de Filadelfia es prueba. Las estimaciones citadas sitúan la población neta hacia 400 o 500 piezas. Esta página no ha contado esa población.',
        en: 'Mint records list 12,000 business strikes in June 1895 and 880 proofs for collectors. In more than a century no business strike the sources accept as genuine has turned up. The usual reading is that those 12,000 never left the Mint and were melted before disbursement, at an assay close or a bullion reconciliation. What passes as an 1895 Philadelphia dollar is a proof. The cited estimates put the net population near 400 to 500 pieces. This page has not counted that population.',
      },
    ],
  },
  {
    id: 'feathers',
    title: {
      es: '1878: ocho plumas, siete, y siete sobre ocho',
      en: '1878: eight feathers, seven, and seven over eight',
    },
    paragraphs: [
      {
        es: 'En marzo de 1878, en Filadelfia, el águila de Morgan salió con ocho plumas en la cola. El director de la Mint, Henry R. Linderman, paró la producción y pidió siete. El relato popular dice que los ornitólogos objetaron un número par. El águila de cabeza blanca (Haliaeetus leucocephalus) tiene doce rectrices. El cambio fue de relieve y de heráldica, no de biología.',
        en: 'In March 1878, at Philadelphia, Morgan’s eagle came out with eight tail feathers. Mint Director Henry R. Linderman stopped production and asked for seven. Popular telling says ornithologists objected to an even count. The bald eagle (Haliaeetus leucocephalus) has twelve rectrices. The change was about relief and heraldry, not biology.',
      },
      {
        es: 'Quedaron tres reversos de ese año. El de ocho plumas (8TF): unas 749.500 piezas de circulación y unas 500 pruebas, antes de cambiar los cuños. El de siete plumas (7TF), que pasó a ser el reverso del resto de la serie. Y el de siete sobre ocho (7/8TF): cuños nuevos de siete plumas reacuñados sobre cuños de ocho aún sin templar, para no tirar el acero. En esas piezas asoman las puntas de las ocho plumas debajo de las siete.',
        en: 'Three reverses remain from that year. Eight tail feathers (8TF): about 749,500 circulation pieces and about 500 proofs, before the dies were changed. Seven tail feathers (7TF), which became the reverse for the rest of the series. And seven over eight (7/8TF): new seven-feather dies hubbed over unhardened eight-feather dies, to save the steel. On those coins the tips of the eight feathers show under the seven.',
      },
    ],
  },
  {
    id: 'vam',
    title: {
      es: 'Variedades VAM',
      en: 'VAM varieties',
    },
    paragraphs: [
      {
        es: 'Leroy Van Allen y A. George Mallis catalogaron cada pareja de cuños como una variedad VAM. En el siglo XIX la fecha y la marca se punzonaban a mano, y cada cuño deja una diferencia pequeña. Los conjuntos que los especialistas persiguen se llaman Top 100 y Hot 50. Entre las citadas: el 1879-CC «Capped Die» (VAM-3), con una costra de óxido de cuño sobre la marca CC; el 1882-O/S (VAM-3 a VAM-5), una O punzonada sobre una S en cuños pensados para San Francisco; el 1888-O «Scarface» (VAM-1B), una rotura de cuño que cruza la mejilla izquierda de la Libertad; y el 1900-O/CC, cuños sobrantes de Carson City reutilizados en Nueva Orleans con una O sobre la CC. Esta vitrina no asigna VAM a sus tres ejemplares.',
        en: 'Leroy Van Allen and A. George Mallis catalogued each die pair as a VAM variety. In the nineteenth century the date and the mint mark were punched by hand, and each die leaves a small difference. The sets specialists chase are called the Top 100 and the Hot 50. Among those cited: the 1879-CC “Capped Die” (VAM-3), with die-rust pitting above the CC; the 1882-O/S (VAM-3 through VAM-5), an O punched over an S on dies meant for San Francisco; the 1888-O “Scarface” (VAM-1B), a die break across Liberty’s left cheek; and the 1900-O/CC, surplus Carson City dies reused at New Orleans with an O over the CC. This case assigns no VAM to its three examples.',
      },
    ],
  },
  {
    id: 'vaults',
    title: {
      es: 'Bóvedas de 1962 y el fin del canje',
      en: 'The 1962 vaults and the end of redemption',
    },
    paragraphs: [
      {
        es: 'Después de 1921, cientos de millones de dólares sin circular siguieron en sacos de lona de 1.000 piezas, en bóvedas de Washington, Nueva York y San Francisco. Por ley, el público podía canjear certificados de plata por dólares físicos. En octubre y noviembre de 1962 los cajeros abrieron compartimentos cerrados desde hacía décadas. El golpe mayor fue el 1903-O, tenido por raro: las cuentas hablan de unos 200.000 a 500.000 ejemplares sin circular pagados a la par. También salieron, en menor escala, 1898-O y 1904-O. Hubo colas en el Treasury Building por sacos sellados.',
        en: 'After 1921, hundreds of millions of uncirculated dollars stayed in 1,000-coin canvas bags, in vaults in Washington, New York, and San Francisco. By law, the public could redeem silver certificates for silver dollars. In October and November 1962 cashiers opened compartments that had been shut for decades. The sharpest shock was the 1903-O, long treated as rare: the accounts speak of about 200,000 to 500,000 uncirculated pieces paid out at face. Smaller releases brought 1898-O and 1904-O dollars as well. Lines formed at the Treasury Building for sealed bags.',
      },
      {
        es: 'A finales de 1963 y principios de 1964 la plata de contado pasó de 1,29 dólares la onza. Con 0,77344 onzas troy de plata fina, 1,2929 dólares la onza es el punto en que el metal iguala el valor facial de un dólar. Por encima de eso, canjear papel y fundir la moneda era arbitraje. El 25 de marzo de 1964 el secretario del Tesoro, C. Douglas Dillon, cortó el canje de certificados por dólares de plata. Desde entonces el papel se cambiaba por granalla y barras de ensaye, hasta que el respaldo en plata expiró el 24 de junio de 1968.',
        en: 'Late in 1963 and early in 1964 the spot price of silver moved past 1.29 dollars an ounce. With 0.77344 troy ounces of pure silver, 1.2929 dollars an ounce is the point at which the metal equals a dollar of face value. Above that, redeeming paper and melting the coin was arbitrage. On 25 March 1964 Treasury Secretary C. Douglas Dillon ended the redemption of certificates for silver dollars. From then on the paper was redeemed in granules and assay bars, until the silver backing expired on 24 June 1968.',
      },
    ],
  },
  {
    id: 'gsa',
    title: {
      es: 'La venta GSA, 1972–1980',
      en: 'The GSA sales, 1972–1980',
    },
    paragraphs: [
      {
        es: 'El recuento posterior a la orden de Dillon dejó unos 2,9 millones de dólares en bóveda. Más del 80 % llevaba CC y seguía sin circular, en los sacos originales. El gobierno no los pagó a la par ni los fundió: los pasó a la General Services Administration para venderlos a coleccionistas por correo. Entre 1972 y 1980 hubo siete ventas. Las monedas salieron en cápsulas duras rotuladas «Carson City Uncirculated Silver Dollar», en estuches negros, con un mensaje del presidente. Las fechas 1882-CC, 1883-CC y 1884-CC siguen siendo accesibles en Mint State porque una parte grande de la tirada no llegó a emitirse. Del 1889-CC, el 1892-CC y el 1893-CC el inventario cita un solo ejemplar cada uno. Las cápsulas GSA originales se coleccionan aparte, y las casas de certificación las gradúan a veces sin abrirlas, con una banda sobre el estuche.',
        en: 'The count after Dillon’s order left about 2.9 million dollars in the vaults. More than 80% carried CC and were still uncirculated, in the original bags. The government neither paid them out at face nor melted them: it transferred them to the General Services Administration to sell to collectors by mail bid. Between 1972 and 1980 there were seven sales. The coins went out in hard holders labeled “Carson City Uncirculated Silver Dollar,” in black cases, with a message from the president. The 1882-CC, 1883-CC, and 1884-CC remain accessible in Mint State because a large share of the mintage was never issued. Of the 1889-CC, the 1892-CC, and the 1893-CC the inventory cites a single example each. Original GSA holders are collected on their own, and the grading services sometimes grade them unopened, with a band around the case.',
      },
    ],
  },
  {
    id: 'grade',
    title: {
      es: 'Grado, prooflike y el piso de metal',
      en: 'Grade, prooflike, and the bullion floor',
    },
    paragraphs: [
      {
        es: 'El piso de cualquier Morgan es la plata que contiene: 0,77344 onzas troy por el precio de contado. Fechas comunes muy gastadas —el 1921 de tirada alta, o Filadelfia de los años 1880 rodada— se negocian cerca de ese metal. En cuanto hay grado de coleccionista, variedad o tirada corta, la prima numismática se separa del metal. Esta página no publica esa prima.',
        en: 'The floor of any Morgan is the silver in it: 0.77344 troy ounces times the spot price. Heavily worn common dates — the high-mintage 1921, or a well-worn Philadelphia coin of the 1880s — trade near that metal. Once there is a collector grade, a variety, or a short mintage, the numismatic premium pulls away from the bullion. This page does not publish that premium.',
      },
      {
        es: 'La escala de Sheldon tiene 70 puntos. En el gastado se pasa del contorno y de las borlas planas del gorro, en Good-4, al detalle de Fine-12 y, más arriba, a las plumas nítidas con solo roce en los altos, en Extremely Fine y About Uncirculated. De MS-60 a MS-62 no hay desgaste de circulación, pero sí marcas de saco y lustre apagado. De MS-63 a MS-65 el campo limpio, el lustre y el golpe importan más. De MS-66 a MS-68 las poblaciones son cortas. Un cuño recién pulido deja campos de espejo y relieves escarchados: prooflike (PL) si el reflejo se lee a unas dos a cuatro pulgadas, y deep mirror prooflike (DMPL) si el espejo llega a unas seis pulgadas en las dos caras, con contraste de camafeo. Una calcomanía de la Certified Acceptance Corporation señala, para ese grado, superficie y golpe por encima del típico. Las tres piezas de esta vitrina están sueltas: no llevan grado numérico ni esas designaciones.',
        en: 'The Sheldon scale has 70 points. In worn grades the eye moves from the outline and the flat cotton bolls on the cap, at Good-4, to Fine-12 detail and, higher, to sharp feathers with only high-point friction, in Extremely Fine and About Uncirculated. MS-60 to MS-62 shows no circulation wear, but bag marks and dull luster. From MS-63 to MS-65 clean fields, luster, and strike matter more. From MS-66 to MS-68 populations are short. A freshly polished die leaves mirror fields and frosted devices: prooflike (PL) when the reflection reads at about two to four inches, and deep mirror prooflike (DMPL) when the mirror reaches about six inches on both sides, with cameo contrast. A Certified Acceptance Corporation sticker marks, for that grade, surface and strike above the typical piece. The three coins in this case are raw: they carry no numerical grade and none of those designations.',
      },
    ],
  },
  {
    id: 'revival',
    title: {
      es: 'La reacuñación de 2021 en adelante',
      en: 'The revival from 2021 on',
    },
    paragraphs: [
      {
        es: 'Para el centenario del paso del Morgan al Peace, la Mint sacó en 2021 cinco dólares Morgan de coleccionista: Filadelfia sin marca, Denver con D, San Francisco con S, y dos de Filadelfia con marcas privy O y CC, por las cecas ya cerradas. En 2022 el programa se detuvo por falta de cospeles de plata. Desde 2023 hay una emisión anual, en sin circular, proof y reverse proof. Las páginas citadas dan topes de producto —275.000 para las piezas sin circular de 2024 y 150.000 para las de 2025—. Esta página no ha recontado esos topes. Esas piezas no son la emisión original de 1878–1904.',
        en: 'For the centennial of the change from Morgan to Peace, the Mint issued five collector Morgan dollars in 2021: Philadelphia with no mark, Denver with D, San Francisco with S, and two Philadelphia strikes with O and CC privy marks for the closed mints. In 2022 the program paused for lack of silver planchets. From 2023 there is an annual issue, in uncirculated, proof, and reverse proof. The cited pages give product caps — 275,000 for the 2024 uncirculated strikes and 150,000 for the 2025 issues. This page has not recounted those caps. Those pieces are not the original run of 1878–1904.',
      },
    ],
  },
  {
    id: 'authenticate',
    title: {
      es: 'Qué se mira para autenticar',
      en: 'What authentication looks at',
    },
    paragraphs: [
      {
        es: 'El dólar raro se altera y se falsifica. El protocolo que describen las casas de certificación empieza por el metro: 26,73 g, 38,10 mm y unos 2,40 mm de grueso. Un cobre, un cinc o una aleación blanca moderna se cae en la balanza y el calibre. La resistividad del núcleo se mide sin tocar la superficie, y el peso específico hidrostático comprueba si el volumen corresponde a la liga 90/10. Esta vitrina no pesó ni midió sus tres ejemplares.',
        en: 'The rare dollar is altered and counterfeited. The protocol the grading services describe starts with measurement: 26.73 g, 38.10 mm, and about 2.40 mm thick. A copper, a zinc, or a modern white alloy fails the balance and the caliper. Core resistivity is measured without touching the surface, and hydrostatic specific gravity checks whether the volume matches the 90/10 alloy. This case neither weighed nor measured its three examples.',
      },
      {
        es: 'La fecha se retoque —un 8 o un 5 convertidos en 3 para simular un 1893-S— y la marca se añada o se quite. En un 1893-S auténtico las fuentes sitúan el 1 centrado sobre el dentículo cuarto del canto inferior, y un rayajo de cuño en el asta de la T de LIBERTY. Una marca añadida deja halo, soldadura o un corte en el estriado. Un compuesto de dos monedas muestra costura en el canto, peso anómalo y un sonido sordo. Las copias modernas, aun en plata 0,900, repiten dentículos blandos, campos granulosos y las mismas depresiones del cuño de transferencia. Del 1893-S auténtico se catalogan dos reversos (VAM-1 y VAM-2) con un solo anverso: lo que no coincide con esos cuños no es esa fecha. Por eso las piezas de valor alto circulan casi solo en cápsula de PCGS o NGC. Las tres de esta colección no lo están.',
        en: 'Dates are reworked — an 8 or a 5 turned into a 3 to imitate an 1893-S — and mint marks are added or removed. On a genuine 1893-S the sources place the 1 centered over the fourth denticle of the lower rim, and a die scratch through the upright of the T in LIBERTY. An added mark leaves a halo, solder, or a break in the reeding. A composite of two coins shows a seam on the edge, an odd weight, and a dull ring. Modern copies, even on 0.900 silver, repeat soft denticles, granular fields, and the same depressions from the transfer die. The genuine 1893-S is catalogued as two reverses (VAM-1 and VAM-2) with a single obverse: what does not match those dies is not that date. That is why high-value pieces trade almost only in a PCGS or NGC holder. The three in this collection are not in one.',
      },
    ],
  },
  {
    id: 'close',
    title: {
      es: 'Una moneda de una ley, no de un mostrador',
      en: 'A coin of a statute, not of a counter',
    },
    paragraphs: [
      {
        es: 'La emisión original, de 1878 a 1904, es el tramo en que la Bland-Allison y luego la Sherman obligaron a acuñar plata que el público no pedía en la mano. El pánico de 1893 acortó las tiradas. La Pittman, ya fuera de ese tramo, fundió cerca de la mitad de lo acuñado. Las bóvedas de los años sesenta y las ventas GSA decidieron qué fechas siguen siendo comunes sin circular. Esta vitrina no tasa el mercado. Documenta el 1883-CC, el 1884-S y el 1885-CC fotografiados en la colección.',
        en: 'The original run, from 1878 to 1904, is the stretch in which Bland-Allison and then Sherman forced the coinage of silver the public did not ask to carry. The Panic of 1893 shortened the mintages. Pittman, already outside that stretch, melted about half of what had been struck. The vaults of the 1960s and the GSA sales decided which dates are still common uncirculated. This case does not price the market. It records the photographed 1883-CC, 1884-S, and 1885-CC.',
      },
    ],
  },
];

export const morganSpecRows: { attribute: LocalizedText; classical: LocalizedText; modern: LocalizedText }[] = [
  {
    attribute: { es: 'Peso bruto', en: 'Gross weight' },
    classical: { es: '26,73 g (412,5 granos)', en: '26.73 g (412.5 grains)' },
    modern: { es: '26,73 g (0,859 oz troy)', en: '26.73 g (0.859 troy oz)' },
  },
  {
    attribute: { es: 'Diámetro', en: 'Diameter' },
    classical: { es: '38,10 mm', en: '38.10 mm' },
    modern: { es: '38,10 mm', en: '38.10 mm' },
  },
  {
    attribute: { es: 'Grosor', en: 'Thickness' },
    classical: { es: 'Unos 2,40 mm', en: 'About 2.40 mm' },
    modern: { es: 'Unos 2,40 mm', en: 'About 2.40 mm' },
  },
  {
    attribute: { es: 'Composición', en: 'Composition' },
    classical: { es: '90 % plata, 10 % cobre', en: '90% silver, 10% copper' },
    modern: { es: 'Plata 0,999', en: '0.999 fine silver' },
  },
  {
    attribute: { es: 'Plata fina', en: 'Actual silver weight' },
    classical: { es: '0,77344 oz troy (24,057 g)', en: '0.77344 troy oz (24.057 g)' },
    modern: { es: '0,859 oz troy (26,73 g)', en: '0.859 troy oz (26.73 g)' },
  },
  {
    attribute: { es: 'Canto', en: 'Edge' },
    classical: { es: 'Estriado', en: 'Reeded' },
    modern: { es: 'Estriado', en: 'Reeded' },
  },
  {
    attribute: { es: 'Cecas', en: 'Mints' },
    classical: {
      es: 'Filadelfia, Carson City, San Francisco, Nueva Orleans; Denver solo en 1921',
      en: 'Philadelphia, Carson City, San Francisco, New Orleans; Denver in 1921 only',
    },
    modern: { es: 'Filadelfia, Denver, San Francisco', en: 'Philadelphia, Denver, San Francisco' },
  },
];

export const morganKeyRows: { date: string; mintage: LocalizedText; note: LocalizedText }[] = [
  {
    date: '1878 8TF',
    mintage: { es: '749.500', en: '749,500' },
    note: {
      es: 'Primer reverso, de ocho plumas, antes del cambio a siete. Unas 500 pruebas aparte.',
      en: 'First reverse, eight tail feathers, before the change to seven. About 500 proofs besides.',
    },
  },
  {
    date: '1884-S',
    mintage: { es: '3.200.000', en: '3,200,000' },
    note: {
      es: 'Rareza de estado: la tirada circuló o se fundió. Hay un ejemplar suelto en esta vitrina.',
      en: 'Condition rarity: the issue circulated or was melted. One raw example is in this case.',
    },
  },
  {
    date: '1886-O',
    mintage: { es: '10.710.000', en: '10,710,000' },
    note: {
      es: 'Tirada alta y centro flojo. El gastado es corriente; el alto grado, no.',
      en: 'High mintage and a soft center. Worn pieces are ordinary; high grade is not.',
    },
  },
  {
    date: '1889-CC',
    mintage: { es: '350.000', en: '350,000' },
    note: {
      es: 'Fecha clave de Carson City. Casi ausente en las bóvedas que se abrieron después.',
      en: 'Key Carson City date. Almost absent from the vaults opened later.',
    },
  },
  {
    date: '1893-S',
    mintage: { es: '100.000', en: '100,000' },
    note: {
      es: 'Fecha clave de la emisión de negocio. Salió al comercio del Oeste.',
      en: 'Key date of the business strikes. It went into Western trade.',
    },
  },
  {
    date: '1894',
    mintage: { es: '110.000', en: '110,000' },
    note: {
      es: 'Filadelfia, sin marca, después de derogada la compra de plata.',
      en: 'Philadelphia, no mint mark, after the silver purchase was repealed.',
    },
  },
  {
    date: '1895',
    mintage: { es: '880', en: '880' },
    note: {
      es: 'Pruebas. Los 12.000 de negocio anotados no se conocen fuera de la ceca.',
      en: 'Proofs. The 12,000 business strikes on the books are not known outside the Mint.',
    },
  },
];

export const morganGsaRows: {
  date: string;
  mintage: LocalizedText;
  hoard: LocalizedText;
  share: LocalizedText;
}[] = [
  {
    date: '1878-CC',
    mintage: { es: '2.212.000', en: '2,212,000' },
    hoard: { es: '60.993', en: '60,993' },
    share: { es: '2,76 %', en: '2.76%' },
  },
  {
    date: '1879-CC',
    mintage: { es: '756.000', en: '756,000' },
    hoard: { es: '4.123', en: '4,123' },
    share: { es: '0,55 %', en: '0.55%' },
  },
  {
    date: '1880-CC',
    mintage: { es: '591.000', en: '591,000' },
    hoard: { es: '131.529', en: '131,529' },
    share: { es: '22,25 %', en: '22.25%' },
  },
  {
    date: '1881-CC',
    mintage: { es: '296.000', en: '296,000' },
    hoard: { es: '147.485', en: '147,485' },
    share: { es: '49,83 %', en: '49.83%' },
  },
  {
    date: '1882-CC',
    mintage: { es: '1.133.000', en: '1,133,000' },
    hoard: { es: '605.029', en: '605,029' },
    share: { es: '53,40 %', en: '53.40%' },
  },
  {
    date: '1883-CC',
    mintage: { es: '1.204.000', en: '1,204,000' },
    hoard: { es: '755.518', en: '755,518' },
    share: { es: '62,75 %', en: '62.75%' },
  },
  {
    date: '1884-CC',
    mintage: { es: '1.136.000', en: '1,136,000' },
    hoard: { es: '962.638', en: '962,638' },
    share: { es: '84,74 %', en: '84.74%' },
  },
  {
    date: '1885-CC',
    mintage: { es: '228.000', en: '228,000' },
    hoard: { es: '148.285', en: '148,285' },
    share: { es: '65,04 %', en: '65.04%' },
  },
  {
    date: '1889-CC',
    mintage: { es: '350.000', en: '350,000' },
    hoard: { es: '1', en: '1' },
    share: { es: '0,0003 %', en: '0.0003%' },
  },
  {
    date: '1890-CC',
    mintage: { es: '2.309.041', en: '2,309,041' },
    hoard: { es: '3.949', en: '3,949' },
    share: { es: '0,17 %', en: '0.17%' },
  },
  {
    date: '1891-CC',
    mintage: { es: '1.618.000', en: '1,618,000' },
    hoard: { es: '5.687', en: '5,687' },
    share: { es: '0,35 %', en: '0.35%' },
  },
  {
    date: '1892-CC',
    mintage: { es: '1.352.000', en: '1,352,000' },
    hoard: { es: '1', en: '1' },
    share: { es: '0,00007 %', en: '0.00007%' },
  },
  {
    date: '1893-CC',
    mintage: { es: '677.000', en: '677,000' },
    hoard: { es: '1', en: '1' },
    share: { es: '0,00015 %', en: '0.00015%' },
  },
];

export const morganSeriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Morgan_dollar',
    es: 'Wikipedia — Morgan dollar',
    en: 'Wikipedia — Morgan dollar',
    note: {
      es: 'Diseño de George T. Morgan, 1878–1904 y 1921, y la reacuñación posterior. No se republican precios.',
      en: 'George T. Morgan’s design, 1878–1904 and 1921, and the later revival. Prices are not republished.',
    },
  },
  {
    href: 'https://www.pcgs.com/coinfacts/category/morgan-dollar-1878-1921/744',
    es: 'PCGS CoinFacts — Morgan Dollar (1878–1921)',
    en: 'PCGS CoinFacts — Morgan Dollar (1878–1921)',
    note: {
      es: 'Marco de la serie y tiradas de tipo. No se republican precios.',
      en: 'Series frame and type mintages. Prices are not republished.',
    },
  },
  {
    href: 'https://www.usmint.gov/news/inside-the-mint/mint-history-crime-of-1873',
    es: 'United States Mint — El «Crime of 1873»',
    en: 'United States Mint — The “Crime of 1873”',
    note: {
      es: 'La ley de 1873 y el regreso del dólar de plata en 1878.',
      en: 'The 1873 act and the return of the silver dollar in 1878.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Bland%E2%80%93Allison_Act',
    es: 'Wikipedia — Bland–Allison Act',
    en: 'Wikipedia — Bland–Allison Act',
    note: {
      es: '28 de febrero de 1878: compra mensual de plata y acuñación.',
      en: '28 February 1878: the monthly silver purchase and coinage.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Pittman_Act',
    es: 'Wikipedia — Pittman Act',
    en: 'Wikipedia — Pittman Act',
    note: {
      es: '23 de abril de 1918: fundición para la plata de guerra y reposición en 1921.',
      en: '23 April 1918: the wartime melt and the 1921 replacement.',
    },
  },
  {
    href: 'https://learn.apmex.com/learning-guide/history/pittman-act-1918/',
    es: 'APMEX — Pittman Act of 1918',
    en: 'APMEX — Pittman Act of 1918',
    note: {
      es: 'Contexto de la fundición y de la reacuñación de 1921. No se republican precios.',
      en: 'Context for the melt and the 1921 recoinage. Prices are not republished.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Peace_dollar',
    es: 'Wikipedia — Peace dollar',
    en: 'Wikipedia — Peace dollar',
    note: {
      es: 'El tipo que sustituye al Morgan en diciembre de 1921.',
      en: 'The type that replaces the Morgan in December 1921.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/dollars/morgan-dollars-1878-1921/17072/1878-8tf-1-ms/',
    es: 'NGC — Morgan 1878 8TF',
    en: 'NGC — 1878 8TF Morgan',
    note: {
      es: 'Reverso de ocho plumas y la tirada de ese cuño.',
      en: 'The eight-tail-feathers reverse and that die’s mintage.',
    },
  },
  {
    href: 'https://blog.littletoncoin.com/eagle-tail-feathers-tall-tale/',
    es: 'Littleton — Eagle tail feathers and Morgan dollars',
    en: 'Littleton — Eagle tail feathers and Morgan dollars',
    note: {
      es: 'El cambio de ocho a siete plumas, y por qué el cuento del número impar no cuadra.',
      en: 'The change from eight feathers to seven, and why the odd-number story does not hold.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/dollars/morgan-dollars-1878-1921/17330/1895-1-pf/',
    es: 'NGC — 1895 $1 proof',
    en: 'NGC — 1895 $1 proof',
    note: {
      es: 'La prueba de Filadelfia de 1895. No se republican precios.',
      en: 'The 1895 Philadelphia proof. Prices are not republished.',
    },
  },
  {
    href: 'https://www.pcgs.com/coinfacts/coin/1895-1/7330',
    es: 'PCGS CoinFacts — 1895 $1 proof',
    en: 'PCGS CoinFacts — 1895 $1 proof',
    note: {
      es: 'Registros de pruebas de 1895. No se republican precios.',
      en: '1895 proof records. Prices are not republished.',
    },
  },
  {
    href: 'https://learn.apmex.com/learning-guide/coin-collecting/what-is-the-rarest-morgan-dollar/',
    es: 'APMEX — What is the rarest Morgan dollar?',
    en: 'APMEX — What is the rarest Morgan dollar?',
    note: {
      es: 'El 1895 y las fechas clave, como relato de la serie. No se republican precios.',
      en: 'The 1895 and the key dates, as a series account. Prices are not republished.',
    },
  },
  {
    href: 'https://www.numismaticnews.net/archive/silver-dollars-at-the-back-of-vault-survived',
    es: 'Numismatic News — dólares al fondo de la bóveda',
    en: 'Numismatic News — silver dollars at the back of the vault',
    note: {
      es: 'Las entregas de 1903-O, 1898-O y 1904-O. No se republican precios.',
      en: 'The 1903-O, 1898-O, and 1904-O releases. Prices are not republished.',
    },
  },
  {
    href: 'https://www.coinworld.com/news/paper-money/redeeming-silver-certificates-us-paper-money-notes.html',
    es: 'Coin World — el fin del canje de certificados de plata',
    en: 'Coin World — the end of silver-certificate redemption',
    note: {
      es: 'La orden de Dillon de 1964 y el cierre de 1968.',
      en: 'Dillon’s 1964 order and the 1968 close.',
    },
  },
  {
    href: 'https://morgandollars.net/gsa-morgan-dollars/',
    es: 'Morgan Dollars — GSA Morgan dollars',
    en: 'Morgan Dollars — GSA Morgan dollars',
    note: {
      es: 'Las ventas de 1972–1980 y el estuche Carson City. No se republican precios.',
      en: 'The 1972–1980 sales and the Carson City case. Prices are not republished.',
    },
  },
  {
    href: 'https://www.greatcollections.com/kb/The-GSA-Hoard-of-Carson-City-Dollars-t164-4.html',
    es: 'GreatCollections — The GSA Hoard of Carson City Dollars',
    en: 'GreatCollections — The GSA Hoard of Carson City Dollars',
    note: {
      es: 'Recuento citado del inventario CC. No se republican precios.',
      en: 'Cited count of the CC inventory. Prices are not republished.',
    },
  },
  {
    href: 'https://www.ngccoin.com/news/article/9504/counterfeit-detection-morgan-dollars/',
    es: 'NGC — Counterfeit detection: Morgan dollars',
    en: 'NGC — Counterfeit detection: Morgan dollars',
    note: {
      es: 'Fecha alterada, marca añadida y copias de cuño. No es un manual de falsificación.',
      en: 'Altered dates, added mint marks, and transfer-die copies. Not a counterfeiting manual.',
    },
  },
  {
    href: 'https://www.usmint.gov/morgan-silver-dollar-2024-uncirculated-coin-24XE.html',
    es: 'United States Mint — Morgan 2024 sin circular',
    en: 'United States Mint — 2024 uncirculated Morgan',
    note: {
      es: 'Reacuñación de coleccionista. No es la emisión de 1878–1904. No se republican precios.',
      en: 'Collector revival. Not the 1878–1904 issue. Prices are not republished.',
    },
  },
  {
    href: 'https://en.numista.com/1492',
    es: 'Numista — 1 dólar Morgan (N# 1492)',
    en: 'Numista — Morgan dollar (N# 1492)',
    note: {
      es: 'KM# 110. Plata 0,900, 26,73 g, 38,1 mm, canto estriado.',
      en: 'KM# 110. 0.900 silver, 26.73 g, 38.1 mm, reeded edge.',
    },
  },
];

export const morganRelated = [
  {
    href: '/glosario/numismatica/',
    title: { es: 'Glosario: numismática', en: 'Glossary: numismatics' },
    dek: {
      es: 'El estudio de la moneda metálica, distinto de la notafilia.',
      en: 'The study of coin, distinct from notaphily.',
    },
  },
  {
    href: '/glosario/encapsulado/',
    title: { es: 'Glosario: encapsulado', en: 'Glossary: slab' },
    dek: {
      es: 'La cápsula de un servicio de grado. Las tres piezas de esta vitrina no la tienen.',
      en: 'A grading-service holder. The three pieces in this case do not have one.',
    },
  },
  {
    href: '/coleccion/estados-unidos-numismatica/',
    title: { es: 'Estados Unidos · Numismática', en: 'United States · Numismatics' },
    dek: {
      es: 'La vitrina metálica: fichas Hard Times, oro y el dólar de 2026.',
      en: 'The coin case: Hard Times tokens, gold, and the 2026 dollar.',
    },
  },
] as const;

export function morganHoldings(): UnitedStatesCoin[] {
  return unitedStatesCoins
    .filter((coin) => coin.chapterId === 'dolar-morgan')
    .sort((a, b) => Number(a.year) - Number(b.year) || a.id.localeCompare(b.id));
}

export { coinagePath as morganParentPath, USA_MORGAN_PATH, USA_MORGAN_PATH_EN };
