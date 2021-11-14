import { Router } from 'express';
import UserController from './controllers/user_controller.js';

const router = Router();

router.post('/users', UserController.create);

export default router;
