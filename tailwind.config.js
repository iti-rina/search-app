/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#43E47E',
        'green-text': '#229657',
        'grey': '#A2A5AC'
      }
    },
  },
  plugins: [],
}

