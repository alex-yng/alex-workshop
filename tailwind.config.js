/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EFEFEF",
        blue: "#3454D1",
        turqoise: "#34D1BF",
        dark: "#070707",
        rose: "#D1345B",
      },
      fontFamily: {
        sans: ["'Overused Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
