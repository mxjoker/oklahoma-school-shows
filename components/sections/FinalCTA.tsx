"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Phone, ArrowRight } from "lucide-react";

const REASONS = [
  "Spots fill fast Oct–Apr",
  "Schools re-book every year",
  "Same-day response",
  "No deposit to check availability",
];

export function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-10 lg:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #1A0A2E 0%, #3D1873 60%, #5B2D8E 100%)",
            boxShadow: "0 24px 80px rgba(26,10,46,0.35)",
          }}
          initial={prefersReduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
        >
          {/* Background glow orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-violet/25 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-magenta/15 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Availability badge */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-heading font-bold text-sm px-5 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                Now Booking the 2025–2026 School Year
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-display text-white mb-4"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" as const }}
            >
              Ready to Bring the Magic?
            </motion.h2>

            <motion.p
              className="text-white/65 text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" as const }}
            >
              Spots fill fast — especially October through April.
              Check availability now and lock in your date before it&apos;s gone.
            </motion.p>

            {/* Reason chips */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-10"
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              {REASONS.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/75 font-body text-xs px-3 py-1.5 rounded-full"
                >
                  <ArrowRight className="w-3 h-3 text-brand-gold flex-shrink-0" />
                  {r}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" as const }}
            >
              <motion.div whileHover={prefersReduced ? {} : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold w-full sm:w-auto"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Check Availability
                </Link>
              </motion.div>

              <motion.div whileHover={prefersReduced ? {} : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:4054316625"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-white/35 text-white font-heading font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  (405) 431-6625
                </a>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-white/35 text-xs font-body mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              Serving Oklahoma · Texas · Arkansas · Kansas · Missouri · and beyond
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
