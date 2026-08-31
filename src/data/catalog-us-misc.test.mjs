import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { catalogProseText, isCatalogProseParts } from './catalog.ts';
import {
  WHERES_GEORGE_HREF,
  miscSeriesCopy,
  miscSeriesIntro,
  unitedStatesChapters,
  unitedStatesNotes,
} from './estados-unidos.ts';

describe('US miscellaneous Where’s George copy', () => {
  const misc = unitedStatesChapters.find((chapter) => chapter.id === 'us-miscelaneos');

  it('uses the requested 1-dollar opening in Spanish and English', () => {
    assert.ok(misc);
    assert.match(misc.body.es, /^Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 1 dólares,/);
    assert.match(misc.body.en, /contemporary interventions on the \$1/);
    assert.doesNotMatch(misc.body.es, /sobre el 2 dólares/);
    assert.doesNotMatch(misc.body.en, /on the \$2/);
    assert.match(miscSeriesCopy.es.intro[0], /pop art sobre el 1 dólares/);
    assert.match(miscSeriesCopy.en.intro[0], /pop art on the \$1/);
  });

  it('keeps an in-page Where’s George link as structured prose, not markdown', () => {
    assert.equal(WHERES_GEORGE_HREF, 'https://www.wheresgeorge.com');
    assert.ok(misc?.bodyParts?.some((part) => 'href' in part && part.href === WHERES_GEORGE_HREF));
    assert.ok(
      miscSeriesIntro.some((paragraph) =>
        paragraph.some((part) => 'href' in part && part.href === WHERES_GEORGE_HREF),
      ),
    );
    const note = unitedStatesNotes.find((item) => item.serial === 'K46602688C');
    assert.ok(note);
    assert.ok(Array.isArray(note.history));
    assert.ok(isCatalogProseParts(note.history[0]));
    assert.ok(note.history[0].some((part) => 'href' in part && part.href === WHERES_GEORGE_HREF));
    assert.equal(catalogProseText(misc.bodyParts ?? [], 'es').slice(0, 40), misc.body.es.slice(0, 40));
  });
});
