/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        default: 'url(/default.png)'
      },
      colors: {
        brand: {
          500: '#40B4AC'
        }
      }
    },
  },
  plugins: [],
}