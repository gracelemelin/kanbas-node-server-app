import db from "../Database/index.js";

function QuizzesRoutes(app) {

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
        const newQuiz = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
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