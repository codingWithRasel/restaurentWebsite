/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url(./src/assets/image/hero_bg.png)",
        "hero-pattern": "url('/img/hero-pattern.svg')",
      },
      colors: {
        orange_primary: " #F16214",
        orange_shade_1: " #F48143",
        orange_shade_2: " #F7A172",
        orange_shade_3: " #F9C0A1",
        orange_shade_4: " #FCE0D0",
        orange_shade_5: " #FEEFE7",
        orange_shade_6: " #FEF7F3",
        dark_1: "#0D0C0C",
        dark_2: "#3D3D3D",
        dark_3: "#6E6D6D",
        dark_4: "#9E9E9E",
        dark_5: "#CFCECE",
        dark_6: "#E7E7E7",
        dark_7: "#E7E7E7",
        input: "#F0EDFF",
      },
      fontFamily: {
        robot: "'Roboto', sans-serif",
        imperial: "'Imperial Script', cursive",
        mont: "Montserrat', sans-serif",
        popins: "'Poppins', sans-serif",
      },
      screens: {
        desk: "375px",
      },
    },
  },
  plugins: [],
};
