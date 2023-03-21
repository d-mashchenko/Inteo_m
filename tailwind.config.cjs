/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '40px',
        lg: '60px',
        xl: '80px',
        '2xl': '110px',
      },
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontFamily: {
        outfit: ["'Outfit', sans-serif", { fontFeatureSettings: "'liga' off" }],
        playfair: [
          "'Playfair Display', serif;",
          { fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off" },
        ],
      },
      colors: {
        white: '#ffffff',
        primary: {
          100: '#E6D8CC',
          600: '#996830',
        },
      },
    },
  },
  plugins: [],
};
