import type { Locale } from '../lib/locale-paths';

export type FaqItem = {
  question: { es: string; en: string };
  answer: { es: string; en: string };
};

export function localizeFaq(items: readonly FaqItem[], locale: Locale): { question: string; answer: string }[] {
  return items.map((item) => ({ question: item.question[locale], answer: item.answer[locale] }));
}

/** Four most-visited collector guides (homepage featured + grading/Mylar pair). */
export const guideFaqs: Record<string, FaqItem[]> = {
  'mejores-empresas-certificacion-monedas-billetes': [
    {
      question: {
        es: '¿Por qué certificar un billete o una moneda?',
        en: 'Why grade a banknote or a coin?',
      },
      answer: {
        es: 'Una casa de primer nivel autentica la pieza, asigna un grado en la escala Sheldon del 1 al 70 y la sella en una cápsula inerte. Eso fija un criterio compartido de estado y hace más fácil vender, heredar o asegurar el ejemplar.',
        en: 'A top-tier service authenticates the piece, assigns a Sheldon 1-to-70 grade, and seals it in an inert holder. That creates a shared condition language and makes the example easier to sell, inherit, or insure.',
      },
    },
    {
      question: {
        es: '¿Qué es la escala Sheldon del 1 al 70?',
        en: 'What is the Sheldon 1-to-70 scale?',
      },
      answer: {
        es: 'Es la escala que usan PMG, PCGS, NGC y las demás casas respetadas: 1 es apenas identificable y 70 es perfección bajo el microscopio. En papel, a los grados altos se añaden a menudo EPQ o PPQ cuando el billete no ha sido lavado ni planchado.',
        en: 'It is the scale used by PMG, PCGS, NGC, and the other respected houses: 1 is barely identifiable and 70 is perfection under a microscope. On paper, high grades often add EPQ or PPQ when the note has not been washed or pressed.',
      },
    },
    {
      question: {
        es: '¿PMG, PCGS o NGC: cuál elegir?',
        en: 'PMG, PCGS, or NGC: which should I choose?',
      },
      answer: {
        es: 'Para un billete raro de alto valor, PMG o PCGS Banknote son el estándar de mercado; para moneda, PCGS y NGC mandan. ANACS e ICG sirven cuando el valor medio no justifica la tarifa de las dos grandes, sobre todo en variedades y errores.',
        en: 'For a rare high-value note, PMG or PCGS Banknote are the market standard; for coins, PCGS and NGC lead. ANACS and ICG make sense when mid-value pieces cannot justify top-tier fees, especially for varieties and errors.',
      },
    },
  ],
  'mylar-si-plastico-no-como-guardar-billetes': [
    {
      question: {
        es: '¿Por qué el PVC daña los billetes?',
        en: 'Why does PVC damage banknotes?',
      },
      answer: {
        es: 'El cloruro de polivinilo es el plástico barato de muchos álbumes: con el tiempo amarillea el papel, corre las tintas y deja un residuo graso. El daño se confunde con el cuidado porque el álbum se compró precisamente para proteger.',
        en: 'Polyvinyl chloride is the cheap plastic in many albums: over time it yellows paper, lifts inks, and leaves a greasy film. The damage is easy to mistake for care, because the album was bought to protect the notes.',
      },
    },
    {
      question: {
        es: '¿Qué es Mylar y por qué es el material seguro?',
        en: 'What is Mylar, and why is it the safe sleeve?',
      },
      answer: {
        es: 'Mylar es un poliéster de calidad de archivo que museos, bibliotecas y casas de certificación usan desde hace más de medio siglo. No plastifica el papel ni cede plastificantes, así que el billete puede guardarse años sin pegarse a la funda.',
        en: 'Mylar is archival-quality polyester that museums, libraries, and grading services have used for more than half a century. It does not plasticize the paper or leach plasticizers, so a note can sit for years without sticking to the sleeve.',
      },
    },
    {
      question: {
        es: '¿Cómo guardar billetes si no están encapsulados?',
        en: 'How should I store banknotes that are not slabbed?',
      },
      answer: {
        es: 'Usa fundas de poliéster inerte, no álbumes de PVC, y manipula el papel con las manos limpias o con guantes de algodón. La cápsula de PMG o PCGS es otra capa de protección; no sustituye un almacenamiento seco y estable.',
        en: 'Use inert polyester sleeves, not PVC albums, and handle paper with clean hands or cotton gloves. A PMG or PCGS holder is another layer of protection; it does not replace dry, stable storage.',
      },
    },
  ],
  'tres-imprentas-misterio-pie-imprenta-billetes-colombianos': [
    {
      question: {
        es: '¿IBB e IBSFB son dos imprentas distintas?',
        en: 'Are IBB and IBSFB two different printers?',
      },
      answer: {
        es: 'No. Son el mismo taller interno del Banco de la República. El pie cambió de «Imprenta de Billetes – Bogotá» a «Imprenta de Billetes – Santa Fe de Bogotá» y luego a «Banco de la República» cuando cambió el nombre oficial de la ciudad y, más tarde, el diseño del billete.',
        en: 'No. They are the same in-house Banco de la República works. The imprint moved from “Imprenta de Billetes – Bogotá” to “Imprenta de Billetes – Santa Fe de Bogotá” and later to “Banco de la República” when the city’s official name, and later the note design, changed.',
      },
    },
    {
      question: {
        es: '¿Cuándo empezó a imprimir billetes el Banco de la República?',
        en: 'When did the Banco de la República start printing banknotes?',
      },
      answer: {
        es: 'La Imprenta de Billetes abrió en Bogotá el 23 de octubre de 1959; su primera emisión fue el 1 peso azul (Pick 404). Antes, el banco encargó el papel sobre todo a la American Bank Note Company y a Thomas De La Rue.',
        en: 'The Imprenta de Billetes opened in Bogotá on 23 October 1959; its first issue was the blue 1-peso (Pick 404). Before that the bank ordered paper mainly from the American Bank Note Company and Thomas De La Rue.',
      },
    },
    {
      question: {
        es: '¿El catálogo Pick trata IBB e IBSFB como firmas distintas?',
        en: 'Does the Pick catalog treat IBB and IBSFB as different firms?',
      },
      answer: {
        es: 'El Standard Catalog of World Paper Money registra las abreviaturas IBB e IBSFB en filas distintas porque el pie impreso cambia. Eso no implica dos empresas: en esta colección se documentan como un solo taller del banco emisor.',
        en: 'The Standard Catalog of World Paper Money records the IBB and IBSFB abbreviations on different rows because the printed imprint changes. That does not mean two firms: this collection documents them as one works of the issuing bank.',
      },
    },
  ],
  'como-empezar-coleccion-billetes': [
    {
      question: {
        es: '¿Cómo empezar una colección de billetes?',
        en: 'How do I start a banknote collection?',
      },
      answer: {
        es: 'Elige un eje —un país, un periodo o un tema— y compra piezas que puedas documentar: emisor, fecha, Pick o catálogo local, y estado. Un glosario y un catálogo de tipos evitan pagar de más por un ejemplar común o por un grado inflado.',
        en: 'Pick a focus — a country, a period, or a theme — and buy pieces you can document: issuer, date, Pick or a local catalog, and condition. A glossary and a type catalog keep you from overpaying for a common note or an inflated grade.',
      },
    },
    {
      question: {
        es: '¿Hace falta certificar las primeras piezas?',
        en: 'Do I need to grade the first pieces?',
      },
      answer: {
        es: 'No. La certificación tiene sentido en piezas de alto valor o cuando necesitas un árbitro de autenticidad. Para empezar, una funda de poliéster y fotos claras del anverso y el reverso bastan para llevar el inventario.',
        en: 'No. Grading matters for high-value pieces or when you need an authenticity referee. To start, a polyester sleeve and clear face and back photos are enough to keep an inventory.',
      },
    },
    {
      question: {
        es: '¿Notofilia vende billetes para empezar?',
        en: 'Does Notofilia sell banknotes for beginners?',
      },
      answer: {
        es: 'No. Notofilia es una colección privada y un catálogo bilingüe; nada de lo que se muestra está a la venta. Las fichas y las guías sirven para identificar tipos, no como escaparate comercial.',
        en: 'No. Notofilia is a private collection and a bilingual catalogue; nothing shown is for sale. The records and guides are for identifying types, not a shop window.',
      },
    },
  ],
};

export const seriesFaqs: Record<string, FaqItem[]> = {
  colombia: [
    {
      question: {
        es: '¿Qué billetes colombianos documenta Notofilia?',
        en: 'Which Colombian banknotes does Notofilia document?',
      },
      answer: {
        es: 'La vitrina cubre independencia, banca libre, Banco Nacional, el Banco de la República y errores de impresión, con fichas publicadas a medida que se fotografían las piezas. No es un catálogo completo de todos los Pick colombianos.',
        en: 'The case covers independence issues, free banking, the Banco Nacional, the Banco de la República, and printing errors, with note pages published as pieces are photographed. It is not a complete catalog of every Colombian Pick number.',
      },
    },
    {
      question: {
        es: '¿Notofilia vende billetes del Banco de la República?',
        en: 'Does Notofilia sell Banco de la República banknotes?',
      },
      answer: {
        es: 'No. Todas las piezas pertenecen a una colección privada y ninguna está a la venta. El sitio cita Pick, TBB, González White (BG#) y Hernández (Cód.) cuando esas referencias existen en la ficha.',
        en: 'No. Every piece belongs to a private collection and none is for sale. The site cites Pick, TBB, González White (BG#), and Hernández (Cód.) when those references exist on the record.',
      },
    },
    {
      question: {
        es: '¿En qué se diferencia este catálogo del de Pick o del museo del BanRep?',
        en: 'How is this catalog different from Pick or the BanRep museum?',
      },
      answer: {
        es: 'Pick enumera tipos; la Colección Numismática del Banco de la República es un museo institucional. Notofilia documenta ejemplares concretos de una colección privada, con fotos, serial cuando se lee y fuentes, sin republicar precios.',
        en: 'Pick lists types; the Banco de la República Numismatic Collection is an institutional museum. Notofilia documents specific examples from a private collection, with photos, a serial when it can be read, and sources, without republishing prices.',
      },
    },
  ],
  'united-states': [
    {
      question: {
        es: '¿Qué papel moneda de Estados Unidos hay en Notofilia?',
        en: 'What United States paper money is in Notofilia?',
      },
      answer: {
        es: 'La vitrina reúne colonial, obsoletos, confederados, United States Notes, certificados de oro y plata, Reserva Federal, certificados de pago militar, pop art y misceláneos. No es un catálogo completo de Friedberg: es el inventario de los ejemplares documentados aquí.',
        en: 'The case brings together colonial issues, obsolete notes, Confederates, United States Notes, gold and silver certificates, Federal Reserve notes, military payment certificates, pop art, and miscellaneous issues. It is not a complete Friedberg catalog: it is the inventory of the examples documented here.',
      },
    },
    {
      question: {
        es: '¿Qué son los MPC de Vietnam?',
        en: 'What are Vietnam MPCs?',
      },
      answer: {
        es: 'Los Military Payment Certificates fueron el papel de las bases estadounidenses en el extranjero. En esta colección se documentan series usadas en Vietnam (641, 661, 681 y 692) con ficha propia cuando hay foto y serial.',
        en: 'Military Payment Certificates were the paper used on United States bases abroad. This collection documents series used in Vietnam (641, 661, 681, and 692) with their own pages when a photo and serial exist.',
      },
    },
    {
      question: {
        es: '¿Los billetes de Estados Unidos de esta colección se venden?',
        en: 'Are the United States notes in this collection for sale?',
      },
      answer: {
        es: 'No. El catálogo cita Friedberg, Haxby, Schwan, Criswell o Pick cuando existen, y deja claro que nada está a la venta. Las fichas pendientes se publican a medida que se fotografían.',
        en: 'No. The catalog cites Friedberg, Haxby, Schwan, Criswell, or Pick when those numbers exist, and states that nothing is for sale. Remaining note pages are published as pieces are photographed.',
      },
    },
  ],
  philippines: [
    {
      question: {
        es: '¿Qué es la Serie Victory n.º 66?',
        en: 'What is Victory Series No. 66?',
      },
      answer: {
        es: 'Fueron los últimos certificados del Tesoro impresos bajo administración de Estados Unidos en Filipinas, grabados por el BEP y puestos en circulación el 20 de octubre de 1944 en Leyte. El «n.º 66» conmemora la edad atribuida a Manuel L. Quezon al morir.',
        en: 'They were the last Treasury Certificates printed under United States administration in the Philippines, engraved by the BEP and issued on 20 October 1944 at Leyte. “No. 66” commemorates the age attributed to Manuel L. Quezon at death.',
      },
    },
    {
      question: {
        es: '¿Qué denominaciones de Victory documenta esta colección?',
        en: 'Which Victory denominations does this collection document?',
      },
      answer: {
        es: 'Cuatro certificados únicos, alineados por denominación: 1, 2, 5 y 20 pesos de la Commonwealth. Un segundo archivo del 5 pesos con la misma serie no se cataloga dos veces.',
        en: 'Four unique certificates, lined up by denomination: 1, 2, 5, and 20 pesos of the Commonwealth. A second file of the 5-peso with the same serial is not catalogued twice.',
      },
    },
    {
      question: {
        es: '¿Los Victory de Filipinas de Notofilia están a la venta?',
        en: 'Are Notofilia’s Philippine Victory notes for sale?',
      },
      answer: {
        es: 'No. Son piezas de una colección privada, con referencia Pick y grado cuando se conoce, y ninguna está a la venta. Parte de la serie recibió en 1949 la sobrecarga del Central Bank of the Philippines (Pick 117 y siguientes).',
        en: 'No. They are pieces from a private collection, with Pick references and a grade when known, and none is for sale. Part of the series received the 1949 Central Bank of the Philippines overprint (Pick 117 and later).',
      },
    },
  ],
  china: [
    {
      question: {
        es: '¿Qué billetes chinos documenta Notofilia?',
        en: 'Which Chinese banknotes does Notofilia document?',
      },
      answer: {
        es: 'La vitrina cuenta la historia del papel moneda —jiaozi, Ming, Qing, República y renminbi— y exhibe conmemorativos de polímero del Banco Popular. Las fichas de cada pieza se publican a medida que se documentan, como en Filipinas.',
        en: 'The case tells the history of paper money — jiaozi, Ming, Qing, the Republic, and the renminbi — and shows People’s Bank polymer commemoratives. Individual note pages are published as they are documented, as in the Philippines case.',
      },
    },
    {
      question: {
        es: '¿El Banco Popular de China usa polímero en circulación ordinaria?',
        en: 'Does the People’s Bank of China use polymer for ordinary circulation?',
      },
      answer: {
        es: 'No. El sustrato ordinario sigue siendo el papel. El banco ha emitido plásticos conmemorativos, entre ellos el 100 yuan del milenio (Pick 902) y el 20 yuan de deportes de hielo de los Juegos de Invierno.',
        en: 'No. Ordinary circulating stock remains paper. The bank has issued commemorative plastics, including the millennium 100-yuan (Pick 902) and the Winter Olympics ice-sports 20-yuan.',
      },
    },
    {
      question: {
        es: '¿Se pueden comprar en Notofilia los polímeros chinos?',
        en: 'Can I buy the Chinese polymer notes from Notofilia?',
      },
      answer: {
        es: 'No. Notofilia no vende. Las fichas identifican el tipo Pick y el ejemplar de la colección; no son anuncios ni tasaciones de mercado.',
        en: 'No. Notofilia does not sell. The records identify the Pick type and the collection example; they are not listings or market appraisals.',
      },
    },
  ],
};
