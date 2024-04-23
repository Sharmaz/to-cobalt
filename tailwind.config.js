/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'cursor-pulse': {
          '0%, 100%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          }
        },
      },
      animation: {
        'cursor-pulse': 'cursor-pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
