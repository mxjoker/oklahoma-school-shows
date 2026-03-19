import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Star, ChevronRight } from "lucide-react";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { ALL_TESTIMONIALS } from "@/lib/testimonialsData";

export const metadata: Metadata = {
  title: "School Testimonials | Funky Monkey Magic Oklahoma",
  description:
    "Read what principals, teachers, and PTA coordinators say about Funky Monkey Magic school assembly shows. 500+ schools served across Oklahoma and the surrounding region.",
  alternates: { canonical: "https://oklahomaschoolshows.com/testimonials" },
};

/* Quick stats from the data */
const stateCount = new Set(ALL_TESTIMONIALS.map((t) => t.state)).size;
const programCount = new Set(ALL_TESTIMONIALS.map((t) => t.program)).size;

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />

        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Testimonials</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span className="text-brand-gold font-heading font-bold text-sm">
                {ALL_TESTIMONIALS.length} Reviews · All 5 Stars
              </span>
            </div>
            <h1 className="text-display text-white mb-4">
              Don&apos;t Take Our Word for It
            </h1>
            <p className="text-white/70 text-xl font-body leading-relaxed mb-8">
              Principals, teachers, and PTA coordinators from{" "}
              {stateCount} states and {programCount} different programs —
              here&apos;s what they say.
            </p>

            {/* Star row */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-white font-heading font-bold text-xl">5.0</span>
              <span className="text-white/50 font-body text-sm">
                average across {ALL_TESTIMONIALS.length}+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="#FFF9EE" />
          </svg>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <TestimonialsGrid />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title text-brand-dark mb-4">
            Ready to Add Your School to the List?
          </h2>
          <p className="text-gray-500 font-body mb-8 max-w-lg mx-auto">
            Join 500+ schools who&apos;ve brought the magic to their students.
            Check availability — no deposit required.
          </p>
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
          >
            <CalendarCheck className="w-5 h-5" />
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
