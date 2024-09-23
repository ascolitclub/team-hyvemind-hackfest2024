import mongoose from 'mongoose';
import { createLogger } from '../libs/logger';

const mongoLogger = createLogger('mongoLogger');

export const mongoDbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hackathon');

    mongoose.connection.on('connect', () => {
      mongoLogger.info('Mongo Db Database Connected');
    });

    mongoose.connection.on('error', (err) => {
      mongoLogger.error('Mongo DB Cannot Be Connected');
    });
  } catch (err) {
    mongoLogger.error('Error in the mongo db connection');
    return;
  }
};
