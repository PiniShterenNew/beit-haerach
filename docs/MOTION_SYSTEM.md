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

## Current implementation
This build ships **restrained, functional** motion only:
- Color/border transitions on interactive elements (`transition-colors`).
- Mobile nav open/close and accordion expand/collapse (state-driven, not
  scroll-driven).
- `ProgramCard` link arrow nudges on hover (`group-hover:-translate-x-1`).
- Smooth in-page scrolling (`html { scroll-behavior: smooth }`), disabled
  under reduced motion.

## Recommended next layer (not yet implemented)
Framer Motion is listed as an allowed dependency in
`docs/08_TECHNICAL_IMPLEMENTATION.md` "only if motion materially improves
experience." For v2, the highest-value additions in priority order:
1. Section-reveal on scroll for the Program Ecosystem and Process sections
   (staggered fade + 8px rise, ~400ms, IntersectionObserver-gated).
2. A subtle line-drawing animation on the master `Mark` in the hero, playing
   once on first paint (arch stroke-dashoffset), skipped entirely under
   reduced motion.
3. Soft cross-fade between donation flow steps.

None of these are required for launch; the current static-but-transition-
aware implementation already satisfies the QA bar in
`docs/10_QA_AND_DEFINITION_OF_DONE.md`.
