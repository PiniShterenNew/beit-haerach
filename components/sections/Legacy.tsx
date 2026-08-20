import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArchImage } from "@/components/ui/ArchImage";
import { LEGACY } from "@/lib/content/site";

/**
 * מקטע 8 — מורשת.
 *
 * לא דף הנצחה. תפקיד המקטע הוא להסביר מאיפה בא ה-DNA של הפעילות של היום,
 * ולכן הוא נסגר במשפט מעבר שמחזיר להווה. משטח זהב רך + גרעין נייר — הרובד
 * החם היחיד בעמוד שמשתמש בטקסטורה בעוצמה מלאה.
 */
export function Legacy() {
  return (
    <Section tone="gold" grain>
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        {/* תמונה בקשת */}
        <Reveal className="mx-auto w-full max-w-xs lg:max-w-sm">
          <ArchImage
            src="/assets/real/rabbi-avraham-atlas.webp"
            alt="הרב אברהם אטלס זצ״ל"
            ratio="portrait"
          />
        </Reveal>

        {/* טקסט */}
        <Reveal index={1} className="flex flex-col gap-5">
          <Eyebrow>{LEGACY.eyebrow}</Eyebrow>
          <h2 className="font-display text-h1">{LEGACY.headline}</h2>

          {LEGACY.body.map((paragraph) => (
            <p key={paragraph} className="max-w-prose text-body text-(--color-text-secondary)">
              {paragraph}
            </p>
          ))}

          <p className="mt-3 border-s-2 border-(--color-action-secondary) ps-5 font-display text-h3 font-bold">
            {LEGACY.transition}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
