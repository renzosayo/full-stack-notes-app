import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import notesRouter from "./routes/notesRouter";
import cors from "cors";

const app = express();
const PORT = 3000;
const DB_NAME = "samplenotes";
const CONNECTION_STRING = `mongodb://localhost:27017/${DB_NAME}`;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/notes", notesRouter);

mongoose.connect(CONNECTION_STRING);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the notes api");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
