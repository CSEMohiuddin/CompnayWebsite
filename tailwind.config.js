/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    // fontFamily: {
    //   'sans': ["Open Sans"],
    // },
    extend: {
      colors: {
        'white': '#ffffff',
        'grayWhite': '#f2f4f7',
        'blue': '#1351d8',
        'dark': '#363636FF',
        'darkLight': '#545454FF',
        'tgreen' : '#ADFFC9',
        'trans' : '#FFFFFF00'
      },
    },
  },
  plugins: [],
}

