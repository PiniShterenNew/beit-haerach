# מרכז קהילתי עזרת ישראל — website

Production-grade Hebrew RTL nonprofit website for מרכז קהילתי עזרת ישראל
(Haifa), covering the umbrella organization and its four programs: בית
הארחה, מרפאות שיניים, כוללים, ישיבה.

See `BUILD_REPORT.md` for full status (what's built, open factual
placeholders, asset gaps, donation/analytics status, and recommended next
steps), and `/docs` for the product/brand/design/technical source documents
this build follows.

## Stack
Next.js (App Router, TypeScript strict) · Tailwind CSS v4 (CSS-variable
tokens) · `next/font` (Frank Ruhl Libre + Assistant, Hebrew subsets) · Zod
for form validation. No CMS, no payment provider, no analytics vendor is
wired yet — see "Open dependencies" below.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (also runs the TypeScript check)
npm run lint    # ESLint
npm start       # serve the production build
```

## Project structure

```
app/                 routes (App Router), one folder per page in the sitemap
  api/                route handlers for contact / volunteer / get-help forms
components/
  brand/              logo + master symbol (SVG)
  ui/                 design-system primitives (Button, Field, Icon, Section, ...)
  layout/             header, mobile nav, footer, skip link
  sections/           page-composition blocks (ProgramCard, ProcessStep, ...)
  donation/           donation amount selector + module (provider-agnostic UI)
  forms/              contact / volunteer / get-help forms
lib/
  content/site.ts     site config, nav, program registry — single source of truth
  donation/provider.ts  donation provider adapter boundary (see below)
  validation/forms.ts   zod schemas shared by client forms + API routes
  analytics/events.ts   analytics event boundary (see below)
docs/                 brand, design system, and product docs (source of truth)
public/assets/        brand SVGs, icons, and image-placeholder tracking
```

## Open dependencies (must be resolved before real launch)

1. **Legal/entity facts** — see `docs/transparency` content and
   `lib/content/site.ts` (`SITE.legalName`, `registrationNumber`,
   `section46`, `phone`, `whatsapp`, `email`, `address`) — all currently
   `[נדרש אימות]`.
2. **Donation provider** — `lib/donation/provider.ts` exports a typed
   `DonationProvider` interface and a `mockDonationProvider` that never
   charges anything. Implement a real adapter and swap it in
   `getDonationProvider()`; do not couple the UI to a vendor SDK directly.
3. **Analytics vendor** — `lib/analytics/events.ts` defines the full event
   catalog (`donation_started`, `volunteer_completed`, ...) but only logs to
   the console in development. Wire a real provider inside `trackEvent()`.
4. **Form destinations** — `app/api/{contact,volunteer,get-help}/route.ts`
   validate with zod and currently only `console.info` the submission.
   Connect a real destination (email/CRM) before launch.
5. **Real imagery** — every photo on the site is an intentional, aspect-
   ratio-locked `MediaPlaceholder`, tracked in `docs/ASSET_MANIFEST.json`
   with exact specs in `docs/ASSET_REQUESTS.md`.

None of the above block development or a preview deploy — the UI, forms,
and donation flow are fully functional end-to-end against the mock/stub
implementations.
