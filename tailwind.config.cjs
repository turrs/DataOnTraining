/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: '#888888'
    },
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
