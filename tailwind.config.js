/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#141A28',
        primary: '#35302C',
        secondary: '#1E2738',
        success: "#0CBC8B",
        warning: '#C93D4C',
      }
    },
  },
  plugins: [],
}
