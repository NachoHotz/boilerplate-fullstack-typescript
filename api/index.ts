import app from './src/app';
import envConfig from './src/lib/envConfig';

const { API_PORT } = envConfig;

app.listen(API_PORT, () => {
  console.log(`server running on port ${API_PORT}`);
});
