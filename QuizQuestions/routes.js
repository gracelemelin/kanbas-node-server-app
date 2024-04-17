import * as dao from "./dao.js";

function QuizQuestions(app) {
    //Getting all questions of a particular quiz
    app.get("/api/courses/:cid/quizzes/:qid/questions", async (req, res) => {
        const { qid } = req.params;
        const quiz = await dao.findQuestionsForAQuiz(qid);
        res.send(quiz);
    });

    //Update a quiz question
    app.put("/api/courses/:cid/quizzes/:qid/questions/:qqid", async (req, res) => {
        const { qqid } = req.params;
        const qqIndex = await dao.updateQuestion(qqid, req.body);
        res.sendStatus(204);
    });

    //Adding a new quiz question
    app.post("/api/courses/:cid/quizzes/:qid/questions", async (req, res) => {
        const { qid } = req.params;
        const newQQ = {
            ...req.body,
            qzid: qid,
            id: new Date().getTime().toString(),
        };
        const qq = await dao.addQuestion(newQQ)
        res.send(newQQ);
    });

    //Deleting a quiz question
    app.delete("/api/courses/:cid/quizzes/:qid/questions/:qqid", async (req, res) => {
        const { qqid } = req.params;
        const status = await dao.deleteQuestion(qqid);
        res.json(status);
    });


} export default QuizQuestions;