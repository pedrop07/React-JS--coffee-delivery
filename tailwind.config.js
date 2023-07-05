/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#272221',
        },
        yellow: {
          300: '#F1E9C9',
          500: '#DBAC2C',
          700: '#C47F17',
        },
        purple: {
          300: '#EBE5F9',
          500: '#8047F8',
          700: '#4B2995',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      cursive: ['"Baloo 2"', 'cursive'],
    },
  },
  plugins: [],
}
