import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // So Vite can read .env values

export default defineConfig({
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
