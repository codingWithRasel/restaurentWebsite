/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange_primary: " #F16214",
        orange_shade_1: " #F48143",
        orange_shade_2: " #F48143",
        orange_shade_3: " #F48143",
        orange_shade_4: " #F48143",
        orange_shade_5: " #F48143",
        orange_shade_6: " #F48143",
        dark_1: "#0D0C0C",
        dark_2: "#3D3D3D",
        dark_3: "#6E6D6D",
        dark_4: "#9E9E9E",
        dark_5: "#CFCECE",
        dark_6: "#E7E7E7",
        dark_7: "#E7E7E7",
      },
      fontFamily: {
        robot: "'Roboto', sans-serif",
        imperial: "'Imperial Script', cursive",
        mont: "Montserrat', sans-serif",
      },
      screens: {
        desk: "375px",
      },
    },
  },
  plugins: [],
};
