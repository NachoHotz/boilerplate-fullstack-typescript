import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware';
import { corsOptions, envConfig } from './config/';

import routes from './routes/index.route';

const app: Application = express();
const { NODE_ENV } = envConfig;

app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());

if (NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use('/', routes);
app.use(errorMiddleware);

export default app;
