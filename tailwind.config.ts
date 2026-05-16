import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          black: "#060401",
          dark: "#0C0906",
          card: "#130F09",
          border: "#221A0F",
          "border-light": "#2E2418",
          gold: "#C9922A",
          "gold-light": "#E8B94F",
          "gold-muted": "#7A6535",
          "gold-dim": "#3D3218",
          cream: "#F0E6D0",
          "cream-muted": "#9A8B72",
          "cream-dim": "#5A4E3C",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(201, 146, 42, 0.07) 0%, transparent 70%)",
        "section-glow":
          "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201, 146, 42, 0.05) 0%, transparent 70%)",
        "gold-gradient":
          "linear-gradient(135deg, #E8B94F 0%, #C9922A 50%, #E8B94F 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(35, 26, 15, 0.8) 0%, rgba(13, 10, 6, 0.95) 100%)",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "marquee-reverse": "marqueeReverse 50s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
