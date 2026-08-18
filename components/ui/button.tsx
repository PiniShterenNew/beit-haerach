import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "btn-press inline-flex items-center justify-center gap-2 rounded-(--radius-sm) font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-action-primary) text-(--color-text-inverse) hover:bg-(--color-action-primary-hover) hover:shadow-[0_12px_24px_-12px_rgba(11,29,58,0.55)]",
  accent:
    "bg-(--color-action-accent) text-(--color-navy-950) hover:bg-(--color-action-accent-hover) hover:shadow-[0_12px_24px_-10px_rgba(212,175,55,0.6)]",
  secondary:
    "border border-(--color-border-strong) text-(--color-text-primary) hover:border-(--color-navy-950) hover:bg-(--color-surface-muted)",
  ghost: "text-(--color-text-primary) hover:bg-(--color-surface-muted)",
  inverse:
    "bg-(--color-ivory-50) text-(--color-navy-950) hover:bg-(--color-gold-100) hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.35)]",
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
