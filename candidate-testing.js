const input = require('readline-sync');

let candidateName;
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers = [];

// TODO 1.1a: Define candidateName //
candidateName = input.question("Enter your name: ");

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
question = ("Who was the first American woman in space? ");
correctAnswer = "Sally Ride";
candidateAnswer = input.question(`Candidate Name: ${candidateName}\n1) ${question}\nYour Answer: `);

if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  console.log(`Candidate Name: ${candidateName}`);
  console.log(`1) ${question}`);
  console.log(`Your Answer: ${candidateAnswer}`);
  console.log(`Correct Answer: ${correctAnswer}`);
} else {
  console.log(`Candidate Name: ${candidateName}`);
  console.log(`1) ${question}`);
  console.log(`Your Answer: ${candidateAnswer}`);
  console.log(`Correct Answer: ${correctAnswer}`);
}

// TODO 2: modify your quiz app to ask 5 questions //

//  questions = [
//   "Who was the first American woman in space?",
//   "True or false: 5 kilometer == 5000 meters?",
//   "(5 + 3)/2 * 10 = ?",
//   "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
//   "What is the minimum crew size for the ISS?"
// ];

//  correctAnswers = [
//   "Sally Ride",
//   "true",
//   "40",
//   "Trajectory",
//   "3"
// ];

questions = [
  ("Who was the first American woman in space? "),
  ("True or false: 5 kilometer == 5000 meters? "),
  ("(5 + 3)/2 * 10 = ? "),
  ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "),
  ("What is the minimum crew size for the ISS? ")
];

correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // already implemented above
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`\n${i + 2}) ${questions[i]}\nYour Answer: `);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let numCorrect = 0;
  for (let i = 0; i < questions.length; i++) {
    console.log(`\n${i + 2}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("You are correct!\n");
      numCorrect++;
    } else {
      console.log("You are incorrect.\n");
    }
  }

  let grade = (numCorrect / questions.length) * 100;
  return grade;
}

function runProgram() {
  askForName();
  console.log(`\nWelcome, ${candidateName}!\n`);
  askQuestion();
  const quizGrade = gradeQuiz(candidateAnswers);
  console.log(`\nCandidate Name: ${candidateName}`);
  if(quizGrade<=80){
    console.log(`Sorry you have failed the quiz: ${quizGrade}%`);
  } else{
    console.log(`Congratulation you have pass the quiz with: ${quizGrade}%`);
    
  }
}

// Run the program
runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

