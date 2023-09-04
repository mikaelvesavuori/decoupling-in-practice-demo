/**
 * @description Incredibly primitive SWAPI response type.
 */
export type SWAPIResponse = {
  /**
   * @example 'Luke Skywalker'
   */
  name: string;
  /**
   * @example '172'
   */
  height: string;
  /**
   * @example '77'
   */
  mass: string;
  /**
   * @example 'blond'
   */
  hair_color: string;
  /**
   * @example 'fair'
   */
  skin_color: string;
  /**
   * @example 'blue'
   */
  eye_color: string;
  /**
   * @example '19BBY'
   */
  birth_year: string;
  /**
   * @example 'male'
   */
  gender: string;
  /**
   * @example 'https://swapi.dev/api/planets/1/'
   */
  homeworld: string;
  /**
   * @example ['https://swapi.dev/api/films/2/']
   */
  films: string[];
  /**
   * @example ['https://swapi.dev/api/species/1/']
   */
  species: string[];
  /**
   * @example ['https://swapi.dev/api/vehicles/14/']
   */
  vehicles: string[];
  /**
   * @example ['https://swapi.dev/api/starships/12/']
   */
  starships: string[];
  /**
   * @example '2014-12-09T13:50:51.644000Z'
   */
  created: string;
  /**
   * @example '2014-12-20T21:17:56.891000Z'
   */
  edited: string;
  /**
   * @example 'https://swapi.dev/api/people/1/'
   */
  url: string;
};
