/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d2137',
          light: '#1a3a5a',
          dark: '#050d16',
        },
        accent: {
          DEFAULT: '#2cc4cb',
          hover: '#24a1a7',
          light: '#7ed8d8',
        },
        mid: '#4a90a4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
