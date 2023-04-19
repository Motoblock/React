/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin(),
    // tsconfigPaths(),
    // istanbul({
    //   cypress: true,
    //   requireEnv: false,
    // }),
  ],
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
        'src/index.tsx',
      ],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  envDir: './',
});
