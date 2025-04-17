/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#BFD9D4',
        dark: '#1A1A1A',
        light: '#F4F4F4'
      }
    }
  },
  plugins: []
}