# Design

Lumina's visual world is **De Bloem**: small acts, shown as photo petals, gather into one flower. It grew from the home quote about petals forming a bouquet, the part of the first redesign the client liked most.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--roos` | `#d8285f` | Hero, quote, closing and header action |
| `--roos-deep` | `#b01f4d` | Small accent text on light grounds |
| `--wijn` | `#4a0d2b` | Headings on light grounds, dark sections, footer, primary button on light |
| `--blush` | `#fdeef1` | Quiet alternating sections and panels |
| `--ink` | `#24111b` | Body text |
| `--muted` | `#6b5660` | Secondary text |
| White | `#ffffff` | Main reading ground, primary button on roos and wijn |

Green comes only from photographs. Do not add another brand color.

## Type

- Display: **Jost** 500, self-hosted through `next/font`. The client rejected heavy grotesques and serifs.
- Text and small headings: **Hanken Grotesk** 400 to 600. Questions and labels use this face for easy reading.

## Shapes

- The petal comes from the logo's leaf: two sharp opposite corners and two large curves (`--petal`, `--petal-flip`).
- Photographs use the petal when they carry a section. Layout blocks stay square and full-bleed.
- Buttons are pills. Links are thin underlines. No arrows on buttons or links.
- Never repeat the logo's star as a pattern.

## Motion

- The hero petal opens on load; on desktop two small petals follow.
- In the quote section, photo petals drift in and gather as the visitor scrolls. This is the signature moment; do not repeat it elsewhere.
- Headings and cards fade up once. Sections scroll normally: no pinned or stacked sections.
- `prefers-reduced-motion` shows everything in its final state.

## Phones

The hero photo runs edge to edge above the words. Programmes become a list of four rows, with no sideways scrolling.

## Avoid

Serif or heavy condensed display type, two-tone headings outside the quote, small labels above headings, rounded section cards, numbered section markers, gimmicks borrowed from physical posters.

## Sanity

Section colors are fixed by section type, so editors can reorder sections safely. The eyebrow field only appears in the quote section.
