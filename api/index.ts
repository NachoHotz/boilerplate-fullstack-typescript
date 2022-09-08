import app from './src/app';
import { envConfig } from './src/config';

const { API_PORT, NODE_ENV } = envConfig;

app.listen(API_PORT, () => {
  console.log(`Server running on PORT ${API_PORT} in ${NODE_ENV} mode`);
});
