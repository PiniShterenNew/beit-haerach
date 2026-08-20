# Asset Sources

Tracks every candidate source considered for real/documentary imagery, per
the AUTOPILOT_PROMPT sourcing hierarchy. No web search for historical
material has been run yet in this build pass — this file is the register to
fill in as sourcing happens, not a claim that sourcing is complete.

## Status
One resolved row below (`img.legacy.rabbi-atlas.01`); everything else still
`[נדרש אימות]`.

| Candidate source | Subject | Rights/provenance | Decision | Notes |
|---|---|---|---|---|
| Supplied directly by project stakeholder via chat upload, 2026-08-20 | Rabbi Avraham Atlas זצ״ל (portrait) | Supplied by the org's own representative in this session; no third-party/stock source involved | **use** | Cropped to the subject and converted to WebP; stored at `public/assets/real/rabbi-avraham-atlas.webp`. Wired into `components/sections/Legacy.tsx` and `app/legacy/page.tsx`. Biographical text (dates, roles) was **not** added — see `ASSET_REQUESTS.md` note. |
| — | — | — | — | Web sourcing for the rest of the real historical/public material (organization, בית הארחה, physical location, historical activity, public reports) has not yet been performed for this build pass. |

## Process for future sourcing passes
1. Search for public material tied to the organization, "בית הארחה", Rabbi
   Avraham Atlas זצ״ל, the Haifa location, and any public reports/
   publications.
2. For each candidate, record: source URL/institution, description, usage
   rights status, and a decision (`use` / `rejected — unclear rights` /
   `rejected — not verifiably related`).
3. Never move an image into production use (`public/assets/real/`) until
   its row here shows a `use` decision with recorded rights.
4. If no safely-usable real image exists for a given manifest entry, it
   stays on the intentional `MediaPlaceholder` treatment — never swapped
   for stock photography or a generated documentary-style substitute.
