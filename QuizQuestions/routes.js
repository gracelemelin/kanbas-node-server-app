import db from "../Database/index.js";

function QuizQuestions(app) {
    //Getting all questions of a particular quiz
    app.get("/api/courses/:cid/quizzes/:qid/questions", (req, res) => {
        const { qid } = req.params;
        const quiz = db.QuizQuestions.filter((qq) => qq.qzid === qid);
        res.send(quiz);
    });

    //Update a quiz question
    app.put("/api/courses/:cid/quizzes/:qid/questions/:qqid", (req, res) => {
        const { qqid } = req.params;
        const qqIndex = db.QuizQuestions.findIndex((qq) => qq.qzid === qqid);
        db.QuizQuestions[qqIndex] = {
            ...db.QuizQuestions[qqIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    //Adding a new quiz question
    app.post("/api/courses/:cid/quizzes/:qid/questions", (req, res) => {
        const { qid } = req.params;
        const newQQ = {
            ...req.body,
            qzid: qid,
            _id: new Date().getTime().toString(),
        };
        db.QuizQuestions.push(newQQ);
        res.send(newQQ);
    });

    //Deleting a quiz question
    app.delete("/api/courses/:cid/quizzes/:qid/questions/:qqid", (req, res) => {
        const { qqid } = req.params;
        db.QuizQuestions = db.QuizQuestions.filter((qq) => qq._id !== qqid);
        res.sendStatus(200);
    });


} export default QuizQuestions;