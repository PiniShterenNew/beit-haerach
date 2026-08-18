# Asset Requests

Per `docs/06_ASSET_PLAN.md` and the AUTOPILOT_PROMPT sourcing hierarchy:
real material first, then documentary material with traceable rights, then
original generated *editorial* visuals, then custom SVG. Section A below is
explicitly **not** eligible for generation — it depicts real people,
real places, or real history, and must come from the organization or a
verified archive. Section B is safe to generate because it is abstract or
non-documentary by design.

## A — Real material required (do NOT generate)

### img.home.hero.01 — Homepage hero
- Page/section: `/` — Hero
- Objective: immediate, honest visual proof of the organization's activity
- Composition: wide/portrait-friendly crop of real kitchen, guesthouse, or
  community-space activity; people mid-action, not posed for camera
- Subjects: real staff/volunteers/space — no current beneficiaries shown in
  a way that identifies them without consent
- Style: documentary/editorial, natural light, medium contrast, restrained
  saturation
- Desktop: 4:5 (fits the split hero grid) · Mobile: 4:5
- Text safe zone: none required — image is beside copy, not behind it
- Must NOT appear: posed "everyone smiling at camera," pity framing, any
  fabricated scene
- Status: **[נדרש אימות]** — awaiting organization-supplied photography

### img.legacy.rabbi-atlas.01 — Legacy section
- Page/section: `/` — Legacy, and `/about`
- Objective: ground institutional continuity in a real historical figure
- Composition: portrait or documented moment of Rabbi Avraham Atlas זצ״ל
- Must NOT appear: any AI-generated likeness of a real, named individual —
  this is an absolute rule, not a style preference
- Status: **[נדרש אימות]** — requires verified archival source with
  provenance recorded in `docs/ASSET_SOURCES.md`

### img.program.guesthouse.hero / img.program.dental.hero /
### img.program.kollels.hero / img.program.yeshiva.hero
- Objective: give each program an honest, specific visual identity
- Composition: real activity specific to that program (cooking/packing for
  guesthouse; clinic interior for dental; study hall for kollels/yeshiva)
- Status: **[נדרש אימות]** for all four — no substitutes generated

### img.about.building.01, img.about.history.01, img.story.human.01,
### img.story.placeholder.01–03
- Same rule: real building photography, real archival material, and real
  (consent-approved) human moments only. No story runs until a specific
  narrative is approved for publication (see `app/stories/page.tsx`).

## B — Safe to generate (abstract / non-documentary)

### social.og-default — Open Graph share image (rasterized export)
- Page/section: global `<meta property="og:image">`
- Objective: a branded, text-forward share card — not a photograph
- Composition: navy background (`#0B1D3A`), master mark placed left-of-
  center per `public/assets/social/og-default.svg` (already built as the
  design reference), Hebrew wordmark "עזרת ישראל" set large and right-
  aligned, one-line program list beneath in gold/stone
- Style: flat graphic, no photography, no gradients beyond the existing
  brand navy
- Dimensions: exactly 1200×630px, PNG or JPG
- Text safe zone: keep all type within the center 1000×500px
- Must NOT appear: any photographic element, any fabricated statistic
- Action needed: export `public/assets/social/og-default.svg` to PNG (e.g.
  via a design tool or headless render) and wire it into
  `app/layout.tsx` → `metadata.openGraph.images`

### illustration.process.* (optional, future)
- Objective: if real process photography (cook → pack → deliver) remains
  unavailable long-term, a small set of line illustrations in the icon
  system's visual language (see `docs/PROGRAM_VISUAL_SYSTEM.md`) could
  replace the `MediaPlaceholder` washes on `ProcessStep` — not required for
  launch, current abstract placeholders are acceptable per
  `docs/06_ASSET_PLAN.md` "Placeholder Rule"
- Style: single-weight stroke, architectural curves consistent with
  `components/ui/icon.tsx`, no cartoon aesthetic, no human faces
