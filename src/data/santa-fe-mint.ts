import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';
import type { ColombiaCoinagePieceId } from './colombia-coinage-pieces';

export const SANTA_FE_MINT_PATH = '/coleccion/colombia-numismatica/casa-de-moneda-de-santa-fe-de-nuevo-reino/';
export const SANTA_FE_MINT_PATH_EN = '/collection/colombia-numismatics/santa-fe-de-nuevo-reino-mint/';

/** Same composites the piece pages already publish. ColombiaCoinagePage uses 1536×1024. */
export const SANTA_FE_MINT_COMPOSITE = {
  width: 1536,
  height: 1024,
} as const;

export const SANTA_FE_MINT_HOLDING_IDS = [
  '2-escudos-bogota-nd-felipe-v',
  '1-escudo-bogota-1795-nr-jj',
  '1-escudo-bogota-1802-nr-jj',
  '1-real-bogota-1810-nr-jf',
  '1-escudo-bogota-1811-nr-jf',
  '1-escudo-bogota-1820-nr-jf',
  '8-reales-bogota-1821-ba-jf',
  '1-peso-bogota-1826-jf',
  '2-centavos-lazareto-1921',
] as const satisfies readonly ColombiaCoinagePieceId[];

export type SantaFeMintFact = {
  label: string;
  value: string;
  wide?: boolean;
};

export type SantaFeMintSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type SantaFeMintArchiveImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  wide?: boolean;
  featureAfterLead?: boolean;
};

export type SantaFeMintTable = {
  heading: string;
  lead: string;
  caption: string;
  headers: [string, string, string, string];
  rows: [string, string, string, string][];
};

export type SantaFeMintCopy = {
  nav: string;
  home: string;
  numismatica: string;
  series: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  published: string;
  dateLabel: string;
  factsHeading: string;
  facts: SantaFeMintFact[];
  imagesNote: string;
  holdingsHeading: string;
  holdingsAria: string;
  viewCoin: string;
  archiveImagesHeading: string;
  archiveImagesLead: string;
  archiveImages: SantaFeMintArchiveImage[];
  sections: SantaFeMintSection[];
  assayTable: SantaFeMintTable;
  relatedLead: string;
  relatedLabel: string;
  relatedHref: string;
  sourcesTitle: string;
  backSeries: string;
  coinLink: string;
  chapterLink: string;
};

export const santaFeMintCopy: Record<Locale, SantaFeMintCopy> = {
  es: {
    nav: 'Casa de Moneda de Santa Fe',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Casa de Moneda de Santa Fe de Nuevo Reino',
    metaDescription:
      'La Casa de Moneda de Santa Fe de Nuevo Reino, en Bogotá: de 1621 a 1987. Esta vitrina reúne las nueve piezas labradas ahí. Sin precios.',
    kicker: 'Colombia-Numismática · ceca de Bogotá',
    title: 'La Casa de Moneda de Santa Fe de Nuevo Reino',
    lead:
      'La ceca del Nuevo Reino: de las macuquinas de Alonso Turrillo de Yebra al claustro de La Candelaria, y a las nueve piezas de esta vitrina labradas en Santa Fe.',
    published: '2026-10-18',
    dateLabel: '18 de octubre de 2026',
    factsHeading: 'Datos',
    facts: [
      { label: 'Sede', value: 'La Candelaria, Santa Fe de Bogotá' },
      { label: 'Autorización', value: '1620 (Felipe III)' },
      { label: 'Primeras labores', value: '1621' },
      { label: 'Cese en el claustro', value: '1987' },
      { label: 'Marcas', value: 'NR, RN, SF, BA' },
      { label: 'Rasgo', value: 'Primer oro de América' },
      { label: 'Monumento nacional', value: 'Decreto 1584 de 1975' },
      { label: 'Museo', value: '1996; reapertura 23 jul. 2023', wide: true },
    ],
    imagesNote: 'Nueve discos de esta casa están en la colección.',
    holdingsHeading: 'En la colección',
    holdingsAria: 'Fichas labradas en la Casa de Moneda de Santa Fe',
    viewCoin: 'Abrir la ficha',
    archiveImagesHeading: 'La casa de moneda en imágenes de archivo',
    archiveImagesLead:
      'El patio, la portada y un volante de acuñación ayudan a leer la ceca como taller: no solo como una fila de catálogo.',
    archiveImages: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Casa_de_Moneda_de_Bogot%C3%A1_-_40062715605.jpg',
        width: 3872,
        height: 2592,
        alt: 'Patio colonial de la Casa de Moneda de Bogotá, con pilares, arcos y un balcón de madera.',
        caption:
          'Patio de la Casa de Moneda de Bogotá. Fotografía de Rodrigo Orrantia para Banrepcultural, vía Wikimedia Commons (CC BY-SA 2.0).',
        wide: true,
        featureAfterLead: true,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Casa_de_la_Moneda%2C_Bogot%C3%A1.JPG',
        width: 2998,
        height: 3748,
        alt: 'Fachada de la Casa de Moneda de Bogotá, en La Candelaria, con la portada de piedra sobre la calle 11.',
        caption:
          'Fachada de la Casa de Moneda, Bogotá. Fotografía de Felipe Restrepo Acosta, 6 de junio de 2011, vía Wikimedia Commons (CC BY 3.0).',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Museo_Casa_de_Moneda_-_Volante_de_acu%C3%B1aci%C3%B3n_-_1.jpg',
        width: 4000,
        height: 3000,
        alt: 'Volante de acuñación conservado en el Museo Casa de Moneda de Bogotá.',
        caption:
          'Volante de acuñación. Museo Casa de Moneda, Bogotá. Fotografía de SajoR, 22 de septiembre de 2023, vía Wikimedia Commons (CC BY-SA 4.0).',
      },
    ],
    sections: [
      {
        id: 'fundacion',
        title: 'La fundación y el primer oro de América',
        paragraphs: [
          'Antes de que hubiera ceca, el Nuevo Reino pagaba en oro en polvo —a veces medido en cañones de pluma— y en tejos sin peso ni ley fijos. Eso dificultaba el quinto real y el comercio interno. México tenía casa desde 1535 y Lima desde 1565; Santa Fe no. Hacia 1590 Felipe II mandó una ceca que no llegó a abrirse.',
          'En 1620 Felipe III autorizó al ingeniero Alonso Turrillo de Yebra a fundar la Casa de Moneda de Santa Fe. El Banco de la República fecha esa fundación en 1620; el Museo Casa de Moneda recuerda las labores de 1621, en una casa baja alquilada de La Candelaria. De esos yunques salió el primer oro acuñado en América: escudos y doblones, sobre todo de uno y dos escudos en el siglo XVII, mientras Potosí, Lima y México se concentraban en la plata.',
          'Turrillo mantuvo un tiempo una oficina en Cartagena de Indias, cerrada hacia 1634. Al cesar esa rama, Santa Fe quedó como la ceca permanente del Nuevo Reino. Juan Friede publicó en 1963 los documentos de 1614–1635 conservados en el Archivo General de Indias. Antonio María Barriga Villalba sistematizó el archivo colonial en los tres tomos de 1969.',
        ],
      },
      {
        id: 'macuquinas',
        title: 'Macuquinas',
        paragraphs: [
          'El primer siglo fue de herrería. El metal se vertía, se adelgazaba a golpes, se cortaba con cizallas y se estampaba a martillo. Las piezas —macuquinas— salían irregulares: el escudo de los Habsburgo, la cruz potenzada y la leyenda rara vez cabían enteros. El canto sin cordoncillo invitaba al cercenamiento.',
          'Aun así, esos discos fueron el circulante granadino. El tesoro del Mesuno reúne doblones santafereños de 1629–1636. Esta vitrina guarda una macuquina de oro atribuida a Santa Fe a nombre de Felipe V: el 2 escudos ND, por el estilo del escudo y de la cruz, no por una marca de ceca legible.',
        ],
      },
      {
        id: 'ensayadores',
        title: 'Ensayadores y marcas de ceca',
        paragraphs: [
          'El ensayador respondía por la ley. Su inicial iba en el disco; una moneda feble podía costarle el cargo. Santa Fe no usó una sola marca. Frente a la P de Potosí o la Mo de México, aquí aparecen NR, RN, SF, monogramas y, más tarde, BA en la plata de Cundinamarca.',
          'La tabla siguiente sigue la secuencia que Barriga Villalba y el estudio de doblones de dos escudos han reconstruido para el siglo XVII y el paso a Felipe V. No nombra a las personas detrás de JJ o JF en el cordoncillo de esta colección. El cob de Felipe V de esta vitrina no fija un ensaye.',
        ],
      },
      {
        id: 'flota',
        title: 'La flota de 1715',
        paragraphs: [
          'El oro de Santa Fe no se quedó en el altiplano. El 31 de julio de 1715 el huracán destruyó frente a la Florida la flota de Juan Esteban de Ubilla. Entre el tesoro recuperado desde los años 1950 hay dos escudos de Bogotá de 1649 y 1701, y plata de pilares y olas. El volumen de piezas sin circular del ensayador Buenaventura de Arce Penagos —en labores hacia 1692–1722— permitió estudios de troquel que el archivo solo no da.',
        ],
      },
      {
        id: 'borbones',
        title: 'Los Borbones, Solís y el cordoncillo',
        paragraphs: [
          'En 1751 la Corona pasó la ceca a administración real. Entre 1753 y 1756 Tomás Sánchez Reciente rediseñó el claustro de dos pisos que hoy da a la calle 11 con carrera 5. El virrey José Solís Folch de Cardona lo reinauguró en 1756: el año queda en el friso de la portada. Las prensas de volante produjeron moneda circular de cordoncillo, para que el recorte del canto se viera.',
          'Ese es el módulo de los 1 escudos NR–JJ de 1795 y 1802, del real de 1810 y de los 1 escudos NR–JF de 1811 y 1820. Cédulas reservadas de 1771 y 1786 rebajaron en secreto la ley del oro y de la plata. Luis Ángel Arango da los quilates: 22 en 1751; 21 y 2½ granos (0,901) en 1771; 21 (0,875) desde el 10 de enero de 1787.',
        ],
      },
      {
        id: 'popayan',
        title: 'La casa hermana de Popayán',
        paragraphs: [
          'Los mineros del Cauca y el Chocó pagaban el viaje hasta Bogotá. Popayán se autorizó por real cédula de 1729; Pedro Agustín de Valencia inició el cordoncillo en 1758. La Enciclopedia Banrepcultural registra el cierre por pleitos y la real cédula de 1766. Esta vitrina no mezcla las dos casas: el tipo KM# 56.2 de Popayán —cinco discos P–JF de Carlos IV— tiene página propia. Tampoco entra el 2 escudos de 1791 P–SF ni el 8 escudos de 1801 P–JF.',
        ],
      },
      {
        id: 'independencia',
        title: 'Independencia y Gran Colombia',
        paragraphs: [
          'En 1811 la Casa de Santafé entró en crisis. Cartagena acuñó cobres; Nariño mandó en 1813 la moneda «de la china». Tras Boyacá, Bolívar tomó las casas de Bogotá y Popayán y, el 18 de agosto de 1819, pidió el mismo tipo de la india. El 1 escudo de 1820 NR–JF de esta vitrina sigue con leyenda de Fernando VII y busto de Carlos IV. El 8 reales de 1821 BA–JF ya lleva la india y la granada de Cundinamarca. El peso de oro de 1826 JF es republicano: Libertad y las armas de 1821.',
          'El Congreso de Cúcuta quiso volver a la ley española; Santander eludió la norma con emisiones antedatadas. El catálogo del museo registra el primer peso republicano de 1825. Esta página no trata el cobre de Cartagena ni el cuartillo de sitio de Santa Marta: otras cecas, otras fichas.',
        ],
      },
      {
        id: 'republica',
        title: 'De la República a Ibagué',
        paragraphs: [
          'El siglo XIX cambió el nombre del país y los troqueles. En 1836 se unificó el régimen; en 1846–1847, Lino de Pombo y Florentino González impusieron la ley 0,900 y el sistema decimal. En la década de 1880 Bogotá instaló prensas de vapor de Ralph Heaton & Sons. Popayán cesó en 1881. Bogotá y Medellín cerraron hacia 1890 y Bogotá reanudó en 1906.',
          'La ley 25 de 1923, sobre el proyecto de la misión Kemmerer, creó el Banco de la República. El Banco, en su cronología, asumió la Casa de Bogotá en 1946 y compró la de Medellín en 1953. El 9 de abril de 1948 la casa resistió el Bogotazo. En 1982 Ibagué empezó a fabricar cospeles; en 1987 se trasladó allí la acuñación. Santa Fe dejó de golpear después de 366 años. El 2 centavos Lazareto de 1921 de esta vitrina se labró en Bogotá para el cordón de los lazaretos: no es moneda colonial, y tiene página de tipo en Numismática de los Lazaretos.',
        ],
      },
      {
        id: 'museo',
        title: 'De fábrica a museo',
        paragraphs: [
          'El decreto 1584 del 11 de agosto de 1975 declaró el edificio monumento nacional. Un primer museo público abrió a comienzos de los años sesenta. La exposición permanente abrió en diciembre de 1996, en la calle 11 n.° 4-93. El claustro ancla hoy la Manzana Cultural del Banco, junto al Museo Botero y al MAMU.',
          'Entre septiembre de 2021 y el 23 de julio de 2023 el Museo Casa de Moneda se renovó para el centenario del Banco. La nueva museografía obtuvo el iF Design Award 2025 en arquitectura de interiores para exposiciones. En julio de 2024 se abrió la sala «Siglo XXI. Un país que cambia de imagen». El Boletín Cultural de 2019 sitúa la colección del Banco por encima de las 18.000 piezas; la muestra permanente reúne, según la curaduría reciente, alrededor de 1.700.',
        ],
      },
      {
        id: 'vitrina',
        title: 'Lo que guarda esta vitrina',
        paragraphs: [
          'Nueve discos: la macuquina de Felipe V; los 1 escudos NR–JJ de 1795 y 1802; el real de 1810 NR–JF; los 1 escudos NR–JF de 1811 y 1820; el 8 reales de 1821 BA–JF; el peso de oro de 1826 JF; y el 2 centavos Lazareto de 1921. El 50 centavos de 1916 (KM# 193.1) se lista como Birmingham / Bogotá, sin marca en el disco: no entra aquí. Tampoco el 50 centavos Lazareto de 1931, sin marca de ceca, ni las coscojas de Santander, ni Popayán.',
          'No se publica un censo de encapsulados ni un martillo. Las fotografías no autentican el metal. Las tablas BanRep de moneda empiezan en 1987.',
        ],
      },
    ],
    assayTable: {
      heading: 'Ensayadores de las macuquinas de 2 escudos',
      lead:
        'Secuencia reconstruida para los 2 escudos de oro de Santa Fe, según Barriga Villalba y las piezas supervivientes. No es la lista de JJ ni de JF en el cordoncillo de esta colección.',
      caption: 'Ensayadores de las macuquinas de 2 escudos de Santa Fe',
      headers: ['Periodo', 'Monarca', 'Ensayador', 'Marcas'],
      rows: [
        ['1622', 'Felipe III', 'Sin inicial visible', 'SF'],
        ['1627–1632', 'Felipe IV', 'Miguel Pinto Camargo', 'NR, RN, NRP, RNP'],
        ['1632–1642', 'Felipe IV', 'Alonso de Anuncibay', 'NRA'],
        ['1642–1676', 'Felipe IV y Carlos II', 'Pedro Ramos', 'NR, NRR'],
        ['1678–1686', 'Carlos II', 'Pedro García de Villanueva', 'NR'],
        ['1687', 'Carlos II', 'José Martines', 'NR'],
        ['1687–1692', 'Carlos II', 'Pedro García de Villanueva', 'NR'],
        ['1692–1722', 'Carlos II y Felipe V', 'Buenaventura de Arce Penagos', 'NR'],
      ],
    },
    relatedLead: 'El 1 escudo de oro de Carlos IV, labrado en la casa hermana de Popayán entre 1792 y 1808, tiene página de tipo.',
    relatedLabel: '1 escudo de Popayán, Carlos IV (1792–1808)',
    relatedHref: '/coleccion/colombia-numismatica/1-escudo-carlos-iv-popayan-1792-1808/',
    sourcesTitle: 'Fuentes',
    backSeries: 'Volver a Colombia-Numismática',
    coinLink: 'La Casa de Moneda de Santa Fe de Nuevo Reino tiene su propia página.',
    chapterLink: 'Leer la Casa de Moneda de Santa Fe de Nuevo Reino',
  },
  en: {
    nav: 'The Santa Fe mint',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'The Santa Fe de Nuevo Reino mint',
    metaDescription:
      'The mint of Santa Fe de Nuevo Reino, in Bogotá: from 1621 to 1987. This case holds the nine pieces struck there. No prices.',
    kicker: 'Colombia-Numismatics · Bogotá mint',
    title: 'The Mint of Santa Fe de Nuevo Reino',
    lead:
      'The mint of the New Kingdom: from Alonso Turrillo de Yebra’s cobs to the cloister in La Candelaria, and to the nine pieces in this case struck at Santa Fe.',
    published: '2026-10-18',
    dateLabel: '18 October 2026',
    factsHeading: 'Facts',
    facts: [
      { label: 'Seat', value: 'La Candelaria, Santa Fe de Bogotá' },
      { label: 'Authorization', value: '1620 (Philip III)' },
      { label: 'First striking', value: '1621' },
      { label: 'End at the cloister', value: '1987' },
      { label: 'Marks', value: 'NR, RN, SF, BA' },
      { label: 'Distinction', value: 'First gold coinage in the Americas' },
      { label: 'National monument', value: 'Decree 1584 of 1975' },
      { label: 'Museum', value: '1996; reopened 23 July 2023', wide: true },
    ],
    imagesNote: 'Nine discs of this house are in the collection.',
    holdingsHeading: 'In the collection',
    holdingsAria: 'Records struck at the Santa Fe mint',
    viewCoin: 'Open the record',
    archiveImagesHeading: 'The mint in archival images',
    archiveImagesLead:
      'The courtyard, the doorway, and a screw press help read the house as a workshop: not only as a catalogue row.',
    archiveImages: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Casa_de_Moneda_de_Bogot%C3%A1_-_40062715605.jpg',
        width: 3872,
        height: 2592,
        alt: 'Colonial courtyard of the Bogotá mint, with pillars, arches, and a wooden balcony.',
        caption:
          'Courtyard of the Bogotá mint. Photograph by Rodrigo Orrantia for Banrepcultural, via Wikimedia Commons (CC BY-SA 2.0).',
        wide: true,
        featureAfterLead: true,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Casa_de_la_Moneda%2C_Bogot%C3%A1.JPG',
        width: 2998,
        height: 3748,
        alt: 'Façade of the Casa de Moneda in Bogotá, in La Candelaria, with the stone doorway on Calle 11.',
        caption:
          'Façade of the Casa de Moneda, Bogotá. Photograph by Felipe Restrepo Acosta, 6 June 2011, via Wikimedia Commons (CC BY 3.0).',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Museo_Casa_de_Moneda_-_Volante_de_acu%C3%B1aci%C3%B3n_-_1.jpg',
        width: 4000,
        height: 3000,
        alt: 'Screw press preserved in the Casa de Moneda Museum in Bogotá.',
        caption:
          'Screw press. Casa de Moneda Museum, Bogotá. Photograph by SajoR, 22 September 2023, via Wikimedia Commons (CC BY-SA 4.0).',
      },
    ],
    sections: [
      {
        id: 'fundacion',
        title: 'The founding and the first American gold',
        paragraphs: [
          'Before there was a mint, the New Kingdom paid in gold dust — sometimes measured in quills — and in tejos of no fixed weight or fineness. That hindered the royal fifth and inland trade. Mexico had a mint from 1535 and Lima from 1565; Santa Fe did not. Around 1590 Philip II ordered a mint that never opened.',
          'In 1620 Philip III authorized the engineer Alonso Turrillo de Yebra to found the mint of Santa Fe. The Banco de la República dates that founding to 1620; the Casa de Moneda Museum recalls the work of 1621, in a rented low house in La Candelaria. From those anvils came the first gold coined in the Americas: escudos and doblones, chiefly of one and two escudos in the seventeenth century, while Potosí, Lima, and Mexico concentrated on silver.',
          'Turrillo for a time kept an office at Cartagena de Indias, closed about 1634. When that branch ended, Santa Fe remained the permanent mint of the New Kingdom. Juan Friede published in 1963 the 1614–1635 documents held in the Archivo General de Indias. Antonio María Barriga Villalba systematized the colonial archive in the three volumes of 1969.',
        ],
      },
      {
        id: 'macuquinas',
        title: 'Cobs',
        paragraphs: [
          'The first century was a smithy. Metal was poured, thinned by hammer, cut with shears, and struck by hand. The pieces — cobs — came out irregular: the Habsburg shield, the cross potent, and the legend rarely fitted whole. An unreeded edge invited clipping.',
          'Even so, those discs were New Granada’s circulating coin. The Mesuno hoard holds Santafé doblones of 1629–1636. This case holds a gold cob attributed to Santa Fe in the name of Philip V: the ND 2 escudos, from the style of the shield and cross, not from a readable mintmark.',
        ],
      },
      {
        id: 'ensayadores',
        title: 'Assayers and mint marks',
        paragraphs: [
          'The assayer answered for the fineness. His initial went on the disc; a light coin could cost him the post. Santa Fe did not use a single mark. Against Potosí’s P or Mexico’s Mo, here one finds NR, RN, SF, monograms, and, later, BA on Cundinamarca silver.',
          'The table below follows the sequence Barriga Villalba and the study of 2-escudo doblones have rebuilt for the seventeenth century and the turn to Philip V. It does not name the people behind JJ or JF on the milled coin in this collection. This case’s Philip V cob does not fix an assayer.',
        ],
      },
      {
        id: 'flota',
        title: 'The 1715 fleet',
        paragraphs: [
          'Santa Fe gold did not stay on the highland. On 31 July 1715 the hurricane wrecked Juan Esteban de Ubilla’s fleet off Florida. Among the treasure recovered from the 1950s are Bogotá 2 escudos of 1649 and 1701, and pillar-and-wave silver. The volume of uncirculated pieces of assayer Buenaventura de Arce Penagos — at work about 1692–1722 — allowed die studies the archive alone does not give.',
        ],
      },
      {
        id: 'borbones',
        title: 'The Bourbons, Solís, and the reeded edge',
        paragraphs: [
          'In 1751 the Crown took the mint into royal administration. Between 1753 and 1756 Tomás Sánchez Reciente redesigned the two-storey cloister that now faces Calle 11 at Carrera 5. Viceroy José Solís Folch de Cardona reopened it in 1756: the year is still on the stone frieze. Screw presses made round reeded coin so clipping of the edge would show.',
          'That is the module of the 1795 and 1802 NR–JJ 1 escudos, the 1810 real, and the 1811 and 1820 NR–JF 1 escudos. Reserved cédulas of 1771 and 1786 secretly cut gold and silver fineness. Luis Ángel Arango gives the carats: 22 in 1751; 21 and 2½ granos (0.901) in 1771; 21 (0.875) from 10 January 1787.',
        ],
      },
      {
        id: 'popayan',
        title: 'The sister house at Popayán',
        paragraphs: [
          'Miners of Cauca and Chocó paid the journey to Bogotá. Popayán was authorized by a royal cédula of 1729; Pedro Agustín de Valencia began reeded coin there in 1758. Banrepcultural’s encyclopedia records the closure after disputes and the 1766 royal cédula. This case does not mix the two houses: Popayán’s KM# 56.2 — five Charles IV P–JF discs — has its own page. The 1791 P–SF 2 escudos and the 1801 P–JF 8 escudos stay there too.',
        ],
      },
      {
        id: 'independencia',
        title: 'Independence and Gran Colombia',
        paragraphs: [
          'In 1811 the Santafé mint went into crisis. Cartagena struck coppers; in 1813 Nariño ordered the china coin. After Boyacá, Bolívar took the Bogotá and Popayán houses and, on 18 August 1819, asked for the same Indian type. This case’s 1820 NR–JF 1 escudo still carries Ferdinand VII’s legend and Charles IV’s bust. The 1821 BA–JF 8 reales already shows the Indian and Cundinamarca’s pomegranate. The 1826 JF gold peso is republican: Liberty and the arms of 1821.',
          'The Cúcuta Congress tried to restore Spanish fineness; Santander evaded the rule with antedated issues. The museum booklet records the first republican peso of 1825. This page does not treat Cartagena copper or the Santa Marta siege cuartillo: other mints, other records.',
        ],
      },
      {
        id: 'republica',
        title: 'From the Republic to Ibagué',
        paragraphs: [
          'The nineteenth century changed the country’s name and the dies. In 1836 the regime was unified; in 1846–1847 Lino de Pombo and Florentino González imposed 0.900 fine metal and the decimal system. In the 1880s Bogotá installed steam presses from Ralph Heaton & Sons. Popayán ceased in 1881. Bogotá and Medellín closed about 1890, and Bogotá resumed in 1906.',
          'Law 25 of 1923, on the Kemmerer mission’s project, created the Banco de la República. The Bank, on its timeline, took over the Bogotá mint in 1946 and bought Medellín in 1953. On 9 April 1948 the house held in the Bogotazo. In 1982 Ibagué began making planchets; in 1987 striking moved there. Santa Fe ceased after 366 years. This case’s 1921 Lazaretto 2 centavos was struck at Bogotá for the lazaretto cordon: it is not colonial coin, and it has a type page under Numismatics of the Lazarettos.',
        ],
      },
      {
        id: 'museo',
        title: 'From factory to museum',
        paragraphs: [
          'Decree 1584 of 11 August 1975 declared the building a national monument. A first public museum opened in the early 1960s. The permanent exhibition opened in December 1996, at Calle 11 no. 4-93. The cloister now anchors the Bank’s Cultural Block, beside the Botero Museum and MAMU.',
          'From September 2021 to 23 July 2023 the Casa de Moneda Museum was renewed for the Bank’s centenary. The new museography received the iF Design Award 2025 in interior architecture for cultural exhibitions. In July 2024 the room “21st Century. A country that changes its image” opened. The 2019 Boletín Cultural places the Bank’s collection above 18,000 pieces; the permanent display gathers, on the recent script, about 1,700.',
        ],
      },
      {
        id: 'vitrina',
        title: 'What this case holds',
        paragraphs: [
          'Nine discs: the Philip V cob; the 1795 and 1802 NR–JJ 1 escudos; the 1810 NR–JF real; the 1811 and 1820 NR–JF 1 escudos; the 1821 BA–JF 8 reales; the 1826 JF gold peso; and the 1921 Lazaretto 2 centavos. The 1916 50 centavos (KM# 193.1) is listed as Birmingham / Bogotá, with no mark on the disc: it does not enter here. Neither does the 1931 Lazaretto 50 centavos, without a mint mark, nor the Santander coscojas, nor Popayán.',
          'No slab census and no hammer are published. Photographs do not authenticate the metal. BanRep’s coin tables begin in 1987.',
        ],
      },
    ],
    assayTable: {
      heading: 'Assayers of the 2-escudo cobs',
      lead:
        'Sequence rebuilt for Santa Fe gold 2 escudos, after Barriga Villalba and surviving pieces. It is not the list of JJ or JF on the milled coin in this collection.',
      caption: 'Assayers of Santa Fe 2-escudo cobs',
      headers: ['Period', 'Sovereign', 'Assayer', 'Marks'],
      rows: [
        ['1622', 'Philip III', 'No visible initial', 'SF'],
        ['1627–1632', 'Philip IV', 'Miguel Pinto Camargo', 'NR, RN, NRP, RNP'],
        ['1632–1642', 'Philip IV', 'Alonso de Anuncibay', 'NRA'],
        ['1642–1676', 'Philip IV and Charles II', 'Pedro Ramos', 'NR, NRR'],
        ['1678–1686', 'Charles II', 'Pedro García de Villanueva', 'NR'],
        ['1687', 'Charles II', 'José Martines', 'NR'],
        ['1687–1692', 'Charles II', 'Pedro García de Villanueva', 'NR'],
        ['1692–1722', 'Charles II and Philip V', 'Buenaventura de Arce Penagos', 'NR'],
      ],
    },
    relatedLead: 'Charles IV’s gold 1 escudo, struck at the sister house of Popayán from 1792 to 1808, has its own type page.',
    relatedLabel: 'Popayán 1 escudo, Charles IV (1792–1808)',
    relatedHref: '/coleccion/colombia-numismatica/1-escudo-carlos-iv-popayan-1792-1808/',
    sourcesTitle: 'Sources',
    backSeries: 'Back to Colombia-Numismatics',
    coinLink: 'The mint of Santa Fe de Nuevo Reino has its own page.',
    chapterLink: 'Read the mint of Santa Fe de Nuevo Reino',
  },
};

export const santaFeMintSources: CatalogSource[] = [
  {
    href: 'https://www.banrep.gov.co/es/billetes-monedas/fabrica-moneda/historia',
    es: 'Banco de la República — Historia de la Fábrica de Moneda',
    en: 'Banco de la República — History of the Coin Factory',
    note: {
      es: 'Cronología oficial: fundación en 1620, administración del Banco en 1946, cospeles de Ibagué en 1982 y traslado de la acuñación en 1987.',
      en: 'Official timeline: founding in 1620, Bank administration in 1946, Ibagué planchets in 1982, and the 1987 move of striking.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/el-banco-de-la-republica-celebra-sus-100-anos-con-la-reapertura-del-museo-casa-de-moneda',
    es: 'Banrepcultural — Reapertura del Museo Casa de Moneda',
    en: 'Banrepcultural — Reopening of the Casa de Moneda Museum',
    note: {
      es: 'Acuñación desde 1621, reapertura de 1756 bajo el virrey Solís, cese en Santa Fe en 1987 y renovación de 2021–2023.',
      en: 'Striking from 1621, the 1756 reopening under Viceroy Solís, the end of work at Santa Fe in 1987, and the 2021–2023 renewal.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
    es: 'Banrepcultural — Museo Casa de Moneda',
    en: 'Banrepcultural — Casa de Moneda Museum',
    note: {
      es: 'Exposición permanente en Calle 11 n.° 4-93; decreto 1584 del 11 de agosto de 1975; primer museo público a comienzos de los años sesenta.',
      en: 'Permanent exhibition at Calle 11 no. 4-93; decree 1584 of 11 August 1975; first public museum in the early 1960s.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/el-museo-casa-de-moneda-es-ganador-del-premio-internacional-de-diseno-if-award-2025',
    es: 'Banrepcultural — iF Design Award 2025',
    en: 'Banrepcultural — iF Design Award 2025',
    note: {
      es: 'La museografía de 2023 recibió el premio en arquitectura de interiores para exposiciones culturales.',
      en: 'The 2023 museography received the award in interior architecture for cultural exhibitions.',
    },
  },
  {
    href: 'https://www.banrepcultural.org/noticias/siglo-xxi-un-pais-que-cambia-de-imagen-la-nueva-sala-del-museo-casa-de-moneda',
    es: 'Banrepcultural — Sala Siglo XXI (2024)',
    en: 'Banrepcultural — 21st-century room (2024)',
    note: {
      es: 'Apertura de julio de 2024 que cierra el guion del museo renovado. Contexto museográfico, no autenticación de un disco.',
      en: 'July 2024 opening that closes the renewed museum’s script. Museographic context, not authentication of a disc.',
    },
  },
  {
    href: 'https://www.bibliotecadigitaldebogota.gov.co/resources/2082949/',
    es: 'Juan Friede — Documentos sobre la fundación de la Casa de Moneda (1614–1635)',
    en: 'Juan Friede — Documents on the founding of the mint (1614–1635)',
    note: {
      es: 'Recopilación de 1963, Archivo General de Indias, Sevilla. Banco de la República y Academia Colombiana de Historia.',
      en: '1963 compilation from the Archivo General de Indias, Seville. Banco de la República and the Academia Colombiana de Historia.',
    },
  },
  {
    href: 'https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/1749',
    es: 'A. M. Barriga Villalba — Historia de la Casa de Moneda, 3 tomos (1969)',
    en: 'A. M. Barriga Villalba — Historia de la Casa de Moneda, 3 volumes (1969)',
    note: {
      es: 'Bogotá, Banco de la República. Base de la secuencia de ensayadores de las macuquinas de 2 escudos. No se publican láminas.',
      en: 'Bogotá, Banco de la República. Basis for the 2-escudo cob assayer sequence. Plates are not published.',
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
    href: 'https://revistas.unc.edu.ar/index.php/REyE/article/view/3122',
    es: 'Luis Ángel Arango — El sistema monetario de Colombia (1942)',
    en: 'Luis Ángel Arango — The monetary system of Colombia (1942)',
    note: {
      es: 'Quilates de 1751, 1771 y 1786. No se publican precios.',
      en: 'The 1751, 1771, and 1786 carats. Prices are not published.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Casa_de_acu%C3%B1aci%C3%B3n_de_moneda_de_Popay%C3%A1n',
    es: 'Enciclopedia Banrepcultural — Casa de acuñación de Popayán',
    en: 'Banrepcultural Encyclopedia — The Popayán mint',
    note: {
      es: 'Apertura en 1758 y real cédula de 1766. Contexto de la casa hermana, no de un disco de Santa Fe.',
      en: 'Opening in 1758 and the 1766 royal cédula. Context for the sister house, not for a Santa Fe disc.',
    },
  },
  {
    href: 'https://1715fleetsociety.com/numismatic-legacy-of-the-1715-plate-fleet/',
    es: '1715 Fleet Society — Numismatic Legacy of the 1715 Plate Fleet',
    en: '1715 Fleet Society — Numismatic Legacy of the 1715 Plate Fleet',
    note: {
      es: 'Escudos de Bogotá de 1649 y 1701 entre el tesoro recuperado. Comparable de pecio; no es una ficha de esta vitrina.',
      en: 'Bogotá escudos of 1649 and 1701 among the recovered treasure. A wreck comparable; not a record in this case.',
    },
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Casa_de_Moneda_de_Bogot%C3%A1_-_40062715605.jpg',
    es: 'Wikimedia Commons / Banrepcultural — Patio de la Casa de Moneda',
    en: 'Wikimedia Commons / Banrepcultural — Courtyard of the mint',
    note: {
      es: 'Fotografía de Rodrigo Orrantia, 6 de noviembre de 2007. CC BY-SA 2.0. Contexto arquitectónico.',
      en: 'Photograph by Rodrigo Orrantia, 6 November 2007. CC BY-SA 2.0. Architectural context.',
    },
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Casa_de_la_Moneda%2C_Bogot%C3%A1.JPG',
    es: 'Wikimedia Commons — Fachada de la Casa de Moneda, Bogotá',
    en: 'Wikimedia Commons — Façade of the Casa de Moneda, Bogotá',
    note: {
      es: 'Fotografía de Felipe Restrepo Acosta, 6 de junio de 2011. CC BY 3.0. Contexto arquitectónico.',
      en: 'Photograph by Felipe Restrepo Acosta, 6 June 2011. CC BY 3.0. Architectural context.',
    },
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Museo_Casa_de_Moneda_-_Volante_de_acu%C3%B1aci%C3%B3n_-_1.jpg',
    es: 'Wikimedia Commons — Volante de acuñación, Museo Casa de Moneda',
    en: 'Wikimedia Commons — Screw press, Casa de Moneda Museum',
    note: {
      es: 'Fotografía de SajoR, 22 de septiembre de 2023. CC BY-SA 4.0. Maquinaria de taller, no autenticación de un disco.',
      en: 'Photograph by SajoR, 22 September 2023. CC BY-SA 4.0. Workshop machinery, not authentication of a disc.',
    },
  },
];

const santaFeMintCardAlts = {
  es: {
    '2-escudos-bogota-nd-felipe-v':
      'Anverso y reverso de la macuquina de 2 escudos de Bogotá, ND (Felipe V): escudo coronado sobre cospel irregular; cruz potenzada con flores de lis.',
    '1-escudo-bogota-1795-nr-jj':
      'Anverso y reverso del 1 escudo de Bogotá de 1795 NR–JJ: busto de Carlos IV y fecha 1795; escudo coronado, 1 S y marcas NR · JJ.',
    '1-escudo-bogota-1802-nr-jj':
      'Anverso y reverso del 1 escudo de Bogotá de 1802 NR–JJ: busto de Carlos IV y fecha 1802; escudo coronado, 1 S y marcas NR · JJ.',
    '1-real-bogota-1810-nr-jf':
      'Anverso y reverso del 1 real de Bogotá de 1810 NR–JF: busto de Carlos IV, leyenda de Fernando VII y fecha 1810; escudo entre columnas, NR, 1R y JF.',
    '1-escudo-bogota-1811-nr-jf':
      'Anverso y reverso del 1 escudo de Bogotá de 1811 NR–JF: busto de Carlos IV, leyenda de Fernando VII y fecha 1811; escudo coronado, 1 S y marcas NR · JF.',
    '1-escudo-bogota-1820-nr-jf':
      'Anverso y reverso del 1 escudo de Bogotá de 1820 NR–JF: busto de Carlos IV, leyenda de Fernando VII y fecha 1820; escudo coronado, 1 S y marcas NR · JF.',
    '8-reales-bogota-1821-ba-jf':
      'Anverso y reverso del 8 reales de Bogotá de 1821 BA–JF: busto de la india y fecha 1821; granada de Cundinamarca, BA · JF.',
    '1-peso-bogota-1826-jf':
      'Anverso y reverso del peso de oro de Bogotá de 1826 JF: Libertad y fecha 1826; armas de la Gran Colombia e iniciales J · F.',
    '2-centavos-lazareto-1921':
      'Anverso y reverso de los 2 centavos Lazareto de 1921: cruz con LAZARETO y fecha; valor entre ramos.',
  },
  en: {
    '2-escudos-bogota-nd-felipe-v':
      'Obverse and reverse of the Bogotá cob 2 escudos, ND (Philip V): crowned shield on an irregular planchet; cross potent with fleurs-de-lis.',
    '1-escudo-bogota-1795-nr-jj':
      'Obverse and reverse of the 1795 Bogotá 1 escudo NR–JJ: bust of Charles IV and the date 1795; crowned arms, 1 S, and marks NR · JJ.',
    '1-escudo-bogota-1802-nr-jj':
      'Obverse and reverse of the 1802 Bogotá 1 escudo NR–JJ: bust of Charles IV and the date 1802; crowned arms, 1 S, and marks NR · JJ.',
    '1-real-bogota-1810-nr-jf':
      'Obverse and reverse of the 1810 Bogotá 1 real NR–JF: bust of Charles IV, Ferdinand VII legend, and the date 1810; arms between pillars, NR, 1R, and JF.',
    '1-escudo-bogota-1811-nr-jf':
      'Obverse and reverse of the 1811 Bogotá 1 escudo NR–JF: bust of Charles IV, Ferdinand VII legend, and the date 1811; crowned arms, 1 S, and marks NR · JF.',
    '1-escudo-bogota-1820-nr-jf':
      'Obverse and reverse of the 1820 Bogotá 1 escudo NR–JF: bust of Charles IV, Ferdinand VII legend, and the date 1820; crowned arms, 1 S, and marks NR · JF.',
    '8-reales-bogota-1821-ba-jf':
      'Obverse and reverse of the 1821 Bogotá 8 reales BA–JF: Indian bust and the date 1821; Cundinamarca pomegranate, BA · JF.',
    '1-peso-bogota-1826-jf':
      'Obverse and reverse of the 1826 Bogotá gold peso JF: Liberty and the date 1826; arms of Gran Colombia and initials J · F.',
    '2-centavos-lazareto-1921':
      'Obverse and reverse of the 1921 Lazaretto 2 centavos: cross with LAZARETO and the date; value inside a wreath.',
  },
} as const;

export function santaFeMintCardAlt(id: string, locale: Locale): string {
  const alt = (santaFeMintCardAlts[locale] as Record<string, string>)[id];
  if (!alt) throw new Error(`Missing Santa Fe mint card alt for ${id}`);
  return alt;
}

export function santaFeMintPath(locale: Locale): string {
  return locale === 'en' ? `/en${SANTA_FE_MINT_PATH_EN}` : SANTA_FE_MINT_PATH;
}

export const santaFeMintDedicatedSlugs = [
  SANTA_FE_MINT_PATH.replace(/^\/|\/$/g, ''),
  SANTA_FE_MINT_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
