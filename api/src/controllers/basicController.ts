import { Request, Response, NextFunction } from 'express';

const basicController = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World!');
};

export default basicController;
