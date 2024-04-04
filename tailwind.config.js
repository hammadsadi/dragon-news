/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: '"Poppins", sans-serif',
      },
      colors: {
        "dark-03": "#706F6F",
        "dark-02": "#403F3F",
        "dark-07": "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
