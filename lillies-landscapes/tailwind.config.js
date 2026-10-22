/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          dark: '#0a2e11',
          DEFAULT: '#1b5e20',
          light: '#2e7d32',
          gold: '#c7a15a',
          cream: '#fcfbf8',
        }
      }
    },
  },
  plugins: [],
}
