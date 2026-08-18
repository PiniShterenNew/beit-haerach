import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Mark } from "@/components/brand/mark";
import { CONVERSION } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-(--color-navy-950) text-(--color-text-inverse)">
      <Mark
        tone="mono"
        className="pointer-events-none absolute -left-24 top-0 h-[140%] w-auto opacity-[0.07]"
      />
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-28">
        <div className="flex flex-col gap-6">
          <span className="text-xs tracking-[0.18em] text-(--color-gold-400)">
            מרכז קהילתי עזרת ישראל · חיפה
          </span>
          <h1 className="font-display text-4xl leading-[1.15] md:text-6xl">
            בית אחד, כמה דרכים לדאוג לאדם
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-(--color-text-inverse-muted)">
            ארבעה עשורים של פעילות קהילתית בחיפה — ארוחה חמה, טיפול שיניים נגיש, לימוד תורה קבוע
            וחינוך — תחת קורת גג אחת, ומתוך אותה מחויבות אנושית.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/donate" size="lg" variant="accent">
              {CONVERSION.donatePrimary}
            </Button>
            <Button href="/programs" size="lg" variant="inverse">
              {CONVERSION.learnMore}
            </Button>
          </div>
        </div>
        <MediaPlaceholder
          assetId="img.home.hero.01"
          ratio="4 / 5"
          wash="stone"
          label="תמונת פתיחה — בית הארחה ופעילות המרכז הקהילתי (בהמתנה לתמונה אמיתית)"
          className="justify-self-center md:justify-self-end"
        />
      </div>
    </section>
  );
}
