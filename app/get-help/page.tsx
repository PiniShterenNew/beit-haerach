import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { GetHelpForm } from "@/components/forms/get-help-form";
import { Icon } from "@/components/ui/icon";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "קבלת סיוע",
  description: "פנייה דיסקרטית לקבלת סיוע ממרכז קהילתי עזרת ישראל.",
};

export default function GetHelpPage() {
  return (
    <Section className="pt-12 md:pt-16">
      <SectionHeader
        level="h1"
        eyebrow="קבלת סיוע"
        title="אני צריך עזרה"
        lede="הפנייה נשמרת בדיסקרטיות מלאה. אין צורך להוכיח דבר לפני שפונים — רק לספר לנו איך אפשר לעזור."
      />
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-(--color-text-secondary)">
          <p>ניתן לפנות עבור כל אחת מהתוכניות — בית הארחה, מרפאות שיניים, כוללים או ישיבה.</p>
          <p>אם מדובר במצב דחוף, מומלץ ליצור קשר טלפוני ישירות:</p>
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 text-base font-medium text-(--color-text-primary)">
            <Icon name="phone" className="h-5 w-5" />
            {SITE.phone}
          </a>
        </div>
        <GetHelpForm />
      </div>
    </Section>
  );
}
