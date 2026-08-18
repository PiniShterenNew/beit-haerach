import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PRIMARY_NAV, CONVERSION } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-(--color-border-subtle) bg-(--color-surface-base)/95 backdrop-blur supports-backdrop-blur:bg-(--color-surface-base)/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="עמוד הבית, מרכז קהילתי עזרת ישראל">
          <Logo />
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-7">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
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
