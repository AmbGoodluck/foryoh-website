interface SpeakingInquiryBody {
  name?: string;
  organization?: string;
  eventName?: string;
  proposedDate?: string;
  location?: string;
  audienceSize?: string;
  budgetRange?: string;
  email?: string;
  message?: string;
}

export async function onRequestPost({ request, env }: { request: Request; env: { RESEND_API_KEY: string } }) {
  try {
    const data = await request.json() as SpeakingInquiryBody;
    const { name, organization, eventName, proposedDate, location, audienceSize, budgetRange, email, message } = data;

    if (!name || !organization || !eventName || !proposedDate || !location || !audienceSize || !budgetRange || !email || !message) {
      return new Response(JSON.stringify({ error: "Invalid form data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sheku Foryoh Website <noreply@shekuforyoh.com>",
        to: "contact@shekuforyoh.com",
        subject: `Speaking Inquiry: ${eventName} — ${organization}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1eb854;">New Speaking Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Organization:</td><td>${organization}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Event:</td><td>${eventName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Proposed Date:</td><td>${proposedDate}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Location:</td><td>${location}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Audience Size:</td><td>${audienceSize}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Budget:</td><td>${budgetRange}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            </table>
            <h3>Message</h3>
            <p>${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) throw new Error("Resend API error");

    return new Response(JSON.stringify({ success: true, message: "Inquiry submitted successfully" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Speaking inquiry error:", error);
    return new Response(JSON.stringify({ error: "Failed to submit inquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
