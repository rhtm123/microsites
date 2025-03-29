import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sunteck: './sunteck.html',
        draditya: './draditya.html',
        realestate: './realestate.html',
        multiX: './multiX.html',
        nakshatra: './nakshatra.html',
        interior: './interior.html',
        interior2: './interior2.html',
        events: './events.html',

        // Add more HTML files as needed
      }
    }
  }
})
