import { Router } from 'express';

import * as controller from '../controllers/basicController.controller';
import NotFoundException from '../exceptions/NotFoundException';

const router = Router();

router.get('/', controller.basicController);

router.use('*', (_req, _res, next) =>
  next(new NotFoundException('This page does not exist')),
);

export default router;
