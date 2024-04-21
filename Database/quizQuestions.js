export default [
    {
      "id": "1",
      "qzid": "Q101",
      "type": "multipleChoice",
      "question": "What is React?",
      "points": 1,
      "title": "Question 1",
      "answers": [
        { "text": "A JavaScript framework", "isCorrect": false },
        { "text": "A JavaScript library for building user interfaces", "isCorrect": true },
        { "text": "A programming language", "isCorrect": false },
        { "text": "A database management system", "isCorrect": false }
      ],
      "userAnswers": [{"userId" : "121", "answer" : 0},{"userId" : "123", "answer" : 1}, {"userId" : "125", "answer" : 3}]
    },
    {
      "id": "2",
      "qzid": "Q101",
      "type": "trueFalse",
      "question": "JSX is a syntax extension for JavaScript used with React.",
      "points": 2,
      "title": "Question 2",
      "answer": true,
      "userAnswers": [{"userId" : "121", "answer" : true},{"userId" : "123", "answer" : true}, {"userId" : "125", "answer" : false}]
    },
    {
      "id": "3",
      "qzid": "Q101",
      "type": "fillInBlank",
      "question": "React is a _____ library for building user interfaces, developed by Facebook.",
      "points": 5,
      "title": "Question 3",
      "answers": ["JavaScript"],
      "userAnswers": [{"userId" : "121", "answer" : "JS"},{"userId" : "123", "answer" : "JavaScript"}, {"userId" : "125", "answer" : "coffee"}]
    },
    {
      "id": "4",
      "qzid": "Q101",
      "type": "multipleChoice",
      "question": "What are the key features of React?",
      "points": 4,
      "title": "Question 4",
      "answers": [
        { "text": "Virtual DOM", "isCorrect": true },
        { "text": "One-way data flow", "isCorrect": false },
        { "text": "Two-way data binding", "isCorrect": false },
        { "text": "SQL database integration", "isCorrect": false }
      ],
      "userAnswers": [{"userId" : "121", "answer" : 0},{"userId" : "123", "answer" : 1}, {"userId" : "125", "answer" : 3}]
    },
    {
      "id": "5",
      "qzid": "Q102",
      "type": "trueFalse",
      "question": "Components in React are reusable pieces of code that describe how a part of the user interface should look.",
      "points": 3,
      "title": "Question 5",
      "answer": false,
      "userAnswers": [{"userId" : "121", "answer" : false},{"userId" : "123", "answer" : false}, {"userId" : "125", "answer" : true}]
    },
    {
      "id": "6",
      "qzid": "Q102",
      "type": "fillInBlank",
      "question": "_____ is a built-in object used to store data that affects a component's behavior and appearance in React.",
      "points": 1,
      "title": "Question 6",
      "answers": ["State"],
      "userAnswers": [{"userId" : "121", "answer" : "State"},{"userId" : "123", "answer" : "JavaScript"}, {"userId" : "125", "answer" : "Michigan"}]
    },
    {
      "id": "7",
      "qzid": "Q102",
      "type": "trueFalse",
      "question": "Props in React are read-only and passed from child to parent components.",
      "points": 3,
      "title": "Question 7",
      "answer": false,
      "userAnswers": [{"userId" : "121", "answer" : false},{"userId" : "123", "answer" : false}, {"userId" : "125", "answer" : false}]
    }

  ];