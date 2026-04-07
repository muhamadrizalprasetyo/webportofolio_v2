import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Pakai esbuild biar dia gak rewel soal error SVG Noise
    minify: 'esbuild'
  }
})