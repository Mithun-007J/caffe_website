/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A365D',
        'secondary': '#D4AF37',
        'accent': '#F7F7F7',
        'cream': '#F4F1DE',
        'text-dark': '#2D3748',
        'text-light': '#718096',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    }
  },
  plugins: [],
}
