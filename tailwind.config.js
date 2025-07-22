/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite ease-out",
        fadeIn: "fadeIn 0.5s ease-in-out both",
        slideUp: "slideUp 0.6s ease-out both",
      },
      fontFamily: {
        pixel: ['"PixelOperator"', "sans-serif"],
        pixeboy: ['"Pixeboy"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};