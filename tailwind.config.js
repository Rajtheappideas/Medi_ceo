/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Yellow: "#F4C430",
        textColor: "#101828",
        lightGray: "#EAECF0",
        Red: "#EB5757",
        bgGray:"#E5E7EB"
      },
    },
  },
  plugins: [],
};
