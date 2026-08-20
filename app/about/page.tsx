import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArchImage } from "@/components/ui/ArchImage";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Icon, type IconName } from "@/components/ui/icon";
import { BRANCHES, LEGACY, MISSION, CTA } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "הסיפור של עזרת ישראל — מעטפת קהילתית שנבנתה כדי לתפוס אדם ברגע שהוא צריך עזרה.",
};

/** ציר הזמן — שלבים, בלי תאריכים שלא אומתו. */
const TIMELINE = [
  {
    marker: "ההתחלה",
    title: "יוזמה אישית אחת",
    body: "הפעילות מתחילה מהבנה פשוטה: יש אנשים שאין מי שידאג להם, ואי אפשר להסתפק בלהפנות אותם הלאה.",
  },
  {
    marker: "ההתרחבות",
    title: "מהמטבח החוצה",
    body: "מה שהתחיל בבישול והפצה של ארוחות הופך למסגרת קבועה, שמזהה שרעב הוא רק אחד מהצרכים.",
  },
  {
    marker: "המעטפת",
    title: "ארבע זרועות",
    body: "בית הארחה, מרפאות שיניים, תורה וחינוך ופעילות קהילתית — כולן תחת קורת גג אחת.",
  },
  {
    marker: "היום",
    title: "פעילות רציפה",
    body: "הארגון פועל בחיפה כמעט בכל ימות השנה, ומשלב צוות ומתנדבים בכל אחת מהזרועות.",
  },
];

const VALUES = [
  { icon: "home", title: "כבוד לפני רחמים", body: "אדם שמבקש עזרה לא מוותר על כבודו בדרך. אין תורים משפילים ואין תיוג." },
  { icon: "calendar", title: "המשכיות, לא מבצע", body: "הבית פתוח כל השנה — גם כשאין קמפיין וגם כשאין מי שמצלם." },
  { icon: "community", title: "האדם השלם", body: "מי שרעב זקוק גם לרופא, וגם למקום שייך. לכן הזרועות פועלות יחד." },
  { icon: "transparency", title: "פועלים בגלוי", body: "מסמכי העמותה ואופן השימוש בתרומות פתוחים לעיון." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="אודות"
        title="ארגון שנבנה סביב שאלה אחת"
        lede="לא ׳כמה מגיע לאדם הזה׳, אלא ׳מה הוא צריך עכשיו׳. כל מה שקיים כאן נגזר מהשאלה הזאת."
      />

      {/* הסיפור */}
      <Section tone="canvas">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>הסיפור</Eyebrow>
            <h2 className="font-display text-h2">מעטפת, לא רשימת שירותים</h2>
            <p className="text-body text-(--color-text-secondary)">
              עזרת ישראל היא מרכז קהילתי שפועל בחיפה. הוא מבשל, הוא מטפל, הוא מלמד והוא מלווה —
              ארבע זרועות שכל אחת עומדת בזכות עצמה, ופועלות מתוך הבנה אחת: אדם רעב הוא גם אדם
              שכואבות לו השיניים, וגם אדם שצריך מקום להשתייך אליו.
            </p>
            <p className="text-body text-(--color-text-secondary)">
              אנחנו לא מנהלים תיקים ולא מודדים זכאות. אנחנו מנהלים בית — ובית לא שואל אדם למה
              הוא רעב.
            </p>
            <p className="mt-2 border-s-2 border-(--color-action-secondary) ps-5 font-display text-h3 font-bold">
              {MISSION}
            </p>
          </Reveal>

          <Reveal index={1} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <ArchImage
              tint="var(--color-stone-100)"
              shape="var(--color-stone-300)"
              ink="var(--color-navy-700)"
              label="תמונה — מבנה הפעילות בחיפה"
            />
          </Reveal>
        </div>
      </Section>

      {/* ציר זמן */}
      <Section tone="surface">
        <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <Eyebrow>ציר הזמן</Eyebrow>
          <h2 className="font-display text-h2">איך המעטפת נבנתה</h2>
          <p className="text-body text-(--color-text-secondary)">
            השלבים מתוארים לפי סדרם. תאריכים מדויקים{" "}
            <Placeholder needs="timeline-dates">יתווספו עם אימותם במסמכי הארגון</Placeholder>.
          </p>
        </Reveal>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((entry, i) => (
            <Reveal
              as="li"
              key={entry.title}
              index={i}
              className="flex flex-col gap-2 border-t-2 border-(--color-action-secondary) pt-5"
            >
              <span className="text-overline font-body font-medium text-(--color-text-accent)">
                {entry.marker}
              </span>
              <h3 className="font-heading text-h3">{entry.title}</h3>
              <p className="text-body-sm text-(--color-text-secondary)">{entry.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ערכים */}
      <Section tone="warm">
        <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <Eyebrow>ערכים</Eyebrow>
          <h2 className="font-display text-h2">מה שמנחה כל החלטה</h2>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal
              as="li"
              key={value.title}
              index={i}
              className="flex items-start gap-4 border-b border-(--color-border-default) py-6"
            >
              <span
                className="arch-badge shrink-0 bg-(--color-surface) text-(--color-text-accent)"
                aria-hidden="true"
              >
                <Icon name={value.icon as IconName} className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-heading text-h3">{value.title}</h3>
                <p className="mt-1 text-body-sm text-(--color-text-secondary)">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* הנהלה — בהשלמה */}
      <Section tone="canvas" width="default">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>הנהלה וצוות</Eyebrow>
          <h2 className="font-display text-h2">מי עומד מאחורי הפעילות</h2>
          <p className="max-w-2xl text-body text-(--color-text-secondary)">
            שמות חברי ההנהלה, בעלי התפקידים ורואה החשבון{" "}
            <Placeholder needs="board-members">יפורסמו כאן עם אישורם</Placeholder>. אנחנו בוחרים
            לא לפרסם שמות לפני שקיבלנו אישור מפורש מכל אחד מהם.
          </p>
          <div className="pt-2">
            <Button href="/transparency" variant="ghost" blockOnMobile>
              מסמכי העמותה והאישורים
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* מורשת — קישור */}
      <Section tone="gold" grain width="default">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{LEGACY.eyebrow}</Eyebrow>
          <h2 className="font-display text-h2">{LEGACY.headline}</h2>
          <p className="max-w-2xl text-body text-(--color-text-secondary)">{LEGACY.body[0]}</p>
          <div className="pt-1">
            <Button href="/legacy" variant="ghost" blockOnMobile>
              לעמוד המורשת
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* זרועות */}
      <Section tone="deep" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-h2 text-white">ארבע הזרועות של המעטפת</h2>
          <ul className="flex flex-wrap justify-center gap-2 pt-1">
            {BRANCHES.map((branch) => (
              <li key={branch.id}>
                <a
                  href={branch.href}
                  className="inline-block rounded-pill border border-white/25 px-4 py-2 text-body-sm text-(--color-navy-100) transition-colors hover:border-white hover:text-white"
                >
                  {branch.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Button href="/donate" variant="donate" blockOnMobile>
              {CTA.donate}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
