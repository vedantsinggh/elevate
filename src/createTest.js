import { addDoc, getFirestore, collection, updateDoc, arrayUnion} from "@firebase/firestore";
import { app } from 'firebase.js';
import {Question, Test} from "model/test"

async function createTest (){
    const firestore = getFirestore(app); 


const physicsQuestions = [
    new Question("Solve given Circuit in physics", "A", "Easy", "https://app-content.cdn.examgoal.net/fly/1250/image/1l0wo5lvh/e4dedb79-50ac-4e93-83b4-dcb2bb1ca4ea/29c851e0-a6dd-11ec-927d-c55e47b0758b/file-1l0wo5lvi.png?format=png", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Solve given Circuit in physics", "A", "Easy", "https://app-content.cdn.examgoal.net/fly/1250/image/1l0wo5lvh/e4dedb79-50ac-4e93-83b4-dcb2bb1ca4ea/29c851e0-a6dd-11ec-927d-c55e47b0758b/file-1l0wo5lvi.png?format=png", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Solve given Circuit in physics", "A", "Easy", "https://app-content.cdn.examgoal.net/fly/1250/image/1l0wo5lvh/e4dedb79-50ac-4e93-83b4-dcb2bb1ca4ea/29c851e0-a6dd-11ec-927d-c55e47b0758b/file-1l0wo5lvi.png?format=png", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
    new Question("Answer the question above", "A", "Difficult", "https://qph.cf2.quoracdn.net/main-qimg-176cebb96d082a755f1c797fa83bf6af-pjlq", false),
];

const chemistryQuestions = [
    new Question("Solve given Circuit in chemistry", "A", "Easy", "https://app-content.cdn.examgoal.net/fly/1250/image/1l0wo5lvh/e4dedb79-50ac-4e93-83b4-dcb2bb1ca4ea/29c851e0-a6dd-11ec-927d-c55e47b0758b/file-1l0wo5lvi.png?format=png", false),
];

const mathsQuestions = [
    new Question("Solve given Circuit in maths", "A", "Easy", "https://app-content.cdn.examgoal.net/fly/1250/image/1l0wo5lvh/e4dedb79-50ac-4e93-83b4-dcb2bb1ca4ea/29c851e0-a6dd-11ec-927d-c55e47b0758b/file-1l0wo5lvi.png?format=png", false),
];


// Create a new test document
const testDocRef = await addDoc(collection(firestore, "tests"), {
    name: "JEE Mock Test",
    syllabus: "Physics, Chemistry, Maths",
    dateTimeOfTest: new Date("2024-05-20T10:00:00"),
  });
  
  // Add physics questions and store their document IDs
  var physicsQuestionIds = [];
  physicsQuestions.forEach(async (question) => {
    const docRef = await addDoc(collection(firestore, "tests", testDocRef.id, "physicsQuestions"), {
      questionText: question.questionText,
      correctAnswer: question.correctAnswer,
      difficultyLevel: question.difficultyLevel,
      question: question.question,
      isInteger: question.isInteger
    });
    physicsQuestionIds.push(docRef.id);
  });
  
  // Add chemistry questions and store their document IDs
  var chemistryQuestionIds = [];
  chemistryQuestions.forEach(async (question) => {
    const docRef = await addDoc(collection(firestore, "tests", testDocRef.id, "chemistryQuestions"), {
      questionText: question.questionText,
      correctAnswer: question.correctAnswer,
      difficultyLevel: question.difficultyLevel,
      question: question.question,
      isInteger: question.isInteger
    });
    chemistryQuestionIds.push(docRef.id);
  });
  
  // Add maths questions and store their document IDs
  var mathsQuestionIds = [];
  mathsQuestions.forEach(async (question) => {
    const docRef = await addDoc(collection(firestore, "tests", testDocRef.id, "mathsQuestions"), {
      questionText: question.questionText,
      correctAnswer: question.correctAnswer,
      difficultyLevel: question.difficultyLevel,
      question: question.question,
      isInteger: question.isInteger
    });
    mathsQuestionIds.push(docRef.id);
  });  
}

export default createTest;