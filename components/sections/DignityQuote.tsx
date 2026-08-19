import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { DIGNITY_QUOTE } from "@/lib/content/site";

/**
 * מקטע 5 — ציטוט הכבוד.
 *
 * הרגע הרגשי של העמוד, וגם ההוכחה לעיקרון "כבוד לפני רחמים": רשימת המנות
 * עושה את העבודה שהצהרה על ערכים לא הייתה עושה. מקטע צר, ממורכז, בלי CTA —
 * נקודת נשימה בין הפרקים.
 */
export function DignityQuote() {
  return (
    <Section tone="warm" width="narrow" className="text-center">
      <Reveal as="figure" className="m-0 flex flex-col items-center gap-8">
        <SectionDivider tone="gold" />

        <blockquote className="font-display text-h2 font-bold text-balance">
          {DIGNITY_QUOTE.text}
        </blockquote>

        <figcaption className="text-body-sm text-(--color-text-tertiary)">
          {DIGNITY_QUOTE.caption}
        </figcaption>
      </Reveal>
    </Section>
  );
}
