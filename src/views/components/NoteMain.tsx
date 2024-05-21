import React, { useEffect, useState } from "react";
import { Note } from "../../utils/types";
import NoteCard from "./NoteCard";
import UtilityBar from "./UtilityBar";

export default function NoteMain({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
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
      <UtilityBar children={utilityBarChildren} />
      <div className="note-main main">
        {/* reverse so newer ones appear on top */}
        {notes.reverse().map((note, index) => {
          return <NoteCard key={index as React.Key} note={note} />;
        })}
      </div>
    </>
  );
}
