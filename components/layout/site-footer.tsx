import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Icon } from "@/components/ui/icon";
import { PROGRAMS, SITE } from "@/lib/content/site";

const secondaryLinks = [
  { href: "/transparency", label: "שקיפות ומסמכים" },
  { href: "/stories", label: "סיפורים" },
  { href: "/volunteer", label: "התנדבות" },
  { href: "/get-help", label: "קבלת סיוע" },
  { href: "/contact", label: "יצירת קשר" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-(--color-border-inverse) bg-(--color-navy-950) text-(--color-text-inverse)">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo tone="inverse" />
          <p className="max-w-sm text-sm leading-relaxed text-(--color-text-inverse-muted)">
            {SITE.description}
          </p>
        </div>

        <nav aria-label="תוכניות" className="flex flex-col gap-3">
          <h2 className="text-xs tracking-[0.14em] text-(--color-gold-400)">התוכניות שלנו</h2>
          {PROGRAMS.map((p) => (
            <Link key={p.id} href={p.href} className="text-sm text-(--color-text-inverse-muted) hover:text-(--color-text-inverse)">
              {p.name}
            </Link>
          ))}
        </nav>

        <nav aria-label="קישורים" className="flex flex-col gap-3">
          <h2 className="text-xs tracking-[0.14em] text-(--color-gold-400)">מידע</h2>
          {secondaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-(--color-text-inverse-muted) hover:text-(--color-text-inverse)">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-(--color-border-inverse)">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-(--color-text-inverse-muted) md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span aria-hidden="true">·</span>
            <span>{SITE.city}</span>
            <span aria-hidden="true">·</span>
            <span>ע״ר {SITE.registrationNumber}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1.5 hover:text-(--color-text-inverse)">
              <Icon name="phone" className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-(--color-text-inverse)">
              <Icon name="mail" className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
