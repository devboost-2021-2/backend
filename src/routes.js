import { Router } from 'express';
import QuestionController from './controllers/question_controller.js';
import UserController from './controllers/user_controller.js';

const router = Router();

router.get('/questions', QuestionController.index);
router.post('/questions/answers', QuestionController.correctAnswers);
router.post('/users', UserController.create);
router.post('/users/login', UserController.login);

export default router;
