/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts}'], // Add the content option with the appropriate glob pattern.
  theme: {
    extend: {
      colors:{
        primary: '#8B8000'
      }
    },
  },
}

