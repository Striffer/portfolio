import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuração do middleware para redirecionar todas as solicitações para o index.html
    proxy: {
      '/': {
        target: 'https://striffer.github.io/portifolio/', // Substitua pelo endereço do seu servidor
        bypass: (req, res) => {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        },
      },
    },
  },
  base: "/portifolio",
})
