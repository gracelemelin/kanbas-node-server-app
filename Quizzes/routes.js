import db from "../Database/index.js";

function QuizzesRoutes(app) {

  //Getting quiz settings
  app.get("/api/courses/:cid/quizzes/:qid/settings", (req, res) => {
    const { qid } = req.params;
    const quiz = db.quizSettings.filter((q) => q._id === qid);
    res.send(quiz);
  });


  //Getting a particular quiz
  app.get("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quiz = db.quizzes.filter((q) => q._id === qid);
    res.send(quiz);
  });

  //Deleting a quiz
  app.delete("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    db.quizzes = db.quizzes
      .filter((q) => q._id !== qid);
    res.sendStatus(204);
  });

  //Creating new quiz
  app.post("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizId = new Date().getTime().toString()
    const newQuiz = {
      ...req.body,
      course: cid,
      _id: quizId,
    };
    const newQuizSettings = {
      _id: quizId,
      quizType: "Graded Quiz",
      points: 100,
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      showCorrectAnswers: true,
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "2024-05-15",
      availableDate: "2024-04-10",
      untilDate: "2024-05-31",
    }
    db.quizSettings.push(newQuizSettings);
    db.quizzes.push(newQuiz);
    res.send(newQuiz);
  });

  //Getting all quizzes of a particular course
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = db.quizzes
      .filter((q) => q.course === cid);
    res.send(quizzes);
  });

  //Getting all quizzes
  app.get("/api/quizzes", (req, res) => {
    const quizzes = db.quizzes;
    res.send(quizzes);
  });

};
export default QuizzesRoutes;