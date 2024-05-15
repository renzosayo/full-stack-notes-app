import React from "react";
import { Note } from "../../utils/types";
import dateFormat from "dateformat";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <div className="note-card">
      <h2 className="note-card__title">{note.title}</h2>
      <p className="note-card__content">{note.body}</p>
      <p className="note-card__date">
        Last modified:{" "}
        {dateFormat(note.dateWritten, "dddd, mmmm dS, yyyy, h:MM TT")}
      </p>
    </div>
  );
}
