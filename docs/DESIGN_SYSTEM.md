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

## Responsive
Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`); grid/flex layouts
collapse to a single column below `md`. See `docs/RESPONSIVE_SYSTEM.md`.

## Accessibility
Target WCAG 2.2 AA. See `docs/10_QA_AND_DEFINITION_OF_DONE.md` for the
checklist and "Accessibility" in `BUILD_REPORT.md` for current status.
