import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Phone, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Funky Monkey Magic School Shows",
  description:
    "Everything you need to know about booking a Funky Monkey Magic school assembly show — pricing, logistics, travel, show length, age groups, and more.",
  alternates: { canonical: "https://oklahomeschoolshows.com/faq" },
};

/* ─── FAQ data ───────────────────────────────────────────── */
const FAQ_SECTIONS = [
  {
    title: "Booking & Scheduling",
    emoji: "📅",
    color: "#5B2D8E",
    items: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 4–8 weeks in advance, especially for October through April which fills up fast. That said, we do our best to accommodate last-minute requests — if you have a date in mind, reach out and we'll check availability immediately.",
      },
      {
        q: "How do I check availability?",
        a: "Fill out the inquiry form on our Book a Show page, or call us directly at (405) 431-6625. We respond to all inquiries within 24 hours — usually the same day.",
      },
      {
        q: "Is there a deposit required to hold my date?",
        a: "No deposit is required to check availability or reserve a tentative date. We'll hold your date while we finalize the details together.",
      },
      {
        q: "Can I book multiple shows for the same day (back-to-back sessions)?",
        a: "Absolutely — and many schools prefer this. We can do separate K–2 and 3–6 sessions back-to-back with a short break in between. Combined show days are also available for districts booking multiple campuses.",
      },
      {
        q: "What happens if I need to reschedule?",
        a: "Life happens — we get it. Just let us know as soon as possible and we'll work with you to find a new date. We're flexible and always try to make it work.",
      },
    ],
  },
  {
    title: "Pricing & Travel",
    emoji: "💰",
    color: "#F97316",
    items: [
      {
        q: "How is pricing determined?",
        a: "Pricing is based on the number of shows, distance traveled, and program type. We provide a complete custom quote for every school — contact us and we'll get you numbers quickly, usually within the same day.",
      },
      {
        q: "Do you charge travel fees?",
        a: "For schools within the Oklahoma City metro area, there's no travel fee. For schools further out — including rural Oklahoma and neighboring states — a modest travel fee applies. We'll be fully transparent about this in your quote.",
      },
      {
        q: "Do you travel outside of Oklahoma?",
        a: "Yes — we regularly perform in Texas, Arkansas, Kansas, and Missouri, and will consider other states depending on scheduling. Distance travel typically requires a travel fee which we'll outline clearly upfront.",
      },
      {
        q: "Are there discounts for multiple shows or district-wide bookings?",
        a: "Yes. Schools booking multiple show dates and districts booking multiple campuses receive preferred pricing. Contact us with your full scope and we'll put together a custom proposal.",
      },
    ],
  },
  {
    title: "The Show Itself",
    emoji: "🎩",
    color: "#E0218A",
    items: [
      {
        q: "How long is a typical school assembly show?",
        a: "The standard show runs 45 minutes. A full 60-minute version is available for schools that want more content or extended student Q&A time. Both versions are available for all five programs.",
      },
      {
        q: "What grade levels are the shows designed for?",
        a: "All five programs are designed for K–6 elementary students. Each show is calibrated so younger students are wowed and older students are genuinely challenged — both groups fully engaged throughout.",
      },
      {
        q: "How many students can attend at once?",
        a: "We can perform for audiences up to 500 students comfortably. For larger schools, we recommend splitting into two sessions (K–2 and 3–6) for maximum engagement and participation.",
      },
      {
        q: "What do you need for setup? Does your school need to provide anything?",
        a: "We bring everything — props, sound system, and all materials. You just need a cleared floor space (a gym, cafeteria, or large common area works perfectly) and your students. Setup takes about 20 minutes and requires no help from your staff.",
      },
      {
        q: "Is there student participation in the show?",
        a: "Absolutely — student participation is a core part of every show. Students come on stage, assist with tricks, make predictions, and interact throughout. This is one of the biggest reasons kids remember the show long after it's over.",
      },
      {
        q: "Are the shows curriculum-aligned?",
        a: "Yes. Every show is designed around real educational standards — CCSS-aligned for Reading, Math, and Science; SEL standards for Character Education and Anti-Bullying. Teachers receive a post-show guide connecting the content to classroom curriculum.",
      },
    ],
  },
  {
    title: "Guarantees & Policies",
    emoji: "🛡️",
    color: "#10B981",
    items: [
      {
        q: "What does the money-back guarantee actually cover?",
        a: "If your school isn't completely satisfied with the show — for any reason, no questions asked — you don't pay. This applies to every show, every time. We back every performance with a full 100% money-back guarantee.",
      },
      {
        q: "What if the performer gets sick or has an emergency?",
        a: "In the extremely rare event that Joe is unable to perform, we will contact you as soon as possible and work to either reschedule at a mutually convenient date or provide a full refund — whichever you prefer.",
      },
      {
        q: "Is Funky Monkey Magic insured?",
        a: "Yes — we carry full liability insurance and can provide proof of insurance upon request. This is typically required by school districts and we're happy to provide documentation during the booking process.",
      },
      {
        q: "Do you have references from other schools?",
        a: "We have hundreds of happy schools — many of whom are happy to speak with you directly. In addition to the testimonials on our website, we can connect you with a principal or coordinator from a nearby school who's booked us before.",
      },
      {
        q: "Can we see a show before booking?",
        a: "While we can't always arrange a live preview, we can provide video footage of recent school performances. Contact us and we'll send you clips so you can see exactly what your students will experience.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />

        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">FAQ</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-display text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg font-body leading-relaxed">
              Everything principals, PTA coordinators, and teachers ask before booking.
              Don&apos;t see your question? Call us at{" "}
              <a href="tel:4054316625" className="text-brand-gold hover:underline font-semibold">
                (405) 431-6625
              </a>
              .
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="#FFF9EE" />
          </svg>
        </div>
      </section>

      {/* ── FAQ sections ── */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-14">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.title}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${section.color}18`, border: `2px solid ${section.color}30` }}
                  >
                    {section.emoji}
                  </div>
                  <h2 className="font-display text-2xl text-brand-dark">{section.title}</h2>
                </div>

                {/* Accordion */}
                <Accordion items={section.items} accentColor={section.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="bg-white py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-8 lg:p-10 text-white text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A0A2E, #5B2D8E)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-display text-2xl mb-3">Still Have Questions?</h2>
                <p className="text-white/65 font-body mb-7 max-w-md mx-auto">
                  We&apos;re happy to talk through anything — booking, pricing, customization,
                  logistics. Give us a call or send a message.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:4054316625"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (405) 431-6625
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold px-6 py-3 rounded-xl hover:bg-brand-amber transition-colors"
                  >
                    Send a Message
                  </Link>
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-heading font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
