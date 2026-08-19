import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icon";
import { BRANCHES, BRANCH_DETAIL, CTA, type BranchId } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "תחומי פעילות",
  description:
    "ארבע זרועות של מעטפת אחת — בית הארחה, מרפאות שיניים, תורה וחינוך ופעילות קהילתית.",
};

const branchIcon: Record<BranchId, IconName> = {
  hospitality: "meal",
  dental: "dental",
  torah: "torah",
  community: "hands",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="תחומי פעילות"
        title="ארבע זרועות. מעטפת אחת."
        lede="כל זרוע עומדת בפני עצמה, אבל אף אחת מהן לא נבנתה בנפרד. הן חלקים של אותה מעטפת, שנפרשת סביב אדם לפי מה שהוא צריך באותו רגע."
      />

      <Section tone="canvas">
        <BentoGrid>
          {BRANCHES.map((branch, i) => (
            <BentoCell
              key={branch.id}
              span="medium"
              fill="tint"
              tint={branch.tint}
              href={branch.href}
              index={i}
            >
              <span
                className="arch-badge mb-5 shrink-0"
                style={{ background: branch.textColor, color: "white" }}
              >
                <Icon name={branchIcon[branch.id]} className="h-6 w-6" strokeWidth={1.6} />
              </span>

              <h2 className="font-display text-h2" style={{ color: branch.textColor }}>
                {branch.name}
              </h2>
              <p className="mt-2 font-display text-h3">{branch.tagline}</p>
              <p className="mt-4 max-w-md text-body text-(--color-text-secondary)">
                {branch.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {BRANCH_DETAIL[branch.id].highlights.slice(0, 3).map((h) => (
                  <li
                    key={h.title}
                    className="rounded-pill border px-3 py-1 text-caption"
                    style={{ borderColor: branch.textColor, color: branch.textColor }}
                  >
                    {h.title}
                  </li>
                ))}
              </ul>

              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-body-sm font-semibold">
                לעמוד הזרוע
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </span>
            </BentoCell>
          ))}
        </BentoGrid>
      </Section>

      <Section tone="deep" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-h2 text-white text-balance">
            אפשר לתמוך בזרוע אחת, או בכל המעטפת.
          </h2>
          <p className="max-w-lg text-body text-(--color-navy-100)">
            בעמוד התרומה אפשר לבחור ייעוד ספציפי, או לתרום לפעילות הכללית.
          </p>
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:justify-center">
            <Button href="/donate" variant="donate" blockOnMobile>
              {CTA.donate}
            </Button>
            <Button href="/contact" variant="ghostInverse" blockOnMobile>
              {CTA.contact}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
