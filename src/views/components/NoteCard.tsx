import React from "react";
import { Note } from "../../utils/types";
import dateFormat from "dateformat";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <div className="note-card note-main__card">
      <h2 className="note-card__title ellipsis">{note.title}</h2>
      <p className="note-card__body ellipsis">{note.body}</p>
      <p className="note-card__date ellipsis">
        Last modified:{" "}
        {dateFormat(note.dateWritten, "dddd, mmmm dS, yyyy, h:MM TT")}
      </p>
    </div>
  );
}
