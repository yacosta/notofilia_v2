# Content column and margins

Use this when laying out collection pages (and any page that mixes a wide object with body copy). Palette and type stay in `DESIGN.md`. Widths live here.

## What changed

On the 1934 Chicago $10 Federal Reserve Note page, **La pieza**, **Rareza e impresión**, and **Población** sat in a `46rem` column. The catalog facts card and the anverso/reverso pair above them used the full content column (`max-w-content` plus `--page-gutter`). On a wide desktop those prose blocks looked inset; their left and right edges did not match the section above.

The fix was to drop `max-w-[46rem]` on those sections only. They now inherit the article column, so they share the same side gutters as the facts card and the image grid. The short lead under the title is still `46rem`. That change is live on `UnitedStatesNotePage.astro` (Spanish and English routes).

Apply the same rule everywhere a wide catalog block is followed by narrative sections.

## Two widths

| Token | Value | Role |
| --- | --- | --- |
| `--max-width-content` / `max-w-content` | `75rem` | Museum case: facts cards, image grids, source lists, series chapters, homepage bands |
| `--page-gutter` | `clamp(1.25rem, 5vw, 2.5rem)` | Side inset on that case. Do not add a second horizontal pad on inner sections |
| `max-w-[46rem]` | `736px` | Reading measure for a *standalone* dek or a text-only article |

The case is always:

```html
<article class="mx-auto max-w-content px-[var(--page-gutter)] …">
```

Inner sections should not set their own `max-w-*` unless they are a short dek *above* the first full-width block.

## Rule

Once a page opens the full content column (facts card, image pair, chapter grid), every section below that block stays in the same column.

- **Do** let “La pieza”, scarcity, population, legends, history, certification, and sources run the full `max-w-content` width.
- **Do** keep the one- or two-sentence lead under the `h1` at `max-w-[46rem]`. That line sits *above* the case objects.
- **Do not** put `max-w-[46rem]` on a section that follows a facts card or a note/coin image grid. That recuts the margin and the page looks stepped.
- **Do not** add extra `px-*` on those prose sections to “match” the facts card. The card’s `p-6` is inner padding of the panel, not the page gutter. Align section headings with the card’s *outer* edge and with “Anverso” / “Reverso”.
- **Do not** use `46rem` as a page wrapper on a collection object page. That is for text-only pieces (about, editorial article).

Text-only pages keep a reading column:

- `AboutPage.astro` and `EditorialArticlePage.astro`: `max-w-[46rem]` on the article is correct.
- `EditorialIndexPage.astro`: a `46rem` header above a wider index is fine.
- Stubs and the 404 page may stay at `720px`.

## Pattern (piece page)

```html
<article class="mx-auto max-w-content px-[var(--page-gutter)] py-16 md:py-24">
  <h1>…</h1>
  <p class="mb-10 mt-0 max-w-[46rem] text-[17px]/7 text-muted">{lead}</p>

  <!-- full column -->
  <section class="mb-14 rounded-[6px] border border-line-strong bg-panel p-6">…</section>
  <div class="grid gap-10 lg:grid-cols-2">…</div>

  <!-- same column as the blocks above — no max-w-[46rem] -->
  <section class="mt-14" aria-labelledby="about-heading">…</section>
  <section class="mt-12" aria-labelledby="scarcity-heading">…</section>
  <section class="mt-12" aria-labelledby="population-heading">…</section>
</article>
```

## Still to apply

These templates still cap the post-image narrative at `46rem`. Remove that class from each `section` (keep it on the lead):

- `src/components/catalog/MpcNotePage.astro`
- `src/components/catalog/VictoryNotePage.astro`
- `src/components/catalog/ChinaNotePage.astro`
- `src/components/catalog/ColombiaCoinPage.astro`
- `src/components/catalog/NetherlandsCoinPage.astro`

Series index pages already use `max-w-content` without a second cap. Leave them.

## Check

On a viewport around `1440px`, the facts card, the image grid, and the first narrative heading should share the same left and right edges (within a pixel). The lead under the title may stay narrower. Mobile already collapses to `--page-gutter`; the extra `46rem` cap only matters on desktop.
