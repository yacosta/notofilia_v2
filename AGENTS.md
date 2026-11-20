# NOTOFILIA v2 — Agent guidance

NOTOFILIA is an Astro + Tailwind bilingual numismatic museum/catalog site deployed on Cloudflare Workers. Read `README.md`, `DESIGN.md`, `LAYOUT.md`, and the applicable `.cursor/rules/` files before edits. `main` is production-facing: prefer branches and reviewed pull requests.

## Task-specific skills
- Cloudflare hosting, D1, Worker and deployments: `.cursor/skills/notofilia-cloudflare/SKILL.md`
- Catalog research, duplicates and bilingual holdings: `.cursor/skills/notofilia-catalog-publishing/SKILL.md`
- Original scans, image processing, watermarking: `.cursor/skills/notofilia-catalog-imaging/SKILL.md`
- Security, abuse prevention and privacy: `.cursor/skills/notofilia-security-review/SKILL.md`
- Tests, build, accessibility and release readiness: `.cursor/skills/notofilia-release-qa/SKILL.md`
- Existing discovery guidance: `.cursor/skills/notofilia-seo/SKILL.md`, `.cursor/skills/notofilia-aeo/SKILL.md`, `.cursor/skills/notofilia-geo/SKILL.md`
- Existing localization and voice: `.cursor/skills/notofilia-bilingual-author/SKILL.md`

Use skills relevant to the task, not every skill for every change. Project rules and actual code take precedence over general suggestions. Never invent provenance, mintage/printage, certification, prices or source quotations. Preserve original scans and avoid duplicate catalog objects. Do not commit generated watermark outputs. Do not deploy or change production Cloudflare settings without explicit authorization.

Before PRs consult `.cursor/commands/audit-pr.md` and provide precise command/results evidence. Never claim a test, live audit or deployment succeeded unless actually performed.
