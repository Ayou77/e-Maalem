import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import taskRoute from "./routes/task.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
mongoose.set('strictQuery', true)

app.use(cors()); // Enable CORSN

const PORT = process.env.PORT

const connect = async() => {   
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")  
  } catch (error) {
    console.log(error);
  }
};



app.use(express.json());
app.use(cookieParser);


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/reviews", reviewRoute);


app.listen(PORT, ()=>{
    connect();
    console.log("Backend server is running on port " + PORT);
})

