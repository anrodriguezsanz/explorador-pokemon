import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/pokemon-list': path.resolve(__dirname, './src/features/modules/pokemon-list'),
      '@/pokemon-details': path.resolve(__dirname, './src/features/modules/pokemon-details'),
      '@/pokemon-favorites': path.resolve(__dirname, './src/features/modules/pokemon-favorites'),
      '@/shared': path.resolve(__dirname, './src/shared'),
    },
  },
})
