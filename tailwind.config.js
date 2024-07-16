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
        primary: {
          DEFAULT: '#FF724C', // Naranja
          dark: '#F4F4F8', // Gris claro (for dark mode)
        },
        secondary: {
          DEFAULT: '#FDBF50', // Amarillo
          dark: '#2A2C41', // Gris oscuro (for dark mode)
        },
        background: {
          DEFAULT: '#F4F4F8', // Gris claro
          dark: '#FF724C', // Naranja (for dark mode)
        },
        text: {
          DEFAULT: '#2A2C41', // Gris oscuro
          dark: '#FDBF50', // Amarillo (for dark mode)
        },
      },
      textColor: {
        grayish: '#666',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
