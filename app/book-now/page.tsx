import type { Metadata } from "next";
import { BookingForm }  from "@/components/sections/BookingForm";
import {
  CalendarCheck, Phone, Mail, ShieldCheck,
  Clock, Star, ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a School Assembly Show | Funky Monkey Magic",
  description:
    "Check availability and book an educational magic assembly show for your school. Fast response, no deposit required, 100% money-back guarantee. Serving Oklahoma and surrounding states.",
  alternates: { canonical: "https://oklahomaschoolshows.com/book-now" },
};

const TRUST_POINTS = [
  {
    icon: Clock,
    title: "Fast Response",
    body: "We respond to every inquiry within 24 hours — usually the same day.",
  },
  {
    icon: ShieldCheck,
    title: "100% Guarantee",
    body: "Not thrilled with the show? You don't pay. No questions asked.",
  },
  {
    icon: Star,
    title: "500+ Happy Schools",
    body: "From rural Kansas to Oklahoma City — schools book us every year.",
  },
  {
    icon: CalendarCheck,
    title: "No Deposit Required",
    body: "Check availability and hold your date with zero upfront cost.",
  },
];

export default function BookNowPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Book a Show</span>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-2 mb-5">
              <CalendarCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-heading font-bold text-sm">
                Booking Open for 2025–2026
              </span>
            </div>
            <h1 className="text-display text-white mb-4">
              Check Availability &amp;{" "}
              <span className="text-gold-gradient">Book Your Show</span>
            </h1>
            <p className="text-white/70 text-lg font-body leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours with
              availability and everything you need to lock in your date.
              No deposit required.
            </p>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* ── Form (2/3 width) ── */}
            <div className="lg:col-span-2">
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100"
                style={{ boxShadow: "0 8px 40px rgba(26,10,46,0.10)" }}
              >
                <div className="mb-8">
                  <h2 className="font-display text-2xl text-brand-dark mb-1">
                    Tell Us About Your School
                  </h2>
                  <p className="text-gray-400 text-sm font-body">
                    Fields marked <span className="text-brand-magenta font-bold">*</span> are required.
                  </p>
                </div>
                <BookingForm />
              </div>
            </div>

            {/* ── Sidebar (1/3 width) ── */}
            <div className="space-y-6 lg:sticky lg:top-28">

              {/* Trust points */}
              <div className="bg-brand-mist rounded-2xl p-6 border border-brand-purple/10">
                <h3 className="font-display text-lg text-brand-dark mb-4">
                  Why Schools Choose Us
                </h3>
                <div className="space-y-4">
                  {TRUST_POINTS.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-purple" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-brand-dark text-sm">{title}</p>
                        <p className="text-gray-500 text-xs font-body leading-relaxed mt-0.5">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #1A0A2E, #5B2D8E)" }}
              >
                <h3 className="font-display text-lg mb-1">Prefer to Talk First?</h3>
                <p className="text-white/65 text-sm font-body mb-5">
                  No problem — give us a call or send an email directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:4054316625"
                    className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span className="font-heading font-bold text-sm">(405) 431-6625</span>
                  </a>
                  <a
                    href="mailto:booking@funkymonkeyevents.com"
                    className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span className="font-body text-sm text-white/70">booking@funkymonkeyevents.com</span>
                  </a>
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
                <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-heading font-bold text-green-800 text-sm mb-1">
                  100% Money-Back Guarantee
                </p>
                <p className="text-green-700 text-xs font-body leading-relaxed">
                  If your school isn&apos;t completely thrilled, you don&apos;t pay.
                  Every single show, no exceptions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
