/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    extend: {},
  },
  plugins: [],
};
