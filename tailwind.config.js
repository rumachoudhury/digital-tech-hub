/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // This scans all files in the 'pages' directory for Tailwind classes
    "./components/**/*.{js,ts,jsx,tsx}", // This scans all files in the 'components' directory for Tailwind classes
  ],
  darkMode: "class", // This enables dark mode by toggling the 'dark' class
  theme: {
    extend: {}, // Here you can extend Tailwind's default theme (optional)
  },
  plugins: [], // You can add Tailwind plugins here if needed
};
