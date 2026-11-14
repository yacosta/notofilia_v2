import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { createServer } from 'vite';

const SITE = 'https://notofilia.com';
let vite;
let manifest;

before(async () => {
  vite = await createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  manifest = await vite.ssrLoadModule('/src/lib/publish-manifest.ts');
});

after(async () => {
  await vite?.close();
});

describe('llms.txt and sitemap share one page list', () => {
  it('keeps the newest 15 news articles and drops the next one', () => {
    const ranked = manifest.newsByPublished();
    const recent = manifest.recentNewsArticles();
    assert.equal(recent.length, 15);
    assert.deepEqual(
      recent.map((article) => article.slug),
      ranked.slice(0, 15).map((article) => article.slug),
    );
    const llms = manifest.llmsTxt();
    const section = llms.split('## Recent news')[1];
    assert.ok(section);
    const entries = manifest.llmsEntries().filter((entry) => entry.section === 'news');
    assert.equal(entries.length, 15);
    entries.forEach((entry, index) => {
      assert.equal(entry.published, recent[index].published);
      assert.ok(section.includes(`(${SITE}${entry.esPath})`));
      assert.ok(section.includes(`(${SITE}${entry.enPath})`));
      assert.ok(section.includes(entry.published));
    });
    const dropped = ranked[15];
    assert.ok(dropped);
    assert.equal(section.includes(`(${SITE}/noticias/${dropped.slug}/)`), false);
    assert.match(llms, /Colección Virtual:/);
    assert.match(llms, /Virtual Collection:/);
    assert.match(llms, /## Collection hubs/);
    assert.match(llms, /## Machine-readable data/);
    assert.match(llms, /Spanish URLs are canonical/);
  });

  it('lists guides and glossary pages, and leaves catalogue pieces to the sitemap', () => {
    const llms = manifest.llmsTxt();
    const sitemap = manifest.sitemapXml();
    const piece = manifest.cataloguePiecePaths().find((path) => path.startsWith('/coleccion/colombia/'));
    assert.ok(piece);
    assert.equal(llms.includes(`(${SITE}${piece})`), false);
    assert.match(sitemap, new RegExp(piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(sitemap, /hreflang="es"/);
    assert.match(sitemap, /hreflang="en"/);
    assert.match(sitemap, /hreflang="x-default"/);
    assert.doesNotMatch(manifest.sitemapTxt(), /\/buscar\//);
    assert.match(llms, /\/blog\/mejores-empresas-certificacion-monedas-billetes\//);
    assert.match(llms, /\/glosario\/notafilia\//);
    for (const path of ['/acerca-de/', '/editorial/', '/contacto/', '/herramientas/numeracion-especial/', '/coleccion/']) {
      assert.equal(manifest.llmsRequiredPaths().includes(path), true, path);
    }
  });
});
