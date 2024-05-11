import { Request, Response } from "express";
import { Note } from "../../utils/types";
import createDBHandler from "../../utils/createDBHandler";
import express from "express";
const router = express.Router();

const dbHandler = createDBHandler();

router.get("/", (req: Request, res: Response) => {
  try {
    dbHandler.readAllNotes().then((result) => {
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/create", (req: Request, res: Response) => {
  try {
    const newNote: Note = {
      title: req.body.title,
      body: req.body.body || null,
      dateWritten: new Date(),
    };
    dbHandler.createNote(newNote).then(() => {
      console.log(`${newNote.title} added`);
      res.send(`${newNote.title} added`);
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/update/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const note = {
      title: req.body.title,
      body: req.body.body || null,
      dateWritten: new Date(),
    };
    dbHandler.updateNote(id, note).then(() => {
      console.log(`${note.title} updated`);
      res.send(`${note.title} updated`);
    });
  } catch (e) {
    console.log(e);
  }
});

export default router;
