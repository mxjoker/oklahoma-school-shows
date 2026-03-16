"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  FlaskConical, BookOpen, Calculator,
  Heart, Shield, ArrowRight, Phone, Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

/* ─── Program data ───────────────────────────────────────── */
const PROGRAMS = [
  {
    icon: FlaskConical,
    emoji: "🔬",
    title: "Science Magic",
    tagline: "STEM Never Looked This Cool",
    description:
      "Jaw-dropping experiments disguised as impossible magic. Students discover the science behind every trick — and leave excited to learn more.",
    href: "/shows/science",
    gradientFrom: "#3B82F6",
    gradientTo: "#06B6D4",
    badge: "Most Popular",
    badgeVariant: "gold" as const,
    highlights: ["Forces & motion", "Chemical reactions", "Light & optics"],
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Reading & Literacy",
    tagline: "Watch Reluctant Readers Lean In",
    description:
      "A high-energy show that sparks a genuine love of reading. Even your most reluctant readers will be begging for library passes afterward.",
    href: "/shows/reading",
    gradientFrom: "#5B2D8E",
    gradientTo: "#7B3FBE",
    badge: "Educator Favorite",
    badgeVariant: "purple" as const,
    highlights: ["Story structure", "Vocabulary magic", "Reading for fun"],
  },
  {
    icon: Calculator,
    emoji: "🔢",
    title: "Math Magic",
    tagline: "Numbers Are the Real Magic",
    description:
      "Math is woven into every impossible trick. Students discover that numbers are everywhere — and that understanding them is a genuine superpower.",
    href: "/shows/math",
    gradientFrom: "#F97316",
    gradientTo: "#EAB308",
    badge: null,
    badgeVariant: "orange" as const,
    highlights: ["Number patterns", "Probability", "Mental math"],
  },
  {
    icon: Heart,
    emoji: "🌟",
    title: "Character Education",
    tagline: "Big Lessons, Magic Delivery",
    description:
      "Powerful messages about kindness, respect, and integrity — delivered through magic that makes every lesson impossible to forget.",
    href: "/shows/character-education",
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
    badge: null,
    badgeVariant: "success" as const,
    highlights: ["Respect & kindness", "Responsibility", "Growth mindset"],
  },
  {
    icon: Shield,
    emoji: "🤝",
    title: "Anti-Bullying",
    tagline: "Stand Up. Speak Out. Support.",
    description:
      "A memorable, impactful show that gives students real tools — and the confidence to use them. Schools re-book this one every year.",
    href: "/shows/anti-bullying",
    gradientFrom: "#E0218A",
    gradientTo: "#F472B6",
    badge: "High Demand",
    badgeVariant: "magenta" as const,
    highlights: ["Upstander skills", "Empathy building", "Reporting safely"],
  },
];

/* ─── Card component ─────────────────────────────────────── */
function ProgramCard({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[0];
  index: number;
}) {
  const prefersReduced = useReducedMotion();
  const Icon = program.icon;

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut" as const,
      }}
    >
      <Link href={program.href} className="group block h-full">
        <motion.div
          className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-100"
          style={{ boxShadow: "0 4px 24px rgba(26,10,46,0.10)" }}
          whileHover={
            prefersReduced
              ? {}
              : { y: -6, boxShadow: "0 20px 48px rgba(26,10,46,0.18)" }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Top gradient band */}
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${program.gradientFrom}, ${program.gradientTo})`,
            }}
          />

          <div className="p-6 lg:p-7 flex flex-col h-full">
            {/* Icon + badge row */}
            <div className="flex items-start justify-between mb-5">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${program.gradientFrom}, ${program.gradientTo})`,
                }}
                whileHover={prefersReduced ? {} : { rotate: [0, -8, 8, 0], scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                {program.emoji}
              </motion.div>
              {program.badge && (
                <Badge variant={program.badgeVariant} size="sm">
                  {program.badge}
                </Badge>
              )}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p
                className="text-xs font-heading font-bold uppercase tracking-widest mb-1"
                style={{ color: program.gradientFrom }}
              >
                {program.tagline}
              </p>
              <h3 className="font-display text-2xl text-brand-dark mb-3 group-hover:text-brand-purple transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">
                {program.description}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {program.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-heading font-semibold px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 border border-gray-100"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span
                className="inline-flex items-center gap-1.5 font-heading font-bold text-sm transition-all duration-200 group-hover:gap-2.5"
                style={{ color: program.gradientFrom }}
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <Icon className="w-5 h-5 text-gray-200 group-hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ─── "Not sure?" helper card ────────────────────────────── */
function HelpCard() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" as const }}
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden text-white p-6 lg:p-7 flex flex-col justify-between min-h-[280px]"
        style={{
          background: "linear-gradient(135deg, #1A0A2E 0%, #3D1873 60%, #5B2D8E 100%)",
          boxShadow: "0 4px 24px rgba(26,10,46,0.25)",
        }}
      >
        {/* Background sparkle decoration */}
        <div className="absolute top-4 right-4 text-brand-gold/30 text-6xl select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-6 left-5 text-brand-gold/20 text-4xl select-none pointer-events-none">
          ✦
        </div>

        <div>
          <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-brand-gold" />
          </div>
          <p className="text-brand-gold font-heading font-bold text-xs uppercase tracking-widest mb-2">
            Not sure which show?
          </p>
          <h3 className="font-display text-2xl mb-3">
            We&apos;ll Help You Choose
          </h3>
          <p className="text-white/65 text-sm font-body leading-relaxed">
            Every school is different. Tell us your goals — grade levels, theme, budget —
            and we&apos;ll recommend the perfect fit. Or combine two programs for a full-day event.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-6 bg-brand-gold text-brand-dark font-heading font-bold px-5 py-3 rounded-xl hover:bg-brand-amber transition-colors text-sm w-fit"
        >
          <Phone className="w-4 h-4" />
          Let&apos;s Talk
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Section header ─────────────────────────────────────── */
function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="text-center mb-14"
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
        ✦ Assembly Programs ✦
      </p>
      <h2 className="text-display text-brand-dark mb-4">
        5 Shows. All Standards-Aligned.
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
        Every show is packed with jaw-dropping magic, full student participation,
        and curriculum-connected takeaways your teachers will love —{" "}
        <span className="text-brand-purple font-semibold">
          and your principal will brag about.
        </span>
      </p>
    </motion.div>
  );
}

/* ─── Main ShowGrid export ───────────────────────────────── */
export function ShowGrid() {
  return (
    <section className="bg-brand-cream section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.href} program={program} index={i} />
          ))}
          <HelpCard />
        </div>

        {/* Bottom all-shows link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/shows"
            className="inline-flex items-center gap-2 text-brand-purple font-heading font-bold hover:text-brand-violet transition-colors text-sm border-b-2 border-brand-purple/30 hover:border-brand-violet pb-0.5"
          >
            View all show details & pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ShowGrid;
