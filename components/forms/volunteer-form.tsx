"use client";

import { useState } from "react";
import { FormField, Input, Textarea, Select } from "@/components/ui/field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icon";
import { volunteerSchema, fieldErrors } from "@/lib/validation/forms";
import { trackEvent } from "@/lib/analytics/events";

type Status = "idle" | "submitting" | "success" | "error";

const AREAS = [
  { value: "", label: "בחרו תחום התנדבות" },
  { value: "cooking", label: "בישול והכנת ארוחות" },
  { value: "packing", label: "אריזה" },
  { value: "delivery", label: "חלוקה ומשלוחים" },
  { value: "kitchen-support", label: "תמיכה כללית במטבח" },
  { value: "events", label: "אירועי שבת וחגים" },
  { value: "other", label: "אחר" },
];

export function VolunteerForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    availability: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  function onFocusOnce() {
    if (!started) {
      setStarted(true);
      trackEvent("volunteer_started");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = volunteerSchema.safeParse(values);
    if (!result.success) {
      setErrors(fieldErrors(result.error));
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      trackEvent("volunteer_completed");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-(--radius-md) border border-(--color-feedback-success) bg-(--color-feedback-success-bg) p-6">
        <Icon name="check" className="h-6 w-6 text-(--color-feedback-success)" />
        <p className="text-(--color-text-primary)">
          תודה! פנייתכם להתנדבות התקבלה ונציג/ה יחזרו אליכם לתיאום.
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

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="טלפון" required error={errors.phone}>
          {({ id, describedBy, invalid }) => (
            <Input id={id} type="tel" aria-describedby={describedBy} invalid={invalid} value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))} autoComplete="tel" />
          )}
        </FormField>
        <FormField label="דוא״ל" required error={errors.email}>
          {({ id, describedBy, invalid }) => (
            <Input id={id} type="email" aria-describedby={describedBy} invalid={invalid} value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} autoComplete="email" />
          )}
        </FormField>
      </div>

      <FormField label="תחום התנדבות" required error={errors.area}>
        {({ id, describedBy, invalid }) => (
          <Select id={id} aria-describedby={describedBy} invalid={invalid} value={values.area}
            onChange={(e) => setValues((v) => ({ ...v, area: e.target.value }))}>
            {AREAS.map((a) => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </Select>
        )}
      </FormField>

      <FormField label="זמינות משוערת" required error={errors.availability} hint="לדוגמה: ימי שלישי אחה״צ">
        {({ id, describedBy, invalid }) => (
          <Input id={id} aria-describedby={describedBy} invalid={invalid} value={values.availability}
            onChange={(e) => setValues((v) => ({ ...v, availability: e.target.value }))} />
        )}
      </FormField>

      <FormField label="משהו נוסף שכדאי שנדע" error={errors.message}>
        {({ id, describedBy, invalid }) => (
          <Textarea id={id} aria-describedby={describedBy} invalid={invalid} value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))} />
        )}
      </FormField>

      {status === "error" ? (
        <p role="alert" className="text-body-sm text-(--color-feedback-error)">
          משהו השתבש בשליחה. אפשר לנסות שוב, או לפנות בטלפון בעמוד יצירת הקשר.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto sm:self-start">
        {status === "submitting" ? "שולח…" : "שליחת בקשת ההתנדבות"}
      </Button>
    </form>
  );
}
