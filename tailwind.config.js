/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        s: "400px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        bluewood: {
          50: "#f5f7fa",
          100: "#eaeff4",
          200: "#cfdce8",
          300: "#a6bfd3",
          400: "#759cbb",
          500: "#5480a3",
          600: "#416788",
          700: "#35526f",
          800: "#2f475d",
          900: "#2c3e50",
          950: "#1d2834",
        },
        "brand-blue": {
          50: "#f1f9fe",
          100: "#e1f3fd",
          200: "#bde6fa",
          300: "#82d4f7",
          400: "#40bef0",
          500: "#18aae5",
          600: "#0a85bf",
          700: "#0a6a9a",
          800: "#0c5a80",
          900: "#104b6a",
          950: "#0b2f46",
        },
      },
    },
  },
  plugins: [],
};
