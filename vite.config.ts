import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3400
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
  ],
  optimizeDeps: {
    include: ['ideanuxt']
  }
})
