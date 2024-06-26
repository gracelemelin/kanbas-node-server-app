import express from 'express';
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import mongoose from 'mongoose';
import UserRoutes from './Users/routes.js';
import cors from "cors";
import session from "express-session";
import QuizQuestions from './QuizQuestions/routes.js';
import "dotenv/config";
import QuizzesRoutes from './Quizzes/routes.js';

const CONNECTIONSTRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/kanbas'

mongoose.connect(CONNECTIONSTRING, {dbName: 'kanbas'});

const app = express()
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
QuizzesRoutes(app);
QuizQuestions(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)