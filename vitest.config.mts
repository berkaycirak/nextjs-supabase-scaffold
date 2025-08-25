import { defineConfig } from 'vitest/config';


export default defineConfig({
	test: {
		environment: 'jsdom',
		setupFiles: 'src/tests/vitest.setup.ts',
		include: ['src/**/*.test.{ts,tsx}', 'tests/integration/**/*.{test,spec}.{ts,tsx}'],
	},
});
