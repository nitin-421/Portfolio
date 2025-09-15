// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flashRed: {
          '0%, 100%': { color: 'white' },
          '50%':      { color: 'purple' },
        },
      },
      animation: {
        'letter-flash':'flashRed 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
