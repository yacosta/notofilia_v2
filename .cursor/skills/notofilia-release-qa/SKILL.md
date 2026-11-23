---
name: notofilia-release-qa
description: Run scoped NOTOFILIA regression, bilingual, SEO, accessibility, image and deployment readiness checks before PRs and releases.
---
# NOTOFILIA release QA

Use before merging content, design, Worker, or dependency changes. Read `.cursor/commands/audit-pr.md`, `.cursor/rules/00-site-standards.mdc`, `.cursor/rules/10-page-types.mdc`, `DESIGN.md`, and `LAYOUT.md`.

## Required review
1. Summarize changed routes, data records, original media and generated assets. Identify user-facing consequences.
2. Run `npm test` and `npm run build`; document missing environmental prerequisites instead of reporting unrun checks as passed.
3. For all affected templates verify Spanish and English paths, navigation, hreflang, canonicals, structured data and sitemap membership.
4. Inspect mobile and desktop layouts for legible historical images, correct front/back orientation, 3-column holdings rule, spacing, captions, accessible controls, keyboard navigation and meaningful alt text.
5. Follow repo SEO/AEO/GEO skills for titles, answer blocks, schema, robots and redirect checks. Run `npm run seo:audit` when practical; Lighthouse mobile assessment per `.cursor/commands/audit-pr.md`.
6. For Worker or dependency changes verify appropriate runtime, security/HTTP behavior, build output, and Cloudflare compatibility.
7. Distinguish warnings already present on baseline from regressions. Never silently adjust unrelated pages merely to make an audit pass.
8. End with: tests actually run and results; manual checks; blockers; risks; rollback plan; what remains unverified.
