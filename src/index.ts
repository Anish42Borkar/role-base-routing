import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect";
import authRoutes from "./routes/authRoutes";

dotenv.config();
//connect to db
connectDB();

const app = express();

// Middleware
app.use(express.json());
// Routes
app.use("/auth", authRoutes);

// Start
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log("server is running");
});
