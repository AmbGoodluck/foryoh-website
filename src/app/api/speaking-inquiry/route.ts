// This file is deprecated and can be deleted.
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { speakingInquirySchema } from "@/lib/validations";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const result = speakingInquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    await resend.emails.send({
      from: "Sheku Foryoh Website <noreply@shekuforyoh.com>",
      to: "contact@shekuforyoh.com",
      subject: `Speaking Inquiry: ${data.eventName} — ${data.organization}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1eb854;">New Speaking Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Organization:</td><td>${data.organization}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Event:</td><td>${data.eventName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Proposed Date:</td><td>${data.proposedDate}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Location:</td><td>${data.location}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Audience Size:</td><td>${data.audienceSize}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Budget:</td><td>${data.budgetRange}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
          </table>
          <h3>Message</h3>
          <p>${data.message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Speaking inquiry error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
