/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './public/index.html'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['ui-serif', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66666%'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}

