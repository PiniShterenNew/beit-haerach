import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProgramCard } from "@/components/sections/program-card";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "התוכניות שלנו",
  description: "בית הארחה, מרפאות שיניים, כוללים וישיבה — ארבע תוכניות תחת מרכז קהילתי עזרת ישראל.",
};

export default function ProgramsPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          level="h1"
          eyebrow="התוכניות שלנו"
          title="אקוסיסטם אחד, ארבע דרכים לדאוג לאדם"
          lede="כל תוכנית פועלת בתחום עצמאי — מזון, בריאות, לימוד וחינוך — ומתוך אותה מחויבות משותפת."
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(2n)]:lg:mt-12">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="inverse" className="text-center">
        <div className="reveal-item mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">רוצים לתמוך בפעילות?</h2>
          <p className="text-(--color-text-inverse-muted)">
            אפשר לתרום באופן כללי לטובת כלל התוכניות, או לבחור תוכנית ספציפית בעמוד התרומה.
          </p>
          <Button href="/donate" size="lg" variant="accent">לתרומה</Button>
        </div>
      </Section>
    </>
  );
}
