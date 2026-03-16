import React from "react";
import { cn } from "@/lib/utils";

type BgVariant = "white" | "cream" | "mist" | "dark" | "gradient" | "purple";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  bg?: BgVariant;
  narrow?: boolean;
  noPadding?: boolean;
  id?: string;
}

const bgClasses: Record<BgVariant, string> = {
  white:    "bg-white",
  cream:    "bg-brand-cream",
  mist:     "bg-brand-mist",
  dark:     "bg-brand-dark text-white",
  gradient: "bg-brand-gradient text-white",
  purple:   "bg-brand-purple text-white",
};

export function SectionWrapper({
  as: Tag = "section",
  bg = "white",
  narrow = false,
  noPadding = false,
  children,
  className,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(bgClasses[bg], className)}
      {...props}
    >
      <div
        className={cn(
          !noPadding && "section-padding",
          narrow ? "container-narrow" : "container-wide"
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

/* ── Section Header helper ── */
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-heading font-bold tracking-widest uppercase mb-3",
            light ? "text-brand-gold" : "text-brand-magenta"
          )}
        >
          ✦ {eyebrow} ✦
        </p>
      )}
      <h2
        className={cn(
          "text-display mb-4",
          light ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionWrapper;
