import { Router } from 'express';
import HelloController from './controllers/hello_controller.js';

const router = Router();

router.get('/:name', HelloController.index);

export default router;
