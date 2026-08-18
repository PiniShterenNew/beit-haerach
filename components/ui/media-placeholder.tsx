import { Mark } from "@/components/brand/mark";

const washes: Record<string, string> = {
  navy: "linear-gradient(135deg, #102547 0%, #0B1D3A 100%)",
  sage: "linear-gradient(135deg, #E4ECE4 0%, #C8C2B1 100%)",
  clinic: "linear-gradient(135deg, #E2EEF2 0%, #C8C2B1 100%)",
  kollel: "linear-gradient(135deg, #F6ECD2 0%, #DED8C8 100%)",
  yeshiva: "linear-gradient(135deg, #E4ECE5 0%, #DED8C8 100%)",
  stone: "linear-gradient(135deg, #EFEADD 0%, #DED8C8 100%)",
};

/**
 * Intentional, art-directed placeholder for imagery that is not yet sourced.
 * Preserves exact aspect ratio + layout behavior so real photography can be
 * dropped in later without reflow. Registered in docs/ASSET_MANIFEST.json.
 */
export function MediaPlaceholder({
  assetId,
  ratio = "4 / 3",
  wash = "stone" as keyof typeof washes,
  markOpacity = 0.14,
  rounded = true,
  className,
  label,
}: {
  assetId: string;
  ratio?: string;
  wash?: keyof typeof washes;
  markOpacity?: number;
  rounded?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "תמונה בהמתנה למקור אמיתי"}
      data-asset-id={assetId}
      className={`relative overflow-hidden ${rounded ? "rounded-(--radius-md)" : ""} ${className ?? ""}`}
      style={{ aspectRatio: ratio, background: washes[wash] ?? washes.stone }}
    >
      <Mark
        tone="mono"
        className="absolute left-1/2 top-1/2 h-[65%] w-auto -translate-x-1/2 -translate-y-1/2 text-(--color-navy-950)"
        titleId={undefined}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(11,29,58,0.05) 0px, rgba(11,29,58,0.05) 1px, transparent 1px, transparent 14px)",
          opacity: markOpacity * 3,
        }}
      />
    </div>
  );
}
