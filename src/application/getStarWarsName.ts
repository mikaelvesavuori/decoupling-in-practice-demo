import fetch from 'cross-fetch';

import { SWAPIResponse } from '../interfaces/SWAPIResponse';

import { IntegrationError } from './errors/IntegrationError.js';

/**
 * @description Get a semi-random name of a Star Wars character using SWAPI.
 */
export async function getStarWarsName(id: number): Promise<SWAPIResponse> {
  const errorMessage = 'Error while integrating with the Star Wars API...';

  return await fetch(`https://swapi.dev/api/people/${id}`).then((res: any) => {
    if (res.status === 200) return res.json();

    // Option 1: Hard break, simulate some major error on the integration side
    throw new IntegrationError(errorMessage);

    // Option 2: Graceful solution
    console.error(errorMessage);
    return {};
  });
}
