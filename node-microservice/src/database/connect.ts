import { DataSource } from 'typeorm';
import { getdbConfig } from '../config/db.config';

const DatabaseDataSource = new DataSource(getdbConfig());
export default DatabaseDataSource;
