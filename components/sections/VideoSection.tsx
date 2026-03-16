"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Users, Clock, Star } from "lucide-react";

/* ─── Stats that flank the video ────────────────────────── */
const VIDEO_STATS = [
  { icon: Users, value: "400+",  label: "Kids per Show",    color: "text-brand-gold" },
  { icon: Clock, value: "45min", label: "Runtime",          color: "text-brand-magenta" },
  { icon: Star,  value: "5.0",   label: "Average Rating",   color: "text-brand-gold" },
  { icon: Users, value: "100%",  label: "Re-Book Rate",     color: "text-green-400" },
];

/* ─── YouTube embed or placeholder ─────────────────────── */
const YOUTUBE_VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || null;

function VideoEmbed({ videoId }: { videoId: string }) {
  return (
    <iframe
      className="absolute inset-0 w-full h-full rounded-2xl"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
      title="Funky Monkey Magic School Assembly Show"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

function VideoPlaceholder({ onPlay }: { onPlay: () => void }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Ambient rings */}
      {!prefersReduced && (
        <>
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-brand-gold/20"
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-brand-gold/15"
            animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </>
      )}

      {/* Play button */}
      <motion.button
        onClick={onPlay}
        className="relative w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center shadow-glow-gold z-10 mb-5"
        whileHover={prefersReduced ? {} : { scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Play show preview"
      >
        <Play className="w-8 h-8 text-brand-dark fill-brand-dark ml-1" />
      </motion.button>

      <p className="text-white font-heading font-bold text-lg">
        Watch a Real Assembly
      </p>
      <p className="text-white/50 font-body text-sm mt-1">
        See exactly what your students will experience
      </p>
    </div>
  );
}

/* ─── Main VideoSection ─────────────────────────────────── */
export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <section id="video" className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="container-wide px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <p className="text-sm font-heading font-bold text-brand-gold tracking-widest uppercase mb-3">
            ✦ See It In Action ✦
          </p>
          <h2 className="text-display text-white mb-4">
            Watch a Real School Assembly
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-body leading-relaxed">
            See exactly what your students will experience — the energy, the laughs,
            the <em className="text-white/80">&ldquo;wait, HOW did he do that?&rdquo;</em> moments.
          </p>
        </motion.div>

        {/* Video + side stats layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto">

          {/* Left stats */}
          <motion.div
            className="hidden lg:flex lg:flex-col gap-5 order-2 lg:order-1 flex-shrink-0"
            initial={prefersReduced ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" as const }}
          >
            {VIDEO_STATS.slice(0, 2).map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[110px]">
                  <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-white/50 text-xs font-body mt-0.5">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Video player */}
          <motion.div
            className="relative w-full aspect-video rounded-3xl overflow-hidden flex-1 order-1 lg:order-2"
            style={{
              background: "linear-gradient(135deg, #2D1557 0%, #3D1873 100%)",
              boxShadow: "0 0 80px rgba(91,45,142,0.5), 0 20px 60px rgba(0,0,0,0.4)",
            }}
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            {/* Decorative corner stars */}
            <div className="absolute top-3 left-3 text-brand-gold/30 text-2xl select-none pointer-events-none z-20">✦</div>
            <div className="absolute bottom-3 right-3 text-brand-gold/30 text-2xl select-none pointer-events-none z-20">✦</div>

            {playing && YOUTUBE_VIDEO_ID ? (
              <VideoEmbed videoId={YOUTUBE_VIDEO_ID} />
            ) : (
              <VideoPlaceholder onPlay={() => YOUTUBE_VIDEO_ID && setPlaying(true)} />
            )}

            {/* "Video coming soon" ribbon if no video ID */}
            {!YOUTUBE_VIDEO_ID && (
              <div className="absolute top-4 right-4 bg-brand-gold/90 text-brand-dark font-heading font-bold text-xs px-3 py-1.5 rounded-full z-20">
                Video Coming Soon
              </div>
            )}
          </motion.div>

          {/* Right stats */}
          <motion.div
            className="hidden lg:flex lg:flex-col gap-5 order-3 flex-shrink-0"
            initial={prefersReduced ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" as const }}
          >
            {VIDEO_STATS.slice(2).map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[110px]">
                  <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-white/50 text-xs font-body mt-0.5">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile stats grid — shown only below md */}
        <div className="grid grid-cols-4 gap-3 mt-6 lg:hidden max-w-2xl mx-auto">
          {VIDEO_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-center">
                <Icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                <p className={`font-display text-xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-white/50 text-xs font-body mt-0.5 leading-tight">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Below-video note */}
        <motion.p
          className="text-center text-white/35 text-xs font-body mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Actual school assembly footage. No actors. No editing magic — just the real show.
        </motion.p>

      </div>
    </section>
  );
}

export default VideoSection;
