/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'ash-gray': '#EFEEE9',
        'light-pink': '#A87D6D',
        'lemon-green': '#48B0A0',
        'dark-blue': '#006FB9',
        'light-silver': '#e0dddd',
        'yellow-gold': '#FFD700',
      }, textColor: {
        'ash-gray': '#EFEEE9',
        'light-pink': '#A87D6D',
        'dark-blue': '#006FB9',
        'light-silver': '#e0dddd',
        'yellow-gold': '#FFD700',
      },
      borderColor: {
        'ash-gray': '#EFEEE9',
        'light-pink': '#A87D6D',
        'dark-blue': '#006FB9',
        'light-silver': '#e0dddd',
        'yellow-gold': '#FFD700',
      },
      colors: {
        'ash-gray': '#EFEEE9',
        'light-pink': '#A87D6D',
        'lemon-green': '#48B0A0',
        'dark-blue': '#006FB9',
        'light-silver': '#e0dddd',
        'yellow-gold': '#FFD700',
      },
    },
  },
  plugins: [],
}