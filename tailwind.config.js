const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    // Add any other paths to your project's HTML/JS/TS/JSX/TSX files as needed
  ],
  theme: {
    extend: {},
    // You can extend the Tailwind CSS theme here if needed
  },
  plugins: [
    flowbite.plugin(),
    // Add any other Tailwind CSS plugins here if needed
  ],
};
