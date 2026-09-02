import type { Locale } from '../lib/locale-paths';

export const COMPARISON_PATH = '/notofilia-vs-catalogos-billetes-colombianos/';
export const COMPARISON_PATH_EN = '/notofilia-vs-colombian-banknote-catalogs/';

export const comparisonCopy = {
  es: {
    nav: 'Notofilia frente a otros catálogos',
    home: 'Inicio',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Notofilia vs. otros catálogos de billetes colombianos',
    metaDescription:
      'En qué se diferencia Notofilia de la Colección Numismática del BanRep, del catálogo Pick y de los anuncios de MercadoLibre: ejemplares privados, tipos y ventas.',
    title: 'Notofilia vs. otros catálogos de billetes colombianos',
    kicker: 'Guía de fuentes',
    lead:
      'Quien busca un billete colombiano suele cruzar cuatro sitios distintos: un museo del banco emisor, un catálogo de tipos, un mercado de anuncios y esta colección privada. No miden lo mismo.',
    published: '2026-09-02',
    dateLabel: '2 de septiembre de 2026',
    sections: [
      {
        id: 'notofilia',
        title: 'Qué es Notofilia',
        paragraphs: [
          'Notofilia es una colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. El español vive en la raíz del sitio; el inglés, en /en/. Nada de lo que se muestra está a la venta.',
          'Cada ficha describe un ejemplar concreto: fotos de anverso y reverso, serial cuando se lee, referencias Pick, TBB, González White (BG#) o Hernández (Cód.) cuando existen, y las fuentes usadas. No se inventan tiradas de un tipo a partir del total anual del BanRep, ni se republican columnas de precios.',
        ],
      },
      {
        id: 'banrep',
        title: 'Colección Numismática del Banco de la República',
        paragraphs: [
          'El Banco de la República guarda una Colección Numismática institucional, expuesta en el Museo Casa de Moneda de Bogotá y consultable en el catálogo de Banrepcultural. Es un museo del emisor: tipos, contexto histórico y piezas de reserva, no el inventario de un coleccionista particular.',
          'Sus tablas públicas de producción (1960–2022 en notas; 1987 en adelante en moneda) miden millones de piezas por denominación y año. No sustituyen el Pick de un tipo, ni el serial de un ejemplar. Notofilia las cita como estadística del emisor, no como tirada de una ficha.',
        ],
      },
      {
        id: 'pick',
        title: 'El catálogo Pick (Standard Catalog of World Paper Money)',
        paragraphs: [
          'El Standard Catalog of World Paper Money —el «Pick»— es un catálogo de tipos: asigna un número a un diseño, una fecha o una variedad, no a un serial. En Colombia convive con el The Banknote Book (TBB), con González White para el BanRep de 1923–2019 y con Hernández para el papel anterior a 1923.',
          'Dos billetes con el mismo Pick pueden ser objetos distintos. Notofilia usa el Pick como etiqueta de tipo y luego identifica el ejemplar por serial o, si está encapsulado, por certificado. Un match de Pick y fecha sin serial no es un duplicado de esta colección.',
        ],
      },
      {
        id: 'mercadolibre',
        title: 'Los anuncios de MercadoLibre',
        paragraphs: [
          'MercadoLibre es un mercado de anuncios. Un lote publicado allí es una oferta de venta, con foto y precio del vendedor, no una ficha de catálogo. Los anuncios aparecen y desaparecen; el grado suele ser una opinión del vendedor, no un slab de PMG o PCGS.',
          'Notofilia no lista piezas a la venta ni copia precios de ese mercado. Si un serial de un anuncio coincide con una ficha publicada aquí, es una coincidencia que hay que verificar: el serial es la identidad del objeto, no el Pick.',
        ],
      },
    ],
    tableCaption: 'Qué mide cada fuente',
    tableHeaders: ['Fuente', 'Qué es', 'Identidad', '¿Se vende?'],
    tableRows: [
      ['Notofilia', 'Colección privada bilingüe', 'Serial (o certificado) de un ejemplar', 'No'],
      ['BanRep / Casa de Moneda', 'Museo y reserva del emisor', 'Tipo de museo; no es un serial de coleccionista', 'No'],
      ['Catálogo Pick', 'Catálogo de tipos mundial', 'Número de tipo (Pick / TBB)', 'No (es un libro)'],
      ['MercadoLibre', 'Anuncios de particulares y tiendas', 'El lote del vendedor, mientras esté publicado', 'Sí'],
    ],
    colombiaCta: 'Abrir el catálogo de Colombia',
    sourcesTitle: 'Enlaces citados',
    sources: [
      {
        href: 'https://colecciones.banrepcultural.org/es/coleccion_numismatica',
        label: 'Banrepcultural — Colección Numismática',
      },
      {
        href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
        label: 'Banrepcultural — Museo Casa de Moneda',
      },
      {
        href: 'https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion',
        label: 'Banco de la República — Producción y circulación',
      },
    ],
  },
  en: {
    nav: 'Notofilia versus other catalogs',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Notofilia vs. other Colombian banknote catalogs',
    metaDescription:
      'How Notofilia differs from the BanRep Numismatic Collection, the Pick catalog, and MercadoLibre listings: private examples, types, and sales.',
    title: 'Notofilia vs. other Colombian banknote catalogs',
    kicker: 'A source guide',
    lead:
      'Anyone looking up a Colombian note usually crosses four different sites: the issuing bank’s museum, a type catalog, a classifieds market, and this private collection. They do not measure the same thing.',
    published: '2026-09-02',
    dateLabel: 'September 2, 2026',
    sections: [
      {
        id: 'notofilia',
        title: 'What Notofilia is',
        paragraphs: [
          'Notofilia is a private collection and bilingual catalogue of historical banknotes and coins, founded by Yezid Acosta. Spanish is the default locale; English lives at /en/. Nothing shown is for sale.',
          'Each record describes one physical example: face and back photos, a serial when it can be read, Pick, TBB, González White (BG#), or Hernández (Cód.) references when those numbers exist, and the sources used. BanRep annual denomination totals are not treated as the printage of one type, and price columns are not republished.',
        ],
      },
      {
        id: 'banrep',
        title: 'The Banco de la República Numismatic Collection',
        paragraphs: [
          'The Banco de la República keeps an institutional Numismatic Collection, shown at the Casa de Moneda Museum in Bogotá and searchable in the Banrepcultural catalog. It is the issuer’s museum: types, historical context, and reserve pieces, not a private collector’s inventory.',
          'Its public production tables (notes 1960–2022; coins from 1987) measure millions of pieces by denomination and year. They do not replace a type’s Pick number or an example’s serial. Notofilia cites them as issuer statistics, not as the printage of one record.',
        ],
      },
      {
        id: 'pick',
        title: 'The Pick catalog (Standard Catalog of World Paper Money)',
        paragraphs: [
          'The Standard Catalog of World Paper Money — “Pick” — is a type catalog: it assigns a number to a design, date, or variety, not to a serial. For Colombia it sits beside The Banknote Book (TBB), González White for BanRep issues of 1923–2019, and Hernández for paper before 1923.',
          'Two notes with the same Pick can be different objects. Notofilia uses Pick as a type label and then identifies the example by serial or, if it is slabbed, by certificate. A Pick-and-date match without a serial is not a duplicate in this collection.',
        ],
      },
      {
        id: 'mercadolibre',
        title: 'MercadoLibre listings',
        paragraphs: [
          'MercadoLibre is a classifieds market. A lot posted there is a sale offer, with the seller’s photo and price, not a catalog record. Listings appear and vanish; the grade is usually the seller’s opinion, not a PMG or PCGS slab.',
          'Notofilia does not list pieces for sale or copy prices from that market. If a listing serial matches a published record here, that coincidence has to be checked: the serial is the object’s identity, not the Pick number.',
        ],
      },
    ],
    tableCaption: 'What each source measures',
    tableHeaders: ['Source', 'What it is', 'Identity', 'For sale?'],
    tableRows: [
      ['Notofilia', 'Private bilingual collection', 'Serial (or certificate) of one example', 'No'],
      ['BanRep / Casa de Moneda', 'Issuer museum and reserve', 'Museum type; not a collector serial', 'No'],
      ['Pick catalog', 'World type catalog', 'Type number (Pick / TBB)', 'No (it is a book)'],
      ['MercadoLibre', 'Private and shop listings', 'The seller’s lot, while it stays posted', 'Yes'],
    ],
    colombiaCta: 'Open the Colombia catalogue',
    sourcesTitle: 'Cited links',
    sources: [
      {
        href: 'https://colecciones.banrepcultural.org/es/coleccion_numismatica',
        label: 'Banrepcultural — Numismatic Collection',
      },
      {
        href: 'https://www.banrepcultural.org/bogota/museo-casa-de-moneda',
        label: 'Banrepcultural — Casa de Moneda Museum',
      },
      {
        href: 'https://www.banrep.gov.co/en/banknotes-coins/production-circulation-statistics',
        label: 'Banco de la República — Production and circulation',
      },
    ],
  },
} as const;

export function comparisonPath(locale: Locale): string {
  return locale === 'en' ? `/en${COMPARISON_PATH_EN}` : COMPARISON_PATH;
}

export const comparisonDedicatedSlugs = [
  COMPARISON_PATH.replace(/^\/|\/$/g, ''),
  COMPARISON_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;

