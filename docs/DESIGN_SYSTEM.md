# Design System — עזרת ישראל

## Thesis

> כי הארגון הזה הוא מעטפת קהילתית רב-דורית שבונה הגנה לאדם בגוף, ברוח ובחיים
> היומיומיים — החוויה תרגיש כמו **מגזין מוסדי חם עם נשמה בוהמיינית**, באמצעות
> שימוש חוזר ב**קשתות מעטפת, טיפוגרפיה סריפית כבדה, Bento Grid א-סימטרי
> ומרחבי נשימה גדולים**, ותתנהג כמו **ספר שנפתח** — שכבה אחרי שכבה.

Style: **Editorial × Bohemian × Bento Grid**. RTL-first (`dir="rtl"`, `lang="he"`),
logical CSS properties throughout.

## Token architecture

Two layers, both in `app/globals.css`:

| Layer | Where | Purpose |
|---|---|---|
| **1 — Primitives** | `@theme { }` | Raw colour ramps, type scale, spacing, radii, shadows, easings. Generates Tailwind utilities (`bg-navy-900`, `text-h1`, `shadow-bento`, `ease-out-expo`, `max-w-content`). |
| **2 — Semantic** | `:root { }` | The only tokens components should reference (`--color-canvas`, `--color-text-primary`, `--color-action-primary`, `--color-branch-*`). |

Tailwind v4 is configured CSS-first — there is no `tailwind.config.ts`. Adding a
token means adding a custom property to `@theme`.

### Colour ramps
`navy` (institutional trust) · `gold` (heritage) · `stone` (warmth) ·
`sage` (community) · `calm` (health) · `terra` (bohemian accent). 50–900 each.

### Branch colours
Each branch carries two tones, and the distinction is load-bearing:

- `--color-branch-*` — the full tone, for **fills and graphics only** (3:1 threshold).
- `--color-branch-*-text` — a darker tone, for **any text in the branch colour**,
  and for solid surfaces that carry white text.

The full tones (e.g. gold-600 at 2.5:1 on white) do not reach 4.5:1 as text.
Same reason `--color-text-accent` is gold-800 and `--color-text-tertiary` is
stone-700 rather than the lighter steps.

## Typography

- **Brand/Display (`--font-brand`, aliased as `--font-display`)** — Suez One
  400, self-hosted via `next/font/local` (`app/fonts/suez-one/`, SIL OFL 1.1 —
  license file alongside the font). Used deliberately: brand name, H1, and
  major section H2 headings only — not every heading.
- **Headings (`--font-heading`)** — Heebo 700, for H3/H4 (card and list
  titles). Most `<h3>` in the codebase use the `font-heading` utility
  explicitly, since the base `h3,h4` rule alone doesn't win against a
  utility class in the cascade.
- **Body (he)** — Heebo 300/400/500/700, line-height 1.8.
- **Body (en)** — Inter 400/500/600/700.

Heebo/Inter loaded via `next/font/google` with `display: swap`. Scale is fluid `clamp()`:
`text-display`, `text-h1`–`text-h3`, `text-body-lg`/`body`/`body-sm`,
`text-caption`, `text-overline`, `text-stat`.

The scale is calibrated for Hebrew directly. **Do not add a `:lang(he)` rule that
sets `font-size`** — `:lang(he) h1` (0,1,1) outranks `.text-h1` (0,1,0) and
silently flattens every heading on the site.

## Shape

Radii: `sm` 6px · `md` 12px · `lg` 16px · `xl` 24px · `2xl` 32px · `pill`.
**Iron rule: no square buttons.** Every button variant inherits `--radius-md` minimum.

**The arch** is the signature element — envelope, gateway, protection. It appears
via `.arch-image` (`--radius-arch`), `.arch-divider` (section transitions) and
`.arch-badge` (icon frames). It carries the meaning, so it is used deliberately —
roughly three to four times per page, not on every element.

## Motion

Durations `--duration-instant|fast|normal|slow|dramatic`; easings `ease-out-expo`,
`ease-gentle`, `ease-in-out-soft`.

- `.reveal` + `<Reveal>` — scroll fade-up via IntersectionObserver, stagger through
  `--reveal-delay`, capped at 6 elements.
- `.hero-in` — the hero is always in view, so it animates on paint (CSS animation
  with `--hero-delay`), not on scroll.
- `.lift` — hover elevation, applied only to cells that are actually links.
- `<StatCounter>` — rAF count-up. Initial state is the **final** value, so SSR,
  no-JS and reduced-motion all render the real number.

All of it collapses under `prefers-reduced-motion: reduce`.

## Layout

Containers: `max-w-content` 80rem · `-wide` 72rem · `-default` 64rem · `-narrow` 42rem.
Section rhythm: 96px desktop / 64px tablet / 48px mobile, via `<Section>`.

**Bento grid** — 12 columns desktop → 6 tablet → 1 mobile.
Spans: `wide` (8) · `medium` (6) · `narrow` (4) · `quarter` (3) · `full` (12), plus `tall`.
Not every section is bento; it alternates with full editorial sections to create rhythm.

## Unverified content

`<Placeholder>` marks any number, name or legal detail that has not been confirmed
(dashed underline + `title` + `data-needs`). Content flags these with
`pending: true` in `lib/content/site.ts`. A public benevolent organisation must not
render an unverified registration number as though it were confirmed.

## Accessibility

WCAG 2.2 AA. Contrast verified against rendered output, not against the palette on
paper. Skip link, visible focus ring (`--color-border-focus`, 2px offset),
`aria-label` on icon-only controls, targets ≥24px (≥44px for navigation and
mobile actions), and no horizontal overflow at 375/768/1440.
