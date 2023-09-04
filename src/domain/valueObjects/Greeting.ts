import { SWAPIResponse } from '../../interfaces/SWAPIResponse.js';

/**
 * @description Example of a simple value object which will ensure it can only be in a correct state.
 */
export class Greeting {
  readonly name: string;
  readonly height: number;

  constructor(response: SWAPIResponse) {
    const name = response?.name ?? '';
    const height = response?.height ?? '0';

    if (!name || !height) throw new Error('Missing required values when constructing Greeting!');

    this.name = name;
    this.height = parseInt(height);
  }

  public message() {
    return this.height < 170
      ? `Heya ${this.name}, you little rascal you!`
      : `Looking handsome today, ${this.name}!`;
  }

  public toDTO() {
    return {
      name: this.name,
      height: this.height
    };
  }
}
