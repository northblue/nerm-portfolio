import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000/',  // add proxy for Express server
    },
    watch: {
      usePolling: true  // Solve the auto-reload problem in case
    }
  }   
})
