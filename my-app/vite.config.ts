import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public',  // Tell Vite to use `public` folder as root where index.html is
  plugins: [react()],
  build: {
    outDir: '../dist', // Output build folder relative to root (`public`), so it's outside `public`
    emptyOutDir: true,
  },
  server: {
    open: true, // optional: auto open browser on `npm run dev`
  }
});
