import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProgramCard } from "@/components/sections/program-card";
import { ProcessStep } from "@/components/sections/process-step";
import { TrustBadge } from "@/components/sections/trust-badge";
import { ImpactMetric } from "@/components/sections/impact-metric";
import { Quote } from "@/components/sections/quote";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PROGRAMS, CONVERSION } from "@/lib/content/site";
import { revealStyle } from "@/lib/motion";

export const metadata: Metadata = {
  title: "עמוד הבית",
  description:
    "מרכז קהילתי עזרת ישראל בחיפה — בית הארחה, מרפאות שיניים, כוללים וישיבה. פעילות קהילתית רציפה מתוך כבוד אדם והמשכיות.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Proof / trust strip */}
      <Section tone="muted" className="py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <TrustBadge index={0} icon="calendar" title="פעילות רציפה מזה עשרות שנים" description="המשך ישיר למורשתו של הרב אברהם אטלס זצ״ל." />
          <TrustBadge index={1} icon="community" title="ארבע תוכניות, מטרה אחת" description="בית הארחה, מרפאות שיניים, כוללים וישיבה — כולם תחת אותה קורת גג קהילתית." />
          <TrustBadge index={2} icon="transparency" title="שקיפות כערך יסוד" description="מסמכי העמותה והדיווחים הציבוריים זמינים בעמוד השקיפות." />
        </div>
      </Section>

      {/* What the organization is */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal-item flex flex-col gap-5" style={revealStyle(0)}>
            <span className="text-xs tracking-[0.16em] text-(--color-gold-600)">מי אנחנו</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">
              מרכז קהילתי אחד, שדואג לאדם בכמה מובנים בו זמנית
            </h2>
            <p className="text-base leading-relaxed text-(--color-text-secondary)">
              עזרת ישראל אינה עמותת מזון בלבד. זהו מרכז קהילתי שמתוך אותה תפיסה — שאין להשאיר אדם
              לבד כשיש עוד מישהו שיכול לדאוג לו — מפעיל בית הארחה שמבשל ומחלק ארוחות, מרפאות שיניים
              נגישות, כוללי לימוד יומיים וישיבה. כל תוכנית עומדת בפני עצמה, וכולן חלק מאותה מערכת
              אחת של אחריות קהילתית.
            </p>
            <Button href="/about" variant="secondary" className="self-start">
              עוד על הסיפור וההיסטוריה שלנו
            </Button>
          </div>
          <div className="reveal-item" style={revealStyle(1)}>
            <MediaPlaceholder assetId="img.about.building.01" ratio="4 / 3" wash="stone" label="מבנה המרכז הקהילתי בחיפה (בהמתנה לתמונה אמיתית)" />
          </div>
        </div>
      </Section>

      {/* Program ecosystem */}
      <Section tone="muted">
        <SectionHeader eyebrow="התוכניות שלנו" title="ארבע דרכים לדאוג לאותו אדם" lede="כל תוכנית פועלת בתחום משלה, מתוך אותה מחויבות לכבוד אנושי והמשכיות." />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(2n)]:lg:mt-12">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </Section>

      {/* How it works — guesthouse process */}
      <Section>
        <SectionHeader eyebrow="בית הארחה · איך זה עובד" title="מהמטבח עד השולחן" lede="תהליך יומיומי וקבוע, שחוזר על עצמו כל יום — ובערבי שבת וחג בעומס גדול הרבה יותר." />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ProcessStep index={1} icon="cooking" title="מבשלים" description="מטבח פעיל מכין ארוחות חמות מדי יום, כולל היערכות מוגברת לקראת שבת וחג." />
          <ProcessStep index={2} icon="package" title="אורזים" description="מתנדבים אורזים את הארוחות במנות מוכנות למשלוח ולאיסוף." />
          <ProcessStep index={3} icon="delivery" title="מחלקים" description="חלוקה ומשלוחים למי שזקוק, לצד אפשרות הגעה ואכילה במקום." />
          <ProcessStep index={4} icon="meal" title="ארוחה וכבוד" description="לא רק אוכל — שולחן, נוכחות אנושית, והרגשה שיש מי שדואג." />
        </div>
      </Section>

      {/* Human story */}
      <Section tone="muted">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal-item" style={revealStyle(0)}>
            <MediaPlaceholder assetId="img.story.human.01" ratio="4 / 3" wash="sage" label="רגע אנושי מהפעילות היומיומית (בהמתנה לתמונה אמיתית)" />
          </div>
          <div className="reveal-item flex flex-col gap-6" style={revealStyle(1)}>
            <Quote text="לפעמים כל מה שחסר לאדם זה שולחן אחד שמחכה לו, ומישהו שישאל אותו איך הולך." />
            <p className="text-sm leading-relaxed text-(--color-text-secondary)">
              [נדרש אימות: סיפור אישי מאושר לפרסום]. עד לאישור סיפור ספציפי, אנו בוחרים שלא לפרסם
              תיאור המזוהה עם אדם קונקרטי, מתוך שמירה על כבודו וסודיותו.
            </p>
            <Link href="/stories" className="group inline-flex items-center gap-1.5 text-sm font-medium text-(--color-navy-950)">
              לעוד סיפורים ועדויות
              <Icon name="arrow" className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Legacy */}
      <Section tone="inverse">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal-item flex flex-col gap-5" style={revealStyle(0)}>
            <span className="text-xs tracking-[0.16em] text-(--color-gold-400)">המורשת שלנו</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">הרב אברהם אטלס זצ״ל</h2>
            <p className="text-base leading-relaxed text-(--color-text-inverse-muted)">
              הפעילות שממשיכה כיום התחילה מתוך יוזמה אישית ומחויבות עמוקה לדאוג לכל מי שזקוק —
              ללא הבדל, ללא תיוג, ומתוך כבוד. הרוח הזו ממשיכה להנחות את כל תוכניות המרכז הקהילתי
              עד היום.
            </p>
          </div>
          <div className="reveal-item" style={revealStyle(1)}>
            <MediaPlaceholder assetId="img.legacy.rabbi-atlas.01" ratio="4 / 3" wash="navy" label="תמונה היסטורית — הרב אברהם אטלס זצ״ל (בהמתנה לחומר ארכיוני מאומת)" />
          </div>
        </div>
      </Section>

      {/* Impact / donation lead-in */}
      <Section>
        <SectionHeader eyebrow="השפעה" title="מה שהתרומה שלכם מאפשרת" lede="[נדרש אימות: נתוני היקף פעילות עדכניים לפני פרסום כמדד רשמי]" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <ImpactMetric index={0} value="[נדרש אימות]" label="ארוחות בשנה" />
          <ImpactMetric index={1} value="[נדרש אימות]" label="משפחות מטופלות" />
          <ImpactMetric index={2} value="[נדרש אימות]" label="מתנדבים פעילים" />
          <ImpactMetric index={3} value="+40" label="שנות פעילות רציפה" />
        </div>
      </Section>

      {/* Trust */}
      <Section tone="muted">
        <SectionHeader eyebrow="שקיפות ואמון" title="פועלים בגלוי, כמו שראוי לארגון ציבורי" />
        <div className="grid gap-8 sm:grid-cols-3">
          <TrustBadge index={0} icon="document" title="מסמכי עמותה" description="מסמכי רישום ואישורים — יעודכנו בעמוד השקיפות עם אימותם." />
          <TrustBadge index={1} icon="certificate" title="ניהול תקין" description="[נדרש אימות: סטטוס אישור ניהול תקין נוכחי]" />
          <TrustBadge index={2} icon="accessibility" title="נגישות" description="האתר נבנה בהתאם לעקרונות נגישות WCAG 2.2 AA." />
        </div>
        <div className="mt-10">
          <Button href="/transparency" variant="secondary">מסמכי שקיפות מלאים</Button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="inverse" className="text-center">
        <div className="reveal-item mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">{CONVERSION.donateSecondary}</h2>
          <p className="text-(--color-text-inverse-muted)">
            כל תרומה, גדולה כקטנה, ממשיכה את הפעילות היומיומית של המרכז הקהילתי — בכל התוכניות.
          </p>
          <Button href="/donate" size="lg" variant="accent">
            {CONVERSION.donatePrimary}
          </Button>
        </div>
      </Section>
    </>
  );
}
