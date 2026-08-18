import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-sm) font-medium transition-colors duration-(--motion-base) ease-[cubic-bezier(0.22,0.61,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-action-primary) text-(--color-text-inverse) hover:bg-(--color-action-primary-hover)",
  accent:
    "bg-(--color-action-accent) text-(--color-navy-950) hover:bg-(--color-action-accent-hover)",
  secondary:
    "border border-(--color-border-strong) text-(--color-text-primary) hover:border-(--color-navy-950) hover:bg-(--color-surface-muted)",
  ghost: "text-(--color-text-primary) hover:bg-(--color-surface-muted)",
  inverse:
    "bg-(--color-ivory-50) text-(--color-navy-950) hover:bg-(--color-gold-100)",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  href?: string;
}

export function Button<T extends ElementType = "button">({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonOwnProps & { className?: string; children: React.ReactNode } & Omit<
    ComponentPropsWithoutRef<T>,
    keyof ButtonOwnProps
  >) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
