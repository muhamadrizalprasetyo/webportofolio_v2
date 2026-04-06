import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ini jurus mautnya biar nggak error lagi
    minify: 'esbuild'
  }
})