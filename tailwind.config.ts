import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Colors ────────────────────────────────────
      colors: {
        brand: {
          purple:   "#5B2D8E",
          violet:   "#7B3FBE",
          gold:     "#FFD700",
          amber:    "#FFC200",
          magenta:  "#E0218A",
          orange:   "#FF6B35",
          dark:     "#1A0A2E",
          midnight: "#0D0519",
          cream:    "#FFF9EE",
          mist:     "#F4F0FF",
        },
      },

      // ── Typography ────────────────────────────────────
      fontFamily: {
        display: ["var(--font-fredoka)", "Fredoka", "cursive"],
        heading: ["var(--font-nunito)",  "Nunito",  "sans-serif"],
        body:    ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },

      // ── Shadows ───────────────────────────────────────
      boxShadow: {
        "glow-gold":    "0 0 30px rgba(255, 215, 0, 0.4)",
        "glow-purple":  "0 0 30px rgba(91, 45, 142, 0.5)",
        "glow-magenta": "0 0 30px rgba(224, 33, 138, 0.4)",
        "card":         "0 4px 24px rgba(26, 10, 46, 0.12)",
        "card-hover":   "0 12px 40px rgba(91, 45, 142, 0.25)",
        "button":       "0 4px 14px rgba(91, 45, 142, 0.4)",
      },

      // ── Keyframes & Animations ─────────────────────────
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.3", transform: "scale(0.75)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,215,0,0.3)" },
          "50%":      { boxShadow: "0 0 45px rgba(255,215,0,0.7)" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
      animation: {
        "float":       "float 3s ease-in-out infinite",
        "sparkle":     "sparkle 2s ease-in-out infinite",
        "slide-up":    "slideUp 0.6s ease-out forwards",
        "slide-in":    "slideIn 0.5s ease-out forwards",
        "fade-in":     "fadeIn 0.4s ease-out forwards",
        "bounce-slow": "bounce 2.5s ease-in-out infinite",
        "spin-slow":   "spin 8s linear infinite",
        "pulse-glow":  "pulseGlow 2s ease-in-out infinite",
        "ticker":      "ticker 30s linear infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
      },

      // ── Border Radius ─────────────────────────────────
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ── Background Images ──────────────────────────────
      backgroundImage: {
        "gradient-brand":  "linear-gradient(135deg, #5B2D8E 0%, #7B3FBE 50%, #E0218A 100%)",
        "gradient-gold":   "linear-gradient(135deg, #FFD700 0%, #FFC200 100%)",
        "gradient-dark":   "linear-gradient(180deg, #1A0A2E 0%, #0D0519 100%)",
        "gradient-hero":   "linear-gradient(135deg, #1A0A2E 0%, #3D1873 60%, #5B2D8E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
