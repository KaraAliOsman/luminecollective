type NotificationPayload = {
  to?: string;
  subject: string;
  intro: string;
  fields: Record<string, string | boolean | undefined>;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFields(fields: NotificationPayload["fields"]) {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => {
      const label = escapeHtml(key);
      const text = escapeHtml(String(value));
      return `<p><strong>${label}</strong><br />${text}</p>`;
    })
    .join("");
}

export async function sendNotification({
  to,
  subject,
  intro,
  fields,
}: NotificationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORMS_FROM_EMAIL;

  if (!apiKey || !from || !to) {
    return { delivered: false, skipped: true };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #2f241f; line-height: 1.6;">
          <h1 style="color: #42152f;">${escapeHtml(subject)}</h1>
          <p>${escapeHtml(intro)}</p>
          ${renderFields(fields)}
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API failed with status:", response.status, "body:", errorText);
    throw new Error(`Email provider request failed: ${errorText}`);
  }

  return { delivered: true, skipped: false };
}
