import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-lowest": "rgb(var(--surface-lowest) / <alpha-value>)",
        "surface-low": "rgb(var(--surface-low) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
        "surface-high": "rgb(var(--surface-high) / <alpha-value>)",
        "surface-highest": "rgb(var(--surface-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
        outline: "rgb(var(--outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: { content: "1280px" },
      spacing: { section: "120px" },
      boxShadow: { glow: "0 24px 80px rgba(0,0,0,.55), 0 0 60px rgba(130,87,229,.2)" },
    },
  },
  plugins: [],
};

export default config;
