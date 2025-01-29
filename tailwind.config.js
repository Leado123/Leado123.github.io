/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{html,js,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sserif: ["Source Serif 4", "serif"],
      }
    },
  },
  plugins: [flowbite.plugin()],
}

