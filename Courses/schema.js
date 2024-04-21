import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
},
    { collection: "courses" });
export default schema;