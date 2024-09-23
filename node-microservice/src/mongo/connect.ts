import { MongoClient } from 'mongodb';
import { createLogger } from '../libs/logger';

const mongoLogger = createLogger('mongo-logger');

export const initializeMongoDbUser = async () => {
  const connectionString =
    'mongodb+srv://codefortanke:5fkjTmJvIrHeRWsD@cluster0.xlsf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const client = new MongoClient(connectionString);

  await client.connect();

  const db = client.db('hackathon-db');

  const collectionName = 'user-collection';
  
  // Check if the collection exists
  const collections = await db.listCollections({ name: collectionName }).toArray();
  
  if (collections.length === 0) {
    // Collection does not exist, create it
    await db.createCollection(collectionName);
    mongoLogger.info(`Created collection: ${collectionName}`);
  } else {
    mongoLogger.info(`Collection already exists: ${collectionName}`);
  }

  const user_collection = db.collection(collectionName);

  return user_collection;
};

export const initializeMongoHostel = async () => {
  const connectionString =
    'mongodb+srv://codefortanke:5fkjTmJvIrHeRWsD@cluster0.xlsf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const client = new MongoClient(connectionString);

  await client.connect();

  const db = client.db('hackathon-db');

  const collectionName = 'map-collection';

  // Check if the collection exists
  const collections = await db.listCollections({ name: collectionName }).toArray();
  
  if (collections.length === 0) {
    // Collection does not exist, create it
    await db.createCollection(collectionName);
    mongoLogger.info(`Created collection: ${collectionName}`);
  } else {
    mongoLogger.info(`Collection already exists: ${collectionName}`);
  }

  const map_collection = db.collection(collectionName);

  return map_collection;
};
