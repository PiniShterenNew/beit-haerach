import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { DonationModule } from "@/components/donation/donation-module";
import { TrustBadge } from "@/components/sections/trust-badge";

export const metadata: Metadata = {
  title: "תרומה",
  description: "תרמו למרכז קהילתי עזרת ישראל — בית הארחה, מרפאות שיניים, כוללים וישיבה.",
};

export default function DonatePage() {
  return (
    <Section className="pt-12 md:pt-16">
      <SectionHeader
        level="h1"
        eyebrow="תרומה"
        title="עוזרים להכין את הארוחה הבאה"
        lede="כל תרומה, גדולה כקטנה, ממשיכה ישירות את הפעילות היומיומית — ארוחות, טיפולי שיניים, לימוד תורה וחינוך."
      />
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div className="flex flex-col gap-8">
          <TrustBadge icon="check" title="ללא עמלות נסתרות" description="הסכום שבחרתם הוא הסכום שיחויב, ללא הפתעות." />
          <TrustBadge icon="document" title="קבלה מוכרת" description="[נדרש אימות: פרטי הכרה במס לתרומה]." />
          <TrustBadge icon="transparency" title="שקיפות מלאה" description="ניתן לעיין במסמכי העמותה בעמוד השקיפות." />
        </div>
        <DonationModule />
      </div>
    </Section>
  );
}
