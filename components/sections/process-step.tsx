import { Icon, type IconName } from "@/components/ui/icon";

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
    <div className="relative flex flex-col gap-4 pe-6">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm text-(--color-gold-600)">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-(--color-border-strong)" />
      </div>
      <Icon name={icon} className="h-8 w-8 text-(--color-navy-950)" />
      <h3 className="font-display text-xl text-(--color-text-primary)">{title}</h3>
      <p className="text-sm leading-relaxed text-(--color-text-secondary)">{description}</p>
    </div>
  );
}
