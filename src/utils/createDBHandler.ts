import { Note } from "./types";

import notes from "../server/schemas/Notes";

export default function createDBHandler() {
  async function readAllNotes() {
    return await notes.find();
  }

  async function createNote(note: Note) {
    return await notes.create(note);
  }

  return {
    readAllNotes,
    createNote,
  };
}
