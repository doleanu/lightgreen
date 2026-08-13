import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f6ead6",
          deep: "#ecdcc0",
          card: "#fbf3e6",
        },
        ink: {
          DEFAULT: "#3a2a1f",
          soft: "#5c4632",
          faint: "#8a755f",
        },
        terracotta: {
          DEFAULT: "#1c5c33",
          deep: "#0f3a20",
          bright: "#8faa3f",
        },
        ember: {
          DEFAULT: "#d9491f",
          soft: "#e37a3a",
        },
        olive: {
          DEFAULT: "#c2932f",
          deep: "#8f661f",
          bright: "#e6c04a",
        },
        char: {
          DEFAULT: "#241a12",
          deep: "#170f0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        table: "76rem",
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
