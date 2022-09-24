import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware';
import { corsOptions, envConfig } from './config/';

import mainRouter from './routes/index.routes';

const app: Application = express();
const { NODE_ENV } = envConfig;

app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(cors(corsOptions));

if (NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use('/', mainRouter);
app.use(errorMiddleware);

export default app;
