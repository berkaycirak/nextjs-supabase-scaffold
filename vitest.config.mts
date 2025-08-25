import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: 'src/tests/vitest.setup.ts',
    include: [
      'src/**/*.test.{ts,tsx}',
      'tests/integration/**/*.{test,spec}.{ts,tsx}'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
