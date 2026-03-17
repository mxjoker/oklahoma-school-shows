import Link from "next/link";
import { Metadata } from "next";
import { Home, BookOpen, MapPin, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Funky Monkey Magic",
  description: "The page you're looking for doesn't exist. Find school assembly shows, booking info, and more.",
};

const QUICK_LINKS = [
  { href: "/shows",        icon: <Sparkles className="h-5 w-5" />, label: "Browse Show Programs" },
  { href: "/service-area", icon: <MapPin    className="h-5 w-5" />, label: "Service Area"         },
  { href: "/book-now",     icon: <BookOpen  className="h-5 w-5" />, label: "Book a Show"          },
  { href: "/contact",      icon: <Phone     className="h-5 w-5" />, label: "Contact Joe"          },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center section-padding">
      <div className="container-wide text-center max-w-2xl">
        {/* Big 404 */}
        <div className="mb-4 text-[8rem] font-display font-bold leading-none text-white/10 select-none">
          404
        </div>

        {/* Emoji */}
        <div className="mb-6 text-6xl">🎩</div>

        <h1 className="text-display text-white mb-4">
          That Page Disappeared!
        </h1>
        <p className="text-lg text-white/70 mb-10 leading-relaxed">
          Even a magician can&apos;t find this one. The page you&apos;re looking for may have
          moved, been renamed, or never existed in the first place.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-4 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/15"
            >
              <span className="text-brand-gold">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Home CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark shadow-lg transition-all hover:bg-brand-amber hover:-translate-y-0.5"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
