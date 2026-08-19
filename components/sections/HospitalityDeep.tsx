import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArchImage } from "@/components/ui/ArchImage";
import { StatCounter } from "@/components/ui/StatCounter";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { HOSPITALITY, BRANCHES } from "@/lib/content/site";

/**
 * מקטע 4 — בית הארחה לעומק.
 *
 * המקטע היחיד בעמוד שנכנס לתוך זרוע אחת. אחרי ה-bento, שהראה רוחב, זה
 * המקטע שמראה עומק — כדי שהאתר לא יישאר ברמת הכותרות.
 * קומפוזיציה: editorial split, ואז שורת סטטיסטיקות קטנה מתחת.
 */
export function HospitalityDeep() {
  const branch = BRANCHES[0];

  return (
    <Section tone="surface">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* טקסט */}
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{HOSPITALITY.eyebrow}</Eyebrow>
          <h2 className="font-display text-h1">{HOSPITALITY.headline}</h2>
          {HOSPITALITY.body.map((paragraph) => (
            <p key={paragraph} className="max-w-prose text-body text-(--color-text-secondary)">
              {paragraph}
            </p>
          ))}
          <div className="pt-2">
            <Button href={branch.href} variant="ghost" blockOnMobile>
              על בית הארחה בהרחבה
            </Button>
          </div>
        </Reveal>

        {/* תמונה */}
        <Reveal index={1} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <ArchImage
            tint="var(--color-gold-100)"
            shape="var(--color-gold-200)"
            ink="var(--color-gold-800)"
            label="תמונה — המטבח בזמן בישול ואריזה"
          />
        </Reveal>
      </div>

      {/* סטטיסטיקות */}
      <div className="mt-14 grid gap-4 border-t border-(--color-border-subtle) pt-10 sm:grid-cols-3 md:mt-18">
        {HOSPITALITY.stats.map((stat, i) => (
          <Reveal key={stat.label} index={i} className="flex flex-col gap-1">
            <span className="font-display text-h1 font-black text-(--color-branch-hospitality)">
              <StatCounter value={stat.value} />
            </span>
            <span className="text-body-sm text-(--color-text-secondary)">
              {stat.pending ? (
                <Placeholder needs={`hospitality-${i}`}>{stat.label}</Placeholder>
              ) : (
                stat.label
              )}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
