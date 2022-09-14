import dotenv from 'dotenv';
dotenv.config();

// TODO: Add DB envs here
export const envConfig = {
  API_PORT: process.env.API_PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_DEV_URL: process.env.CLIENT_DEV_URL,
  CLIENT_PROD_URL: process.env.CLIENT_PROD_URL,
};
