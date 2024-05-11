import { Note } from "./types";

import notes from "../server/schemas/Notes";

export default function createDBHandler() {
  async function readAllNotes() {
    return await notes.find();
  }

  async function createNote(note: Note) {
    return await notes.create(note);
  }

  async function updateNote(id: string, note: Note) {
    return await notes.updateOne({ _id: id }, note);
  }

  async function deleteNote(id: string) {
    return await notes.deleteOne({ _id: id });
  }

  return {
    readAllNotes,
    createNote,
    updateNote,
    deleteNote,
  };
}
