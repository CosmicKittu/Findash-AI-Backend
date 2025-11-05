import express from 'express'
import connectDB from './config/db.js'
import userRoutes from "./routes/userRoutes.js";
const app = express()
const port = 3000

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
