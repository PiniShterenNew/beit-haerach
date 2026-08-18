import { Icon } from "@/components/ui/icon";

export function DocumentLink({
  title,
  meta,
  href,
}: {
  title: string;
  meta?: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius-sm) bg-(--color-surface-muted) text-(--color-text-secondary)">
        <Icon name="document" className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-medium text-(--color-text-primary)">{title}</span>
        {meta ? <span className="text-xs text-(--color-text-muted)">{meta}</span> : null}
      </span>
    </>
  );
  if (!href) {
    return (
      <div className="flex items-center gap-3 border border-dashed border-(--color-border-strong) rounded-(--radius-md) px-4 py-3 opacity-70">
        {content}
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-(--radius-md) border border-(--color-border-subtle) px-4 py-3 transition-colors hover:border-(--color-border-strong) hover:bg-(--color-surface-muted)"
    >
      {content}
    </a>
  );
}
