import mongoose from "mongoose";
const quizSettingsSchema = new mongoose.Schema({
    id: String,
    title: String,
    published: Boolean,
  },
  { collection: "quizSettings" });
export default quizSettingsSchema;