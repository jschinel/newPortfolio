/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        storyFont: ["Cormorant Upright", "serif"],
        oldTime: ["Grenze Gotisch", "serif"],
        normal: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

