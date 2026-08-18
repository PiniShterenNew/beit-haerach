import { NextResponse } from "next/server";
import { getHelpSchema } from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = getHelpSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // [נדרש אימות: יעד שליחה — צוות מענה לפניות סיוע]. כרגע נרשם ליומן השרת בלבד.
  console.info("[get-help-form] new submission", { ...result.data, message: "[redacted-in-log]" });

  return NextResponse.json({ ok: true });
}
