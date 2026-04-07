import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Ini kuncinya! Pakai esbuild biar si Netlify nggak rewel
    minify: 'esbuild'
  }
})