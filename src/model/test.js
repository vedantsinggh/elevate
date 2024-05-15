class Question {
    constructor(questionText, correctAnswer, difficultyLevel, question, isInteger) {
      this.questionText = questionText;
      this.correctAnswer = correctAnswer;
      this.difficultyLevel = difficultyLevel;
      this.question = question;
      this.isInteger = isInteger;
    }
  }
  
  class Test {
    constructor(name, syllabus, dateTimeOfTest, physicsQuestions, chemistryQuestions, mathsQuestions) {
      this.name = name;
      this.syllabus = syllabus;
      this.dateTimeOfTest = dateTimeOfTest;
      this.physicsQuestions = physicsQuestions;
      this.chemistryQuestions = chemistryQuestions;
      this.mathsQuestions = mathsQuestions;
    }
  }

  export {Test, Question}