/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['ClashDisplay', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 95s linear infinite',
        marquee2: 'marquee2 85s linear infinite',
        marqueefast: 'marquee 25s linear infinite',
        marqueesuperfast: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        primary: '#FF6F42',
        'gray-1': '#454545',
      },
    },
  },
  plugins: [],
};
