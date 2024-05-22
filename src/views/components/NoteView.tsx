import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Note } from "../../utils/types";
import UtilityBar from "./UtilityBar";
import { createContext } from "react";

export const NoteContext = createContext({} as { selectedNote: Note });

export default function NoteView({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
  // title and body initialized to prevent "uncontrolled input" warning
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    body: "",
  } as Note);
  const { noteToEdit }: { noteToEdit: Note } = useLocation().state;

  useEffect(() => {
    setSelectedNote(noteToEdit);
  }, []);

  return (
    <>
      <NoteContext.Provider value={{ selectedNote }}>
        <UtilityBar children={utilityBarChildren} />
      </NoteContext.Provider>

      <div className="note-view main front">
        <input
          className="note-view__title note-input shadow"
          type="text"
          name="title"
          id="title"
          placeholder="Enter title..."
          onChange={(e) =>
            setSelectedNote({ ...selectedNote, title: e.target.value })
          }
          value={selectedNote.title}
        />
        <textarea
          className="note-view__body note-input shadow"
          name="body"
          id="body"
          placeholder="Remember, remember..."
          onChange={(e) =>
            setSelectedNote({ ...selectedNote, body: e.target.value })
          }
          value={selectedNote.body}
        ></textarea>
      </div>
    </>
  );
}
