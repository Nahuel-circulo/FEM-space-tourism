/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow ,serif",
        bellefair: "Bellefair",
      },
      backgroundImage:{
        "home-mobile":"url('./src/assets/home/background-home-mobile.jpg')",
        "home-tablet":"url('./src/assets/home/background-home-tablet.jpg')",
        "home-desktop":"url('./src/assets/home/background-home-desktop.jpg')",
      },
      colors:{
        "white-text":"#D0D6F9",
        "black-text":"#0B0D17",
      }
    },
  },
  plugins: [],
};
