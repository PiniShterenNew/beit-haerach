import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Program } from "@/lib/content/site";
import { revealStyle } from "@/lib/motion";

const iconByProgram: Record<Program["id"], IconName> = {
  guesthouse: "meal",
  dental: "dental",
  kollels: "torah",
  yeshiva: "graduation",
};

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  return (
    <Link
      href={program.href}
      className="reveal-item group relative top-0 flex flex-col gap-5 rounded-(--radius-md) border-t-2 p-5 transition-[top,box-shadow,background-color] duration-(--motion-base) ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-top-1 hover:bg-(--color-surface-raised) hover:shadow-md"
      style={{ borderColor: `var(--color-${program.colorVar}-500)`, ...revealStyle(index)}}
    >
      <div className="flex items-center gap-3">
        <Icon
          name={iconByProgram[program.id]}
          className="h-9 w-9 shrink-0 transition-transform duration-(--motion-base) group-hover:scale-110"
          strokeWidth={1.4}
          style={{ color: `var(--color-${program.colorVar}-700)` }}
        />
        <span className="h-px flex-1" style={{ background: `var(--color-${program.colorVar}-400)` }} />
      </div>
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
