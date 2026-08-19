import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { DONATE_CTA, CTA } from "@/lib/content/site";

/**
 * מקטע 10 — CTA לתרומה.
 *
 * הקשת הדקורטיבית חוזרת כאן בפעם האחרונה, בזהב: העמוד נפתח בקשת ונסגר בה.
 * שתי פעולות בלבד — תרומה וקשר — כדי שההנעה תישאר חד-משמעית.
 */
export function DonateCTA() {
  return (
    <Section tone="deep" width="default" className="overflow-hidden text-center">
      <Reveal className="flex flex-col items-center gap-6">
        <SectionDivider tone="inverse" />

        <h2 className="font-display text-h1 font-black text-white text-balance">
          {DONATE_CTA.headline}
        </h2>

        <p className="max-w-md text-body-lg text-(--color-navy-100)">{DONATE_CTA.body}</p>

        <div className="flex w-full flex-col gap-3 pt-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button href="/donate" variant="donate" blockOnMobile>
            {CTA.donate}
          </Button>
          <Button href="/contact" variant="ghostInverse" blockOnMobile>
            {CTA.contact}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
