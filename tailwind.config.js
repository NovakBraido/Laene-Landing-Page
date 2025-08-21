/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Garante que o Tailwind leia seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF0084', // A cor exata da sua médica
        'brand-pink-light': '#FFF0F7', // Um tom bem claro para os fundos
      }
    },
  },
  plugins: [],
}
