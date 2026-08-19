import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

type Tone = "canvas" | "surface" | "warm" | "deep" | "gold";

const toneClass: Record<Tone, string> = {
  canvas: "bg-(--color-canvas) text-(--color-text-primary)",
  surface: "bg-(--color-surface) text-(--color-text-primary)",
  warm: "bg-(--color-surface-warm) text-(--color-text-primary)",
  deep: "bg-(--color-surface-deep) text-(--color-text-inverse)",
  gold: "bg-(--color-surface-gold) text-(--color-text-primary)",
};

/**
 * מקטע עמוד.
 *
 * ריווח אנכי אחיד (96px דסקטופ / 64px טאבלט / 48px מובייל) — "שקט מכוון".
 * לא כל מקטע זהה בעוצמה: `tone` ו-`width` הם מה שיוצר את הקצב בין פרקים.
 */
export function Section({
  children,
  tone = "canvas",
  width = "content",
  id,
  className,
  style,
  grain = false,
}: {
  children: ReactNode;
  tone?: Tone;
  width?: "content" | "wide" | "default" | "narrow";
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** שכבת גרעין נייר — למקטעי מורשת */
  grain?: boolean;
}) {
  return (
    <section
      id={id}
      style={style}
      className={`relative py-12 md:py-16 lg:py-24 ${toneClass[tone]} ${className ?? ""}`}
    >
      {grain ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          }}
        />
      ) : null}
      <Container width={width} className="relative">
        {children}
      </Container>
    </section>
  );
}
