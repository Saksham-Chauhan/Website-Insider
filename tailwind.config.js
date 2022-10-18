/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          secondary: "#20222A",
          primary: "#0A0A0A",
          teal: "#00A99D",
          lightBg: "#151823",
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
          white: {
            500: "rgba(255, 255, 255, 0.05)",
          },
          lightTeal: "#b9f3ef",
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
        blink: "blink 3s ease-in-out infinite alternate",
        fadeOut: "fadeOut 0.15s ease-in forwards",
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
        blink: {
          "0%": {
            filter: "invert(0)",
          },
          "100%": {
            filter: "invert(1)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
          },
          "90%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      fontFamily: {
        miligrambold: ["MILIGRAM BOLD"],
        miligramLight: ["MILIGRAM LIGHT"],
        miligramMedium: ["MILIGRAM MEDIUM"],
        battambangMedium: ["BATTAMBANG MEDIUM"],
        battambangBold: ["BATTAMBANG BOLD"],
      },
    },
    screens: {
      xsm: "300px",
      msm: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [require("autoprefixer")],
};
