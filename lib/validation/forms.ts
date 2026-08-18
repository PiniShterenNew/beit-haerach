import { z } from "zod";

const requiredText = (label: string) =>
  z.string().trim().min(2, `${label} — יש להזין לפחות 2 תווים`);

const phoneField = z
  .string()
  .trim()
  .regex(/^0\d{1,2}-?\d{7}$/, "מספר טלפון לא תקין (לדוגמה: 04-1234567)");

const emailField = z.string().trim().email("כתובת דוא\"ל לא תקינה");

export const contactSchema = z.object({
  name: requiredText("שם מלא"),
  phone: phoneField,
  email: emailField.optional().or(z.literal("")),
  message: z.string().trim().min(10, "יש לפרט את הפנייה (לפחות 10 תווים)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const volunteerSchema = z.object({
  name: requiredText("שם מלא"),
  phone: phoneField,
  email: emailField,
  area: z.string().trim().min(1, "יש לבחור תחום התנדבות"),
  availability: z.string().trim().min(2, "יש לציין זמינות משוערת"),
  message: z.string().trim().optional().or(z.literal("")),
});

export type VolunteerFormValues = z.infer<typeof volunteerSchema>;

export const getHelpSchema = z.object({
  name: requiredText("שם מלא"),
  phone: phoneField,
  relation: z.string().trim().min(1, "יש לבחור את סוג הפנייה"),
  message: z.string().trim().min(10, "אנא תארו את הבקשה (לפחות 10 תווים)"),
  consent: z.boolean().refine((v) => v === true, { message: "יש לאשר יצירת קשר חוזר" }),
});

export type GetHelpFormValues = z.infer<typeof getHelpSchema>;

export function fieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0]);
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
