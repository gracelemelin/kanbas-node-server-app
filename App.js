import express from 'express';
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import mongoose from 'mongoose';
import UserRoutes from './Users/routes.js';
import QuizzesRoutes from './Quizzes/routes.js';
import cors from "cors";
mongoose.connect("mongodb://localhost:27017/kanbas");
const app = express()
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
QuizzesRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)