// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import packageRoute from './routes/packageRoute.js';
import projectRoutes from './routes/projectRoutes.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express(); 
app.use(cors({
  origin: 'https://unitybuilderslanka.com',
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

app.use("/api/auth", authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/packages', packageRoute); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
