import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck, Play, Wand2, FlaskConical,
  BookOpen, Calculator, Heart, Shield, Star,
  CheckCircle2, Phone, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Funky Monkey Magic | Oklahoma School Assembly Shows",
  description:
    "Educational magic assembly shows that captivate students AND meet curriculum goals. Serving Oklahoma, Texas, Arkansas, Kansas & Missouri. 100% money-back guarantee.",
};

/* ─── Show Programs Data ─────────────────────────────────── */
const programs = [
  {
    icon: FlaskConical,
    emoji: "🔬",
    title: "Science Magic",
    description: "Blow young minds with jaw-dropping experiments disguised as magic. STEM learning has never been this fun.",
    href: "/shows/science",
    color: "from-blue-500 to-cyan-400",
    badge: "Most Popular",
    badgeVariant: "gold" as const,
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Reading & Literacy",
    description: "A high-energy show that sparks a love of reading. Watch reluctant readers lean forward in their seats.",
    href: "/shows/reading",
    color: "from-brand-purple to-brand-violet",
    badge: "Educator Favorite",
    badgeVariant: "purple" as const,
  },
  {
    icon: Calculator,
    emoji: "🔢",
    title: "Math Magic",
    description: "Numbers come alive when magic is involved. Students discover that math is everywhere — and amazing.",
    href: "/shows/math",
    color: "from-orange-500 to-amber-400",
    badge: null,
    badgeVariant: "orange" as const,
  },
  {
    icon: Heart,
    emoji: "🌟",
    title: "Character Education",
    description: "Powerful lessons about kindness, respect, and integrity — delivered through mind-blowing magic.",
    href: "/shows/character-education",
    color: "from-green-500 to-emerald-400",
    badge: null,
    badgeVariant: "success" as const,
  },
  {
    icon: Shield,
    emoji: "🤝",
    title: "Anti-Bullying",
    description: "A memorable, impactful show that gives students real tools to stand up, speak out, and support each other.",
    href: "/shows/anti-bullying",
    color: "from-brand-magenta to-pink-400",
    badge: "High Demand",
    badgeVariant: "magenta" as const,
  },
];

/* ─── Trust Stats ────────────────────────────────────────── */
const stats = [
  { value: "10+",   label: "Years Performing" },
  { value: "500+",  label: "Schools Served" },
  { value: "6",     label: "States Covered" },
  { value: "100%",  label: "Money-Back Guarantee" },
];

/* ─── Testimonials preview ───────────────────────────────── */
const testimonials = [
  {
    quote: "Our students are STILL talking about the Science Magic show three weeks later. Joe is an absolute pro.",
    name: "Sarah Mitchell",
    title: "Principal",
    school: "Ridgeview Elementary, Edmond OK",
  },
  {
    quote: "I've booked a dozen assembly performers over the years. Funky Monkey Magic is in a completely different league.",
    name: "Tamara Reynolds",
    title: "PTA President",
    school: "Westwood Elementary, Norman OK",
  },
  {
    quote: "The reading scores in my class went up after the literacy show. The kids were begging to go to the library.",
    name: "Jennifer Clarke",
    title: "3rd Grade Teacher",
    school: "Lincoln Elementary, Tulsa OK",
  },
];

/* ─── Page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
        {/* Decorative background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-magenta/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-purple/10 blur-3xl" />
          {/* Floating sparkles */}
          {["top-20 left-[10%]", "top-32 right-[15%]", "bottom-40 left-[20%]", "bottom-24 right-[10%]", "top-1/2 left-[5%]", "top-1/3 right-[8%]"].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} text-brand-gold animate-sparkle`}
              style={{ animationDelay: `${i * 0.4}s`, fontSize: i % 2 === 0 ? "1.5rem" : "1rem" }}
            >
              ✦
            </div>
          ))}
        </div>

        <div className="container-wide px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 rounded-full px-4 py-2 mb-8">
              <Wand2 className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-heading font-bold text-sm tracking-wide">
                Oklahoma&apos;s #1 School Assembly Magician
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-hero text-white mb-6 leading-tight">
              Magic That{" "}
              <span className="text-gold-gradient">Teaches.</span>
              <br />
              Shows Kids{" "}
              <span className="text-gold-gradient">Won&apos;t Forget.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 font-body mb-10 max-w-xl leading-relaxed">
              High-energy educational magic assembly shows for elementary schools — covering
              Science, Reading, Math, Character Education, and Anti-Bullying.
              Serving Oklahoma, Texas, Arkansas, Kansas & Missouri.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Button
                variant="gold"
                size="xl"
                href="/book-now"
                icon={<CalendarCheck className="w-5 h-5" />}
              >
                Check Availability
              </Button>
              <Button
                variant="outline"
                size="xl"
                href="#video"
                icon={<Play className="w-5 h-5" />}
                iconPosition="left"
              >
                Watch the Show
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3">
              {["✅ 100% Money-Back Guarantee", "⚡ Fast Response — Usually Same Day", "🏆 500+ Schools Served"].map((item) => (
                <span key={item} className="text-white/70 text-sm font-body flex items-center gap-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80V40C240 0 480 20 720 20C960 20 1200 0 1440 40V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════ TRUST STATS BAR ══════════ */}
      <section className="bg-white py-10 border-b border-brand-mist">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl text-brand-purple mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-heading font-semibold text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SHOW PROGRAMS ══════════ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
              ✦ Assembly Programs ✦
            </p>
            <h2 className="text-display text-brand-dark mb-4">
              5 Shows. All Standards-Aligned.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Every show is packed with jaw-dropping magic, student participation,
              and curriculum-connected takeaways your teachers will love.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Card color band */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-6">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl shadow-md`}>
                      {program.emoji}
                    </div>
                    {program.badge && (
                      <Badge variant={program.badgeVariant} size="sm">
                        {program.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display text-xl text-brand-dark mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-body leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-purple font-heading font-bold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}

            {/* All shows CTA card */}
            <div className="bg-brand-purple rounded-2xl p-6 flex flex-col items-start justify-between text-white"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <div>
                <p className="text-brand-gold font-heading font-bold text-sm uppercase tracking-wide mb-2">
                  Not sure which show?
                </p>
                <h3 className="font-display text-xl mb-3">
                  We&apos;ll Help You Choose
                </h3>
                <p className="text-white/70 text-sm font-body leading-relaxed">
                  Every school is different. Tell us your goals and we&apos;ll recommend the perfect program — or combine two shows for a full-day event.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold px-5 py-3 rounded-xl hover:bg-brand-amber transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS PREVIEW ══════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
              ✦ What Educators Say ✦
            </p>
            <h2 className="text-display text-brand-dark mb-4">
              Principals Love It. Students Go Wild.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-brand-mist rounded-2xl p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark font-body italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-bold text-brand-dark text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs font-body">{t.title} — {t.school}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" href="/testimonials" icon={<ArrowRight className="w-4 h-4" />}>
              Read All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ GUARANTEE ══════════ */}
      <section className="bg-brand-gradient section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-brand-gold/20 border-4 border-brand-gold flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-brand-gold" />
            </div>
            <h2 className="text-display text-white mb-4">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-white/80 text-lg font-body leading-relaxed mb-8">
              If your school isn&apos;t completely thrilled with the show — for any reason —
              you pay nothing. Zero. We stand behind every single performance with a
              full money-back guarantee. That&apos;s how confident we are.
            </p>
            <Button
              variant="gold"
              size="lg"
              href="/book-now"
              icon={<CalendarCheck className="w-5 h-5" />}
            >
              Book Risk-Free Today
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="bg-white section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-magenta/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <Badge variant="gold" size="lg" className="mb-6">
                ✦ Booking Now Open for 2025–2026 School Year
              </Badge>
              <h2 className="text-display text-white mb-4">
                Ready to Bring the Magic?
              </h2>
              <p className="text-white/70 text-lg font-body max-w-xl mx-auto mb-10">
                Spots fill up fast — especially October through April.
                Check availability now and lock in your date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gold"
                  size="xl"
                  href="/book-now"
                  icon={<CalendarCheck className="w-5 h-5" />}
                >
                  Check Availability
                </Button>
                <a
                  href="tel:4054316625"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-8 py-4 rounded-2xl text-xl hover:bg-white/10 transition-colors"
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
