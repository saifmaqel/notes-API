import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

// middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// routes
app.use("/api/notes", notesRoutes);
app.use("/api/products", productsRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at port 5001");
  });
});
