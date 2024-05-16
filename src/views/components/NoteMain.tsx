import React, { useEffect, useState } from "react";
import { Note } from "../../utils/types";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";

export default function NoteMain() {
  const [notes, setNotes] = useState<Note[]>([]);
  const URI = "http://localhost:3000/notes";

  useEffect(() => {
    fetch(URI)
      .then((res: Response) => {
        return res.json();
      })
      .then((data: Note[]) => {
        setNotes(data);
      });
  }, [notes]);

  return (
    <>
      <div className="note-main main">
        {notes.map((note, index) => {
          return <NoteCard key={index as React.Key} note={note} />;
        })}
      </div>
    </>
  );
}
