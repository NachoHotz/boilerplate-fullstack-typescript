import { Request, Response, NextFunction } from 'express';
import basicService from '../services/basicService.service';

export const basicController = (req: Request, res: Response, next: NextFunction) => {
  const response: string = basicService();
  res.status(200).send(response);
};
