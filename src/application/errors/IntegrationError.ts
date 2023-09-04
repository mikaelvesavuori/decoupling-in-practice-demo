import { MikroLog } from 'mikrolog';

export class IntegrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IntegrationError';
    this.message = message;
    this.cause = 502;

    const logger = MikroLog.start();
    logger.error(message);
  }
}
