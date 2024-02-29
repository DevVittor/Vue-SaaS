/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'profile': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        'card':'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
      },
      colors:{
        'card':'rgba(13, 13, 13, 1)',
        'dark':'rgba(29, 28, 29, 1)',
        'dark2':'rgba(15, 15, 15, 1)',
        'light':'#fff',
        'card':'rgba(23, 23, 23, 1)',
        'red':'rgba(254, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

