import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { Icon, type IconName } from "@/components/ui/icon";
import { DonationModule } from "@/components/donation/donation-module";
import { BRANCHES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "תרומה",
  description: "תרומה לעזרת ישראל — מזון, בריאות, תורה וחינוך ופעילות קהילתית.",
};

const assurances: { icon: IconName; title: string; body: React.ReactNode }[] = [
  { icon: "check", title: "ללא עמלות נסתרות", body: "הסכום שבחרתם הוא הסכום שיחויב." },
  {
    icon: "receipt",
    title: "קבלה מוכרת לצורכי מס",
    body: <>זיכוי לפי סעיף 46 — <Placeholder needs="section-46">בכפוף לאישור בתוקף</Placeholder>.</>,
  },
  { icon: "transparency", title: "שקיפות מלאה", body: "מסמכי העמותה והאישורים פתוחים לעיון בעמוד השקיפות." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="תרומה"
        title="אפשר להיות חלק מהמעטפת"
        lede="כל תרומה נכנסת ישירות לפעילות היומיומית — למצרכים, לטיפול, ולהמשך של כל אחת מהזרועות."
      />

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="mb-5 font-display text-h2">למה אפשר לסמוך</h2>
              <ul className="flex flex-col gap-1">
                {assurances.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 border-b border-(--color-border-subtle) py-4">
                    <span className="arch-badge shrink-0 bg-(--color-surface-accent) text-(--color-text-accent)" aria-hidden="true">
                      <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-heading text-h3">{item.title}</h3>
                      <p className="mt-1 text-body-sm text-(--color-text-secondary)">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-display text-h3">אפשר לייעד את התרומה</h2>
              <ul className="flex flex-wrap gap-2">
                {BRANCHES.map((branch) => (
                  <li
                    key={branch.id}
                    className="rounded-pill border px-3 py-1.5 text-caption"
                    style={{ borderColor: branch.textColor, color: branch.textColor }}
                  >
                    {branch.name}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-body-sm text-(--color-text-secondary)">
                ייעוד ספציפי ניתן לציין בשלב התשלום, או להשאיר לתרומה כללית לכלל הפעילות.
              </p>
            </div>
          </Reveal>

          <Reveal index={1} className="rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8">
            <DonationModule />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
