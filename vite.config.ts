import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://marianehds.github.io/marianehds/
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/marianehds/' : '/',
  plugins: [react()],
}))
