/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E11',
        surface: '#151C24',
        border: '#2A3441',
        primary: '#10B981',
        danger: '#EF4444',
        text: '#E5E7EB',
        muted: '#9CA3AF',
      },
    },
  },
  plugins: [],
}