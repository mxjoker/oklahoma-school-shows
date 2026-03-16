"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, Filter } from "lucide-react";
import {
  ALL_TESTIMONIALS,
  PROGRAMS_LIST,
  STATES_LIST,
  PROGRAM_COLORS,
} from "@/lib/testimonialsData";

export function TestimonialsGrid() {
  const [program, setProgram] = useState("All Programs");
  const [state,   setState]   = useState("All States");
  const prefersReduced = useReducedMotion();

  const filtered = ALL_TESTIMONIALS.filter((t) => {
    const matchProgram = program === "All Programs" || t.program === program;
    const matchState   = state   === "All States"   || t.state   === state;
    return matchProgram && matchState;
  });

  return (
    <div>
      {/* ── Filters ── */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        style={{ boxShadow: "0 2px 12px rgba(26,10,46,0.06)" }}>
        <div className="flex items-center gap-2 text-brand-purple flex-shrink-0">
          <Filter className="w-4 h-4" />
          <span className="font-heading font-bold text-sm">Filter by:</span>
        </div>

        {/* Program filter */}
        <div className="flex flex-wrap gap-2">
          {PROGRAMS_LIST.map((p) => (
            <button
              key={p}
              onClick={() => setProgram(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-all duration-150 ${
                program === p
                  ? "bg-brand-purple text-white border-brand-purple"
                  : "bg-white text-gray-500 border-gray-200 hover:border-brand-purple/40 hover:text-brand-purple"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-gray-200 flex-shrink-0" />

        {/* State filter */}
        <div className="flex flex-wrap gap-2">
          {STATES_LIST.map((s) => (
            <button
              key={s}
              onClick={() => setState(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-all duration-150 ${
                state === s
                  ? "bg-brand-magenta text-white border-brand-magenta"
                  : "bg-white text-gray-500 border-gray-200 hover:border-brand-magenta/40 hover:text-brand-magenta"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="ml-auto flex-shrink-0 text-xs font-body text-gray-400">
          {filtered.length} review{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* ── Grid ── */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            className="text-center py-20 text-gray-400 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-heading font-bold text-brand-dark mb-1">No results found</p>
            <p className="text-sm">Try a different filter combination.</p>
          </motion.div>
        ) : (
          <motion.div
            key={`${program}-${state}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-white rounded-2xl p-6 flex flex-col border border-gray-100"
                style={{ boxShadow: "0 4px 20px rgba(26,10,46,0.08)" }}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" as const }}
              >
                {/* Stars + program */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className={`text-xs font-heading font-bold px-2.5 py-1 rounded-lg border ${
                    PROGRAM_COLORS[t.program] ?? "bg-gray-100 text-gray-600 border-gray-200"
                  }`}>
                    {t.program}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-brand-dark font-body italic leading-relaxed text-sm flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-brand-dark text-sm truncate">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs font-body truncate">
                      {t.title} — {t.school}
                    </p>
                    <p className="text-gray-300 text-xs font-body">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TestimonialsGrid;
