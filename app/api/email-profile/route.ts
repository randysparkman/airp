import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const maxDuration = 30;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL_MAX_LENGTH = 254;

const FROM_ADDRESS = "WorkPath <profile@wkpath.com>";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { completionId, email, pdfBase64, fileName } = (body || {}) as {
    completionId?: unknown;
    email?: unknown;
    pdfBase64?: unknown;
    fileName?: unknown;
  };

  if (typeof completionId !== "string" || completionId.length === 0) {
    return NextResponse.json({ error: "missing_id" }, { status: 400 });
  }
  if (!UUID_REGEX.test(completionId)) {
    return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  }
  if (typeof email !== "string" || email.trim().length === 0) {
    return NextResponse.json({ error: "missing_email" }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  if (normalized.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(normalized)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const sb = getSupabaseAdmin();
  if (!sb) {
    return NextResponse.json({ error: "service_unavailable" }, { status: 500 });
  }

  // Step 1 — save email to the row. If this fails, fail the whole request.
  const { data: row, error: dbError } = await sb
    .from("assessment_completions")
    .update({ email: normalized })
    .eq("id", completionId)
    .select("id, respondent_name, completed_at")
    .single();

  if (dbError) {
    if ((dbError as { code?: string }).code === "PGRST116") {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }
    console.error("Email update failed:", dbError);
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }

  // Step 2 — send the email if we have a PDF and Resend is configured.
  // Save-only success returns saved:true, sent:false; the UI surfaces a
  // partial-state message in that case.
  if (typeof pdfBase64 !== "string" || pdfBase64.length === 0) {
    return NextResponse.json({ saved: true, sent: false, error: "missing_pdf" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not set — email saved but not sent");
    return NextResponse.json({ saved: true, sent: false, error: "resend_unconfigured" });
  }

  const resend = new Resend(resendApiKey);
  const recipientName = (row as { respondent_name?: string | null })?.respondent_name?.trim() || "";
  const greeting = recipientName ? `Hi ${recipientName.split(/\s+/)[0]},` : "Hi,";

  const completedAt = (row as { completed_at?: string | null })?.completed_at;
  let completedLabel = "";
  if (completedAt) {
    try {
      completedLabel = new Date(completedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    } catch {
      // bad date — silently omit the line
    }
  }
  const completedLine = completedLabel
    ? `\n  <p style="color: #6b7f8e; font-size: 13px; margin: 0;">Assessment completed ${completedLabel}</p>`
    : "";
  const safeFileName =
    typeof fileName === "string" && fileName.length > 0 && fileName.length < 200
      ? fileName.replace(/[^a-zA-Z0-9._-]/g, "")
      : "workpath-profile.pdf";

  try {
    const { error: sendError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: normalized,
      subject: "Your WorkPath Profile",
      html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #2a2a2a; max-width: 540px; line-height: 1.6;">
  <p>${greeting}</p>
  <p>Your WorkPath profile is attached as a PDF. It's a snapshot of your AI readiness across three dimensions — Orientation, Integration, and Judgment — with what you're doing well and where to grow next.</p>
  <p>Thanks for taking the assessment.</p>
  <p style="color: #6b7f8e; font-size: 13px; margin-top: 24px; margin-bottom: 4px;">— WorkPath</p>
  <p style="color: #6b7f8e; font-size: 13px; margin: 0 0 4px 0;"><a href="https://wkpath.com" style="color: #6b7f8e;">https://wkpath.com</a></p>${completedLine}
</div>
      `.trim(),
      attachments: [
        {
          filename: safeFileName,
          content: pdfBase64,
        },
      ],
    });

    if (sendError) {
      console.error("Resend send failed:", sendError);
      return NextResponse.json({ saved: true, sent: false, error: "send_failed" });
    }

    return NextResponse.json({ saved: true, sent: true });
  } catch (err) {
    console.error("Resend send threw:", err);
    return NextResponse.json({ saved: true, sent: false, error: "send_failed" });
  }
}
