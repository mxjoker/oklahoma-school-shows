"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";

/* ─── Testimonial data ───────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Our students are STILL talking about the Science Magic show three weeks later. Joe had 400 kids completely locked in for 45 minutes straight. Every teacher in the building was blown away.",
    name: "Sarah Mitchell",
    title: "Principal",
    school: "Ridgeview Elementary",
    location: "Edmond, OK",
    program: "Science Magic",
    initials: "SM",
    color: "bg-blue-500",
  },
  {
    id: 2,
    quote:
      "I've booked a dozen assembly performers over the years. Funky Monkey Magic is in a completely different league — educational, hilarious, and every kid was on the edge of their seat. We rebooked on the spot.",
    name: "Tamara Reynolds",
    title: "PTA President",
    school: "Westwood Elementary",
    location: "Norman, OK",
    program: "Character Education",
    initials: "TR",
    color: "bg-brand-purple",
  },
  {
    id: 3,
    quote:
      "The reading scores in my class went up after the literacy show. The kids were begging to go to the library — that has NEVER happened before. I can't recommend this enough.",
    name: "Jennifer Clarke",
    title: "3rd Grade Teacher",
    school: "Lincoln Elementary",
    location: "Tulsa, OK",
    program: "Reading & Literacy",
    initials: "JC",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    quote:
      "We hired Joe for our anti-bullying assembly and it was the most impactful program we've had in 12 years. Students were talking about it at lunch, at home, everywhere. Truly outstanding.",
    name: "Marcus Webb",
    title: "Assistant Principal",
    school: "Prairie View Elementary",
    location: "Broken Arrow, OK",
    program: "Anti-Bullying",
    initials: "MW",
    color: "bg-brand-magenta",
  },
  {
    id: 5,
    quote:
      "Joe drove all the way from OKC to our little school in rural Kansas and treated us like we were the biggest gig he'd ever played. Professional, punctual, and an absolutely incredible show.",
    name: "Linda Hargrove",
    title: "Principal",
    school: "Clearwater Elementary",
    location: "Clearwater, KS",
    program: "Math Magic",
    initials: "LH",
    color: "bg-orange-500",
  },
  {
    id: 6,
    quote:
      "Our district booked Funky Monkey Magic for all five elementary schools on the same day. Every campus called me raving about it. That's never happened with any vendor. Ever.",
    name: "Dr. Patricia Nguyen",
    title: "District Curriculum Director",
    school: "Midwest City-Del City ISD",
    location: "Midwest City, OK",
    program: "Multiple Programs",
    initials: "PN",
    color: "bg-violet-600",
  },
];

const PROGRAM_COLORS: Record<string, string> = {
  "Science Magic":       "bg-blue-100 text-blue-700",
  "Reading & Literacy":  "bg-purple-100 text-purple-700",
  "Math Magic":          "bg-orange-100 text-orange-700",
  "Character Education": "bg-green-100 text-green-700",
  "Anti-Bullying":       "bg-pink-100 text-pink-700",
  "Multiple Programs":   "bg-violet-100 text-violet-700",
};

/* ─── Single testimonial card ───────────────────────────── */
function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 h-full flex flex-col"
      style={{ boxShadow: "0 8px 40px rgba(26,10,46,0.12)" }}>
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
          ))}
        </div>
        {/* Program badge */}
        <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${PROGRAM_COLORS[testimonial.program] || "bg-gray-100 text-gray-600"}`}>
          {testimonial.program}
        </span>
      </div>

      {/* Quote */}
      <div className="relative flex-1 mb-8">
        <Quote className="absolute -top-1 -left-1 w-8 h-8 text-brand-gold/20 fill-brand-gold/20" />
        <p className="text-brand-dark font-body text-lg leading-relaxed pl-6 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Attribution */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className={`w-12 h-12 rounded-2xl ${testimonial.color} flex items-center justify-center text-white font-display text-lg font-bold flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="font-heading font-bold text-brand-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-500 font-body">
            {testimonial.title} — {testimonial.school}
          </p>
          <p className="text-xs text-gray-400 font-body">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main carousel ─────────────────────────────────────── */
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (idx: number, dir: number) => {
      setDirection(dir);
      setCurrent((idx + total) % total);
    },
    [total]
  );

  const next = useCallback(() => go(current + 1, 1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-advance every 6s
  useEffect(() => {
    if (prefersReduced) return;
    timerRef.current = setTimeout(next, 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next, prefersReduced]);

  const slideVariants = {
    enter: (d: number) => ({
      x: prefersReduced ? 0 : d * 60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
    exit: (d: number) => ({
      x: prefersReduced ? 0 : d * -60,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const },
    }),
  };

  return (
    <section className="bg-brand-cream py-20 lg:py-28 overflow-hidden">
      <div className="container-wide px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <p className="text-sm font-heading font-bold text-brand-magenta tracking-widest uppercase mb-3">
            ✦ What Educators Say ✦
          </p>
          <h2 className="text-display text-brand-dark mb-4">
            Principals Love It. Students Go Wild.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-body">
            Over 500 schools served — here&apos;s what the people who book us (and the teachers
            who see it firsthand) have to say.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card area */}
          <div className="relative min-h-[380px] lg:min-h-[340px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={TESTIMONIALS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border-2 border-brand-purple/20 bg-white hover:bg-brand-purple hover:border-brand-purple hover:text-white text-brand-purple transition-all duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    background: i === current ? "#5B2D8E" : "#D1C4E9",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border-2 border-brand-purple/20 bg-white hover:bg-brand-purple hover:border-brand-purple hover:text-white text-brand-purple transition-all duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini grid — static preview of 3 more */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {[1, 3, 5].map((idx) => {
            const t = TESTIMONIALS[idx];
            return (
              <motion.div
                key={t.id}
                className="bg-white rounded-2xl p-5 border border-brand-mist"
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" as const }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark text-sm font-body italic leading-relaxed mb-3 line-clamp-3">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-heading font-bold text-brand-purple">{t.name}</p>
                <p className="text-xs text-gray-400 font-body">{t.school}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-brand-purple font-heading font-bold hover:text-brand-violet transition-colors border-b-2 border-brand-purple/30 hover:border-brand-violet pb-0.5 text-sm"
          >
            Read all testimonials →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
