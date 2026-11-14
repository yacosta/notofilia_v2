import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';
import { checkRobotsTxt } from './check-robots.mjs';

const dist = join(process.cwd(), 'dist');
if (!existsSync(dist)) {
  console.error('dist/ is missing. Run astro build before scripts/build-llms.mjs.');
  process.exit(1);
}

const vite = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const manifest = await vite.ssrLoadModule('/src/lib/publish-manifest.ts');
  const llms = manifest.llmsTxt();
  writeFileSync(join(dist, 'llms.txt'), llms);
  writeFileSync(join(dist, 'sitemap.txt'), manifest.sitemapTxt());
  writeFileSync(join(dist, 'sitemap.xml'), manifest.sitemapXml());
  const news = manifest.recentNewsArticles();
  console.log(
    `publish-sync: llms.txt links ${(llms.match(/\]\(/g) ?? []).length}, recent news ${news.length}, sitemap URLs ${manifest.collectSitemapPaths().length}`,
  );
} finally {
  await vite.close();
}

const errors = checkRobotsTxt(dist);
if (errors.length) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
