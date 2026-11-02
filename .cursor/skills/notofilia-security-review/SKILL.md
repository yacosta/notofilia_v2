---
name: notofilia-security-review
description: Review Cloudflare Worker APIs, privacy, response headers, anti-abuse and dependency changes without weakening existing protection.
---
# NOTOFILIA security review

Read `docs/SECURITY.md`, `src/lib/security-headers.ts`, `public/_headers`, `src/worker.ts`, `src/worker/comments.ts`, `src/worker/identify.ts`, and relevant tests before modifying protection.

1. Identify trust boundaries: user uploads and hashes, contact form, comments, D1, static assets, third-party analytics, and deployment credentials.
2. Do not add fetch-any-URL endpoints, open CORS, or leak secret tokens. Keep SQL parameterized and ensure input/body limits, slug validation, server-side Turnstile checks and safe output encoding.
3. Keep Worker response header behavior synchronized with `public/_headers`; evaluate CSP changes against actual inline scripts. Never silently weaken CSP with unsafe-eval/unsafe-inline.
4. Respect consent before analytics storage and avoid adding invasive tracking.
5. Protect staging with noindex; confirm redirects and 410 behavior do not expose internal paths or mislead crawlers.
6. Recommend Cloudflare edge rate-limiting as an operational configuration where no repo binding exists; do not claim it is enabled without verifying account settings.
7. Test both accepted and rejected API requests, including oversized, malformed, unauthenticated, cross-origin and replay-like requests as applicable.
8. Report findings by severity, affected file, proof, recommended remediation and verification status. Do not expose exploit payloads aimed at live systems or alter production settings without permission.
