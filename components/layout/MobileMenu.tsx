"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Shows",
    href: "/shows",
    children: [
      { label: "Science Magic", href: "/shows/science" },
      { label: "Reading & Literacy", href: "/shows/reading" },
      { label: "Math Magic", href: "/shows/math" },
      { label: "Character Education", href: "/shows/character-education" },
      { label: "Anti-Bullying", href: "/shows/anti-bullying" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Service Area", href: "/service-area" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll + close on Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50",
          "bg-brand-dark text-white",
          "overflow-y-auto",
          "shadow-2xl",
          "animate-slide-in"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div>
            <p className="font-display text-xl text-brand-gold">Funky Monkey Magic</p>
            <p className="text-xs text-white/60 font-body">Oklahoma School Shows</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-5 space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-heading font-bold text-lg"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-gold/30 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors font-body text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="p-5 space-y-3 border-t border-white/10 mt-4">
          <Link
            href="/book-now"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-dark font-heading font-bold py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Check Availability
          </Link>
          <a
            href="tel:4054316625"
            className="flex items-center justify-center gap-2 w-full border-2 border-white/30 text-white font-heading font-semibold py-3 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (405) 431-6625
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
