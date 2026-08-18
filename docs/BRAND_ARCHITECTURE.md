# Brand Architecture — מרכז קהילתי עזרת ישראל

## Status
Provisional master brand direction, selected from the supplied reference sheet
(arch / open book / human-growth symbol). Locked in as the working system for
implementation; remains subject to stakeholder approval before public launch.

## Entity model
**Master brand:** מרכז קהילתי עזרת ישראל (Ezrat Yisrael Community Center),
Haifa — the umbrella organization.

**Programs (branded activities under the umbrella):**
| Program | Hebrew | Domain | Accent |
|---|---|---|---|
| Guesthouse | בית הארחה | Food / meals / dignity | Sage green |
| Dental | מרפאות שיניים | Healthcare | Calm blue |
| Kollels | כוללים | Torah study | Gold / ochre |
| Yeshiva | ישיבה | Education | Deep sage |

Future programs derive their accent from the same restrained palette rather
than introducing new hues.

## Program logic
- One shared master symbol (arch + open book + human/growth form) across the
  entire system — never a distinct logo per program.
- Differentiation happens only through: secondary/accent color, a program
  label set in the shared wordmark type, program-specific iconography drawn
  from the same stroke system, and program-specific imagery/content.
- No food, dental, or book-only symbolism was reintroduced into the master
  mark — those appear only as program-level icons (see
  `components/ui/icon.tsx`: `dental`, `torah`, `graduation`, `meal`).

## Implementation
- Master mark: `components/brand/mark.tsx` (React) and static exports at
  `public/favicon.svg`, `public/assets/brand/app-icon.svg`,
  `public/assets/brand/mark-mono.svg`.
- Full lockup (mark + Hebrew wordmark + optional program label):
  `components/brand/logo.tsx`.
- Program accent tokens: `--color-{sage,clinic,kollel,yeshiva}-{100..700}` in
  `app/globals.css`.

## Open items
- [נדרש אימות] Final legal/public-facing name for the umbrella brand
  (see docs source-of-truth: possible connection to "מרכז קהילתי עזרת ישראל"
  vs. a distinct legal entity for בית הארחה).
- [נדרש אימות] Whether program names above are the organization's actual,
  current public names for these activities.
- Stakeholder sign-off on the master symbol before any print/signage use.
