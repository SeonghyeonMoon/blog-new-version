/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /^bg-.*-(100|800)$/,
      variants: ['dark'],
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
