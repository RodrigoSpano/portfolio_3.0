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
      xs: '465px',
      sm: '640px',
      md: '768px',
      middle: '855px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
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