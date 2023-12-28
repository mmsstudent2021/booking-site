/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.975rem",
      },
    },
    extend: {
      fontFamily: {
        "6xl": "4rem"
      },
      colors: {
        bgColor: "#FFF",
        headingColor: "#0b0a12",
        bodyColor: "#747579",
        beautifulBlue: "#5143d9",
        success: "#0CBC87",
        danger: "#D6293E",
        warning: "#F7C32E",
        info: "#17A2B8",
        blue: {
          100: "#dcd9f7",
          200: "#b9b4f0",
          300: "#978ee8",
          400: "#7469e1",
          500: "#5143d9",
          600: "#4136ae",
          700: "#312882",
          800: "#201b57",
          900: "#100d2b",
        },
        yellow: {
          100: "#fdf3d5",
          200: "#fce7ab",
          300: "#fadb82",
          400: "#f9cf58",
          500: "#f7c32e",
          600: "#c69c25",
          700: "#94751c",
          800: "#634e12",
          900: "#312709",
        },
        red: {
          100: "#f7d4d8",
          200: "#efa9b2",
          300: "#e67f8b",
          400: "#de5465",
          500: "#d6293e",
          600: "#ab2132",
          700: "#801925",
          800: "#561019",
          900: "#2b080c",
        },
        teal: {
          100: "#d1ecf1",
          200: "#a2dae3",
          300: "#74c7d4",
          400: "#45b5c6",
          500: "#17a2b8",
          600: "#128293",
          700: "#0e616e",
          800: "#09414a",
          900: "#052025"
},
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "94%",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
