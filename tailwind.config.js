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
          primary: '#0B34FF',
          rojo: '#E10000',
          background: '#F4F4F8',
          text: '#3182ce',
          gray: '#4a5568',
          hoverAzul: '#002AFF',
          hoverRojo: '#FF0000',
          amarillo: '#EDFF09'
        },
        darkTheme: {
          primary: '#0B34FF',
          rojo: '#FF0000',
          background: '#01030D',
          text: '#ffffff',
          gray: '#cbd5e0',
          hoverAzul: '#002AFF',
          hoverRojo: '#FF0000',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
