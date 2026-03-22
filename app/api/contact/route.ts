import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const { name, phone, email, plan, note, turnstileToken } = await req.json();

  if (!name?.trim() || !phone?.trim() || !turnstileToken) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Verify Turnstile token
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );
  const turnstileData = await turnstileRes.json();
  if (!turnstileData.success) {
    return NextResponse.json(
      { error: "Captcha verification failed" },
      { status: 400 }
    );
  }

  // Send email via Brevo
  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: "Rimbo Website", email: process.env.BREVO_SENDER_EMAIL! },
      to: [{ email: process.env.CONTACT_EMAIL! }],
      headers: { "List-Unsubscribe": "<mailto:>" },
      subject: `New contact request from ${name.trim()}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${escapeHtml(name.trim())}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${escapeHtml(phone.trim())}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email ? escapeHtml(email.trim()) : "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Plan:</td><td style="padding:8px;">${plan ? escapeHtml(plan) : "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Note:</td><td style="padding:8px;">${note ? escapeHtml(note.trim()) : "—"}</td></tr>
        </table>`,
    }),
  });

  if (!brevoRes.ok) {
    console.error("Brevo API error:", await brevoRes.text());
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
