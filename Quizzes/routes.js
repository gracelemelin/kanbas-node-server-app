import db from "../Database/index.js";
import * as dao from "./dao.js";

function QuizzesRoutes(app) {

  //Updating quiz settings
  app.post("/api/courses/:cid/quizzes/:qid/settings", (req, res) => {
    const { qid } = req.params;
    const status = dao.updateQuizSettings(qid, req.body);
    res.json(status);
  });

  //Getting quiz settings
  app.get("/api/courses/:cid/quizzes/:qid/settings", (req, res) => {
    const { qid } = req.params;
    const quiz = dao.getQuizSettings(qid);
    res.send(quiz);
  });


  //Getting a particular quiz
  app.get("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quiz = dao.findQuizById(qid);
    res.send(quiz);
  });

  //Deleting a quiz
  app.delete("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const status = dao.deleteQuiz(qid);
    res.json(status);
  });

  //Creating new quiz
  app.post("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const newQuiz = {...req.body, id : cid}
    const nq =  dao.createQuiz(newQuiz);
    res.json(nq);
  });

  //Getting all quizzes of a particular course
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = dao.findQuizzesOfCourse(cid)
    res.send(quizzes);
  });

  //Getting all quizzes
  app.get("/api/quizzes", (req, res) => {
    const quizzes = dao.findAllQuizzes();
    res.send(quizzes);
  });

};
export default QuizzesRoutes;