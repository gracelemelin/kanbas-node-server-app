import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    id: String,
    title: String,
    published: Boolean,
  },
  { collection: "quizzes" });
export default quizSchema;