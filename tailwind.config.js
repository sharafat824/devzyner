/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ededed',
        },
        primary: {
          DEFAULT: '#1E3A8A', // Indigo for light mode
          dark: '#4F46E5',    // Brighter indigo for dark mode
        },
        secondary: {
          DEFAULT: '#2563EB', // Blue for light mode
          dark: '#60A5FA',    // Lighter blue for dark mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
