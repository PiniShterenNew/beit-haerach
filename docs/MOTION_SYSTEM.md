# Motion System

## Principle
Motion communicates continuity, arrival, and quiet confidence — never
decoration for its own sake. Every rule respects `prefers-reduced-motion`
(enforced globally in `app/globals.css`).

## Tokens
`--motion-fast` (120ms) — hover/focus state changes.
`--motion-base` (220ms) — section-local transitions (accordion, nav toggle,
button states).
`--motion-slow` (480ms) — larger compositional reveals.
`--motion-ease` — `cubic-bezier(0.22, 0.61, 0.36, 1)`, a gentle
decelerate-in curve used across the system instead of linear/bounce easing.

## Current implementation (v2)
No motion library is used — everything is CSS transitions/keyframes plus one
small `IntersectionObserver` per `Section`. This keeps every route a Server
Component at the content level; only `Section`, `SiteHeader`, and
`MobileNav` cross the client boundary, and only for observation/scroll
state, not for rendering.

**Scroll reveal.** `components/ui/section.tsx` observes itself and stamps
`data-revealed` once ~12% in view (fires once, then disconnects). Children
opt in with `.reveal-item` (fade + 18px rise, `--motion-slower`) or
`.reveal-line` (scale-x grow, used for the `ProcessStep` connector). Stagger
is a CSS custom property, `--reveal-i`, set via `revealStyle(index)` from
`lib/motion.ts` — each unit adds 90ms of delay. No-JS visitors get static,
fully visible content via `@media (scripting: none)`; reduced-motion
visitors get it via the existing global rule that collapses all
transition/animation durations to ~0.

**Hero load-time cascade.** The hero is always in view at first paint, so
its entrance (`--hero-i` / `.hero-rise`) is a plain `animation`, not
scroll-observed — no client component needed for `Hero` itself.

**Mark line-draw + drift.** `<Mark animate drift />` uses SVG
`pathLength={1}` so the two arch strokes can draw in with a simple
`stroke-dashoffset` keyframe regardless of path geometry; the book/figure
fill fades in once the strokes finish. `drift` adds a slow (16s), tiny,
`infinite` ambient sway to the hero's background watermark only — never
applied to the small logo/footer marks.

**Micro-interactions.** Buttons lift + gain a soft brand-colored shadow on
hover and settle with a scale-down on press (`.btn-press`, both variants).
`ProgramCard` lifts, gains a surface + shadow, and its icon badge scales up
on hover. Header nav links get a gold underline that grows from the center.
`SiteHeader` elevates (shadow) past an 8px scroll threshold and, on mobile
only, hides on scroll-down / reappears on scroll-up past 140px, to give
small screens back their vertical space; desktop headers never hide.
`MobileNav` is a real open/close transition (slide + fade + backdrop) with
staggered link entrance, not a conditional mount, and its hamburger icon
morphs into an × instead of swapping SVGs.

## Recommended next layer (not yet implemented)
1. Soft cross-fade between donation flow steps.
2. A scroll-linked pinned/split treatment for the Legacy or Human Story
   section (fixed text panel, scrolling image column) if/when real
   photography lands — static `MediaPlaceholder` art direction isn't rich
   enough to carry it yet.

Neither is required for launch.
