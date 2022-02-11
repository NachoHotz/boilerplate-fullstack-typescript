import { Router } from 'express';

import * as controller from '../controllers/basicController.controller';
import * as userController from '../controllers/User.controller';

const router = Router();

router.get('/', controller.basicController);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUniqueUser);
router.post('/user', userController.createUser);

export default router;
