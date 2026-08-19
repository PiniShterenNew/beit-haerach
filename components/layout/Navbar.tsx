"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icon";
import { NAV, CTA } from "@/lib/content/site";

/**
 * Navbar.
 *
 * שקוף מעל ה-hero והופך למשטח לבן עם צל ברגע שמתחילים לגלול — כדי שהמסך
 * הראשון יישאר תמונה אחת שלמה. במובייל: פאנל שנפתח מימין (RTL) מעל overlay.
 * כפתור התרומה נראה תמיד, בכל רוחב מסך.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<number | undefined>(undefined);

  /* מעל ה-hero רק בעמוד הבית; בכל שאר העמודים ה-navbar אטום מהרגע הראשון. */
  const overHero = pathname === "/";
  const solid = scrolled || !overHero || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* סגירת הפאנל בניווט. עדכון סטייט בזמן רינדור, ולא באפקט: אפקט שקורא
     ל-setState באופן סינכרוני גורם לרינדור מדורג מיותר. */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-gentle ${
          solid
            ? "border-b border-(--color-border-subtle) bg-(--color-surface)/95 shadow-sm backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container max-w-content flex h-(--navbar-h) items-center justify-between gap-4">
          <Link href="/" aria-label={`${"עזרת ישראל"} — לעמוד הבית`} className="shrink-0">
            <Logo tone={solid ? "brand" : "inverse"} />
          </Link>

          {/* ניווט דסקטופ */}
          <nav aria-label="ניווט ראשי" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const children = "children" in item ? item.children : undefined;

              if (!children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex min-h-11 items-center rounded-md px-3 text-body-sm font-medium transition-colors duration-200 ${
                      solid
                        ? isActive(item.href)
                          ? "text-(--color-text-accent)"
                          : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                        : "text-(--color-stone-200) hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    window.clearTimeout(closeTimer.current);
                    setOpenDropdown(item.href);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 120);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown((current) => (current === item.href ? null : item.href))
                    }
                    className={`inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-body-sm font-medium transition-colors duration-200 ${
                      solid
                        ? isActive(item.href)
                          ? "text-(--color-text-accent)"
                          : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                        : "text-(--color-stone-200) hover:text-white"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === item.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.href ? (
                    <div className="absolute start-0 top-full z-10 min-w-56 pt-2">
                      <ul className="overflow-hidden rounded-lg border border-(--color-border-subtle) bg-(--color-surface) py-2 shadow-lg">
                        {children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex min-h-11 items-center px-4 py-2.5 text-body-sm text-(--color-text-secondary) transition-colors hover:bg-(--color-surface-warm) hover:text-(--color-text-primary)"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/donate" variant="donateSm">
              {CTA.donate}
            </Button>

            {/* פתיחת תפריט מובייל */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="פתיחת תפריט"
              aria-expanded={menuOpen}
              className={`grid h-11 w-11 place-items-center rounded-md transition-colors lg:hidden ${
                solid ? "text-(--color-text-primary)" : "text-white"
              }`}
            >
              <span className="sr-only">תפריט</span>
              <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
                <path d="M0 1h22M0 8h22M0 15h14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* פאנל מובייל — נכנס מימין */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="סגירת תפריט"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-(--color-navy-900)/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
          className="absolute inset-y-0 start-0 flex h-full w-[min(20rem,85vw)] flex-col overflow-y-auto bg-(--color-surface) shadow-lg transition-transform duration-300 ease-out-expo"
        >
          <div className="flex items-center justify-between border-b border-(--color-border-subtle) px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="סגירת תפריט"
              tabIndex={menuOpen ? 0 : -1}
              className="grid h-10 w-10 place-items-center rounded-md text-(--color-text-secondary) hover:bg-(--color-surface-warm)"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav aria-label="ניווט נייד" className="flex flex-1 flex-col gap-1 px-3 py-5">
            {NAV.map((item) => {
              const children = "children" in item ? item.children : undefined;
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className="block rounded-md px-3 py-3 font-display text-h3 font-bold text-(--color-text-primary)"
                  >
                    {item.label}
                  </Link>
                  {children ? (
                    <ul className="mb-2 ms-4 space-y-0.5 border-s-2 border-(--color-border-subtle) ps-3">
                      {children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            tabIndex={menuOpen ? 0 : -1}
                            className="block rounded-md px-2 py-2 text-body-sm text-(--color-text-secondary)"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="border-t border-(--color-border-subtle) p-5">
            <Button href="/donate" variant="donate" blockOnMobile className="w-full">
              {CTA.donate}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
