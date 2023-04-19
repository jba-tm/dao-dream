/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "secondary-text": "#babcd2",
        border: "#666",
        pink: "#F95ACC",
        "darkest-blue": "#030118",
      },
    },
  },
  plugins: [],
};
