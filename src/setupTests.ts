import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'node:util';
import { mockFetch } from './screens/Cart/__tests__/Cart.test';

global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
global.fetch = mockFetch as jest.Mock;
