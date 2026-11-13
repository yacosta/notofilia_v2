import type { CatalogSource, LocalizedText } from './catalog';

const PUERTO_RICO_NOTES_PATH = '/coleccion/puerto-rico/';
const PUERTO_RICO_NOTES_PATH_EN = '/en/collection/puerto-rico/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const PUERTO_RICO_COINAGE_PATH = '/coleccion/puerto-rico-numismatica/';
export const PUERTO_RICO_COINAGE_PATH_EN = '/collection/puerto-rico-numismatics/';

export type PuertoRicoCoinageChapterId = 'peso-provincial' | 'madrid-pgv' | 'alfonso-xiii';

export type PuertoRicoCoinageChapter = {
  id: PuertoRicoCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const puertoRicoCoinageChapters: PuertoRicoCoinageChapter[] = [
  {
    id: 'peso-provincial',
    years: { es: '1895–1896', en: '1895–1896' },
    title: {
      es: 'El peso provincial',
      en: 'The provincial peso',
    },
    lead: {
      es: 'La única moneda labrada para uso exclusivo de Puerto Rico: cinco valores de plata, de 1895 y 1896, para sustituir el peso mexicano.',
      en: 'The only coinage struck for Puerto Rico’s exclusive use: five silver denominations, dated 1895 and 1896, to replace the Mexican peso.',
    },
    body: {
      es: 'A finales del siglo XIX la isla vivía de plata ajena: pesos mexicanos, macuquinas y monedas contramarcadas. El Real Decreto de 17 de agosto de 1895 ordenó recogerla a cambio del Billete de Canje de 1 peso y acuñar en Madrid una moneda provincial. Salieron cinco valores: 1 peso de 1895 (8.500.000 piezas), 40 centavos de 1896 (725.000 en esa tabla; EnciclopediaPR y Numista dan 725.002), 20 centavos de 1895 (3.350.000), 10 centavos de 1896 (700.000) y 5 centavos de 1896 (600.000), según la tabla de Wikipedia en español. El peso se labró en plata .900. Para los divisores, la tabla de Wikipedia en inglés da .835; Greysheet coincide en el 20 centavos, pero Numista y Greysheet dan .900 para el 10 centavos. Numista da .835 para el 40 centavos y NGC, .900. El 20 centavos es el único divisor fechado en 1895 y el de mayor tirada después del peso.',
      en: 'By the late nineteenth century the island ran on foreign silver: Mexican pesos, macuquinas, and countermarked coin. The royal decree of 17 August 1895 ordered it gathered in exchange for the 1-peso exchange note and a provincial coinage struck in Madrid. Five denominations followed: the 1 peso of 1895 (8,500,000 pieces), 40 centavos of 1896 (725,000 in that table; EnciclopediaPR and Numista give 725,002), 20 centavos of 1895 (3,350,000), 10 centavos of 1896 (700,000), and 5 centavos of 1896 (600,000), per the table in Spanish Wikipedia. The peso was struck in .900 silver. For the fractions, the English Wikipedia table gives .835; Greysheet agrees for the 20 centavos, but Numista and Greysheet give .900 for the 10 centavos. Numista gives .835 for the 40 centavos and NGC gives .900. The 20 centavos is the only fraction dated 1895 and, after the peso, the largest mintage.',
    },
  },
  {
    id: 'madrid-pgv',
    years: { es: '1895', en: '1895' },
    title: {
      es: 'Madrid y P·G·V',
      en: 'Madrid and P·G·V',
    },
    lead: {
      es: 'La moneda provincial se labró en Madrid. El disco no lleva marca de ceca: la firma de la casa son las iniciales P·G· y ·V· al pie del reverso.',
      en: 'The provincial coinage was struck in Madrid. The disc carries no mint mark: the house signature is the initials P·G· and ·V· at the foot of the reverse.',
    },
    body: {
      es: 'P y G son los ensayadores; V, el fiel de balanza. El archivo de Ruymán los nombra Félix Miguel Peiró Rodrigo, Antonio García González y Remigio Vega Vega; Numista abrevia Peiró, García y Vega. Las mismas iniciales firman la peseta peninsular de esos años, de modo que P·G·V no distingue por sí sola una pieza de Puerto Rico: lo hace la orla ISLA DE PUERTO RICO y el valor en centavos. Bajo el busto, B·M es la firma del grabador Bartolomé Maura y Montaner, a quien Documenta & Instrumenta atribuye también el diseño del Billete de Canje de 1895.',
      en: 'P and G are the assayers; V, the weigh master. The Ruymán archive names them Félix Miguel Peiró Rodrigo, Antonio García González, and Remigio Vega Vega; Numista abbreviates Peiró, García, and Vega. The same initials sign the peninsular peseta of those years, so P·G·V alone does not mark a Puerto Rican piece: the ISLA DE PUERTO RICO legend and the centavo value do. Below the bust, B·M is the signature of engraver Bartolomé Maura y Montaner, to whom Documenta & Instrumenta also attributes the design of the 1895 exchange note.',
    },
  },
  {
    id: 'alfonso-xiii',
    years: { es: '1886–1898', en: '1886–1898' },
    title: {
      es: 'Alfonso XIII niño',
      en: 'The boy Alfonso XIII',
    },
    lead: {
      es: 'Alfonso XIII fue rey desde su nacimiento, en 1886. En 1895 tenía nueve años: su busto infantil a la izquierda acompañó el final de la soberanía española en la isla.',
      en: 'Alfonso XIII was king from birth, in 1886. In 1895 he was nine: his child’s bust facing left saw out Spanish sovereignty on the island.',
    },
    body: {
      es: 'La leyenda abrevia ALFONSO XIII P(OR) L(A) G(RACIA) D(E) D(IOS) REY C(ONSTITUCIONAL) DE ESPAÑA: «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Numista fecha el tipo en el reinado de Alfonso XIII para Puerto Rico (1886–1898). Tres años después de la acuñación, el Tratado de París cedió la isla a los Estados Unidos. La plata provincial siguió circulando un tiempo junto al dólar; Numista la da por desmonetizada el 12 de abril de 1900.',
      en: 'The legend abbreviates ALFONSO XIII P(OR) L(A) G(RACIA) D(E) D(IOS) REY C(ONSTITUCIONAL) DE ESPAÑA: “Alfonso XIII, by the grace of God, constitutional king of Spain.” Numista dates the type within Alfonso XIII’s reign over Puerto Rico (1886–1898). Three years after striking, the Treaty of Paris ceded the island to the United States. The provincial silver kept circulating for a time beside the dollar; Numista records it as demonetized on 12 April 1900.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
    es: 'Wikipedia — Peso provincial de Puerto Rico',
    en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
    note: {
      es: 'Cinco valores, acuñación en Madrid y tabla de cantidades acuñadas por valor y año.',
      en: 'Five denominations, striking in Madrid, and the mintage table by value and year.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Currencies_of_Puerto_Rico',
    es: 'Wikipedia — Currencies of Puerto Rico',
    en: 'Wikipedia — Currencies of Puerto Rico',
    note: {
      es: 'Ley .835 para los divisores y .900 para el peso; grabador B.M., Bartolomé Maura y Montaner.',
      en: '.835 fineness for the fractions and .900 for the peso; engraver B.M., Bartolomé Maura y Montaner.',
    },
  },
  {
    href: 'https://web.archive.org/web/20100203023106/http:/ruyman.eu/serieprovincial.htm',
    es: 'Ruymán (archivo) — Serie, Peso Provincial de P.R., Alfonso XIII (1895–1896)',
    en: 'Ruymán (archive) — Provincial Peso series of P.R., Alfonso XIII (1895–1896)',
    note: {
      es: 'Nombres de los oficiales P, G y V y del grabador B·M.',
      en: 'Names of officials P, G, and V and of engraver B·M.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Puerto Rico · Numismática | Notofilia',
    metaDescription:
      'Moneda provincial de Puerto Rico acuñada en Madrid (1895–1896) y fichas de almud de la Hacienda Vega Redonda: 10, 20 y 40 centavos P·G·V.',
    kicker: 'Puerto Rico · Numismática',
    title: 'El peso provincial de 1895',
    heroAlt:
      'Mapa vintage panorámico en relieve 3D de Puerto Rico sobre pergamino, con El Morro, Viejo San Juan, un coquí, una rosa de los vientos y el título Puerto Rico',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En Puerto Rico las dos historias se cruzan en 1895: el Billete de Canje recogió la plata mexicana y la moneda provincial, labrada en Madrid, ocupó su lugar.',
      'Esta vitrina abre con un 10 centavos de esa serie, con el busto niño de Alfonso XIII y las iniciales P·G·V. La fotografía muestra 1895, una fecha que los catálogos no registran para ese valor. A su lado van el 20 centavos de plata de 1895 y el 40 centavos de 1896, único año de esa denominación. Es la única serie de moneda hecha para uso exclusivo de la isla.',
    ],
    sourcesTitle: 'Fuentes',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de Puerto Rico, incluido el Billete de Canje de 1895, se documenta en la vitrina de notafilia.',
    notesLink: 'Puerto Rico · Emisiones coloniales y de transición',
    tokensLead: 'Las fichas de almud de la Hacienda Vega Redonda, en Las Marías, están en otra vitrina de esta numismática.',
    tokensLink: 'Hacienda Vega Redonda',
    hubTokens: {
      id: 'fichas-vega-redonda',
      title: 'Fichas de hacienda: Vega Redonda',
      body: 'Junto a la moneda provincial circularon fichas privadas. En la zona cafetalera del oeste, los hacendados pagaban jornales con fichas propias —los riles— porque el menudo oficial llegaba mal al interior. La Hacienda Vega Redonda, en el barrio Bucarabones de Las Marías, emitió fichas de latón (según Numista), sin fecha y catalogadas como ND (1890) en el ¼, el ½ y el 1, con valores en almudes de café y no en pesos. La colección conserva las de ¼, ½, 1 y 2 almudes (Rulau Lsm 15–18).',
      seriesCta: 'Ver las fichas de la Hacienda Vega Redonda →',
      tokensLabel: 'Fichas:',
      tokenLinks: [
        { label: '¼ almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/cuarto-almud/' },
        { label: '½ almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/medio-almud/' },
        { label: '1 almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/un-almud/' },
        { label: '2 almudes', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/dos-almudes/' },
      ],
      compareLead: 'Para comparar:',
      compareLink: 'fichas de hacienda de Colombia',
      compareHref: '/coleccion/colombia-numismatica/fichas-de-hacienda/',
      thumbsAria: 'Fichas de la Hacienda Vega Redonda en la colección',
    },
  },
  en: {
    metaTitle: 'Puerto Rico · Numismatics | Notofilia',
    metaDescription:
      'Puerto Rico’s provincial coinage, struck in Madrid in 1895–1896, and Hacienda Vega Redonda’s almud tokens: the 10, 20, and 40 centavos P·G·V.',
    kicker: 'Puerto Rico · Numismatics',
    title: 'The 1895 provincial peso',
    heroAlt:
      'Vintage panoramic 3D relief map of Puerto Rico on parchment, with El Morro, Old San Juan, a coquí, a compass rose, and the title Puerto Rico',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In Puerto Rico the two stories meet in 1895: the exchange note gathered the Mexican silver, and the provincial coinage, struck in Madrid, took its place.',
      'This case opens with a 10 centavos of that series, with the boy Alfonso XIII’s bust and the initials P·G·V. The photograph shows 1895, a date the catalogues do not record for that value. Beside it sit the silver 20 centavos of 1895 and the 40 centavos of 1896, the only year of that denomination. It is the only coinage series made for the island’s exclusive use.',
    ],
    sourcesTitle: 'Sources',
    parentLink: 'Numismatics',
    notesLead: 'Puerto Rico’s paper money, including the 1895 exchange note, is documented in the notaphily case.',
    notesLink: 'Puerto Rico · Colonial and transition issues',
    tokensLead: 'The almud tokens of Hacienda Vega Redonda, in Las Marías, are in another case of this numismatics section.',
    tokensLink: 'Hacienda Vega Redonda',
    hubTokens: {
      id: 'fichas-vega-redonda',
      title: 'Hacienda tokens: Vega Redonda',
      body: 'Private tokens circulated alongside the provincial coinage. In the western coffee highlands, planters paid wages in their own tokens, called riles, because official small change reached the interior poorly. Hacienda Vega Redonda, in barrio Bucarabones, Las Marías, issued brass tokens (per Numista). They are undated, catalogued as ND (1890) for the quarter, half, and one, and valued in almudes of coffee, not pesos. The collection holds the ¼, ½, 1, and 2 almudes (Rulau Lsm 15–18).',
      seriesCta: 'See the Hacienda Vega Redonda tokens →',
      tokensLabel: 'Tokens:',
      tokenLinks: [
        { label: '¼ almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/cuarto-almud/' },
        { label: '½ almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/medio-almud/' },
        { label: '1 almud', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/un-almud/' },
        { label: '2 almudes', path: '/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/dos-almudes/' },
      ],
      compareLead: 'Compare:',
      compareLink: 'Colombian hacienda tokens',
      compareHref: '/coleccion/colombia-numismatica/fichas-de-hacienda/',
      thumbsAria: 'Hacienda Vega Redonda tokens in the collection',
    },
  },
} as const;

export type PuertoRicoCoinId = '20-centavos-1895-pgv' | '10-centavos-alfonso-xiii-pgv' | '40-centavos-1896-pgv';

export type PuertoRicoCoin = {
  id: PuertoRicoCoinId;
  path: string;
  pathEn: string;
  chapterId: PuertoRicoCoinageChapterId;
  year: string;
  yearNote?: LocalizedText;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  alignment?: LocalizedText;
  references: string;
  referencesNote?: LocalizedText;
  grade: LocalizedText;
  no_serial_reason: string;
  images?: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
    faceWidth: number;
    faceHeight: number;
  };
  title: LocalizedText;
  heading?: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  history: LocalizedText;
  obverseLegend: LocalizedText;
  reverseLegend: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  certification: LocalizedText;
  sources: CatalogSource[];
};

export const puertoRicoCoins: PuertoRicoCoin[] = [
  {
    id: '10-centavos-alfonso-xiii-pgv',
    path: '/coleccion/puerto-rico-numismatica/10-centavos-alfonso-xiii-pgv/',
    pathEn: '/en/collection/puerto-rico-numismatics/10-centavos-alfonso-xiii-pgv/',
    chapterId: 'peso-provincial',
    year: '1895',
    yearNote: {
      es: 'Fecha aparente en la fotografía. El tipo de 10 centavos está fechado en 1896.',
      en: 'Apparent date in the photograph. The 10 centavos type is dated 1896.',
    },
    mint: {
      es: 'Madrid (según el tipo); sin marca de ceca. Oficiales P·G·V',
      en: 'Madrid (per the type); no mint mark. Officials P·G·V',
    },
    denomination: {
      es: '10 centavos de peso provincial',
      en: '10 centavos of the provincial peso',
    },
    composition: {
      es: 'Plata. Tipo: .900 según Numista y Greysheet; la tabla de Wikipedia en inglés da .835. No es un ensayo de este ejemplar.',
      en: 'Silver. Type: .900 per Numista and Greysheet; the English Wikipedia table gives .835. Not an assay of this specimen.',
    },
    weight: {
      es: 'No pesado. Tipo: 2,5 g (Numista, Greysheet).',
      en: 'Not weighed. Type: 2.5 g (Numista, Greysheet).',
    },
    diameter: {
      es: 'No medido. Tipo: 18 mm (Numista, Greysheet).',
      en: 'Not measured. Type: 18 mm (Numista, Greysheet).',
    },
    edge: {
      es: 'Estriado (especificación de tipo Numista / Greysheet). El canto de este ejemplar no se fotografió.',
      en: 'Reeded (Numista / Greysheet type specification). This specimen’s edge was not photographed.',
    },
    references: 'cf. KM#21 · cf. Numista N#17450 · cf. PCGS#976903',
    referencesNote: {
      es: 'Referencias del tipo fechado en 1896, citadas con cf. (compárese). No se asignan a este ejemplar mientras la fecha no se verifique en la pieza.',
      en: 'References for the type dated 1896, cited with cf. (compare). They are not assigned to this specimen until the date is verified on the coin.',
    },
    grade: {
      es: 'Sin encapsular. Desgaste de circulación en el cabello, la oreja y las armas; rayas finas en los campos del anverso; reverso de tono gris más oscuro. Leyendas legibles. No es un grado numérico.',
      en: 'Unslabbed. Circulation wear to the hair, ear, and arms; fine hairlines in the obverse fields; reverse toned a darker grey. Legends readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Puerto Rican provincial silver 10 centavos: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/puerto-rico/puerto-rico-madrid-10-centavos-alfonso-xiii-pgv-composite.jpg',
      front: '/images/catalog/puerto-rico/puerto-rico-madrid-10-centavos-alfonso-xiii-pgv-front.jpg',
      back: '/images/catalog/puerto-rico/puerto-rico-madrid-10-centavos-alfonso-xiii-pgv-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    title: {
      es: '10 centavos · Alfonso XIII · fecha aparente 1895',
      en: '10 Centavos · Alfonso XIII · apparent date 1895',
    },
    heading: {
      es: 'Moneda de 10 centavos, fecha aparente 1895',
      en: '10 Centavos coin, apparent date 1895',
    },
    kicker: {
      es: 'Puerto Rico · Moneda provincial',
      en: 'Puerto Rico · Provincial coinage',
    },
    lead: {
      es: '10 centavos de plata de la moneda provincial de Puerto Rico, con el busto niño de Alfonso XIII y las iniciales P·G·V. La fotografía muestra 1895, pero el tipo catalogado está fechado en 1896: atribución pendiente. Sin serial y sin encapsular.',
      en: 'Silver 10 centavos of Puerto Rico’s provincial coinage, with the boy Alfonso XIII’s bust and the initials P·G·V. The photograph shows 1895, but the catalogued type is dated 1896: attribution pending. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es un 10 centavos de plata de la moneda provincial de Puerto Rico. El anverso muestra el busto de Alfonso XIII niño a la izquierda, con la leyenda ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA y, bajo el corte del cuello, las iniciales B·M del grabador Bartolomé Maura y Montaner. Entre las estrellas, al pie, la fotografía muestra la fecha 1895. El reverso lleva las armas de España coronadas entre las columnas de Hércules, la orla ISLA DE PUERTO RICO arriba y 10 CENTAVOS abajo, flanqueado por P·G· a la izquierda y ·V· a la derecha. Numista, Greysheet y EnciclopediaPR registran el 10 centavos solo con fecha de 1896 (KM#21, N#17450, PCGS#976903); en 1895 solo se fecharon el peso y el 20 centavos. Por eso la ficha cita esas referencias con cf. y todavía no asigna KM#21. La fecha no se ha examinado con lupa en la pieza, y la fotografía sola no permite decidir entre una fecha alterada, una falsificación o reproducción, una imagen retocada o una pieza no publicada.',
      en: 'This piece is a silver 10 centavos of Puerto Rico’s provincial coinage. The obverse shows the bust of the boy Alfonso XIII facing left, with the legend ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA and, below the neck truncation, the initials B·M of engraver Bartolomé Maura y Montaner. Between the stars at the foot, the photograph shows the date 1895. The reverse carries the crowned arms of Spain between the Pillars of Hercules, the legend ISLA DE PUERTO RICO above and 10 CENTAVOS below, flanked by P·G· at left and ·V· at right. Numista, Greysheet, and EnciclopediaPR record the 10 centavos only with the date 1896 (KM#21, N#17450, PCGS#976903); in 1895 only the peso and the 20 centavos were dated. The record therefore cites those references with cf. and does not yet assign KM#21. The date has not been examined under magnification on the coin, and the photograph alone cannot tell an altered date, a counterfeit or reproduction, a retouched image, or an unpublished piece apart.',
    },
    history: {
      es: 'El Real Decreto de 17 de agosto de 1895 cambió la plata mexicana de la isla por el Billete de Canje de 1 peso, y ese papel, por moneda provincial labrada en Madrid. Se acuñaron cinco valores; según EnciclopediaPR, el peso y el 20 centavos llevan fecha de 1895 y los demás, de 1896. Del 10 centavos de 1896 salieron 700.000 piezas (Wikipedia en español, Numista, Greysheet). Tras el Tratado de París de 1898 la plata provincial convivió con el dólar hasta su retiro; Numista la da por desmonetizada el 12 de abril de 1900. No se publica aquí un martillo ni un censo de encapsulados.',
      en: 'The royal decree of 17 August 1895 exchanged the island’s Mexican silver for the 1-peso exchange note, and that paper for provincial coin struck in Madrid. Five denominations were struck; per EnciclopediaPR, the peso and the 20 centavos are dated 1895 and the rest 1896. The 1896 10 centavos ran to 700,000 pieces (Spanish Wikipedia, Numista, Greysheet). After the 1898 Treaty of Paris the provincial silver ran beside the dollar until withdrawal; Numista records it as demonetized on 12 April 1900. No hammer and no slab census are published here.',
    },
    obverseLegend: {
      es: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ (fecha leída en la fotografía; el tipo lleva ★ 1896 ★) — «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Bajo el busto: B·M.',
      en: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ (date as read in the photograph; the type carries ★ 1896 ★) — “Alfonso XIII, by the grace of God, constitutional king of Spain.” Below the bust: B·M.',
    },
    reverseLegend: {
      es: 'ISLA DE PUERTO RICO · P·G· 10 CENTAVOS ·V· (oficiales Peiró, García y Vega). Las cintas PLUS ULTRA del tipo no se leen en la fotografía.',
      en: 'ISLA DE PUERTO RICO · P·G· 10 CENTAVOS ·V· (officials Peiró, García, and Vega). The type’s PLUS ULTRA ribbons are not legible in the photograph.',
    },
    frontCaption: {
      es: 'Anverso: busto de Alfonso XIII niño a la izquierda; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; la fecha se lee 1895 entre estrellas.',
      en: 'Obverse: bust of the boy Alfonso XIII facing left; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; the date reads 1895 between stars.',
    },
    backCaption: {
      es: 'Reverso: armas de España coronadas entre las columnas de Hércules; ISLA DE PUERTO RICO; P·G· 10 CENTAVOS ·V·.',
      en: 'Reverse: crowned arms of Spain between the Pillars of Hercules; ISLA DE PUERTO RICO; P·G· 10 CENTAVOS ·V·.',
    },
    scarcity: {
      es: 'El 10 centavos tiene una sola fecha catalogada, 1896 P·G·V, con 700.000 piezas: la segunda tirada más corta de la serie, después del 5 centavos (600.000). Ninguna de las referencias consultadas registra un 10 centavos de 1895. Mientras la fecha no se verifique, esta ficha no lo presenta como una variedad inédita ni como un ejemplar corriente de KM#21. No se publica un índice de rareza ni precios de subasta.',
      en: 'The 10 centavos has a single catalogued date, 1896 P·G·V, with 700,000 pieces: the second-smallest mintage of the series, after the 5 centavos (600,000). None of the references consulted records an 1895 10 centavos. Until the date is verified, this record presents it neither as an unpublished variety nor as an ordinary KM#21. No rarity index and no auction prices are published.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa, y el tipo no lleva número de serie. La identidad de la ficha es el objeto fotografiado. Para resolver la fecha conviene pesar y medir el disco —el tipo de 10 centavos pesa 2,5 g y mide 18 mm; el de 20 centavos, 5 g y 23 mm—, examinar el último dígito con lupa y, si la anomalía se confirma, enviar la pieza a autenticar. Si se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder, and the type carries no serial number. The identity of this record is the photographed object. To settle the date, the disc should be weighed and measured — the 10 centavos type is 2.5 g and 18 mm; the 20 centavos, 5 g and 23 mm — the last digit examined under magnification, and, if the anomaly holds, the piece sent for authentication. If it is slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/17450',
        es: 'Numista — 10 centavos, Alfonso XIII, Puerto Rico 1896 (N#17450)',
        en: 'Numista — 10 Centavos, Alfonso XIII, Puerto Rico 1896 (N#17450)',
        note: {
          es: 'KM#21; plata .900, 2,5 g, 18 mm, canto estriado; leyenda ★ 1896 ★ y una sola fecha, 1896 P·G·V (700.000). No se republica la tabla de precios.',
          en: 'KM#21; .900 silver, 2.5 g, 18 mm, reeded edge; legend ★ 1896 ★ and a single date, 1896 P·G·V (700,000). The price table is not republished.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/1896-10-centavos-puerto-rico-coin/gsid/337553',
        es: 'Greysheet — 1896-PG V 10c Puerto Rico (GSID 337553)',
        en: 'Greysheet — 1896-PG V 10c Puerto Rico (GSID 337553)',
        note: {
          es: 'KM-21, PCGS#976903; plata .900, 2,5 g, 18 mm, canto estriado; tirada 700.000. No se republican precios.',
          en: 'KM-21, PCGS#976903; .900 silver, 2.5 g, 18 mm, reeded edge; mintage 700,000. Prices are not republished.',
        },
      },
      {
        href: 'https://enciclopediapr.org/content/historia-de-la-moneda-en-puerto-rico/',
        es: 'EnciclopediaPR — Historia de la moneda en Puerto Rico',
        en: 'EnciclopediaPR — History of money in Puerto Rico (Spanish)',
        note: {
          es: 'El peso y el 20 centavos llevan fecha de 1895; los demás valores, 1896. 10 centavos de 1896: 700.000 acuñados.',
          en: 'The peso and the 20 centavos are dated 1895; the other denominations, 1896. 10 centavos of 1896: 700,000 struck.',
        },
      },
      {
        href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
        es: 'Wikipedia — Peso provincial de Puerto Rico',
        en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
        note: {
          es: 'Cantidades acuñadas por valor: 700.000 piezas de 10 centavos en 1896.',
          en: 'Mintages by value: 700,000 pieces of 10 centavos in 1896.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Currencies_of_Puerto_Rico',
        es: 'Wikipedia — Currencies of Puerto Rico',
        en: 'Wikipedia — Currencies of Puerto Rico',
        note: {
          es: 'Da plata .835 para el 10 centavos de 1896, frente a la .900 de Numista y Greysheet.',
          en: 'Gives .835 silver for the 1896 10 centavos, against .900 in Numista and Greysheet.',
        },
      },
    ],
  },
  {
    id: '20-centavos-1895-pgv',
    path: '/coleccion/puerto-rico-numismatica/20-centavos-1895-pgv/',
    pathEn: '/en/collection/puerto-rico-numismatics/20-centavos-1895-pgv/',
    chapterId: 'peso-provincial',
    year: '1895',
    mint: {
      es: 'Madrid; sin marca de ceca. Oficiales P·G·V',
      en: 'Madrid; no mint mark. Officials P·G·V',
    },
    denomination: {
      es: '20 centavos de peso provincial',
      en: '20 centavos of the provincial peso',
    },
    composition: {
      es: 'Plata .835 (especificación de tipo Numista / Greysheet; no es un ensayo de este ejemplar)',
      en: 'Silver .835 (Numista / Greysheet type specification; not an assay of this specimen)',
    },
    weight: {
      es: 'No pesado. Tipo: 5 g (Numista, Greysheet).',
      en: 'Not weighed. Type: 5 g (Numista, Greysheet).',
    },
    diameter: {
      es: 'No medido. Tipo: 23 mm (Numista, Greysheet).',
      en: 'Not measured. Type: 23 mm (Numista, Greysheet).',
    },
    edge: {
      es: 'Estriado (especificación de tipo Greysheet). El canto de este ejemplar no se fotografió.',
      en: 'Reeded (Greysheet type specification). This specimen’s edge was not photographed.',
    },
    references: 'KM#22 · Numista N#17451 · PCGS#976911',
    grade: {
      es: 'Sin encapsular. Desgaste de circulación en el cabello y en las armas; rayas finas en los campos. Leyendas y fecha legibles. No es un grado numérico.',
      en: 'Unslabbed. Circulation wear to the hair and arms; fine hairlines in the fields. Legends and date readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Puerto Rican provincial silver 20 centavos: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-composite.jpg',
      front: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-front.jpg',
      back: '/images/catalog/puerto-rico/puerto-rico-madrid-20-centavos-1895-alfonso-xiii-pgv-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    title: {
      es: '20 centavos · Alfonso XIII · 1895 PGV',
      en: '20 Centavos · Alfonso XIII · 1895 PGV',
    },
    kicker: {
      es: 'Puerto Rico · Moneda provincial',
      en: 'Puerto Rico · Provincial coinage',
    },
    lead: {
      es: '20 centavos de plata de la moneda provincial de Puerto Rico, 1895, con el busto niño de Alfonso XIII y las iniciales P·G·V. Acuñado en Madrid. Sin serial y sin encapsular.',
      en: 'Silver 20 centavos of Puerto Rico’s provincial coinage, 1895, with the boy Alfonso XIII’s bust and the initials P·G·V. Struck in Madrid. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es un 20 centavos de plata de la moneda provincial de Puerto Rico, fechado en 1895. El anverso muestra el busto de Alfonso XIII niño a la izquierda, con la leyenda ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA y la fecha 1895 entre estrellas bajo el corte del cuello; allí mismo van las iniciales B·M del grabador Bartolomé Maura y Montaner. El reverso lleva las armas de España coronadas entre las columnas de Hércules, con la cinta PLUS ULTRA, la orla ISLA DE PUERTO RICO arriba y 20 CENTAVOS abajo, flanqueado por P·G· a la izquierda y ·V· a la derecha. El disco no lleva leyenda de ley. Krause lo cataloga como KM#22; Numista, como N#17451; PCGS, con el número 976911. Numista y Greysheet dan plata .835, 5 g, 23 mm y canto estriado como cifras de tipo; no se midieron en este ejemplar. Las fotografías son del objeto, en posición de lectura y sin recorte; no establecen el eje de cuños.',
      en: 'This piece is a silver 20 centavos of Puerto Rico’s provincial coinage, dated 1895. The obverse shows the bust of the boy Alfonso XIII facing left, with the legend ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA and the date 1895 between stars below the neck truncation, where the initials B·M of engraver Bartolomé Maura y Montaner also sit. The reverse carries the crowned arms of Spain between the Pillars of Hercules, with the PLUS ULTRA ribbon, the legend ISLA DE PUERTO RICO above and 20 CENTAVOS below, flanked by P·G· at left and ·V· at right. The disc carries no fineness legend. Krause catalogs it as KM#22; Numista as N#17451; PCGS under number 976911. Numista and Greysheet give .835 silver, 5 g, 23 mm, and a reeded edge as type figures; they were not measured on this specimen. The photographs are of the object, upright and uncropped; they do not establish die axis.',
    },
    history: {
      es: 'El Real Decreto de 17 de agosto de 1895 cambió la plata mexicana de la isla por el Billete de Canje de 1 peso, y ese papel, por moneda provincial labrada en Madrid. El 20 centavos fue el único divisor de 1895; el 5, el 10 y el 40 centavos llevan fecha de 1896. Tras el Tratado de París de 1898 la plata provincial convivió con el dólar hasta su retiro; Numista la da por desmonetizada el 12 de abril de 1900. No se publica aquí un martillo ni un censo de encapsulados.',
      en: 'The royal decree of 17 August 1895 exchanged the island’s Mexican silver for the 1-peso exchange note, and that paper for provincial coin struck in Madrid. The 20 centavos was the only fraction of 1895; the 5, 10, and 40 centavos are dated 1896. After the 1898 Treaty of Paris the provincial silver ran beside the dollar until withdrawal; Numista records it as demonetized on 12 April 1900. No hammer and no slab census are published here.',
    },
    obverseLegend: {
      es: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ — «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Bajo el busto: B·M.',
      en: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1895 ★ — “Alfonso XIII, by the grace of God, constitutional king of Spain.” Below the bust: B·M.',
    },
    reverseLegend: {
      es: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 20 CENTAVOS ·V· (oficiales Peiró, García y Vega).',
      en: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 20 CENTAVOS ·V· (officials Peiró, García, and Vega).',
    },
    frontCaption: {
      es: 'Anverso: busto de Alfonso XIII niño a la izquierda; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1895 entre estrellas.',
      en: 'Obverse: bust of the boy Alfonso XIII facing left; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1895 between stars.',
    },
    backCaption: {
      es: 'Reverso: armas de España coronadas entre las columnas de Hércules; ISLA DE PUERTO RICO; P·G· 20 CENTAVOS ·V·.',
      en: 'Reverse: crowned arms of Spain between the Pillars of Hercules; ISLA DE PUERTO RICO; P·G· 20 CENTAVOS ·V·.',
    },
    scarcity: {
      es: 'El 1895 P·G·V es la única fecha del tipo KM#22, no una variedad dentro de una serie larga. Wikipedia en español y Greysheet registran 3.350.000 piezas: la mayor tirada de la moneda provincial después del peso. No se publica un índice de rareza como censo ni precios de subasta.',
      en: 'The 1895 P·G·V is the only date of type KM#22, not a variety within a long run. Spanish Wikipedia and Greysheet record 3,350,000 pieces: the largest mintage of the provincial coinage after the peso. No rarity-index census and no auction prices are published.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —busto de Alfonso XIII niño, 1895, P·G·V—, no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — boy Alfonso XIII bust, 1895, P·G·V — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/17451',
        es: 'Numista — 20 centavos, Alfonso XIII, Puerto Rico 1895 (N#17451)',
        en: 'Numista — 20 Centavos, Alfonso XIII, Puerto Rico 1895 (N#17451)',
        note: {
          es: 'KM#22; plata .835, 5 g, 23 mm; leyendas y oficiales P·G·V; desmonetizada el 12 de abril de 1900. No se republica la tabla de precios.',
          en: 'KM#22; .835 silver, 5 g, 23 mm; legends and officials P·G·V; demonetized 12 April 1900. The price table is not republished.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/1895-20-centavos-puerto-rico-coin/gsid/337554',
        es: 'Greysheet — 1895-PG V 20c Puerto Rico (GSID 337554)',
        en: 'Greysheet — 1895-PG V 20c Puerto Rico (GSID 337554)',
        note: {
          es: 'KM-22, PCGS#976911; plata .835, 5 g, 23 mm, canto estriado; tirada 3.350.000. No se republican precios.',
          en: 'KM-22, PCGS#976911; .835 silver, 5 g, 23 mm, reeded edge; mintage 3,350,000. Prices are not republished.',
        },
      },
      {
        href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
        es: 'Wikipedia — Peso provincial de Puerto Rico',
        en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
        note: {
          es: 'Cantidades acuñadas por valor: 3.350.000 piezas de 20 centavos en 1895.',
          en: 'Mintages by value: 3,350,000 pieces of 20 centavos in 1895.',
        },
      },
      {
        href: 'https://web.archive.org/web/20100203023106/http:/ruyman.eu/serieprovincial.htm',
        es: 'Ruymán (archivo) — Serie, Peso Provincial de P.R., Alfonso XIII (1895–1896)',
        en: 'Ruymán (archive) — Provincial Peso series of P.R., Alfonso XIII (1895–1896)',
        note: {
          es: 'P y G, ensayadores; V, fiel de balanza; B·M, Bartolomé Maura y Montaner.',
          en: 'P and G, assayers; V, weigh master; B·M, Bartolomé Maura y Montaner.',
        },
      },
    ],
  },
  {
    id: '40-centavos-1896-pgv',
    path: '/coleccion/puerto-rico-numismatica/40-centavos-1896-pgv/',
    pathEn: '/en/collection/puerto-rico-numismatics/40-centavos-1896-pgv/',
    chapterId: 'peso-provincial',
    year: '1896',
    mint: {
      es: 'Madrid; sin marca de ceca. Oficiales P·G·V',
      en: 'Madrid; no mint mark. Officials P·G·V',
    },
    denomination: {
      es: '40 centavos de peso provincial (0,40 peso)',
      en: '40 centavos of the provincial peso (0.40 peso)',
    },
    composition: {
      es: 'Plata .835 (Numista; cifra de tipo, no un ensayo). NGC da .900. A .835 y 10 g, la plata fina calculada es 8,35 g, unos 0,2685 oz troy.',
      en: 'Silver .835 (Numista; a type figure, not an assay). NGC gives .900. At .835 and 10 g, the calculated fine silver is 8.35 g, about 0.2685 troy oz.',
    },
    weight: {
      es: 'No pesado. Tipo: 10 g (Numista).',
      en: 'Not weighed. Type: 10 g (Numista).',
    },
    diameter: {
      es: 'No medido. Tipo: 27 mm (Numista).',
      en: 'Not measured. Type: 27 mm (Numista).',
    },
    edge: {
      es: 'Estriado (Numista). El canto de este ejemplar no se fotografió.',
      en: 'Reeded (Numista). This specimen’s edge was not photographed.',
    },
    alignment: {
      es: 'Moneda, 180° (Numista). No se comprobó en este ejemplar.',
      en: 'Coin alignment, 180° (Numista). Not checked on this specimen.',
    },
    references: 'KM#23 · Calicó 127 · Numista N#17452',
    referencesNote: {
      es: 'CoinVarieties cita el tipo como KM-23.2. Numista y NGC usan KM#23.',
      en: 'CoinVarieties cites the type as KM-23.2. Numista and NGC use KM#23.',
    },
    grade: {
      es: 'Sin encapsular. Desgaste de circulación en el cabello y en las armas; una raya en el cuello. Leyendas y fecha legibles. No es un grado numérico.',
      en: 'Unslabbed. Circulation wear to the hair and arms; a scratch on the neck. Legends and date readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Puerto Rican provincial silver 40 centavos: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/puerto-rico/puerto-rico-madrid-40-centavos-1896-alfonso-xiii-pgv-composite.jpg',
      front: '/images/catalog/puerto-rico/puerto-rico-madrid-40-centavos-1896-alfonso-xiii-pgv-front.jpg',
      back: '/images/catalog/puerto-rico/puerto-rico-madrid-40-centavos-1896-alfonso-xiii-pgv-back.jpg',
      width: 2048,
      height: 1024,
      faceWidth: 1024,
      faceHeight: 1024,
    },
    title: {
      es: '40 centavos · Alfonso XIII · 1896 PGV',
      en: '40 Centavos · Alfonso XIII · 1896 PGV',
    },
    kicker: {
      es: 'Puerto Rico · Moneda provincial',
      en: 'Puerto Rico · Provincial coinage',
    },
    lead: {
      es: '40 centavos de plata de Puerto Rico, 1896: busto niño de Alfonso XIII, ceca de Madrid y oficiales P·G·V. Sin serial y sin encapsular.',
      en: 'Silver 40 centavos of Puerto Rico, 1896: the boy Alfonso XIII, struck in Madrid, with officials P·G·V. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es un 40 centavos de plata de la moneda provincial de Puerto Rico, fechado en 1896, el único año de la denominación. El anverso muestra el busto de Alfonso XIII niño a la izquierda, con la leyenda ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA —«Alfonso XIII, por la gracia de Dios, rey constitucional de España»— y, bajo el corte del cuello, las iniciales B·M del grabador Bartolomé Maura y Montaner y la fecha 1896 entre estrellas. El reverso lleva las armas de España coronadas entre las columnas de Hércules, con la cinta PLUS ULTRA, la orla ISLA DE PUERTO RICO arriba y 40 CENTAVOS abajo, flanqueado por P·G· a la izquierda y ·V· a la derecha. Esas letras nombran a los oficiales de la ceca de Madrid: Félix Miguel Peiró Rodrigo y Antonio García González, ensayadores, y Remigio Vega Vega, fiel de balanza. No indican una acuñación en Puerto Rico. Krause lo cataloga como KM#23; Calicó, como 127; Numista, como N#17452. Numista da plata .835, 10 g, 27 mm, canto estriado y alineación de moneda (180°) como cifras de tipo; no se midieron en este ejemplar. Las fotografías son del objeto, en posición de lectura y sin recorte; no establecen el eje de cuños.',
      en: 'This piece is a silver 40 centavos of Puerto Rico’s provincial coinage, dated 1896, the only year of the denomination. The obverse shows the bust of the boy Alfonso XIII facing left, with the legend ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA — “Alfonso XIII, by the grace of God, constitutional king of Spain” — and, below the neck truncation, the initials B·M of engraver Bartolomé Maura y Montaner and the date 1896 between stars. The reverse carries the crowned arms of Spain between the Pillars of Hercules, with the PLUS ULTRA ribbon, the legend ISLA DE PUERTO RICO above and 40 CENTAVOS below, flanked by P·G· at left and ·V· at right. Those letters name Madrid Mint officials: Félix Miguel Peiró Rodrigo and Antonio García González, assayers, and Remigio Vega Vega, weigh master. They do not mark a striking in Puerto Rico. Krause catalogs it as KM#23; Calicó as 127; Numista as N#17452. Numista gives .835 silver, 10 g, 27 mm, a reeded edge, and coin alignment (180°) as type figures; they were not measured on this specimen. The photographs are of the object, upright and uncropped; they do not establish die axis.',
    },
    history: {
      es: 'El Real Decreto de 17 de agosto de 1895 cambió la plata mexicana de la isla por el Billete de Canje de 1 peso, y ese papel, por moneda provincial labrada en Madrid. El 40 centavos se acuñó solo en 1896. EnciclopediaPR y Numista registran 725.002 piezas; la tabla de Wikipedia en español y la guía de NGC, 725.000. La ficha conserva las dos cifras y no atribuye la diferencia de dos piezas a pruebas. La ley adoptada es .835, la de Numista. NGC publica .900, que en un disco de 10 g daría 9 g de plata fina, frente a los 8,35 g del cálculo a .835. La sección 11 de la Ley Foraker, de 12 de abril de 1900, autorizó el retiro de la moneda puertorriqueña a 60 centavos estadounidenses por peso, y el mismo tipo para las fracciones. A ese tipo, un 40 centavos equivalía a 24 centavos de dólar. Esa equivalencia es la del canje, no un valor numismático. El texto dispone además que, tres meses después de entrar en vigor la ley, solo la moneda estadounidense sea de curso legal para las deudas contraídas después; las anteriores seguían pagaderas en moneda puertorriqueña o al tipo del canje. Numista fecha la desmonetización el 12 de abril de 1900.',
      en: 'The royal decree of 17 August 1895 exchanged the island’s Mexican silver for the 1-peso exchange note, and that paper for provincial coin struck in Madrid. The 40 centavos was struck only in 1896. EnciclopediaPR and Numista record 725,002 pieces; the Spanish Wikipedia table and the NGC guide, 725,000. This record keeps both figures and does not assign the two-piece difference to proofs. The fineness adopted here is .835, Numista’s figure. NGC publishes .900, which on a 10 g disc would be 9 g of fine silver, against 8.35 g at .835. Section 11 of the Foraker Act of 12 April 1900 authorized withdrawal of Puerto Rican coin at 60 United States cents per peso, and the same rate for the fractions. At that rate a 40 centavos piece came to 24 cents. That equivalence is the exchange rate, not a numismatic value. The text also provides that, three months after the act took effect, only United States coin was legal tender for debts contracted afterward; earlier debts remained payable in Puerto Rican coin or at the exchange rate. Numista dates demonetization to 12 April 1900.',
    },
    obverseLegend: {
      es: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1896 ★ — «Alfonso XIII, por la gracia de Dios, rey constitucional de España». Bajo el busto: B·M.',
      en: 'ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA · ★ 1896 ★ — “Alfonso XIII, by the grace of God, constitutional king of Spain.” Below the bust: B·M.',
    },
    reverseLegend: {
      es: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 40 CENTAVOS ·V· (oficiales Peiró, García y Vega).',
      en: 'ISLA DE PUERTO RICO · PLUS ULTRA · P·G· 40 CENTAVOS ·V· (officials Peiró, García, and Vega).',
    },
    frontCaption: {
      es: 'Anverso: busto de Alfonso XIII niño a la izquierda; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1896 entre estrellas.',
      en: 'Obverse: bust of the boy Alfonso XIII facing left; ALFONSO XIII P.L.G.D.D. REY C. DE ESPAÑA; 1896 between stars.',
    },
    backCaption: {
      es: 'Reverso: armas de España coronadas entre las columnas de Hércules; ISLA DE PUERTO RICO; P·G· 40 CENTAVOS ·V·.',
      en: 'Reverse: crowned arms of Spain between the Pillars of Hercules; ISLA DE PUERTO RICO; P·G· 40 CENTAVOS ·V·.',
    },
    scarcity: {
      es: 'Tipo de un solo año: 1896 P·G·V, KM#23. Forma parte de la serie provincial de cinco denominaciones —5, 10, 20 y 40 centavos, y 1 peso— emitida en 1895–1896. La tirada, sea 725.002 o 725.000, no dice cuántos ejemplares sobreviven. Los que conservan detalle y superficie original interesan más. Esta ficha no publica un censo ni precios de subasta. Para comparar piezas del tipo se miran el desgaste, los golpes, las rayas, una posible limpieza y la certificación, junto con la fecha y la referencia.',
      en: 'A single-year type: 1896 P·G·V, KM#23. It belongs to the provincial series of five denominations — 5, 10, 20, and 40 centavos, and 1 peso — issued in 1895–1896. The mintage, whether 725,002 or 725,000, does not say how many pieces survive. Those that keep detail and original surface matter more. This record publishes no census and no auction prices. Comparing pieces of the type means looking at wear, nicks, hairlines, possible cleaning, and certification, along with the date and the catalogue reference.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa, y el tipo no lleva número de serie. No hay número de certificado. La identidad de la ficha es este objeto —40 centavos de 1896, busto de Alfonso XIII niño, P·G·V—, no un lote de subasta. Las ventas de otros ejemplares no se transcriben aquí. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder, and the type carries no serial number. There is no certification number. The identity of this record is this object — 40 centavos of 1896, boy Alfonso XIII bust, P·G·V — not an auction lot. Sales of other examples are not transcribed here. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/17452',
        es: 'Numista — 40 centavos, Alfonso XIII, Puerto Rico 1896 (N#17452)',
        en: 'Numista — 40 Centavos, Alfonso XIII, Puerto Rico 1896 (N#17452)',
        note: {
          es: 'KM#23; plata .835, 10 g, 27 mm, canto estriado, alineación de moneda; una sola fecha, 1896 PGV (725.002); ceca de Madrid; desmonetizada el 12 de abril de 1900. No se republica la tabla de precios.',
          en: 'KM#23; .835 silver, 10 g, 27 mm, reeded edge, coin alignment; a single date, 1896 PGV (725,002); Madrid mint; demonetized 12 April 1900. The price table is not republished.',
        },
      },
      {
        href: 'https://enciclopediapr.org/content/historia-de-la-moneda-en-puerto-rico/',
        es: 'EnciclopediaPR — Historia de la moneda en Puerto Rico',
        en: 'EnciclopediaPR — History of money in Puerto Rico (Spanish)',
        note: {
          es: 'El 40 centavos lleva fecha de 1896 y la cifra 725.002. El peso y el 20 centavos son de 1895; el resto, de 1896. Relaciona la serie con los billetes de canje.',
          en: 'The 40 centavos is dated 1896, with the figure 725,002. The peso and the 20 centavos are of 1895; the rest, of 1896. It ties the series to the exchange notes.',
        },
      },
      {
        href: 'https://es.wikipedia.org/wiki/Peso_provincial_de_Puerto_Rico',
        es: 'Wikipedia — Peso provincial de Puerto Rico',
        en: 'Wikipedia (Spanish) — Puerto Rican provincial peso',
        note: {
          es: 'Tabla de cantidades: 725.000 piezas de 40 centavos en 1896.',
          en: 'Mintage table: 725,000 pieces of 40 centavos in 1896.',
        },
      },
      {
        href: 'https://www.ngccoin.com/price-guide/world/puerto-rico-40-centavos-km-23-1896-cuid-1081191-duid-1514143',
        es: 'NGC — Puerto Rico 40 centavos KM#23, 1896 PGV',
        en: 'NGC — Puerto Rico 40 Centavos KM#23, 1896 PGV',
        note: {
          es: 'Tirada 725.000 y ley .900. No se republican precios ni el valor de fundición.',
          en: 'Mintage 725,000 and fineness .900. Prices and melt value are not republished.',
        },
      },
      {
        href: 'http://www.coinvarieties.com/index.php/Puerto_Rico_1896-PG_V_40_centavos',
        es: 'CoinVarieties — Puerto Rico 1896-PG V 40 centavos',
        en: 'CoinVarieties — Puerto Rico 1896-PG V 40 centavos',
        note: {
          es: 'Calicó 127 y KM-23.2. Publica 752.002 y plata .900; esas dos cifras no se adoptan. No se republica el martillo citado.',
          en: 'Calicó 127 and KM-23.2. It prints 752,002 and .900 silver; those two figures are not adopted. The hammer it cites is not republished.',
        },
      },
      {
        href: 'https://www.lexjuris.com/lexlex/lexotras/lexleyforaker.htm',
        es: 'LexJuris — Ley Foraker, artículo 11 (texto en español)',
        en: 'LexJuris — Foraker Act, article 11 (Spanish text)',
        note: {
          es: 'Canje a 60 centavos estadounidenses por peso, el mismo tipo para las fracciones. Los 24 centavos del 40 centavos son el cálculo de ese tipo, no una cifra del articulado.',
          en: 'Exchange at 60 United States cents per peso, the same rate for the fractions. The 24 cents for the 40 centavos is that rate applied, not a figure printed in the section.',
        },
      },
      {
        href: 'https://uscode.house.gov/us/usc/119-138/t48/s755/',
        es: 'United States Code — 48 U.S.C. § 755 (sección 11, ley de 12 de abril de 1900)',
        en: 'United States Code — 48 U.S.C. § 755 (section 11, act of 12 April 1900)',
        note: {
          es: 'Resumen oficial del canje a 60 centavos por peso y de la reacuñación en moneda estadounidense.',
          en: 'Official summary of the redemption at 60 cents per peso and of the recoinage into United States coin.',
        },
      },
      {
        href: 'https://web.archive.org/web/20100203023106/http:/ruyman.eu/serieprovincial.htm',
        es: 'Ruymán (archivo) — Serie, Peso Provincial de P.R., Alfonso XIII (1895–1896)',
        en: 'Ruymán (archive) — Provincial Peso series of P.R., Alfonso XIII (1895–1896)',
        note: {
          es: 'P y G, ensayadores; V, fiel de balanza; B·M, Bartolomé Maura y Montaner. El archivo da a Peiró el nombre Félix Miguel Peiró Rodrigo.',
          en: 'P and G, assayers; V, weigh master; B·M, Bartolomé Maura y Montaner. The archive gives Peiró the name Félix Miguel Peiró Rodrigo.',
        },
      },
    ],
  }
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Puerto Rico · Numismática',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    historyHeading: 'Historia',
    legendsHeading: 'Leyendas',
    scarcityHeading: 'Rareza y tipo',
    certificationHeading: 'Certificación',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    yearLabel: 'Año',
    mintLabel: 'Ceca',
    denominationLabel: 'Denominación',
    compositionLabel: 'Composición',
    weightLabel: 'Peso',
    diameterLabel: 'Diámetro',
    edgeLabel: 'Canto',
    alignmentLabel: 'Alineación',
    referencesLabel: 'Referencias',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    viewCoin: 'Ver la ficha',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Un 10 centavos cuya fecha aparente, 1895, está por verificar; un 20 centavos de plata de 1895, y un 40 centavos de plata de 1896. Los tres llevan oficiales P·G·V y están sin encapsular. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead: 'Otra pieza de la colección de Puerto Rico.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Puerto Rico · Numismatics',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The coin',
    historyHeading: 'History',
    legendsHeading: 'Legends',
    scarcityHeading: 'Scarcity and type',
    certificationHeading: 'Certification',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    yearLabel: 'Year',
    mintLabel: 'Mint',
    denominationLabel: 'Denomination',
    compositionLabel: 'Composition',
    weightLabel: 'Weight',
    diameterLabel: 'Diameter',
    edgeLabel: 'Edge',
    alignmentLabel: 'Alignment',
    referencesLabel: 'References',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    viewCoin: 'Open the coin page',
    holdingsTitle: 'Coins in the collection',
    holdingsIntro:
      'A 10 centavos whose apparent date, 1895, awaits verification; a silver 20 centavos of 1895; and a silver 40 centavos of 1896. All three carry officials P·G·V and are unslabbed. Further coin pages will be published as they are documented.',
    relatedLead: 'Another piece in the Puerto Rico collection.',
  },
} as const;

export function coinById(id: string): PuertoRicoCoin | undefined {
  return puertoRicoCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${PUERTO_RICO_COINAGE_PATH_EN}` : PUERTO_RICO_COINAGE_PATH;
}

export function coinPath(coin: PuertoRicoCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? PUERTO_RICO_NOTES_PATH_EN : PUERTO_RICO_NOTES_PATH;
}

export const puertoRicoCoinSlugs = puertoRicoCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const puertoRicoCoinageDedicatedSlugs = [
  PUERTO_RICO_COINAGE_PATH,
  PUERTO_RICO_COINAGE_PATH_EN,
  ...puertoRicoCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
