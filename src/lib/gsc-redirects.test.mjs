import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { lookupGscRedirect, planSeoResponse, rewriteEnSpanishPrefix, stripDreamweaverSuffix } from './gsc-redirects.ts';

describe('gsc redirect lookup', () => {
  it('does not invent a homepage redirect', () => {
    assert.equal(lookupGscRedirect('/'), undefined);
    assert.equal(planSeoResponse('/').type, 'pass');
  });

  it('strips .dc.html to a non-home path', () => {
    assert.equal(stripDreamweaverSuffix('/contacto.dc.html'), '/contacto/');
    assert.equal(stripDreamweaverSuffix('/en/contact.dc.html'), '/en/contact/');
    assert.equal(stripDreamweaverSuffix('/.dc.html'), undefined);
  });

  it('rewrites leftover Spanish glossary and news paths under /en/', () => {
    assert.equal(rewriteEnSpanishPrefix('/en/glosario/libra/'), '/en/glossary/libra/');
    assert.equal(rewriteEnSpanishPrefix('/en/glosario/libra'), '/en/glossary/libra/');
    assert.equal(rewriteEnSpanishPrefix('/en/glosario/'), '/en/glossary/');
    assert.equal(rewriteEnSpanishPrefix('/en/glosario'), '/en/glossary/');
    assert.equal(rewriteEnSpanishPrefix('/en/noticias/billete-2-dolares-serie-baja/'), '/en/news/billete-2-dolares-serie-baja/');
    assert.equal(rewriteEnSpanishPrefix('/en/noticias/'), '/en/news/');
    assert.equal(rewriteEnSpanishPrefix('/en/glossary/libra/'), undefined);
    assert.equal(rewriteEnSpanishPrefix('/en/news/'), undefined);
    const glossary = lookupGscRedirect('/en/glosario/libra/');
    assert.equal(glossary?.status, 301);
    assert.equal(glossary?.target, '/en/glossary/?term=pound-sterling');
    const glossaryPlan = planSeoResponse('/en/glosario/libra/');
    assert.equal(glossaryPlan.type, 'redirect');
    assert.equal(glossaryPlan.type === 'redirect' ? glossaryPlan.target : '', '/en/glossary/?term=pound-sterling');
    const polymer = planSeoResponse('/en/glossary/polimero/');
    assert.equal(polymer.type, 'redirect');
    assert.equal(polymer.type === 'redirect' ? polymer.target : '', '/en/glossary/polymer/');
    const news = planSeoResponse('/en/noticias/billete-2-dolares-serie-baja/');
    assert.equal(news.type, 'redirect');
    assert.equal(news.type === 'redirect' ? news.target : '', '/en/news/the-2-note-with-serial-l00000002a/');
  });

  it('emits Cloudflare splat backups for Spanish /en/ glossary and news prefixes', () => {
    const builder = readFileSync(new URL('../../scripts/seo/build-redirects.mjs', import.meta.url), 'utf8');
    const redirects = readFileSync(new URL('../../public/_redirects', import.meta.url), 'utf8');
    assert.match(builder, /\/en\/glosario\/\*   \/en\/glossary\/:splat   301/);
    assert.match(builder, /\/en\/noticias\/\*   \/en\/news\/:splat       301/);
    const staticLoop = builder.indexOf('for (const row of static301');
    const splatPush = builder.indexOf("staticLines.push('/en/glosario/*");
    assert.ok(staticLoop !== -1 && splatPush > staticLoop, 'splat rules are emitted after static 301s');
    const lines = redirects.split('\n').filter((l) => l && !l.startsWith('#'));
    const firstSplat = lines.findIndex((l) => l.includes('*'));
    assert.ok(firstSplat !== -1, 'generated _redirects has splat rules');
    assert.ok(
      lines.slice(0, firstSplat).every((l) => !l.includes('*')),
      'static 301s appear before splat rules',
    );
    assert.ok(
      lines.slice(firstSplat).every((l) => l.includes('*')),
      'no static 301s appear after splat rules',
    );
  });

  it('plans 410 for gone URLs and 301 for mapped v1 paths, never to home', () => {
    // Data-driven: use whichever 410 the current map carries instead of a fixed seed URL.
    const map = JSON.parse(readFileSync(new URL('../data/gsc-redirects.json', import.meta.url), 'utf8'));
    const goneSource = Object.entries(map.redirects).find(([, v]) => v.status === 410)?.[0];
    assert.ok(goneSource, 'map has at least one 410');
    const gone = planSeoResponse(goneSource);
    assert.equal(gone.type, 'gone');
    const mapped = planSeoResponse('/nosotros');
    assert.equal(mapped.type, 'redirect');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/en/');
  });

  it('sends polymer continent stubs to the live polymer hub, not missing EN continent pages', () => {
    for (const path of [
      '/en/coleccion/polimero-mundial/asia/',
      '/en/coleccion/polimero-mundial/europa/',
      '/en/coleccion/polimero-mundial/america-del-norte/',
    ]) {
      const planned = planSeoResponse(path);
      assert.equal(planned.type, 'redirect');
      assert.equal(planned.type === 'redirect' ? planned.target : '', '/en/collection/world-polymer/');
    }
  });
});

describe('worker wiring', () => {
  it('applies planSeoResponse before ASSETS.fetch', () => {
    const src = readFileSync(new URL('../worker.ts', import.meta.url), 'utf8');
    assert.match(src, /planSeoResponse/);
    assert.match(src, /status: 410/);
    assert.match(src, /Response\.redirect/);
  });
});
