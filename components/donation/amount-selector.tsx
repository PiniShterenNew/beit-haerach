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
            className={`flex h-14 items-center justify-center rounded-md border text-h3 font-bold transition-colors ${
              selected
                ? "border-(--color-action-primary) bg-(--color-action-primary) text-(--color-text-on-action)"
                : "border-(--color-border-default) text-(--color-text-primary) hover:border-(--color-action-primary)"
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
        className={`col-span-2 flex h-14 items-center justify-center rounded-md border text-body-sm font-medium transition-colors sm:col-span-4 ${
          value === "custom"
            ? "border-(--color-action-primary) bg-(--color-action-primary) text-(--color-text-on-action)"
            : "border-(--color-border-default) text-(--color-text-primary) hover:border-(--color-action-primary)"
        }`}
      >
        סכום אחר
      </button>
    </div>
  );
}
