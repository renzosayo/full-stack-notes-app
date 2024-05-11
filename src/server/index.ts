import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Note } from "../utils/types";

const app = express();
const PORT = 3000;
const DB_NAME = "samplenotes";
const CONNECTION_STRING = `mongodb://localhost:27017/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(CONNECTION_STRING);

const notes = require("./schemas/Notes");

async function readAllNotes() {
  return await notes.find();
}

async function createNote(note: Note) {
  return await notes.create(note);
}

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the notes api");
});

app.get("/notes", (req: Request, res: Response) => {
  try {
    readAllNotes().then((result: Note[]) => {
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/notes/create", (req: Request, res: Response) => {
  try {
    const newNote: Note = {
      title: req.body.title,
      body: req.body.body || null,
      dateWritten: req.body.dateWritten || null,
    };
    createNote(newNote).then(() => {
      res.send(`${newNote.title} added`);
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/notes", (req: Request, res: Response) => {
  res.json({ note: "notes" });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
