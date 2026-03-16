import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "gradient" | "dark" | "highlight";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses = {
  default:   "bg-white",
  bordered:  "bg-white border-2 border-brand-mist",
  gradient:  "bg-gradient-to-br from-brand-mist to-white border border-brand-purple/10",
  dark:      "bg-brand-dark text-white",
  highlight: "bg-gradient-to-br from-brand-purple to-brand-violet text-white",
};

const paddingClasses = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

export function Card({
  variant = "default",
  hover = true,
  padding = "md",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden",
        variantClasses[variant],
        paddingClasses[padding],
        hover && [
          "transition-all duration-300 cursor-pointer",
          "hover:-translate-y-1",
          variant === "dark" || variant === "highlight"
            ? "hover:shadow-glow-purple"
            : "hover:shadow-card-hover",
        ],
        !hover && "shadow-card",
        className
      )}
      style={hover ? { boxShadow: "var(--shadow-card)" } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Sub-components ── */

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-xl font-bold text-brand-dark", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-gray-500 mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-100", className)} {...props}>
      {children}
    </div>
  );
}

export function CardImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export default Card;
