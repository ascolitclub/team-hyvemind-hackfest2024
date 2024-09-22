import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces, required for Docker
    port: 5173,       // Ensure this matches the port exposed in the Dockerfile
    strictPort: true, // Ensure the exact port is used, if not available, fail
  },
})
