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
          light_white: "rgba(255, 255, 255, 0.5);",
          greenOpt: {
            200: "rgba(0, 169, 157, 0.2)",
            1000: "#00A99D",
          },
        },
      },
    },
  },
  plugins: [],
};
