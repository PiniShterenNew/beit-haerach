import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { Stat } from "@/components/ui/Stat";
import { IMPACT } from "@/lib/content/site";

/**
 * מקטע 7 — ההשפעה במספרים.
 *
 * בניית אמון. נתון שלא אומת נשאר מסומן, ונתון שטרם פורסם מוצג כמצב ולא
 * כמספר — ארגון שמפרסם מספר לא מאומת מפסיד בדיוק את מה שהמקטע בונה.
 *
 * במובייל הכותרת והנתונים ממורכזים: זהו אזור ויזואלי שסורקים, לא פסקה
 * שקוראים משמאל לימין לאורך שורות.
 */
export function ImpactNumbers() {
  return (
    <Section tone="deep">
      <Reveal className="mb-10 flex flex-col gap-3 text-center md:mb-14 md:max-w-2xl md:text-start">
        <Eyebrow tone="inverse">{IMPACT.eyebrow}</Eyebrow>
        <h2 className="font-display text-h1 text-white text-balance">{IMPACT.headline}</h2>
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
            <Stat stat={stat} tone="dark" needs={`impact-${i}`} />
          </BentoCell>
        ))}
      </BentoGrid>

      <Reveal className="mt-8">
        <p className="text-caption text-(--color-navy-300) text-center md:text-start">{IMPACT.note}</p>
      </Reveal>
    </Section>
  );
}
