/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // sans: ["Work Sans", "sans-serif"],
      "cormorant-infant": ["Cormorant Infant", "serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        backgroundGreen: "#191B19",
        highlightGreen: "#2D3638",
        goldenBrown: "#FFC697",
        mustard: "#FFCA54",
        brightMustard: "#FFDD7D",
        cardBackground: "#191C19",
        black: "#101010",
        blue: "#314A91",
        lightBlue: "#9ABCCA",
        offwhite: "#F5F6F8",
      },
      fontSize: {
        "72px": "72px",
        "22px": "22px",
        "50px": "50px",
        "20px": "20px",
        "32px": "32px",
        "18px": "18px",
      },
    },
  },
  plugins: [require("daisyui")],
};
