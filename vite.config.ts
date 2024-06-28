import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/projects/amplify-vite-react-template/src/assets/c2ba9d93-5267-4ac5-9f61-78c83a0d8667.jpg'],
    },
  },
})
