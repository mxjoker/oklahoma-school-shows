"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck, Phone, CheckCircle2, Star,
  ArrowRight, Users, Clock, ChevronRight, Sparkles
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */
export interface ShowTestimonial {
  quote: string;
  name: string;
  title: string;
  school: string;
  location: string;
}

export interface ShowData {
  // Identity
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;

  // Colors
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;   // Tailwind text class e.g. "text-blue-600"
  accentBg: string;      // Tailwind bg class  e.g. "bg-blue-50"
  accentBorder: string;  // Tailwind border    e.g. "border-blue-200"

  // Content
  whatStudentsLearn: string[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
    emoji: string;
  }[];
  highlights: {
    icon: string;
    label: string;
    value: string;
  }[];
  faqs: { q: string; a: string }[];
  testimonials: ShowTestimonial[];

  // SEO
  metaTitle: string;
  metaDescription: string;
}

/* ─── Reusable sub-components ────────────────────────────── */
function LearningPoint({ text, gradientFrom, gradientTo }: { text: string; gradientFrom: string; gradientTo: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="text-gray-600 font-body leading-relaxed">{text}</span>
    </div>
  );
}

/* ─── Main template ──────────────────────────────────────── */
export function ShowPageTemplate({ show }: { show: ShowData }) {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #1A0A2E 0%, #3D1873 50%, ${show.gradientFrom} 100%)`,
        }}
      >
        {/* BG orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
            style={{ background: show.gradientTo }}
          />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: show.gradientFrom }} />
        </div>

        {/* Sparkle particles */}
        {!prefersReduced && (
          <div className="absolute inset-0 pointer-events-none">
            {["top-16 left-[8%]", "top-24 right-[12%]", "bottom-32 left-[18%]", "bottom-20 right-[8%]", "top-1/2 right-[20%]"].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} text-brand-gold`}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
              >
                ✦
              </motion.div>
            ))}
          </div>
        )}

        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shows" className="hover:text-white transition-colors">Shows</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">{show.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Emoji badge */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
                <span className="text-2xl">{show.emoji}</span>
                <span className="text-white/90 font-heading font-bold text-sm tracking-wide">
                  Assembly Program
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-hero text-white mb-4"
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            >
              {show.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-2xl font-heading font-bold mb-5"
              style={{ color: show.gradientTo }}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" as const }}
            >
              {show.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-white/75 text-lg font-body leading-relaxed mb-10 max-w-2xl"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" as const }}
            >
              {show.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33, ease: "easeOut" as const }}
            >
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
              >
                <CalendarCheck className="w-5 h-5" />
                Book This Show
              </Link>
              <a
                href="tel:4054316625"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-heading font-bold px-7 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (405) 431-6625
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 64V32C240 0 480 16 720 16C960 16 1200 0 1440 32V64H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══ HIGHLIGHTS BAR ════════════════════════════════════ */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {show.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="text-center"
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" as const }}
              >
                <div className="text-3xl mb-2">{h.icon}</div>
                <p
                  className="font-display text-2xl font-bold mb-0.5"
                  style={{ color: show.gradientFrom }}
                >
                  {h.value}
                </p>
                <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wide">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT STUDENTS LEARN ═══════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-sm font-heading font-bold tracking-widest uppercase mb-3"
                style={{ color: show.gradientFrom }}>
                ✦ Learning Outcomes ✦
              </p>
              <h2 className="text-display text-brand-dark mb-5">
                What Students Take Away
              </h2>
              <p className="text-gray-500 font-body leading-relaxed mb-8">
                Every trick in the show is intentional. When the magic is over, students
                leave with real knowledge, genuine curiosity, and the kind of enthusiasm
                that makes teachers smile.
              </p>
              <div className="space-y-4">
                {show.whatStudentsLearn.map((point) => (
                  <LearningPoint
                    key={point}
                    text={point}
                    gradientFrom={show.gradientFrom}
                    gradientTo={show.gradientTo}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right — decorative card */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <div
                className="relative rounded-3xl p-8 lg:p-10 text-white overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${show.gradientFrom} 0%, ${show.gradientTo} 100%)`,
                  boxShadow: `0 20px 60px ${show.gradientFrom}40`,
                }}
              >
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10" />

                <div className="relative z-10">
                  <div className="text-6xl mb-5">{show.emoji}</div>
                  <h3 className="font-display text-2xl mb-3">{show.title}</h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-6">
                    {show.tagline}
                  </p>

                  {/* Quick specs */}
                  <div className="space-y-2.5">
                    {[
                      { icon: Clock,  text: "45–60 minute runtime" },
                      { icon: Users,  text: "All grade levels (K–6)" },
                      { icon: Sparkles, text: "Full audience participation" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2.5 text-white/80 text-sm font-body">
                        <Icon className="w-4 h-4 text-white/60 flex-shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/book-now"
                    className="inline-flex items-center gap-2 mt-7 bg-white text-brand-dark font-heading font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
                  >
                    Book This Show <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════ */}
      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-heading font-bold tracking-widest uppercase mb-3"
              style={{ color: show.gradientFrom }}>
              ✦ The Experience ✦
            </p>
            <h2 className="text-display text-brand-dark mb-4">How the Show Works</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
              From arrival to standing ovation — here&apos;s what to expect on show day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {show.howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 text-center"
                style={{ boxShadow: "0 4px 24px rgba(26,10,46,0.08)" }}
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              >
                {/* Step number */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-heading font-bold"
                  style={{ background: `linear-gradient(135deg, ${show.gradientFrom}, ${show.gradientTo})` }}
                >
                  {step.step}
                </div>

                {/* Connector line (not on last) */}
                {i < show.howItWorks.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 z-10"
                    style={{ background: `linear-gradient(90deg, ${show.gradientFrom}, ${show.gradientTo})`, opacity: 0.3 }}
                  />
                )}

                <div className="text-4xl mb-3 mt-3">{step.emoji}</div>
                <h3 className="font-heading font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
      {show.testimonials.length > 0 && (
        <section className="bg-white py-20 lg:py-24">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-sm font-heading font-bold tracking-widest uppercase mb-3"
                style={{ color: show.gradientFrom }}>
                ✦ Schools Love It ✦
              </p>
              <h2 className="text-display text-brand-dark">
                What Educators Say About This Show
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {show.testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="bg-brand-mist rounded-2xl p-6 border border-brand-purple/10"
                  initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-brand-dark font-body italic leading-relaxed mb-5 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-brand-purple/10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${show.gradientFrom}, ${show.gradientTo})` }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-dark text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs font-body">{t.title} — {t.school}, {t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-sm font-heading font-bold tracking-widest uppercase mb-3"
                style={{ color: show.gradientFrom }}>
                ✦ Common Questions ✦
              </p>
              <h2 className="text-display text-brand-dark">
                Questions About This Show
              </h2>
            </motion.div>

            <div className="space-y-4">
              {show.faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  className="bg-white rounded-2xl p-6"
                  style={{ boxShadow: "0 2px 12px rgba(26,10,46,0.06)" }}
                  initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
                >
                  <h3 className="font-heading font-bold text-brand-dark mb-2 flex items-start gap-2">
                    <span
                      className="text-xs font-display font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5"
                      style={{ background: show.gradientFrom }}
                    >
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #1A0A2E 0%, ${show.gradientFrom} 100%)`,
              boxShadow: "0 24px 80px rgba(26,10,46,0.3)",
            }}
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: show.gradientTo }} />

            <div className="relative z-10">
              <div className="text-5xl mb-4">{show.emoji}</div>
              <h2 className="text-display text-white mb-4">
                Ready to Book the {show.title}?
              </h2>
              <p className="text-white/65 text-lg font-body mb-10 max-w-xl mx-auto leading-relaxed">
                Dates fill fast. Check availability now — no deposit required,
                and 100% money-back guarantee on every show.
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
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-7 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors"
                >
                  View All Shows <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ShowPageTemplate;
