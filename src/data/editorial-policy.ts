import { localizePath, type Locale } from '../lib/locale-paths';

export const EDITORIAL_PATH = '/editorial/';

export function editorialPath(locale: Locale): string {
  return localizePath(EDITORIAL_PATH, locale);
}

export const editorialPolicyCopy = {
  es: {
    metaTitle: 'Política editorial, fuentes y valoración | Notofilia',
    metaDescription:
      'Cómo Notofilia documenta billetes y monedas: estándares de gradación, política de imágenes, fuentes primarias y cómo corregimos errores. Sin precios de mercado.',
    title: 'Política editorial y valoración',
    kicker: 'Transparencia',
    lead:
      'Notofilia es una colección privada y un catálogo bilingüe. Nada está a la venta. Esta página explica cómo documentamos cada pieza, qué fuentes citamos, cómo tratamos las imágenes y cómo corregimos un error.',
    sections: [
      {
        id: 'que-es',
        title: 'Qué es este sitio',
        body: [
          'Notofilia publica fichas de objetos físicos de una colección privada: billetes, monedas, tiquetes y papel afín. Cada billete o moneda certificada es un objeto único; el serial (o el número de certificado) es su identidad. No somos una casa de subastas, ni un comercio, ni un tasador.',
          'El fundador, Yezid Acosta, firma las fichas y las guías. Cuando un artículo editorial lleva revisor, el nombre aparece en la página. Las cifras de población, precio o proveniencia que no están en una fuente citada se omiten.',
        ],
      },
      {
        id: 'gradacion',
        title: 'Estándares de gradación',
        body: [
          'El grado publicado es el que aparece en la cápsula o en la etiqueta (PMG, PCGS Banknote, NGC u otra casa nombrada). No reinterpretamos un grado encapsulado. Si la pieza no está certificada, el estado se describe en lenguaje de catálogo (por ejemplo «sin circular» o «detalles») sin inventar un número Sheldon.',
          'Las designaciones EPQ, PPQ, Star o Details se copian de la etiqueta. Un informe de población se cita solo cuando la casa lo publica para ese certificado; si no hay cifra, no se estima. Para el vocabulario de las casas, véanse los términos PMG/PCGS y Pick del glosario, y la guía de certificadoras.',
        ],
      },
      {
        id: 'imagenes',
        title: 'Política de imágenes',
        body: [
          'Las fotografías de la colección son de Notofilia. El anverso que aparece en la ficha es la imagen de carga prioritaria; el reverso y las vistas ampliadas se cargan después. Los recortes de tarjeta usan el mismo original a través del transformador de imágenes del sitio.',
          'Las imágenes de subasta o de archivo de terceros (por ejemplo Heritage) son comparables, no existencias de esta colección: no se importan como fichas ni se republican precios realizados. El crédito, la licencia de uso de las fotos de la colección y la página para solicitar permiso están en el JSON-LD de cada ficha y en Contacto.',
        ],
      },
      {
        id: 'fuentes',
        title: 'Fuentes',
        body: [
          'Las fichas colombianas de 1923–2019 citan González White (7.ª ed., 2019) por BG# cuando aplica, y las tablas de producción del Banco de la República cuando el dato es de tirada —no se inventa una tirada Pick a partir de un total de denominación-año. El papel anterior a 1923 cita Hernández. Pick, The Banknote Book y Numista se usan como concordancia de tipo, no como inventario.',
          'Las guías y las noticias distinguen un precio de martillo confirmado de un precio pedido. Si no hay fuente pública, el dato no se publica. Las correcciones de catálogo o de serial se anotan en la ficha; no se fusionan dos objetos porque compartan Pick y fecha.',
        ],
      },
      {
        id: 'valoracion',
        title: 'Cómo se habla de valor (sin precios)',
        body: [
          'Notofilia no publica listas de precios, ni estimaciones de seguro, ni «lo que vale» un serial. Un billete colombiano se discute por tipo, rareza relativa, estado documentado, población certificada cuando existe, y contexto de mercado (dónde se vende: casas, ferias, particulares) —nunca con una cifra inventada.',
          'La guía «Cómo se valora un billete colombiano» desarrolla ese método. El clasificador de numeración especial solo nombra un ejemplar cuando el serial coincide con un objeto publicado.',
        ],
      },
      {
        id: 'correcciones',
        title: 'Correcciones',
        body: [
          'Si encuentra un error de serial, de atribución, de imagen o de traducción, escríbanos desde Contacto con el motivo de error. Corregimos el registro existente; no creamos una segunda ficha para el mismo objeto. Las páginas de búsqueda no se indexan; el catálogo, el glosario y las guías sí.',
        ],
      },
    ],
    gradingGuide: 'Guía de certificadoras (PMG, PCGS, NGC)',
    valuationGuide: 'Cómo se valora un billete colombiano',
    glossaryPmg: 'PMG y PCGS',
    glossaryPick: 'Pick',
    contact: 'Contacto',
    home: 'Inicio',
    breadcrumb: 'Migas de pan',
    nav: 'Política editorial',
  },
  en: {
    metaTitle: 'Editorial policy, sources, and valuation | Notofilia',
    metaDescription:
      'How Notofilia documents banknotes and coins: grading standards, image policy, primary sources, and how we correct errors. No market prices.',
    title: 'Editorial policy and valuation',
    kicker: 'Transparency',
    lead:
      'Notofilia is a private collection and a bilingual catalogue. Nothing is for sale. This page explains how we document each piece, which sources we cite, how we treat images, and how we correct an error.',
    sections: [
      {
        id: 'what-it-is',
        title: 'What this site is',
        body: [
          'Notofilia publishes records of physical objects in a private collection: banknotes, coins, tickets, and related paper. Each banknote or certified coin is a unique object; the serial (or certificate number) is its identity. We are not an auction house, a dealer, or an appraiser.',
          'The founder, Yezid Acosta, signs the records and guides. When an editorial article has a reviewer, the name appears on the page. Population figures, prices, or provenance details that are not in a cited source are omitted.',
        ],
      },
      {
        id: 'grading',
        title: 'Grading standards',
        body: [
          'The published grade is the one on the holder or label (PMG, PCGS Banknote, NGC, or another named service). We do not reinterpret a slabbed grade. If the piece is not certified, condition is described in catalogue language (for example “uncirculated” or “details”) without inventing a Sheldon number.',
          'EPQ, PPQ, Star, or Details designations are copied from the label. A population report is cited only when the service publishes it for that certificate; if there is no figure, none is estimated. For house vocabulary see the PMG/PCGS and Pick glossary terms, and the grading-companies guide.',
        ],
      },
      {
        id: 'images',
        title: 'Image policy',
        body: [
          'Collection photographs are Notofilia’s. The obverse on the record is the priority image; the reverse and enlarged views load later. Card crops use the same master through the site’s image transformer.',
          'Third-party auction or archive images (for example Heritage) are comparables, not holdings: they are not imported as records and realized prices are not republished. Credit, the license for collection photos, and the page to request permission appear in each record’s JSON-LD and on Contact.',
        ],
      },
      {
        id: 'sources',
        title: 'Sources',
        body: [
          'Colombian records for 1923–2019 cite González White (7th ed., 2019) by BG# when it applies, and Banco de la República production tables when the figure is a print run — a Pick-level tirada is not invented from a denomination-year total. Paper before 1923 cites Hernández. Pick, The Banknote Book, and Numista are type concordances, not an inventory.',
          'Guides and news distinguish a confirmed hammer price from an asking price. If there is no public source, the figure is not published. Catalogue or serial corrections are noted on the existing record; two objects are not merged because they share Pick and date.',
        ],
      },
      {
        id: 'valuation',
        title: 'How value is discussed (no prices)',
        body: [
          'Notofilia does not publish price lists, insurance estimates, or “what a serial is worth.” A Colombian note is discussed by type, relative rarity, documented condition, certified population when it exists, and market context (where pieces sell: houses, fairs, private sales) — never with an invented figure.',
          'The guide “How Colombian banknotes are valued” develops that method. The fancy-serial checker names an example only when the serial matches a published object.',
        ],
      },
      {
        id: 'corrections',
        title: 'Corrections',
        body: [
          'If you find an error of serial, attribution, image, or translation, write through Contact with the error reason. We correct the existing record; we do not create a second record for the same object. Search pages are not indexed; the catalogue, glossary, and guides are.',
        ],
      },
    ],
    gradingGuide: 'Grading-companies guide (PMG, PCGS, NGC)',
    valuationGuide: 'How Colombian banknotes are valued',
    glossaryPmg: 'PMG and PCGS',
    glossaryPick: 'Pick',
    contact: 'Contact',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    nav: 'Editorial policy',
  },
} as const;
