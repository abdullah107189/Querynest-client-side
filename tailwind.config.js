/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    daisyui,
  ],
}

