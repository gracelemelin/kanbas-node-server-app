import mongoose from "mongoose";
const quizQuestionSchema = new mongoose.Schema({
    id: String,
    qzid: String,
    type: String,
    question: String,
    points: {type: Number, default: 0},
    title: {type: String, default: "New Question"},
  },
  { collection: "quizQuestions" , strict: false});
export default quizQuestionSchema;