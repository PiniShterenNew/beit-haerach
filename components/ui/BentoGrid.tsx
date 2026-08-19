import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./Reveal";

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`bento-grid ${className ?? ""}`}>{children}</div>;
}

type Span = "wide" | "medium" | "narrow" | "quarter" | "full";
type Fill = "surface" | "warm" | "deep" | "tint" | "image";

const spanClass: Record<Span, string> = {
  wide: "bento-cell--wide",
  medium: "bento-cell--medium",
  narrow: "bento-cell--narrow",
  quarter: "bento-cell--quarter",
  full: "bento-cell--full",
};

const fillClass: Record<Fill, string> = {
  surface: "bg-(--color-surface) border border-(--color-border-subtle) text-(--color-text-primary)",
  warm: "bg-(--color-surface-warm) text-(--color-text-primary)",
  deep: "bg-(--color-surface-deep) text-(--color-text-inverse)",
  tint: "text-(--color-text-primary)",
  image: "bg-(--color-surface-warm) text-(--color-text-primary)",
};

/**
 * תא Bento.
 *
 * גובה מלא בתוך התא כדי שתאים בשורה ייראו כמערכת אחת, פינות --radius-xl,
 * ו-lift ב-hover רק כשהתא הוא קישור — תא שאינו לחיץ לא זז.
 */
export function BentoCell({
  children,
  span = "narrow",
  tall = false,
  fill = "surface",
  href,
  tint,
  index = 0,
  className,
  style,
}: {
  children: ReactNode;
  span?: Span;
  tall?: boolean;
  fill?: Fill;
  href?: string;
  /** רקע מותאם — משמש עם fill="tint" לצבע הזרוע */
  tint?: string;
  index?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const shell = `relative flex h-full flex-col overflow-hidden rounded-xl p-6 md:p-8 shadow-bento ${fillClass[fill]} ${
    href ? "lift" : ""
  } ${className ?? ""}`;

  const cellStyle: CSSProperties = { ...(tint ? { background: tint } : null), ...style };

  return (
    <Reveal
      index={index}
      stagger={80}
      className={`${spanClass[span]} ${tall ? "bento-cell--tall" : ""}`}
    >
      {href ? (
        <Link href={href} className={shell} style={cellStyle}>
          {children}
        </Link>
      ) : (
        <div className={shell} style={cellStyle}>
          {children}
        </div>
      )}
    </Reveal>
  );
}
