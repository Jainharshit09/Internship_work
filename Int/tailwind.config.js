/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./course-window/index.html','./Login/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

