import { Router } from 'express';

import * as controller from '../controllers/rootController.controller';
import NotFoundException from '../exceptions/NotFoundException';

const mainRouter = Router();

mainRouter.get('/', controller.rootController);

mainRouter.use('*', (_req, _res, next) =>
  next(new NotFoundException('This page does not exist')),
);

export default mainRouter;
