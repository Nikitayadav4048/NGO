import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import connectDB from "./src/db/connection.js";
import authRouter from "./src/routes/Auth/auth.js";
import galleryRouter from "./src/routes/Gallery/gallery.js";
import donationRouter from "./src/routes/Donation/donation.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth", authRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/donation", donationRouter);




connectDB();

app.listen(5000, () => console.log("✅ Server running on port 5000"));