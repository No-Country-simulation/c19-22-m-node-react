/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-violet': '#712F8E',
        'custom-violet-hover': '#61237b',
      },
      fontSize: {
        'xxs': '0.6875rem', // 11px
      },
    },
  },
  plugins: [],
};
