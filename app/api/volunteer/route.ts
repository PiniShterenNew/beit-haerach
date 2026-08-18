import { NextResponse } from "next/server";
import { volunteerSchema } from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = volunteerSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // [נדרש אימות: יעד שליחה — רכז/ת התנדבות]. כרגע נרשם ליומן השרת בלבד.
  console.info("[volunteer-form] new submission", result.data);

  return NextResponse.json({ ok: true });
}
