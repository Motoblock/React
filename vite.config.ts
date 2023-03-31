/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: true,
      exclude: [
        'index.d.ts',
        '.eslintrc.cjs',
        'vite.config.ts',
        'src/vite-env.d.ts',
        '*.{ts}',
        'src/index.tsx',
      ],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});
