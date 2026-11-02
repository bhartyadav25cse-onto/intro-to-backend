import express from "express";
import userRouter from "./routes/user.route.js";

// Create an express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Routes declaration
app.use("/api/v1/users", userRouter);

export default app;
