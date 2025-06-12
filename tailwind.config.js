/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'atkinson': ['Atkinson Hyperlegible', 'sans-serif'],
      },
      lineHeight: {
        'default': '1.5',
      },
      spacing: {
        '30': '7.5rem', // 30 * 0.25rem = 7.5rem (120px)
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bedbff',
          400: '#4f39f6',
          600: '#4e2ade',
          800: '#1c398e',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d4ff',
          400: '#8e3bc2',
          600: '#720ab3',
          800: '#3f0080',
        },
        green: {
          50: '#ecfdf5',
          100: '#d0fae5',
          200: '#a4f4cf',
          400: '#00bc7d',
          600: '#2aa373',
          800: '#007040',
        },
        pink: {
          50: '#fff0fa',
          100: '#fecdef',
          200: '#f57bcf',
          400: '#f042ba',
          600: '#bd0f87',
          800: '#870052',
        },
        yellow: {
          50: '#fdf9e7',
          100: '#fef3c6',
          200: '#fee685',
          400: '#ffd230',
          600: '#edbe0e',
          800: '#6e3f00',
        },
        neutral: {
          100: '#eaebea',
          200: '#c5c6c5',
          400: '#929392',
          600: '#545654',
          white: '#f8f9f8',
          black: '#2c241e',
        },
        alert: {
          50: '#fef2f2',
          100: '#ffe2e2',
          200: '#ffc9c9',
          400: '#fb2c36',
          600: '#e7000b',
          800: '#9f0712',
        },
      },
      backgroundImage: {
        'conic-gradient-light': 'conic-gradient(from 180deg at 50.00% 50.00%, rgba(240, 66, 186, 0.08) 22deg, rgba(142.20, 59, 194.20, 0.08) 83deg, rgba(79, 57, 246, 0.08) 170deg, rgba(0, 188, 125, 0.08) 270deg, rgba(255, 210, 48, 0.08) 336deg)',
        'conic-gradient-full': 'conic-gradient(from 180deg at 50.00% 50.00%, rgba(240, 66, 186, 1) 22deg, rgba(142.20, 59, 194.20, 1) 83deg, rgba(79, 57, 246, 1) 170deg, rgba(0, 188, 125, 1) 270deg, rgba(255, 210, 48, 1) 336deg)',
        'radial-gradient-blue': 'radial-gradient(ellipse 240.78% 1162.12% at -20.25% 0.00%, #BEDBFF 0%, #4F39F6 51%, #DBEAFE 100%)',
        'radial-gradient-dark': 'radial-gradient(ellipse 318.22% 1311.24% at -40.60% -81.82%, #1C398E 0%, #4E2ADE 53%, #1C398E 100%)',
      },
    },
  },
  plugins: [],
}