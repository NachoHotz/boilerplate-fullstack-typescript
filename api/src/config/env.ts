import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  API_PORT: process.env.API_PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
