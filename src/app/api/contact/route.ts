import { NextResponse } from "next/server";
import { brand } from "@/lib/constants/brand";

import { sendNotification } from "@/lib/email/sendNotification";
import { checkRateLimit } from "@/lib/utils/rateLimit";
import { readFormRequest } from "@/lib/utils/requestPayload";
import { contactFormSchema, formMessages } from "@/lib/validation/forms";

function clientKey(request: Request) {
  return request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
}

export async function POST(request: Request) {
  const limit = checkRateLimit({ key: `contact:${clientKey(request)}` });
  if (!limit.allowed) {
    return NextResponse.json({ message: formMessages.error }, { status: 429 });
  }

  const payload = await readFormRequest(request);
  if (!payload.ok) return NextResponse.json({ message: formMessages.error }, { status: payload.status });
  const parsed = contactFormSchema.safeParse(payload.data);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors, message: formMessages.error },
      { status: 400 },
    );
  }

  try {
    const result = await sendNotification({
      to: process.env.CONTACT_EMAIL || brand.email,
      replyTo: parsed.data.email,
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
    if (!result.delivered) {
      return NextResponse.json(
        { message: "Je bericht is niet verstuurd. Probeer het opnieuw of stuur het rechtstreeks via e-mail." },
        { status: result.reason === "unavailable" ? 503 : 502 },
      );
    }
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json({ message: formMessages.error }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: formMessages.contactSuccess });
}
