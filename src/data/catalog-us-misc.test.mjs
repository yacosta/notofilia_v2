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
    assert.match(data, /barabooScripDenominations/);
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
    assert.match(barabooPage, /barabooScripDenominations/);
    assert.match(barabooPage, /barabooScripNarrative/);
    assert.match(barabooPage, /barabooScripSeriesLead/);
    assert.match(barabooPage, /barabooScripHoldings/);
    assert.match(barabooPage, /t\.emptyHoldings/);
    assert.match(barabooPage, /collectionPageJsonLd/);
    assert.match(barabooPage, /BARABOO_JUBILEE_FIGURE/);
    assert.match(barabooPage, /imageClass="object-\[50%_0%\]"/);
    assert.match(barabooPage, /clearStickyChrome=\{true\}/);
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
    assert.match(barabooPage, /clearStickyChrome=\{true\}/);
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
    assert.match(seriesHero, /clearStickyChrome/);
    assert.match(seriesHero, /series-hero--clear-chrome/);
    assert.match(seriesHero, /series-hero__photo/);
    assert.match(seriesHero, /series-hero__frame/);
    assert.match(seriesHero, /padding-top:var\(--series-hero-chrome-clear-gap\)/);
    assert.match(seriesHero, /--series-hero-clear-mat/);
    assert.doesNotMatch(seriesHero, /object-contain/);
    assert.doesNotMatch(seriesHero, /fit \?: 'cover' \| 'contain'/);
    assert.match(globalCss, /--sticky-chrome-height/);
    assert.match(globalCss, /--series-hero-chrome-clear-gap:\s*5rem/);
    assert.match(globalCss, /--series-hero-clear-mat:\s*#bd8b4b/);
    assert.match(globalCss, /series-hero--clear-chrome/);
    assert.match(globalCss, /padding-top:\s*var\(--series-hero-chrome-clear-gap\)/);
    assert.doesNotMatch(globalCss, /margin-top:\s*calc\(-1 \* var\(--sticky-chrome-height\)\)/);
    assert.match(layout, /data-sticky-chrome/);
    assert.match(layout, /--sticky-chrome-height/);
    assert.doesNotMatch(layout, /SiteNotice/);
    const copyBlock = data.slice(
      data.indexOf('export const barabooScripSeriesCopy'),
      data.indexOf('export const barabooScripSeriesLead'),
    );
    assert.match(copyBlock, /Al\. Ringling Theatre/);
    assert.match(copyBlock, /Sauk County Courthouse/);
    assert.match(copyBlock, /C\. & N\.W\. yards/);
    assert.doesNotMatch(copyBlock, /Mapa vintage de Estados Unidos sobre pergamino/);
    assert.doesNotMatch(copyBlock, /Vintage map of the United States on parchment/);
  });

  it('lists the six-piece set including the $1 in ES and EN type copy', () => {
    assert.match(data, /Las denominaciones —5¢, 10¢, 15¢, 25¢, 50¢ y 1 dólar—/);
    assert.match(data, /The denominations — 5¢, 10¢, 15¢, 25¢, 50¢, and \$1 —/);
    assert.match(data, /Seis vales —5¢, 10¢, 15¢, 25¢, 50¢ y 1 dólar—/);
    assert.match(data, /Six notes — 5¢, 10¢, 15¢, 25¢, 50¢, and \$1 —/);
    assert.match(data, /El 1 dólar reúne al grupo/);
    assert.match(data, /The \$1 shows the group/);
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
    assert.match(data, /holdingId: 'scrip-baraboo-5-centavos-a4895'/);
    assert.match(data, /P\. L\. Gust/);
    assert.match(data, /O\. L\. Gust/);
    assert.match(notePage, /isBarabooScripNote/);
    assert.match(notePage, /barabooScripSeriesPath/);
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
