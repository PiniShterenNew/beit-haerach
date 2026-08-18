export function Quote({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <figure className="border-e-2 border-(--color-gold-500) ps-6">
      <blockquote className="font-display text-2xl leading-snug text-(--color-text-primary) md:text-3xl">
        “{text}”
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4 text-sm text-(--color-text-secondary)">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
