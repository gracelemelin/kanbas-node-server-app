import model from "./model.js";

export const addQuestion = (question) => model.create(question);
export const findQuestionsForAQuiz = (qid) => model.find({ qzid: qid });
export const updateQuestion = (qid, question) => model.updateOne({id: qid}, {$set: question})
export const deleteQuestion = (qid) => model.deleteOne({ id: qid });