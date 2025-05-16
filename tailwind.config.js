// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#0A1F31',
//           200: '#F7FAFC',
//           300:'#626A72',
//           400:'#21374B',
//           500:'#0A1F31'
//         },
//         accent:{
//           DEFAULT: '#808080'
//         },
//         background:{
//           DEFAULT: "#ffffff"
//         }
//       },
//     },
//   },
//   plugins: [],
// };

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
          DEFAULT: '#166534',  // deep emerald (darker than green-700)
          200: '#A7F3D0',      // soft mint (for light contrast)
          300: '#4ADE80',      // balanced mid-tone
          400: '#15803D',      // darker green-700
          500: '#166534',      // match DEFAULT
        }
        ,             
        secondary: {
          DEFAULT: '#F7FAFC'
        },
        accent: {
          DEFAULT: '#808080'
        },
        background: {
          DEFAULT: "#ffffff"
        }
      },
    },
  },
  plugins: [],
};