/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./indexedDB.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#67dbda",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
animation:{
  move:"move 1s ease-in-out infinite"
}
      ,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
