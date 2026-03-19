import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { getAllPosts, formatDate, CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "School Assembly Tips & Resources | Funky Monkey Magic Blog",
  description:
    "Practical advice for Oklahoma principals, PTA coordinators, and teachers — how to plan great school assemblies, the science of magic-based learning, and more.",
  alternates: { canonical: "https://oklahomaschoolshows.com/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "School Assembly Tips": "bg-blue-100 text-blue-700 border-blue-200",
  "Magic & Learning":     "bg-purple-100 text-purple-700 border-purple-200",
  "Behind the Scenes":    "bg-orange-100 text-orange-700 border-orange-200",
  "Oklahoma Schools":     "bg-green-100 text-green-700 border-green-200",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest     = posts.filter((p) => !p.featured || p.slug !== featured?.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Blog</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-display text-white mb-4">
              Tips, Ideas &amp;{" "}
              <span className="text-gold-gradient">Assembly Insights</span>
            </h1>
            <p className="text-white/70 text-lg font-body leading-relaxed">
              Practical resources for Oklahoma principals, PTA coordinators, and
              teachers — planning guides, the science behind magic-based learning,
              and behind-the-scenes from the road.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="#FFF9EE" />
          </svg>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">

          {/* ── Featured post ── */}
          {featured && (
            <div className="mb-14">
              <p className="text-xs font-heading font-bold text-brand-magenta uppercase tracking-widest mb-4">
                ✦ Featured Post
              </p>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div
                  className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "0 8px 40px rgba(26,10,46,0.12)" }}
                >
                  {/* Color panel */}
                  <div
                    className="lg:w-72 flex-shrink-0 flex items-center justify-center py-16 px-8 text-8xl"
                    style={{ background: "linear-gradient(135deg, #1A0A2E, #5B2D8E)" }}
                  >
                    {featured.coverEmoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full border ${CATEGORY_COLORS[featured.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                          {featured.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-body">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.readingTime}
                        </span>
                        <span className="text-gray-400 text-xs font-body">
                          {formatDate(featured.date)}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl text-brand-dark mb-3 group-hover:text-brand-purple transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-gray-500 font-body leading-relaxed">
                        {featured.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-brand-purple font-heading font-bold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Category tabs (static — could be made interactive) ── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-xl text-sm font-heading font-bold border transition-all cursor-default ${
                  cat === "All Posts"
                    ? "bg-brand-purple text-white border-brand-purple"
                    : "bg-white text-gray-500 border-gray-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* ── Post grid ── */}
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "0 4px 20px rgba(26,10,46,0.08)" }}
                >
                  {/* Top color band */}
                  <div
                    className="h-1.5 w-full bg-gradient-to-r from-brand-purple to-brand-magenta"
                  />
                  {/* Emoji header */}
                  <div className="bg-brand-mist flex items-center justify-center py-8 text-5xl">
                    {post.coverEmoji}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-heading font-bold px-2.5 py-1 rounded-lg border ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-body">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-display text-lg text-brand-dark mb-2 group-hover:text-brand-purple transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 font-body text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-gray-400 text-xs font-body">{formatDate(post.date)}</span>
                      <span className="text-brand-purple font-heading font-bold text-xs flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-3">✍️</p>
              <p className="font-heading font-bold text-brand-dark mb-1">More posts coming soon</p>
              <p className="font-body text-sm">Check back regularly for new tips and guides.</p>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title text-brand-dark mb-4">Ready to Book Your Assembly?</h2>
          <p className="text-gray-500 font-body mb-8 max-w-md mx-auto">
            Check availability for your school — no deposit required, fast response guaranteed.
          </p>
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold"
          >
            <CalendarCheck className="w-5 h-5" />
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
