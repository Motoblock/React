/// <reference types="cypress" />
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: [
        'index.d.ts',
        '.eslintrc.cjs',
        'vite.config.ts',
        'src/vite-env.d.ts',
        'hooksRedux.ts',
        '*.{ts}',
      ],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  envDir: './',
});
