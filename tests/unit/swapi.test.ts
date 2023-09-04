import { getStarWarsName } from '../../src/application/getStarWarsName';

describe('Success cases', () => {
  test('It should get a name from the Star Wars universe', async () => {
    const expected = 'Luke Skywalker';

    const response = (await getStarWarsName(1)).name;

    expect(response).toBe(expected);
  });
});
