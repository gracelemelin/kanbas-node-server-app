import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: String,
    description: String,
    course: String,
    lessons: [{
        name: String,
        description: String,
        module: String,
    }]
},
    { collection: "modules" });
export default schema;