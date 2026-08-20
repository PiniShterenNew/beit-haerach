import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/icon";

/**
 * כותרת עמוד פנימי.
 *
 * גרסה שקטה של ה-hero: אותה שפה, בלי הדרמה. פס הצבע העליון הוא של הזרוע —
 * כך שהמשתמש יודע באיזה חלק של המעטפת הוא נמצא עוד לפני שקרא את הכותרת.
 * ה-navbar אטום בכל עמוד פנימי, ולכן אין כאן משיכה מתחתיו.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  accent,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** צבע הזרוע — נצבע בפס העליון ובאייברו */
  accent?: string;
  breadcrumb?: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="section-compact relative border-b border-(--color-border-subtle) bg-(--color-surface-warm)">
      {/* פס הזרוע */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: accent ?? "var(--color-action-secondary)" }}
      />

      <Container>
        {breadcrumb?.length ? (
          <nav aria-label="מיקום בעמוד" className="mb-6 hidden sm:block">
            <ol className="flex flex-wrap items-center gap-1.5 text-caption text-(--color-text-tertiary)">
              <li>
                <Link href="/" className="inline-flex min-h-6 items-center py-1 transition-colors hover:text-(--color-text-primary)">
                  דף הבית
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <Icon name="chevron" className="h-3 w-3 rotate-90" aria-hidden="true" />
                  <Link
                    href={crumb.href}
                    className="inline-flex min-h-6 items-center py-1 transition-colors hover:text-(--color-text-primary)"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:items-start sm:text-start">
          {eyebrow ? (
            <p
              className="text-overline font-body font-medium"
              style={{ color: accent ?? "var(--color-text-accent)" }}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1 className="font-display text-h1">{title}</h1>

          {lede ? <p className="max-w-[38ch] text-body-lg text-(--color-text-secondary)">{lede}</p> : null}

          {children}
        </div>
      </Container>
    </section>
  );
}
