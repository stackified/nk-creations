import { defineConfig } from 'vite'

export default defineConfig({
  // Use relative paths for assets to work in any subdirectory or environment
  // Base path for GitHub Pages deployment
  base: '/nk-creations/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    host: true
  }
})
