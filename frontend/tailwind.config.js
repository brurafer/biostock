/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BFD9D4',
        secondary: '#63666A',
        background: '#F4F4F4',
        dark: '#1A1A1A',
        warning: '#FADDB1'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
