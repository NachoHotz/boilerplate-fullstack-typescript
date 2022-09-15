// Different types of connections. Use the one that suits your needs, and delete the rest.
// All of these connections are exported from the same file, so you can import them all at once.
// Also, make sure to install the required dependencies for each connection.

/*import { envConfig } from '../config';

const {
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
  MONGO_DEV_URI,
  MONGO_PROD_URI,
  NODE_ENV,
} = envConfig;

// MongoDB connection
import mongoose from 'mongoose';

const isDev = process.env.NODE_ENV === 'development';
const mongoURI = isDev ? MONGO_DEV_URI : MONGO_PROD_URI;

mongoose.connect(mongoURI);

// Folder name for the models = schemas

// MySQL | PostgreSQL connection with Sequelize
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
  },
);

// Folder name for the models = models

// MySQL | PostgreSQL connection with TypeORM
import { DataSource } from 'typeorm'; // IMPORTANT: This dependency can change depending of the TypeORM version you are using

export const AppDataStore = new DataSource({
  type: DB_DIALECT as any,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: NODE_ENV === 'development',
  logging: false,
  entities: [__dirname + '/entities/*.js'],
};*/

// Folder name for the models = entities
