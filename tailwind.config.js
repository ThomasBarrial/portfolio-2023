/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        background2: "#181818",
      },
      fontFamily: {
        Humane: ["var(--font-Humane)"],
        Antonio: ["Antonio", "sans-serif"],
      },
      screens: {
        desktop: "1200px",
        xxl: "1550px",
        // => @media (min-width: 1280px) { ... }
        lg: "1100px",
        md: "780px",
        phone: "550px",
      },
      animation: {
        "page-transition": "moveAnimation 3s linear",
        fadeIn: "fadeIn 3s linear",
      },
      keyframes: {
        moveAnimation: {
          "0%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
