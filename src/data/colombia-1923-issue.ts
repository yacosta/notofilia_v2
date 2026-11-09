import type { Locale } from '../lib/locale-paths';

export const ISSUE_1923_PATH = '/coleccion/colombia/emision-1923/';
export const ISSUE_1923_PATH_EN = '/collection/colombia/1923-issue/';

type IssueCell = string;

type IssueTable = {
  caption: string;
  headers: string[];
  rows: IssueCell[][];
};

type IssueBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  note?: string;
  tables?: IssueTable[];
};

type IssueSection = IssueBlock & {
  subsections?: IssueBlock[];
};

type IssueLink = {
  href: string;
  label: string;
};

type IssueFaq = {
  question: string;
  answer: string;
};

export type Issue1923Copy = {
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
  sections: IssueSection[];
  faq: IssueFaq[];
  relatedTitle: string;
  related: IssueLink[];
  catalogCta: string;
  sourcesTitle: string;
  sources: IssueLink[];
};

const published = '2026-11-08';

export const issue1923Copy: Record<Locale, Issue1923Copy> = {
  es: {
    nav: 'Emisión de 1923',
    home: 'Inicio',
    series: 'Colombia',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Emisión de 1923 del Banco de la República',
    metaDescription:
      'La emisión de 1923 del Banco de la República: Ley 25, el pánico del Banco López, los resellados de Medellín y la primera serie en pesos oro. Sin precios.',
    title: 'La emisión de 1923',
    kicker: 'Banco de la República · pesos oro',
    lead:
      'En 1923 nació el Banco de la República, el segundo banco central de América Latina después del de Perú, y con él el billete moderno colombiano. Esta página recorre esa emisión: la Ley 25, los resellados de Medellín y la primera serie en pesos oro. No es una ficha de ejemplar. Esta vitrina aún no publica un billete de 1923, y no publica precios.',
    published,
    dateLabel: '8 de noviembre de 2026',
    sections: [
      {
        id: 'introduccion',
        title: 'De la banca libre al banco central',
        paragraphs: [
          'En la historia de la notafilia colombiana, 1923 marca un punto de inflexión. Ese año nació el Banco de la República y se consolidó la soberanía monetaria del país. La emisión de 1923 es la expresión material y legal del paso desde un sistema monetario fragmentado hacia una arquitectura financiera centralizada.',
          'Durante más de medio siglo, entre 1870 y 1923, la economía colombiana atravesó una larga inestabilidad monetaria. Bajo el régimen de banca libre de las décadas de 1870 y 1880, los bancos privados regionales emitían sus propios billetes, con grados variables de convertibilidad, hasta que en 1886 se les retiró esa facultad. Ese mismo año, el antiguo Banco Nacional (creado en 1880) suspendió la convertibilidad de sus billetes e impuso el curso forzoso. Las guerras civiles dejaron una herencia de inflación y desconfianza en el papel moneda del Estado, y los intentos posteriores de ordenar la moneda, como el Banco Central de Colombia (1905–1909), también fracasaron.',
          'El Banco de la República no surgió en un vacío institucional. Su creación fue precipitada por un pánico bancario y guiada por la asesoría técnica de la Misión Kemmerer. Esa coyuntura dividió su primera incursión en el circulante en dos etapas: una emisión provisional de emergencia, los llamados resellados de Medellín, y la primera emisión definitiva, encargada a la American Bank Note Company (ABNC) y denominada en pesos oro.',
        ],
      },
      {
        id: 'contexto',
        title: 'El Tratado Urrutia-Thomson y la Danza de los Millones',
        paragraphs: [
          'El país salía de la crisis de 1920–1921, que trajo la caída internacional de los precios del café, una fuerte devaluación y la contracción de las importaciones. Las arcas públicas estaban vacías y el Estado tenía dificultades para pagar a sus funcionarios.',
          'Dos factores cambiaron el panorama. El primero fue el Tratado Urrutia-Thomson, por el cual Estados Unidos se comprometió a pagar a Colombia una indemnización de 25 millones de dólares por su papel en la separación de Panamá. La suma se pactó en cinco cuotas anuales, y con recursos de esa indemnización el Gobierno pagó su aporte —la mitad— al capital del futuro banco central.',
          'El segundo fue la apertura del crédito externo. El gobierno del general Pedro Nel Ospina (1922–1926) emprendió un ambicioso plan de endeudamiento público y privado para financiar ferrocarriles y obras públicas, con capitales de Nueva York y Londres. Ese periodo de prosperidad y euforia financiera se conoce como la Danza de los Millones.',
        ],
      },
      {
        id: 'kemmerer',
        title: 'La Misión Kemmerer y la Ley 25',
        paragraphs: [
          'En marzo de 1923 el gobierno contrató una misión de expertos estadounidenses encabezada por Edwin Walter Kemmerer, el llamado money doctor. Buena parte de su éxito en Colombia se debió a la colaboración con asesores locales, entre los que se destacó el jurista y hacendista Esteban Jaramillo.',
          'La misión presentó proyectos de ley que el Congreso aprobó ese mismo año:',
        ],
        tables: [
          {
            caption: 'Leyes de 1923 asociadas a la Misión Kemmerer',
            headers: ['Ley (1923)', 'Institución o materia'],
            rows: [
              ['Ley 20', 'Impuesto de papel sellado y timbre.'],
              ['Ley 25', 'Banco de la República: creación del banco central.'],
              ['Ley 34', 'Presupuesto nacional.'],
              ['Ley 42', 'Departamento de Contraloría, antecedente de la Contraloría General, en reemplazo de la Corte de Cuentas.'],
              ['Ley 45', 'Superintendencia Bancaria.'],
              ['Ley 46', 'Instrumentos negociables.'],
            ],
          },
        ],
        note:
          'La Ley 25 del 11 de julio de 1923 organizó el Banco de la República como una sociedad anónima de naturaleza mixta, con un capital de 10 millones de pesos oro. El Gobierno aportó la mitad, financiada con la indemnización de Panamá; la otra mitad correspondió a bancos comerciales nacionales, bancos extranjeros y particulares. La Junta Directiva original tenía diez miembros, y los tres representantes del Gobierno tenían voz pero no voto, un diseño pensado para proteger la independencia técnica de la entidad. La ley adoptó el patrón oro y obligó al Banco a mantener una reserva legal en oro equivalente al 60 % de sus billetes en circulación y sus depósitos. El privilegio exclusivo de emisión se otorgó por 20 años, contados desde el 20 de julio de 1923, fecha en que se registró la escritura social del Banco.',
      },
      {
        id: 'banco-lopez',
        title: 'El pánico financiero y la caída del Banco López',
        paragraphs: [
          'El calendario original preveía abrir el Banco al público en enero de 1924. Una crisis bancaria adelantó los planes en seis meses.',
          'En el centro de esa crisis estaba el Banco López, fundado en 1919 por la firma exportadora de café Pedro A. López y Cía. y de propiedad mayoritaria de la familia de Pedro A. López, padre del futuro presidente Alfonso López Pumarejo. El banco no emitía billetes. Su punto débil era el vínculo con la casa comercial, a la que una fuerte baja del precio del café en Nueva York puso en dificultades. El público interpretó que el banco podía quedar ilíquido.',
          'El viernes 13 de julio de 1923 se difundió en Bogotá la noticia de sus problemas y comenzó una corrida que continuó el lunes 16 y el martes 17. El lunes 16, el Decreto 1031 nombró el Comité Organizador del Banco de la República. El gobierno compró el Banco López, con pacto de retroventa, junto con su edificio, por 750.000 pesos, pero la salida de depósitos no se detuvo y el banco terminó cerrando. Ante el riesgo de un colapso del sistema, el propio Kemmerer propuso al presidente Ospina abrir de inmediato el banco emisor.',
          'El Banco de la República abrió sus puertas el lunes 23 de julio de 1923, en el edificio recién adquirido al Banco López. Empezó a redescontar cartera para inyectar fondos, pero aún no tenía billetes propios: la impresión apenas se estaba contratando en Nueva York. Su primer gerente fue José Joaquín Pérez, quien ejerció entre julio de 1923 y abril de 1924. Lo sucedió Félix Salazar Jaramillo.',
        ],
      },
      {
        id: 'resellados',
        title: 'La emisión provisional: los resellados de Medellín',
        paragraphs: [
          'Para poner en circulación un medio de pago inmediato, el Banco recurrió a los certificados de oro que la American Bank Note Company había fabricado para la Casa de Moneda de Medellín, encargados originalmente en 1919–1920. Los certificados se trasladaron con urgencia a Bogotá y se resellaron en el reverso con la leyenda «BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL».',
          'Las denominaciones corresponden a las series catalogadas como Pick 351 a 354:',
        ],
        items: [
          '2½ pesos, certificado fechado el 1 de mayo de 1920.',
          '5 pesos, 15 de septiembre de 1919.',
          '10 pesos, 15 de septiembre de 1919.',
          '20 pesos, 15 de septiembre de 1919.',
        ],
        note:
          'Los catálogos registran un formato aproximado de 150 × 85 mm. Estos billetes circularon mientras llegaban los definitivos, y hoy son piezas escasas. Esta vitrina no documenta un ejemplar resellado.',
      },
      {
        id: 'peso-oro',
        title: 'La primera emisión definitiva: el peso oro',
        paragraphs: [
          'La impresión de la serie definitiva se contrató con la American Bank Note Company de Nueva York, que grabó e imprimió sus siete denominaciones.',
          'Bajo la Ley 25, esta familia de billetes se denominó en pesos oro: una promesa de cambiar el billete por oro amonedado o, a falta de monedas, por giros sobre el exterior pagaderos en oro. Todos los billetes de la serie llevan impresa la fecha de registro de la escritura social del Banco: «20 de Julio de 1923».',
          'Los billetes llevan tres firmas: en el anverso, las del gerente José Joaquín Pérez y el secretario Gustavo Michelsen; en el reverso, la del cajero Gonzalo Posada. La firma del cajero en el reverso se mantuvo en las emisiones de 1926 y 1928 y desapareció con la emisión de la ABNC de 1929. Todos los reversos comparten la cabeza de la Libertad, sello del Banco. El formato de la serie es de aproximadamente 135 × 70 mm. González White (7.ª ed., 2019) confirma ese formato y anota que el título «El Banco de la República» va en letras góticas, con las series A a G en las siete denominaciones.',
        ],
        tables: [
          {
            caption: 'Denominaciones, series e iconografía de la primera emisión. El color del 2 pesos oro no figura en las fuentes citadas.',
            headers: ['Denominación', 'Pick / serie', 'Color (anverso / reverso)', 'Retrato'],
            rows: [
              ['1 peso oro', 'P-361 (serie A)', 'Azul / café rojizo', 'Francisco José de Caldas'],
              ['2 pesos oro', 'P-362 (serie B)', 'No figura en las fuentes citadas', 'Camilo Torres Tenorio'],
              ['5 pesos oro', 'P-363 (serie C)', 'Café / verde', 'José María Córdova'],
              ['10 pesos oro', 'P-364 (serie D)', 'Negro / rojo', 'Antonio Nariño'],
              ['50 pesos oro', 'P-365 (serie E)', 'Café oscuro / naranja', 'Antonio José de Sucre'],
              ['100 pesos oro', 'P-366 (serie F)', 'Morado / café rojizo', 'Francisco de Paula Santander'],
              ['500 pesos oro', 'P-367 (serie G)', 'Verde oliva / naranja', 'Simón Bolívar'],
            ],
          },
        ],
        note:
          'Las cantidades exactas del pedido inicial a la ABNC no están documentadas en fuentes abiertas. Las cifras más citadas, ambas de prensa, son 6.000 ejemplares para el billete de 500 pesos y 30.000 para el de 100. No son una tirada de tipo. Las tablas anuales de producción del Banco de la República que guarda este archivo empiezan en 1960 y no cubren 1923. El extracto de González White mezcla las columnas de esa emisión, así que esta página no publica un número de catálogo adivinado.',
      },
      {
        id: 'quinientos',
        title: 'La pieza mayor: el 500 pesos oro de 1923',
        paragraphs: [
          'Dentro de esta emisión, el billete de 500 pesos oro se ha consolidado como la pieza cumbre de la notafilia colombiana.',
          'En 1923 representaba un poder adquisitivo enorme por su convertibilidad, no por un precio de catálogo. Con la paridad de la época —1 peso equivalía a 1,5976 gramos de oro de ley 0,916⅔, el mismo patrón de la moneda de oro de 5 pesos, de 7,988 gramos—, el billete era convertible por unos 799 gramos de oro de 22 quilates, es decir, unos 732 gramos de oro fino. Según las cifras divulgadas en prensa y catálogos, su tiraje fue de unos 6.000 ejemplares. Esa cifra sigue siendo de prensa, no una fila de las tablas de BanRep.',
          'El anverso, en verde oliva, lleva el retrato de Simón Bolívar; el reverso está impreso en tinta naranja. No existe un censo público verificable de los ejemplares emitidos que sobreviven: los medios, citando a coleccionistas, hablan de entre dos y cuatro. Los especímenes y las pruebas de imprenta aparecen con más frecuencia.',
          'Tampoco hay resultados de subasta recientes y verificables de un ejemplar emitido. En 2023 el coleccionista Alfonso Ujueta hizo pública una oferta de compra por un ejemplar en óptimas condiciones. Es una oferta, no una venta registrada, y esta página no publica la cifra. Del lado de los especímenes sí hay un registro concreto: un espécimen del 500 pesos oro (P-367s), certificado por PMG en Choice Uncirculated 63 EPQ, se ofreció en una venta de Stack’s Bowers durante la convención de la ANA, como parte de la colección Eldorado de papel moneda colombiano. Que se ofreciera no es un martillo.',
        ],
      },
      {
        id: 'catalogacion',
        title: 'Certificación y catalogación',
        paragraphs: [
          'En piezas de este tipo, la certificación por una entidad independiente como Paper Money Guaranty (PMG) y la catalogación precisa sirven para identificar el objeto. No sustituyen un serial, y esta página no tasa.',
        ],
        subsections: [
          {
            id: 'escala-pmg',
            title: 'La escala de PMG',
            paragraphs: [
              'La escala que sigue resume los grados que el texto de origen atribuye a PMG para leer un billete de 1923. No es una tasación.',
            ],
            tables: [
              {
                caption: 'Grados de PMG citados para leer la emisión de 1923. Esta tabla no contiene precios.',
                headers: ['Grado PMG', 'Qué exige'],
                rows: [
                  [
                    'Gem Uncirculated (65 a 70)',
                    'EPQ obligatorio y centrado superior al promedio. El 65 admite una o dos distracciones menores de manipulación y el 70 ninguna visible con lupa de 5x. Muy raro en billetes emitidos de 1923.',
                  ],
                  ['Choice Uncirculated (63 a 64)', 'Centrado imperfecto, pero sin dobleces que atraviesen el diseño.'],
                  [
                    'About Uncirculated (50 a 58)',
                    'Desde un solo doblez a través del diseño (58) hasta dos dobleces marcados, o dobleces ligeros horizontal y vertical (50).',
                  ],
                  [
                    'EPQ (Exceptional Paper Quality)',
                    'Papel completamente original: el billete no ha sido procesado, lavado o prensado, para aparentar un grado superior.',
                  ],
                ],
              },
            ],
          },
          {
            id: 'catalogos',
            title: 'Catálogos de referencia',
            paragraphs: [
              'En el ámbito internacional se usan los números Pick (Standard Catalog of World Paper Money) y las referencias de The Banknote Book (TBB). En Colombia, dos obras son de consulta obligada:',
            ],
            items: [
              'Bernardo González White, Catálogo de billetes Banco de la República y República de Colombia 1923–2019, 7.ª edición (Asociación C&C, Medellín, 2019).',
              'Pedro Pablo Hernández, Monedas y billetes de Colombia 1616–2023, 8.ª edición (Begon, Medellín, 2023), que abarca desde la Colonia hasta hoy e incluye un capítulo dedicado a los 100 años del Banco de la República.',
            ],
          },
        ],
      },
      {
        id: 'depresion',
        title: 'Del patrón oro a la Gran Depresión',
        paragraphs: [
          'La rigidez de la reserva en oro —del 60 % en su origen— protegió la moneda durante la Danza de los Millones, pero se volvió una trampa tras el crac de 1929 y la Gran Depresión. Cuando se interrumpieron los préstamos internacionales y cayeron las exportaciones de café, el Banco no tuvo margen para responder a la crisis.',
          'En 1930, el presidente Enrique Olaya Herrera trajo a Kemmerer en una segunda misión. De esa etapa salieron la Ley 73 de 1930, que redujo la reserva al 50 %, y la Ley 82 de 1931, que reformó la Junta Directiva. El quiebre llegó desde Londres: el 21 de septiembre de 1931 Gran Bretaña suspendió el patrón oro y, a la semana siguiente, Colombia estableció un control de cambios y suspendió la convertibilidad. Siguió un patrón oro controlado que terminó con la devaluación de febrero de 1933, y el respaldo en oro de los billetes se desmontó gradualmente hasta 1938. El conflicto con el Perú (1932–1933) llegó después, y parte de su gasto se financió con crédito del Banco de la República.',
          'Aun así, la leyenda «pesos oro» sobrevivió en los billetes colombianos por inercia institucional hasta 1993, cuando el término fue finalmente suprimido.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Por qué todos los billetes de la primera serie tienen la misma fecha?',
        answer:
          'El 20 de julio de 1923 se registró la escritura social del Banco de la República. Es su fecha de fundación legal y el día desde el cual se contó su privilegio de emisión por 20 años.',
      },
      {
        question: '¿Qué son los resellados de Medellín?',
        answer:
          'Son certificados de oro impresos por la ABNC para la Casa de Moneda de Medellín, que el Banco de la República trajo a Bogotá y habilitó con un resello a su nombre para usarlos como billetes de emergencia mientras llegaba la primera serie definitiva desde Nueva York.',
      },
      {
        question: '¿Cuánto oro respaldaba el billete de 500 pesos?',
        answer:
          'Con la paridad de la época, el billete de 500 pesos oro era convertible por unos 799 gramos de oro de 22 quilates, equivalentes a unos 732 gramos de oro fino. Esa cifra es convertibilidad, no un precio de hoy.',
      },
      {
        question: '¿Por qué el Banco abrió antes de lo previsto?',
        answer:
          'Por la corrida de depósitos contra el Banco López en julio de 1923. Para evitar un colapso del sistema, Kemmerer propuso al presidente Ospina abrir el Banco de inmediato, y así se hizo el 23 de julio de 1923.',
      },
      {
        question: '¿Quién fue el primer gerente?',
        answer: 'José Joaquín Pérez, entre julio de 1923 y abril de 1924. Lo sucedió Félix Salazar Jaramillo.',
      },
    ],
    relatedTitle: 'Para seguir leyendo',
    related: [
      { href: '/glosario/billete-provisional/', label: 'Glosario: billete provisional' },
      { href: '/glosario/peso-oro/', label: 'Glosario: peso oro' },
      { href: '/glosario/pick/', label: 'Glosario: Pick' },
      { href: '/glosario/epq-calidad-de-papel-excepcional/', label: 'Glosario: EPQ' },
      { href: '/glosario/banca-libre/', label: 'Glosario: banca libre' },
      { href: '/coleccion/colombia/banca-libre/', label: 'Ensayo: banca libre en Colombia' },
      { href: '/coleccion/colombia/banco-de-la-republica/', label: 'Vitrina: Banco de la República' },
      { href: '/editorial/', label: 'Política editorial' },
    ],
    catalogCta: 'Volver a Billetes de Colombia',
    sourcesTitle: 'Fuentes',
    sources: [
      {
        href: 'https://www.banrep.gov.co/es/banco/historia/antecedentes',
        label: 'Banco de la República, «Historia — Antecedentes».',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/0e6a41ab-c77b-4b43-a663-a79c7c52b436/download',
        label: 'Adolfo Meisel Roca, «Antecedentes del Banco de la República, 1904–1922», en Historia del Banco de la República, cien años.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/c013081c-777d-4c78-9068-ff0747eed327/download',
        label: 'Banco de la República, Banco de la República: antecedentes, evolución y estructura, cap. IX (apertura de 1923, crisis del Banco López, Decreto 1031).',
      },
      {
        href: 'https://www.100libroslibres.com/la-moneda-en-colombia-fundacion-del-banco-de-la-republica-y-organizacion-del-sistema-bancario',
        label: 'Banco de la República / 100 Libros Libres, La moneda en Colombia, «Fundación del Banco de la República y organización del sistema bancario».',
      },
      {
        href: 'https://publicaciones.banrepcultural.org/index.php/banrep/article/download/17368/17771/34989',
        label: 'Revista del Banco de la República, mayo de 1974 (reserva legal del 60 %).',
      },
      {
        href: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=79920',
        label: 'Ley 73 de 1930.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/c79f6972-5a5b-41aa-b940-dac7288d5011/download',
        label: 'Banco de la República, El Banco de la República: nociones sobre su organización y funcionamiento, cap. 5 (privilegio de emisión).',
      },
      {
        href: 'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/jdu_jul_23_2013.pdf',
        label: 'Banco de la República, intervención del gerente general, 23 de julio de 2013.',
      },
      {
        href: 'https://publicaciones.banrepcultural.org/index.php/banrep/article/download/8591/8992/17529',
        label: 'Revista del Banco de la República n.º 1029 (2013): composición de la primera Junta Directiva.',
      },
      {
        href: 'https://www.semana.com/crisis-de-otros-tiempos/551-3/',
        label: 'Semana, «Crisis de otros tiempos».',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Banco_L%C3%B3pez',
        label: 'Wikipedia, «Banco López».',
      },
      {
        href: 'https://www.elespectador.com/opinion/columnistas/oscar-alarcon/la-mision-kemmerer/',
        label: 'Óscar Alarcón, «La Misión Kemmerer», El Espectador.',
      },
      {
        href: 'https://www.numismaticnews.net/paper-money/scarce-5-pesos-gold-certificate-turns-up',
        label: 'Bank Note Reporter / Numismatic News, «Scarce 5 pesos gold certificate turns up» (2018).',
      },
      {
        href: 'https://www.numisquare.com/20-pesos-overprint-1923-4167850440.html',
        label: 'NumiSquare, «20 Pesos Overprint 1923» (P-354) y «2½ Pesos Overprint 1923».',
      },
      {
        href: 'https://www.banknoteworld.org/colombia-2½-pesos-oro-1923-p-351.html',
        label: 'BanknoteWorld, «Colombia 2½ Pesos Oro, 1923, P-351».',
      },
      {
        href: 'https://www.realbanknotes.com/banknote/16824-Colombia-p367a-500-Pesos-from-1923',
        label: 'RealBanknotes, fichas de Colombia P-361 a P-367 (1923).',
      },
      {
        href: 'https://de.numista.com/236873',
        label: 'Numista, «1 Peso Oro» (1923).',
      },
      {
        href: 'https://tr.numista.com/302297',
        label: 'Numista, «2 Pesos Oro» (1923).',
      },
      {
        href: 'https://en.numista.com/catalogue/colombia_section-8.html',
        label: 'Numista, catálogo de billetes de Colombia.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/429b4a21-98e0-402d-a8ce-933b1ae11c91/download',
        label: 'Banco de la República, Banco de la República: antecedentes, evolución y estructura, cap. 6 (convertibilidad).',
      },
      {
        href: 'https://www.pressreader.com/uk/coin-collector/20201201/282308207844181',
        label: 'Coin Collector, «The Banknotes of Colombia» (2020).',
      },
      {
        href: 'https://en.numista.com/48320',
        label: 'Numista, «5 Pesos» (moneda de oro de 7,988 g, ley 0,916⅔).',
      },
      {
        href: 'https://www.radionacional.co/cultura/historia-colombiana/billetes-colombianos-500-pesos-uno-de-los-mas-caros-en-la-historia',
        label: 'Radio Nacional de Colombia, nota de 2023 sobre el billete de 500 pesos de 1923.',
      },
      {
        href: 'https://www.las2orillas.co/?p=810175',
        label: 'Las2orillas, nota sobre billetes colombianos de colección.',
      },
      {
        href: 'https://www.numismaticnews.net/paper-money/last-of-eldorado-collection-on-offer',
        label: 'Numismatic News, «Last of Eldorado collection on offer».',
      },
      {
        href: 'https://www.pmgnotes.com/paper-money-grading/grading-scale/',
        label: 'PMG, «Paper Money Grading Scale».',
      },
      {
        href: 'https://www.banrep.gov.co/es/banco/historia/reforma-1930',
        label: 'Banco de la República, «Reforma de 1930».',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/e64be693-5807-4039-a82a-e9c87c7454c3/download',
        label: 'Carlos Caballero Argáez y Pilar Esguerra Umaña, «Cien años de regímenes de cambio en Colombia».',
      },
      {
        href: 'https://www.ecured.cu/Peso_colombiano',
        label: 'EcuRed, «Peso colombiano».',
      },
      {
        href: 'https://colecciones.banrepcultural.org/en/document/billete-de-cincuenta-pesos/63a069145d96b8790f33d0ef',
        label: 'Banco de la República, Colección Numismática, «Billete de cincuenta pesos» (1923).',
      },
      {
        href: 'https://www.numizon.com/en/banknote/colombia-2-pesos-oro-type-1926-pick-372/col-p372/',
        label: 'Numizon, «Colombia 2 pesos oro type 1926» y «100 pesos oro type 1928».',
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        label: 'Banco de la República, producción y circulación. Las tablas anuales de billetes de este archivo empiezan en 1960.',
      },
      {
        href: 'https://en.numista.com/catalogue/literature.php?id=100183',
        label: 'Pedro Pablo Hernández, Monedas y billetes de Colombia, 8.ª ed. (Numista L100183).',
      },
    ],
  },
  en: {
    nav: '1923 issue',
    home: 'Home',
    series: 'Colombia',
    breadcrumb: 'Breadcrumb',
    metaTitle: '1923 issue of the Banco de la República',
    metaDescription:
      'The Banco de la República’s 1923 issue: Law 25, the Banco López panic, the Medellín overprints, and the first gold-peso series. No prices.',
    title: 'The 1923 issue',
    kicker: 'Banco de la República · gold pesos',
    lead:
      'In 1923 the Banco de la República was founded, Latin America’s second central bank after Peru’s, and with it the modern Colombian banknote. This page follows that issue: Law 25, the Medellín overprints, and the first gold-peso series. It is not a specimen record. This case does not yet publish a 1923 note, and it does not publish prices.',
    published,
    dateLabel: 'November 8, 2026',
    sections: [
      {
        id: 'introduction',
        title: 'From free banking to a central bank',
        paragraphs: [
          'In the history of Colombian notaphily, 1923 is a turning point. That year saw the founding of the Banco de la República and the consolidation of the country’s monetary sovereignty. The 1923 issue is the physical and legal record of Colombia’s shift from a fragmented monetary system to a centralized financial framework.',
          'For more than half a century, from 1870 to 1923, the Colombian economy lurched through long stretches of monetary instability. Under the free-banking regime of the 1870s and 1880s, regional private banks issued their own notes, with varying degrees of convertibility, until that right was withdrawn in 1886. The same year, the old Banco Nacional (founded in 1880) suspended the convertibility of its notes and made them forced legal tender. Repeated civil wars left a legacy of inflation and distrust of government paper money, and later attempts to bring order to the currency, such as the Banco Central de Colombia (1905–1909), also failed.',
          'The Banco de la República did not appear in an institutional vacuum. A banking panic hastened its creation, and the Kemmerer Mission shaped its design. Those circumstances split the bank’s first entry into circulation into two stages: an emergency provisional issue, known as the Medellín overprints, and the first definitive issue, ordered from the American Bank Note Company (ABNC) and denominated in pesos oro (gold pesos).',
        ],
      },
      {
        id: 'background',
        title: 'The Urrutia–Thomson Treaty and the Dance of the Millions',
        paragraphs: [
          'Colombia was emerging from the crisis of 1920–1921, which brought a collapse in world coffee prices, a sharp devaluation, and a contraction in imports. The treasury was empty, and the government struggled to pay its employees.',
          'Two developments changed the picture. The first was the Urrutia–Thomson Treaty, under which the United States agreed to pay Colombia an indemnity of 25 million dollars for its role in the separation of Panama. The sum was payable in five annual installments, and the government used part of it to pay its contribution — half — to the capital of the future central bank.',
          'The second was the opening of foreign credit. The government of General Pedro Nel Ospina (1922–1926) launched an ambitious program of public and private borrowing to fund railways and public works, drawing capital from New York and London. That stretch of prosperity and financial euphoria is remembered as the Danza de los Millones, the Dance of the Millions.',
        ],
      },
      {
        id: 'kemmerer',
        title: 'The Kemmerer Mission and Law 25',
        paragraphs: [
          'In March 1923 the government hired a mission of American experts led by Edwin Walter Kemmerer, the so-called money doctor. Much of his success in Colombia came from working closely with local advisers, chief among them the jurist and public-finance expert Esteban Jaramillo.',
          'The mission drafted bills that Congress passed the same year:',
        ],
        tables: [
          {
            caption: '1923 laws associated with the Kemmerer Mission',
            headers: ['Law (1923)', 'Institution or subject'],
            rows: [
              ['Law 20', 'Stamp tax and stamped paper.'],
              ['Law 25', 'Banco de la República: creation of the central bank.'],
              ['Law 34', 'National budget.'],
              ['Law 42', 'Department of Comptrollership, forerunner of today’s Contraloría General, replacing the Court of Accounts.'],
              ['Law 45', 'Banking Superintendency.'],
              ['Law 46', 'Negotiable instruments.'],
            ],
          },
        ],
        note:
          'Law 25 of 11 July 1923 organized the Banco de la República as a mixed public-private corporation with capital of 10 million gold pesos. The government contributed half, funded with the Panama indemnity; the other half came from domestic commercial banks, foreign banks, and private shareholders. The original board had ten members, and the three government representatives could speak but not vote, a design meant to protect the bank’s technical independence. The law put Colombia on the gold standard and required the bank to hold a gold reserve equal to 60% of its notes in circulation and its deposits. The exclusive right of issue was granted for 20 years, counted from 20 July 1923, the date the bank’s articles of incorporation were registered.',
      },
      {
        id: 'banco-lopez',
        title: 'The financial panic and the fall of the Banco López',
        paragraphs: [
          'The original plan was to open the bank to the public in January 1924. A banking crisis moved that date forward by six months.',
          'At the center of the crisis stood the Banco López, founded in 1919 by the coffee-exporting firm Pedro A. López y Cía. and majority-owned by the family of Pedro A. López, father of future president Alfonso López Pumarejo. The bank did not issue notes. Its weakness was its close tie to the trading house, which a steep drop in coffee prices in New York had put in difficulty. The public concluded that the bank might run out of cash.',
          'On Friday, 13 July 1923, news of its troubles spread through Bogotá and a run began that continued on Monday the 16th and Tuesday the 17th. On Monday the 16th, Decree 1031 appointed the Organizing Committee of the Banco de la República. The government bought the Banco López, with a repurchase agreement, together with its building, for 750,000 pesos, but withdrawals did not stop and the bank ultimately closed. Faced with the risk of a systemic collapse, Kemmerer himself proposed to President Ospina that the bank of issue open at once.',
          'The Banco de la República opened its doors on Monday, 23 July 1923, in the building it had just acquired from the Banco López. It began rediscounting loans to inject funds, but it had no notes of its own yet: printing was only being contracted in New York. Its first general manager was José Joaquín Pérez, who served from July 1923 to April 1924. He was succeeded by Félix Salazar Jaramillo.',
        ],
      },
      {
        id: 'overprints',
        title: 'The provisional issue: the Medellín overprints',
        paragraphs: [
          'To put an immediate means of payment into circulation, the bank turned to gold certificates that the American Bank Note Company had produced for the Casa de Moneda de Medellín (the Medellín Mint), originally ordered in 1919–1920. The certificates were rushed to Bogotá and overprinted on the back with the legend “BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL” (“provisional note”).',
          'The denominations correspond to the issues catalogued as Pick 351 to 354:',
        ],
        items: [
          '2½ pesos, certificate dated 1 May 1920.',
          '5 pesos, 15 September 1919.',
          '10 pesos, 15 September 1919.',
          '20 pesos, 15 September 1919.',
        ],
        note:
          'Catalogs record a size of about 150 × 85 mm. These notes circulated until the definitive notes arrived, and they are scarce today. This case does not document an overprinted example.',
      },
      {
        id: 'gold-peso',
        title: 'The first definitive issue: the gold peso',
        paragraphs: [
          'Printing of the definitive series was contracted with the American Bank Note Company of New York, which engraved and printed all seven denominations.',
          'Under Law 25, this family of notes was denominated in pesos oro: a promise to exchange the note for gold coin or, when coin was short, for drafts on foreign banks payable in gold. Every note in the series carries the date the bank’s articles were registered: “20 de Julio de 1923” (20 July 1923).',
          'The notes bear three signatures: on the front, those of the general manager, José Joaquín Pérez, and the secretary, Gustavo Michelsen; on the back, that of the cashier, Gonzalo Posada. The cashier’s signature on the back continued on the 1926 and 1928 issues and was dropped with the ABNC issue of 1929. All the backs share the bank’s seal, a Liberty head. The series measures about 135 × 70 mm. González White (7th ed., 2019) confirms that size and notes that the title “El Banco de la República” is set in gothic letters, with series A through G on the seven denominations.',
        ],
        tables: [
          {
            caption: 'Denominations, series, and portraits of the first issue. The 2 pesos oro color is not in the sources cited here.',
            headers: ['Denomination', 'Pick / series', 'Color (front / back)', 'Portrait'],
            rows: [
              ['1 peso oro', 'P-361 (series A)', 'Blue / red-brown', 'Francisco José de Caldas'],
              ['2 pesos oro', 'P-362 (series B)', 'Not in the sources cited here', 'Camilo Torres Tenorio'],
              ['5 pesos oro', 'P-363 (series C)', 'Brown / green', 'José María Córdova'],
              ['10 pesos oro', 'P-364 (series D)', 'Black / red', 'Antonio Nariño'],
              ['50 pesos oro', 'P-365 (series E)', 'Dark brown / orange', 'Antonio José de Sucre'],
              ['100 pesos oro', 'P-366 (series F)', 'Purple / red-brown', 'Francisco de Paula Santander'],
              ['500 pesos oro', 'P-367 (series G)', 'Olive green / orange', 'Simón Bolívar'],
            ],
          },
        ],
        note:
          'The exact quantities of the initial ABNC order are not documented in open sources. The figures most often cited, both from the press, are 6,000 notes for the 500 pesos and 30,000 for the 100 pesos. They are not a type print run. The Banco de la República annual production tables kept in this archive begin in 1960 and do not cover 1923. The González White extract jumbles the columns of that issue, so this page does not publish a guessed catalogue number.',
      },
      {
        id: 'five-hundred',
        title: 'The key note: the 1923 500 pesos oro',
        paragraphs: [
          'Within this issue, the 500 pesos oro has become the most prized note in Colombian notaphily.',
          'In 1923 it represented enormous purchasing power through convertibility, not through a catalog price. At the parity of the time — one peso equaled 1.5976 grams of gold of 0.916⅔ fineness, the same standard as the 7.988-gram gold 5-peso coin — the note was convertible into about 799 grams of 22-karat gold, or about 732 grams of fine gold. According to figures reported in the press and in catalogs, about 6,000 notes were printed. That figure remains a press citation, not a row in the BanRep tables.',
          'The front, in olive green, carries a portrait of Simón Bolívar; the back is printed in orange. There is no verifiable public census of surviving issued notes: the press, quoting collectors, speaks of two to four. Specimens and printer’s proofs turn up more often.',
          'Nor are there recent, verifiable auction results for an issued example. In 2023 the collector Alfonso Ujueta publicly offered to buy an example in top condition. That is an offer to buy, not a recorded sale, and this page does not publish the figure. On the specimen side there is a concrete record: a 500 pesos oro specimen (P-367s), graded PMG Choice Uncirculated 63 EPQ, was offered in a Stack’s Bowers sale held at the ANA convention, as part of the Eldorado Collection of Colombian paper money. An offering is not a hammer.',
        ],
      },
      {
        id: 'cataloguing',
        title: 'Grading and cataloging',
        paragraphs: [
          'For notes of this kind, third-party grading by a service such as Paper Money Guaranty (PMG) and precise catalog attribution help identify the object. They do not replace a serial, and this page does not price a note.',
        ],
        subsections: [
          {
            id: 'pmg-scale',
            title: 'The PMG scale',
            paragraphs: [
              'The scale below summarizes the grades the source text attributes to PMG for reading a 1923 note. It is not a valuation.',
            ],
            tables: [
              {
                caption: 'PMG grades cited for reading the 1923 issue. This table contains no prices.',
                headers: ['PMG grade', 'Requirements'],
                rows: [
                  [
                    'Gem Uncirculated (65 to 70)',
                    'EPQ required and above-average centering. A 65 allows one or two minor handling distractions, and a 70 none visible under 5x magnification. Very rare for issued 1923 notes.',
                  ],
                  ['Choice Uncirculated (63 to 64)', 'Imperfect centering, but no folds through the design.'],
                  [
                    'About Uncirculated (50 to 58)',
                    'From a single fold through the design (58) to two heavier folds, or light horizontal and vertical folds (50).',
                  ],
                  [
                    'EPQ (Exceptional Paper Quality)',
                    'Completely original paper: the note has not been processed, washed, or pressed, to look like a higher grade.',
                  ],
                ],
              },
            ],
          },
          {
            id: 'catalogs',
            title: 'Reference catalogs',
            paragraphs: [
              'Internationally, collectors use Pick numbers (Standard Catalog of World Paper Money) and references from The Banknote Book (TBB). In Colombia, two works are essential:',
            ],
            items: [
              'Bernardo González White, Catálogo de billetes Banco de la República y República de Colombia 1923–2019, 7th edition (Asociación C&C, Medellín, 2019).',
              'Pedro Pablo Hernández, Monedas y billetes de Colombia 1616–2023, 8th edition (Begon, Medellín, 2023), which runs from the colonial period to the present and includes a chapter on the Banco de la República’s centennial.',
            ],
          },
        ],
      },
      {
        id: 'depression',
        title: 'From the gold standard to the Great Depression',
        paragraphs: [
          'The rigid gold reserve — 60% at the outset — shielded the currency during the Dance of the Millions, but it became a trap after the 1929 crash and the Great Depression. When foreign lending dried up and coffee exports fell, the bank had no room to respond to the crisis.',
          'In 1930 President Enrique Olaya Herrera brought Kemmerer back for a second mission. That period produced Law 73 of 1930, which cut the reserve to 50%, and Law 82 of 1931, which reorganized the board. The break came from London: on 21 September 1931, Britain suspended the gold standard, and the following week Colombia imposed exchange controls and suspended convertibility. A controlled gold standard followed, ending with the devaluation of February 1933, and the gold backing of the notes was phased out by 1938. The conflict with Peru (1932–1933) came afterward, and part of its cost was financed with credit from the Banco de la República.',
          'Even so, the words “pesos oro” survived on Colombian banknotes out of institutional inertia until 1993, when the term was finally dropped.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why do all the notes of the first series carry the same date?',
        answer:
          '20 July 1923 is the date the Banco de la República’s articles of incorporation were registered. It is the bank’s legal founding date and the day from which its 20-year right of issue was counted.',
      },
      {
        question: 'What are the Medellín overprints?',
        answer:
          'They are gold certificates printed by ABNC for the Medellín Mint, which the Banco de la República brought to Bogotá and overprinted in its own name to use as emergency notes until the first definitive series arrived from New York.',
      },
      {
        question: 'How much gold backed the 500-peso note?',
        answer:
          'At the parity of the time, the 500 pesos oro note was convertible into about 799 grams of 22-karat gold, equal to about 732 grams of fine gold. That figure is convertibility, not a price today.',
      },
      {
        question: 'Why did the bank open ahead of schedule?',
        answer:
          'Because of the run on the Banco López in July 1923. To prevent a collapse of the system, Kemmerer proposed to President Ospina that the bank open at once, and it did so on 23 July 1923.',
      },
      {
        question: 'Who was the first general manager?',
        answer: 'José Joaquín Pérez, from July 1923 to April 1924. He was succeeded by Félix Salazar Jaramillo.',
      },
    ],
    relatedTitle: 'Keep reading',
    related: [
      { href: '/glosario/billete-provisional/', label: 'Glossary: provisional note' },
      { href: '/glosario/peso-oro/', label: 'Glossary: gold peso' },
      { href: '/glosario/pick/', label: 'Glossary: Pick' },
      { href: '/glosario/epq-calidad-de-papel-excepcional/', label: 'Glossary: EPQ' },
      { href: '/glosario/banca-libre/', label: 'Glossary: free banking' },
      { href: '/coleccion/colombia/banca-libre/', label: 'Essay: free banking in Colombia' },
      { href: '/coleccion/colombia/banco-de-la-republica/', label: 'Case: Banco de la República' },
      { href: '/editorial/', label: 'Editorial policy' },
    ],
    catalogCta: 'Back to Colombian banknotes',
    sourcesTitle: 'Sources',
    sources: [
      {
        href: 'https://www.banrep.gov.co/es/banco/historia/antecedentes',
        label: 'Banco de la República, “Historia — Antecedentes.”',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/0e6a41ab-c77b-4b43-a663-a79c7c52b436/download',
        label: 'Adolfo Meisel Roca, “Antecedentes del Banco de la República, 1904–1922,” in Historia del Banco de la República, cien años.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/c013081c-777d-4c78-9068-ff0747eed327/download',
        label: 'Banco de la República, Banco de la República: antecedentes, evolución y estructura, ch. IX (1923 opening, Banco López crisis, Decree 1031).',
      },
      {
        href: 'https://www.100libroslibres.com/la-moneda-en-colombia-fundacion-del-banco-de-la-republica-y-organizacion-del-sistema-bancario',
        label: 'Banco de la República / 100 Libros Libres, La moneda en Colombia, “Fundación del Banco de la República y organización del sistema bancario.”',
      },
      {
        href: 'https://publicaciones.banrepcultural.org/index.php/banrep/article/download/17368/17771/34989',
        label: 'Revista del Banco de la República, May 1974 (60% legal reserve).',
      },
      {
        href: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=79920',
        label: 'Law 73 of 1930.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/c79f6972-5a5b-41aa-b940-dac7288d5011/download',
        label: 'Banco de la República, El Banco de la República: nociones sobre su organización y funcionamiento, ch. 5 (right of issue).',
      },
      {
        href: 'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/jdu_jul_23_2013.pdf',
        label: 'Banco de la República, remarks by the general manager, 23 July 2013.',
      },
      {
        href: 'https://publicaciones.banrepcultural.org/index.php/banrep/article/download/8591/8992/17529',
        label: 'Revista del Banco de la República no. 1029 (2013): composition of the first board.',
      },
      {
        href: 'https://www.semana.com/crisis-de-otros-tiempos/551-3/',
        label: 'Semana, “Crisis de otros tiempos.”',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Banco_L%C3%B3pez',
        label: 'Wikipedia (Spanish), “Banco López.”',
      },
      {
        href: 'https://www.elespectador.com/opinion/columnistas/oscar-alarcon/la-mision-kemmerer/',
        label: 'Óscar Alarcón, “La Misión Kemmerer,” El Espectador.',
      },
      {
        href: 'https://www.numismaticnews.net/paper-money/scarce-5-pesos-gold-certificate-turns-up',
        label: 'Bank Note Reporter / Numismatic News, “Scarce 5 pesos gold certificate turns up” (2018).',
      },
      {
        href: 'https://www.numisquare.com/20-pesos-overprint-1923-4167850440.html',
        label: 'NumiSquare, “20 Pesos Overprint 1923” (P-354) and “2½ Pesos Overprint 1923.”',
      },
      {
        href: 'https://www.banknoteworld.org/colombia-2½-pesos-oro-1923-p-351.html',
        label: 'BanknoteWorld, “Colombia 2½ Pesos Oro, 1923, P-351.”',
      },
      {
        href: 'https://www.realbanknotes.com/banknote/16824-Colombia-p367a-500-Pesos-from-1923',
        label: 'RealBanknotes, Colombia P-361 to P-367 (1923).',
      },
      {
        href: 'https://de.numista.com/236873',
        label: 'Numista, “1 Peso Oro” (1923).',
      },
      {
        href: 'https://tr.numista.com/302297',
        label: 'Numista, “2 Pesos Oro” (1923).',
      },
      {
        href: 'https://en.numista.com/catalogue/colombia_section-8.html',
        label: 'Numista, Colombia banknote catalog.',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/429b4a21-98e0-402d-a8ce-933b1ae11c91/download',
        label: 'Banco de la República, Banco de la República: antecedentes, evolución y estructura, ch. 6 (convertibility).',
      },
      {
        href: 'https://www.pressreader.com/uk/coin-collector/20201201/282308207844181',
        label: 'Coin Collector, “The Banknotes of Colombia” (2020).',
      },
      {
        href: 'https://en.numista.com/48320',
        label: 'Numista, “5 Pesos” (7.988 g gold coin, 0.916⅔ fine).',
      },
      {
        href: 'https://www.radionacional.co/cultura/historia-colombiana/billetes-colombianos-500-pesos-uno-de-los-mas-caros-en-la-historia',
        label: 'Radio Nacional de Colombia, 2023 note on the 1923 500-peso banknote.',
      },
      {
        href: 'https://www.las2orillas.co/?p=810175',
        label: 'Las2orillas, article on collectible Colombian banknotes.',
      },
      {
        href: 'https://www.numismaticnews.net/paper-money/last-of-eldorado-collection-on-offer',
        label: 'Numismatic News, “Last of Eldorado collection on offer.”',
      },
      {
        href: 'https://www.pmgnotes.com/paper-money-grading/grading-scale/',
        label: 'PMG, “Paper Money Grading Scale.”',
      },
      {
        href: 'https://www.banrep.gov.co/es/banco/historia/reforma-1930',
        label: 'Banco de la República, “Reforma de 1930.”',
      },
      {
        href: 'https://repositorio.banrep.gov.co/bitstreams/e64be693-5807-4039-a82a-e9c87c7454c3/download',
        label: 'Carlos Caballero Argáez and Pilar Esguerra Umaña, “Cien años de regímenes de cambio en Colombia.”',
      },
      {
        href: 'https://www.ecured.cu/Peso_colombiano',
        label: 'EcuRed, “Peso colombiano.”',
      },
      {
        href: 'https://colecciones.banrepcultural.org/en/document/billete-de-cincuenta-pesos/63a069145d96b8790f33d0ef',
        label: 'Banco de la República, Numismatic Collection, “Billete de cincuenta pesos” (1923).',
      },
      {
        href: 'https://www.numizon.com/en/banknote/colombia-2-pesos-oro-type-1926-pick-372/col-p372/',
        label: 'Numizon, “Colombia 2 pesos oro type 1926” and “100 pesos oro type 1928.”',
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        label: 'Banco de la República, production and circulation. The annual banknote tables in this archive begin in 1960.',
      },
      {
        href: 'https://en.numista.com/catalogue/literature.php?id=100183',
        label: 'Pedro Pablo Hernández, Monedas y billetes de Colombia, 8th ed. (Numista L100183).',
      },
    ],
  },
};

export function issue1923Path(locale: Locale): string {
  return locale === 'en' ? `/en${ISSUE_1923_PATH_EN}` : ISSUE_1923_PATH;
}

export const issue1923DedicatedSlugs = [
  ISSUE_1923_PATH.replace(/^\/|\/$/g, ''),
  ISSUE_1923_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
