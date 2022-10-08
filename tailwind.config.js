/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          secondary: "#20222A",
          primary: "#0A0A0A",
          teal: "#00A99D",
          light_white: "rgba(255, 255, 255, 0.5)",
          greenOpt: {
            200: "rgba(0, 169, 157, 0.2)",
            1000: "#00A99D",
          },
          blueOpt: {
            200: "rgba(114, 137, 218, 0.2)",
            1000: "#7289DA",
          },
          black: {
            700: "rgb(10,10,10,0.7)",
          },
        },
      },
      boxShadow: {
        "3xl": "0 2px 38px -1px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        leftIn: "leftIn 0.6s ease forwards",
        leftOut: "leftOut 0.6s ease forwards",
        rightIn: "rightIn 0.6s ease forwards",
        rightOut: "rightOut 0.6s ease forwards",
      },
      keyframes: {
        leftIn: {
          "0%": {
            transform: "translate(195px, 81px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        leftOut: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
          "99%": {
            opacity: 0,
            transform: "translate(-135px, -69px)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(-145px, 80px)",
          },
        },
        rightIn: {
          "0%": {
            transform: "translate(-145px, 80px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        rightOut: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
          "99%": {
            opacity: 0,
            transform: " translate(138px, -66px)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(195px, 81px)",
          },
        },
      },
    },
  },
  plugins: [],
};
