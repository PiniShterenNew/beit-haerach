import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { Icon } from "@/components/ui/icon";
import { GetHelpForm } from "@/components/forms/get-help-form";
import { SITE, BRANCHES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "קבלת סיוע",
  description: "פנייה דיסקרטית לקבלת סיוע מעזרת ישראל.",
};

export default function GetHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="קבלת סיוע"
        title="לבקש עזרה זה לא צעד קטן יותר מלתת אותה"
        lede="הפנייה נשמרת בדיסקרטיות מלאה. אין צורך להוכיח דבר לפני שפונים — רק לספר לנו איך אפשר לעזור."
        accent="var(--color-branch-community-text)"
      />

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <div>
              <h2 className="mb-3 font-display text-h2">על מה אפשר לפנות</h2>
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
            </div>

            <p className="text-body text-(--color-text-secondary)">
              אפשר לפנות עבור עצמכם או עבור מישהו אחר. אנחנו לא מנהלים רשימות ולא מפרסמים שמות —
              הפנייה נשארת בין הפונה לצוות.
            </p>

            <div className="rounded-lg border border-(--color-border-subtle) bg-(--color-surface) p-5">
              <p className="mb-2 text-body-sm font-medium">במצב דחוף — עדיף טלפון</p>
              <a
                href={`tel:${SITE.phone.value}`}
                className="inline-flex items-center gap-2 text-body font-semibold text-(--color-text-accent)"
              >
                <Icon name="phone" className="h-5 w-5" />
                <Placeholder needs="phone">{SITE.phone.value}</Placeholder>
              </a>
            </div>
          </Reveal>

          <Reveal index={1} className="rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8">
            <h2 className="mb-6 font-display text-h2">טופס פנייה</h2>
            <GetHelpForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
