/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',
  './node_modules/flowbite/**/*.{js,ts}',
]
export const theme = {
  fontFamily: {
    sans: ['tekur', 'Poppins', 'sans-serif'],
    serif: ['tekur', 'serif'],
  },
  extend: {
    colors: {
      brown: {
        50: '#fdf8f6',
        100: '#f2e8e5',
        200: '#eaddd7',
        300: '#e0cec7',
        400: '#d2bab0',
        500: '#bfa094',
        600: '#a18072',
        700: '#977669',
        800: '#846358',
        900: '#43302b',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lugrasimo: ['Lugrasimo', 'sans-serif'],
    },
  },
}
export const plugins = [require('flowbite/plugin')]
