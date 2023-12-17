/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'medium':'300px',
        'small':'200px'
      },
      colors:{
        'sunnymorning': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        "oohr_bg_col" : "#F1AC73"
      },
    },
  },
  plugins: [],
};
