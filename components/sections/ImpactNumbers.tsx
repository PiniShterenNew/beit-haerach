import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { StatCounter } from "@/components/ui/StatCounter";
import { Placeholder } from "@/components/ui/Placeholder";
import { IMPACT } from "@/lib/content/site";

/**
 * מקטע 7 — ההשפעה במספרים.
 *
 * בניית אמון. לפי הבריף — נתון שלא אומת נשאר "—" ומסומן כ-placeholder,
 * ולא מוצג כמספר שנראה סמכותי. ארגון שמפרסם מספר לא מאומת מפסיד בדיוק את
 * מה שהמקטע הזה אמור לבנות.
 */
export function ImpactNumbers() {
  return (
    <Section tone="deep">
      <Reveal className="mb-10 flex max-w-2xl flex-col gap-3 md:mb-14">
        <Eyebrow tone="inverse">{IMPACT.eyebrow}</Eyebrow>
        <h2 className="font-display text-h1 text-white">{IMPACT.headline}</h2>
      </Reveal>

      <BentoGrid>
        {IMPACT.stats.map((stat, i) => (
          <BentoCell
            key={stat.label}
            span="quarter"
            fill="deep"
            index={i}
            className="border border-white/10 !bg-white/[0.04]"
          >
            <span className="font-display text-stat font-black text-(--color-gold-400)">
              {stat.pending && stat.value === "—" ? (
                <span aria-hidden="true">—</span>
              ) : (
                <StatCounter value={stat.value} />
              )}
            </span>
            <span className="mt-3 text-body-sm text-(--color-navy-200)">
              {stat.pending ? (
                <Placeholder needs={`impact-${i}`}>{stat.label}</Placeholder>
              ) : (
                stat.label
              )}
            </span>
          </BentoCell>
        ))}
      </BentoGrid>

      <Reveal className="mt-8">
        <p className="text-caption text-(--color-navy-300)">{IMPACT.note}</p>
      </Reveal>
    </Section>
  );
}
