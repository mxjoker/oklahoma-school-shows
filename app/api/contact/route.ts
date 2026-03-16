import { NextRequest, NextResponse } from "next/server";
import {
  sendBookingNotification,
  sendBookingAutoReply,
  type BookingFormData,
} from "@/lib/resend";

/* ─── Validation helpers ─────────────────────────────────── */
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  // Allow common formats: (405) 555-1234, 405-555-1234, 4055551234, etc.
  return /^[\d\s\-().+]{7,20}$/.test(phone.trim());
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  // Strip HTML tags and trim
  return str.replace(/<[^>]*>/g, "").trim().slice(0, 2000);
}

function sanitizeArray(arr: unknown): string[] {
  if (!Array.isArray(arr)) return [];
  return arr
    .filter((item) => typeof item === "string")
    .map((item) => sanitize(item))
    .slice(0, 10);
}

/* ─── POST handler ───────────────────────────────────────── */
export async function POST(request: NextRequest) {
  // Rate limiting note: for production, add Upstash Redis rate limiting
  // or Netlify's built-in rate limiting on this route. For now we rely
  // on Resend's own abuse protection.

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── Sanitize all fields ───────────────────────────────────
  const data: BookingFormData = {
    name:            sanitize(body.name),
    title:           sanitize(body.title),
    schoolName:      sanitize(body.schoolName),
    cityState:       sanitize(body.cityState),
    email:           sanitize(body.email).toLowerCase(),
    phone:           sanitize(body.phone),
    gradeLevels:     sanitizeArray(body.gradeLevels),
    programInterest: sanitize(body.programInterest),
    preferredDates:  sanitize(body.preferredDates),
    hearAboutUs:     sanitize(body.hearAboutUs),
    message:         sanitize(body.message),
  };

  // ── Validate required fields ──────────────────────────────
  const errors: Record<string, string> = {};

  if (!data.name || data.name.length < 2)
    errors.name = "Please enter your full name.";

  if (!data.schoolName || data.schoolName.length < 2)
    errors.schoolName = "Please enter your school name.";

  if (!data.cityState || data.cityState.length < 2)
    errors.cityState = "Please enter your city and state.";

  if (!data.email || !isValidEmail(data.email))
    errors.email = "Please enter a valid email address.";

  if (!data.phone || !isValidPhone(data.phone))
    errors.phone = "Please enter a valid phone number.";

  if (!data.programInterest)
    errors.programInterest = "Please select a program.";

  if (data.gradeLevels.length === 0)
    errors.gradeLevels = "Please select at least one grade level.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  // ── Send emails ───────────────────────────────────────────
  try {
    // Send both emails concurrently
    const [notificationResult, autoReplyResult] = await Promise.allSettled([
      sendBookingNotification(data),
      sendBookingAutoReply(data),
    ]);

    // Log any failures (don't expose details to client)
    if (notificationResult.status === "rejected") {
      console.error("Failed to send notification email:", notificationResult.reason);
    }
    if (autoReplyResult.status === "rejected") {
      console.error("Failed to send auto-reply email:", autoReplyResult.reason);
    }

    // As long as the notification went out, treat as success
    if (notificationResult.status === "rejected") {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please call us directly at (405) 431-6625." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us at (405) 431-6625." },
      { status: 500 }
    );
  }
}

/* ─── Method guards ──────────────────────────────────────── */
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
