"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Play, Wand2, ChevronDown } from "lucide-react";

/* ─── Sparkle particle data ─────────────────────────────── */
const SPARKLES = [
  { id: 1,  x: "8%",   y: "18%", size: 18, delay: 0,    dur: 2.8 },
  { id: 2,  x: "22%",  y: "72%", size: 12, delay: 0.6,  dur: 3.2 },
  { id: 3,  x: "38%",  y: "12%", size: 22, delay: 1.1,  dur: 2.5 },
  { id: 4,  x: "55%",  y: "80%", size: 10, delay: 0.3,  dur: 3.6 },
  { id: 5,  x: "68%",  y: "22%", size: 16, delay: 0.9,  dur: 2.9 },
  { id: 6,  x: "80%",  y: "60%", size: 20, delay: 0.4,  dur: 3.1 },
  { id: 7,  x: "91%",  y: "35%", size: 14, delay: 1.4,  dur: 2.7 },
  { id: 8,  x: "14%",  y: "45%", size: 8,  delay: 0.7,  dur: 3.4 },
  { id: 9,  x: "47%",  y: "55%", size: 11, delay: 1.8,  dur: 2.6 },
  { id: 10, x: "75%",  y: "88%", size: 15, delay: 0.2,  dur: 3.0 },
  { id: 11, x: "93%",  y: "78%", size: 9,  delay: 1.2,  dur: 3.3 },
  { id: 12, x: "30%",  y: "38%", size: 13, delay: 2.0,  dur: 2.4 },
];

/* ─── Floating magic icons ───────────────────────────────── */
const FLOATERS = [
  { id: 1, emoji: "🎩", x: "85%", y: "15%", delay: 0,   size: "text-4xl" },
  { id: 2, emoji: "⭐", x: "5%",  y: "60%", delay: 0.8, size: "text-3xl" },
  { id: 3, emoji: "🪄", x: "78%", y: "70%", delay: 1.5, size: "text-3xl" },
  { id: 4, emoji: "✨", x: "15%", y: "25%", delay: 2.0, size: "text-2xl" },
  { id: 5, emoji: "🌟", x: "92%", y: "50%", delay: 0.5, size: "text-2xl" },
];

/* ─── Animation variants ────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const badgeVariants = {
  hidden:   { opacity: 0, scale: 0.85, y: -10 },
  visible:  { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" as const, stiffness: 260, damping: 20 } },
};

/* ─── Sparkle SVG ───────────────────────────────────────── */
function Sparkle({ x, y, size, delay, dur }: (typeof SPARKLES)[0]) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.6, 1, 0],
        scale:   [0, 1, 0.8, 1, 0],
        rotate:  [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 1,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
          fill="#FFD700"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}

/* ─── Animated background orbs ─────────────────────────── */
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large slow-moving orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          top: "-15%", right: "-10%",
          background: "radial-gradient(circle, rgba(123,63,190,0.25) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          bottom: "-10%", left: "-8%",
          background: "radial-gradient(circle, rgba(224,33,138,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          top: "20%", left: "30%",
          background: "radial-gradient(circle, rgba(91,45,142,0.12) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}

/* ─── Main Hero Component ───────────────────────────────── */
export function HeroSection() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient">

      {/* Background orbs */}
      {!prefersReduced && <BackgroundOrbs />}

      {/* Sparkle particles */}
      {!prefersReduced && mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {SPARKLES.map((s) => <Sparkle key={s.id} {...s} />)}
        </div>
      )}

      {/* Floating emoji icons */}
      {!prefersReduced && mounted && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {FLOATERS.map((f) => (
            <motion.div
              key={f.id}
              className={`absolute ${f.size} select-none`}
              style={{ left: f.x, top: f.y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 0.6, 0.4, 0.6],
                y: [20, 0, -12, 0],
              }}
              transition={{
                duration: 4,
                delay: f.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {f.emoji}
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Main content ── */}
      <div className="container-wide section-padding relative z-10 pt-32 pb-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-brand-gold/40 rounded-full px-5 py-2.5 mb-8">
              <Wand2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-brand-gold font-heading font-bold text-sm tracking-wide">
                Oklahoma&apos;s #1 School Assembly Magician
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-hero text-white mb-6"
            variants={itemVariants}
          >
            Magic That{" "}
            <span className="text-gold-gradient relative">
              Teaches.
              {/* Underline decoration */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-brand-gold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              />
            </span>
            <br />
            Shows Kids{" "}
            <span className="text-gold-gradient">Won&apos;t Forget.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-white/80 font-body mb-10 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            High-energy educational magic assemblies for elementary schools —
            covering <strong className="text-white font-semibold">Science, Reading, Math,
            Character Education</strong> and <strong className="text-white font-semibold">
            Anti-Bullying</strong>. Serving OK, TX, AR, KS &amp; MO.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
              >
                <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                Check Availability
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#video"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                Watch the Show
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust micro-signals */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2"
            variants={itemVariants}
          >
            {[
              { icon: "✅", text: "100% Money-Back Guarantee" },
              { icon: "⚡", text: "Fast Response — Usually Same Day" },
              { icon: "🏆", text: "500+ Schools Served" },
            ].map((item) => (
              <span
                key={item.text}
                className="flex items-center gap-1.5 text-white/65 text-sm font-body"
              >
                <span>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      )}

      {/* Bottom wave into next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0 72V36C180 0 360 18 540 18C720 18 900 0 1080 9C1260 18 1380 36 1440 36V72H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
