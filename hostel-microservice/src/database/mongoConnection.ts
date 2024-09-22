import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { expressLogger } from '..';
import { DatabaseException } from '../exceptions';
dotenv.config();

export const getEnvConfig = (key: string) => {
  if (process.env[key]) {
    return process.env[key];
  }

  return null;
};

export const initalizeMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);

    mongoose.connection.on('error', () => {
      expressLogger.error(`Error Occured in the mongodb database`);
    });

    mongoose.connection.on('connect', () => {
      expressLogger.info('Mongo DB Database Initialized Successfully');
    });
  } catch (err) {
    throw new DatabaseException(null, 'Error in the Datanase Connection');
  }
};
