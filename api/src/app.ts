import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import routes from './routes';
import setHeaders from './middlewares/setHeaders';

const app: Application = express();

app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(setHeaders);
app.use(morgan('dev'));

app.use('/', routes);

type error = {
  status: number;
  message: string;
};

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

export default app;
