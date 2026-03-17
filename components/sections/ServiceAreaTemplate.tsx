"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, CheckCircle, ArrowRight, Sparkles, Users, School, Clock } from "lucide-react";
import { StateData } from "@/lib/serviceAreaData";

interface ServiceAreaTemplateProps {
  state: StateData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const SHOWS = [
  { name: "Science Magic", emoji: "🔬", href: "/shows/science", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Reading & Literacy", emoji: "📚", href: "/shows/reading", color: "bg-green-50 border-green-200 text-green-800" },
  { name: "Math Magic", emoji: "🔢", href: "/shows/math", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
  { name: "Character Education", emoji: "⭐", href: "/shows/character-education", color: "bg-purple-50 border-purple-200 text-purple-800" },
  { name: "Anti-Bullying", emoji: "🤝", href: "/shows/anti-bullying", color: "bg-pink-50 border-pink-200 text-pink-800" },
];

const WHY_CHOOSE = [
  { icon: "🎩", title: "Real Professional Magic", body: "Not a local hobbyist — Joe is a full-time professional performer with years of school assembly experience." },
  { icon: "📚", title: "Curriculum-Connected", body: "Every show aligns with academic standards. Teachers see the value immediately — this isn't just entertainment." },
  { icon: "✅", title: "100% Satisfaction Guarantee", body: "If your school isn't completely thrilled, Joe will return for a free show or provide a full refund. Zero risk." },
  { icon: "📋", title: "Hassle-Free Booking", body: "One email or phone call books everything. Joe handles setup, teardown, tech, and logistics." },
];

export default function ServiceAreaTemplate({ state }: ServiceAreaTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-brand-magenta/15 blur-3xl" />

        <div className="section-padding container-wide relative">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/service-area" className="hover:text-white transition-colors">Service Area</Link>
            <span>/</span>
            <span className="text-white">{state.name}</span>
          </motion.nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-magenta/20 px-4 py-1.5 text-sm font-semibold text-brand-magenta"
              >
                <MapPin className="h-3.5 w-3.5" />
                {state.emoji} {state.name} Schools
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="text-hero text-white mb-4"
              >
                Magic Assemblies for{" "}
                <span className="text-gold-gradient">{state.name}</span>{" "}
                Elementary Schools
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" as const }}
                className="text-lg text-white/80 leading-relaxed mb-8"
              >
                {state.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/book-now"
                  className="btn-primary inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg shadow-brand-gold/30 transition-all hover:bg-brand-amber hover:shadow-brand-amber/30 hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Book for Your School
                </Link>
                <a
                  href="tel:4054316625"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  (405) 431-6625
                </a>
              </motion.div>
            </div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" as const }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 text-xl">
                  {state.emoji}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60">Serving</p>
                  <p className="font-bold text-white">{state.name} Elementary Schools</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <School className="h-4 w-4" />, label: "Schools", value: state.schools },
                  { icon: <Users className="h-4 w-4" />, label: "Students", value: state.students },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="flex justify-center mb-1 text-brand-gold">{stat.icon}</div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/10 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">Travel & Availability</p>
                    <p className="mt-1 text-sm text-white/70">{state.travelNote}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {state.localFacts.map((fact) => (
                  <span
                    key={fact}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    {fact}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Cities ───────────────────────────────────────── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">Top Regions</p>
            <h2 className="text-display text-brand-dark">Featured Cities & Regions</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
              These are some of the regions Joe visits most frequently in {state.name}.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {state.featuredCities.map((city, i) => (
              <motion.div
                key={city.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="card-base rounded-2xl p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-purple" />
                  <h3 className="text-lg font-bold text-brand-dark">{city.name}</h3>
                </div>
                <p className="mb-3 text-sm text-brand-dark/70 leading-relaxed">{city.description}</p>
                <div className="flex items-center gap-2 rounded-lg bg-brand-mist px-3 py-2 text-sm font-semibold text-brand-purple">
                  <School className="h-3.5 w-3.5" />
                  {city.schools} elementary schools
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Show Programs ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">What We Offer</p>
            <h2 className="text-display text-brand-dark">
              Assembly Programs for {state.abbreviation} Schools
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
              Five curriculum-connected programs that teachers request by name — and students talk
              about for months.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWS.map((show, i) => (
              <motion.div
                key={show.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <Link
                  href={show.href}
                  className={`group flex items-center gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${show.color}`}
                >
                  <span className="text-3xl">{show.emoji}</span>
                  <div className="flex-1">
                    <p className="font-bold">{show.name}</p>
                    <p className="text-xs opacity-70 mt-0.5">View program details →</p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-60" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={6}
            >
              <Link
                href="/shows"
                className="group flex items-center gap-4 rounded-2xl border border-brand-purple/30 bg-brand-mist p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl">🎩</span>
                <div className="flex-1">
                  <p className="font-bold text-brand-purple">Browse All Programs</p>
                  <p className="text-xs text-brand-dark/50 mt-0.5">Find the right fit →</p>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-purple opacity-0 transition-opacity group-hover:opacity-60" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Joe ────────────────────────────────────────── */}
      <section className="section-padding bg-brand-mist">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">Why Schools Choose Joe</p>
            <h2 className="text-display text-brand-dark">
              The Right Choice for {state.name} Schools
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="card-base rounded-2xl p-6 text-center"
              >
                <span className="mb-3 block text-4xl">{item.icon}</span>
                <h3 className="mb-2 font-bold text-brand-dark">{item.title}</h3>
                <p className="text-sm text-brand-dark/65 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── City Grid ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">Everywhere in {state.name}</p>
            <h2 className="text-display text-brand-dark">
              Cities & Towns We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
              Don't see your city? Joe travels throughout {state.name} — just ask!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {state.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-purple/20 bg-brand-mist px-4 py-1.5 text-sm font-medium text-brand-dark transition-colors hover:border-brand-purple hover:bg-brand-purple hover:text-white cursor-default"
              >
                <MapPin className="h-3 w-3 text-brand-magenta" />
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Social Proof Strip ────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-magenta">What Educators Say</p>
              <h2 className="text-title text-white">
                Trusted by {state.name} Schools
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "Our students were completely captivated from the first moment to the last. Joe
                connected every trick to what we're learning in class — my teachers were as
                impressed as the kids!"
              </p>
              <p className="mt-3 text-xs font-semibold text-white/50">— Elementary School Principal</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "The booking process was seamless and Joe showed up early, was professional,
                and delivered exactly what he promised. We've already rebooked for next year."
              </p>
              <p className="mt-3 text-xs font-semibold text-white/50">— PTA President</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-gradient">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="mb-4 inline-block text-5xl">{state.emoji}</span>
            <h2 className="text-display text-white mb-4">
              Ready to Bring Magic to Your {state.name} School?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              {state.tagline} — Book your assembly today and see why{" "}
              {state.name} schools keep inviting Joe back year after year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg shadow-black/20 transition-all hover:bg-brand-amber hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                Book Now — It's Easy!
              </Link>
              <a
                href="tel:4054316625"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Call (405) 431-6625
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
