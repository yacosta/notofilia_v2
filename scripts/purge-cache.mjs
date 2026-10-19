// Purge the Cloudflare zone cache after a production build, before IndexNow.
// Exit 0 with a warning when CF_API_TOKEN or CF_ZONE_ID is missing so preview
// and pull-request builds do not fail.
//
// Main branch only (CF_PAGES_BRANCH or GITHUB_REF_NAME). INDEXNOW_FORCE=1 also runs it.

const branch = process.env.CF_PAGES_BRANCH ?? process.env.GITHUB_REF_NAME ?? '';
const isProd = branch === 'main' || process.env.INDEXNOW_FORCE === '1';

async function main() {
  if (!isProd) {
    console.log(`[purge-cache] branch "${branch || 'unknown'}" is not production — skipping`);
    return;
  }

  const token = process.env.CF_API_TOKEN;
  const zone = process.env.CF_ZONE_ID;
  if (!token || !zone) {
    console.warn(
      '[purge-cache] CF_API_TOKEN or CF_ZONE_ID is missing — skipping purge. Set both as production build secrets (Cache Purge permission).',
    );
    return;
  }

  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ purge_everything: true }),
  });
  const body = await res.text();
  if (!res.ok) {
    console.warn(`[purge-cache] HTTP ${res.status} — deploy continues. ${body.slice(0, 500)}`);
    return;
  }
  console.log('[purge-cache] purge_everything accepted');
}

main().catch((err) => {
  console.warn('[purge-cache] failed:', err?.message ?? err);
});
