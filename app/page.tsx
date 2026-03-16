import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ShowGrid } from "@/components/sections/ShowGrid";
import Link from "next/link";
import { CalendarCheck, Phone, Star, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Funky Monkey Magic | Oklahoma School Assembly Shows",
  description:
    "Educational magic assembly shows that captivate students AND meet curriculum goals. Serving Oklahoma, Texas, Arkansas, Kansas & Missouri. 100% money-back guarantee.",
};

/* ─── Testimonials preview (Session 4 will expand this) ─── */
const TESTIMONIALS = [
  {
    quote:
      "Our students are STILL talking about the Science Magic show three weeks later. Joe is an absolute pro — he had 400 kids completely locked in for 45 minutes straight.",
    name: "Sarah Mitchell",
    title: "Principal",
    school: "Ridgeview Elementary, Edmond OK",
  },
  {
    quote:
      "I've booked a dozen assembly performers over the years. Funky Monkey Magic is in a completely different league. Educational, hilarious, and every kid was on the edge of their seat.",
    name: "Tamara Reynolds",
    title: "PTA President",
    school: "Westwood Elementary, Norman OK",
  },
  {
    quote:
      "The reading scores in my class went up after the literacy show. The kids were begging to go to the library. That's never happened before. Worth every penny.",
    name: "Jennifer Clarke",
    title: "3rd Grade Teacher",
    school: "Lincoln Elementary, Tulsa OK",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══ SESSION 3: Hero ══════════════════════════════════ */}
      <HeroSection />

      {/* ══ SESSION 3: Trust Stats Bar ══════════════════════ */}
      <TrustBar />

      {/* ══ SESSION 3: Show Program Grid ════════════════════ */}
      <ShowGrid />

      {/* ══ SESSION 4: Testimonials ══════════════════════════
          Placeholder — full carousel built in Session 4       */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
              ✦ What Educators Say ✦
            </p>
            <h2 className="text-display text-brand-dark mb-4">
              Principals Love It. Students Go Wild.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
              Don&apos;t take our word for it — here&apos;s what the schools say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-brand-mist rounded-2xl p-6 border border-brand-purple/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark font-body italic leading-relaxed mb-5 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-display text-lg font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs font-body">
                      {t.title} — {t.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-brand-purple font-heading font-bold hover:text-brand-violet transition-colors border-b-2 border-brand-purple/30 hover:border-brand-violet pb-0.5 text-sm"
            >
              Read all testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SESSION 4: Video Section placeholder ════════════ */}
      <section id="video" className="bg-brand-dark py-20 lg:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-heading font-bold text-brand-gold tracking-widest uppercase mb-3">
              ✦ See It In Action ✦
            </p>
            <h2 className="text-display text-white mb-4">
              Watch a Real School Assembly
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto font-body">
              See exactly what your students will experience — the energy, the laughs,
              the &ldquo;wait, HOW did he do that?&rdquo; moments.
            </p>
          </div>
          {/* YouTube embed placeholder — real video added in Session 4 */}
          <div className="max-w-3xl mx-auto aspect-video bg-brand-purple/30 rounded-3xl border-2 border-brand-purple/40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand-gold/20 border-4 border-brand-gold/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-gold ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/50 font-body text-sm">
                Video coming in Session 4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Guarantee Section ════════════════════════════════ */}
      <section className="bg-brand-gradient py-20 lg:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/15 border-4 border-white/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-display text-white mb-5">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-white/80 text-lg font-body leading-relaxed mb-10 max-w-xl mx-auto">
              If your school isn&apos;t completely thrilled with the show — for any reason —
              you pay nothing. Zero. We stand behind every single performance with a full
              money-back guarantee. That&apos;s how confident we are.
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Risk-Free Today
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Final CTA ════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1A0A2E 0%, #3D1873 60%, #5B2D8E 100%)",
            }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-magenta/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-heading font-bold text-sm px-4 py-2 rounded-full mb-6">
                ✦ Booking Now Open for 2025–2026 School Year
              </span>
              <h2 className="text-display text-white mb-4">
                Ready to Bring the Magic?
              </h2>
              <p className="text-white/65 text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed">
                Spots fill fast — especially October through April.
                Check availability now and lock in your date before it&apos;s gone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Check Availability
                </Link>
                <a
                  href="tel:4054316625"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (405) 431-6625
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
