import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "תודה על התרומה",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ amount?: string; frequency?: string }>;
}) {
  const { amount, frequency } = await searchParams;
  const isMonthly = frequency === "monthly";

  return (
    <Section className="pt-16 md:pt-24">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-(--color-feedback-success-bg) text-(--color-feedback-success)">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h1 className="font-display text-3xl md:text-4xl">תודה רבה על התרומה</h1>
        <p className="text-base leading-relaxed text-(--color-text-secondary)">
          {amount ? `תרומתכם בסך ₪${amount}` : "תרומתכם"} {isMonthly ? "כתרומה חודשית קבועה " : ""}
          עוזרת לנו להמשיך את הפעילות היומיומית של כל תוכניות המרכז הקהילתי.
        </p>
        <p className="text-xs text-(--color-text-muted)">
          [נדרש אימות: זהו עמוד תודה לדוגמה — טרם חובר ספק סליקה אמיתי, ולכן לא בוצע חיוב בפועל.]
        </p>
        <div className="flex gap-3 pt-2">
          <Button href="/" variant="secondary">חזרה לעמוד הבית</Button>
          <Button href="/stories" variant="ghost">קריאת סיפורים נוספים</Button>
        </div>
      </div>
    </Section>
  );
}
