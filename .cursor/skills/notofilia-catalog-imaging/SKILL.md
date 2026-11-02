---
name: notofilia-catalog-imaging
description: Prepare faithful, consistent publication-quality coin and banknote scans and generated downloads.
---
# NOTOFILIA catalog imaging

Use for rotations, quality correction, side-by-side composites, watermarks, naming and download assets.

Read `README.md`, `src/lib/catalog-media.ts`, `scripts/watermark-catalog.mjs`, `scripts/catalog-watermark.test.mjs`, and any existing piece image tests.

## Rules
- Treat `catalog-src/catalog/` as the unmarked source of truth; keep full objects, edges, encapsulation, holders, grading labels and banknote margins unless the user expressly requests a derivative crop.
- Fix orientation using visible portrait, legend, denomination or other evidence. Do not mirror inscriptions or invent missing details.
- Preserve authentic material appearance: do not artificially recolor gold, alter patina, remove defects, manufacture detail, or substitute a reconstructed image while describing it as an original scan.
- Use correct front/back identity and keep each side consistently scaled and aligned. When creating a side-by-side composite, preserve aspect ratio and leave both images legible.
- Match the repository's country/path and serial-aware naming conventions. Ensure no existing file/holding is overwritten without review.
- The build creates a corner-stamped display image in `public/images/catalog/` and light-tile download in `public/images/catalog-download/`. Those generated paths and `public/watermark-preview/` are not committed.
- Check responsive size, compression, pixel quality, image alt text, long captions and appropriate download labels in both languages.
- Validate representative images visually and run the watermark and image-related tests. Report image provenance, transformations and remaining uncertainties.
