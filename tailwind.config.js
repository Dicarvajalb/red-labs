/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        white: "#F0F0F0",
        black: "#1C1C1C",
        gray: "#7E7E7E",
        red: "#E9545F",
        purple: "#803863",
        orange: "#EC7159",
        yellow: "#F8C251",
        green: "#2BAA99",
        blue: "#2B97B7",

        light: "#F7F0DA",
        ligthAlt1: "#FFFBEF",
        ligthAlt2: "#DDD0A9",
        ligthAlt3: "#C0A95E",
        darkPurple: "#23152E",
        lightPurple: "#504558",
        
      }
    },
  },
  plugins: ["tailwindcss ,autoprefixer"], 
}
