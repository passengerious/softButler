/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#00B476', // rgb(0, 180, 118)
          500: '#00B476', // rgb(0, 180, 118) - replaces rgb(34, 197, 94)
          600: '#00B476',
          700: '#00B476',
          800: '#00B476',
          900: '#00B476',
        },
        yellow: {
          500: '#00B476', // Replacing #eab308
          400: '#00B476',
        },
      },
    },
  },
  plugins: [],
};
