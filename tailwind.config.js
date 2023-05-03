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
        "home-mobile":"url('/images/home/background-home-mobile.jpg')",
        "home-tablet":"url('/images/home/background-home-tablet.jpg')",
        "home-desktop":"url('/images/home/background-home-desktop.jpg')",
        "destination-mobile":"url('/images/destination/background-destination-mobile.jpg')",
        "destination-tablet":"url('/images/destination/background-destination-tablet.jpg')",
        "destination-desktop":"url('/images/destination/background-destination-desktop.jpg')",
        "crew-mobile":"url('/images/crew/background-crew-mobile.jpg')",
        "crew-tablet":"url('/images/crew/background-crew-tablet.jpg')",
        "crew-desktop":"url('/images/crew/background-crew-desktop.jpg')",
      },
      colors:{
        "white-text":"#D0D6F9",
        "black-text":"#0B0D17",
      },
      backgroundColor:{
        "mywhite":"rgba(255, 255, 255, 0.04)",
      },
      fontSize:{
        "10xl": "150px"
      },
      height:{
        "grid-mobile":"calc(100vh - 124px)",
        "grid-tablet":"calc(100vh - 200px)",
        "grid-desktop":"calc(100vh - 124px)",
      },
      gridTemplateRows:{
        autoandrepeatfr: 'auto  minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
};
