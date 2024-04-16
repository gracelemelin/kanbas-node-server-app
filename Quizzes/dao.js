import model from "./model.js";
import quizSettingsModel from "./quizSettingsModel.js";

export const createQuiz = (quiz) => model.create(quiz);
export const findAllQuizzes = () => model.find();
export const findQuizzesOfCourse = (courseId) => model.find({ course: courseId });
export const findQuizById = (quizId) => model.findById({ _id: quizId });
export const getQuizSettings = (quizId) => quizSettingsModel.find({id: quizId});
export const updateQuizSettings = (quizId, settings) => model.updateOne({id: quizId}, {$set: settings})
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });