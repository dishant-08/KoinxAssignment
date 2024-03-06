/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0051ff ",
        background: "#EFF2F5",
        statText: "#768396",
      },
    },
  },
  plugins: [],
};
