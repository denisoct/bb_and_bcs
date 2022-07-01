const withAnimations = require("animated-tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
