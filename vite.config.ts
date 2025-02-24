import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
};


export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
