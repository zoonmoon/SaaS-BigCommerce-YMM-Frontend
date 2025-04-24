import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // So Vite can read .env values



export default defineConfig({
  define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.REACT_APP_STORE_HASH': JSON.stringify(process.env.REACT_APP_STORE_HASH),
        'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
  },
  plugins: [react({ jsxRuntime: 'automatic' })],
  build: {
    lib: {
      entry: 'src/expose-to-js/index.jsx',
      name: 'SpecsWidget',
      fileName: () => 'specs-widget.js',
      formats: ['iife'], // Immediately Invoked Function Expression (global usage)
    },
    outDir: 'dist-widget',
  },
});
