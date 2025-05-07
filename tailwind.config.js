/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a78bfa',
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
        },
        secondary: {
          light: '#bae6fd',
          DEFAULT: '#7dd3fc',
          dark: '#38bdf8',
        },
        accent: {
          light: '#c4b5fd',
          DEFAULT: '#a78bfa',
          dark: '#8b5cf6',
        },
        background: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#e5e7eb',
        },
      },
    },
  },
  plugins: [],
}