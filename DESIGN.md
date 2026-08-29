# Notofilia visual system (v2 homepage)

Source of truth for the current Astro + Tailwind homepage. This pass tracks the **live notofilia.com** museum-case palette, not Brand Identity v1.0.

## Current direction

v2 currently matches the live site: dark case, cream type, gold-light accents. The paper / intaglio-green identity (warm ivory grounds, `brand-950` `#0B2E1F`, Fraunces / Source Serif 4 / Inter / IBM Plex Mono) is **deferred**.

## Live tokens

Use the Tailwind v4 theme in `src/styles/global.css`:

- Ground: `bg` `#0A0A09` · `panel` `#1C1A15` · `ink` `#332E22`
- Type: `cream` `#E7DDC4` · `cream-dim` `#D8D2CD` · `muted` `#B7AB8A`
- Soft / line: `cream-soft` `#D8CFB8A6` · `cream-faint` `#E7DEC98C` · `line` `#E7DEC924` · `line-strong` `#E7DEC940` · `line-input` `#E7DEC959`
- Gold: `gold` `#8A6D3B` · `gold-deep` `#6B521F` · `gold-dark` `#5C4E33` · `gold-light` `#CBBF9D`

Type: Montenegrin Gothic One (display wordmark and titles), Source Sans 3 (body and UI). Local WOFF2 files live in `public/fonts/`.

Content width and page gutters: see `LAYOUT.md`. Do not recap catalog narrative at `46rem` after a full-width facts card or image pair.

## Wordmark

**NOTOFILIA** in Montenegrin Gothic One. Running text: Notofilia. Discipline: *notafilia*. Lockup: NOTOFILIA — Numismática y Notafilia.

## Do / don’t

- Dark page and footer. Cream / cream-dim / gold-light on dark — not gold-500 yellow as body text.
- Primary actions: cream fill, dark (`bg`) text. Secondary: cream outline on dark.
- Header: two-tier sticky chrome. A full-width municipal-style red alert (`#d61f26`, white type, circular “!” mark) sits above the utility row (wordmark, search, ES–EN pill) on translucent dark; equal-width text nav on `#11110e`, cream labels, hairline separators. Hover / open inverts the cell to cream on dark text.
- Mega menu: nested IA (Colección Virtual - Notafilia, Colección Virtual - Numismática, Recursos). Country rows in the panels show a decorative [flag-icons](https://github.com/lipis/flag-icons) flag beside the name; Recursos links show a matching decorative stroke mark (bookmark, open book, newspaper). Icons are `aria-hidden` and use `currentColor` so they follow cream-on-dark (drawer) and ink-on-cream (desktop panel). The top bar stays text-only. The notaphily panel is two columns on desktop: countries on the left, world polymer (with its country submenus always visible) on the right. Mobile is a left drawer with accordion submenus; the polymer column stacks below.
- Footer stays on `bg` with cream-soft links — not brand-950 green.
- Mono + middle dots may still appear in the signature stat line, but the UI stack is Source Sans 3, not IBM Plex Mono.
- Non-commercial disclaimer in every footer.
