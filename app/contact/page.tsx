import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/BookingForm";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Funky Monkey Magic School Shows",
  description:
    "Get in touch with Funky Monkey Magic. Questions about booking, pricing, or show availability — we respond within 24 hours.",
  alternates: { canonical: "https://oklahomeschoolshows.com/contact" },
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: "(405) 431-6625",
    href: "tel:4054316625",
    sub: "Call or text anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: "booking@funkymonkeyevents.com",
    href: "mailto:booking@funkymonkeyevents.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Oklahoma City, OK",
    href: null,
    sub: "Serving OK, TX, AR, KS, MO & beyond",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    href: null,
    sub: "Usually same day, Mon–Fri",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-display text-white mb-4">
              Let&apos;s Talk Magic 🎩
            </h1>
            <p className="text-white/70 text-lg font-body leading-relaxed">
              Questions about shows, pricing, dates, or something else entirely?
              Fill out the form or reach us directly — we love talking to schools.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100"
                style={{ boxShadow: "0 8px 40px rgba(26,10,46,0.10)" }}
              >
                <div className="mb-8">
                  <h2 className="font-display text-2xl text-brand-dark mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 text-sm font-body">
                    Booking inquiry, general question, or just saying hi — we read everything.
                  </p>
                </div>
                <BookingForm />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5 lg:sticky lg:top-28">

              {/* Contact info */}
              <div className="bg-brand-mist rounded-2xl p-6 border border-brand-purple/10">
                <h3 className="font-display text-lg text-brand-dark mb-5">
                  Reach Us Directly
                </h3>
                <div className="space-y-4">
                  {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-brand-purple" />
                      </div>
                      <div>
                        <p className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wide">{label}</p>
                        {href ? (
                          <a href={href} className="font-heading font-bold text-brand-dark text-sm hover:text-brand-purple transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="font-heading font-bold text-brand-dark text-sm">{value}</p>
                        )}
                        <p className="text-xs text-gray-400 font-body mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-brand-dark rounded-2xl p-6 text-white">
                <h3 className="font-display text-base mb-3">Follow the Magic</h3>
                <p className="text-white/50 text-xs font-body mb-4">
                  Behind-the-scenes, show clips, and school highlights.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/funky_monkey_magic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-brand-magenta border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-heading font-bold transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/JoeCooverMagic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-blue-600 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-heading font-bold transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-display text-base text-brand-dark mb-3">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: "View All Show Programs", href: "/shows" },
                    { label: "Check Availability",     href: "/book-now" },
                    { label: "Read Testimonials",       href: "/testimonials" },
                    { label: "FAQ",                     href: "/faq" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between text-sm font-body text-gray-500 hover:text-brand-purple transition-colors py-1 border-b border-gray-50 last:border-0"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
