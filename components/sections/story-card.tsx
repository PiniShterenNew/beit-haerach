import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function StoryCard({
  assetId,
  title,
  excerpt,
  tag,
}: {
  assetId: string;
  title: string;
  excerpt: string;
  tag?: string;
}) {
  return (
    <article className="flex flex-col gap-4">
      <MediaPlaceholder assetId={assetId} ratio="4 / 3" wash="sage" label={title} />
      <div className="flex flex-col gap-2">
        {tag ? <span className="text-xs tracking-[0.1em] text-(--color-gold-600)">{tag}</span> : null}
        <h3 className="font-display text-xl text-(--color-text-primary)">{title}</h3>
        <p className="text-sm leading-relaxed text-(--color-text-secondary)">{excerpt}</p>
      </div>
    </article>
  );
}
