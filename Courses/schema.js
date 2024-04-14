import mongoose from "mongoose";
const schema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    image: String,
},
    { collection: "courses" });
export default schema;