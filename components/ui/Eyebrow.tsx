import type { ReactNode } from "react";

/**
 * Overline / eyebrow — מתייג את המקטע בשתיים-שלוש מילים.
 * Heebo 500, letter-spacing 0.08em, זהב. בעברית ללא uppercase.
 */
export function Eyebrow({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: "accent" | "inverse" | "branch";
  className?: string;
}) {
  const color =
    tone === "inverse"
      ? "text-(--color-gold-300)"
      : tone === "branch"
        ? "text-(--branch)"
        : "text-(--color-text-accent)";

  return (
    <p className={`text-overline font-body font-medium ${color} ${className ?? ""}`}>{children}</p>
  );
}
