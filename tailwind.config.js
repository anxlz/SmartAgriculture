/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0faf4',
          100: '#d9f2e3',
          200: '#b5e4cb',
          300: '#82cfa9',
          400: '#52b788',
          500: '#2d9e6b',
          600: '#1e8057',
          700: '#196647',
          800: '#175139',
          900: '#144330',
          950: '#0a261c',
        },
        earth: {
          50:  '#fdf8f3',
          100: '#f7edd9',
          200: '#eed8b2',
          300: '#e2bc81',
          400: '#d49e52',
          500: '#c88532',
          600: '#b56c27',
          700: '#975321',
          800: '#7a4321',
          900: '#63381e',
        },
        sage: '#52b788',
        forest: '#1e8057',
        cream: '#f8f6f0',
        bark: '#8B5E3C',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        source: ['"Source Sans 3"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
