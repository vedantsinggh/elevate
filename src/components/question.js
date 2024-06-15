class Question {
    constructor(questionText, questionImage, correctAnswer, isInteger, hardnessLevel, idleTime) {
      this.questionText = questionText;
      this.questionImage = questionImage;
      this.correctAnswer = correctAnswer;
      this.isInteger = isInteger;
      this.hardnessLevel = hardnessLevel;
      this.idleTime = idleTime;
    }
  }
  
  export default Question;
  