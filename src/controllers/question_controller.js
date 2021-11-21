import { Question } from '../database/question.js';

class QuestionController {
  static question = new Question();

  static index(req, res) {
    const allQuestions = QuestionController.question.findAll(90);

    return res.status(200).json({ allQuestions });
  }

  static correctAnswers(req, res) {
    const answersDict = req.body;
    const keys = Object.keys(answersDict);
    const correctedAnswers = {};
    let numberOfCorrectAnswers = 0;

    keys.forEach((key) => {
      const question = QuestionController.question.findById(key);
      correctedAnswers[key] = answersDict[key] === question.correctAnswer;

      if (correctedAnswers[key]) numberOfCorrectAnswers++;
    });

    return res.status(200).json({ numberOfCorrectAnswers, correctedAnswers });
  }
}

export default QuestionController;
