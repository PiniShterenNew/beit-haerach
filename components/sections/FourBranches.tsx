import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { Icon, type IconName } from "@/components/ui/icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { BRANCHES, type BranchId } from "@/lib/content/site";

const branchIcon: Record<BranchId, IconName> = {
  hospitality: "meal",
  dental: "dental",
  torah: "torah",
  community: "hands",
};

/**
 * מקטע 3 — ארבע הזרועות, כ-Bento Grid.
 *
 * ארבעה כרטיסים שווי-גודל היו אומרים "ארבעה שירותים". גריד א-סימטרי אומר
 * "מעטפת אחת שיש לה ארבעה ביטויים בעוצמות שונות" — וזו הטענה של הארגון.
 * בית הארחה מקבל את התא הגדול כי הוא הזרוע הרחבה והמתועדת ביותר.
 *
 * פריסה: בית הארחה (8) + מרפאות (4) בשורה הראשונה, ואז סטטיסטיקה, תורה
 * וקהילה (4+4+4) בשנייה.
 */
export function FourBranches() {
  const [hospitality, dental, torah, community] = BRANCHES;

  return (
    <Section tone="canvas">
      <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
        <Eyebrow>תחומי הפעילות</Eyebrow>
        <h2 className="font-display text-h1">ארבע זרועות. מעטפת אחת.</h2>
        <p className="max-w-[38ch] text-body-lg text-(--color-text-secondary) sm:max-w-none">
          כל זרוע עומדת בפני עצמה, אבל אף אחת מהן לא נבנתה בנפרד — הן חלקים של אותה מעטפת,
          שנפרשת סביב אדם לפי מה שהוא צריך באותו רגע.
        </p>
      </Reveal>

      <BentoGrid>
        {/* תא ראשי — בית הארחה */}
        <BentoCell span="wide" fill="tint" tint={hospitality.tint} href={hospitality.href} index={0}>
          {/* רמז קשת ברקע — המוטיב, לא קישוט */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -start-16 h-72 w-72 rounded-full border-2 opacity-15"
            style={{ borderColor: hospitality.color }}
          />
          <span
            className="arch-badge mb-5 shrink-0"
            style={{ background: hospitality.textColor, color: "white" }}
          >
            <Icon name={branchIcon.hospitality} className="h-6 w-6" strokeWidth={1.6} />
          </span>

          <h3 className="font-display text-h2" style={{ color: hospitality.textColor }}>
            {hospitality.name}
          </h3>
          <p className="mt-2 font-display text-h3 text-(--color-text-primary)">
            {hospitality.tagline}
          </p>
          <p className="mt-4 max-w-md text-body text-(--color-text-secondary)">
            {hospitality.summary}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-8 text-body-sm font-semibold text-(--color-text-primary)">
            לעמוד הזרוע
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
          </span>
        </BentoCell>

        {/* מרפאות שיניים */}
        <BranchCell branch={dental} index={1} />

        {/* תא סטטיסטיקה */}
        <BentoCell span="narrow" fill="deep" index={2} className="items-center text-center sm:items-start sm:text-start">
          <p className="text-overline font-body font-medium text-(--color-accent-on-deep)">פועלים כמעט כל השנה</p>
          <p className="mt-auto pt-6 font-display text-stat font-black text-white" dir="ltr">
            345
          </p>
          <p className="mt-2 text-body-sm text-(--color-navy-200)">
            ימים בשנה שבהם המטבח פעיל — <Placeholder needs="operating-days">נתון בהשלמה</Placeholder>
          </p>
        </BentoCell>

        {/* תורה וחינוך */}
        <BranchCell branch={torah} index={3} />

        {/* פעילות קהילתית */}
        <BranchCell branch={community} index={4} />
      </BentoGrid>
    </Section>
  );
}

function BranchCell({
  branch,
  span = "narrow",
  index,
}: {
  branch: (typeof BRANCHES)[number];
  span?: "narrow" | "medium";
  index: number;
}) {
  return (
    <BentoCell span={span} fill="tint" tint={branch.tint} href={branch.href} index={index}>
      <span
        className="arch-badge mb-5 shrink-0"
        style={{ background: branch.textColor, color: "white" }}
      >
        <Icon name={branchIcon[branch.id]} className="h-6 w-6" strokeWidth={1.6} />
      </span>

      <h3 className="font-heading text-h3" style={{ color: branch.textColor }}>
        {branch.name}
      </h3>
      <p className="mt-2 text-body font-medium text-(--color-text-primary)">{branch.tagline}</p>
      <p className="mt-3 text-body-sm text-(--color-text-secondary)">{branch.summary}</p>

      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-body-sm font-semibold text-(--color-text-primary)">
        לעמוד הזרוע
        <Icon name="arrow" className="h-4 w-4 rotate-180" />
      </span>
    </BentoCell>
  );
}
