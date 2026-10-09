import type { CatalogSource, LocalizedText } from './catalog';

const USA_NOTES_PATH = '/coleccion/estados-unidos/';
const USA_NOTES_PATH_EN = '/en/collection/united-states/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const USA_COINAGE_PATH = '/coleccion/estados-unidos-numismatica/';
export const USA_COINAGE_PATH_EN = '/collection/united-states-numismatics/';
export const USA_HARD_TIMES_PATH = '/coleccion/estados-unidos-numismatica/fichas-hard-times/';
export const USA_HARD_TIMES_PATH_EN = '/collection/united-states-numismatics/hard-times-tokens/';
export const USA_MORGAN_PATH = '/coleccion/estados-unidos-numismatica/dolar-morgan-emision-original-1878-1904/';
export const USA_MORGAN_PATH_EN = '/collection/united-states-numismatics/morgan-silver-dollars-original-run-1878-1904/';

export type UnitedStatesCoinageChapterId =
  | 'hard-times'
  | 'medallas-ceca'
  | 'ceca-filadelfia'
  | 'dolar-morgan'
  | 'dolar-laton'
  | 'semiquincentenario';

export type UnitedStatesCoinageChapter = {
  id: UnitedStatesCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const unitedStatesCoinageChapters: UnitedStatesCoinageChapter[] = [
  {
    id: 'hard-times',
    years: { es: '1832–1844', en: '1832–1844' },
    title: {
      es: 'Las fichas Hard Times',
      en: 'Hard Times tokens',
    },
    lead: {
      es: 'Cobre, latón y metal blanco privados, del tamaño de un large cent: menuda de emergencia y sátira política durante el Pánico de 1837, no moneda de la United States Mint.',
      en: 'Private copper, brass, and white metal on a large-cent module: emergency small change and political satire during the Panic of 1837, not United States Mint coin.',
    },
    body: {
      es: 'Las fichas Hard Times se acuñaron sobre todo entre 1832 y 1844, en cobre, latón y metal blanco, en el módulo del large cent —unos 28 mm—. No salieron de una ceca federal: cubrieron el vacío de menuda cuando el público atesoró oro, plata y hasta los centavos de cobre. Jackson vetó la renovación del Second Bank of the United States, trasladó depósitos a los llamados pet banks y, el 11 de julio de 1836, firmó con Levi Woodbury la Specie Circular: desde el 15 de agosto las tierras públicas se pagaban solo en moneda metálica. Van Buren heredó, en mayo de 1837, la suspensión de pagos en especie. Lyman H. Low clasificó 164 variedades en 1899; Russell Rulau las reordenó con números HT. El Coinage Act del 22 de abril de 1864 criminalizó la acuñación privada de piezas de uno y dos centavos y cerró esa menuda de emergencia. Esta vitrina reúne el HT-10A de 1834 (Low-9B), jabalí y busto de Jackson; el HT-16 de 1841 (Low-58), navío Constitution y «Not One Cent»; el HT-34 de 1837 (Low-20), burro y tortuga; y la store card de John J. Adams (HT-181, Low-300), hacia 1835. El HT-34 no es el HT-33, que lee EXECUTIVE EXPERIMENT. El canto del HT-16 no está fotografiado, así que no se le asigna el HT-16A.',
      en: 'Hard Times tokens were struck mainly between 1832 and 1844, in copper, brass, and white metal, on the large-cent module — about 28 mm. They did not come from a federal mint: they filled the small-change gap when the public hoarded gold, silver, and even copper cents. Jackson vetoed the recharter of the Second Bank of the United States, shifted deposits into so-called pet banks, and on 11 July 1836 signed with Levi Woodbury the Specie Circular: from 15 August, public lands were to be paid for in coin only. Van Buren inherited, in May 1837, the suspension of specie payments. Lyman H. Low classified 164 varieties in 1899; Russell Rulau reordered them with HT numbers. The Coinage Act of 22 April 1864 criminalized private striking of one- and two-cent pieces and ended that emergency small change. This case holds the 1834 HT-10A (Low-9B), running boar and Jackson bust; the 1841 HT-16 (Low-58), ship Constitution and “Not One Cent”; the 1837 HT-34 (Low-20), donkey and turtle; and the John J. Adams store card (HT-181, Low-300), circa 1835. HT-34 is not HT-33, which reads EXECUTIVE EXPERIMENT. The HT-16 edge is not photographed, so HT-16A is not assigned.',
    },
  },
  {
    id: 'medallas-ceca',
    years: { es: '1836', en: '1836' },
    title: {
      es: 'Medallas de la ceca',
      en: 'Mint medals',
    },
    lead: {
      es: 'Medalla conmemorativa de la United States Mint, sin valor facial. La fecha 1836 conmemora el 23 de marzo de 1836 y deja abierto el año en que se acuñó cada ejemplar.',
      en: 'A United States Mint commemorative medal, with no face value. The date 1836 commemorates 23 March 1836 and leaves open the year each example was struck.',
    },
    body: {
      es: 'El 23 de marzo de 1836 la ceca de Filadelfia estrenó la prensa de vapor en el golpe del cuño. El director Robert M. Patterson había fijado el acto para el 22 de febrero, cumpleaños de Washington; un fallo mecánico lo atrasó. Christian Gobrecht grabó el gorro de la Libertad entre rayos y el reverso UNITED STATES MINT, FIRST STEAM COINAGE. Julian MT-20 conserva FEB. 22. Julian MT-21 lleva MAR. 23, y las primeras impresiones de marzo muestran esa fecha sobre FEB. 22. PCGS separa la reacuñación en bronce amarillo como 783671 y no publica tirada. Esta vitrina documenta un ejemplar de ese tipo, sin cápsula: el color amarillo y la superficie texturada apoyan la reacuñación tardía, y los reflejos de la funda impiden fijar el año de fabricación o un grado. El Smithsonian describe un ejemplar del tipo en latón, de 28 mm, con Gobrecht en ambas caras; esa ficha de museo no autentica este disco. El vapor del laminado es anterior: el informe del director del 1 de enero de 1817, tras el incendio de enero de 1816, registra una máquina de vapor en lugar del tiro de caballos. El hito de 1836 es la acuñación.',
      en: 'On 23 March 1836 the Philadelphia mint first used a steam press for the blow of the die. Director Robert M. Patterson had set the ceremony for 22 February, Washington’s birthday; a mechanical fault delayed it. Christian Gobrecht engraved the Liberty cap among rays and the reverse UNITED STATES MINT, FIRST STEAM COINAGE. Julian MT-20 keeps FEB. 22. Julian MT-21 reads MAR. 23, and the earliest March impressions show that date over FEB. 22. PCGS separates the yellow-bronze restrike as 783671 and publishes no mintage. This case records one example of that type, unslabbed: the yellow color and textured surface support a later restrike, and sleeve reflections prevent fixing a year of manufacture or a grade. The Smithsonian describes one example of the type in brass, 28 mm, with Gobrecht on both sides; that museum record does not authenticate this disc. Steam in the rolling mill is earlier: the director’s report of 1 January 1817, after the January 1816 fire, records a steam engine in place of horse power. The 1836 milestone is the striking.',
    },
  },
  {
    id: 'ceca-filadelfia',
    years: { es: 'desde 1792', en: 'from 1792' },
    title: {
      es: 'La ceca de Filadelfia',
      en: 'The Philadelphia mint',
    },
    lead: {
      es: 'El Coinage Act del 2 de abril de 1792 creó la United States Mint en Filadelfia, entonces capital federal. Esa casa acuñó el dólar de oro de 1856, los cuartos de águila de 1878, 1908 y 1912 y el dólar de 2026 de esta vitrina.',
      en: 'The Coinage Act of 2 April 1792 created the United States Mint in Philadelphia, then the federal capital. That house struck the 1856 gold dollar, the 1878, 1908, and 1912 quarter eagles, and the 2026 dollar in this case.',
    },
    body: {
      es: 'Antes de 1792 circulaban monedas europeas y se pagaba también en especie. El Congreso situó la primera ceca federal en Filadelfia el 2 de abril de 1792; la casa permaneció allí cuando la capital se trasladó a Washington. En sus primeros años acuñó centavos de cobre y las primeras piezas de oro y plata. Filadelfia no pone marca de ceca. Esta vitrina documenta de esa casa el dólar de oro de 1856, tipo 3 de James Barton Longacre, el quarter eagle Liberty Head de 1878, oro de 900 milésimas de Christian Gobrecht, y los cuartos de águila Indian Head de 1908 y 1912, diseño incuso de Bela Lyon Pratt. El dólar de 2026, también de Filadelfia y sin marca, está en el capítulo del Semiquincentenario. Liberty Seated y el centavo Lincoln quedan fuera de esta vitrina. Los dólares Morgan de 1884-S, de 1883-CC y de 1885-CC están en el capítulo del dólar de plata. La medalla de la primera acuñación a vapor, fechada 1836, está en el capítulo de medallas de la ceca. El papel de curso legal de este país se cataloga aparte, en Notafilia.',
      en: 'Before 1792 European coin circulated and payment was also made in kind. Congress placed the first federal mint in Philadelphia on 2 April 1792; the house stayed there when the capital moved to Washington. In its first years it struck copper cents and the first gold and silver pieces. Philadelphia uses no mint mark. This case records from that house the 1856 gold dollar, James Barton Longacre’s Type 3, the 1878 Liberty Head quarter eagle, 900-fine gold by Christian Gobrecht, and the 1908 and 1912 Indian Head quarter eagles, Bela Lyon Pratt’s incuse design. The 2026 dollar, also Philadelphia and without a mint mark, is in the Semiquincentennial chapter. Liberty Seated and the Lincoln cent sit outside this case. The 1884-S, 1883-CC, and 1885-CC Morgan dollars are in the silver-dollar chapter. The First Steam Coinage medal, dated 1836, is in the Mint-medals chapter. This country’s legal-tender paper is catalogued separately, under Notaphily.',
    },
  },
  {
    id: 'dolar-morgan',
    years: { es: '1878–1921', en: '1878–1921' },
    title: {
      es: 'El dólar Morgan',
      en: 'The Morgan dollar',
    },
    lead: {
      es: 'La ley del 28 de febrero de 1878 volvió a autorizar el dólar de plata de 26,73 g. Esta vitrina guarda el ejemplar de San Francisco de 1884, con la S bajo el lazo, y los de Carson City de 1883 y de 1885, con la CC bajo la corona.',
      en: 'The act of 28 February 1878 restored the 26.73 g silver dollar. This case holds the 1884 San Francisco piece, with the S under the bow, and the 1883 and 1885 Carson City pieces, with the CC under the wreath.',
    },
    body: {
      es: 'La ley de acuñación de 1873 omitió el dólar de plata estándar. El 28 de febrero de 1878 el Congreso, por encima del veto, aprobó la ley que autoriza su acuñación y le devuelve el curso legal: el secretario del Tesoro debía comprar cada mes no menos de dos millones de dólares en plata, ni más de cuatro, y convertirla en esos dólares. La United States Mint fija el peso y la ley en los de la ley del 18 de enero de 1837: 26,73 g, 90 % plata y 10 % cobre. George T. Morgan grabó el tipo: Libertad a la izquierda en el anverso, y un águila con flechas y rama de olivo en el reverso. Las primeras piezas salieron en 1878 en Filadelfia, San Francisco y Carson City; Nueva Orleans se sumó al año siguiente. La serie llega hasta 1904 y reaparece en 1921. Esta vitrina no cubre el Peace dollar ni el trade dollar. Documenta un dólar Morgan de 1884 con marca S, otro de 1883 con marca CC y otro de 1885 con marca CC, los tres sueltos y sin número de serie. El 1883 sin letra es Filadelfia. El 1885-CC cierra el primer periodo de Carson City: la casa dejó de acuñar en noviembre de 1885 y reanudó la moneda el 1 de julio de 1889. PCGS da 228.000 piezas. Tras las dispersiones del Tesoro de 1962–1964 quedaron 148.285 ejemplares para las ventas de la GSA. Este 1885-CC no tiene procedencia GSA documentada.',
      en: 'The coinage act of 1873 dropped the standard silver dollar. On 28 February 1878 Congress, over a veto, passed the act that authorizes its coinage and restores legal tender: the Treasury secretary was to buy each month not less than two million dollars of silver, and not more than four, and coin it into those dollars. The United States Mint sets the weight and fineness at those of the act of 18 January 1837: 26.73 g, 90% silver and 10% copper. George T. Morgan engraved the type: Liberty facing left on the obverse, and an eagle with arrows and an olive branch on the reverse. The first pieces came in 1878 at Philadelphia, San Francisco, and Carson City; New Orleans joined the next year. The series runs to 1904 and returns in 1921. This case does not cover the Peace dollar or the trade dollar. It records one 1884 Morgan dollar with an S mint mark, one 1883 Morgan dollar with a CC mint mark, and one 1885 Morgan dollar with a CC mint mark, all three raw and with no serial number. The 1883 with no letter is Philadelphia. The 1885-CC closes Carson City’s first coinage period: the house stopped striking in November 1885 and resumed coinage on 1 July 1889. PCGS gives 228,000 pieces. After the 1962–1964 Treasury dispersals, 148,285 examples were held for the GSA sales. This 1885-CC has no documented GSA provenance.',
    },
  },
  {
    id: 'dolar-laton',
    years: { es: 'desde 2000', en: 'from 2000' },
    title: {
      es: 'El dólar de latón-manganeso',
      en: 'The manganese-brass dollar',
    },
    lead: {
      es: 'Desde el dólar Sacagawea, el módulo de 8,10 g y 26,49 mm en latón-manganeso es el del 1 $ de circulación. El de 2026 usa esa misma aleación; no es oro.',
      en: 'Since the Sacagawea dollar, the 8.10 g, 26.49 mm manganese-brass module has been that of the circulating $1. The 2026 piece uses that same alloy; it is not gold.',
    },
    body: {
      es: 'El dólar de oro de circulación desapareció en 1933. El de 1856, en el capítulo de Filadelfia, es esa pieza de oro .900. El pequeño dólar de cuproníquel Susan B. Anthony (1979) cedió en 2000 al Sacagawea de latón-manganeso —88,5 % cobre, 6 % zinc, 3,5 % manganeso y 2 % níquel—, el mismo cospel que heredaron los Native American dollars, los Presidential dollars (2007–2016, 2020) y los American Innovation. El sello presidencial del reverso de esos Presidential dollars es el de Frank Gasparro, con sus iniciales FG. El dólar del Semiquincentenario reutiliza ese reverso, con el número 250 en el escudo, y cambia el canto: liso, sin leyenda ni marca de ceca, a diferencia de los Native American y American Innovation. Pese al color dorado, no contiene oro.',
      en: 'Circulating gold dollars ended in 1933. The 1856 piece, in the Philadelphia chapter, is that .900 gold coin. The small cupronickel Susan B. Anthony dollar (1979) yielded in 2000 to the Sacagawea manganese-brass piece — 88.5% copper, 6% zinc, 3.5% manganese, and 2% nickel — the same planchet later used for Native American dollars, Presidential dollars (2007–2016, 2020), and American Innovation dollars. The presidential-seal reverse of those Presidential dollars is Frank Gasparro’s, with his initials FG. The Semiquincentennial dollar reuses that reverse, with 250 in the shield, and changes the edge: plain, with no lettering and no mint mark, unlike Native American and American Innovation dollars. Despite the golden color, it contains no gold.',
    },
  },
  {
    id: 'semiquincentenario',
    years: { es: '2026', en: '2026' },
    title: {
      es: 'Semiquincentenario',
      en: 'Semiquincentennial',
    },
    lead: {
      es: 'La ley de rediseño de 2020 autorizó un dólar de 2026 emblemático del 250.º aniversario. El Tesoro eligió el retrato de Donald J. Trump en el anverso.',
      en: 'The 2020 redesign act authorized a 2026 dollar emblematic of the 250th anniversary. The Treasury chose Donald J. Trump’s portrait for the obverse.',
    },
    body: {
      es: 'La Circulating Collectible Coin Redesign Act of 2020 (Public Law 116-330; 31 U.S.C. § 5112(y)(1)(C)) permite al secretario del Tesoro acuñar, durante 2026, un dólar de 1 $ con un diseño emblemático del Semiquincentenario. Prohíbe retratos de personas vivas en el reverso; no impone la misma restricción al anverso. El 16 de julio de 2026 el Tesoro presentó el tipo: retrato de frente de Joseph Menna (JFM), a partir de una fotografía oficial de la Casa Blanca de Daniel Torok, con LIBERTY, IN GOD WE TRUST y la doble fecha 1776 ~ 2026; reverso de Gasparro con 250 en el escudo. Los rollos y bolsas de calidad de circulación, solo de Filadelfia y sin marca de ceca, salieron a la venta el 2 de septiembre de 2026. Un programa aparte de oro de 24 quilates de una onza no es esta pieza. Un antecedente de presidente en vida en moneda estadounidense es el medio dólar del Sesquicentenario de 1926, con Calvin Coolidge.',
      en: 'The Circulating Collectible Coin Redesign Act of 2020 (Public Law 116-330; 31 U.S.C. § 5112(y)(1)(C)) lets the Treasury secretary strike, during 2026, a $1 coin with a design emblematic of the Semiquincentennial. It bars portraits of living people on the reverse; it places no matching limit on the obverse. On 16 July 2026 the Treasury unveiled the type: a facing portrait by Joseph Menna (JFM), after an official White House photograph by Daniel Torok, with LIBERTY, IN GOD WE TRUST, and the dual date 1776 ~ 2026; Gasparro’s reverse with 250 in the shield. Circulating-quality rolls and bags, Philadelphia only and without a mint mark, went on sale on 2 September 2026. A separate 24-karat one-ounce gold program is not this piece. A precedent for a living president on United States coin is the 1926 Sesquicentennial half dollar, with Calvin Coolidge.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.globenewswire.com/news-release/2026/08/04/3338617/0/en/2026-Semiquincentennial-President-Donald-J-Trump-1-Coin-Designs-Released.html',
    es: 'United States Mint — Diseños del dólar Trump del Semiquincentenario (4 ago. 2026)',
    en: 'United States Mint — Semiquincentennial Trump $1 designs (4 Aug. 2026)',
    note: {
      es: 'Comunicado de la Mint: retrato de Joseph Menna a partir de foto de Daniel Torok; reverso de Frank Gasparro con 250; autorización 31 U.S.C. § 5112(y)(1)(C) y Pub. L. 116-330.',
      en: 'Mint release: Joseph Menna portrait after a Daniel Torok photograph; Frank Gasparro reverse with 250; authority 31 U.S.C. § 5112(y)(1)(C) and Pub. L. 116-330.',
    },
  },
  {
    href: 'https://www.coinnews.net/2026/07/16/treasury-unveils-trump-1-coin/',
    es: 'CoinNews — El Tesoro presenta el dólar Trump 1776–2026',
    en: 'CoinNews — Treasury unveils the 1776–2026 Trump $1',
    note: {
      es: 'Especificaciones: 8,10 g; 26,49 mm; latón-manganeso; canto liso; Filadelfia sin marca de ceca; no es oro.',
      en: 'Specs: 8.10 g; 26.49 mm; manganese brass; plain edge; Philadelphia with no mint mark; not gold.',
    },
  },
  {
    href: 'https://www.coinnews.net/2026/09/02/trump-coins-july-4th-privy/',
    es: 'CoinNews — Rollos y bolsas del 2 de septiembre y privy JULY 4th',
    en: 'CoinNews — 2 September rolls and bags and the JULY 4th privy',
    note: {
      es: 'Calidad de circulación, solo Filadelfia. 250.000 ejemplares con marca privy JULY 4th, distinta de este tipo sin privy. No se republican precios.',
      en: 'Circulating quality, Philadelphia only. 250,000 pieces with a JULY 4th privy mark, a different variety from this no-privy type. Prices are not republished.',
    },
  },
  {
    href: 'https://www.congress.gov/116/plaws/publ330/PLAW-116publ330.pdf',
    es: 'Public Law 116-330 — Circulating Collectible Coin Redesign Act of 2020',
    en: 'Public Law 116-330 — Circulating Collectible Coin Redesign Act of 2020',
    note: {
      es: 'Autoriza un dólar de 2026 emblemático del Semiquincentenario; prohíbe retratos de personas vivas en el reverso.',
      en: 'Authorizes a 2026 dollar emblematic of the Semiquincentennial; bars portraits of living people on the reverse.',
    },
  },
  {
    href: 'https://www.usmint.gov/about',
    es: 'United States Mint — About',
    en: 'United States Mint — About',
    note: {
      es: 'Fundación por el Coinage Act del 2 de abril de 1792 en Filadelfia.',
      en: 'Founded by the Coinage Act of 2 April 1792 in Philadelphia.',
    },
  },
  {
    href: 'https://www.usmint.gov/news/inside-the-mint/one-hundred-years-of-silver-dollar-coinage-1878-1978',
    es: 'United States Mint — Cien años del dólar de plata, 1878–1978',
    en: 'United States Mint — One hundred years of silver dollar coinage, 1878–1978',
    note: {
      es: 'Bland–Allison reautorizó el dólar de 26,73 g y ley .900 del acta de 1837. Morgan lo diseñó. Filadelfia, San Francisco y Carson City acuñaron en 1878. No se republican precios.',
      en: 'Bland–Allison reauthorized the 26.73 g, .900 dollar of the 1837 act. Morgan designed it. Philadelphia, San Francisco, and Carson City struck it in 1878. Prices are not republished.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Hard_times_token',
    es: 'Wikipedia — Hard times token',
    en: 'Wikipedia — Hard times token',
    note: {
      es: 'Marco de 1832–1844, menuda privada y el Pánico de 1837. No se republican precios.',
      en: '1832–1844 frame, private small change, and the Panic of 1837. Prices are not republished.',
    },
  },
  {
    href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/',
    es: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    en: 'NGC Coin Explorer — Hard Times Tokens (Rulau)',
    note: {
      es: 'Atribución contemporánea por número HT de Rulau, con cruce a Low cuando aplica.',
      en: 'Contemporary attribution by Rulau HT number, with a Low cross-reference when it applies.',
    },
  },
  {
    href: 'https://www.govinfo.gov/content/pkg/STATUTE-20/pdf/STATUTE-20-Pg25-2.pdf',
    es: '20 Stat. 25 — Ley del dólar de plata estándar (28 feb. 1878)',
    en: '20 Stat. 25 — Standard silver dollar act (28 Feb. 1878)',
    note: {
      es: 'Compra mensual de plata, entre dos y cuatro millones de dólares, para acuñarla en dólares de curso legal.',
      en: 'Monthly silver purchases, between two and four million dollars, to be coined into legal-tender dollars.',
    },
  },
  {
    href: 'https://americanhistory.si.edu/collections/object/nmah_1094089',
    es: 'Smithsonian — Medalla First Steam Coinage, 1836',
    en: 'Smithsonian — First Steam Coinage medal, 1836',
    note: {
      es: 'Ficha 1991.0009.0520: Gobrecht en anverso y reverso; latón; 28 mm; leyendas LIBERTY y UNITED STATES MINT / FIRST STEAM COINAGE / MAR. 23. / 1836. No autentica el ejemplar de esta vitrina.',
      en: 'Record 1991.0009.0520: Gobrecht on obverse and reverse; brass; 28 mm; legends LIBERTY and UNITED STATES MINT / FIRST STEAM COINAGE / MAR. 23. / 1836. It does not authenticate the example in this case.',
    },
  },
  {
    href: 'https://www.pcgs.com/coinfacts/coin/1836-j-mt-21-yellow-bronze-first-steam-coinage/783671',
    es: 'PCGS CoinFacts — reacuñación 783671, bronce amarillo, J-MT-21',
    en: 'PCGS CoinFacts — restrike 783671, yellow bronze, J-MT-21',
    note: {
      es: 'Título «1836» Medal J-MT-21, First Steam Coinage Yellow Bronze Restrike. Tirada, diámetro, peso y canto: no disponibles. El campo de metal sigue en copper. No se republican precios.',
      en: 'Title “1836” Medal J-MT-21, First Steam Coinage Yellow Bronze Restrike. Mintage, diameter, weight, and edge: unavailable. The metal field remains copper. Prices are not republished.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Numismática | Notofilia',
    metaDescription:
      'Catálogo de moneda estadounidense: fichas Hard Times, la medalla de 1836, los dólares Morgan de 1883-CC, 1884-S y 1885-CC, el dólar de oro de 1856, los cuartos de águila de 1878, 1908 y 1912, y el 1 $ de 2026.',
    kicker: 'Estados Unidos · Numismática',
    title: 'Hard Times, Filadelfia, el Morgan y el dólar de 2026',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En Estados Unidos esa historia incluye tanto la ceca de Filadelfia, creada por el Coinage Act del 2 de abril de 1792, como el cobre privado que circuló cuando esa ceca no bastó.',
      'Esta vitrina abre con las fichas Hard Times de 1832–1844 —exonumia del Pánico de 1837—, con la medalla de la ceca fechada 1836 —primera acuñación a vapor, Julian MT-21—, con el dólar de oro de 1856 —tipo 3 de Longacre, cabeza grande, Filadelfia—, con el quarter eagle Liberty Head de 1878 —oro de 900 milésimas, coroneta de Christian Gobrecht—, con los cuartos de águila Indian Head de 1908 y 1912 —el mismo módulo, diseño incuso de Bela Lyon Pratt—, con los dólares Morgan de 1884-S, 1883-CC y 1885-CC —plata .900 de George T. Morgan, marca S de San Francisco y marca CC de Carson City— y con el módulo del dólar de latón-manganeso, el mismo cospel del Sacagawea y de los Presidential dollars, hasta el tipo del Semiquincentenario de 2026. El 1 $ con retrato de Donald J. Trump no es oro de 24 quilates ni una medalla privada. El oro federal de esta vitrina es de 900 milésimas. El HT-10A de 1834, el HT-16 de 1841, el HT-34 de 1837 y la store card HT-181 de John J. Adams no son centavos federales.',
      'La media águila, el águila de diez dólares, el doble águila, los centavos de la Mint y los medios dólares se añadirán a medida que se fotografíen, como en el papel de este país.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Seis capítulos, de izquierda a derecha: Hard Times —con vitrina propia—, las medallas de la ceca, la ceca de Filadelfia, el dólar Morgan, el dólar de latón-manganeso y el Semiquincentenario. Debajo, el HT-10A de 1834, el HT-16 de 1841, el HT-34 de 1837, la store card HT-181 de John J. Adams, la medalla de 1836, el dólar de oro de 1856, los cuartos de águila de 1878, 1908 y 1912, los dólares Morgan de 1884-S, 1883-CC y 1885-CC y el 1 $ de 1776–2026 documentados en esta colección.',
    viewChapter: 'Leer el capítulo',
    hardTimesChapterCta: 'Abrir la vitrina Hard Times',
    morganChapterCta: 'Abrir la emisión original',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.',
    notesLink: 'Estados Unidos · Del papel colonial a la Reserva Federal',
  },
  en: {
    metaTitle: 'United States · Numismatics | Notofilia',
    metaDescription:
      'Catalog of United States coinage: Hard Times tokens, the 1836 medal, the 1883-CC, 1884-S, and 1885-CC Morgan dollars, the 1856 gold dollar, the 1878, 1908, and 1912 quarter eagles, and the 2026 $1.',
    kicker: 'United States · Numismatics',
    title: 'Hard Times, Philadelphia, the Morgan, and the 2026 dollar',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In the United States that history includes both the Philadelphia mint, created by the Coinage Act of 2 April 1792, and the private copper that circulated when that mint was not enough.',
      'This case opens with Hard Times tokens of 1832–1844 — exonumia of the Panic of 1837 — with the Mint medal dated 1836 — First Steam Coinage, Julian MT-21 — with the 1856 gold dollar — Longacre’s Type 3, large head, Philadelphia — with the 1878 Liberty Head quarter eagle — 900-fine gold, Christian Gobrecht’s coronet — with the 1908 and 1912 Indian Head quarter eagles — the same module, Bela Lyon Pratt’s incuse design — with the 1884-S, 1883-CC, and 1885-CC Morgan dollars — George T. Morgan’s .900 silver, San Francisco S and Carson City CC — and with the manganese-brass dollar module, the same planchet as the Sacagawea and the Presidential dollars, through the 2026 Semiquincentennial type. The $1 with Donald J. Trump’s portrait is not 24-karat gold and not a private medal. The federal gold in this case is 900 fine. The 1834 HT-10A, the 1841 HT-16, the 1837 HT-34, and John J. Adams’s HT-181 store card are not federal cents.',
      'The half eagle, the ten-dollar eagle, the double eagle, Mint cents, and half dollars will be added as they are photographed, as in this country’s paper case.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Six chapters, left to right: Hard Times — with its own case — Mint medals, the Philadelphia mint, the Morgan dollar, the manganese-brass dollar, and the Semiquincentennial. Below, the 1834 HT-10A, the 1841 HT-16, the 1837 HT-34, the John J. Adams HT-181 store card, the 1836 medal, the 1856 gold dollar, the 1878, 1908, and 1912 quarter eagles, the 1884-S, 1883-CC, and 1885-CC Morgan dollars, and the 1776–2026 $1 documented in this collection.',
    viewChapter: 'Read the chapter',
    hardTimesChapterCta: 'Open the Hard Times case',
    morganChapterCta: 'Open the original run',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'This country’s paper money is documented in the notaphily case.',
    notesLink: 'United States · From colonial paper to the Federal Reserve',
  },
} as const;

export type UnitedStatesCoinId =
  | 'ht-10a-1834-jabali'
  | 'ht-16-1841-daniel-webster'
  | 'ht-34-1837-burro-tortuga'
  | 'ht-181-c1835-john-j-adams'
  | '1-dolar-trump-1776-2026'
  | '2-50-dolares-1878-liberty-head'
  | '2-50-dolares-1908-cabeza-de-indio'
  | '2-50-dolares-1912-indian-head'
  | '1-dolar-oro-1856-cabeza-grande'
  | '1-dolar-morgan-1884-s'
  | '1-dolar-morgan-1883-cc'
  | '1-dolar-morgan-1885-cc'
  | 'medalla-1836-primera-acunacion-vapor';

export type UnitedStatesCoin = {
  id: UnitedStatesCoinId;
  path: string;
  pathEn: string;
  chapterId: UnitedStatesCoinageChapterId;
  year: string;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  references: string;
  artform?: 'Coin' | 'Medal';
  aboutHeading?: LocalizedText;
  grade: LocalizedText;
  no_serial_reason: string;
  images: {
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

export const unitedStatesCoins: UnitedStatesCoin[] = [
  {
    id: 'ht-34-1837-burro-tortuga',
    path: '/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/',
    pathEn: '/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/',
    chapterId: 'hard-times',
    year: '1837',
    mint: {
      es: 'Acuñación privada; no se asigna ceca federal ni un fabricante nombrado',
      en: 'Private striking; no federal mint or named manufacturer is assigned',
    },
    denomination: {
      es: 'Ficha de módulo de large cent (sin valor facial)',
      en: 'Large-cent module token (no face value on the piece)',
    },
    composition: {
      es: 'Cobre (composición publicada del tipo HT-34, no un análisis de este ejemplar)',
      en: 'Copper (published composition of type HT-34, not an assay of this specimen)',
    },
    weight: {
      es: 'No pesado en esta ficha',
      en: 'Not weighed for this record',
    },
    diameter: {
      es: '≈ 28,5 mm (medida de tipo; este ejemplar no se midió)',
      en: '≈ 28.5 mm (type measurement; this specimen was not measured)',
    },
    edge: {
      es: 'Liso (tipo publicado; no hay foto aparte del canto)',
      en: 'Plain (published type; no separate edge photograph)',
    },
    references: 'HT-34 · Low-20 · DeWitt CE-1838-4 · W-11-540a · R-1',
    grade: {
      es: 'Sin encapsular. Leyendas y fecha legibles en las fotos; no es un grado numérico.',
      en: 'Unslabbed. Legends and date legible in the photographs; not a numerical grade.',
    },
    no_serial_reason:
      'Private Hard Times copper token: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-hard-times-token-ht-34-1837-composite.jpg',
      front: '/images/catalog/united-states/united-states-hard-times-token-ht-34-1837-front.jpg',
      back: '/images/catalog/united-states/united-states-hard-times-token-ht-34-1837-back.jpg',
      width: 1800,
      height: 900,
      faceWidth: 1024,
      faceHeight: 1024,
    },
    heading: {
      es: 'Ficha Hard Times de 1837 — HT-34 / Low-20',
      en: '1837 Hard Times token — HT-34 / Low-20',
    },
    title: {
      es: 'Ficha Hard Times de 1837 · HT-34 / Low-20',
      en: '1837 Hard Times token · HT-34 / Low-20',
    },
    kicker: {
      es: 'Estados Unidos · exonumia privada',
      en: 'United States · private exonumia',
    },
    lead: {
      es: 'Ficha de cobre HT-34 (Low-20), 1837: burro al galope y tortuga con caja SUB TREASURY. Ninguna cara lleva valor facial; el módulo es el de un large cent. R-1 en la escala Hard Times/Fuld, no Sheldon. Sin serial y sin encapsular.',
      en: 'Copper token HT-34 (Low-20), 1837: a galloping jackass and a tortoise with a SUB TREASURY chest. Neither face carries a denomination; the module is that of a large cent. R-1 on the Hard Times/Fuld scale, not Sheldon. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es una ficha Hard Times de cobre, módulo de large cent, acuñada en privado en 1837 para circular como menuda. El anverso —el burro— lleva I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR: ILLUSTRIOUS en el arco superior, PREDECESSOR en el inferior, I FOLLOW IN THE sobre el animal, STEPS bajo el cuerpo y OF MY bajo el suelo. En este ejemplar la oreja hacia atrás parece tocar la I de IN, detalle que Heritage usa para HT-34 frente a un HT-33 mal atribuido. Rosetas y orla de perlas. El reverso —la tortuga a la derecha— carga una caja con bandas, remaches y asa, SUB TREASURY en dos líneas; EXECUTIVE en el arco superior, FINANCIERING —así, no «financing»— en el inferior; 1837 bajo el suelo y FISCAL AGENT bajo la fecha. No es un centavo de la Mint ni el HT-33 (EXECUTIVE EXPERIMENT). Sin serial ni cápsula.',
      en: 'This piece is a copper Hard Times token, large-cent module, struck privately in 1837 to circulate as small change. The obverse — the donkey — reads I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR: ILLUSTRIOUS on the upper arc, PREDECESSOR on the lower, I FOLLOW IN THE above the animal, STEPS under the body, and OF MY below the ground. On this example the rearward ear appears to meet the I in IN, a relationship Heritage uses to distinguish HT-34 from a piece mislabeled HT-33. Rosettes and a beaded border. The reverse — the turtle facing right — carries a banded, riveted chest with a side handle, SUB TREASURY in two lines; EXECUTIVE on the upper arc, FINANCIERING — so spelled, not “financing” — on the lower; 1837 under the ground and FISCAL AGENT under the date. It is not a Mint cent and not HT-33 (EXECUTIVE EXPERIMENT). No serial and no holder.',
    },
    history: {
      es: 'La leyenda del anverso parodia la continuidad jacksoniana de Van Buren: al aceptar la nominación demócrata en mayo de 1835 prometió «tread generally in the footsteps of President Jackson»; el inaugural del 4 de marzo de 1837 siguió esa línea. El cobre no copia una frase literal: lee STEPS, no «footsteps». En septiembre de 1837 propuso el Independent Treasury —fondos federales en custodia del gobierno, no en un banco nacional ni en pet banks—; el Congreso no lo legisló hasta 1840. La ficha pertenece a esa controversia. Douglas Mudd (Money Museum, ANA) lee la tortuga y SUB TREASURY como sátira de la lentitud y de la inseguridad —según los críticos— de mover oro y plata entre subtesorerías; se informa esa acusación, no se adopta como juicio. Low-20; Rulau HT-34; DeWitt CE-1838-4 —el 1838 no cambia la fecha 1837—; Heritage añade W-11-540a. R-1 es rareza de tipo, no una tirada. PCGS no da mintage ni grabador. Sin procedencia registrada aquí.',
      en: 'The obverse legend parodies Van Buren’s Jacksonian continuity: accepting the Democratic nomination in May 1835 he pledged to “tread generally in the footsteps of President Jackson”; the 4 March 1837 inaugural followed that line. The copper is not a verbatim sentence: it reads STEPS, not “footsteps.” In September 1837 he proposed the Independent Treasury — federal funds in government custody, not in a national bank or pet banks — which Congress did not enact until 1840. The token belongs to that controversy. Douglas Mudd (ANA Money Museum) reads the tortoise and SUB TREASURY as a satire of the slowness and alleged insecurity of moving gold and silver among scattered sub-treasuries; that partisan charge is reported, not adopted. Low-20; Rulau HT-34; DeWitt CE-1838-4 — the 1838 does not change the 1837 date — and Heritage adds W-11-540a. R-1 is a type rarity, not a mintage. PCGS gives no mintage or engraver. No provenance is recorded here.',
    },
    obverseLegend: {
      es: 'I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR. ILLUSTRIOUS arriba; PREDECESSOR abajo; STEPS bajo el burro; la oreja trasera toca la I de IN.',
      en: 'I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR. ILLUSTRIOUS above; PREDECESSOR below; STEPS under the donkey; the rear ear meets the I in IN.',
    },
    reverseLegend: {
      es: 'EXECUTIVE (arco superior) · FINANCIERING (arco inferior, así escrito) · SUB TREASURY en la caja · 1837 · FISCAL AGENT.',
      en: 'EXECUTIVE (upper arc) · FINANCIERING (lower arc, so spelled) · SUB TREASURY on the chest · 1837 · FISCAL AGENT.',
    },
    frontCaption: {
      es: 'Anverso: burro al galope; I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR.',
      en: 'Obverse: galloping jackass; I FOLLOW IN THE STEPS OF MY ILLUSTRIOUS PREDECESSOR.',
    },
    backCaption: {
      es: 'Reverso: tortuga con caja SUB TREASURY; EXECUTIVE FINANCIERING 1837 FISCAL AGENT.',
      en: 'Reverse: tortoise with SUB TREASURY chest; EXECUTIVE FINANCIERING 1837 FISCAL AGENT.',
    },
    scarcity: {
      es: 'R-1 (Heritage / Rulau-Fuld): rareza de tipo, no una tirada. PCGS no publica mintage. El tono gris de las fotos no prueba plata: el tipo HT-34 se cataloga en cobre y no se asigna aquí un color de cospel. No se republican precios ni un censo de encapsulados.',
      en: 'R-1 (Heritage / Rulau-Fuld): a type rarity, not a mintage. PCGS publishes no mintage. The gray look of the photographs does not prove silver: type HT-34 is catalogued as copper, and no planchet-color designation is assigned here. No prices or slab census are republished.',
    },
    certification: {
      es: 'Sin cápsula. Las fotos muestran las leyendas principales y la fecha; no sustituyen un grado de mano. La atribución de tipo no es un certificado de autenticidad de este cobre. Sin serial.',
      en: 'No holder. The photographs show the principal legends and date; they do not replace an in-hand grade. Type attribution is not a certificate of authenticity for this copper. No serial.',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Hard_times_token',
        es: 'Wikipedia — Hard times token',
        en: 'Wikipedia — Hard times token',
        note: {
          es: 'Contexto del Pánico de 1837 y de la menuda privada. No se republican precios.',
          en: 'Context for the Panic of 1837 and private small change. Prices are not republished.',
        },
      },
      {
        href: 'https://coinweek.com/the-strange-story-of-hard-time-tokens/',
        es: 'CoinWeek — The Strange Story of Hard Time Tokens',
        en: 'CoinWeek — The Strange Story of Hard Time Tokens',
        note: {
          es: 'Sátira jacksoniana, iconografía y circulación como menuda.',
          en: 'Jacksonian satire, iconography, and circulation as small change.',
        },
      },
      {
        href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/',
        es: 'NGC — Hard Times Tokens (Rulau)',
        en: 'NGC — Hard Times Tokens (Rulau)',
        note: {
          es: 'HT de Rulau como atribución de catálogo; Low-20 es el cruce de esta variedad.',
          en: 'Rulau HT as catalog attribution; Low-20 is this variety’s cross-reference.',
        },
      },
      {
        href: 'https://www.money.org/tales-from-the-vault-hard-times-tokens/',
        es: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 sep. 2015)',
        en: 'Douglas Mudd — Tales from the Vault: Hard Times Tokens (ANA, 6 Sep. 2015)',
        note: {
          es: 'Serie 1832–1844; escasez de menuda anterior al pánico; tortuga y especie entre subtesorerías. No se republica un precio.',
          en: '1832–1844 series; small-change shortage before the panic; tortoise and specie among sub-treasuries. No price is republished.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Independent_Treasury',
        es: 'Wikipedia — Independent Treasury',
        en: 'Wikipedia — Independent Treasury',
        note: {
          es: 'Propuesta de septiembre de 1837; Independent Treasury Act del 4 de julio de 1840.',
          en: 'September 1837 proposal; Independent Treasury Act of 4 July 1840.',
        },
      },
      {
        href: 'https://millercenter.org/president/vanburen/domestic-affairs',
        es: 'Miller Center — Martin Van Buren: Domestic Affairs',
        en: 'Miller Center — Martin Van Buren: Domestic Affairs',
        note: {
          es: 'Nominación de mayo de 1835 («footsteps» de Jackson); sesión de septiembre de 1837 e Independent Treasury de 1840.',
          en: 'May 1835 nomination (“footsteps” of Jackson); September 1837 session and Independent Treasury of 1840.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1837-ae-token-ht-34-illustrious-predecessor-bn/77372',
        es: 'PCGS CoinFacts — 1837 HT-34 Illustrious Predecessor',
        en: 'PCGS CoinFacts — 1837 HT-34 Illustrious Predecessor',
        note: {
          es: 'Tipo de cobre; sin tirada ni grabador publicados. No se republican precios.',
          en: 'Copper type; no published mintage or engraver. Prices are not republished.',
        },
      },
      {
        href: 'https://coins.ha.com/itm/hard-times-tokens/1837-token-illustrious-predecessor-executive-financiering-low-20-dewitt-ce-1838-4-ht-34-w-11-540a-r1-au58-ngc-copper-plain-edge-/a/60161-93126.s',
        es: 'Heritage — lote 60161-93126 (comparable de tipo)',
        en: 'Heritage — lot 60161-93126 (type comparable)',
        note: {
          es: 'HT-34, Low-20, DeWitt CE-1838-4, W-11-540a; cobre, canto liso, fecha 1837. No es esta pieza; no se republica el martillo.',
          en: 'HT-34, Low-20, DeWitt CE-1838-4, W-11-540a; copper, plain edge, dated 1837. Not this holding; the hammer is not republished.',
        },
      },
    ],
  },
  {
    id: 'ht-181-c1835-john-j-adams',
    path: '/coleccion/estados-unidos-numismatica/ht-181-c1835-jabali-cerdas/',
    pathEn: '/en/collection/united-states-numismatics/ht-181-circa-1835-boar-bristles/',
    chapterId: 'hard-times',
    year: 'c. 1835',
    mint: {
      es: 'Acuñación privada; no se asigna ceca federal ni un grabador nombrado',
      en: 'Private striking; no federal mint or named engraver is assigned',
    },
    denomination: {
      es: 'Ficha publicitaria (sin valor facial)',
      en: 'Advertising token (no face value on the piece)',
    },
    composition: {
      es: 'Cobre',
      en: 'Copper',
    },
    weight: {
      es: '10,5 g (peso de tipo en Numista; este ejemplar no se pesó)',
      en: '10.5 g (Numista type weight; this specimen was not weighed)',
    },
    diameter: {
      es: '28,5 mm (medida de tipo; este ejemplar no se midió)',
      en: '28.5 mm (type measurement; this specimen was not measured)',
    },
    edge: {
      es: 'Liso en el cobre ordinario HT-181; las fotos no muestran el canto',
      en: 'Plain on ordinary copper HT-181; the photographs do not show the edge',
    },
    references: 'HT-181 · Low-300 · W-MA-320-10a · R-1 · Numista N#125438',
    grade: {
      es: 'Sin encapsular. Desgaste en el jabalí, lema central debilitado y marcas dispersas. No es un grado numérico.',
      en: 'Unslabbed. Wear on the boar, a weakened central motto, and scattered marks. Not a numerical grade.',
    },
    no_serial_reason:
      'Undated Hard Times merchant token: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-john-j-adams-token-ht-181-c1835-composite.jpg',
      front: '/images/catalog/united-states/united-states-john-j-adams-token-ht-181-c1835-front.jpg',
      back: '/images/catalog/united-states/united-states-john-j-adams-token-ht-181-c1835-back.jpg',
      width: 1800,
      height: 599,
      faceWidth: 1024,
      faceHeight: 682,
    },
    heading: {
      es: 'Ficha Hard Times, c. 1835 — HT-181 / Low-300',
      en: 'Hard Times token, c. 1835 — HT-181 / Low-300',
    },
    title: {
      es: 'Ficha Hard Times, c. 1835 · HT-181 / Low-300',
      en: 'Hard Times token, c. 1835 · HT-181 / Low-300',
    },
    kicker: {
      es: 'Estados Unidos · exonumia privada',
      en: 'United States · private exonumia',
    },
    lead: {
      es: 'Ficha publicitaria sin fecha de John J. Adams, fabricante de cepillos en Taunton (Massachusetts), con oficina en Boston. Se atribuye hacia 1835. El anverso lleva un jabalí con «Cash for Bristles». Cobre HT-181 (Low-300). Sin serial y sin encapsular.',
      en: 'Undated advertising token of John J. Adams, a brush manufacturer in Taunton, Massachusetts, with an office in Boston. It is dated circa 1835 by convention. The obverse carries a boar with “Cash for Bristles.” Copper HT-181 (Low-300). No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es una store card Hard Times, ficha de comercio de John J. Adams, en el módulo de un large cent. Ninguna cara lleva valor facial ni fecha. El anverso, en el orden de Numista, es el jabalí: corre hacia la izquierda sobre una línea de suelo. El cuerpo lleva «Cash for / Bristles.»; arriba, OFFICE / IN BOSTON; abajo, No. 12 / ELM ST. El arco superior lee ALL KINDS OF BRUSHES y el inferior MADE TO ORDER. En este ejemplar el lema del animal está gastado; «Cash for Bristles» es la leyenda del tipo. Orla dentada en las dos caras. El reverso es solo texto: JOHN J. ADAMS No. 11 MAIN ST. y TAUNTON MASS. en el arco; en el centro, MANUFACTURER / OF EVERY / DESCRIPTION OF / BRUSHES, / WHOLESALE / & RETAIL. Este ejemplar es cobre y se cataloga como HT-181. El latón es HT-181A y la plata HT-181B. Sin serial ni cápsula.',
      en: 'This piece is a Hard Times store card, a trade token of John J. Adams, on the large-cent module. Neither face carries a face value or a date. The obverse, in Numista’s order, is the boar: it runs left above a ground line. The body reads “Cash for / Bristles.”; above, OFFICE / IN BOSTON; below, No. 12 / ELM ST. The upper arc reads ALL KINDS OF BRUSHES and the lower MADE TO ORDER. On this example the motto on the animal is worn; “Cash for Bristles” is the type legend. A toothed border on both faces. The reverse is text only: JOHN J. ADAMS No. 11 MAIN ST. and TAUNTON MASS. on the arc; in the center, MANUFACTURER / OF EVERY / DESCRIPTION OF / BRUSHES, / WHOLESALE / & RETAIL. This example is copper and is catalogued as HT-181. Brass is HT-181A and silver is HT-181B. No serial and no holder.',
    },
    history: {
      es: 'Adams fabricaba cepillos en el n.º 11 de Main Street, Taunton, y tenía oficina en el n.º 12 de Elm Street, Boston. El jabalí anuncia la materia prima: la leyenda ofrece dinero por cerdas, y el reverso vende los cepillos al por mayor, al por menor y por encargo. Low la numeró 300, entre las store cards; Rulau le dio HT-181; el Guide Book de Bowers, W-MA-320-10a. La fecha no está en el cospel. PCGS y la colección Fisher sitúan el tipo en 1835 entre paréntesis, en cobre de 28,5 mm. PCGS no publica tirada ni grabador. Numista N#125438 da 10,5 g como peso de tipo. R-1 describe la variedad de cobre, no un censo de este ejemplar. Existe una pieza plateada fuera de la lista de Rulau; no se atribuye aquí. Sin procedencia en esta ficha.',
      en: 'Adams made brushes at No. 11 Main Street, Taunton, and kept an office at No. 12 Elm Street, Boston. The boar advertises the raw material: the legend offers cash for bristles, and the reverse sells the brushes wholesale, retail, and to order. Low numbered it 300, among the store cards; Rulau assigned HT-181; Bowers’s Guide Book, W-MA-320-10a. The date is not on the planchet. PCGS and the Fisher collection place the type in 1835 in parentheses, as copper of 28.5 mm. PCGS publishes no mintage or engraver. Numista N#125438 gives 10.5 g as a type weight. R-1 describes the copper variety, not a census of this example. A silvered piece is recorded outside Rulau’s list; it is not assigned here. No provenance is recorded on this page.',
    },
    obverseLegend: {
      es: 'ALL KINDS OF BRUSHES · MADE TO ORDER · OFFICE / IN BOSTON · «Cash for Bristles.» sobre el jabalí · No. 12 / ELM ST.',
      en: 'ALL KINDS OF BRUSHES · MADE TO ORDER · OFFICE / IN BOSTON · “Cash for Bristles.” on the boar · No. 12 / ELM ST.',
    },
    reverseLegend: {
      es: 'JOHN J. ADAMS No. 11 MAIN ST. · TAUNTON MASS. · MANUFACTURER OF EVERY DESCRIPTION OF BRUSHES, WHOLESALE & RETAIL.',
      en: 'JOHN J. ADAMS No. 11 MAIN ST. · TAUNTON MASS. · MANUFACTURER OF EVERY DESCRIPTION OF BRUSHES, WHOLESALE & RETAIL.',
    },
    frontCaption: {
      es: 'Anverso: jabalí hacia la izquierda; «Cash for Bristles»; oficina en Boston, n.º 12 de Elm Street.',
      en: 'Obverse: boar facing left; “Cash for Bristles”; Boston office, No. 12 Elm Street.',
    },
    backCaption: {
      es: 'Reverso: John J. Adams, n.º 11 de Main Street, Taunton; cepillos al por mayor y al por menor.',
      en: 'Reverse: John J. Adams, No. 11 Main Street, Taunton; brushes wholesale and retail.',
    },
    scarcity: {
      es: 'R-1 (cobre HT-181): rareza de tipo, no una tirada. PCGS cataloga el metal como cobre. El latón es HT-181A y la plata HT-181B, números distintos. No se republican precios ni un censo de encapsulados.',
      en: 'R-1 (copper HT-181): a type rarity, not a mintage. PCGS catalogues the metal as copper. Brass is HT-181A and silver is HT-181B, separate numbers. No prices or slab census are republished.',
    },
    certification: {
      es: 'Sin cápsula y sin grado numérico. Las fotos muestran leyendas exteriores legibles, desgaste en el jabalí y marcas dispersas. No certifican autenticidad ni una limpieza previa. Sin serial.',
      en: 'No holder and no numerical grade. The photographs show readable outer legends, wear on the boar, and scattered marks. They do not certify authenticity or prior cleaning. No serial.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1835-token-ht-181-john-j-adams-ma-bn/77447',
        es: 'PCGS CoinFacts — (1835) HT-181 John J. Adams',
        en: 'PCGS CoinFacts — (1835) HT-181 John J. Adams',
        note: {
          es: 'Metal: cobre. Diámetro de referencia 28,5 mm. Sin tirada ni grabador publicados. No se republican precios.',
          en: 'Metal: copper. Reference diameter 28.5 mm. No published mintage or engraver. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1835-token-ht-181a-ma/77445',
        es: 'PCGS CoinFacts — (1835) HT-181A',
        en: 'PCGS CoinFacts — (1835) HT-181A',
        note: {
          es: 'El latón es HT-181A, un número distinto del cobre HT-181. No se atribuye a este ejemplar.',
          en: 'Brass is HT-181A, a different number from copper HT-181. It is not assigned to this example.',
        },
      },
      {
        href: 'https://en.numista.com/125438',
        es: 'Numista — N#125438, Hard Times Token, Taunton',
        en: 'Numista — N#125438, Hard Times Token, Taunton',
        note: {
          es: 'N#125438. Peso de tipo 10,5 g. El anverso es el jabalí. No se republican precios.',
          en: 'N#125438. Type weight 10.5 g. The obverse is the boar. Prices are not republished.',
        },
      },
      {
        href: 'http://www.hardtimestokens.com/HT181HT200.html',
        es: 'Alan S. Fisher — Hard Times Token Collection, HT-181',
        en: 'Alan S. Fisher — Hard Times Token Collection, HT-181',
        note: {
          es: 'Cobre, 28,5 mm, (1835), HT-181, Low-300, R-1, jabalí. Anota además una pieza plateada no listada por Rulau. No es este ejemplar; no se republica un precio.',
          en: 'Copper, 28.5 mm, (1835), HT-181, Low-300, R-1, wild boar. It also notes a silvered piece unlisted by Rulau. Not this example; no price is republished.',
        },
      },
      {
        href: 'https://coins.ha.com/itm/hard-times-tokens/-1835-token-john-j-adams-taunton-mass-low-300-ht-181-w-ma-320-10a-r1-ms66-brown-ngc-copper-plain-edge-28-mm/a/60185-91189.s',
        es: 'Heritage — lote 60185-91189 (comparable de tipo)',
        en: 'Heritage — lot 60185-91189 (type comparable)',
        note: {
          es: 'Low-300, HT-181, W-MA-320-10a, R-1; cobre, canto liso. El título del lote dice 28 mm. No es esta pieza; no se republica el martillo.',
          en: 'Low-300, HT-181, W-MA-320-10a, R-1; copper, plain edge. The lot title says 28 mm. Not this holding; the hammer is not republished.',
        },
      },
    ],
  },
  {
    id: 'ht-10a-1834-jabali',
    path: '/coleccion/estados-unidos-numismatica/ht-10a-1834-jabali/',
    pathEn: '/en/collection/united-states-numismatics/ht-10a-1834-running-boar/',
    chapterId: 'hard-times',
    year: '1834',
    mint: {
      es: 'Acuñación privada; no se asigna ceca federal ni un fabricante nombrado',
      en: 'Private striking; no federal mint or named manufacturer is assigned',
    },
    denomination: {
      es: 'Ficha política (sin valor facial)',
      en: 'Political token (no face value on the piece)',
    },
    composition: {
      es: 'Latón plateado (metal publicado del HT-10A; este ejemplar no se ensayó)',
      en: 'Silvered brass (published metal of type HT-10A; this specimen was not assayed)',
    },
    weight: {
      es: 'No pesado en esta ficha',
      en: 'Not weighed for this record',
    },
    diameter: {
      es: '28,5 mm (medida de tipo en Fisher; este ejemplar no se midió)',
      en: '28.5 mm (Fisher type measurement; this specimen was not measured)',
    },
    edge: {
      es: 'Liso en el tipo publicado; no hay foto del canto',
      en: 'Plain on the published type; no edge photograph',
    },
    references: 'HT-10A · Low-9B · DeWitt CE-1834-10 · W-10-210b · PCGS 77621',
    grade: {
      es: 'Sin encapsular. Detalle de diseño fuerte, rayas finas y tono gris desigual. No es un grado numérico.',
      en: 'Unslabbed. Strong design detail, fine hairlines, and uneven gray toning. Not a numerical grade.',
    },
    no_serial_reason:
      'Private 1834 Hard Times political token: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-hard-times-token-ht-10a-1834-composite.jpg',
      front: '/images/catalog/united-states/united-states-hard-times-token-ht-10a-1834-front.jpg',
      back: '/images/catalog/united-states/united-states-hard-times-token-ht-10a-1834-back.jpg',
      width: 1800,
      height: 900,
      faceWidth: 1024,
      faceHeight: 1024,
    },
    heading: {
      es: 'Ficha Hard Times de 1834 — HT-10A / Low-9B',
      en: '1834 Hard Times token — HT-10A / Low-9B',
    },
    title: {
      es: 'Ficha Hard Times de 1834 · HT-10A / Low-9B',
      en: '1834 Hard Times token · HT-10A / Low-9B',
    },
    kicker: {
      es: 'Estados Unidos · exonumia privada',
      en: 'United States · private exonumia',
    },
    lead: {
      es: 'Ficha política de 1834: jabalí al galope y busto militar de Andrew Jackson. Se cataloga como HT-10A (Low-9B), latón plateado, por el retrato de hombros estrechos y la superficie gris plateada. Sin valor facial, sin serial y sin encapsular. El peso, el diámetro y el canto de este ejemplar no se midieron.',
      en: 'Political token of 1834: a running boar and a military bust of Andrew Jackson. It is catalogued as HT-10A (Low-9B), silvered brass, from the narrow-shouldered portrait and the silver-gray surface. No face value, no serial, and unslabbed. Weight, diameter, and edge of this example were not measured.',
    },
    description: {
      es: 'Esta pieza es una ficha política Hard Times de 1834, módulo de large cent, acuñada en privado. No lleva valor facial. El anverso catalogado es el jabalí, que corre hacia la izquierda sobre una línea de suelo. El arco lee PERISH CREDIT a la izquierda, PERISH arriba y COMMERCE a la derecha. Sobre el animal, MY VICTORY; en el cuerpo, MY / THIRD HEAT; debajo, DOWN WITH THE / BANK y la fecha 1834. Orla de perlas. El hocico apunta hacia CREDIT, el detalle que Fisher usa para el cuño de hombros estrechos de HT-10 y HT-10A. El reverso es un busto militar pequeño de Andrew Jackson, con MY en el pecho. El arco lee MY SUBSTITUTE FOR THE U.S. BANK. Debajo: EXPERIMENT, MY, CURRENCY, MY, GLORY. Dos rosetas flanquean el busto. La superficie de las fotos es gris plateada, el aspecto publicado del latón plateado HT-10A. El cobre de este diseño es HT-9 y el latón sin platear, en cospel grueso, es HT-10. Este ejemplar no se pesó, no se midió y no tiene foto del canto: la subvariedad descansa en el diseño y en el color del metal, no en un ensayo. Sin serial ni cápsula.',
      en: 'This piece is an 1834 political Hard Times token, large-cent module, struck privately. It carries no face value. The catalogued obverse is the boar, running left above a ground line. The arc reads PERISH CREDIT at left, PERISH above, and COMMERCE at right. Above the animal, MY VICTORY; on the body, MY / THIRD HEAT; below, DOWN WITH THE / BANK and the date 1834. A beaded border. The snout points toward CREDIT, the marker Fisher uses for the narrow-shouldered die of HT-10 and HT-10A. The reverse is a small military bust of Andrew Jackson, with MY on the chest. The arc reads MY SUBSTITUTE FOR THE U.S. BANK. Below: EXPERIMENT, MY, CURRENCY, MY, GLORY. Two rosettes flank the bust. The surface in the photographs is silver-gray, the published look of silvered-brass HT-10A. Copper of this design is HT-9, and unsilvered brass on a thick planchet is HT-10. This example was not weighed or measured, and there is no edge photograph: the subvariety rests on the design and the color of the metal, not on an assay. No serial and no holder.',
    },
    history: {
      es: 'La ficha pertenece a la Bank War. El MY repetido caricaturiza la política bancaria y monetaria de Jackson como un programa personal. PERISH CREDIT y PERISH COMMERCE, con DOWN WITH THE BANK, formulan el cargo de que desmontar el Second Bank of the United States arruinaría el crédito y el comercio. No es moneda de la United States Mint. Fisher registra el HT-10A como Low-9B, latón plateado, 28,5 mm, cospel delgado, hocico hacia la C de CREDIT y busto de hombros estrechos; el HT-10 es el mismo retrato en latón y cospel grueso. DeWitt CE-1834-10, Wright W-10-210b y el número PCGS 77621 son los cruces de catálogo de esa variedad plateada. Fisher la marca R-3; listados recientes de Heritage han usado R-2. No hay tirada publicada. El cospel no lleva firma de grabador, y no se le asigna fabricante. Las fotos muestran detalle de diseño fuerte, rayas finas y un tono gris desigual; no se asigna grado numérico ni se afirma que el plateado sea el original. Sin procedencia registrada aquí.',
      en: 'The token belongs to the Bank War. The repeated MY caricatures Jackson’s banking and currency policy as a personal program. PERISH CREDIT and PERISH COMMERCE, with DOWN WITH THE BANK, state the charge that dismantling the Second Bank of the United States would ruin credit and commerce. It is not United States Mint coin. Fisher records HT-10A as Low-9B, silvered brass, 28.5 mm, a thin planchet, snout toward the C of CREDIT, and a narrow-shouldered bust; HT-10 is the same portrait in brass on a thick planchet. DeWitt CE-1834-10, Wright W-10-210b, and PCGS number 77621 are the catalog cross-references of that silvered variety. Fisher marks it R-3; recent Heritage listings have used R-2. No mintage is published. The planchet carries no engraver’s signature, and no manufacturer is assigned. The photographs show strong design detail, fine hairlines, and uneven gray toning; no numerical grade is assigned, and the silvering is not asserted to be original. No provenance is recorded here.',
    },
    obverseLegend: {
      es: 'PERISH CREDIT · PERISH · COMMERCE · MY VICTORY · MY / THIRD HEAT sobre el jabalí · DOWN WITH THE / BANK · 1834.',
      en: 'PERISH CREDIT · PERISH · COMMERCE · MY VICTORY · MY / THIRD HEAT on the boar · DOWN WITH THE / BANK · 1834.',
    },
    reverseLegend: {
      es: 'MY SUBSTITUTE FOR THE U.S. BANK · EXPERIMENT · MY · CURRENCY · MY · GLORY. MY en el pecho del busto.',
      en: 'MY SUBSTITUTE FOR THE U.S. BANK · EXPERIMENT · MY · CURRENCY · MY · GLORY. MY on the bust’s chest.',
    },
    frontCaption: {
      es: 'Anverso: jabalí hacia la izquierda; PERISH CREDIT, PERISH COMMERCE; MY THIRD HEAT; DOWN WITH THE BANK; 1834.',
      en: 'Obverse: boar facing left; PERISH CREDIT, PERISH COMMERCE; MY THIRD HEAT; DOWN WITH THE BANK; 1834.',
    },
    backCaption: {
      es: 'Reverso: busto de Andrew Jackson; MY SUBSTITUTE FOR THE U.S. BANK; EXPERIMENT MY CURRENCY MY GLORY.',
      en: 'Reverse: bust of Andrew Jackson; MY SUBSTITUTE FOR THE U.S. BANK; EXPERIMENT MY CURRENCY MY GLORY.',
    },
    scarcity: {
      es: 'R-3 en la ficha de Fisher; listados recientes de Heritage han usado R-2. Es rareza de tipo, no una tirada. No hay mintage publicado. El plateado se lee en las fotos y no se ensayó. No se republican precios ni un censo de encapsulados.',
      en: 'R-3 on Fisher’s record; recent Heritage listings have used R-2. It is a type rarity, not a mintage. No mintage is published. The silvering is read from the photographs and was not assayed. No prices or slab census are republished.',
    },
    certification: {
      es: 'Sin cápsula y sin grado numérico. Las fotos muestran las leyendas, la fecha, rayas finas y un tono gris desigual. No certifican que el plateado sea el original ni sustituyen peso, diámetro o canto. Sin serial.',
      en: 'No holder and no numerical grade. The photographs show the legends, the date, fine hairlines, and uneven gray toning. They do not certify that the silvering is original, and they do not replace weight, diameter, or edge. No serial.',
    },
    sources: [
      {
        href: 'http://www.hardtimestokens.com/HT1HT20.html',
        es: 'Alan S. Fisher — Hard Times Token Collection, HT-10 y HT-10A',
        en: 'Alan S. Fisher — Hard Times Token Collection, HT-10 and HT-10A',
        note: {
          es: 'HT-10A, Low-9B, latón plateado, 28,5 mm, cospel delgado, hocico hacia CREDIT, hombros estrechos, R-3. El HT-10 es latón en cospel grueso. No es este ejemplar; no se republica un precio.',
          en: 'HT-10A, Low-9B, silvered brass, 28.5 mm, thin planchet, snout toward CREDIT, narrow shoulders, R-3. HT-10 is brass on a thick planchet. Not this example; no price is republished.',
        },
      },
      {
        href: 'https://www.ngccoin.com/coin-explorer/united-states/tokens-and-medals/hard-times-tokens-rulau/854028/1834-ht-10a-running-boar-ms/',
        es: 'NGC — 1834 HT-10A Running Boar',
        en: 'NGC — 1834 HT-10A Running Boar',
        note: {
          es: 'Número de catálogo HT-10A en la serie Rulau. No se republican precios ni un censo.',
          en: 'Catalog number HT-10A in the Rulau series. No prices or census are republished.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Bank_War',
        es: 'Wikipedia — Bank War',
        en: 'Wikipedia — Bank War',
        note: {
          es: 'Contexto del veto de Jackson al Second Bank of the United States. No se republican precios.',
          en: 'Context for Jackson’s veto of the Second Bank of the United States. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: 'ht-16-1841-daniel-webster',
    path: '/coleccion/estados-unidos-numismatica/ht-16-1841-daniel-webster/',
    pathEn: '/en/collection/united-states-numismatics/ht-16-1841-daniel-webster/',
    chapterId: 'hard-times',
    year: '1841',
    mint: {
      es: 'Acuñación privada. El Smithsonian atribuye su ejemplar del tipo a Scovill, de Waterbury; este cospel no muestra firma',
      en: 'Private striking. The Smithsonian attributes its example of the type to Scovill of Waterbury; this planchet shows no signature',
    },
    denomination: {
      es: 'Ficha política de módulo de large cent (sin valor facial)',
      en: 'Political token on the large-cent module (no face value on the piece)',
    },
    composition: {
      es: 'Cobre (metal publicado del HT-16; este ejemplar no se ensayó)',
      en: 'Copper (published metal of type HT-16; this specimen was not assayed)',
    },
    weight: {
      es: '10,2 g (peso de tipo en Numista; este ejemplar no se pesó)',
      en: '10.2 g (Numista type weight; this specimen was not weighed)',
    },
    diameter: {
      es: '≈ 28 mm (Numista); el ejemplar del Smithsonian mide unos 28,6 mm. Este ejemplar no se midió',
      en: '≈ 28 mm (Numista); the Smithsonian example measures about 28.6 mm. This specimen was not measured',
    },
    edge: {
      es: 'Liso en el HT-16 ordinario. El canto no está fotografiado, así que no se asigna el HT-16A estriado',
      en: 'Plain on ordinary HT-16. The edge is not photographed, so reeded HT-16A is not assigned',
    },
    references: 'HT-16 · Low-58 · DeWitt CE-1838-8 · Wright 11-280a · R-1 · Numista N#121196 · PCGS 77215',
    grade: {
      es: 'Sin encapsular. Jarcia, leyendas, estrellas y dentículos legibles en las fotos. No es un grado numérico.',
      en: 'Unslabbed. Rigging, legends, stars, and denticles are legible in the photographs. Not a numerical grade.',
    },
    no_serial_reason:
      'Private 1841 Hard Times political token: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-hard-times-token-ht-16-1841-composite.jpg',
      front: '/images/catalog/united-states/united-states-hard-times-token-ht-16-1841-front.jpg',
      back: '/images/catalog/united-states/united-states-hard-times-token-ht-16-1841-back.jpg',
      width: 1800,
      height: 900,
      faceWidth: 1024,
      faceHeight: 1024,
    },
    heading: {
      es: 'Ficha Hard Times de 1841 — HT-16 / Low-58',
      en: '1841 Hard Times token — HT-16 / Low-58',
    },
    title: {
      es: 'Ficha Hard Times de 1841 · HT-16 / Low-58',
      en: '1841 Hard Times token · HT-16 / Low-58',
    },
    kicker: {
      es: 'Estados Unidos · exonumia privada',
      en: 'United States · private exonumia',
    },
    lead: {
      es: 'Ficha política de 1841: el navío CONSTITUTION y MILLIONS FOR DEFENCE / NOT ONE CENT FOR TRIBUTE. El diseño se cataloga como HT-16 (Low-58), cobre de canto liso. Este ejemplar no tiene foto del canto, así que no se le asigna el HT-16A estriado. Sin valor facial, sin serial y sin encapsular. El peso, el diámetro y el metal de esta pieza no se midieron.',
      en: 'Political token of 1841: the ship CONSTITUTION and MILLIONS FOR DEFENCE / NOT ONE CENT FOR TRIBUTE. The design is catalogued as HT-16 (Low-58), plain-edge copper. This example has no edge photograph, so reeded HT-16A is not assigned. No face value, no serial, and unslabbed. Weight, diameter, and metal of this piece were not measured.',
    },
    description: {
      es: 'Esta pieza es una ficha política Hard Times de 1841, módulo de large cent, acuñada en privado. No es un centavo de la United States Mint y no lleva valor facial. El anverso es un velero de tres palos en navegación, rotulado CONSTITUTION. El arco lee WEBSTER arriba, CREDIT a la izquierda, CURRENT a la derecha y 1841 abajo, con estrellas entre los tramos. Orla dentada. El reverso lee MILLIONS FOR DEFENCE en el arco y, al centro, NOT / ONE CENT / FOR / TRIBUTE, entre estrellas, dos hojas y una línea ondulada. El tipo publicado es cobre, unos 28 mm y canto liso: eso es HT-16. El canto estriado es HT-16A, un número distinto. Las fotos no muestran el canto. La superficie se ve gris; no se ensayó, y no se le asigna color BN, RB o RD. Fisher anota que el anverso comparte cuño con Low-60, en un estado un poco posterior. El reverso de este ejemplar es el lema NOT ONE CENT, no el Experiment naufragado de esa otra combinación. Sin serial ni cápsula.',
      en: 'This piece is an 1841 political Hard Times token, large-cent module, struck privately. It is not a United States Mint cent and it carries no face value. The obverse is a three-masted ship under way, labeled CONSTITUTION. The arc reads WEBSTER above, CREDIT at left, CURRENT at right, and 1841 below, with stars between the segments. A denticled border. The reverse reads MILLIONS FOR DEFENCE on the arc and, at center, NOT / ONE CENT / FOR / TRIBUTE, among stars, two leaves, and a wavy line. The published type is copper, about 28 mm, plain edge: that is HT-16. The reeded edge is HT-16A, a different number. The photographs do not show the edge. The surface looks gray; it was not assayed, and no BN, RB, or RD color is assigned. Fisher notes that the obverse shares a die with Low-60, in a slightly later state. This example’s reverse is the NOT ONE CENT motto, not the wrecked Experiment of that other pairing. No serial and no holder.',
    },
    history: {
      es: 'Daniel Webster, senador whig, defendía el crédito y un banco nacional frente al hard money jacksoniano. La ficha de 1841 junta su nombre, CREDIT CURRENT y el navío Constitution, la nave del Estado en orden. El reverso adapta el lema del asunto XYZ (1797–1798): millions for defense, but not one cent for tribute. En el módulo de un large cent, NOT ONE CENT evita estampar ONE CENT. Low la numeró 58; Rulau, HT-16; DeWitt, CE-1838-8 —el 1838 no cambia la fecha 1841—; Numista da Wright 11-280a y N#121196. Ese 58 es el número de variedad de Lyman H. Low, no un serial: el cospel no lleva número de serie, y los Low vecinos son otras variedades, no un rango impreso en esta pieza. Fisher la describe en cobre, 28 mm, canto liso, R-1. PCGS n.º 77215 es el listado BN de ese cobre; el listado RB es el 77855. En ambos la tirada figura como N/A, y aquí no se publica un número de piezas. El Smithsonian registra su ejemplar del tipo (1981.0296.0788) como cobre de unos 28,6 mm, hecho por Scovill Manufacturing Company en Waterbury, Connecticut. Ese dato es del objeto del museo, no una marca leída en este cospel. R-1 es rareza de tipo del canto liso, no un censo de este ejemplar. Sin procedencia registrada aquí.',
      en: 'Daniel Webster, a Whig senator, argued for credit and a national bank against Jacksonian hard money. The 1841 token joins his name, CREDIT CURRENT, and the ship Constitution, the ship of state in good order. The reverse adapts the XYZ Affair motto (1797–1798): millions for defense, but not one cent for tribute. On a large-cent module, NOT ONE CENT avoids stamping ONE CENT. Low numbered it 58; Rulau, HT-16; DeWitt, CE-1838-8 — the 1838 does not change the 1841 date — and Numista gives Wright 11-280a and N#121196. That 58 is Lyman H. Low’s variety number, not a serial: the planchet carries no serial number, and neighboring Low numbers are other varieties, not a range printed on this piece. Fisher describes it as copper, 28 mm, plain edge, R-1. PCGS number 77215 is the BN listing of that copper; the RB listing is 77855. Both show mintage as N/A, and no quantity struck is published here. The Smithsonian records its example of the type (1981.0296.0788) as copper of about 28.6 mm, made by Scovill Manufacturing Company of Waterbury, Connecticut. That fact belongs to the museum object, not to a mark read on this planchet. R-1 is a type rarity of the plain edge, not a census of this example. No provenance is recorded here.',
    },
    obverseLegend: {
      es: 'WEBSTER · CREDIT · 1841 · CURRENT. El velero lleva CONSTITUTION.',
      en: 'WEBSTER · CREDIT · 1841 · CURRENT. The ship is labeled CONSTITUTION.',
    },
    reverseLegend: {
      es: 'MILLIONS FOR DEFENCE en el arco · NOT / ONE CENT / FOR / TRIBUTE al centro.',
      en: 'MILLIONS FOR DEFENCE on the arc · NOT / ONE CENT / FOR / TRIBUTE at center.',
    },
    frontCaption: {
      es: 'Anverso: velero CONSTITUTION; WEBSTER CREDIT 1841 CURRENT.',
      en: 'Obverse: ship CONSTITUTION; WEBSTER CREDIT 1841 CURRENT.',
    },
    backCaption: {
      es: 'Reverso: MILLIONS FOR DEFENCE; NOT ONE CENT FOR TRIBUTE.',
      en: 'Reverse: MILLIONS FOR DEFENCE; NOT ONE CENT FOR TRIBUTE.',
    },
    scarcity: {
      es: 'R-1 (Fisher, canto liso HT-16): rareza de tipo, no una tirada. PCGS publica la tirada como N/A. El tono gris de las fotos no prueba plata: el tipo HT-16 se cataloga en cobre y no se asigna aquí un color de cospel. El HT-16A estriado queda fuera porque el canto no está fotografiado. No se republican precios ni un censo de encapsulados.',
      en: 'R-1 (Fisher, plain-edge HT-16): a type rarity, not a mintage. PCGS publishes the mintage as N/A. The gray look of the photographs does not prove silver: type HT-16 is catalogued as copper, and no planchet-color designation is assigned here. Reeded HT-16A is left out because the edge is not photographed. No prices or slab census are republished.',
    },
    certification: {
      es: 'Sin cápsula y sin grado numérico. Las fotos muestran la jarcia, las leyendas, las estrellas y los dentículos. No sustituyen peso, diámetro, canto ni un dictamen de autenticidad. La atribución de tipo no es un certificado de este ejemplar. Sin serial.',
      en: 'No holder and no numerical grade. The photographs show the rigging, legends, stars, and denticles. They do not replace weight, diameter, edge, or an authenticity opinion. Type attribution is not a certificate for this example. No serial.',
    },
    sources: [
      {
        href: 'https://en.numista.com/121196',
        es: 'Numista — N#121196, Daniel Webster (Millions for Defence)',
        en: 'Numista — N#121196, Daniel Webster (Millions for Defence)',
        note: {
          es: 'N#121196. Cobre, 10,2 g, 28 mm. Wright 11-280a. HT-16 de canto liso; HT-16A de canto estriado. No se republican precios.',
          en: 'N#121196. Copper, 10.2 g, 28 mm. Wright 11-280a. Plain-edge HT-16; reeded HT-16A. Prices are not republished.',
        },
      },
      {
        href: 'http://www.hardtimestokens.com/HT1HT20.html',
        es: 'Alan S. Fisher — Hard Times Token Collection, HT-16',
        en: 'Alan S. Fisher — Hard Times Token Collection, HT-16',
        note: {
          es: 'HT-16, Low-58, cobre, 28 mm, canto liso, R-1. No es este ejemplar; no se republica un precio.',
          en: 'HT-16, Low-58, copper, 28 mm, plain edge, R-1. Not this example; no price is republished.',
        },
      },
      {
        href: 'http://www.hardtimestokens.com/DanielWebster.aspx',
        es: 'Alan S. Fisher — Daniel Webster, DeWitt CE-1838-8',
        en: 'Alan S. Fisher — Daniel Webster, DeWitt CE-1838-8',
        note: {
          es: 'HT-16, Low-58, DeWitt CE-1838-8. El 1838 no cambia la fecha 1841 del cospel. No se republica un precio.',
          en: 'HT-16, Low-58, DeWitt CE-1838-8. The 1838 does not change the 1841 date on the planchet. No price is republished.',
        },
      },
      {
        href: 'http://www.hardtimestokens.com/ht16details.html',
        es: 'Alan S. Fisher — HT-16, cuño compartido con Low-60',
        en: 'Alan S. Fisher — HT-16, die shared with Low-60',
        note: {
          es: 'El anverso comparte cuño con Low-60, en un estado posterior. No es este ejemplar.',
          en: 'The obverse shares a die with Low-60, in a later state. Not this example.',
        },
      },
      {
        href: 'https://americanhistory.si.edu/collections/object/nmah_1447779',
        es: 'Smithsonian — Webster Credit Current Hard Times Token',
        en: 'Smithsonian — Webster Credit Current Hard Times Token',
        note: {
          es: 'Ejemplar del museo, 1981.0296.0788: cobre, unos 28,6 mm, Scovill de Waterbury. No es esta pieza.',
          en: 'Museum example, 1981.0296.0788: copper, about 28.6 mm, Scovill of Waterbury. Not this piece.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1841-token-ht-16-daniel-webster-bn/77215',
        es: 'PCGS CoinFacts — 1841 HT-16 Daniel Webster, BN',
        en: 'PCGS CoinFacts — 1841 HT-16 Daniel Webster, BN',
        note: {
          es: 'Listado BN n.º 77215 del cobre HT-16. Tirada N/A. No se asigna color BN a este ejemplar. No se republican precios.',
          en: 'BN listing no. 77215 of copper HT-16. Mintage N/A. BN color is not assigned to this example. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1841-token-ht-16-daniel-webster-rb/77855',
        es: 'PCGS CoinFacts — 1841 HT-16 Daniel Webster, RB',
        en: 'PCGS CoinFacts — 1841 HT-16 Daniel Webster, RB',
        note: {
          es: 'Listado RB n.º 77855: cobre, 28 mm, tirada N/A, peso N/A. No se asigna a este ejemplar. No se republican precios.',
          en: 'RB listing no. 77855: copper, 28 mm, mintage N/A, weight N/A. Not assigned to this example. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: '1-dolar-trump-1776-2026',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/',
    chapterId: 'semiquincentenario',
    year: '1776 ~ 2026',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '1 dólar de curso legal',
      en: 'Legal-tender $1',
    },
    composition: {
      es: 'Latón-manganeso (88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni)',
      en: 'Manganese brass (88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni)',
    },
    weight: {
      es: '8,10 g',
      en: '8.10 g',
    },
    diameter: {
      es: '26,49 mm',
      en: '26.49 mm',
    },
    edge: {
      es: 'Liso, sin leyenda',
      en: 'Plain, no lettering',
    },
    references: 'Pub. L. 116-330 · 31 U.S.C. § 5112(y)(1)(C)',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Struck circulating United States dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-1-dollar-1776-2026-trump-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-1-dollar-1776-2026-trump-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-1-dollar-1776-2026-trump-back.jpg',
      width: 1200,
      height: 675,
      faceWidth: 600,
      faceHeight: 675,
    },
    title: {
      es: '1 dólar · Trump · Semiquincentenario 1776–2026',
      en: '$1 · Trump · Semiquincentennial 1776–2026',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Dólar de curso legal de Filadelfia, latón-manganeso —no oro—, con retrato de Donald J. Trump (JFM) y el sello presidencial de Gasparro numerado 250. Sin serial, sin encapsular y sin marca privy JULY 4th.',
      en: 'Philadelphia legal-tender dollar in manganese brass — not gold — with Donald J. Trump’s portrait (JFM) and Gasparro’s presidential seal numbered 250. No serial, unslabbed, and without the JULY 4th privy mark.',
    },
    description: {
      es: 'Esta pieza es el 1 $ del Semiquincentenario acuñado en Filadelfia sin marca de ceca. El anverso, de Joseph F. Menna (JFM), muestra un retrato de frente de Donald J. Trump, chaqueta y corbata, bajo LIBERTY; a la derecha, IN GOD WE TRUST en tres líneas; abajo, 1776 ~ 2026 entre estrellas. Menna partió de una fotografía oficial de la Casa Blanca de Daniel Torok. El reverso reutiliza el sello presidencial de Frank Gasparro (FG): águila con olivo y trece flechas, E PLURIBUS UNUM en la cinta, trece estrellas sobre la cabeza y un anillo de cincuenta; el número 250 ocupa el centro del escudo; UNITED STATES OF AMERICA arriba y ONE DOLLAR abajo. El canto es liso. El color dorado es el de la aleación de los dólares Sacagawea, Native American, Presidential e Innovation: 8,10 g y 26,49 mm, sin metal precioso. No es el programa de oro de 24 quilates de una onza, ni una medalla privada, ni el collage pop Trump / Never Surrender de Rency sobre un 2 dólares. En esta foto de estudio no se ve la marca privy JULY 4th de los 250.000 ejemplares acuñados el 4 de julio de 2026.',
      en: 'This piece is the Semiquincentennial $1 struck at Philadelphia with no mint mark. The obverse, by Joseph F. Menna (JFM), shows a facing portrait of Donald J. Trump, jacket and tie, under LIBERTY; at right, IN GOD WE TRUST in three lines; below, 1776 ~ 2026 between stars. Menna worked from an official White House photograph by Daniel Torok. The reverse reuses Frank Gasparro’s (FG) presidential seal: an eagle with olive branch and thirteen arrows, E PLURIBUS UNUM on the ribbon, thirteen stars above the head and a ring of fifty; the number 250 sits at the center of the shield; UNITED STATES OF AMERICA above and ONE DOLLAR below. The edge is plain. The golden color is that of the Sacagawea, Native American, Presidential, and Innovation dollar alloy: 8.10 g and 26.49 mm, with no precious metal. It is not the 24-karat one-ounce gold program, not a private medal, and not Rency’s Trump / Never Surrender pop collage on a $2. This studio photograph does not show the JULY 4th privy mark of the 250,000 pieces struck on 4 July 2026.',
    },
    history: {
      es: 'Representar a un presidente en vida en la moneda estadounidense es infrecuente. El medio dólar del Sesquicentenario de 1926 mostró a Calvin Coolidge junto a Washington. El Congreso, con la ley de 2020, abrió un dólar de un solo año para el 250.º aniversario de 1776. El Tesoro presentó el diseño el 16 de julio de 2026; la Mint publicó los diseños el 4 de agosto; los rollos de 25 y las bolsas de 100 —calidad de circulación, solo Filadelfia— salieron el 2 de septiembre. Esta ficha describe el objeto físico de la colección; no tasa la emisión ni republica los precios de la Mint.',
      en: 'A living president on United States coin is uncommon. The 1926 Sesquicentennial half dollar showed Calvin Coolidge beside Washington. Congress, in the 2020 act, opened a one-year dollar for the 250th anniversary of 1776. The Treasury unveiled the design on 16 July 2026; the Mint published the designs on 4 August; 25-coin rolls and 100-coin bags — circulating quality, Philadelphia only — went on sale on 2 September. This record describes the physical object in the collection; it does not value the issue or republish Mint prices.',
    },
    obverseLegend: {
      es: 'LIBERTY · IN GOD WE TRUST · 1776 ~ 2026. Iniciales JFM (Joseph F. Menna, grabador jefe) a la derecha, bajo el lema.',
      en: 'LIBERTY · IN GOD WE TRUST · 1776 ~ 2026. Initials JFM (Joseph F. Menna, Chief Engraver) at right, below the motto.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · ONE DOLLAR · 250 en el escudo. Iniciales FG (Frank Gasparro) a la derecha de la cola.',
      en: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · ONE DOLLAR · 250 in the shield. Initials FG (Frank Gasparro) to the right of the tail.',
    },
    frontCaption: {
      es: 'Anverso: retrato de frente de Donald J. Trump; LIBERTY; IN GOD WE TRUST; 1776 ~ 2026; iniciales JFM.',
      en: 'Obverse: facing portrait of Donald J. Trump; LIBERTY; IN GOD WE TRUST; 1776 ~ 2026; initials JFM.',
    },
    backCaption: {
      es: 'Reverso: sello presidencial de Gasparro con 250 en el escudo; UNITED STATES OF AMERICA; ONE DOLLAR; iniciales FG. Sin marca privy JULY 4th.',
      en: 'Reverse: Gasparro presidential seal with 250 in the shield; UNITED STATES OF AMERICA; ONE DOLLAR; initials FG. No JULY 4th privy mark.',
    },
    scarcity: {
      es: 'CoinNews y la Mint describen rollos y bolsas de calidad de circulación solo de Filadelfia; no hubo acuñación en Denver. De esa producción, 250.000 ejemplares llevan privy JULY 4th y se mezclaron al azar: esta pieza no la muestra. La Mint agotó esos rollos y bolsas el 2 de septiembre de 2026, el día de la puesta a la venta; esa escasez de producto de la Mint no es una tirada del tipo. No se publica aquí una tirada total ni un censo de encapsulados. El programa de oro de 24 k es otra emisión, de tirada limitada y calendario distinto.',
      en: 'CoinNews and the Mint describe circulating-quality rolls and bags from Philadelphia only; none were struck at Denver. Of that output, 250,000 pieces carry a JULY 4th privy and were mixed at random: this example does not show it. The Mint sold out those rolls and bags on 2 September 2026, the on-sale day; that Mint-product sell-out is not a type mintage. This record does not publish a type mintage or a slab census. The 24k gold program is a different issue, with a limited mintage and a separate calendar.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —anverso JFM, reverso FG con 250, sin privy— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — JFM obverse, FG reverse with 250, no privy — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.globenewswire.com/news-release/2026/08/04/3338617/0/en/2026-Semiquincentennial-President-Donald-J-Trump-1-Coin-Designs-Released.html',
        es: 'United States Mint — Diseños del dólar Trump del Semiquincentenario',
        en: 'United States Mint — Semiquincentennial Trump $1 designs',
        note: {
          es: 'Menna (foto Torok); Gasparro con 250; Pub. L. 116-330.',
          en: 'Menna (Torok photograph); Gasparro with 250; Pub. L. 116-330.',
        },
      },
      {
        href: 'https://www.coinnews.net/2026/07/16/treasury-unveils-trump-1-coin/',
        es: 'CoinNews — Especificaciones del dólar 1776–2026',
        en: 'CoinNews — 1776–2026 dollar specifications',
        note: {
          es: '8,10 g; 26,49 mm; 88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni; canto liso; Filadelfia sin marca.',
          en: '8.10 g; 26.49 mm; 88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni; plain edge; Philadelphia, no mint mark.',
        },
      },
      {
        href: 'https://www.coinnews.net/2026/09/02/trump-coins-july-4th-privy/',
        es: 'CoinNews — Privy JULY 4th y venta del 2 de septiembre',
        en: 'CoinNews — JULY 4th privy and 2 September sale',
        note: {
          es: '250.000 con privy; este ejemplar no la muestra. No se republican precios.',
          en: '250,000 with privy; this example does not show it. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: '2-50-dolares-1878-liberty-head',
    path: '/coleccion/estados-unidos-numismatica/2-50-dolares-1878-liberty-head/',
    pathEn: '/en/collection/united-states-numismatics/2-50-dollars-1878-liberty-head/',
    chapterId: 'ceca-filadelfia',
    year: '1878',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '2,50 dólares (quarter eagle)',
      en: '2.50 dollars (quarter eagle)',
    },
    composition: {
      es: 'Oro .900 (90 % Au, 10 % Cu)',
      en: 'Gold .900 (90% Au, 10% Cu)',
    },
    weight: {
      es: '4,18 g (64,5 granos; peso de tipo)',
      en: '4.18 g (64.5 grains; type weight)',
    },
    diameter: {
      es: '18 mm (medida de tipo)',
      en: '18 mm (type measurement)',
    },
    edge: {
      es: 'Estriado (tipo publicado; las fotos no muestran el canto)',
      en: 'Reeded (published type; the photographs do not show the edge)',
    },
    references: 'PCGS #7828 · Numista N#13432',
    grade: {
      es: 'Sin encapsular. Desgaste de circulación en el cabello y en el águila; fecha y leyendas legibles. No es un grado numérico.',
      en: 'Unslabbed. Circulation wear on the hair and the eagle; date and legends legible. Not a numerical grade.',
    },
    no_serial_reason:
      'Struck United States quarter eagle: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-2-50-dollars-1878-liberty-head-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-2-50-dollars-1878-liberty-head-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-2-50-dollars-1878-liberty-head-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 838,
      faceHeight: 941,
    },
    title: {
      es: '2,50 dólares · Liberty Head · 1878',
      en: '2.50 dollars · Liberty Head · 1878',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Quarter eagle de oro .900, Filadelfia, 1878, sin marca de ceca. Liberty Head de Christian Gobrecht, en relieve alto. Sin serial y sin encapsular.',
      en: 'Philadelphia .900 gold quarter eagle, 1878, with no mint mark. Christian Gobrecht Liberty Head, in raised relief. No serial, and unslabbed.',
    },
    description: {
      es: 'Esta pieza es el quarter eagle de 2,50 dólares de 1878, de la ceca de Filadelfia, sin marca. El anverso es el Liberty Head de Christian Gobrecht, también llamado Coronet: busto a la izquierda, cabello recogido con una sarta de cuentas, coroneta con LIBERTY, trece estrellas y la fecha 1878. El relieve está en alto, no hundido. El reverso lleva un águila heráldica con escudo, rama de olivo y flechas; la leyenda es UNITED STATES OF AMERICA y 2 1/2 D., con un punto a cada lado del valor. Sobre el valor, donde iría la marca de ceca, no hay letra. Tampoco se lee E PLURIBUS UNUM ni IN GOD WE TRUST, ni el punzón CAL. del 1848. No es el quarter eagle Indian Head de 1912 de esta colección —relieve incuso de Bela Lyon Pratt, penacho, IN GOD WE TRUST y 2½ DOLLARS—, ni el Classic Head de 1834–1839, ni un Gold Certificate. La pieza está suelta, sin cápsula. PCGS separa la acuñación de circulación de 1878 (7828) de las pruebas (7904): esta foto muestra desgaste de circulación y no se le asigna acabado proof.',
      en: 'This piece is the 1878 2.50-dollar quarter eagle from the Philadelphia mint, with no mint mark. The obverse is the Liberty Head of Christian Gobrecht, also called the Coronet type: a left-facing bust, hair drawn back with a string of beads, a coronet inscribed LIBERTY, thirteen stars, and the date 1878. The relief is raised, not incuse. The reverse carries a heraldic eagle with a shield, an olive branch, and arrows; the legend is UNITED STATES OF AMERICA and 2 1/2 D., with a dot on each side of the value. Above the value, where a mint mark would sit, there is no letter. The photograph shows neither E PLURIBUS UNUM nor IN GOD WE TRUST, and no 1848 CAL. punch. It is not this collection’s 1912 Indian Head quarter eagle — Bela Lyon Pratt incuse relief, a feathered headdress, IN GOD WE TRUST, and 2½ DOLLARS — not the Classic Head of 1834–1839, and not a Gold Certificate. The piece is raw, with no holder. PCGS separates the 1878 business strike (7828) from the proofs (7904): this photograph shows circulation wear and is not identified as a proof.',
    },
    history: {
      es: 'El Coinage Act del 2 de abril de 1792 dio nombre al quarter eagle: la cuarta parte del águila de 10 dólares, con valor de 2,50 dólares. El peso pasó de 67,5 granos a 64,5 granos (4,18 g) con la ley del 28 de junio de 1834; la ley del 18 de enero de 1837 fijó la fineza en .900. Wikipedia, citando a Yeoman, sitúa en 0,121 onzas troy el oro fino de los quarter eagle de 1837 en adelante: es el contenido legal del tipo, no un ensayo de este disco. Christian Gobrecht adaptó en 1840, para este módulo de 18 mm, la cabeza con coroneta que había usado en el águila. El tipo se acuñó sin cambio mayor hasta 1907. La marca de ceca quedó bajo el águila; Filadelfia no la pone. En 1908 lo sustituyó el Indian Head incuso de Bela Lyon Pratt, acuñado hasta 1929. La denominación se retiró en 1933, con el fin del patrón oro; la última fecha emitida es 1929. Esta ficha describe el objeto de la colección; no tasa la emisión.',
      en: 'The Coinage Act of 2 April 1792 named the quarter eagle: one quarter of the 10-dollar eagle, worth 2.50 dollars. The weight fell from 67.5 grains to 64.5 grains (4.18 g) with the act of 28 June 1834; the act of 18 January 1837 set the fineness at .900. Wikipedia, citing Yeoman, places the fine gold of quarter eagles from 1837 onward at 0.121 troy ounces: that is the statutory content of the type, not an assay of this disc. In 1840 Christian Gobrecht adapted, for this 18 mm module, the coronet head he had used on the eagle. The type was struck without a major change through 1907. The mint mark was placed under the eagle; Philadelphia uses none. In 1908 Bela Lyon Pratt’s incuse Indian Head replaced it and was struck through 1929. The denomination was withdrawn in 1933, with the end of the gold standard; the last date issued is 1929. This record describes the object in the collection; it does not value the issue.',
    },
    obverseLegend: {
      es: 'LIBERTY en la coroneta · trece estrellas · 1878.',
      en: 'LIBERTY on the coronet · thirteen stars · 1878.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · 2 1/2 D. · puntos a ambos lados del valor. Sin marca de ceca bajo el águila.',
      en: 'UNITED STATES OF AMERICA · 2 1/2 D. · dots on both sides of the value. No mint mark under the eagle.',
    },
    frontCaption: {
      es: 'Anverso: busto Liberty Head a la izquierda; LIBERTY en la coroneta; trece estrellas; 1878.',
      en: 'Obverse: left-facing Liberty Head; LIBERTY on the coronet; thirteen stars; 1878.',
    },
    backCaption: {
      es: 'Reverso: águila con escudo, olivo y flechas; UNITED STATES OF AMERICA; 2 1/2 D. Sin marca de ceca.',
      en: 'Reverse: eagle with shield, olive branch, and arrows; UNITED STATES OF AMERICA; 2 1/2 D. No mint mark.',
    },
    scarcity: {
      es: 'PCGS CoinFacts publica 286.240 ejemplares de circulación de Filadelfia para 1878 (PCGS# 7828). Es una cifra de entrega, no un censo de supervivientes ni de este ejemplar. El 1878-S (PCGS# 7829) es otra moneda: lleva marca S y PCGS le da 178.000 piezas. Las pruebas de 1878 (PCGS# 7904, 20) son otro producto. Esta fotografía muestra desgaste de circulación en el cabello y en el águila; no se le asigna acabado proof ni un grado numérico. No se publica aquí un censo de encapsulados ni un precio.',
      en: 'PCGS CoinFacts publishes 286,240 Philadelphia business strikes for 1878 (PCGS# 7828). That is a delivery figure, not a survival census and not a census of this example. The 1878-S (PCGS# 7829) is a different coin: it carries an S and PCGS gives it 178,000 pieces. The 1878 proofs (PCGS# 7904, 20) are another product. This photograph shows circulation wear on the hair and the eagle; it is not identified as a proof and it is not given a numerical grade. This record publishes neither a slab census nor a price.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1878, coroneta LIBERTY, 2 1/2 D. y sin marca de ceca— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. This module carries no serial number. The identity of this record is the photographed object — date 1878, LIBERTY coronet, 2 1/2 D., and no mint mark — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1878-2-50/7828',
        es: 'PCGS CoinFacts — 1878 2,50 dólares, acuñación de circulación (7828)',
        en: 'PCGS CoinFacts — 1878 2.50 dollars, business strike (7828)',
        note: {
          es: 'Christian Gobrecht; canto estriado; 18 mm; 4,18 g; Filadelfia; oro 90 % y cobre 10 %; 286.240 piezas de circulación. No se republican precios.',
          en: 'Christian Gobrecht; reeded edge; 18 mm; 4.18 g; Philadelphia; 90% gold and 10% copper; 286,240 business strikes. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1878-2-50/7904',
        es: 'PCGS CoinFacts — 1878 2,50 dólares, prueba (7904)',
        en: 'PCGS CoinFacts — 1878 2.50 dollars, proof (7904)',
        note: {
          es: '20 pruebas publicadas. Otro producto: esta foto no se identifica como prueba. No se republican precios.',
          en: '20 published proofs. A different product: this photograph is not identified as a proof. Prices are not republished.',
        },
      },
      {
        href: 'https://stacksbowers.com/coin-resource-center/us-coins/gold-quarter-eagles/liberty-head-quarter-eagle/',
        es: 'Stack’s Bowers — Liberty Head quarter eagle, 1840–1907',
        en: 'Stack’s Bowers — Liberty Head quarter eagle, 1840–1907',
        note: {
          es: 'Gobrecht; coroneta LIBERTY; águila con escudo, olivo y tres flechas; 90 % oro y 10 % cobre; 4,18 g (64,50 granos); 18 mm; canto estriado. No se republican precios.',
          en: 'Gobrecht; LIBERTY coronet; eagle with shield, olive branch, and three arrows; 90% gold and 10% copper; 4.18 g (64.50 grains); 18 mm; reeded edge. Prices are not republished.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Quarter_eagle',
        es: 'Wikipedia — Quarter eagle',
        en: 'Wikipedia — Quarter eagle',
        note: {
          es: 'Nombre en el Coinage Act de 1792; peso de 1834; fineza .900 en 1837; tipo Liberty Head de Gobrecht, 1840–1907; marca bajo el águila. No se republica el precio citado del CAL. de 1848.',
          en: 'Name in the Coinage Act of 1792; 1834 weight; .900 fineness in 1837; Gobrecht Liberty Head, 1840–1907; mint mark under the eagle. The price cited there for the 1848 CAL. is not republished.',
        },
      },
      {
        href: 'https://en.numista.com/13432',
        es: 'Numista — 2½ dólares Coronet Head, quarter eagle (N# 13432)',
        en: 'Numista — 2½ dollars Coronet Head, quarter eagle (N# 13432)',
        note: {
          es: 'Tipo 1840–1907; oro .900 y cobre .100; 4,18 g; 18 mm; leyenda UNITED STATES OF AMERICA y 2½ D.',
          en: 'Type of 1840–1907; .900 gold and .100 copper; 4.18 g; 18 mm; legend UNITED STATES OF AMERICA and 2½ D.',
        },
      },
    ],
  },
  {
    id: '2-50-dolares-1908-cabeza-de-indio',
    path: '/coleccion/estados-unidos-numismatica/2-50-dolares-1908-cabeza-de-indio/',
    pathEn: '/en/collection/united-states-numismatics/2-50-dollars-1908-indian-head/',
    chapterId: 'ceca-filadelfia',
    year: '1908',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '2½ dólares (cuarto de águila)',
      en: '$2½ (quarter eagle)',
    },
    composition: {
      es: 'Oro 900 milésimas y 10 % cobre (ley publicada del tipo; este ejemplar no se ensayó)',
      en: '90% gold and 10% copper (published fineness of the type; this specimen was not assayed)',
    },
    weight: {
      es: '4,18 g, 64½ granos (peso de tipo; este ejemplar no se pesó). Oro fino publicado: 0,12094 oz troy',
      en: '4.18 g, 64½ grains (type weight; this specimen was not weighed). Published fine gold: 0.12094 troy oz',
    },
    diameter: {
      es: '18 mm (medida de tipo; este ejemplar no se midió)',
      en: '18 mm (type measurement; this specimen was not measured)',
    },
    edge: {
      es: 'Estriado (tipo publicado; no hay foto del canto)',
      en: 'Reeded (published type; no edge photograph)',
    },
    references: 'KM# 128 · Fr# 121 · PCGS# 7939',
    grade: {
      es: 'Sin encapsular. Fecha, LIBERTY y 2½ DOLLARS legibles en las fotos; no es un grado numérico.',
      en: 'Unslabbed. Date, LIBERTY, and 2½ DOLLARS legible in the photographs; not a numerical grade.',
    },
    no_serial_reason:
      'Struck United States quarter eagle: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-2-50-dollars-1908-indian-head-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-2-50-dollars-1908-indian-head-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-2-50-dollars-1908-indian-head-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    heading: {
      es: 'Cuarto de águila de 1908, cabeza de indio',
      en: '1908 Indian Head quarter eagle',
    },
    title: {
      es: '2½ dólares · United States Mint · 1908',
      en: '$2½ · United States Mint · 1908',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Cuarto de águila de oro de 1908, tipo cabeza de indio de Bela Lyon Pratt, acuñado en Filadelfia sin marca de ceca. El retrato y el águila van incusos, por debajo del campo. Sin serial y sin encapsular. La fotografía de estudio muestra el anverso y el reverso de una sola pieza.',
      en: '1908 Indian Head quarter eagle in gold, Bela Lyon Pratt’s type, struck at Philadelphia with no mint mark. The portrait and the eagle are incuse, below the field. No serial and unslabbed. The studio photograph shows the obverse and the reverse of one piece.',
    },
    description: {
      es: 'Esta pieza es un cuarto de águila de 1908, el primer año del tipo cabeza de indio. El anverso lleva un busto masculino con tocado de plumas, de perfil a la izquierda, LIBERTY en el arco y la fecha 1908 abajo, con estrellas en el contorno. El reverso muestra un águila de pie a la izquierda, sobre un haz de flechas y una rama de olivo; UNITED STATES OF AMERICA en el arco, IN GOD WE TRUST a la izquierda del águila, E PLURIBUS UNUM a la derecha y 2½ DOLLARS abajo. Los relieves están hundidos en el campo: es el diseño incuso de Bela Lyon Pratt, el mismo de la media águila de cinco dólares. La denominación leída en la pieza es 2½ DOLLARS. La media águila de Pratt lee FIVE DOLLARS y mide 21,6 mm. El águila de diez dólares de Saint-Gaudens lleva LIBERTY en la cinta del tocado y TEN DOLLARS. A la izquierda del haz de flechas, donde el tipo sitúa la marca de ceca, no se lee una D. El canto no está fotografiado. Sin serial y sin cápsula.',
      en: 'This piece is a 1908 quarter eagle, the first year of the Indian Head type. The obverse carries a male bust in a feathered headdress, facing left, LIBERTY on the arc and the date 1908 below, with stars around the rim. The reverse shows an eagle standing left on a bundle of arrows and an olive branch; UNITED STATES OF AMERICA on the arc, IN GOD WE TRUST to the left of the eagle, E PLURIBUS UNUM to the right, and 2½ DOLLARS below. The devices are sunk into the field: Bela Lyon Pratt’s incuse design, the same one used on the five-dollar half eagle. The denomination read on the piece is 2½ DOLLARS. Pratt’s half eagle reads FIVE DOLLARS and measures 21.6 mm. Saint-Gaudens’ ten-dollar eagle has LIBERTY on the headband and TEN DOLLARS. To the left of the arrow bundle, where the type places the mint mark, no D is read. The edge is not photographed. No serial and no holder.',
    },
    history: {
      es: 'El Coinage Act de 1792 fijó el águila en diez dólares; el cuarto de águila es la pieza de dos dólares y medio. En 1908, a instancias de Theodore Roosevelt y de William Sturgis Bigelow, la Mint adoptó el modelo incuso de Bela Lyon Pratt para el cuarto y la media águila: las figuras quedan por debajo del campo, para que la pieza apilara y el relieve no se gastara como en el alto relieve de Saint-Gaudens. Charles E. Barber, grabador jefe, retocó los troqueles; Pratt dejó escrito que ese retoque le desfiguró el modelo. El cuarto de águila de 1908 se acuñó para circulación solo en Filadelfia. La D de Denver en este tipo empieza en 1911. Las piezas entraron en circulación a principios de noviembre de 1908. En 1933 la Orden Ejecutiva 6102 cerró la emisión de oro amonedado y con ella la serie, abierta en 1796. Esta ficha describe el ejemplar fotografiado. Sin procedencia registrada aquí.',
      en: 'The Coinage Act of 1792 set the eagle at ten dollars; the quarter eagle is the two-and-a-half-dollar piece. In 1908, at the urging of Theodore Roosevelt and William Sturgis Bigelow, the Mint adopted Bela Lyon Pratt’s incuse model for the quarter eagle and the half eagle: the devices sit below the field, so the coin would stack and the relief would not wear as on Saint-Gaudens’ high relief. Charles E. Barber, chief engraver, retouched the dies; Pratt wrote that the retouching spoiled his model. The 1908 quarter eagle was struck for circulation at Philadelphia only. Denver’s D on this type begins in 1911. The pieces entered circulation in early November 1908. In 1933 Executive Order 6102 ended the issue of gold coin and, with it, the series opened in 1796. This record describes the photographed specimen. No provenance is recorded here.',
    },
    obverseLegend: {
      es: 'LIBERTY · 1908. Estrellas en el contorno. Las iniciales BLP (Bela Lyon Pratt) forman parte del tipo publicado.',
      en: 'LIBERTY · 1908. Stars around the rim. The initials BLP (Bela Lyon Pratt) belong to the published type.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · IN GOD WE TRUST (izquierda) · E PLURIBUS UNUM (derecha) · 2½ DOLLARS. Sin D a la izquierda de las flechas.',
      en: 'UNITED STATES OF AMERICA · IN GOD WE TRUST (left) · E PLURIBUS UNUM (right) · 2½ DOLLARS. No D to the left of the arrows.',
    },
    frontCaption: {
      es: 'Anverso: busto con tocado, a la izquierda; LIBERTY; estrellas; 1908.',
      en: 'Obverse: headdress bust facing left; LIBERTY; stars; 1908.',
    },
    backCaption: {
      es: 'Reverso: águila sobre flechas y olivo; UNITED STATES OF AMERICA; IN GOD WE TRUST; E PLURIBUS UNUM; 2½ DOLLARS.',
      en: 'Reverse: eagle on arrows and olive; UNITED STATES OF AMERICA; IN GOD WE TRUST; E PLURIBUS UNUM; 2½ DOLLARS.',
    },
    scarcity: {
      es: '1908 es el primer año del tipo (1908–1915 y 1925–1929) y una fecha común de la serie, según el resumen de PCGS CoinFacts. PCGS da 564.821 piezas de circulación para Filadelfia (PCGS# 7939); Stack’s Bowers da 565.057. Esta ficha no elige entre esas dos cifras. Los proofs de acabado sandblast son otra emisión: PCGS# 7957 y Stack’s Bowers publican 236. Esta fotografía no se identifica como ese proof. No se republica un censo ni un precio.',
      en: '1908 is the first year of the type (1908–1915 and 1925–1929) and a common date of the series, according to the PCGS CoinFacts summary. PCGS gives 564,821 Philadelphia circulation strikes (PCGS# 7939); Stack’s Bowers gives 565,057. This record does not choose between those two figures. Sandblast proofs are a separate issue: PCGS# 7957 and Stack’s Bowers publish 236. This photograph is not identified as that proof. No census and no price are republished.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. El cuarto de águila no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1908, 2½ DOLLARS, sin D— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. The quarter eagle carries no serial number. The identity of this record is the photographed object — date 1908, 2½ DOLLARS, no D — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.wikipedia.org/wiki/Indian_Head_gold_pieces',
        es: 'Wikipedia — Indian Head gold pieces',
        en: 'Wikipedia — Indian Head gold pieces',
        note: {
          es: 'Cuarto de águila 1908–1929: 4,18 g, 18 mm, canto estriado, oro 900, 0,12094 oz troy fino; diseño incuso de Pratt; marca de ceca a la izquierda de las flechas; Filadelfia sin marca. No se republican precios.',
          en: 'Quarter eagle 1908–1929: 4.18 g, 18 mm, reeded edge, 900 gold, 0.12094 troy oz fine; Pratt’s incuse design; mint mark to the left of the arrows; Philadelphia with no mark. Prices are not republished.',
        },
      },
      {
        href: 'https://en.numista.com/6158',
        es: 'Numista — 2½ dólares, Indian Head quarter eagle (N# 6158)',
        en: 'Numista — $2½, Indian Head quarter eagle (N# 6158)',
        note: {
          es: 'KM# 128, Fr# 121, PCGS# 7939–7953 y 7957–7964. Peso 4,18 g, diámetro 18 mm, técnica incusa, canto estriado. No se republica el valor de oro ni las ventas.',
          en: 'KM# 128, Fr# 121, PCGS# 7939–7953 and 7957–7964. Weight 4.18 g, diameter 18 mm, incuse technique, reeded edge. Bullion value and sales are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1908-2-50/7939',
        es: 'PCGS CoinFacts — 1908, 2½ dólares, Indian Head, acuñación de circulación',
        en: 'PCGS CoinFacts — 1908 $2½, Indian Head, regular strike',
        note: {
          es: 'PCGS# 7939. Pratt; 18,00 mm; 4,18 g; canto estriado; 90 % oro; Filadelfia; tirada publicada 564.821. No se republica el censo ni un precio.',
          en: 'PCGS# 7939. Pratt; 18.00 mm; 4.18 g; reeded edge; 90% gold; Philadelphia; published mintage 564,821. Census and price are not republished.',
        },
      },
      {
        href: 'https://stacksbowers.com/coin-guide/us-coins/quarter-eagle-gold/indian/',
        es: 'Stack’s Bowers — Indian Head quarter eagle, 1908',
        en: 'Stack’s Bowers — Indian Head quarter eagle, 1908',
        note: {
          es: 'Circulación 565.057 y 236 proofs para 1908. La cifra de circulación no coincide con la de PCGS; esta ficha no elige. No se republican precios.',
          en: 'Circulation 565,057 and 236 proofs for 1908. The circulation figure does not match PCGS; this record does not choose. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/7957',
        es: 'PCGS CoinFacts — 1908 proof, 2½ dólares, Indian Head',
        en: 'PCGS CoinFacts — 1908 $2½ proof, Indian Head',
        note: {
          es: 'PCGS# 7957. Proof sandblast, tirada 236. Emisión distinta de esta fotografía.',
          en: 'PCGS# 7957. Sandblast proof, mintage 236. A different issue from this photograph.',
        },
      },
    ],
  },
  {
    id: '2-50-dolares-1912-indian-head',
    path: '/coleccion/estados-unidos-numismatica/2-50-dolares-1912-indian-head/',
    pathEn: '/en/collection/united-states-numismatics/2-50-dollars-1912-indian-head/',
    chapterId: 'ceca-filadelfia',
    year: '1912',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '2,50 dólares (quarter eagle)',
      en: '2.50 dollars (quarter eagle)',
    },
    composition: {
      es: 'Oro .900 (90 % Au, 10 % Cu)',
      en: 'Gold .900 (90% Au, 10% Cu)',
    },
    weight: {
      es: '4,18 g',
      en: '4.18 g',
    },
    diameter: {
      es: '18 mm',
      en: '18 mm',
    },
    edge: {
      es: 'Estriado',
      en: 'Reeded',
    },
    references: 'KM# 128 · PCGS# 7944 · N# 6158',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Struck United States quarter eagle: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-2-50-dollars-1912-indian-head-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-2-50-dollars-1912-indian-head-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-2-50-dollars-1912-indian-head-back.jpg',
      width: 1024,
      height: 576,
      faceWidth: 512,
      faceHeight: 576,
    },
    title: {
      es: '2,50 dólares · United States Mint · 1912',
      en: '2.50 dollars · United States Mint · 1912',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Quarter eagle de oro .900, Filadelfia, 1912, sin marca de ceca. Diseño incuso de Bela Lyon Pratt. Sin serial y sin encapsular.',
      en: 'Philadelphia .900 gold quarter eagle, 1912, with no mint mark. Bela Lyon Pratt’s incuse Indian Head design. No serial, and unslabbed.',
    },
    description: {
      es: 'Esta pieza es el quarter eagle de 2,50 dólares de 1912, de la ceca de Filadelfia, sin marca. El anverso es de Bela Lyon Pratt: busto a la izquierda con penacho, LIBERTY, trece estrellas y la fecha 1912. El reverso lleva un águila de pie a la izquierda sobre flechas y olivo, E PLURIBUS UNUM, IN GOD WE TRUST, UNITED STATES OF AMERICA y 2½ DOLLARS. El relieve es incuso: el dibujo queda hundido en el campo. Numista incluye las iniciales B.L.P. en la leyenda del tipo; en esta fotografía no se transcriben. Tampoco se ve letra de ceca. La pieza está suelta, sin cápsula. No es el medio águila de 5 dólares del mismo autor. PCGS separa la acuñación de circulación de 1912 (7944) de las pruebas (7961): esta ficha no identifica el ejemplar como prueba.',
      en: 'This piece is the 1912 2.50-dollar quarter eagle from the Philadelphia mint, with no mint mark. The obverse is by Bela Lyon Pratt: a left-facing bust in a feathered headdress, LIBERTY, thirteen stars, and the date 1912. The reverse carries a standing eagle facing left on arrows and an olive branch, E PLURIBUS UNUM, IN GOD WE TRUST, UNITED STATES OF AMERICA, and 2½ DOLLARS. The relief is incuse: the design sits below the field. Numista includes the initials B.L.P. in the type legend; they are not transcribed from this photograph. No mint letter is visible. The piece is raw, with no holder. It is not Pratt’s 5-dollar half eagle. PCGS separates the 1912 business strike (7944) from the proofs (7961): this record does not identify the example as a proof.',
    },
    history: {
      es: 'El quarter eagle es la cuarta parte del águila de 10 dólares, denominación del Coinage Act del 2 de abril de 1792. El tipo Indian Head, en relieve incuso, es obra de Bela Lyon Pratt y se acuñó de 1908 a 1929. El mismo escultor diseñó el medio águila de 5 dólares de ese relieve. Esta ficha describe el objeto de la colección; no tasa la emisión.',
      en: 'The quarter eagle is one quarter of the 10-dollar eagle, a denomination of the Coinage Act of 2 April 1792. The Indian Head type, in incuse relief, is by Bela Lyon Pratt and was struck from 1908 to 1929. The same sculptor designed the 5-dollar half eagle of that relief. This record describes the object in the collection; it does not value the issue.',
    },
    obverseLegend: {
      es: 'LIBERTY · trece estrellas · 1912. Numista incluye B.L.P. en la leyenda del tipo; en esta fotografía esas iniciales no se transcriben.',
      en: 'LIBERTY · thirteen stars · 1912. Numista includes B.L.P. in the type legend; those initials are not transcribed from this photograph.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · IN GOD WE TRUST · 2½ DOLLARS. Sin marca de ceca.',
      en: 'UNITED STATES OF AMERICA · E PLURIBUS UNUM · IN GOD WE TRUST · 2½ DOLLARS. No mint mark.',
    },
    frontCaption: {
      es: 'Anverso: busto a la izquierda con penacho; LIBERTY; trece estrellas; 1912.',
      en: 'Obverse: left-facing bust in a feathered headdress; LIBERTY; thirteen stars; 1912.',
    },
    backCaption: {
      es: 'Reverso: águila sobre flechas y olivo; UNITED STATES OF AMERICA; E PLURIBUS UNUM; IN GOD WE TRUST; 2½ DOLLARS. Sin marca de ceca.',
      en: 'Reverse: eagle on arrows and an olive branch; UNITED STATES OF AMERICA; E PLURIBUS UNUM; IN GOD WE TRUST; 2½ DOLLARS. No mint mark.',
    },
    scarcity: {
      es: 'PCGS CoinFacts da 616.000 piezas de circulación de Filadelfia para 1912 (PCGS# 7944). CoinWeek añade 197 pruebas, que PCGS numera aparte (7961). Esas cifras son del tipo y la fecha, no un censo de este ejemplar. No se publica aquí un censo de encapsulados ni un precio.',
      en: 'PCGS CoinFacts gives 616,000 Philadelphia business strikes for 1912 (PCGS# 7944). CoinWeek adds 197 proofs, which PCGS numbers separately (7961). Those figures belong to the type and date, not to a census of this example. This record publishes neither a slab census nor a price.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1912, sin marca de ceca, penacho y águila— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. This module carries no serial number. The identity of this record is the photographed object — date 1912, no mint mark, headdress and eagle — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1912-2-50/7944',
        es: 'PCGS CoinFacts — 1912 2,50 dólares, acuñación de circulación (7944)',
        en: 'PCGS CoinFacts — 1912 2.50 dollars, business strike (7944)',
        note: {
          es: 'Bela Lyon Pratt; canto estriado; 18 mm; 4,18 g; Filadelfia; oro 90 % y cobre 10 %; 616.000 piezas de circulación. No se republican precios.',
          en: 'Bela Lyon Pratt; reeded edge; 18 mm; 4.18 g; Philadelphia; 90% gold and 10% copper; 616,000 business strikes. Prices are not republished.',
        },
      },
      {
        href: 'https://en.numista.com/6158',
        es: 'Numista — 2½ dólares Indian Head, quarter eagle (N# 6158)',
        en: 'Numista — 2½ dollars Indian Head, quarter eagle (N# 6158)',
        note: {
          es: 'KM# 128; 1908–1929; oro .900; 4,18 g; 18 mm; canto estriado; relieve incuso; leyenda del tipo con B.L.P.',
          en: 'KM# 128; 1908–1929; .900 gold; 4.18 g; 18 mm; reeded edge; incuse relief; type legend with B.L.P.',
        },
      },
      {
        href: 'https://coinweek.com/1912-indian-head-quarter-eagle-a-collectors-guide/',
        es: 'CoinWeek — Guía del quarter eagle Indian Head de 1912',
        en: 'CoinWeek — 1912 Indian Head quarter eagle guide',
        note: {
          es: '616.000 piezas de circulación y 197 pruebas. El relieve incuso es el de Pratt, compartido con el medio águila de 5 dólares. No se republican precios ni censos.',
          en: '616,000 business strikes and 197 proofs. The incuse relief is Pratt’s, shared with the 5-dollar half eagle. Prices and population censuses are not republished.',
        },
      },
    ],
  },
  {
    id: '1-dolar-oro-1856-cabeza-grande',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-oro-1856-cabeza-grande/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-gold-1856-large-head/',
    chapterId: 'ceca-filadelfia',
    year: '1856',
    mint: {
      es: 'Filadelfia (sin marca de ceca)',
      en: 'Philadelphia (no mint mark)',
    },
    denomination: {
      es: '1 dólar de oro',
      en: 'Gold dollar',
    },
    composition: {
      es: 'Oro .900 (90 % Au, 10 % Cu)',
      en: 'Gold .900 (90% Au, 10% Cu)',
    },
    weight: {
      es: '1,672 g',
      en: '1.672 g',
    },
    diameter: {
      es: '15 mm',
      en: '15 mm',
    },
    edge: {
      es: 'Estriado',
      en: 'Reeded',
    },
    references: 'KM# 86 · PCGS# 7540 · N# 23120',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Struck United States gold dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-1-dollar-gold-1856-large-head-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-1-dollar-gold-1856-large-head-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-1-dollar-gold-1856-large-head-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    title: {
      es: '1 dólar de oro · United States Mint · 1856',
      en: 'Gold dollar · United States Mint · 1856',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Dólar de oro de Filadelfia, 1856, tipo 3 de Longacre: cabeza grande y 5 inclinado. Oro .900, sin marca de ceca, sin serial y sin encapsular.',
      en: 'Philadelphia gold dollar, 1856, Longacre Type 3: large head and slanted 5. .900 gold, no mint mark, no serial, and unslabbed.',
    },
    description: {
      es: 'Esta pieza es el dólar de oro de 1856, tipo 3 de James Barton Longacre, acuñado en Filadelfia sin marca de ceca. El anverso muestra la cabeza de la Libertad a la izquierda, con penacho y la cinta LIBERTY, y la leyenda UNITED STATES OF AMERICA. El reverso lleva la corona agrícola —maíz, algodón, trigo y tabaco—, el 1 DOLLAR y la fecha 1856. El flanco izquierdo del 5 baja en diagonal: es el estilo que PCGS numera 7540 (Slanted 5). El 5 vertical es la variedad 7541. Bajo el lazo no hay letra. El relieve es alto. El quarter eagle Liberty Head de 1878 —coroneta de Christian Gobrecht— y el Indian Head de 1912 —relieve incuso de Bela Lyon Pratt— también son de Filadelfia y de oro .900: cada uno es otra pieza de 2,50 dólares. Numista (N# 23120, KM# 86) da 1,672 g —25,8 granos, o 25 4/5—, 15 mm y canto estriado. Esta fotografía muestra anverso y reverso; el canto no está en el encuadre y el ejemplar no se pesó. La pieza está suelta, sin cápsula. PCGS separa la acuñación de circulación (7540) de la prueba (7606): el desgaste de la mejilla y del pelo corresponde a una pieza de circulación.',
      en: 'This piece is the 1856 gold dollar, James Barton Longacre’s Type 3, struck at Philadelphia with no mint mark. The obverse shows Liberty’s head facing left, in a feathered headdress with the band LIBERTY, and the legend UNITED STATES OF AMERICA. The reverse carries the agricultural wreath — corn, cotton, wheat, and tobacco — 1 DOLLAR, and the date 1856. The left side of the 5 slopes: that is the style PCGS numbers 7540 (Slanted 5). The upright 5 is variety 7541. There is no letter under the bow. The relief is high. The 1878 Liberty Head quarter eagle — Christian Gobrecht’s coronet — and the 1912 Indian Head — Bela Lyon Pratt’s incuse relief — are also Philadelphia .900 gold: each is another 2.50-dollar piece. Numista (N# 23120, KM# 86) gives 1.672 g — 25.8 grains, or 25 4/5 — 15 mm, and a reeded edge. This photograph shows obverse and reverse; the edge is outside the frame and the example was not weighed. The piece is raw, with no holder. PCGS separates the business strike (7540) from the proof (7606): wear on the cheek and hair belongs to a circulation piece.',
    },
    history: {
      es: 'La ley del 3 de marzo de 1849 (9 Stat. 397, cap. CIX) autorizó el dólar de oro y el double eagle. El dólar es de curso legal por un dólar; en el reverso se omite el águila; la tolerancia de peso es un cuarto de grano. Longacre sustituyó en 1854 la cabeza de la Libertad del tipo 1 por la Indian Princess. El tipo 2, de cabeza pequeña, se acuñó en Filadelfia en 1854 y 1855 y, en 1856, solo en San Francisco. En 1856 agrandó la cabeza y bajó el relieve: es el tipo 3, de 1856 a 1889. CoinWeek llama a ese retrato Large Head. Esta ficha describe el objeto de la colección; no tasa la emisión.',
      en: 'The act of 3 March 1849 (9 Stat. 397, chap. CIX) authorized the gold dollar and the double eagle. The dollar is legal tender for one dollar; the reverse omits the eagle; the weight tolerance is a quarter grain. In 1854 Longacre replaced the Type 1 Liberty head with the Indian Princess. Type 2, the small head, was struck at Philadelphia in 1854 and 1855 and, in 1856, at San Francisco only. In 1856 he enlarged the head and lowered the relief: that is Type 3, from 1856 to 1889. CoinWeek calls that portrait the Large Head. This record describes the object in the collection; it does not value the issue.',
    },
    obverseLegend: {
      es: 'UNITED STATES OF AMERICA · LIBERTY en la cinta del penacho.',
      en: 'UNITED STATES OF AMERICA · LIBERTY on the headdress band.',
    },
    reverseLegend: {
      es: '1 DOLLAR · 1856 · corona agrícola. Sin marca de ceca. El 5 es el inclinado (PCGS 7540).',
      en: '1 DOLLAR · 1856 · agricultural wreath. No mint mark. The 5 is the slanted style (PCGS 7540).',
    },
    frontCaption: {
      es: 'Anverso: cabeza de la Libertad a la izquierda, penacho y cinta LIBERTY; UNITED STATES OF AMERICA. Tipo 3, cabeza grande.',
      en: 'Obverse: Liberty’s head facing left, feathered headdress and LIBERTY band; UNITED STATES OF AMERICA. Type 3, large head.',
    },
    backCaption: {
      es: 'Reverso: 1 DOLLAR; 1856 con el 5 inclinado; corona agrícola. Sin letra bajo el lazo.',
      en: 'Reverse: 1 DOLLAR; 1856 with the slanted 5; agricultural wreath. No letter under the bow.',
    },
    scarcity: {
      es: 'CoinWeek da 1.762.936 como la tirada de negocio de 1856, la más alta del tipo 3. PCGS publica esa misma cifra en el 5 inclinado (7540) y en el 5 vertical (7541): es el total de Filadelfia para la fecha, no un reparto entre variedades ni un censo de este ejemplar. Numista anota el 1856-D de Dahlonega en 1.460, con D bajo el lazo; aquí ese campo está vacío. Stack’s Bowers sitúa el tipo 2 de 1856 solo en San Francisco. La prueba del 5 inclinado es el PCGS 7606. No se publica un censo de encapsulados ni un precio.',
      en: 'CoinWeek gives 1,762,936 as the 1856 business-strike mintage, the highest of Type 3. PCGS publishes that same figure on the slanted 5 (7540) and the upright 5 (7541): it is the Philadelphia total for the date, not a split between varieties and not a census of this example. Numista lists the 1856-D of Dahlonega at 1,460, with a D under the bow; that field is empty here. Stack’s Bowers places the 1856 Type 2 at San Francisco only. The slanted-5 proof is PCGS 7606. This record publishes neither a slab census nor a price.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1856, 5 inclinado, sin marca de ceca, cabeza grande— no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. This module carries no serial number. The identity of this record is the photographed object — date 1856, slanted 5, no mint mark, large head — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/23120',
        es: 'Numista — 1 dólar Large Indian Head, tipo 3 (N# 23120)',
        en: 'Numista — 1 dollar Large Indian Head, Type 3 (N# 23120)',
        note: {
          es: 'KM# 86; 1856–1889; oro .900; 1,672 g (25 4/5 granos); 15 mm; canto estriado. Variedades de 1856: 5 inclinado y 5 vertical. 1856-D, 1.460. No se republican precios.',
          en: 'KM# 86; 1856–1889; .900 gold; 1.672 g (25 4/5 grains); 15 mm; reeded edge. 1856 varieties: slanted 5 and upright 5. 1856-D, 1,460. Prices are not republished.',
        },
      },
      {
        href: 'https://coinweek.com/gold-dollar-type-3-large-head-1856-1889/',
        es: 'CoinWeek — Dólar de oro, tipo 3 (cabeza grande), 1856–1889',
        en: 'CoinWeek — Gold dollar, Type 3 (large head), 1856–1889',
        note: {
          es: 'Longacre agrandó la cabeza en 1856. Tirada de negocio más alta del tipo: 1.762.936 en 1856. Aleación .900. No se republican precios.',
          en: 'Longacre enlarged the head in 1856. Highest business-strike mintage of the type: 1,762,936 in 1856. .900 alloy. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/7540',
        es: 'PCGS CoinFacts — 1856, 1 dólar, 5 inclinado (7540)',
        en: 'PCGS CoinFacts — 1856 gold dollar, slanted 5 (7540)',
        note: {
          es: 'James Barton Longacre; Filadelfia; tipo 3. El 5 vertical es el 7541 y la prueba del 5 inclinado es el 7606. No se republican precios.',
          en: 'James Barton Longacre; Philadelphia; Type 3. The upright 5 is 7541 and the slanted-5 proof is 7606. Prices are not republished.',
        },
      },
      {
        href: 'https://fraser.stlouisfed.org/title/coinage-act-1849-1094/fulltext',
        es: 'FRASER — Coinage Act of 1849, 9 Stat. 397',
        en: 'FRASER — Coinage Act of 1849, 9 Stat. 397',
        note: {
          es: '3 de marzo de 1849, cap. CIX: autoriza el dólar de oro, de curso legal por un dólar, sin águila en el reverso, con tolerancia de un cuarto de grano.',
          en: '3 March 1849, chap. CIX: authorizes the gold dollar, legal tender for one dollar, with no eagle on the reverse, and a quarter-grain tolerance.',
        },
      },
      {
        href: 'https://stacksbowers.com/coin-resource-center/us-coins/gold-dollars/indian-head-gold-dollar-type-2-small-head/',
        es: 'Stack’s Bowers — Dólar Indian Head, tipo 2 (cabeza pequeña)',
        en: 'Stack’s Bowers — Indian Head gold dollar, Type 2 (small head)',
        note: {
          es: 'El tipo 2 de 1856 se acuñó solo en San Francisco. La corona del tipo reúne maíz, algodón, trigo y tabaco. No se republican precios.',
          en: 'The 1856 Type 2 was struck at San Francisco only. The type wreath gathers corn, cotton, wheat, and tobacco. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: '1-dolar-morgan-1884-s',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-morgan-1884-s/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-morgan-1884-s/',
    chapterId: 'dolar-morgan',
    year: '1884',
    mint: {
      es: 'San Francisco (marca S)',
      en: 'San Francisco (S mint mark)',
    },
    denomination: {
      es: '1 dólar',
      en: '1 dollar',
    },
    composition: {
      es: 'Plata .900 (90 % Ag, 10 % Cu); ley del tipo, no un ensaye de este ejemplar',
      en: 'Silver .900 (90% Ag, 10% Cu); type fineness, not an assay of this specimen',
    },
    weight: {
      es: '26,73 g (peso de tipo; este ejemplar no se pesó)',
      en: '26.73 g (type weight; this specimen was not weighed)',
    },
    diameter: {
      es: '38,10 mm (medida de tipo; este ejemplar no se midió)',
      en: '38.10 mm (type measurement; this specimen was not measured)',
    },
    edge: {
      es: 'Estriado (tipo publicado; el canto no está en las fotos)',
      en: 'Reeded (published type; the edge is not in the photographs)',
    },
    references: 'KM# 110 · PCGS# 7156 · N# 1492',
    grade: {
      es: 'Sin encapsular. Desgaste en el retrato y en el águila, y marcas en los campos. No es un grado numérico.',
      en: 'Unslabbed. Wear on the portrait and the eagle, and marks in the fields. Not a numerical grade.',
    },
    no_serial_reason:
      'Struck United States Morgan dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1884-s-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1884-s-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1884-s-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 1672,
      faceHeight: 941,
    },
    title: {
      es: '1 dólar Morgan · San Francisco · 1884',
      en: 'Morgan dollar · San Francisco · 1884',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Dólar Morgan de San Francisco, 1884, marca S bajo el lazo. Plata .900, diseño de George T. Morgan. Sin serial, sin VAM y sin encapsular.',
      en: 'San Francisco Morgan dollar, 1884, S mint mark under the bow. .900 silver, George T. Morgan. No serial, no VAM, and unslabbed.',
    },
    description: {
      es: 'Esta pieza es un dólar Morgan de 1884 acuñado en San Francisco. El anverso muestra la Libertad a la izquierda, con gorro frigio, algodón y trigo en el tocado, la cinta LIBERTY y la leyenda E PLURIBUS UNUM; abajo, la fecha 1884 entre estrellas. El reverso lleva el águila con las alas abiertas, flechas y rama de olivo, IN GOD WE TRUST sobre el ave, UNITED STATES OF AMERICA en el arco y ONE DOLLAR bajo la corona. La letra bajo el lazo, encima de DOLLAR, es la marca S. PCGS numera esa acuñación de circulación como 7156. El tipo es plata de 900 milésimas, 26,73 g y 38,10 mm, con canto estriado: son medidas de la emisión, no un pesaje ni un calibre de este ejemplar. Las fotos no muestran el canto. El tipo lleva la M de Morgan en el corte del cuello y en el lazo del reverso; estas fotos no la muestran con la claridad suficiente para registrarla. No se asigna variedad VAM. La pieza está suelta, sin cápsula. El desgaste del retrato y del águila, y las marcas de los campos, se ven en las fotografías; no equivalen a un grado numérico ni certifican autenticidad.',
      en: 'This piece is an 1884 Morgan dollar struck at San Francisco. The obverse shows Liberty facing left, in a Phrygian cap with cotton and wheat, the band LIBERTY, and the legend E PLURIBUS UNUM; below, the date 1884 among stars. The reverse carries the eagle with spread wings, arrows and an olive branch, IN GOD WE TRUST above the bird, UNITED STATES OF AMERICA on the arc, and ONE DOLLAR under the wreath. The letter under the bow, above DOLLAR, is the S mint mark. PCGS numbers that business strike 7156. The type is 900-fine silver, 26.73 g and 38.10 mm, with a reeded edge: those are issue standards, not a weight or a caliper reading of this example. The photographs do not show the edge. The type carries an M for Morgan on the neck truncation and on the reverse bow; these photographs do not show that letter clearly enough to record it. No VAM variety is assigned. The piece is raw, with no holder. Wear on the portrait and the eagle, and marks in the fields, show in the photographs; they are not a numerical grade and they do not certify authenticity.',
    },
    history: {
      es: 'La ley de acuñación de 1873 omitió el dólar de plata estándar. El 28 de febrero de 1878 el Congreso superó el veto y aprobó la ley que lo autoriza de nuevo y le devuelve el curso legal, conocida como Bland-Allison: cada mes el Tesoro compraba no menos de dos millones de dólares en plata, ni más de cuatro, y la acuñaba en esos dólares. La United States Mint sitúa el peso y la ley en los de la ley del 18 de enero de 1837 —26,73 g, 90 % plata y 10 % cobre— y atribuye el diseño a George T. Morgan. Las primeras piezas son de 1878. Filadelfia no pone marca; San Francisco usa S, Nueva Orleans O y Carson City CC. PCGS y Numista dan a la 1884-S una tirada de 3.200.000. La misma fecha existe sin marca, con O y con CC: esta pieza lleva la S. PCGS trata la 1884-S como rareza de estado: la mayor parte salió pronto a la circulación y, sin circular, es escasa. Esa nota es del tipo, no un grado de este ejemplar. Esta ficha no copia estimaciones de supervivencia ni un precio.',
      en: 'The coinage act of 1873 dropped the standard silver dollar. On 28 February 1878 Congress overrode the veto and passed the act that authorizes it again and restores legal tender, known as Bland-Allison: each month the Treasury bought not less than two million dollars of silver, and not more than four, and coined it into those dollars. The United States Mint places the weight and fineness at those of the act of 18 January 1837 — 26.73 g, 90% silver and 10% copper — and attributes the design to George T. Morgan. The first pieces are dated 1878. Philadelphia uses no mint mark; San Francisco uses S, New Orleans O, and Carson City CC. PCGS and Numista give the 1884-S a mintage of 3,200,000. The same date exists with no mark, with O, and with CC: this piece carries the S. PCGS treats the 1884-S as a condition rarity: most of the issue entered circulation early, and uncirculated pieces are scarce. That note describes the type, not a grade of this example. This record copies neither survival estimates nor a price.',
    },
    obverseLegend: {
      es: 'E PLURIBUS UNUM · LIBERTY en la cinta · 1884.',
      en: 'E PLURIBUS UNUM · LIBERTY on the band · 1884.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · IN GOD WE TRUST · ONE DOLLAR · marca S bajo el lazo.',
      en: 'UNITED STATES OF AMERICA · IN GOD WE TRUST · ONE DOLLAR · S mint mark under the bow.',
    },
    frontCaption: {
      es: 'Anverso: Libertad a la izquierda, cinta LIBERTY y fecha 1884.',
      en: 'Obverse: Liberty facing left, LIBERTY band, and the date 1884.',
    },
    backCaption: {
      es: 'Reverso: águila, flechas y olivo; ONE DOLLAR y marca S bajo el lazo.',
      en: 'Reverse: eagle, arrows, and olive branch; ONE DOLLAR and the S under the bow.',
    },
    scarcity: {
      es: 'PCGS CoinFacts (7156) publica la tirada de San Francisco: 3.200.000. Numista (N# 1492) anota la misma cifra en la línea 1884 S. La fecha es una rareza de estado, no una tirada baja: abunda circulada y escasea sin circular. No se reproduce aquí un censo de encapsulados, una estimación de supervivientes ni un precio. El 1884 sin marca, el 1884-O y el 1884-CC son otras piezas.',
      en: 'PCGS CoinFacts (7156) publishes the San Francisco mintage: 3,200,000. Numista (N# 1492) lists the same figure on the 1884 S line. The date is a condition rarity, not a low mintage: it is common circulated and scarce uncirculated. This record reprints neither a slab census, nor a survival estimate, nor a price. The 1884 with no mint mark, the 1884-O, and the 1884-CC are other pieces.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1884 y marca S bajo el lazo—, no un certificado. Las fotos no confirman autenticidad, limpieza ni un grado numérico. No se asigna VAM. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no holder. This module carries no serial number. The identity of this record is the photographed object — date 1884 and an S under the bow — not a certificate. The photographs do not confirm authenticity, cleaning, or a numerical grade. No VAM is assigned. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1884-s-1/7156',
        es: 'PCGS CoinFacts — 1884-S, 1 dólar Morgan (7156)',
        en: 'PCGS CoinFacts — 1884-S Morgan dollar (7156)',
        note: {
          es: 'George T. Morgan; San Francisco; business strike. Plata 90 %, 26,73 g, 38,10 mm, canto estriado. Tirada 3.200.000. No se republican precios ni un censo.',
          en: 'George T. Morgan; San Francisco; business strike. 90% silver, 26.73 g, 38.10 mm, reeded edge. Mintage 3,200,000. Prices and a census are not republished.',
        },
      },
      {
        href: 'https://en.numista.com/1492',
        es: 'Numista — 1 dólar Morgan (N# 1492)',
        en: 'Numista — Morgan dollar (N# 1492)',
        note: {
          es: 'KM# 110; 1878–1921; plata .900; 26,73 g; 38,1 mm; canto estriado. La línea 1884 S da 3.200.000. No se republican precios.',
          en: 'KM# 110; 1878–1921; .900 silver; 26.73 g; 38.1 mm; reeded edge. The 1884 S line gives 3,200,000. Prices are not republished.',
        },
      },
      {
        href: 'https://www.usmint.gov/news/inside-the-mint/one-hundred-years-of-silver-dollar-coinage-1878-1978',
        es: 'United States Mint — Cien años del dólar de plata (1878–1978)',
        en: 'United States Mint — One hundred years of silver dollar coinage (1878–1978)',
        note: {
          es: 'Bland-Allison restablece el peso y la ley de 1837. Diseño de George T. Morgan: Libertad y águila heráldica. San Francisco acuña desde 1878.',
          en: 'Bland-Allison restores the 1837 weight and fineness. Design by George T. Morgan: Liberty and a heraldic eagle. San Francisco strikes from 1878.',
        },
      },
      {
        href: 'https://www.govinfo.gov/content/pkg/STATUTE-20/pdf/STATUTE-20-Pg25-2.pdf',
        es: '20 Stat. 25 — Ley del dólar de plata estándar (28 feb. 1878)',
        en: '20 Stat. 25 — Standard silver dollar act (28 Feb. 1878)',
        note: {
          es: 'Autoriza el dólar de plata de curso legal y ordena la compra mensual de plata, entre dos y cuatro millones de dólares, para acuñarla.',
          en: 'Authorizes the legal-tender silver dollar and orders the monthly purchase of silver, between two and four million dollars, to be coined.',
        },
      },
      {
        href: 'https://www.usmint.gov/news/inside-the-mint/mint-history-crime-of-1873',
        es: 'United States Mint — El «Crime of 1873»',
        en: 'United States Mint — The “Crime of 1873”',
        note: {
          es: 'Contexto de la ley de 1873 y del Bland-Allison de 1878, que ordena comprar cada mes entre dos y cuatro millones de dólares en plata.',
          en: 'Context for the 1873 act and for Bland-Allison in 1878, which orders monthly purchases of two to four million dollars of silver.',
        },
      },
    ],
  },
  {
    id: '1-dolar-morgan-1883-cc',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-morgan-1883-cc/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-morgan-1883-cc/',
    chapterId: 'dolar-morgan',
    year: '1883',
    mint: {
      es: 'Carson City (marca CC)',
      en: 'Carson City (CC mint mark)',
    },
    denomination: {
      es: '1 dólar',
      en: '1 dollar',
    },
    composition: {
      es: 'Plata .900 (90 % Ag, 10 % Cu)',
      en: 'Silver .900 (90% Ag, 10% Cu)',
    },
    weight: {
      es: '26,73 g (especificación de emisión; este ejemplar no se pesó)',
      en: '26.73 g (issue specification; this example was not weighed)',
    },
    diameter: {
      es: '38,1 mm (especificación de emisión; este ejemplar no se midió)',
      en: '38.1 mm (issue specification; this example was not measured)',
    },
    edge: {
      es: 'Estriado (especificación de emisión; el canto no está fotografiado)',
      en: 'Reeded (issue specification; the edge is not photographed)',
    },
    references: 'KM# 110 · PCGS# 7144 · N# 1492',
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    no_serial_reason:
      'Struck United States Morgan silver dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-1-dollar-1883-cc-morgan-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-1-dollar-1883-cc-morgan-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-1-dollar-1883-cc-morgan-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 1672,
      faceHeight: 941,
    },
    title: {
      es: '1 dólar Morgan · Carson City · 1883',
      en: 'Morgan dollar · Carson City · 1883',
    },
    kicker: {
      es: 'Estados Unidos · United States Mint',
      en: 'United States · United States Mint',
    },
    lead: {
      es: 'Dólar Morgan de Carson City, 1883, con marca CC. Plata de 900 milésimas, diseño de George T. Morgan, sin serial y sin encapsular.',
      en: 'Carson City Morgan dollar, 1883, with the CC mint mark. .900 silver, George T. Morgan’s design, no serial, and unslabbed.',
    },
    description: {
      es: 'Esta pieza es el dólar Morgan de 1883 acuñado en Carson City. La marca CC se lee en el reverso, bajo la corona y encima de ONE DOLLAR. El anverso muestra el perfil de la Libertad a la izquierda, con gorro frigio, la cinta LIBERTY, el lema E PLURIBUS UNUM, trece estrellas y la fecha 1883. El reverso lleva el águila de alas abiertas, flechas y rama de olivo, la leyenda UNITED STATES OF AMERICA, IN GOD WE TRUST y ONE DOLLAR. George T. Morgan diseñó ambas caras. En el tipo, su inicial M va en el corte del cuello y en el lazo del reverso. PCGS numera el golpe de negocio 1883-CC como 7144. El 7145 es la designación PL, el 97145 la DMPL y el 518869 la atribución GSA Hoard. Esta fotografía no asigna PL, DMPL ni un VAM, y la pieza no está en un estuche GSA. Numista recoge el tipo como N# 1492, KM# 110. La ley publicada es 90 % plata y 10 % cobre, 26,73 g y 38,1 mm, con canto estriado: son especificaciones de emisión. Este ejemplar no se pesó ni se midió, y el canto queda fuera del encuadre. En la foto se ven líneas y marcas en los campos. La pieza está suelta, sin cápsula. El 1883 sin letra es Filadelfia (PCGS 7142); esta marca es CC.',
      en: 'This piece is the 1883 Morgan dollar struck at Carson City. The CC mint mark reads on the reverse, under the wreath and above ONE DOLLAR. The obverse shows Liberty’s profile facing left, in a Phrygian cap, with the band LIBERTY, the motto E PLURIBUS UNUM, thirteen stars, and the date 1883. The reverse carries the eagle with spread wings, arrows and an olive branch, the legend UNITED STATES OF AMERICA, IN GOD WE TRUST, and ONE DOLLAR. George T. Morgan designed both sides. On the type, his initial M sits on the truncation of the neck and in the reverse bow. PCGS numbers the 1883-CC business strike 7144. 7145 is the PL designation, 97145 the DMPL, and 518869 the GSA Hoard attribution. This photograph assigns neither PL, DMPL, nor a VAM, and the piece is not in a GSA holder. Numista lists the type as N# 1492, KM# 110. The published standard is 90% silver and 10% copper, 26.73 g and 38.1 mm, with a reeded edge: those are issue specifications. This example was not weighed or measured, and the edge is outside the frame. The photograph shows lines and marks in the fields. The piece is raw, with no holder. The 1883 with no letter is Philadelphia (PCGS 7142); this mark is CC.',
    },
    history: {
      es: 'La United States Mint explica que la ley Bland–Allison de 1878 reautorizó el dólar de plata al peso y la ley del acta del 18 de enero de 1837: 26,73 g y .900. El primer Morgan salió en Filadelfia en 1878 y, el mismo año, en San Francisco y Carson City, cerca de las minas del Oeste. El anverso empareja a la Libertad con el águila del reverso, que sostiene flechas y una rama de olivo. Carson City marcó sus piezas con CC. Esta ficha describe el objeto de la colección; no tasa la emisión.',
      en: 'The United States Mint explains that the Bland–Allison Act of 1878 reauthorized the silver dollar at the weight and fineness of the act of 18 January 1837: 26.73 g and .900 fine. The first Morgan came from Philadelphia in 1878 and, the same year, from San Francisco and Carson City, near the mines of the West. The obverse pairs Liberty with the reverse eagle, which holds arrows and an olive branch. Carson City marked its pieces CC. This record describes the object in the collection; it does not value the issue.',
    },
    obverseLegend: {
      es: 'E PLURIBUS UNUM · LIBERTY en la cinta · trece estrellas · 1883.',
      en: 'E PLURIBUS UNUM · LIBERTY on the band · thirteen stars · 1883.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · IN GOD WE TRUST · ONE DOLLAR · marca CC bajo la corona.',
      en: 'UNITED STATES OF AMERICA · IN GOD WE TRUST · ONE DOLLAR · CC mint mark under the wreath.',
    },
    frontCaption: {
      es: 'Anverso: perfil de la Libertad a la izquierda, cinta LIBERTY, E PLURIBUS UNUM y fecha 1883.',
      en: 'Obverse: Liberty’s profile facing left, LIBERTY band, E PLURIBUS UNUM, and the date 1883.',
    },
    backCaption: {
      es: 'Reverso: águila con flechas y olivo; ONE DOLLAR; marca CC bajo la corona.',
      en: 'Reverse: eagle with arrows and olive branch; ONE DOLLAR; CC mint mark under the wreath.',
    },
    scarcity: {
      es: 'PCGS da 1.204.000 como tirada del 1883-CC (7144). Esa cifra es la acuñación de Carson City para la fecha, no un censo de este ejemplar. Greysheet anota que la GSA distribuyó 755.518 piezas de esa fecha en la venta del tesoro de Carson City: es un recuento de la distribución del tesoro, no una población certificada ni la procedencia de esta moneda, que no conserva estuche GSA. PCGS estima unos 700.000 supervivientes en todos los grados, 500.000 en MS60 o mejor y 34.000 en MS65 o mejor. Son estimaciones de expertos —incluyen piezas sueltas y encapsuladas por cualquier casa—, no un recuento de certificados ni de este ejemplar. No se publica un precio.',
      en: 'PCGS gives 1,204,000 as the mintage of the 1883-CC (7144). That figure is the Carson City coinage for the date, not a census of this example. Greysheet notes that the GSA distributed 755,518 pieces of that date in the Carson City Treasury sale: a hoard-distribution count, not a certified population and not the provenance of this coin, which keeps no GSA holder. PCGS estimates about 700,000 survivors in all grades, 500,000 in MS60 or better, and 34,000 in MS65 or better. Those are expert estimates — they include raw pieces and coins certified by any service — not a certificate count and not a count of this example. This record publishes no price.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa, y sin número de certificado. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado —fecha 1883, marca CC, dólar Morgan— no un certificado. La foto muestra líneas y marcas; no fija autenticidad de un tercero, grado numérico, limpieza, PL, DMPL ni un VAM. El peso y el diámetro de la ficha son los de la emisión, no una medición de esta pieza. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder, and with no certification number. This module carries no serial number. The identity of this record is the photographed object — date 1883, CC mint mark, Morgan dollar — not a certificate. The photograph shows lines and marks; it does not settle a third-party authentication, a numerical grade, cleaning, PL, DMPL, or a VAM. The weight and diameter on this record are the issue specifications, not a measurement of this piece. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1883-cc-1/7144',
        es: 'PCGS CoinFacts — 1883-CC, 1 dólar Morgan (7144)',
        en: 'PCGS CoinFacts — 1883-CC Morgan dollar (7144)',
        note: {
          es: 'George T. Morgan; Carson City; canto estriado; 38,10 mm; 26,73 g; 90 % plata y 10 % cobre; tirada 1.204.000. Estimación de supervivientes: 700.000, 500.000 en MS60 o mejor y 34.000 en MS65 o mejor. El PL es el 7145, el DMPL el 97145 y el GSA Hoard el 518869. No se republican precios.',
          en: 'George T. Morgan; Carson City; reeded edge; 38.10 mm; 26.73 g; 90% silver and 10% copper; mintage 1,204,000. Survival estimate: 700,000, 500,000 in MS60 or better, and 34,000 in MS65 or better. PL is 7145, DMPL is 97145, and the GSA Hoard is 518869. Prices are not republished.',
        },
      },
      {
        href: 'https://www.usmint.gov/news/inside-the-mint/one-hundred-years-of-silver-dollar-coinage-1878-1978',
        es: 'United States Mint — Cien años del dólar de plata, 1878–1978',
        en: 'United States Mint — One hundred years of silver dollar coinage, 1878–1978',
        note: {
          es: 'Bland–Allison reautorizó el dólar de 26,73 g y ley .900 del acta del 18 de enero de 1837. Diseño de George T. Morgan. Filadelfia, San Francisco y Carson City acuñaron en 1878.',
          en: 'Bland–Allison reauthorized the 26.73 g, .900 dollar of the act of 18 January 1837. Design by George T. Morgan. Philadelphia, San Francisco, and Carson City struck it in 1878.',
        },
      },
      {
        href: 'https://en.numista.com/1492',
        es: 'Numista — 1 dólar Morgan (N# 1492)',
        en: 'Numista — 1 dollar Morgan (N# 1492)',
        note: {
          es: 'KM# 110; 1878–1921; plata .900; 26,73 g; 38,1 mm. El 1883 sin marca de ceca es otra acuñación (PCGS 7142). No se republican precios.',
          en: 'KM# 110; 1878–1921; .900 silver; 26.73 g; 38.1 mm. The 1883 with no mint mark is another coinage (PCGS 7142). Prices are not republished.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/1883-cc-morgan-silver-dollar-gsa-hoard-hard-package-proof-like-coin-values/gsid/213961',
        es: 'Greysheet — distribución GSA del 1883-CC (GSID 213961)',
        en: 'Greysheet — 1883-CC GSA distribution (GSID 213961)',
        note: {
          es: '755.518 piezas de 1883-CC salieron en la venta GSA, sobre una tirada de 1.204.000. Es un recuento de distribución, no la procedencia de este ejemplar suelto. No se republican precios.',
          en: '755,518 pieces of the 1883-CC came out in the GSA sale, from a mintage of 1,204,000. That is a distribution count, not the provenance of this raw example. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: '1-dolar-morgan-1885-cc',
    path: '/coleccion/estados-unidos-numismatica/1-dolar-morgan-1885-cc/',
    pathEn: '/en/collection/united-states-numismatics/1-dollar-morgan-1885-cc/',
    chapterId: 'dolar-morgan',
    year: '1885',
    mint: {
      es: 'Carson City (marca CC)',
      en: 'Carson City (CC mint mark)',
    },
    denomination: {
      es: '1 dólar',
      en: '1 dollar',
    },
    composition: {
      es: 'Plata .900 (90 % Ag, 10 % Cu); especificación de tipo, no un ensayo de este ejemplar',
      en: 'Silver .900 (90% Ag, 10% Cu); a type specification, not an assay of this specimen',
    },
    weight: {
      es: 'No pesado. Tipo: 26,73 g (PCGS, Numista).',
      en: 'Not weighed. Type: 26.73 g (PCGS, Numista).',
    },
    diameter: {
      es: 'No medido. Tipo: 38,1 mm (PCGS, Numista).',
      en: 'Not measured. Type: 38.1 mm (PCGS, Numista).',
    },
    edge: {
      es: 'Estriado (tipo publicado; las fotos no muestran el canto)',
      en: 'Reeded (published type; the photographs do not show the edge)',
    },
    references: 'KM# 110 · PCGS# 7160 · N# 1492',
    grade: {
      es: 'Sin encapsular. Líneas finas en el retrato y los campos; no es un grado numérico ni una atribución PL o DMPL.',
      en: 'Unslabbed. Fine lines on the portrait and the fields; not a numerical grade and not a PL or DMPL attribution.',
    },
    no_serial_reason:
      'Struck United States Morgan dollar: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1885-cc-composite.png',
      front: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1885-cc-front.png',
      back: '/images/catalog/united-states/united-states-mint-1-dollar-morgan-1885-cc-back.png',
      width: 1672,
      height: 941,
      faceWidth: 1672,
      faceHeight: 941,
    },
    title: {
      es: '1 dólar Morgan · Carson City · 1885',
      en: 'Morgan dollar · Carson City · 1885',
    },
    kicker: {
      es: 'Estados Unidos · ceca de Carson City',
      en: 'United States · Carson City mint',
    },
    lead: {
      es: 'Dólar Morgan de 1885, ceca de Carson City, marca CC bajo la corona. Plata .900 de George T. Morgan. Sin serial, sin cápsula y sin procedencia GSA documentada.',
      en: '1885 Morgan dollar, Carson City mint, CC under the wreath. .900 silver by George T. Morgan. No serial, no holder, and no documented GSA provenance.',
    },
    description: {
      es: 'Esta pieza es un dólar Morgan de 1885, acuñado en Carson City. El anverso muestra el busto de la Libertad a la izquierda, con la diadema LIBERTY, E PLURIBUS UNUM arriba, trece estrellas y la fecha 1885. El reverso lleva el águila de Morgan con escudo, rama de olivo y flechas, la corona de laurel y trigo, UNITED STATES OF AMERICA, In God we trust y ONE DOLLAR. Bajo el lazo se lee CC. Las dos caras están fotografiadas en posición de lectura, con el encuadre completo. En el retrato y en los campos se ven líneas finas. Pueden deberse a una limpieza abrasiva; las fotos no alcanzan para afirmarlo, ni para un grado numérico, ni para PL o DMPL, ni para un VAM. El canto no está en el encuadre. El ejemplar no se pesó ni se midió. PCGS (7160) y Numista (N# 1492, KM# 110) dan, como cifras de tipo, plata .900, 26,73 g, 38,1 mm y canto estriado. La pieza está suelta, sin cápsula de PCGS, NGC u otra casa, y sin estuche GSA.',
      en: 'This piece is an 1885 Morgan dollar, struck at Carson City. The obverse shows Liberty’s bust facing left, with the coronet LIBERTY, E PLURIBUS UNUM above, thirteen stars, and the date 1885. The reverse carries Morgan’s eagle with a shield, an olive branch, and arrows, the laurel-and-wheat wreath, UNITED STATES OF AMERICA, In God we trust, and ONE DOLLAR. CC is readable under the bow. Both faces are photographed upright, full frame. Fine lines cross the portrait and the fields. They may come from abrasive cleaning; the photographs are not enough to assert that, or a numerical grade, or PL or DMPL, or a VAM. The edge is outside the frame. The example was not weighed or measured. PCGS (7160) and Numista (N# 1492, KM# 110) give, as type figures, .900 silver, 26.73 g, 38.1 mm, and a reeded edge. The piece is raw, with no PCGS, NGC, or other holder, and no GSA case.',
    },
    history: {
      es: 'La ley Bland-Allison del 28 de febrero de 1878 ordenó comprar plata y convertirla en dólares de curso legal. Morgan preparó los cuños; Carson City los usó. En 1885 la casa de Nevada acuñó 228.000 dólares con marca CC y cerró la acuñación en noviembre. El informe del director de la Mint para el año fiscal de 1886 aclara que las 28.000 piezas entregadas después del 1 de julio de 1885 se habían acuñado antes y llevan fecha 1885: no existe un dólar 1886-CC. La ceca no reanudó la moneda hasta el 1 de julio de 1889. Bowers, en el texto que reproduce PCGS, señala que muy pocos 1885-CC entraron en circulación en el siglo XIX y que los ejemplares gastados son escasos. Tras las dispersiones del Tesoro de 1962–1964, 148.285 piezas quedaron reservadas para las ventas de la GSA, entre 1972 y 1974 y en el cierre de 1980. Esa reserva explica que una fecha de tirada baja siga viéndose sin circular. La procedencia GSA de este ejemplar no consta. Esta ficha describe el objeto fotografiado; no tasa la emisión.',
      en: 'The Bland-Allison Act of 28 February 1878 ordered the purchase of silver and its conversion into legal-tender dollars. Morgan prepared the dies; Carson City used them. In 1885 the Nevada house struck 228,000 dollars with the CC mint mark and stopped coinage in November. The Director of the Mint’s report for fiscal year 1886 states that the 28,000 pieces delivered after 1 July 1885 had been struck earlier and are dated 1885: there is no 1886-CC dollar. The mint did not resume coinage until 1 July 1889. Bowers, in the text PCGS reprints, notes that very few 1885-CC dollars entered circulation in the nineteenth century and that worn examples are scarce. After the Treasury dispersals of 1962–1964, 148,285 pieces were held back for the GSA sales, in 1972–1974 and in the 1980 close. That reserve explains why a low-mintage date is still seen uncirculated. GSA provenance for this example is not recorded. This record describes the photographed object; it does not value the issue.',
    },
    obverseLegend: {
      es: 'E · PLURIBUS · UNUM · LIBERTY en la diadema · trece estrellas · 1885.',
      en: 'E · PLURIBUS · UNUM · LIBERTY on the coronet · thirteen stars · 1885.',
    },
    reverseLegend: {
      es: 'UNITED STATES OF AMERICA · In God we trust · ONE DOLLAR · CC bajo el lazo de la corona.',
      en: 'UNITED STATES OF AMERICA · In God we trust · ONE DOLLAR · CC under the wreath bow.',
    },
    frontCaption: {
      es: 'Anverso: busto de la Libertad a la izquierda; LIBERTY; E PLURIBUS UNUM; fecha 1885.',
      en: 'Obverse: Liberty’s bust facing left; LIBERTY; E PLURIBUS UNUM; date 1885.',
    },
    backCaption: {
      es: 'Reverso: águila, corona, ONE DOLLAR y marca CC bajo el lazo.',
      en: 'Reverse: eagle, wreath, ONE DOLLAR, and the CC mint mark under the bow.',
    },
    scarcity: {
      es: 'PCGS publica 228.000 como tirada de circulación del 1885-CC (7160). No hubo pruebas. Las entregas que recoge son 100.000 en enero, 100.000 en febrero y 28.000 en agosto. El mismo registro estima 174.250 supervivientes en todos los grados, 155.750 en MS-60 o mejor y 18.150 en MS-65 o mejor: son promedios de opinión experta, distintos de la tirada y de un censo de encapsulados. Al terminar las dispersiones de 1962–1964, el Tesoro retuvo 148.285 ejemplares para la GSA. Los ejemplares circulados son escasos, según ese relato. Nada de eso fija el estado de esta pieza ni prueba que saliera de una venta GSA. No se publica un precio.',
      en: 'PCGS publishes 228,000 as the business-strike mintage of the 1885-CC (7160). There were no proofs. The deliveries it records are 100,000 in January, 100,000 in February, and 28,000 in August. The same record estimates 174,250 survivors in all grades, 155,750 in MS-60 or better, and 18,150 in MS-65 or better: expert-opinion averages, distinct from the mintage and from a slab census. At the end of the 1962–1964 dispersals, the Treasury held back 148,285 examples for the GSA. Circulated examples are scarce, on that account. None of this fixes the state of this piece or proves that it came from a GSA sale. No price is published.',
    },
    certification: {
      es: 'Sin cápsula y sin número de certificado. Este módulo no lleva número de serie. La identidad de la ficha es el objeto fotografiado: fecha 1885, marca CC, tipo Morgan. Las líneas finas del retrato y de los campos quedan a la vista; no se les asigna aquí un grado de detalle ni se afirma una limpieza. No se atribuye VAM, PL ni DMPL. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'No holder and no certification number. This module carries no serial number. The identity of this record is the photographed object: date 1885, CC mint mark, Morgan type. The fine lines on the portrait and the fields remain visible; no details grade is assigned here, and cleaning is not asserted. No VAM, PL, or DMPL is attributed. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1885-cc-1/7160',
        es: 'PCGS CoinFacts — 1885-CC, 1 dólar (7160)',
        en: 'PCGS CoinFacts — 1885-CC dollar (7160)',
        note: {
          es: 'George T. Morgan; Carson City; plata 90 % y cobre 10 %; 26,73 g; 38,10 mm; canto estriado; tirada 228.000. Estimaciones de supervivencia: 174.250, 155.750 en 60 o mejor y 18.150 en 65 o mejor. Reserva GSA: 148.285. Cierre de acuñación en noviembre de 1885; reanudación el 1 de julio de 1889. No se republican precios.',
          en: 'George T. Morgan; Carson City; 90% silver and 10% copper; 26.73 g; 38.10 mm; reeded edge; mintage 228,000. Survival estimates: 174,250, 155,750 in 60 or better, and 18,150 in 65 or better. GSA holdback: 148,285. Coinage stopped in November 1885; it resumed on 1 July 1889. Prices are not republished.',
        },
      },
      {
        href: 'https://en.numista.com/1492',
        es: 'Numista — 1 dólar Morgan (N# 1492)',
        en: 'Numista — Morgan dollar (N# 1492)',
        note: {
          es: 'KM# 110; 1878–1921; plata .900; 26,73 g; 38,1 mm; canto estriado. El 1885 con marca CC figura en 228.000. No se republican precios.',
          en: 'KM# 110; 1878–1921; .900 silver; 26.73 g; 38.1 mm; reeded edge. The 1885 with the CC mint mark is listed at 228,000. Prices are not republished.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Bland%E2%80%93Allison_Act',
        es: 'Wikipedia — Bland–Allison Act',
        en: 'Wikipedia — Bland–Allison Act',
        note: {
          es: 'Ley del 28 de febrero de 1878: compra de plata y acuñación de dólares de curso legal. No se republican precios.',
          en: 'Act of 28 February 1878: silver purchases and the striking of legal-tender dollars. Prices are not republished.',
        },
      },
    ],
  },
  {
    id: 'medalla-1836-primera-acunacion-vapor',
    path: '/coleccion/estados-unidos-numismatica/medalla-1836-primera-acunacion-a-vapor/',
    pathEn: '/en/collection/united-states-numismatics/medal-1836-first-steam-coinage/',
    chapterId: 'medallas-ceca',
    year: '1836',
    mint: {
      es: 'Filadelfia, United States Mint. La fecha 1836 conmemora el acontecimiento; el año de fabricación de este ejemplar no está fijado.',
      en: 'Philadelphia, United States Mint. The date 1836 commemorates the event; the year this example was struck is not established.',
    },
    denomination: {
      es: 'Medalla conmemorativa (sin valor facial)',
      en: 'Commemorative medal (no face value)',
    },
    composition: {
      es: 'Bronce, según la descripción del ejemplar; aleación no ensayada. El Smithsonian cataloga su ejemplar del tipo como latón.',
      en: 'Bronze, as described for this example; alloy not assayed. The Smithsonian catalogues its example of the type as brass.',
    },
    weight: {
      es: 'No pesado en esta ficha',
      en: 'Not weighed for this record',
    },
    diameter: {
      es: '28 mm (medida aportada con el ejemplar; el Smithsonian da 28 mm al tipo, ficha 1991.0009.0520)',
      en: '28 mm (measurement supplied with the example; the Smithsonian gives the type as 28 mm, record 1991.0009.0520)',
    },
    edge: {
      es: 'No establecido: las fotografías no muestran el canto',
      en: 'Not established: the photographs do not show the edge',
    },
    references: 'Julian MT-21 · PCGS #783671 · Smithsonian 1991.0009.0520',
    artform: 'Medal',
    aboutHeading: {
      es: 'La medalla',
      en: 'The medal',
    },
    grade: {
      es: 'Sin encapsular. Leyendas legibles; reflejos de funda. No es un grado numérico.',
      en: 'Unslabbed. Legends legible; sleeve reflections. Not a numerical grade.',
    },
    no_serial_reason:
      'United States Mint commemorative medal: the type carries no serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/united-states/united-states-mint-medal-1836-first-steam-coinage-mt-21-composite.jpg',
      front: '/images/catalog/united-states/united-states-mint-medal-1836-first-steam-coinage-mt-21-front.jpg',
      back: '/images/catalog/united-states/united-states-mint-medal-1836-first-steam-coinage-mt-21-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    heading: {
      es: 'Medalla de 1836 — acuñación a vapor',
      en: '1836 First Steam Coinage medal',
    },
    title: {
      es: 'Medalla · Primera acuñación a vapor · 1836',
      en: 'Medal · First steam coinage · 1836',
    },
    kicker: {
      es: 'Estados Unidos · medalla de la ceca',
      en: 'United States · Mint medal',
    },
    lead: {
      es: 'Medalla de la United States Mint, 1836, Julian MT-21. Gorro LIBERTY y FIRST STEAM COINAGE, MAR. 23. Bronce amarillo provisional. Sin serial ni cápsula.',
      en: 'United States Mint medal, 1836, Julian MT-21: Liberty cap and FIRST STEAM COINAGE, MAR. 23. Yellow-bronze restrike, provisional. No serial and unslabbed.',
    },
    description: {
      es: 'Esta pieza es una medalla de la United States Mint, sin valor facial, con la fecha 1836. El anverso lleva un gorro de la Libertad con LIBERTY en la banda, rodeado de rayos y de una orla de dentículos. El reverso lee UNITED STATES MINT en el arco, FIRST STEAM COINAGE en el centro, MAR. 23. y 1836 abajo, también con dentículos. La leyenda visible es la de marzo, de modo que el tipo es el Julian MT-21. El color amarillo y el aspecto texturado de la superficie concuerdan con la reacuñación en bronce amarillo que PCGS separa como 783671. Esa atribución queda en provisional: las fotos muestran reflejos de funda y no permiten separar una marca fina del metal de una marca del plástico, ni fijar el año de fabricación, ni un grado, ni la alineación de los cuños. El sobrefecha MAR. 23 sobre FEB. 22, propio de las primeras impresiones de marzo, no se afirma con estas fotografías. Christian Gobrecht está acreditado por el Smithsonian como grabador de ambas caras del tipo. El ejemplar del museo, 1991.0009.0520, mide 28 mm y está catalogado en latón; esa ficha no autentica este disco. El quarter eagle Liberty Head de 1878 de esta colección es otra obra de Gobrecht, en oro de curso. Sin serial y sin cápsula.',
      en: 'This piece is a United States Mint medal, with no face value, dated 1836. The obverse carries a Liberty cap with LIBERTY on the band, surrounded by rays and a denticled border. The reverse reads UNITED STATES MINT on the arc, FIRST STEAM COINAGE at center, MAR. 23. and 1836 below, also with denticles. The legend in view is the March legend, so the type is Julian MT-21. The yellow color and textured surface agree with the yellow-bronze restrike PCGS separates as 783671. That attribution stays provisional: the photographs show sleeve reflections and do not separate a fine mark on the metal from a mark on the plastic, or fix a year of manufacture, a grade, or the die alignment. The overdate MAR. 23 over FEB. 22, a feature of the earliest March impressions, is not asserted from these photographs. The Smithsonian credits Christian Gobrecht as engraver of both sides of the type. The museum example, 1991.0009.0520, measures 28 mm and is catalogued as brass; that record does not authenticate this disc. This collection’s 1878 Liberty Head quarter eagle is another work by Gobrecht, in circulating gold. No serial and no holder.',
    },
    history: {
      es: 'La medalla recuerda la puesta en marcha, el 23 de marzo de 1836, de la prensa de vapor en la ceca de Filadelfia. Patterson había previsto el estreno para el 22 de febrero. Gobrecht preparó cuños con FEB. 22; al fijarse la nueva fecha, el reverso pasó a MAR. 23 sobre FEB. 22. Ese 23 de marzo Patterson escribió a Levi Woodbury que enviaba cobres acuñados ese día en la prensa nueva por vapor, los primeros golpeados con esa fuerza en América, y que el día marcaba una época en la acuñación. La prensa, de diseño Thonnelier, llegó por Merrick, Agnew y Tyler; Franklin Peale la adaptó en la ceca. El Franklin Institute, que conserva esa máquina, publica una capacidad de unos 100 ejemplares por minuto. El informe del director del 1 de enero de 1817 ya registraba, tras el incendio de enero de 1816, una máquina de vapor en el laminado, en lugar del tiro de caballos: el hito de 1836 es el golpe del cuño. Las piezas de febrero, Julian MT-20, son raras; esa rareza no se traslada a un ejemplar tardío de bronce amarillo con fecha de marzo. PCGS deja la tirada de 783671 sin cifra. Esta ficha no publica precios ni un censo.',
      en: 'The medal commemorates the start, on 23 March 1836, of the steam press at the Philadelphia mint. Patterson had planned the debut for 22 February. Gobrecht prepared dies reading FEB. 22; when the new date was set, the reverse became MAR. 23 over FEB. 22. On that 23 March Patterson wrote to Levi Woodbury that he was sending coppers struck that day on the new press by steam, the first struck by that power in America, and that the day marked an epoch in the coinage. The press, a Thonnelier design, arrived through Merrick, Agnew, and Tyler; Franklin Peale adapted it at the mint. The Franklin Institute, which holds that machine, publishes a capacity of about 100 pieces a minute. The director’s report of 1 January 1817 already recorded, after the January 1816 fire, a steam engine in the rolling mill in place of horse power: the 1836 milestone is the blow of the die. The February pieces, Julian MT-20, are rare; that rarity does not carry over to a later yellow-bronze example with the March date. PCGS leaves the mintage of 783671 unpublished. This record publishes neither prices nor a census.',
    },
    obverseLegend: {
      es: 'LIBERTY en la banda del gorro; rayos; orla de dentículos.',
      en: 'LIBERTY on the cap band; rays; denticled border.',
    },
    reverseLegend: {
      es: 'UNITED STATES MINT · FIRST STEAM COINAGE · MAR. 23. · 1836.',
      en: 'UNITED STATES MINT · FIRST STEAM COINAGE · MAR. 23. · 1836.',
    },
    frontCaption: {
      es: 'Anverso: gorro de la Libertad con LIBERTY, entre rayos.',
      en: 'Obverse: Liberty cap inscribed LIBERTY, among rays.',
    },
    backCaption: {
      es: 'Reverso: UNITED STATES MINT, FIRST STEAM COINAGE, MAR. 23. y 1836.',
      en: 'Reverse: UNITED STATES MINT, FIRST STEAM COINAGE, MAR. 23. and 1836.',
    },
    scarcity: {
      es: 'Julian MT-20 es la impresión de febrero, con FEB. 22. Julian MT-21 es la de marzo, con MAR. 23. PCGS 514737 es el MT-21 de cobre en acuñación regular; 783671 es la reacuñación en bronce amarillo del mismo tipo, con la fecha entre comillas. En ambas fichas la tirada figura como no disponible, y el metal de 783671 sigue anotado como copper pese al título yellow bronze. El Smithsonian no clasifica su ejemplar de latón como original ni como reacuñación. El color y la textura de esta pieza apoyan 783671, sin certeza sobre el año de fabricación. No se republica un precio ni una población de encapsulados.',
      en: 'Julian MT-20 is the February impression, reading FEB. 22. Julian MT-21 is the March impression, reading MAR. 23. PCGS 514737 is the copper MT-21 business strike; 783671 is the yellow-bronze restrike of the same type, with the date in quotation marks. On both records the mintage is unavailable, and the metal of 783671 remains entered as copper despite the yellow-bronze title. The Smithsonian does not class its brass example as an original or as a restrike. The color and texture of this piece support 783671, without certainty about the year of manufacture. No price and no slab population are republished.',
    },
    certification: {
      es: 'Sin cápsula y sin número de certificado. La medalla no lleva número de serie. La identidad de la ficha es el objeto fotografiado: fecha 1836, leyenda MAR. 23, tipo MT-21. La atribución de reacuñación no es un certificado de autenticidad. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'No holder and no certification number. The medal carries no serial number. The identity of this record is the photographed object: date 1836, legend MAR. 23, type MT-21. The restrike attribution is not a certificate of authenticity. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://americanhistory.si.edu/collections/object/nmah_1094089',
        es: 'Smithsonian — Medalla First Steam Coinage, 1836',
        en: 'Smithsonian — First Steam Coinage medal, 1836',
        note: {
          es: 'Ficha 1991.0009.0520. Gobrecht, anverso y reverso. Latón, acuñación, 28 mm. Leyendas LIBERTY y UNITED STATES MINT / 1836 / FIRST STEAM COINAGE / MAR. 23. No autentica este ejemplar.',
          en: 'Record 1991.0009.0520. Gobrecht, obverse and reverse. Brass, struck, 28 mm. Legends LIBERTY and UNITED STATES MINT / 1836 / FIRST STEAM COINAGE / MAR. 23. It does not authenticate this example.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1836-j-mt-21-yellow-bronze-first-steam-coinage/783671',
        es: 'PCGS CoinFacts — reacuñación 783671, bronce amarillo, J-MT-21',
        en: 'PCGS CoinFacts — restrike 783671, yellow bronze, J-MT-21',
        note: {
          es: 'Título con la fecha entre comillas. Tirada, diámetro, peso, canto y diseñador: no disponibles. Metal anotado como copper. No se republican precios.',
          en: 'Title with the date in quotation marks. Mintage, diameter, weight, edge, and designer: unavailable. Metal entered as copper. Prices are not republished.',
        },
      },
      {
        href: 'https://www.pcgs.com/coinfacts/coin/1836-ae-medal-j-mt-21-first-steam-coinage/514737',
        es: 'PCGS CoinFacts — 1836 AE, J-MT-21, acuñación regular (514737)',
        en: 'PCGS CoinFacts — 1836 AE, J-MT-21, regular strike (514737)',
        note: {
          es: 'El MT-21 de cobre, distinto de la reacuñación 783671. Tirada no disponible. No se republican precios.',
          en: 'The copper MT-21, distinct from restrike 783671. Mintage unavailable. Prices are not republished.',
        },
      },
      {
        href: 'https://www.numismaticnews.net/archive/little-known-medals-make-a-challenging-set',
        es: 'Numismatic News — Little known medals make a challenging set',
        en: 'Numismatic News — Little known medals make a challenging set',
        note: {
          es: 'Gobrecht, cuños de centavo, estreno previsto el 22 de febrero de 1836 y sobrefecha MAR. 23 sobre FEB. 22. No se republican precios.',
          en: 'Gobrecht, cent-sized dies, a debut planned for 22 February 1836, and the overdate MAR. 23 over FEB. 22. Prices are not republished.',
        },
      },
      {
        href: 'https://www.coinbooks.org/esylum_v17n33a19.html',
        es: 'The E-Sylum — The very first steam coinage medal',
        en: 'The E-Sylum — The very first steam coinage medal',
        note: {
          es: 'Carta de Patterson a Woodbury el 23 de marzo de 1836 y el atraso desde el 22 de febrero. El canto grabado «The Very First» pertenece a otro ejemplar, no a esta ficha.',
          en: 'Patterson’s letter to Woodbury on 23 March 1836 and the delay from 22 February. The edge engraved “The Very First” belongs to another example, not to this record.',
        },
      },
      {
        href: 'https://fi.edu/en/science-and-education/collection/steampowered-coin-press',
        es: 'Franklin Institute — prensa de vapor Thonnelier',
        en: 'Franklin Institute — Thonnelier steam coining press',
        note: {
          es: 'Capacidad publicada de unos 100 ejemplares por minuto. Una frase de la página dice 22 de marzo; la carta de Patterson y la leyenda de la medalla fijan el 23. No se republican precios.',
          en: 'Published capacity of about 100 pieces a minute. One sentence on the page says 22 March; Patterson’s letter and the medal’s legend fix the 23rd. Prices are not republished.',
        },
      },
      {
        href: 'http://chicagocoinclub.org/lib/us/usmnt/1816/mr.html',
        es: 'Informe del director de la Mint, 1 de enero de 1817',
        en: 'Director of the Mint’s report, 1 January 1817',
        note: {
          es: 'Transcripción del Chicago Coin Club. Tras el incendio de enero de 1816, una máquina de vapor sustituyó al tiro de caballos en el laminado.',
          en: 'Chicago Coin Club transcription. After the January 1816 fire, a steam engine replaced horse power in the rolling mill.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Estados Unidos · Numismática',
    chapterLink: 'Semiquincentenario',
    hardTimesLink: 'Fichas Hard Times',
    morganSeriesLink: 'Dólar Morgan, 1878–1904',
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
    referencesLabel: 'Referencias',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    viewCoin: 'Ver la ficha',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Cuatro fichas Hard Times sin encapsular —el HT-10A de 1834, el HT-16 de 1841, el HT-34 de 1837 y la store card HT-181 de John J. Adams, hacia 1835—, la medalla de 1836 de la primera acuñación a vapor, el dólar de oro de 1856, los cuartos de águila de 1878, 1908 y 1912, los dólares Morgan de 1884-S, 1883-CC y 1885-CC y un dólar de Filadelfia de 1776–2026. Las demás fichas se publicarán a medida que se documenten.',
    relatedLead:
      'Otra pieza de la colección de Estados Unidos.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    chapterLink: 'Semiquincentennial',
    hardTimesLink: 'Hard Times tokens',
    morganSeriesLink: 'Morgan dollar, 1878–1904',
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
    referencesLabel: 'References',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    viewCoin: 'Open the coin page',
    holdingsTitle: 'Coins in the collection',
    holdingsIntro:
      'Four unslabbed Hard Times tokens — the 1834 HT-10A, the 1841 HT-16, the 1837 HT-34, and the John J. Adams HT-181 store card, circa 1835 — the 1836 First Steam Coinage medal, the 1856 gold dollar, the 1878 Liberty Head quarter eagle, the 1908 and 1912 Indian Head quarter eagles, the 1884-S, 1883-CC, and 1885-CC Morgan dollars, and one unslabbed Philadelphia 1776–2026 dollar. Further coin pages will be published as they are documented.',
    relatedLead:
      'Another piece in the United States collection.',
  },
} as const;

export function coinById(id: string): UnitedStatesCoin | undefined {
  return unitedStatesCoins.find((coin) => coin.id === id);
}

/** Bland–Allison through the 1904 close. The 1921 striking is a later return, not this run. */
export const MORGAN_ORIGINAL_RUN_START = 1878;
export const MORGAN_ORIGINAL_RUN_END = 1904;

export function morganOriginalRunCoins(): UnitedStatesCoin[] {
  const selected: UnitedStatesCoin[] = [];
  for (const coin of unitedStatesCoins) {
    if (coin.chapterId !== 'dolar-morgan') continue;
    const year = Number(coin.year);
    if (!Number.isInteger(year)) {
      throw new Error(`Morgan dollar ${coin.id} needs a numeric year for the original-run menu`);
    }
    if (year >= MORGAN_ORIGINAL_RUN_START && year <= MORGAN_ORIGINAL_RUN_END) selected.push(coin);
  }
  return selected.sort((a, b) => Number(a.year) - Number(b.year) || a.id.localeCompare(b.id));
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_COINAGE_PATH_EN}` : USA_COINAGE_PATH;
}

export function coinPath(coin: UnitedStatesCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function hardTimesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_HARD_TIMES_PATH_EN}` : USA_HARD_TIMES_PATH;
}

export function morganPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_MORGAN_PATH_EN}` : USA_MORGAN_PATH;
}

export function chapterHref(id: UnitedStatesCoinageChapterId, locale: 'es' | 'en' = 'es'): string {
  if (id === 'hard-times') return hardTimesPath(locale);
  if (id === 'dolar-morgan') return morganPath(locale);
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? USA_NOTES_PATH_EN : USA_NOTES_PATH;
}

export const unitedStatesCoinSlugs = unitedStatesCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const unitedStatesCoinageDedicatedSlugs = [
  USA_COINAGE_PATH,
  USA_COINAGE_PATH_EN,
  USA_HARD_TIMES_PATH,
  USA_HARD_TIMES_PATH_EN,
  USA_MORGAN_PATH,
  USA_MORGAN_PATH_EN,
  ...unitedStatesCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
