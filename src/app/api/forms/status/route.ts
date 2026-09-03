import { NextResponse } from "next/server";
import { isEmailConfigured } from "@/lib/email/sendNotification";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ available: isEmailConfigured() }, { headers: { "Cache-Control": "no-store" } });
}
