/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#36BDE8",
        secondary: "#20314C",
        tertiary: "#64748B",
        quaternary: "#334155",
        placeholder: "#CBD5E1",
        green: "#BBE18C",
        yellow: "#FEEF70",
        turquoise: "#78CFBA",
        orange: "#FFC000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
