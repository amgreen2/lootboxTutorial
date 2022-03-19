export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What turbo engine comes in the Toyota JZX90?",
    image:
      "https://bafybeic7plidziqh4ozchzsvw6fld7z3rpqc552n32qccjcfhatmppea7u.ipfs.dweb.link/1",
    answers: [
      "1G-GTE",
      "SR20DET",
      "ej25",
      "1JZ-GTE",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText: "How many cylinders does the 1JZ-GTE engine have?",
    image: 
    "https://bafybeic7plidziqh4ozchzsvw6fld7z3rpqc552n32qccjcfhatmppea7u.ipfs.dweb.link/0",
    answers: ["4", "6", "8", "12"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What is the chassis code of the Nissan Cefiro pictured?",
    image:
    "https://bafybeic7plidziqh4ozchzsvw6fld7z3rpqc552n32qccjcfhatmppea7u.ipfs.dweb.link/2",
    answers: ["MA70", "S13", "A32", "C33"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "What was the special edition model for the A32?",
      image:
      "https://bafybeic7plidziqh4ozchzsvw6fld7z3rpqc552n32qccjcfhatmppea7u.ipfs.dweb.link/3",
      answers: ["Autech", "Nismo", "GR", "Sport"],
    correctAnswerIndex: 0,
  },
  {
    questionText: "What is the parent company of Lexus?",
    image:
    "https://bafybeic7plidziqh4ozchzsvw6fld7z3rpqc552n32qccjcfhatmppea7u.ipfs.dweb.link/4",
    answers: ["BMW", "Toyota", "Honda", "Nissan"],
    correctAnswerIndex: 1,
  },
];

export default quizQuestions;
