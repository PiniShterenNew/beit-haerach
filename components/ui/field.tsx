"use client";

import { useId, type ComponentPropsWithoutRef } from "react";

/* אותו רדיוס, אותו גובה מינימלי ואותה טיפוגרפיה כמו .btn — כדי ששדה
   וכפתור שיושבים זה מתחת לזה ייראו כמערכת אחת. */
const controlBase =
  "w-full min-h-11 rounded-(--radius-md) border border-(--color-border-default) bg-(--color-surface) px-4 py-2.5 text-body text-(--color-text-primary) placeholder:text-(--color-text-tertiary) transition-colors hover:border-(--color-border-strong) focus-visible:border-(--color-action-primary)";

export function FormField({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => React.ReactNode;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-medium text-(--color-text-primary)">
        {label}
        {required ? <span className="text-(--color-feedback-error)"> *</span> : null}
      </label>
      {children({ id, describedBy, invalid: Boolean(error) })}
      {hint && !error ? (
        <p id={hintId} className="text-caption text-(--color-text-tertiary)">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-caption text-(--color-feedback-error)">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input(props: ComponentPropsWithoutRef<"input"> & { invalid?: boolean }) {
  const { invalid, className, ...rest } = props;
  return (
    <input
      className={`${controlBase} ${invalid ? "border-(--color-feedback-error)" : ""} ${className ?? ""}`}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea"> & { invalid?: boolean }) {
  const { invalid, className, ...rest } = props;
  return (
    <textarea
      className={`${controlBase} min-h-32 resize-y ${invalid ? "border-(--color-feedback-error)" : ""} ${className ?? ""}`}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export function Select(props: ComponentPropsWithoutRef<"select"> & { invalid?: boolean }) {
  const { invalid, className, children, ...rest } = props;
  return (
    <select
      className={`${controlBase} ${invalid ? "border-(--color-feedback-error)" : ""} ${className ?? ""}`}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {children}
    </select>
  );
}

export function Checkbox({
  label,
  ...rest
}: ComponentPropsWithoutRef<"input"> & { label: string }) {
  const id = useId();
  return (
    <div className="flex min-h-11 items-center gap-2.5">
      <input
        id={id}
        type="checkbox"
        className="h-5 w-5 rounded-(--radius-sm) border-(--color-border-strong) accent-(--color-navy-900)"
        {...rest}
      />
      <label htmlFor={id} className="text-body-sm text-(--color-text-secondary)">
        {label}
      </label>
    </div>
  );
}

export function Radio({
  label,
  ...rest
}: ComponentPropsWithoutRef<"input"> & { label: string }) {
  const id = useId();
  return (
    <div className="flex min-h-11 items-center gap-2.5">
      <input
        id={id}
        type="radio"
        className="h-5 w-5 border-(--color-border-strong) accent-(--color-navy-900)"
        {...rest}
      />
      <label htmlFor={id} className="text-body-sm text-(--color-text-secondary)">
        {label}
      </label>
    </div>
  );
}
