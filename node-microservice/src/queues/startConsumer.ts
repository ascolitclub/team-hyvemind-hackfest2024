import { start } from 'repl';
import { createLogger } from '../libs/logger';
import { consumeNode } from './consumer/nodeConsumer';

const consumerLogger = createLogger(`Consumer-Logger`);
export const startAllConsumer = async () => {
  try {
    consumerLogger.info(`Starting Node Map Consumer`);
    consumeNode();
  } catch (err) {
    consumerLogger.error(`Error in the Consumer Error`, err);
    return true;
  }
};

startAllConsumer();
