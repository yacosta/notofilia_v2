import type { CatalogSource, LocalizedText } from './catalog';
import { LAZARETTOS_PATH } from './lazarettos';

export const COLOMBIA_COINAGE_PATH = '/coleccion/colombia-numismatica/';

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
      es: 'Hacia 1590 Felipe II ordenó una casa de moneda en Santafé que no llegó a abrirse. El Banco de la República fecha la fundación efectiva en 1620: Felipe III autorizó al ingeniero Alonso Turrillo de Yebra a acuñar plata y, por primera vez en América, oro. Turrillo empezó en 1621 en una casa baja alquilada en La Candelaria y mantuvo un tiempo una oficina en Cartagena de Indias, cerrada hacia 1634. Hasta entonces el Nuevo Reino pagaba sobre todo en tejuelos, barras y oro en polvo. Las primeras piezas fueron macuquinas a martillo —metal vertido en moldes, adelgazado a golpes, cortado con cizallas y estampado entre dos troqueles—: 1 y 2 escudos de oro y ½, ¼, 1, 2, 4 y 8 reales de plata, con marca de ceca N.R. El tesoro del Mesuno reúne doblones santafereños de 1629–1636. Durante el siglo XVII la fábrica fue herrería: se afinaba el oro de Antioquia y el Chocó. En 1751 la Corona pasó la ceca a administración real. Casi medio siglo después, bajo Fernando VI, la casa se amplió para las máquinas de moneda circular; la reforma arquitectónica de 1753 la dirigió Tomás Sánchez Reciente bajo el virrey Alfonso Pizarro. El virrey Solís la reinauguró en 1756 —el año queda en el friso de la portada de piedra— y las prensas de volante produjeron moneda circular de cordoncillo, para que el recorte del canto se viera. Cédulas reservadas de 1771 y 1786 rebajaron en secreto la ley del oro y de la plata. Popayán se autorizó por real cédula de 1729; Pedro Agustín de Valencia inició allí el cordoncillo en 1758 como tesorero particular. La Enciclopedia Banrepcultural registra el cierre por pleitos y la real cédula de 1766; el catálogo de la exposición de 1996 sitúa el paso a patrimonio real en 1770. Adolfo Meisel resume las leyes dieciochescas: oro de 0,916½, 0,901 y 0,875; plata cerca de 0,902. A esas especies se sumó la macuquina peruana y mexicana que llegaba con los situados.',
      en: 'Around 1590 Philip II ordered a mint at Santafé that never opened. The Banco de la República dates the effective founding to 1620: Philip III authorized the engineer Alonso Turrillo de Yebra to strike silver and, for the first time in the Americas, gold. Turrillo began in 1621 in a rented low house in La Candelaria and for a time kept an office at Cartagena de Indias, closed about 1634. Until then the New Kingdom paid mainly in tejuelos, bars, and gold dust. The first pieces were hammered cobs — metal poured into moulds, thinned by hammer, cut with shears, and struck between two dies: 1- and 2-escudo gold and ½, ¼, 1, 2, 4, and 8 reales silver, with mintmark N.R. The Mesuno hoard holds Santafé doblones of 1629–1636. In the seventeenth century the works were a smithy: Antioquia and Chocó gold was refined. In 1751 the Crown took the mint into royal administration. Almost half a century later, under Ferdinand VI, the house was enlarged for circular-coin machinery; the 1753 architectural reform was directed by Tomás Sánchez Reciente under Viceroy Alfonso Pizarro. Viceroy Solís reopened it in 1756 — the year is still on the stone doorway — and screw presses made round reeded coin so clipping of the edge would show. Reserved cédulas of 1771 and 1786 secretly lowered gold and silver fineness. Popayán was authorized by a royal cédula of 1729; Pedro Agustín de Valencia began reeded coin there in 1758 as a private treasurer. Banrepcultural’s encyclopedia records the closure after disputes and the 1766 royal cédula; the 1996 exhibition booklet places the transfer to royal property in 1770. Adolfo Meisel lists the eighteenth-century finenesses: gold at 0.916½, 0.901, and 0.875; silver near 0.902. Peruvian and Mexican cobs arriving with situados joined that local coin.',
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
      es: 'En 1811 la Casa de Santafé entró en crisis por la caída del oro y los giros a la causa patriota; se recurrió incluso a particulares para que no parara. La Junta de Cartagena mandó acuñar cobres de medio y de dos reales, hasta 1815: desde entonces las leyendas van en castellano —la moneda colonial iba en latín—. En Santa Fe, Nariño ordenó en 1813 la moneda provincial «de la china» —el busto de la india, «libertad americana»— para financiar la Campaña del Sur; se labró de 1814 a 1816. Tras Boyacá, Bolívar tomó las casas de Bogotá y Popayán y, el 18 de agosto de 1819, pidió el mismo tipo. Popayán estuvo en poder realista hasta 1821; al huir se llevaron los cuños. Meisel, siguiendo a Barriga Villalba y a Restrepo, anota también los cobres realistas de Popayán (1813), el feble patriota de 1816, la plata de Santa Marta mandada por el virrey Montalvo —y el cuartillo de cobre de sitio de 1820— y la caraqueña que trajo Morillo. El Congreso de Cúcuta quiso volver en 1821 a la ley y el peso españoles; Santander eludió la norma con emisiones de baja ley antedatadas a 1821. El catálogo del museo registra el primer peso republicano de 1825 —equivalente a 8 reales de plata o a ½ escudo de oro—. La Enciclopedia Banrepcultural documenta además las macuquinas de baja ley hechas sobre el molde caraqueño en el Casanare.',
      en: 'In 1811 the Santafé mint went into crisis as gold output fell and funds were diverted to the patriot cause; even private financing was used to keep it open. Cartagena’s junta ordered half-real and two-real coppers, struck through 1815: from then on legends are in Castilian — colonial coin had been in Latin. In Santa Fe, Nariño ordered the provincial china coin in 1813 — the Indian bust, “libertad americana” — to fund the Southern Campaign; it was struck from 1814 to 1816. After Boyacá, Bolívar took the Bogotá and Popayán mints and, on 18 August 1819, asked for the same type. Popayán stayed in royalist hands until 1821; they took the dies when they fled. Meisel, following Barriga Villalba and Restrepo, also records royalist coppers at Popayán (1813), the 1816 patriot feble, Santa Marta silver ordered by Viceroy Montalvo — and the 1820 copper siege cuartillo — and the low-fineness caraqueña that came with Morillo. The Cúcuta Congress of 1821 tried to restore Spanish weight and fineness; Santander evaded the rule with low-fineness issues antedated to 1821. The museum booklet records the first republican peso of 1825 — equal to 8 silver reales or ½ gold escudo. Banrepcultural’s encyclopedia also records low-fineness cobs struck on the Caracas pattern in Casanare.',
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
      es: 'Disuelta la Gran Colombia, la ley del 20 de abril de 1836 derogó el régimen de Cúcuta e intentó uniformar ley, peso, valor, tipo y denominación, con una relación oro-plata de 1 a 16: el de ocho reales se llamó granadino de plata y el de un peso oro, granadino de oro. La macuquina y la moneda recortada siguieron en el mercado; su amortización, ya ordenada en 1826, no terminó sino hacia 1848. En el primer gobierno de Tomás Cipriano de Mosquera, Lino de Pombo y Florentino González impusieron en 1846–1847 la ley 0,900 y un sistema decimal: cesó la acuñación feble y se reacuñó lo recogido. El peso, que en 1837 había sustituido al real a ocho reales por peso, quedó partido en diez reales —luego décimos, desde 1853—. En 1813 Juan del Corral había pedido a Caldas maquinaria para una ceca en Medellín; la Reconquista abortó el proyecto. El catálogo de la exposición de 1996 fecha las primeras labores del Estado de Antioquia en 1862 —un peso oro de ese año, de los dos ejemplares que registra—. La Colección Numismática del Banco sitúa la casa de Medellín en 1866–1947. La disposición del 26 de mayo de 1866 autorizó rebajar la ley de la plata salvo el peso, y el público atesoró esos pesos. En la década de 1880 Bogotá y Medellín instalaron prensas de vapor de Ralph Heaton & Sons, Birmingham. Bajo la Confederación Granadina y los Estados Unidos de Colombia (1863–1886) siguieron los pesos de plata y el oro de las tres cecas, todavía convertibles, mientras el papel de la banca libre empezaba a circular a su lado.',
      en: 'After Gran Colombia dissolved, the law of 20 April 1836 repealed the Cúcuta rules and tried to unify fineness, weight, value, type, and denomination, with gold to silver at 1 to 16: the eight-real piece was named granadino de plata and the gold peso granadino de oro. Cobs and clipped coin stayed in the market; their withdrawal, already ordered in 1826, was not finished until about 1848. In Tomás Cipriano de Mosquera’s first government, Lino de Pombo and Florentino González imposed 0.900 fine metal and a decimal system in 1846–1847: base coinage stopped and what was taken in was restruck. The peso, which in 1837 had replaced the real at eight reales to the peso, was split into ten reales — later décimos, from 1853. In 1813 Juan del Corral had asked Caldas for machinery for a Medellín mint; the reconquest aborted the project. The 1996 exhibition booklet dates the State of Antioquia’s first work to 1862 — a gold peso of that year, one of the two examples it records. The Bank’s Numismatic Collection places the Medellín house at 1866–1947. The measure of 26 May 1866 authorized a cut in silver fineness except the peso, and the public hoarded those pesos. In the 1880s Bogotá and Medellín installed steam presses from Ralph Heaton & Sons, Birmingham. Under the Granadine Confederation and the United States of Colombia (1863–1886) silver pesos and gold from the three mints remained convertible, while free-banking paper began to circulate beside them.',
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
      es: 'La Constitución de 1886 fijó de nuevo el nombre de República de Colombia; el peso oro siguió como patrón mientras el papel del Banco Nacional y de la Guerra de los Mil Días destrozaba la convertibilidad. Popayán cesó en 1881 y no volvió. Bogotá y Medellín cerraron hacia 1890; la escasez de metálico llevó a encargar en Nueva York piezas de 50 centavos de plata con el perfil de Soledad Román de Núñez —las cocobolas—. Tras Reyes, Bogotá reanudó en 1906 y Medellín en 1914. Las últimas de oro se labraron en Medellín en 1930 —5 pesos, la libra colombiana—. La guerra con el Perú (1932) disparó los 50 centavos de plata; en la Segunda Guerra Mundial el níquel escaseó y los 1, 2 y 5 centavos pasaron al cobre. En 1947–1948 se acuñaron los últimos 50 centavos de plata, ley 0,500. El 9 de abril de 1948 Antonio María Barriga y los empleados defendieron la casa del Bogotazo con el cloro de la afinación y las máscaras del taller. El Banco de la República, según su cronología de la Fábrica, asumió la Casa de Bogotá por contrato en 1946 (el catálogo de 1996 fecha ese contrato en 1942) y compró la de Medellín en 1953. Luis Ángel Arango impulsó a mediados de siglo la conservación del edificio; un primer museo numismático abrió al público a comienzos de los años sesenta (1961 en una presentación de aula de 2020; 1962 en el catálogo *Tesoros* del Banco, 2023). El decreto 1584 del 11 de agosto de 1975 lo declaró monumento nacional. Desde los años setenta se recuperó el claustro colonial —Calle 11 n.° 4-93—, obras que culminaron en 1982, el mismo año en que, aparte, Ibagué empezó a fabricar cospeles. En 1980 aún se importaba el cospel; el director Luis Guillermo Correa propuso fabricarlo en el país. En 1982 inauguró en Ibagué esa planta y en 1987 trasladó allí la acuñación: Santa Fe dejó de golpear después de 366 años. Algunas prensas de Ibagué llegan a cuatrocientas piezas por minuto. La Ley 31 de 1993 incorporó la casa al banco emisor y ese año se acuñó el primer 500 pesos bimetálico. En diciembre de 1996 abrió la exposición permanente. En 2012 salió la familia que exalta la biodiversidad y el agua; al año siguiente obtuvo el primer lugar mundial como mejor serie circulante. Esta vitrina reunirá, a medida que se documenten, tipos coloniales, de independencia y de la República —como se hace con las fichas de Filipinas y del papel colombiano.',
      en: 'The 1886 constitution restored the name Republic of Colombia; the gold peso remained the standard while Banco Nacional paper and the Thousand Days’ War wrecked convertibility. Popayán ceased in 1881 and did not return. Bogotá and Medellín closed about 1890; the shortage of coin led to an order in New York for 50-centavo silver with the profile of Soledad Román de Núñez — the cocobolas. After Reyes, Bogotá resumed in 1906 and Medellín in 1914. The last gold was struck at Medellín in 1930 — 5 pesos, the Colombian libra. The war with Peru (1932) drove large 50-centavo silver strikes; in the Second World War nickel ran short and the 1-, 2-, and 5-centavo pieces switched to copper. In 1947–1948 the last 50-centavo silver, 0.500 fine, was struck. On 9 April 1948 Antonio María Barriga and the staff defended the house in the Bogotazo with refining chlorine and the workshop masks. The Banco de la República, on its Coin Factory timeline, took over the Bogotá mint by contract in 1946 (the 1996 booklet dates that contract to 1942) and bought the Medellín mint in 1953. Luis Ángel Arango pushed, at mid-century, to conserve the building; a first public numismatic museum opened in the early 1960s (1961 in a 2020 classroom presentation; 1962 in the Bank’s 2023 *Tesoros* catalog). Decree 1584 of 11 August 1975 declared it a national monument. From the 1970s the colonial cloister — Calle 11 no. 4-93 — was restored, work that finished in 1982, the same year Ibagué, separately, began making planchets. In 1980 planchets were still imported; director Luis Guillermo Correa proposed making them in Colombia. In 1982 the Ibagué plant opened and in 1987 striking moved there: Santa Fe ceased after 366 years. Some Ibagué presses reach four hundred pieces a minute. Law 31 of 1993 folded the mint into the issuing bank, and that year the first bimetallic 500-peso was struck. The permanent exhibition opened in December 1996. In 2012 the family that honors biodiversity and water appeared; the next year it took first place worldwide as best circulating series. This case will gather, as they are documented, colonial, independence, and republican types — as the Philippines notes and Colombian paper already do.',
    },
  },
];

export const coinageSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/fabrica-moneda/historia',
    es: 'Banco de la República — Historia de la Fábrica de Moneda',
    en: 'Banco de la República — History of the Coin Factory',
    note: {
      es: 'Cronología oficial: fundación en 1620, administración del Banco en 1946, cospeles de Ibagué en 1982, traslado de la acuñación en 1987, Ley 31 de 1993 y familia de 2012. El catálogo de la exposición de 1996 añade a Turrillo, la oficina de Cartagena y la compra de Medellín en 1953.',
      en: 'Official timeline: founding in 1620, Bank administration in 1946, Ibagué planchets in 1982, the 1987 move of striking, Law 31 of 1993, and the 2012 family. The 1996 exhibition booklet adds Turrillo, the Cartagena office, and the 1953 purchase of Medellín.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación de billetes y monedas',
    en: 'Banco de la República — Banknote and coin production and circulation',
    note: {
      es: 'Estadísticas anuales de producción de monedas por denominación (desde 1987; acuñación nacional e importada, más conmemorativas). Un total por año y valor facial no es la tirada de un solo tipo.',
      en: 'Annual coin production by denomination (from 1987; domestic and imported strikes, plus commemoratives). A year-and-face-value total is not the mintage of a single type.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/el-banco-de-la-republica-celebra-sus-100-anos-con-la-reapertura-del-museo-casa-de-moneda',
    es: 'Banrepcultural — Reapertura del Museo Casa de Moneda',
    en: 'Banrepcultural — Reopening of the Casa de Moneda Museum',
    note: {
      es: 'Acuñación desde 1621, reapertura de 1756 bajo el virrey Solís, cese en Santa Fe en 1987 y exposición permanente desde diciembre de 1996.',
      en: 'Striking from 1621, the 1756 reopening under Viceroy Solís, the end of work at Santa Fe in 1987, and the permanent exhibition from December 1996.',
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
      es: 'Museo Casa de Moneda: Santafé (1621–1987), Medellín (1866–1947) y la Fábrica de Ibagué. El catálogo de la exposición de 1996 —prólogo de Jorge Orlando Melo— cubre Turrillo, las cocobolas y el Bogotazo.',
      en: 'Casa de Moneda Museum: Santafé (1621–1987), Medellín (1866–1947), and the Ibagué factory. The 1996 exhibition booklet — prologue by Jorge Orlando Melo — covers Turrillo, the cocobolas, and the Bogotazo.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
    es: 'Banrepcultural — Museo Casa de Moneda',
    en: 'Banrepcultural — Casa de Moneda Museum',
    note: {
      es: 'Exposición permanente abierta en diciembre de 1996 en Calle 11 n.° 4-93; decreto 1584 del 11 de agosto de 1975 (monumento nacional); primer museo público a comienzos de los años sesenta.',
      en: 'Permanent exhibition opened in December 1996 at Calle 11 no. 4-93; decree 1584 of 11 August 1975 (national monument); first public museum in the early 1960s.',
    },
  },
  {
    href: 'https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/21849',
    es: 'Boletín Cultural y Bibliográfico — Inserto Colección Numismática (2019)',
    en: 'Boletín Cultural y Bibliográfico — Numismatic Collection insert (2019)',
    note: {
      es: 'El claustro abrió al público en diciembre de 1996; la colección supera las 18.000 piezas.',
      en: 'The cloister opened to the public in December 1996; the collection holds more than 18,000 pieces.',
    },
  },
];

export const coinageCopy = {
  es: {
    metaTitle: 'Colombia-Numismática | Notofilia',
    metaDescription:
      'Historia de la moneda metálica colombiana: macuquinas de Santa Fe, cecas de la Independencia, reforma decimal de 1847 y la Fábrica de Moneda de Ibagué.',
    kicker: 'Colombia-Numismática',
    title: 'Casa de Moneda de Santa Fe y el peso',
    heroAlt:
      'Ilustración vintage en relieve de Bogotá sobre pergamino, con la Plaza de Bolívar, La Candelaria, Monserrate, el río Bogotá y el título Bogotá',
    intro: [
      'La moneda metálica colombiana nació en Santa Fe, no en un banco central. Hacia 1590 Felipe II mandó una ceca que no abrió. En 1620 Felipe III autorizó a Alonso Turrillo de Yebra; al año siguiente labró oro —por primera vez en América— y plata a martillo, las macuquinas de marca N.R., en una casa baja alquilada en La Candelaria. El Banco de la República sitúa esa fundación en 1620; el Museo Casa de Moneda recuerda las labores de 1621. Hasta entonces el comercio iba en tejuelos y oro en polvo. Esas piezas de escudos y reales, con la plata macuquina que llegaba de México y el Perú, fueron el circulante del virreinato.',
      'En el siglo XVIII la Corona pasó la ceca a administración real y la mecanizó. El virrey Solís reinauguró la casa en 1756; las prensas de volante produjeron moneda circular de cordoncillo. Cédulas reservadas de 1771 y 1786 rebajaron en secreto la ley. Popayán se autorizó en 1729 y acuñó desde 1758; la Enciclopedia Banrepcultural registra la real cédula de 1766. Hasta la Independencia, Santa Fe y Popayán afinaron el oro de Antioquia y el Cauca y cobraron el quinto real.',
      'La guerra rompió ese orden. En 1811 la Junta de Cartagena acuñó cobres de medio y dos reales —ya con leyendas en castellano—; Nariño mandó en 1813 la moneda «de la china» para la Campaña del Sur; Bolívar, dueño de las cecas tras Boyacá, pidió el mismo tipo. Adolfo Meisel documenta también las piezas realistas de Popayán y Santa Marta y la caraqueña de baja ley. El Congreso de Cúcuta quiso volver a la ley española; Santander eludió la norma con emisiones antedatadas. En 1836 se unificó el régimen —granadino de plata y de oro—; en 1846–1847, bajo Mosquera, Lino de Pombo y Florentino González impusieron la ley 0,900 y el sistema decimal, y se amortizó la macuquina.',
      'La República de 1886 heredó el peso. Las cecas se paralizaron hacia 1890; las cocobolas de 50 centavos, con el perfil de Soledad Román, se encargaron en Nueva York. El Banco de la República, en su cronología, asumió la Casa de Bogotá en 1946 y compró la de Medellín en 1953. El 9 de abril de 1948 la casa resistió el Bogotazo. Un primer museo numismático abrió al público a comienzos de los años sesenta; el claustro de Calle 11 n.° 4-93 se recuperó en obras que culminaron en 1982, el mismo año en que Ibagué empezó a fabricar cospeles. En 1987 se trasladó allí la acuñación. La Ley 31 de 1993 incorporó la casa al banco emisor. En diciembre de 1996 abrió la exposición permanente. La familia de 2012 —biodiversidad y agua— ganó al año siguiente el premio a la mejor serie circulante. Esta vitrina reúne ese arco: de las macuquinas de Santa Fe al peso actual.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cinco vitrinas, en la misma fila de izquierda a derecha: Santa Fe colonial, Independencia y Gran Colombia, Nueva Granada, la República y Lazarettos. Las fichas de cada tipo se publicarán como en Filipinas y en el papel colombiano, a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    viewCase: 'Leer el catálogo',
    viewPiece: 'Ver la ficha',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    notaphilyLead: 'El papel moneda de estas mismas épocas se documenta en la vitrina de notafilia.',
    notaphilyLink: 'Colombia · Banca libre y Banco de la República',
    visualCatalogLead: 'El catálogo visual reúne los tipos con buscador, cuatro por fila, sin precios.',
    visualCatalogLink: 'Catálogo visual de monedas',
  },
  en: {
    metaTitle: 'Colombia-Numismatics | Notofilia',
    metaDescription:
      'History of Colombian coinage: Santa Fe cobs, independence mints, the 1847 decimal reform, and the Ibagué coin factory.',
    kicker: 'Colombia-Numismatics',
    title: 'The Santa Fe mint and the peso',
    heroAlt:
      'Vintage relief illustration of Bogotá on parchment, with Plaza de Bolívar, La Candelaria, Monserrate, the Bogotá River, and the title Bogotá',
    intro: [
      'Colombian coin was born in Santa Fe, not in a central bank. Around 1590 Philip II ordered a mint that never opened. In 1620 Philip III authorized Alonso Turrillo de Yebra; the next year he hammered gold — for the first time in the Americas — and silver, the N.R. cobs, in a rented low house in La Candelaria. The Banco de la República dates that founding to 1620; the Casa de Moneda Museum recalls the work of 1621. Until then trade ran on tejuelos and gold dust. Those escudos and reales, with cob silver arriving from Mexico and Peru, were the viceroyalty’s circulating coin.',
      'In the eighteenth century the Crown took the mint into royal administration and mechanized it. Viceroy Solís reopened the house in 1756; screw presses made round, reeded coin. Reserved cédulas of 1771 and 1786 secretly cut fineness. Popayán was authorized in 1729 and struck from 1758; Banrepcultural’s encyclopedia records the 1766 royal cédula. Until independence, Santa Fe and Popayán refined Antioquia and Cauca gold and collected the royal fifth.',
      'War broke that order. In 1811 Cartagena’s junta struck half-real and two-real coppers — already with Castilian legends; in 1813 Nariño ordered the china coin for the Southern Campaign; Bolívar, master of the mints after Boyacá, asked for the same type. Adolfo Meisel also records royalist issues from Popayán and Santa Marta and the low-fineness caraqueña. The Cúcuta Congress tried to restore Spanish fineness; Santander evaded the rule with antedated issues. In 1836 the regime was unified — granadino de plata and de oro; in 1846–1847, under Mosquera, Lino de Pombo and Florentino González imposed 0.900 fine metal and the decimal system, and the cob was withdrawn.',
      'The Republic of 1886 inherited the peso. The mints stalled about 1890; the 50-centavo cocobolas, with Soledad Román’s profile, were ordered in New York. The Banco de la República, on its own timeline, took over the Bogotá mint in 1946 and bought Medellín in 1953. On 9 April 1948 the house held in the Bogotazo. A first public numismatic museum opened in the early 1960s; restoration of the cloister at Calle 11 no. 4-93 finished in 1982, the same year Ibagué began making planchets. In 1987 striking moved there. Law 31 of 1993 folded the house into the issuing bank. The permanent exhibition opened in December 1996. The 2012 family — biodiversity and water — won the next year’s prize for best circulating series. This case gathers that arc: from the cobs of Santa Fe to the peso now in the pocket.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Five cases in one row, left to right: colonial Santa Fe, Independence and Gran Colombia, New Granada, the Republic, and Lazarettos. Individual type pages will be published as they are documented, as in the Philippines case and the Colombian paper case.',
    viewChapter: 'Read the chapter',
    viewCase: 'Read the catalog',
    viewPiece: 'Open the piece',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    notaphilyLead: 'Paper money from the same periods is documented in the notaphily case.',
    notaphilyLink: 'Colombia · Free banking and the Banco de la República',
    visualCatalogLead: 'The visual catalog gathers the types with search, four to a row, and no prices.',
    visualCatalogLink: 'Visual coin catalog',
  },
} as const;

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/colombia-numismatics/' : COLOMBIA_COINAGE_PATH;
}

export function coinageChapterHref(id: ColombiaCoinageChapterId): string {
  return `#${id}`;
}

/** Extra catalog cards after the four Colombia chapters — same row, not in-page essays. */
export const colombiaCoinageExtraCases = [
  {
    href: LAZARETTOS_PATH,
    years: { es: 'desde 1598', en: 'from 1598' },
    title: { es: 'Lazarettos', en: 'Lazarettos' },
  },
] as const;
