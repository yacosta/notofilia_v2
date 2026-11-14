import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * robots.txt is not regenerated per page. This check fails the build when
 * crawler access, the sitemap lines, or the IndexNow key file drift.
 */
export function checkRobotsTxt(distDir, robotsPath = 'public/robots.txt') {
  const errors = [];
  const text = readFileSync(robotsPath, 'utf8');
  if (!/User-agent:\s*\*\s+Allow:\s*\//.test(text)) {
    errors.push('robots.txt must allow every crawler: User-agent: * and Allow: /');
  }
  if (/^\s*Disallow:/m.test(text)) {
    errors.push('robots.txt must not Disallow any path');
  }
  const sitemapLines = [...text.matchAll(/^Sitemap:\s*(\S+)/gm)].map((match) => match[1]);
  if (sitemapLines.length === 0) errors.push('robots.txt must reference the sitemap file the build emits');
  if (!/\/[a-f0-9]{32}\.txt/.test(text)) {
    errors.push('robots.txt must reference the IndexNow key file');
  }
  const urls = new Set(sitemapLines);
  for (const match of text.matchAll(/https:\/\/notofilia\.com(\/[^\s)]+)/g)) {
    urls.add(`https://notofilia.com${match[1]}`);
  }
  for (const url of urls) {
    let pathname = '';
    try {
      pathname = new URL(url).pathname;
    } catch {
      errors.push(`robots.txt has an unreadable URL: ${url}`);
      continue;
    }
    const file = join(distDir, pathname.replace(/^\//, ''));
    if (!existsSync(file)) errors.push(`robots.txt references a file missing from dist: ${pathname}`);
  }
  return errors;
}
