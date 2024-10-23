import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sunteck: './sunteck.html',
        draditya: './draditya.html',
        realestate: './realestate.html'
        // Add more HTML files as needed
      }
    }
  }
})
