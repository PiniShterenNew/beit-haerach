import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { SITE, FOOTER_LINKS, BRANCHES, CTA } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] bg-(--color-navy-800) text-(--color-text-inverse)">
      <div className="container max-w-content grid gap-10 py-14 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-18">
        {/* עמודה 1 — זהות ופרטי קשר */}
        <div className="flex flex-col gap-5">
          <Logo tone="inverse" />
          <p className="max-w-sm text-body-sm text-(--color-navy-200)">{SITE.description}</p>

          <ul className="flex flex-col gap-2.5 text-body-sm">
            <li>
              <a
                href={`tel:${SITE.phone.value.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 text-(--color-navy-100) transition-colors hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-(--color-gold-400)" />
                <Placeholder needs="phone">{SITE.phone.value}</Placeholder>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email.value}`}
                className="inline-flex items-center gap-2 text-(--color-navy-100) transition-colors hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-(--color-gold-400)" />
                <Placeholder needs="email">{SITE.email.value}</Placeholder>
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-(--color-navy-100)">
              <Icon name="location" className="h-4 w-4 shrink-0 text-(--color-gold-400)" />
              <Placeholder needs="address">{SITE.address.value}</Placeholder>
            </li>
          </ul>
        </div>

        {/* עמודה 2 — ניווט */}
        <nav aria-label="קישורים באתר" className="flex flex-col gap-4">
          <h2 className="text-overline font-body font-medium text-(--color-gold-300)">ניווט מהיר</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-6 items-center py-1 text-body-sm text-(--color-navy-100) transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* עמודה 3 — זרועות + תרומה */}
        <div className="flex flex-col gap-4">
          <h2 className="text-overline font-body font-medium text-(--color-gold-300)">תחומי פעילות</h2>
          <ul className="flex flex-col gap-2.5">
            {BRANCHES.map((branch) => (
              <li key={branch.id}>
                <Link
                  href={branch.href}
                  className="inline-flex min-h-6 items-center py-1 text-body-sm text-(--color-navy-100) transition-colors hover:text-white"
                >
                  {branch.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <Button href="/donate" variant="secondary" blockOnMobile>
              {CTA.donate}
            </Button>
          </div>
        </div>
      </div>

      {/* פס תחתון */}
      <div className="border-t border-white/10">
        <div className="container max-w-content flex flex-col gap-2 py-5 text-caption text-(--color-navy-200) md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.fullName} · ע״ר <Placeholder needs="registration-number">{SITE.registrationNumber.value}</Placeholder>
          </p>
          <p>
            תרומות מוכרות לזיכוי מס לפי סעיף 46 —{" "}
            <Placeholder needs="section-46">בכפוף לאישור בתוקף</Placeholder>
          </p>
        </div>
      </div>
    </footer>
  );
}
