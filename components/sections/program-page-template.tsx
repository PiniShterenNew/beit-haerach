import { Section, SectionHeader } from "@/components/ui/section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { TrustBadge } from "@/components/sections/trust-badge";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Program } from "@/lib/content/site";

export interface ProgramHighlight {
  icon: IconName;
  title: string;
  description: string;
}

export function ProgramPageTemplate({
  program,
  heroAssetId,
  intro,
  highlights,
  faq,
}: {
  program: Program;
  heroAssetId: string;
  intro: string[];
  highlights: ProgramHighlight[];
  faq: AccordionItem[];
}) {
  const accent = `var(--color-${program.colorVar}-500)`;
  const accentSoft = `var(--color-${program.colorVar}-100)`;
  const accentStrong = `var(--color-${program.colorVar}-700)`;

  return (
    <>
      <Section className="pt-12 md:pt-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium" style={{ background: accentSoft, color: accentStrong }}>
              {program.name}
            </span>
            <h1 className="font-display text-4xl md:text-5xl">{program.tagline}</h1>
            {intro.map((p) => (
              <p key={p} className="text-base leading-relaxed text-(--color-text-secondary)">
                {p}
              </p>
            ))}
            <Button href="/donate" size="lg" style={{ background: accent, color: "#0B1D3A" }} className="self-start">
              תמכו בתוכנית זו
            </Button>
          </div>
          <MediaPlaceholder assetId={heroAssetId} ratio="4 / 3" wash={program.colorVar} label={`תמונת פתיחה — ${program.name} (בהמתנה לתמונה אמיתית)`} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader title="מה כולל" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <TrustBadge key={h.title} icon={h.icon} title={h.title} description={h.description} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="שאלות נפוצות" />
        <Accordion items={faq} />
      </Section>

      <Section tone="inverse" className="text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <Icon name="donation" className="h-8 w-8 text-(--color-gold-400)" />
          <h2 className="font-display text-3xl md:text-4xl">אפשר לעזור עכשיו</h2>
          <p className="text-(--color-text-inverse-muted)">כל תרומה ל{program.name} ממשיכה את הפעילות הישירה של התוכנית.</p>
          <Button href="/donate" size="lg" variant="accent">לתרומה ל{program.name}</Button>
        </div>
      </Section>
    </>
  );
}
