import type { CatalogSource, LocalizedText } from './catalog';

export const COLOMBIA_COINAGE_PATH = '/coleccion/numismatica/colombia/';

export type ColombiaCoinageChapterId = 'santa-fe' | 'independencia' | 'nueva-granada' | 'republica';

export type ColombiaCoinageChapter = {
  id: ColombiaCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const colombiaCoinageChapters: ColombiaCoinageChapter[] = [
  {
    id: 'santa-fe',
    years: { es: '1620–1819', en: '1620–1819' },
    title: {
      es: 'Casa de Moneda de Santa Fe',
      en: 'The Santa Fe mint',
    },
    lead: {
      es: 'La ceca del Nuevo Reino: macuquinas a martillo, luego moneda circular de cordoncillo, y la casa hermana de Popayán.',
      en: 'The mint of the New Kingdom: hammered cobs, then milled coin with a reeded edge, and the sister house at Popayán.',
    },
    body: {
      es: 'El Banco de la República fecha la fundación de la Casa de Moneda en 1620; el Museo Casa de Moneda precisa que las labores de acuñación empezaron en 1621, en una de las primeras casas de Santafé. Durante el siglo XVII funcionó como herrería: se fundía y afinaba el oro de Antioquia y el Chocó y se labraban a martillo las macuquinas, piezas de contorno irregular. En 1751 la Corona pasó la ceca a administración real. El virrey Solís la reinauguró en 1756 —el año queda en el friso de la portada de piedra— y desde 1757 las prensas de volante produjeron moneda redonda. Popayán abrió en 1758, cerró por pleitos con Santafé y una real cédula de 1766 la reabrió. Adolfo Meisel resume las leyes dieciochescas: oro de 0,916½, 0,901 y 0,875; plata cerca de 0,902. A esas especies se sumó la macuquina peruana y mexicana que llegaba con los situados.',
      en: 'The Banco de la República dates the mint’s founding to 1620; the Casa de Moneda Museum notes that striking began in 1621, in one of Santafé’s earliest houses. In the seventeenth century the works were a smithy: Antioquia and Chocó gold was melted and refined, then hammered into cobs of irregular outline. In 1751 the Crown took the mint into royal administration. Viceroy Solís reopened it in 1756 — the year is still on the stone doorway — and from 1757 screw presses made round coin. Popayán opened in 1758, closed after disputes with Santafé, and a royal cédula of 1766 reopened it. Adolfo Meisel lists the eighteenth-century finenesses: gold at 0.916½, 0.901, and 0.875; silver near 0.902. Peruvian and Mexican cobs arriving with situados joined that local coin.',
    },
  },
  {
    id: 'independencia',
    years: { es: '1810–1830', en: '1810–1830' },
    title: {
      es: 'Independencia y Gran Colombia',
      en: 'Independence and Gran Colombia',
    },
    lead: {
      es: 'Cobres de Cartagena, la moneda de la china de Nariño y Bolívar, y el desorden de leyes que siguió a Boyacá.',
      en: 'Cartagena coppers, Nariño and Bolívar’s china coin, and the jumble of finenesses after Boyacá.',
    },
    body: {
      es: 'La Junta de Cartagena mandó acuñar en 1811 cobres de medio y de dos reales, hasta 1815. En Santa Fe, Nariño ordenó en 1813 la moneda provincial «de la china» —el busto de la india— para financiar la Campaña del Sur; se labró de 1814 a 1816. Tras Boyacá, Bolívar tomó las casas de Bogotá y Popayán y, el 18 de agosto de 1819, pidió el mismo tipo. Meisel, siguiendo a Barriga Villalba y a Restrepo, anota también los cobres realistas de Popayán (1813), el feble patriota de 1816, la plata de Santa Marta mandada por el virrey Montalvo y la caraqueña que trajo Morillo. El Congreso de Cúcuta quiso volver en 1821 a la ley y el peso españoles; Santander eludió la norma con emisiones de baja ley antedatadas a 1821. La Enciclopedia Banrepcultural documenta además las macuquinas de baja ley hechas sobre el molde caraqueño en el Casanare.',
      en: 'Cartagena’s junta ordered half-real and two-real coppers in 1811, struck through 1815. In Santa Fe, Nariño ordered the provincial china coin in 1813 — the Indian bust — to fund the Southern Campaign; it was struck from 1814 to 1816. After Boyacá, Bolívar took the Bogotá and Popayán mints and, on 18 August 1819, asked for the same type. Meisel, following Barriga Villalba and Restrepo, also records royalist coppers at Popayán (1813), the 1816 patriot feble, Santa Marta silver ordered by Viceroy Montalvo, and the low-fineness caraqueña that came with Morillo. The Cúcuta Congress of 1821 tried to restore Spanish weight and fineness; Santander evaded the rule with low-fineness issues antedated to 1821. Banrepcultural’s encyclopedia also records low-fineness cobs struck on the Caracas pattern in Casanare.',
    },
  },
  {
    id: 'nueva-granada',
    years: { es: '1831–1886', en: '1831–1886' },
    title: {
      es: 'Nueva Granada y los Estados Unidos',
      en: 'New Granada and the United States of Colombia',
    },
    lead: {
      es: 'La unificación de 1836, la reforma decimal de 1846–1847 y las cecas de un país que cambió de nombre tres veces.',
      en: 'The 1836 unification, the 1846–1847 decimal reform, and the mints of a country that changed its name three times.',
    },
    body: {
      es: 'Disuelta la Gran Colombia, la ley de 1836 derogó el régimen de Cúcuta e intentó uniformar ley, peso, valor, tipo y denominación, con una relación oro-plata de 1 a 16. La macuquina y la moneda recortada siguieron en el mercado; su amortización, ya ordenada en 1826, no terminó sino hacia 1848. En el primer gobierno de Tomás Cipriano de Mosquera, Lino de Pombo y Florentino González impusieron en 1846–1847 la ley 0,900 y un sistema decimal: cesó la acuñación feble y se reacuñó lo recogido. El peso, que en 1837 había sustituido al real a ocho reales por peso, quedó partido en diez reales —luego décimos, desde 1853—. En 1866 abrió la Casa de Moneda de Medellín. Bajo la Confederación Granadina y los Estados Unidos de Colombia (1863–1886) siguieron los pesos de plata y el oro de las tres cecas, todavía convertibles, mientras el papel de la banca libre empezaba a circular a su lado.',
      en: 'After Gran Colombia dissolved, the 1836 law repealed the Cúcuta rules and tried to unify fineness, weight, value, type, and denomination, with gold to silver at 1 to 16. Cobs and clipped coin stayed in the market; their withdrawal, already ordered in 1826, was not finished until about 1848. In Tomás Cipriano de Mosquera’s first government, Lino de Pombo and Florentino González imposed 0.900 fine metal and a decimal system in 1846–1847: base coinage stopped and what was taken in was restruck. The peso, which in 1837 had replaced the real at eight reales to the peso, was split into ten reales — later décimos, from 1853. The Medellín mint opened in 1866. Under the Granadine Confederation and the United States of Colombia (1863–1886) silver pesos and gold from the three mints remained convertible, while free-banking paper began to circulate beside them.',
    },
  },
  {
    id: 'republica',
    years: { es: 'desde 1886', en: 'from 1886' },
    title: {
      es: 'República y Fábrica de Moneda',
      en: 'The Republic and the coin factory',
    },
    lead: {
      es: 'El peso de la Regeneración, la administración del Banco de la República y el traslado de la acuñación a Ibagué.',
      en: 'The Regeneración peso, administration by the Banco de la República, and the move of striking to Ibagué.',
    },
    body: {
      es: 'La Constitución de 1886 fijó de nuevo el nombre de República de Colombia; el peso oro siguió como patrón mientras el papel del Banco Nacional y de la Guerra de los Mil Días destrozaba la convertibilidad. En 1946 el Banco de la República asumió la Casa de Moneda por contrato con la Nación. En 1982 inauguró en Ibagué la fábrica de cospeles —antes importados— y en 1987 trasladó allí la planta de acuñación: Santa Fe dejó de golpear moneda después de 366 años; el edificio es hoy el Museo Casa de Moneda. La Ley 31 de 1993 incorporó la casa al banco emisor y ese año se acuñó el primer 500 pesos bimetálico. En 2012 salió la familia que exalta la biodiversidad y el agua; al año siguiente obtuvo el primer lugar mundial como mejor serie circulante. Esta vitrina reunirá, a medida que se documenten, tipos coloniales, de independencia y de la República —como se hace con las fichas de Filipinas y del papel colombiano.',
      en: 'The 1886 constitution restored the name Republic of Colombia; the gold peso remained the standard while Banco Nacional paper and the Thousand Days’ War wrecked convertibility. In 1946 the Banco de la República took over the mint by contract with the nation. In 1982 it opened a planchet factory at Ibagué — blanks had been imported — and in 1987 moved striking there: Santa Fe ceased to strike after 366 years; the building is now the Casa de Moneda Museum. Law 31 of 1993 folded the mint into the issuing bank, and that year the first bimetallic 500-peso was struck. In 2012 the family that honors biodiversity and water appeared; the next year it took first place worldwide as best circulating series. This case will gather, as they are documented, colonial, independence, and republican types — as the Philippines notes and Colombian paper already do.',
    },
  },
];

export const coinageSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/fabrica-moneda/historia',
    es: 'Banco de la República — Historia de la Fábrica de Moneda',
    en: 'Banco de la República — History of the Coin Factory',
    note: {
      es: 'Cronología oficial: fundación en 1620, administración del Banco en 1946, cospeles de Ibagué en 1982, traslado de la acuñación en 1987, Ley 31 de 1993 y familia de 2012.',
      en: 'Official timeline: founding in 1620, Bank administration in 1946, Ibagué planchets in 1982, the 1987 move of striking, Law 31 of 1993, and the 2012 family.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/el-banco-de-la-republica-celebra-sus-100-anos-con-la-reapertura-del-museo-casa-de-moneda',
    es: 'Banrepcultural — Reapertura del Museo Casa de Moneda',
    en: 'Banrepcultural — Reopening of the Casa de Moneda Museum',
    note: {
      es: 'Acuñación desde 1621, reapertura de 1756 bajo el virrey Solís y cese en Santa Fe en 1987.',
      en: 'Striking from 1621, the 1756 reopening under Viceroy Solís, and the end of work at Santa Fe in 1987.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Casa_de_acu%C3%B1aci%C3%B3n_de_moneda_de_Popay%C3%A1n',
    es: 'Enciclopedia Banrepcultural — Casa de acuñación de Popayán',
    en: 'Banrepcultural Encyclopedia — The Popayán mint',
    note: {
      es: 'Apertura en 1758, cierre y real cédula de 1766; cobres febles de 1816 para las tropas republicanas.',
      en: 'Opening in 1758, closure and the 1766 royal cédula; 1816 base coppers for republican troops.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Financiaci%C3%B3n_de_la_independencia',
    es: 'Enciclopedia Banrepcultural — Financiación de la independencia',
    en: 'Banrepcultural Encyclopedia — Financing independence',
    note: {
      es: 'Orden de Bolívar del 18 de agosto de 1819 de acuñar el tipo de la india, y las macuquinas de baja ley del Casanare.',
      en: 'Bolívar’s 18 August 1819 order to strike the Indian type, and the low-fineness Casanare cobs.',
    },
  },
  {
    href: 'https://repositorio.banrep.gov.co/bitstreams/dcae315b-eaa3-4a5d-8088-d362ef743ace/download',
    es: 'Adolfo Meisel Roca — El patrón metálico 1821–1879',
    en: 'Adolfo Meisel Roca — The metallic standard, 1821–1879',
    note: {
      es: 'Caos de la Independencia, ley de 1836, reforma decimal de Pombo y González (1846–1847) y amortización de la macuquina hacia 1848.',
      en: 'Independence chaos, the 1836 law, Pombo and González’s decimal reform (1846–1847), and the withdrawal of cobs by about 1848.',
    },
  },
  {
    href: 'https://colecciones.banrepcultural.org/es/coleccion_numismatica',
    es: 'Banrepcultural — Colección Numismática del Banco de la República',
    en: 'Banrepcultural — Banco de la República Numismatic Collection',
    note: {
      es: 'Museo Casa de Moneda: Santafé (1621–1987), Medellín (1866–1947) y la Fábrica de Ibagué.',
      en: 'Casa de Moneda Museum: Santafé (1621–1987), Medellín (1866–1947), and the Ibagué factory.',
    },
  },
];

export const coinageCopy = {
  es: {
    metaTitle: 'Colombia · Casa de Moneda de Santa Fe | Notofilia',
    metaDescription:
      'Historia de la moneda metálica colombiana: macuquinas de Santa Fe, cecas de la Independencia, reforma decimal de 1847 y la Fábrica de Moneda de Ibagué.',
    kicker: 'Colombia · Numismática',
    title: 'Casa de Moneda de Santa Fe y el peso',
    heroAlt:
      'Ilustración vintage en relieve de Bogotá sobre pergamino, con la Plaza de Bolívar, La Candelaria, Monserrate, el río Bogotá y el título Bogotá',
    intro: [
      'La moneda metálica colombiana nació en Santa Fe, no en un banco central. En 1620 se fundó la Casa de Moneda del Nuevo Reino de Granada; al año siguiente empezó a labrar oro y plata a martillo —las macuquinas de contorno irregular—. El Banco de la República sitúa esa fundación en 1620; el Museo Casa de Moneda recuerda que las labores comenzaron en 1621, en una de las primeras casas de la ciudad. Esas piezas de escudos y reales, con la plata macuquina que llegaba de México y el Perú, fueron el circulante del virreinato.',
      'En el siglo XVIII la Corona pasó la ceca a administración real y la mecanizó. El virrey Solís reinauguró la casa en 1756; desde 1757 las prensas de volante produjeron moneda circular de cordoncillo. Popayán abrió en 1758, cerró por pleitos con Santafé y una real cédula de 1766 la reabrió. Hasta la Independencia, Santa Fe y Popayán afinaron el oro de Antioquia y el Cauca y cobraron el quinto real.',
      'La guerra rompió ese orden. En 1811 la Junta de Cartagena acuñó cobres de medio y dos reales; Nariño mandó en 1813 la moneda «de la china» para la Campaña del Sur; Bolívar, dueño de las cecas tras Boyacá, pidió el mismo tipo. Adolfo Meisel documenta también las piezas realistas de Popayán y Santa Marta y la caraqueña de baja ley. El Congreso de Cúcuta quiso volver a la ley española; Santander eludió la norma con emisiones antedatadas. En 1836 se unificó el régimen; en 1846–1847, bajo Mosquera, Lino de Pombo y Florentino González impusieron la ley 0,900 y el sistema decimal, y se amortizó la macuquina.',
      'La República de 1886 heredó el peso. En 1946 el Banco de la República asumió la Casa de Moneda por contrato con la Nación; en 1982 abrió la fábrica de cospeles en Ibagué y en 1987 trasladó allí la acuñación. La Ley 31 de 1993 incorporó la casa al banco emisor. La familia de 2012 —biodiversidad y agua— ganó al año siguiente el premio a la mejor serie circulante. Esta vitrina reúne ese arco: de las macuquinas de Santa Fe al peso actual.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, en la misma fila de izquierda a derecha por época: Santa Fe colonial, Independencia y Gran Colombia, Nueva Granada y la República. Las fichas de cada tipo se publicarán como en Filipinas y en el papel colombiano, a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    notaphilyLead: 'El papel moneda de estas mismas épocas se documenta en la vitrina de notafilia.',
    notaphilyLink: 'Colombia · Banca libre y Banco de la República',
  },
  en: {
    metaTitle: 'Colombia · The Santa Fe mint | Notofilia',
    metaDescription:
      'History of Colombian coinage: Santa Fe cobs, independence mints, the 1847 decimal reform, and the Ibagué coin factory.',
    kicker: 'Colombia · Numismatics',
    title: 'The Santa Fe mint and the peso',
    heroAlt:
      'Vintage relief illustration of Bogotá on parchment, with Plaza de Bolívar, La Candelaria, Monserrate, the Bogotá River, and the title Bogotá',
    intro: [
      'Colombian coin was born in Santa Fe, not in a central bank. The mint of the New Kingdom of Granada was founded in 1620; the next year it began to hammer gold and silver — cobs of irregular outline. The Banco de la República dates that founding to 1620; the Casa de Moneda Museum recalls that work began in 1621, in one of the city’s earliest houses. Those escudos and reales, with cob silver arriving from Mexico and Peru, were the viceroyalty’s circulating coin.',
      'In the eighteenth century the Crown took the mint into royal administration and mechanized it. Viceroy Solís reopened the house in 1756; from 1757 screw presses made round, reeded coin. Popayán opened in 1758, closed after disputes with Santafé, and a royal cédula of 1766 reopened it. Until independence, Santa Fe and Popayán refined Antioquia and Cauca gold and collected the royal fifth.',
      'War broke that order. In 1811 Cartagena’s junta struck half-real and two-real coppers; in 1813 Nariño ordered the china coin for the Southern Campaign; Bolívar, master of the mints after Boyacá, asked for the same type. Adolfo Meisel also records royalist issues from Popayán and Santa Marta and the low-fineness caraqueña. The Cúcuta Congress tried to restore Spanish fineness; Santander evaded the rule with antedated issues. In 1836 the regime was unified; in 1846–1847, under Mosquera, Lino de Pombo and Florentino González imposed 0.900 fine metal and the decimal system, and the cob was withdrawn.',
      'The Republic of 1886 inherited the peso. In 1946 the Banco de la República took over the mint by contract with the nation; in 1982 it opened the planchet factory at Ibagué and in 1987 moved striking there. Law 31 of 1993 folded the house into the issuing bank. The 2012 family — biodiversity and water — won the next year’s prize for best circulating series. This case gathers that arc: from the cobs of Santa Fe to the peso now in the pocket.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters in one row, left to right by period: colonial Santa Fe, Independence and Gran Colombia, New Granada, and the Republic. Individual type pages will be published as they are documented, as in the Philippines case and the Colombian paper case.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    notaphilyLead: 'Paper money from the same periods is documented in the notaphily case.',
    notaphilyLink: 'Colombia · Free banking and the Banco de la República',
  },
} as const;

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${COLOMBIA_COINAGE_PATH}` : COLOMBIA_COINAGE_PATH;
}

export function coinageChapterHref(id: ColombiaCoinageChapterId): string {
  return `#${id}`;
}
