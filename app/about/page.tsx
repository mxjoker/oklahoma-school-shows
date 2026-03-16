import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck, Star, Users, MapPin, Heart,
  Award, Mic2, GraduationCap, ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Joe Coover | Funky Monkey Magic School Assembly Shows",
  description:
    "Meet Joe Coover — Oklahoma's #1 school assembly magician. 10+ years performing for elementary schools across Oklahoma, Texas, Arkansas, Kansas, and Missouri.",
  alternates: { canonical: "https://oklahomeschoolshows.com/about" },
};

/* ─── Timeline data ──────────────────────────────────────── */
const TIMELINE = [
  {
    year: "2014",
    title: "The First School Show",
    body: "Joe performed his first school assembly at a small elementary school in Edmond, OK. The principal called to rebook before the students even left the gym.",
  },
  {
    year: "2016",
    title: "Funky Monkey Magic Is Born",
    body: "The brand officially launched under Funky Monkey Events — Joe's family entertainment company serving the Oklahoma City metro.",
  },
  {
    year: "2018",
    title: "Expanding the Programs",
    body: "Added dedicated show themes for Reading, Math, and Anti-Bullying after repeated requests from teachers and principals who wanted curriculum-connected content.",
  },
  {
    year: "2020",
    title: "Going Regional",
    body: "Expanded service area to Texas, Arkansas, Kansas, and Missouri. Schools started traveling word-of-mouth referrals across state lines.",
  },
  {
    year: "2023",
    title: "500+ Schools Served",
    body: "Crossed the milestone of 500 schools served — with a re-booking rate that means most of them have seen Joe more than once.",
  },
  {
    year: "Now",
    title: "oklahomeschoolshows.com",
    body: "Dedicated school assembly website launched to make it easier for principals and PTA coordinators to find, book, and plan the perfect assembly.",
  },
];

/* ─── Values ─────────────────────────────────────────────── */
const VALUES = [
  {
    icon: GraduationCap,
    title: "Education First",
    body: "Every trick is chosen because it teaches something. Entertainment is the vehicle — learning is the destination.",
  },
  {
    icon: Heart,
    title: "Every School Matters",
    body: "Joe drives to rural Kansas the same way he drives to Tulsa. Small schools get the same energy and preparation as big district events.",
  },
  {
    icon: Award,
    title: "Professional Without Being Stiff",
    body: "Principals trust us. Teachers love us. Kids go absolutely wild. That balance — professional and genuinely fun — is our whole thing.",
  },
  {
    icon: Mic2,
    title: "Real Performer, Real Educator",
    body: "Joe isn't a teacher doing magic tricks or a magician doing school visits. He's built a career specifically at the intersection of both.",
  },
];

/* ─── Stats ──────────────────────────────────────────────── */
const STATS = [
  { value: "10+",   label: "Years Performing",   icon: "🎩" },
  { value: "500+",  label: "Schools Served",      icon: "🏫" },
  { value: "6",     label: "States Covered",      icon: "🗺️" },
  { value: "100k+", label: "Students Wowed",      icon: "👦" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient pt-28 pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-brand-magenta/10 blur-3xl pointer-events-none" />

        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-brand-gold/30 rounded-full px-4 py-2 mb-6">
                <span className="text-brand-gold font-heading font-bold text-sm">✦ Meet the Magician</span>
              </div>
              <h1 className="text-hero text-white mb-5 leading-tight">
                Hi, I&apos;m Joe Coover.{" "}
                <span className="text-gold-gradient">I Make Learning Magical.</span>
              </h1>
              <p className="text-white/75 text-xl font-body leading-relaxed mb-8">
                I&apos;ve spent the last decade doing exactly one thing: creating school
                assembly shows that blow kids&apos; minds and make teachers cheer.
                Based in Oklahoma City, serving schools across the region.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MapPin, text: "Oklahoma City, OK" },
                  { icon: Users, text: "100,000+ Students" },
                  { icon: Star,  text: "500+ Schools" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                    <Icon className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-white/80 text-sm font-body">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo placeholder card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-sm rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 24px 60px rgba(91,45,142,0.4)" }}
              >
                {/* Placeholder — replace src with real photo */}
                <div
                  className="w-full aspect-[4/5] flex flex-col items-center justify-center text-center p-8"
                  style={{
                    background: "linear-gradient(135deg, #3D1873 0%, #5B2D8E 60%, #7B3FBE 100%)",
                  }}
                >
                  <div className="text-8xl mb-4">🎩</div>
                  <p className="text-white/60 font-body text-sm">
                    Photo of Joe Coover
                  </p>
                  <p className="text-white/40 text-xs font-body mt-1">
                    (Replace with real performer photo)
                  </p>
                </div>

                {/* Floating credential badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 flex items-center gap-3"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-sm leading-tight">Oklahoma&apos;s #1</p>
                    <p className="text-gray-400 text-xs font-body">School Assembly Magician</p>
                  </div>
                  <div className="flex gap-0.5 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 64V32C240 0 480 16 720 16C960 16 1200 0 1440 32V64H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="font-display text-4xl lg:text-5xl text-brand-purple mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3 text-center">
              ✦ The Story ✦
            </p>
            <h2 className="text-display text-brand-dark mb-10 text-center">
              How This All Started
            </h2>

            <div className="prose-custom space-y-5 text-gray-600 font-body leading-relaxed text-lg">
              <p>
                I started performing magic when I was a kid — the kind of kid who spent
                his allowance on card tricks and drove his family crazy practicing at the
                dinner table. What started as a hobby turned into weekend birthday parties,
                then corporate events, then something I never expected: a school show request.
              </p>
              <p>
                That first school assembly changed everything. I watched 300 kids go from
                squirming in their seats to completely locked in — not just entertained,
                but <em>learning</em>. A teacher pulled me aside afterward and said,
                &ldquo;Half my class didn&apos;t know what air pressure was this morning.
                They all do now.&rdquo;
              </p>
              <p>
                I canceled every other type of booking I had within six months.
                School assemblies became all I do — because nothing else
                comes close to that feeling.
              </p>
              <p>
                Today, Funky Monkey Magic has performed for over 500 schools and
                100,000 students across Oklahoma and the surrounding region.
                Every show is still built the same way that first one was:
                find the magic in the subject matter, and let the kids experience it firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
              ✦ What We Stand For ✦
            </p>
            <h2 className="text-display text-brand-dark">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 flex items-start gap-4"
                style={{ boxShadow: "0 4px 24px rgba(26,10,46,0.08)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark mb-1.5">{title}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
              ✦ The Journey ✦
            </p>
            <h2 className="text-display text-brand-dark">10 Years in the Making</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[52px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-magenta to-brand-gold" />

              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    {/* Year bubble */}
                    <div className="flex-shrink-0 w-[104px] flex flex-col items-center gap-2">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display text-sm font-bold z-10"
                        style={{
                          background: i === TIMELINE.length - 1
                            ? "linear-gradient(135deg, #FFD700, #FFC200)"
                            : "linear-gradient(135deg, #5B2D8E, #7B3FBE)",
                          color: i === TIMELINE.length - 1 ? "#1A0A2E" : "white",
                        }}
                      >
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 bg-brand-mist rounded-2xl p-5 mb-2"
                      style={{ boxShadow: "0 2px 12px rgba(26,10,46,0.06)" }}
                    >
                      <h3 className="font-heading font-bold text-brand-dark mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-body text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-gradient py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-display text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/70 text-lg font-body max-w-xl mx-auto mb-10">
            Let&apos;s bring the magic to your school. Check availability — no deposit,
            no pressure, 100% guarantee on every show.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
            >
              <CalendarCheck className="w-5 h-5" />
              Check Availability
            </Link>
            <Link
              href="/shows"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors"
            >
              View All Shows <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
