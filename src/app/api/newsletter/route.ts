import { NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/validations";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const data = result.data;

    await resend.emails.send({
      from: "Sheku Foryoh Website <noreply@shekuforyoh.com>",
      to: "contact@shekuforyoh.com",
      subject: "New Newsletter Subscriber",
      html: `
        <div style="font-family: sans-serif;">
          <h2 style="color: #1eb854;">New Newsletter Subscriber</h2>
          <p>New subscriber: <strong>${data.email}</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
