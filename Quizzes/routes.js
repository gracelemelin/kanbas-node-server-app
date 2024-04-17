import * as dao from "./dao.js";

function QuizzesRoutes(app) {

  //Updating quiz settings
  app.post("/api/courses/:cid/quizzes/:qid/settings", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuizSettings(qid, req.body);
    res.json(status);
  });

  //Updating quiz
  app.post("/api/courses/:cid/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  });

  //Getting quiz settings
  app.get("/api/courses/:cid/quizzes/:qid/settings", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.getQuizSettings(qid);
    res.send(quiz);
  });


  //Getting a particular quiz
  app.get("/api/courses/:cid/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.send(quiz);
  });

  //Deleting a quiz
  app.delete("/api/courses/:cid/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.json(status);
  });

  //Creating new quiz
  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const id = new Date().getTime().toString()
    const newQuiz = { ...req.body, course: cid, id: id}
    const nq = await dao.createQuiz(newQuiz);

    const ns = {
      id: id,
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
      dueDate: new Date(2024, 5, 15),
      availableDate: new Date(2024, 6, 10),
      untilDate: new Date( 2025, 6, 31),
    }
  

    const resns = await dao.createQuizSettings(ns);
  res.json(nq);
});

//Getting all quizzes of a particular course
app.get("/api/courses/:cid/quizzes", async (req, res) => {
  const { cid } = req.params;
  const quizzes = await dao.findQuizzesOfCourse(cid)
  res.send(quizzes);
});

//Getting all quizzes
app.get("/api/quizzes", async (req, res) => {
  const quizzes = await dao.findAllQuizzes();
  res.send(quizzes);
});

};
export default QuizzesRoutes;