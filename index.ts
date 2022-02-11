import app from './src/app';
import config from './src/lib/config';
import './src/db/db';

const { API_PORT } = config;

app.listen(API_PORT, () => {
  console.log(`server running on port ${API_PORT}`);
});
