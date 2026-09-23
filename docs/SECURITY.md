# Security baseline

Notofilia is an Astro static site on the `notofilia-v2` Worker (`run_worker_first`). HTML and assets come from Workers static assets. The Worker also serves `POST /api/identify` and `/api/comments/:slug`.

There is no `/.webmcp/` route in this repository. Do not add allow-lists for a fetch-any-URL RPC unless that route exists in the deployed Worker.

## Response headers

Enforcing headers, plus a report-only content security policy, are set in two places that must stay identical:

- `src/lib/security-headers.ts`, applied by `src/worker.ts` to every response, including `/api/*`
- `public/_headers` on `/*`, so asset responses carry the same policy

`public/_headers` also keeps the preview `X-Robots-Tag: noindex` rules and the immutable cache rules for `/_astro/*` and `/fonts/*`.

The content security policy is **report-only**. Inline scripts in `Analytics.astro`, `CookieConsentBanner.astro`, `ContactPage.astro`, and `Comments.astro` would violate an enforcing `script-src` that does not allow `'unsafe-inline'`. Leave it report-only until those scripts are bundled or hashed and a pass of the home page, a collection item, search, contact, identify, and a news article shows no violations. Do not add `'unsafe-inline'` or `'unsafe-eval'` to `script-src`.

`Cross-Origin-Resource-Policy` is intentionally unset so catalogue images can still be embedded elsewhere.

Hosts in the policy:

| Directive | Host | Why |
| --- | --- | --- |
| `script-src`, `connect-src`, `img-src` | `www.googletagmanager.com`, `google-analytics.com`, `*.google-analytics.com`, `analytics.google.com` | GA4. The tag loads only after the consent default denies storage. |
| `script-src`, `frame-src`, `connect-src` | `challenges.cloudflare.com` | Turnstile on contact and comments |
| `script-src`, `frame-src` | `news.google.com` | Preferred-source button, loaded on click |
| `connect-src`, `form-action` | `api.web3forms.com` | Contact form |
| `font-src` | `'self'` | Fonts are self-hosted |

`Permissions-Policy` disables camera, microphone, geolocation, payment, and USB. Identify uses a file input with `capture`, which this policy does not block.

HSTS (`max-age=31536000; includeSubDomains; preload`) is set on the Cloudflare zone, not in the repo.

## APIs

`/api/comments/:slug`

- SQL is parameterized. New rows are `pending`. The page renders approved text with `textContent`.
- Turnstile is verified server-side for hostname and action `comment`.
- GET and POST accept only slugs of published news articles (`article.slug` in `src/data/news-articles.json`). English news pages post that same slug.
- JSON bodies are capped at 8 KB.

`/api/identify`

- Ranks a 16-character dHash against the in-worker index. It does not fetch a URL from the client.
- `POST` with `application/json` only. Body capped at 8 KB.
- `OPTIONS` does not send `Access-Control-Allow-Origin`.

This Worker has no rate-limit binding. Add a Cloudflare rate limiting rule for `/api/comments/*` and `/api/identify`: 30 requests per minute per IP, block for 10 minutes.

## Operator steps (not in git)

- **Web3Forms.** The access key in the contact form is public by design. In the Web3Forms dashboard, restrict the key to `notofilia.com` and require the captcha. The page already includes the honeypot and the Turnstile widget; the browser check does not stop a direct POST.
- **`dev.notofilia.com`.** The Worker already sends `noindex` for that host. If the DNS record is unused, delete it. If it is still needed, point it at a live origin and put Cloudflare Access in front of it. A proxied name with no origin (HTTP 522) is a takeover risk.
- **`security.txt`.** Not published. Add `public/.well-known/security.txt` only after a monitored mailbox exists. Do not commit a guessed `security@` address.

## Re-check

```
curl -sI https://notofilia.com | grep -iE "content-security|referrer|permissions|frame|strict-transport"
curl -s -o /dev/null -w "%{http_code}\n" https://dev.notofilia.com
for p in /.env /.git/HEAD /package.json /wrangler.jsonc; do curl -s -o /dev/null -w "%{http_code} $p\n" https://notofilia.com$p; done
```
