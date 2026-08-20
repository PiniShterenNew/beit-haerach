import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/icon";
import { WHO_WE_HELP } from "@/lib/content/site";

/**
 * מקטע 6 — למי אנחנו עוזרים.
 *
 * המקטע שנועד לשבור את התדמית של "עניים". לכן הוא רשימה ויזואלית עם אייקון
 * בקשת לכל פריט, ולא bullets — ולכן הוא נסגר בציטוט על צעיר שלא נתפס כעני.
 * הציטוט הזה הוא הטיעון של המקטע, לא קישוט בסופו.
 */
export function WhoWeHelp() {
  return (
    <Section tone="canvas">
      <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
        <Eyebrow>{WHO_WE_HELP.eyebrow}</Eyebrow>
        <h2 className="font-display text-h1">{WHO_WE_HELP.headline}</h2>
      </Reveal>

      <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {WHO_WE_HELP.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.label}
            index={i}
            className="flex items-start gap-4 border-b border-(--color-border-subtle) py-6"
          >
            <span
              className="arch-badge shrink-0 border border-(--color-border-subtle) bg-(--color-surface) text-(--color-text-accent)"
              aria-hidden="true"
            >
              <Icon name={item.icon as IconName} className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-heading text-h3">{item.label}</h3>
              <p className="mt-1 text-body-sm text-(--color-text-secondary)">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 border-s-2 border-(--color-action-secondary) ps-6">
        <p className="max-w-2xl font-display text-h3 italic text-(--color-text-secondary)">
          {WHO_WE_HELP.note}
        </p>
      </Reveal>
    </Section>
  );
}
