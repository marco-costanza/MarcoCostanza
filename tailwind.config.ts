import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MarcoCostanza: blu WhaleStreet + nero + bianco (tema light)
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F8FAFC",
          muted: "#F1F5F9",
        },
        primary: {
          DEFAULT: "#466F9D", // Whale Street Blue
          dark: "#2E4C70",
          light: "#A9C5E0",
        },
        accent: {
          DEFAULT: "#3B95D9", // Biolume Blue
          light: "rgba(59, 149, 217, 0.15)",
        },
        text: {
          primary: "#212121",
          muted: "#64748B",
        },
        card: "#FFFFFF",
        "card-foreground": "#212121",
        border: {
          DEFAULT: "#E2E8F0",
        },
        ring: "#3B95D9",
        input: "#E2E8F0",
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(59, 149, 217, 0.35)",
        "glow-sm": "0 0 30px -10px rgba(59, 149, 217, 0.25)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
