import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { TRANSPARENCY } from "@/lib/content/site";

/**
 * מקטע 9 — שקיפות ואמון.
 *
 * שלושה כרטיסים נקיים. הפרטים המשפטיים עצמם עדיין לא אומתו, ולכן כל אחד
 * מהם מוצג דרך <Placeholder> — הכרטיס אומר מה קיים, והערך המדויק מסומן
 * כמידע בהשלמה במקום להיכתב כאילו אושר.
 */
export function Transparency() {
  return (
    <Section tone="canvas" width="wide" className="text-center">
      <Reveal className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-3 md:mb-14">
        <Eyebrow>{TRANSPARENCY.eyebrow}</Eyebrow>
        <h2 className="font-display text-h1">{TRANSPARENCY.headline}</h2>
      </Reveal>

      <ul className="grid gap-5 md:grid-cols-3">
        {TRANSPARENCY.cards.map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            index={i}
            className="flex flex-col items-center gap-3 rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-8 shadow-bento"
          >
            <span
              className="arch-badge mb-1 bg-(--color-surface-gold) text-(--color-text-accent)"
              aria-hidden="true"
            >
              <Icon name={card.icon as IconName} className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <h3 className="font-display text-h3">{card.title}</h3>
            <p className="text-body-sm text-(--color-text-secondary)">{card.body}</p>
            <p className="mt-1 text-body-sm font-medium">
              <Placeholder needs={card.title}>{card.detail.value}</Placeholder>
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <Button href="/transparency" variant="ghost" blockOnMobile>
          כל המסמכים והאישורים
        </Button>
      </Reveal>
    </Section>
  );
}
