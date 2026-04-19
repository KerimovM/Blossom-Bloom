/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f9f5ed',
          200: '#f5efe3',
          300: '#eedfc4',
          400: '#e5cba0',
          500: '#dbb17e',
          DEFAULT: '#f9f5ed',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ede5',
          200: '#cbdccb',
          300: '#a7c3a7',
          400: '#7fa47f',
          500: '#608660',
          DEFAULT: '#a7c3a7',
        },
        rose: {
          50: '#fdf3f4',
          100: '#fae4e6',
          200: '#f6ced4',
          300: '#eeaeb8',
          400: '#e38393',
          500: '#d45a6f',
          DEFAULT: '#eeaeb8',
        },
        charcoal: {
          800: '#2b2b2b',
          900: '#1a1a1a',
          DEFAULT: '#2b2b2b',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
