import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Program } from "@/lib/content/site";

const iconByProgram: Record<Program["id"], IconName> = {
  guesthouse: "meal",
  dental: "dental",
  kollels: "torah",
  yeshiva: "graduation",
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={program.href}
      className="group flex flex-col gap-5 border-t-2 pt-6 transition-colors"
      style={{ borderColor: `var(--color-${program.colorVar}-500)` }}
    >
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-full"
        style={{ background: `var(--color-${program.colorVar}-100)`, color: `var(--color-${program.colorVar}-700)` }}
      >
        <Icon name={iconByProgram[program.id]} className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl text-(--color-text-primary)">{program.name}</h3>
        <p className="text-sm text-(--color-text-secondary)">{program.tagline}</p>
        <p className="text-sm leading-relaxed text-(--color-text-secondary)">{program.summary}</p>
      </div>
      <span
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-(--color-text-primary) transition-transform group-hover:-translate-x-1"
        style={{ color: `var(--color-${program.colorVar}-700)` }}
      >
        לפרטים על התוכנית
        <Icon name="arrow" className="h-4 w-4 rotate-180" />
      </span>
    </Link>
  );
}
