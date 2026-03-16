"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  accentColor?: string; // hex color for the open state
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  accentColor = "#5B2D8E",
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const prefersReduced = useReducedMotion();

  function toggle(i: number) {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i);

        return (
          <div
            key={i}
            className={cn(
              "rounded-2xl border-2 overflow-hidden transition-all duration-200",
              isOpen
                ? "border-brand-purple/30 shadow-glow-purple/20"
                : "border-gray-100 hover:border-brand-purple/20"
            )}
            style={{
              boxShadow: isOpen
                ? `0 4px 24px ${accentColor}18`
                : "0 2px 8px rgba(26,10,46,0.06)",
            }}
          >
            {/* Question button */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-4 p-5 text-left bg-white"
              aria-expanded={isOpen}
            >
              {/* Number */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold flex-shrink-0 mt-0.5 transition-colors duration-200"
                style={{
                  background: isOpen ? accentColor : "#F4F0FF",
                  color: isOpen ? "white" : accentColor,
                }}
              >
                {i + 1}
              </div>

              <span
                className={cn(
                  "font-heading font-bold text-base flex-1 leading-snug transition-colors duration-200",
                  isOpen ? "text-brand-purple" : "text-brand-dark"
                )}
              >
                {item.q}
              </span>

              {/* Chevron */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.25 }}
                className="flex-shrink-0 mt-0.5"
              >
                <ChevronDown
                  className="w-5 h-5"
                  style={{ color: isOpen ? accentColor : "#9CA3AF" }}
                />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.28,
                    ease: "easeInOut",
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-50">
                    <p className="text-gray-500 font-body text-sm leading-relaxed pl-11">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
