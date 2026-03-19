import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ArrowRight, Phone } from "lucide-react";
import { ALL_SHOWS } from "@/lib/showsData";

export const metadata: Metadata = {
  title: "School Assembly Programs | Funky Monkey Magic Oklahoma",
  description:
    "5 educational magic assembly programs for elementary schools — Science, Reading, Math, Character Education, and Anti-Bullying. All curriculum-aligned, all unforgettable. Serving Oklahoma and surrounding states.",
  alternates: { canonical: "https://oklahomaschoolshows.com/shows" },
};

const shows = Object.values(ALL_SHOWS);

export default function ShowsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-brand-magenta/15 blur-3xl" />
        </div>
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-brand-gold/30 rounded-full px-5 py-2 mb-6">
            <span className="text-brand-gold font-heading font-bold text-sm">✦ All Assembly Programs</span>
          </div>
          <h1 className="text-hero text-white mb-5">
            5 Shows. Every Subject.{" "}
            <span className="text-gold-gradient">All Unforgettable.</span>
          </h1>
          <p className="text-white/70 text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Every program is curriculum-aligned, packed with student participation,
            and backed by a 100% money-back guarantee. Pick one — or combine two
            for a full-day event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Show
            </Link>
            <a
              href="tel:4054316625"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-7 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (405) 431-6625
            </a>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 64V32C240 0 480 16 720 16C960 16 1200 0 1440 32V64H0Z" fill="#FFF9EE" />
          </svg>
        </div>
      </section>

      {/* Show cards */}
      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {shows.map((show, i) => (
              <Link
                key={show.slug}
                href={`/shows/${show.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 4px 24px rgba(26,10,46,0.10)" }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Color panel */}
                  <div
                    className="lg:w-64 flex-shrink-0 flex items-center justify-center py-10 px-8 text-7xl"
                    style={{
                      background: `linear-gradient(135deg, ${show.gradientFrom}, ${show.gradientTo})`,
                    }}
                  >
                    {show.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <p
                        className="text-xs font-heading font-bold uppercase tracking-widest mb-1"
                        style={{ color: show.gradientFrom }}
                      >
                        {show.tagline}
                      </p>
                      <h2 className="font-display text-2xl lg:text-3xl text-brand-dark mb-3 group-hover:text-brand-purple transition-colors">
                        {show.title}
                      </h2>
                      <p className="text-gray-500 font-body leading-relaxed text-sm lg:text-base max-w-xl">
                        {show.description}
                      </p>

                      {/* Highlights row */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {show.highlights.map((h) => (
                          <span
                            key={h.label}
                            className="text-xs font-heading font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                          >
                            {h.icon} {h.value} {h.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <span
                        className="inline-flex items-center gap-2 font-heading font-bold px-6 py-3 rounded-xl text-white text-sm transition-all group-hover:gap-3"
                        style={{
                          background: `linear-gradient(135deg, ${show.gradientFrom}, ${show.gradientTo})`,
                        }}
                      >
                        View Show <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title text-brand-dark mb-4">Not Sure Which Show to Book?</h2>
          <p className="text-gray-500 font-body mb-8 max-w-lg mx-auto">
            Tell us your goals and grade levels — we&apos;ll recommend the perfect fit,
            or help you plan a multi-show day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-purple text-white font-heading font-bold px-8 py-3 rounded-xl hover:bg-brand-violet transition-colors"
            >
              Ask a Question
            </Link>
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold px-8 py-3 rounded-xl hover:bg-brand-amber transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
