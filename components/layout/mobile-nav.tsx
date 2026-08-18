"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PRIMARY_NAV, CONVERSION } from "@/lib/content/site";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { revealStyle } from "@/lib/motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-(--radius-sm) text-(--color-text-primary) focus-visible:outline-2"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          <path
            className="origin-center transition-[transform,opacity] duration-(--motion-base) ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={open ? { transform: "translateY(5px) rotate(45deg)" } : undefined}
            d="M4 7h16"
          />
          <path
            className="origin-center transition-opacity duration-(--motion-fast)"
            style={open ? { opacity: 0 } : undefined}
            d="M4 12h16"
          />
          <path
            className="origin-center transition-[transform,opacity] duration-(--motion-base) ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={open ? { transform: "translateY(-5px) rotate(-45deg)" } : undefined}
            d="M4 17h16"
          />
        </svg>
      </button>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-16 z-30 bg-(--color-navy-950)/40 backdrop-blur-[2px] transition-opacity duration-(--motion-base) ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="תפריט ניווט"
        data-revealed={open ? "" : undefined}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-(--color-surface-base) shadow-lg transition-[transform,opacity] duration-(--motion-slow) ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-6">
          {PRIMARY_NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
              className="reveal-item flex items-center justify-between border-b border-(--color-border-subtle) py-4 text-lg text-(--color-text-primary) transition-colors hover:text-(--color-gold-600)"
              style={{ ...revealStyle(i)}}
            >
              {item.label}
              <Icon name="arrow" className="h-5 w-5 rotate-180 text-(--color-text-muted)" />
            </Link>
          ))}
          <Button
            href="/donate"
            size="lg"
            className="reveal-item mt-6 w-full"
            style={{ ...revealStyle(PRIMARY_NAV.length)}}
            onClick={() => setOpen(false)}
            tabIndex={open ? undefined : -1}
          >
            {CONVERSION.donatePrimary}
          </Button>
        </nav>
      </div>
    </div>
  );
}
