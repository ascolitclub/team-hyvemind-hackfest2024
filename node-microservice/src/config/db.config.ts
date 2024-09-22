import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export function getdbConfig() {
  return {
    type: 'mysql',
    host: 'localhost', // Use the service name defined in docker-compose
    port: 3306, // MySQL default port
    username: 'root',
    password: 'r0bonepal77@',
    database: 'hackathon',
    migrationsTableName: 'migrations',
    synchronize: false,
    logging: false,
    migrations: [path.resolve(__dirname, '../database/migrations/*.{ts,js}')],
    entities: [path.resolve(__dirname, '../database/entity/*.{ts,js}')],
  } as DataSourceOptions;
}
