import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icon";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "שקיפות",
  description: "מסמכי עמותה, אישורים ופרטים רשמיים של עזרת ישראל.",
};

const registry = [
  { label: "שם משפטי", field: SITE.legalName, needs: "legal-name" },
  { label: "מספר עמותה", field: SITE.registrationNumber, needs: "registration-number" },
  { label: "אישור ניהול תקין", field: SITE.properManagement, needs: "proper-management" },
  { label: "סעיף 46", field: SITE.section46, needs: "section-46" },
  { label: "כתובת", field: SITE.address, needs: "address" },
  { label: "עיר פעילות", field: { value: SITE.city, pending: false }, needs: "city" },
];

const documents: { icon: IconName; title: string; body: string }[] = [
  { icon: "document", title: "תעודת רישום עמותה", body: "מסמך הרישום מרשם העמותות." },
  { icon: "certificate", title: "אישור ניהול תקין", body: "האישור השנתי התקף מרשם העמותות." },
  { icon: "receipt", title: "אישור סעיף 46", body: "האישור המזכה תורמים בזיכוי מס." },
  { icon: "transparency", title: "דוח כספי שנתי", body: "הדוח הכספי המבוקר האחרון." },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="שקיפות ואמון"
        title="ארגון פתוח. דלת פתוחה."
        lede="כספי תרומה הם פיקדון. כל פרט רשמי מופיע כאן, וכל פרט שטרם אומת מסומן ככזה במקום להיכתב כאילו אושר."
      />

      {/* פרטי רישום */}
      <Section tone="canvas">
        <Reveal className="section-head flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <Eyebrow>פרטי הארגון</Eyebrow>
          <h2 className="font-display text-h2">רישום ואישורים</h2>
        </Reveal>

        <Reveal index={1}>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-(--color-border-subtle) bg-(--color-border-subtle) sm:grid-cols-2 lg:grid-cols-3">
            {registry.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 bg-(--color-surface) p-5">
                <dt className="text-caption text-(--color-text-tertiary)">{row.label}</dt>
                <dd className="text-body font-medium">
                  {row.field.pending ? (
                    <Placeholder needs={row.needs}>{row.field.value}</Placeholder>
                  ) : (
                    row.field.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-5">
          <p className="text-body-sm text-(--color-text-secondary)">
            ערך המסומן בקו מקווקו טרם אומת רשמית מול מסמכי הארגון, ויעודכן כאן עם אישורו.
          </p>
        </Reveal>
      </Section>

      {/* מסמכים */}
      <Section tone="surface">
        <Reveal className="section-head flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <Eyebrow>מסמכים</Eyebrow>
          <h2 className="font-display text-h2">להורדה ולעיון</h2>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2">
          {documents.map((doc, i) => (
            <Reveal
              as="li"
              key={doc.title}
              index={i}
              className="flex items-start gap-4 rounded-xl border border-(--color-border-subtle) bg-(--color-canvas) p-5"
            >
              <span className="arch-badge shrink-0 bg-(--color-surface-accent) text-(--color-text-accent)" aria-hidden="true">
                <Icon name={doc.icon} className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-heading text-h3">{doc.title}</h3>
                <p className="mt-1 text-body-sm text-(--color-text-secondary)">{doc.body}</p>
                <p className="mt-2 text-caption">
                  <Placeholder needs={`doc-${doc.title}`}>הקובץ יועלה עם אימותו</Placeholder>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="deep" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-h2 text-white text-balance">שאלה על השימוש בתרומות?</h2>
          <p className="max-w-lg text-body text-(--color-navy-100)">
            אפשר לפנות אלינו ישירות ונשמח להסביר.
          </p>
          <Button href="/contact" variant="donate" blockOnMobile>
            צרו קשר
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
