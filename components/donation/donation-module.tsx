"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AmountSelector } from "@/components/donation/amount-selector";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/field";
import { getDonationProvider, type DonationFrequency } from "@/lib/donation/provider";
import { trackEvent } from "@/lib/analytics/events";

export function DonationModule({ programId }: { programId?: string }) {
  const router = useRouter();
  const [amount, setAmount] = useState<number | "custom">(180);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<DonationFrequency>("one-time");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolvedAmount = amount === "custom" ? Number(customAmount) : amount;
  const provider = getDonationProvider();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!resolvedAmount || resolvedAmount < 5) {
      setError("יש לבחור סכום תרומה תקין (מינימום 5 ₪).");
      return;
    }

    setSubmitting(true);
    trackEvent("donation_started", { amount: resolvedAmount, frequency, programId });
    try {
      const session = await provider.createSession({
        amountIls: resolvedAmount,
        frequency,
        programId,
      });
      trackEvent("donation_payment_started", { amount: resolvedAmount, frequency, programId });
      router.push(session.redirectUrl);
    } catch {
      setError("אירעה שגיאה בהתחלת התרומה. נסו שוב, או צרו קשר בטלפון.");
      trackEvent("donation_failed", { amount: resolvedAmount, frequency, programId });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-(--radius-lg) border border-(--color-border-subtle) bg-(--color-surface-raised) p-6 md:p-8"
      aria-describedby={!provider.isConfigured ? "donation-provider-note" : undefined}
    >
      <div className="flex rounded-(--radius-sm) border border-(--color-border-strong) p-1">
        {(
          [
            { id: "one-time", label: "תרומה חד פעמית" },
            { id: "monthly", label: "תרומה חודשית קבועה" },
          ] as const
        ).map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => {
              setFrequency(opt.id);
              if (opt.id === "monthly") trackEvent("recurring_selected", { programId });
            }}
            aria-pressed={frequency === opt.id}
            className={`flex-1 rounded-[calc(var(--radius-sm)-2px)] py-2.5 text-sm font-medium transition-colors ${
              frequency === opt.id
                ? "bg-(--color-navy-950) text-(--color-text-inverse)"
                : "text-(--color-text-secondary)"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <AmountSelector
        value={amount}
        onChange={(v) => {
          setAmount(v);
          if (typeof v === "number") trackEvent("donation_amount_selected", { amount: v, programId });
        }}
      />

      {amount === "custom" ? (
        <div>
          <label htmlFor="custom-amount" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
            סכום בשקלים
          </label>
          <Input
            id="custom-amount"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="לדוגמה: 250"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value.replace(/\D/g, ""))}
          />
        </div>
      ) : null}

      {error ? (
        <p role="alert" className="text-sm text-(--color-feedback-error)">
          {error}
        </p>
      ) : null}

      <Button type="submit" variant="donate" disabled={submitting} className="w-full">
        {submitting ? "מעביר אתכם לתשלום…" : `לתרומה של ₪${resolvedAmount || ""}`}
      </Button>

      {!provider.isConfigured ? (
        <p id="donation-provider-note" className="text-center text-xs text-(--color-text-muted)">
          [נדרש אימות: חיבור לספק סליקה פעיל — כרגע מדובר בזרימה לדוגמה בלבד]
        </p>
      ) : null}
    </form>
  );
}
