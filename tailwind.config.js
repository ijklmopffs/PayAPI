/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "serif"],
      },
      colors: {
        darkPink: "#ba4270",
        waterWhite: "#fbfcfe",
        sanJuanBlue: "#36536b",
        mirageBlue: "#1b262f",
        charmPink: "#da6d97",
        lightSanJuanBlue: "#6c8294",
      },
      backgroundImage: () => ({
        "header-desktop":
          "url('/src/assets/shared/desktop/bg-pattern-circle.svg')",
      }),
    },
  },
  plugins: [],
};
