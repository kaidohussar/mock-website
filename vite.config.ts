import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
  })],
  server: {
    allowedHosts: ['adc7-87-119-182-245.ngrok-free.app']
  }
})
