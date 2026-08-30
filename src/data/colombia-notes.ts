import type { CatalogSource, LocalizedText } from './catalog.ts';
import type { ColombiaChapterId } from './colombia.ts';
import { COLOMBIA_PATH, colombiaChapters, seriesCopy } from './colombia.ts';
import { localizePath } from '../lib/locale-paths.ts';

export type ColombiaNoteId =
  | '5-pesos-banco-hipotecario-1881'
  | '5-pesos-rio-hacha-1883'
  | '1-peso-tolima-1901'
  | '1-peso-oro-1954'
  | '2-pesos-oro-1944'
  | '10-pesos-oro-1943'
  | '10-pesos-oro-1976'
  | '2000-pesos-oro-1983'
  | '2000-pesos-2008'
  | '20000-pesos-2017'
  | '1000-pesos-error-2008'
  | '1000-pesos-error-2011';

export type ColombiaNote = {
  id: ColombiaNoteId;
  chapterId: ColombiaChapterId;
  path: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  hero?: {
    src: string;
    width: number;
    height: number;
  };
  heroAlt?: LocalizedText;
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  history?: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
  /** Same-type holdings documented on this piece page (each with its own catalog block). */
  pieces?: ColombiaNotePiece[];
};

export type ColombiaNotePiece = {
  id: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  title: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const colombiaNotes: ColombiaNote[] = [
  {
    id: '5-pesos-banco-hipotecario-1881',
    chapterId: 'banca-libre',
    path: `${COLOMBIA_PATH}5-pesos-banco-hipotecario-1881/`,
    pick: 'P# S511p1 / S511p2',
    serial: 'Y 00000',
    signatures: {
      es: 'Sin firmas (pruebas de imprenta)',
      en: 'Unsigned (printer’s proofs)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Montaje de imprenta fechado febrero de 1883; serie Y. Fecha impresa en el anverso: Bogotá, 1.º de octubre de 1881. No se publica una tirada de circulación.',
      en: 'American Bank Note Company, New York. Printer’s mount dated February 1883; Series Y. Date printed on the face: Bogotá, 1 October 1881. No circulating printage is published.',
    },
    images: {
      composite: '/images/catalog/colombia/5-pesos-banco-hipotecario-1881-composite.jpg',
      front: '/images/catalog/colombia/5-pesos-banco-hipotecario-1881-front.jpg',
      back: '/images/catalog/colombia/5-pesos-banco-hipotecario-1881-back.jpg',
    },
    hero: {
      src: '/images/catalog/colombia/hero-banco-hipotecario.jpg',
      width: 1024,
      height: 436,
    },
    heroAlt: {
      es: 'Panorámica ilustrada vintage de Bogotá sobre pergamino, con el edificio neoclásico del Banco Hipotecario rotulado 1910 en la obra y el título Bogotá',
      en: 'Vintage illustrated panoramic of Bogotá on parchment, with the neoclassical Banco Hipotecario building captioned 1910 in the artwork and the title Bogotá',
    },
    title: {
      es: '5 pesos · Banco Hipotecario · 1881',
      en: '5 pesos · Banco Hipotecario · 1881',
    },
    kicker: {
      es: 'Colombia · Banca libre · Pruebas ABNC',
      en: 'Colombia · Free banking · ABNC proofs',
    },
    lead: {
      es: 'Par de pruebas de la American Bank Note Company: anverso S511p1 y reverso S511p2, ambos encapsulados PMG 61 Uncirculated. Serie Y, serial 00000.',
      en: 'A pair of American Bank Note Company proofs: face S511p1 and back S511p2, both slabbed PMG 61 Uncirculated. Series Y, serial 00000.',
    },
    description: {
      es: 'El Banco Hipotecario se estableció en Bogotá el 1.º de octubre de 1881 —la misma fecha que lleva el anverso—. EL TIEMPO sitúa ahí la fundación y una vigencia de diez años desde el registro de las escrituras. Hernández (8.ª ed., 2023) sitúa la fundación en los años 1880 y la liquidación antes de 1914, y numera este cinco pesos ABNC —mujer sentada a la izquierda, caballos a la derecha— como Cód. 1134. En junio de 1882 el Poder Ejecutivo del Estado aprobó los estatutos y lo declaró en posesión de las concesiones de las leyes de 14 de enero de 1873 y 17 de noviembre de 1875 a los bancos hipotecarios; el texto se publicó en julio de 1882. El Standard Catalog of World Paper Money — Specialized Issues, vía el índice de Numismondo, numera la serie S511–S515: cinco a cien pesos de 1881. Esta ficha es el cinco pesos. El anverso, en negro sobre fondo ocre, promete pagar al portador a la vista cinco pesos; a la izquierda, una alegoría agrícola sentada junto a gavillas; a la derecha, un labrador con arado y caballos; arriba, un óvalo con campo y caserío; abajo, un 5 en medallón. El serial rojo es 00000; tres perforaciones de cancelación cortan el margen inferior. El montaje de Nueva York lleva «February 1883» y, en vertical, «Serie Y». Las casillas del gerente y del presidente del consejo están en blanco. El reverso, en sepia, es un marco de guilloches con «EL BANCO» y «HIPOTECARIO» y las cifras 5 a ambos flancos. No hay firmas: son pruebas de plancha, no un ejemplar puesto en circulación. No debe confundirse con el Banco Hipotecario de la Mutualidad (S516 y siguientes) ni con el del Pacífico. Esta ficha reúne las dos cápsulas PMG de la colección —anverso y reverso por separado—.',
      en: 'The Banco Hipotecario was established in Bogotá on 1 October 1881 — the same date printed on the face. EL TIEMPO places the founding there, with a ten-year term from the registration of the deeds. Hernández (8th ed., 2023) places the founding in the 1880s and liquidation before 1914, and numbers this ABNC five-peso — seated woman at left, horses at right — as Cód. 1134. In June 1882 the State Executive approved the statutes and declared the bank in possession of the concessions that the laws of 14 January 1873 and 17 November 1875 granted to mortgage banks; the text was published in July 1882. The Standard Catalog of World Paper Money — Specialized Issues, through Numismondo’s index, numbers the series S511–S515: five to one hundred pesos of 1881. This record is the five-peso. The face, black on an ochre underprint, promises to pay the bearer on sight five pesos; at left, a seated agricultural allegory beside sheaves; at right, a ploughman with horses; above, an oval of field and homestead; below, a 5 in a medallion. The red serial is 00000; three cancellation punches cut the lower margin. The New York mount reads “February 1883” and, vertically, “Serie Y.” The spaces for the manager and the president of the board are blank. The sepia back is a guilloche frame with “EL BANCO” and “HIPOTECARIO” and the figures 5 at each flank. There are no signatures: these are plate proofs, not a note placed in circulation. It should not be confused with the Banco Hipotecario de la Mutualidad (S516 and later) or with the Pacífico bank. This record gathers the collection’s two PMG holders — face and back, separately slabbed.',
    },
    history: {
      es: 'En la banca libre, el gobierno autorizó bancos privados que emitían billetes respaldados en metálico. El Hipotecario de Bogotá nació el 1.º de octubre de 1881, con diez años de vigencia desde el registro de las escrituras; Hernández registra la liquidación antes de 1914. Fue un banco de propiedad raíz: crédito hipotecario a terratenientes, comerciantes y élite urbana de la capital. Las leyes de 14 de enero de 1873 y 17 de noviembre de 1875 otorgaban concesiones a esos bancos —exención de contribución, ejecuciones privilegiadas—; en junio de 1882 el Poder Ejecutivo del Estado aprobó los estatutos y lo declaró en posesión de ellas. La serie de 1881 promete pagar al portador a la vista, en Bogotá. Numismondo numera S511–S515, de cinco a cien pesos; la colección Eldorado, en Stack’s Bowers (enero de 2018), ofreció pruebas de archivo del 5, 10, 50 y 100 pesos (S511p, S512p, S514p y S515p). Esta ficha es el cinco pesos. La Regeneración de Rafael Núñez y el Banco Nacional, establecido en 1881, centralizaron la emisión: hacia 1886–1887 el curso forzoso y las leyes que monopolizaron el papel quitaron a los particulares el derecho de imprimir. Sin esa facultad, y obligados a recibir el papel nacional en depreciación, los bancos privados de Bogotá —incluido el Hipotecario— perdieron una fuente de rentabilidad y de independencia operativa.',
      en: 'Under free banking the government authorized private banks to issue notes backed by metal. Bogotá’s Banco Hipotecario was established on 1 October 1881, with a ten-year term from the registration of the deeds; Hernández records liquidation before 1914. It was a bank of propiedad raíz: mortgage credit to landowners, merchants, and the capital’s urban elite. The laws of 14 January 1873 and 17 November 1875 granted concessions to those banks — tax exemption, privileged foreclosure; in June 1882 the State Executive approved the statutes and declared the bank in possession of them. The 1881 series promises to pay the bearer on sight, in Bogotá. Numismondo numbers S511–S515, five to one hundred pesos; the Eldorado collection, at Stack’s Bowers (January 2018), offered archival proofs of the 5, 10, 50, and 100 pesos (S511p, S512p, S514p, and S515p). This record is the five-peso. Rafael Núñez’s Regeneración and the Banco Nacional, established in 1881, centralized issue: around 1886–1887 forced legal tender and laws that monopolized paper stripped private banks of the right to print. Without that faculty, and forced to take depreciating national paper, Bogotá’s private banks — including the Hipotecario — lost a source of profit and operational independence.',
    },
    frontCaption: {
      es: 'Prueba de anverso, Pick S511p1, encapsulada PMG 61 Uncirculated: alegorías agrícolas, serial Y 00000 y montaje fechado febrero de 1883.',
      en: 'Face proof, Pick S511p1, slabbed PMG 61 Uncirculated: agricultural allegories, serial Y 00000, and a mount dated February 1883.',
    },
    backCaption: {
      es: 'Prueba de reverso, Pick S511p2, encapsulada PMG 61 Uncirculated: marco ornamental en sepia, cifras 5 y leyendas EL BANCO / HIPOTECARIO.',
      en: 'Back proof, Pick S511p2, slabbed PMG 61 Uncirculated: a sepia ornamental frame, the figures 5, and the legends EL BANCO / HIPOTECARIO.',
    },
    scarcity: {
      es: 'Numismondo registra S511–S515 como la serie de 1881 del Banco Hipotecario y marca las imágenes como pendientes. El mercado de este banco bogotano ve sobre todo planchas de Nueva York: pruebas montadas, perforadas y con seriales de ceros, a veces pares sin cortar. La colección Eldorado ofreció pruebas de archivo del 5 al 100 pesos. Los supervivientes —pruebas, especímenes y esos pares— son piezas de vitrina en la notafilia colombiana. Esta ficha no inventa una tirada de circulación.',
      en: 'Numismondo records S511–S515 as the 1881 Banco Hipotecario series and flags the images as needed. The market for this Bogotá bank mostly sees New York plates: mounted, punch-cancelled proofs with zero serials, sometimes uncut pairs. The Eldorado collection offered archival proofs from 5 to 100 pesos. Survivors — proofs, specimens, and those pairs — are showcase pieces in Colombian notaphily. This record does not invent a circulating printage.',
    },
    population: {
      es: 'Las dos piezas de esta ficha están encapsuladas por PMG como 61 Uncirculated: el anverso S511p1 y el reverso S511p2. No se ha verificado de forma independiente un censo de población para estos números de cápsula.',
      en: 'The two pieces in this record are slabbed by PMG as 61 Uncirculated: the face S511p1 and the back S511p2. A population census for these holder numbers has not been independently verified.',
    },
    grade: {
      es: 'Anverso PMG 61 Uncirculated · Reverso PMG 61 Uncirculated',
      en: 'Face PMG 61 Uncirculated · Back PMG 61 Uncirculated',
    },
    sources: [
      {
        href: 'http://www.numismondo.net/pm/col/',
        es: 'Numismondo — Índice de papel moneda de Colombia, S511–S515',
        en: 'Numismondo — Colombia paper-money index, S511–S515',
        note: {
          es: 'Banco Hipotecario, 5 a 100 pesos, 1881; Specialized Issues P.S511–P.S515.',
          en: 'Banco Hipotecario, 5 to 100 pesos, 1881; Specialized Issues P.S511–P.S515.',
        },
      },
      {
        href: 'https://www.eltiempo.com/cultura/musica-y-libros/coleccion-de-billetes-el-tiempo-entrega-enero-29-de-2020-456432',
        es: 'EL TIEMPO — Historia del Banco Hipotecario (2020)',
        en: 'EL TIEMPO — History of the Banco Hipotecario (2020)',
        note: {
          es: 'Fundación en Bogotá el 1.º de octubre de 1881; vigencia de diez años desde el registro de las escrituras.',
          en: 'Founded in Bogotá on 1 October 1881; a ten-year term from the registration of the deeds.',
        },
      },
      {
        href: 'https://www.cervantesvirtual.com/obra/banco-hipotecario-julio-de-1882-851759/',
        es: 'Cervantes Virtual — Banco hipotecario, julio de 1882',
        en: 'Cervantes Virtual — Banco hipotecario, July 1882',
        note: {
          es: 'Resolución del 19 de junio de 1882: estatutos aprobados y concesiones de las leyes de 1873 y 1875.',
          en: 'Resolution of 19 June 1882: statutes approved and the concessions of the 1873 and 1875 laws.',
        },
      },
      {
        href: 'https://doi.org/10.19053/16923936.v16.n32.2018.9766',
        es: 'Pedro José Lesmes — La banca privada, 1870–1923 (Derecho y Realidad, 2018)',
        en: 'Pedro José Lesmes — Private banking, 1870–1923 (Derecho y Realidad, 2018)',
        note: {
          es: 'Banca libre, emisión privada y el cierre bajo la Regeneración; el artículo trata también el crédito y la propiedad raíz.',
          en: 'Free banking, private issue, and the close under the Regeneración; the article also treats credit and landed property.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/2343/category/62846?v=1',
        es: 'Stack’s Bowers — Colección Eldorado, enero de 2018 (NumisBids)',
        en: 'Stack’s Bowers — Eldorado Collection, January 2018 (NumisBids)',
        note: {
          es: 'Pruebas de archivo del Banco Hipotecario, 1.º de octubre de 1881: S511p, S512p, S514p y S515p (5, 10, 50 y 100 pesos).',
          en: 'Archival proofs of the Banco Hipotecario, 1 October 1881: S511p, S512p, S514p, and S515p (5, 10, 50, and 100 pesos).',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023: Cód. 1134, cinco pesos ABNC (mujer sentada / caballos); fundación en los años 1880 y liquidación antes de 1914. Distinto del Hipotecario de la Mutualidad (1914) y del Pacífico.',
          en: '8th ed. 2023: Cód. 1134, ABNC five pesos (seated woman / horses); founded in the 1880s, liquidated before 1914. Distinct from the Mutualidad mortgage bank (1914) and the Pacífico.',
        },
      },
    ],
  },
  {
    id: '5-pesos-rio-hacha-1883',
    chapterId: 'banca-libre',
    path: `${COLOMBIA_PATH}5-pesos-rio-hacha-1883/`,
    pick: 'P# S819p1 / S819p2',
    serial: 'C 00000',
    signatures: {
      es: 'Sin firmas (pruebas de imprenta)',
      en: 'Unsigned (printer’s proofs)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Montaje de imprenta fechado febrero de 1883; serie C. No se publica una tirada de circulación.',
      en: 'American Bank Note Company, New York. Printer’s mount dated February 1883; Series C. No circulating printage is published.',
    },
    images: {
      composite: '/images/catalog/colombia/5-pesos-rio-hacha-1883-composite.jpg',
      front: '/images/catalog/colombia/5-pesos-rio-hacha-1883-front.jpg',
      back: '/images/catalog/colombia/5-pesos-rio-hacha-1883-back.jpg',
    },
    hero: {
      src: '/images/catalog/colombia/hero-rio-hacha.jpg',
      width: 2128,
      height: 912,
    },
    heroAlt: {
      es: 'Mapa ilustrado vintage de Riohacha sobre pergamino, con la catedral, el muelle, el mar Caribe, La Guajira, un pasaporte y el título Riohacha',
      en: 'Vintage illustrated map of Riohacha on parchment, with the cathedral, the pier, the Caribbean Sea, La Guajira, a passport, and the title Riohacha',
    },
    title: {
      es: '5 pesos · Banco de Rio Hacha · 1883',
      en: '5 pesos · Banco de Rio Hacha · 1883',
    },
    kicker: {
      es: 'Colombia · Banca libre · Pruebas ABNC',
      en: 'Colombia · Free banking · ABNC proofs',
    },
    lead: {
      es: 'Par de pruebas de la American Bank Note Company: anverso S819p1, encapsulado PMG 64 Choice Uncirculated EPQ; reverso S819p2, PMG 62 Uncirculated. Serie C, serial 00000.',
      en: 'A pair of American Bank Note Company proofs: face S819p1, slabbed PMG 64 Choice Uncirculated EPQ; back S819p2, PMG 62 Uncirculated. Series C, serial 00000.',
    },
    description: {
      es: 'El Banco de Rio Hacha —hoy Riohacha, en la Guajira— dejó estatutos impresos en 1882, en la Imprenta de Padilla. Al año siguiente encargó a la American Bank Note Company de Nueva York el papel de cinco pesos. Hernández (8.ª ed., 2023) numera el cinco pesos de circulación del 1.º de enero de 1883 —escudo a la izquierda, Bolívar al centro, negro sobre café— como Cód. 1109; esta ficha es el par de pruebas ABNC, no esa fila de caja. El Standard Catalog of World Paper Money — Specialized Issues lo numera S819p: negro sobre fondo pardo, escudo a la izquierda, Simón Bolívar al centro y, a la derecha, una alegoría femenina apoyada en una rueda. La serie es C. El montaje de estas pruebas lleva la fecha «February 1883». El anverso promete pagar en la oficina, a la vista y al portador, cinco pesos en moneda corriente; el serial rojo es 00000 y tres perforaciones de cancelación cortan el margen inferior. El reverso, en sepia, es un marco de roleos con el 5 en ambos flancos y el pie «AMERICAN BANK NOTE COMPANY, NEW YORK». No hay firmas: son pruebas de plancha, no un ejemplar puesto en circulación. Esta ficha reúne las dos cápsulas PMG de la colección —anverso y reverso por separado—.',
      en: 'The Banco de Rio Hacha — today’s Riohacha, on the Guajira — left printed statutes in 1882, from the Imprenta de Padilla. The next year it ordered five-peso paper from the American Bank Note Company in New York. Hernández (8th ed., 2023) numbers the circulating five-peso of 1 January 1883 — arms at left, Bolívar at center, black on brown — as Cód. 1109; this record is the ABNC proof pair, not that till row. The Standard Catalog of World Paper Money — Specialized Issues numbers it S819p: black on a brown underprint, arms at left, Simón Bolívar at center, and at right a female allegory leaning on a wheel. The series is C. The mount of these proofs is dated “February 1883.” The face promises to pay at the office, on sight and to the bearer, five pesos in current money; the red serial is 00000 and three cancellation punches cut the lower margin. The sepia back is a scrollwork frame with a 5 at each flank and the imprint “AMERICAN BANK NOTE COMPANY, NEW YORK.” There are no signatures: these are plate proofs, not a note placed in circulation. This record gathers the collection’s two PMG holders — face and back, separately slabbed.',
    },
    history: {
      es: 'Entre 1870 y finales de los ochenta Colombia no tenía un único banco central: era la banca libre. El gobierno autorizó bancos privados regionales que emitían billetes respaldados en sus propias reservas de oro y plata. En esa ventana, Riohacha era un puerto de frontera en la Guajira, nudo de comerciantes con el Caribe, Europa y el interior. El transporte de especie metálica era peligroso; el crédito local lo evitaba. Los estatutos de 1882, impresos en la Imprenta de Padilla, fijan la constitución del banco por comerciantes locales y extranjeros. Adolfo Meisel sitúa el inicio de operaciones en 1885, con un capital autorizado de 150.000 pesos, y la liquidación en 1888. Los catálogos de notafilia colombiana —Hernández, y las series especializadas— registran una emisión principal de 1, 5, 10, 20 y 50 pesos, y un fraccionario de 20 centavos, serie Y, fechado hacia diciembre de 1885. Este cinco pesos de 1883 lleva pie de la American Bank Note Company de Nueva York; de otros valores no se publica aquí la imprenta. La Regeneración de Rafael Núñez centralizó el poder político y económico. El Banco Nacional se estableció en 1881; hacia 1886–1887 el curso forzoso y las leyes que monopolizaron la emisión quitaron a los bancos particulares el derecho de imprimir. Sin esa facultad, y obligados a recibir el papel nacional en depreciación, la mayoría de los emisores regionales —incluido el de Riohacha— se liquidaron. Cerró así, en pocos años, la independencia financiera de este puerto del Caribe colombiano.',
      en: 'From 1870 into the late 1880s Colombia had no single central bank: that was free banking. The government authorized private regional banks to issue notes backed by their own gold and silver reserves. In that window Riohacha was a frontier port on the Guajira, a merchants’ hinge with the Caribbean, Europe, and the interior. Moving metallic specie was dangerous; local credit avoided it. The 1882 statutes, printed at the Imprenta de Padilla, fix the bank’s constitution by local and foreign merchants. Adolfo Meisel places the start of operations in 1885, with an authorized capital of 150,000 pesos, and liquidation in 1888. Colombian notaphily catalogs — Hernández, and the specialized series — record a main issue of 1, 5, 10, 20, and 50 pesos, and a fractional 20-centavo note, Series Y, dated around December 1885. This 1883 five-peso carries the American Bank Note Company imprint from New York; printers for the other values are not published here. Rafael Núñez’s Regeneración centralized political and economic power. The Banco Nacional was established in 1881; around 1886–1887 forced legal tender and laws that monopolized issue stripped private banks of the right to print. Without that faculty, and forced to take depreciating national paper, most regional issuers — including Riohacha’s — went into liquidation. In a few years the financial independence of this Colombian Caribbean port was over.',
    },
    frontCaption: {
      es: 'Prueba de anverso, Pick S819p1, encapsulada PMG 64 Choice Uncirculated EPQ: Bolívar, escudo, alegoría de la industria y serial C 00000.',
      en: 'Face proof, Pick S819p1, slabbed PMG 64 Choice Uncirculated EPQ: Bolívar, the arms, an allegory of industry, and serial C 00000.',
    },
    backCaption: {
      es: 'Prueba de reverso, Pick S819p2, encapsulada PMG 62 Uncirculated: marco ornamental en sepia, cifras 5 y pie de la American Bank Note Company.',
      en: 'Back proof, Pick S819p2, slabbed PMG 62 Uncirculated: a sepia ornamental frame, the figures 5, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'RealBanknotes describe el tipo S819p como prueba de imprenta de 1883, no como emisión de caja. Un lote de la colección Eldorado, citado por PMG, era también una prueba S819p. Los billetes de circulación recorrieron una frontera accidentada y, al liquidarse el banco, se retiraron: los supervivientes son de extrema rareza y de los más buscados de la notafilia colombiana. El mercado ve sobre todo planchas de Nueva York, a menudo montadas, perforadas y con seriales de ceros. Esta ficha no inventa una tirada.',
      en: 'RealBanknotes describes type S819p as an 1883 printer’s proof, not a till issue. A lot from the Eldorado collection, cited by PMG, was likewise an S819p proof. Circulating notes traveled a rugged frontier and, when the bank was wound up, were recalled: survivors are extremely rare and among the most sought-after pieces in Colombian notaphily. The market mostly sees New York plates, often mounted, punch-cancelled, and with zero serials. This record does not invent a printage.',
    },
    population: {
      es: 'Las dos piezas de esta ficha están encapsuladas por PMG: el anverso como 64 Choice Uncirculated EPQ (S819p1) y el reverso como 62 Uncirculated (S819p2). No se ha verificado de forma independiente un censo de población para estos números de cápsula.',
      en: 'The two pieces in this record are slabbed by PMG: the face as 64 Choice Uncirculated EPQ (S819p1) and the back as 62 Uncirculated (S819p2). A population census for these holder numbers has not been independently verified.',
    },
    grade: {
      es: 'Anverso PMG 64 Choice Uncirculated EPQ · Reverso PMG 62 Uncirculated',
      en: 'Face PMG 64 Choice Uncirculated EPQ · Back PMG 62 Uncirculated',
    },
    sources: [
      {
        href: 'https://www.realbanknotes.com/banknote/73133-Colombia-pS819p-5-Pesos-from-1883',
        es: 'RealBanknotes — Colombia pS819p, 5 pesos de 1883',
        en: 'RealBanknotes — Colombia pS819p, 5 pesos of 1883',
        note: {
          es: 'Prueba ABNC: negro sobre fondo pardo; escudo, Bolívar y mujer con rueda; serie C.',
          en: 'ABNC proof: black on brown; arms, Bolívar, and a woman with a wheel; Series C.',
        },
      },
      {
        href: 'https://www.pmgnotes.com/news/article/6302/January-Auction-to-Feature-PMG-Graded-Notes-From-the-Eldorado-Collection/',
        es: 'PMG — Prueba S819p del Banco de Rio Hacha en la colección Eldorado',
        en: 'PMG — Banco de Rio Hacha S819p proof in the Eldorado collection',
        note: {
          es: 'Documenta el tipo de 5 pesos de 1883 como prueba encapsulada.',
          en: 'Records the 1883 5-peso type as a slabbed proof.',
        },
      },
      {
        href: 'https://biblioteca.academiahistoria.org.co/pmb/opac_css/index.php?id=22568&lvl=notice_display&seule=1',
        es: 'Academia Colombiana de Historia — Estatutos del Banco de Riohacha (1882)',
        en: 'Academia Colombiana de Historia — Statutes of the Banco de Riohacha (1882)',
        note: {
          es: '32 páginas, Riohacha, Imprenta de Padilla: el banco existía el año anterior a estas planchas.',
          en: '32 pages, Riohacha, Imprenta de Padilla: the bank existed the year before these plates.',
        },
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/b82e02f1-24fd-41fa-bc0f-bbe70a0d1671/download',
        es: 'Adolfo Meisel Roca — Los bancos comerciales en la era de la banca libre, 1871–1923',
        en: 'Adolfo Meisel Roca — Commercial banks in the free-banking era, 1871–1923',
        note: {
          es: 'Cuadro 6, Costa Atlántica: Banco de Riohacha, fundación 1885, capital 150.000 pesos, liquidación 1888.',
          en: 'Table 6, Atlantic coast: Banco de Riohacha, founded 1885, capital 150,000 pesos, liquidated 1888.',
        },
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COLS0819.htm',
        es: 'Bank Note Museum — Colombia S819, 5 pesos del Banco de Rio Hacha',
        en: 'Bank Note Museum — Colombia S819, Banco de Rio Hacha 5 pesos',
        note: {
          es: 'Fecha 1.º de enero de 1883; American Bank Note Company, Nueva York; anota que solo se conocen especímenes.',
          en: 'Date 1 January 1883; American Bank Note Company, New York; notes that only specimens are known.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023: banco fundado en 1885 y liquidado en 1888; Cód. 1109 es el cinco pesos de circulación del 1.º de enero de 1883 (Bolívar al centro, ABNC). Esta ficha es el par de pruebas S819p.',
          en: '8th ed. 2023: bank founded in 1885 and liquidated in 1888; Cód. 1109 is the circulating five-peso of 1 January 1883 (Bolívar at center, ABNC). This record is the S819p proof pair.',
        },
      },
    ],
  },
  {
    id: '1-peso-tolima-1901',
    chapterId: 'banco-nacional',
    path: `${COLOMBIA_PATH}1-peso-tolima-1901/`,
    pick: 'Cód. 1242',
    serial: 'N.º 060.416',
    signatures: {
      es: 'Sin firmas impresas',
      en: 'No printed signatures',
    },
    printed: {
      es: 'Tipografía local, Departamento del Tolima. Fecha impresa: Ibagué, septiembre de 1901. Serie D. Serial impreso N.º 060.416 (060416 normalizado; se conservan los ceros a la izquierda). No se publica una tirada: no es un tipo del Banco de la República (1923–2019) y las tablas BanRep de producción anual de billetes empiezan en 1960.',
      en: 'Local typesetting, Departamento del Tolima. Printed date: Ibagué, September 1901. Series D. Printed serial N.º 060.416 (normalized 060416; leading zeros are kept). No printage is published: this is not a Banco de la República type (1923–2019), and BanRep’s annual banknote production tables begin in 1960.',
    },
    images: {
      composite: '/images/catalog/colombia/1-peso-tolima-1901-060416-composite.jpg',
      front: '/images/catalog/colombia/1-peso-tolima-1901-060416-front.jpg',
      back: '/images/catalog/colombia/1-peso-tolima-1901-060416-back.jpg',
    },
    title: {
      es: '1 peso · Departamento del Tolima · 1901',
      en: '1 peso · Departamento del Tolima · 1901',
    },
    kicker: {
      es: 'Colombia · Banco Nacional · Cédula departamental',
      en: 'Colombia · Banco Nacional · Departmental cédula',
    },
    lead: {
      es: 'Cédula representativa de un peso del Departamento del Tolima: República de Colombia, Ibagué, septiembre de 1901, Serie D, serial N.º 060.416. Hernández (8.ª ed., 2023) numera el un peso tipográfico del departamento —solo texto en el anverso— como Cód. 1242. Esta ficha es el ejemplar 060416, en funda, sin encapsular.',
      en: 'A one-peso cédula representativa of the Departamento del Tolima: Republic of Colombia, Ibagué, September 1901, Series D, serial N.º 060.416. Hernández (8th ed., 2023) numbers the department’s typeset one-peso — text only on the face — as Cód. 1242. This record is serial 060416, in a sleeve, unslabbed.',
    },
    description: {
      es: 'En la Guerra de los Mil Días (1899–1902) las tesorerías departamentales emitieron papel propio cuando el enlace con Bogotá se cortó. El Boletín Numismático 114 de José Arcelio Gómez (15 de agosto de 2012) sitúa las emisiones del Tolima entre 1900 y 1902, impresas en papeles comunes y a una sola tinta: diez, veinte y cincuenta centavos, y un peso. Hernández (8.ª ed., 2023) lista el papel tipográfico del departamento como Cód. 1239–1243; el un peso —«solo texto en el anverso»— es Cód. 1242. Las filas vecinas de esa tabla llevan fechas de julio de 1900; la fecha impresa en esta pieza es «Ibagué, Septiembre de 1901.» No se asigna aquí un Pick único: Gómez cita para el un peso del Tolima los números 1169, 1173, 1181 y 1191, sin emparejar esta Serie D ni este serial a uno de ellos. Numismondo agrupa las emisiones departamentales bajo P.S1050 y siguientes, con imágenes pendientes. Numista no lista un billete del Estado o Departamento del Tolima —solo un ensayo de 2 centavos de 1890 (N# 281840)—. El extracto de Heritage de esta colección no registra lotes del Tolima. El anverso, en negro sobre papel tostado, lee «REPUBLICA DE COLOMBIA» y «DEPARTAMENTO DEL TOLIMA», el tipo «Cédula representativa.», el valor «VALE UN PESO» y, abajo, «Ibagué, Septiembre de 1901.» El serial «N.º 060.416» va arriba a la izquierda; «Serie D», arriba a la derecha. El marco ornamental repite «UNPESO». Un sello circular rojizo, ya pálido, cubre en parte el encabezado. El reverso es papel tan envejecido con un gran sello circular rojo, manchas, pliegues y un manuscrito tenue a la izquierda. No hay firmas impresas ni pie de imprenta. No debe confundirse con el Banco del Tolima de Neiva (hacia 1881–1882), ni con las cédulas hipotecarias de bancos privados, ni con el un peso de tesorería de Antioquia (Pick S1065 y afines). Esta ficha reúne las dos caras de la misma pieza, en funda transparente, muy circulada, sin encapsular.',
      en: 'In the Thousand Days’ War (1899–1902) departmental treasuries issued their own paper when the link to Bogotá failed. José Arcelio Gómez’s Boletín Numismático 114 (15 August 2012) places Tolima’s issues between 1900 and 1902, printed on ordinary papers in a single ink: ten, twenty, and fifty centavos, and one peso. Hernández (8th ed., 2023) lists the department’s typeset paper as Cód. 1239–1243; the one-peso — “text only on the face” — is Cód. 1242. Neighbouring rows in that table carry July 1900 dates; the date printed on this piece is “Ibagué, Septiembre de 1901.” No unique Pick is assigned here: Gómez cites 1169, 1173, 1181, and 1191 for Tolima one-peso issues, without matching this Series D or this serial to one of them. Numismondo groups departmental issues under P.S1050 and later, with images still needed. Numista lists no banknote for the State or Departamento del Tolima — only an 1890 2-centavo pattern (N# 281840). This collection’s Heritage extract records no Tolima lots. The face, black on browned paper, reads “REPUBLICA DE COLOMBIA” and “DEPARTAMENTO DEL TOLIMA,” the type “Cédula representativa.,” the value “VALE UN PESO,” and, below, “Ibagué, Septiembre de 1901.” Serial “N.º 060.416” sits at upper left; “Serie D” at upper right. The ornamental frame repeats “UNPESO.” A faded reddish circular stamp partly covers the heading. The back is aged tan paper with a large bright-red circular seal, stains, fold lines, and faint manuscript at left. There are no printed signatures and no printer’s imprint. It should not be confused with the Banco del Tolima of Neiva (about 1881–1882), with private-bank mortgage cédulas, or with Antioquia treasury one-peso notes (Pick S1065 and kin). This record gathers both sides of the same heavily circulated note, in a clear sleeve, unslabbed.',
    },
    history: {
      es: 'Tras liquidarse el Banco Nacional (Ley 70 de 1894; cierre que Astrid Romero sitúa el 1.º de enero de 1896), la Guerra de los Mil Días volvió a llenar el país de papel sin respaldo. El gobierno y los mandos regionales imprimieron; el Museo Casa de Moneda registra billetes del Gobierno Provisional de Ocaña (1900) y resellos del Nacional sobre papel privado. El Tolima, aislado en el centro del país, recurrió a su tesorería: Gómez describe esas cédulas como emisiones locales, raras, de una sola tinta. En 1909 la Junta de Conversión tasó 100 pesos de papel por 1 peso oro. Esta pieza —un peso, Serie D, serial 060416, Ibagué, septiembre de 1901— es un superviviente de esa inflación, no un billete del Banco de la República ni de la banca libre de los años 1870–1880.',
      en: 'After the Banco Nacional was wound up (Law 70 of 1894; a closure Astrid Romero places on 1 January 1896), the Thousand Days’ War again filled the country with unbacked paper. The government and regional commanders printed; the Casa de Moneda Museum records Gobierno Provisional notes from Ocaña (1900) and Nacional overstamps on private paper. Tolima, isolated in the centre of the country, turned to its treasury: Gómez describes those cédulas as local, scarce, single-ink issues. In 1909 the Conversion Board rated 100 paper pesos to 1 gold peso. This piece — one peso, Series D, serial 060416, Ibagué, September 1901 — is a survivor of that inflation, not a Banco de la República note and not free-banking paper of the 1870s–1880s.',
    },
    frontCaption: {
      es: 'Anverso de la cédula representativa de un peso, Cód. 1242: República de Colombia, Departamento del Tolima, VALE UN PESO, Ibagué septiembre de 1901, N.º 060.416, Serie D.',
      en: 'Face of the one-peso cédula representativa, Cód. 1242: Republic of Colombia, Departamento del Tolima, VALE UN PESO, Ibagué September 1901, N.º 060.416, Series D.',
    },
    backCaption: {
      es: 'Reverso de la misma pieza: papel tostado, sello circular rojo, manchas, pliegues y manuscrito tenue; en funda, sin encapsular.',
      en: 'Back of the same piece: browned paper, a red circular seal, stains, folds, and faint manuscript; in a sleeve, unslabbed.',
    },
    scarcity: {
      es: 'Gómez (2012) llama bastante raros a los ejemplares del Tolima de 1900–1902 y no publica tiradas. Hernández numera el un peso tipográfico como Cód. 1242; no se reproducen aquí columnas de precios ni láminas. Numista no tiene ficha de billete para este emisor. El extracto de Heritage no aporta lotes comparables del Tolima. Esta ficha no inventa una tirada.',
      en: 'Gómez (2012) calls Tolima’s 1900–1902 pieces quite rare and publishes no printages. Hernández numbers the typeset one-peso as Cód. 1242; price columns and plates are not republished here. Numista has no banknote record for this issuer. The Heritage extract supplies no Tolima comparables. This record does not invent a printage.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 060416. La pieza no está encapsulada.',
      en: 'A PMG or PCGS census for serial 060416 has not been independently verified. The note is unslabbed.',
    },
    grade: {
      es: 'Sin encapsular · en funda · muy circulada (manchas, pliegues, foxing)',
      en: 'Unslabbed · in a sleeve · heavily circulated (stains, folds, foxing)',
    },
    sources: [
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023: Departamento del Tolima, Cód. 1239–1243; el un peso tipográfico («solo texto en el anverso») es Cód. 1242. No se publican columnas de precios ni láminas.',
          en: '8th ed. 2023: Departamento del Tolima, Cód. 1239–1243; the typeset one-peso (“text only on the face”) is Cód. 1242. Price columns and plates are not published here.',
        },
      },
      {
        href: 'https://www.mascoleccionismo.com/publicaciones/JAG/JAG-114.pdf',
        es: 'José Arcelio Gómez — Boletín Numismático 114 (15 de agosto de 2012)',
        en: 'José Arcelio Gómez — Boletín Numismático 114 (15 August 2012)',
        note: {
          es: 'Emisiones departamentales del Tolima, 1900–1902: 10, 20 y 50 centavos y un peso (cita Pick 1169, 1173, 1181 y 1191 para el peso). Impresión local, una tinta. No se asigna aquí uno de esos números a esta Serie D.',
          en: 'Tolima departmental issues, 1900–1902: 10, 20, and 50 centavos and one peso (cites Pick 1169, 1173, 1181, and 1191 for the peso). Local printing, one ink. None of those numbers is assigned here to this Series D.',
        },
      },
      {
        href: 'http://www.numismondo.net/pm/col/',
        es: 'Numismondo — Índice de papel moneda de Colombia, emisiones departamentales',
        en: 'Numismondo — Colombia paper-money index, departmental issues',
        note: {
          es: 'P.S1050 y siguientes (1893–1900), imágenes pendientes. No hay una ficha ilustrada del Tolima 1901.',
          en: 'P.S1050 and later (1893–1900), images needed. There is no illustrated Tolima 1901 card.',
        },
      },
      {
        href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
        es: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
        en: 'Banrepcultural Encyclopedia — Paper money in Colombia',
        note: {
          es: 'Guerra de los Mil Días: impresión de papel sin respaldo por el gobierno y mandos regionales.',
          en: 'Thousand Days’ War: unbacked paper from the government and regional commanders.',
        },
      },
      {
        href: 'https://es.numista.com/catalogue/tolima_state-1.html',
        es: 'Numista — Estado de Tolima',
        en: 'Numista — State of Tolima',
        note: {
          es: 'Sin billetes listados. El único objeto es el ensayo de 2 centavos de 1890 (N# 281840), no esta cédula.',
          en: 'No banknotes listed. The only object is the 1890 2-centavo pattern (N# 281840), not this cédula.',
        },
      },
    ],
  },
  {
    id: '1-peso-oro-1954',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}1-peso-oro-1954/`,
    pick: 'P# 380g · TBB B922k',
    serial: 'HH 52170492',
    signatures: {
      es: 'Luis Ángel Arango (gerente) y Eduardo Arias Robledo (secretario)',
      en: 'Luis Ángel Arango (gerente) and Eduardo Arias Robledo (secretario)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 1.º de enero de 1954. Formato publicado: 140 × 70 mm. Serie HH, serial de ocho dígitos. González White 2019 numera esta fecha BG# 044 (p. 36): emisión 50.000.000, seriales 30.000.001–80.000.000. El Bank Note Museum numera el tipo 380g en esa fecha. Numista cita Hernández 38. El serial 52170492 cae en ese tramo. Las tablas BanRep de producción anual de billetes empiezan en 1960; no hay un total de denominación para 1954.',
      en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 1 January 1954. Published size: 140 × 70 mm. Series HH, eight-digit serial. González White 2019 numbers this date BG# 044 (p. 36): emisión 50,000,000, serials 30,000,001–80,000,000. The Bank Note Museum numbers type 380g on that date. Numista cites Hernández 38. Serial 52170492 falls in that range. BanRep’s annual banknote production tables begin in 1960; there is no denomination total for 1954.',
    },
    images: {
      composite: '/images/catalog/colombia/1-peso-oro-1954-52170492-composite.jpg',
      front: '/images/catalog/colombia/1-peso-oro-1954-52170492-front.jpg',
      back: '/images/catalog/colombia/1-peso-oro-1954-52170492-back.jpg',
    },
    title: {
      es: '1 peso oro · Banco de la República · 1954',
      en: '1 peso oro · Banco de la República · 1954',
    },
    kicker: {
      es: 'Colombia · Banco de la República · ABNC',
      en: 'Colombia · Banco de la República · ABNC',
    },
    lead: {
      es: 'Un peso oro de circulación, Pick 380g: serie HH, serial de ocho dígitos 52170492, 1.º de enero de 1954. Esta ficha reúne anverso y reverso de la misma pieza, sin encapsular.',
      en: 'A circulating one-peso oro, Pick 380g: Series HH, eight-digit serial 52170492, 1 January 1954. This record gathers the face and back of the same unslabbed note.',
    },
    description: {
      es: 'El Banco de la República encargó a la American Bank Note Company de Nueva York este un peso oro de la familia Pick 380 (1929–1954). El anverso, en azul sobre fondo policromado naranja y verde, lleva a la izquierda el retrato de Francisco de Paula Santander y una figura alegórica de pie, al centro el 1 con la leyenda «UN PESO ORO», y a la derecha el busto de Simón Bolívar, con el nombre «BOLIVAR» bajo el óvalo. Los seriales van en rojo: 52170492, una vez arriba a la derecha y otra abajo a la izquierda. La leyenda «SERIE HH» aparece dos veces en negro, a ambos flancos del 1 central. La fecha impresa es «BOGOTÁ, COLOMBIA. / 1º DE ENERO DE 1954». Las firmas son las de Luis Ángel Arango (gerente) y Eduardo Arias Robledo (secretario), el par que Numista asigna a 1954 (LAA₂, EAR). El reverso, en azul, muestra la cabeza de la Libertad en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA», las cifras 1 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». El tipo 380g, según el Bank Note Museum, cubre solo esa fecha; las HH de 1950 (Pick 380f) son otra emisión, de siete u ocho dígitos. No es el 1 peso conmemorativo de Boyacá de 1953 (Waterlow) ni el 1 peso azul de la Imprenta de Billetes (Pick 404). Esta pieza de la colección se presenta en funda, circulada, sin encapsular.',
      en: 'The Banco de la República ordered this one-peso oro of the Pick 380 family (1929–1954) from the American Bank Note Company in New York. The face, blue on an orange and green multicolour underprint, carries at left the portrait of Francisco de Paula Santander and a standing allegorical figure, at center the figure 1 with the legend “UN PESO ORO,” and at right the bust of Simón Bolívar, named “BOLIVAR” under the oval. The serials are in red: 52170492, once at upper right and once at lower left. The legend “SERIE HH” appears twice in black, flanking the central 1. The printed date is “BOGOTÁ, COLOMBIA. / 1º DE ENERO DE 1954.” The signatures are those of Luis Ángel Arango (gerente) and Eduardo Arias Robledo (secretario), the pair Numista assigns to 1954 (LAA₂, EAR). The blue back shows Liberty’s head in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA,” the figures 1 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” Type 380g, per the Bank Note Museum, covers that date only; the 1950 HH notes (Pick 380f) are another issue, in seven- or eight-digit serials. It is not the 1953 Boyacá commemorative 1-peso (Waterlow) or the Imprenta de Billetes blue 1-peso (Pick 404). This collection piece is shown in a sleeve, circulated, unslabbed.',
    },
    frontCaption: {
      es: 'Anverso del 1 peso oro, Pick 380g: Santander, Bolívar, serie HH, serial 52170492 y fecha 1.º de enero de 1954.',
      en: 'Face of the 1 peso oro, Pick 380g: Santander, Bolívar, Series HH, serial 52170492, and the date 1 January 1954.',
    },
    backCaption: {
      es: 'Reverso del 1 peso oro, Pick 380g: Libertad en medallón azul, cifras 1 y pie de la American Bank Note Company.',
      en: 'Back of the 1 peso oro, Pick 380g: Liberty in a blue medallion, the figures 1, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'González White 2019 (BG# 044, p. 36) publica 50.000.000 de ejemplares para el 1.º de enero de 1954, serie HH de ocho dígitos, seriales 30.000.001–80.000.000. El Bank Note Museum describe el Pick 380g como esa fecha del 1 peso oro ABNC: Santander y Bolívar al anverso, la Libertad al reverso. Numista agrupa el diseño 1929–1954 bajo N# 207727 y marca la frecuencia de la fecha 01.01.1954, serie HH, en un 45 % entre quienes poseen el tipo. No es prueba ni espécimen. Esta ficha no sustituye esa emisión BG# por un total BanRep de denominación-año.',
      en: 'González White 2019 (BG# 044, p. 36) publishes 50,000,000 notes for 1 January 1954, eight-digit Series HH, serials 30,000,001–80,000,000. The Bank Note Museum describes Pick 380g as that date of the ABNC 1 peso oro: Santander and Bolívar on the face, Liberty on the back. Numista groups the 1929–1954 design under N# 207727 and marks the 01.01.1954 Series HH date’s frequency at 45% among owners of the type. It is neither a proof nor a specimen. This record does not replace that BG# emisión with a BanRep denomination-year total.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 52170492. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial 52170492 has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0380.htm',
        es: 'Bank Note Museum — Colombia P-380, 1 peso oro (1929–1954)',
        en: 'Bank Note Museum — Colombia P-380, 1 peso oro (1929–1954)',
        note: {
          es: '380g: 01.01.1954; anverso Santander, figura alegórica y Bolívar; reverso Libertad; ABNC.',
          en: '380g: 01.01.1954; Santander, an allegorical figure, and Bolívar on the face; Liberty on the back; ABNC.',
        },
      },
      {
        href: 'https://en.numista.com/catalogue/note207727.html',
        es: 'Numista — Colombia 1 peso oro, N# 207727',
        en: 'Numista — Colombia 1 peso oro, N# 207727',
        note: {
          es: '01.01.1954: P# 380g / TBB B922k; Hernández 38; serie HH; firmas LAA₂ y EAR; 140 × 70 mm; frecuencia 45 % en el tipo.',
          en: '01.01.1954: P# 380g / TBB B922k; Hernández 38; Series HH; signatures LAA₂ and EAR; 140 × 70 mm; 45% frequency within the type.',
        },
      },
      {
        href: 'https://www.realbanknotes.com/banknote/16851-Colombia-p380g-1-Peso-Oro-from-1954',
        es: 'RealBanknotes — Colombia P-380g, 1 peso oro de 1954',
        en: 'RealBanknotes — Colombia P-380g, 1 peso oro of 1954',
        note: {
          es: '1.1.1954; ABNC; serie HH; anverso Santander y Bolívar, reverso Libertad.',
          en: '1.1.1954; ABNC; Series HH; Santander and Bolívar on the face, Liberty on the back.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023 (Numista L100183). Numista cita Hernández 38 para el 1.º de enero de 1954; ese H# no se sustituye por el Cód. de 2023.',
          en: '8th ed. 2023 (Numista L100183). Numista cites Hernández 38 for 1 January 1954; that H# is not replaced by a 2023 Cód.',
        },
      },
    ],
  },
  {
    id: '2-pesos-oro-1944',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}2-pesos-oro-1944/`,
    pick: 'P# 390b · TBB B923c',
    serial: 'I 12527403',
    signatures: {
      es: 'Julio Caro (gerente) y Luis Ángel Arango (secretario)',
      en: 'Julio Caro (gerente) and Luis Ángel Arango (secretario)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 20 de julio de 1944. El Bank Note Museum agrupa el tipo 390b en las fechas 20.07.1944, 01.01.1945 y 07.08.1947. Formato publicado: 140 × 70 mm. Numista marca esta fecha como serie I en oliva (Hernández 91). No se publica aquí una tirada.',
      en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 20 July 1944. The Bank Note Museum groups type 390b under 20.07.1944, 01.01.1945, and 07.08.1947. Published size: 140 × 70 mm. Numista marks this date as Series I in olive (Hernández 91). No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/2-pesos-oro-1944-composite.jpg',
      front: '/images/catalog/colombia/2-pesos-oro-1944-front.jpg',
      back: '/images/catalog/colombia/2-pesos-oro-1944-back.jpg',
    },
    title: {
      es: '2 pesos oro · Banco de la República · 1944 y 1955',
      en: '2 pesos oro · Banco de la República · 1944 and 1955',
    },
    kicker: {
      es: 'Colombia · Banco de la República · ABNC',
      en: 'Colombia · Banco de la República · ABNC',
    },
    lead: {
      es: 'Dos ejemplares de la familia Pick 390 (Camilo Torres): serie I del 20 de julio de 1944 (Pick 390b) y serie GG del 1.º de enero de 1955 (Pick 390d). Cada uno tiene en esta página sus datos de catálogo, la pieza, rareza e impresión, y población.',
      en: 'Two notes of the Pick 390 family (Camilo Torres): Series I of 20 July 1944 (Pick 390b) and Series GG of 1 January 1955 (Pick 390d). Each has its own catalog facts, note, scarcity and printage, and population on this page.',
    },
    description: {
      es: 'El Banco de la República encargó a la American Bank Note Company de Nueva York este dos pesos oro de la familia Pick 390 (1942–1955). El anverso, en verde oliva sobre fondo policromado, lleva al centro el retrato de Camilo Torres Tenorio, con el nombre «TORRES» bajo el óvalo, y la promesa de pagar al portador dos pesos oro. Los seriales van en rojo: Nº 12527403, a ambos flancos del retrato. La leyenda «SERIE I» aparece dos veces, en oliva, no en el rojo de las fechas 1942–1943 del mismo tipo. La fecha impresa es «BOGOTA, COLOMBIA. / 20 DE JULIO DE 1944». Las firmas son las de Julio Caro (gerente) y Luis Ángel Arango (secretario), el par que Numista asigna a esta fecha (JC, LAA₁) y el que Banknote World registra también en el 390a de 1942. El reverso, en azul, muestra la cabeza de la Libertad en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA», las cifras 2 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». El tipo 390b, según el Bank Note Museum, cubre tres fechas (1944, 1945 y 1947). El GG de 1950 (Pick 390c) es otra fecha; el cierre de 1955 (Pick 390d) se documenta en esta misma ficha. No es el 10 pesos oro de Nariño (Pick 389). Esta pieza de la colección se presenta en funda, circulada, sin encapsular.',
      en: 'The Banco de la República ordered this two-peso oro of the Pick 390 family (1942–1955) from the American Bank Note Company in New York. The face, olive green on a multicolour underprint, carries at center the portrait of Camilo Torres Tenorio, named “TORRES” under the oval, and the promise to pay the bearer two gold pesos. The serials are in red: No. 12527403, at both flanks of the portrait. The legend “SERIE I” appears twice, in olive, not in the red of the 1942–1943 dates of the same type. The printed date is “BOGOTA, COLOMBIA. / 20 DE JULIO DE 1944.” The signatures are those of Julio Caro (gerente) and Luis Ángel Arango (secretario), the pair Numista assigns to this date (JC, LAA₁) and the pair Banknote World also records on the 1942 390a. The blue back shows Liberty’s head in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA,” the figures 2 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” Type 390b, per the Bank Note Museum, covers three dates (1944, 1945, and 1947). The 1950 GG (Pick 390c) is another date; the 1955 close (Pick 390d) is documented on this same page. It is not the Nariño 10 pesos oro (Pick 389). This collection piece is shown in a sleeve, circulated, unslabbed.',
    },
    frontCaption: {
      es: 'Anverso del 2 pesos oro, Pick 390b: Torres, serie I, serial 12527403 y fecha 20 de julio de 1944.',
      en: 'Face of the 2 pesos oro, Pick 390b: Torres, Series I, serial 12527403, and the date 20 July 1944.',
    },
    backCaption: {
      es: 'Reverso del 2 pesos oro, Pick 390b: Libertad en medallón, cifras 2 y pie de la American Bank Note Company.',
      en: 'Back of the 2 pesos oro, Pick 390b: Liberty in a medallion, the figures 2, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'El Bank Note Museum describe el Pick 390 como emisión de circulación de 2 pesos oro, 1942–1955, grabada por la American Bank Note Company: Torres al anverso y la Libertad al reverso. El letra b agrupa tres fechas (1944, 1945 y 1947); Numista sitúa la de 20 de julio de 1944 en unos 5 % de los ejemplares registrados del tipo y marca la serie I en oliva. Numista da al conjunto un índice de rareza 48. No es prueba ni espécimen. Esta ficha no inventa una tirada por fecha.',
      en: 'The Bank Note Museum describes Pick 390 as a circulating 2-peso oro issue of 1942–1955, engraved by the American Bank Note Company: Torres on the face and Liberty on the back. Letter b groups three dates (1944, 1945, and 1947); Numista places the 20 July 1944 date at about 5% of recorded examples of the type and marks Series I in olive. Numista gives the type a rarity index of 48. It is neither a proof nor a specimen. This record does not invent a printage by date.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 12527403. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial 12527403 has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0390.htm',
        es: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
        en: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
        note: {
          es: '390b: 20.07.1944, 01.01.1945 y 07.08.1947; anverso Camilo Torres, reverso Libertad; ABNC.',
          en: '390b: 20.07.1944, 01.01.1945, and 07.08.1947; Camilo Torres on the face, Liberty on the back; ABNC.',
        },
      },
      {
        href: 'https://en.numista.com/catalogue/note232681.html',
        es: 'Numista — Colombia 2 pesos oro, N# 232681',
        en: 'Numista — Colombia 2 pesos oro, N# 232681',
        note: {
          es: '20.07.1944: P# 390b / TBB B923c; Hernández 91; serie I en oliva; firmas JC y LAA₁; 140 × 70 mm; frecuencia 5 % en el tipo.',
          en: '20.07.1944: P# 390b / TBB B923c; Hernández 91; Series I in olive; signatures JC and LAA₁; 140 × 70 mm; 5% frequency within the type.',
        },
      },
      {
        href: 'https://www.banknoteworld.org/colombia-2-pesos-oro-1942-p-390a-1.html',
        es: 'Banknote World — Colombia 2 pesos oro 1942, P-390a.1',
        en: 'Banknote World — Colombia 2 pesos oro 1942, P-390a.1',
        note: {
          es: 'Mismo diseño ABNC: Camilo Torres y Libertad; 140 × 70 mm; firmas Julio Caro y Luis Ángel Arango en 1942.',
          en: 'Same ABNC design: Camilo Torres and Liberty; 140 × 70 mm; Julio Caro and Luis Ángel Arango on 1942.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023 (Numista L100183). Numista cita Hernández 91 para el 20 de julio de 1944; ese H# no se sustituye por el Cód. de 2023.',
          en: '8th ed. 2023 (Numista L100183). Numista cites Hernández 91 for 20 July 1944; that H# is not replaced by a 2023 Cód.',
        },
      },
    ],
    pieces: [
      {
        id: '2-pesos-oro-1944',
        pick: 'P# 390b · TBB B923c',
        serial: 'I 12527403',
        signatures: {
          es: 'Julio Caro (gerente) y Luis Ángel Arango (secretario)',
          en: 'Julio Caro (gerente) and Luis Ángel Arango (secretario)',
        },
        printed: {
          es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 20 de julio de 1944. El Bank Note Museum agrupa el tipo 390b en las fechas 20.07.1944, 01.01.1945 y 07.08.1947. Formato publicado: 140 × 70 mm. Numista marca esta fecha como serie I en oliva (Hernández 91). No se publica aquí una tirada.',
          en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 20 July 1944. The Bank Note Museum groups type 390b under 20.07.1944, 01.01.1945, and 07.08.1947. Published size: 140 × 70 mm. Numista marks this date as Series I in olive (Hernández 91). No printage is published here.',
        },
        images: {
          composite: '/images/catalog/colombia/2-pesos-oro-1944-composite.jpg',
          front: '/images/catalog/colombia/2-pesos-oro-1944-front.jpg',
          back: '/images/catalog/colombia/2-pesos-oro-1944-back.jpg',
        },
        title: {
          es: '2 pesos oro · Banco de la República · 1944',
          en: '2 pesos oro · Banco de la República · 1944',
        },
        lead: {
          es: 'Dos pesos oro de circulación, Pick 390b: serie I, serial 12527403, 20 de julio de 1944. Esta ficha reúne anverso y reverso de la misma pieza, sin encapsular.',
          en: 'A circulating two-peso oro, Pick 390b: Series I, serial 12527403, 20 July 1944. This record gathers the face and back of the same unslabbed note.',
        },
        description: {
          es: 'El Banco de la República encargó a la American Bank Note Company de Nueva York este dos pesos oro de la familia Pick 390 (1942–1955). El anverso, en verde oliva sobre fondo policromado, lleva al centro el retrato de Camilo Torres Tenorio, con el nombre «TORRES» bajo el óvalo, y la promesa de pagar al portador dos pesos oro. Los seriales van en rojo: Nº 12527403, a ambos flancos del retrato. La leyenda «SERIE I» aparece dos veces, en oliva, no en el rojo de las fechas 1942–1943 del mismo tipo. La fecha impresa es «BOGOTA, COLOMBIA. / 20 DE JULIO DE 1944». Las firmas son las de Julio Caro (gerente) y Luis Ángel Arango (secretario), el par que Numista asigna a esta fecha (JC, LAA₁) y el que Banknote World registra también en el 390a de 1942. El reverso, en azul, muestra la cabeza de la Libertad en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA», las cifras 2 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». El tipo 390b, según el Bank Note Museum, cubre tres fechas (1944, 1945 y 1947). El GG de 1950 (Pick 390c) es otra fecha; el cierre de 1955 (Pick 390d) se documenta en esta misma ficha. No es el 10 pesos oro de Nariño (Pick 389). Esta pieza de la colección se presenta en funda, circulada, sin encapsular.',
          en: 'The Banco de la República ordered this two-peso oro of the Pick 390 family (1942–1955) from the American Bank Note Company in New York. The face, olive green on a multicolour underprint, carries at center the portrait of Camilo Torres Tenorio, named “TORRES” under the oval, and the promise to pay the bearer two gold pesos. The serials are in red: No. 12527403, at both flanks of the portrait. The legend “SERIE I” appears twice in olive, not in the red of the 1942–1943 dates of the same type. The printed date is “BOGOTA, COLOMBIA. / 20 DE JULIO DE 1944.” The signatures are those of Julio Caro (gerente) and Luis Ángel Arango (secretario), the pair Numista assigns to this date (JC, LAA₁) and the pair Banknote World also records on the 1942 390a. The blue back shows Liberty’s head in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA,” the figures 2 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” Type 390b, per the Bank Note Museum, covers three dates (1944, 1945, and 1947). The 1950 GG (Pick 390c) is another date; the 1955 close (Pick 390d) is documented on this same page. It is not the Nariño 10 pesos oro (Pick 389). This collection piece is shown in a sleeve, circulated, unslabbed.',
        },
        frontCaption: {
          es: 'Anverso del 2 pesos oro, Pick 390b: Torres, serie I, serial 12527403 y fecha 20 de julio de 1944.',
          en: 'Face of the 2 pesos oro, Pick 390b: Torres, Series I, serial 12527403, and the date 20 July 1944.',
        },
        backCaption: {
          es: 'Reverso del 2 pesos oro, Pick 390b: Libertad en medallón, cifras 2 y pie de la American Bank Note Company.',
          en: 'Back of the 2 pesos oro, Pick 390b: Liberty in a medallion, the figures 2, and the American Bank Note Company imprint.',
        },
        scarcity: {
          es: 'El Bank Note Museum describe el Pick 390 como emisión de circulación de 2 pesos oro, 1942–1955, grabada por la American Bank Note Company: Torres al anverso y la Libertad al reverso. El letra b agrupa tres fechas (1944, 1945 y 1947); Numista sitúa la de 20 de julio de 1944 en unos 5 % de los ejemplares registrados del tipo y marca la serie I en oliva. Numista da al conjunto un índice de rareza 48. No es prueba ni espécimen. Esta ficha no inventa una tirada por fecha.',
          en: 'The Bank Note Museum describes Pick 390 as a circulating 2-peso oro issue of 1942–1955, engraved by the American Bank Note Company: Torres on the face and Liberty on the back. Letter b groups three dates (1944, 1945, and 1947); Numista places the 20 July 1944 date at about 5% of recorded examples of the type and marks Series I in olive. Numista gives the type a rarity index of 48. It is neither a proof nor a specimen. This record does not invent a printage by date.',
        },
        population: {
          es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 12527403. La pieza se presenta en funda, circulada, sin encapsular.',
          en: 'A PMG or PCGS census for serial 12527403 has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
        },
        grade: {
          es: 'Circulada, sin encapsular (colección privada)',
          en: 'Circulated, unslabbed (private collection)',
        },
        sources: [
          {
            href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0390.htm',
            es: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
            en: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
            note: {
              es: '390b: 20.07.1944, 01.01.1945 y 07.08.1947; anverso Camilo Torres, reverso Libertad; ABNC.',
              en: '390b: 20.07.1944, 01.01.1945, and 07.08.1947; Camilo Torres on the face, Liberty on the back; ABNC.',
            },
          },
          {
            href: 'https://en.numista.com/catalogue/note232681.html',
            es: 'Numista — Colombia 2 pesos oro, N# 232681',
            en: 'Numista — Colombia 2 pesos oro, N# 232681',
            note: {
              es: '20.07.1944: P# 390b / TBB B923c; Hernández 91; serie I en oliva; firmas JC y LAA₁; 140 × 70 mm; frecuencia 5 % en el tipo.',
              en: '20.07.1944: P# 390b / TBB B923c; Hernández 91; Series I in olive; signatures JC and LAA₁; 140 × 70 mm; 5% frequency within the type.',
            },
          },
          {
            href: 'https://www.banknoteworld.org/colombia-2-pesos-oro-1942-p-390a-1.html',
            es: 'Banknote World — Colombia 2 pesos oro 1942, P-390a.1',
            en: 'Banknote World — Colombia 2 pesos oro 1942, P-390a.1',
            note: {
              es: 'Mismo diseño ABNC: Camilo Torres y Libertad; 140 × 70 mm; firmas Julio Caro y Luis Ángel Arango en 1942.',
              en: 'Same ABNC design: Camilo Torres and Liberty; 140 × 70 mm; Julio Caro and Luis Ángel Arango on 1942.',
            },
          },
          {
            href: 'https://en.numista.com/L100183',
            es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
            en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
            note: {
              es: '8.ª ed. 2023 (Numista L100183). Numista cita Hernández 91 para el 20 de julio de 1944; ese H# no se sustituye por el Cód. de 2023.',
              en: '8th ed. 2023 (Numista L100183). Numista cites Hernández 91 for 20 July 1944; that H# is not replaced by a 2023 Cód.',
            },
          },
        ],
      },
      {
        id: '2-pesos-oro-1955',
        pick: 'P# 390d · TBB B923g',
        serial: 'GG 10739101',
        signatures: {
          es: 'Luis Ángel Arango (gerente) y Eduardo Arias Robledo (secretario)',
          en: 'Luis Ángel Arango (gerente) and Eduardo Arias Robledo (secretario)',
        },
        printed: {
          es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 1.º de enero de 1955. El Bank Note Museum numera el tipo 390d en esa fecha. Formato publicado: 140 × 70 mm. Numista distingue, en serie GG, seriales de siete dígitos (Hernández 95) y de ocho (Hernández 96); esta pieza es de ocho. No se publica aquí una tirada.',
          en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 1 January 1955. The Bank Note Museum numbers type 390d on that date. Published size: 140 × 70 mm. Numista distinguishes, in Series GG, seven-digit serials (Hernández 95) and eight-digit ones (Hernández 96); this piece is eight digits. No printage is published here.',
        },
        images: {
          composite: '/images/catalog/colombia/2-pesos-oro-1955-composite.jpg',
          front: '/images/catalog/colombia/2-pesos-oro-1955-front.jpg',
          back: '/images/catalog/colombia/2-pesos-oro-1955-back.jpg',
        },
        title: {
          es: '2 pesos oro · Banco de la República · 1955',
          en: '2 pesos oro · Banco de la República · 1955',
        },
        lead: {
          es: 'Dos pesos oro de circulación, Pick 390d: serie GG, serial de ocho dígitos 10739101, 1.º de enero de 1955. Esta ficha reúne anverso y reverso de la misma pieza, sin encapsular.',
          en: 'A circulating two-peso oro, Pick 390d: Series GG, eight-digit serial 10739101, 1 January 1955. This record gathers the face and back of the same unslabbed note.',
        },
        description: {
          es: 'El Banco de la República cerró con esta fecha la familia Pick 390 de dos pesos oro, grabada por la American Bank Note Company de Nueva York. El anverso, en verde oliva sobre fondo policromado, lleva al centro el retrato de Camilo Torres Tenorio y la promesa de pagar al portador dos pesos oro. Los seriales van en rojo: Nº 10739101, a ambos flancos del retrato. La leyenda «SERIE GG» aparece dos veces en negro. La fecha impresa es «BOGOTÁ, COLOMBIA. / 1° DE ENERO DE 1955». Las firmas son las de Luis Ángel Arango (gerente) y Eduardo Arias Robledo (secretario), el par que Numista asigna a 1955 (LAA₂, EAR). El serial de ocho dígitos es la variedad que Hernández numera 96; no es el GG de siete dígitos (Hernández 95) ni el GG de 1950 con Jaime Londoño (Pick 390c). El reverso, en violeta, muestra la cabeza de la Libertad con gorro frigio en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA», las cifras 2 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». Es el mismo diseño que el 2 pesos oro de 1944 de esta ficha (serie I, Pick 390b), no un espécimen: el reverso no lleva serial. Esta pieza se presenta en funda, sin encapsular.',
          en: 'The Banco de la República closed the Pick 390 two-peso oro family on this date, engraved by the American Bank Note Company in New York. The face, olive green on a multicolour underprint, carries at center the portrait of Camilo Torres Tenorio and the promise to pay the bearer two gold pesos. The serials are in red: No. 10739101, at both flanks of the portrait. The legend “SERIE GG” appears twice in black. The printed date is “BOGOTÁ, COLOMBIA. / 1° DE ENERO DE 1955.” The signatures are those of Luis Ángel Arango (gerente) and Eduardo Arias Robledo (secretario), the pair Numista assigns to 1955 (LAA₂, EAR). The eight-digit serial is the variety Hernández numbers 96; it is not the seven-digit GG (Hernández 95) or the 1950 GG with Jaime Londoño (Pick 390c). The violet back shows Liberty’s head in a Phrygian cap, in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA,” the figures 2 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” It is the same design as this page’s 1944 2 pesos oro (Series I, Pick 390b), not a specimen: the back does not carry a serial. This piece is shown in a sleeve, unslabbed.',
        },
        frontCaption: {
          es: 'Anverso del 2 pesos oro, Pick 390d: Torres, serie GG, serial de ocho dígitos 10739101 y fecha 1.º de enero de 1955.',
          en: 'Face of the 2 pesos oro, Pick 390d: Torres, Series GG, eight-digit serial 10739101, and the date 1 January 1955.',
        },
        backCaption: {
          es: 'Reverso del 2 pesos oro, Pick 390d: Libertad en medallón violeta, cifras 2 y pie de la American Bank Note Company.',
          en: 'Back of the 2 pesos oro, Pick 390d: Liberty in a violet medallion, the figures 2, and the American Bank Note Company imprint.',
        },
        scarcity: {
          es: 'El Bank Note Museum describe el Pick 390d como la fecha 01.01.1955 del 2 pesos oro. Numista agrupa circulación y variedades del diseño en N# 232681, con índice de rareza 48, y marca la frecuencia del GG de ocho dígitos en un 17 % entre quienes poseen el tipo, frente a un 60 % del GG de siete dígitos. No es prueba ni espécimen. Esta ficha no inventa una tirada.',
          en: 'The Bank Note Museum describes Pick 390d as the 01.01.1955 date of the 2 pesos oro. Numista groups circulating notes and varieties of the design under N# 232681, with a rarity index of 48, and marks the eight-digit GG’s frequency at 17% among owners of the type, against 60% for the seven-digit GG. It is neither a proof nor a specimen. This record does not invent a printage.',
        },
        population: {
          es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 10739101. La pieza se presenta en funda, sin encapsular.',
          en: 'A PMG or PCGS census for serial 10739101 has not been independently verified. The note is shown in a sleeve, unslabbed.',
        },
        grade: {
          es: 'Sin encapsular (colección privada)',
          en: 'Unslabbed (private collection)',
        },
        sources: [
          {
            href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0390.htm',
            es: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
            en: 'Bank Note Museum — Colombia P-390, 2 pesos oro (1942–1955)',
            note: {
              es: '390d: 01.01.1955; anverso Camilo Torres, reverso Libertad; ABNC.',
              en: '390d: 01.01.1955; Camilo Torres on the face, Liberty on the back; ABNC.',
            },
          },
          {
            href: 'https://en.numista.com/catalogue/note232681.html',
            es: 'Numista — Colombia 2 pesos oro, N# 232681',
            en: 'Numista — Colombia 2 pesos oro, N# 232681',
            note: {
              es: '01.01.1955, serie GG de ocho dígitos: P# 390d / TBB B923g; Hernández 96; firmas LAA₂ y EAR; 140 × 70 mm; frecuencia 17 % en el tipo.',
              en: '01.01.1955, eight-digit Series GG: P# 390d / TBB B923g; Hernández 96; signatures LAA₂ and EAR; 140 × 70 mm; 17% frequency within the type.',
            },
          },
          {
            href: 'https://www.banknoteworld.org/colombia-2-pesos-oro-1955-p-390d.html',
            es: 'Banknote World — Colombia 2 pesos oro 1955, P-390d',
            en: 'Banknote World — Colombia 2 pesos oro 1955, P-390d',
            note: {
              es: 'Fecha 01.01.1955; ABNC; 140 × 70 mm; anverso Torres, reverso Libertad.',
              en: 'Date 01.01.1955; ABNC; 140 × 70 mm; Torres on the face, Liberty on the back.',
            },
          },
          {
            href: 'https://en.numista.com/L100183',
            es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
            en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
            note: {
          es: '8.ª ed. 2023 (Numista L100183). Numista cita Hernández 96 para el GG de ocho dígitos de 1955; ese H# no se sustituye por el Cód. de 2023.',
          en: '8th ed. 2023 (Numista L100183). Numista cites Hernández 96 for the 1955 eight-digit GG; that H# is not replaced by a 2023 Cód.',
            },
          },
        ],
      },
    ],
  },
  {
    id: '10-pesos-oro-1943',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}10-pesos-oro-1943/`,
    pick: 'P# 389b',
    serial: 'N 6813011',
    signatures: {
      es: 'Julio Caro (gerente) y Luis Ángel Arango (secretario)',
      en: 'Julio Caro (gerente) and Luis Ángel Arango (secretario)',
    },
    printed: {
      es: 'American Bank Note Company, Nueva York. Emisión de circulación del Banco de la República; fecha en el billete 20 de julio de 1943. El Bank Note Museum agrupa el tipo 389b en las fechas 20.07.1943, 20.07.1944 y 07.08.1947. Formato publicado: 140 × 70 mm. No se publica aquí una tirada.',
      en: 'American Bank Note Company, New York. Banco de la República circulation issue; date on the note 20 July 1943. The Bank Note Museum groups type 389b under 20.07.1943, 20.07.1944, and 07.08.1947. Published size: 140 × 70 mm. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/10-pesos-oro-1943-composite.jpg',
      front: '/images/catalog/colombia/10-pesos-oro-1943-front.jpg',
      back: '/images/catalog/colombia/10-pesos-oro-1943-back.jpg',
    },
    title: {
      es: '10 pesos oro · Banco de la República · 1943',
      en: '10 pesos oro · Banco de la República · 1943',
    },
    kicker: {
      es: 'Colombia · Banco de la República · ABNC',
      en: 'Colombia · Banco de la República · ABNC',
    },
    lead: {
      es: 'Diez pesos oro de circulación, Pick 389b: encapsulado PMG 50 About Uncirculated EPQ. Serie N, serial 6813011, 20 de julio de 1943. Esta ficha reúne anverso y reverso de la misma cápsula.',
      en: 'A circulating ten-peso oro, Pick 389b: slabbed PMG 50 About Uncirculated EPQ. Series N, serial 6813011, 20 July 1943. This record gathers the face and back of the same holder.',
    },
    description: {
      es: 'El Banco de la República, creado por la Ley 25 de 1923, encargó a la American Bank Note Company las planchas de sus primeros billetes de circulación. Este diez pesos oro —Pick 389; el Bank Note Museum lo sitúa en 1941–1963— lleva a la derecha el retrato de Antonio Nariño, con el nombre bajo el óvalo, y al centro la promesa de pagar al portador diez pesos oro. El fondo pasa del verde al naranja; los seriales y la leyenda «SERIE N» van en rojo. La fecha impresa es «BOGOTA, COLOMBIA / 20 DE JULIO DE 1943». El tipo 389b cubre tres fechas de los años cuarenta; esta pieza es la primera de ese grupo. Las firmas del gerente Julio Caro y del secretario Luis Ángel Arango son las que Banknote World registra para el 389b fechado el 20 de julio de 1944, la emisión inmediata del mismo letra. El reverso, en verde, muestra la cabeza de la Libertad con gorro frigio en un medallón que lee «BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA •», las cifras 10 a ambos flancos y el pie «AMERICAN BANK NOTE COMPANY.». Esta ficha reúne las dos caras de la cápsula PMG 8011911-013.',
      en: 'The Banco de la República, created by Law 25 of 1923, ordered plates for its first circulating notes from the American Bank Note Company. This ten-peso oro — Pick 389; the Bank Note Museum places the type in 1941–1963 — carries Antonio Nariño’s portrait at right, named under the oval, and at center the promise to pay the bearer ten gold pesos. The underprint runs from green into orange; the serials and the legend “SERIE N” are in red. The printed date is “BOGOTA, COLOMBIA / 20 DE JULIO DE 1943.” Type 389b covers three 1940s dates; this piece is the first of that group. The signatures of gerente Julio Caro and secretario Luis Ángel Arango are those Banknote World records for the 389b dated 20 July 1944, the next issue of the same letter. The green back shows Liberty’s head in a Phrygian cap, in a medallion reading “BANCO DE LA REPUBLICA • BOGOTÁ COLOMBIA •,” the figures 10 at each flank, and the imprint “AMERICAN BANK NOTE COMPANY.” This record gathers both sides of PMG holder 8011911-013.',
    },
    frontCaption: {
      es: 'Anverso del 10 pesos oro, Pick 389b, encapsulado PMG 50 About Uncirculated EPQ: Nariño, serie N, serial 6813011 y fecha 20 de julio de 1943.',
      en: 'Face of the 10 pesos oro, Pick 389b, slabbed PMG 50 About Uncirculated EPQ: Nariño, Series N, serial 6813011, and the date 20 July 1943.',
    },
    backCaption: {
      es: 'Reverso del 10 pesos oro, Pick 389b, encapsulado PMG 50 About Uncirculated EPQ: Libertad con gorro frigio, cifras 10 y pie de la American Bank Note Company.',
      en: 'Back of the 10 pesos oro, Pick 389b, slabbed PMG 50 About Uncirculated EPQ: Liberty in a Phrygian cap, the figures 10, and the American Bank Note Company imprint.',
    },
    scarcity: {
      es: 'El Bank Note Museum describe el Pick 389 como emisión de circulación de 10 pesos oro, 1941–1963, grabada por la American Bank Note Company: Nariño al anverso y la Libertad al reverso. El letra b agrupa tres fechas (1943, 1944 y 1947). No es prueba ni espécimen. Esta ficha no inventa una tirada por fecha.',
      en: 'The Bank Note Museum describes Pick 389 as a circulating 10-peso oro issue of 1941–1963, engraved by the American Bank Note Company: Nariño on the face and Liberty on the back. Letter b groups three dates (1943, 1944, and 1947). It is neither a proof nor a specimen. This record does not invent a printage by date.',
    },
    population: {
      es: 'La pieza está encapsulada por PMG como 50 About Uncirculated EPQ, certificado 8011911-013. No se ha verificado de forma independiente un censo de población para ese número de cápsula.',
      en: 'The note is slabbed by PMG as 50 About Uncirculated EPQ, certification 8011911-013. A population census for that holder number has not been independently verified.',
    },
    grade: {
      es: 'PMG 50 About Uncirculated EPQ',
      en: 'PMG 50 About Uncirculated EPQ',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0389.htm',
        es: 'Bank Note Museum — Colombia P-389, 10 pesos oro (1941–1963)',
        en: 'Bank Note Museum — Colombia P-389, 10 pesos oro (1941–1963)',
        note: {
          es: '389b: 20.07.1943, 20.07.1944 y 07.08.1947; anverso Nariño, reverso Libertad; ABNC.',
          en: '389b: 20.07.1943, 20.07.1944, and 07.08.1947; Nariño on the face, Liberty on the back; ABNC.',
        },
      },
      {
        href: 'https://www.banknoteworld.org/colombia-10-pesos-oro-1944-p-389b-2.html',
        es: 'Banknote World — Colombia 10 pesos oro 1944, P-389b.2',
        en: 'Banknote World — Colombia 10 pesos oro 1944, P-389b.2',
        note: {
          es: 'Mismo letra 389b: serie N, ABNC, 140 × 70 mm; firmas Julio Caro y Luis Ángel Arango en la fecha de 1944.',
          en: 'Same 389b letter: Series N, ABNC, 140 × 70 mm; Julio Caro and Luis Ángel Arango on the 1944 date.',
        },
      },
    ],
  },
  {
    id: '10-pesos-oro-1976',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}10-pesos-oro-1976/`,
    pick: 'P# 407f · TBB B950kr',
    serial: '00142533',
    signatures: {
      es: 'Germán Botero de los Ríos (gerente) y Antonio José Gutiérrez (secretario)',
      en: 'Germán Botero de los Ríos (gerente) and Antonio José Gutiérrez (secretario)',
    },
    printed: {
      es: 'Imprenta de Billetes, Bogotá. Emisión de circulación del Banco de la República; fecha en el billete 20 de julio de 1976. El Bank Note Museum agrupa el tipo 407f en las fechas 20.07.1974, 01.01.1975, 20.07.1976 y 01.01.1978, sin hilo de seguridad. Formato publicado: 140 × 70 mm. Esta pieza es la variedad de reposición (TBB B950kr; Hernández 199/201). No se publica aquí una tirada oficial.',
      en: 'Imprenta de Billetes, Bogotá. Banco de la República circulation issue; date on the note 20 July 1976. The Bank Note Museum groups type 407f under 20.07.1974, 01.01.1975, 20.07.1976, and 01.01.1978, without a security thread. Published size: 140 × 70 mm. This piece is the replacement variety (TBB B950kr; Hernández 199/201). No official printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/10-pesos-oro-1976-composite.jpg',
      front: '/images/catalog/colombia/10-pesos-oro-1976-front.jpg',
      back: '/images/catalog/colombia/10-pesos-oro-1976-back.jpg',
    },
    title: {
      es: '10 pesos oro · reposición · 1976',
      en: '10 pesos oro · replacement · 1976',
    },
    kicker: {
      es: 'Colombia · Banco de la República · Reposición',
      en: 'Colombia · Banco de la República · Replacement',
    },
    lead: {
      es: 'Diez pesos oro de reposición, fecha 20 de julio de 1976: Pick 407f / TBB B950kr. Serial 00142533. El asterisco entre GERENTE y SECRETARIO identifica la variedad. Esta ficha reúne anverso y reverso de la misma pieza, sin encapsular.',
      en: 'A replacement ten-peso oro dated 20 July 1976: Pick 407f / TBB B950kr. Serial 00142533. The asterisk between GERENTE and SECRETARIO identifies the variety. This record gathers the face and back of the same unslabbed note.',
    },
    description: {
      es: 'El Banco de la República encargó a su Imprenta de Billetes, abierta en Bogotá el 23 de octubre de 1959, este diez pesos oro de la familia Pick 407 (1963–1980). El anverso, en lila y azul pizarra sobre fondo verde y policromía, lleva a la izquierda el retrato de Antonio Nariño —con el nombre bajo el óvalo— y a la derecha un cóndor andino posado sobre una roca. Al centro, la promesa de pagar al portador diez pesos oro. Los seriales van en rojo: 00142533, una vez a media altura a la izquierda y otra arriba a la derecha. La fecha impresa es «JULIO 20 DE 1976» sobre «BOGOTA, COLOMBIA». Las firmas son las de Germán Botero de los Ríos (gerente) y Antonio José Gutiérrez (secretario), el par que Numista asigna a esta fecha (GBR"₂, AJG). El diagnóstico de la reposición no está en el serial: es el asterisco negro, de seis puntas, entre los títulos GERENTE y SECRETARIO. Los catálogos colombianos describen así la variedad del 20 de julio de 1976. El Pick numera el tipo ordinario como 407f; las reposiciones de esa fecha las listan The Banknote Book (B950kr) y Hernández (199/201). El reverso muestra las estatuas precolombinas del Parque Arqueológico de San Agustín, el sello del banco con la Libertad y las cifras 10. El tipo 407f, según el Bank Note Museum, carece de hilo de seguridad. Esta pieza de la colección se presenta en funda, sin encapsular. No debe confundirse con la emisión ordinaria de la misma fecha (TBB B950k; Hernández 198/200), que no lleva el asterisco entre los títulos.',
      en: 'The Banco de la República ordered this ten-peso oro of the Pick 407 family (1963–1980) from its own Imprenta de Billetes, opened in Bogotá on 23 October 1959. The face, lilac and slate blue on a green and multicolour underprint, carries Antonio Nariño’s portrait at left — named under the oval — and an Andean condor on a rock at right. At center is the promise to pay the bearer ten gold pesos. The serials are in red: 00142533, once at mid-left and once at upper right. The printed date is “JULIO 20 DE 1976” over “BOGOTA, COLOMBIA.” The signatures are those of Germán Botero de los Ríos (gerente) and Antonio José Gutiérrez (secretario), the pair Numista assigns to this date (GBR"₂, AJG). The replacement diagnostic is not in the serial: it is the small six-pointed black asterisk between the titles GERENTE and SECRETARIO. Colombian catalogs describe the 20 July 1976 variety that way. Pick numbers the ordinary type as 407f; replacements of that date are listed by The Banknote Book (B950kr) and Hernández (199/201). The back shows the pre-Columbian statues of the San Agustín Archaeological Park, the bank’s Liberty seal, and the figures 10. Type 407f, per the Bank Note Museum, has no security thread. This collection piece is shown in a sleeve, unslabbed. It should not be confused with the ordinary issue of the same date (TBB B950k; Hernández 198/200), which does not carry the asterisk between the titles.',
    },
    frontCaption: {
      es: 'Anverso del 10 pesos oro de reposición, 20 de julio de 1976: Nariño, cóndor, serial 00142533 y asterisco entre GERENTE y SECRETARIO.',
      en: 'Face of the 20 July 1976 replacement 10 pesos oro: Nariño, the condor, serial 00142533, and the asterisk between GERENTE and SECRETARIO.',
    },
    backCaption: {
      es: 'Reverso del 10 pesos oro de reposición, 20 de julio de 1976: estatuas del Parque Arqueológico de San Agustín y sello del Banco de la República.',
      en: 'Back of the 20 July 1976 replacement 10 pesos oro: statues of the San Agustín Archaeological Park and the Banco de la República seal.',
    },
    scarcity: {
      es: 'La reposición del 20 de julio de 1976 es una variedad reconocida y sustancialmente más escasa que la emisión ordinaria de esa fecha. Numista estima la reposición en unos 0,2 % de los ejemplares registrados del tipo Pick 407; esa cifra es una estimación de población de catálogo, no una tirada oficial. El Pick no lista las reposiciones por separado. Esta ficha no inventa una tirada.',
      en: 'The 20 July 1976 replacement is a recognized variety and substantially scarcer than the ordinary issue of that date. Numista estimates the replacement at about 0.2% of recorded examples of Pick 407; that figure is a catalog-population estimate, not an official printage. Pick does not list replacements separately. This record does not invent a printage.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 00142533. La pieza se presenta en funda, sin encapsular.',
      en: 'A PMG or PCGS census for serial 00142533 has not been independently verified. The note is shown in a sleeve, unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/catalogue/note203973.html',
        es: 'Numista — Colombia 10 pesos oro, N# 203973',
        en: 'Numista — Colombia 10 pesos oro, N# 203973',
        note: {
          es: '20.07.1976, reposición: TBB B950kr; Hernández 199/201; asterisco en el anverso, entre los títulos; frecuencia 0,2 %. Firmas GBR"₂ y AJG. Impresora: Imprenta de Billetes, Bogotá. 140 × 70 mm.',
          en: '20.07.1976 replacement: TBB B950kr; Hernández 199/201; asterisk on the face, between the titles; 0.2% frequency. Signatures GBR"₂ and AJG. Printer: Imprenta de Billetes, Bogotá. 140 × 70 mm.',
        },
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0407.htm',
        es: 'Bank Note Museum — Colombia P-407, 10 pesos oro (1963–1980)',
        en: 'Bank Note Museum — Colombia P-407, 10 pesos oro (1963–1980)',
        note: {
          es: '407f: 20.07.1974, 01.01.1975, 20.07.1976 y 01.01.1978, sin hilo de seguridad; anverso Nariño y cóndor, reverso San Agustín.',
          en: '407f: 20.07.1974, 01.01.1975, 20.07.1976, and 01.01.1978, without a security thread; Nariño and condor on the face, San Agustín on the back.',
        },
      },
      {
        href: 'https://www.banknoteworld.org/colombia-10-pesos-oro-1974-p-407f-1.html',
        es: 'Banknote World — Colombia 10 pesos oro 1974, P-407f.1',
        en: 'Banknote World — Colombia 10 pesos oro 1974, P-407f.1',
        note: {
          es: 'Mismo letra 407f: Imprenta de Billetes, Bogotá; 140 × 70 mm; sin hilo; firmas Germán Botero de los Ríos y Antonio José Gutiérrez.',
          en: 'Same 407f letter: Imprenta de Billetes, Bogotá; 140 × 70 mm; no thread; Germán Botero de los Ríos and Antonio José Gutiérrez.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia (Numista L100183)',
        note: {
          es: '8.ª ed. 2023 (Numista L100183). Numista cita Hernández 199 y 201 para la reposición del 20 de julio de 1976; esos H# no se sustituyen por el Cód. de 2023.',
          en: '8th ed. 2023 (Numista L100183). Numista cites Hernández 199 and 201 for the 20 July 1976 replacement; those H# are not replaced by 2023 Cód. numbers.',
        },
      },
    ],
  },
  {
    id: '2000-pesos-oro-1983',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}2000-pesos-oro-1983/`,
    pick: 'P# 430as',
    serial: '00000000 · SPECIMEN Nº 030',
    signatures: {
      es: 'Hugo Palacios Mejía (gerente) y Francisco José Ortega (secretario)',
      en: 'Hugo Palacios Mejía (gerente) and Francisco José Ortega (secretario)',
    },
    printed: {
      es: 'Thomas De La Rue & Co., Londres. Espécimen de la fecha 24 de julio de 1983; formato publicado 140 × 70 mm. El Bank Note Museum sitúa el tipo Pick 430 en 1983–1986 (TDLR) y remite las fechas posteriores a la Imprenta de Billetes (Pick 433 y 433A). No se publica aquí una tirada.',
      en: 'Thomas De La Rue & Co., London. Specimen of the 24 July 1983 date; published size 140 × 70 mm. The Bank Note Museum places Pick 430 in 1983–1986 (TDLR) and sends later dates to the Imprenta de Billetes (Pick 433 and 433A). No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/2000-pesos-oro-1983-composite.jpg',
      front: '/images/catalog/colombia/2000-pesos-oro-1983-front.jpg',
      back: '/images/catalog/colombia/2000-pesos-oro-1983-back.jpg',
    },
    title: {
      es: '2.000 pesos oro · 1983',
      en: '2,000 pesos oro · 1983',
    },
    kicker: {
      es: 'Colombia · Banco de la República · Espécimen TDLR',
      en: 'Colombia · Banco de la República · TDLR specimen',
    },
    lead: {
      es: 'Dos mil pesos oro, espécimen Pick 430as: encapsulado PCGS 64 Very Choice New. Fecha 24 de julio de 1983, serial de ceros y SPECIMEN Nº 030. Esta ficha reúne anverso y reverso de la misma cápsula.',
      en: 'A two-thousand-peso oro specimen, Pick 430as: slabbed PCGS 64 Very Choice New. Date 24 July 1983, zero serials and SPECIMEN Nº 030. This record gathers the face and back of the same holder.',
    },
    description: {
      es: 'El Banco de la República encargó a Thomas De La Rue, de Londres, las primeras fechas de este dos mil pesos oro. El Bank Note Museum numera el tipo Pick 430 en 1983–1986 y lo distingue de las emisiones posteriores de la Imprenta de Billetes (Pick 433 y 433A). Esta pieza es un espécimen de la primera fecha: 24 de julio de 1983. La cápsula PCGS lo cataloga SCWPM# 430as; Numista registra el espécimen de 1983 como P# 430s / TBB B971as. El anverso, en marrón y naranja, lleva a la izquierda el retrato de Simón Bolívar y, junto a él, una escena menor; al centro, la promesa de pagar al portador dos mil pesos oro. La fecha impresa es «BOGOTÁ D.E., 24 DE JULIO DE 1983». Los seriales son ceros (00000000); en rojo van «SPECIMEN Nº 030», la palabra SPECIMEN en diagonal y los óvalos De La Rue «SPECIMEN / NO VALUE». Dos perforaciones de cancelación cortan el papel. Las firmas son las de Hugo Palacios Mejía (gerente) y Francisco José Ortega (secretario), las que Numista asigna a esa fecha (HPM, FJO₁). El reverso reproduce el «Paso del Páramo de Pisba» de Francisco Antonio Cano, con el sello del banco y las cifras 2000. El certificado PCGS 59068295 lo califica 64 Very Choice New, con las notas «Hole Punch Cancelled» y «Minor Mounting Remnants on Back». No debe confundirse con las fechas de 1985–1986 del mismo diseño ni con las impresiones bogotanas de Pick 433. Esta ficha reúne las dos caras de la misma cápsula.',
      en: 'The Banco de la República ordered the first dates of this two-thousand-peso oro from Thomas De La Rue of London. The Bank Note Museum numbers Pick 430 in 1983–1986 and distinguishes it from later Imprenta de Billetes issues (Pick 433 and 433A). This piece is a specimen of the first date: 24 July 1983. The PCGS holder catalogs it as SCWPM# 430as; Numista records the 1983 specimen as P# 430s / TBB B971as. The face, in brown and orange, carries Simón Bolívar’s portrait at left with a smaller scene beside it, and at center the promise to pay the bearer two thousand gold pesos. The printed date is “BOGOTÁ D.E., 24 DE JULIO DE 1983.” The serials are zeros (00000000); in red are “SPECIMEN Nº 030,” a diagonal SPECIMEN, and De La Rue ovals reading “SPECIMEN / NO VALUE.” Two cancellation punches cut the paper. The signatures are those of Hugo Palacios Mejía (gerente) and Francisco José Ortega (secretario), the pair Numista assigns to that date (HPM, FJO₁). The back reproduces Francisco Antonio Cano’s “Paso del Páramo de Pisba,” with the bank seal and the figures 2000. PCGS certificate 59068295 grades it 64 Very Choice New, with the comments “Hole Punch Cancelled” and “Minor Mounting Remnants on Back.” It should not be confused with the 1985–1986 dates of the same design or with the Bogotá printings of Pick 433. This record gathers both sides of the same holder.',
    },
    frontCaption: {
      es: 'Anverso del 2.000 pesos oro, Pick 430as, encapsulado PCGS 64 Very Choice New: Bolívar, serial 00000000, SPECIMEN Nº 030 y fecha 24 de julio de 1983.',
      en: 'Face of the 2,000 pesos oro, Pick 430as, slabbed PCGS 64 Very Choice New: Bolívar, serial 00000000, SPECIMEN Nº 030, and the date 24 July 1983.',
    },
    backCaption: {
      es: 'Reverso del 2.000 pesos oro, Pick 430as, encapsulado PCGS 64 Very Choice New: Paso del Páramo de Pisba de F. A. Cano, óvalos De La Rue y certificado 59068295.',
      en: 'Back of the 2,000 pesos oro, Pick 430as, slabbed PCGS 64 Very Choice New: F. A. Cano’s Paso del Páramo de Pisba, De La Rue ovals, and certificate 59068295.',
    },
    scarcity: {
      es: 'Numista agrupa circulación y especímenes del diseño en N# 236486, con índice de rareza 32, y marca la frecuencia del espécimen de 1983 en 0 % entre quienes poseen el tipo. El Bank Note Museum describe 430a como la fecha 24.07.1983, impresa por Thomas De La Rue. Esta ficha no inventa una tirada de especímenes.',
      en: 'Numista groups circulating notes and specimens of the design under N# 236486, with a rarity index of 32, and marks the 1983 specimen’s frequency at 0% among owners of the type. The Bank Note Museum describes 430a as the 24.07.1983 date, printed by Thomas De La Rue. This record does not invent a specimen printage.',
    },
    population: {
      es: 'La pieza está encapsulada por PCGS Currency como 64 Very Choice New, certificado 59068295, con las notas Hole Punch Cancelled y Minor Mounting Remnants on Back. No se ha verificado de forma independiente un censo de población para ese número de cápsula.',
      en: 'The note is slabbed by PCGS Currency as 64 Very Choice New, certification 59068295, with the comments Hole Punch Cancelled and Minor Mounting Remnants on Back. A population census for that holder number has not been independently verified.',
    },
    grade: {
      es: 'PCGS 64 Very Choice New · Hole Punch Cancelled',
      en: 'PCGS 64 Very Choice New · Hole Punch Cancelled',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0430.htm',
        es: 'Bank Note Museum — Colombia P-430, 2.000 pesos oro (1983–1986)',
        en: 'Bank Note Museum — Colombia P-430, 2,000 pesos oro (1983–1986)',
        note: {
          es: '430a: 24.07.1983; anverso Bolívar, reverso Paso del Páramo de Pisba (F. A. Cano); impresor Thomas De La Rue, Londres.',
          en: '430a: 24.07.1983; Bolívar on the face, Paso del Páramo de Pisba (F. A. Cano) on the back; printer Thomas De La Rue, London.',
        },
      },
      {
        href: 'https://en.numista.com/236486',
        es: 'Numista — Colombia 2.000 pesos oro, N# 236486',
        en: 'Numista — Colombia 2,000 pesos oro, N# 236486',
        note: {
          es: 'Espécimen 24.07.1983: P# 430s / TBB B971as; firmas HPM y FJO₁; 140 × 70 mm; frecuencia 0 % en el tipo.',
          en: '24.07.1983 specimen: P# 430s / TBB B971as; signatures HPM and FJO₁; 140 × 70 mm; 0% frequency within the type.',
        },
      },
    ],
  },
  {
    id: '2000-pesos-2008',
    chapterId: 'banco-de-la-republica',
    path: `${COLOMBIA_PATH}2000-pesos-2008/`,
    pick: 'P# 457',
    serial: '10000001',
    signatures: {
      es: 'José Darío Uribe Escobar (gerente general) y Gerardo Hernández Correa (gerente ejecutivo)',
      en: 'José Darío Uribe Escobar (gerente general) and Gerardo Hernández Correa (gerente ejecutivo)',
    },
    printed: {
      es: 'Imprenta de Billetes, Banco de la República, Bogotá. Fecha impresa en el anverso: 20 de agosto de 2008. Formato publicado 130 × 65 mm; ocho dígitos, sin letra de serie; ambas numeraciones en el reverso. González White 2019 numera el tipo reducido BG# 490 (pp. 121–123) y marca N.D. la emisión de las fechas de agosto de 2008; el Bank Note Museum lista 29.08.2008 (457i) y 30.08.2008 (457j) como las fechas de 2008 de Pick 457, y 20.08.2009 como 457l. La producción BanRep de 2.000 pesos en 2008 es 280,4 millones de piezas: es el total de esa denominación ese año, no la tirada de esta fecha ni de este serial. No se publica aquí una tirada.',
      en: 'Imprenta de Billetes, Banco de la República, Bogotá. Date printed on the face: 20 August 2008. Published size 130 × 65 mm; eight digits, no series letter; both serials on the back. González White 2019 numbers the reduced type BG# 490 (pp. 121–123) and marks the August 2008 dates N.D. for emisión; the Bank Note Museum lists 29.08.2008 (457i) and 30.08.2008 (457j) as Pick 457’s 2008 dates, and 20.08.2009 as 457l. BanRep’s 2008 production of 2,000-peso notes is 280.4 million pieces: that is every note of that face value that year, not the printage of this date or this serial. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/2000-pesos-2008-10000001-composite.jpg',
      front: '/images/catalog/colombia/2000-pesos-2008-10000001-front.jpg',
      back: '/images/catalog/colombia/2000-pesos-2008-10000001-back.jpg',
    },
    title: {
      es: '2.000 pesos · 2008',
      en: '2,000 pesos · 2008',
    },
    kicker: {
      es: 'Colombia · Banco de la República · Serial capicúa binario',
      en: 'Colombia · Banco de la República · Binary radar serial',
    },
    lead: {
      es: 'Dos mil pesos de la familia reducida Pick 457: fecha 20 de agosto de 2008 y serial capicúa binario 10000001, impreso dos veces en el reverso. Esta ficha reúne anverso y reverso de la misma pieza, en funda, sin encapsular.',
      en: 'A two-thousand-peso note of the reduced Pick 457 family: date 20 August 2008 and binary radar serial 10000001, printed twice on the back. This record gathers the face and back of the same unslabbed note, in a sleeve.',
    },
    description: {
      es: 'Tras el robo de Valledupar de 1994 el Banco de la República sustituyó, en 1995–1996, los 2.000, 5.000 y 10.000 pesos. El dos mil de esa familia lleva a Francisco de Paula Santander y, en el reverso, el portal de la Casa de Moneda de Bogotá. En 2005 el banco redujo el formato de 140 × 70 mm a 130 × 65 mm, añadió el nombre «SANTANDER» junto al retrato y dejó las dos numeraciones —ocho dígitos, sin serie— solo en el reverso, en distinto tipo, tamaño y color. González White numera ese tipo reducido BG# 490; el Bank Note Museum, Pick 457 (2005–2014), impreso por la Imprenta de Billetes. Esta pieza lleva la fecha «20 DE AGOSTO DE 2008». Las firmas son las de José Darío Uribe Escobar, gerente general desde enero de 2005, y Gerardo Hernández Correa, gerente ejecutivo: el par de las fechas de 2008, antes del cambio a José Tolosa. El pie del reverso lee «IMPRENTA DE BILLETES – BANCO DE LA REPÚBLICA». El serial 10000001 aparece en negro a la izquierda y en verde a la derecha: es un capicúa (radar) y un binario —solo ceros y unos—. No es una serie baja de emisión (00000001); es un patrón de colección sobre un serial de ocho cifras. No debe confundirse con el 2.000 pesos oro de Bolívar (Pick 430/433), ni con el 2.000 grande de 1996–2005 (Pick 445/451), ni con el 2.000 de la familia de 2016. Esta ficha reúne las dos caras de la misma pieza, en funda, sin encapsular.',
      en: 'After the 1994 Valledupar robbery the Banco de la República replaced, in 1995–1996, the 2,000, 5,000, and 10,000 peso notes. The two-thousand of that family carries Francisco de Paula Santander and, on the back, the portal of Bogotá’s Casa de Moneda. In 2005 the bank cut the format from 140 × 70 mm to 130 × 65 mm, added the name “SANTANDER” beside the portrait, and left both serials — eight digits, no series letter — on the back only, in different type, size, and colour. González White numbers that reduced type BG# 490; the Bank Note Museum, Pick 457 (2005–2014), printed by the Imprenta de Billetes. This piece carries the date “20 DE AGOSTO DE 2008.” The signatures are those of José Darío Uribe Escobar, general manager from January 2005, and Gerardo Hernández Correa, executive manager: the pair on the 2008 dates, before the change to José Tolosa. The back imprint reads “IMPRENTA DE BILLETES – BANCO DE LA REPÚBLICA.” Serial 10000001 appears in black at left and in green at right: it is a palindrome (radar) and a binary — only zeros and ones. It is not a first-of-issue low serial (00000001); it is a collector pattern on an eight-digit number. It should not be confused with the Bolívar 2,000 pesos oro (Pick 430/433), the large 1996–2005 2,000 (Pick 445/451), or the 2,000 of the 2016 family. This record gathers both sides of the same unslabbed note, in a sleeve.',
    },
    history: {
      es: 'Desde 1993 los billetes del Banco de la República dejaron de llevar «pesos oro». El 16–17 de octubre de 1994 el «robo del siglo» vació la bóveda de Valledupar: unos 24.072 millones de pesos en 2.000, 5.000 y 10.000, buena parte aún sin emitir. El banco publicó rangos de seriales, abrió un canje y, en 1995–1996, rediseñó esas tres denominaciones. El dos mil de Santander y la Casa de Moneda nació en ese recambio. En noviembre de 2006 el banco puso en circulación el formato reducido (BG# 490 / Pick 457): nuevas coloraciones, marca de agua distinta y las numeraciones solo en el reverso. La familia de 2016 lo sustituyó en circulación ordinaria; esta ficha documenta un ejemplar de 2008 con serial de colección.',
      en: 'From 1993 Banco de la República notes dropped the legend “pesos oro.” On 16–17 October 1994 the “robo del siglo” emptied the Valledupar vault: some 24.072 billion pesos in 2,000, 5,000, and 10,000 notes, much of it still unissued. The bank published serial ranges, opened an exchange, and in 1995–1996 redesigned those three denominations. The Santander and Casa de Moneda two-thousand was born in that replacement. In November 2006 the bank put the reduced format into circulation (BG# 490 / Pick 457): new colouring, a different watermark, and serials on the back only. The 2016 family replaced it in ordinary circulation; this record documents a 2008 piece with a collector serial.',
    },
    frontCaption: {
      es: 'Anverso del 2.000 pesos, Pick 457: Santander, fecha 20 de agosto de 2008 y leyenda DOS MIL PESOS. Los seriales van en el reverso.',
      en: 'Face of the 2,000 pesos, Pick 457: Santander, the date 20 August 2008, and the legend DOS MIL PESOS. The serials are on the back.',
    },
    backCaption: {
      es: 'Reverso del 2.000 pesos, Pick 457: portal de la Casa de Moneda y serial capicúa binario 10000001, en negro y en verde.',
      en: 'Back of the 2,000 pesos, Pick 457: the Casa de Moneda portal and binary radar serial 10000001, in black and in green.',
    },
    scarcity: {
      es: 'González White 2019 (BG# 490, pp. 121–123) no publica cifra de emisión para las fechas de agosto de 2008 (N.D.). El Bank Note Museum describe Pick 457 como el tipo 2005–2014 de 130 × 65 mm. La tabla BanRep de producción anual atribuye 280,4 millones de piezas a todos los 2.000 pesos de 2008: no es la tirada de una fecha, de un par de firmas ni de un serial. Un capicúa binario de ocho dígitos es un patrón de colección; esta ficha no inventa una población de ese patrón.',
      en: 'González White 2019 (BG# 490, pp. 121–123) publishes no emisión figure for the August 2008 dates (N.D.). The Bank Note Museum describes Pick 457 as the 2005–2014 130 × 65 mm type. BanRep’s annual production table assigns 280.4 million pieces to every 2,000-peso note of 2008: that is not the printage of one date, signature pair, or serial. An eight-digit binary radar is a collector pattern; this record does not invent a population for that pattern.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 10000001. La pieza se presenta en funda, aparentemente sin circular, sin encapsular.',
      en: 'A PMG or PCGS census for serial 10000001 has not been independently verified. The note is shown in a sleeve, apparently uncirculated, unslabbed.',
    },
    grade: {
      es: 'Sin encapsular · en funda · aparentemente sin circular',
      en: 'Unslabbed · in a sleeve · apparently uncirculated',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0457.htm',
        es: 'Bank Note Museum — Colombia P-457, 2.000 pesos (2005–2014)',
        en: 'Bank Note Museum — Colombia P-457, 2,000 pesos (2005–2014)',
        note: {
          es: 'Tipo reducido, Imprenta de Billetes; anverso Santander, reverso Casa de Moneda. Fechas de 2008 listadas: 29.08.2008 (457i) y 30.08.2008 (457j).',
          en: 'Reduced type, Imprenta de Billetes; Santander on the face, Casa de Moneda on the back. 2008 dates listed: 29.08.2008 (457i) and 30.08.2008 (457j).',
        },
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        es: 'Banco de la República — Producción y circulación de billetes y monedas',
        en: 'Banco de la República — Banknote and coin production and circulation',
        note: {
          es: 'Producción 2008 de 2.000 pesos: 280,4 millones de piezas (total de la denominación ese año, no de una fecha Pick).',
          en: '2008 production of 2,000-peso notes: 280.4 million pieces (the denomination total that year, not one Pick date).',
        },
      },
    ],
  },
  {
    id: '20000-pesos-2017',
    chapterId: 'familias-modernas',
    path: `${COLOMBIA_PATH}20000-pesos-2017/`,
    pick: 'P# 461 / TBB B996c',
    serial: 'AF51355141',
    signatures: {
      es: 'Juan José Echavarría Soto (gerente general) y Marcela Ocampo Duque (gerente ejecutiva)',
      en: 'Juan José Echavarría Soto (gerente general) and Marcela Ocampo Duque (gerente ejecutiva)',
    },
    printed: {
      es: 'Imprenta de Billetes, Banco de la República, Bogotá. Impreso en tintas sobre papel. Fecha impresa en el reverso: 29 de agosto de 2017. Formato 143 × 66 mm (la Colección Numismática Banrepcultural lo da como 66 × 143 mm). Serial de dos letras y ocho dígitos, serie AF. El Bank Note Museum data el tipo Pick 461 en 2015–2023 y lista las fechas impresas 19.08.2015 (461a), 02.08.2016 (461b), 29.08.2017 (esta pieza; no recogida en el Standard Catalog), 24.07.2018, 23.07.2019, 26.05.2020 (dos variedades de gerente general), 27.07.2021, 25.10.2022 y 24.10.2023. González White 2019 numera esta fecha BG# NF20-6 (p. 151) y marca ¿? la emisión. Numista asigna a 29.08.2017 TBB B996c. La tarjeta de identidad CashFlow SCN83 (SOFTWARE BILL SET, variante 523334446, Colombia COP) indexa el veinte mil de la familia de 2016 como COP 20000 (CA) / COP_000020000_C_A_D_C, «Series 2015» en esa tabla, y el veinte mil anterior como COP 20000 (BA) / COP_000020000_B_A_D_B (años 2000–2012 en la tarjeta). Ese juego de software no es una tirada ni nombra este serial. La producción BanRep de 20.000 pesos en 2017 es 122,1 millones de piezas, y la entrega a Tesorería de la familia T (2016) es 112,89 millones: son totales de la denominación ese año, no la tirada de esta fecha ni de esta serie. No se publica aquí una tirada.',
      en: 'Imprenta de Billetes, Banco de la República, Bogotá. Printed in inks on paper. Date printed on the back: 29 August 2017. Size 143 × 66 mm (Banrepcultural’s Numismatic Collection lists it as 66 × 143 mm). Two-letter prefix and eight digits, series AF. The Bank Note Museum dates type Pick 461 to 2015–2023 and lists printed dates 19.08.2015 (461a), 02.08.2016 (461b), 29.08.2017 (this piece; not in the Standard Catalog), 24.07.2018, 23.07.2019, 26.05.2020 (two general-manager varieties), 27.07.2021, 25.10.2022, and 24.10.2023. González White 2019 numbers this date BG# NF20-6 (p. 151) and marks emisión ¿?. Numista assigns TBB B996c to 29.08.2017. The CashFlow SCN83 identity card (SOFTWARE BILL SET, variant 523334446, Colombia COP) indexes the 2016-family twenty-thousand as COP 20000 (CA) / COP_000020000_C_A_D_C, “Series 2015” on that table, and the previous twenty-thousand as COP 20000 (BA) / COP_000020000_B_A_D_B (2000–2012 years on the card). That software set is not printage and does not name this serial. BanRep’s 2017 production of 20,000-peso notes is 122.1 million pieces, and Tesorería delivery of the 2016 T family is 112.89 million: those are denomination totals for the year, not the printage of this date or this series. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/20000-pesos-2017-AF51355141-composite.jpg',
      front: '/images/catalog/colombia/20000-pesos-2017-AF51355141-front.jpg',
      back: '/images/catalog/colombia/20000-pesos-2017-AF51355141-back.jpg',
    },
    title: {
      es: '20.000 pesos · 2017 · serial AF51355141',
      en: '20,000 pesos · 2017 · serial AF51355141',
    },
    kicker: {
      es: 'Colombia · Familias modernas · Familia de 2016',
      en: 'Colombia · Modern families · 2016 family',
    },
    lead: {
      es: 'Veinte mil pesos de la familia de 2016, Pick 461 / TBB B996c: fecha 29 de agosto de 2017, serie AF y serial AF51355141, impreso dos veces en el anverso. Esta ficha reúne anverso y reverso de la misma pieza, en funda, sin encapsular. La tarjeta CashFlow SCN83 (variante 523334446) lista el tipo como COP 20000 (CA); no es un certificado PMG.',
      en: 'A twenty-thousand-peso note of the 2016 family, Pick 461 / TBB B996c: date 29 August 2017, series AF, and serial AF51355141, printed twice on the face. This record gathers the face and back of the same unslabbed note, in a sleeve. The CashFlow SCN83 card (variant 523334446) lists the type as COP 20000 (CA); it is not a PMG certificate.',
    },
    description: {
      es: 'En 2016 el Banco de la República puso en circulación una familia nueva —de 2.000 a 100.000— con formato por denominación, marcas táctiles y un programa iconográfico que sale de los próceres de la independencia. El 30 de junio de 2016 el veinte mil fue el segundo de esa Nueva Familia: circularía a la vez que el 20.000 de Julio Garavito. La Colección Numismática Banrepcultural precisa el homenaje: a Alfonso López Michelsen por el artículo 8.º de la Ley 1599 de 2012, y al sombrero vueltiao por el artículo 2.º de la Ley 908 de 2004, ambas del Congreso; el mismo diseño exalta los canales de La Mojana y el fruto del anón. González White numera el tipo de 143 × 66 mm en las fichas NF20; el Bank Note Museum, Pick 461 (2015–2023), impreso por la Imprenta de Billetes en tintas sobre papel. Esta pieza lleva la fecha «29 DE AGOSTO DE 2017» en el canto derecho del reverso —la tercera fecha de esa tabla BNM, sin letra Pick en el Standard Catalog— y el pie «IMPRENTA DE BILLETES - BANCO DE LA REPÚBLICA». Las firmas son las de Juan José Echavarría Soto, gerente general, y Marcela Ocampo Duque, gerente ejecutiva: el par que Numista y González White asignan a esa fecha (BG# NF20-6, serie AF). El anverso, en naranja y ocre, muestra a López Michelsen de cuerpo entero al centro, con sombrero en la mano, y un primer plano a la derecha; a la izquierda, el anón (Annona squamosa) en tinta ópticamente variable. El serial AF51355141 va en negro arriba a la izquierda y abajo a la derecha. El reverso lleva al campesino zenú con caña flecha, el sombrero vueltiao, el sistema hidráulico prehispánico de La Mojana y un fragmento del poema de Benjamín Puche Villadiego. No debe confundirse con el 20.000 de Garavito, ni con las fechas BNM 19.08.2015 (461a) y 02.08.2016 (461b) de Uribe–Tolosa, ni con 24.07.2018, 23.07.2019, 26.05.2020, 27.07.2021, 25.10.2022 o 24.10.2023. El registro NBI6603 de Banrepcultural es otra pieza de museo, no este serial. La tarjeta de identidad CashFlow SCN83 (SOFTWARE BILL SET, uso interno, variante 523334446) indexa este diseño como COP 20000 (CA) / COP_000020000_C_A_D_C y el 20.000 anterior como COP 20000 (BA); no trae serial, grado, Pick ni censo, y no se reproducen aquí las rutas de escaneo faltantes. Esta ficha reúne las dos caras de la misma pieza, en funda, sin encapsular.',
      en: 'In 2016 the Banco de la República put a new family into circulation — 2,000 to 100,000 — with a size per denomination, tactile marks, and an iconographic program that moves beyond independence heroes. On 30 June 2016 the twenty-thousand was the second note of that New Family: it would circulate alongside the Julio Garavito 20,000. Banrepcultural’s Numismatic Collection specifies the homage: to Alfonso López Michelsen under article 8 of Law 1599 of 2012, and to the sombrero vueltiao under article 2 of Law 908 of 2004, both acts of Congress; the same design exalts the canals of La Mojana and the sugar-apple fruit. González White numbers the 143 × 66 mm type as the NF20 listings; the Bank Note Museum, Pick 461 (2015–2023), printed by the Imprenta de Billetes in inks on paper. This piece carries the date “29 DE AGOSTO DE 2017” on the right edge of the back — the third date on that BNM table, unlettered in the Standard Catalog — and the imprint “IMPRENTA DE BILLETES - BANCO DE LA REPÚBLICA.” The signatures are those of Juan José Echavarría Soto, general manager, and Marcela Ocampo Duque, executive manager: the pair Numista and González White assign to that date (BG# NF20-6, series AF). The face, in orange and ochre, shows López Michelsen standing at centre with his hat in hand and a close-up at right; at left, the sugar-apple (Annona squamosa) in optically variable ink. Serial AF51355141 appears in black at upper left and lower right. The back carries a Zenú farmer with caña flecha, the sombrero vueltiao, the pre-Hispanic hydraulic system of La Mojana, and a fragment of Benjamín Puche Villadiego’s poem. It should not be confused with the Garavito 20,000, with BNM dates 19.08.2015 (461a) and 02.08.2016 (461b) of Uribe–Tolosa, or with 24.07.2018, 23.07.2019, 26.05.2020, 27.07.2021, 25.10.2022, or 24.10.2023. Banrepcultural register NBI6603 is another museum object, not this serial. The CashFlow SCN83 identity card (SOFTWARE BILL SET, internal use, variant 523334446) indexes this design as COP 20000 (CA) / COP_000020000_C_A_D_C and the previous 20,000 as COP 20000 (BA); it carries no serial, grade, Pick, or census, and the missing scan paths are not reproduced here. This record gathers both sides of the same unslabbed note, in a sleeve.',
    },
    history: {
      es: 'Alfonso Antonio Lázaro López Michelsen (Bogotá, 1913–2007) presidió la República entre 1974 y 1978 por el Partido Liberal; era hijo de Alfonso López Pumarejo. La familia de 2016 lo coloca en el veinte mil junto a la cultura zenú de la Costa Caribe: el sombrero vueltiao, la orejera, los canales de La Mojana y el anón. Banrepcultural sitúa la puesta en circulación del tipo el 30 de junio de 2016, el segundo de la Nueva Familia, conviviendo con el 20.000 de Garavito. El Bank Note Museum data las fechas impresas del Pick 461 de 2015 a 2023: 19.08.2015 (461a) y 02.08.2016 (461b), con las firmas de José Darío Uribe Escobar y José Tolosa Buitrago; esta pieza es la siguiente, 29.08.2017. El Congreso mandó el retrato (art. 8.º, Ley 1599 de 2012) y el sombrero vueltiao (art. 2.º, Ley 908 de 2004). Desde esa fecha el BNM no asigna letra Pick; las firmas de esta pieza son Echavarría y Ocampo (BG# NF20-6, serie AF). Esta ficha documenta un ejemplar de esa fecha impresa, en funda.',
      en: 'Alfonso Antonio Lázaro López Michelsen (Bogotá, 1913–2007) was president of the Republic from 1974 to 1978 for the Liberal Party; he was the son of Alfonso López Pumarejo. The 2016 family places him on the twenty-thousand beside Zenú culture of the Caribbean coast: the sombrero vueltiao, the ear ornament, the canals of La Mojana, and the sugar-apple. Banrepcultural places the type into circulation on 30 June 2016, the second note of the New Family, running alongside the Garavito 20,000. The Bank Note Museum dates Pick 461 printed dates from 2015 to 2023: 19.08.2015 (461a) and 02.08.2016 (461b), with the signatures of José Darío Uribe Escobar and José Tolosa Buitrago; this piece is the next, 29.08.2017. Congress required the portrait (art. 8, Law 1599 of 2012) and the sombrero vueltiao (art. 2, Law 908 of 2004). From that date BNM assigns no Pick letter; this piece’s signatures are Echavarría and Ocampo (BG# NF20-6, series AF). This record documents a piece of that printed date, in a sleeve.',
    },
    frontCaption: {
      es: 'Anverso del 20.000 pesos, Pick 461 / TBB B996c: López Michelsen, anón SPARK, fecha 29 de agosto de 2017 y serial AF51355141.',
      en: 'Face of the 20,000 pesos, Pick 461 / TBB B996c: López Michelsen, SPARK sugar-apple, the date 29 August 2017, and serial AF51355141.',
    },
    backCaption: {
      es: 'Reverso del 20.000 pesos, Pick 461 / TBB B996c: campesino zenú, sombrero vueltiao, sistema hidráulico de La Mojana y pie de la Imprenta de Billetes.',
      en: 'Back of the 20,000 pesos, Pick 461 / TBB B996c: a Zenú farmer, the sombrero vueltiao, the La Mojana hydraulic system, and the Imprenta de Billetes imprint.',
    },
    scarcity: {
      es: 'González White 2019 (BG# NF20-6, p. 151) no publica cifra de emisión para el 29 de agosto de 2017 (¿?). El Bank Note Museum describe Pick 461 como el tipo 2015–2023 y marca 29.08.2017 —y las fechas de 2018 a 2023— como no listadas en el Standard Catalog; solo 19.08.2015 (461a) y 02.08.2016 (461b) llevan letra. La tabla BanRep de producción anual atribuye 122,1 millones de piezas a todos los 20.000 pesos de 2017, y la de entregas a Tesorería 112,89 millones a la familia T: no es la tirada de una fecha, de un par de firmas ni de la serie AF. Numista agrupa el diseño bajo N# 208154, con índice de rareza 17, y marca la frecuencia de la fecha 29.08.2017 en 8 % entre quienes poseen el tipo. Esta ficha no inventa una tirada.',
      en: 'González White 2019 (BG# NF20-6, p. 151) publishes no emisión figure for 29 August 2017 (¿?). The Bank Note Museum describes Pick 461 as the 2015–2023 type and flags 29.08.2017 — and the 2018–2023 dates — as not listed in the Standard Catalog; only 19.08.2015 (461a) and 02.08.2016 (461b) carry letters. BanRep’s annual production table assigns 122.1 million pieces to every 20,000-peso note of 2017, and the Tesorería delivery table 112.89 million to the T family: that is not the printage of one date, signature pair, or series AF. Numista groups the design under N# 208154, with a rarity index of 17, and marks the 29.08.2017 date’s frequency at 8% among owners of the type. This record does not invent a printage.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial AF51355141. La pieza se presenta en funda, aparentemente sin circular, sin encapsular. El 523334446 de la tarjeta CashFlow SCN83 es el número del juego de software del validador (Colombia, COP), no un certificado de grado.',
      en: 'A PMG or PCGS census for serial AF51355141 has not been independently verified. The note is shown in a sleeve, apparently uncirculated, unslabbed. 523334446 on the CashFlow SCN83 card is the validator software-set number (Colombia, COP), not a grading certificate.',
    },
    grade: {
      es: 'Sin encapsular · en funda · aparentemente sin circular',
      en: 'Unslabbed · in a sleeve · apparently uncirculated',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0461.htm',
        es: 'Bank Note Museum — Colombia P-461, 20.000 pesos (2015–2023)',
        en: 'Bank Note Museum — Colombia P-461, 20,000 pesos (2015–2023)',
        note: {
          es: 'Tipo 2015–2023. Fechas impresas: 19.08.2015 (461a), 02.08.2016 (461b), 29.08.2017, 24.07.2018, 23.07.2019, 26.05.2020 (dos firmas de gerente general), 27.07.2021, 25.10.2022, 24.10.2023. Esta pieza es 29.08.2017, sin letra Pick en el Standard Catalog.',
          en: 'Type 2015–2023. Printed dates: 19.08.2015 (461a), 02.08.2016 (461b), 29.08.2017, 24.07.2018, 23.07.2019, 26.05.2020 (two general-manager signatures), 27.07.2021, 25.10.2022, 24.10.2023. This piece is 29.08.2017, unlettered in the Standard Catalog.',
        },
      },
      {
        href: 'https://en.numista.com/208154',
        es: 'Numista — Colombia 20.000 pesos, N# 208154',
        en: 'Numista — Colombia 20,000 pesos, N# 208154',
        note: {
          es: 'Fecha 29.08.2017: TBB B996c; firmas JJES y MOD; frecuencia 8 % en el tipo; índice de rareza 17.',
          en: '29.08.2017 date: TBB B996c; signatures JJES and MOD; 8% frequency within the type; rarity index 17.',
        },
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        es: 'Banco de la República — Producción y circulación de billetes y monedas',
        en: 'Banco de la República — Banknote and coin production and circulation',
        note: {
          es: 'Producción 2017 de 20.000 pesos: 122,1 millones de piezas. Entregas a Tesorería de 20.000 pesos T (familia 2016): 112,89 millones (totales de la denominación ese año, no de una fecha Pick).',
          en: '2017 production of 20,000-peso notes: 122.1 million pieces. Tesorería deliveries of 20,000-peso T notes (2016 family): 112.89 million (denomination totals that year, not one Pick date).',
        },
      },
      {
        href: 'https://colecciones.banrepcultural.org/es/documento/billete-de-veinte-mil-pesos/63a069235d96b8790f36dd35',
        es: 'Banrepcultural — Colección Numismática: Billete de veinte mil pesos (NBI6603)',
        en: 'Banrepcultural — Numismatic Collection: twenty-thousand-peso note (NBI6603)',
        note: {
          es: 'Ficha de tipo del museo (emisor Banco de la República de Colombia, 1923; impreso en tintas sobre papel; 66 × 143 mm). El 30 de junio de 2016 el veinte mil fue el segundo de la Nueva Familia y circularía a la vez que el 20.000 anterior. Homenaje a López Michelsen (art. 8.º, Ley 1599 de 2012) y al sombrero vueltiao (art. 2.º, Ley 908 de 2004); exalta los canales de La Mojana y el anón. Registro NBI6603: comparable de colección, no el serial AF51355141. La ficha en inglés de esta URL no está publicada (404). Fecha de elaboración, ingreso y ubicación actuales van en blanco en el registro; no se inventan aquí.',
          en: 'Museum type record (issuer Banco de la República de Colombia, 1923; printed in inks on paper; 66 × 143 mm). On 30 June 2016 the twenty-thousand was the second note of the New Family and would circulate alongside the previous 20,000. Homage to López Michelsen (art. 8, Law 1599 of 2012) and to the sombrero vueltiao (art. 2, Law 908 of 2004); it also exalts the canals of La Mojana and the sugar-apple fruit. Register NBI6603 is a collection comparable, not serial AF51355141. The English page for this URL is unpublished (404). Manufacture date, accession date, and current location are blank in the register; they are not invented here.',
        },
      },
      {
        href: 'https://www.cranepi.com/en/products/payment-technology/note/validators/sc-advance',
        es: 'Crane Payment Innovations — MEI SC Advance (familia CASHFLOW SCN)',
        en: 'Crane Payment Innovations — MEI SC Advance (CASHFLOW SCN family)',
        note: {
          es: 'Contexto público del validador. La fuente de esta ficha es la tarjeta de identidad CashFlowSCN83, SOFTWARE BILL SET, uso interno, variante 523334446, Colombia (COP). Indexa COP 20000 (CA) como COP_000020000_C_A_D_C, «Series 2015» en esa tabla (familia de 2016), distinto de COP 20000 (BA). No es certificado PMG: no trae serial, grado, Pick ni censo. No se enlazan imágenes privadas ni las rutas de escaneo faltantes.',
          en: 'Public product context for the validator. The source used here is the CashFlowSCN83 identity card, SOFTWARE BILL SET, internal use, variant 523334446, Colombia (COP). It indexes COP 20000 (CA) as COP_000020000_C_A_D_C, “Series 2015” on that table (2016 family), distinct from COP 20000 (BA). It is not a PMG certificate: no serial, grade, Pick, or census. Private cert images and the card’s missing scan paths are not linked.',
        },
      },
    ],
  },
  {
    id: '1000-pesos-error-2008',
    chapterId: 'errores',
    path: `${COLOMBIA_PATH}1000-pesos-error-2008/`,
    pick: 'P# 456 / TBB B986',
    serial: '23085962',
    signatures: {
      es: 'José Darío Uribe Escobar (gerente general) y Gerardo Hernández Correa (gerente ejecutivo)',
      en: 'José Darío Uribe Escobar (gerente general) and Gerardo Hernández Correa (gerente ejecutivo)',
    },
    printed: {
      es: 'Imprenta de Billetes, Banco de la República, Bogotá. Fecha leída en el anverso, desplazada al canto superior izquierdo por el error de corte: 18 de agosto de 2008. Formato publicado 130 × 65 mm; ocho dígitos, sin letra de serie; ambas numeraciones en el anverso. González White 2019 numera las fechas reducidas BG# 439-r (pp. 111–112) y lista, para 2008, el 27 y el 28 de agosto (439-r/10 y 439-r/11); el 18 de agosto lo publica en 2009 (439-r/12). El Bank Note Museum marca 27.08.2008 como 456j, 28.08.2008 como 456k y 18.08.2009 como 456l: no hay letra Pick para un 18.08.2008. Numista agrupa el tipo bajo N# 205282 y asigna a esas tres fechas el par JDUE / GHC. La producción BanRep de 1.000 pesos en 2008 es 280,4 millones de piezas: es el total de esa denominación ese año, no la tirada de esta fecha ni de este error. No se publica aquí una tirada.',
      en: 'Imprenta de Billetes, Banco de la República, Bogotá. Date read on the face, shifted to the upper-left edge by the cutting error: 18 August 2008. Published size 130 × 65 mm; eight digits, no series letter; both serials on the face. González White 2019 numbers the reduced dates BG# 439-r (pp. 111–112) and lists, for 2008, 27 and 28 August (439-r/10 and 439-r/11); 18 August is published as 2009 (439-r/12). The Bank Note Museum marks 27.08.2008 as 456j, 28.08.2008 as 456k, and 18.08.2009 as 456l: there is no Pick letter for an 18.08.2008. Numista groups the type under N# 205282 and assigns the JDUE / GHC pair to those three dates. BanRep’s 2008 production of 1,000-peso notes is 280.4 million pieces: that is every note of that face value that year, not the printage of this date or this error. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/1000-pesos-error-2008-23085962-composite.jpg',
      front: '/images/catalog/colombia/1000-pesos-error-2008-23085962-front.jpg',
      back: '/images/catalog/colombia/1000-pesos-error-2008-23085962-back.jpg',
    },
    title: {
      es: '1.000 pesos · error de corte · 2008',
      en: '1,000 pesos · cutting error · 2008',
    },
    kicker: {
      es: 'Colombia · Errores · Corte descentrado',
      en: 'Colombia · Errors · Off-center cut',
    },
    lead: {
      es: 'Mil pesos de Gaitán, Pick 456 / TBB B986: fecha 18 de agosto de 2008 y serial 23085962, con un error de corte vertical que deja la fecha en el canto superior izquierdo —donde no debería estar— y recorta el pie bajo las firmas. Esta ficha reúne anverso y reverso de la misma pieza, en funda, sin encapsular.',
      en: 'A Gaitán one-thousand-peso note, Pick 456 / TBB B986: date 18 August 2008 and serial 23085962, with a vertical cutting error that leaves the date on the upper-left edge — where it should not be — and crops the foot under the signatures. This record gathers the face and back of the same unslabbed note, in a sleeve.',
    },
    description: {
      es: 'El mil pesos de Jorge Eliécer Gaitán, en formato reducido de 130 × 65 mm, es el Pick 456 (2005–2016) / TBB B986, impreso por la Imprenta de Billetes. González White numera las fechas reducidas BG# 439-r. En el anverso de esta pieza se lee «18 DE AGOSTO DE 2008», no al pie de las firmas sino en una franja del canto superior izquierdo: el corte de fábrica desplazó el diseño hacia abajo y capturó el margen inferior del billete impreso encima en el pliego. Las firmas son las de José Darío Uribe Escobar, gerente general desde enero de 2005, y Gerardo Hernández Correa, gerente ejecutivo: el par que Numista asigna a las fechas de 2008 y al 18.08.2009, antes del cambio a José Tolosa. El serial 23085962 aparece dos veces en el anverso, en negro, arriba a la derecha y abajo a la izquierda; no es un serial bajo ni un patrón de colección (capicúa, binario, sólido o escalera). El anverso, en naranja y ocre, muestra a Gaitán a la derecha y, al centro, la multitud vista desde el Hotel Nutibara de Medellín; a la izquierda, el dispositivo de registro en forma de balanza y el 1000. El reverso lo muestra saludando con el sombrero, con las citas «Yo no soy un hombre, soy un pueblo» y «El pueblo es superior a sus dirigentes», el sello de Libertad y el pie de imprenta. El mismo desplazamiento deja en el canto superior del reverso una tira del pie del ejemplar vecino —la fecha de tipo «BOGOTÁ, 1.º DE NOVIEMBRE DE 2005» vive en el reverso de esta familia, distinta de la fecha de plancha del anverso— y recorta el margen inferior. No es una mariposa: no conserva solapa del margen de pliego ni las barras de color. Es un corte descentrado, una maculatura de guillotina. No debe confundirse con el mil grande de 140 × 70 mm (Pick 450), ni con las fechas catalogadas 27.08.2008 (456j) y 28.08.2008 (456k), ni con el 18.08.2009 (456l), ni con la mariposa de 10.06.2011 (serial 11508701) de esta misma vitrina. Esta ficha reúne las dos caras de la misma pieza, en funda, sin encapsular.',
      en: 'The Jorge Eliécer Gaitán one-thousand in the reduced 130 × 65 mm format is Pick 456 (2005–2016) / TBB B986, printed by the Imprenta de Billetes. González White numbers the reduced dates BG# 439-r. On the face of this piece the line “18 DE AGOSTO DE 2008” is read not under the signatures but in a strip along the upper-left edge: the factory cut shifted the design downward and captured the lower margin of the note printed above it on the sheet. The signatures are those of José Darío Uribe Escobar, general manager from January 2005, and Gerardo Hernández Correa, executive manager: the pair Numista assigns to the 2008 dates and to 18.08.2009, before the change to José Tolosa. Serial 23085962 appears twice on the face, in black, at upper right and lower left; it is not a low serial and not a collector pattern (radar, binary, solid, or ladder). The face, in orange and ochre, shows Gaitán at right and, at centre, the crowd as seen from Medellín’s Hotel Nutibara; at left, the scales registration device and the 1000. The back shows him waving his hat, with the quotations “Yo no soy un hombre, soy un pueblo” and “El pueblo es superior a sus dirigentes,” the Liberty seal, and the printer’s imprint. The same shift leaves on the back’s upper edge a strip from the neighbouring note’s foot — the type date “BOGOTÁ, 1.º DE NOVIEMBRE DE 2005” lives on the back of this family, distinct from the face plate date — and crops the lower margin. It is not a butterfly: it keeps no sheet-margin flap and no color bars. It is an off-center cut, a guillotine maculature. It should not be confused with the large 140 × 70 mm one-thousand (Pick 450), with the catalogued dates 27.08.2008 (456j) and 28.08.2008 (456k), with 18.08.2009 (456l), or with this case’s 10.06.2011 butterfly (serial 11508701). This record gathers both sides of the same unslabbed note, in a sleeve.',
    },
    history: {
      es: 'Jorge Eliécer Gaitán (1903–1948) preside el mil pesos del Banco de la República desde la primera fecha, 7 de agosto de 2001, puesta en circulación en 2002 en 140 × 70 mm. En 2005–2006 el banco redujo el formato a 130 × 65 mm, renovó la marca de agua y siguió imprimiendo en la Imprenta de Billetes. El anverso toma la multitud desde un balcón del Hotel Nutibara; el reverso, el saludo de candidato del 23 de septiembre de 1945. González White anota que el tipo reducido circuló desde el 17 de noviembre de 2006. El tipo siguió hasta 2016; no se conocen reposiciones. Esta ficha no documenta un ejemplar de circulación ordinaria: documenta una maculatura que escapó al corte con el diseño corrido respecto del papel.',
      en: 'Jorge Eliécer Gaitán (1903–1948) has occupied the Banco de la República one-thousand since the first date, 7 August 2001, put into circulation in 2002 at 140 × 70 mm. In 2005–2006 the bank cut the format to 130 × 65 mm, renewed the watermark, and kept printing at the Imprenta de Billetes. The face takes the crowd from a balcony of the Hotel Nutibara; the back, the candidate’s greeting of 23 September 1945. González White notes that the reduced type circulated from 17 November 2006. The type ran through 2016; no replacements are recorded. This record does not document an ordinary circulating example: it documents a maculature that escaped the cut with the design shifted on the paper.',
    },
    frontCaption: {
      es: 'Anverso del 1.000 pesos, Pick 456: Gaitán, serial 23085962 y la fecha 18 de agosto de 2008 en el canto superior izquierdo, fuera de su sitio bajo las firmas.',
      en: 'Face of the 1,000 pesos, Pick 456: Gaitán, serial 23085962, and the date 18 August 2008 on the upper-left edge, off its place under the signatures.',
    },
    backCaption: {
      es: 'Reverso del 1.000 pesos, Pick 456: Gaitán saludando, las dos citas y, en el canto superior, la tira del pie del ejemplar vecino del pliego.',
      en: 'Back of the 1,000 pesos, Pick 456: Gaitán waving, the two quotations, and, on the upper edge, the strip from the neighbouring note’s foot on the sheet.',
    },
    scarcity: {
      es: 'González White 2019 (BG# 439-r, pp. 111–112) no publica cifra de emisión para las fechas de agosto de 2008 (las filas 439-r/10 y 439-r/11 remiten a N.D.). El 18 de agosto lo lista en 2009 (439-r/12), no en 2008. El Bank Note Museum describe Pick 456 como el tipo 2005–2016 de 130 × 65 mm y no asigna letra a un 18.08.2008. Numista agrupa el diseño bajo N# 205282; las frecuencias que marca para 27.08.2008, 28.08.2008 y 18.08.2009 son de esas fechas ordinarias, no de las maculaturas. La tabla BanRep de producción anual atribuye 280,4 millones de piezas a todos los 1.000 pesos de 2008: no es la tirada de una fecha, de un par de firmas ni de un error de corte. Un corte descentrado que arrastra la fecha al canto opuesto es una pieza de vitrina; esta ficha no inventa una población de ese error.',
      en: 'González White 2019 (BG# 439-r, pp. 111–112) publishes no emisión figure for the August 2008 dates (rows 439-r/10 and 439-r/11 point back to N.D.). It lists 18 August as 2009 (439-r/12), not 2008. The Bank Note Museum describes Pick 456 as the 2005–2016 130 × 65 mm type and assigns no letter to an 18.08.2008. Numista groups the design under N# 205282; the frequencies it marks for 27.08.2008, 28.08.2008, and 18.08.2009 are for those ordinary dates, not for maculatures. BanRep’s annual production table assigns 280.4 million pieces to every 1,000-peso note of 2008: that is not the printage of one date, signature pair, or cutting error. An off-center cut that carries the date to the opposite edge is a showcase piece; this record does not invent a population for that error.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 23085962. La pieza se presenta en funda, aparentemente sin circular, sin encapsular. El error es de producción, no un certificado de grado.',
      en: 'A PMG or PCGS census for serial 23085962 has not been independently verified. The note is shown in a sleeve, apparently uncirculated, unslabbed. The error is a production fault, not a grading certificate.',
    },
    grade: {
      es: 'Sin encapsular · en funda · aparentemente sin circular · error de corte (descentrado)',
      en: 'Unslabbed · in a sleeve · apparently uncirculated · off-center cutting error',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0456.htm',
        es: 'Bank Note Museum — Colombia P-456, 1.000 pesos (2005–2016)',
        en: 'Bank Note Museum — Colombia P-456, 1,000 pesos (2005–2016)',
        note: {
          es: 'Tipo reducido, Imprenta de Billetes; anverso y reverso Gaitán. El catálogo marca 456j = 27.08.2008, 456k = 28.08.2008 y 456l = 18.08.2009. Esta pieza lleva 18.08.2008 en el canto; no se le asigna aquí una letra Pick.',
          en: 'Reduced type, Imprenta de Billetes; Gaitán on face and back. The catalogue marks 456j = 27.08.2008, 456k = 28.08.2008, and 456l = 18.08.2009. This piece carries 18.08.2008 on the edge; no Pick letter is assigned here.',
        },
      },
      {
        href: 'https://en.numista.com/205282',
        es: 'Numista — Colombia 1.000 pesos (formato reducido), N# 205282',
        en: 'Numista — Colombia 1,000 pesos (reduced format), N# 205282',
        note: {
          es: 'Tipo 2005–2016, 130 × 65 mm; firmas JDUE y GHC en las fechas de 2008 y en 18.08.2009. No se publican columnas de precio. La fecha 18.08.2008 no tiene fila propia en esa tabla.',
          en: '2005–2016 type, 130 × 65 mm; signatures JDUE and GHC on the 2008 dates and on 18.08.2009. Price columns are not published here. The 18.08.2008 date has no row of its own on that table.',
        },
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        es: 'Banco de la República — Producción y circulación de billetes y monedas',
        en: 'Banco de la República — Banknote and coin production and circulation',
        note: {
          es: 'Producción 2008 de 1.000 pesos: 280,4 millones de piezas (total de la denominación ese año, no de una fecha Pick ni de un error). La tabla de entregas a Tesorería comienza en 2010.',
          en: '2008 production of 1,000-peso notes: 280.4 million pieces (the denomination total for that year, not one Pick date or error). The Tesorería delivery table begins in 2010.',
        },
      },
    ],
  },
  {
    id: '1000-pesos-error-2011',
    chapterId: 'errores',
    path: `${COLOMBIA_PATH}1000-pesos-error-2011/`,
    pick: 'P# 456n / TBB B986n',
    serial: '11508701',
    signatures: {
      es: 'José Darío Uribe Escobar (gerente general) y José Tolosa Buitrago (gerente ejecutivo)',
      en: 'José Darío Uribe Escobar (gerente general) and José Tolosa Buitrago (gerente ejecutivo)',
    },
    printed: {
      es: 'Imprenta de Billetes, Banco de la República, Bogotá. Fecha impresa en el anverso: 10 de junio de 2011. Formato publicado 130 × 65 mm; ocho dígitos, sin letra de serie; ambas numeraciones en el anverso. Esta pieza conserva, además, una solapa del margen de pliego que sobresale del rectángulo. González White 2019 numera la fecha BG# 439-r/14 (p. 112). El Bank Note Museum lista 10.06.2011 como Pick 456n. Numista asigna TBB B986n y sitúa la puesta en circulación el 27 de febrero de 2012. La producción BanRep de 1.000 pesos en 2011 es 196,1 millones de piezas, y la entrega a Tesorería del mismo año coincide: es el total de esa denominación ese año, no la tirada de esta fecha ni de este error. No se publica aquí una tirada.',
      en: 'Imprenta de Billetes, Banco de la República, Bogotá. Date printed on the face: 10 June 2011. Published size 130 × 65 mm; eight digits, no series letter; both serials on the face. This piece also keeps a sheet-margin flap that extends beyond the rectangle. González White 2019 numbers the date BG# 439-r/14 (p. 112). The Bank Note Museum lists 10.06.2011 as Pick 456n. Numista assigns TBB B986n and places the note into circulation on 27 February 2012. BanRep’s 2011 production of 1,000-peso notes is 196.1 million pieces, and Tesorería delivery that year matches: that is every note of that face value that year, not the printage of this date or this error. No printage is published here.',
    },
    images: {
      composite: '/images/catalog/colombia/1000-pesos-error-2011-11508701-composite.jpg',
      front: '/images/catalog/colombia/1000-pesos-error-2011-11508701-front.jpg',
      back: '/images/catalog/colombia/1000-pesos-error-2011-11508701-back.jpg',
    },
    title: {
      es: '1.000 pesos · error mariposa · 2011',
      en: '1,000 pesos · butterfly-cut error · 2011',
    },
    kicker: {
      es: 'Colombia · Errores · Mariposa',
      en: 'Colombia · Errors · Butterfly cut',
    },
    lead: {
      es: 'Mil pesos de Gaitán, Pick 456n / TBB B986n: fecha 10 de junio de 2011 y serial 11508701, con un error de corte en solapa —mariposa— que conserva las barras de color y las casillas A, B y C del margen de pliego. Esta ficha reúne anverso y reverso de la misma pieza, sin encapsular.',
      en: 'A Gaitán one-thousand-peso note, Pick 456n / TBB B986n: date 10 June 2011 and serial 11508701, with a butterfly-cut fold-over that retains the sheet-margin color bars and the A, B, and C boxes. This record gathers the face and back of the same unslabbed note.',
    },
    description: {
      es: 'El mil pesos de Jorge Eliécer Gaitán, en formato reducido de 130 × 65 mm, es el Pick 456 (2005–2016) / TBB B986, impreso por la Imprenta de Billetes. González White numera las fechas reducidas BG# 439-r; esta pieza lleva «10 DE JUNIO DE 2011», BG# 439-r/14, que el Bank Note Museum marca 456n. Las firmas son las de José Darío Uribe Escobar, gerente general, y José Tolosa Buitrago, gerente ejecutivo: el par que Numista asigna a esa fecha (TBB B986n; Hernández# 453 en esa ficha). El serial 11508701 aparece dos veces en el anverso, en negro, arriba a la derecha y abajo a la izquierda; no es un serial bajo ni un patrón de colección (capicúa, binario, sólido o escalera). El anverso, en naranja y ocre, muestra a Gaitán a la derecha y, al centro, la multitud vista desde el Hotel Nutibara de Medellín; a la izquierda, el dispositivo de registro en forma de balanza y el 1000. El reverso lo muestra saludando con el sombrero, con las citas «Yo no soy un hombre, soy un pueblo» y «El pueblo es superior a sus dirigentes», el sello de Libertad y el pie «IMPRENTA DE BILLETES – BANCO DE LA REPÚBLICA». Lo que distingue esta pieza no es el tipo sino el error: una solapa trapezoidal del margen de pliego quedó unida a la esquina superior derecha del anverso —la superior izquierda del reverso—. En esa solapa se leen las barras de color de control y las casillas A, B y C con una marca circular de registro: material que el corte de fábrica debía desechar. En la notafilia colombiana Hernández llama mariposa a ese ala de papel; el pliegue de fábrica que la dejó unida es un error de producción, no una variedad de diseño. No debe confundirse con el mil grande de 140 × 70 mm (Pick 450), ni con las fechas 11.06.2011 (456o) y 12.06.2011 (456p), ni con 27.08.2014, 19.08.2015 o 02.08.2016. Esta ficha reúne las dos caras de la misma pieza, sin encapsular.',
      en: 'The Jorge Eliécer Gaitán one-thousand in the reduced 130 × 65 mm format is Pick 456 (2005–2016) / TBB B986, printed by the Imprenta de Billetes. González White numbers the reduced dates BG# 439-r; this piece carries “10 DE JUNIO DE 2011,” BG# 439-r/14, which the Bank Note Museum marks 456n. The signatures are those of José Darío Uribe Escobar, general manager, and José Tolosa Buitrago, executive manager: the pair Numista assigns to that date (TBB B986n; Hernández# 453 on that record). Serial 11508701 appears twice on the face, in black, at upper right and lower left; it is not a low serial and not a collector pattern (radar, binary, solid, or ladder). The face, in orange and ochre, shows Gaitán at right and, at centre, the crowd as seen from Medellín’s Hotel Nutibara; at left, the scales registration device and the 1000. The back shows him waving his hat, with the quotations “Yo no soy un hombre, soy un pueblo” and “El pueblo es superior a sus dirigentes,” the Liberty seal, and the imprint “IMPRENTA DE BILLETES – BANCO DE LA REPÚBLICA.” What distinguishes this piece is the error, not the type: a trapezoidal flap of sheet margin remained attached to the upper-right corner of the face — the upper-left of the back. That flap carries the control color bars and the A, B, and C boxes with a circular registration mark: material the factory cut was meant to discard. In Colombian notaphily Hernández calls that paper wing a mariposa (butterfly); the as-made fold that left it attached is a production error, not a design variety. It should not be confused with the large 140 × 70 mm one-thousand (Pick 450), with dates 11.06.2011 (456o) and 12.06.2011 (456p), or with 27.08.2014, 19.08.2015, or 02.08.2016. This record gathers both sides of the same unslabbed note.',
    },
    history: {
      es: 'Jorge Eliécer Gaitán (1903–1948) preside el mil pesos del Banco de la República desde la primera fecha, 7 de agosto de 2001, puesta en circulación en 2002 en 140 × 70 mm. En 2005–2006 el banco redujo el formato a 130 × 65 mm, renovó la marca de agua y siguió imprimiendo en la Imprenta de Billetes. El anverso toma la multitud desde un balcón del Hotel Nutibara; el reverso, el saludo de candidato del 23 de septiembre de 1945. Numista data la circulación de esta fecha, 10 de junio de 2011, el 27 de febrero de 2012. El tipo siguió hasta 2016; no se conocen reposiciones. Esta ficha no documenta un ejemplar de circulación ordinaria: documenta una maculatura que escapó al corte con el margen de pliego aún unido.',
      en: 'Jorge Eliécer Gaitán (1903–1948) has occupied the Banco de la República one-thousand since the first date, 7 August 2001, put into circulation in 2002 at 140 × 70 mm. In 2005–2006 the bank cut the format to 130 × 65 mm, renewed the watermark, and kept printing at the Imprenta de Billetes. The face takes the crowd from a balcony of the Hotel Nutibara; the back, the candidate’s greeting of 23 September 1945. Numista dates this printed date, 10 June 2011, into circulation on 27 February 2012. The type ran through 2016; no replacements are recorded. This record does not document an ordinary circulating example: it documents a maculature that escaped the cut with the sheet margin still attached.',
    },
    frontCaption: {
      es: 'Anverso del 1.000 pesos, Pick 456n: Gaitán, fecha 10 de junio de 2011, serial 11508701 y solapa mariposa con barras de color y casillas A, B y C.',
      en: 'Face of the 1,000 pesos, Pick 456n: Gaitán, the date 10 June 2011, serial 11508701, and a butterfly flap with color bars and the A, B, and C boxes.',
    },
    backCaption: {
      es: 'Reverso del 1.000 pesos, Pick 456n: Gaitán saludando, las dos citas y la misma solapa del margen, vista desde el canto superior izquierdo.',
      en: 'Back of the 1,000 pesos, Pick 456n: Gaitán waving, the two quotations, and the same margin flap, seen from the upper-left edge.',
    },
    scarcity: {
      es: 'González White 2019 (BG# 439-r/14, p. 112) no publica cifra de emisión para el 10 de junio de 2011. El Bank Note Museum describe Pick 456 como el tipo 2005–2016 de 130 × 65 mm y marca 456n esa fecha. Numista agrupa el diseño bajo N# 205282 y marca la frecuencia de 10.06.2011 en 6 % entre quienes poseen el tipo; esa cifra es de la fecha ordinaria, no de las maculaturas. La tabla BanRep de producción anual atribuye 196,1 millones de piezas a todos los 1.000 pesos de 2011, y la de entregas a Tesorería el mismo total: no es la tirada de una fecha, de un par de firmas ni de un error de corte. Un billete mariposa con barras de color del pliego es una pieza de vitrina; esta ficha no inventa una población de ese error.',
      en: 'González White 2019 (BG# 439-r/14, p. 112) publishes no emisión figure for 10 June 2011. The Bank Note Museum describes Pick 456 as the 2005–2016 130 × 65 mm type and marks 456n for that date. Numista groups the design under N# 205282 and marks the 10.06.2011 date’s frequency at 6% among owners of the type; that figure is for the ordinary date, not for maculatures. BanRep’s annual production table assigns 196.1 million pieces to every 1,000-peso note of 2011, and the Tesorería delivery table the same total: that is not the printage of one date, signature pair, or cutting error. A butterfly note that still carries the sheet’s color bars is a showcase piece; this record does not invent a population for that error.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 11508701. La pieza se presenta sin encapsular, aparentemente sin circular. El error es de producción, no un certificado de grado.',
      en: 'A PMG or PCGS census for serial 11508701 has not been independently verified. The note is shown unslabbed, apparently uncirculated. The error is a production fault, not a grading certificate.',
    },
    grade: {
      es: 'Sin encapsular · aparentemente sin circular · error de corte (mariposa)',
      en: 'Unslabbed · apparently uncirculated · butterfly-cut error',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0456.htm',
        es: 'Bank Note Museum — Colombia P-456, 1.000 pesos (2005–2016)',
        en: 'Bank Note Museum — Colombia P-456, 1,000 pesos (2005–2016)',
        note: {
          es: 'Tipo reducido, Imprenta de Billetes; anverso y reverso Gaitán. Esta pieza es 10.06.2011 (456n). El catálogo marca 456p como 12.06.2011 y corrige un 13.06.2011 inexistente.',
          en: 'Reduced type, Imprenta de Billetes; Gaitán on face and back. This piece is 10.06.2011 (456n). The catalogue marks 456p as 12.06.2011 and corrects a non-existent 13.06.2011.',
        },
      },
      {
        href: 'https://en.numista.com/205282',
        es: 'Numista — Colombia 1.000 pesos (formato reducido), N# 205282',
        en: 'Numista — Colombia 1,000 pesos (reduced format), N# 205282',
        note: {
          es: 'Fecha 10.06.2011: P# 456n, TBB B986n, Hernández# 453; firmas JDUE y JTB; circulación 27 de febrero de 2012; frecuencia 6 % en el tipo. No se publican columnas de precio.',
          en: '10.06.2011 date: P# 456n, TBB B986n, Hernández# 453; signatures JDUE and JTB; circulation 27 February 2012; 6% frequency within the type. Price columns are not published here.',
        },
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        es: 'Banco de la República — Producción y circulación de billetes y monedas',
        en: 'Banco de la República — Banknote and coin production and circulation',
        note: {
          es: 'Producción 2011 de 1.000 pesos: 196,1 millones de piezas. Entregas a Tesorería del mismo año: 196,1 millones (totales de la denominación ese año, no de una fecha Pick ni de un error).',
          en: '2011 production of 1,000-peso notes: 196.1 million pieces. Tesorería deliveries that year: 196.1 million (denomination totals for the year, not one Pick date or error).',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Colombia · Banca libre',
    collectionLink: 'Colombia',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    historyHeading: 'El banco',
    scarcityHeading: 'Rareza e impresión',
    populationHeading: 'Población',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printedLabel: 'Impresión',
    signaturesLabel: 'Firmas',
    serialLabel: 'Número de serie',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'Colombia · Free banking',
    collectionLink: 'Colombia',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    historyHeading: 'The bank',
    scarcityHeading: 'Scarcity and printage',
    populationHeading: 'Population',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printedLabel: 'Printage',
    signaturesLabel: 'Signatures',
    serialLabel: 'Serial number',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function noteById(id: string): ColombiaNote | undefined {
  return colombiaNotes.find((note) => note.id === id);
}

export function notePieces(note: ColombiaNote): ColombiaNotePiece[] {
  if (note.pieces?.length) return note.pieces;
  return [
    {
      id: note.id,
      pick: note.pick,
      serial: note.serial,
      signatures: note.signatures,
      printed: note.printed,
      images: note.images,
      title: note.title,
      lead: note.lead,
      description: note.description,
      frontCaption: note.frontCaption,
      backCaption: note.backCaption,
      scarcity: note.scarcity,
      population: note.population,
      grade: note.grade,
      sources: note.sources,
    },
  ];
}

export function notePath(note: ColombiaNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: ColombiaChapterId): ColombiaNote[] {
  if (chapterId === 'errores') return [];
  return colombiaNotes.filter((note) => note.chapterId === chapterId);
}

const HOLDING_SORT_ID = /^(\d+)-pesos?(?:-[a-z0-9]+)*-(\d{4})$/i;

export function holdingSortKey(id: string): { denomination: number; year: number } {
  const match = id.match(HOLDING_SORT_ID);
  if (!match) {
    return { denomination: Number.MAX_SAFE_INTEGER, year: 0 };
  }
  return { denomination: Number(match[1]), year: Number(match[2]) };
}

export type ColombiaSeriesCard = {
  note: ColombiaNote;
  piece: ColombiaNotePiece;
  denomination: number;
  year: number;
};

export function seriesCardsForChapter(chapterId: ColombiaChapterId): ColombiaSeriesCard[] {
  const cards = notesForChapter(chapterId).flatMap((note) =>
    notePieces(note).map((piece) => {
      const key = holdingSortKey(piece.id);
      return { note, piece, denomination: key.denomination, year: key.year };
    }),
  );
  cards.sort((a, b) => a.denomination - b.denomination || a.year - b.year);
  return cards;
}

export function noteSeriesLabel(note: ColombiaNote, locale: 'es' | 'en'): string {
  if (note.chapterId === 'errores') {
    return `Colombia · ${seriesCopy[locale].errorsTitle}`;
  }
  const chapter = colombiaChapters.find((entry) => entry.id === note.chapterId);
  const era = chapter?.title[locale] ?? 'Colombia';
  return `Colombia · ${era}`;
}

export const colombiaNoteSlugs = colombiaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));
