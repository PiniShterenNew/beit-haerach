import { Icon, type IconName } from "@/components/ui/icon";

export function TrustBadge({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-gold-100) text-(--color-gold-600)">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-base font-medium text-(--color-text-primary)">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-(--color-text-secondary)">{description}</p>
      </div>
    </div>
  );
}
