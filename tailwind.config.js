/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#120D0E",
        secondary: "orange",
      },
    },
  },
  plugins: [require("daisyui")],
};
