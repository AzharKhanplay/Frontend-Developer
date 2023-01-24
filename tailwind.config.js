/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011a4d'
      },
      animation: {
        'spin-slow': 'spin 200s linear infinite',
        'ping-slow': 'ping 10s linear infinite',
      },
    },
  },
  plugins: [],
}