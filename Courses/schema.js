import mongoose from "mongoose";
const schema = new mongoose.Schema({
    _id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
},
    { collection: "courses" });
export default schema;