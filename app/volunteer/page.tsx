import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { VolunteerForm } from "@/components/forms/volunteer-form";
import { TrustBadge } from "@/components/sections/trust-badge";

export const metadata: Metadata = {
  title: "התנדבות",
  description: "הצטרפו כמתנדבים למרכז קהילתי עזרת ישראל — בישול, אריזה, חלוקה ועוד.",
};

export default function VolunteerPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          level="h1"
          eyebrow="התנדבות"
          title="אני רוצה להתנדב"
          lede="הפעילות היומיומית מתאפשרת הודות למתנדבים קבועים. יש מקום גם לכם."
        />
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <TrustBadge icon="cooking" title="בישול והכנת ארוחות" description="עזרה במטבח בהכנת ארוחות יומיומיות ולקראת שבת וחג." />
            <TrustBadge icon="package" title="אריזה" description="אריזת מנות למשלוח ולאיסוף." />
            <TrustBadge icon="delivery" title="חלוקה ומשלוחים" description="חלוקת ארוחות למי שאינו יכול להגיע בעצמו." />
            <TrustBadge icon="community" title="אירועי שבת וחגים" description="סיוע בהיערכות המוגברת לקראת חגים." />
          </div>
          <VolunteerForm />
        </div>
      </Section>
    </>
  );
}
