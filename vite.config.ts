/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      exclude: [
        'index.d.ts',
        '.eslintrc.cjs',
        'vite.config.ts',
        'src/vite-env.d.ts',
        'hooksRedux.ts',
        '*.{ts}',
        'src/index.tsx',
      ],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
  envDir: './',
});
