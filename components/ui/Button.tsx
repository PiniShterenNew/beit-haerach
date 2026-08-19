import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghostInverse" | "donate" | "donateSm";

const variantClass: Record<Variant, string> = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  ghost: "btn btn--ghost",
  ghostInverse: "btn btn--ghost-inverse",
  donate: "btn btn--donate",
  donateSm: "btn btn--donate-sm",
};

interface Props {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  /** רוחב מלא במובייל — מינימום 48px גובה */
  blockOnMobile?: boolean;
}

/**
 * כפתור.
 * חוק ברזל מהבריף: אין פינות חדות. כל וריאנט יורש `border-radius: --radius-md`
 * לכל הפחות, דרך המחלקות ב-globals.css.
 */
export function Button({
  variant = "primary",
  href,
  children,
  className,
  blockOnMobile = false,
  ...rest
}: Props & Omit<ComponentPropsWithoutRef<"button">, keyof Props>) {
  const cls = `${variantClass[variant]} ${blockOnMobile ? "btn--block-mobile" : ""} ${className ?? ""}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
