/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#0F0F1A",
      light: "#E1E0E0",
      black: "#1D1D34",
      silver: {
        dark: "#878282",
        DEFAULT: "#A5A1A1",
        light: "#B9B6B6",
      },
      gray: {
        dark: "#2A2D3C",
        DEFAULT: "#3B3E54",
        light: "#4C506B",
      },
      midnight: "#2C2C4E",
      green: {
        dark: "#262C2B",
        DEFAULT: "#262C2B",
        light: "#424C4B",
      },
      violet: {
        dark: "#735D83",
        DEFAULT: "#887099",
        light: "#9C88AA",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Overused Grotesk'", "sans-serif"],
      },
      keyframes: {
        galleryFromRight: {
          from: {
            transform: "translateX(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        galleryFromleft: {
          from: {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        galleryFromRight: "galleryFromRight 0.5s ease-in-out",
        galleryFromleft: "galleryFromleft 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
