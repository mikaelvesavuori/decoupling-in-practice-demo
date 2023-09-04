import { Greeting } from '../../../src/domain/valueObjects/Greeting';

describe('Success cases', () => {
  test('It should throw an error if missing data', async () => {
    // @ts-ignore
    expect(() => new Greeting({})).toThrowError();
  });
});
