export class Question {
  constructor() {
    const alternatives = [
      { id: 'a', option: 'Texto da alternativa A' },
      { id: 'b', option: 'Texto da alternativa B' },
      { id: 'c', option: 'Texto da alternativa C' },
      { id: 'd', option: 'Texto da alternativa D' },
    ];

    const question = {
      alternatives: alternatives,
      number: -1,
      statement: 'Lorem ipsum',
      exam: 'FUVEST 2030',
      id: -1,
      correctAnswer: 'c',
    };

    this.allQuestions = [];

    for (let i = 0; i < 90; i++) {
      this.allQuestions.push({ ...question, number: i + 1, id: i + 1 });
    }
  }

  findAll(size) {
    return this.allQuestions.slice(0, size).map((question) => {
      const copiedQuestion = Object.assign({}, question);
      delete copiedQuestion.correctAnswer;
      return copiedQuestion;
    });
  }

  findById(id) {
    return this.allQuestions.find((question) => question.id === parseInt(id));
  }
}
