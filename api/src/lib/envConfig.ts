import dotenv from 'dotenv';
dotenv.config();

const envConfig = {
  API_PORT: process.env.API_PORT || 3001,
};

export default envConfig;
