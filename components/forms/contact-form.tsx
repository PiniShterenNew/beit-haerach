"use client";

import { useState } from "react";
import { FormField, Input, Textarea } from "@/components/ui/field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icon";
import { contactSchema, fieldErrors } from "@/lib/validation/forms";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      setErrors(fieldErrors(result.error));
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-(--radius-md) border border-(--color-feedback-success) bg-(--color-feedback-success-bg) p-6">
        <Icon name="check" className="h-6 w-6 text-(--color-feedback-success)" />
        <p className="text-(--color-text-primary)">
          הפנייה התקבלה. ניצור איתכם קשר בהקדם האפשרי.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField label="שם מלא" required error={errors.name}>
        {({ id, describedBy, invalid }) => (
          <Input
            id={id}
            aria-describedby={describedBy}
            invalid={invalid}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            autoComplete="name"
          />
        )}
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="טלפון" required error={errors.phone}>
          {({ id, describedBy, invalid }) => (
            <Input
              id={id}
              type="tel"
              aria-describedby={describedBy}
              invalid={invalid}
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              autoComplete="tel"
            />
          )}
        </FormField>
        <FormField label="דוא״ל" error={errors.email} hint="לא חובה">
          {({ id, describedBy, invalid }) => (
            <Input
              id={id}
              type="email"
              aria-describedby={describedBy}
              invalid={invalid}
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              autoComplete="email"
            />
          )}
        </FormField>
      </div>

      <FormField label="הודעה" required error={errors.message}>
        {({ id, describedBy, invalid }) => (
          <Textarea
            id={id}
            aria-describedby={describedBy}
            invalid={invalid}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          />
        )}
      </FormField>

      {status === "error" ? (
        <p role="alert" className="text-body-sm text-(--color-feedback-error)">
          משהו השתבש בשליחה. אפשר לנסות שוב, או לפנות בטלפון/וואטסאפ בעמוד יצירת הקשר.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto sm:self-start">
        {status === "submitting" ? "שולח…" : "שליחת הפנייה"}
      </Button>
    </form>
  );
}
