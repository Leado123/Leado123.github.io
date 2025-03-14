import { defineConfig } from 'vite'
import MillionLint from "@million/lint"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
  }
})
