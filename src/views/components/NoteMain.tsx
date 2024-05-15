import React, { useEffect, useState } from "react";
import { Note } from "../../utils/types";
import NoteCard from "./NoteCard";

export default function NoteMain() {
  const [notes, setNotes] = useState<Note[]>([]);
  const URI = "http://localhost:3000/notes";

  useEffect(() => {
    fetch(URI)
      .then((res: Response) => {
        return res.json();
      })
      .then((data: Note[]) => {
        console.log(data);
        setNotes(data);
      });
  }, []);

  return (
    <div className="main">
      {notes.map((note, index) => {
        return <NoteCard key={index as React.Key} note={note} />;
      })}
    </div>
  );
}
