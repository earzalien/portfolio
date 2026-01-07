// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('framer-motion') ||
              id.includes('gsap') ||
              id.includes('swiper')
            ) {
              return 'vendor-motion';
            }

            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }

            return 'vendor';
          }
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
