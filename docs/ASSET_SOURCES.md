# Asset Sources

Tracks every candidate source considered for real/documentary imagery, per
the AUTOPILOT_PROMPT sourcing hierarchy. No web search for historical
material has been run yet in this build pass — this file is the register to
fill in as sourcing happens, not a claim that sourcing is complete.

## Status
No candidate sources logged yet. `[נדרש אימות]` for all rows below.

| Candidate source | Subject | Rights/provenance | Decision | Notes |
|---|---|---|---|---|
| — | — | — | — | Web sourcing for real historical/public material (organization, בית הארחה, Rabbi Avraham Atlas זצ״ל, physical location, historical activity, public reports) has not yet been performed for this build pass. |

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
