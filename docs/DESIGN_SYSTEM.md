# Design System

## Tokens
Defined in `app/globals.css` as CSS custom properties, exposed to Tailwind
utilities via `@theme inline` (so both `text-(--color-navy-950)` arbitrary
syntax and canonical `text-navy-950` utilities resolve to the same value).

- Color: `--color-{navy,gold,stone,ivory,sage,clinic,kollel,yeshiva}-{...}`
  plus semantic aliases `--color-{surface,text,border,action,feedback}-*`.
- Radius: `--radius-{sm,md,lg}`.
- Shadow: `--shadow-{sm,md}` (used sparingly — the brief calls for minimal
  cardification, so shadows are reserved for the donation module and raised
  surfaces only).
- Motion: `--motion-{fast,base,slow}` + `--motion-ease`.

## Components (`components/`)
- `ui/button.tsx` — Button, 5 variants × 2 sizes, polymorphic (renders
  `next/link` when `href` is passed).
- `ui/field.tsx` — FormField, Input, Textarea, Select, Checkbox, Radio.
- `ui/icon.tsx` — single SVG icon system, 25 glyphs, consistent 24×24
  viewBox / 1.75 stroke / round joins, derived from the arch motif.
- `ui/accordion.tsx` — accessible disclosure (FAQ, transparency).
- `ui/section.tsx` — Section + SectionHeader page-rhythm primitives.
- `ui/media-placeholder.tsx` — art-directed, aspect-ratio-locked image
  placeholder (see docs/ASSET_MANIFEST.json for what each one is waiting on).
- `brand/mark.tsx`, `brand/logo.tsx` — master symbol + lockups.
- `sections/*` — ProgramCard, ProcessStep, Quote, TrustBadge, ImpactMetric,
  StoryCard, DocumentLink, ProgramPageTemplate.
- `donation/*` — AmountSelector, DonationModule (client, calls the provider
  adapter in `lib/donation/provider.ts`).
- `forms/*` — ContactForm, VolunteerForm, GetHelpForm (client, zod-validated,
  post to route handlers under `app/api/*`).
- `layout/*` — SkipLink, SiteHeader, MobileNav, SiteFooter.

## Component states
Every interactive control implements default / hover / focus-visible /
active / disabled via Tailwind state variants and the global
`:focus-visible` outline (`app/globals.css`); form controls additionally
carry an `aria-invalid` + inline error state driven by zod.

## Signature devices (v2)
Added to move the system away from generic "SaaS template" tells — a
uniform icon-in-a-circle badge on every card, identical grids repeated
section after section, safe/flat type scale — toward something specific to
this brand's one owned symbol, the arch:

- **Arch framing.** `#arch-frame` (an `objectBoundingBox` `<clipPath>`
  defined once in `app/layout.tsx`) clips the hero photo into the Mark's own
  doorway silhouette instead of a rounded rectangle. It scales with the
  element, so it works at any image aspect ratio.
- **No icon badges.** `TrustBadge` and `ProgramCard` render icons bare —
  larger, colored, no circular background — per `.icon-mark` in
  `app/globals.css`. `ProgramCard` pairs its icon with a thin accent rule
  instead of a filled chip.
- **Ghost numerals.** `ProcessStep` renders its index as a large, pale
  `.ghost-numeral` behind the icon/title rather than a small badge number —
  a step counter that reads as typography, not UI chrome.
- **Grain.** `body::before` in `app/globals.css` overlays a low-opacity
  (`0.05`) SVG `feTurbulence` texture in `overlay` blend mode across every
  page, breaking up flat digital-smooth surfaces without touching any
  component's own styling.
- **Editorial type scale.** `SectionHeader`, the hero H1, and `ImpactMetric`
  all sit well above the original scale (hero uses
  `clamp(2.75rem,8vw,6.5rem)`) — typography carries visual weight that used
  to come from decoration. `ImpactMetric` intentionally caps out lower
  (`text-3xl` → `lg:text-5xl`) because its values are currently
  `[נדרש אימות]` placeholder strings, not short numerals; re-check that cap
  once real figures land and short numbers can carry a bigger size safely.
- **Broken grid rhythm.** The program card grid staggers alternating cards
  down via `[&>*:nth-child(2n)]:lg:mt-12` at `lg` — a margin offset, not a
  transform, so it never fights the card's own hover-lift transform.

## Responsive
Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`); grid/flex layouts
collapse to a single column below `md`. See `docs/RESPONSIVE_SYSTEM.md`.

## Accessibility
Target WCAG 2.2 AA. See `docs/10_QA_AND_DEFINITION_OF_DONE.md` for the
checklist and "Accessibility" in `BUILD_REPORT.md` for current status.
