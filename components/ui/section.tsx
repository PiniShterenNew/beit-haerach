"use client";

import { useEffect, useRef, useState } from "react";

export function Section({
  children,
  className,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "base" | "muted" | "inverse";
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setRevealed(true), 0);
      return () => window.clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toneClass =
    tone === "muted"
      ? "bg-(--color-surface-muted)"
      : tone === "inverse"
        ? "bg-(--color-navy-950) text-(--color-text-inverse)"
        : "bg-(--color-surface-base)";
  return (
    <section
      ref={ref}
      id={id}
      data-revealed={revealed ? "" : undefined}
      className={`${toneClass} py-16 md:py-24 ${className ?? ""}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "start",
  inverse = false,
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "start" | "center";
  inverse?: boolean;
  level?: "h1" | "h2";
}) {
  const Heading = level;
  return (
    <div
      className={`reveal-item mb-10 flex max-w-2xl flex-col gap-3 md:mb-14 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <span
          className={`text-xs tracking-[0.16em] ${
            inverse ? "text-(--color-gold-400)" : "text-(--color-gold-600)"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={`font-display leading-[1.05] tracking-[-0.01em] ${level === "h1" ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"} ${inverse ? "" : "text-(--color-text-primary)"}`}
      >
        {title}
      </Heading>
      {lede ? (
        <p className={`text-base leading-relaxed ${inverse ? "text-(--color-text-inverse-muted)" : "text-(--color-text-secondary)"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
