import { Router } from 'express';
import QuestionController from './controllers/question_controller.js';

const router = Router();

router.get('/questions', QuestionController.index);

export default router;
