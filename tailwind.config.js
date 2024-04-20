/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.js", "./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      sm: "480px",
      ms: "600px",
      md: "768px",
      lg: "976px",
      sl: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Degular: ["Degular", "sans-serif"],
    },
  },
  plugins: [],
};
