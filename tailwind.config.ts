import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131314",
        surface: "#131314",
        "surface-lowest": "#0e0e0f",
        "surface-low": "#1c1b1c",
        "surface-container": "#201f20",
        "surface-high": "#2a2a2b",
        "surface-highest": "#353436",
        "on-surface": "#e5e2e3",
        "on-surface-variant": "#cbc3d6",
        outline: "#958e9f",
        "outline-variant": "#494454",
        primary: "#d0bcff",
        "primary-container": "#8257e5",
        secondary: "#41ef79",
        tertiary: "#ffb964",
        error: "#ffb4ab",
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
