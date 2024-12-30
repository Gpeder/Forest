/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      }
    },
    fontFamily:{
      sans: ["DM Sans", "system-ui"],
      serif: ["DM Serif Text", "Georgia" ]
    },
    extend: {
      colors:{
        primary:{
          200: "#acef75",
          300: "#91ee77",
          400: "#17e880",
          700: "#2e482c",
          800: "#16281f",
          900: "#0f1c15",
          950: "#030504" 
        }
      }
    },
  },
  plugins: [],
}

