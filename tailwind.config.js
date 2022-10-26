/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./SidebarComponents/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "50rem": "50rem",
        "112": "28rem"
      },
      animation: {
        "pulse-once": "pulse linear 800ms",
        "bounce-once": "bounce linear 200ms",
        "fade-in": "fade-in linear 400ms"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" }
        }
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2000px'
    }
  },
  plugins: [],
}
