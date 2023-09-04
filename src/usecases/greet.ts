import { Greeting } from '../domain/valueObjects/Greeting';

import { getStarWarsName } from '../application/getStarWarsName';

export async function greet(id: number, version = 1): Promise<string | Record<string, any>> {
  const response = await getStarWarsName(id);
  const greeting = new Greeting(response);
  const message = version === 2 ? greeting.toDTO() : greeting.message();

  return message;
}
