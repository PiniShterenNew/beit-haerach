import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/icon";
import { VolunteerForm } from "@/components/forms/volunteer-form";

export const metadata: Metadata = {
  title: "התנדבות",
  description: "הצטרפו כמתנדבים לעזרת ישראל — בישול, אריזה, חלוקה וליווי.",
};

const roles: { icon: IconName; title: string; body: string }[] = [
  { icon: "cooking", title: "בישול והכנה", body: "עזרה במטבח בהכנת ארוחות יומיומיות ולקראת שבת וחג." },
  { icon: "package", title: "אריזה", body: "אריזת מנות לפי משפחות, למשלוח ולאיסוף." },
  { icon: "delivery", title: "חלוקה ומשלוחים", body: "הבאת ארוחות למי שאינו יכול להגיע בעצמו." },
  { icon: "candles", title: "היערכות למועדים", body: "תגבור לפני חגים, כשההיקף גדל משמעותית." },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="התנדבות"
        title="יש מקום לעוד ידיים"
        lede="הפעילות היומיומית מתאפשרת הודות למתנדבים קבועים. גם שעתיים בשבוע נספרות."
      />

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-display text-h2">איפה אפשר לעזור</h2>
            <ul className="flex flex-col gap-1">
              {roles.map((role) => (
                <li key={role.title} className="flex items-start gap-4 border-b border-(--color-border-subtle) py-4">
                  <span className="arch-badge shrink-0 bg-(--color-sage-50) text-(--color-branch-torah)" aria-hidden="true">
                    <Icon name={role.icon} className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-h3">{role.title}</h3>
                    <p className="mt-1 text-body-sm text-(--color-text-secondary)">{role.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8">
            <h2 className="mb-6 font-display text-h2">טופס הצטרפות</h2>
            <VolunteerForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
