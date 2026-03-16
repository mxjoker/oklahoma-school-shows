"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown, CalendarCheck, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

/* ── Nav Data ── */
const navItems = [
  {
    label: "Shows",
    href: "/shows",
    children: [
      { label: "🔬 Science Magic",       href: "/shows/science" },
      { label: "📚 Reading & Literacy",  href: "/shows/reading" },
      { label: "🔢 Math Magic",          href: "/shows/math" },
      { label: "🌟 Character Education", href: "/shows/character-education" },
      { label: "🤝 Anti-Bullying",       href: "/shows/anti-bullying" },
    ],
  },
  { label: "About",       href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Service Area", href: "/service-area" },
  { label: "FAQ",         href: "/faq" },
  { label: "Blog",        href: "/blog" },
];

/* ── Dropdown ── */
function NavDropdown({
  item,
  isActive,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-xl font-heading font-bold text-sm transition-colors",
          isActive
            ? "text-brand-gold bg-brand-purple/10"
            : "text-brand-dark hover:text-brand-purple hover:bg-brand-mist"
        )}
      >
        {item.label}
        {"children" in item && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        )}
      </Link>

      {"children" in item && open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-card-hover border border-brand-mist z-50 overflow-hidden animate-fade-in">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-center px-4 py-3 text-sm font-body text-brand-dark hover:bg-brand-mist hover:text-brand-purple transition-colors border-b border-brand-mist/50 last:border-0"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Navbar ── */
export function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300",
                  "bg-brand-purple group-hover:bg-brand-violet shadow-button"
                )}
              >
                <Wand2 className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-display text-xl transition-colors",
                    scrolled ? "text-brand-purple" : "text-white"
                  )}
                >
                  Funky Monkey Magic
                </span>
                <span
                  className={cn(
                    "font-body text-xs transition-colors",
                    scrolled ? "text-brand-magenta" : "text-brand-gold"
                  )}
                >
                  Oklahoma School Assembly Shows
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  ("children" in item &&
                    item.children?.some((c) => pathname === c.href));

                return "children" in item ? (
                  <NavDropdown key={item.href} item={item} isActive={!!isActive} />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-xl font-heading font-bold text-sm transition-colors",
                      isActive
                        ? "text-brand-gold bg-brand-purple/10"
                        : scrolled
                          ? "text-brand-dark hover:text-brand-purple hover:bg-brand-mist"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:4054316625"
                className={cn(
                  "flex items-center gap-2 font-heading font-semibold text-sm transition-colors",
                  scrolled ? "text-brand-purple hover:text-brand-violet" : "text-white/80 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                (405) 431-6625
              </a>
              <Link
                href="/book-now"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm transition-all duration-200",
                  "bg-brand-gold text-brand-dark hover:bg-brand-amber active:scale-95",
                  "shadow-glow-gold"
                )}
              >
                <CalendarCheck className="w-4 h-4" />
                Book a Show
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                scrolled
                  ? "text-brand-dark hover:bg-brand-mist"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Navbar;
