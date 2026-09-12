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
        es: 'Use fundas de poliéster inerte, no álbumes de PVC, y manipule el papel con las manos limpias o con guantes de algodón. La cápsula de PMG o PCGS es otra capa de protección; no sustituye un almacenamiento seco y estable.',
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
        es: 'Elija un eje —un país, un periodo o un tema— y compre piezas que pueda documentar: emisor, fecha, Pick o catálogo local, y estado. Un glosario y un catálogo de tipos evitan pagar de más por un ejemplar común o por un grado inflado.',
        en: 'Pick a focus — a country, a period, or a theme — and buy pieces you can document: issuer, date, Pick or a local catalog, and condition. A glossary and a type catalog keep you from overpaying for a common note or an inflated grade.',
      },
    },
    {
      question: {
        es: '¿Hace falta certificar las primeras piezas?',
        en: 'Do I need to grade the first pieces?',
      },
      answer: {
        es: 'No. La certificación tiene sentido en piezas de alto valor o cuando necesite un árbitro de autenticidad. Para empezar, una funda de poliéster y fotos claras del anverso y el reverso bastan para llevar el inventario.',
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
        es: 'La vitrina cubre independencia, banca libre, Banco Nacional, Junta de Conversión, el Banco de la República, tiquetes de transporte y errores de impresión, con fichas publicadas a medida que se fotografían las piezas. No es un catálogo completo de todos los Pick colombianos.',
        en: 'The case covers independence issues, free banking, the Banco Nacional, the Conversion Board, the Banco de la República, transport tickets, and printing errors, with note pages published as pieces are photographed. It is not a complete catalog of every Colombian Pick number.',
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
        es: 'La vitrina reúne colonial, obsoletos, confederados, Demand Notes, United States Notes, Fractional Currency, National Bank Notes, Treasury Notes, certificados de oro y plata, el recorte de 1928–1929, Reserva Federal, certificados de pago militar, pop art y misceláneos. Varias de esas clases aún no tienen ficha: no se inventa un serial. No es un catálogo completo de Friedberg: es el inventario de los ejemplares documentados aquí.',
        en: 'The case brings together colonial issues, obsolete notes, Confederates, Demand Notes, United States Notes, Fractional Currency, National Bank Notes, Treasury Notes, gold and silver certificates, the 1928–1929 size change, Federal Reserve notes, military payment certificates, pop art, and miscellaneous issues. Several of those classes still have no note page: a serial is not invented. It is not a complete Friedberg catalog: it is the inventory of the examples documented here.',
      },
    },
    {
      question: {
        es: '¿Cuál fue el primer papel federal de circulación general?',
        en: 'What was the first federal paper of general circulation?',
      },
      answer: {
        es: 'Los Demand Notes de 1861 (5, 10 y 20 dólares), pagaderos a la vista en metálico. El U.S. Currency Education Program y el BEP los sitúan como la primera circulación general del Tesoro y el origen del apodo «greenback». Los United States Notes de 1862 los sustituyeron como curso legal. En esta colección aún no hay un Demand Note con foto y serial.',
        en: 'The Demand Notes of 1861 ($5, $10, and $20), payable on demand in coin. The U.S. Currency Education Program and the BEP place them as the Treasury’s first general circulation and the origin of the nickname “greenback.” United States Notes of 1862 replaced them as legal tender. This collection does not yet hold a Demand Note with a photograph and serial.',
      },
    },
    {
      question: {
        es: '¿Qué es el 2 dólares United States Note de 1917?',
        en: 'What is the Series 1917 United States Note $2?',
      },
      answer: {
        es: 'Es un Legal Tender Note de tamaño grande —horse blanket— con Jefferson, el Capitolio y reverso Bracelet. Esta pieza es Fr. 60 (P#188(4)), firmas Speelman–White, serial B50400302A. No es el 2 dólares FRN de 2003 de San Luis, serial H00010418★.',
        en: 'It is a large-size Legal Tender Note — a horse blanket — with Jefferson, the Capitol, and the Bracelet reverse. This piece is Fr. 60 (P#188(4)), Speelman–White signatures, serial B50400302A. It is not the Series 2003 St. Louis FRN $2, serial H00010418★.',
      },
    },
    {
      question: {
        es: '¿Qué son los National Bank Notes, la Fractional Currency y los Coin Notes?',
        en: 'What are National Bank Notes, Fractional Currency, and Coin Notes?',
      },
      answer: {
        es: 'Tres clases federales que esta vitrina cuenta y aún no ficha. Los National Bank Notes (1863–1935) los emitieron bancos con carta, respaldados por bonos del Tesoro, con el nombre de la plaza y el número de charter. La Fractional Currency (1862–1876) fue papel de 3 a 50 centavos cuando desapareció la moneda. Los Treasury Notes o Coin Notes (1890–1891) vienen de la Sherman Silver Purchase Act; la Educational Series de 1896 es un certificado de plata, no esa clase.',
        en: 'Three federal classes this case narrates and does not yet record as holdings. National Bank Notes (1863–1935) were issued by chartered banks, secured by Treasury bonds, with the town name and charter number. Fractional Currency (1862–1876) was 3¢-to-50¢ paper when coin disappeared. Treasury or Coin Notes (1890–1891) come from the Sherman Silver Purchase Act; the 1896 Educational Series is a Silver Certificate issue, not that class.',
      },
    },
    {
      question: {
        es: '¿Cuándo pasó el papel de Estados Unidos al tamaño pequeño?',
        en: 'When did United States paper change to small size?',
      },
      answer: {
        es: 'En 1929. El BEP recortó el formato cerca de un 30 % —de unos 7,375 × 3,125 pulgadas a 6,14 × 2,61— y pasó de ocho a doce billetes por pliego. La serie impresa es 1928. Esa línea divide el tamaño grande del pequeño; los Federal Reserve Notes de 1934 de esta vitrina ya son de formato moderno.',
        en: 'In 1929. The BEP cut the format by about 30 percent — from about 7.375 × 3.125 inches to 6.14 × 2.61 — and went from eight notes per sheet to twelve. The printed series is 1928. That line divides large size from small size; the Series 1934 Federal Reserve Notes in this case are already the modern format.',
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
        es: 'No. El catálogo cita a Friedberg, Haxby, Schwan, Criswell o Pick cuando existen, y deja claro que nada está a la venta. Las fichas pendientes se publican a medida que se fotografían.',
        en: 'No. The catalog cites Friedberg, Haxby, Schwan, Criswell, or Pick when those numbers exist, and states that nothing is for sale. Remaining note pages are published as pieces are photographed.',
      },
    },
    {
      question: {
        es: '¿Hay monedas de Estados Unidos en Notofilia?',
        en: 'Are there United States coins in Notofilia?',
      },
      answer: {
        es: 'Sí. La vitrina de numismática documenta el 1 $ de Filadelfia del Semiquincentenario 1776–2026, con retrato de Trump, latón-manganeso —no oro— y sin encapsular. El papel de este país sigue en la vitrina de notafilia, incluido el collage pop Trump / Never Surrender de Rency, que es otro objeto.',
        en: 'Yes. The numismatics case records the Philadelphia Semiquincentennial 1776–2026 $1, with Trump’s portrait, manganese brass — not gold — and unslabbed. This country’s paper remains in the notaphily case, including Rency’s Trump / Never Surrender pop collage, a different object.',
      },
    },
  ],
  philippines: [
    {
      question: {
        es: '¿Qué es el 5 pesos del Banco Nacional de Filipinas de 1916?',
        en: 'What is the 1916 Philippine National Bank 5-peso?',
      },
      answer: {
        es: 'Es un billete de circulación del Philippine National Bank, grabado por el BEP bajo la Ley n.º 2612. Esta pieza, P#46b, lleva el serial A2179586A y las firmas de Mercado y Concepción. Ese serial cae en un tramo que la Ley n.º 211 enumeró como reemitido por las autoridades militares japonesas.',
        en: 'It is a Philippine National Bank circulating note, engraved by the BEP under Act No. 2612. This piece, P#46b, is serial A2179586A with Mercado and Concepción signatures. That serial falls in a band Republic Act No. 211 listed as reissued by the Japanese military authorities.',
      },
    },
    {
      question: {
        es: '¿Qué es la Serie Victory n.º 66?',
        en: 'What is Victory Series No. 66?',
      },
      answer: {
        es: 'Fueron los últimos certificados del Tesoro impresos bajo administración de Estados Unidos en Filipinas, grabados por el BEP y puestos en circulación el 20 de octubre de 1944 en Leyte, para reemplazar el papel de ocupación japonesa conocido como dinero «Mickey Mouse». El «n.º 66» conmemora la edad atribuida a Manuel L. Quezon al morir. La emisión oficial tuvo ocho denominaciones, de 1 a 500 pesos (Pick 94–101).',
        en: 'They were the last Treasury Certificates printed under United States administration in the Philippines, engraved by the BEP and issued on 20 October 1944 at Leyte, to replace Japanese occupation paper known as “Mickey Mouse” money. “No. 66” commemorates the age attributed to Manuel L. Quezon at death. The official issue ran to eight denominations, from 1 to 500 pesos (Pick 94–101).',
      },
    },
    {
      question: {
        es: '¿Qué denominaciones de la Serie Victory no están en esta vitrina?',
        en: 'Which Victory Series denominations are missing from this case?',
      },
      answer: {
        es: 'Ocho certificados del Tesoro, Pick 94 a 101: 1, 2, 5, 10, 20, 50, 100 y 500 pesos. Notofilia exhibe 1, 2, 5 y 20. El 10 (Washington, P#97), el 50 (general Lawton, P#99), el 100 (Magallanes, P#100) y el 500 (Legazpi, P#101) no tienen ejemplar aquí. El 500 pesos se retiró el 25 de agosto de 1954 (Ley de la República n.º 1191); la Ley n.º 1516 prorrogó el canje hasta el 31 de diciembre de 1957.',
        en: 'Eight Treasury Certificates, Pick 94 to 101: 1, 2, 5, 10, 20, 50, 100, and 500 pesos. Notofilia shows the 1, 2, 5, and 20. The 10-peso (Washington, P#97), the 50 (General Lawton, P#99), the 100 (Magellan, P#100), and the 500 (Legazpi, P#101) have no example here. The 500-peso was withdrawn on 25 August 1954 (Republic Act No. 1191); Republic Act No. 1516 extended exchange through 31 December 1957.',
      },
    },
    {
      question: {
        es: '¿Qué combinaciones de firmas tiene la Serie Victory n.º 66?',
        en: 'What signature combinations does Victory Series No. 66 have?',
      },
      answer: {
        es: 'Tres pares: Osmeña–Hernandez (presidente y auditor general), el más frecuente salvo en el 500 pesos y el de las cuatro piezas de esta vitrina; Osmeña–Guevara (presidente y tesorero), documentado sobre todo en 100 y 500 pesos; y Roxas–Guevara, tras 1946, que no se registra en 1, 5 ni 10 pesos —sí en el 2 y el 20 (P#95b, P#98b) y en los valores altos—.',
        en: 'Three pairings: Osmeña–Hernandez (President and Auditor General), the most frequent except on the 500-peso and the one on all four notes here; Osmeña–Guevara (President and Treasurer), recorded mainly on the 100- and 500-peso notes; and Roxas–Guevara, after 1946, which is not recorded on the 1-, 5-, or 10-peso — it does appear on the 2 and 20 (P#95b, P#98b) and on the high values.',
      },
    },
    {
      question: {
        es: '¿Qué es el dinero «Mickey Mouse» frente a los Victory Pesos?',
        en: 'What is “Mickey Mouse” money next to the Victory Pesos?',
      },
      answer: {
        es: 'Así se llamaba al papel fiduciario de la ocupación militar japonesa, devaluado por la hiperinflación. Los certificados Victory, puestos en Leyte el 20 de octubre de 1944 y reconocidos por la Orden Ejecutiva n.º 25, volvían a un peso del Tesoro pagadero en plata o en moneda estadounidense de valor equivalente.',
        en: 'That was the popular name for Japanese military-occupation fiat paper, wrecked by hyperinflation. Victory certificates, issued at Leyte on 20 October 1944 and recognized by Executive Order No. 25, restored a Treasury peso payable in silver or in United States currency of equivalent value.',
      },
    },
    {
      question: {
        es: '¿Qué papel filipino documenta esta colección?',
        en: 'Which Philippine paper does this collection document?',
      },
      answer: {
        es: 'Un 5 pesos del Banco Nacional de 1916 (serie A2179586A) y cuatro certificados Victory únicos, alineados por denominación: 1, 2, 5 y 20 pesos de la Commonwealth. Un segundo archivo del 5 pesos Victory con la misma serie no se cataloga dos veces.',
        en: 'One 1916 National Bank 5-peso (serial A2179586A) and four unique Victory certificates, lined up by denomination: 1, 2, 5, and 20 pesos of the Commonwealth. A second file of the Victory 5-peso with the same serial is not catalogued twice.',
      },
    },
    {
      question: {
        es: '¿Los billetes de Filipinas de Notofilia están a la venta?',
        en: 'Are Notofilia’s Philippine notes for sale?',
      },
      answer: {
        es: 'No. Son piezas de una colección privada, con referencia Pick y grado cuando se conoce, y ninguna está a la venta. Parte de la Serie Victory recibió en 1949 la sobrecarga del Central Bank of the Philippines (Pick 117 y siguientes).',
        en: 'No. They are pieces from a private collection, with Pick references and a grade when known, and none is for sale. Part of the Victory series received the 1949 Central Bank of the Philippines overprint (Pick 117 and later).',
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
