import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware';
import { corsOptions } from './config/';

import routes from './routes/index.route';

const app: Application = express();

app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());

app.use('/', routes);
app.use(errorMiddleware);

export default app;
