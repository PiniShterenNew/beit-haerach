import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { DocumentLink } from "@/components/sections/document-link";
import { TrustBadge } from "@/components/sections/trust-badge";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "שקיפות",
  description: "מסמכי עמותה, אישורים ודיווחים ציבוריים של מרכז קהילתי עזרת ישראל.",
};

export default function TransparencyPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          level="h1"
          eyebrow="שקיפות"
          title="פועלים בגלוי"
          lede="ארגון ציבורי חייב לפעול בשקיפות מלאה. כאן נרכז את כל המסמכים והפרטים הרשמיים, ונעדכן אותם ברגע שיאומתו."
        />
        <dl className="grid gap-6 sm:grid-cols-2 max-w-2xl">
          <div>
            <dt className="text-sm text-(--color-text-muted)">שם משפטי</dt>
            <dd className="mt-1 text-base text-(--color-text-primary)">{SITE.legalName}</dd>
          </div>
          <div>
            <dt className="text-sm text-(--color-text-muted)">מספר עמותה</dt>
            <dd className="mt-1 text-base text-(--color-text-primary)">{SITE.registrationNumber}</dd>
          </div>
          <div>
            <dt className="text-sm text-(--color-text-muted)">סטטוס סעיף 46</dt>
            <dd className="mt-1 text-base text-(--color-text-primary)">{SITE.section46}</dd>
          </div>
          <div>
            <dt className="text-sm text-(--color-text-muted)">כתובת</dt>
            <dd className="mt-1 text-base text-(--color-text-primary)">{SITE.address}</dd>
          </div>
        </dl>
      </Section>

      <Section tone="muted">
        <SectionHeader title="מסמכים ואישורים" lede="הקישורים יופעלו לכשיתקבלו המסמכים הרשמיים המאומתים." />
        <div className="grid gap-4 sm:grid-cols-2">
          <DocumentLink title="תעודת רישום עמותה" meta="[נדרש אימות]" />
          <DocumentLink title="אישור ניהול תקין" meta="[נדרש אימות]" />
          <DocumentLink title="אישור סעיף 46" meta="[נדרש אימות]" />
          <DocumentLink title="דו״ח כספי שנתי אחרון" meta="[נדרש אימות]" />
        </div>
      </Section>

      <Section>
        <SectionHeader title="עקרונות השקיפות שלנו" />
        <div className="grid gap-8 sm:grid-cols-3">
          <TrustBadge icon="document" title="דיווח פתוח" description="פרסום מסמכים רשמיים מיד עם קבלת אישור לפרסומם." />
          <TrustBadge icon="transparency" title="ללא נתונים מומצאים" description="לא נציג נתוני השפעה עד לאימותם המלא." />
          <TrustBadge icon="certificate" title="ניהול תקין" description="פעילות מתמשכת לשמירה על סטנדרטים של ניהול תקין." />
        </div>
      </Section>
    </>
  );
}
