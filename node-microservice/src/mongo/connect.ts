import { MongoClient } from 'mongodb';
import { createLogger } from '../libs/logger';
import { cli } from 'winston/lib/winston/config';

const mognoLogger = createLogger('mongo-logger');

export const initalizeMongoDbUser = async () => {
  const connectionString =
    'mongodb+srv://codefortanke:5fkjTmJvIrHeRWsD@cluster0.xlsf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const client = new MongoClient(connectionString);

  await client.connect();

  const db = client.db('hackathon-db');

  const user_collection = db.collection('user-collection');

  return user_collection;
};

export const initalizeMongoHostel = async () => {
  const connectionString =
    'mongodb+srv://codefortanke:5fkjTmJvIrHeRWsD@cluster0.xlsf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const client = new MongoClient(connectionString);

  await client.connect();

  const db = client.db('hackathon-db');

  const map_collection = db.collection('map-collection');

  return map_collection;
};
