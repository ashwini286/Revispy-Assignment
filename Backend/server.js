import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/router.js';
import emailVerificationRoutes from "./routes/emailRoute.js";
import categoryRoutes from './routes/categoriesRoute.js';
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Define the port
const port = process.env.PORT || 8000;
const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/verify', emailVerificationRoutes);
app.use('/categories', categoryRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
