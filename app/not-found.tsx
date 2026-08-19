import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <Section tone="canvas" width="narrow" className="text-center">
      <div className="flex flex-col items-center gap-6">
        <LogoMark className="h-16 w-auto opacity-70" />
        <h1 className="font-display text-h1">הדף לא נמצא</h1>
        <p className="text-body text-(--color-text-secondary)">
          יכול להיות שהקישור השתנה, או שהעמוד שחיפשתם אינו קיים עוד.
        </p>
        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:justify-center">
          <Button href="/" variant="primary" blockOnMobile>
            חזרה לדף הבית
          </Button>
          <Button href="/contact" variant="ghost" blockOnMobile>
            צרו קשר
          </Button>
        </div>
      </div>
    </Section>
  );
}
