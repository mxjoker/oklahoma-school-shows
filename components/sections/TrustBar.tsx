"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Trophy, School, MapPin, ShieldCheck } from "lucide-react";

/* ─── Stats data ─────────────────────────────────────────── */
const STATS = [
  {
    icon: Trophy,
    value: 10,
    suffix: "+",
    label: "Years Performing",
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/20",
  },
  {
    icon: School,
    value: 500,
    suffix: "+",
    label: "Schools Served",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    icon: MapPin,
    value: 6,
    suffix: " States",
    label: "Service Area",
    color: "text-brand-magenta",
    bg: "bg-brand-magenta/10",
    border: "border-brand-magenta/20",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Money-Back Guarantee",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

/* ─── Animated counter hook ─────────────────────────────── */
function useCounter(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const startValue = 0;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return count;
}

/* ─── Individual stat card ──────────────────────────────── */
function StatCard({
  stat,
  index,
  isActive,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isActive: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const count = useCounter(stat.value, 1.8, isActive && !prefersReduced);
  const Icon = stat.icon;
  const displayValue = prefersReduced ? stat.value : count;

  return (
    <motion.div
      className={`relative flex flex-col items-center text-center p-6 rounded-2xl border ${stat.bg} ${stat.border}`}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" as const }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-3`}>
        <Icon className={`w-6 h-6 ${stat.color}`} />
      </div>

      {/* Number */}
      <div className={`font-display text-4xl lg:text-5xl font-bold ${stat.color} mb-1 tabular-nums`}>
        {displayValue}{stat.suffix}
      </div>

      {/* Label */}
      <p className="text-sm font-heading font-semibold text-gray-500 uppercase tracking-wide">
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ─── Trust badges row ──────────────────────────────────── */
const BADGES = [
  "📅 Available Year-Round",
  "🎓 Curriculum-Aligned",
  "🎤 Fully Self-Contained",
  "🚌 We Come to You",
  "📋 No Setup Required",
  "🔁 Schools Re-Book Every Year",
];

/* ─── Main TrustBar component ───────────────────────────── */
export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="container-wide px-4 sm:px-6 lg:px-8">

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isActive={isInView} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs font-heading font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
            What makes us different
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Scrolling badge ticker */}
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-3 w-max"
            animate={prefersReduced ? {} : { x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...BADGES, ...BADGES].map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-brand-mist border border-brand-purple/15 text-brand-dark font-heading font-semibold text-sm px-4 py-2 rounded-full whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Guarantee callout */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-gray-600 font-body text-sm max-w-lg">
            <span className="font-heading font-bold text-brand-dark">Not happy? You don&apos;t pay. Period.</span>{" "}
            We back every single school assembly with a full money-back guarantee — no questions,
            no hassle. That&apos;s how confident we are you&apos;ll love the show.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default TrustBar;
