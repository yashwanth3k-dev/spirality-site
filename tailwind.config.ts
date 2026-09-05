import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        quiet: "#718096",
        paper: "#EEF2F9",
        soft: "#E2E9F4",
        line: "rgba(30, 58, 138, 0.12)",
        brand: "#1E3A8A",
        brandSoft: "#93C5FD",
        logoDot: "#F5C518",
        teal: "#0E5A55",
        sky: "#1A8A82",
        violet: "#6D28D9",
        night: "#0A1224",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "#4A5568",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        "nav-button": "hsl(var(--nav-button) / <alpha-value>)",
        "hero-bg": "hsl(var(--hero-bg) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Outfit", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", '"Instrument Serif"', "serif"],
        "instrument-serif": [
          "var(--font-instrument-serif)",
          '"Instrument Serif"',
          "serif"
        ],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "Sora", "sans-serif"]
      },
      transitionTimingFunction: {
        atelier: "cubic-bezier(0.76, 0, 0.24, 1)"
      },
      fontSize: {
        display: [
          "clamp(2.25rem,4.5vw,3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }
        ],
        h2: [
          "clamp(1.75rem,3vw,2.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }
        ],
        h3: ["1.125rem", { lineHeight: "1.35", fontWeight: "700" }]
      },
      spacing: {
        section: "5rem",
        "section-lg": "6rem"
      },
      boxShadow: {
        soft: "0 24px 80px -42px rgba(30, 58, 138, 0.32)",
        glow: "0 24px 60px -28px rgba(30, 58, 138, 0.45)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xl": "1.75rem",
        "4xl": "2.25rem"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(4px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
