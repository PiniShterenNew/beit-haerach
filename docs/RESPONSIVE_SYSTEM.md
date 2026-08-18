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
  targets and Escape-to-close. The header itself hides on scroll-down and
  reappears on scroll-up (past a 140px threshold) to give small screens
  their vertical space back — desktop keeps the header permanently visible.
- All two/three/four-column grids (`ProgramCard` grid, highlight grids,
  footer columns) stack to a single column, or 2-up for compact tiles
  (amount selector).
- `container-page` padding is 1.25rem below `md`, 2.5rem at/above.

### Hero: composed per viewport, not shrunk
The homepage hero is two distinct compositions, not one grid that
collapses — the mobile version is not a smaller desktop:
- **Mobile:** the image bleeds full-width above the fold (`rounded={false}`,
  breaks out of `container-page`), fading into the navy field through a
  gradient overlay so copy and image read as one continuous dark editorial
  spread. Copy follows below, inside the normal padded container.
- **Desktop (`≥ md`):** a contained `1.1fr/0.9fr` split — copy and a
  shadowed, rounded image card side by side — with the giant watermark
  `Mark` visible behind the copy column, which the mobile layout omits
  visually (image covers that area instead).

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
