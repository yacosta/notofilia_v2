import type { CatalogSource, LocalizedText } from './catalog';
import { glossaryTermHref } from './glossary.ts';
import { LAZARETTOS_NUMISMATICS_PATH } from './lazarettos-numismatics.ts';
import type { Locale } from '../lib/locale-paths';

export const COLOMBIA_COINAGE_PATH = '/coleccion/colombia-numismatica/';

export type ColombiaCoinageChapterId = 'santa-fe' | 'independencia' | 'nueva-granada' | 'republica';

export type ColombiaCoinageChapter = {
  id: ColombiaCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
  note?: {
    before: LocalizedText;
    path: string;
    label: LocalizedText;
    after: LocalizedText;
  };
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
      es: 'Hacia 1590 Felipe II ordenó una casa de moneda en Santafé que no llegó a abrirse. El Banco de la República fecha la fundación efectiva en 1620: Felipe III autorizó al ingeniero Alonso Turrillo de Yebra a acuñar plata y, por primera vez en América, oro. Turrillo empezó en 1621 en una casa baja alquilada en La Candelaria y mantuvo un tiempo una oficina en Cartagena de Indias, cerrada hacia 1634. Hasta entonces el Nuevo Reino pagaba sobre todo en tejuelos, barras y oro en polvo. Las primeras piezas fueron macuquinas a martillo —metal vertido en moldes, adelgazado a golpes, cortado con cizallas y estampado entre dos troqueles—: 1 y 2 escudos de oro y ½, ¼, 1, 2, 4 y 8 reales de plata, con marca de ceca N.R. El tesoro del Mesuno reúne doblones santafereños de 1629–1636. Durante el siglo XVII la fábrica fue herrería: se afinaba el oro de Antioquia y el Chocó. En 1751 la Corona pasó la ceca a administración real. Casi medio siglo después, bajo Fernando VI, la casa se amplió para las máquinas de moneda circular; la reforma arquitectónica de 1753 la dirigió Tomás Sánchez Reciente bajo el virrey Alfonso Pizarro. El virrey Solís la reinauguró en 1756 —el año queda en el friso de la portada de piedra— y las prensas de volante produjeron moneda circular de cordoncillo, para que el recorte del canto se viera. Cédulas reservadas de 1771 y 1786 rebajaron en secreto la ley del oro y de la plata. Popayán se autorizó por real cédula de 1729; Pedro Agustín de Valencia inició allí el cordoncillo en 1758 como tesorero particular. La Enciclopedia Banrepcultural registra el cierre por pleitos y la real cédula de 1766; el catálogo de la exposición de 1996 sitúa el paso a patrimonio real en 1770. Adolfo Meisel resume las leyes dieciochescas: oro de 0,916½, 0,901 y 0,875; plata cerca de 0,902. Luis Ángel Arango da el quilate de esas cédulas: la ordenanza del 13 de diciembre de 1751 fijó el oro en 22 quilates; la real cédula del 18 de marzo de 1771 lo bajó, en secreto, a 21 quilates y 2½ granos (0,901); la del 25 de febrero de 1786, también reservada, lo dejó en 21 quilates (0,875) desde el 10 de enero de 1787. A esas especies se sumó la macuquina peruana y mexicana que llegaba con los situados.',
      en: 'Around 1590 Philip II ordered a mint at Santafé that never opened. The Banco de la República dates the effective founding to 1620: Philip III authorized the engineer Alonso Turrillo de Yebra to strike silver and, for the first time in the Americas, gold. Turrillo began in 1621 in a rented low house in La Candelaria and for a time kept an office at Cartagena de Indias, closed about 1634. Until then the New Kingdom paid mainly in tejuelos, bars, and gold dust. The first pieces were hammered cobs — metal poured into moulds, thinned by hammer, cut with shears, and struck between two dies: 1- and 2-escudo gold and ½, ¼, 1, 2, 4, and 8 reales silver, with mintmark N.R. The Mesuno hoard holds Santafé doblones of 1629–1636. In the seventeenth century the works were a smithy: Antioquia and Chocó gold was refined. In 1751 the Crown took the mint into royal administration. Almost half a century later, under Ferdinand VI, the house was enlarged for circular-coin machinery; the 1753 architectural reform was directed by Tomás Sánchez Reciente under Viceroy Alfonso Pizarro. Viceroy Solís reopened it in 1756 — the year is still on the stone doorway — and screw presses made round reeded coin so clipping of the edge would show. Reserved cédulas of 1771 and 1786 secretly lowered gold and silver fineness. Popayán was authorized by a royal cédula of 1729; Pedro Agustín de Valencia began reeded coin there in 1758 as a private treasurer. Banrepcultural’s encyclopedia records the closure after disputes and the 1766 royal cédula; the 1996 exhibition booklet places the transfer to royal property in 1770. Adolfo Meisel lists the eighteenth-century finenesses: gold at 0.916½, 0.901, and 0.875; silver near 0.902. Luis Ángel Arango gives the carat of those cédulas: the ordinance of 13 December 1751 set gold at 22 carats; the royal cédula of 18 March 1771 secretly lowered it to 21 carats and 2½ granos (0.901); that of 25 February 1786, also reserved, left it at 21 carats (0.875) from 10 January 1787. Peruvian and Mexican cobs arriving with situados joined that local coin.',
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
      es: 'En 1811 la Casa de Santafé entró en crisis por la caída del oro y los giros a la causa patriota; se recurrió incluso a particulares para que no parara. La Junta de Cartagena mandó acuñar cobres de medio y de dos reales, hasta 1815. Esta colección tiene un 2 reales de ese cobre, con la fecha ilegible y sin peso ni diámetro. Numista deja el tipo KM# D1 sin peso y sin diámetro publicados; las cifras del medio real de la misma junta miden otro disco. Desde entonces las leyendas van en castellano —la moneda colonial iba en latín—. En Santa Fe, Nariño ordenó en 1813 la moneda provincial «de la china» —el busto de la india, «libertad americana»— para financiar la Campaña del Sur; se labró de 1814 a 1816. Tras Boyacá, Bolívar tomó las casas de Bogotá y Popayán y, el 18 de agosto de 1819, pidió el mismo tipo. Popayán estuvo en poder realista hasta 1821; al huir se llevaron los cuños. Meisel, siguiendo a Barriga Villalba y a Restrepo, anota también los cobres realistas de Popayán (1813), el feble patriota de 1816, la plata de Santa Marta mandada por el virrey Montalvo —y el cuartillo de cobre de sitio de 1820— y la caraqueña que trajo Morillo. El Congreso de Cúcuta quiso volver en 1821 a la ley y el peso españoles; Santander eludió la norma con emisiones de baja ley antedatadas a 1821. El catálogo del museo registra el primer peso republicano de 1825 —equivalente a 8 reales de plata o a ½ escudo de oro—. Esta colección tiene el peso de oro de Bogotá de 1826, ensaye JF. La Enciclopedia Banrepcultural documenta además las macuquinas de baja ley hechas sobre el molde caraqueño en el Casanare.',
      en: 'In 1811 the Santafé mint went into crisis as gold output fell and funds were diverted to the patriot cause; even private financing was used to keep it open. Cartagena’s junta ordered half-real and two-real coppers, struck through 1815. This collection holds a 2 reales of that copper, with the date unread and without a weight or diameter. Numista leaves type KM# D1 without a published weight or diameter; the half-real figures of the same junta measure a different disc. From then on legends are in Castilian — colonial coin had been in Latin. In Santa Fe, Nariño ordered the provincial china coin in 1813 — the Indian bust, “libertad americana” — to fund the Southern Campaign; it was struck from 1814 to 1816. After Boyacá, Bolívar took the Bogotá and Popayán mints and, on 18 August 1819, asked for the same type. Popayán stayed in royalist hands until 1821; they took the dies when they fled. Meisel, following Barriga Villalba and Restrepo, also records royalist coppers at Popayán (1813), the 1816 patriot feble, Santa Marta silver ordered by Viceroy Montalvo — and the 1820 copper siege cuartillo — and the low-fineness caraqueña that came with Morillo. The Cúcuta Congress of 1821 tried to restore Spanish weight and fineness; Santander evaded the rule with low-fineness issues antedated to 1821. The museum booklet records the first republican peso of 1825 — equal to 8 silver reales or ½ gold escudo. This collection holds the 1826 Bogotá gold peso, assayer JF. Banrepcultural’s encyclopedia also records low-fineness cobs struck on the Caracas pattern in Casanare.',
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
      es: 'Disuelta la Gran Colombia, la ley del 20 de abril de 1836 derogó el régimen de Cúcuta e intentó uniformar ley, peso, valor, tipo y denominación, con una relación oro-plata de 1 a 16: el de ocho reales se llamó granadino de plata y el de un peso oro, granadino de oro. La macuquina y la moneda recortada siguieron en el mercado; su amortización, ya ordenada en 1826, no terminó sino hacia 1848. En el primer gobierno de Tomás Cipriano de Mosquera, Lino de Pombo y Florentino González impusieron en 1846–1847 la ley 0,900 y un sistema decimal: cesó la acuñación feble y se reacuñó lo recogido. El peso, que en 1837 había sustituido al real a ocho reales por peso, quedó partido en diez reales —luego décimos, desde 1853—. La ley del 27 de abril de 1847 mandó acuñar el granadino de plata de diez reales, 25 g a la ley de 0,900, y admitió la plata de Francia, Bélgica y Cerdeña a dos reales el franco. La ley del 30 de junio de 1857 declaró unidad el peso —esos mismos 25 g y 0,900, partido en cien centavos— y autorizó el cóndor de oro de diez pesos, 16,129 g a 0,900. Hernández registra monedas ya denominadas en centavos en 1871 y 1872, entre ellas el 2 pesos de esos años y el 10 centavos de 1872, mientras el anexo sigue anotando décimos en 1873 y 1874. Ese peso de 25 g es el que vuelve legible el centavo de las fichas posteriores. En 1813 Juan del Corral había pedido a Caldas maquinaria para una ceca en Medellín; la Reconquista abortó el proyecto. El catálogo de la exposición de 1996 fecha las primeras labores del Estado de Antioquia en 1862 —un peso oro de ese año, de los dos ejemplares que registra—. La Colección Numismática del Banco sitúa la casa de Medellín en 1866–1947. La disposición del 26 de mayo de 1866 autorizó rebajar la ley de la plata salvo el peso, y el público atesoró esos pesos. En la década de 1880 Bogotá y Medellín instalaron prensas de vapor de Ralph Heaton & Sons, Birmingham. Bajo la Confederación Granadina y los Estados Unidos de Colombia (1863–1886) siguieron los pesos de plata y el oro de las tres cecas, todavía convertibles, mientras el papel de la banca libre empezaba a circular a su lado.',
      en: 'After Gran Colombia dissolved, the law of 20 April 1836 repealed the Cúcuta rules and tried to unify fineness, weight, value, type, and denomination, with gold to silver at 1 to 16: the eight-real piece was named granadino de plata and the gold peso granadino de oro. Cobs and clipped coin stayed in the market; their withdrawal, already ordered in 1826, was not finished until about 1848. In Tomás Cipriano de Mosquera’s first government, Lino de Pombo and Florentino González imposed 0.900 fine metal and a decimal system in 1846–1847: base coinage stopped and what was taken in was restruck. The peso, which in 1837 had replaced the real at eight reales to the peso, was split into ten reales — later décimos, from 1853. The law of 27 April 1847 ordered the silver granadino of ten reales, 25 g at 0.900 fine, and admitted French, Belgian, and Sardinian silver at two reales to the franc. The law of 30 June 1857 made the peso the unit — those same 25 g at 0.900, divided into one hundred centavos — and authorized the gold cóndor of ten pesos, 16.129 g at 0.900. Hernández records coins already denominated in centavos in 1871 and 1872, among them the 2 pesos of those years and the 10 centavos of 1872, while the annex still lists décimos in 1873 and 1874. That 25 g peso is what makes the centavo on later cards legible. In 1813 Juan del Corral had asked Caldas for machinery for a Medellín mint; the reconquest aborted the project. The 1996 exhibition booklet dates the State of Antioquia’s first work to 1862 — a gold peso of that year, one of the two examples it records. The Bank’s Numismatic Collection places the Medellín house at 1866–1947. The measure of 26 May 1866 authorized a cut in silver fineness except the peso, and the public hoarded those pesos. In the 1880s Bogotá and Medellín installed steam presses from Ralph Heaton & Sons, Birmingham. Under the Granadine Confederation and the United States of Colombia (1863–1886) silver pesos and gold from the three mints remained convertible, while free-banking paper began to circulate beside them.',
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
      es: 'La Constitución de 1886 fijó de nuevo el nombre de República de Colombia; el peso oro siguió como patrón mientras el papel del Banco Nacional y de la Guerra de los Mil Días destrozaba la convertibilidad. Popayán cesó en 1881 y no volvió. Bogotá y Medellín cerraron hacia 1890; la escasez de metálico llevó a encargar en Nueva York piezas de 50 centavos de plata con el perfil de Soledad Román de Núñez —las cocobolas—. En el gobierno de Reyes (1904–1909) se labraron pesos de papel moneda en cuproníquel —1, 2 y 5 pesos p/m, equivalentes a 1, 2 y 5 centavos— con efigie de la Paz; Hernández fecha el módulo en Bruselas y Bogotá entre 1907 y 1916. No son billetes. El catálogo de 1996 resume el arreglo de Reyes: cada peso de ese papel moneda equivalía a un centavo oro. Arango precisa la ley 19 de 1905, que convirtió el papel por oro a razón de cien por uno, y el decreto legislativo 47 de 1905, que autorizó el Banco Central. La ley 25 de 1923, sobre el proyecto de la misión Kemmerer, creó el Banco de la República; el mismo catálogo fecha la apertura el 23 de julio de 1923 y entiende el peso oro como el compromiso de convertir el billete. Esa convertibilidad se retiró en 1931. Distintas, y anteriores, son las coscojas de necesidad de Palonegro (1902): latón de Bucaramanga con leyenda Santander, hechas de cápsulas de fusil. Tras Reyes, Bogotá reanudó en 1906 y Medellín en 1914. Las últimas de oro se labraron en Medellín en 1930 —5 pesos—. Desde 1912 el artículo 127 del Código Fiscal, según Arango, fijó el peso oro en 1,5976 g a la ley de 0,91676. Cinco de esos pesos reúnen el oro fino de una libra esterlina: Hernández da al 5 pesos de Medellín 7,988 g y lo llama libra esterlina, y el catálogo de 1996 lo llama libra colombiana. Numista transcribe en ese módulo CINCO PESOS y la ley 0,916⅔; «libra esterlina» es el nombre de catálogo, y la paridad es de ley. La guerra con el Perú (1932) disparó los 50 centavos de plata; en la Segunda Guerra Mundial el níquel escaseó y los 1, 2 y 5 centavos pasaron al cobre. En 1947–1948 se acuñaron los últimos 50 centavos de plata, ley 0,500.\n\nEl catálogo de 1996 muestra todavía un 1 centavo de cobre de Bogotá fechado 1957. Hernández anota, en el anexo, un 10 centavos de 1952, un 20 de 1956, un 50 de 1969 con efigie de Santander y un 5 centavos de 1971. Las tablas BanRep de moneda abren en 1987 y ya no traen columna de centavo: ese año el menor valor es el peso.\n\nEl 9 de abril de 1948 Antonio María Barriga y los empleados defendieron la casa del Bogotazo con el cloro de la afinación y las máscaras del taller. El Banco de la República, según su cronología de la Fábrica, asumió la Casa de Bogotá por contrato en 1946 (el catálogo de 1996 fecha ese contrato en 1942) y compró la de Medellín en 1953. Luis Ángel Arango impulsó a mediados de siglo la conservación del edificio; un primer museo numismático abrió al público a comienzos de los años sesenta (1961 en una presentación de aula de 2020; 1962 en el catálogo *Tesoros* del Banco, 2023). El decreto 1584 del 11 de agosto de 1975 lo declaró monumento nacional. Desde los años setenta se recuperó el claustro colonial —Calle 11 n.° 4-93—, obras que culminaron en 1982, el mismo año en que, aparte, Ibagué empezó a fabricar cospeles. En 1980 aún se importaba el cospel; el director Luis Guillermo Correa propuso fabricarlo en el país. En 1982 inauguró en Ibagué esa planta y en 1987 trasladó allí la acuñación: Santa Fe dejó de golpear después de 366 años. Algunas prensas de Ibagué llegan a cuatrocientas piezas por minuto. La Ley 31 de 1993 incorporó la casa al banco emisor y ese año se acuñó el primer 500 pesos bimetálico. El 50 pesos de alpaca está en el ensayo de González White desde 1989. Esas mismas tablas BanRep registran 100 pesos desde 1992. El 200 pesos, motivo Quimbaya de Dicken Castro, empezó a circular el 1 de julio de 1994. En diciembre de 1996 abrió la exposición permanente. En 2012 salió la familia que exalta la biodiversidad y el agua; al año siguiente obtuvo el primer lugar mundial como mejor serie circulante. Las tablas BanRep registran después conmemorativas de 10.000 (2021 y 2023) y de 20.000 (2023–2024: centenario del Banco, guarniel antioqueño y quinto centenario de Santa Marta). Esta vitrina reunirá, a medida que se documenten, tipos coloniales, de independencia y de la República —como se hace con las fichas de Filipinas y del papel colombiano.',
      en: 'The 1886 constitution restored the name Republic of Colombia; the gold peso remained the standard while Banco Nacional paper and the Thousand Days’ War wrecked convertibility. Popayán ceased in 1881 and did not return. Bogotá and Medellín closed about 1890; the shortage of coin led to an order in New York for 50-centavo silver with the profile of Soledad Román de Núñez — the cocobolas. Under Reyes (1904–1909) paper-money pesos were struck in cupronickel — 1, 2, and 5 pesos p/m, equal to 1, 2, and 5 centavos — with a Peace bust; Hernández dates the module at Brussels and Bogotá from 1907 to 1916. They are not banknotes. The 1996 booklet sums up Reyes’s settlement: each of those paper-money pesos equaled one gold centavo. Arango specifies Law 19 of 1905, which converted the paper into gold at one hundred to one, and legislative decree 47 of 1905, which authorized the Banco Central. Law 25 of 1923, on the Kemmerer mission’s project, created the Banco de la República; the same booklet dates the opening to 23 July 1923 and treats the peso oro as the pledge to convert the note. That convertibility was withdrawn in 1931. Distinct, and earlier, are the Palonegro necessity coscojas (1902): Bucaramanga brass with a Santander legend, made from rifle-cartridge cases. After Reyes, Bogotá resumed in 1906 and Medellín in 1914. The last gold was struck at Medellín in 1930 — 5 pesos. From 1912, article 127 of the Fiscal Code, as Arango records it, set the gold peso at 1.5976 g, 0.91676 fine. Five of those pesos gather the fine gold of a pound sterling: Hernández gives the Medellín 5 pesos as 7.988 g and calls it a libra esterlina, and the 1996 booklet calls it the Colombian libra. Numista transcribes CINCO PESOS and the fineness 0.916⅔ on that module; “libra esterlina” is the catalog name, and the parity is statutory. The war with Peru (1932) drove large 50-centavo silver strikes; in the Second World War nickel ran short and the 1-, 2-, and 5-centavo pieces switched to copper. In 1947–1948 the last 50-centavo silver, 0.500 fine, was struck.\n\nThe 1996 booklet still shows a copper 1 centavo of Bogotá dated 1957. Hernández’s annex notes a 10 centavos of 1952, a 20 of 1956, a 50 of 1969 with Santander’s bust, and a 5 centavos of 1971. BanRep’s coin tables open in 1987 and already have no centavo column: that year the smallest value is the peso.\n\nOn 9 April 1948 Antonio María Barriga and the staff defended the house in the Bogotazo with refining chlorine and the workshop masks. The Banco de la República, on its Coin Factory timeline, took over the Bogotá mint by contract in 1946 (the 1996 booklet dates that contract to 1942) and bought the Medellín mint in 1953. Luis Ángel Arango pushed, at mid-century, to conserve the building; a first public numismatic museum opened in the early 1960s (1961 in a 2020 classroom presentation; 1962 in the Bank’s 2023 *Tesoros* catalog). Decree 1584 of 11 August 1975 declared it a national monument. From the 1970s the colonial cloister — Calle 11 no. 4-93 — was restored, work that finished in 1982, the same year Ibagué, separately, began making planchets. In 1980 planchets were still imported; director Luis Guillermo Correa proposed making them in Colombia. In 1982 the Ibagué plant opened and in 1987 striking moved there: Santa Fe ceased after 366 years. Some Ibagué presses reach four hundred pieces a minute. Law 31 of 1993 folded the mint into the issuing bank, and that year the first bimetallic 500-peso was struck. González White’s essay records the alpaca 50 pesos from 1989. The same BanRep tables record 100 pesos from 1992. The 200 pesos, Dicken Castro’s Quimbaya motif, began to circulate on 1 July 1994. The permanent exhibition opened in December 1996. In 2012 the family that honors biodiversity and water appeared; the next year it took first place worldwide as best circulating series. BanRep’s tables later record 10,000-peso commemoratives (2021 and 2023) and 20,000-peso commemoratives (2023–2024: the Bank’s centenary, the Antioquian carriel, and Santa Marta’s fifth centenary). This case will gather, as they are documented, colonial, independence, and republican types — as the Philippines notes and Colombian paper already do.',
    },
    note: {
      before: {
        es: 'La moneda de los lazaretos empieza antes de las fichas de 1921 y del disco fechado 1931: el decreto 300 de 1901 y la serie de 1907 están en ',
        en: 'Lazaretto coin begins before the 1921 records and the disc dated 1931: decree 300 of 1901 and the 1907 series are on ',
      },
      path: LAZARETTOS_NUMISMATICS_PATH,
      label: {
        es: 'Numismática de los Lazaretos',
        en: 'Numismatics of the Lazarettos',
      },
      after: {
        es: '. KM, Hernández y Restrepo no listan ese 1931, y la ficha no le asigna número.',
        en: '. KM, Hernández, and Restrepo do not list that 1931, and the record assigns it no number.',
      },
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
  {
    href: 'https://en.numista.com/L100183',
    es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
    en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
    note: {
      es: 'Pesos p/m de 1907–1916 y coscojas de Palonegro de 1902. No se publican columnas de precios.',
      en: 'P/m pesos of 1907–1916 and Palonegro coscojas of 1902. Price columns are not published.',
    },
  },
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
    es: 'Banco de la República — Producción y circulación',
    en: 'Banco de la República — Production and circulation',
    note: {
      es: 'Producción anual de moneda: conmemorativas de 10.000 (2021, 2023) y 20.000 (2023–2024). Un total de denominación-año no es tirada de un solo tipo.',
      en: 'Annual coin production: 10,000-peso commemoratives (2021, 2023) and 20,000-peso commemoratives (2023–2024). A denomination-year total is not a single-type mintage.',
    },
  },
  {
    href: 'https://revistas.unc.edu.ar/index.php/REyE/article/view/3122',
    es: 'Luis Ángel Arango — El sistema monetario de Colombia (1942)',
    en: 'Luis Ángel Arango — The monetary system of Colombia (1942)',
    note: {
      es: 'Revista de Economía y Estadística (Córdoba). Quilates de 1751, 1771 y 1786; leyes del 27 de abril de 1847 y del 30 de junio de 1857; ley 19 y decreto 47 de 1905; artículo 127 del Código Fiscal (1912); ley 25 de 1923.',
      en: 'Revista de Economía y Estadística (Córdoba). The 1751, 1771, and 1786 carats; the laws of 27 April 1847 and 30 June 1857; Law 19 and decree 47 of 1905; article 127 of the Fiscal Code (1912); Law 25 of 1923.',
    },
  },
  {
    href: 'https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/1749',
    es: 'A. M. Barriga Villalba — Historia de la Casa de Moneda, 3 tomos (1969)',
    en: 'A. M. Barriga Villalba — Historia de la Casa de Moneda, 3 volumes (1969)',
    note: {
      es: 'Bogotá, Banco de la República, Archivo de la Economía Nacional. El Boletín Cultural la cita como la historia publicada del archivo de la Casa. Meisel la sigue para la Independencia. No se publican láminas.',
      en: 'Bogotá, Banco de la República, Archivo de la Economía Nacional. The Boletín Cultural cites it as the published history of the mint archive. Meisel follows it for the independence years. Plates are not published.',
    },
  },
  {
    href: 'https://en.numista.com/52837',
    es: 'Jorge Emilio Restrepo — Coins of Colombia, 4.ª ed. 2012',
    en: 'Jorge Emilio Restrepo — Coins of Colombia, 4th ed. 2012',
    note: {
      es: 'Numista cita esa edición junto al KM (Restrepo 85.20 en el 1 escudo de Popayán de 1801). Monedas de Colombia es el catálogo en español del mismo autor. No se publican precios.',
      en: 'Numista cites that edition beside the KM number (Restrepo 85.20 on the 1801 Popayán 1 escudo). Monedas de Colombia is the same author’s catalogue in Spanish. Prices are not published.',
    },
  },
  {
    href: 'https://www.sedwickcoins.com/',
    es: 'Daniel Sedwick — The Practical Book of Cobs',
    en: 'Daniel Sedwick — The Practical Book of Cobs',
    note: {
      es: 'Manual de macuquinas. Las fichas de oro de Popayán ya citan comparables de la casa Sedwick. Aquí no se fija una edición ni una página.',
      en: 'A handbook of cobs. The Popayán gold records already cite Sedwick comparables. No edition and no page are fixed here.',
    },
  },
  {
    href: 'https://en.numista.com/90819',
    es: 'Numista — 5 pesos de Colombia, 1913–1919 (N#90819)',
    en: 'Numista — Colombia 5 pesos, 1913–1919 (N#90819)',
    note: {
      es: 'KM# 195, Restrepo 453; 7,988 g, oro 0,916⅔; leyenda CINCO PESOS y la ley. El apodo de catálogo es «libra esterlina». No se publica el valor del metal.',
      en: 'KM# 195, Restrepo 453; 7.988 g, gold 0.916⅔; legend CINCO PESOS and the fineness. The catalog nickname is “libra esterlina.” The bullion value is not published.',
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
      'La guerra rompió ese orden. En 1811 la Junta de Cartagena acuñó cobres de medio y dos reales —ya con leyendas en castellano—; Nariño mandó en 1813 la moneda «de la china» para la Campaña del Sur; Bolívar, dueño de las cecas tras Boyacá, pidió el mismo tipo. Adolfo Meisel documenta también las piezas realistas de Popayán y Santa Marta y la caraqueña de baja ley. El Congreso de Cúcuta quiso volver a la ley española; Santander eludió la norma con emisiones antedatadas. En 1836 se unificó el régimen —granadino de plata y de oro—; en 1846–1847, bajo Mosquera, Lino de Pombo y Florentino González impusieron la ley 0,900 y el sistema decimal, y se amortizó la macuquina. En 1847 el granadino de diez reales pesó 25 g a 0,900, al paso del franco; la ley del 30 de junio de 1857 hizo de esa pieza el peso de cien centavos.',
      'La República de 1886 heredó el peso. Las cecas se paralizaron hacia 1890; las cocobolas de 50 centavos, con el perfil de Soledad Román, se encargaron en Nueva York. Reyes igualó cada peso de papel moneda a un centavo oro; en 1923 la misión Kemmerer dejó fundado el Banco de la República. El Banco, en su cronología, asumió la Casa de Bogotá en 1946 y compró la de Medellín en 1953. El 9 de abril de 1948 la casa resistió el Bogotazo. Un primer museo numismático abrió al público a comienzos de los años sesenta; el claustro de Calle 11 n.° 4-93 se recuperó en obras que culminaron en 1982, el mismo año en que Ibagué empezó a fabricar cospeles. En 1987 se trasladó allí la acuñación. La Ley 31 de 1993 incorporó la casa al banco emisor. En diciembre de 1996 abrió la exposición permanente. La familia de 2012 —biodiversidad y agua— ganó al año siguiente el premio a la mejor serie circulante. Esta vitrina reúne ese arco: de las macuquinas de Santa Fe al peso actual.',
    ],
    viewPiece: 'Ver la ficha',
    sourcesTitle: 'Fuentes',
    notaphilyLead: 'El papel moneda de estas mismas épocas se documenta en la vitrina de notafilia.',
    notaphilyLink: 'Colombia · Banca libre y Banco de la República',
    visualCatalogLead: 'El catálogo visual reúne los tipos con buscador, cuatro por fila, sin precios.',
    visualCatalogLink: 'Catálogo visual de monedas',
    coscojasLead: 'Las piezas de necesidad de 1902, latón de Bucaramanga hecho con casquillos de Palonegro, tienen página propia.',
    coscojasLink: 'Las coscojas de Santander',
    updatedLabel: 'Última actualización',
    updated: '2026-10-03',
    updatedDate: '3 de octubre de 2026',
    emptyHolding: 'Esta vitrina aún no tiene piezas de este periodo.',
    emptyCatalogLink: 'Catálogo visual de esa época',
    marksTitle: 'Marcas de ceca y de ensaye',
    marksIntro:
      'NR, P y BA son marcas de casa. JF y JJ quedan como iniciales de ensaye, sin nombre de persona en las fuentes de esta página. Medellín entra por el nombre de la ciudad.',
    marksCaption: 'Marcas que leen las fichas de esta vitrina',
    marksHeaders: ['Marca', 'Qué indica'],
    marksRows: [
      ['NR', 'Santa Fe, Nuevo Reino. En el 1 real de 1810 de esta vitrina.'],
      ['P', 'Popayán. En los escudos de 1801, 1806 y 1808.'],
      ['BA', 'Bogotá, Cundinamarca. En el 8 reales de 1821.'],
      ['JF', 'Iniciales de ensaye junto a NR, P y BA en esas fichas.'],
      ['JJ', 'Iniciales de ensaye del tipo de Santa Fe KM# 56.1, el que las fichas de Popayán separan del P–JF.'],
      ['Medellín', 'Nombre de la ciudad en el oro de esa casa, tal como lo citan Hernández y el catálogo de 1996.'],
      ['I', 'Ibagué. González White la anota en el 500 pesos de la fábrica; G, cuando la pieza se hizo en Alemania.'],
    ],
    numberingTitle: 'Números de catálogo',
    numberingBefore:
      'En las fichas de moneda el número que abre la referencia es el KM del Standard Catalog of World Coins. Al lado van Restrepo, Hernández (Cód.), Calicó, Friedberg o Numista cuando el tipo los tiene. Esos números nombran un tipo. El ejemplar es el disco fotografiado. En el papel, la misma diferencia entre un catálogo de tipos y un ejemplar de esta colección está en ',
    numberingLink: 'Notofilia frente a otros catálogos',
    numberingAfter: '.',
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
      'War broke that order. In 1811 Cartagena’s junta struck half-real and two-real coppers — already with Castilian legends; in 1813 Nariño ordered the china coin for the Southern Campaign; Bolívar, master of the mints after Boyacá, asked for the same type. Adolfo Meisel also records royalist issues from Popayán and Santa Marta and the low-fineness caraqueña. The Cúcuta Congress tried to restore Spanish fineness; Santander evaded the rule with antedated issues. In 1836 the regime was unified — granadino de plata and de oro; in 1846–1847, under Mosquera, Lino de Pombo and Florentino González imposed 0.900 fine metal and the decimal system, and the cob was withdrawn. In 1847 the ten-real granadino weighed 25 g at 0.900, in step with the franc; the law of 30 June 1857 made that piece the peso of one hundred centavos.',
      'The Republic of 1886 inherited the peso. The mints stalled about 1890; the 50-centavo cocobolas, with Soledad Román’s profile, were ordered in New York. Reyes set each paper-money peso equal to one gold centavo; in 1923 the Kemmerer mission left the Banco de la República founded. The Bank, on its own timeline, took over the Bogotá mint in 1946 and bought Medellín in 1953. On 9 April 1948 the house held in the Bogotazo. A first public numismatic museum opened in the early 1960s; restoration of the cloister at Calle 11 no. 4-93 finished in 1982, the same year Ibagué began making planchets. In 1987 striking moved there. Law 31 of 1993 folded the house into the issuing bank. The permanent exhibition opened in December 1996. The 2012 family — biodiversity and water — won the next year’s prize for best circulating series. This case gathers that arc: from the cobs of Santa Fe to the peso now in the pocket.',
    ],
    viewPiece: 'Open the piece',
    sourcesTitle: 'Sources',
    notaphilyLead: 'Paper money from the same periods is documented in the notaphily case.',
    notaphilyLink: 'Colombia · Free banking and the Banco de la República',
    visualCatalogLead: 'The visual catalog gathers the types with search, four to a row, and no prices.',
    visualCatalogLink: 'Visual coin catalog',
    coscojasLead: 'The 1902 necessity pieces, Bucaramanga brass made from Palonegro cartridge cases, have their own page.',
    coscojasLink: 'The coscojas of Santander',
    updatedLabel: 'Last updated',
    updated: '2026-10-03',
    updatedDate: 'October 3, 2026',
    emptyHolding: 'This case does not yet hold pieces from this period.',
    emptyCatalogLink: 'Visual catalog for this period',
    marksTitle: 'Mint marks and assayers',
    marksIntro:
      'NR, P, and BA are mint marks. JF and JJ stay as assayer initials, with no personal name in the sources for this page. Medellín enters by the city name.',
    marksCaption: 'Marks read on the records in this case',
    marksHeaders: ['Mark', 'What it indicates'],
    marksRows: [
      ['NR', 'Santa Fe, Nuevo Reino. On this case’s 1810 1 real.'],
      ['P', 'Popayán. On the 1801, 1806, and 1808 escudos.'],
      ['BA', 'Bogotá, Cundinamarca. On the 1821 8 reales.'],
      ['JF', 'Assayer initials beside NR, P, and BA on those records.'],
      ['JJ', 'Assayer initials of the Santa Fe type KM# 56.1, the one the Popayán records set apart from P–JF.'],
      ['Medellín', 'The city name on that house’s gold, as Hernández and the 1996 booklet cite it.'],
      ['I', 'Ibagué. González White notes it on the factory’s 500 pesos; G, when the piece was made in Germany.'],
    ],
    numberingTitle: 'Catalog numbers',
    numberingBefore:
      'On the coin records the number that opens the reference line is the KM number from the Standard Catalog of World Coins. Restrepo, Hernández (Cód.), Calicó, Friedberg, or Numista sit beside it when the type has them. Those numbers name a type. The example is the photographed disc. On paper, the same difference between a type catalog and an example in this collection is in ',
    numberingLink: 'Notofilia versus other catalogs',
    numberingAfter: '.',
  },
} as const;

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/colombia-numismatics/' : COLOMBIA_COINAGE_PATH;
}

const COINAGE_GLOSSARY_LINKS: { es: string; en: string; slug: string }[] = [
  { es: 'macuquinas', en: 'cobs', slug: 'macuquina-cob' },
  { es: 'macuquina', en: 'cob', slug: 'macuquina-cob' },
  { es: 'cordoncillo', en: 'reeded', slug: 'cordoncillo' },
  { es: 'cocobolas', en: 'cocobolas', slug: 'cocobola' },
  { es: 'coscojas', en: 'coscojas', slug: 'coscoja' },
  { es: 'cospeles', en: 'planchets', slug: 'cospel' },
  { es: 'cospel', en: 'planchet', slug: 'cospel' },
  { es: 'ensaye', en: 'assayer', slug: 'ensayador' },
];

export type CoinageTextPart = { text: string; href?: string };

/** First occurrence of each glossary term in a paragraph. Longer forms win. */
export function linkCoinageGlossary(text: string, locale: Locale): CoinageTextPart[] {
  const marks: { start: number; end: number; slug: string }[] = [];
  const used = new Set<string>();
  const occupied = (index: number) => marks.some((mark) => index >= mark.start && index < mark.end);
  for (const term of COINAGE_GLOSSARY_LINKS) {
    if (used.has(term.slug)) continue;
    const word = term[locale];
    const pattern = new RegExp(`(?<![\\p{L}])(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\p{L}])`, 'iu');
    const match = pattern.exec(text);
    if (!match || match.index === undefined || occupied(match.index)) continue;
    used.add(term.slug);
    marks.push({ start: match.index, end: match.index + match[1].length, slug: term.slug });
  }
  marks.sort((a, b) => a.start - b.start);
  const parts: CoinageTextPart[] = [];
  let cursor = 0;
  for (const mark of marks) {
    if (mark.start > cursor) parts.push({ text: text.slice(cursor, mark.start) });
    parts.push({
      text: text.slice(mark.start, mark.end),
      href: glossaryTermHref(mark.slug, locale),
    });
    cursor = mark.end;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts.length ? parts : [{ text }];
}
