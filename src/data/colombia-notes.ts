import type { CatalogSource, LocalizedText } from './catalog';
import type { ColombiaChapterId } from './colombia';
import { COLOMBIA_PATH, colombiaChapters } from './colombia';
import { localizePath } from '../lib/locale-paths';

export type ColombiaNoteId = '5-pesos-banco-hipotecario-1881' | '5-pesos-rio-hacha-1883' | '10-pesos-oro-1943';

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
      es: 'El Banco Hipotecario se estableció en Bogotá el 1.º de octubre de 1881 —la misma fecha que lleva el anverso—. EL TIEMPO sitúa ahí la fundación y una vigencia de diez años desde el registro de las escrituras. En junio de 1882 el Poder Ejecutivo del Estado aprobó los estatutos y lo declaró en posesión de las concesiones de las leyes de 14 de enero de 1873 y 17 de noviembre de 1875 a los bancos hipotecarios; el texto se publicó en julio de 1882. El Standard Catalog of World Paper Money — Specialized Issues, vía el índice de Numismondo, numera la serie S511–S515: cinco a cien pesos de 1881. Esta ficha es el cinco pesos. El anverso, en negro sobre fondo ocre, promete pagar al portador a la vista cinco pesos; a la izquierda, una alegoría agrícola sentada junto a gavillas; a la derecha, un labrador con arado y caballos; arriba, un óvalo con campo y caserío; abajo, un 5 en medallón. El serial rojo es 00000; tres perforaciones de cancelación cortan el margen inferior. El montaje de Nueva York lleva «February 1883» y, en vertical, «Serie Y». Las casillas del gerente y del presidente del consejo están en blanco. El reverso, en sepia, es un marco de guilloches con «EL BANCO» y «HIPOTECARIO» y las cifras 5 a ambos flancos. No hay firmas: son pruebas de plancha, no un ejemplar puesto en circulación. No debe confundirse con el Banco Hipotecario de la Mutualidad (S516 y siguientes) ni con el del Pacífico. Esta ficha reúne las dos cápsulas PMG de la colección —anverso y reverso por separado—.',
      en: 'The Banco Hipotecario was established in Bogotá on 1 October 1881 — the same date printed on the face. EL TIEMPO places the founding there, with a ten-year term from the registration of the deeds. In June 1882 the State Executive approved the statutes and declared the bank in possession of the concessions that the laws of 14 January 1873 and 17 November 1875 granted to mortgage banks; the text was published in July 1882. The Standard Catalog of World Paper Money — Specialized Issues, through Numismondo’s index, numbers the series S511–S515: five to one hundred pesos of 1881. This record is the five-peso. The face, black on an ochre underprint, promises to pay the bearer on sight five pesos; at left, a seated agricultural allegory beside sheaves; at right, a ploughman with horses; above, an oval of field and homestead; below, a 5 in a medallion. The red serial is 00000; three cancellation punches cut the lower margin. The New York mount reads “February 1883” and, vertically, “Serie Y.” The spaces for the manager and the president of the board are blank. The sepia back is a guilloche frame with “EL BANCO” and “HIPOTECARIO” and the figures 5 at each flank. There are no signatures: these are plate proofs, not a note placed in circulation. It should not be confused with the Banco Hipotecario de la Mutualidad (S516 and later) or with the Pacífico bank. This record gathers the collection’s two PMG holders — face and back, separately slabbed.',
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
      es: 'Numismondo registra S511–S515 como la serie de 1881 del Banco Hipotecario y marca las imágenes como pendientes. El mercado de este banco bogotano ve sobre todo planchas de Nueva York: pruebas montadas, perforadas y con seriales de ceros. Esta ficha no inventa una tirada de circulación.',
      en: 'Numismondo records S511–S515 as the 1881 Banco Hipotecario series and flags the images as needed. The market for this Bogotá bank mostly sees New York plates: mounted, punch-cancelled proofs with zero serials. This record does not invent a circulating printage.',
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
      es: 'El Banco de Rio Hacha —hoy Riohacha, en la Guajira— dejó estatutos impresos en 1882, en la Imprenta de Padilla. Al año siguiente encargó a la American Bank Note Company de Nueva York el papel de cinco pesos. El Standard Catalog of World Paper Money — Specialized Issues lo numera S819p: negro sobre fondo pardo, escudo a la izquierda, Simón Bolívar al centro y, a la derecha, una alegoría femenina apoyada en una rueda. La serie es C. El montaje de estas pruebas lleva la fecha «February 1883». El anverso promete pagar en la oficina, a la vista y al portador, cinco pesos en moneda corriente; el serial rojo es 00000 y tres perforaciones de cancelación cortan el margen inferior. El reverso, en sepia, es un marco de roleos con el 5 en ambos flancos y el pie «AMERICAN BANK NOTE COMPANY, NEW YORK». No hay firmas: son pruebas de plancha, no un ejemplar puesto en circulación. Esta ficha reúne las dos cápsulas PMG de la colección —anverso y reverso por separado—.',
      en: 'The Banco de Rio Hacha — today’s Riohacha, on the Guajira — left printed statutes in 1882, from the Imprenta de Padilla. The next year it ordered five-peso paper from the American Bank Note Company in New York. The Standard Catalog of World Paper Money — Specialized Issues numbers it S819p: black on a brown underprint, arms at left, Simón Bolívar at center, and at right a female allegory leaning on a wheel. The series is C. The mount of these proofs is dated “February 1883.” The face promises to pay at the office, on sight and to the bearer, five pesos in current money; the red serial is 00000 and three cancellation punches cut the lower margin. The sepia back is a scrollwork frame with a 5 at each flank and the imprint “AMERICAN BANK NOTE COMPANY, NEW YORK.” There are no signatures: these are plate proofs, not a note placed in circulation. This record gathers the collection’s two PMG holders — face and back, separately slabbed.',
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
          es: 'Catálogo de referencia de la notafilia colombiana; Numismondo lo cita también como Billetes del Siglo Antepasado, 1813–1915.',
          en: 'A standard Colombian notaphily catalog; Numismondo also cites Hernández as Billetes del Siglo Antepasado, 1813–1915.',
        },
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

export function notePath(note: ColombiaNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: ColombiaChapterId): ColombiaNote[] {
  return colombiaNotes.filter((note) => note.chapterId === chapterId);
}

export function noteSeriesLabel(note: ColombiaNote, locale: 'es' | 'en'): string {
  const chapter = colombiaChapters.find((entry) => entry.id === note.chapterId);
  const era = chapter?.title[locale] ?? 'Colombia';
  return `Colombia · ${era}`;
}

export const colombiaNoteSlugs = colombiaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));
