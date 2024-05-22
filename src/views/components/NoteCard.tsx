import React from "react";
import { Note } from "../../utils/types";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

export default function NoteCard({ note }: { note: Note }) {
  const navigate = useNavigate();

  return (
    <div
      className="note-card note-main__card front shadow"
      onClick={() => navigate("/note/view", { state: { noteToEdit: note } })}
    >
      <h2 className="note-card__title">{note.title || "Untitled"}</h2>
      <p className="note-card__body ellipsis">{note.body}</p>
      <p className="note-card__date ellipsis">
        Last modified:{" "}
        {dateFormat(note.dateWritten, "dddd, mmmm dS, yyyy, h:MM TT")}
      </p>
    </div>
  );
}
