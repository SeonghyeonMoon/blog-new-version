/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /^bg-.*-(light|dark)$/,
      variants: ['dark'],
    },
  ],
  darkMode: 'class',
  theme: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#191919',
      },
      default: {
        light: '#f1f0f0',
        dark: '#373737', 
      },
      font: {
        light: '#404040',
        dark: '#fffffc',
      },
      pink: {
        light: '#f5e0e9',
        dark: '#69314c',
      },
      red: {
        light: '#ffdad9',
        dark: '#6e3630',
      },
      orange: {
        light: '#ffe2dd',
        dark: '#854c1d',
      },
      yellow: {
        light: '#fdecc8',
        dark: '#89632a',
      },
      green: {
        light: '#dbeddb',
        dark: '#2b593f',
      },
      blue: {
        light: '#d3e5ef',
        dark: '#28456c',
      },
      purple: {
        light: '#e8deee',
        dark: '#492f64',
      },
      brown: {
        light: '#eee0da',
        dark: '#603b2c',
      },
      gray: {
        light: '#e2e3e0',
        dark: '#5a5a5a',
      },
      hr: {
        light: '#dfdfde',
        dark: '#373737',
      },
      code: {
        light: '#ededeb',
        dark: '#292927',
      }
    },
  },
  plugins: [],
};
