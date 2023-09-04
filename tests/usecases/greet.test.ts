import { greet } from '../../src/usecases/greet';

describe('Success cases', () => {
  test('It should greet the user with the version 1 (>170cm) response', async () => {
    const expected = 'Looking handsome today, Luke Skywalker!';

    const response = await greet(1);

    expect(response).toBe(expected);
  });

  test('It should greet the user with the version 1 (<170cm) response', async () => {
    const expected = 'Heya Sebulba, you little rascal you!';

    const response = await greet(41);

    expect(response).toBe(expected);
  });

  test('It should greet the user with the version 2 response', async () => {
    const expected = { height: 172, name: 'Luke Skywalker' };

    const response = await greet(1, 2);

    expect(response).toMatchObject(expected);
  });
});
