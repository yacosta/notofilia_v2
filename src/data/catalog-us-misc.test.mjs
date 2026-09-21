import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const catalog = readFileSync(new URL('./catalog.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const miscPage = readFileSync(
  new URL('../components/catalog/UnitedStatesMiscSeriesPage.astro', import.meta.url),
  'utf8',
);
const notePage = readFileSync(
  new URL('../components/catalog/UnitedStatesNotePage.astro', import.meta.url),
  'utf8',
);
const prose = readFileSync(
  new URL('../components/catalog/CatalogProseParagraph.astro', import.meta.url),
  'utf8',
);

describe('US miscellaneous Where’s George copy', () => {
  it('uses the requested 1-dollar opening in Spanish and English', () => {
    assert.match(
      data,
      /Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 1 dólar,/,
    );
    assert.match(data, /contemporary interventions on the \$1/);
    assert.match(data, /pop art sobre el 1 dólar/);
    assert.match(data, /pop art on the \$1/);
    assert.doesNotMatch(
      data,
      /Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 2 dólares,/,
    );
    assert.doesNotMatch(data, /contemporary interventions on the \$2/);
  });

  it('renders Where’s George as a real in-page anchor, not markdown in a string', () => {
    assert.match(data, /WHERES_GEORGE_HREF = 'https:\/\/www\.wheresgeorge\.com'/);
    assert.match(data, /serial: 'K46602688C'/);
    assert.match(catalog, /export type CatalogProsePart/);
    assert.match(prose, /target="_blank"/);
    assert.match(prose, /rel="noopener noreferrer"/);
    assert.match(prose, /<NewWindowHint locale=\{locale\} \/>/);
    assert.match(seriesPage, /chapter\.bodyParts/);
    assert.match(seriesPage, /<CatalogProseParagraph/);
    assert.match(miscPage, /miscSeriesIntro/);
    assert.match(miscPage, /<CatalogProseParagraph/);
    assert.match(notePage, /isCatalogProseParts/);
    assert.match(notePage, /<CatalogProseParagraph/);
    assert.doesNotMatch(prose, /set:html/);
  });
});

describe('US Rency Pelé holding', () => {
  it('records the Pelé / The Beautiful Game piece under pop art with serial F71235101A', () => {
    assert.match(data, /id: 'renci-pele-the-beautiful-game'/);
    assert.match(data, /chapterId: 'us-pop-art'/);
    assert.match(data, /serial: 'F71235101A'/);
    assert.match(data, /Rency · 5\/200/);
    assert.doesNotMatch(data, /Renci · 5\/200/);
    assert.match(data, /No debe confundirse con Rency Punnoose/);
    assert.match(data, /This is not Rency Punnoose/);
    assert.match(data, /Banksy/);
    assert.match(seriesPage, /viewRencyCase/);
    assert.match(seriesPage, /USA_RENCY_PATH/);
  });
});

describe('US Rency Messi holding', () => {
  it('records Messi / You Have to Fight to Reach Your Dream as a distinct pop-art object with reused serial F71235101A', () => {
    assert.match(data, /id: 'renci-messi-you-have-to-fight-to-reach-your-dream'/);
    assert.match(data, /Messi \/ You Have to Fight to Reach Your Dream/);
    assert.match(data, /YOU HAVE TO FIGHT TO REACH YOUR DREAM!/);
    assert.match(data, /Rency · 2\/222/);
    assert.match(data, /LFG!/);
    assert.match(data, /2022!/);
    assert.match(data, /Lionel Messi/);
    assert.match(data, /no fusiona las fichas/);
    assert.match(data, /does not merge the records/);
    assert.doesNotMatch(data, /Renci · 2\/222/);
    const peleIdx = data.indexOf("id: 'renci-pele-the-beautiful-game'");
    const messiIdx = data.indexOf("id: 'renci-messi-you-have-to-fight-to-reach-your-dream'");
    const warholIdx = data.indexOf("id: 'renci-warhol-basquiat-life-is-beautiful'");
    assert.ok(peleIdx > 0 && messiIdx > peleIdx && messiIdx < warholIdx);
  });
});

describe('US Rency Warhol & Basquiat holding', () => {
  it('records Warhol y Basquiat / Life Is Beautiful as a second pop-art object', () => {
    assert.match(data, /id: 'renci-warhol-basquiat-life-is-beautiful'/);
    assert.match(data, /Warhol y Basquiat \/ Life Is Beautiful/);
    assert.match(data, /Warhol & Basquiat \/ Life Is Beautiful/);
    assert.match(data, /plancha 23/);
    assert.match(data, /plate 23/);
    assert.match(data, /SAMO LIVES/);
    assert.match(data, /no fusiona las fichas/);
    assert.match(data, /does not merge the records/);
  });
});

describe('US Rency Life Is Beautiful / LIFE SPRAY holding', () => {
  it('records LIFE SPRAY as a fourth pop-art object with reused serial F71235101A', () => {
    assert.match(data, /id: 'renci-life-is-beautiful-life-spray'/);
    assert.match(data, /Life Is Beautiful \/ LIFE SPRAY/);
    assert.match(data, /LIFE SPRAY/);
    assert.match(data, /FEDERAL BANK OF RENCY/);
    assert.match(data, /life is beautiful/);
    assert.match(data, /Rency · 5\/200/);
    assert.match(data, /no fusiona las fichas/);
    assert.match(data, /does not merge the records/);
    assert.doesNotMatch(data, /Renci · 5\/200/);
  });
});

describe('US miscellaneous Baraboo 1933 type page', () => {
  const barabooPage = readFileSync(
    new URL('../components/catalog/UnitedStatesBarabooScripSeriesPage.astro', import.meta.url),
    'utf8',
  );
  const esRoute = readFileSync(
    new URL('../pages/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/index.astro', import.meta.url),
    'utf8',
  );
  const enRoute = readFileSync(
    new URL(
      '../pages/en/collection/united-states/miscellaneous/baraboo-golden-jubilee-scrip-1933/index.astro',
      import.meta.url,
    ),
    'utf8',
  );
  const blog = readFileSync(new URL('./blog-articles.json', import.meta.url), 'utf8');
  const astroConfig = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');

  it('announces Shafer WI100 as a type under Misceláneos without inventing serials', () => {
    assert.match(data, /USA_BARABOO_SCRIP_PATH = '\/coleccion\/estados-unidos\/miscelaneos\/scrip-baraboo-jubileo-1933\/'/);
    assert.match(
      data,
      /USA_BARABOO_SCRIP_PATH_EN = '\/collection\/united-states\/miscellaneous\/baraboo-golden-jubilee-scrip-1933\/'/,
    );
    assert.match(data, /Shafer WI100/);
    assert.match(data, /E\. B\. Trimpey/);
    assert.match(data, /1 de noviembre de 1933/);
    assert.match(data, /1 November 1933/);
    assert.doesNotMatch(data, /barabooScripDenominations/);
    assert.match(data, /id: 'scrip-baraboo-5-centavos-a4895'/);
    assert.match(data, /serial: 'A4895'/);
    assert.match(data, /John Ringling/);
    assert.match(data, /No se inventan seriales/);
    assert.match(data, /Serials are not invented here/);
    assert.match(seriesPage, /viewMiscCase/);
    assert.match(seriesPage, /USA_MISC_PATH/);
    assert.match(miscPage, /barabooScripSeriesPath/);
    assert.match(miscPage, /t\.viewBarabooCase/);
    assert.match(miscPage, /t\.typesLabel/);
  });

  it('wires thin ES/EN catalog type routes with narrative and CollectionPage JSON-LD', () => {
    assert.match(esRoute, /UnitedStatesBarabooScripSeriesPage/);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /UnitedStatesBarabooScripSeriesPage/);
    assert.match(enRoute, /locale="en"/);
    assert.doesNotMatch(barabooPage, /barabooScripDenominations/);
    assert.doesNotMatch(barabooPage, /baraboo-types-heading/);
    assert.doesNotMatch(barabooPage, /t\.typesLabel/);
    assert.doesNotMatch(barabooPage, /t\.typesIntro/);
    assert.doesNotMatch(barabooPage, /t\.pendingLabel/);
    assert.match(barabooPage, /barabooScripNarrative/);
    assert.match(barabooPage, /barabooScripSeriesLead/);
    assert.match(barabooPage, /barabooScripHoldings/);
    assert.match(barabooPage, /t\.emptyHoldings/);
    assert.match(barabooPage, /collectionPageJsonLd/);
    assert.match(barabooPage, /BARABOO_JUBILEE_FIGURE/);
    assert.match(barabooPage, /imageClass="object-\[50%_0%\]"/);
    assert.doesNotMatch(barabooPage, /clearStickyChrome/);
    assert.doesNotMatch(barabooPage, /object-\[50%_58%\]/);
    assert.doesNotMatch(barabooPage, /fit="contain"/);
    assert.match(barabooPage, /id="main-content"/);
    assert.match(barabooPage, /USA_MISC_PATH/);
    assert.doesNotMatch(barabooPage, /<figure/);
    assert.doesNotMatch(barabooPage, /editorialUploadSrcset/);
    assert.doesNotMatch(barabooPage, /figureCaption/);
    assert.doesNotMatch(barabooPage, /figureAlt/);
    assert.doesNotMatch(data, /figureCaption/);
    assert.doesNotMatch(data, /figureAlt:/);
    assert.doesNotMatch(barabooPage, /RINGLING_BLOG_PATH/);
    assert.doesNotMatch(barabooPage, /BlogPosting/);
    assert.doesNotMatch(barabooPage, /\/blog\//);
    assert.doesNotMatch(data, /RINGLING_BLOG_PATH/);
    assert.doesNotMatch(data, /el artículo del blog/);
    assert.doesNotMatch(data, /The blog article/);
    assert.doesNotMatch(blog, /circo-ringling-bros-barnum-bailey/);
    assert.doesNotMatch(blog, /scrip-baraboo-jubileo-1933/);
    assert.match(astroConfig, /\/blog\/circo-ringling-bros-barnum-bailey\/':/);
    assert.match(astroConfig, /\/coleccion\/estados-unidos\/miscelaneos\/scrip-baraboo-jubileo-1933\//);
    assert.match(astroConfig, /\/en\/blog\/ringling-bros-barnum-bailey-circus\/':/);
    assert.match(
      astroConfig,
      /\/en\/collection\/united-states\/miscellaneous\/baraboo-golden-jubilee-scrip-1933\//,
    );
  });

  it('uses the 1933 jubilee souvenir map as the type-page hero, not the US Fed map or a Highsmith crop', () => {
    const seriesHero = readFileSync(
      new URL('../components/catalog/SeriesHero.astro', import.meta.url),
      'utf8',
    );
    const globalCss = readFileSync(new URL('../styles/global.css', import.meta.url), 'utf8');
    const layout = readFileSync(new URL('../layouts/Layout.astro', import.meta.url), 'utf8');
    assert.match(data, /src: '\/uploads\/baraboo-golden-jubilee-1933\.jpg'/);
    assert.match(barabooPage, /const hero = BARABOO_JUBILEE_FIGURE/);
    assert.match(barabooPage, /imageClass="object-\[50%_0%\]"/);
    assert.doesNotMatch(barabooPage, /clearStickyChrome/);
    assert.doesNotMatch(barabooPage, /object-\[50%_58%\]/);
    assert.doesNotMatch(barabooPage, /fit="contain"/);
    assert.doesNotMatch(barabooPage, /united-states\.jpg/);
    assert.doesNotMatch(barabooPage, /estados-unidos\.jpg/);
    assert.doesNotMatch(barabooPage, /Highsmith/);
    assert.doesNotMatch(barabooPage, /circus-wagon/);
    assert.match(seriesHero, /editorialUploadSrcset/);
    assert.match(seriesHero, /src\.includes\('\/uploads\/'\)/);
    assert.match(seriesHero, /fetchpriority="high"/);
    assert.match(seriesHero, /object-cover/);
    assert.match(seriesHero, /relative min-h-\[86vh\]/);
    assert.match(seriesHero, /absolute inset-0 h-full w-full object-cover/);
    assert.doesNotMatch(seriesHero, /clearStickyChrome/);
    assert.doesNotMatch(seriesHero, /series-hero--clear-chrome/);
    assert.doesNotMatch(seriesHero, /series-hero__frame/);
    assert.doesNotMatch(seriesHero, /object-contain/);
    assert.doesNotMatch(seriesHero, /fit \?: 'cover' \| 'contain'/);
    assert.doesNotMatch(globalCss, /--series-hero-chrome-clear-gap/);
    assert.doesNotMatch(globalCss, /--series-hero-clear-mat/);
    assert.doesNotMatch(globalCss, /series-hero--clear-chrome/);
    assert.doesNotMatch(layout, /data-sticky-chrome/);
    assert.doesNotMatch(layout, /SiteNotice/);
    const copyBlock = data.slice(
      data.indexOf('export const barabooScripSeriesCopy'),
      data.indexOf('export const barabooScripSeriesLead'),
    );
    assert.match(copyBlock, /Al\. Ringling Theatre/);
    assert.match(copyBlock, /Sauk County Courthouse/);
    assert.match(copyBlock, /C\. & N\.W\. yards/);
    assert.match(copyBlock, /Mapa souvenir/);
    assert.match(copyBlock, /Souvenir map/);
    assert.match(copyBlock, /boleto de circo de 1933/);
    assert.match(copyBlock, /1933 circus ticket/);
    assert.match(copyBlock, /sello de 3¢ de Wisconsin 1848/);
    assert.match(copyBlock, /3¢ Wisconsin 1848 stamp/);
    assert.match(copyBlock, /rosa de los vientos/);
    assert.match(copyBlock, /compass rose/);
    assert.match(copyBlock, /programa souvenir/);
    assert.match(copyBlock, /souvenir program/);
    assert.doesNotMatch(copyBlock, /Postal souvenir/);
    assert.doesNotMatch(copyBlock, /Souvenir postcard/);
    assert.doesNotMatch(copyBlock, /Mapa vintage de Estados Unidos sobre pergamino/);
    assert.doesNotMatch(copyBlock, /Vintage map of the United States on parchment/);
  });

  it('lists the six-piece set including the $1 in ES and EN narrative, without a type-denomination grid', () => {
    assert.match(data, /Las denominaciones —5¢, 10¢, 15¢, 25¢, 50¢ y 1 dólar—/);
    assert.match(data, /The denominations — 5¢, 10¢, 15¢, 25¢, 50¢, and \$1 —/);
    assert.match(data, /El 1 dólar reúne al grupo/);
    assert.match(data, /The \$1 shows the group/);
    assert.doesNotMatch(data, /Denominaciones del tipo/);
    assert.doesNotMatch(data, /Type denominations/);
    assert.doesNotMatch(data, /Pendiente de ejemplar/);
    assert.doesNotMatch(data, /Holding pending/);
    assert.doesNotMatch(data, /Pending specimen/);
    assert.doesNotMatch(data, /Seis vales —5¢, 10¢, 15¢, 25¢, 50¢ y 1 dólar—/);
    assert.doesNotMatch(data, /Six notes — 5¢, 10¢, 15¢, 25¢, 50¢, and \$1 —/);
    assert.doesNotMatch(data, /Las denominaciones inferiores —5¢, 10¢, 15¢, 25¢ y 50¢—/);
    assert.doesNotMatch(data, /The lower denominations — 5¢, 10¢, 15¢, 25¢, and 50¢ —/);
  });

  it('publishes the 5¢ John Ringling holding A4895 with thin ES/EN piece routes', () => {
    const esPiece = readFileSync(
      new URL(
        '../pages/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/5-centavos-john-ringling-a4895/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    const enPiece = readFileSync(
      new URL(
        '../pages/en/collection/united-states/miscellaneous/baraboo-golden-jubilee-scrip-1933/5-cents-john-ringling-a4895/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    assert.match(data, /id: 'scrip-baraboo-5-centavos-a4895'/);
    assert.match(data, /serial: 'A4895'/);
    assert.match(data, /Shafer WI100 · 5¢/);
    assert.doesNotMatch(data, /holdingId: 'scrip-baraboo-5-centavos-a4895'/);
    assert.match(data, /P\. L\. Gust/);
    assert.match(data, /O\. L\. Gust/);
    assert.match(notePage, /isBarabooScripNote/);
    assert.match(notePage, /barabooScripSeriesPath/);
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
  });

  it('publishes the 15¢ Al. T. Ringling holding A2819 with thin ES/EN piece routes', () => {
    const esPiece15 = readFileSync(
      new URL(
        '../pages/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/15-centavos-al-t-ringling-a2819/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    const enPiece15 = readFileSync(
      new URL(
        '../pages/en/collection/united-states/miscellaneous/baraboo-golden-jubilee-scrip-1933/15-cents-al-t-ringling-a2819/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    assert.match(data, /id: 'scrip-baraboo-15-centavos-a2819'/);
    assert.match(data, /serial: 'A2819'/);
    assert.match(data, /Shafer WI100 · 15¢/);
    assert.doesNotMatch(data, /holdingId: 'scrip-baraboo-15-centavos-a2819'/);
    assert.match(data, /Al\. T\. Ringling/);
    assert.match(data, /O\. L\. Erickson/);
    assert.match(data, /FIFTEEN \(15\) CENTS/);
    assert.match(esPiece15, /UnitedStatesNotePage/);
    assert.match(esPiece15, /locale="es"/);
    assert.match(enPiece15, /UnitedStatesNotePage/);
    assert.match(enPiece15, /locale="en"/);
  });

  it('publishes the 10¢ Chas. Ringling holding A2844 with thin ES/EN piece routes', () => {
    const esPiece10 = readFileSync(
      new URL(
        '../pages/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/10-centavos-chas-ringling-a2844/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    const enPiece10 = readFileSync(
      new URL(
        '../pages/en/collection/united-states/miscellaneous/baraboo-golden-jubilee-scrip-1933/10-cents-chas-ringling-a2844/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    assert.match(data, /id: 'scrip-baraboo-10-centavos-a2844'/);
    assert.match(data, /serial: 'A2844'/);
    assert.match(data, /Shafer WI100 · 10¢/);
    assert.doesNotMatch(data, /holdingId: 'scrip-baraboo-10-centavos-a2844'/);
    assert.match(data, /Chas\. Ringling/);
    assert.match(data, /TEN CENTS/);
    assert.match(data, /O\. L\. Erickson/);
    assert.match(esPiece10, /UnitedStatesNotePage/);
    assert.match(esPiece10, /locale="es"/);
    assert.match(enPiece10, /UnitedStatesNotePage/);
    assert.match(enPiece10, /locale="en"/);
  });

  it('publishes the $1 Ringling Bros. holding A2002 with thin ES/EN piece routes', () => {
    const esPiece1 = readFileSync(
      new URL(
        '../pages/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/1-dolar-ringling-bros-a2002/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    const enPiece1 = readFileSync(
      new URL(
        '../pages/en/collection/united-states/miscellaneous/baraboo-golden-jubilee-scrip-1933/1-dollar-ringling-bros-a2002/index.astro',
        import.meta.url,
      ),
      'utf8',
    );
    assert.match(data, /id: 'scrip-baraboo-1-dolar-a2002'/);
    assert.match(data, /serial: 'A2002'/);
    assert.match(data, /serial_display: 'A 2002'/);
    assert.match(data, /Shafer WI100 · \$1/);
    assert.doesNotMatch(data, /holdingId: 'scrip-baraboo-1-dolar-a2002'/);
    assert.match(data, /ONE DOLLAR/);
    assert.match(data, /RINGLING BROS\./);
    assert.match(data, /baraboo-scrip-1933-1d-a2002-front\.jpg/);
    assert.match(data, /a su izquierda, la letra de serie A en azul/);
    assert.match(data, /to its left the blue series letter A/);
    assert.match(esPiece1, /UnitedStatesNotePage/);
    assert.match(esPiece1, /locale="es"/);
    assert.match(enPiece1, /UnitedStatesNotePage/);
    assert.match(enPiece1, /locale="en"/);
  });
});

describe('US obsolete City Bank of New Haven $5 remainder', () => {
  it('records the unsigned CT-265 G52b remainder without inventing a serial', () => {
    assert.match(data, /id: '5-dolares-city-bank-new-haven'/);
    assert.match(data, /Haxby CT-265 G52b/);
    assert.match(data, /no_serial_reason:\n      'Obsolete remainder: the printed No\. field is blank/);
    assert.match(data, /Hacia 1850\. Toppan/);
    assert.match(data, /Beast Coins cataloga el tipo G52b con monograma/);
    assert.match(data, /this photograph does not support asserting that the monogram is visible/);
    assert.match(data, /Haxby NJ-350 G16a, serial 9890 · B/);
    assert.doesNotMatch(data.slice(data.indexOf("id: '5-dolares-city-bank-new-haven'")), /serial: '9890/);
    const esPiece = readFileSync(
      new URL('../pages/coleccion/estados-unidos/5-dolares-city-bank-new-haven/index.astro', import.meta.url),
      'utf8',
    );
    const enPiece = readFileSync(
      new URL('../pages/en/collection/united-states/5-dollars-city-bank-new-haven/index.astro', import.meta.url),
      'utf8',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
  });
});

describe('US obsolete Canal Bank of New Orleans $50 remainder', () => {
  it('records the unsigned LA-105 G46a "Redback" without inventing a serial', () => {
    assert.match(data, /id: '50-dolares-canal-bank-nueva-orleans'/);
    assert.match(data, /Haxby LA-105 G46a · N#206863/);
    assert.match(data, /no_serial_reason:\n      'Obsolete remainder: the face has no printed No\. field/);
    assert.match(data, /Toppan, Carpenter & Co\., Filadelfia y Nueva York/);
    assert.match(data, /plancha D/);
    assert.match(data, /plate letter is D/);
    assert.match(data, /la-105-50-dollar-canal-bank-front\.jpg/);
    // The G48a variety is a different printer's plate; keep the distinction explicit.
    assert.match(data, /el 50 dólares LA-105 G48a, de diseño distinto e imprenta Rawdon, Wright, Hatch & Edson/);
    assert.match(data, /the \$50 LA-105 G48a, a different design printed by Rawdon, Wright, Hatch & Edson/);
    const canalBank = data.slice(data.indexOf("id: '50-dolares-canal-bank-nueva-orleans'"));
    assert.doesNotMatch(canalBank.slice(0, canalBank.indexOf('sources:')), /serial: '[^—]/);
    const esPiece = readFileSync(
      new URL('../pages/coleccion/estados-unidos/50-dolares-canal-bank-nueva-orleans/index.astro', import.meta.url),
      'utf8',
    );
    const enPiece = readFileSync(
      new URL('../pages/en/collection/united-states/50-dollars-canal-bank-new-orleans/index.astro', import.meta.url),
      'utf8',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
  });
});

describe('US Rency Trump / Never Surrender holding', () => {
  it('records Trump / Never Surrender as a third pop-art object without inventing a serial', () => {
    assert.match(data, /id: 'renci-trump-never-surrender'/);
    assert.match(data, /Trump \/ Never Surrender/);
    assert.match(data, /NEVER SURRENDER/);
    assert.match(data, /STAND UP FOR AMERICA/);
    assert.match(data, /WITCH HUNT/);
    assert.match(data, /Fulton County/);
    assert.match(data, /no se asigna aquí el serial F71235101A/);
    assert.match(data, /does not assign serial F71235101A/);
    assert.match(data, /Pop overlay covers the Federal Reserve face/);
  });
});
