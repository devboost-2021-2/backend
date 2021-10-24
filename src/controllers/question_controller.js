class QuestionController {
  static index(req, res) {
    const alternatives = [
      { id: "a", option: "Texto da alternativa A" },
      { id: "b", option: "Texto da alternativa B" },
      { id: "c", option: "Texto da alternativa C" },
      { id: "d", option: "Texto da alternativa D" },
    ];

    const question = {
      alternatives: alternatives,
      number: -1,
      statement: "Lorem ipsum",
      exam: "FUVEST 2030",
    };

    const allQuestions = [];

    for (let i = 0; i < 90; i++) {
      allQuestions.push({ ...question, number: i + 1 });
    }

    return res.status(200).json({ allQuestions });
  }
}

export default QuestionController;
