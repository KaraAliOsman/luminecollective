import { NextResponse } from "next/server";

import { sendNotification } from "@/lib/email/sendNotification";
import { checkRateLimit } from "@/lib/utils/rateLimit";
import { contactFormSchema, formMessages } from "@/lib/validation/forms";

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
}

export async function POST(request: Request) {
  const limit = checkRateLimit({ key: `contact:${clientKey(request)}` });
  if (!limit.allowed) {
    return NextResponse.json({ message: formMessages.error }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors, message: formMessages.error },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: formMessages.contactSuccess });
  }

  try {
    await sendNotification({
      to: process.env.CONTACT_EMAIL,
      subject: "Nieuw contactbericht via Lumina Collective",
      intro: "Er is een nieuw contactbericht ingestuurd via de website.",
      fields: {
        Naam: parsed.data.name,
        Email: parsed.data.email,
        Onderwerp: parsed.data.subject,
        Bericht: parsed.data.message,
        Consent: parsed.data.consent,
      },
    });
  } catch {
    return NextResponse.json({ message: formMessages.error }, { status: 500 });
  }

  return NextResponse.json({ message: formMessages.contactSuccess });
}
