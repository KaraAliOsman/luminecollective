type NotificationPayload = {
  to?: string;
  replyTo?: string;
  subject: string;
  intro: string;
  fields: Record<string, string | boolean | undefined>;
};

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY?.trim() && process.env.FORMS_FROM_EMAIL?.trim());
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export async function sendNotification({ to, replyTo, subject, intro, fields }: NotificationPayload) {
  if (!isEmailConfigured() || !to) return { delivered: false, reason: "unavailable" as const };
  const rows = Object.entries(fields).filter(([, value]) => value !== undefined && value !== "");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from: process.env.FORMS_FROM_EMAIL,
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text: [intro, ...rows.map(([key, value]) => `${key}: ${value}`)].join("\n\n"),
        html: `<div style="font-family:Arial,sans-serif;color:#203e35;line-height:1.6"><h1>${escapeHtml(subject)}</h1><p>${escapeHtml(intro)}</p>${rows.map(([key, value]) => `<p><strong>${escapeHtml(key)}</strong><br>${escapeHtml(String(value)).replaceAll("\n", "<br>")}</p>`).join("")}</div>`,
      }),
    });
    if (!response.ok) {
      console.error("Email provider rejected request:", response.status);
      return { delivered: false, reason: "rejected" as const };
    }
    const receipt = await response.json().catch(() => null);
    if (!receipt?.id || typeof receipt.id !== "string") return { delivered: false, reason: "invalid-response" as const };
    return { delivered: true, reason: "accepted" as const };
  } catch {
    console.error("Email provider could not be reached.");
    return { delivered: false, reason: "network" as const };
  }
}
