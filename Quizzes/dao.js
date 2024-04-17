import model from "./model.js";
import quizSettingsModel from "./quizSettingsModel.js";

export const createQuiz = (quiz) => model.create(quiz);
export const createQuizSettings = (qs) => quizSettingsModel.create(qs);
export const findAllQuizzes = () => model.find();
export const findQuizzesOfCourse = (courseId) => model.find({ course: courseId });
export const updateQuiz = (quizId, quiz) => model.updateOne({id: quizId}, {$set: quiz})
export const findQuizById = (quizId) => model.findOne({ id: quizId });
export const getQuizSettings = (quizId) => quizSettingsModel.findOne({id: quizId});
export const updateQuizSettings = (quizId, settings) => quizSettingsModel.updateOne({id: quizId}, {$set: settings})
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });