import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // [נדרש אימות: יעד שליחה — דוא"ל/CRM]. כרגע נרשם ליומן השרת בלבד.
  console.info("[contact-form] new submission", result.data);

  return NextResponse.json({ ok: true });
}
