export async function onRequestPost({ request, env }: { request: Request; env: { RESEND_API_KEY: string } }) {
  try {
    const body = await request.json() as { email?: string };
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
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
        subject: "New Newsletter Subscriber",
        html: `<div style="font-family: sans-serif;"><h2 style="color: #1eb854;">New Newsletter Subscriber</h2><p>New subscriber: <strong>${email}</strong></p></div>`,
      }),
    });

    if (!res.ok) throw new Error("Resend API error");

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
