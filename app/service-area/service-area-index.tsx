import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ArrowRight, Phone, Sparkles } from "lucide-react";
import { statesData } from "@/lib/serviceAreaData";

export const metadata: Metadata = {
  title: "Service Area | School Magic Assembly | Funky Monkey Magic",
  description:
    "Funky Monkey Magic serves elementary schools across Oklahoma, Texas, Arkansas, Kansas, and Missouri. Book Joe Coover for your school assembly today.",
};

export default function ServiceAreaPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-wide text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-magenta/20 px-4 py-1.5 text-sm font-semibold text-brand-magenta">
            <MapPin className="h-3.5 w-3.5" />
            Multi-State Coverage
          </div>
          <h1 className="text-hero text-white mb-4">
            School Magic Assemblies Across{" "}
            <span className="text-gold-gradient">the Midwest & South</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 leading-relaxed mb-8">
            Based in Oklahoma City, Joe Coover travels throughout Oklahoma, Texas, Arkansas,
            Kansas, Missouri, and neighboring states — bringing curriculum-connected magic to
            elementary schools everywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg transition-all hover:bg-brand-amber hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              Book for Your School
            </Link>
            <a
              href="tel:4054316625"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              (405) 431-6625
            </a>
          </div>
        </div>
      </section>

      {/* ── State Grid ────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">
              Coverage Area
            </p>
            <h2 className="text-display text-brand-dark">States We Serve</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
              Click your state to see cities, show options, and booking information.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statesData.map((state) => (
              <Link
                key={state.slug}
                href={`/service-area/${state.slug}`}
                className="group card-base rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">{state.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-purple transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-magenta">
                      {state.abbreviation}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-brand-dark/65 leading-relaxed">
                  {state.tagline}
                </p>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-brand-mist px-3 py-2 text-center">
                    <p className="text-base font-bold text-brand-purple">{state.schools}</p>
                    <p className="text-xs text-brand-dark/50">Schools</p>
                  </div>
                  <div className="rounded-lg bg-brand-mist px-3 py-2 text-center">
                    <p className="text-base font-bold text-brand-purple">{state.students}</p>
                    <p className="text-xs text-brand-dark/50">Students</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-dark/50">
                    {state.cities.length} cities listed
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple group-hover:gap-2 transition-all">
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Multi-State Booking Works ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">
              Out-of-State Schools
            </p>
            <h2 className="text-display text-brand-dark">How Out-of-State Booking Works</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", emoji: "📧", title: "Request a Quote", body: "Send a quick inquiry with your city, preferred dates, and program interest. Joe responds within 24 hours." },
              { step: "2", emoji: "🗓️", title: "Schedule Around Regional Trips", body: "Joe plans multi-school regional tours to minimize travel costs. Your school gets a great rate." },
              { step: "3", emoji: "✅", title: "Confirm & Deposit", body: "Lock in your date with a simple agreement and small deposit. Everything is guaranteed." },
              { step: "4", emoji: "🎩", title: "Show Day!", body: "Joe arrives early, sets up, performs an unforgettable assembly, and handles all teardown." },
            ].map((item) => (
              <div key={item.step} className="card-base rounded-2xl p-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-sm font-bold text-white">
                  {item.step}
                </div>
                <span className="mb-2 block text-3xl">{item.emoji}</span>
                <h3 className="mb-2 font-bold text-brand-dark">{item.title}</h3>
                <p className="text-sm text-brand-dark/65 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-gradient">
        <div className="container-wide text-center">
          <h2 className="text-display text-white mb-4">
            Don't See Your State Listed?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
            Joe also travels to neighboring states like Colorado, New Mexico, Iowa, Nebraska,
            Tennessee, and more. Just ask — if the schedule works, Joe makes it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg transition-all hover:bg-brand-amber hover:-translate-y-0.5"
            >
              Ask About Your Area
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
