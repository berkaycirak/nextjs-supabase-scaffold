import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Creating a server for mocking APIs whenever a request sends during testing...
export const server = setupServer(...handlers);
