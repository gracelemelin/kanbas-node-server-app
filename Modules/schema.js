import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id: String,
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