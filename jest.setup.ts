import { mockServer } from './tests/mocks';

if (process.env.IS_MOCK_ENABLED === 'true') {
  beforeAll(() => mockServer.listen());
  afterEach(() => mockServer.resetHandlers());
  afterAll(() => mockServer.close());
}
