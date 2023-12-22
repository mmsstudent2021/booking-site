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
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "28px",
        md: "38px",
        lg: "46px",
        xl: "85px",
        "2xl": "183px",
      },
    },
    extend: {
      colors: {
        bgColor: "#FFF",
        headingColor: "#0b0a12",
        bodyColor: "#747579",
        beautifulBlue: "#5143d9",
        success: "#0CBC87",
        danger: "#D6293E",
        warning: "#F7C32E",
        info: "#17A2B8",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
