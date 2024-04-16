import mongoose from "mongoose";
const quizQuestionSchema = new mongoose.Schema({
    id: String,
    qzid: String,
    type: String,
    question: String,
  },
  { collection: "quizQuestions" , strict: false});
export default quizQuestionSchema;