import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import candidatsRoutes from "./routes/candidats.js";
import cookieParser from "cookie-parser";
import cors from "cors"; 

const app = express();
dotenv.config();

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/Projet_CV', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connecté à MongoDB");
}).catch(err => {
    console.error("Erreur de connexion à MongoDB:", err);
});

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use(cors());
app.use("/api/candidats", candidatsRoutes);


//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  console.log("Connected to Server");
});
