## What

<!-- What this PR changes, and why. -->

## URL stability

Published paths are permanent. Check one:

- [ ] No public URL was renamed, removed, or re-slugged.
- [ ] Every renamed or retired path has a 301 in `src/lib/legacy-redirects.ts` (Spanish, English, and any `.dc` alias) in this same PR.

## Checks

- [ ] Both locales updated when the change is public content.
- [ ] Sitemap / hreflang still pair if a route was added.
