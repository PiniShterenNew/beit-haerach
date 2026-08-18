import { Icon, type IconName } from "@/components/ui/icon";
import { revealStyle } from "@/lib/motion";

export function ProcessStep({
  index,
  icon,
  title,
  description,
}: {
  index: number;
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <div className="reveal-item relative flex flex-col gap-3 pe-6" style={{ ...revealStyle(index - 1) }}>
      <span aria-hidden="true" className="ghost-numeral select-none text-7xl md:text-8xl">
        {String(index).padStart(2, "0")}
      </span>
      <Icon name={icon} className="-mt-3 h-8 w-8 text-(--color-navy-950)" strokeWidth={1.4} />
      <h3 className="font-display text-xl text-(--color-text-primary)">{title}</h3>
      <p className="text-sm leading-relaxed text-(--color-text-secondary)">{description}</p>
      <span
        className="reveal-line mt-1 h-px w-full bg-(--color-border-strong)"
        style={{ ...revealStyle(index - 1) }}
      />
    </div>
  );
}
