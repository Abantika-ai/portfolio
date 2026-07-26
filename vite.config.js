import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages serves from https://<user>.github.io/portfolio/ —
  // asset URLs must be rooted at that subpath, not "/".
  base: '/portfolio/',
})
