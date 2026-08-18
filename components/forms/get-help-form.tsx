"use client";

import { useState } from "react";
import { FormField, Input, Textarea, Select, Checkbox } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { getHelpSchema, fieldErrors } from "@/lib/validation/forms";
import { trackEvent } from "@/lib/analytics/events";

type Status = "idle" | "submitting" | "success" | "error";

const RELATIONS = [
  { value: "", label: "בחרו את המתאים" },
  { value: "self", label: "אני זקוק/ה לעזרה" },
  { value: "family", label: "פונה בשם בן/בת משפחה" },
  { value: "referral", label: "מפנה מטעם גורם מסייע" },
];

export function GetHelpForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    relation: "",
    message: "",
    consent: false as boolean,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  function onFocusOnce() {
    if (!started) {
      setStarted(true);
      trackEvent("help_request_started");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = getHelpSchema.safeParse(values);
    if (!result.success) {
      setErrors(fieldErrors(result.error));
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/get-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      trackEvent("help_request_completed");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-(--radius-md) border border-(--color-feedback-success) bg-(--color-feedback-success-bg) p-6">
        <Icon name="check" className="h-6 w-6 text-(--color-feedback-success)" />
        <p className="text-(--color-text-primary)">
          הפנייה התקבלה בדיסקרטיות מלאה. ניצור קשר בהקדם. אם מדובר במצב דחוף — אפשר גם להתקשר ישירות.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate onFocus={onFocusOnce} className="flex flex-col gap-5">
      <FormField label="שם מלא" required error={errors.name}>
        {({ id, describedBy, invalid }) => (
          <Input id={id} aria-describedby={describedBy} invalid={invalid} value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))} autoComplete="name" />
        )}
      </FormField>

      <FormField label="טלפון ליצירת קשר" required error={errors.phone}>
        {({ id, describedBy, invalid }) => (
          <Input id={id} type="tel" aria-describedby={describedBy} invalid={invalid} value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))} autoComplete="tel" />
        )}
      </FormField>

      <FormField label="סוג הפנייה" required error={errors.relation}>
        {({ id, describedBy, invalid }) => (
          <Select id={id} aria-describedby={describedBy} invalid={invalid} value={values.relation}
            onChange={(e) => setValues((v) => ({ ...v, relation: e.target.value }))}>
            {RELATIONS.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </Select>
        )}
      </FormField>

      <FormField label="איך נוכל לעזור" required error={errors.message} hint="כל פרט שתשתפו יעזור לנו להגיב נכון">
        {({ id, describedBy, invalid }) => (
          <Textarea id={id} aria-describedby={describedBy} invalid={invalid} value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))} />
        )}
      </FormField>

      <Checkbox
        label="אני מאשר/ת שניצור קשר חוזר בנוגע לפנייה זו"
        checked={values.consent}
        onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
      />
      {errors.consent ? (
        <p role="alert" className="-mt-3 text-sm text-(--color-feedback-error)">
          {errors.consent}
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="text-sm text-(--color-feedback-error)">
          משהו השתבש בשליחה. אפשר לנסות שוב, או להתקשר ישירות — הפרטים בעמוד יצירת הקשר.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "שולח…" : "שליחת הפנייה"}
      </Button>
    </form>
  );
}
