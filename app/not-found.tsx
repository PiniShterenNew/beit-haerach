import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/brand/mark";

export default function NotFound() {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
        <Mark className="h-16 w-auto opacity-60" />
        <h1 className="font-display text-3xl md:text-4xl">הדף לא נמצא</h1>
        <p className="text-base text-(--color-text-secondary)">
          יכול להיות שהקישור השתנה, או שהעמוד שחיפשתם אינו קיים.
        </p>
        <Button href="/">חזרה לעמוד הבית</Button>
      </div>
    </Section>
  );
}
