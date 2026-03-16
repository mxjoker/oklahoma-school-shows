import React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "gold"
  | "purple"
  | "magenta"
  | "orange"
  | "success"
  | "outline"
  | "dark";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  icon?: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:  "bg-brand-mist text-brand-purple border border-brand-purple/20",
  gold:     "bg-brand-gold text-brand-dark border border-brand-amber font-bold",
  purple:   "bg-brand-purple text-white border border-brand-violet",
  magenta:  "bg-brand-magenta text-white border border-pink-400",
  orange:   "bg-brand-orange text-white border border-orange-400",
  success:  "bg-green-100 text-green-700 border border-green-200",
  outline:  "bg-transparent text-brand-purple border-2 border-brand-purple",
  dark:     "bg-brand-dark text-white border border-white/10",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs rounded-lg",
  md: "px-3 py-1 text-sm rounded-xl",
  lg: "px-4 py-1.5 text-base rounded-xl",
};

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  icon,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-heading font-semibold",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            variant === "gold" ? "bg-brand-amber" : "bg-current"
          )}
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
