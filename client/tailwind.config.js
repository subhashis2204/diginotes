/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sidebar-gray": "#202123",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(10deg)" },
        },
        heartBeat: {
          "0%": {
            transform: "scale(1)",
          },
          "14%": {
            transform: "scale(1.1)",
          },
          "28%": {
            transform: "scale(1)",
          },
          "42%": {
            transform: "scale(1.2)",
          },
          "70%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out forwards",
        heartBeat: "heartBeat 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
