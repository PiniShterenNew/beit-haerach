# Program Visual System

## Rule
One master symbol, controlled differentiation. See
`docs/BRAND_ARCHITECTURE.md` for the full rationale — this file documents
the concrete implementation.

## Differentiation mechanism
| Layer | Shared | Program-specific |
|---|---|---|
| Symbol | `<Mark />` — identical geometry everywhere | none |
| Wordmark type | Frank Ruhl Libre / Assistant | program label line under the lockup (`<Logo programLabel />`) |
| Color | Navy + gold (master) | one accent scale per program (`--color-{sage,clinic,kollel,yeshiva}-*`) |
| Icons | Shared 24×24 stroke system (`components/ui/icon.tsx`) | one representative glyph per program (`meal`, `dental`, `torah`, `graduation`) |
| Layout | Shared `Section`/`ProgramPageTemplate` | accent-colored eyebrow chip, highlight icons, CTA button tinted to the program accent |

## Program → accent → icon map
```
guesthouse → sage    → meal
dental     → clinic  → dental
kollels    → kollel  → torah
yeshiva    → yeshiva → graduation
```
Defined once in `lib/content/site.ts` (`PROGRAMS`) and
`components/sections/program-card.tsx` (`iconByProgram`) — adding a future
program means adding one entry to each, not a new visual system.

## Imagery
Each program page places its hero `MediaPlaceholder` on the matching accent
wash (`wash={program.colorVar}` in `MediaPlaceholder`) so the placeholder
itself already reads as "this program" before real photography exists.
Real photography, when sourced, should keep this same warm/editorial
treatment (see `docs/06_ASSET_PLAN.md` → Image Direction) regardless of
program, so the accent color — not the photographic style — carries the
differentiation.
