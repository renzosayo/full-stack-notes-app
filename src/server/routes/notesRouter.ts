import { Request, Response } from "express";
import { Note } from "../../utils/types";
import createDBHandler from "../../utils/createDBHandler";
import express from "express";
const router = express.Router();

const dbHandler = createDBHandler();

router
  .get("/", (req: Request, res: Response) => {
    try {
      dbHandler.readAllNotes().then((result) => {
        return res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  })
  .post("/", (req: Request, res: Response) => {
    try {
      const newNote: Note = {
        _id: null,
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
  })
  .put("/", (req: Request, res: Response) => {
    try {
      console.log("update");
      const id = req.body._id;
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
  })
  .delete("/", (req: Request, res: Response) => {
    try {
      const id: string = req.body._id;
      dbHandler.deleteNote(id).then(() => {
        console.log(`${id} deleted`);
        res.send(`${id} deleted`);
      });
    } catch (e) {
      console.log(e);
    }
  });

export default router;
