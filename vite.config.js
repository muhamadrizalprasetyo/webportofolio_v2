import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Pakai esbuild biar nggak error baca karakter '%' di SVG noise
    minify: 'esbuild'
  }
})