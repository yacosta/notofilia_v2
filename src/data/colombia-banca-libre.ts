import type { Locale } from '../lib/locale-paths';

export const BANCA_LIBRE_PATH = '/coleccion/colombia/banca-libre/';
export const BANCA_LIBRE_PATH_EN = '/collection/colombia/free-banking/';

type BancaLibreSource = {
  href: string;
  label: string;
};

export type BancaLibreTableCell = string | { label: string; href: string };

type BancaLibreTable = {
  caption: string;
  headers: string[];
  rows: BancaLibreTableCell[][];
};

type BancaLibreSection = {
  id: string;
  title: string;
  paragraphs: string[];
  note?: string;
  tables?: BancaLibreTable[];
};

type BancaLibreHolding = {
  href: string;
  label: string;
  dek: string;
};

export type BancaLibreCopy = {
  nav: string;
  home: string;
  series: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  kicker: string;
  lead: string;
  published: string;
  dateLabel: string;
  sections: BancaLibreSection[];
  holdingsTitle: string;
  holdingsLead: string;
  holdings: BancaLibreHolding[];
  catalogCta: string;
  glossaryCta: string;
  blogCta: string;
  sourcesTitle: string;
  sources: BancaLibreSource[];
};

export const bancaLibreCopy: Record<Locale, BancaLibreCopy> = {
  es: {
    nav: 'Banca libre',
    home: 'Inicio',
    series: 'Colombia',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Banca libre en Colombia, 1870–1887',
    metaDescription:
      'La banca libre colombiana (1870–1887): Ley 35 de 1865, bancos regionales, billetes convertibles y el cierre bajo la Regeneración. Sin precios.',
    title: 'Banca libre',
    kicker: 'Colombia · 1870–1887',
    lead:
      'Entre la Ley 35 de 1865 y la Ley 57 de 1887, bancos privados emitieron papel convertible en metálico. Esta página reúne el marco institucional, el catálogo regional de casas y el debate sobre su estabilidad; no es un inventario de ejemplares ni un listado de precios.',
    published: '2026-09-13',
    dateLabel: '13 de septiembre de 2026',
    sections: [
      {
        id: 'marco',
        title: 'El marco de la banca libre',
        paragraphs: [
          'Antes de 1870 la República no tenía un banco comercial moderno que el mercado aceptara de forma amplia. El crédito lo dominaban los censos eclesiásticos y unas pocas casas mercantiles; la masa monetaria era metálica —oro, plata, níquel, cobre— y especie extranjera. Mover bullion por un relieve fragmentado era caro y peligroso, y eso limitaba el comercio interior y el de exportación.',
          'La Constitución de Rionegro (1863) organizó los Estados Unidos de Colombia y dio autonomía amplia a los estados soberanos. En ese federalismo radical, la Ley 35 de 1865 levantó el monopolio estatal de emisión y autorizó a particulares a poner en circulación billetes respaldados en sus propias reservas metálicas. Entre 1870 y 1886 se fundaron más de tres docenas de bancos; las síntesis de historia financiera hablan de unos 34 institutos mayores en esa ventana, y de un rastro más largo —casi un centenar de entidades de crédito, grandes y pequeñas— si se cuenta hasta las primeras décadas del siglo XX.',
          'Esta página recorre la mecánica del sistema, las casas por región, la cultura material del billete grabado en el extranjero y el debate historiográfico sobre su estabilidad, hasta el desmonte durante la Regeneración. No sustituye las fichas de la vitrina: las enmarca.',
        ],
      },
      {
        id: 'mecanica',
        title: 'Instituciones y mecánica',
        paragraphs: [
          'La banca libre no fue un accidente de mercado: nació de la ideología radical que buscaba desarmar las rigideces coloniales del crédito. Intentos anteriores —la Compañía de Giro y Descuento (1841) o el proyectado Banco de la Nueva Granada (1847)— no arraigaron. El andamiaje de 1865 sí: autorizó pagarés al portador convertibles a la vista en oro o plata. El comercio los aceptó cuando la casa mostraba reservas y una cartera prudente.',
          'El papel circuló sobre todo en el dominio regional del emisor. Eso no fue un defecto: reducía el costo y el riesgo de acarrear metálico a lomo de mula. Los bancos descontaron letras, recibieron depósitos y prestaron a corto y mediano plazo a la agricultura, la minería y el comercio. Al sustituir la especie pesada por un billete convertible, dieron liquidez a las exportaciones de café, tabaco y quina.',
        ],
      },
      {
        id: 'vanguardia',
        title: 'La vanguardia comercial',
        paragraphs: [
          'El Banco de Bogotá se constituyó el 15 de noviembre de 1870 y es el primer banco comercial moderno que el país aceptó de forma amplia. Las crónicas de la casa señalan un capital inicial de 500.000 pesos y un grupo de comerciantes, hacendados y políticos —entre ellos Bendix Koppel, Carlos Schloss, Manuel Murillo Toro y Eusebio Bernal—, con Salomón Koppel como primer director-gerente. Emitió desde el origen. Hacia 1888, ya consolidado el mercado de la capital, se le atribuye más del 80 % de las reservas metálicas de los bancos de Bogotá y más de la mitad de las del país. Su expansión posterior absorbió o fusionó casas como el Banco de Santander, el del Huila, el Social del Tolima, el del Cauca, el Republicano, el de Pamplona, el Central, el Nuevo Banco de Boyacá y el de Pereira.',
          'El Estado Soberano de Antioquia autorizó el Banco de Antioquia por la Ley 194 de 1871; abrió en 1872. Fue el segundo emisor privado del país: sociedad por acciones, contrato con el gobierno regional para fondos, aduanas e infraestructura, y un respaldo estrecho en la minería de oro. El Banco de Colombia, de 1875, se capitalizó al inicio en 181.400 pesos, buscó sucursales y sobrevivió el fin de la era, la Guerra de los Mil Días y la legislación del siglo XX.',
        ],
      },
      {
        id: 'catalogo-regional',
        title: 'Catálogo regional de bancos (1870–1887)',
        paragraphs: [
          'La marca del periodo es la descentralización. Las barreras geográficas hicieron nacer bancos en las capitales regionales para el crédito local. El año pico de fundaciones que registran las síntesis es 1883, con trece casas nuevas. Las tablas que siguen agrupan emisores citados para esa ventana; no son un censo exhaustivo de Hernández ni un catálogo Pick. Una coincidencia de nombre y fecha no es un ejemplar de esta colección.',
        ],
        tables: [
          {
            caption: 'Bogotá y Cundinamarca',
            headers: ['Banco', 'Sede', 'Fundación', 'Notas'],
            rows: [
              ['Banco de Bogotá', 'Bogotá', '1870', 'Primer banco comercial moderno aceptado de forma amplia; sobrevive como instituto de crédito.'],
              ['Banco de Colombia', 'Bogotá', '1875', 'Emisor nacional con sucursales; sobrevivió la era.'],
              ['Banco Popular', 'Bogotá', '1877', 'Descuento comercial y crédito local en la capital.'],
              [
                {
                  label: 'Banco Hipotecario de Bogotá',
                  href: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
                },
                'Bogotá',
                '1881',
                'Crédito hipotecario y agrícola; billetes grabados por la American Bank Note Company. Esta vitrina documenta las pruebas de 5 pesos de 1881.',
              ],
              ['Banco Internacional', 'Bogotá', '1884', 'Casa comercial emisora al final del auge.'],
              ['Banco del Estado', 'Bogotá', '1884', 'Liquidado más tarde; las síntesis sitúan el paso de activos al Banco Cafetero en el siglo XX.'],
            ],
          },
        ],
      },
      {
        id: 'antioquia',
        title: 'Antioquia: minería y casas de familia',
        paragraphs: [
          'Antioquia es el caso más estudiado de estabilidad endógena. El relieve la aislaba; el oro le daba metálico y superávit. Entre 1872 y el siglo XX las cuentas regionales hablan de 36 bancos, con un racimo de fundaciones a principios de los ochenta. Casas mercantiles —Vicente B. Villa e Hijos, Botero Arango e Hijos, Restrepo & Cía— pasaron del comercio al crédito y a la emisión. El Banco del Zancudo funcionó como tesorería de la empresa minera del mismo nombre. La vida media que calculan esos estudios ronda los 17,5 años.',
        ],
        note:
          'Varias casas que aparecen en índices antioqueños —Banco Botero Arango e Hijos (1890), Banco de Yarumal (1898), Banco Republicano (1901), Banco Alemán Antioqueño (1912)— se fundaron después de 1887. Pertenecen a la cola larga del crédito regional, no a la ventana estricta de emisión privada convertible.',
        tables: [
          {
            caption: 'Antioquia',
            headers: ['Banco', 'Sede', 'Fundación', 'Notas'],
            rows: [
              ['Banco de Antioquia', 'Medellín', '1872', 'Segundo banco comercial; finanzas del estado, aduanas e infraestructura.'],
              ['Banco Mercantil', 'Medellín', '1874', 'Capital inicial citado: 40.000 pesos; crédito mercantil.'],
              ['Banco de Medellín', 'Medellín', '1881', 'Sociedad anónima del auge local.'],
              ['Banco Popular de Medellín', 'Medellín', '1882', 'Crédito urbano en la capital regional.'],
              ['Banco Restrepo & Cía', 'Medellín', '1882', 'Casa familiar salida del comercio.'],
              ['Banco de Sopetrán', 'Sopetrán', '1882', 'Crédito provincial fuera de Medellín.'],
              ['Banco de Oriente', 'Antioquia', '1883', 'Fundado en el año pico de 1883.'],
              ['Banco Vicente B. Villa e Hijos', 'Antioquia', '1883', 'Casa familiar de importación y exportación.'],
              ['Banco del Progreso', 'Medellín', '1883', 'Sociedad anónima con papel regional.'],
              ['Banco del Zancudo', 'Medellín', '1883', 'Tesorería y crédito de la empresa minera Zancudo.'],
              ['Chaves Vásquez y Cía', 'Medellín', '1883', 'Banco comercial de empresarios locales.'],
              ['Banco de Sonsón', 'Sonsón', '1883', 'Crédito en los municipios del sur agrícola.'],
              ['Banco de Salamina', 'Salamina', '1882/1883', 'Casa en el territorio que luego sería Caldas cafetero.'],
              ['Caja de Ahorros de Medellín', 'Medellín', '1883*', 'Captación de depósitos menores. Una entidad homónima existió entre 1844 y 1874.'],
            ],
          },
        ],
      },
      {
        id: 'caribe',
        title: 'Costa Caribe: puertos y casas extranjeras',
        paragraphs: [
          'Barranquilla, Cartagena y Riohacha eran las arterias del comercio exterior. El capital lo pusieron casas mercantiles y extranjeros ligados al tabaco, el algodón, el café y la importación europea. En Barranquilla se citan J. J. Senior, Jacob Cortissoz, Sola, Stevenson Bros y Senior y Correa. Cartagena acumula, en el arco más amplio, nueve bancos.',
        ],
        tables: [
          {
            caption: 'Costa Caribe',
            headers: ['Banco', 'Sede', 'Fundación', 'Notas'],
            rows: [
              ['Banco de Barranquilla', 'Barranquilla', '1873', 'Casas locales y extranjeras; comercio del Magdalena.'],
              ['Banco de Bolívar', 'Cartagena', '1874', 'Emisor costero de larga vida; las síntesis hablan de unos 42 años antes de la liquidación.'],
              ['Banco de Cartagena', 'Cartagena', '1881', 'La literatura lo asocia a Rafael Núñez; operó hasta 1919.'],
              [
                {
                  label: 'Banco de Riohacha',
                  href: '/coleccion/colombia/5-pesos-rio-hacha-1883/',
                },
                'Riohacha',
                '1882/1883',
                'Comercio de frontera en la Guajira. Esta vitrina documenta las pruebas ABNC de 5 pesos de 1883.',
              ],
              ['Banco Comercial de Cartagena', 'Cartagena', 'Época', 'Vida breve y poco éxito comercial en las síntesis.'],
              ['Banco Industrial', 'Cartagena', 'Época', 'Parte del grupo de casas de la ciudad hasta el siglo XX.'],
            ],
          },
        ],
      },
      {
        id: 'santander',
        title: 'Santander y los corredores del oriente',
        paragraphs: [
          'El Estado Soberano de Santander, con Bucaramanga a la cabeza, se benefició del café y de casas alemanas. El crédito debía cubrir cosechas largas de café y tabaco.',
        ],
        tables: [
          {
            caption: 'Santander y el oriente',
            headers: ['Banco', 'Sede', 'Fundación', 'Notas'],
            rows: [
              ['Banco de Santander', 'Bucaramanga', '1872', 'Fundado por élites locales (David Puyana, Mario Valenzuela y otros). Distinto del banco español homónimo. Fusionado con el Banco de Bogotá en 1888.'],
              ['Banco Prendario de Soto', 'Bucaramanga', '1873', 'Crédito local y prendario.'],
              ['Banco Popular de Soto', 'Bucaramanga', 'Época', 'Emisor privado de la región.'],
              ['Banco de Pamplona', 'Pamplona', 'Época', 'Emisor de los altiplanos orientales; absorbido por el Banco de Bogotá.'],
            ],
          },
        ],
      },
      {
        id: 'occidente',
        title: 'Occidente, Valle y el Eje Cafetero',
        paragraphs: [
          'El occidente financió haciendas, la agroindustria temprana del Valle —caña— y la colonización del eje que luego se llamó Viejo Caldas. El Banco del Cauca, en Cali, se cita con un capital inicial de 300.000 pesos y con familias como Eder y Carvajal.',
        ],
        tables: [
          {
            caption: 'Occidente y el eje cafetero',
            headers: ['Banco', 'Sede', 'Fundación', 'Notas'],
            rows: [
              ['Banco del Cauca', 'Cali', '1873', 'Capital inicial citado: 300.000 pesos; operó hasta 1893.'],
              ['Banco de Popayán', 'Popayán', '1873/1875', 'Crédito de la élite terrateniente del Cauca histórico.'],
              ['Banco Prendario de Palmira', 'Palmira', 'Época', 'Casa prendaria del Valle; las síntesis le dan 12 años de vida.'],
              ['Banco Industrial de Manizales', 'Manizales', '1881/1882', 'Café y redes mercantiles del Viejo Caldas.'],
            ],
          },
        ],
      },
      {
        id: 'otros',
        title: 'Otros emisores regionales',
        paragraphs: [
          'Otras casas cubrieron crédito local en provincias alejadas de la capital. Varias acabaron absorbidas por el Banco de Bogotá en su consolidación geográfica.',
        ],
        tables: [
          {
            caption: 'Otros emisores',
            headers: ['Banco', 'Contexto'],
            rows: [
              ['Banco del Huila', 'Emisor regional absorbido por el Banco de Bogotá.'],
              ['Banco Social del Tolima', 'Emisor regional absorbido por el Banco de Bogotá. No es el papel de tesorería del Tolima de 1901 que documenta esta vitrina.'],
              ['Banco Republicano', 'Emisor regional absorbido por el Banco de Bogotá.'],
              ['Banco Central', 'Emisor regional absorbido por el Banco de Bogotá. No es el Banco Central de Colombia de 1905 ni el Banco de la República de 1923.'],
              ['Nuevo Banco de Boyacá', 'Emisor regional absorbido por el Banco de Bogotá.'],
              ['Banco de Boyacá', 'Emisor privado de los altiplanos centrales.'],
              ['Banco de Pereira', 'Emisor regional absorbido por el Banco de Bogotá.'],
              ['Banco del Norte', 'Crédito local con papel propio.'],
            ],
          },
        ],
      },
      {
        id: 'material',
        title: 'La cultura material del billete',
        paragraphs: [
          'El paso del metálico al papel tuvo que vencer la desconfianza dejada por los vales de independencia y por los billetes de tesorería de Mosquera, que el público descontaba. La convertibilidad estricta y la calidad del grabado fueron la respuesta.',
          'Casi no había litografía doméstica de ese nivel. La mayoría de las casas encargó planchas a la American Bank Note Company de Nueva York y, en menor medida, a Thomas De La Rue en Londres. Las viñetas alegóricas, los retratos regionales y las medidas contra la falsificación legitimaron el papel ante el comercio. Las denominaciones habituales fueron 1, 5, 10, 20 y 50 pesos, con la leyenda peso oro o, a veces, peso plata, para subrayar la convertibilidad. Esa estética no es un holding: las pruebas ABNC de esta colección —Hipotecario y Riohacha— son objetos de imprenta con serial de ceros, no ejemplares de circulación.',
        ],
      },
      {
        id: 'estabilidad',
        title: 'El debate de la estabilidad y la cámara de compensación',
        paragraphs: [
          'La historiografía tradicional, con Guillermo Torres García como referencia frecuente, pintó 1870–1887 como un periodo inestable y mal regulado, y usó esa lectura para justificar el banco central de 1923. Adolfo Meisel Roca revisó esa narrativa con series cuantitativas: el sistema fue notablemente estable cuando no lo golpeaban guerras civiles ni la fiscalidad del Estado. El riesgo principal no era la sobreemisión endógena, sino el choque político.',
          'Antioquia es el ejemplo. Con poca regulación formal sostuvo dos décadas de expansión crediticia sin una quiebra sistémica documentada. El mecanismo que destacan los estudios recientes es la cámara de compensación: las casas canjeaban el papel rival y saldaban el neto en oro. Quien sobreemitía enfrentaba un saldo negativo y debía entregar metal. Esa disciplina alineaba el incentivo privado con la liquidez regional, sin monopolio de emisión.',
        ],
      },
      {
        id: 'regeneracion',
        title: 'La Regeneración y el cierre (1880–1887)',
        paragraphs: [
          'El desmonte no vino de una quiebra general del mercado, sino de un giro político. Al debilitarse el Olimpo Radical, Rafael Núñez —ligado al Banco de Cartagena— y Miguel Antonio Caro impulsaron un Estado unitario que necesitaba centralizar la moneda para financiar el fisco.',
          'La primera fase fue la Ley 39 de 1880 y el Banco Nacional de 1881: fondos del Estado, política fiscal y crédito al tesoro. Al principio convivió con los emisores privados, pero se les exigió recibir el papel del Nacional a la par, y eso mezcló las reservas metálicas del sector privado con una emisión cada vez más fiduciaria.',
          'La guerra civil de 1885 tensionó las cuentas. El gobierno usó el Nacional como prensa de campaña. Algunas narrativas fechan el curso forzoso en el Decreto 260 de 1885. Esta vitrina sigue el hilo ya documentado en el capítulo colombiano: en 1886 el Decreto 104 definió el papel como unidad monetaria y la Ley 87 lo declaró moneda legal de curso forzoso. Quedó suspendida la convertibilidad del Nacional en oro o plata, y se obligó al público —y a los bancos privados— a aceptar ese fiduciario.',
          'La Constitución de 1886 cerró el marco federal. La Ley 57 de 1887 reorganizó la banca al servicio del Estado unitario: suspendió el derecho de los particulares a emitir mientras el Nacional tuviera el privilegio exclusivo, ordenó retirar el papel privado y lo canjeó por el fiduciario legal. También dio al gobierno facultades de inspección, con liquidación forzosa en caso de incumplimiento. El tránsito del peso oro convertible al papel del Nacional disparó la inflación; esa dinámica llegó al extremo en la Guerra de los Mil Días (1899–1902). El Banco de Bogotá y el Banco de Colombia pudieron pasar al descuento y al depósito; muchas casas menores, sobre todo en Antioquia y en la costa, se liquidaron en las décadas siguientes.',
        ],
      },
      {
        id: 'cierre',
        title: 'Cierre',
        paragraphs: [
          'La banca libre de 1870–1887 muestra cómo un crédito descentralizado y un billete convertible cubrieron un país fragmentado. Las casas privadas —más de tres docenas en la ventana clásica— dieron liquidez al comercio de exportación. El debate reciente, con Meisel y los estudios de la cámara antioqueña, discute la tesis de un caos endógeno: la ruptura llegó con la centralización política, el curso forzoso y el monopolio de 1887. El legado institucional queda en las casas que sobrevivieron como bancos de depósito y en el papel que esta vitrina documenta pieza por pieza, por serial o por prueba de plancha.',
        ],
      },
    ],
    holdingsTitle: 'Piezas publicadas en esta vitrina',
    holdingsLead:
      'Solo estos ejemplares están fichados. El resto de las casas de las tablas son contexto de tipo, no holdings. El 1 peso del Tolima de 1901 es papel de tesorería de guerra, no un billete de banca libre de 1870–1887.',
    holdings: [
      {
        href: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
        label: 'Banco Hipotecario de Bogotá · 5 pesos, 1881',
        dek: 'Par de pruebas ABNC, serie Y, serial 00000.',
      },
      {
        href: '/coleccion/colombia/5-pesos-rio-hacha-1883/',
        label: 'Banco de Riohacha · 5 pesos, 1883',
        dek: 'Par de pruebas ABNC, serie C, serial 00000.',
      },
    ],
    catalogCta: 'Volver a la vitrina de Colombia',
    glossaryCta: 'Definición en el glosario: banca libre',
    blogCta: 'Artículo: orígenes de la banca comercial en Colombia',
    sourcesTitle: 'Fuentes',
    sources: [
      {
        href: 'https://repositorio.banrep.gov.co/items/ccd86e0e-d76a-4146-9e17-bf4c68032e38',
        label: 'Adolfo Meisel Roca — Los bancos comerciales en la era de la banca libre, 1871–1923 (BanRep)',
      },
      {
        href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
        label: 'Enciclopedia Banrepcultural — Papel moneda en Colombia',
      },
      {
        href: 'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-59962009000100002',
        label: 'Banca y región en Colombia, 1850–1880 (SciELO)',
      },
      {
        href: 'https://www.cambridge.org/core/journals/revista-de-historia-economica-journal-of-iberian-and-latin-american-economic-history/article/financial-stability-and-interdependence-free-banking-in-antioquia/8FF10A17096B9B73511EEF0426D7C302',
        label: 'Estabilidad financiera e interdependencia: banca libre en Antioquia (RHE)',
      },
      {
        href: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-22532023000300003',
        label: 'La cámara de compensación en banca libre, el caso de Antioquia (América Latina en la Historia Económica)',
      },
      {
        href: 'https://en.numista.com/catalogue/literature.php?id=100183',
        label: 'Hernández — Monedas y Billetes de Colombia, 8.ª ed. (Numista L100183)',
      },
    ],
  },
  en: {
    nav: 'Free banking',
    home: 'Home',
    series: 'Colombia',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Free banking in Colombia, 1870–1887',
    metaDescription:
      'Colombian free banking (1870–1887): Law 35 of 1865, regional banks, convertible notes, and the Regeneración close. No prices.',
    title: 'Free banking',
    kicker: 'Colombia · 1870–1887',
    lead:
      'From Law 35 of 1865 to Law 57 of 1887, private banks issued paper convertible into metal. This page sets out the institutional frame, a regional roster of houses, and the stability debate. It is not a census of specimens and it publishes no prices.',
    published: '2026-09-13',
    dateLabel: '13 September 2026',
    sections: [
      {
        id: 'marco',
        title: 'The free-banking frame',
        paragraphs: [
          'Before 1870 the Republic had no modern commercial bank the market broadly accepted. Credit sat with ecclesiastical censos and a few merchant houses; the money supply was metallic — gold, silver, nickel, copper — and foreign specie. Moving bullion across broken country was costly and dangerous, and that constrained inland and export trade.',
          'The Constitution of Rionegro (1863) created the United States of Colombia and gave the sovereign states wide autonomy. In that radical federalism, Law 35 of 1865 ended the state’s monopoly of issue and let private houses put notes into circulation against their own metallic reserves. Between 1870 and 1886 more than three dozen banks were founded; financial histories speak of about 34 major institutes in that window, and of a longer trail — nearly a hundred credit entities, large and small — if the count runs into the early twentieth century.',
          'This page follows the mechanics of the system, the houses by region, the material culture of notes engraved abroad, and the historiographical debate on stability, through the dismantling under the Regeneración. It does not replace the case records: it frames them.',
        ],
      },
      {
        id: 'mecanica',
        title: 'Institutions and mechanics',
        paragraphs: [
          'Free banking was not a market accident: it grew from the Radical project to loosen colonial credit. Earlier attempts — the Compañía de Giro y Descuento (1841) or the planned Banco de la Nueva Granada (1847) — did not take. The 1865 frame did: it authorized bearer notes convertible on demand into gold or silver. Trade accepted them when the house showed reserves and a prudent book.',
          'Paper circulated mainly in the issuer’s regional domain. That was a feature: it cut the cost and risk of packing metal over mule tracks. Banks discounted bills, took deposits, and lent short and medium term to agriculture, mining, and trade. By replacing heavy specie with a convertible note, they supplied liquidity for coffee, tobacco, and quinine exports.',
        ],
      },
      {
        id: 'vanguardia',
        title: 'The commercial vanguard',
        paragraphs: [
          'The Banco de Bogotá was constituted on 15 November 1870 and is the first modern commercial bank the country broadly accepted. House histories give an initial capital of 500,000 pesos and a circle of merchants, landowners, and politicians — among them Bendix Koppel, Carlos Schloss, Manuel Murillo Toro, and Eusebio Bernal — with Salomón Koppel as first director-manager. It issued from the start. By 1888, once the capital market had consolidated, it is credited with more than 80 percent of the metallic reserves of Bogotá’s banks and more than half of the country’s. Later expansion absorbed or merged houses such as Banco de Santander, Banco del Huila, Banco Social del Tolima, Banco del Cauca, Banco Republicano, Banco de Pamplona, Banco Central, Nuevo Banco de Boyacá, and Banco de Pereira.',
          'The Sovereign State of Antioquia authorized the Banco de Antioquia by Law 194 of 1871; it opened in 1872. It was the country’s second private issuer: a joint-stock company, a contract with the regional government for funds, customs, and infrastructure, and close backing from gold mining. Banco de Colombia, of 1875, began with 181,400 pesos, sought branches, and survived the end of the era, the Thousand Days’ War, and twentieth-century legislation.',
        ],
      },
      {
        id: 'catalogo-regional',
        title: 'Regional roster of banks (1870–1887)',
        paragraphs: [
          'Decentralization marks the period. Geographic barriers produced banks in regional capitals for local credit. The peak founding year in the syntheses is 1883, with thirteen new houses. The tables below group issuers cited for that window; they are not an exhaustive Hernández census or a Pick catalogue. A match of name and date is not a specimen in this collection.',
        ],
        tables: [
          {
            caption: 'Bogotá and Cundinamarca',
            headers: ['Bank', 'Seat', 'Founded', 'Notes'],
            rows: [
              ['Banco de Bogotá', 'Bogotá', '1870', 'First modern commercial bank broadly accepted; survives as a credit institute.'],
              ['Banco de Colombia', 'Bogotá', '1875', 'National issuer with branches; survived the era.'],
              ['Banco Popular', 'Bogotá', '1877', 'Commercial discounting and local credit in the capital.'],
              [
                {
                  label: 'Banco Hipotecario de Bogotá',
                  href: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
                },
                'Bogotá',
                '1881',
                'Mortgage and agricultural credit; notes engraved by the American Bank Note Company. This case records the 1881 5-peso proofs.',
              ],
              ['Banco Internacional', 'Bogotá', '1884', 'Commercial issuing house at the end of the boom.'],
              ['Banco del Estado', 'Bogotá', '1884', 'Later liquidated; syntheses place the passage of assets to Banco Cafetero in the twentieth century.'],
            ],
          },
        ],
      },
      {
        id: 'antioquia',
        title: 'Antioquia: mining and family houses',
        paragraphs: [
          'Antioquia is the most studied case of endogenous stability. The terrain isolated it; gold supplied metal and surplus. Between 1872 and the twentieth century regional counts speak of 36 banks, with a cluster of foundings in the early 1880s. Merchant houses — Vicente B. Villa e Hijos, Botero Arango e Hijos, Restrepo & Cía — moved from trade into credit and issue. Banco del Zancudo served as treasury for the mining company of the same name. The average life those studies calculate is about 17.5 years.',
        ],
        note:
          'Several houses in Antioquian indexes — Banco Botero Arango e Hijos (1890), Banco de Yarumal (1898), Banco Republicano (1901), Banco Alemán Antioqueño (1912) — were founded after 1887. They belong to the long tail of regional credit, not to the strict window of convertible private issue.',
        tables: [
          {
            caption: 'Antioquia',
            headers: ['Bank', 'Seat', 'Founded', 'Notes'],
            rows: [
              ['Banco de Antioquia', 'Medellín', '1872', 'Second commercial bank; state finance, customs, and infrastructure.'],
              ['Banco Mercantil', 'Medellín', '1874', 'Cited initial capital: 40,000 pesos; mercantile credit.'],
              ['Banco de Medellín', 'Medellín', '1881', 'Joint-stock house of the local boom.'],
              ['Banco Popular de Medellín', 'Medellín', '1882', 'Urban credit in the regional capital.'],
              ['Banco Restrepo & Cía', 'Medellín', '1882', 'Family house out of trade.'],
              ['Banco de Sopetrán', 'Sopetrán', '1882', 'Provincial credit outside Medellín.'],
              ['Banco de Oriente', 'Antioquia', '1883', 'Founded in the peak year 1883.'],
              ['Banco Vicente B. Villa e Hijos', 'Antioquia', '1883', 'Family import-export house.'],
              ['Banco del Progreso', 'Medellín', '1883', 'Joint-stock company with regional paper.'],
              ['Banco del Zancudo', 'Medellín', '1883', 'Treasury and credit arm of the Zancudo mining enterprise.'],
              ['Chaves Vásquez y Cía', 'Medellín', '1883', 'Commercial bank of local entrepreneurs.'],
              ['Banco de Sonsón', 'Sonsón', '1883', 'Credit in the southern agricultural municipalities.'],
              ['Banco de Salamina', 'Salamina', '1882/1883', 'House in territory that later became coffee Caldas.'],
              ['Caja de Ahorros de Medellín', 'Medellín', '1883*', 'Smaller retail deposits. A namesake entity existed from 1844 to 1874.'],
            ],
          },
        ],
      },
      {
        id: 'caribe',
        title: 'Caribbean coast: ports and foreign houses',
        paragraphs: [
          'Barranquilla, Cartagena, and Riohacha were the arteries of overseas trade. Capital came from merchant houses and foreigners tied to tobacco, cotton, coffee, and European imports. Barranquilla names include J. J. Senior, Jacob Cortissoz, Sola, Stevenson Bros, and Senior y Correa. Cartagena accumulates, on the wider arc, nine banks.',
        ],
        tables: [
          {
            caption: 'Caribbean coast',
            headers: ['Bank', 'Seat', 'Founded', 'Notes'],
            rows: [
              ['Banco de Barranquilla', 'Barranquilla', '1873', 'Local and foreign houses; Magdalena River trade.'],
              ['Banco de Bolívar', 'Cartagena', '1874', 'Coastal issuer of long life; syntheses give about 42 years before liquidation.'],
              ['Banco de Cartagena', 'Cartagena', '1881', 'The literature links it to Rafael Núñez; it operated until 1919.'],
              [
                {
                  label: 'Banco de Riohacha',
                  href: '/coleccion/colombia/5-pesos-rio-hacha-1883/',
                },
                'Riohacha',
                '1882/1883',
                'Frontier trade on the Guajira. This case records the 1883 5-peso ABNC proofs.',
              ],
              ['Banco Comercial de Cartagena', 'Cartagena', 'Era', 'Brief life and little commercial success in the syntheses.'],
              ['Banco Industrial', 'Cartagena', 'Era', 'Part of the city’s cohort of houses into the twentieth century.'],
            ],
          },
        ],
      },
      {
        id: 'santander',
        title: 'Santander and the eastern corridors',
        paragraphs: [
          'The Sovereign State of Santander, with Bucaramanga at its head, benefited from coffee and from German houses. Credit had to cover long coffee and tobacco harvests.',
        ],
        tables: [
          {
            caption: 'Santander and the east',
            headers: ['Bank', 'Seat', 'Founded', 'Notes'],
            rows: [
              ['Banco de Santander', 'Bucaramanga', '1872', 'Founded by local elites (David Puyana, Mario Valenzuela, and others). Distinct from the Spanish bank of the same name. Merged with Banco de Bogotá in 1888.'],
              ['Banco Prendario de Soto', 'Bucaramanga', '1873', 'Local and pawn-style credit.'],
              ['Banco Popular de Soto', 'Bucaramanga', 'Era', 'Private issuer for the region.'],
              ['Banco de Pamplona', 'Pamplona', 'Era', 'Issuer of the eastern highlands; absorbed by Banco de Bogotá.'],
            ],
          },
        ],
      },
      {
        id: 'occidente',
        title: 'The west, Valle, and the coffee axis',
        paragraphs: [
          'The west financed estates, early Valle agro-industry — cane — and the colonization of the axis later called Old Caldas. Banco del Cauca, in Cali, is cited with an initial capital of 300,000 pesos and with families such as Eder and Carvajal.',
        ],
        tables: [
          {
            caption: 'The west and the coffee axis',
            headers: ['Bank', 'Seat', 'Founded', 'Notes'],
            rows: [
              ['Banco del Cauca', 'Cali', '1873', 'Cited initial capital: 300,000 pesos; operated until 1893.'],
              ['Banco de Popayán', 'Popayán', '1873/1875', 'Credit for the landed elite of historic Cauca.'],
              ['Banco Prendario de Palmira', 'Palmira', 'Era', 'Pawn house in Valle; syntheses give it 12 years.'],
              ['Banco Industrial de Manizales', 'Manizales', '1881/1882', 'Coffee and merchant networks of Old Caldas.'],
            ],
          },
        ],
      },
      {
        id: 'otros',
        title: 'Other regional issuers',
        paragraphs: [
          'Other houses covered local credit in provinces cut off from the capital. Several were later absorbed by Banco de Bogotá in its geographic consolidation.',
        ],
        tables: [
          {
            caption: 'Other issuers',
            headers: ['Bank', 'Context'],
            rows: [
              ['Banco del Huila', 'Regional issuer absorbed by Banco de Bogotá.'],
              ['Banco Social del Tolima', 'Regional issuer absorbed by Banco de Bogotá. It is not the 1901 Tolima treasury paper this case records.'],
              ['Banco Republicano', 'Regional issuer absorbed by Banco de Bogotá.'],
              ['Banco Central', 'Regional issuer absorbed by Banco de Bogotá. It is neither the 1905 Banco Central de Colombia nor the 1923 Banco de la República.'],
              ['Nuevo Banco de Boyacá', 'Regional issuer absorbed by Banco de Bogotá.'],
              ['Banco de Boyacá', 'Private issuer of the central highlands.'],
              ['Banco de Pereira', 'Regional issuer absorbed by Banco de Bogotá.'],
              ['Banco del Norte', 'Local credit on its own paper.'],
            ],
          },
        ],
      },
      {
        id: 'material',
        title: 'The material culture of the note',
        paragraphs: [
          'The shift from metal to paper had to overcome distrust left by independence vales and by Mosquera’s treasury notes, which the public discounted. Strict convertibility and the quality of the engraving were the answer.',
          'Domestic lithography of that class barely existed. Most houses ordered plates from the American Bank Note Company in New York and, to a lesser extent, from Thomas De La Rue in London. Allegorical vignettes, regional portraits, and anti-counterfeiting work legitimized paper in the trade. Usual denominations were 1, 5, 10, 20, and 50 pesos, inscribed peso oro or, sometimes, peso plata, to underline convertibility. That aesthetic is not a holding: the ABNC proofs in this collection — Hipotecario and Riohacha — are printer’s objects with zero serials, not circulating notes.',
        ],
      },
      {
        id: 'estabilidad',
        title: 'The stability debate and the clearinghouse',
        paragraphs: [
          'Traditional historiography, often citing Guillermo Torres García, painted 1870–1887 as unstable and poorly regulated, and used that reading to justify the 1923 central bank. Adolfo Meisel Roca revised the narrative with quantitative series: the system was remarkably stable when civil wars and state fiscal policy did not strike it. The main risk was not endogenous over-issue but the political shock.',
          'Antioquia is the example. With little formal regulation it sustained two decades of credit expansion without a documented systemic failure. Recent studies emphasize the clearinghouse: houses exchanged rival paper and settled the net in gold. A bank that over-issued faced a negative balance and had to deliver metal. That discipline aligned private incentive with regional liquidity, without a monopoly of issue.',
        ],
      },
      {
        id: 'regeneracion',
        title: 'The Regeneración and the close (1880–1887)',
        paragraphs: [
          'The dismantling did not come from a general market failure. It came from a political turn. As Radical hegemony waned, Rafael Núñez — tied to the Banco de Cartagena — and Miguel Antonio Caro pushed a unitary state that needed to centralize money to finance the treasury.',
          'The first phase was Law 39 of 1880 and the Banco Nacional of 1881: state funds, fiscal policy, and credit to the treasury. At first it coexisted with private issuers, but they were required to take Nacional notes at par, mixing private metallic reserves with an increasingly fiduciary issue.',
          'The 1885 civil war strained the accounts. The government used the Nacional as a campaign press. Some narratives date forced tender to Decree 260 of 1885. This case follows the thread already recorded in the Colombian chapter: in 1886 Decree 104 defined the paper as the monetary unit and Law 87 made it forced legal tender. Convertibility of Nacional notes into gold or silver was suspended, and the public — and the private banks — had to accept that fiat.',
          'The Constitution of 1886 closed the federal frame. Law 57 of 1887 reorganized banking for the unitary state: it suspended private banks’ right to issue while the Nacional held the exclusive privilege, ordered private paper withdrawn, and exchanged it for legal fiat. It also gave the government inspection powers, with forced liquidation for non-compliance. The shift from convertible peso oro to Nacional paper set off inflation; that dynamic peaked in the Thousand Days’ War (1899–1902). Banco de Bogotá and Banco de Colombia could move into discounting and deposits; many smaller houses, especially in Antioquia and on the coast, were liquidated in the following decades.',
        ],
      },
      {
        id: 'cierre',
        title: 'Close',
        paragraphs: [
          'Free banking from 1870 to 1887 shows how decentralized credit and a convertible note covered a fragmented country. Private houses — more than three dozen in the classic window — supplied liquidity for export trade. Recent debate, with Meisel and the Antioquian clearinghouse studies, contests the thesis of endogenous chaos: the break came with political centralization, forced tender, and the 1887 monopoly. The institutional legacy remains in the houses that survived as deposit banks and in the paper this case records piece by piece, by serial or by plate proof.',
        ],
      },
    ],
    holdingsTitle: 'Pieces published in this case',
    holdingsLead:
      'Only these specimens have records. The other houses in the tables are type context, not holdings. The 1901 Tolima 1-peso is wartime treasury paper, not a free-banking note of 1870–1887.',
    holdings: [
      {
        href: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
        label: 'Banco Hipotecario de Bogotá · 5 pesos, 1881',
        dek: 'ABNC proof pair, Series Y, serial 00000.',
      },
      {
        href: '/coleccion/colombia/5-pesos-rio-hacha-1883/',
        label: 'Banco de Riohacha · 5 pesos, 1883',
        dek: 'ABNC proof pair, Series C, serial 00000.',
      },
    ],
    catalogCta: 'Back to the Colombia case',
    glossaryCta: 'Glossary definition: free banking',
    blogCta: 'Essay: origins of commercial banking in Colombia',
    sourcesTitle: 'Sources',
    sources: [
      {
        href: 'https://repositorio.banrep.gov.co/items/ccd86e0e-d76a-4146-9e17-bf4c68032e38',
        label: 'Adolfo Meisel Roca — Commercial banks in the free-banking era, 1871–1923 (BanRep)',
      },
      {
        href: 'https://enciclopedia.banrepcultural.org/Papel_moneda_en_Colombia',
        label: 'Banrepcultural Encyclopedia — Paper money in Colombia',
      },
      {
        href: 'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-59962009000100002',
        label: 'Banking and region in Colombia, 1850–1880 (SciELO)',
      },
      {
        href: 'https://www.cambridge.org/core/journals/revista-de-historia-economica-journal-of-iberian-and-latin-american-economic-history/article/financial-stability-and-interdependence-free-banking-in-antioquia/8FF10A17096B9B73511EEF0426D7C302',
        label: 'Financial stability and interdependence: free banking in Antioquia (RHE)',
      },
      {
        href: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-22532023000300003',
        label: 'The clearinghouse in free banking, the Antioquia case (América Latina en la Historia Económica)',
      },
      {
        href: 'https://en.numista.com/catalogue/literature.php?id=100183',
        label: 'Hernández — Monedas y Billetes de Colombia, 8th ed. (Numista L100183)',
      },
    ],
  },
};

export function bancaLibrePath(locale: Locale): string {
  return locale === 'en' ? `/en${BANCA_LIBRE_PATH_EN}` : BANCA_LIBRE_PATH;
}

export const bancaLibreDedicatedSlugs = [
  BANCA_LIBRE_PATH.replace(/^\/|\/$/g, ''),
  BANCA_LIBRE_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
