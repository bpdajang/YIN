import daisyui from "daisyui";
//import daisyUIThemes from "daisyui/src/theming/themes";
/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      margin: "0",
      center: true,
      padding: "2rem",
      screens: {
        xl: "1272px",
        "2xl": "1272px",
      },
    },
    extend: {},
  },
  plugins: [daisyui],
};
