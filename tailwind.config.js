/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        paper: {
          light: '#f4f1ea',
          DEFAULT: '#e4e1da',
          dark: '#2c2c2c',
        },
        ink: {
          light: '#4a4a4a',
          DEFAULT: '#2c2c2c',
          dark: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#6B46C1',
          hover: '#553C9A',
        },
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'type': 'typewriter 2s steps(40, end)',
      },
    },
  },
  plugins: [],
};