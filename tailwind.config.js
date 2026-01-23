/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(15deg)" },
          "30%": { transform: "rotate(-10deg)" },
          "45%": { transform: "rotate(15deg)" },
          "60%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
