# Brand Direction

## Positioning
A long-standing Haifa community institution of practical care, expressed
through four concrete programs: food, dental health, Torah study, and
education. "Editorial Humanitarian + Local Institutional Trust."

## Attributes
Home · warmth · dignity · reliability · continuity · quiet generosity ·
action · tradition without visual heaviness.

## Logo system
Master symbol reads as: an architectural arch (protection, doorway, home) →
an open book at its base (Torah, education, knowledge) → a human/growth
form rising from the book (the person being served, and the act of giving).

Deliverables (provisional, pending stakeholder approval):
- Primary Hebrew lockup — `components/brand/logo.tsx` (`<Logo />`)
- Compact mark — `components/brand/logo.tsx` (`<LogoCompact />`)
- Monochrome variant — `public/assets/brand/mark-mono.svg` / `<Mark tone="mono" />`
- Favicon / app icon — `public/favicon.svg`, `public/assets/brand/app-icon.svg`
- Program lockup variant — `<Logo programLabel="בית הארחה" />`

Clearspace: keep at least the symbol's own height as breathing room on all
sides. Minimum digital size: 28px height for the symbol alone, 32px height
for the full lockup with legible Hebrew type.

Avoided per brief: generic heart-in-hand marks, clip-art food icons, literal
spoon/fork logos, NGO globe/people swooshes, and — post-correction — any
pot/plate/tooth/food-only symbolism in the *master* mark.

## Color
| Token | Hex | Role |
|---|---|---|
| `--color-navy-950` | #0B1D3A | Primary brand anchor, text, dark surfaces |
| `--color-gold-500` | #D4AF37 | Accent, primary conversion actions |
| `--color-stone-300` | #C8C2B1 | Neutral / warm base |
| `--color-ivory-50` | #F7F4EF | Light surface base |
| `--color-sage-400` | #8DA88F | Guesthouse program accent |
| `--color-clinic-400` | #7AA6B8 | Dental program accent |
| `--color-kollel-400` | #D4AF37 | Kollels program accent (shares gold) |
| `--color-yeshiva-400` | #6F8D76 | Yeshiva program accent |

Full scale in `app/globals.css` (`:root` + `@theme inline`). The gold accent
is intentionally restrained — used for CTAs, eyebrows, and small emphasis
marks, never as a dominant fill.

## Typography
- Display: **Frank Ruhl Libre** (Hebrew serif, editorial, institutional) —
  `--font-display`, used for all headings and the wordmark.
- Body: **Assistant** (Hebrew sans, highly readable at small sizes) —
  `--font-body`, used for all running text, UI labels, and forms.
- Both loaded via `next/font/google` with the `hebrew` subset in
  `app/layout.tsx`; no client-side font requests, no CLS from font swap
  (`display: swap` + matched fallback metrics).

## Layout
Generous whitespace, large editorial imagery via `MediaPlaceholder`,
minimal "cardification" (see `ProgramCard`, `TrustBadge` — divider-led, not
box-and-shadow), strong vertical rhythm from `Section`/`SectionHeader`.
