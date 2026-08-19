import type { ReactNode } from "react";

type Width = "content" | "wide" | "default" | "narrow";

const widthClass: Record<Width, string> = {
  content: "max-w-content",
  wide: "max-w-content-wide",
  default: "max-w-content-default",
  narrow: "max-w-content-narrow",
};

/** עוטף רוחב אחיד. כל מקטע יושב בתוך Container, אף פעם לא ברוחב חופשי. */
export function Container({
  children,
  width = "content",
  className,
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return <div className={`container ${widthClass[width]} ${className ?? ""}`}>{children}</div>;
}
