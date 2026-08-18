# Build Report — מרכז קהילתי עזרת ישראל

Status: **production build passes** (`npm run build` — compiles, type-checks,
lints, and statically generates all routes with zero errors).

## 1. What was built

A full Hebrew-RTL Next.js site for the umbrella organization and its four
programs, covering the entire sitemap in `docs/03_INFORMATION_ARCHITECTURE.md`
(adjusted for the corrected umbrella-brand architecture):

- `/` — full 10-part homepage arc (hero → trust strip → who we are → program
  ecosystem → process → human story → legacy → impact → transparency → final CTA)
- `/about`
- `/programs` (index) + `/programs/{guesthouse,dental,kollels,yeshiva}`
- `/stories`
- `/volunteer` (with a working, validated form)
- `/get-help` (with a working, validated, discreet-by-design form)
- `/transparency`
- `/contact` (with a working, validated form)
- `/donate` (full amount/frequency selector → mock provider → thank-you page)
- `/sitemap.xml`, `/robots.txt`, custom `/404`

## 2. Architecture

Next.js App Router, TypeScript strict, Server Components by default; the
donation module, forms, mobile nav, and accordion are the only Client
Components (all interaction boundaries, nothing else). Content is isolated
from layout in `lib/content/site.ts` (nav, programs, site facts) so a future
CMS migration only touches that layer. Donation and analytics both sit
behind typed adapter interfaces (`lib/donation/provider.ts`,
`lib/analytics/events.ts`) so no page or component talks to a vendor SDK
directly.

## 3. Design system summary

Full token set (color, radius, shadow, motion) in `app/globals.css`, exposed
to Tailwind v4 via `@theme inline`. ~20 reusable components across
`components/{ui,layout,sections,donation,forms}`. Full detail in
`docs/DESIGN_SYSTEM.md`.

## 4. Brand architecture (corrected mid-build)

The build was redirected partway through from a single-program "בית הארחה"
site to the umbrella organization, **מרכז קהילתי עזרת ישראל**, encompassing
four programs (בית הארחה, מרפאות שיניים, כוללים, ישיבה). Full rationale and
implementation in `docs/BRAND_ARCHITECTURE.md` and
`docs/PROGRAM_VISUAL_SYSTEM.md`. Key points:

- One master symbol only (arch + open book + human/growth form,
  `components/brand/mark.tsx`) — never a per-program logo.
- Program differentiation via accent color + icon + label only (see the
  program→accent→icon map in `docs/PROGRAM_VISUAL_SYSTEM.md`).
- All prior food-only assumptions were removed from the homepage story arc,
  hero copy, and site metadata; the master brand and program ecosystem now
  lead, with בית הארחה as one program among four rather than the whole site.

### Logo system implemented
Primary Hebrew lockup, compact mark, monochrome variant, favicon, and app
icon — all SVG, all provisional pending stakeholder sign-off (see
`docs/BRAND_DIRECTION.md` → Logo system).

### Design tokens
Master navy/gold + four program accent scales (sage / clinic / kollel /
yeshiva), semantic surface/text/border/action/feedback aliases — full table
in `docs/BRAND_DIRECTION.md`.

### Typography system
Frank Ruhl Libre (display) + Assistant (body), both Hebrew-subset via
`next/font/google`, `display: swap`.

### Icon system
25-glyph shared stroke system in `components/ui/icon.tsx` (24×24, 1.75
stroke, round joins), covering meal, cooking, package, delivery, home,
family, volunteer, donation, calendar, candles (Shabbat/holiday), location,
phone, document, certificate, accessibility, arrow, check, error, dental,
torah, graduation, community, transparency, whatsapp, mail, arch.

### Motion system
Restrained, functional-only motion shipped (transitions, accordion/nav
state, hover nudges); full rationale and a prioritized "not yet built" list
in `docs/MOTION_SYSTEM.md`.

### Responsive strategy
Mobile-first, `md` as the primary structural breakpoint, logical CSS
properties throughout (no LTR-mirroring hacks) — detail in
`docs/RESPONSIVE_SYSTEM.md`.

## 5. Routes
See section 1. All 13 page routes + 3 program routes + 3 API routes build
and statically prerender except `/donate/thank-you` and the three `/api/*`
handlers, which are correctly dynamic/server-rendered.

## 6. Open factual placeholders

Every one of these is marked `[נדרש אימות]` in the running site (mainly
`lib/content/site.ts` → `SITE`, plus inline copy on `/transparency`,
`/donate`, and the program pages) and must be resolved before public launch:

- Legal entity name, registration number, סעיף 46 status
- Phone, WhatsApp number, email, physical address
- Current 2026 service scope per program
- Current meal/beneficiary/volunteer counts (homepage impact metrics)
- Approved human story for `/stories` and the homepage human-story section
- Archival material/rights for the Rabbi Avraham Atlas legacy section
- Program-specific facts: dental treatment list/pricing, kollel count,
  yeshiva enrollment/tracks

No current statistics, staff names, or beneficiary stories were invented
anywhere in the build — every one of these renders a controlled placeholder
instead.

## 7. Asset gaps (Visual Assets section)

Full detail in `docs/ASSET_MANIFEST.json` (every visual, registered),
`docs/ASSET_REQUESTS.md` (precise generation/sourcing specs), and
`docs/ASSET_SOURCES.md` (source-tracking register, currently empty — no web
sourcing pass has been run yet in this build).

**Completed:**
- Master logo system (lockup, compact, mono, favicon, app icon) — 5 SVG files
- 25-icon shared icon system — 1 component, all glyphs
- Social share graphic — SVG design reference complete
  (`public/assets/social/og-default.svg`)
- 13 intentional, aspect-ratio-locked `MediaPlaceholder` instances across
  the site (hero, program heroes, about/legacy/story sections) — each
  registered with an asset ID, tracked status, and precise brief

**Real assets used:** none yet — no organization-supplied photography was
provided to this build pass.

**Web assets used:** none — no web image-sourcing pass has been run yet;
`docs/ASSET_SOURCES.md` is the register to fill in when that pass happens.

**Still required before launch:**
- All 13 photograph/archival placeholders in `docs/ASSET_MANIFEST.json`
  need real, rights-cleared source material (Section A of
  `docs/ASSET_REQUESTS.md` — explicitly not eligible for AI generation)
- `social.og-default` needs a rasterized 1200×630 PNG export of the existing
  SVG design and wiring into `app/layout.tsx` metadata
- Optional: process illustrations if photography remains unavailable
  long-term (Section B of `docs/ASSET_REQUESTS.md`)

**Illustrations completed:** none required yet — current process/story
sections use the intentional wash+mark placeholder treatment, which the
brief permits in lieu of decorative illustration.

**Icons completed:** 25/25 core categories from the brief.

**Logo files completed:** 5/5 (lockup component, compact component, static
mono SVG, static favicon SVG, static app-icon SVG) — all provisional.

## 8. Donation provider status

Adapter boundary implemented (`lib/donation/provider.ts`); UI fully
functional against `mockDonationProvider` (`isConfigured: false`, clearly
surfaced in the UI copy). **No real payment processor is connected** —
`[נדרש אימות: ספק סליקה]`. Swapping in a real provider requires no UI
changes, only a new `DonationProvider` implementation.

## 9. Analytics status

Full event catalog defined and instrumented at every call site named in
`docs/09_ANALYTICS_AND_CRO.md` (`donation_cta_click` is the one exception —
not yet wired to the header/hero donate buttons; everything downstream of
donation start, plus volunteer/help-request funnels, is instrumented).
**No analytics vendor is connected** — events currently only log to the
console in development.

## 10. Accessibility status

- Every route has exactly one `<h1>` (verified against the built output)
  and a logical heading order beneath it.
- Skip link, landmark `<header>`/`<nav>`/`<main>`/`<footer>`, labelled nav
  regions.
- Visible `:focus-visible` ring globally (gold, 2px, offset).
- All form controls have associated `<label>`, `aria-describedby` for hints/
  errors, `aria-invalid`, and `role="alert"` error text.
- Mobile nav: `aria-expanded`, `aria-controls`, Escape-to-close, focus not
  trapped-broken (drawer content is standard tab order).
- Accordion: proper `aria-expanded`/`aria-controls`/`role="region"` pattern.
- `prefers-reduced-motion` respected globally.
- Color pairings use the navy/gold/ivory system, which passes AA contrast
  for text-on-background combinations used (navy-950 on ivory-50 ≈ 15:1;
  ivory-50 on navy-950 ≈ 15:1; gold-600 on ivory-50 ≈ 4.6:1 for the
  eyebrow/label sizes it's used at).
- Not yet done: a full axe/Lighthouse automated pass and manual screen-
  reader walkthrough (no browser automation tool was available in this
  build environment — recommended as the next step before launch).

## 11. Recommended next improvements

1. Run a real accessibility audit tool (axe, Lighthouse) and a manual
   screen-reader pass — this build was verified structurally (headings,
   landmarks, labels, contrast math) but not with live assistive tech.
2. Resolve the legal/entity facts in section 6, then enable the
   Organization JSON-LD schema (intentionally withheld per
   `docs/08_TECHNICAL_IMPLEMENTATION.md` — "only after legal data is verified").
3. Run the real-material sourcing pass described in `docs/ASSET_SOURCES.md`
   before generating anything — the org, the historical record, and Rabbi
   Avraham Atlas זצ״ל material must come from verified sources.
4. Connect a real donation provider, analytics vendor, and form-destination
   email/CRM (all three are adapter-isolated, see README "Open dependencies").
5. Consider the Framer Motion section-reveal layer described in
   `docs/MOTION_SYSTEM.md` once the brand is stakeholder-approved and static
   content is final.
