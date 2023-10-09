/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary' : '#9A87BA',
        'textcolor': '#2C252'
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

