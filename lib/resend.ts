import { Resend } from "resend";

/* ─── Config ─────────────────────────────────────────────────
   Update BOOKING_TO_EMAIL to your real notification address.
   RESEND_FROM must be a domain you've verified in Resend.
   For testing, Resend allows sending FROM onboarding@resend.dev
   to your own email without domain verification.
   ─────────────────────────────────────────────────────────── */

// ✏️ UPDATE THIS — the email that receives booking notifications
export const BOOKING_TO_EMAIL = "joe.coover@gmail.com";

// ✏️ UPDATE THIS — the "from" address (must be verified in Resend dashboard)
// Until your domain is verified, use: onboarding@resend.dev
export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Funky Monkey Magic <onboarding@resend.dev>";

export const SITE_NAME = "Funky Monkey Magic School Shows";
export const SITE_URL  = "https://oklahomaschoolshows.com";
export const PHONE     = "(405) 431-6625";

/* ─── Form data shape ────────────────────────────────────── */
export interface BookingFormData {
  name:           string;
  title:          string;
  schoolName:     string;
  cityState:      string;
  email:          string;
  phone:          string;
  gradeLevels:    string[];
  programInterest: string;
  preferredDates: string;
  hearAboutUs:    string;
  message:        string;
}

/* ─── Resend client (lazy init so missing key doesn't crash build) */
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY environment variable is not set.");
  return new Resend(key);
}

/* ─── Notification email to performer ───────────────────── */
export async function sendBookingNotification(data: BookingFormData) {
  const resend = getResend();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f4f0ff; margin: 0; padding: 20px; }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header {
      background: linear-gradient(135deg, #1A0A2E 0%, #5B2D8E 100%);
      border-radius: 16px 16px 0 0;
      padding: 32px;
      text-align: center;
    }
    .header h1 { color: #FFD700; font-size: 24px; margin: 0 0 6px; }
    .header p  { color: rgba(255,255,255,0.7); font-size: 14px; margin: 0; }
    .body { background: #fff; padding: 32px; border-left: 1px solid #e8e0f5; border-right: 1px solid #e8e0f5; }
    .alert { background: #fff9ee; border: 2px solid #FFD700; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; font-weight: bold; color: #1A0A2E; }
    .section { margin-bottom: 24px; }
    .section h2 { color: #5B2D8E; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px; border-bottom: 1px solid #f4f0ff; padding-bottom: 6px; }
    .row { display: flex; gap: 12px; margin-bottom: 8px; font-size: 14px; }
    .label { color: #888; min-width: 140px; flex-shrink: 0; }
    .value { color: #1A0A2E; font-weight: 500; }
    .message-box { background: #f8f5ff; border-radius: 8px; padding: 14px; font-size: 14px; color: #444; line-height: 1.6; }
    .footer { background: #1A0A2E; border-radius: 0 0 16px 16px; padding: 20px 32px; text-align: center; }
    .footer p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0; }
    .btn { display: inline-block; background: #FFD700; color: #1A0A2E; font-weight: bold; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-size: 15px; margin-top: 16px; }
  </style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>🎩 New Booking Inquiry</h1>
    <p>${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
  </div>
  <div class="body">
    <div class="alert">⚡ New inquiry from ${data.schoolName} — respond within 24 hours!</div>

    <div class="section">
      <h2>Contact Info</h2>
      <div class="row"><span class="label">Name:</span><span class="value">${data.name}</span></div>
      <div class="row"><span class="label">Title:</span><span class="value">${data.title}</span></div>
      <div class="row"><span class="label">School:</span><span class="value">${data.schoolName}</span></div>
      <div class="row"><span class="label">City / State:</span><span class="value">${data.cityState}</span></div>
      <div class="row"><span class="label">Email:</span><span class="value"><a href="mailto:${data.email}">${data.email}</a></span></div>
      <div class="row"><span class="label">Phone:</span><span class="value"><a href="tel:${data.phone.replace(/\D/g, "")}">${data.phone}</a></span></div>
    </div>

    <div class="section">
      <h2>Show Details</h2>
      <div class="row"><span class="label">Program Interest:</span><span class="value">${data.programInterest}</span></div>
      <div class="row"><span class="label">Grade Levels:</span><span class="value">${data.gradeLevels.join(", ")}</span></div>
      <div class="row"><span class="label">Preferred Dates:</span><span class="value">${data.preferredDates || "Not specified"}</span></div>
      <div class="row"><span class="label">How They Found Us:</span><span class="value">${data.hearAboutUs || "Not specified"}</span></div>
    </div>

    ${data.message ? `
    <div class="section">
      <h2>Message</h2>
      <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
    </div>` : ""}

    <div style="text-align: center;">
      <a href="mailto:${data.email}" class="btn">Reply to ${data.name} →</a>
    </div>
  </div>
  <div class="footer">
    <p>${SITE_NAME} · ${PHONE} · <a href="${SITE_URL}" style="color: rgba(255,255,255,0.4);">${SITE_URL}</a></p>
  </div>
</div>
</body>
</html>`;

  return resend.emails.send({
    from:    RESEND_FROM_EMAIL,
    to:      BOOKING_TO_EMAIL,
    subject: `🎩 New Booking Inquiry — ${data.schoolName} (${data.cityState})`,
    html,
    replyTo: data.email,
  });
}

/* ─── Auto-reply to the booker ───────────────────────────── */
export async function sendBookingAutoReply(data: BookingFormData) {
  const resend = getResend();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f4f0ff; margin: 0; padding: 20px; }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header {
      background: linear-gradient(135deg, #1A0A2E 0%, #5B2D8E 100%);
      border-radius: 16px 16px 0 0;
      padding: 40px 32px;
      text-align: center;
    }
    .emoji { font-size: 48px; margin-bottom: 12px; }
    .header h1 { color: #FFD700; font-size: 26px; margin: 0 0 8px; }
    .header p  { color: rgba(255,255,255,0.7); font-size: 15px; margin: 0; }
    .body { background: #fff; padding: 36px 32px; border-left: 1px solid #e8e0f5; border-right: 1px solid #e8e0f5; }
    .body p { color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 16px; }
    .summary { background: #f8f5ff; border: 1px solid #e8e0f5; border-radius: 12px; padding: 20px; margin: 24px 0; }
    .summary h2 { color: #5B2D8E; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px; }
    .row { font-size: 14px; color: #555; margin-bottom: 6px; }
    .row strong { color: #1A0A2E; }
    .guarantee { background: linear-gradient(135deg, #5B2D8E, #7B3FBE); border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0; }
    .guarantee p { color: rgba(255,255,255,0.9); font-size: 14px; margin: 0; }
    .guarantee strong { color: #FFD700; }
    .contact { text-align: center; margin: 24px 0; }
    .btn { display: inline-block; background: #5B2D8E; color: #fff; font-weight: bold; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-size: 15px; }
    .footer { background: #1A0A2E; border-radius: 0 0 16px 16px; padding: 20px 32px; text-align: center; }
    .footer p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0 0 4px; }
    .footer a { color: rgba(255,255,255,0.5); }
  </style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="emoji">🎩</div>
    <h1>We Got Your Request!</h1>
    <p>Thanks for reaching out, ${data.name}. We'll be in touch within 24 hours.</p>
  </div>
  <div class="body">
    <p>Hi ${data.name},</p>
    <p>
      Thanks so much for your interest in bringing Funky Monkey Magic to
      <strong>${data.schoolName}</strong>! We've received your inquiry and
      will get back to you within <strong>24 hours</strong> — usually much sooner.
    </p>

    <div class="summary">
      <h2>Your Inquiry Summary</h2>
      <div class="row"><strong>School:</strong> ${data.schoolName}, ${data.cityState}</div>
      <div class="row"><strong>Program:</strong> ${data.programInterest}</div>
      <div class="row"><strong>Grade Levels:</strong> ${data.gradeLevels.join(", ")}</div>
      ${data.preferredDates ? `<div class="row"><strong>Preferred Dates:</strong> ${data.preferredDates}</div>` : ""}
    </div>

    <p>
      While you wait, feel free to browse our show pages to learn more about
      what students experience — or give us a call if you'd like to talk sooner.
    </p>

    <div class="guarantee">
      <p>
        <strong>Remember:</strong> Every show comes with a
        <strong>100% money-back guarantee</strong> —
        if your school isn't completely thrilled, you don't pay. Period.
      </p>
    </div>

    <div class="contact">
      <p style="font-size:14px; color:#888; margin-bottom:12px;">Questions? Reach us directly:</p>
      <a href="tel:4054316625" class="btn">📞 ${PHONE}</a>
    </div>

    <p style="font-size:13px; color:#aaa;">
      Can't wait to bring the magic to ${data.schoolName}!<br>
      — Joe Coover &amp; the Funky Monkey Magic Team
    </p>
  </div>
  <div class="footer">
    <p>${SITE_NAME}</p>
    <p><a href="${SITE_URL}">${SITE_URL}</a> · ${PHONE}</p>
    <p style="margin-top:8px; font-size:11px;">Oklahoma City, OK · Serving OK, TX, AR, KS, MO &amp; beyond</p>
  </div>
</div>
</body>
</html>`;

  return resend.emails.send({
    from:    RESEND_FROM_EMAIL,
    to:      data.email,
    subject: `Got it! We'll be in touch soon — Funky Monkey Magic 🎩`,
    html,
  });
}
