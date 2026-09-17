/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0A192F',
          dark: '#071224',
          light: '#112240',
          accent: '#2563EB',
        },
        bg: '#FAFAF8',
        text: '#1F2937',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
