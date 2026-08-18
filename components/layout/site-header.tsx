"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PRIMARY_NAV, CONVERSION } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        setHidden(y > lastY.current && y > 140);
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 border-b bg-(--color-surface-base)/95 backdrop-blur supports-backdrop-blur:bg-(--color-surface-base)/80 transition-[transform,box-shadow,border-color] duration-(--motion-base) ease-[cubic-bezier(0.22,0.61,0.36,1)] md:translate-y-0 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-(--color-border-strong) shadow-sm" : "border-(--color-border-subtle)"}`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="עמוד הבית, מרכז קהילתי עזרת ישראל">
          <Logo />
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-7">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary) after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-(--color-gold-500) after:transition-transform after:duration-(--motion-base) hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/donate" size="md" variant="accent" className="hidden sm:inline-flex">
            {CONVERSION.donatePrimary}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
