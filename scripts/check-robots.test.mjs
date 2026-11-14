import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { checkRobotsTxt } from './check-robots.mjs';

function distFor(robotsText) {
  const dir = mkdtempSync(join(tmpdir(), 'robots-'));
  const robots = join(dir, 'robots.txt');
  writeFileSync(robots, robotsText);
  const urls = [...robotsText.matchAll(/https:\/\/notofilia\.com(\/[^\s)]+)/g)].map((match) => match[1]);
  for (const pathname of urls) {
    const file = join(dir, 'dist', pathname.replace(/^\//, ''));
    mkdirSync(join(file, '..'), { recursive: true });
    writeFileSync(file, '');
  }
  return { dir, robots, dist: join(dir, 'dist') };
}

describe('robots.txt build check', () => {
  it('accepts the published robots.txt when every referenced file exists', () => {
    const text = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
    const { robots, dist } = distFor(text);
    assert.deepEqual(checkRobotsTxt(dist, robots), []);
  });

  it('fails when a Disallow line or a missing sitemap appears', () => {
    const blocked = distFor('User-agent: *\nDisallow: /\nSitemap: https://notofilia.com/sitemap.xml\n');
    const errors = checkRobotsTxt(blocked.dist, blocked.robots);
    assert.ok(errors.some((error) => error.includes('Disallow')));
    const missing = distFor('User-agent: *\nAllow: /\n# https://notofilia.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt\n');
    assert.ok(checkRobotsTxt(missing.dist, missing.robots).some((error) => error.includes('sitemap')));
  });
});
