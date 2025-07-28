/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        primary1: '#0a192f',
        primary: {

          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: '#4A1D1F',
        accent: '#FFA500',
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        'craftwise-orange': '#FF7A00',
        'craftwise-dark-orange': '#F26E21',
        'craftwise-maroon': '#561C14',
        'craftwise-brown': '#672218',
        'craftwise-light': '#FFF9F5',

      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default font
        montserrat: ['Montserrat', 'sans-serif'], // Custom entry
      },
      animation: {
        shine: 'shine 1.5s ease-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',

        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100px)' },
          '60%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
};
