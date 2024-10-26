import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/router.js';
import emailVerificationRoutes from "./routes/emailVerification.js"
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Define the port
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Revispy  Assignment </h1>");
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/verify', emailVerificationRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
