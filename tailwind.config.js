/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        bgColor: {
          primary: "rgba(32, 40, 62, 0.8)",
          average: "var(--black-65, rgba(0, 0, 0, 0.65))",
        },
        warning: {
          500: "var(--warning-500, #ffad49);",
        },
        primary: {
          200: "var(--primary-200, #beb7fb)",
        },
        grey: {
          50: "var(--grey-50,#ebeef5)",
          100: "var(--grey-100, #c3c8d4)",
          200: "var(--grey-200, #a8aebf)",
          300: "var(--grey-300, #8e95a9)",
          400: "var(--grey-400, #767e94)",
          600: "var(--grey-600, #475069)",
          700: "var(--grey-700,#323b54)",
        },
        black: {
          10: "var(--black-10, rgba(0, 0, 0, 0.1))",
        },
      },
    },
  },
  plugins: [],
};
