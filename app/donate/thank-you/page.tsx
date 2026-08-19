import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
    <Section tone="canvas" width="narrow" className="text-center">
      <div className="flex flex-col items-center gap-6">
        <SectionDivider tone="terra" />

        <span className="grid h-16 w-16 place-items-center rounded-full bg-(--color-sage-100) text-(--color-sage-700)">
          <Icon name="check" className="h-8 w-8" />
        </span>

        <h1 className="font-display text-h1">תודה רבה</h1>

        <p className="text-body-lg text-(--color-text-secondary)">
          {amount
            ? `התרומה שלכם בסך ${amount} ₪ ${isMonthly ? "מדי חודש " : ""}התקבלה.`
            : "התרומה שלכם התקבלה."}{" "}
          היא נכנסת ישירות לפעילות היומיומית של המעטפת.
        </p>

        <p className="text-body-sm text-(--color-text-tertiary)">
          אישור וקבלה יישלחו לכתובת הדוא״ל שהוזנה.
        </p>

        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:justify-center">
          <Button href="/" variant="primary" blockOnMobile>
            חזרה לדף הבית
          </Button>
          <Button href="/programs" variant="ghost" blockOnMobile>
            לאן זה הולך
          </Button>
        </div>
      </div>
    </Section>
  );
}
