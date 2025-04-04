/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F31',
          200: '#F7FAFC',
          400:'#21374B'
        },
      },
    },
  },
  plugins: [],
};
