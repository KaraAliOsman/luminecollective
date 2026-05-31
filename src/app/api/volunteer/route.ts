import { NextResponse } from "next/server";

import { sendNotification } from "@/lib/email/sendNotification";
import { checkRateLimit } from "@/lib/utils/rateLimit";
import { formMessages, volunteerFormSchema } from "@/lib/validation/forms";

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
}

export async function POST(request: Request) {
  const limit = checkRateLimit({ key: `volunteer:${clientKey(request)}` });
  if (!limit.allowed) {
    return NextResponse.json({ message: formMessages.error }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = volunteerFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors, message: formMessages.error },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: formMessages.volunteerSuccess });
  }

  try {
    await sendNotification({
      to: process.env.VOLUNTEER_EMAIL || process.env.CONTACT_EMAIL,
      subject: "Nieuwe vrijwilligersinteresse via Lumina Collective",
      intro: "Er is een nieuwe vrijwilligersaanmelding ingestuurd via de website.",
      fields: {
        Naam: parsed.data.name,
        Email: parsed.data.email,
        Telefoon: parsed.data.phone,
        Interesse: parsed.data.interest,
        Bericht: parsed.data.message,
        Consent: parsed.data.consent,
      },
    });
  } catch (error) {
    console.error("Error in volunteer route:", error);
    return NextResponse.json({ message: formMessages.error }, { status: 500 });
  }

  return NextResponse.json({ message: formMessages.volunteerSuccess });
}
