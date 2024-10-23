/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../content/public/**/*.html",
    "../content/themes/dstheme/static/css/ds.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ],
}

