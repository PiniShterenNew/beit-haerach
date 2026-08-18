import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Mark } from "@/components/brand/mark";
import { CONVERSION } from "@/lib/content/site";
import { heroStyle } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-(--color-navy-950) text-(--color-text-inverse)">
      <div className="container-page relative py-10 md:py-24">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10">
          <div className="flex flex-col gap-6">
            <span
              className="hero-rise inline-flex items-center gap-2 text-xs tracking-[0.18em] text-(--color-gold-400)"
              style={heroStyle(0)}
            >
              <Mark tone="mono" animate className="h-6 w-auto opacity-90" />
              מרכז קהילתי עזרת ישראל · חיפה
            </span>

            <h1
              className="hero-rise font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.98] tracking-[-0.01em]"
              style={heroStyle(1)}
            >
              בית אחד,
              <br />
              כמה דרכים
              <br />
              לדאוג לאדם
            </h1>

            {/* Mobile: the image is a doorway between the headline and the
                copy — not a shrunk desktop split. */}
            <div className="hero-rise md:hidden" style={heroStyle(2)}>
              <div className="mx-auto w-[74%]" style={{ clipPath: "url(#arch-frame)" }}>
                <MediaPlaceholder
                  assetId="img.home.hero.01"
                  ratio="4 / 5"
                  wash="stone"
                  rounded={false}
                  label="תמונת פתיחה — בית הארחה ופעילות המרכז הקהילתי (בהמתנה לתמונה אמיתית)"
                />
              </div>
            </div>

            <p
              className="hero-rise max-w-md text-lg leading-relaxed text-(--color-text-inverse-muted)"
              style={heroStyle(3)}
            >
              ארבעה עשורים של פעילות קהילתית בחיפה — ארוחה חמה, טיפול שיניים נגיש, לימוד תורה קבוע
              וחינוך — תחת קורת גג אחת, ומתוך אותה מחויבות אנושית.
            </p>

            <div className="hero-rise flex flex-wrap gap-3 pt-2" style={heroStyle(4)}>
              <Button href="/donate" size="lg" variant="accent">
                {CONVERSION.donatePrimary}
              </Button>
              <Button href="/programs" size="lg" variant="inverse">
                {CONVERSION.learnMore}
              </Button>
            </div>
          </div>

          {/* Desktop: the image lives inside the arch — a literal doorway,
              bottom-aligned so it reads as architecture the copy stands
              beside, not a stock photo in a rounded box. */}
          <div className="hero-rise hidden md:block" style={heroStyle(2)}>
            <div style={{ clipPath: "url(#arch-frame)" }}>
              <MediaPlaceholder
                assetId="img.home.hero.01"
                ratio="4 / 5"
                wash="stone"
                rounded={false}
                label="תמונת פתיחה — בית הארחה ופעילות המרכז הקהילתי (בהמתנה לתמונה אמיתית)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
