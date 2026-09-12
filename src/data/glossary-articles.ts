import { STANDALONE_GLOSSARY_SLUGS, type StandaloneGlossarySlug } from './glossary.ts';

export type GlossaryExample = {
  path: string;
  image?: string;
  title: { es: string; en: string };
  alt?: { es: string; en: string };
};

export type GlossaryArticle = {
  slug: StandaloneGlossarySlug;
  paragraphs: { es: string[]; en: string[] };
  illustration?: GlossaryExample;
  examples: GlossaryExample[];
};

function article(
  slug: StandaloneGlossarySlug,
  paragraphs: { es: string[]; en: string[] },
  illustration: GlossaryExample | undefined,
  examples: GlossaryExample[],
): GlossaryArticle {
  return { slug, paragraphs, illustration, examples };
}

const hipotecario: GlossaryExample = {
  path: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
  image: '/images/catalog/colombia/5-pesos-banco-hipotecario-1881-front.jpg',
  title: { es: '5 pesos · Banco Hipotecario · 1881', en: '5 pesos · Banco Hipotecario · 1881' },
  alt: {
    es: 'Anverso de la prueba de 5 pesos del Banco Hipotecario de 1881, serial Y 00000',
    en: 'Face of the 1881 Banco Hipotecario 5-peso proof, serial Y 00000',
  },
};

const rioHacha: GlossaryExample = {
  path: '/coleccion/colombia/5-pesos-rio-hacha-1883/',
  image: '/images/catalog/colombia/5-pesos-rio-hacha-1883-front.jpg',
  title: { es: '5 pesos · Banco de Riohacha · 1883', en: '5 pesos · Banco de Riohacha · 1883' },
  alt: {
    es: 'Anverso de la prueba de 5 pesos del Banco de Riohacha, serial C 00000',
    en: 'Face of the Banco de Riohacha 5-peso proof, serial C 00000',
  },
};

const tolima: GlossaryExample = {
  path: '/coleccion/colombia/1-peso-tolima-1901/',
  image: '/images/catalog/colombia/1-peso-tolima-1901-060416-front.jpg',
  title: { es: '1 peso · Banco del Tolima · 1901', en: '1 peso · Banco del Tolima · 1901' },
  alt: {
    es: 'Anverso del 1 peso del Banco del Tolima de 1901',
    en: 'Face of the 1901 Banco del Tolima 1-peso note',
  },
};

const pesoOro1945: GlossaryExample = {
  path: '/coleccion/colombia/1-peso-oro-1945/',
  image: '/images/catalog/colombia/1-peso-oro-1945-85688116-front.jpg',
  title: { es: '1 peso oro · 1945', en: '1 peso oro · 1945' },
  alt: {
    es: 'Anverso del 1 peso oro de 1945, serial R 85688116',
    en: 'Face of the 1945 1 peso oro, serial R 85688116',
  },
};

const pesoOro1944: GlossaryExample = {
  path: '/coleccion/colombia/2-pesos-oro-1944/',
  image: '/images/catalog/colombia/2-pesos-oro-1944-front.jpg',
  title: { es: '2 pesos oro · 1944', en: '2 pesos oro · 1944' },
  alt: {
    es: 'Anverso del 2 pesos oro de 1944',
    en: 'Face of the 1944 2 pesos oro',
  },
};

const specimen1960: GlossaryExample = {
  path: '/coleccion/colombia/5-pesos-oro-1960/',
  image: '/images/catalog/colombia/5-pesos-oro-1960-00000000-front.jpg',
  title: { es: '5 pesos oro · espécimen · 1960', en: '5 pesos oro · specimen · 1960' },
  alt: {
    es: 'Anverso del espécimen de 5 pesos oro de 1960, serial 00000000',
    en: 'Face of the 1960 5 pesos oro specimen, serial 00000000',
  },
};

const specimen1980: GlossaryExample = {
  path: '/coleccion/colombia/100-pesos-oro-1980/',
  image: '/images/catalog/colombia/100-pesos-oro-1980-specimen-027-front.jpg',
  title: { es: '100 pesos oro · espécimen · 1980', en: '100 pesos oro · specimen · 1980' },
  alt: {
    es: 'Anverso del espécimen de 100 pesos oro de 1980, SPECIMEN Nº 027',
    en: 'Face of the 1980 100 pesos oro specimen, SPECIMEN Nº 027',
  },
};

const specimen1983: GlossaryExample = {
  path: '/coleccion/colombia/2000-pesos-oro-1983/',
  image: '/images/catalog/colombia/2000-pesos-oro-1983-front.jpg',
  title: { es: '2.000 pesos oro · espécimen · 1983', en: '2,000 pesos oro · specimen · 1983' },
  alt: {
    es: 'Anverso encapsulado PCGS del espécimen de 2.000 pesos oro de 1983',
    en: 'PCGS-slabbed face of the 1983 2,000 pesos oro specimen',
  },
};

const embera1994: GlossaryExample = {
  path: '/coleccion/colombia/10000-pesos-1994/',
  image: '/images/catalog/colombia/10000-pesos-1994-00113227-front.jpg',
  title: { es: '10.000 pesos · reposición estrella · 1994', en: '10,000 pesos · star replacement · 1994' },
  alt: {
    es: 'Anverso del 10.000 pesos emberá de 1994, serial 00113227 con estrella',
    en: 'Face of the 1994 Emberá 10,000-peso note, serial 00113227 with a star',
  },
};

const mariposa2010: GlossaryExample = {
  path: '/coleccion/colombia/5000-pesos-error-2010/',
  image: '/images/catalog/colombia/5000-pesos-error-2010-09636101-front.jpg',
  title: { es: '5.000 pesos · error mariposa · 2010', en: '5,000 pesos · butterfly-cut error · 2010' },
  alt: {
    es: 'Anverso del 5.000 pesos de 2010 con solapa de corte mariposa, serial 09636101',
    en: 'Face of the 2010 5,000-peso note with a butterfly-cut flap, serial 09636101',
  },
};

const error50000: GlossaryExample = {
  path: '/coleccion/colombia/50000-pesos-error-2008/',
  image: '/images/catalog/colombia/50000-pesos-error-2008-72461316-72411316-front.jpg',
  title: { es: '50.000 pesos · error de numeración · 2008', en: '50,000 pesos · numbering error · 2008' },
  alt: {
    es: 'Anverso del 50.000 pesos de 2008 con error de numeración',
    en: 'Face of the 2008 50,000-peso note with a numbering error',
  },
};

const serial10000001: GlossaryExample = {
  path: '/coleccion/colombia/2000-pesos-2008/',
  image: '/images/catalog/colombia/2000-pesos-2008-10000001-front.jpg',
  title: { es: '2.000 pesos · serial 10000001 · 2008', en: '2,000 pesos · serial 10000001 · 2008' },
  alt: {
    es: 'Anverso del 2.000 pesos de 2008 con serial capicúa binario 10000001',
    en: 'Face of the 2008 2,000-peso note with binary radar serial 10000001',
  },
};

const victory20: GlossaryExample = {
  path: '/coleccion/filipinas/20-pesos/',
  image: '/images/catalog/philippines/20-pesos-front.jpg',
  title: { es: '20 pesos · Victory · PMG 55 EPQ', en: '20 pesos · Victory · PMG 55 EPQ' },
  alt: {
    es: 'Anverso encapsulado PMG del 20 pesos Victory, serial F04661756',
    en: 'PMG-slabbed face of the Victory 20-peso note, serial F04661756',
  },
};

const malaysiaRm5: GlossaryExample = {
  path: '/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/',
  image: '/images/catalog/malaysia/5-ringgit-aa1955984-front.jpg',
  title: { es: '5 ringgit · Abdul Rahman · 2012', en: 'RM5 · Abdul Rahman · 2012' },
  alt: {
    es: 'Anverso del 5 ringgit de polímero de Malasia, serial AA 1955984',
    en: 'Face of the Malaysian polymer RM5, serial AA 1955984',
  },
};

const canada5: GlossaryExample = {
  path: '/coleccion/polimero-mundial/Canada/5-dolares-laurier/',
  image: '/images/catalog/canada/5-dollars-laurier-hbm0828003-front.jpg',
  title: { es: '5 dólares · Laurier · 2013', en: '$5 · Laurier · 2013' },
  alt: {
    es: 'Anverso del 5 dólares de polímero de Canadá, serial HBM0828003',
    en: 'Face of the Canadian polymer $5, serial HBM0828003',
  },
};

const england5: GlossaryExample = {
  path: '/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/',
  image: '/images/catalog/england/5-pounds-churchill-ac04879241-front.jpg',
  title: { es: '5 libras · Churchill · 2016', en: '£5 · Churchill · 2016' },
  alt: {
    es: 'Anverso del 5 libras de polímero del Banco de Inglaterra, serial AC04 879241',
    en: 'Face of the Bank of England polymer £5, serial AC04 879241',
  },
};

const chinaYuan: GlossaryExample = {
  path: '/coleccion/china/100-yuan/',
  image: '/images/catalog/china/100-yuan-2000-front.jpg',
  title: { es: '100 yuan · milenio 2000', en: '100 yuan · millennium 2000' },
  alt: {
    es: 'Anverso del 100 yuan de polímero del milenio, serial J04445744',
    en: 'Face of the millennium polymer 100-yuan note, serial J04445744',
  },
};

const newBrunswick: GlossaryExample = {
  path: '/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/',
  image: '/images/catalog/estados-unidos/nj-350-1-dollar-new-brunswick-front.jpg',
  title: { es: '1 dólar · State Bank at New Brunswick', en: '$1 · State Bank at New Brunswick' },
  alt: {
    es: 'Anverso del remainder de 1 dólar del State Bank at New Brunswick, serial 9890',
    en: 'Face of the State Bank at New Brunswick $1 remainder, serial 9890',
  },
};

const canalBank: GlossaryExample = {
  path: '/coleccion/estados-unidos/50-dolares-canal-bank-nueva-orleans/',
  image: '/images/catalog/estados-unidos/la-105-50-dollar-canal-bank-front.jpg',
  title: { es: '50 dólares · Canal Bank, Nueva Orleans', en: '$50 · Canal Bank, New Orleans' },
  alt: {
    es: 'Anverso del remainder de 50 dólares del Canal Bank de Nueva Orleans',
    en: 'Face of the Canal Bank of New Orleans $50 remainder',
  },
};

const giori: GlossaryExample = {
  path: '/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/',
  image: '/images/catalog/estados-unidos/giori-lincoln-memorial-front.jpg',
  title: { es: 'Nota de prueba Giori · Lincoln Memorial', en: 'Giori test note · Lincoln Memorial' },
  alt: {
    es: 'Anverso uniface de la nota de prueba Giori del Lincoln Memorial',
    en: 'Uniface face of the Giori Lincoln Memorial test note',
  },
};

const baraboo5c: GlossaryExample = {
  path: '/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/5-centavos-john-ringling-a4895/',
  image: '/images/catalog/estados-unidos/baraboo-scrip-1933-5c-a4895-front.jpg',
  title: { es: '5¢ · scrip de Baraboo · 1933', en: '5¢ · Baraboo scrip · 1933' },
  alt: {
    es: 'Anverso del scrip de 5 centavos de Baraboo, serial A4895',
    en: 'Face of the Baraboo 5-cent scrip, serial A4895',
  },
};

const mpc10: GlossaryExample = {
  path: '/coleccion/estados-unidos/mpc-vietnam/10-dolares-serie-641/',
  image: '/images/catalog/estados-unidos/mpc-641-10-front.jpg',
  title: { es: '10 dólares · MPC serie 641', en: '$10 · MPC Series 641' },
  alt: {
    es: 'Anverso del certificado de pago militar de 10 dólares, serie 641',
    en: 'Face of the Series 641 $10 military payment certificate',
  },
};

const ducat: GlossaryExample = {
  path: '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/',
  image: '/images/catalog/netherlands/1761-ducat-utrecht-ngc.png',
  title: { es: 'Ducado de oro · Utrecht 1761', en: 'Gold ducat · Utrecht 1761' },
  alt: {
    es: 'Ducado de Utrecht de 1761 encapsulado por NGC, certificado 4685927-012',
    en: '1761 Utrecht ducat slabbed by NGC, certificate 4685927-012',
  },
};

const santaMarta: GlossaryExample = {
  path: '/coleccion/colombia-numismatica/1-4-real-santa-marta-1820/',
  image: '/images/catalog/numismatica/1-4-real-santa-marta-1820-cross.jpg',
  title: { es: '1/4 real · Santa Marta · 1820', en: '1/4 real · Santa Marta · 1820' },
  alt: {
    es: 'Cuartillo de cobre de Santa Marta de 1820, cruz que parte las letras S y M',
    en: '1820 Santa Marta copper cuartillo, a cross dividing the letters S and M',
  },
};

const colombiaNumismatica: GlossaryExample = {
  path: '/coleccion/colombia-numismatica/',
  title: { es: 'Colombia · numismática', en: 'Colombia · numismatics' },
};

const newHaven: GlossaryExample = {
  path: '/coleccion/estados-unidos/5-dolares-city-bank-new-haven/',
  image: '/images/catalog/estados-unidos/ct-265-5-dollar-new-haven-front.jpg',
  title: { es: '5 dólares · City Bank of New Haven', en: '$5 · City Bank of New Haven' },
  alt: {
    es: 'Anverso del remainder de 5 dólares del City Bank of New Haven',
    en: 'Face of the City Bank of New Haven $5 remainder',
  },
};

export const glossaryArticles: GlossaryArticle[] = [
  article(
    'anverso',
    {
      es: [
        'El anverso es la cara frontal del billete: la que el emisor trata como principal. En la notafilia moderna suele llevar el retrato o el motivo de mayor rango, el nombre del banco, la promesa de pago y, con frecuencia, una de las dos numeraciones. No es un sinónimo automático de «cara con retrato»: el Banco de Inglaterra imprime la promesa y el retrato real en una cara y reserva el reverso para Churchill en el 5 libras de polímero de esta colección. En monedas, el anverso es el obverso: la cara de la efigie o de la autoridad que acuña.',
        'La convención importa al describir una ficha. Un error de corte, un sello o un serial pueden estar solo en una cara; citar «anverso» y «reverso» evita ambigüedad. En el papel colombiano del Banco de la República el anverso concentra firmas del gerente y, en muchas fechas, la fecha impresa; el reverso lleva el edificio, la escena o el mapa. En los certificados de pago militar de Vietnam las dos caras son litografía offset, sin intaglio, y aun así hay un frente de uso y un dorso de colores más simples.',
        'En esta colección el anverso se fotografía primero y se describe con el serial que identifica la pieza. El 1 peso oro de 1945 muestra a Santander y Bolívar al frente, serial R 85688116. El 20 pesos Victory de Filipinas lleva el volcán Mayón en el anverso, no un retrato. El 5 ringgit de Malasia pone a Tuanku Abdul Rahman a la derecha y la ventana transparente a la izquierda. Ninguna de esas caras es «la más valiosa» por sí sola: el objeto es el pliego entero, anverso y reverso juntos. El glosario mantiene el reverso como artículo hermano, para no describir un dorso como si fuera el frente.',
      ],
      en: [
        'The obverse is the front of a banknote: the face the issuer treats as primary. On modern paper it usually carries the portrait or highest-ranking motif, the bank’s name, the promise to pay, and often one of the two serials. It is not an automatic synonym for “the portrait side”: the Bank of England prints the promise and the royal portrait on one face and reserves the back of this collection’s polymer £5 for Churchill. On coins the obverse is the effigy or issuing-authority side.',
        'The convention matters when describing a record. A cutting error, a stamp, or a serial may sit on only one face; naming obverse and reverse avoids ambiguity. On Banco de la República paper the face concentrates the manager’s signatures and, on many dates, the printed date; the back carries the building, the scene, or the map. Vietnam military payment certificates are offset lithography on both sides, with no intaglio, and still have a use face and a simpler-coloured back.',
        'In this collection the obverse is photographed first and described with the serial that identifies the piece. The 1945 1 peso oro shows Santander and Bolívar on the face, serial R 85688116. The Philippine Victory 20-peso note carries Mount Mayon on the obverse, not a portrait. The Malaysian RM5 places Tuanku Abdul Rahman at right and the clear window at left. None of those faces is “the more valuable side” on its own: the object is the whole sheet, obverse and reverse together. The glossary keeps reverse as a sibling article, so a back is not described as if it were the face.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, victory20, malaysiaRm5],
  ),
  article(
    'banca-libre',
    {
      es: [
        'La banca libre es el régimen en el que varios bancos privados emiten su propio papel de circulación, sin un banco central único con monopolio de emisión. En Colombia cubre las décadas posteriores a la independencia hasta la consolidación del Banco Nacional y, más tarde, del Banco de la República (1923). Cada casa —hipotecaria, comercial o regional— encargaba planchas a grabadores de Nueva York o Londres y prometía el pago al portador en moneda corriente. El riesgo era el del banco: si quebraba, el papel perdía convertibilidad. No es el mismo fenómeno que el scrip municipal ni que el billete provisional de un instituto ya central.',
        'Los catálogos tratan ese papel como emisiones especializadas (Pick S, Hernández Cód. de banca privada), no como tipos del Banco de la República. González White empieza en 1923; para Riohacha, el Hipotecario o el Tolima hay que leer Hernández y, como comparables de subasta, el extracto de Heritage, sin importar lotes ni republicar precios. Una prueba ABNC con serial de ceros no es el ejemplar de circulación: es un objeto de imprenta, a menudo uniface o en par anverso/reverso, distinto del espécimen de un banco central marcado SPECIMEN.',
        'Esta colección documenta tres casas colombianas de ese periodo. El 5 pesos del Banco Hipotecario (1.º de octubre de 1881) es un par de pruebas ABNC, serie Y, serial 00000, encapsuladas PMG 61. El 5 pesos del Banco de Riohacha (1883) es otro par de pruebas, serie C, serial 00000. El 1 peso del Banco del Tolima de 1901 es papel de un estado soberano en guerra, no de un banco hipotecario de Bogotá. Ninguno de los tres es un Pick de BanRep; la identidad de cada pieza sigue siendo su serial o, en las pruebas, el par plancha–cero.',
      ],
      en: [
        'Free banking is the regime in which several private banks issue their own circulating paper, without a single central bank holding the note-issue monopoly. In Colombia it covers the decades after independence until the Banco Nacional and, later, the Banco de la República (1923) consolidated the privilege. Each house — mortgage, commercial, or regional — ordered plates from New York or London engravers and promised payment to the bearer in current money. The risk was the bank’s: if it failed, the paper lost convertibility. It is not the same phenomenon as municipal scrip or as a provisional note of an already central institute.',
        'Catalogues treat that paper as specialized issues (Pick S, Hernández Cód. for private banks), not as Banco de la República types. González White begins in 1923; for Riohacha, the Hipotecario, or Tolima one reads Hernández and, as auction comparables, the Heritage extract, without importing lots or republishing prices. An ABNC proof with zero serials is not the circulating note: it is a printer’s object, often uniface or a face/back pair, distinct from a central-bank specimen marked SPECIMEN.',
        'This collection records three Colombian houses of that period. The Banco Hipotecario 5 pesos (1 October 1881) is an ABNC proof pair, Series Y, serial 00000, slabbed PMG 61. The Banco de Riohacha 5 pesos (1883) is another proof pair, Series C, serial 00000. The 1901 Banco del Tolima 1 peso is paper of a sovereign state at war, not of a Bogotá mortgage bank. None of the three is a BanRep Pick; each piece’s identity remains its serial or, on the proofs, the plate–zero pair.',
      ],
    },
    rioHacha,
    [rioHacha, hipotecario, tolima],
  ),
  article(
    'billete-de-reemplazo-estrella',
    {
      es: [
        'Un billete de reposición —estrella o asterisco— se imprime para sustituir un ejemplar defectuoso retirado en fábrica, de modo que la contabilidad y la secuencia numérica no queden rotas. En Estados Unidos la marca clásica es una estrella junto al serial. En Colombia, González White y Hernández identifican las reposiciones de las décadas de 1970 a 1990 por un asterisco junto a la numeración o cerca del título del gerente; en familias posteriores aparece una estrella. Otras emisiones reservan un prefijo de letra, la Z en varios países, o una R en el 10.000 pesos oro de 1992.',
        'La reposición no es un error: el pliego defectuoso se destruye y el banco inserta un ejemplar nuevo con marca propia. Tampoco es un serial fancy. Un 00000001 de emisión ordinaria y un 00113227 con estrella son objetos distintos: el primero es un bajo de serie; el segundo, una reposición. Hernández da Cód. propios a las variedades con asterisco; no se inventa aquí una tirada a partir del total BanRep de la denominación-año, que mezcla ordinarios y reposiciones.',
        'Esta vitrina documenta la marca en los 10.000 pesos emberá de 1994, Pick 437A / TBB B980az: seriales 00113227 y 00249902, ambos con estrella a la derecha del serial negro superior. González White 2019 (pp. 127–128) lista la reposición estrella de 1994 con seriales 00.100.332–00.239.982; 00113227 cae en esa banda; 00249902 queda por encima de ese techo. No es la reposición con prefijo R de 1992 ni un 10.000 de Policarpa. Ambos ejemplares están en funda, sin encapsular; el margen de filigrana de 00113227 muestra foxing.',
      ],
      en: [
        'A replacement note — star or asterisk — is printed to substitute a defective example pulled in the plant, so that the accounts and the numbering sequence are not broken. In the United States the classic mark is a star beside the serial. In Colombia, González White and Hernández identify 1970s–1990s replacements by an asterisk beside the numbering or near the manager’s title; later families show a star. Other issues reserve a letter prefix, Z in several countries, or an R on the 1992 10,000 pesos oro.',
        'A replacement is not an error: the faulty sheet is destroyed and the bank inserts a new example with its own mark. It is not a fancy serial either. An ordinary first-of-issue 00000001 and a starred 00113227 are different objects: the first is a low serial; the second, a replacement. Hernández gives those asterisk varieties their own Cód.; a BanRep denomination-year total, which mixes ordinary notes and replacements, is not used here as a printage.',
        'This case records the mark on the 1994 Emberá 10,000-peso notes, Pick 437A / TBB B980az: serials 00113227 and 00249902, each with a star to the right of the upper black serial. González White 2019 (pp. 127–128) lists the 1994 star replacement at 00.100.332–00.239.982; 00113227 sits in that band; 00249902 sits above that ceiling. It is not the 1992 R-prefix replacement, nor a Policarpa 10,000. Both examples are in sleeves, unslabbed; the watermark margin of 00113227 shows foxing.',
      ],
    },
    embera1994,
    [embera1994],
  ),
  article(
    'billete-provisional',
    {
      es: [
        'Un billete provisional es una emisión de emergencia, de circulación temporal, producida para cubrir una escasez de circulante mientras se prepara el papel definitivo. No es Notgeld alemán por sí solo —ese es el caso europeo de 1914–1924— ni un remainder que jamás salió a la calle. El provisional sí circula, con fecha o resello que lo marca como puente. En Colombia el episodio canónico es la apertura del Banco de la República el 23 de julio de 1923: la corrida contra el Banco López adelantó la fecha prevista de 1924, y el gobierno hizo traer de la Casa de Medellín certificados de oro grabados por la American Bank Note Company para resellarlos en un fin de semana.',
        'Esos certificados, según la vitrina colombiana, viajaron por ferrocarril hasta Puerto Berrío, hidroavión hasta Girardot y tren a Bogotá. En el reverso se estampó «BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL». El resello revalidó papel ya impreso; no se grabó una plancha nueva en esos días. Hernández y las fuentes de BanRep distinguen ese puente de las primeras emisiones regulares ABNC, que ya llevan la leyenda peso oro. No se publica aquí un serial de 1923: esta colección no documenta todavía un ejemplar de esos certificados resellados.',
        'El término sirve para leer otras crisis: papel de estados soberanos en la Guerra de los Mil Días, vales de lazareto, o el billete de canje de Puerto Rico de 1895, que era un recibo mientras se retiraba plata extranjera. Ninguno de esos objetos es un espécimen ni una prueba. Cuando la ficha de una pieza posterior —un 1 peso oro de 1945, un 2 pesos oro de 1944— cita el peso oro, está hablando del régimen que nació después de aquel puente de 1923, no del resello de Medellín.',
      ],
      en: [
        'A provisional note is an emergency, temporary-circulation issue produced to cover a shortage of cash while definitive paper is prepared. It is not German Notgeld by itself — that is the European 1914–1924 case — nor a remainder that never left the vault. A provisional note does circulate, with a date or overstamp that marks it as a bridge. In Colombia the canonical episode is the opening of the Banco de la República on 23 July 1923: the run on Banco López brought forward the date planned for 1924, and the government had gold certificates engraved by the American Bank Note Company brought from the Medellín mint to be overstamped in a weekend.',
        'Those certificates, as the Colombian case records, travelled by rail to Puerto Berrío, seaplane to Girardot, and train to Bogotá. The back received the stamp “BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL.” The overstamp revalidated paper already printed; a new plate was not engraved in those days. Hernández and BanRep sources distinguish that bridge from the first regular ABNC issues, which already carry the peso oro legend. No 1923 serial is published here: this collection does not yet record one of those overstamped certificates.',
        'The term helps in reading other crises: sovereign-state paper in the Thousand Days’ War, lazaretto tokens, or Puerto Rico’s 1895 exchange note, a receipt while foreign silver was withdrawn. None of those objects is a specimen or a proof. When a later record — a 1945 1 peso oro, a 1944 2 pesos oro — cites peso oro, it is speaking of the regime that began after that 1923 bridge, not of the Medellín overstamp.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, pesoOro1944],
  ),
  article(
    'columnario-de-dos-mundos',
    {
      es: [
        'El columnario de dos mundos es el tipo de 8 reales de plata que muestra las columnas de Hércules y dos globos —el Viejo y el Nuevo Mundo— con la divisa PLUS VLTRA. Sustituyó, en las cecas americanas del siglo XVIII, al real de a ocho de retrato anterior y se convirtió en la pieza de comercio más reconocida del Atlántico. En Santafé de Bogotá el tipo es casi único: el cuadernillo de la exposición permanente del Museo Casa de Moneda destaca el patacón de 1762. No se republican aquí láminas ni columnas de precios de Hernández, ni martillos de subasta.',
        'Un columnario no es una macuquina: la macuquina es el cob irregular de martillo; el columnario es disco de molino, con cospel redondo y leyendas de ceca, ensayador y fecha. Tampoco es el retrato de Carlos III o Carlos IV que vino después. La noticia de Notofilia sobre el lote Heritage de un 8 reales de 1762, ceca NR, ensaye JV, encapsulado PCGS AU50, describe un comparable de mercado, no un ejemplar de esta colección. Ese certificado 37262548 no es un holding de Notofilia.',
        'Esta vitrina de numismática colombiana no publica todavía un 8 reales columnario. El cobre de sitio de Santa Marta de 1820 —1/4 real, cruz que parte S y M— es otro objeto, de otra guerra y otro metal. Se enlaza aquí solo como puerta a la ceca y al peso, no como un columnario. Cuando entre un patacón de Santafé, llevará su propio serial de ceca, ensaye y certificado; hasta entonces el término vive en el glosario y en la vitrina de moneda, sin inventar una pieza.',
      ],
      en: [
        'The pillar dollar of the two worlds is the 8-real silver type that shows the Pillars of Hercules and two globes — the Old and New Worlds — with the motto PLUS VLTRA. In eighteenth-century American mints it replaced the earlier portrait eight-real and became the most recognised trade coin of the Atlantic. At Santafé de Bogotá the type is almost unique: the Casa de Moneda Museum’s permanent-exhibition booklet highlights the 1762 patacón. Hernández plates and price columns are not republished here, nor are auction hammers.',
        'A pillar dollar is not a cob: the cob is the irregular hammered macuquina; the pillar dollar is a mill disc, with a round planchet and mint, assayer, and date legends. It is not the later portrait of Charles III or Charles IV either. Notofilia’s news note on the Heritage lot of a 1762 8 reales, mintmark NR, assayer JV, slabbed PCGS AU50, describes a market comparable, not a holding in this collection. Certificate 37262548 is not a Notofilia object.',
        'This Colombian numismatics case does not yet publish a pillar 8 reales. The 1820 Santa Marta siege copper — a 1/4 real, a cross dividing S and M — is another object, of another war and another metal. It is linked here only as a door to the mint and the peso, not as a pillar dollar. When a Santafé patacón enters the catalogue it will carry its own mint, assayer, and certificate; until then the term lives in the glossary and in the coin case, without inventing a piece.',
      ],
    },
    santaMarta,
    [santaMarta, colombiaNumismatica],
  ),
  article(
    'dispositivo-opticamente-variable-ovd',
    {
      es: [
        'Un dispositivo ópticamente variable (OVD) es un elemento de seguridad cuya apariencia cambia con el ángulo de luz o de visión: tinta de color cambiante, lámina holográfica, parche SPARK o ventana con relieve óptico. No es un adorno. El OVD obliga al falsificador a reproducir un efecto que la fotocopia y la impresión plana no dan. Se distingue la tinta OVI —impresa, verde a púrpura al inclinar— de la lámina foil y del dispositivo SPARK, que es otra familia de pigmentos magnéticos. En polímero, la ventana transparente a menudo lleva un OVD grabado o laminado.',
        'El Standard Catalog y The Banknote Book anotan el OVD cuando el tipo lo lleva; no se inventa aquí un efecto que la ficha no describe. El 100 yuan del milenio (Pick 902) de esta colección muestra, arriba a la derecha, un dispositivo ópticamente variable con el carácter 千年, además de la ventana del Templo del Cielo. El 5 libras de Churchill lleva parche de foil BLENHEIM y la Torre Isabelina en la ventana. El RM5 de Malasia combina ventana con silueta de cálao, media luna y estrella. Ninguna de esas fichas publica un precio ni un censo de falsos.',
        'En papel colombiano reciente la Imprenta de Billetes ha usado tintas iridiscentes y hilos; no se afirma aquí un OVD concreto sobre un Pick si la ficha no lo nombra. El término cubre el conjunto: OVI, foil, SPARK, holograma y ventana óptica. Para el coleccionista, la prueba está en inclinar el ejemplar bajo luz puntual —nunca con disolventes ni lámparas que calienten el polímero—. Si el color no cambia, no es OVI; si la lámina está ausente o sustituida, el grado y la originalidad quedan en duda, y solo un encapsulado documenta esa lectura.',
      ],
      en: [
        'An optically variable device (OVD) is a security feature whose appearance changes with the angle of light or view: colour-shifting ink, holographic foil, a SPARK patch, or a window with optical relief. It is not decoration. An OVD forces a counterfeiter to reproduce an effect that photocopying and flat printing do not give. Optically variable ink (OVI) — printed, green to purple when tilted — is distinct from foil and from SPARK, another family of magnetic pigments. On polymer the clear window often carries an engraved or laminated OVD.',
        'The Standard Catalog and The Banknote Book note an OVD when the type carries one; an effect the record does not describe is not invented here. This collection’s millennium 100-yuan (Pick 902) shows, at upper right, an optically variable device with the characters 千年, besides the Temple of Heaven window. The Churchill £5 carries a BLENHEIM foil patch and Elizabeth Tower in the window. The Malaysian RM5 combines a window with a hornbill silhouette, crescent, and star. None of those records publishes a price or a census of fakes.',
        'On recent Colombian paper the Imprenta de Billetes has used iridescent inks and threads; a specific OVD is not asserted here on a Pick if the note page does not name it. The term covers the set: OVI, foil, SPARK, hologram, and optical window. For the collector the test is to tilt the example under a point light — never with solvents or lamps that heat polymer. If the colour does not shift, it is not OVI; if the foil is missing or replaced, grade and originality are in doubt, and only a slab documents that reading.',
      ],
    },
    chinaYuan,
    [chinaYuan, england5, malaysiaRm5],
  ),
  article(
    'encapsulado',
    {
      es: [
        'El encapsulado —slab, cápsula o holder— es el estuche de polímero rígido en el que una casa de certificación sella un billete o una moneda tras asignarle un grado. PMG y PCGS Banknote lo usan para papel; NGC, sobre todo para moneda. La etiqueta lleva el grado Sheldon (1–70) o una designación Details, el número de certificado y, a menudo, comentarios de originalidad: EPQ, Hole Punch Cancelled, Edge Filing. El encapsulado no es un precio ni una garantía de reventa; es un lenguaje compartido de estado y de identidad del objeto, porque el certificado identifica esa pieza concreta.',
        'No todo ejemplar de esta colección está encapsulado. Muchos se muestran en funda rígida, sin losa: el 1 peso oro de 1945, los 10.000 emberá de 1994, el RM5 de Malasia. Encapsular no mejora el papel; documenta una lectura de grado en una fecha. Un Details de NGC señala un problema (limpieza, limado del canto) y no un número Sheldon pleno. Un EPQ de PMG afirma originalidad de papel, no ausencia de pliegues de circulación: el 20 pesos Victory está encapsulado PMG 55 EPQ, About Uncirculated, certificado 8083882-032.',
        'Las pruebas del Banco Hipotecario de 1881 están en PMG 61 Uncirculated, serial Y 00000. El espécimen de 2.000 pesos oro de 1983 está en PCGS 64 Very Choice New, certificado 59068295, con notas de perforación y restos de montaje. El ducado de Utrecht de 1761 lleva NGC AU Details · Edge Filing, certificado 4685927-012. Cada certificado es tan único como un serial: no se duplica una ficha por volver a citar el mismo número. El buscador de Notofilia agrupa esas casas bajo el filtro de encapsulados.',
      ],
      en: [
        'Encapsulation — a slab or holder — is the rigid polymer case in which a grading service seals a note or coin after assigning a grade. PMG and PCGS Banknote use it for paper; NGC, mainly for coin. The label carries the Sheldon grade (1–70) or a Details designation, the certificate number, and often originality comments: EPQ, Hole Punch Cancelled, Edge Filing. A slab is not a price or a resale guarantee; it is a shared language of condition and of identity, because the certificate identifies that specific object.',
        'Not every example in this collection is slabbed. Many are shown in a rigid sleeve, without a holder: the 1945 1 peso oro, the 1994 Emberá 10,000s, the Malaysian RM5. Slabbing does not improve the paper; it documents a grade reading on a date. An NGC Details grade flags a problem (cleaning, edge filing) and is not a full Sheldon number. A PMG EPQ comment affirms paper originality, not the absence of circulation folds: the Victory 20-peso note is slabbed PMG 55 EPQ, About Uncirculated, certificate 8083882-032.',
        'The 1881 Banco Hipotecario proofs are in PMG 61 Uncirculated, serial Y 00000. The 1983 2,000 pesos oro specimen is in PCGS 64 Very Choice New, certificate 59068295, with hole-punch and mounting-remnant notes. The 1761 Utrecht ducat holds NGC AU Details · Edge Filing, certificate 4685927-012. Each certificate is as unique as a serial: a record is not duplicated by citing the same number again. Notofilia’s search groups those services under the slabbed filter.',
      ],
    },
    victory20,
    [victory20, specimen1983, hipotecario, ducat],
  ),
  article(
    'error-de-impresion',
    {
      es: [
        'Un error de impresión es un billete que salió de la imprenta con un defecto no intencional: corte descentrado, solapa de pliego, numeración distinta en cada extremo, tinta faltante o registro corrido. En taller se llama también maculatura. No es una reposición: la reposición sustituye el pliego destruido con un ejemplar marcado. No es un serial fancy. El error se identifica en la pieza —una solapa triangular, dos seriales que no coinciden— y no se infiere de un total BanRep de denominación-año, que mezcla papel bueno y el que debió destruirse.',
        'En la notafilia colombiana Hernández llama mariposa al error de corte con ala de papel pegada al canto. Esta colección documenta esa variedad en el 5.000 pesos del 31 de julio de 2010, Pick 452l, serial 09636101, con solapa del margen de pliego en el canto superior. El 50.000 pesos de Jorge Isaacs del 5 de septiembre de 2008, Pick 455l, lleva seriales distintos: 72461316 y 72411316, un error de numeración, no de corte. Las fichas de 1.000 pesos de 2000, 2008 y 2011 reúnen otros fallos de fábrica; cada una tiene su serial y no se fusionan en un solo «tipo error».',
        'Un error no autoriza a inventar rareza ni tirada. González White marca muchas fechas N.D. para emisión; Numista da índices de rareza del tipo, no del fallo. Estas piezas se presentan en funda, sin encapsular, salvo que la ficha cite un certificado. El coleccionista distingue el error de fábrica del daño posterior —un rasgado de circulación no es mariposa—. La vitrina de errores de Colombia agrupa esas fichas; el glosario solo nombra el fenómeno y apunta a los ejemplares ya publicados.',
      ],
      en: [
        'A printing error is a note that left the plant with an unintentional defect: an off-centre cut, a sheet flap, mismatched serials at each end, missing ink, or a shifted register. In the shop it is also called a maculature. It is not a replacement: a replacement substitutes a destroyed sheet with a marked example. It is not a fancy serial. The error is identified on the piece — a triangular flap, two serials that do not match — and is not inferred from a BanRep denomination-year total, which mixes good paper and paper that should have been destroyed.',
        'In Colombian notaphily Hernández calls a cutting error with a wing of paper still attached a mariposa (butterfly). This collection records that variety on the 5,000-peso note of 31 July 2010, Pick 452l, serial 09636101, with a sheet-margin flap at the top edge. The Jorge Isaacs 50,000-peso note of 5 September 2008, Pick 455l, carries mismatched serials: 72461316 and 72411316, a numbering error, not a cut. The 1,000-peso records of 2000, 2008, and 2011 gather other factory faults; each has its own serial and they are not merged into one “error type.”',
        'An error does not licence invented rarity or printage. González White marks many dates N.D. for emisión; Numista gives rarity indexes for the type, not for the fault. These pieces are shown in sleeves, unslabbed, unless the record cites a certificate. The collector distinguishes a factory error from later damage — a circulation tear is not a butterfly cut. Colombia’s error case groups those records; the glossary only names the phenomenon and points to pieces already published.',
      ],
    },
    mariposa2010,
    [mariposa2010, error50000],
  ),
  article(
    'exonumia',
    {
      es: [
        'La exonumia es el coleccionismo de objetos que parecen moneda o papel de pago pero no son curso legal federal: fichas, vales, scrip de cámara de comercio, medallas y papel de empresa. El término viene del inglés estadounidense y se usa aquí con precisión: el scrip de Baraboo de 1933 no es un Federal Reserve Note ni un certificado de plata. Es un vale al portador de la Cámara de Comercio, anunciado el 28 de junio de 1933 y redimible hasta el 1 de noviembre de ese año, diseñado por E. B. Trimpey (Shafer WI100).',
        'En Colombia el analogo más cercano en esta vitrina no es BanRep: el tiquete estudiantil de 15 centavos es papel de transporte, no un Pick. Los vales de lazareto son moneda de recinto, no de la república. Confundir exonumia con notafilia de banco central diluye ambas disciplinas. El scrip puede llevar serial y firmas —P. L. Gust y O. L. Gust en Baraboo— y aun así no obliga a un banco nacional. Tampoco es un remainder de banco obsoleto: el City Bank of New Haven sí fue un banco estatal; la Cámara de Baraboo no lo era.',
        'Esta colección publica el 5¢ de John Ringling, serial A4895; el 10¢ de Chas. Ringling, A2844; el 15¢ de Al. T. Ringling, A2819; y el 1 dólar Ringling Bros., A2002. Las denominaciones de 25¢ y 50¢ esperan serial o certificado antes de tener ficha de pieza. Nada de ese papel está a la venta. La exonumia entra al buscador como el resto del catálogo, con su serial como identidad, no como un tipo genérico de «circo».',
      ],
      en: [
        'Exonumia is the collecting of objects that look like money or payment paper but are not federal legal tender: tokens, vouchers, chamber-of-commerce scrip, medals, and company paper. The term comes from American English and is used here with precision: 1933 Baraboo scrip is not a Federal Reserve Note or a silver certificate. It is a Chamber of Commerce bearer voucher, announced on 28 June 1933 and redeemable through 1 November that year, designed by E. B. Trimpey (Shafer WI100).',
        'In Colombia the nearest analogue in this case is not BanRep: the 15-centavo student transport ticket is transport paper, not a Pick. Lazaretto tokens are compound money, not republican currency. Confusing exonumia with central-bank notaphily blurs both disciplines. Scrip may carry a serial and signatures — P. L. Gust and O. L. Gust at Baraboo — and still not bind a national bank. It is not an obsolete-bank remainder either: the City Bank of New Haven was a state bank; the Baraboo Chamber was not.',
        'This collection publishes the John Ringling 5¢, serial A4895; the Chas. Ringling 10¢, A2844; the Al. T. Ringling 15¢, A2819; and the Ringling Bros. $1, A2002. The 25¢ and 50¢ denominations wait for a serial or certificate before they receive piece records. None of that paper is for sale. Exonumia enters search like the rest of the catalogue, with its serial as identity, not as a generic “circus” type.',
      ],
    },
    baraboo5c,
    [baraboo5c],
  ),
  article(
    'filigrana',
    {
      es: [
        'La filigrana —watermark— es un dibujo formado en la pasta del papel al fabricar el pliego, visible a contraluz. No se imprime encima: es densidades distintas de fibra. En billetes suele ser un retrato, un emblema o un valor. González White anota, para varias filas del cien pesos oro de 1977–1980, marca de agua con el emblema de la Libertad. El 10.000 pesos emberá de 1994 lleva zona de filigrana en el margen; la ficha de 00113227 registra dos manchas de foxing precisamente ahí, y la de 00249902 un amarilleo ligero.',
        'La filigrana no es el registro perfecto (see-through register), que alinea tintas de anverso y reverso. Tampoco es la ventana de polímero, que es un recorte o una zona translúcida del sustrato Guardian. En papel colonial y en el Continental Currency de 1779 de esta colección, la nature print de hoja en el reverso es otro recurso anti-falsificación, grabado, no una filigrana. Confundir esos tres fenómenos —filigrana, registro, nature print— lleva a describir mal la pieza.',
        'Al fotografiar, la filigrana se ve mejor con luz transmitida; las fichas de Notofilia no sustituyen esa vista por un recorte inventado. Si un ejemplar está encapsulado, la losa dificulta el contraluz: el 20 pesos Victory PMG 55 EPQ se describe por el volcán y el certificado 8083882-032, no por una filigrana que la cápsula no deja leer con certeza. No se afirma aquí una filigrana sobre un Pick si la fuente citada no la nombra. El término queda anclado a las piezas cuya ficha ya la menciona.',
      ],
      en: [
        'A watermark is a design formed in the paper pulp when the sheet is made, visible when held to light. It is not printed on top: it is different densities of fibre. On banknotes it is often a portrait, an emblem, or a denomination. González White notes, for several rows of the 1977–1980 100 pesos oro, a Liberty-emblem watermark. The 1994 Emberá 10,000-peso note has a watermark area in the margin; the record for 00113227 registers two foxing spots exactly there, and 00249902 shows slight yellowing.',
        'A watermark is not a see-through register, which aligns face and back inks. It is not a polymer window either, which is a cut-out or a translucent zone of the Guardian substrate. On colonial paper and on this collection’s 1779 Continental Currency, the leaf nature print on the back is another anti-counterfeiting device, engraved, not a watermark. Confusing those three phenomena — watermark, register, nature print — leads to a bad description of the piece.',
        'In photography the watermark reads best by transmitted light; Notofilia records do not replace that view with an invented crop. If an example is slabbed, the holder makes backlighting hard: the Victory 20-peso PMG 55 EPQ is described by the volcano and certificate 8083882-032, not by a watermark the capsule does not let one read with certainty. A watermark is not asserted here on a Pick if the cited source does not name it. The term stays anchored to pieces whose records already mention it.',
      ],
    },
    embera1994,
    [embera1994, specimen1980],
  ),
  article(
    'foxing',
    {
      es: [
        'El foxing es un manchado pardo o rojizo del papel, a menudo en puntos, atribuido a oxidación, humedad o actividad microbiológica sobre las fibras. No es suciedad de circulación ni un sello. En notafilia baja el atractivo y, si el papel se lavó para disimularlo, puede costar el EPQ o llevar un Details. Un encapsulado no elimina el foxing: lo documenta bajo plástico. Tampoco es pátina de moneda, que es una capa sobre metal; el foxing es del papel.',
        'La ficha de los 10.000 pesos emberá de 1994 lo nombra con cuidado: el margen de filigrana de 00113227 muestra dos manchas de foxing; el de 00249902, un ligero amarilleo. No se inventa un censo PMG para esos seriales; ambos están en funda, sin encapsular. Un amarilleo uniforme de envejecimiento no es lo mismo que puntos de foxing. El coleccionista describe lo que se ve en la fotografía, sin «mejorar» el papel con disolventes: esa alteración es, precisamente, lo que PMG trata como pérdida de originalidad.',
        'En pruebas y especímenes el foxing también aparece —el papel de archivo no está exento— pero no se afirma aquí sobre el Hipotecario PMG 61 ni sobre el Giori uniface si sus fichas no lo registran. El término sirve para leer población y grado: un AU con foxing no es un UNC. La conservación preventiva —funda inerte, humedad estable, sin adhesivos ácidos— es el único tratamiento que esta colección recomienda. Nada de lo documentado se ofrece en venta, manchado o no.',
      ],
      en: [
        'Foxing is brown or reddish spotting of paper, often in dots, attributed to oxidation, moisture, or microbial activity on the fibres. It is not circulation soil or a stamp. In notaphily it lowers eye appeal and, if the paper was washed to hide it, it can cost EPQ or bring a Details grade. A slab does not remove foxing: it documents it under plastic. It is not coin toning either, which is a layer on metal; foxing belongs to paper.',
        'The 1994 Emberá 10,000-peso record names it carefully: the watermark margin of 00113227 shows two foxing spots; that of 00249902, slight yellowing. A PMG census for those serials is not invented; both notes are in sleeves, unslabbed. Even ageing yellow is not the same as foxing spots. The collector describes what the photograph shows, without “improving” the paper with solvents: that alteration is exactly what PMG treats as a loss of originality.',
        'On proofs and specimens foxing also appears — archive paper is not exempt — but it is not asserted here on the Hipotecario PMG 61 or on the uniface Giori if their records do not register it. The term helps in reading population and grade: an AU with foxing is not a UNC. Preventive care — an inert sleeve, stable humidity, no acidic adhesives — is the only treatment this collection recommends. Nothing documented here is for sale, spotted or not.',
      ],
    },
    embera1994,
    [embera1994],
  ),
  article(
    'guardian',
    {
      es: [
        'Guardian es el nombre comercial del sustrato de polímero —polipropileno biaxialmente orientado— desarrollado con el Reserve Bank of Australia y UCB para billetes de plástico. No es Tyvek, el no tejido experimental de los años 1980. No es papel de algodón con barniz. El sustrato Guardian admite ventana transparente, impresión offset e intaglio sobre plástico, y una vida útil más larga en circulación húmeda. Australia lo puso en el 10 dólares de 1988; de ahí pasó a decenas de bancos emisores.',
        'El 100 yuan del milenio (Pick 902), primer polímero de la República Popular, usa Guardian: la ficha cita ese desarrollo con el RBA y UCB, serial J04445744, ventana del Templo del Cielo. El RM5 de Bank Negara Malaysia (Pick 52a, 2012) y el 5 dólares canadiense Frontiers (Pick 106b, 2013) son de la misma familia de sustrato, cada uno con su ventana y su serial —AA 1955984 y HBM0828003—. El 5 libras del Banco de Inglaterra (Pick 394) es polímero de circulación ordinaria desde 2016, serial AC04 879241. Ninguna de esas fichas inventa una tirada para el prefijo.',
        'Guardian no convierte un conmemorativo en curso cotidiano: el 100 yuan de 2000 es memorial. Tampoco elimina la necesidad de filigrana en papel; son sustratos distintos. Un billete Guardian arrugado se «recuerda» más que el algodón, pero se raya y se delamina si se maltrata. Esta colección los muestra en funda, sin encapsular, salvo que la ficha cite lo contrario. El término del glosario apunta a esas piezas y al artículo de polímero, no a un plástico genérico de publicidad.',
      ],
      en: [
        'Guardian is the trade name of the polymer substrate — biaxially oriented polypropylene — developed with the Reserve Bank of Australia and UCB for plastic banknotes. It is not Tyvek, the experimental non-woven of the 1980s. It is not varnished cotton paper. Guardian substrate takes a clear window, offset and intaglio on plastic, and a longer life in wet circulation. Australia put it on the 1988 $10; from there it passed to dozens of issuing banks.',
        'The millennium 100-yuan (Pick 902), the People’s Republic’s first polymer note, uses Guardian: the record cites that development with the RBA and UCB, serial J04445744, Temple of Heaven window. Bank Negara Malaysia’s RM5 (Pick 52a, 2012) and the Bank of Canada Frontiers $5 (Pick 106b, 2013) belong to the same substrate family, each with its window and serial — AA 1955984 and HBM0828003. The Bank of England £5 (Pick 394) has been ordinary-circulation polymer since 2016, serial AC04 879241. None of those records invents a printage for the prefix.',
        'Guardian does not turn a commemorative into everyday tender: the 2000 100-yuan is a memorial. It does not remove the need for a watermark on paper; they are different substrates. A crumpled Guardian note “remembers” more than cotton, but it scratches and delaminates if abused. This collection shows them in sleeves, unslabbed, unless the record says otherwise. The glossary term points to those pieces and to the polymer article, not to generic advertising plastic.',
      ],
    },
    chinaYuan,
    [chinaYuan, malaysiaRm5, canada5],
  ),
  article(
    'hilo-de-seguridad',
    {
      es: [
        'El hilo de seguridad es una cinta, metálica o sintética, insertada en el papel o asomando a intervalos —hilo ventana— para dificultar la falsificación. Puede llevar microimpresión, efecto magnético o texto del emisor. No es la filigrana, que se forma en la pasta, ni el OVD impreso. En el papel del Banco de la República, las familias de los años 1990–2010 combinan hilo, filigrana y, en algunos tipos, tinta iridiscente. González White y el Bank Note Museum lo anotan cuando el tipo lo lleva; no se afirma aquí un hilo sobre un Pick si la ficha no lo cita.',
        'El 1 peso azul de la Imprenta, Pick 404e, se describe en catálogo con fechas con hilo y sin hilo: la ficha del 7 de agosto de 1973 de esta colección es la variedad sin hilo, serial 26530968. Confundir esa fila con una posterior con hilo es un error de identificación, no un detalle menor. En polímero el análogo funcional es a menudo la ventana o un foil, no un hilo de algodón. Los certificados de pago militar de Vietnam, en offset sobre papel con planchetas, no llevan el hilo de un Federal Reserve Note.',
        'Para el coleccionista, el hilo se verifica a contraluz y al tacto, sin abrir el encapsulado. Un hilo ausente en un tipo que debería llevarlo puede ser un error, un recorte o un falso; la ficha no resuelve esa disputa sin fuente. Esta colección no publica un censo de hilos ni una tirada. El término enlaza las piezas de papel ya descritas y el artículo de sustrato, para no tratar el hilo como un adorno de diseño.',
      ],
      en: [
        'A security thread is a metallic or synthetic strip inserted in the paper or windowing at intervals — a window thread — to hinder counterfeiting. It may carry microprint, a magnetic effect, or issuer text. It is not a watermark, which is formed in the pulp, nor a printed OVD. On Banco de la República paper the 1990s–2010s families combine thread, watermark, and, on some types, iridescent ink. González White and the Bank Note Museum note it when the type carries it; a thread is not asserted here on a Pick if the record does not cite it.',
        'The Imprenta’s blue 1-peso, Pick 404e, is catalogued with threaded and unthreaded dates: this collection’s 7 August 1973 record is the unthreaded variety, serial 26530968. Confusing that row with a later threaded one is a misidentification, not a minor detail. On polymer the functional analogue is often the window or a foil, not a cotton-paper thread. Vietnam military payment certificates, offset on paper with planchettes, do not carry a Federal Reserve Note thread.',
        'For the collector the thread is checked by transmitted light and by touch, without opening a slab. A missing thread on a type that should have one may be an error, a trim, or a fake; the record does not settle that dispute without a source. This collection does not publish a thread census or a printage. The term links paper pieces already described and the substrate article, so the thread is not treated as design ornament.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, embera1994],
  ),
  article(
    'intaglio',
    {
      es: [
        'El intaglio —talla dulce, calcografía— es la impresión en hueco: la tinta se deposita en los surcos de la plancha y queda en relieve al tacto. Es el grabado de los retratos de ABNC, Waterlow y Thomas De La Rue, y el de la Imprenta de Billetes en muchas fechas colombianas. Se distingue de la litografía y del offset, que no dejan ese relieve. Un billete puede combinar intaglio en el retrato y offset en los fondos. La prueba Giori del Lincoln Memorial existe precisamente para ensayar esa prensa de intaglio en color, uniface, sin seriales ni sellos.',
        'Las pruebas del Banco Hipotecario y de Riohacha son calcografía ABNC de 1881–1883, seriales de ceros, PMG 61. El 1 peso oro de 1945 es circulación ABNC, serial R 85688116. El espécimen de 100 pesos oro de 1980 es TDLR, con sobrecarga SPECIMEN Nº 027. Los certificados de pago militar de Vietnam, en cambio, se imprimieron en offset —cuatro tintas al anverso, dos al reverso— sin el intaglio de los Federal Reserve Notes. Esa diferencia de taller es parte de la ficha, no un juicio de «calidad».',
        'El coleccionista lee el intaglio por el tacto y por la nitidez del retrato, no por una foto aplanada. Un lavado químico aplasta el relieve y cuesta el EPQ. Esta colección no publica un grado inventado para piezas en funda. El término enlaza talla dulce, prueba y anverso: el grabado vive en una cara concreta, con un serial concreto. Nada de ese relieve se ofrece en venta.',
      ],
      en: [
        'Intaglio — line engraving, taille douce — is recess printing: ink sits in the plate’s grooves and stands in relief to the touch. It is the engraving of ABNC, Waterlow, and Thomas De La Rue portraits, and of the Imprenta de Billetes on many Colombian dates. It is distinct from lithography and offset, which do not leave that relief. A note may combine intaglio in the portrait and offset in the tints. The Giori Lincoln Memorial test note exists precisely to trial that colour intaglio press, uniface, with no serials or seals.',
        'The Banco Hipotecario and Riohacha proofs are ABNC engraving of 1881–1883, zero serials, PMG 61. The 1945 1 peso oro is ABNC circulation, serial R 85688116. The 1980 100 pesos oro specimen is TDLR, with a SPECIMEN Nº 027 overprint. Vietnam military payment certificates, by contrast, were printed offset — four inks on the face, two on the back — without Federal Reserve Note intaglio. That shop difference belongs in the record, not as a judgement of “quality.”',
        'The collector reads intaglio by touch and by the sharpness of the portrait, not by a flattened photograph. A chemical wash crushes the relief and costs EPQ. This collection does not publish an invented grade for sleeved pieces. The term links line engraving, proof, and obverse: the engraving lives on a specific face, with a specific serial. None of that relief is for sale.',
      ],
    },
    hipotecario,
    [hipotecario, giori, pesoOro1945],
  ),
  article(
    'mariposa',
    {
      es: [
        'Mariposa, en la notafilia colombiana de Hernández, es un error de corte: al contorno del billete le sobra un fragmento de papel en forma de ala, resto del margen de pliego que no se separó del todo. No es un espécimen ni una prueba. No es un foxing ni un rasgado de cartera. La solapa triangular se ve en el canto y, a menudo, lleva tinta o filigrana del margen. El 5.000 pesos del 31 de julio de 2010, Pick 452l / TBB B989m, serial 09636101, conserva esa solapa en el canto superior; González White numera la fecha BG# 541 y no da una tirada del error.',
        'La producción BanRep de 5.000 pesos en 2010 es 98,149 millones de piezas: total de la denominación ese año, no de esta fecha ni de este corte. Numista asigna TBB B989m y Hernández 570 al tipo, con Braille en la zona de filigrana. Esta ficha reúne anverso y reverso de la misma pieza, en funda, sin encapsular. No se fusiona con los errores de numeración del 50.000 de 2008 ni con los 1.000 de otras fechas: cada serial es otro objeto.',
        'Quien vea un ala pegada con cinta o un recorte casero no está ante una mariposa de fábrica. Hernández usa el vocablo para el fallo de guillotina, no para un apodo de diseño. Esta colección no publica un precio ni un censo de mariposas. El término queda ligado a 09636101 y a la vitrina de errores, y al artículo de error de impresión, para no tratar cada fallo como el mismo fenómeno.',
      ],
      en: [
        'Mariposa, in Hernández’s Colombian notaphily, is a cutting error: a wing-shaped scrap of paper remains attached to the note’s edge, a remnant of the sheet margin that did not fully separate. It is not a specimen or a proof. It is not foxing or a wallet tear. The triangular flap is visible at the edge and often carries margin ink or watermark. The 5,000-peso note of 31 July 2010, Pick 452l / TBB B989m, serial 09636101, keeps that flap at the top edge; González White numbers the date BG# 541 and gives no printage for the error.',
        'BanRep’s 2010 production of 5,000-peso notes is 98.149 million pieces: the denomination total for that year, not of this date or this cut. Numista assigns TBB B989m and Hernández 570 to the type, with Braille in the watermark area. This record gathers face and back of the same unslabbed note, in a sleeve. It is not merged with the 2008 50,000 numbering errors or with 1,000-peso faults of other dates: each serial is another object.',
        'Anyone who sees a wing taped on or a home-made trim is not looking at a factory butterfly. Hernández uses the word for a guillotine fault, not as a design nickname. This collection does not publish a price or a census of butterfly cuts. The term stays tied to 09636101 and to the error case, and to the printing-error article, so that every fault is not treated as the same phenomenon.',
      ],
    },
    mariposa2010,
    [mariposa2010],
  ),
  article(
    'mpc',
    {
      es: [
        'Un certificado de pago militar (Military Payment Certificate, MPC) es papel de las fuerzas armadas de Estados Unidos, no un billete del Tesoro ni curso legal estadounidense. Circulaba solo entre personal autorizado, en instalaciones de la base, y se convertía en moneda local, nunca al revés. Poseerlo fuera de ese círculo estaba prohibido. El arma del sistema era el C-Day: un canje sorpresa que dejaba sin valor la serie saliente. Se imprimieron quince series entre 1946 y 1973; trece circularon. Tudor Press y Forbes Lithograph las imprimieron al principio; el Bureau of Engraving and Printing, desde la 611, siempre en offset con planchetas de color, no en intaglio.',
        'Los catálogos usan Pick M y Schwan. Esta vitrina de Vietnam publica el 10 dólares de la serie 641 (P#M63 · Schwan 887-1, serial J01130273J), el 5 dólares de la 661, el 1 dólar de la 681 y el 20 dólares de la 692. Cada serial es otra pieza. No se inventa aquí una tirada para un prefijo más allá de las cifras ya citadas en las fichas —por ejemplo, 20.400.000 ejemplares citados para el 10 dólares de la 641—. Tampoco son Federal Reserve Notes ni scrip de circo.',
        'El MPC enseña a leer papel que paga sin ser moneda nacional. Quien busque un «dólar de Vietnam» en esta colección encontrará estos certificados, no un đồng. El término del glosario apunta a esa vitrina y al C-Day, y se cruza con plancheta y offset. Nada de ese papel está a la venta.',
      ],
      en: [
        'A military payment certificate (MPC) is United States armed-forces paper, not a Treasury note and not United States legal tender. It circulated only among authorised personnel, on base, and converted into local currency, never the other way. Holding it outside that circle was forbidden. The system’s weapon was C-Day: a surprise conversion that left the outgoing series worthless. Fifteen series were printed between 1946 and 1973; thirteen circulated. Tudor Press and Forbes Lithograph printed them at first; the Bureau of Engraving and Printing from Series 611, always offset with coloured planchettes, not intaglio.',
        'Catalogues use Pick M and Schwan. This Vietnam case publishes the Series 641 $10 (P#M63 · Schwan 887-1, serial J01130273J), the Series 661 $5, the Series 681 $1, and the Series 692 $20. Each serial is another piece. A printage for a prefix is not invented here beyond figures already cited in the records — for example, 20,400,000 notes cited for the Series 641 $10. They are not Federal Reserve Notes or circus scrip either.',
        'MPC teaches one to read paper that pays without being national currency. Anyone looking for a “Vietnam dollar” in this collection will find these certificates, not a đồng. The glossary term points to that case and to C-Day, and crosses planchette and offset. None of that paper is for sale.',
      ],
    },
    mpc10,
    [mpc10],
  ),
  article(
    'ngc',
    {
      es: [
        'NGC —Numismatic Guaranty Company— es una casa de certificación sobre todo de monedas: encapsula la pieza y asigna un grado Sheldon o una designación Details. No es PMG ni PCGS Banknote, que trabajan el papel, aunque PCGS también certifica moneda. Un Details señala un problema —limpieza, limado del canto, rayas— y no un número pleno de 1 a 70. El certificado identifica el objeto: duplicar una ficha con el mismo número sería inventar un segundo ejemplar.',
        'El ducado de oro de Utrecht de 1761 de esta colección lleva NGC AU Details · Edge Filing, certificado 4685927-012. KM# 7.4, Fr# 285, Delmonte G# 965. El limado del canto está en la etiqueta; no se oculta para «subir» el grado. El cobre de Santa Marta de 1820, en cambio, está sin encapsular: no se inventa un censo NGC para esa pieza. El buscador de Notofilia agrupa NGC con PMG y PCGS bajo el filtro de encapsulados, sin mezclar papel y metal en la misma ficha.',
        'NGC no tasa. Un AU Details no es un precio ni una población de mercado. Las cifras de censo que no se hayan verificado de forma independiente no se publican. Esta colección cita el certificado cuando existe y deja en funda lo que no se ha enviado. El término enlaza encapsulado, escala Sheldon y el ducado ya publicado, no una guía comercial de envío.',
      ],
      en: [
        'NGC — Numismatic Guaranty Company — is a grading service mainly for coins: it slabs the piece and assigns a Sheldon grade or a Details designation. It is not PMG or PCGS Banknote, which work paper, though PCGS also grades coin. A Details grade flags a problem — cleaning, edge filing, scratches — and is not a full number from 1 to 70. The certificate identifies the object: duplicating a record with the same number would invent a second example.',
        'This collection’s 1761 Utrecht gold ducat holds NGC AU Details · Edge Filing, certificate 4685927-012. KM# 7.4, Fr# 285, Delmonte G# 965. The edge filing is on the label; it is not hidden to “raise” the grade. The 1820 Santa Marta copper, by contrast, is unslabbed: an NGC census for that piece is not invented. Notofilia’s search groups NGC with PMG and PCGS under the slabbed filter, without mixing paper and metal in the same record.',
        'NGC does not appraise. An AU Details is not a price or a market population. Census figures that have not been independently verified are not published. This collection cites the certificate when it exists and leaves unslabbed what has not been sent. The term links encapsulation, the Sheldon scale, and the ducat already published, not a commercial shipping guide.',
      ],
    },
    ducat,
    [ducat, santaMarta],
  ),
  article(
    'notafilia',
    {
      es: [
        'La notafilia es el estudio y coleccionismo de papel moneda: billetes, certificados, vales y papel afín. No sustituye a la numismática, que cubre la moneda metálica; se coloca a su lado. En Notofilia la vitrina de notafilia reúne independencia, banca libre, series de banco central, especímenes, errores y numeraciones especiales. El scrip y el MPC entran porque son papel de pago, no porque sean curso legal federal. El tiquete estudiantil colombiano se documenta como papel de transporte, no como un Pick de BanRep.',
        'El vocabulario de la disciplina —anverso, reverso, filigrana, serial, emisor, tiraje, espécimen, remainder— está en este glosario. Un Pick identifica el tipo; el serial identifica el objeto. Confundir tipo y ejemplar es el error más caro del aficionado. Esta colección no vende: las fichas citan fuentes (González White, Hernández, Friedberg, Haxby, Schwan, The Banknote Book) sin republicar columnas de precios ni láminas protegidas.',
        'Quien entre por el 5 pesos de Riohacha, por el 20 pesos Victory o por el 5 libras de Churchill está en notafilia. Quien entre por el ducado de Utrecht o por el cuartillo de Santa Marta está en numismática. El sitio mantiene las dos puertas. El término del glosario es la definición de oficio, no un eslogan: papel, fuentes y un serial por pieza.',
      ],
      en: [
        'Notaphily is the study and collecting of paper money: banknotes, certificates, vouchers, and related paper. It does not replace numismatics, which covers struck coin; it stands beside it. At Notofilia the notaphily case gathers independence issues, free banking, central-bank series, specimens, errors, and fancy serials. Scrip and MPC enter because they are payment paper, not because they are federal legal tender. The Colombian student ticket is documented as transport paper, not as a BanRep Pick.',
        'The discipline’s vocabulary — obverse, reverse, watermark, serial, issuer, print run, specimen, remainder — lives in this glossary. A Pick identifies the type; the serial identifies the object. Confusing type and example is the amateur’s most expensive error. This collection does not sell: records cite sources (González White, Hernández, Friedberg, Haxby, Schwan, The Banknote Book) without republishing price columns or protected plates.',
        'Anyone who enters through the Riohacha 5 pesos, the Victory 20-peso note, or the Churchill £5 is in notaphily. Anyone who enters through the Utrecht ducat or the Santa Marta cuartillo is in numismatics. The site keeps both doors. The glossary term is the working definition, not a slogan: paper, sources, and one serial per piece.',
      ],
    },
    rioHacha,
    [rioHacha, victory20, england5],
  ),
  article(
    'numeracion',
    {
      es: [
        'La numeración es el identificador impreso de cada billete: dígitos, a menudo con prefijo de letras, estampados una o dos veces. Es la identidad del objeto en Notofilia. Dos papeles con el mismo Pick y distinta numeración son dos piezas. No se despojan los ceros a la izquierda al comparar: 00113227 no es 113227. Si hay dos seriales (izquierda y derecha, o anverso y reverso) se registran ambos; un desajuste puede ser error de fábrica, como en el 50.000 pesos de 2008 (72461316 / 72411316).',
        'Un serial de ceros en un espécimen (00000000) no es un bajo de emisión. Un 10000001 puede ser a la vez binario y capicúa, como el 2.000 pesos de 2008 de esta colección. Una estrella junto al número marca reposición, no un fancy. Los remainders del City Bank of New Haven y del Canal Bank no llevan serial relleno: el recuadro No. está en blanco, y esa ausencia se documenta como no_serial_reason, no se inventa un número.',
        'La herramienta de numeración especial del sitio clasifica patrones —bajo, radar, binario, sólida, escalera, repetidor— sobre el serial ya publicado. No crea piezas. El término del glosario cubre la numeración ordinaria y apunta al artículo de numeración especial y a las fichas cuyo serial es la clave: R 85688116, F04661756, AA 1955984, J04445744. Cada uno es un objeto; ninguno está a la venta.',
      ],
      en: [
        'Serial numbering is each note’s printed identifier: digits, often with a letter prefix, stamped once or twice. It is the object’s identity in Notofilia. Two papers with the same Pick and different numbering are two pieces. Leading zeros are not stripped when comparing: 00113227 is not 113227. If there are two serials (left and right, or face and back) both are recorded; a mismatch may be a factory error, as on the 2008 50,000-peso note (72461316 / 72411316).',
        'A zero serial on a specimen (00000000) is not a first-of-issue low. A 10000001 may be both binary and a palindrome, as on this collection’s 2008 2,000-peso note. A star beside the number marks a replacement, not a fancy. The City Bank of New Haven and Canal Bank remainders have no filled serial: the No. box is blank, and that absence is documented as no_serial_reason, not invented.',
        'The site’s fancy-serial tool classifies patterns — low, radar, binary, solid, ladder, repeater — on a serial already published. It does not create pieces. The glossary term covers ordinary numbering and points to the fancy-serial article and to records whose serial is the key: R 85688116, F04661756, AA 1955984, J04445744. Each is an object; none is for sale.',
      ],
    },
    serial10000001,
    [serial10000001, embera1994, newHaven],
  ),
  article(
    'numeracion-especial',
    {
      es: [
        'La numeración especial —fancy serial— es un patrón buscado en los dígitos: bajo (1–100), radar o capicúa, binario (solo ceros y unos), sólida, escalera, repetidor o millón. Un mismo serial puede cumplir más de una clase: 10000001 es binario y capicúa. Eso no duplica la pieza. El patrón se lee sobre el ancho impreso, sin borrar ceros. Un 00000001 de primer pliego es un bajo de emisión; un 10000001 de ocho cifras es un fancy de colección, no el primero de la serie.',
        'Esta colección publica el 2.000 pesos de 20 de agosto de 2008, Pick 457, serial 10000001, impreso dos veces en el reverso, en funda, sin encapsular. No es el 2.000 pesos oro de Bolívar ni el 2.000 grande de 1996–2005. La producción BanRep de 2.000 pesos en 2008 (280,4 millones) es el total de la denominación ese año, no la tirada de este serial. La herramienta /herramientas/numeracion-especial/ clasifica patrones sobre seriales que el usuario escribe; no inventa holdings.',
        'Una estrella o un asterisco de reposición no es, por sí sola, un fancy. Un espécimen de ceros tampoco. El glosario mantiene términos aparte para radar, binario, sólida, escalera y repetidor, anclados en el índice cuando no tienen artículo propio. Aquí se explica el conjunto y se apunta al ejemplar 10000001, que es el que esta vitrina puede mostrar sin inventar otro número.',
      ],
      en: [
        'A fancy serial is a sought pattern in the digits: low (1–100), radar or palindrome, binary (only zeros and ones), solid, ladder, repeater, or million. One serial may meet more than one class: 10000001 is binary and a palindrome. That does not duplicate the piece. The pattern is read on the printed width, without stripping zeros. A first-sheet 00000001 is a first-of-issue low; an eight-digit 10000001 is a collector fancy, not the first of the series.',
        'This collection publishes the 2,000-peso note of 20 August 2008, Pick 457, serial 10000001, printed twice on the back, in a sleeve, unslabbed. It is not the Bolívar 2,000 pesos oro or the large 1996–2005 2,000. BanRep’s 2008 production of 2,000-peso notes (280.4 million) is the denomination total for that year, not the printage of this serial. The /en/tools/fancy-serial-checker/ tool classifies patterns on serials the user types; it does not invent holdings.',
        'A replacement star or asterisk is not, by itself, a fancy. A specimen of zeros is not either. The glossary keeps separate terms for radar, binary, solid, ladder, and repeater, anchored on the index when they have no article of their own. Here the set is explained and the example 10000001 is pointed to, which is the one this case can show without inventing another number.',
      ],
    },
    serial10000001,
    [serial10000001],
  ),
  article(
    'numismatica',
    {
      es: [
        'La numismática es el estudio de la moneda metálica —y, en sentido amplio, de medallas y papel—. En Notofilia se reserva la vitrina de numismática para lo acuñado: ceca, aleación, canto, ley, ensayador. La notafilia tiene puerta propia. El ducado de Utrecht de 1761 —oro .986, 3,47 g, 21,7 mm, KM# 7.4— está encapsulado por NGC, certificado 4685927-012, AU Details por limado del canto. El cuartillo de cobre de Santa Marta de 1820 es moneda de sitio realista, Hernández 11, sin encapsular. No son billetes.',
        'Un columnario de 8 reales de Santafé sería numismática colonial colombiana; esta colección no publica todavía ese disco. El Museo Casa de Moneda destaca el patacón de 1762; un lote Heritage con certificado PCGS 37262548 es un comparable, no un holding. Confundir una ficha de subasta con una pieza del catálogo es el error que la regla de duplicados trata de evitar.',
        'La numismática comparte con la notafilia la escala Sheldon, el encapsulado y la disciplina de no inventar tiradas. BanRep publica producción de monedas por año y denominación; eso no es la acuñación de una variedad. El término del glosario abre las vitrinas de Países Bajos y de Colombia-numismática, y deja el papel al otro lado del umbral.',
      ],
      en: [
        'Numismatics is the study of struck coin — and, broadly, of medals and paper. At Notofilia the numismatics case is reserved for what was minted: mint, alloy, edge, fineness, assayer. Notaphily has its own door. The 1761 Utrecht ducat — gold .986, 3.47 g, 21.7 mm, KM# 7.4 — is slabbed by NGC, certificate 4685927-012, AU Details for edge filing. The 1820 Santa Marta copper cuartillo is royalist siege money, Hernández 11, unslabbed. They are not banknotes.',
        'A Santafé pillar 8 reales would be Colombian colonial numismatics; this collection does not yet publish that disc. The Casa de Moneda Museum highlights the 1762 patacón; a Heritage lot with PCGS certificate 37262548 is a comparable, not a holding. Confusing an auction record with a catalogue piece is the error the duplicate rule is there to prevent.',
        'Numismatics shares with notaphily the Sheldon scale, encapsulation, and the discipline of not inventing mintages. BanRep publishes coin production by year and denomination; that is not the mintage of one variety. The glossary term opens the Netherlands and Colombia-numismatics cases, and leaves paper on the other side of the threshold.',
      ],
    },
    ducat,
    [ducat, santaMarta, colombiaNumismatica],
  ),
  article(
    'peso-oro',
    {
      es: [
        'Peso oro es el nombre del papel del Banco de la República de 1923 a 1993. Señalaba convertibilidad en oro; esa convertibilidad se perdió en 1931, pero la leyenda siguió en las planchas. Desde 1993 el nombre volvió a ser, simplemente, el peso. Un 1 peso oro de 1945 y un 10.000 pesos emberá de 1994 no llevan la misma unidad en el texto: el segundo ya dice «DIEZ MIL PESOS», sin oro. Confundir esas leyendas es confundir dos regímenes monetarios, no dos colores.',
        'González White numera los tipos BanRep con BG#; Hernández, el papel anterior y las variedades. Las tablas BanRep de producción anual empiezan en 1960 y miden denominación-año, no la tirada de un Pick. El 1 peso oro del 19 de enero de 1945, Pick 380d, serial R 85688116, cae en la emisión BG# 027 (seriales 81.000.001–96.000.000). El 2 pesos oro de 1944, Pick 390, es otra ficha. El espécimen de 5 pesos oro de 1960, serial 00000000, y el de 100 pesos oro de 1980, SPECIMEN Nº 027, son papel de muestra de ese mismo nombre.',
        'El peso oro no es una moneda de oro de ceca. El ducado de Utrecht es oro acuñado; el peso oro es una leyenda de billete. Esta colección no publica un tipo «peso oro» genérico: publica seriales. Cuando el banco dejó el vocablo, las familias siguientes —emberá, Policarpa, Isaacs— ya son pesos. El glosario fija esa frontera para no leer un 1994 como si aún prometiera metal.',
      ],
      en: [
        'Peso oro is the name of Banco de la República paper from 1923 to 1993. It signalled gold convertibility; that convertibility was lost in 1931, but the legend stayed on the plates. From 1993 the name returned to simply the peso. A 1945 1 peso oro and a 1994 Emberá 10,000-peso note do not carry the same unit in the text: the latter already reads “DIEZ MIL PESOS,” without oro. Confusing those legends is confusing two monetary regimes, not two colours.',
        'González White numbers BanRep types with BG#; Hernández, earlier paper and varieties. BanRep’s annual production tables begin in 1960 and measure denomination-year, not the printage of one Pick. The 1 peso oro of 19 January 1945, Pick 380d, serial R 85688116, falls in BG# 027 (serials 81,000,001–96,000,000). The 1944 2 pesos oro, Pick 390, is another record. The 1960 5 pesos oro specimen, serial 00000000, and the 1980 100 pesos oro specimen, SPECIMEN Nº 027, are sample paper of that same name.',
        'Peso oro is not a mint gold coin. The Utrecht ducat is struck gold; peso oro is a banknote legend. This collection does not publish a generic “peso oro” type: it publishes serials. When the bank dropped the word, later families — Emberá, Policarpa, Isaacs — are already pesos. The glossary fixes that boundary so a 1994 note is not read as if it still promised metal.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, pesoOro1944, specimen1960, embera1994],
  ),
  article(
    'pick',
    {
      es: [
        'El número Pick es la referencia del Standard Catalog of World Paper Money, usada en el comercio y en los censos para identificar un tipo —emisor, valor, fecha o letra de variedad—. Un Pick no es un serial: P# 380d nombra la familia; R 85688116 nombra el ejemplar. The Banknote Book (TBB) y los catálogos locales (BG#, Hernández, Friedberg, Haxby, Schwan) corrigen o afinan esa malla. En Colombia el Pick a menudo agrupa fechas que González White separa en BG#; por eso las fichas cruzan ambos sin republicar precios.',
        'Las letras importan. Pick 405 es el 5 pesos oro de 1960 de circulación; Pick 405s es el espécimen de ceros de esta colección. Pick 418b es la fecha 1980 sin prefijo; Pick 418s, el espécimen SPECIMEN Nº 027. Pick 437 es el 10.000 pesos oro de 1992 (Banco de México); Pick 437A, los 10.000 ya en «pesos» de 1994. Usar el número corto sin la letra mezcla objetos. Los tipos especializados de banca libre llevan S (S511, S819), no el bloque del banco central.',
        'Esta colección cita Pick cuando existe y no lo inventa para papel que no lo tiene —el scrip de Baraboo se numera Shafer WI100; el Giori no es un Fr. de circulación—. El glosario mantiene artículos aparte para Haxby, Friedberg, Schwan y The Banknote Book, anclados en el índice. Aquí se explica para qué sirve el Pick y se apunta a piezas cuya ficha ya lo lleva, no a un catálogo fantasma.',
      ],
      en: [
        'A Pick number is the Standard Catalog of World Paper Money reference, used in trade and in censuses to identify a type — issuer, denomination, date, or variety letter. A Pick is not a serial: P# 380d names the family; R 85688116 names the example. The Banknote Book (TBB) and local catalogues (BG#, Hernández, Friedberg, Haxby, Schwan) correct or refine that grid. In Colombia Pick often groups dates that González White splits into BG#; that is why records cross both without republishing prices.',
        'Letters matter. Pick 405 is the circulating 1960 5 pesos oro; Pick 405s is this collection’s zero-serial specimen. Pick 418b is the 1980 date without a prefix; Pick 418s, the SPECIMEN Nº 027 specimen. Pick 437 is the 1992 10,000 pesos oro (Banco de México); Pick 437A, the 1994 10,000s already in “pesos.” Using the short number without the letter mixes objects. Specialized free-banking types carry S (S511, S819), not the central-bank block.',
        'This collection cites Pick when it exists and does not invent one for paper that has none — Baraboo scrip is numbered Shafer WI100; the Giori is not a circulating Fr. The glossary keeps separate articles for Haxby, Friedberg, Schwan, and The Banknote Book, anchored on the index. Here the point of Pick is explained and pieces whose records already carry it are pointed to, not a ghost catalogue.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, specimen1960, rioHacha],
  ),
  article(
    'pmg-pcgs',
    {
      es: [
        'PMG (Paper Money Guaranty) y PCGS Banknote son las dos casas de certificación de papel más usadas. Encapsulan el billete y asignan un grado de 1 a 70, alineado con la escala Sheldon, más comentarios de originalidad —EPQ en PMG, o notas de perforación y montaje en PCGS—. No son NGC, que trabaja sobre todo moneda, aunque el buscador de Notofilia agrupa las tres. El certificado identifica la pieza: 8083882-032 es el 20 pesos Victory; 59068295 es el espécimen de 2.000 pesos oro de 1983. Un mismo número no genera una segunda ficha.',
        'El 20 pesos P#98a de Filipinas está encapsulado PMG 55 EPQ (About Uncirculated, Exceptional Paper Quality), serial F04661756, plancha B, impresor USBEP. Las pruebas del Banco Hipotecario de 1881 están en PMG 61 Uncirculated, serial Y 00000. El espécimen Pick 430as de 24 de julio de 1983 está en PCGS 64 Very Choice New, con «Hole Punch Cancelled» y restos de montaje al reverso, SPECIMEN Nº 030. Muchas otras fichas —emberá 1994, RM5, 1 peso oro 1945— se presentan en funda, sin losa; no se inventa un grado para ellas.',
        'Ni PMG ni PCGS tasan. Un 55 EPQ no es un precio. Un censo de población que no se haya verificado de forma independiente no se publica. El encapsulado documenta estado e identidad; no «mejora» el papel. Esta colección cita la casa y el certificado cuando existen, y deja claro cuando el ejemplar no se ha enviado. El término enlaza encapsulado, EPQ, escala Sheldon y NGC, para no tratar las tres casas como si fueran la misma.',
      ],
      en: [
        'PMG (Paper Money Guaranty) and PCGS Banknote are the two most used paper-money grading services. They slab the note and assign a grade from 1 to 70, aligned with the Sheldon scale, plus originality comments — EPQ at PMG, or hole-punch and mounting notes at PCGS. They are not NGC, which works mainly coin, though Notofilia’s search groups all three. The certificate identifies the piece: 8083882-032 is the Victory 20-peso note; 59068295 is the 1983 2,000 pesos oro specimen. The same number does not generate a second record.',
        'The Philippine 20-peso P#98a is slabbed PMG 55 EPQ (About Uncirculated, Exceptional Paper Quality), serial F04661756, plate B, printer USBEP. The 1881 Banco Hipotecario proofs are in PMG 61 Uncirculated, serial Y 00000. The 24 July 1983 Pick 430as specimen is in PCGS 64 Very Choice New, with “Hole Punch Cancelled” and mounting remnants on the back, SPECIMEN Nº 030. Many other records — 1994 Emberá, RM5, 1945 1 peso oro — are shown in sleeves, without a holder; a grade is not invented for them.',
        'Neither PMG nor PCGS appraises. A 55 EPQ is not a price. A population census that has not been independently verified is not published. The slab documents condition and identity; it does not “improve” the paper. This collection cites the service and the certificate when they exist, and makes clear when the example has not been sent. The term links encapsulation, EPQ, the Sheldon scale, and NGC, so the three houses are not treated as one.',
      ],
    },
    victory20,
    [victory20, specimen1983, hipotecario],
  ),
  article(
    'polimero',
    {
      es: [
        'El polímero, en notafilia, es el sustrato plástico de un billete —casi siempre polipropileno biaxialmente orientado, a menudo Guardian— en lugar del papel de algodón. Admite ventana transparente, mayor vida en circulación húmeda y efectos ópticos que el papel no da igual. No es Tyvek. No es un barniz sobre algodón. Australia inauguró la circulación ordinaria en 1988; Canadá, Malasia, Inglaterra y China, entre otros, siguieron con familias propias. Un conmemorativo de polímero no implica que toda la serie cotidiana sea plástica.',
        'Esta colección publica cuatro ejemplares. El 100 yuan del milenio (Pick 902), 28 de noviembre de 2000, serial J04445744, primer polímero de la República Popular, ventana del Templo del Cielo. El RM5 Distinctively Malaysia (Pick 52a, 2012), serial AA 1955984, ventana con cálao. El 5 dólares canadiense Frontiers (Pick 106b), 7 de noviembre de 2013, serial HBM0828003, Laurier y Canadarm2. El 5 libras del Banco de Inglaterra (Pick 394), 13 de septiembre de 2016, serial AC04 879241, Churchill al reverso. Todos en funda, sin encapsular; ningún prefijo es un reemplazo ZA ni un bajo.',
        'El polímero no elimina al emisor ni al Pick. Un 5 libras de Carlos III de 2024 sería otro tipo; esta ficha es la de Isabel II y Victoria Cleland. El papel colombiano de BanRep en esta vitrina sigue siendo algodón. El glosario cruza polímero con Guardian, ventana y OVD, y deja Tyvek y sustrato híbrido anclados en el índice. Nada de ese plástico está a la venta.',
      ],
      en: [
        'Polymer, in notaphily, is a banknote’s plastic substrate — almost always biaxially oriented polypropylene, often Guardian — instead of cotton paper. It takes a clear window, a longer life in wet circulation, and optical effects paper does not match. It is not Tyvek. It is not a varnish on cotton. Australia began ordinary circulation in 1988; Canada, Malaysia, England, and China, among others, followed with their own families. A polymer commemorative does not mean the whole everyday series is plastic.',
        'This collection publishes four examples. The millennium 100-yuan (Pick 902), 28 November 2000, serial J04445744, the People’s Republic’s first polymer note, Temple of Heaven window. The Distinctively Malaysia RM5 (Pick 52a, 2012), serial AA 1955984, hornbill window. The Bank of Canada Frontiers $5 (Pick 106b), 7 November 2013, serial HBM0828003, Laurier and Canadarm2. The Bank of England £5 (Pick 394), 13 September 2016, serial AC04 879241, Churchill on the back. All in sleeves, unslabbed; no prefix is a ZA replacement or a low serial.',
        'Polymer does not erase the issuer or the Pick. A 2024 Charles III £5 would be another type; this record is Elizabeth II and Victoria Cleland. Colombian BanRep paper in this case remains cotton. The glossary crosses polymer with Guardian, window, and OVD, and leaves Tyvek and hybrid substrate anchored on the index. None of that plastic is for sale.',
      ],
    },
    malaysiaRm5,
    [malaysiaRm5, canada5, england5, chinaYuan],
  ),
  article(
    'prueba-ensayo',
    {
      es: [
        'Una prueba o ensayo es una impresión preliminar, sin curso legal, para evaluar plancha, tinta, color o registro antes de la tirada. El ensayo suele ser una propuesta de diseño; la prueba, un test de taller. Hernández anota que las pruebas no llevan ceros y a menudo son unifaces, a diferencia del espécimen, que sí lleva ceros y suele marcarse SPECIMEN. En la práctica de ABNC, sin embargo, hay pruebas con serial 00000 montadas en cartulina de imprenta: el par del Banco Hipotecario de 1881 (S511p1 / S511p2) y el de Riohacha (S819p1 / S819p2) se fichan como pruebas, no como especímenes de banco central.',
        'La nota Giori del Lincoln Memorial, hacia los años 1970, es un test de prensa uniface: verde, sin seriales ni sellos, reverso en blanco. No es curso legal ni un Fr. de circulación. The E-Sylum sitúa pruebas con planchas «nonsense» del BEP en Ginebra, Nueva York, en esa década; esta ficha no inventa una tirada. Distinto de un remainder, que es papel de emisión ya cerrado al que le faltan firmas, y de un espécimen de BanRep con sobrecarga y perforaciones.',
        'Esta colección no convierte una prueba en circulación por tener retrato. El Hipotecario PMG 61 y el Giori se describen como lo que son. El espécimen de 5 pesos oro de 1960 —ceros, sin SPECIMEN impreso— se mantiene en el artículo de espécimen, porque Hernández y la ficha lo tratan así. El glosario separa los tres estados —prueba, espécimen, remainder— para que el serial de ceros no los fusione.',
      ],
      en: [
        'A proof or essay is a preliminary, non-legal-tender print used to evaluate plate, ink, colour, or register before the run. An essay is typically a design proposal; a proof, a shop test. Hernández notes that proofs do not carry zeros and are often uniface, unlike a specimen, which does carry zeros and is usually marked SPECIMEN. In ABNC practice, however, there are proofs with serial 00000 mounted on printer’s card: the 1881 Banco Hipotecario pair (S511p1 / S511p2) and the Riohacha pair (S819p1 / S819p2) are recorded as proofs, not as central-bank specimens.',
        'The Giori Lincoln Memorial note, ca. 1970s, is a uniface press test: green, with no serials or seals and a blank back. It is not legal tender and not a circulating Fr. The E-Sylum places trials with BEP “nonsense” plates at Geneva, New York, in that decade; this record does not invent a printage. It is distinct from a remainder, leftover paper from a closed issue missing signatures, and from a BanRep specimen with overprint and punches.',
        'This collection does not turn a proof into circulation because it has a portrait. The Hipotecario PMG 61 and the Giori are described as what they are. The 1960 5 pesos oro specimen — zeros, no printed SPECIMEN — stays in the specimen article, because Hernández and the record treat it so. The glossary separates the three states — proof, specimen, remainder — so that a zero serial does not merge them.',
      ],
    },
    giori,
    [giori, hipotecario, rioHacha],
  ),
  article(
    'remainder',
    {
      es: [
        'Un remainder es un ejemplar impreso que nunca circuló: suele faltarle una o ambas firmas manuscritas, el año completo de la fecha o el número de serie. Es papel sobrante de una plancha, un banco o una emisión ya cerrados —el banco quebró, se fusionó, o el impuesto del 10 % sobre el papel estatal apagó la emisión privada en Estados Unidos— y las hojas firmadas a medias quedaron en tesorería o en el archivo del grabador. Distinto del espécimen, marcado SPECIMEN y a menudo perforado, y de la prueba o ensayo, que es un test de plancha o color.',
        'En la notafilia estadounidense de bancos obsoletos (Haxby) es el estado más frecuente en el mercado: fecha impresa 18__, recuadro No. en blanco o con un serial de stock, una sola firma o ninguna. Esta colección publica el 1 dólar del State Bank at New Brunswick (Haxby NJ-350 G16a), serial 9890 · B, cajero manuscrito y presidente en blanco; el 5 dólares del City Bank of New Haven (Haxby CT-265 G52b), plancha A, No. en blanco, protector rojo FIVE; y el 50 dólares del Canal Bank de Nueva Orleans (Haxby LA-105 G46a), plancha D, reverso rojo, sin serial. Ninguno es un National Bank Note posterior a 1863.',
        'No se confunde remainder con resello ni con un billete cancelado: el remainder jamás circuló; el resello revalida papel que sí salió a la calle. Tampoco es un scrip de cámara de comercio. Las fichas documentan la ausencia de serial con no_serial_reason cuando el recuadro está vacío; no se inventa un número. El término enlaza banca libre estadounidense, Haxby y espécimen, para que un 00000 de prueba ABNC colombiana no se lea como un remainder de Connecticut.',
      ],
      en: [
        'A remainder is a printed note that never circulated: it is typically missing one or both manuscript signatures, the completed year of the date, or the serial. It is leftover paper from a plate, bank, or issue that had already closed — the bank failed or merged, or the 10 percent tax on state-bank paper ended private issues in the United States — and half-signed sheets stayed in the treasury or the engraver’s archive. It is distinct from a specimen, marked SPECIMEN and often perforated, and from a proof or essay, a plate or colour test.',
        'On United States obsolete notes (Haxby) it is the state most often seen in the market: a printed 18__ date, a blank No. box or a stock serial, and one signature or none. This collection publishes the State Bank at New Brunswick $1 (Haxby NJ-350 G16a), serial 9890 · B, manuscript cashier and blank president; the City Bank of New Haven $5 (Haxby CT-265 G52b), plate A, blank No., red FIVE protector; and the Canal Bank of New Orleans $50 (Haxby LA-105 G46a), plate D, red back, no serial. None is a National Bank Note after 1863.',
        'A remainder is not confused with a countermark or a cancelled note: a remainder never circulated; a countermark revalidates paper that did. It is not chamber-of-commerce scrip either. Records document a missing serial with no_serial_reason when the box is empty; a number is not invented. The term links United States free banking, Haxby, and specimen, so that a Colombian ABNC proof 00000 is not read as a Connecticut remainder.',
      ],
    },
    newBrunswick,
    [newBrunswick, newHaven, canalBank],
  ),
  article(
    'resello',
    {
      es: [
        'Un resello es una marca oficial aplicada sobre un billete o moneda ya existente para revalidarlo bajo una nueva autoridad. No es un sello de coleccionista ni un Where’s George. En julio de 1923 el Banco de la República reselló certificados de oro de Medellín como billetes provisionales. En la Guerra de los Mil Días la Junta de Emisión puso el sello del Banco Nacional sobre papel de bancos privados. El resello actúa sobre papel que sí había salido —o que estaba listo para salir—; el remainder, al contrario, jamás circuló.',
        'Esta colección no publica todavía un certificado de 1923 con la sobrecarga «BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL». No se inventa un serial para ilustrarlo. Las fichas de peso oro posteriores (1945, 1944) pertenecen al régimen que nació después de aquel puente, no al resello mismo. Un especímen TDLR con óvalos SPECIMEN tampoco es un resello de autoridad sucesora: es una marca de muestra de la imprenta.',
        'En moneda, el resello (contramarca) puede ser un punzón sobre un real o un peso ajeno; no se documenta aquí un ejemplar colombiano de ese tipo más allá de las fuentes de Hernández y del Museo. El término se cruza con billete provisional, sobresello y handstamp, anclados en el índice cuando no tienen artículo. Sirve para no leer una sobrecarga VICTORY de Filipinas —que es una serie, no un cambio de soberano sobre el mismo pliego— como si fuera un resello de 1923.',
      ],
      en: [
        'A countermark is an official mark applied over an existing note or coin to revalidate it under a new authority. It is not a collector stamp or a Where’s George. In July 1923 the Banco de la República overstamped Medellín gold certificates as provisional notes. In the Thousand Days’ War the Issue Board put the Banco Nacional’s seal on private-bank paper. The countermark acts on paper that had gone out — or was ready to go out; a remainder, by contrast, never circulated.',
        'This collection does not yet publish a 1923 certificate with the overprint “BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL.” A serial is not invented to illustrate it. Later peso oro records (1945, 1944) belong to the regime that began after that bridge, not to the overstamp itself. A TDLR specimen with SPECIMEN ovals is not a successor-authority countermark either: it is a printer’s sample mark.',
        'On coin a countermark may be a punch on a foreign real or peso; a Colombian example of that type is not documented here beyond Hernández and museum sources. The term crosses provisional note, overprint, and handstamp, anchored on the index when they have no article. It keeps one from reading a Philippine VICTORY overprint — a series, not a change of sovereign on the same sheet — as if it were a 1923 countermark.',
      ],
    },
    pesoOro1945,
    [pesoOro1945, specimen1980],
  ),
  article(
    'reverso',
    {
      es: [
        'El reverso es la cara posterior del billete: la que el emisor trata como dorso. Suele llevar un edificio, un paisaje, un mapa o una escena secundaria, y a veces la segunda numeración. No es «la cara menos importante»: en el 5 libras de polímero de esta colección Churchill, Westminster y el foil BLENHEIM están al reverso, mientras la promesa y Isabel II ocupan el anverso. En el 10.000 emberá de 1994 el reverso reúne aves colombianas y el mapamundi de Waldseemüller; el serial con estrella, en cambio, se lee en el anverso.',
        'Describir ambas caras evita errores de identificación. Un error de corte puede verse solo en un canto del reverso; un serial desparejado, en los dos extremos del dorso, como en algunos 2.000 pesos de formato reducido. El Giori del Lincoln Memorial es uniface: el reverso está en blanco a propósito, y esa ausencia es el dato, no un fallo de fotografía. Las pruebas ABNC a veces se fichan en par p1/p2, anverso y reverso por separado, cada uno encapsulado.',
        'En monedas el reverso es la cruz, el valor o el escudo, frente al obverso de efigie. El cuartillo de Santa Marta de 1820 se describe con las dos asignaciones de Numista —cruz S/M y corona 1/4— sin forzar los nombres de «cara nacional». Esta colección fotografía el reverso con el mismo cuidado que el anverso y no recorta una de las dos para «embellecer» la ficha.',
      ],
      en: [
        'The reverse is the back of a banknote: the face the issuer treats as the verso. It often carries a building, a landscape, a map, or a secondary scene, and sometimes the second serial. It is not “the less important side”: on this collection’s polymer £5, Churchill, Westminster, and the BLENHEIM foil sit on the reverse, while the promise and Elizabeth II occupy the obverse. On the 1994 Emberá 10,000 the back gathers Colombian birds and Waldseemüller’s world map; the starred serial, by contrast, is read on the face.',
        'Describing both sides prevents misidentification. A cutting error may show on only one reverse edge; mismatched serials, at both ends of the back, as on some reduced-format 2,000-peso notes. The Giori Lincoln Memorial is uniface: the reverse is blank on purpose, and that absence is the fact, not a photography fault. ABNC proofs are sometimes recorded as a p1/p2 pair, face and back separately, each slabbed.',
        'On coins the reverse is the cross, the value, or the shield, opposite the effigy obverse. The 1820 Santa Marta cuartillo is described with Numista’s two assignments — S/M cross and 1/4 crown — without forcing “national side” names. This collection photographs the reverse with the same care as the obverse and does not crop one of the two to “beautify” the record.',
      ],
    },
    england5,
    [england5, embera1994, giori],
  ),
  article(
    'scrip',
    {
      es: [
        'El scrip es papel de pago emitido por una empresa, una cámara de comercio o un municipio, redimible en un plazo y un lugar, no por un banco central. Es exonumia y vale al portador, no un Federal Reserve Note. El Golden Jubilee de Baraboo de 1933 —Shafer WI100, diseño de E. B. Trimpey— se anunció el 28 de junio y se redimía hasta el 1 de noviembre. Firmas de P. L. Gust y O. L. Gust. No se conserva cifra de tirada; esta ficha no inventa una.',
        'Esta colección publica el 5¢ John Ringling, serial A4895; el 10¢ Chas. Ringling, A2844; el 15¢ Al. T. Ringling, A2819; y el 1 dólar Ringling Bros., A2002. Los de 25¢ y 50¢ esperan serial o certificado. El scrip no es un remainder de banco obsoleto ni un MPC. Tampoco es el tiquete estudiantil colombiano de 15 centavos, que es papel de transporte. Cada serial de Baraboo es un objeto; no se abre una segunda ficha para el mismo A4895.',
        'En la Depresión el scrip local cubrió escasez de cambio menudo. Eso no lo convierte en curso legal federal. Quien lo colecciona documenta emisor, plazo y serial, igual que en un Pick. El glosario cruza scrip con exonumia y vale al portador, y deja el FRN y el certificado de plata en sus propias fichas. Nada de ese papel de circo está a la venta.',
      ],
      en: [
        'Scrip is payment paper issued by a firm, a chamber of commerce, or a town, redeemable in a stated term and place, not by a central bank. It is exonumia and a bearer voucher, not a Federal Reserve Note. Baraboo’s 1933 Golden Jubilee — Shafer WI100, designed by E. B. Trimpey — was announced on 28 June and redeemable through 1 November. Signatures of P. L. Gust and O. L. Gust. No record of the number printed survives; this record does not invent one.',
        'This collection publishes the John Ringling 5¢, serial A4895; the Chas. Ringling 10¢, A2844; the Al. T. Ringling 15¢, A2819; and the Ringling Bros. $1, A2002. The 25¢ and 50¢ wait for a serial or certificate. Scrip is not an obsolete-bank remainder or an MPC. It is not Colombia’s 15-centavo student ticket either, which is transport paper. Each Baraboo serial is an object; a second record is not opened for the same A4895.',
        'In the Depression, local scrip covered a shortage of small change. That does not make it federal legal tender. Anyone who collects it documents issuer, term, and serial, as on a Pick. The glossary crosses scrip with exonumia and bearer note, and leaves the FRN and the silver certificate on their own records. None of that circus paper is for sale.',
      ],
    },
    baraboo5c,
    [baraboo5c],
  ),
  article(
    'specimen',
    {
      es: [
        'Un espécimen es un ejemplar de muestra enviado a bancos y fuerzas de seguridad para familiarizarlos con un diseño nuevo. Suele llevar seriales de ceros, la palabra SPECIMEN o MUESTRA, óvalos «NO VALUE» y, a menudo, perforaciones de cancelación. No entra en circulación. Hernández usa los ceros para distinguirlo de la prueba, que no los lleva y a menudo es uniface. En la práctica hay matices: el 5 pesos oro de 1960 de esta colección (Pick 405s, serie M, serial 00000000) no lleva sobrecarga SPECIMEN ni perforaciones, y aun así la ficha lo trata como espécimen TDLR.',
        'El 100 pesos oro de 1.º de enero de 1980 (Pick 418s) sí lleva el aparato completo: ceros, diagonal SPECIMEN, óvalos, SPECIMEN Nº 027 y tres perforaciones. El 2.000 pesos oro del 24 de julio de 1983 (Pick 430as) está encapsulado PCGS 64, certificado 59068295, SPECIMEN Nº 030, con notas de perforación y restos de montaje. No se publica tirada de especímenes: González White da emisión de circulación; el pliego no cifra las muestras. Un 00000 de prueba ABNC del Hipotecario o de Riohacha se queda en el artículo de prueba.',
        'El espécimen no es un remainder ni un error. El número de muestra (027, 030) identifica el envío, no un serial de circulación. Esta colección no inventa un censo PMG para el 405s, que está en funda. El término enlaza prueba, remainder y encapsulado, para que un cero no fusione tres estados de papel distintos.',
      ],
      en: [
        'A specimen is a sample note sent to banks and law enforcement to familiarise them with a new design. It usually carries zero serials, the word SPECIMEN or MUESTRA, “NO VALUE” ovals, and often cancellation punches. It never circulates. Hernández uses zeros to distinguish it from a proof, which does not carry them and is often uniface. In practice there are nuances: this collection’s 1960 5 pesos oro (Pick 405s, Series M, serial 00000000) has no SPECIMEN overprint and no punches, and the record still treats it as a TDLR specimen.',
        'The 100 pesos oro of 1 January 1980 (Pick 418s) does carry the full apparatus: zeros, a diagonal SPECIMEN, ovals, SPECIMEN Nº 027, and three punches. The 2,000 pesos oro of 24 July 1983 (Pick 430as) is slabbed PCGS 64, certificate 59068295, SPECIMEN Nº 030, with hole-punch and mounting-remnant notes. No specimen printage is published: González White gives a circulating emisión; the spread does not figure the samples. An ABNC proof 00000 of the Hipotecario or Riohacha stays in the proof article.',
        'A specimen is not a remainder or an error. The sample number (027, 030) identifies the shipment, not a circulating serial. This collection does not invent a PMG census for the 405s, which is in a sleeve. The term links proof, remainder, and encapsulation, so that a zero does not merge three different paper states.',
      ],
    },
    specimen1980,
    [specimen1980, specimen1960, specimen1983],
  ),
  article(
    'tinta-ovi',
    {
      es: [
        'La tinta OVI (optically variable ink) cambia de color según el ángulo de visión —por ejemplo, de verde a púrpura—. Es un OVD impreso, no una lámina holográfica ni un parche SPARK. El falsificador que fotocopia o imprime en offset plano no reproduce ese cambio. Se verifica inclinando el billete bajo luz puntual, sin disolventes. Si el color no se desplaza, no es OVI, aunque brille: eso puede ser tinta iridiscente o un foil aparte.',
        'El 100 yuan del milenio lleva un dispositivo ópticamente variable con el carácter 千年, citado en la ficha junto a la ventana del Templo del Cielo. El 5 libras de Churchill combina ventana, Torre Isabelina y foil BLENHEIM; no se afirma aquí que ese parche sea OVI si la ficha lo nombra como foil. El RM5 de Malasia y el 5 dólares canadiense usan efectos de polímero y ventana; cada ficha dice lo que muestra, sin copiar un folleto publicitario.',
        'En papel colombiano reciente hay tintas iridiscentes e hilos; no se etiqueta OVI un Pick de esta vitrina si la fuente no lo dice. El glosario mantiene tinta iridiscente, SPARK y foil anclados en el índice, y deja este artículo para el cambio de color impreso y su pariente OVD. Nada de esa tinta se vende; se describe sobre ejemplares ya publicados.',
      ],
      en: [
        'Optically variable ink (OVI) changes colour with the viewing angle — for example, from green to purple. It is a printed OVD, not a holographic foil or a SPARK patch. A counterfeiter who photocopies or prints flat offset does not reproduce that shift. It is checked by tilting the note under a point light, without solvents. If the colour does not move, it is not OVI, even if it shines: that may be iridescent ink or a separate foil.',
        'The millennium 100-yuan carries an optically variable device with the characters 千年, cited in the record beside the Temple of Heaven window. The Churchill £5 combines window, Elizabeth Tower, and BLENHEIM foil; that patch is not asserted here as OVI if the record names it as foil. The Malaysian RM5 and the Canadian $5 use polymer and window effects; each record says what it shows, without copying an advertising leaflet.',
        'On recent Colombian paper there are iridescent inks and threads; a Pick in this case is not labelled OVI if the source does not say so. The glossary keeps iridescent ink, SPARK, and foil anchored on the index, and leaves this article for printed colour-shift and its OVD relative. None of that ink is for sale; it is described on pieces already published.',
      ],
    },
    chinaYuan,
    [chinaYuan, england5],
  ),
  article(
    'uniface',
    {
      es: [
        'Uniface —a una cara— describe un billete, prueba o espécimen impreso solo por el anverso, con el reverso en blanco. No es un error de tinta faltante en circulación: es una decisión de taller. Hernández anota que las pruebas suelen ser unifaces; los especímenes de BanRep de esta colección, en cambio, están impresos por ambas caras y luego sobrecargados. La nota de prueba Giori del Lincoln Memorial, hacia los años 1970, es el ejemplar uniface de la vitrina miscelánea estadounidense: verde, sin seriales ni sellos, dorso vacío.',
        'Las pruebas ABNC del Hipotecario y de Riohacha se fichan en par anverso/reverso (p1 y p2), cada cara en su cápsula PMG 61: no son unifaces en el sentido del Giori, sino dos impresiones de una misma orden de imprenta. Confundir ese par con un solo pliego uniface mezclaría objetos. Un remainder con reverso rojo, como el Canal Bank, está impreso por detrás a propósito.',
        'Fotografiar el dorso en blanco es parte de la ficha: demuestra que no se omitió una cara. El Giori no es curso legal ni un Fr. de la Reserva Federal. El término enlaza prueba, espécimen y reverso, para que un dorso vacío no se lea como un fallo de escaneo ni como un Pick de circulación.',
      ],
      en: [
        'Uniface describes a note, proof, or specimen printed only on the face, with a blank reverse. It is not a missing-ink error in circulation: it is a shop decision. Hernández notes that proofs are often uniface; the BanRep specimens in this collection, by contrast, are printed on both sides and then overprinted. The Giori Lincoln Memorial test note, ca. 1970s, is the uniface example in the United States miscellaneous case: green, with no serials or seals and an empty back.',
        'The ABNC Hipotecario and Riohacha proofs are recorded as a face/back pair (p1 and p2), each side in its PMG 61 holder: they are not uniface in the Giori sense, but two printings from one printer’s order. Confusing that pair with a single uniface sheet would mix objects. A remainder with a red back, such as the Canal Bank, is printed on the reverse on purpose.',
        'Photographing the blank back is part of the record: it shows that a face was not omitted. The Giori is not legal tender and not a Federal Reserve Fr. The term links proof, specimen, and reverse, so that an empty back is not read as a scanning fault or as a circulating Pick.',
      ],
    },
    giori,
    [giori, hipotecario],
  ),
  article(
    'ventana-transparente',
    {
      es: [
        'La ventana transparente es una zona translúcida o un recorte en un billete de polímero o híbrido, a menudo con silueta, relieve óptico o un elemento metálico. No es una filigrana de papel: no se forma en la pasta, se diseña en el sustrato Guardian u otro plástico. Tampoco es un hilo ventana de algodón. Sirve para ver al trasluz un motivo que el falso de fotocopia no reproduce, y para alojar un OVD.',
        'El RM5 de Malasia lleva a la izquierda una ventana con la silueta de un cálao rinoceronte, la media luna y la estrella de catorce puntas, serial AA 1955984. El 100 yuan del milenio muestra el Templo del Cielo en la ventana, serial J04445744. El 5 libras de Inglaterra aloja la Torre Isabelina en oro dentro de la ventana, serial AC04 879241. El 5 dólares canadiense de Laurier forma parte de la serie Frontiers, también con ventana de polímero, serial HBM0828003. Ninguna ficha inventa una tirada para esos prefijos.',
        'Una ventana rota, delaminada o sustituida con cinta es daño, no un error de diseño. Esta colección muestra esos ejemplares en funda, sin encapsular. El término enlaza polímero, Guardian y OVD. El papel de algodón colombiano de esta vitrina no tiene ventana: buscarle una es confundir sustratos.',
      ],
      en: [
        'A clear window is a translucent zone or a cut-out in a polymer or hybrid banknote, often with a silhouette, optical relief, or a metallic element. It is not a paper watermark: it is not formed in the pulp; it is designed into Guardian or another plastic substrate. It is not a cotton window thread either. It lets one see a motif by transmitted light that a photocopy fake does not reproduce, and it can hold an OVD.',
        'The Malaysian RM5 carries at left a window with a rhinoceros-hornbill silhouette, the crescent, and the fourteen-pointed star, serial AA 1955984. The millennium 100-yuan shows the Temple of Heaven in the window, serial J04445744. The England £5 houses Elizabeth Tower in gold inside the window, serial AC04 879241. The Canadian Laurier $5 belongs to the Frontiers series, also with a polymer window, serial HBM0828003. No record invents a printage for those prefixes.',
        'A broken, delaminated, or tape-replaced window is damage, not a design error. This collection shows those examples in sleeves, unslabbed. The term links polymer, Guardian, and OVD. Colombian cotton paper in this case has no window: looking for one is confusing substrates.',
      ],
    },
    malaysiaRm5,
    [malaysiaRm5, chinaYuan, england5, canada5],
  ),
];

const extras: Partial<Record<StandaloneGlossarySlug, { es: string; en: string }>> = {
  anverso: {
    es: 'El anverso también es el lugar donde el coleccionista lee firmas, fecha y, en muchos tipos colombianos, el nombre del grabador al pie. Una ficha que omita esa cara no identifica el objeto. Por eso cada ejemplo de este artículo enlaza la fotografía frontal ya publicada, no un recorte nuevo ni un serial inventado.',
    en: 'The obverse is also where the collector reads signatures, date and, on many Colombian types, the engraver’s imprint. A record that omits that face does not identify the object. That is why each example in this article links the published face photograph, not a new crop or an invented serial.',
  },
  'billete-de-reemplazo-estrella': {
    es: 'Quien compare una estrella con un asterisco de las series de 1970–1990 está leyendo dos convenciones de fábrica, no dos Pick distintos. La ficha del emberá 1994 documenta esa marca sobre seriales concretos. No se publica una tirada de reposiciones a partir del total BanRep de 10.000 pesos de 1994 (123,05 millones), que mezcla ordinarios y estrellas.',
    en: 'Anyone comparing a star with a 1970s–1990s asterisk is reading two factory conventions, not two different Picks. The 1994 Emberá record documents that mark on concrete serials. A replacement printage is not published from BanRep’s 1994 10,000-peso total (123.05 million), which mixes ordinary notes and stars.',
  },
  exonumia: {
    es: 'El término exonumia también cubre fichas metálicas y medallas que no son moneda de curso. En esta vitrina el papel de Baraboo basta para ilustrarlo sin inventar una medalla. El 1 dólar de Dallas con sellos de Where’s George? sigue siendo un FRN de curso legal: no se clasifica aquí como exonumia, aunque los sellos lo documenten como objeto de seguimiento.',
    en: 'Exonumia also covers metallic tokens and medals that are not legal-tender coin. In this case Baraboo paper is enough to illustrate it without inventing a medal. The Dallas $1 with Where’s George? stamps remains a legal-tender FRN: it is not classed here as exonumia, even though the stamps document it as a tracking object.',
  },
  filigrana: {
    es: 'Una filigrana mal leída lleva a atribuir un retrato de Libertad a un tipo que no lo lleva, o a llamar filigrana a una ventana de polímero. Las fichas de polímero de esta colección describen ventana, no marca de agua. El papel ABNC de 1945 se cita aquí porque es algodón de banco central, el sustrato donde la filigrana tiene sentido.',
    en: 'A misread watermark leads one to attribute a Liberty portrait to a type that does not carry it, or to call a polymer window a watermark. This collection’s polymer records describe a window, not a watermark. The 1945 ABNC paper is cited here because it is central-bank cotton, the substrate on which a watermark makes sense.',
  },
  foxing: {
    es: 'El foxing no autoriza un lavado casero ni un grado inflado. Si un encapsulado futuro citara manchas o negara el EPQ, esa etiqueta se transcribiría; hoy esas dos piezas emberá no la tienen. El artículo de filigrana explica por qué las manchas se ven en el margen: es la zona más clara del pliego, no un sello.',
    en: 'Foxing does not licence a home wash or an inflated grade. If a future slab cited stains or denied EPQ, that label would be transcribed; today those two Emberá pieces have none. The watermark article explains why the spots show in the margin: it is the palest zone of the sheet, not a stamp.',
  },
  guardian: {
    es: 'Guardian es una marca de sustrato, no un emisor. Un billete Guardian sigue llevando Pick, serial y banco. El 5 libras de Churchill se cita en el artículo de polímero; aquí basta con China, Malasia y Canadá para mostrar el plástico en tres continentes, cada uno con su ventana y su número de serie ya publicados.',
    en: 'Guardian is a substrate brand, not an issuer. A Guardian note still carries Pick, serial, and bank. The Churchill £5 is cited in the polymer article; here China, Malaysia, and Canada are enough to show the plastic on three continents, each with its window and already published serial.',
  },
  'hilo-de-seguridad': {
    es: 'El hilo tampoco es un serial ni una firma. Se describe en la ficha cuando el catálogo o la fotografía lo hacen visible. El 1 peso oro de 1945 y el emberá de 1994 ilustran papel de BanRep de dos épocas; no se afirma que ambos lleven el mismo hilo. Quien necesite la variedad con hilo del Pick 404e debe esperar una ficha de esa fecha, no reutilizar el serial 26530968.',
    en: 'A thread is not a serial or a signature either. It is described in the record when the catalogue or the photograph makes it visible. The 1945 1 peso oro and the 1994 Emberá illustrate BanRep paper of two periods; both are not asserted to carry the same thread. Anyone who needs the threaded Pick 404e variety must wait for a record of that date, not reuse serial 26530968.',
  },
  intaglio: {
    es: 'El intaglio tampoco es un grado. Un retrato nítido en una foto no demuestra relieve original: el tacto y, si hay losa, el EPQ o su ausencia lo documentan. Las tres piezas enlazadas —Hipotecario PMG 61, Giori uniface y 1 peso oro 1945— cubren prueba, ensayo de prensa y circulación, los tres estados en los que la talla dulce aparece en esta colección.',
    en: 'Intaglio is not a grade either. A sharp portrait in a photograph does not prove original relief: touch and, if there is a slab, EPQ or its absence document it. The three linked pieces — Hipotecario PMG 61, uniface Giori, and 1945 1 peso oro — cover proof, press trial, and circulation, the three states in which line engraving appears in this collection.',
  },
  mariposa: {
    es: 'Hernández reserva mariposa al ala de corte; no al diseño de un ave en el reverso emberá. Mezclar esos sentidos es un error de lectura. La vitrina de errores de Colombia reúne esta pieza con fallos de numeración de otros valores; el glosario las mantiene como artículos distintos para que 09636101 no absorba 72461316.',
    en: 'Hernández reserves mariposa for the cutting wing, not for a bird design on the Emberá back. Mixing those senses is a reading error. Colombia’s error case gathers this piece with numbering faults of other denominations; the glossary keeps them as separate articles so that 09636101 does not absorb 72461316.',
  },
  mpc: {
    es: 'Las series 641, 661, 681 y 692 de esta vitrina no se fusionan en un solo dólar de Vietnam. Cada una tuvo su C-Day. El 10 dólares J01130273J ilustra el tipo; las otras denominaciones tienen ficha propia. Schwan y Pick M son las claves de catálogo; no se les inventa un Friedberg de FRN.',
    en: 'Series 641, 661, 681, and 692 in this case are not merged into one Vietnam dollar. Each had its C-Day. The $10 J01130273J illustrates the type; the other denominations have their own records. Schwan and Pick M are the catalogue keys; a Friedberg FRN number is not invented for them.',
  },
  ngc: {
    es: 'Un Details de NGC no se redondea a AU-50 para embellecer la ficha. El limado del canto del ducado está escrito en la etiqueta 4685927-012 y se transcribe. Santa Marta entra como contraste: moneda colombiana de sitio, sin losa, distinta ceca y distinto metal. El artículo de encapsulado cubre PMG y PCGS para el papel; este se queda en la casa de las monedas.',
    en: 'An NGC Details grade is not rounded up to AU-50 to beautify the record. The ducat’s edge filing is written on label 4685927-012 and transcribed. Santa Marta enters as a contrast: Colombian siege coin, unslabbed, a different mint and metal. The encapsulation article covers PMG and PCGS for paper; this one stays with the coin house.',
  },
  notafilia: {
    es: 'La notafilia de esta colección es bilingüe y sin mostrador. Cada pieza tiene ruta ES y EN, canonical y hreflang, y un serial o una razón de no serial. El glosario de dos niveles deja los artículos largos en URL propia y pliega el resto en el índice, precisamente para no diluir esa disciplina con cientos de páginas huecas. El papel se estudia; no se cotiza aquí.',
    en: 'Notaphily in this collection is bilingual and has no counter. Each piece has an ES and EN route, canonical and hreflang, and a serial or a no-serial reason. The two-tier glossary keeps long articles on their own URLs and folds the rest into the index, precisely so that discipline is not diluted by hundreds of hollow pages. The paper is studied; it is not priced here.',
  },
  numeracion: {
    es: 'La numeración también distingue reemplazos, especímenes y remainders: estrella, ceros, recuadro en blanco. Tratar esos tres como el mismo número borra la identidad del objeto. Las fichas enlazadas —10000001, emberá 00113227, New Haven sin serial— cubren fancy, reposición y ausencia documentada. El buscador indexa el serial normalizado; no se despojan ceros al comparar.',
    en: 'Numbering also distinguishes replacements, specimens, and remainders: a star, zeros, a blank box. Treating those three as the same number erases the object’s identity. The linked records — 10000001, Emberá 00113227, New Haven with no serial — cover fancy, replacement, and documented absence. Search indexes the normalised serial; zeros are not stripped when comparing.',
  },
  'numeracion-especial': {
    es: 'Radar, binario, sólida, escalera y repetidor siguen en el índice como anclas, porque su definición corta basta cuando el artículo largo cubre el conjunto. La herramienta de numeración especial no crea un holding al clasificar un número que el usuario escribe. Solo 10000001, ya publicado, ilustra aquí un patrón real de la vitrina colombiana.',
    en: 'Radar, binary, solid, ladder, and repeater stay on the index as anchors, because their short definitions suffice when the long article covers the set. The fancy-serial tool does not create a holding by classifying a number the user types. Only 10000001, already published, illustrates here a real pattern from the Colombian case.',
  },
  numismatica: {
    es: 'La numismática de Notofilia no mezcla un ducado de comercio con un peso oro impreso. Uno es disco de ceca; el otro, leyenda de billete. Las puertas de numismática y de notafilia existen para no cruzar esas vitrinas. Cuando haya un columnario de Santafé, tendrá ficha de moneda, no de papel. Hasta entonces el cobre de 1820 y el oro de 1761 bastan para mostrar ceca, metal y certificado sin inventar un 8 reales.',
    en: 'Notofilia’s numismatics does not mix a trade ducat with a printed peso oro. One is a mint disc; the other, a banknote legend. The numismatics and notaphily doors exist so those cases are not crossed. When a Santafé pillar dollar arrives it will have a coin record, not a paper one. Until then the 1820 copper and the 1761 gold suffice to show mint, metal, and certificate without inventing an 8 reales.',
  },
  'peso-oro': {
    es: 'Después de 1993, pesos oro en un anuncio de venta suele ser inercia de catálogo, no la leyenda del papel. Esta colección transcribe lo impreso: oro hasta las familias que lo llevan, pesos cuando el banco lo quitó. El emberá de 1994 cierra el arco. No se publica un tipo genérico ni una convertibilidad que 1931 ya había cancelado.',
    en: 'After 1993, pesos oro in a sale listing is often catalogue inertia, not the legend on the paper. This collection transcribes what is printed: oro on the families that carry it, pesos once the bank dropped it. The 1994 Emberá closes the arc. A generic type is not published, nor a convertibility that 1931 had already cancelled.',
  },
  pick: {
    es: 'Un Pick sin letra, o un S olvidado en banca libre, mezcla circulación, espécimen y prueba. Las fichas de esta colección escriben 405s, 418s, 430as, S511p1. El glosario plegado conserva Friedberg, Haxby, Schwan y The Banknote Book como anclas para quien llegue con otra clave. El serial sigue siendo la identidad; el Pick, el tipo.',
    en: 'A Pick without its letter, or a missing S on free-banking paper, mixes circulation, specimen, and proof. Records in this collection write 405s, 418s, 430as, S511p1. The folded glossary keeps Friedberg, Haxby, Schwan, and The Banknote Book as anchors for anyone arriving with another key. The serial remains the identity; the Pick, the type.',
  },
  polimero: {
    es: 'Cuatro ejemplares no hacen un censo mundial de polímero: son los que esta vitrina ha fotografiado. China conmemora; Malasia, Canadá e Inglaterra circulan. El papel colombiano de BanRep en el catálogo sigue en algodón. Quien busque Tyvek o un híbrido encontrará esos términos anclados en el índice, no una segunda URL hueca.',
    en: 'Four examples are not a world census of polymer: they are the ones this case has photographed. China commemorates; Malaysia, Canada, and England circulate. Colombian BanRep paper in the catalogue remains cotton. Anyone looking for Tyvek or a hybrid will find those terms anchored on the index, not a second hollow URL.',
  },
  'prueba-ensayo': {
    es: 'La prueba tampoco es un error de impresión ni una mariposa. El Giori se cortó a propósito como test; el 5.000 de 2010 conservó un margen por fallo de guillotina. Mezclar esos talleres borra ambas fichas. Serial de ceros, SPECIMEN y recuadro en blanco siguen siendo tres estados: prueba ABNC, espécimen TDLR y remainder Haxby.',
    en: 'A proof is not a printing error or a butterfly cut either. The Giori was cut on purpose as a test; the 2010 5,000 kept a margin from a guillotine fault. Mixing those shops erases both records. Zero serials, SPECIMEN, and a blank box remain three states: ABNC proof, TDLR specimen, and Haxby remainder.',
  },
  resello: {
    es: 'Mientras no haya un certificado de 1923 en el catálogo, el resello se explica con fuentes de la vitrina colombiana y se ilustra con el papel que sí nació de aquel régimen: el peso oro de circulación. Inventar un serial de Medellín violaría la regla de unicidad. El espécimen de 1980 se enlaza solo para contrastar una sobrecarga de imprenta con un resello de autoridad.',
    en: 'Until a 1923 certificate is in the catalogue, the countermark is explained from sources in the Colombian case and illustrated with paper that did grow from that regime: circulating peso oro. Inventing a Medellín serial would break the uniqueness rule. The 1980 specimen is linked only to contrast a printer’s overprint with an authority countermark.',
  },
  reverso: {
    es: 'Un reverso en blanco, un reverso rojo de Canal Bank y un reverso de Churchill son tres decisiones de diseño, no un mismo dorso. La ficha nombra lo que hay. El anverso hermano cubre firmas y retrato; este artículo cubre el otro lado del mismo objeto, con los mismos seriales ya publicados y sin recortar la fotografía para fingir un grabado que no existe.',
    en: 'A blank reverse, a Canal Bank red back, and a Churchill reverse are three design decisions, not one verso. The record names what is there. The sibling obverse article covers signatures and portrait; this one covers the other side of the same object, with the same already published serials and without cropping the photograph to fake an engraving that is not there.',
  },
  scrip: {
    es: 'Baraboo no es Notgeld alemán ni un vale de lazareto colombiano. Es scrip de cámara en una ciudad de cuarteles de invierno de circo, con seriales A ya publicados. La ficha de tipo reúne las denominaciones; las de pieza esperan su número. El artículo cubre el fenómeno y enlaza A4895, que es el ejemplar que ilustra el anverso.',
    en: 'Baraboo is not German Notgeld or a Colombian lazaretto token. It is chamber scrip in a circus winter-quarters town, with A serials already published. The type record gathers the denominations; piece records wait for their numbers. The article covers the phenomenon and links A4895, which is the example that illustrates the face.',
  },
  specimen: {
    es: 'Ceros, SPECIMEN y perforación pueden coincidir o no: 1960 no lleva sobrecarga; 1980 y 1983 sí. La ficha transcribe lo que se ve, sin forzar un Hernández genérico sobre un TDLR. Los números de muestra 027 y 030 no se reutilizan en otra pieza. El Hipotecario 00000 se queda fuera de este artículo porque es prueba ABNC, no muestra de banco central.',
    en: 'Zeros, SPECIMEN, and punches may coincide or not: 1960 has no overprint; 1980 and 1983 do. The record transcribes what is seen, without forcing a generic Hernández reading onto a TDLR note. Sample numbers 027 and 030 are not reused on another piece. The Hipotecario 00000 stays out of this article because it is an ABNC proof, not a central-bank sample.',
  },
  'tinta-ovi': {
    es: 'OVI, foil y SPARK se presentan a veces como si fueran lo mismo; el catálogo no. Esta colección nombra el efecto cuando la ficha o la fuente lo identifican, y calla cuando no. El 100 yuan y el 5 libras bastan para mostrar un OVD de conmemorativo y un foil de circulación, sin atribuir un cambio de color a un Pick colombiano que no lo documenta.',
    en: 'OVI, foil, and SPARK are sometimes presented as if they were the same; the catalogue does not. This collection names the effect when the record or the source identifies it, and stays silent when it does not. The 100-yuan and the £5 suffice to show a commemorative OVD and a circulating foil, without attributing a colour shift to a Colombian Pick that does not document it.',
  },
  uniface: {
    es: 'Uniface no es un sinónimo de prueba. Hay pruebas a dos caras y especímenes a dos caras. El Giori es uniface porque la prensa se ensayó así; fotografiar el dorso vacío es la prueba de esa decisión. El par p1/p2 del Hipotecario enseña el caso contrario: dos caras, dos cápsulas, una misma orden ABNC.',
    en: 'Uniface is not a synonym for proof. There are two-sided proofs and two-sided specimens. The Giori is uniface because the press was trialled that way; photographing the empty back is the evidence of that decision. The Hipotecario p1/p2 pair shows the opposite case: two faces, two holders, one ABNC order. The Canal Bank red back closes the contrast.',
  },
  'ventana-transparente': {
    es: 'Cuatro ventanas —Malasia, China, Inglaterra, Canadá— no autorizan a describir una quinta que esta colección no ha fotografiado. Cada serial citado ya tiene ficha. El papel de algodón, la filigrana y el hilo siguen en sus artículos o anclas. Buscar una ventana en un peso oro de 1945 es confundir 1923–1993 con el plástico de 2000 en adelante.',
    en: 'Four windows — Malaysia, China, England, Canada — do not licence describing a fifth that this collection has not photographed. Each cited serial already has a record. Cotton paper, watermark, and thread stay in their articles or anchors. Looking for a window on a 1945 peso oro is confusing 1923–1993 with plastic from 2000 onward. The object remains the published serial.',
  },
};

for (const item of glossaryArticles) {
  const extra = extras[item.slug];
  if (extra) {
    item.paragraphs.es.push(extra.es);
    item.paragraphs.en.push(extra.en);
  }
}

const articlesBySlug = new Map(glossaryArticles.map((item) => [item.slug, item]));

if (glossaryArticles.length !== STANDALONE_GLOSSARY_SLUGS.length) {
  throw new Error(
    `glossaryArticles must cover every standalone slug (${STANDALONE_GLOSSARY_SLUGS.length}); found ${glossaryArticles.length}`,
  );
}

for (const slug of STANDALONE_GLOSSARY_SLUGS) {
  if (!articlesBySlug.has(slug)) {
    throw new Error(`Missing glossary article for standalone slug ${slug}`);
  }
}

export function glossaryArticleBySlug(slug: string): GlossaryArticle | undefined {
  return articlesBySlug.get(slug as StandaloneGlossarySlug);
}

export function glossaryArticleWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function glossaryArticleLocaleText(article: GlossaryArticle, locale: 'es' | 'en'): string {
  return article.paragraphs[locale].join(' ');
}

