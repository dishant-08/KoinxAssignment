/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0051ff ",
        background: "#EFF2F5",
        statText: "#768396",
        textHeading: "#0F1629",
        text: "#3E424A",
        AbsoluteGreen: "#0FBA83",
        bgGreen: "#EBF9F4",
      },
      spacing: {
        18: "18px",
      },
      fontFamily: {
        sfpro: ["SF Pro Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
