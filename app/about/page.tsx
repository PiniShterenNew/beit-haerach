import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Quote } from "@/components/sections/quote";
import { TrustBadge } from "@/components/sections/trust-badge";
import { Button } from "@/components/ui/button";
import { PROGRAMS, SITE } from "@/lib/content/site";
import { revealStyle } from "@/lib/motion";

export const metadata: Metadata = {
  title: "מי אנחנו",
  description: "הסיפור, ההיסטוריה והערכים של מרכז קהילתי עזרת ישראל בחיפה.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          level="h1"
          eyebrow="מי אנחנו"
          title="מרכז קהילתי שנולד מתוך מחויבות אישית אחת"
          lede="עזרת ישראל הוא מרכז קהילתי הפועל בחיפה, וממשיך מורשת של דאגה אנושית שהחלה עוד בפעילותו של הרב אברהם אטלס זצ״ל."
        />
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal-item flex flex-col gap-5 text-base leading-relaxed text-(--color-text-secondary)" style={{ ...revealStyle(0)}}>
            <p>
              הפעילות שבבסיס המרכז החלה מתוך הבנה פשוטה: שיש אנשים שאין להם מי שידאג להם — לא
              לארוחה, לא לטיפול רפואי, ולא למקום קבוע ללמוד בו תורה. במקום להפנות אותם הלאה,
              הוקמה מסגרת שמנסה לתת מענה בפועל.
            </p>
            <p>
              היום הפעילות התרחבה לכדי מספר תוכניות עצמאיות — בית הארחה, מרפאות שיניים, כוללי
              לימוד וישיבה — הפועלות כל אחת בתחומה, אך מתוך אותה תפיסת יסוד: אין להשאיר אדם לבד
              כשיש עוד מישהו שיכול לדאוג לו.
            </p>
            <p>{SITE.legalName} · {SITE.registrationNumber}</p>
          </div>
          <div className="reveal-item" style={{ ...revealStyle(1)}}>
            <MediaPlaceholder assetId="img.about.history.01" ratio="4 / 3" wash="stone" label="תמונה היסטורית מהפעילות (בהמתנה לחומר ארכיוני מאומת)" />
          </div>
        </div>
      </Section>

      <Section tone="inverse">
        <div className="mx-auto max-w-2xl">
          <Quote
            text="לא שאלנו קודם כמה מגיע לאדם לקבל — שאלנו מה הוא צריך עכשיו."
            attribution="מתוך מסורת הפעילות שהונחלה על ידי הרב אברהם אטלס זצ״ל"
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="ערכים" title="מה שמנחה אותנו בכל תוכנית" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <TrustBadge index={0} icon="home" title="כבוד אנושי" description="כל פנייה נענית מתוך כבוד, ולא מתוך רחמים או תיוג." />
          <TrustBadge index={1} icon="calendar" title="המשכיות" description="פעילות קבועה, לא נקודתית — כל השנה, כולל שבתות וחגים." />
          <TrustBadge index={2} icon="community" title="קהילה" description="מענה שמחבר בין תחומים — מזון, בריאות, תורה וחינוך." />
          <TrustBadge index={3} icon="transparency" title="שקיפות" description="דיווח פתוח על הפעילות ועל האופן שבו נעשה שימוש בתרומות." />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader eyebrow="התוכניות שלנו" title="ארבע תוכניות תחת קורת גג אחת" />
        <ul className="grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <li key={p.id} className="reveal-item flex items-start justify-between gap-4 border-b border-(--color-border-subtle) pb-6" style={{ ...revealStyle(i)}}>
              <div>
                <h3 className="font-display text-xl text-(--color-text-primary)">{p.name}</h3>
                <p className="mt-1 text-sm text-(--color-text-secondary)">{p.tagline}</p>
              </div>
              <Button href={p.href} variant="ghost" size="md">לפרטים</Button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
