---
name: notofilia-catalog-imaging
description: Assess and process user-supplied coin, medal, token and banknote images to faithful, publication-grade NOTOFILIA catalog standards.
---
# NOTOFILIA catalog imaging and quality assurance

Use when a user uploads an image and asks for catalog quality, restoration of presentation, rotation, consistency, composites, filenames, or optimized publication assets. Read `README.md`, `src/lib/catalog-media.ts`, `scripts/watermark-catalog.mjs`, `scripts/catalog-watermark.test.mjs`, and existing image conventions before committing assets.

## Non-negotiable authenticity
- Preserve the original upload unchanged and retain an unmarked archival master under `catalog-src/catalog/` when publishing. Perform adjustments on a derivative; never overwrite the source blindly.
- Retain full note paper, coin rims, inscriptions, edge details, specimen flaws, handwritten marks, original color, PMG/PCGS/NGC holder, label, barcode and grade. Never erase a feature merely because it looks like a blemish.
- Do not fabricate detail, regenerate illegible text, remove legitimate wear, forge grading labels, artificially change metal composition/color or misrepresent AI-created imagery as an authentic scan.
- Clearly distinguish corrections of photographic capture (white balance, exposure, background outside the object's edges) from alterations to the collectible itself. If a requested alteration might change evidence, ask for approval or label the output an illustrative derivative.

## Intake and assessment (before editing)
1. Identify object type and sides (obverse/reverse; front/back), and determine upright orientation using portraits, legends, dates and devices. Record any uncertain interpretation.
2. Check image resolution, pixel dimensions and pixel density on the *object* (not only the canvas). Inspect focus/motion blur, JPEG blocks, ringing, noise, glare, uneven lighting, reflections, oversharpening, clipping and color cast.
3. Examine background, cropping, perspective, skew, rotation, geometry and whether the whole rim/paper/holder is visible. Compare front and back physical scale, brightness, orientation and backgrounds.
4. Assign a quality outcome: **PASS** (usable as-is), **IMPROVE** (faithful corrections likely to succeed), or **RESCAN REQUIRED** (essential detail absent, severe blur or glare). Never claim that software can recover detail not captured.
5. For RESCAN REQUIRED, recommend a flat, high-resolution, color-controlled capture with diffuse even illumination, camera square to the surface, complete margins and no flash glare.

## Processing pipeline
1. Duplicate the untouched input. Apply EXIF orientation and lossless quarter-turns where available. Then straighten/deskew only when needed; do not trim object edges.
2. Normalize white balance and exposure conservatively using neutral background or known color reference where available. Preserve actual substrate/metal hues and patina; avoid invented gold saturation.
3. Apply modest noise reduction and restrained sharpening only when they improve real captured detail without halos, fake engraving, fake fibers, or smoothed texture.
4. Correct perspective only for camera distortion, preserving authentic shapes and physical proportions. Do not stretch or warp denomination lettering or coin circularity.
5. If requested, isolate or replace the **external** background with a consistent neutral background; retain natural edges and any encapsulation/shadow. Never replace portions of a note or coin with generated pixels.
6. Create visually matched front/back derivatives with consistent real-object scale and safe padding. A composite places both full specimens side-by-side, uncropped, readable, centered and aligned, with consistent lighting and a neutral ground. Keep independent masters too.
7. Export high-quality archival derivative plus web-appropriate JPEG/WebP/PNG according to original transparency and project conventions. Use sRGB for browser delivery while retaining the original master color information. Do not upscale simply to imply higher resolving power.
8. Use country/object/denomination/date/serial-aware filenames consistent with existing `catalog-src/catalog/` paths. Check collision and duplicate rules before writing.
9. Run the established watermark pipeline to produce stamped display assets under `public/images/catalog/` and light-tile download assets under `public/images/catalog-download/`. Never commit these generated assets or `public/watermark-preview/`.

## Catalog-quality acceptance checklist
- **Integrity:** every original physical edge, date, serial, inscription, grade and relevant defect remains visible and unaltered.
- **Orientation:** both sides are correct and not mirrored; text and portrait orientation checked manually.
- **Detail:** fine lines/lettering remain naturally legible at 100% zoom; no obvious blur, block artifacts, halos or fabricated detail.
- **Color:** plausible, balanced color faithful to original evidence, without clipped highlights, crushed shadows or extreme casts.
- **Geometry:** straight, natural aspect and uncut margins; no distortion of a circular coin or rectangular note.
- **Consistency:** centered placement, coherent background, matched front/back object scale and spacing.
- **Delivery:** meaningful bilingual alt text and captions, correct filenames, legible responsive display, reasonable size, working download links and validated processing results.
- **Auditability:** original preserved; record source, adjustments and output paths. Review visually at 100% and at typical site display width.

## User-facing result
Provide the PASS / IMPROVE / RESCAN REQUIRED verdict, identified issues, exact corrections made, filenames/links, and any unresolved authenticity or quality limits. If rescan is required, do not label a sharpened or enlarged version 'catalog quality'.

## Quality checks before publication
Run relevant watermark, media and catalog-image tests and a site build if assets are committed. Review front, back and composite visually. No file or production changes unless explicitly requested.
