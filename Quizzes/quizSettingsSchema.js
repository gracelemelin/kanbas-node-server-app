import mongoose from "mongoose";
const quizSettingsSchema = new mongoose.Schema(
  {
    id: String,
    description: String,
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",},
    points: {type: Number, default: 0},
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Projects"],
      default: "Quizzes"},
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit: {
      time: {type: Number, default: 20},
      exists: {type: Boolean, default: true},
    },
    multipleAttempts: {type: Boolean, default: false},
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: {type: Boolean, default: true},
    webcamRequired: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
  },
  { collection: "quizSettings" });
export default quizSettingsSchema;