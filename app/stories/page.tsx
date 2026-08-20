import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { DIGNITY_QUOTE, WHO_WE_HELP } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "סיפורים",
  description: "עדויות מהפעילות של עזרת ישראל — מתפרסמות רק באישור מפורש.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="סיפורים"
        title="מאחורי כל ארוחה יש אדם"
        lede="ומאחורי כל אדם יש זכות לפרטיות. לכן סיפור מתפרסם כאן רק אחרי אישור מפורש של מי שהוא מספר עליו."
      />

      {/* העמדה */}
      <Section tone="canvas" width="narrow" className="text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <SectionDivider />
          <h2 className="font-display text-h2 text-balance">
            למה אין כאן עדיין סיפורים אישיים
          </h2>
          <p className="text-body text-(--color-text-secondary)">
            קל לכתוב סיפור מרגש. הרבה יותר קשה לוודא שהאדם שבו הוא עוסק רוצה שיקראו עליו, ושלא
            ניתן לזהות אותו לפי הפרטים. עד שנקבל אישור כזה, אנחנו בוחרים שלא לפרסם — זה חלק
            מאותו כבוד שכל המעטפת נבנתה סביבו.
          </p>
          <p className="text-body text-(--color-text-secondary)">
            עד אז, זה מה שאנחנו יכולים לספר: מי מגיע, ומה הוא מקבל.
          </p>
        </Reveal>
      </Section>

      {/* מי מגיע */}
      <Section tone="surface">
        <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <h2 className="font-display text-h2">{WHO_WE_HELP.headline}</h2>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_WE_HELP.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              index={i}
              className="border-b border-(--color-border-subtle) py-5"
            >
              <h3 className="font-heading text-h3">{item.label}</h3>
              <p className="mt-1 text-body-sm text-(--color-text-secondary)">{item.note}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 border-s-2 border-(--color-action-secondary) ps-6">
          <p className="max-w-2xl font-display text-h3 italic text-(--color-text-secondary)">
            {WHO_WE_HELP.note}
          </p>
        </Reveal>
      </Section>

      {/* ציטוט */}
      <Section tone="warm" width="narrow" className="text-center">
        <Reveal as="figure" className="m-0 flex flex-col items-center gap-6">
          <blockquote className="font-display text-h2 font-bold text-balance">
            {DIGNITY_QUOTE.text}
          </blockquote>
          <figcaption className="text-body-sm text-(--color-text-tertiary)">
            {DIGNITY_QUOTE.caption}
          </figcaption>
        </Reveal>
      </Section>

      <Section tone="canvas" width="default" className="text-center">
        <Reveal className="flex w-full flex-col gap-3 sm:mx-auto sm:w-auto sm:flex-row sm:justify-center">
          <Button href="/donate" variant="donate" blockOnMobile>
            לתרומה
          </Button>
          <Button href="/volunteer" variant="ghost" blockOnMobile>
            להתנדבות
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
