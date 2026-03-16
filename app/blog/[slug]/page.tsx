import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock, Calendar, ArrowLeft,
  CalendarCheck, ChevronRight, ArrowRight,
} from "lucide-react";
import { getAllSlugs, getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";

/* ─── Static params ──────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ─── Metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Funky Monkey Magic Blog`,
    description: post.description,
    alternates: { canonical: `https://oklahomeschoolshows.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://oklahomeschoolshows.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

/* ─── Simple MDX → HTML renderer ────────────────────────── */
function renderMDX(content: string): string {
  return (
    content
      // h2
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      // h3
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      // bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // inline code
      .replace(/`(.+?)`/g, "<code>$1</code>")
      // links [text](href)
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      // horizontal rule
      .replace(/^---$/gm, "<hr>")
      // unordered list items
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      // wrap consecutive <li> in <ul>
      .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
      // paragraphs (lines with content that aren't already HTML tags)
      .replace(
        /^(?!<[hul]|<li|<hr|<blockquote)(.+)$/gm,
        (line) => (line.trim() ? `<p>${line}</p>` : "")
      )
      // blockquotes
      .replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>")
      // clean up blank lines between tags
      .replace(/\n{3,}/g, "\n\n")
  );
}

/* ─── Category color helper ──────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  "School Assembly Tips": "bg-blue-100 text-blue-700 border-blue-200",
  "Magic & Learning":     "bg-purple-100 text-purple-700 border-purple-200",
  "Behind the Scenes":    "bg-orange-100 text-orange-700 border-orange-200",
  "Oklahoma Schools":     "bg-green-100 text-green-700 border-green-200",
};

/* ─── Page ───────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts  = getAllPosts();
  const related   = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const htmlContent = renderMDX(post.content);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/"    className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full border ${CATEGORY_COLORS[post.category] ?? "bg-white/20 text-white border-white/20"}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-sm font-body">
                <Clock className="w-3.5 h-3.5" /> {post.readingTime}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-sm font-body">
                <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
              </span>
            </div>

            {/* Cover emoji */}
            <div className="text-6xl mb-4">{post.coverEmoji}</div>

            {/* Title */}
            <h1 className="text-display text-white mb-4 leading-tight">{post.title}</h1>
            <p className="text-white/65 text-lg font-body leading-relaxed">{post.description}</p>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 48V24C360 0 720 24 1080 12C1260 6 1380 18 1440 24V48H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Content + sidebar ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* ── Article ── */}
            <article className="lg:col-span-2">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-purple font-heading font-bold text-sm mb-8 hover:text-brand-violet transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              {/* Body */}
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wide mb-3">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-brand-mist text-brand-purple text-xs font-heading font-bold rounded-lg border border-brand-purple/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author card */}
              <div className="mt-10 bg-brand-mist rounded-2xl p-6 flex items-start gap-4 border border-brand-purple/10">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple flex items-center justify-center text-white font-display text-2xl flex-shrink-0">
                  🎩
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-dark mb-0.5">{post.author}</p>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    Oklahoma&apos;s #1 school assembly magician — performing educational magic shows
                    for elementary schools across OK, TX, AR, KS, and MO since 2014.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {/* CTA */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #1A0A2E, #5B2D8E)" }}
              >
                <p className="font-display text-lg mb-1">Book a Show</p>
                <p className="text-white/60 text-sm font-body mb-5">
                  No deposit required · 100% money-back guarantee · Fast response
                </p>
                <Link
                  href="/book-now"
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold py-3 rounded-xl hover:bg-brand-amber transition-colors text-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Check Availability
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-brand-cream rounded-2xl p-5 border border-brand-mist">
                  <h3 className="font-display text-base text-brand-dark mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <span className="text-2xl flex-shrink-0">{r.coverEmoji}</span>
                        <div>
                          <p className="font-heading font-bold text-brand-dark text-sm group-hover:text-brand-purple transition-colors leading-snug">
                            {r.title}
                          </p>
                          <p className="text-gray-400 text-xs font-body mt-0.5">
                            {r.readingTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Show links */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-display text-base text-brand-dark mb-3">Our Programs</h3>
                <div className="space-y-2">
                  {[
                    { label: "🔬 Science Magic",       href: "/shows/science" },
                    { label: "📚 Reading & Literacy",  href: "/shows/reading" },
                    { label: "🔢 Math Magic",          href: "/shows/math" },
                    { label: "🌟 Character Education", href: "/shows/character-education" },
                    { label: "🤝 Anti-Bullying",       href: "/shows/anti-bullying" },
                  ].map((show) => (
                    <Link
                      key={show.href}
                      href={show.href}
                      className="flex items-center justify-between text-sm font-body text-gray-500 hover:text-brand-purple py-1.5 border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {show.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
