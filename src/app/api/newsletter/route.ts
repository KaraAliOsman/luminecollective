import { NextResponse } from "next/server";
import { brand } from "@/lib/constants/brand";

import { sendNotification } from "@/lib/email/sendNotification";
import { checkRateLimit } from "@/lib/utils/rateLimit";
import { readFormRequest } from "@/lib/utils/requestPayload";
import { formMessages, newsletterFormSchema } from "@/lib/validation/forms";

function clientKey(request: Request) {
  return request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
}

export async function POST(request: Request) {
  const limit = checkRateLimit({ key: `newsletter:${clientKey(request)}`, limit: 8 });
  if (!limit.allowed) {
    return NextResponse.json({ message: formMessages.error }, { status: 429 });
  }

  const payload = await readFormRequest(request);
  if (!payload.ok) return NextResponse.json({ message: formMessages.error }, { status: payload.status });
  const parsed = newsletterFormSchema.safeParse(payload.data);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors, message: formMessages.error },
      { status: 400 },
    );
  }

  try {
    const result = await sendNotification({
      to: process.env.NEWSLETTER_EMAIL || process.env.CONTACT_EMAIL || brand.email,
      replyTo: parsed.data.email,
      subject: "Nieuw verzoek om updates van Lumina Collective",
      intro: "Deze bezoeker vraagt om op de hoogte te blijven. Er is geen automatische inschrijving bij een externe mailingdienst aangemaakt.",
      fields: {
        Email: parsed.data.email,
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
    console.error("Error in newsletter route:", error);
    return NextResponse.json({ message: formMessages.error }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: formMessages.newsletterSuccess });
}
