import Link from "next/link";
import {
  Phone, Mail, MapPin, Facebook, Instagram,
  Wand2, CalendarCheck, Star
} from "lucide-react";

const showLinks = [
  { label: "Science Magic",       href: "/shows/science" },
  { label: "Reading & Literacy",  href: "/shows/reading" },
  { label: "Math Magic",          href: "/shows/math" },
  { label: "Character Education", href: "/shows/character-education" },
  { label: "Anti-Bullying",       href: "/shows/anti-bullying" },
];

const quickLinks = [
  { label: "About Joe",         href: "/about" },
  { label: "Testimonials",      href: "/testimonials" },
  { label: "FAQ",               href: "/faq" },
  { label: "Blog",              href: "/blog" },
  { label: "Book a Show",       href: "/book-now" },
  { label: "Contact",           href: "/contact" },
];

const stateLinks = [
  { label: "Oklahoma",  href: "/service-area/oklahoma" },
  { label: "Texas",     href: "/service-area/texas" },
  { label: "Arkansas",  href: "/service-area/arkansas" },
  { label: "Kansas",    href: "/service-area/kansas" },
  { label: "Missouri",  href: "/service-area/missouri" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      {/* ── Top CTA Bar ── */}
      <div className="bg-brand-purple">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl lg:text-3xl text-white mb-1">
                Ready to Bring the Magic to Your School?
              </h2>
              <p className="text-white/70 text-sm">
                Serving Oklahoma, Texas, Arkansas, Kansas, Missouri & beyond
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-now"
                className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold px-8 py-3 rounded-xl hover:bg-brand-amber transition-colors shadow-glow-gold"
              >
                <CalendarCheck className="w-5 h-5" />
                Check Availability
              </Link>
              <a
                href="tel:4054316625"
                className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-heading font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (405) 431-6625
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-display text-lg text-white leading-tight">Funky Monkey Magic</p>
                <p className="text-xs text-brand-gold/80 font-body">School Assembly Shows</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-4">
              Bringing educational magic assembly shows to elementary schools
              across Oklahoma and the surrounding region since 2015.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
              <span className="text-white/60 text-xs ml-2">500+ happy schools</span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/funky_monkey_magic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-magenta flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/FunkyMonkeyFoam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shows */}
          <div>
            <h3 className="font-display text-base text-brand-gold mb-4">Assembly Programs</h3>
            <ul className="space-y-2">
              {showLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base text-brand-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Service Area */}
          <div>
            <h3 className="font-display text-base text-brand-gold mb-4">Contact & Area</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:4054316625"
                  className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-gold/60" />
                  (405) 431-6625
                </a>
              </li>
              <li>
                <a
                  href="mailto:booking@funkymonkeyevents.com"
                  className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-brand-gold/60" />
                  Booking@funkymonkeyevents.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 shrink-0 text-brand-gold/60 mt-0.5" />
                Oklahoma City, OK — Serving the Midwest
              </li>
            </ul>
            <h4 className="font-display text-sm text-white/80 mb-2">States We Serve</h4>
            <div className="flex flex-wrap gap-2">
              {stateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-heading font-semibold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-brand-gold/20 hover:text-brand-gold text-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-body">
            <p>© {currentYear} Funky Monkey Events / Funky Monkey Magic. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
