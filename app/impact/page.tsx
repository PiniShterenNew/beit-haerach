import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { StatCounter } from "@/components/ui/StatCounter";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icon";
import { IMPACT, BRANCHES, BRANCH_DETAIL, DIGNITY_QUOTE, CTA, type BranchId } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "השפעה",
  description: "היקף הפעילות של עזרת ישראל — מספרים, זרועות, ומה שעומד מאחוריהם.",
};

const branchIcon: Record<BranchId, IconName> = {
  hospitality: "meal",
  dental: "dental",
  torah: "torah",
  community: "hands",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow={IMPACT.eyebrow}
        title={IMPACT.headline}
        lede="מספר בלי מקור הוא סיסמה. לכן כל נתון שטרם אומת מסומן כאן במפורש, ולא נכתב כאילו אושר."
      />

      {/* מספרי-על */}
      <Section tone="deep">
        <BentoGrid>
          {IMPACT.stats.map((stat, i) => (
            <BentoCell
              key={stat.label}
              span="quarter"
              fill="deep"
              index={i}
              className="items-center border border-white/10 !bg-white/[0.04] text-center sm:items-start sm:text-start"
            >
              <span className="font-display text-stat font-black text-(--color-accent-on-deep)">
                {stat.value === "—" ? <span aria-hidden="true">—</span> : <StatCounter value={stat.value} />}
              </span>
              <span className="mt-3 text-body-sm text-(--color-navy-200)">
                {stat.pending ? (
                  <Placeholder needs={`impact-${i}`}>{stat.label}</Placeholder>
                ) : (
                  stat.label
                )}
              </span>
            </BentoCell>
          ))}
        </BentoGrid>

        <Reveal className="mt-8">
          <p className="text-caption text-(--color-navy-300)">{IMPACT.note}</p>
        </Reveal>
      </Section>

      {/* פירוט לפי זרוע */}
      <Section tone="canvas">
        <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
          <Eyebrow>לפי זרוע</Eyebrow>
          <h2 className="font-display text-h2">איפה זה מתבטא בפועל</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {BRANCHES.map((branch, i) => (
            <Reveal
              key={branch.id}
              index={i}
              className="flex flex-col gap-4 rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  className="arch-badge shrink-0"
                  style={{ background: branch.tint, color: branch.textColor }}
                  aria-hidden="true"
                >
                  <Icon name={branchIcon[branch.id]} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="font-heading text-h3" style={{ color: branch.textColor }}>
                  {branch.name}
                </h3>
              </div>

              <ul className="grid grid-cols-3 gap-4 border-t border-(--color-border-subtle) pt-4">
                {BRANCH_DETAIL[branch.id].stats.map((stat, j) => (
                  <li key={stat.label} className="flex flex-col gap-1">
                    <span className="font-display text-h3 font-bold" style={{ color: branch.textColor }}>
                      {stat.value === "—" ? "—" : <StatCounter value={stat.value} />}
                    </span>
                    <span className="text-caption text-(--color-text-tertiary)">
                      {stat.pending ? (
                        <Placeholder needs={`${branch.id}-${j}`}>{stat.label}</Placeholder>
                      ) : (
                        stat.label
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Button href={branch.href} variant="ghost" className="self-start">
                לפרטי הזרוע
              </Button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* מה שמספר לא מודד */}
      <Section tone="warm" width="narrow" className="text-center">
        <Reveal as="figure" className="m-0 flex flex-col items-center gap-6">
          <Eyebrow>מעבר למספרים</Eyebrow>
          <blockquote className="font-display text-h2 font-bold text-balance">
            {DIGNITY_QUOTE.text}
          </blockquote>
          <figcaption className="text-body-sm text-(--color-text-tertiary)">
            {DIGNITY_QUOTE.caption}
          </figcaption>
        </Reveal>
      </Section>

      <Section tone="canvas" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-h2 text-balance">כל תרומה מזיזה מספר אמיתי</h2>
          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:justify-center">
            <Button href="/donate" variant="donate" blockOnMobile>
              {CTA.donate}
            </Button>
            <Button href="/transparency" variant="ghost" blockOnMobile>
              מסמכים ואישורים
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
