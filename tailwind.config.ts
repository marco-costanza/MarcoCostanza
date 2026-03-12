import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgba(var(--border), <alpha-value>)",
        input: "rgba(var(--input), <alpha-value>)",
        ring: "rgba(var(--ring), <alpha-value>)",
        background: "rgba(var(--background), <alpha-value>)",
        foreground: "rgba(var(--foreground), <alpha-value>)",
        primary: {
          DEFAULT: "rgba(var(--primary), <alpha-value>)",
          foreground: "rgba(var(--primary-foreground), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary), <alpha-value>)",
          foreground: "rgba(var(--secondary-foreground), <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgba(var(--destructive), <alpha-value>)",
          foreground: "rgba(var(--destructive-foreground), <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgba(var(--muted), <alpha-value>)",
          foreground: "rgba(var(--muted-foreground), <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgba(var(--accent), <alpha-value>)",
          foreground: "rgba(var(--accent-foreground), <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgba(var(--popover), <alpha-value>)",
          foreground: "rgba(var(--popover-foreground), <alpha-value>)",
        },
        card: {
          DEFAULT: "rgba(var(--card), <alpha-value>)",
          foreground: "rgba(var(--card-foreground), <alpha-value>)",
        },
        // Manteniamo questi colori per back-compatibility, anche se shadcn userà le vars
        text: {
          primary: "rgba(var(--foreground), <alpha-value>)",
          muted: "rgba(var(--muted-foreground), <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 149, 217, 0.4)",
        "glow-sm": "0 0 20px -5px rgba(59, 149, 217, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
