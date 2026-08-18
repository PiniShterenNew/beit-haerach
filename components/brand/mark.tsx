type MarkTone = "brand" | "mono" | "inverse";

export function Mark({
  tone = "brand",
  className,
  titleId,
}: {
  tone?: MarkTone;
  className?: string;
  titleId?: string;
}) {
  const archColor =
    tone === "mono" ? "currentColor" : tone === "inverse" ? "#F7F4EF" : "#0B1D3A";
  const figureColor =
    tone === "mono" ? "currentColor" : "#D4AF37";
  const pageLeft =
    tone === "mono" ? "currentColor" : tone === "inverse" ? "#8DA88F" : "#8DA88F";
  const pageRight =
    tone === "mono" ? "currentColor" : tone === "inverse" ? "#C8C2B1" : "#C8C2B1";
  const opacityInner = tone === "mono" ? 0.55 : 1;

  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-labelledby={titleId}
      fill="none"
    >
      <title id={titleId}>סמל מרכז קהילתי עזרת ישראל</title>
      {/* outer arch */}
      <path
        d="M38,208 C38,120 38,36 100,36 C162,36 162,120 162,208"
        stroke={archColor}
        strokeWidth={13}
        strokeLinecap="round"
      />
      {/* inner arch */}
      <path
        d="M58,208 C58,132 58,60 100,60 C142,60 142,132 142,208"
        stroke={archColor}
        strokeWidth={7}
        strokeLinecap="round"
        opacity={opacityInner}
      />
      {/* open book */}
      <path
        d="M100,206 C82,206 60,197 46,180 C64,189 82,193 100,195 Z"
        fill={pageLeft}
      />
      <path
        d="M100,206 C118,206 140,197 154,180 C136,189 118,193 100,195 Z"
        fill={pageRight}
      />
      <path
        d="M100,193 L100,206"
        stroke={figureColor}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {/* growth / human figure */}
      <circle cx="100" cy="118" r="10" fill={figureColor} />
      <path
        d="M100,130 C114,144 114,166 100,184 C86,166 86,144 100,130 Z"
        fill={figureColor}
      />
    </svg>
  );
}
