/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontMono: ['Geist Mono , monospace'],
        fontSora: ['Sora'],
      },
      backgroundImage: {
        hero_bg_img: "url('./src/assets/banner.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
