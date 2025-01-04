/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rosario" : ["Rosario", "serif"],
        "playfair" : ["Playfair Display", "serif"],
        "tangerine" : ["Tangerine", "serif"]
      } 
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#695441",
          "secondary": "#594b3a",
          "accent": "#C1AA90",
          "base-100": "#1D1915"
        }
      }
    ]
  }
}