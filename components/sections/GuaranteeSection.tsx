"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, ShieldCheck } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: "🎩",
    title: "Show Doesn't Wow Them?",
    body: "If students aren't captivated from start to finish, just say the word.",
  },
  {
    icon: "📋",
    title: "Not Curriculum-Aligned?",
    body: "If teachers don't see real educational value, you owe us nothing.",
  },
  {
    icon: "⏱️",
    title: "Any Reason at All?",
    body: "No questions, no paperwork, no hassle. Full refund. Period.",
  },
];

export function GuaranteeSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-brand-gradient py-20 lg:py-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-black/10 blur-3xl" />
        {/* Star dots */}
        {["top-10 left-[5%]", "top-20 right-[8%]", "bottom-16 left-[12%]", "bottom-10 right-[6%]"].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} text-white/20 text-xl select-none`}
            animate={prefersReduced ? {} : {
              opacity: [0.2, 0.6, 0.2],
              scale:   [1, 1.3, 1],
            }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Seal + headline row */}
          <div className="flex flex-col items-center text-center mb-12">

            {/* Animated guarantee seal */}
            <motion.div
              className="relative mb-8"
              initial={prefersReduced ? false : { scale: 0.7, opacity: 0, rotate: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Outer ring — spinning */}
              <motion.div
                className="w-32 h-32 rounded-full border-4 border-dashed border-white/30 absolute inset-0"
                animate={prefersReduced ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner circle */}
              <div className="w-32 h-32 rounded-full bg-white/15 border-4 border-white/40 flex flex-col items-center justify-center gap-1">
                <ShieldCheck className="w-10 h-10 text-white" />
                <span className="text-white font-display text-xs leading-none">GUARANTEED</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-display text-white mb-5"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" as const }}
            >
              100% Satisfaction Guarantee
            </motion.h2>

            <motion.p
              className="text-white/80 text-xl font-body leading-relaxed max-w-2xl"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" as const }}
            >
              If your school isn&apos;t completely thrilled with the show —{" "}
              <strong className="text-white">for any reason</strong> — you pay nothing.
              Zero. We back every single performance with a full money-back guarantee.
              That&apos;s how confident we are you&apos;ll love it.
            </motion.p>
          </div>

          {/* Three guarantee scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {TRUST_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" as const }}
              >
                <div className="text-4xl mb-3">{point.icon}</div>
                <h3 className="font-heading font-bold text-white mb-2 text-base">
                  {point.title}
                </h3>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  {point.body}
                </p>
                <CheckCircle2 className="w-5 h-5 text-brand-gold mx-auto mt-3 opacity-70" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" as const }}
          >
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Risk-Free Today
            </Link>
            <p className="text-white/50 text-sm font-body mt-4">
              No deposit required to check availability · Response within 24 hours
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection;
