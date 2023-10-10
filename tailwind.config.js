/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "56px",
      8: "106px",
      9: "50%",
      d: "1280px",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karantina: ["Karantina", "sans-serif"],
      },
    },
    letterSpacing: {
      tightest: "1.4px",
      tighter: "1.8px",
      tight: "2.59px",
      normal: "0",
      wide: ".025em",
      wider: "9.48px",
      widest: "36.48px",
    },
  },
  plugins: [],
};
