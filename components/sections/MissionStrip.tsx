import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MISSION } from "@/lib/content/site";

/**
 * מקטע 2 — MISSION STRIP.
 *
 * משפט מפתח אחד, מרכזי, על משטח כהה. תפקידו לעצור את הגלילה בין ה-hero
 * לבין ההסבר — רגע שקט אחד שמגדיר את הארגון, בלי כפתור ובלי קישור.
 */
export function MissionStrip() {
  return (
    <Section tone="deep" width="default" className="py-14 md:py-18 lg:py-22">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-h2 font-bold text-white text-balance">{MISSION}</p>
        <span aria-hidden="true" className="h-0.5 w-15 bg-(--color-action-secondary)" />
      </Reveal>
    </Section>
  );
}
