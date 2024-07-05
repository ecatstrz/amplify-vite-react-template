import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/projects/amplify-vite-react-template/src/assets/1.jpg', '/projects/amplify-vite-react-template/src/assets/2.jpg'],
    },
  },
})
