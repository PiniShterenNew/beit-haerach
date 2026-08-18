"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PRIMARY_NAV, CONVERSION } from "@/lib/content/site";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

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
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="תפריט ניווט"
          className="fixed inset-x-0 top-[var(--header-h,64px)] bottom-0 z-40 bg-(--color-surface-base) overflow-y-auto"
        >
          <nav className="container-page flex flex-col gap-1 py-6">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-(--color-border-subtle) py-4 text-lg text-(--color-text-primary)"
              >
                {item.label}
                <Icon name="arrow" className="h-5 w-5 rotate-180 text-(--color-text-muted)" />
              </Link>
            ))}
            <Button href="/donate" size="lg" className="mt-6 w-full" onClick={() => setOpen(false)}>
              {CONVERSION.donatePrimary}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
