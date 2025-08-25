import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../__mocks__/node';
import '@testing-library/jest-dom/vitest';

// Mock ResizeObserver for shadcn/ui components
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
