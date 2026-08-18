# Responsive System

## Breakpoints
Tailwind defaults, used content-first (not device-first):
`sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px.

`md` is the primary structural breakpoint across the site — it's where
navigation switches from the mobile drawer to the inline desktop nav, and
where most two-column sections collapse to one column below it.

## Mobile (< md)
- Header collapses to logo + donate button + hamburger; full nav moves into
  `MobileNav`, a full-height drawer (not a dropdown) with 44px+ touch
  targets and Escape-to-close.
- All two/three/four-column grids (`ProgramCard` grid, highlight grids,
  footer columns) stack to a single column, or 2-up for compact tiles
  (amount selector).
- Hero copy leads, image follows, both full-width.
- `container-page` padding is 1.25rem below `md`, 2.5rem at/above.

## Desktop (≥ md)
- Two-column editorial pairings (text + `MediaPlaceholder`) throughout About,
  Home, and program pages.
- Inline primary nav + persistent donate button in the header.
- Four-column program/highlight grids at `lg`.

## Verified viewports
Manually reviewed at 320, 375, 430 (mobile), 768 (tablet), 1024/1440 (desktop)
per `docs/10_QA_AND_DEFINITION_OF_DONE.md`. No horizontal scroll; RTL text
does not clip in any tested width — logical properties (`ps-`, `pe-`,
`border-e-`, `dir="rtl"` on `<html>`) are used instead of hardcoded
left/right so the layout does not require LTR-mirroring hacks.

## Images
`MediaPlaceholder` fixes `aspect-ratio` per the ratios in
`docs/06_ASSET_PLAN.md` (hero 4:5 mobile / wider on desktop via grid,
story/donation cards 4:3), so swapping in real photography later will not
shift layout. Real photography should be delivered through `next/image`
with explicit width/height once sourced.
