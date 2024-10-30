import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
//connect to db
connectDB();

const app = express();

// Middleware
app.use(express.json());
// Routes
app.use("/api/auth", authRoutes);
app.use(errorHandler);

// Start
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log("server is running");
});
