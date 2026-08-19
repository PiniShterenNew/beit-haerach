import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArchImage } from "@/components/ui/ArchImage";
import { HERO, CTA } from "@/lib/content/site";

/** עיכוב בכניסת ה-hero — כותרת, תמונה, ואז CTA. */
const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

/**
 * מקטע 1 — HERO.
 *
 * תפקיד: "מי אנחנו ולמה זה חשוב" תוך חמש שניות.
 * קומפוזיציה: טקסט מימין (RTL), תמונה בצורת קשת משמאל.
 *
 * ה-navbar שקוף מעל המקטע הזה בלבד, ולכן ה-hero נמשך מתחתיו בדיוק בגובה
 * --navbar-h — כך המסך הראשון נקרא כתמונה אחת רציפה ולא כשתי שכבות.
 * הכניסה היא אנימציה ולא scroll reveal, כי המקטע תמיד בתוך המסך.
 */
export function Hero() {
  return (
    <section className="relative -mt-[var(--navbar-h)] overflow-hidden bg-(--color-surface-deep) pt-[var(--navbar-h)] text-(--color-text-inverse)">
      {/* אין כאן קשת דקורטיבית נוספת: התמונה עצמה היא הקשת. המוטיב חוזר
          בהמשך העמוד בתגי האייקונים, במפרידים ובתמונת המורשת — די בכך. */}

      <Container className="relative">
        <div className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
          {/* טקסט */}
          <div className="flex flex-col gap-6">
            <p
              className="hero-in text-overline font-body font-medium text-(--color-gold-300)"
              style={delay(0)}
            >
              {HERO.eyebrow}
            </p>

            <h1 className="hero-in font-display text-display font-black text-white" style={delay(150)}>
              {HERO.headline.map((line, i) => (
                <span key={line} className="block">
                  {i === HERO.headline.length - 1 ? (
                    <span className="text-(--color-gold-400)">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="hero-in max-w-lg text-body-lg text-(--color-navy-100)" style={delay(350)}>
              {HERO.body}
            </p>

            <div
              className="hero-in flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"
              style={delay(550)}
            >
              <Button href="/donate" variant="donate" blockOnMobile>
                {CTA.donate}
              </Button>
              <Button href="/about" variant="ghostInverse" blockOnMobile>
                {CTA.learnMore}
              </Button>
            </div>
          </div>

          {/* תמונה בצורת קשת — מוגבלת בגובה כדי שלא תשתלט על המסך הראשון */}
          <div
            className="hero-in mx-auto w-full max-w-[17rem] sm:max-w-xs lg:max-w-[22rem]"
            style={delay(300)}
          >
            <ArchImage
              priority
              ratio="portrait"
              tint="var(--color-navy-800)"
              shape="var(--color-navy-700)"
              ink="var(--color-gold-400)"
              label="תמונת פתיחה — המטבח והפעילות היומיומית"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
