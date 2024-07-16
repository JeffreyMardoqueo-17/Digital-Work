/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        lightTheme: {
          primary: '#FF724C',
          background: '#F4F4F8',
          text: '#3182ce',
          gray: '#4a5568',
        },
        darkTheme: {
          primary: '#FF724C',
          background: '#0E2C40',
          text: '#ffffff',
          gray: '#cbd5e0',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
