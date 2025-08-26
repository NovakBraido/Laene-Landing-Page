/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Garante que o Tailwind leia seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF0084', // Sua cor personalizada (mantida)
        'brand-pink-light': '#FFF0F7', // Seu tom claro (mantido)
      },
      // --- CÓDIGO ADICIONADO ABAIXO ---
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      // --- FIM DO CÓDIGO ADICIONADO ---
    },
  },
  // --- A MUDANÇA ESTÁ AQUI ---
  plugins: [
    require('tailwind-scrollbar'), // Adiciona o plugin da barra de rolagem
  ],
}