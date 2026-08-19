import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArchImage } from "@/components/ui/ArchImage";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { LEGACY, CTA } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "מורשת",
  description:
    "הרב אברהם אטלס זצ״ל והתפיסה שממשיכה להנחות את פעילות עזרת ישראל עד היום.",
};

export default function LegacyPage() {
  return (
    <>
      <PageHero
        eyebrow={LEGACY.eyebrow}
        title="הרב אברהם אטלס זצ״ל"
        lede="לא דף הנצחה. הדף הזה קיים כדי להסביר מאיפה הגיעה הגישה שלפיה הארגון פועל היום."
      />

      {/* הדמות */}
      <Section tone="gold" grain>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:max-w-sm">
            <ArchImage
              ratio="portrait"
              tint="var(--color-gold-100)"
              shape="var(--color-gold-300)"
              ink="var(--color-gold-800)"
              label="תמונה — הרב אברהם אטלס זצ״ל"
            />
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-5">
            <h2 className="font-display text-h2">{LEGACY.headline}</h2>
            {LEGACY.body.map((paragraph) => (
              <p key={paragraph} className="text-body text-(--color-text-secondary)">
                {paragraph}
              </p>
            ))}
            <p className="text-body text-(--color-text-secondary)">
              פרטים ביוגרפיים מלאים, תאריכים ומקורות{" "}
              <Placeholder needs="biography">יתווספו עם אימותם</Placeholder> — לא נפרסם כאן פרט
              שלא אומת מול המשפחה או מול מסמכי הארגון.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* העיקרון */}
      <Section tone="canvas" width="narrow" className="text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <SectionDivider tone="gold" />
          <Eyebrow>העיקרון</Eyebrow>
          <p className="font-display text-h2 font-bold text-balance">
            קודם רואים את האדם. אחר כך בונים את המענה.
          </p>
          <p className="max-w-xl text-body text-(--color-text-secondary)">
            זו הסיבה שהארגון לא התחיל מתוכנית ולא מתקציב, אלא מהליכה לבדוק מה קורה אצל אנשים.
            כל זרוע שנוספה מאז נוספה כי מישהו ראה צורך בעיניים, לא כי מישהו זיהה הזדמנות.
          </p>
        </Reveal>
      </Section>

      {/* המעבר להווה */}
      <Section tone="deep" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-display text-h1 font-black text-white text-balance">
            {LEGACY.transition}
          </h2>
          <p className="max-w-lg text-body-lg text-(--color-navy-100)">
            המטבח, המרפאות ובית המדרש פועלים היום מאותה הנחה בדיוק.
          </p>
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:justify-center">
            <Button href="/programs" variant="donate" blockOnMobile>
              לפעילות של היום
            </Button>
            <Button href="/donate" variant="ghostInverse" blockOnMobile>
              {CTA.donate}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
