import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      middle: '855px'
    },
    extend: {
      fontFamily: {
        adlam: 'ADLaM Display, cursive',
        kanit: 'Kanit, sans-serif'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}