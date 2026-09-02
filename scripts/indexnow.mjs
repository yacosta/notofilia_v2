// scripts/indexnow.mjs
// Post-build IndexNow ping for notofilia.com (Bing, Yandex, Naver, Seznam, Yep…).
// Runs after `astro build`. Only pings on production deploys (Cloudflare Pages main branch).
//
// How it decides what to submit:
//   1. Hashes every built HTML page in dist/ and writes dist/indexnow-manifest.json
//      (this file is deployed alongside the site).
//   2. Fetches the manifest from the *previous* deploy at https://notofilia.com/indexnow-manifest.json
//      and submits only URLs that are new or whose HTML changed.
//   3. First run (no previous manifest) submits everything listed in the sitemap.
//
// Env overrides:
//   INDEXNOW_FORCE=1     submit all URLs regardless of diff
//   INDEXNOW_DRY_RUN=1   log what would be sent, don't POST

import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const SITE = "https://notofilia.com";
const KEY = "a8f3c1e92b74d6058e1a4c7f0b39d2e6";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const DIST = "dist";
const MANIFEST = "indexnow-manifest.json";
const ENDPOINT = "https://api.indexnow.org/IndexNow"; // fans out to all IndexNow engines
const MAX_PER_REQUEST = 10000;

const branch = process.env.CF_PAGES_BRANCH ?? process.env.GITHUB_REF_NAME ?? "";
const isProd = branch === "main" || process.env.INDEXNOW_FORCE === "1";
const dryRun = process.env.INDEXNOW_DRY_RUN === "1";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

function toUrl(file) {
  let rel = relative(DIST, file).split(sep).join("/");
  if (rel === "index.html") return `${SITE}/`;
  if (rel.endsWith("/index.html")) return `${SITE}/${rel.slice(0, -"index.html".length)}`;
  return `${SITE}/${rel}`;
}

// Strip parts that change on every build without meaning content changed
// (hashed asset filenames, build timestamps) so CSS-only rebuilds don't mark every page dirty.
function normalize(html) {
  return html
    .replace(/\/_astro\/[^"' )]+/g, "/_astro/X")
    .replace(/\d{4}-\d{2}-\d{2}T[\d:.]+Z/g, "T");
}

async function buildManifest() {
  const manifest = {};
  for await (const file of walk(DIST)) {
    const html = await readFile(file, "utf8");
    if (/<meta\s+name=["']robots["'][^>]*noindex/i.test(html)) continue;
    manifest[toUrl(file)] = createHash("sha256").update(normalize(html)).digest("hex").slice(0, 16);
  }
  return manifest;
}

async function previousManifest() {
  try {
    const res = await fetch(`${SITE}/${MANIFEST}`, { headers: { "cache-control": "no-cache" } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function submit(urls) {
  for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) {
    const batch = urls.slice(i, i + MAX_PER_REQUEST);
    const body = JSON.stringify({ host: "notofilia.com", key: KEY, keyLocation: KEY_LOCATION, urlList: batch });
    if (dryRun) {
      console.log(`[indexnow] DRY RUN — would submit ${batch.length} URLs:\n  ${batch.join("\n  ")}`);
      continue;
    }
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body,
    });
    // 200 OK, 202 Accepted (key validation pending). 4xx = fix config, don't fail the build.
    console.log(`[indexnow] submitted ${batch.length} URLs → HTTP ${res.status}`);
    if (res.status >= 400) console.warn(`[indexnow] response: ${await res.text()}`);
  }
}

async function main() {
  const current = await buildManifest();
  await writeFile(join(DIST, MANIFEST), JSON.stringify(current, null, 0));
  console.log(`[indexnow] manifest written: ${Object.keys(current).length} pages`);

  if (!isProd) {
    console.log(`[indexnow] branch "${branch || "unknown"}" is not production — skipping ping`);
    return;
  }

  const prev = process.env.INDEXNOW_FORCE === "1" ? null : await previousManifest();
  const urls = prev
    ? Object.keys(current).filter((u) => current[u] !== prev[u])
    : Object.keys(current);

  if (urls.length === 0) {
    console.log("[indexnow] no changed pages — nothing to submit");
    return;
  }
  await submit(urls);
}

main().catch((err) => {
  // Never fail the deploy because of a ping.
  console.warn("[indexnow] failed:", err?.message ?? err);
});
