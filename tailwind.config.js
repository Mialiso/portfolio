/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vérifie bien cette ligne !
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#06b6d4',
          600: '#0ea5e9'
        },
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
      display: ['"Playfair Display"', 'Georgia', 'serif'],
      sans: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '3xl': '1.25rem'
      }
    },
  },
  plugins: [],
}