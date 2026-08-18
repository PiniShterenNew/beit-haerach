import { Icon, type IconName } from "@/components/ui/icon";
import { revealStyle } from "@/lib/motion";

export function TrustBadge({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: IconName;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <div className="reveal-item flex items-start gap-4" style={{ ...revealStyle(index)}}>
      <Icon name={icon} className="icon-mark mt-1 h-7 w-7 shrink-0" strokeWidth={1.4} />
      <div>
        <h3 className="text-base font-medium text-(--color-text-primary)">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-(--color-text-secondary)">{description}</p>
      </div>
    </div>
  );
}
