import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  // envPrefix:"APP_",
  plugins: [react()],
  alias: {
    '@': "/src"
  },
  server: {
    port: 80,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // open: true,
    historyApiFallback: true,
  },
})
