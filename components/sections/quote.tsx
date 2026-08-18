export function Quote({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <figure className="reveal-item relative">
      <span
        aria-hidden="true"
        className="font-display absolute -top-10 -start-2 text-[8rem] leading-none text-(--color-gold-500) opacity-25 md:-top-14 md:text-[10rem]"
      >
        “
      </span>
      <blockquote className="relative font-display text-3xl leading-snug text-(--color-text-primary) md:text-4xl">
        {text}
      </blockquote>
      {attribution ? (
        <figcaption className="relative mt-5 text-sm text-(--color-text-secondary)">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
