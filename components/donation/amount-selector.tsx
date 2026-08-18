"use client";

import { SUGGESTED_AMOUNTS_ILS } from "@/lib/donation/provider";

export function AmountSelector({
  value,
  onChange,
}: {
  value: number | "custom";
  onChange: (value: number | "custom") => void;
}) {
  return (
    <div role="radiogroup" aria-label="בחירת סכום תרומה" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {SUGGESTED_AMOUNTS_ILS.map((amount) => {
        const selected = value === amount;
        return (
          <button
            key={amount}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(amount)}
            className={`flex h-14 items-center justify-center rounded-(--radius-sm) border text-lg font-medium transition-colors ${
              selected
                ? "border-(--color-navy-950) bg-(--color-navy-950) text-(--color-text-inverse)"
                : "border-(--color-border-strong) text-(--color-text-primary) hover:border-(--color-navy-950)"
            }`}
          >
            ₪{amount}
          </button>
        );
      })}
      <button
        type="button"
        role="radio"
        aria-checked={value === "custom"}
        onClick={() => onChange("custom")}
        className={`col-span-2 flex h-14 items-center justify-center rounded-(--radius-sm) border text-sm font-medium transition-colors sm:col-span-4 ${
          value === "custom"
            ? "border-(--color-navy-950) bg-(--color-navy-950) text-(--color-text-inverse)"
            : "border-(--color-border-strong) text-(--color-text-primary) hover:border-(--color-navy-950)"
        }`}
      >
        סכום אחר
      </button>
    </div>
  );
}
