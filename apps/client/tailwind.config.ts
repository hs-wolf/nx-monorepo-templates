export default {
  content: [
    './apps/client/src/{app,error}.vue',
    './apps/client/src/components/**/*.vue',
    './apps/client/src/layouts/**/*.vue',
    './apps/client/src/pages/**/*.vue',
    './apps/client/src/composables/**/*.{js,jsx,ts,tsx,vue}',
    './apps/client/src/plugins/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333',
        },
      },
    },
  },
  plugins: [],
};
