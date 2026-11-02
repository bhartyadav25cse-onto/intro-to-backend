import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.routes.js";

// Create an express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
export default app;
