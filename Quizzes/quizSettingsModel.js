import mongoose from "mongoose";
import schema from "./quizSettingsSchema.js";
const quizSettingsModel = mongoose.model("quizSettingsModel", schema);
export default quizSettingsModel;