"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "gold";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand-purple text-white",
    "hover:bg-brand-violet",
    "shadow-button",
    "border-2 border-brand-purple hover:border-brand-violet",
  ].join(" "),

  gold: [
    "bg-brand-gold text-brand-dark font-bold",
    "hover:bg-brand-amber",
    "shadow-glow-gold",
    "border-2 border-brand-gold hover:border-brand-amber",
  ].join(" "),

  secondary: [
    "bg-white text-brand-purple",
    "hover:bg-brand-mist",
    "border-2 border-brand-purple",
    "shadow-card",
  ].join(" "),

  outline: [
    "bg-transparent text-white",
    "hover:bg-white/10",
    "border-2 border-white",
  ].join(" "),

  ghost: [
    "bg-transparent text-brand-purple",
    "hover:bg-brand-mist",
    "border-2 border-transparent",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-2xl gap-2.5",
  xl: "px-10 py-5 text-xl rounded-2xl gap-3",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      loading = false,
      href,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      "inline-flex items-center justify-center",
      "font-heading font-bold",
      "transition-all duration-200",
      "cursor-pointer select-none",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "active:scale-95",
      "whitespace-nowrap",
    ].join(" ");

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
