/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  theme: {
    extend: {
      fontFamily: {
        hammersmith: ['"Hammersmith One"', "serif"],
      },
    },
  },
};
